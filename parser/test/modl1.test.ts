import * as fs from "fs";

import { DataParser } from "../src/data-parser";
import { parseFile, parseAllChunks } from "../src/file-parser";

import { transformSnapshot, toArrayBuffer } from "./test-helper";
import * as modlSnapshots from "./modl1";

import * as MODLDefs from "../definitions/MODL";
import * as PRPSDefs from "../definitions/PRPS";
import * as ANIMDefs from "../definitions/ANIM";
import * as COLLDefs from "../definitions/COLL";
import * as GEOMDefs from "../definitions/GEOM";

const chunkBuffer = fs.readFileSync("./test/modl1.bin", null);
const dv = new DataView(toArrayBuffer(chunkBuffer));
const fileHead = parseFile(dv);
const allChunks = parseAllChunks(dv, fileHead.newPosition);

test("contains the correct chunks", function () {
  expect(allChunks.map((c) => c.chunkHeader.type)).toEqual(["MODL", "SKEL", "PRPS", "ANIM", "COLL", "GEOM", "ROOT"]);
});

test("matches for MODL", function () {
  const modl1Result = transformSnapshot(modlSnapshots.MODL);
  const modlChunk = allChunks.find((c) => c.chunkHeader.type === "MODL");
  const def = MODLDefs[`V${modlChunk.chunkHeader.chunkVersion}`];
  const test = new DataParser(def).parse(dv, modlChunk.chunkPosition + modlChunk.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchObject(modl1Result);
});

test("matches for PRPS", function () {
  const prpsResult = transformSnapshot(modlSnapshots.PRPS);
  const prpsChunk = allChunks.find((c) => c.chunkHeader.type === "PRPS");
  const def = PRPSDefs[`V${prpsChunk.chunkHeader.chunkVersion}`];
  const test = new DataParser(def).parse(dv, prpsChunk.chunkPosition + prpsChunk.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchObject(prpsResult);
});

test("matches for ANIM", function () {
  const animResult = transformSnapshot(modlSnapshots.ANIM);
  const animChunk = allChunks.find((c) => c.chunkHeader.type === "ANIM");
  const def = ANIMDefs[`V${animChunk.chunkHeader.chunkVersion}`];
  const test = new DataParser(def).parse(dv, animChunk.chunkPosition + animChunk.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchObject(animResult);
});

// COLL
test("matches for COLL", function () {
  const collResult = transformSnapshot(modlSnapshots.COLL);
  const collChunk = allChunks.find((c) => c.chunkHeader.type === "COLL");
  const def = COLLDefs[`V${collChunk.chunkHeader.chunkVersion}`];
  const test = new DataParser(def).parse(dv, collChunk.chunkPosition + collChunk.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchObject(collResult);
});

// GEOM
test("matches for GEOM", function () {
  const geomResult = transformSnapshot(modlSnapshots.GEOM);
  const geomChunk = allChunks.find((c) => c.chunkHeader.type === "GEOM");
  const def = GEOMDefs[`V${geomChunk.chunkHeader.chunkVersion}`];
  const test = new DataParser(def).parse(dv, geomChunk.chunkPosition + geomChunk.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchObject(geomResult);
});
