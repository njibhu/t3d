//import * as HAVKTypes from "../declarations/HAVK";
import { latest as HAVKDef } from "../definitions/HAVK";
import { ChunkParser } from "./chunk-parser";
import * as fs from "fs";

function toArrayBuffer(buf) {
  var ab = new ArrayBuffer(buf.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}

try {
  debugger;
  const chunkBuffer = fs.readFileSync("../test/havk1.bin", null);
  const chunkParser = new ChunkParser(HAVKDef);

  const dv = new DataView(toArrayBuffer(chunkBuffer));
  const pos = 28; // After all the chunk and file headers
  setTimeout(() => {
    const test = chunkParser.parse(dv, pos);
    console.log(test);
  });
} catch (err) {
  console.log(err);
}
