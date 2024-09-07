import * as fs from "fs";

import { DataParser } from "../src/data-parser";
import { parseFile, parseAllChunks } from "../src/file-parser";

import {  toArrayBuffer } from "./test-helper";

import * as MODL from "../definitions/MODL";
import * as PRPS from "../definitions/PRPS";
import * as ANIM from "../definitions/ANIM";
import * as COLL from "../definitions/COLL";
import * as GEOM from "../definitions/GEOM";
import * as ROOT from "../definitions/ROOT";

const chunkBuffer = fs.readFileSync("./test/modl2.bin", null);
const dv = new DataView(toArrayBuffer(chunkBuffer));
const fileHead = parseFile(dv);
const allChunks = parseAllChunks(dv, fileHead.newPosition);

describe.skip("modl2", () => {
  test("matches for MODL", function () {
    const modlChunk = allChunks.find((c) => c.chunkHeader.type === "MODL");
    const def = MODL.definitions[`V${modlChunk!.chunkHeader.chunkVersion}` as keyof typeof MODL["definitions"]];
    const test = new DataParser(def).parse(dv, modlChunk!.chunkPosition + modlChunk!.chunkHeader.chunkHeaderSize);
    expect(test.data).toMatchSnapshot("modl2-modl")
  });

  test("matches for PRPS", function () {
    const prpsChunk = allChunks.find((c) => c.chunkHeader.type === "PRPS");
    const def = PRPS.definitions[`V${prpsChunk!.chunkHeader.chunkVersion}` as keyof typeof PRPS["definitions"]];
    const test = new DataParser(def).parse(dv, prpsChunk!.chunkPosition + prpsChunk!.chunkHeader.chunkHeaderSize);
    expect(test.data).toMatchSnapshot("modl2-prps")
  });

  test("matches for ANIM", function () {
    const animChunk = allChunks.find((c) => c.chunkHeader.type === "ANIM");
    const def = ANIM.definitions[`V${animChunk!.chunkHeader.chunkVersion}` as keyof typeof ANIM["definitions"]];
    const test = new DataParser(def).parse(dv, animChunk!.chunkPosition + animChunk!.chunkHeader.chunkHeaderSize);
    expect(test.data).toMatchSnapshot("modl2-anim")
  });

  // COLL
  test("matches for COLL", function () {
    const collChunk = allChunks.find((c) => c.chunkHeader.type === "COLL");
    const def = COLL.definitions[`V${collChunk!.chunkHeader.chunkVersion}` as keyof typeof COLL["definitions"]];
    const test = new DataParser(def).parse(dv, collChunk!.chunkPosition + collChunk!.chunkHeader.chunkHeaderSize);
    expect(test.data).toMatchSnapshot("modl2-coll")
  });

  // GEOM
  test("matches for GEOM", function () {
    const geomChunk = allChunks.find((c) => c.chunkHeader.type === "GEOM");
    const def = GEOM.definitions[`V${geomChunk!.chunkHeader.chunkVersion}` as keyof typeof GEOM["definitions"]];
    const test = new DataParser(def).parse(dv, geomChunk!.chunkPosition + geomChunk!.chunkHeader.chunkHeaderSize);
    expect(test.data).toMatchSnapshot("modl2-geom")
  });

  //ROOT
  test("matches for ROOT", function () {
    const rootChunk = allChunks.find((c) => c.chunkHeader.type === "ROOT");
    const def = ROOT.definitions[`V${rootChunk!.chunkHeader.chunkVersion}` as keyof typeof ROOT["definitions"]];
    const test = new DataParser(def).parse(dv, rootChunk!.chunkPosition + rootChunk!.chunkHeader.chunkHeaderSize);
    expect(test.data).toMatchSnapshot("modl2-root")
  });
});