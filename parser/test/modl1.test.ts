import * as fs from "fs";

import { DataParser } from "../src/data-parser";
import { parseFile, parseAllChunks } from "../src/file-parser";

import {  toArrayBuffer } from "./test-helper";

import * as MODL from "../definitions/MODL";
import * as PRPS from "../definitions/PRPS";
import * as ANIM from "../definitions/ANIM";
import * as COLL from "../definitions/COLL";
import * as GEOM from "../definitions/GEOM";

const chunkBuffer = fs.readFileSync("./test/modl1.bin", null);
const dv = new DataView(toArrayBuffer(chunkBuffer));
const fileHead = parseFile(dv);
const allChunks = parseAllChunks(dv, fileHead.newPosition);
const is64Bit = fileHead.data.flags == 5;

test("contains the correct chunks", function () {
  expect(allChunks.map((c) => c.chunkHeader.type)).toEqual(["MODL", "SKEL", "PRPS", "ANIM", "COLL", "GEOM", "ROOT"]);
});

test("matches for MODL", function () {
  const modlChunk = allChunks.find((c) => c.chunkHeader.type === "MODL");
  const def = MODL.definitions[`V${modlChunk!.chunkHeader.chunkVersion}` as keyof typeof MODL["definitions"]];
  const test = new DataParser(def, is64Bit).parse(dv, modlChunk!.chunkPosition + modlChunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchSnapshot("modl-modl")
});

test("matches for PRPS", function () {
  const prpsChunk = allChunks.find((c) => c.chunkHeader.type === "PRPS");
  const def = PRPS.definitions[`V${prpsChunk!.chunkHeader.chunkVersion}` as keyof typeof PRPS["definitions"]];
  const test = new DataParser(def, is64Bit).parse(dv, prpsChunk!.chunkPosition + prpsChunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchSnapshot("modl-prps")
});

test("matches for ANIM", function () {
  const animChunk = allChunks.find((c) => c.chunkHeader.type === "ANIM");
  const def = ANIM.definitions[`V${animChunk!.chunkHeader.chunkVersion}` as keyof typeof ANIM["definitions"]];
  const test = new DataParser(def, is64Bit).parse(dv, animChunk!.chunkPosition + animChunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchSnapshot("modl-anim")
});

// COLL
test("matches for COLL", function () {
  const collChunk = allChunks.find((c) => c.chunkHeader.type === "COLL");
  const def = COLL.definitions[`V${collChunk!.chunkHeader.chunkVersion}` as keyof typeof COLL["definitions"]];
  const test = new DataParser(def, is64Bit).parse(dv, collChunk!.chunkPosition + collChunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchSnapshot("modl-coll")
});

// GEOM
test("matches for GEOM", function () {
  const geomChunk = allChunks.find((c) => c.chunkHeader.type === "GEOM");
  const def = GEOM.definitions[`V${geomChunk!.chunkHeader.chunkVersion}` as keyof typeof GEOM["definitions"]];
  const test = new DataParser(def, is64Bit).parse(dv, geomChunk!.chunkPosition + geomChunk!.chunkHeader.chunkHeaderSize);
  expect(test.data).toMatchSnapshot("modl-geom")
});
