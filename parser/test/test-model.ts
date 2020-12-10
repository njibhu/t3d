import { toArrayBuffer } from "./test-helper";
import * as defs from "../definitions";
import { DataParser } from "../src/data-parser";
import * as fs from "fs";

import { parseFile, parseAllChunks } from "../src/file-parser";

const chunkBuffer = fs.readFileSync("./test/16104.AMAT.raw", null);

const dv = new DataView(toArrayBuffer(chunkBuffer));
const fileHead = parseFile(dv);
const allChunks = parseAllChunks(dv, fileHead.newPosition);

for (const chunk of allChunks) {
  const def = defs[chunk.chunkHeader.type][`V${chunk.chunkHeader.chunkVersion}`];
  const result = new DataParser(def).parse(dv, chunk.chunkPosition + chunk.chunkHeader.chunkHeaderSize);
  console.log(chunk.chunkHeader.type);
  console.log(
    JSON.stringify(
      result.data,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    )
  );
}
