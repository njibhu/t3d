/*
Copyright © Tyria3DLibrary project contributors

This file is part of the Tyria 3D Library.

Tyria 3D Library is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Tyria 3D Library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the Tyria 3D Library. If not, see <http://www.gnu.org/licenses/>.
*/
import { ArchiveParser, ParsingUtils } from "t3d-parser";
import PersistantStore from "./PersistantStore";
import DataReader from "./DataReader";
import MapFileList from "../MapFileList";
import * as FileTypes from "./FileTypes";

interface LocalReaderSettings {
  noIndexedDB?: boolean; // Do not use indexedDB (persistant storage, default is true)
  workerPath: string; // workerPath: the path to the t3dtools worker script file.
  workersNb: number; // amount of threads spawned for decompression.
}

interface FileItem {
  mftId: number;
  baseIdList: number[];
  size: number;
  crc: number;
  fileType: string;
}

interface LocalFile {
  buffer?: ArrayBuffer;
  dxtType?: number;
  imageWidth?: number;
  imageHeight?: number;
}

/**
 *   "Meta" informations to deal with files in the archive.
 */
interface FileMetaData {
  offset: number;
  size: number;
  compressed: number;
  crc: number;
}

/**
 * A statefull class that handles reading and inflating data from a local GW2 dat file.
 */
class LocalReader {
  private dataReader: DataReader;
  private persistantStore?: PersistantStore;
  private file?: File;
  private indexTable: Array<number>;
  private fileMetaTable: Array<{ offset: number; size: number; compressed: number; crc: number }>;
  private persistantData: Array<{
    baseId: number;
    size: number;
    crc: number;
    fileType: string;
  }> = [];
  _fileTypeCache: any;

  constructor(public settings: LocalReaderSettings) {
    this.dataReader = new DataReader(settings);
    this.file = undefined;
    this.indexTable = [];
    this.fileMetaTable = [];

    if (settings.noIndexedDB !== false) {
      this.persistantStore = new PersistantStore();
    }
  }

  /**
   *   Asynchronously loads the archive by parsing its file index and header.
   */
  async openArchive(file: File): Promise<void> {
    const { metaTable, indexTable } = await ArchiveParser.readArchive(file);
    this.fileMetaTable = metaTable;
    this.indexTable = indexTable;
    this.file = file;
  }

  /**
   *   Gets MFT index by baseId
   */
  getFileIndex(baseId: number): number /* MFT index */ {
    return this.indexTable[baseId];
  }

  /**
   *   Returns the metadata of a file stored in the archive
   */
  getFileMeta(mftId: number): FileMetaData {
    return this.fileMetaTable[mftId];
  }

  /**
   *   Fetch a file and uncompress it if needed / required.
   */
  async readFile(
    mftId: number,
    isImage?: boolean,
    raw?: boolean,
    fileLength?: number,
    extractLength?: number
  ): Promise<LocalFile> {
    if (!this.file) throw new Error("No file loaded");

    //let buffer, dxtType, imageWidth, imageHeight;
    const meta = this.getFileMeta(mftId);
    if (!meta) throw new Error("Unexistant file");

    // Slice up the data
    const buffer = await ParsingUtils.sliceFile(this.file, meta.offset, fileLength || meta.size);

    // If needed we decompress, if not we keep raw
    if (raw || meta.compressed) {
      let data: LocalFile = {
        buffer: undefined,
        dxtType: undefined,
        imageWidth: undefined,
        imageHeight: undefined,
      };
      await this.dataReader
        .inflate(buffer, buffer.byteLength, mftId, isImage, extractLength || 0)
        .then((result) => {
          data = result;
        })
        .catch(() => {
          data = {
            buffer: undefined,
            dxtType: undefined,
            imageWidth: undefined,
            imageHeight: undefined,
          };
        });
      return data;
    } else return { buffer };
  }

  /**
   *   Scans asynchronously the types of all the files listed in the archive.
   *   Uses persistant store to cache and speed up a rescan.
   */
  async readFileList(
    // This is a way for platforms not supporting indexDB to provide their own persistant storage.
    oldFileList?: Array<{ baseId: number; size: number; crc: number; fileType: string }>
  ): Promise<Array<FileItem>> {
    if (!this.file) throw new Error("No file loaded");
    const self = this;

    let persistantList = oldFileList || [];
    let persistantId: number | undefined;

    // Load previously saved data
    if (this.persistantStore) {
      const lastListing = await this.persistantStore.getLastListing(this.file.name);
      persistantList = lastListing.array;
      // If the last scan was not completed then we will just update it..
      if (!lastListing.complete) {
        persistantId = lastListing.key;
      }
    }

    // Create a list of all the baseIds we need to inspect
    const iterateList = Object.keys(self.indexTable).map((i) => Number(i));
    for (const index in persistantList) {
      if (!(index in self.indexTable)) iterateList.push(index as any);
    }

    // Spawn the decompression tasks
    const taskArray: Promise<any>[] = [];
    for (let i = 0; i < 1; i++) {
      taskArray[i] = Promise.resolve({ task: i });
    }

    // Helps us to know when we need to update the persistant store
    let persistantNeedsUpdate = false;

    // Iterate through the array
    for (const index in iterateList) {
      const baseId = iterateList[index];

      // First use a synchronous function to know if we need to scan the file
      const result = this._needsScan(baseId, persistantList);
      if (result.scan === true) {
        const taskId = (await Promise.race(taskArray)).task;
        taskArray[taskId] = this._readFileType(baseId).then((scanResult) => {
          // Put the result into our persistant storage
          persistantList[baseId] = {
            baseId: baseId,
            size: scanResult!.size,
            crc: scanResult!.crc,
            fileType: scanResult!.fileType,
          };
          return { task: taskId };
        });
      }
      if (result.change === "removed") {
        // Update the persistant storage
        delete persistantList[baseId];
      }

      // Handle persistant storage update
      if (result.change !== "none") persistantNeedsUpdate = true;

      // Tasks to do only every %
      if ((index as unknown as number) % Math.floor(iterateList.length / 100) === 0) {
        // Print progress
        T3D.Logger.log(
          T3D.Logger.TYPE_PROGRESS,
          "Finding types",
          (index as unknown as number) / Math.floor(iterateList.length / 100)
        );

        // Update the persistant storage if needed
        if (self.persistantStore && persistantNeedsUpdate) {
          persistantNeedsUpdate = false;
          self.persistantStore
            .putListing(persistantId, persistantList, self.file!.name, false)
            .then((res) => (persistantId = res));
        }
      }
    }

    await Promise.all(taskArray).then(() => {
      // Finally update the listing as complete
      if (self.persistantStore) {
        self.persistantStore.putListing(persistantId, persistantList, self.file!.name, true);
      }
    });
    this.persistantData = persistantList;
    return this.getFileList();
  }

  /**
   * Cheap version of the readFileList which will only scan files registered in the mapFileList
   * This helps us being sure that we only return files that contain a mapc chunk when using
   * the getMapList function
   */
  async readMapList(): Promise<void> {
    const fileList = MapFileList.maps.reduce((maps: any[], category) => {
      return maps.concat(category.maps.map((entry) => entry.fileName));
    }, []);
    const temporaryStore = [];

    for (const fileName of fileList) {
      const baseId = fileName.split(".data")[0];
      if (this.indexTable[baseId]) {
        const scanResult = await this._readFileType(baseId);
        temporaryStore[baseId] = {
          baseId: Number(baseId),
          size: scanResult!.size,
          crc: scanResult!.crc,
          fileType: scanResult!.fileType,
        };
      }
    }

    // Fill the store without saving it to disk
    this.persistantData = temporaryStore;
  }

  /**
   *   Returns a list of all the maps with their name and category.
   *   Uncategorized maps are available only if readFileList have been used before.
   */
  async getMapList(): Promise<Array<{ name: string; category: string; baseId: number }>> {
    const self = this;
    const mapArray = [];
    // If the archive hasn't been completely scanned we do a partial scan for the map files.
    // It should be fast
    if (!this.persistantData) {
      await this.readMapList();
    }

    // Filter the maps out of all our files
    const reversedIndex = this.getReverseIndex();
    const maps = this.persistantData
      .filter((file) => file.fileType === "PF_mapc")
      .filter((id) => id.baseId === reversedIndex[self.getFileIndex(id.baseId)][0]);

    for (const map of maps) {
      let found = false;
      // Try to see if we already have some informations on this map
      for (const category of MapFileList.maps) {
        const fileMap = category.maps.find((item) => Number(item.fileName.split(".data")[0]) === map.baseId);
        if (fileMap) {
          mapArray.push({
            name: fileMap.name,
            category: category.name,
            baseId: map.baseId,
          });
          found = true;
          break;
        }
      }
      // If not we register it as Uncategorized
      if (!found) {
        mapArray.push({
          name: map.baseId.toString(),
          category: "Uncategorized",
          baseId: map.baseId,
        });
      }
    }

    mapArray.sort((a, b) => a.category.localeCompare(b.category));

    return mapArray;
  }

  /**
   *   Return the meta table with extra information such as an array of baseIds and the file types.
   *   The filetype is available only if readFileList have been used before of course.
   */
  getFileList(): Array<FileItem> {
    const typeList = this.persistantData ? this.persistantData.map((i) => i.fileType) : [];
    const reverseBaseIdList = this.getReverseIndex();

    const fileList = this.fileMetaTable.map((meta, mftId) => {
      const baseIds = reverseBaseIdList[mftId] ? reverseBaseIdList[mftId] : [];
      const type = reverseBaseIdList[mftId] ? typeList[baseIds[0]] : "Non-Registered";
      return {
        mftId: mftId,
        baseIdList: baseIds,
        size: meta.size,
        crc: meta.crc,
        fileType: type,
      };
    });
    fileList[0] = {
      mftId: 0,
      baseIdList: [],
      size: 0,
      crc: 0,
      fileType: "Non-Registered",
    };
    return fileList;
  }

  /**
   * @returns {Array<Array<number>>}
   */
  getReverseIndex() {
    return this.indexTable.reduce((reversed: any[], mftId, baseId) => {
      if (mftId in reversed) reversed[mftId].push(baseId);
      else reversed[mftId] = [baseId];
      return reversed;
    }, []);
  }

  // Callback wrapper

  /**
   * Reads data from a file in the dat.
   * If `raw` is true, any infation is skipped and raw data is returned.
   */
  loadFile(
    baseId: number,
    callback: (rawData?: ArrayBuffer | null, dxtType?: number, width?: number, height?: number) => void,
    isImage?: boolean,
    raw?: boolean
  ) {
    const mftId = this.getFileIndex(baseId);
    if (mftId <= 0) return callback(null);
    this.readFile(mftId, isImage, raw).then((result) => {
      if (result.buffer === undefined) return callback(null);
      callback(result.buffer, result.dxtType, result.imageWidth, result.imageHeight);
    });
  }

  // Private
  _needsScan(
    baseId: number,
    persistantData: Array<{ baseId: number; crc: number; size: number; fileType: string }>
  ): { scan: boolean; change: string } {
    if (baseId <= 0) return { change: "none", scan: false };

    const mftId = this.getFileIndex(baseId);
    const metaData = this.getFileMeta(mftId);

    // Nothing interesting
    if (metaData === undefined && !(baseId in persistantData)) {
      return { change: "none", scan: false };
    }
    // If the file have been deleted
    else if (metaData === undefined) {
      return { change: "removed", scan: false };
    }
    // If the file is new
    else if (!(baseId in persistantData)) {
      return { change: "added", scan: true };
    }
    // If the size or crc don't match
    else if (metaData.size !== persistantData[baseId].size || metaData.crc !== persistantData[baseId].crc) {
      return { change: "modified", scan: true };
    }
    // If everything is the same
    else {
      return { change: "none", scan: false };
    }
  }

  async _readFileType(baseId: number): Promise<{ fileType: string; crc: number; size: number } | undefined> {
    if (!this._fileTypeCache) this._fileTypeCache = [];

    const mftId = this.getFileIndex(baseId);
    const metaData = this.getFileMeta(mftId);

    let fileType;
    if (this._fileTypeCache[baseId] !== undefined) {
      fileType = this._fileTypeCache[baseId];
    } else {
      const fileBuffer = (await this.readFile(mftId, false, false, Math.min(metaData.size, 1000), 32)).buffer;
      if (fileBuffer === undefined) return undefined;
      fileType = FileTypes.getFileType(fileBuffer);
    }
    return { fileType: fileType, crc: metaData.crc, size: metaData.size };
  }
}

export default LocalReader;
