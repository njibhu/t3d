#!/usr/bin/env ts-node
import * as r2pipe from "r2pipe";
import { RDataParser } from "../lib/rdata-parsing";
import { StructTabParser } from "../lib/struct-parsing";

async function run(){
  const filePath = process.argv[2];

  if (!filePath) {
    console.error("Require path to executable file");
    process.exit(1);
  }
  
  console.log("Opening exe file...");
  const r2 = r2pipe.open(filePath);
  const segments = r2.cmdj("iSj");
  
  const rdata = segments.find(i => i.name === ".rdata");
  
  
  if (rdata) {
    const { vaddr, vsize } = rdata;
    console.log("Found rdata!");
    r2.cmd(`s ${vaddr}`);
  
    const arrayBuffer = new Uint8Array(r2.cmdj(`pxj ${vsize}`));
    const dataView = new DataView(arrayBuffer.buffer);

    const simpleParser = new RDataParser(dataView, vaddr, vaddr + vsize);
    const structParser = new StructTabParser(dataView, vaddr, vaddr + vsize);
    const chunks = simpleParser.listChunks();

    for(const chunk of chunks){
      structParser.parseStructTab(chunk.offset, chunk.versions);
    }
  
    console.log(chunks.map(c => c.name).join("\n"));
    console.log(chunks.length);
  
  }
  
  r2.quit();

}

run();
