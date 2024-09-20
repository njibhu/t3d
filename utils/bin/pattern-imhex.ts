import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const typeMappings = `
  const Float32 = 'Float32';
  const Float64 = 'Float64';
  const Uint8 = 'Uint8';
  const Uint16 = 'Uint16';
  const Uint32 = 'Uint32';
  const Uint64 = 'Uint64';
  const RefString = () => 'RefString';
  const CString = () => 'CString';
  const RefString16 = () => 'RefString16';
  const Filename = () => 'Filename';
  const Fileref = () => 'Fileref';
  const Pointer = (subType) => "Pointer<" + subType + ">";
  const FixedArray = (subType, length) => "FixedArray<" + subType + ", " + length + ">";
  const DynArray = (subType) => "DynArray<" + subType + ">";
  const RefArray = (subType) => "RefArray<" + subType + ">";
`;

/**
 * This script takes a defintion typescript file and generates a pattern file compatible with ImHex pattern language.
 * Usage: pattern-imhex <file> <version> <outputPath>
 * File: The definition file
 * Version: The version of the pattern (including the V prefix)
 * OutputPath: The output path of the pattern file (including file name)
 */

function main() {
  // Takes a file as argument
  if (process.argv.length < 5) {
    console.error("Usage: pattern-imhex <file> <version> <outputPath>");
    process.exit(1);
  }

  const file = process.argv[2];
  const version = process.argv[3];
  const outputPath = process.argv[4];
  console.log(outputPath);

  // Read the file
  const data = readFileSync(file, "utf8");
  let lines = data.split("\n");

  // remove the import and export lines
  lines = lines.filter((l) => !l.startsWith("import"));
  lines = lines.filter((l) => !l.startsWith("export"));

  // Create a script to evaluate the types and return an object easier to work with
  const script = `(() => {\n  ${typeMappings}\n  ${lines.map((c) => `  ${c}`).join("\n")}\n  return JSON.stringify(${version});\n})();`;

  const result = JSON.parse(eval(script));

  const defs = result.definitions;
  const root = result.root;

  const pfTypes = readFileSync(resolve(__dirname, "../imhex/pf_types.pat"), "utf8");
  const patternResult = pfTypes.split("\n");

  // Generate "Using declarations"
  for (const name in defs) {
    patternResult.push(`using ${name};`);
  }
  patternResult.push("");

  // Generate "Struct definitions"
  for (const name in defs) {
    const def = defs[name];
    patternResult.push(`struct ${name} {`);
    for (const field in def) {
      patternResult.push(`  ${def[field]} ${field};`);
    }
    patternResult.push(`};`);
  }

  // Generate "Root struct"
  patternResult.push(`struct ${version} {`);
  for (const name in root) {
    patternResult.push(`  ${root[name]} ${name};`);
  }
  patternResult.push(`};`);

  // Write to the file
  writeFileSync(outputPath, patternResult.join("\n"));
}

main();
