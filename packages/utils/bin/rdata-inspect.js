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
  const { vaddr, vsize } = rdata;
  const rdataMin = rdata.vaddr;
  const rdataMax = rdata.vaddr + rdata.vsize;

  function offsetAddr(loadedAddress){
    return loadedAddress - rdataMin;
  }
  
  function isValidAddr(address){
    const nAddress = address + rdataMin;
    return nAddress > rdataMin && nAddress < rdataMax;
  }

  console.log("Found rdata!");
  r2.cmd(`s ${vaddr}`);

  const arrayBuffer = new Uint8Array(r2.cmdj(`pxj ${vsize}`));
  const dataView = new DataView(arrayBuffer.buffer);

  for (let cursor = 0; cursor < vsize; cursor += 4) {
    const buffer = arrayBuffer.slice(cursor, cursor + 4);

    if (isFourAscii(buffer)) {
      const structPtr = offsetAddr(getUint64(dataView, cursor + 8));
      const fourcc = buffer;
      const versions = dataView.getUint32(cursor + 4, true);
      if (versions > 0 && versions < 100) {
        if (isValidAddr(structPtr)) {
          if (isANStructTab(structPtr, { dataView, versions, rdataMin, rdataMax, offsetAddr, isValidAddr })) {
            // Register found string
            stringFound.push(ascii.write(fourcc).replace(/\u0000/, ""));
          }
        }
      }
    }
  }

  const filteredStrings = Array.from(new Set(stringFound));
  console.log(filteredStrings.join("\n"));
  console.log(filteredStrings.length);
}

r2.quit();

//
// Functions
//
function isANStruct(address, { dataView, offsetAddr, isValidAddr }) {
  if(!isValidAddr(address)){
    return false;
  }

  let currentAddress = address;
  let loopGuard = 50;

  while (dataView.getUint16(currentAddress, true) != 0 && loopGuard > 0) {
    if (dataView.getUint16(currentAddress, true) > 29) {
      return false;
    }

    currentAddress += 32;
    loopGuard -= 1;
  }

  const destAddr = offsetAddr(getUint64(dataView, currentAddress + 8));
  return loopGuard != 0 && isValidAddr(destAddr) && isFourAscii([dataView.getUint8(destAddr), dataView.getUint8(destAddr+1), dataView.getUint8(destAddr+2), dataView.getUint8(destAddr+3)]);
}

function isANStructTab(address, { dataView, versions, offsetAddr, isValidAddr }) {
  if(!isValidAddr(address)){
    return false;
  }

  let currentAddress = address;
  let loopIndex = 0;

  while (loopIndex < versions) {
    if (getUint64(dataView, currentAddress) != 0) {
      if (!isANStruct(offsetAddr(getUint64(dataView, currentAddress)), { dataView, offsetAddr, isValidAddr })) {
        break;
      }
    }
    currentAddress += 24;
    loopIndex += 1;
  }

  return loopIndex === versions;
}

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
function getUint64(dataview, byteOffset, littleEndian = true) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset + 4, littleEndian);

  // combine the two 32-bit values
  const combined = littleEndian
    ? left + 2 ** 32 * right
    : 2 ** 32 * left + right;

  return combined;
}
