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

const ArchiveParser = require("./ArchiveParser");
const PersistantStore = require("./PersistantStore");
const DataReader = require("./DataReader");
const MapFileList = require("../MapFileList");
const FileTypes = require("./FileTypes");

/**
 * A statefull class that handles reading and inflating data from a local GW2 dat file.
 *
 * @param {{workerPath: String, workersNb: number, noIndexedDB: boolean}} settings
 *   * workerPath: the path to the t3dtools worker script file.
 *   * workersNb: amount of threads spawned for decompression.
 *   * noIndexedDB: Do not use indexedDB (persistant storage, default is true)
 */
class LocalReader {
  constructor(settings) {
    this._settings = settings;

    /**
     * @private
     * @type {DataReader}
     */
    this._dataReader = new DataReader(settings);

    /**
     * @private
     * @type {PersistantStore}
     */
    this._persistantStore;

    /**
     * @private
     * @type {File}
     */
    this._file = undefined;

    /**
     * @private
     * @type {Array<number>}
     */
    this._indexTable = [];

    /**
     * @private
     * @type {Array<{offset: number, size: number, compressed: number, crc: number}>}
     */
    this._fileMetaTable = [];

    if (settings.noIndexedDB !== false) {
      this._persistantStore = new PersistantStore();
    }
  }

  /**
   *   Asynchronously loads the archive by parsing its file index and header.
   *
   * @param {File} file
   * @returns {Promise}
   */
  async openArchive(file) {
    const { metaTable, indexTable } = await ArchiveParser.readArchive(file);
    this._fileMetaTable = metaTable;
    this._indexTable = indexTable;
    this._file = file;
  }

  /**
   *   Gets MFT index by baseId
   *
   * @param  {Number} baseId   A base Id
   * @return {Number}          MFT index
   */
  getFileIndex(baseId) {
    return this._indexTable[baseId];
  }

  /**
   *   "Meta" informations to deal with files in the archive.
   * @typedef     {Object}    FileMetaData
   * @property    {number}    offset
   * @property    {number}    size
   * @property    {number}    compressed
   * @property    {number}    crc
   */

  /**
   *   Returns the metadata of a file stored in the archive
   *
   * @param {number} mftId Mft index of the file
   * @returns {FileMetaData} Metadata informations
   */
  getFileMeta(mftId) {
    return this._fileMetaTable[mftId];
  }

  /**
   *   Fetch a file and uncompress it if needed / required.
   *
   * @param {number} mftId File's archive ID
   * @param {boolean} [isImage] Try to read the data as a Dxt texture.
   * @param {boolean} [raw] Force no decompression.
   * @param {number} [fileLength] Slice the uncompressed file.
   * @param {number} [extractLength] Slice the decompression.
   * @returns {Promise<{buffer: ArrayBuffer, dxtType: number|undefined, imageWidth: number|undefined, imageHeight: number|undefined}>}
   */
  async readFile(mftId, isImage, raw, fileLength, extractLength) {
    //let buffer, dxtType, imageWidth, imageHeight;
    const meta = this.getFileMeta(mftId);
    if (!meta) throw new Error("Unexistant file");

    // Slice up the data
    const { ds, len } = await ArchiveParser.getFilePart(this._file, meta.offset, fileLength || meta.size);

    // If needed we decompress, if not we keep raw
    if (meta.compressed || raw !== false) {
      let data;
      await this._dataReader
        .inflate(ds, len, mftId, isImage, extractLength || 0)
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
    } else return { buffer: ds.buffer };
  }

  /**
   *   Scans asynchronously the types of all the files listed in the archive.
   *   Uses persistant store to cache and speed up a rescan.
   *
   * @param {Array<{baseId: number, size: number, crc: number, fileType: string}>|undefined} oldFileList
   *   Way for platform not supporting indexDB to provide their own persistant storage.
   * @returns {Promise<Array<FileItem>>}
   */
  async readFileList(oldFileList) {
    const self = this;

    let persistantList = oldFileList || [];
    let persistantId;

    // Load previously saved data
    if (this._persistantStore) {
      const lastListing = await this._persistantStore.getLastListing(this._file.name);
      persistantList = lastListing.array;
      // If the last scan was not completed then we will just update it..
      if (!lastListing.complete) {
        persistantId = lastListing.key;
      }
    }

    // Create a list of all the baseIds we need to inspect
    const iterateList = Object.keys(self._indexTable).map((i) => Number(i));
    for (const index in persistantList) {
      if (!(index in self._indexTable)) iterateList.push(index);
    }

    // Spawn the decompression tasks
    const taskArray = [];
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
            size: scanResult.size,
            crc: scanResult.crc,
            fileType: scanResult.fileType,
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
      if (index % Math.floor(iterateList.length / 100) === 0) {
        // Print progress
        T3D.Logger.log(T3D.Logger.TYPE_PROGRESS, "Finding types", index / Math.floor(iterateList.length / 100));

        // Update the persistant storage if needed
        if (self._persistantStore && persistantNeedsUpdate) {
          persistantNeedsUpdate = false;
          self._persistantStore
            .putListing(persistantId, persistantList, self._file.name, false)
            .then((res) => (persistantId = res));
        }
      }
    }

    await Promise.all(taskArray).then(() => {
      // Finally update the listing as complete
      if (self._persistantStore) {
        self._persistantStore.putListing(persistantId, persistantList, self._file.name, true);
      }
    });
    this._persistantData = persistantList;
    return this.getFileList();
  }

  /**
   * Cheap version of the readFileList which will only scan files registered in the mapFileList
   * This helps us being sure that we only return files that contain a mapc chunk when using
   * the getMapList function
   */
  async readMapList() {
    const fileList = MapFileList.maps.reduce((maps, category) => {
      return maps.concat(category.maps.map((entry) => entry.fileName));
    }, []);
    const temporaryStore = [];

    for (const fileName of fileList) {
      const baseId = fileName.split(".data")[0];
      if (this._indexTable[baseId]) {
        const scanResult = await this._readFileType(baseId);
        temporaryStore[baseId] = {
          baseId: Number(baseId),
          size: scanResult.size,
          crc: scanResult.crc,
          fileType: scanResult.fileType,
        };
      }
    }

    // Fill the store without saving it to disk
    this._persistantData = temporaryStore;
  }

  /**
   * @typedef {Object} MapItem
   * @property {string} name
   * @property {string} category
   * @property {number} baseId
   */

  /**
   *   Returns a list of all the maps with their name and category.
   *   Uncategorized maps are available only if readFileList have been used before.
   *
   * @returns {Promise<Array<MapItem>>}
   */
  async getMapList() {
    const self = this;
    const mapArray = [];
    // If the archive hasn't been completely scanned we do a partial scan for the map files.
    // It should be fast
    if (!this._persistantData) {
      await this.readMapList();
    }

    // Filter the maps out of all our files
    const reversedIndex = this.getReverseIndex();
    const maps = this._persistantData
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
   * @typedef {Object} FileItem
   * @property {number} mftId
   * @property {Array<number>} baseIdList
   * @property {number} size
   * @property {number} crc
   * @property {string} fileType
   **/

  /**
   *   Return the meta table with extra information such as an array of baseIds and the file types.
   *   The filetype is available only if readFileList have been used before of course.
   *
   * @returns {Array<FileItem>}
   */
  getFileList() {
    const typeList = this._persistantData ? this._persistantData.map((i) => i.fileType) : [];
    const reverseBaseIdList = this.getReverseIndex();

    const fileList = this._fileMetaTable.map((meta, mftId) => {
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
    return this._indexTable.reduce((reversed, mftId, baseId) => {
      if (mftId in reversed) reversed[mftId].push(baseId);
      else reversed[mftId] = [baseId];
      return reversed;
    }, []);
  }

  // Callback wrapper

  /**
   * Reads data from a file in the dat.
   *
   * @param  {Number}   baseId   Base or File id of the texture to load
   * @param  {Function} callback Fires when the inflater has read the data.
   *
   * The passed arguments are
   * -ArrayBuffer raw data
   * -Number DXT Type if applicable
   * -Number image width if applicable
   * -Number image height if applicable
   *
   *
   * @param  {boolean}  isImage
   * @param  {boolean}   raw      If true, any infation is skipped and raw data is returned.
   */
  loadFile(baseId, callback, isImage, raw) {
    const mftId = this.getFileIndex(baseId);
    if (mftId <= 0) return callback(null);
    this.readFile(mftId, isImage, raw).then((result) => {
      if (result.buffer === undefined) return callback(null);
      callback(result.buffer, result.dxtType, result.imageWidth, result.imageHeight);
    });
  }

  // Private

  /**
   * @private
   * @param {number} baseId
   * @param {Array<{baseId: number, crc: number, size: number, fileType: string}>} persistantData
   * @returns {{scan: boolean, change: string }}
   */
  _needsScan(baseId, persistantData) {
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

  /**
   * @private
   * @param {number} baseId
   * @param {Array<{baseId: number, crc: number, size: number, fileType: string}>} persistantData
   * @returns {Promise<{fileType: string, crc: number, size: number}>}
   */
  async _readFileType(baseId) {
    if (!this._fileTypeCache) this._fileTypeCache = [];

    const mftId = this.getFileIndex(baseId);
    const metaData = this.getFileMeta(mftId);

    let fileType;
    if (this._fileTypeCache[baseId] !== undefined) {
      fileType = this._fileTypeCache[baseId];
    } else {
      const fileBuffer = (await this.readFile(mftId, false, false, Math.min(metaData.size, 1000), 32)).buffer;
      if (fileBuffer === undefined) return undefined;
      fileType = FileTypes.getFileType(new DataStream(fileBuffer));
    }
    return { fileType: fileType, crc: metaData.crc, size: metaData.size };
  }
}

module.exports = LocalReader;
