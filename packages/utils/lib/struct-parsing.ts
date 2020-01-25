import { RDataView } from "./rdataview";
import { basicTypes } from "./anet-types";

interface StructTab {
  versions: number,
  structArray: Struct[],
  chunkName: string
}

interface Struct {
  name: string,
  members?: string[],
  version?: number,
  definitions?: any[]
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
        structArray.push(this.parseStruct(currentAddress, loopIndex));
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
    const tempOutput = { member: undefined, definition: undefined};
    let memberDefinition;

    // Cover basic types
    if(basicTypes[typeId]){
      tempOutput.member = `'${memberName}', ${basicTypes[typeId]}`;
    }

    // Complex types
    else {
      const psAdr = this.rdataView.getAddress(address + 16);

      const isGlobalStruct = psAdr > 0 ? this.rdataView.getUint8(this.rdataView.getAddress(psAdr + 8)) === 0 : true;
      memberDefinition = psAdr > 0 ? this.parseStruct(psAdr) : undefined;

      if(typeId === 1){
        tempOutput.member = isGlobalStruct ?
        `'${memberName}', ['[]', ${memberDefinition.name}, ${this.rdataView.getUint32(address + 24)}]` :
        `'${memberName}', ['[]', this.${memberDefinition.name}, ${this.rdataView.getUint32(address + 24)}]`;
      }

      else if(typeId === 2){
        tempOutput.member = isGlobalStruct ?
          `'${memberName}', Utils.getArrayReader(${memberDefinition.name})` :
          `'${memberName}', Utils.getArrayReader(this.${memberDefinition.name})`;
      }

      else if(typeId === 3){
        tempOutput.member = isGlobalStruct ?
          `'${memberName}', Utils.getRefArrayReader(${memberDefinition.name})` :
          `'${memberName}', Utils.getRefArrayReader(this.${memberDefinition.name})`;
      }

      else if (typeId === 16){ // 0x10
        tempOutput.member = isGlobalStruct ?
          `'${memberName}', Utils.getPointerReader(${memberDefinition.name})` : 
          `'${memberName}', Utils.getPointerReader(this.${memberDefinition.name})`;
      }

      else if([20,29].includes(typeId)){ //0x14 and 0x1D
        tempOutput.member = isGlobalStruct ?
          `'${memberName}', ${memberDefinition.name}`:
          `'${memberName}', this.${memberDefinition.name}`;
      }

      // Unknown types
      else if([4, 8, 9, 28].includes(typeId)){
        tempOutput.member = `'${memberName}', "Unknown${typeId}"`;
      }

      else {
        throw new InvalidTypeId(typeId, memberName);
      }

      // Attach the custom type definition to the return object
      if(!isGlobalStruct){
        tempOutput.definition = memberDefinition;
      }
    }

    return tempOutput;
  }

  parseStruct(address: number, version?: number): Struct{
    let currentAddress = address;
    const alreadyParsed = this.parsedStructsId.has(address);
    this.parsedStructsId.add(address);
  
    // Simple types
    if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) === 0){
      const simpleType = this.getSimpleTypeName(address);

      return { name: simpleType };
    }
    
    const members = [];
    let definitions = [];

    while(this.rdataView.getUint16(currentAddress) != 0){
      const { member, definition } = this.parseMember(currentAddress);
      
      if(Array.isArray(definition)){
        definitions = dedupe(definitions.concat(flatDefinitions(definition)));
      }

      if(definition && !definitions.find(d => d.name === definition.name)){
        // Flat-out sub definitions
        const subDefs = definition.definitions ? definition.definitions : [];
        for(const subDefinition of subDefs){
          if(!definitions.find(d=>d.name === subDefinition.name)){
            definitions.push(subDefinition);
          }
        }
        definitions.push(definition);
      }
      if(member === null){
        break;
      }
      members.push(member);
      currentAddress += 32;
    }

    this.structName = this.rdataView.getAsciiString(this.rdataView.getAddress(currentAddress + 8));

    if(definitions.length > 0){
      return { name: this.structName, members, version, definitions};
    } else {
      return { name: this.structName, members, version };
    }
  }
}

class InvalidTypeId extends TypeError {
  constructor(typeId, memberName){
    super(`Invalid typeId: ${typeId} in ${memberName}`);
  }
}

function flatDefinitions(defs){
  let flatDefs = []
  for(const {definitions, name, version, member} of defs){
    if(Array.isArray(definitions)){
      flatDefs = flatDefs.concat(flatDefinitions(definitions));
    }
    flatDefs.push({name, version, member})
  }
  return flatDefs;
}

function dedupe(array: Array<any>){
  return array.reduce((pv, cv) => {
    if(!pv.find(i => i.name === cv.name)){
      pv.push(cv);
    }
    return pv;
  }, [])
}