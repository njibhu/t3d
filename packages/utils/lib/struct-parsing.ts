import { RDataView } from "./rdataview";
import { anetTypes } from "./anet-types";

interface StructTab {
  versions: number;
  structArray: Struct[];
  chunkName: string;
}

interface Struct {
  name: string;
  members?: string[];
  version?: number;
  definitions?: any[];
}

interface Member {
  member: string;
  definition?: Struct;
}

export class StructTabParser {
  private rdataView: RDataView;

  constructor(dataView: DataView, rdataMin: number, rdataMax: number) {
    this.rdataView = new RDataView(dataView, rdataMin, rdataMax);
  }

  public parseStructTab(address: number, nbVersions: number, chunkName: string): StructTab {
    let currentAddress = address;
    let loopIndex = nbVersions - 1;
    const historyDepth = 100;
    const structArray = [];

    while (loopIndex >= 0 && loopIndex >= nbVersions - historyDepth) {
      currentAddress = this.rdataView.getAddress(address + 24 * loopIndex);
      if (currentAddress > 0) {
        structArray.push(this.parseStruct(currentAddress, loopIndex));
      }
      loopIndex -= 1;
    }

    return { structArray, versions: nbVersions, chunkName };
  }

  getSimpleTypeName(address: number): string {
    const typeId = this.rdataView.getUint8(address);
    return anetTypes[typeId]();
  }

  parseMember(address: number): Member {
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

    if (hasCustomSubType) {
      return {
        member: `${memberName}, ${memberType}`,
        definition: memberDefinition,
      };
    } else {
      return { member: `${memberName}, ${memberType}` };
    }
  }

  parseStruct(address: number, version?: number): Struct {
    let currentAddress = address;

    // Simple types
    if (this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) === 0) {
      const simpleType = this.getSimpleTypeName(address);

      return { name: simpleType };
    }

    const members = [];
    let definitions: Struct[] = [];

    while (this.rdataView.getUint16(currentAddress) != 0) {
      const { member, definition } = this.parseMember(currentAddress);

      if (definition) {
        definitions = dedupe(
          definitions.concat(definition.definitions ? flatDefinitions(definition.definitions) : [], [
            { name: definition.name, members: definition.members, version: definition.version },
          ])
        );
      }

      if (member === null) {
        break;
      }
      members.push(member);
      currentAddress += 32;
    }

    const structNameAddress = this.rdataView.getAddress(currentAddress + 8);
    const structName = this.rdataView.getAsciiString(structNameAddress);

    if (definitions.length > 0) {
      return { name: structName, members, version, definitions };
    } else {
      return { name: structName, members, version };
    }
  }
}

function dedupe(array: Array<Struct>) {
  return array.reduce((pv: Array<Struct>, cv: Struct) => {
    if (!pv.find(i => i.name === cv.name)) {
      pv.push(cv);
    }
    return pv;
  }, []);
}

function flatDefinitions(defs: Array<Struct>): Array<Struct> {
  let flatDefs: Array<Struct> = [];
  for (const { definitions, name, version, members } of defs) {
    if (Array.isArray(definitions)) {
      flatDefs = flatDefs.concat(flatDefinitions(definitions));
    }
    flatDefs.push({ name, version, members });
  }
  return flatDefs;
}
