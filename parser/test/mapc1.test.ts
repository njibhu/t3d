import * as fs from "fs";

import { DataParser } from "../src/data-parser";
import { parseFile, parseAllChunks } from "../src/file-parser";

import { transformSnapshot, toArrayBuffer } from "./test-helper";
import * as mapcSnapshots from "./mapc1";

import * as PARM from "../definitions/PARM";
import * as TRN from "../definitions/TRN";
import * as ENV from "../definitions/ENV";
import * as PRP2 from "../definitions/PRP2";

const chunkBuffer = fs.readFileSync("./test/mapc1.bin", null);
const dv = new DataView(toArrayBuffer(chunkBuffer));
const fileHead = parseFile(dv);
const allChunks = parseAllChunks(dv, fileHead.newPosition);

test("contains the correct chunks", function () {
  const chunkTypes = allChunks.map((c) => c.chunkHeader.type);
  expect(JSON.stringify(chunkTypes)).toEqual(JSON.stringify([
    "parm",
    "trn",
    "trni",
    "surf",
    "area",
    "laye",
    "msn",
    "cube",
    "havk",
    "zon2",
    "shex",
    "prp2",
    "rive",
    "dcal",
    "env",
    "audi",
    "lght",
    "exp"
  ]));
});

// PARM
test("matches for PARM", function () {
  const mapc1Result = transformSnapshot(mapcSnapshots.PARM);
  const modlChunk = allChunks.find((c) => c.chunkHeader.type === "parm");
  const def = PARM.definitions[`V${modlChunk!.chunkHeader.chunkVersion}` as keyof typeof PARM["definitions"]];
  const test = new DataParser(def).parse(dv, modlChunk!.chunkPosition + modlChunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchObject(mapc1Result);
});

// TRN
test("matches for TRN", function () {
  const mapc1Result = transformSnapshot(mapcSnapshots.TRN);
  const trnChunk = allChunks.find((c) => c.chunkHeader.type === "trn");
  const def = TRN.definitions[`V${trnChunk!.chunkHeader.chunkVersion}` as keyof typeof TRN["definitions"]];
  const parser = new DataParser(def);
  const test = parser.parse(dv, trnChunk!.chunkPosition + trnChunk!.chunkHeader.chunkHeaderSize);
  //fs.writeFileSync("./test/trn.json", JSON.stringify(test.data, (key, value) => typeof value === 'bigint' ? Number(value) : value, 2));
  expect(test.data).toMatchObject(mapc1Result);
});

// ENV
test("matches for ENV", function () {
  const mapc1Result = transformSnapshot(mapcSnapshots.ENV);
  const envChunk = allChunks.find((c) => c.chunkHeader.type === "env");
  const def = ENV.definitions[`V${envChunk!.chunkHeader.chunkVersion}` as keyof typeof ENV["definitions"]];
  const parser = new DataParser(def);
  parser.FIX_NEGATIVE_ZERO = true;
  const test = parser.parse(dv, envChunk!.chunkPosition + envChunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchObject(mapc1Result);
});

// PRP2
test("matches for PRP2", function () {
  const mapc1Result = transformSnapshot(mapcSnapshots.PRP2);
  const prp2Chunk = allChunks.find((c) => c.chunkHeader.type === "prp2");
  const def = PRP2.definitions[`V${prp2Chunk!.chunkHeader.chunkVersion}` as keyof typeof PRP2["definitions"]];
  const parser = new DataParser(def);
  const test = parser.parse(dv, prp2Chunk!.chunkPosition + prp2Chunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchObject(mapc1Result);
});