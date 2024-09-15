import * as fs from "fs";

import * as HAVK from "../definitions/HAVK";
import { DataParser } from "../src/data-parser";
import { parseFile, parseAllChunks } from "../src/utils";

import { toArrayBuffer } from "./test-helper";

test("matches for havk1", function () {
  const chunkBuffer = fs.readFileSync("./test/havk1.bin", null);
  const dv = new DataView(toArrayBuffer(chunkBuffer));
  const fileHead = parseFile(dv);
  const allChunks = parseAllChunks(dv, fileHead.newPosition);
  const is64Bit = fileHead.data.flags == 5;

  expect(allChunks).toEqual([
    {
      chunkHeader: { chunkDataSize: 976, chunkHeaderSize: 16, chunkVersion: 14, offsetTableOffset: 848, type: "havk" },
      chunkPosition: 12,
    },
  ]);
  const havkChunk = allChunks.find((c) => c.chunkHeader.type === "havk");
  const def = HAVK.definitions[(`V${havkChunk!.chunkHeader.chunkVersion}`) as keyof typeof HAVK["definitions"]];
  const parser = new DataParser(def, is64Bit);
  //parser.DEBUG = true;
  const test = parser.parse(dv, havkChunk!.chunkPosition + havkChunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchSnapshot("havk1");
});
