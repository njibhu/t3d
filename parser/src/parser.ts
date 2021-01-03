import * as allDefs from "../definitions/index";
import { DataParser } from "./data-parser";
import type { ChunkHead } from "./file-parser";

export function parse(dv: DataView, chunkHeader: ChunkHead) {
  const def = allDefs[chunkHeader.type][`V${chunkHeader.chunkVersion}`];
  const parser = new DataParser(def);
  return parser;
}
