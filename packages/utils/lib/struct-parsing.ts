import { RDataView } from "./rdataview";
import { basicTypes } from "./anet-types";

interface StructTab {
  versions: number,
  structArray: Struct[],
  chunkName: string
}

interface Struct {
  name: string,
  members?: string[]
}

export class StructTabParser {
  private parsedStructsId: Set<number>;
  private rdataView : RDataView;

  private structName : string;

  constructor(dataView: DataView,  rdataMin: number, rdataMax: number){
    this.parsedStructsId = new Set();
    this.rdataView = new RDataView(dataView, rdataMin, rdataMax);
  }

  public parseStructTab(address: number, nbVersions: number, chunkName: string): StructTab {
    let currentAddress = address;
    let loopIndex = nbVersions - 1;
    const historyDepth = 100;
    const structArray = [];

    while (loopIndex >= 0 && loopIndex >= nbVersions - historyDepth) {
      currentAddress = this.rdataView.getAddress(address + (24 * loopIndex));
      if (currentAddress > 0){
        structArray.push(this.parseStruct(currentAddress, true));
      }
      loopIndex -= 1;
    }

    return { structArray, versions: nbVersions, chunkName }
  }

  getSimpleTypeName(address: number): string{
    const typeId = this.rdataView.getUint8(address);
    return basicTypes[typeId];
  }

  parseMember(address: number){
    const memberName = this.rdataView.getAsciiString(this.rdataView.getAddress(address + 8));
    const typeId = this.rdataView.getUint16(address);
    let tempOutput;

    // Cover basic types
    if(basicTypes[typeId]){
      tempOutput = `'${memberName}', ${basicTypes[typeId]}`;
    }

    else if(typeId === 1){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) === 0){
        tempOutput = `'${memberName}', ['[]', ${this.parseStruct(psAdr).name}, ${this.rdataView.getUint32(address + 24)}]`;
      }
      else {
        tempOutput = `'${memberName}', ['[]', this.${this.parseStruct(psAdr).name}, ${this.rdataView.getUint32(address + 24)}]`;
      }
    }

    else if(typeId === 2){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', Utils.getArrayReader(${this.parseStruct(psAdr).name})`
      } else {
        tempOutput = `'${memberName}', Utils.getArrayReader(this.${this.parseStruct(psAdr).name})`;
      }

    }

    else if(typeId === 3){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', Utils.getRefArrayReader(${this.parseStruct(psAdr).name})`
      } else {
        tempOutput = `'${memberName}', Utils.getRefArrayReader(this.${this.parseStruct(psAdr).name})`;
      }

    }

    else if (typeId === 16){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', Utils.getPointerReader(${this.parseStruct(psAdr).name})`
      } else {
        tempOutput = `'${memberName}', Utils.getPointerReader(this.${this.parseStruct(psAdr).name})`;
      }

    }

    else if(typeId === 20){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', ${this.parseStruct(psAdr).name}`
      } else {
        tempOutput = `'${memberName}', this.${this.parseStruct(psAdr).name}`;
      }

    }

    else if(typeId === 29){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', ${this.parseStruct(psAdr).name}`
      } else {
        tempOutput = `'${memberName}', this.${this.parseStruct(psAdr).name}`;
      }
    }

    // Unknown types
    else if([4, 8, 9, 28].includes(typeId)){
      tempOutput = `'${memberName}', "Unknown${typeId}"`;
    }

    else {
      throw new InvalidTypeId(typeId, memberName);
    }

    return tempOutput;
  }

  parseStruct(address: number, isBase: boolean = false): Struct{
    let currentAddress = address;
    const alreadyParsed = this.parsedStructsId.has(address);
    this.parsedStructsId.add(address);
  
    // Simple types
    if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) === 0){
      const simpleType = this.getSimpleTypeName(address);

      return { name: simpleType };
    }
    
    const members = [];
    while(this.rdataView.getUint16(currentAddress) != 0){
      const member = this.parseMember(currentAddress);
      if(member === null){
        break;
      }
      members.push(member);
      currentAddress += 32;
    }

    this.structName = this.rdataView.getAsciiString(this.rdataView.getAddress(currentAddress + 8));

    return { name: this.structName, members};
  }
}

class InvalidTypeId extends TypeError {
  constructor(typeId, memberName){
    super(`Invalid typeId: ${typeId} in ${memberName}`);
  }
}