import { RDataView } from "./rdataview";
import { anetTypes } from "./anet-types";

interface Struct {
  name: string;
  members?: { [name: string]: any };
  definitions?: { [name: string]: { [fieldName: string]: string } };
}

interface versionStruct {
  name: string;
  chunkName: string;
  root: { [name: string]: string };
  version: number;
  definitions?: { [name: string]: { [fieldName: string]: string } };
}

/**
 * This parser is the detailed chunk definition parser.
 * It will iterate through all the structures and generate a parser file for each chunks.
 */
export class StructTabParser {
  private rdataView: RDataView;
  public typesSet: Set<string>;

  constructor(dataView: DataView, rdataMin: number, rdataMax: number) {
    this.rdataView = new RDataView(dataView, rdataMin, rdataMax);
  }

  public parseStructTab(address: number, nbVersions: number, chunkName: string): versionStruct[] {
    let currentAddress = address;
    let loopIndex = nbVersions - 1;
    const historyDepth = 100;
    const versionDefinitions: versionStruct[] = [];

    while (loopIndex >= 0 && loopIndex >= nbVersions - historyDepth) {
      currentAddress = this.rdataView.getAddress(address + 24 * loopIndex);
      if (currentAddress > 0) {
        const rootStruct = this.parseStruct(currentAddress);

        if (!rootStruct.members) {
          throw new Error("The root struct must have members");
        }

        versionDefinitions.push({
          chunkName: `'${chunkName}'`,
          name: `'${rootStruct.name}'`,
          version: loopIndex,
          definitions: rootStruct.definitions,
          root: rootStruct.members,
        });
      }
      loopIndex -= 1;
    }

    // We reverse the array to get the last version last
    return versionDefinitions.reverse();
  }

  getSimpleTypeName(address: number): string {
    const typeId = this.rdataView.getUint8(address);
    const typeName = anetTypes[typeId]();

    // Add public types to be imported into the public typesSet
    this.typesSet.add(typeName.split("(")[0]);

    return typeName;
  }

  parseMember(address: number): { name: string; type: string; definition?: Struct } {
    const typeId = this.rdataView.getUint16(address);
    const memberNameAddress = this.rdataView.getAddress(address + 8);
    const memberName = this.rdataView.getAsciiString(memberNameAddress);

    const subTypeAddress = this.rdataView.getAddress(address + 16);
    const hasCustomSubType =
      subTypeAddress > 0 ? this.rdataView.getUint8(this.rdataView.getAddress(subTypeAddress + 8)) != 0 : true;
    const memberDefinition = subTypeAddress > 0 ? this.parseStruct(subTypeAddress) : undefined;
    const subTypeAmount = subTypeAddress > 0 ? this.rdataView.getUint32(address + 24) : undefined;

    const memberType = anetTypes[typeId](
      hasCustomSubType,
      memberDefinition ? memberDefinition.name : undefined,
      subTypeAmount
    );

    // Add public types to be imported into the public typesSet
    if (!memberType.startsWith("'")) {
      // Ignore custom types extra params
      const definitionSplit = memberType.split("(");
      const mainType = definitionSplit[0];
      this.typesSet.add(mainType);

      // A native type can also have a native subtype which also needs to be imported
      if (definitionSplit.length > 1) {
        if (!definitionSplit[1].startsWith("'") && definitionSplit[1] !== ")") {
          const match = /[a-zA-Z0-9]*/.exec(definitionSplit[1]);
          if (match) {
            this.typesSet.add(match[0]);
          }
          const deepMatch = /\(([a-zA-Z0-9]*)/.exec(memberDefinition?.name || "");
          if (deepMatch && deepMatch[1] !== "") {
            this.typesSet.add(deepMatch[1]);
          }
        }
      }
    }

    if (hasCustomSubType) {
      return {
        name: memberName,
        type: memberType,
        definition: memberDefinition,
      };
    } else {
      return { name: memberName, type: memberType };
    }
  }

  parseStruct(address: number): Struct {
    let currentAddress = address;

    // Simple types
    if (this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) === 0) {
      const simpleType = this.getSimpleTypeName(address);

      return { name: simpleType };
    }

    const members: { [name: string]: string } = {};
    const definitions: { [name: string]: any } = {};

    while (this.rdataView.getUint16(currentAddress) != 0) {
      const { name, type, definition } = this.parseMember(currentAddress);

      if (definition) {
        definitions[definition.name] = definition.members;
        if (definition.definitions) {
          for (const [key, value] of Object.entries(definition.definitions)) {
            definitions[key] = value;
          }
        }
      }

      if (name === null) {
        break;
      }
      members[getUniqueKey(members, name)] = type;
      currentAddress += 32;
    }

    const structNameAddress = this.rdataView.getAddress(currentAddress + 8);
    const structName = this.rdataView.getAsciiString(structNameAddress);

    if (Object.keys(definitions).length > 0) {
      return { name: structName, members, definitions };
    } else {
      return { name: structName, members };
    }
  }
}

/*
 * Sometimes some fields are defined multiple times.
 * To not break parsing, we just append an underscore to the field name.
 * This functions ensures that the field name is unique.
 *
 * Also, yes, last ones need the underscore, not the first ones, because if we'd rename
 * the fields, it would change the order of the fields in the javascript object.
 * And that would break parsing. (Otherwise we'd need to unshift the fields)
 */
function getUniqueKey(obj: Record<string, any>, name: string): string {
  if (Object.prototype.hasOwnProperty.call(obj, name)) {
    return getUniqueKey(obj, `${name}_`);
  } else {
    return name;
  }
}
