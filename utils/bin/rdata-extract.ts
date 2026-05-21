#!/usr/bin/env yarn ts-node
import { R2Pipe } from "r2pipe-promise";
import { RDataParser } from "../lib/rdata-parsing";
import { StructTabParser } from "../lib/struct-parsing";
import { getNameForChunk } from "../lib/chunk-mapping";
import { generateIndex } from "../lib/exports-list";
import { appendFileSync, writeFileSync } from "fs";

async function run() {
  const args = process.argv.slice(2);
  let debugStructsLogPath: string | undefined;
  const positionalArgs: string[] = [];

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--debug-structs") {
      debugStructsLogPath = args[index + 1];
      index += 1;
      continue;
    }

    if (arg.startsWith("--debug-structs=")) {
      debugStructsLogPath = arg.slice("--debug-structs=".length);
      continue;
    }

    positionalArgs.push(arg);
  }

  const filePath = positionalArgs[0];
  const destinationFolder = positionalArgs[1];

  if (!filePath) {
    console.error("Require path to executable file");
    process.exit(1);
  }

  if (!destinationFolder) {
    console.error("Require path to destination folder");
    process.exit(1);
  }

  if (args.includes("--debug-structs") && !debugStructsLogPath) {
    console.error("Require a log file path after --debug-structs");
    process.exit(1);
  }

  const debugLogger = debugStructsLogPath
    ? (message: string) => appendFileSync(debugStructsLogPath as string, `${message}\n`)
    : undefined;

  if (debugStructsLogPath) {
    writeFileSync(debugStructsLogPath, "");
    console.error(`Struct parser debug logging enabled: ${debugStructsLogPath}`);
  }

  console.log("Opening exe file...");
  const r2 = await R2Pipe.open(filePath);
  const segments: any[] = JSON.parse(await r2.cmd("iSj"));

  const rdata = segments.find((i) => i.name === ".rdata");

  if (rdata) {
    const { vaddr, vsize } = rdata;
    console.log("Found rdata!");
    await r2.cmd(`s ${vaddr}`);

    const arrayBuffer = new Uint8Array(JSON.parse(await r2.cmd(`pxj ${vsize}`)));
    const dataView = new DataView(arrayBuffer.buffer);

    const simpleParser = new RDataParser(dataView, vaddr, vaddr + vsize);
    const structParser = new StructTabParser(dataView, vaddr, vaddr + vsize, {
      debug: Boolean(debugStructsLogPath),
      continueOnUnknownMembers: Boolean(debugStructsLogPath),
      logger: debugLogger,
    });
    const chunks = simpleParser.listChunks();

    for (const chunk of chunks) {
      structParser.typesSet = new Set();
      console.log(`Parsing ${chunk.name}`);
      const currentChunk = structParser.parseStructTab(chunk.offset, chunk.versions, chunk.name);
      if (currentChunk.length === 0) {
        continue;
      }
      const imports = Array.from(structParser.typesSet).join(", ");
      const fileName = getNameForChunk(currentChunk, chunk.name);
      if (!fileName) {
        continue;
      }
      writeFileSync(
        `${destinationFolder}/${fileName}.ts`,
        `import { ${imports} } from "../src/types";

${currentChunk
  .map(
    (chunk) =>
      `const V${chunk.version} = ${JSON.stringify(chunk, null, 2)
        .replace(/"/g, "") // Remove all double quotes
        .replace(/'/g, '"')};` // Transform all single quotes into double quotes
  )
  .join("\n\n")}

export const latest = V${currentChunk.slice(-1)[0].version};
export const definitions = { ${currentChunk.map((c) => `V${c.version}`).join(", ")} };
export const definitionArray = Object.values(definitions);`
      );

      await generateIndex(destinationFolder);
    }
  }

  r2.quit();
}

run()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .then(() => process.exit(0));
