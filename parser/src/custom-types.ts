import { DataType } from "./internals";

interface CustomParser {
  read: (dv: DataView, pos: number) => { newPosition: number; data: any };
}

const typeRegistry: Map<string, CustomParser> = new Map();

export function CustomType(name: string, definition: { [key: string]: DataType }): CustomParser {
  function read(dv: DataView, pos: number) {
    return { newPosition: pos, data: {} };
  }

  const customType = { read };
  typeRegistry.set(name, customType);

  return customType;
}

export function getCustomType(name: string): CustomParser {
  return typeRegistry.get(name);
}

export function registerDefinitions(definition: any) {
  for (const memberName in definition.definitions) {
    CustomType(memberName, definition.definitions[memberName]);
  }
}
