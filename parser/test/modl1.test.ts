import { toArrayBuffer } from "./test-helper";
import { latest as ANIM } from "../definitions/ANIM";
import { DataParser } from "../src/data-parser";
import * as fs from "fs";

import { parseFile, parseAllChunks } from "../src/file-parser";

const chunkBuffer = fs.readFileSync("./test/modl1.bin", null);

const dv = new DataView(toArrayBuffer(chunkBuffer));
const fileHead = parseFile(dv);
const allChunks = parseAllChunks(dv, fileHead.newPosition);

const chunkMeta = allChunks.find((x) => x.chunkHeader.type === "ANIM");
console.log(chunkMeta);

const chunkParser = new DataParser(ANIM);
const test = chunkParser.parse(dv, chunkMeta.chunkPosition + chunkMeta.chunkHeader.chunkHeaderSize);

console.log(
  JSON.stringify(
    test.data,
    (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
  )
);
