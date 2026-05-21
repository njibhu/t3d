import { ArchiveParser, ParsingUtils } from "t3d-parser";
import PersistantStore from "./PersistantStore";
import DataReader from "./DataReader";
import MapFileList from "../MapFileList";
import * as FileTypes from "./FileTypes";
import Logger from "../Logger";

interface LocalReaderSettings {
  noIndexedDB?: boolean; // Do not use indexedDB (persistant storage, default is true)
  workerPath: string; // workerPath: the path to the t3dtools worker script file.
  workersNb: number; // amount of threads spawned for decompression.
}

export interface FileItem {
  mftId: number;
  baseIdList: number[];
  size: number;
  crc: number;
  fileType: string;
}

export interface ScanEntry {
  mftId: number;
  baseIdList: number[];
  size: number;
  crc: number;
  fileType: string;
}

export interface ScanProgress {
  scanned: number;
  total: number;
  label: string;
  pct: number;
}

export interface ScanCallbacks {
  onStart?: (totalCandidates: number) => void;
  onEntry?: (entry: ScanEntry) => void;
  onProgress?: (progress: ScanProgress) => void;
  onComplete?: (finalList: Array<FileItem>) => void;
  onError?: (error: Error) => void;
}

export interface ScanOptions {
  forceRescan?: boolean;
}

interface LocalFile {
  buffer?: ArrayBuffer;
  dxtType?: number;
  imageWidth?: number;
  imageHeight?: number;
}

/**
 * A statefull class that handles reading and inflating data from a local GW2 dat file.
 */
class LocalReader {
  private dataReader: DataReader;
  private persistantStore?: PersistantStore;
  private file?: File;
  private indexTable: Awaited<ReturnType<typeof ArchiveParser.readArchive>>["indexTable"];
  private fileMetaTable: Awaited<ReturnType<typeof ArchiveParser.readArchive>>["metaTable"];
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
    this.dataReader.init(file);
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
  getFileMeta(mftId: number) {
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
    oldFileList?: Array<{ baseId: number; size: number; crc: number; fileType: string }>,
    options?: ScanOptions
  ): Promise<Array<FileItem>> {
    return this._readFileListInternal(oldFileList, undefined, options);
  }

  async readFileListIncremental(
    callbacks: ScanCallbacks,
    oldFileList?: Array<{ baseId: number; size: number; crc: number; fileType: string }>,
    options?: ScanOptions
  ): Promise<Array<FileItem>> {
    return this._readFileListInternal(oldFileList, callbacks, options);
  }

  private async _readFileListInternal(
    oldFileList?: Array<{ baseId: number; size: number; crc: number; fileType: string }>,
    callbacks?: ScanCallbacks,
    options?: ScanOptions
  ): Promise<Array<FileItem>> {
    if (!this.file) throw new Error("No file loaded");
    const self = this;
    const forceRescan = options?.forceRescan === true;

    let persistantList = oldFileList || [];
    let persistantId: number | undefined;

    try {
      // Load previously saved data
      if (this.persistantStore && !forceRescan) {
        const lastListing = await this.persistantStore.getLastListing(this.file.name);
        persistantList = lastListing.array;
        // If the last scan was not completed then we will just update it..
        if (!lastListing.complete) {
          persistantId = lastListing.key;
        }
      }

      const reverseIndex = this.getReverseIndex();

      // Create a list of all the baseIds we need to inspect
      const iterateList = Object.keys(self.indexTable).map((i) => Number(i));
      for (const index in persistantList) {
        if (!(index in self.indexTable)) iterateList.push(index as any);
      }

      callbacks?.onStart?.(iterateList.length);

      // Run up to `concurrency` _readFileType calls in flight at once. The pool
      // matches the worker count so every decompression worker can be kept busy.
      const concurrency = Math.max(1, this.settings.workersNb || 1);
      const inFlight = new Set<Promise<void>>();
      let persistantNeedsUpdate = false;
      let pendingIdbWrite: Promise<void> | null = null;
      const progressStep = Math.max(1, Math.floor(iterateList.length / 100));
      // Only persist progress every ~10% — full-array structured clone on every
      // 1% used to dominate once the scan went parallel.
      const idbWriteStep = progressStep * 10;

      for (let i = 0; i < iterateList.length; i++) {
        const baseId = iterateList[i];
        const result = this._needsScan(baseId, persistantList, forceRescan);

        if (result.scan === true) {
          if (inFlight.size >= concurrency) {
            await Promise.race(inFlight);
          }
          const task = this._readFileType(baseId, forceRescan).then((scanResult) => {
            if (scanResult) {
              persistantList[baseId] = {
                baseId: baseId,
                size: scanResult.size,
                crc: scanResult.crc,
                fileType: scanResult.fileType,
              };
              const entry = this._toScanEntry(baseId, persistantList[baseId], reverseIndex);
              if (entry) callbacks?.onEntry?.(entry);
            }
          });
          const tracked = task.finally(() => inFlight.delete(tracked));
          inFlight.add(tracked);
        } else if (result.change === "none" && persistantList[baseId]) {
          const entry = this._toScanEntry(baseId, persistantList[baseId], reverseIndex);
          if (entry) callbacks?.onEntry?.(entry);
        }
        if (result.change === "removed") {
          delete persistantList[baseId];
        }
        if (result.change !== "none") persistantNeedsUpdate = true;

        const scanned = i + 1;
        if (i % progressStep === 0 || scanned === iterateList.length) {
          const pct = Math.floor((scanned / Math.max(1, iterateList.length)) * 100);
          if (!callbacks?.onProgress) {
            Logger.log(Logger.TYPE_PROGRESS, "Finding types", pct);
          }
          callbacks?.onProgress?.({
            scanned,
            total: iterateList.length,
            label: "Finding types",
            pct,
          });
        }

        // Throttled IDB write — only when no write is pending so we don't pile
        // them up. The final write below catches anything we skipped.
        if (i % idbWriteStep === 0 && self.persistantStore && persistantNeedsUpdate && !pendingIdbWrite) {
          persistantNeedsUpdate = false;
          pendingIdbWrite = self.persistantStore
            .putListing(persistantId, persistantList, self.file!.name, false)
            .then((res) => {
              persistantId = res;
            })
            .finally(() => {
              pendingIdbWrite = null;
            });
        }
      }

      await Promise.all(inFlight);
      if (pendingIdbWrite) await pendingIdbWrite;
      if (self.persistantStore) {
        await self.persistantStore.putListing(persistantId, persistantList, self.file!.name, true);
      }
      this.persistantData = persistantList;
      const finalList = this.getFileList();
      callbacks?.onComplete?.(finalList);
      return finalList;
    } catch (err) {
      callbacks?.onError?.(err as Error);
      throw err;
    }
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
  async getMapList(): Promise<Array<{ name: string; category: string; baseId: number; categoryIndex: number }>> {
    const self = this;
    const mapArray: Array<{ name: string; category: string; baseId: number; categoryIndex: number }> = [];
    // If the archive hasn't been completely scanned we do a partial scan for the map files.
    // It should be fast
    if (this.persistantData.length === 0) {
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
            categoryIndex: MapFileList.maps.indexOf(category),
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
          categoryIndex: 99999,
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
    persistantData: Array<{ baseId: number; crc: number; size: number; fileType: string }>,
    forceRescan = false
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
    // Force a full type refresh even when the archive entry itself is unchanged.
    else if (forceRescan) {
      return { change: "forced", scan: true };
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

  async _readFileType(
    baseId: number,
    forceRescan = false
  ): Promise<{ fileType: string; crc: number; size: number } | undefined> {
    if (!this._fileTypeCache) this._fileTypeCache = [];

    const mftId = this.getFileIndex(baseId);
    const metaData = this.getFileMeta(mftId);

    if (!forceRescan && this._fileTypeCache[baseId] !== undefined) {
      return { fileType: this._fileTypeCache[baseId], crc: metaData.crc, size: metaData.size };
    }

    // Read length: 32 raw bytes is enough for the magic-byte signatures (4)
    // and the PF FileParser header (12). For compressed files we need a larger
    // compressed window so the wasm inflate has enough input to produce ≥4
    // decompressed bytes — 1000 matches the previous cap.
    const compressed = !!metaData.compressed;
    const length = Math.min(metaData.size, compressed ? 1000 : 32);
    if (length < 4) return undefined;

    let fileBuffer: ArrayBuffer;
    try {
      fileBuffer = await this.dataReader.scan(mftId, metaData.offset, length, 32, compressed);
    } catch {
      return undefined;
    }
    if (fileBuffer.byteLength < 4) return undefined;
    const fileType = FileTypes.getFileType(fileBuffer);
    this._fileTypeCache[baseId] = fileType;
    return { fileType, crc: metaData.crc, size: metaData.size };
  }

  private _toScanEntry(
    baseId: number,
    item: { baseId: number; size: number; crc: number; fileType: string },
    reverseIndex: number[][]
  ): ScanEntry | null {
    const mftId = this.getFileIndex(baseId);
    const meta = this.getFileMeta(mftId);
    if (!meta || meta.size <= 0 || mftId <= 15) return null;
    return {
      mftId,
      baseIdList: reverseIndex[mftId] ?? [],
      size: item.size,
      crc: item.crc,
      fileType: item.fileType,
    };
  }
}

export default LocalReader;
