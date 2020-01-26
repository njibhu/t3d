#!/usr/bin/env ts-node
import { R2Pipe } from "r2pipe-promise";
import { RDataParser } from "../lib/rdata-parsing";
import { StructTabParser } from "../lib/struct-parsing";
import { writeFileSync } from "fs";

async function run(){
  const filePath = process.argv[2];
  const destinationFolder = process.argv[3];

  if (!filePath) {
    console.error("Require path to executable file");
    process.exit(1);
  }
  
  console.log("Opening exe file...");
  const r2 = await R2Pipe.open(filePath);
  const segments : any[] = JSON.parse(await r2.cmd("iSj"));
  
  const rdata = segments.find(i => i.name === ".rdata");
  
  
  if (rdata) {
    const { vaddr, vsize } = rdata;
    console.log("Found rdata!");
    await r2.cmd(`s ${vaddr}`);

    const arrayBuffer = new Uint8Array(JSON.parse(await r2.cmd(`pxj ${vsize}`)));
    const dataView = new DataView(arrayBuffer.buffer);

    const simpleParser = new RDataParser(dataView, vaddr, vaddr + vsize);
    const structParser = new StructTabParser(dataView, vaddr, vaddr + vsize);
    const chunks = simpleParser.listChunks();

    for(const chunk of chunks){
      console.log(`Parsing ${chunk.name}`);
      const currentChunk = structParser.parseStructTab(chunk.offset, chunk.versions, chunk.name);
      writeFileSync(`${destinationFolder}/${chunk.name}_${chunk.offset}.json`, JSON.stringify(currentChunk, null, 2));
    }
  
  }
  
  r2.quit();

}

run().catch(error => {
  console.error(error);
  process.exit(1);
}).then(()=> process.exit(0));
