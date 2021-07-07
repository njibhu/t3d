import { CString, Uint16, Uint32 } from "../src/types";
import { DataParser } from "./data-parser";

interface FileHead {
  identifier: string;
  unknownField1: number;
  unknownField2: number;
  pkFileVersion: number;
  type: string;
}

const FILE_HEAD = {
  definitions: {},
  root: {
    identifier: CString(2),
    unknownField1: Uint16,
    unknownField2: Uint16,
    pkFileVersion: Uint16,
    type: CString(4),
  },
};

export interface ChunkHead {
  type: string;
  chunkDataSize: number;
  chunkVersion: number;
  chunkHeaderSize: number;
  offsetTableOffset: number;
}

const CHUNK_HEAD = {
  definitions: {},
  root: {
    type: CString(4),
    chunkDataSize: Uint32,
    chunkVersion: Uint16,
    chunkHeaderSize: Uint16,
    offsetTableOffset: Uint32,
  },
};

export function parseFile(dataView: DataView): { newPosition: number; data: FileHead } {
  const fileHeaderParser = new DataParser(FILE_HEAD);
  return fileHeaderParser.parse(dataView, 0);
}

export function parseChunkHead(dataView: DataView, pos: number): { newPosition: number; data: ChunkHead } {
  const chunkHeadParser = new DataParser(CHUNK_HEAD);
  return chunkHeadParser.parse(dataView, pos);
}

export function parseAllChunks(
  dataView: DataView,
  firstChunkPosition: number
): { chunkPosition: number; chunkHeader: ChunkHead }[] {
  const chunks = [];
  let pos = firstChunkPosition;
  while (pos < dataView.byteLength) {
    const chunk = parseChunkHead(dataView, pos);
    chunks.push({ chunkPosition: pos, chunkHeader: chunk.data });
    pos = chunk.newPosition - 8 + chunk.data.chunkDataSize;
  }
  return chunks;
}
