import * as fs from "fs";

import { DataParser } from "../src/data-parser";
import { parseFile, parseAllChunks } from "../src/utils";

import { toArrayBuffer } from "./test-helper";

import * as ENV from "../definitions/ENV";

const chunkBuffer = fs.readFileSync("./test/content/mapc2.bin", null);
const dv = new DataView(toArrayBuffer(chunkBuffer));
const fileHead = parseFile(dv);
const allChunks = parseAllChunks(dv, fileHead.newPosition);
const is64Bit = fileHead.data.flags == 5;

// ENV
test("matches for ENV", function () {
  const envChunk = allChunks.find((c) => c.chunkHeader.type === "env");
  const def = ENV.definitions[`V${envChunk!.chunkHeader.chunkVersion}` as keyof typeof ENV["definitions"]];
  const parser = new DataParser(def, is64Bit, false);
  const test = parser.parse(dv, envChunk!.chunkPosition + envChunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchSnapshot("mapc2-env")
});
