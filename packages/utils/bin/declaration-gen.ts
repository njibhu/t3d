/*
  This utils reads generated definitions files and create corresponding typescript definitions to be used by the parsers
  This program is meant to be run with ts-node. It relies on its ability to require typescript files.
*/

import { transform } from "../lib/declaration-types";

type FieldsDefinition = { [key: string]: string };
type FieldsDeclaration = { [key: string]: string };

interface DefinitionModule {
  name: string;
  definitions: {
    [struct: string]: FieldsDefinition;
  };
  root: FieldsDefinition;
}

async function run() {
  const definitionFilePath = "";
  const module: [DefinitionModule] = require(definitionFilePath);
  let declarations: any = {};
  for (const version of module) {
    declarations = { ...declarations, ...parseVersion(version) };
  }

  console.log(JSON.stringify(declarations), null, 2);
}

function parseVersion(version: DefinitionModule): { [type: string]: FieldsDeclaration } {
  const declarations: { [type: string]: FieldsDeclaration } = {};
  declarations[version.name] = definitionToDeclaration(version.root);

  const definitionsNames = Object.keys(version.definitions);
  for (const definitionName of definitionsNames) {
    declarations[definitionName] = definitionToDeclaration(version.definitions[definitionName]);
  }

  return declarations;
}

function definitionToDeclaration(definition: FieldsDefinition): FieldsDeclaration {
  const declaration: FieldsDeclaration = {};
  const definitionKeys = Object.keys(definition);
  for (const key of definitionKeys) {
    declaration[key] = transform(definition[key]);
  }
  return declaration;
}
