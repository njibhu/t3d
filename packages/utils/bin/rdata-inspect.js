#!/usr/bin/env node

const r2pipe = require('r2pipe');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Require path to executable file');
  process.exit(1);
}

console.log('Opening exe file...');
const r2 = r2pipe.open(filePath);
const segments = r2.cmdj('iSj');

const rdata = segments.find(i => i.name === '.rdata');

if (rdata) {
  console.log('Found rdata!');
  console.log(rdata);

  console.log(r2.cmd(`s ${rdata.vaddr}`));
  console.log(r2.cmd('px'));
}

r2.quit();
