import { DataParser } from "./data-parser";
import { ChunkDefinitions } from "./struct-definitions";
import type { ChunkHead, FileHead } from "./interfaces";

const __IS_NODE_RUNTIME = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

export function sliceFile(file: File, offset: number, length: number): Promise<ArrayBuffer> {
  if(__IS_NODE_RUNTIME) {
    // @ts-expect-error - Node specific code
    return import('node:fs').then((fs) => {
      const fd = fs.openSync(file);
      const buffer = Buffer.alloc(length);
      fs.readSync(fd, buffer, 0, length, offset);
      fs.closeSync(fd);
      return buffer.buffer;
    });
  } 
  else {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result as ArrayBuffer);
      };

      reader.onerror = reject;

      reader.readAsArrayBuffer(file.slice(Number(offset), Number(offset) + Number(length)));
    });
  }
}

export function parseFile(dataView: DataView): { newPosition: number; data: FileHead } {
  const fileHeaderParser = new DataParser({ root: ChunkDefinitions.FILE_HEAD});
  const result = fileHeaderParser.parse(dataView, 0);
  result.data.type = result.data.type.replace("\u0000", "");
  return result;
}

export function parseChunkHead(dataView: DataView, pos: number): { newPosition: number; data: ChunkHead } {
  const chunkHeadParser = new DataParser({ root: ChunkDefinitions.CHUNK_HEAD});
  const result = chunkHeadParser.parse(dataView, pos);
  result.data.type = result.data.type.replace("\u0000", "");
  return result;
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
