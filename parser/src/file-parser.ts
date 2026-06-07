import * as allDefs from "../definitions/index";
import { DataParser, Definition } from "./data-parser";
import type { ChunkHead, FileHead } from "./interfaces";
import { parseFile, parseAllChunks } from "./utils";
import { fileChunkMap } from "./chunk-packs";
import type { FileTypes, ChunkTypes, DefinitionTypes } from "./chunk-packs";

export default class FileParser {
  public chunks: { header: ChunkHead; data: any }[] = [];
  private dataView: DataView;
  private chunkOffset: number;
  public header: FileHead;

  constructor(buffer: ArrayBuffer, parseOnlyHead: boolean = false) {
    this.dataView = new DataView(buffer);
    const { newPosition, data } = parseFile(this.dataView);
    this.header = data;
    this.chunkOffset = newPosition;
    if (!parseOnlyHead) {
      this.readChunks();
    }
  }

  private readChunks() {
    // This method is appending chunks, so we clear the array to prevent bugs if the method is called multiple times
    this.chunks = [];

    const chunksMetadata = parseAllChunks(this.dataView, this.chunkOffset);
    const fileType = this.header.type as FileTypes;

    for (const metadata of chunksMetadata) {
      const chunkType = metadata.chunkHeader.type as ChunkTypes;
      // If the chunk is not defined in the fileChunkMap, we skip it
      if (!fileChunkMap[fileType] || !(fileChunkMap as any)[fileType][chunkType]) {
        console.error(
          `Chunk ${chunkType} is not defined in the fileChunkMap for file type ${fileType}. The chunk will not be parsed.`
        );
        continue;
      }
      const definitionName: DefinitionTypes = (fileChunkMap as any)[fileType][chunkType];
      const definitions: (typeof allDefs)[keyof typeof allDefs]["definitions"] = allDefs[definitionName].definitions;
      const def: Definition = definitions[`V${metadata.chunkHeader.chunkVersion}` as keyof typeof definitions];
      // TODO - Add version compatibility checks
      console.log(
        `Parsing chunk ${metadata.chunkHeader.type} with version ${metadata.chunkHeader.chunkVersion}, flags ${this.header.flags}`
      );
      // The PF header `flags` field uses bit 0x4 to select 64-bit (8-byte)
      // pointers/offsets. Both the common packfiles (flags=5) and the asset
      // manifests in Local.dat (flags=4) set it; the old `=== 5` check parsed
      // flags=4 files as 32-bit, so their array offsets drifted after the first
      // DynArray.
      const is64Bit = (this.header.flags & 0x4) === 0x4;
      const parserResult = new DataParser(def, is64Bit).safeParse(
        this.dataView,
        metadata.chunkPosition + metadata.chunkHeader.chunkHeaderSize
      );
      if (parserResult.error) {
        console.error(
          `Error parsing chunk ${metadata.chunkHeader.type} with version ${metadata.chunkHeader.chunkVersion}: ${parserResult.error}`
        );
      }
      this.chunks.push({
        header: metadata.chunkHeader,
        data: parserResult.data,
      });
    }
  }

  public getChunk(chunkName: string /*, versionCompatibility: */) {
    for (let i = 0; i < this.chunks.length; i++) {
      if (this.chunks[i].header.type.toLowerCase() === chunkName.toLowerCase()) {
        return this.chunks[i];
      }
    }
    return null;
  }
}
