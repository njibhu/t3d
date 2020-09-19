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
 * LocalReader have been completely rewritten from scratch,
 * the API changed quite a lot between 1.0.4 and 1.1.0.
 *
 * API CHANGES: LocalReader (1.1.0 from 1.0.4)
 * - The constructor have __changed__.
 * - parseHeaderAsync have been __removed__.
 * - connectInflated have been __removed__.
 * - NaClListener have been __removed__.
 * - readANDatHeader have been __removed__.
 * - readMFTHeader have been __removed__.
 * - readMFTIndexFile have been __removed__.
 * - loadFileList is now __deprecated__.
 * - loadMapList is now __deprecated__.
 * - storeFileList have been __removed__.
 * - storeMapList have been __removed__.
 * - readFileListAsync is now __deprecated__.
 * - readMapListAsync is now __deprecated__.
 * - listFiles have been __removed__.
 * - getFileIndex have been slightly __changed__.
 * - loadTextureFile is now __deprecated__.
 * - loadFile have been __removed__.
 * - inflate have been __removed__.
 * - loadFilePart have been __removed__.
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
    let { metaTable, indexTable } = await ArchiveParser.readArchive(file);
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
    let meta = this.getFileMeta(mftId);
    if (!meta) throw new Error("Unexistant file");

    // Slice up the data
    let { ds, len } = await ArchiveParser.getFilePart(this._file, meta.offset, fileLength || meta.size);

    // If needed we decompress, if not we keep raw
    if (meta.compressed || raw !== false) {
      let data;
      await this._dataReader
        .inflate(ds, len, mftId, isImage, extractLength || 0)
        .then(result => {
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
    let self = this;

    let persistantList = oldFileList || [];
    let persistantId;

    // Load previously saved data
    if (this._persistantStore) {
      let lastListing = await this._persistantStore.getLastListing(this._file.name);
      persistantList = lastListing.array;
      // If the last scan was not completed then we will just update it..
      if (!lastListing.complete) {
        persistantId = lastListing.key;
      }
    }

    // Create a list of all the baseIds we need to inspect
    let iterateList = Object.keys(self._indexTable).map(i => Number(i));
    for (let index in persistantList) {
      if (!(index in self._indexTable)) iterateList.push(index);
    }

    // Helps us to know when we need to update the persistant store
    // let updatePersistant = false;

    // Spawn the decompression tasks
    let taskArray = [];
    for (let i = 0; i < 1; i++) {
      taskArray[i] = Promise.resolve({ task: i });
    }

    let persistantNeedsUpdate = false;

    // Iterate through the array
    for (let index in iterateList) {
      let baseId = iterateList[index];

      // First use a synchronous function to know if we need to scan the file
      let result = this._needsScan(baseId, persistantList);
      if (result.scan === true) {
        let taskId = (await Promise.race(taskArray)).task;
        taskArray[taskId] = this._readFileType(baseId).then(scanResult => {
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
            .then(res => (persistantId = res));
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
   * @typedef {Object} MapItem
   * @property {string} name
   * @property {string} category
   * @property {number} baseId
   */

  /**
   *   Returns a list of all the maps with their name and category.
   *   Uncategorized maps are available only if readFileList have been used before.
   *
   * @returns {Array<MapItem>}
   */
  getMapList() {
    let self = this;
    let mapArray = [];
    // If the archive have been scanned for all its file we iterate through the results
    if (this._persistantData) {
      // Filter the maps out of all our files
      let reversedIndex = this.getReverseIndex();
      let maps = this._persistantData
        .filter(file => file.fileType === "PF_mapc")
        .filter(id => id.baseId === reversedIndex[self.getFileIndex(id.baseId)][0]);

      for (let map of maps) {
        let found = false;
        // Try to see if we already have some informations on this map
        for (let category of MapFileList.maps) {
          let fileMap = category.maps.find(item => Number(item.fileName.split(".data")[0]) === map.baseId);
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
    }
    // If not then we check only known maps
    else {
      for (let category of MapFileList.maps) {
        for (let mapEntry of category.maps) {
          if (Number(mapEntry.fileName.split(".data")[0]) in this._indexTable) {
            mapArray.push({
              name: mapEntry.name,
              category: category.name,
              baseId: Number(mapEntry.fileName.split(".data")[0]),
            });
          }
        }
      }
    }
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
    let typeList = this._persistantData ? this._persistantData.map(i => i.fileType) : [];
    let reverseBaseIdList = this.getReverseIndex();

    let fileList = this._fileMetaTable.map((meta, mftId) => {
      let baseIds = reverseBaseIdList[mftId] ? reverseBaseIdList[mftId] : [];
      let type = reverseBaseIdList[mftId] ? typeList[baseIds[0]] : "Non-Registered";
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

  // API Compatibility

  /**
     * Looks up mft indices for all mapc pack files in the dat. Either looks trough all files or
     * only the list defined in {@link MapFileList}
     *
     * @deprecated Use now the getFileList method.
     * @param  {boolean}   searchAll if true forces re-indexing of entire dat.
     * If false only reads indices specified in "T3D/MapFileList".
     * @param  {Function} callback Fired when the list is generated
     *
     * First argument is the a list of mft indices grouped by file type. For exmample:
     *
     *     {
     *       maps:[
     *         {
     *           name: 'Heart of Maguuma',
     *           maps: [
     *             {fileName:1151420, name:'HoT BWE3 Raid'},
     *             {fileName:969663, name:'Verdant Brink}
     *           ]
     *         },
     *         {
     *           name: 'Unknown maps',
     *           maps: [
     *             {fileName:12345678, name:'Unknown map 12345678'}
     *           ]
     *         }
     *       ]

    *      };
    */
  readMapListAsync(searchAll, callback) {
    let self = this;
    T3D.Logger.log(T3D.Logger.TYPE_WARNING, "LocalReader.readMapListAsync is deprecated !");

    // Let's preserve the old output way
    function restoreOuput(array) {
      let returnArray = [];
      for (let elt of array) {
        let category = returnArray.findIndex(i => i.name === elt.category);
        if (category === -1) {
          category = returnArray.push({ name: elt.category, maps: [] }) - 1;
        }
        returnArray[category].maps.push({
          fileName: elt.baseId,
          name: elt.name,
        });
      }
      // And resort it in order
      returnArray.sort((i, j) => {
        if (i.name < j.name) return -1;
        if (i.name > j.name) return 1;
        return 0;
      });
      return { maps: returnArray };
    }

    /// If seachAll flag is true, force a deep search
    if (searchAll) {
      this.readFileList().then(() => {
        callback(restoreOuput(self.getMapList()));
      });
    } else {
      callback(restoreOuput(self.getMapList()));
    }
  }

  /**
   * Reads the file type of each file in the dat and stores the resulting list in
   * the browser's local storage.
   *
   * @deprecated Use now the readFileList or getFileList methods.
   * @param  {Function} callback Fired when the list is generated and stores
   *
   * First argument is the a list of mft indices grouped by file type.
   */
  readFileListAsync(callback) {
    T3D.Logger.log(T3D.Logger.TYPE_WARNING, "LocalReader.readFileListAsync is deprecated !");

    // Because the API changed we reform the data as wanted previously
    this.readFileList().then(result => {
      let returnObj = {};
      for (let fileEntry of result) {
        if (returnObj[fileEntry.fileType] === undefined) {
          returnObj[fileEntry.fileType] = [];
        }
        returnObj[fileEntry.fileType].push(fileEntry.mftId);
      }
      callback(returnObj);
    });
  }

  /**
   * Reads data from a file in the dat.
   *
   * @deprecated Use now the Promise-based method readFile.
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
    T3D.Logger.log(T3D.Logger.TYPE_WARNING, "LocalReader.loadFile is deprecated !");
    let mftId = this.getFileIndex(baseId);
    if (mftId <= 0) return callback(null);
    this.readFile(mftId, isImage, raw).then(result => {
      if (result.buffer === undefined) return callback(null);
      callback(result.buffer, result.dxtType, result.imageWidth, result.imageHeight);
    });
  }

  /**
   * Reads a bitmap from a texture file in the dat.
   *
   * @deprecated
   * @param  {Number}   baseId   Base or File id of the texture to load
   * @param  {Function} callback Fires when the inflater has read the texture data.
   *
   * The passed arguments are
   * -ArrayBuffer Bitmap
   * -Number DXT Type
   * -Number image width
   * -Number image height
   *
   */
  loadTextureFile(baseId, callback) {
    T3D.Logger.log(T3D.Logger.TYPE_WARNING, "LocalReader.loadTextureFile is deprecated !");

    this.loadFile(baseId, callback, true);
  }

  /**
   * Used to read the cached list of files corresponding to the reader's .dat from the localStorage.
   * Now kept only for backward compatibility, but doesn't do anything.
   * Please use getFileList now.
   *
   * @deprecated
   */
  loadFileList() {
    T3D.Logger.log(T3D.Logger.TYPE_WARNING, "LocalReader.loadFileList is deprecated !");
    return undefined;
  }

  /**
   * Used to read the cached list of maps corresponding to the reader's .dat from the localStorage.
   * Now kept only for backward compatibility, but doesn't do anything.
   * Please use getMapList now.
   *
   * @deprecated
   */
  loadMapList() {
    T3D.Logger.log(T3D.Logger.TYPE_WARNING, "LocalReader.loadMapList is deprecated !");
    return undefined;
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

    let mftId = this.getFileIndex(baseId);
    let metaData = this.getFileMeta(mftId);

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

    let mftId = this.getFileIndex(baseId);
    let metaData = this.getFileMeta(mftId);

    let fileType;
    if (this._fileTypeCache[baseId] !== undefined) {
      fileType = this._fileTypeCache[baseId];
    } else {
      let fileBuffer = (await this.readFile(mftId, false, false, Math.min(metaData.size, 1000), 32)).buffer;
      if (fileBuffer === undefined) return undefined;
      fileType = FileTypes.getFileType(new DataStream(fileBuffer));
    }
    return { fileType: fileType, crc: metaData.crc, size: metaData.size };
  }
}

module.exports = LocalReader;
