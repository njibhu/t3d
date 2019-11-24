#!/usr/bin/env node

const r2pipe = require("r2pipe");
const { StringDecoder } = require("string_decoder");
const ascii = new StringDecoder("ascii");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Require path to executable file");
  process.exit(1);
}

console.log("Opening exe file...");
const r2 = r2pipe.open(filePath);
const segments = r2.cmdj("iSj");

const rdata = segments.find(i => i.name === ".rdata");
const stringFound = [];

if (rdata) {
  const { vsize, vaddr } = rdata;
  console.log("Found rdata!");
  r2.cmd(`s ${vaddr}`);

  const arrayBuffer = new Uint8Array(r2.cmdj(`pxj ${vsize}`));
  const dataView = new DataView(arrayBuffer.buffer);

  for (let cursor = 0; cursor < vsize; cursor += 4) {
    const buffer = arrayBuffer.slice(cursor, cursor + 4);

    if (isFourAscii(buffer)) {
      const structPtr = getUint64(dataView, cursor + 8, true);
      if (structPtr > vaddr && structPtr < vaddr + vsize) {
        // Register found string
        stringFound.push(ascii.write(arrayBuffer.slice(cursor, cursor + 4)));
      }
    }
  }

  console.log(stringFound);
}

r2.quit();

//
// Functions
//

function isFourAscii(buffer) {
  return (
    isAscii(buffer[0]) &&
    isAscii(buffer[1]) &&
    isAscii(buffer[2]) &&
    (buffer[3] == 0 || isAscii(buffer[3]))
  );
}

function isAscii(byte) {
  return (
    (byte >= 48 && byte <= 57) ||
    (byte >= 65 && byte <= 90) ||
    (byte >= 97 && byte <= 122)
  );
}

// This is coming from MDN
function getUint64(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset + 4, littleEndian);

  // combine the two 32-bit values
  const combined = littleEndian
    ? left + 2 ** 32 * right
    : 2 ** 32 * left + right;

  return combined;
}
