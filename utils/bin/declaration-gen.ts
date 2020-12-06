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
    let declarations: any = {};
    for (const version of module) {
      declarations = { ...declarations, ...parseVersion(version) };
    }

    await fs.writeFile(
      path.resolve(destinationFolder, definitionModule.replace(".ts", ".d.ts")),
      toDeclarationFile(declarations)
    );

    await await generateIndex(destinationFolder, ".d.ts");
  }
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

function toDeclarationFile(data: any) {
  let fileContent = "";
  for (const [type, value] of Object.entries(data)) {
    fileContent += `

export type ${type} = ${JSON.stringify(value, null, 2).replace(/"/g, "")}`;
  }

  return fileContent;
}

run();
