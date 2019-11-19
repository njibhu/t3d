#!/usr/bin/env node

const r2pipe = require("r2pipe");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Require path to executable file");
  process.exit(1);
}

console.log("Opening exe file...");
const r2 = r2pipe.open(filePath);
const segments = r2.cmdj("iSj");

const rdata = segments.find(i => i.name === ".rdata");

function isAscii(byte) {
  return (
    (byte >= 48 && byte <= 57) ||
    (byte >= 65 && byte <= 90) ||
    (byte >= 97 && byte <= 122)
  );
}

const stringFound = [];

if (rdata) {
  console.log("Found rdata!");
  console.log(rdata);
  const maxRDataAddress = rdata.vaddr + rdata.vsize;

  let cursor = rdata.vaddr;
  r2.cmd(`s ${cursor}`);
  let progress = 0;

  while (cursor < maxRDataAddress) {
    // TODO: This is super inefficient, load up a bigger buffer and iterate and refill over time
    // instead of putting load on IPC
    const buffer = r2.cmdj("pxj 4");
    if (
      isAscii(buffer[0]) &&
      isAscii(buffer[1]) &&
      isAscii(buffer[2]) &&
      (buffer[3] == 0 || isAscii(buffer[3]))
    ) {
      r2.cmd(`s +8`);
      const structPtr = r2.cmdj("pfjN8")[0].value;
      if (structPtr > rdata.vaddr && structPtr < rdata.vaddr + rdata.vsize) {
        r2.cmd(`s -8`);
        stringFound.push(r2.cmd("ps"));
        console.log(r2.cmd("ps"));
      }
    }

    const newProgress = Math.floor(
      ((cursor - rdata.vaddr) / rdata.vsize) * 100
    );
    if (progress != newProgress) {
      progress = newProgress;
      console.log(progress);
    }

    cursor += 4;
    r2.cmd(`s ${cursor}`);
  }

  console.log(stringFound);
}

r2.quit();
