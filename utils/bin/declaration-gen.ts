/*
  This utils reads generated definitions files and create corresponding typescript definitions to be used by the parsers
  This program is meant to be run with ts-node. It relies on its ability to require typescript files.
*/

import { promises as fs } from "fs";
import * as path from "path";
import { generateIndex } from "../lib/exports-list";

type FieldsDefinition = { [key: string]: any };
type FieldsDeclaration = { [key: string]: string };

interface DefinitionModule {
  name: string;
  definitions?: {
    [struct: string]: FieldsDefinition;
  };
  root: FieldsDefinition;
  version: string;
}

async function run() {
  const definitionPath = process.argv[2];
  const destinationFolder = process.argv[3];
  if (!definitionPath || !destinationFolder) throw new Error("Missing arguments");

  const declarationList = await fs.readdir(definitionPath);
  for (const definitionModule of declarationList) {
    if (definitionModule === "index.ts") {
      continue;
    }
    console.log(definitionModule);
    const modulePath = path.resolve(definitionPath, definitionModule);
    if (!modulePath.endsWith(".ts")) throw new Error(`${modulePath} is not a typescript file`);

    const module: DefinitionModule[] = require(modulePath).definitionArray;
    let declarations: any[] = [];
    for (const version of module) {
      declarations.push({ version: version.version, definitions: parseVersion(version), root: version.name });
    }

    let declarationContent = toDeclarationFile(declarations);
    declarationContent += genVersionUnions(module);

    await fs.writeFile(path.resolve(destinationFolder, definitionModule.replace(".ts", ".d.ts")), declarationContent);
  }

  await generateIndex(destinationFolder, ".d.ts");
}

function parseVersion(version: DefinitionModule): { [type: string]: FieldsDeclaration } {
  const declarations: { [type: string]: FieldsDeclaration } = {};
  declarations[version.name] = definitionToDeclaration(version.root);

  if (version.definitions) {
    const definitionsNames = Object.keys(version.definitions);
    for (const definitionName of definitionsNames) {
      declarations[definitionName] = definitionToDeclaration(version.definitions[definitionName]);
    }
  }

  return declarations;
}

function definitionToDeclaration(definition: FieldsDefinition): FieldsDeclaration {
  const declaration: FieldsDeclaration = {};
  const definitionKeys = Object.keys(definition);
  for (const key of definitionKeys) {
    declaration[key] = definition[key].declarationType ? definition[key].declarationType : definition[key];
  }
  return declaration;
}

function genVersionUnions(versions: any[]): string {
  let content = "";
  for (const version of versions) {
    const index = versions.indexOf(version);
    content += `export type V${version.version}_U = ${versions
      .slice(index)
      .map((i) => `V${i.version}`)
      .join(" | ")};\n`;
  }

  return content;
}

function toDeclarationFile(data: any) {
  let fileContent = "";
  for (const { version, definitions, root } of data) {
    fileContent += `export namespace V${version}_N {\n`;
    for (const [type, value] of Object.entries(definitions as any)) {
      fileContent += `  export type ${type} = ${JSON.stringify(value, null, 4).replace(/"/g, "")}\n\n`;
      fileContent = fileContent.slice(0, -3) + "  }\n\n";
    }
    fileContent += "}\n\n";
    fileContent += `export type V${version} = V${version}_N.${root};\n\n`;
  }

  return fileContent;
}

run();
