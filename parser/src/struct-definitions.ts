import { CString, Uint8, Uint16, Uint32, Uint64 } from "../src/types";

export const ChunkDefinitions = {
  FILE_HEAD: {
    identifier: CString(2),
    flags: Uint16,
    unknownField2: Uint16,
    pkFileVersion: Uint16,
    type: CString(4),
  },
  CHUNK_HEAD: {
    type: CString(4),
    chunkDataSize: Uint32,
    chunkVersion: Uint16,
    chunkHeaderSize: Uint16,
    offsetTableOffset: Uint32,
  }
};

export const ArchiveDefinitions = {
  ARCHIVE_HEADER_FORMAT: {
    version: Uint8,
    magic: CString(3),
    headerSize: Uint32,
    unknownField1: Uint32,
    chunkSize: Uint32,
    crc: Uint32,
    unknwonField2: Uint32,
    mftOffset: Uint64,
    mftSize: Uint32,
    flags: Uint32,
  },
  MFT_TABLE_HEADER: {
    magic: CString(4),
    unknownField1: Uint64,
    nbOfEntries: Uint32,
    unknownField2: Uint32,
    unknownField3: Uint32,
  },
  MFT_TABLE_ENTRY: {
    offset: Uint64,
    size: Uint32,
    compressed: Uint16,
    unknownField1: Uint16,
    unknownField2: Uint32,
    crc: Uint32,
  },
};
