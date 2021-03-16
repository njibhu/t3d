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

const MathUtils = require("../util/MathUtils");

/**
 * @file The ArchiveParser module is a set of helper tools to correctly read the Archive.
 * @namespace ArchiveParser
 */

/**
 *    All in one function to read a GW2.dat file and parse all the needed informations to work with it
 *
 * @memberof ArchiveParser
 * @param {File} file
 * @returns {Promise<{archiveHeader: ArchiveHeader, metaTable: MetaTable, indexTable: IndexTable}>}
 */
async function readArchive(file) {
  try {
    const archiveHeader = parseANDatHeader((await getFilePart(file, 0, 40)).ds);
    const mftData = parseMFTTable((await getFilePart(file, archiveHeader.mftOffset, archiveHeader.mftSize)).ds);
    const { ds, len } = await getFilePart(file, mftData.mftIndexOffset, mftData.mftIndexSize);
    const indexTable = parseMFTIndex(ds, len);

    return {
      archiveHeader: archiveHeader,
      metaTable: mftData.table,
      indexTable: indexTable,
    };
  } catch (error) {
    T3D.Logger.log(T3D.Logger.TYPE_ERROR, "Couldn't parse archive");
    throw error;
  }
}

/**
 * The header of the archive.
 * @typedef {Object} ArchiveHeader
 * @property {number} version
 * @property {number} magic
 * @property {number} headerSize
 * @property {number} chunkSize
 * @property {number} crc
 * @property {number} mftOffset
 * @property {number} mftSize
 * @property {number} flags
 */

/**
 *   Parse the main information about the archive like format version, positions of information tables, crc etc...
 *
 * @memberof ArchiveParser
 * @param {DataStream} ds
 * @returns {ArchiveIndex} Returns undefined if the header couldn't be parsed
 */
function parseANDatHeader(ds) {
  const header = {};

  // Header parsing
  header.version = ds.readUint8();
  header.magic = ds.readString(3);
  header.headerSize = ds.readUint32();
  ds.seek(ds.position + 4); // Skip uint32
  header.chunkSize = ds.readUint32();
  header.crc = ds.readUint32();
  ds.seek(ds.position + 4); // Skip uint32
  header.mftOffset = MathUtils.arr32To64([ds.readUint32(), ds.readUint32()]);
  header.mftSize = ds.readUint32();
  header.flags = ds.readUint32();
  // End header parsing

  // Check MAGIC
  if (header.magic !== "AN\u001A") {
    T3D.Logger.log(T3D.Logger.TYPE_ERROR, "ANDat header is not valid", header.magic);
    return undefined;
  }

  T3D.Logger.log(T3D.Logger.TYPE_DEBUG, "Loaded Main .dat header");

  return header;
}

/**
 * The array containing all the meta information concerning the contained files
 * @typedef {Array<{offset: number, size: number, compressed: number, crc: number}>} MetaTable
 */

/**
 *   Parse the main information table that contains the offset, size, compression flags and crc
 *
 * @memberof ArchiveParser
 * @param {Datastream}  ds
 * @returns {{header: {magic: String, nbOfEntries: number}, table: MetaTable, mftIndexOffset: number, mftIndexSize: number}|undefined}
 *   Returns undefined if it couldn't parse the table
 */
function parseMFTTable(ds) {
  // Parse the table header
  const header = {};
  header.magic = ds.readString(4);
  ds.seek(ds.position + 8); // Skip uint64
  header.nbOfEntries = ds.readUint32();
  ds.seek(ds.position + 4 + 4); // Skip uint32 * 2

  // check MAGIC
  if (header.magic !== "Mft\u001A") {
    T3D.Logger.log(T3D.Logger.TYPE_ERROR, "MFTTable header is not valid", header.magic);
    return undefined;
  }

  // Where we put all the parsed data
  // We don't pre-alloc anymore since not having the data aligned together procs too many
  // cache misses during a fullscan
  const fullTable = [];

  // Go through the table
  for (let i = 1; i < header.nbOfEntries; i++) {
    const item = {};
    item["offset"] = MathUtils.arr32To64([ds.readUint32(), ds.readUint32()]);
    item["size"] = ds.readUint32();
    item["compressed"] = ds.readUint16();
    ds.seek(ds.position + 4 + 2); // Skip uint16 + uint32
    item["crc"] = ds.readUint32();
    fullTable[i] = item;
  }

  T3D.Logger.log(T3D.Logger.TYPE_DEBUG, "Loaded MFTTable");

  return {
    header: header,
    table: fullTable,
    // Register the MFTIndex table position and size
    mftIndexOffset: fullTable[2].offset,
    mftIndexSize: fullTable[2].size,
  };
}

/**
 * The array linking all the file indexes to their respective files
 * @typedef {Array<number>} IndexTable
 */

/**
 *   This function used to be much more complex with the use of
 *   a "fileId" which in the end was just the equivalent of
 *   MFTbaseIds[mftId].sort().reverse()[0] (aka the bigger baseId found)
 *
 * @memberof ArchiveParser
 * @param {DataStream} ds
 * @param {number} size
 * @returns {IndexTable}
 */
function parseMFTIndex(ds, size) {
  const length = size / 8;

  const indexTable = [];

  for (let i = 0; i < length; i++) {
    // Parse table
    const id = ds.readUint32();
    const mftIndex = ds.readUint32();
    // Store the values
    indexTable[id] = mftIndex;
  }

  T3D.Logger.log(T3D.Logger.TYPE_DEBUG, "Finished indexing MFT");

  return indexTable;
}

/**
 *   Get a chunk of the specified file. Used mainly to take parts of the Archive before parsing.
 *
 * @memberof ArchiveParser
 * @param {File} file
 * @param {number} offset
 * @param {number} length
 * @returns {Promise<{ds: DataStream, len: number}>}
 */
function getFilePart(file, offset, length) {
  // Node compatibility workaround
  if (global.process && global.fs) {
    const fd = global.fs.openSync(file);
    const buffer = global.Buffer.alloc(length);
    const readLen = global.fs.readSync(fd, buffer, 0, length, offset);
    const ds = new DataStream(buffer);
    ds.endianness = DataStream.LITTLE_ENDIAN;
    global.fs.closeSync(fd);
    return { ds, len: readLen };
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = reject;

    reader.onload = function (fileEvent) {
      const buffer = fileEvent.target.result;
      const ds = new DataStream(buffer);
      ds.endianness = DataStream.LITTLE_ENDIAN;
      // Pass data stream and data length to callback function
      resolve({ ds: ds, len: length });
    };

    // Slicing a File is just reducing the scope of the ArrayBuffer, but doesn't load anything in memory.
    reader.readAsArrayBuffer(file.slice(offset, offset + length));
  });
}

module.exports = {
  readArchive: readArchive,
  parseANDatHeader: parseANDatHeader,
  parseMFTTable: parseMFTTable,
  parseMFTIndex: parseMFTIndex,
  getFilePart: getFilePart,
};
