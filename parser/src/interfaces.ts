export interface FileHead {
  identifier: string;
  flags: number;
  unknownField2: number;
  pkFileVersion: number;
  type: string;
}

export interface ChunkHead {
  type: string;
  chunkDataSize: number;
  chunkVersion: number;
  chunkHeaderSize: number;
  offsetTableOffset: number;
}

export interface ArchiveHeader {
  version: number;
  magic: string;
  headerSize: number;
  chunkSize: number;
  crc: number;
  mftOffset: bigint;
  mftSize: number;
  flags: number;
}

export interface MFTTable {
  header: {
    magic: string;
    nbOfEntries: number;
  };
  table: Array<{
    offset: bigint;
    size: number;
    compressed: number;
    crc: number;
  }>;
  mftIndexOffset: number;
  mftIndexSize: number;
}
