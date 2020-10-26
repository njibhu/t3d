import { latest as HAVKDef } from "../definitions/HAVK";
import { ChunkParser } from "../src/chunk-parser";
import { snapshot } from "./havk1";
import { transformSnapshot, toArrayBuffer } from "./test-helper";
import * as fs from "fs";

const havk1Result = transformSnapshot(snapshot);

test("matches for havk1", function () {
  const chunkBuffer = fs.readFileSync("./test/havk1.bin", null);
  const chunkParser = new ChunkParser(HAVKDef);

  const dv = new DataView(toArrayBuffer(chunkBuffer));
  const pos = 28; // After all the chunk and file headers

  const test = chunkParser.parse(dv, pos);
  expect(test.data).toMatchObject(havk1Result);
});
