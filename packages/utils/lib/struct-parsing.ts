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

interface Member {
  member: string,
  definition?: Struct
}

export class StructTabParser {
  private rdataView : RDataView;

  constructor(dataView: DataView, rdataMin: number, rdataMax: number){
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
    const typeId = this.rdataView.getUint16(address);
    const memberNameAddress = this.rdataView.getAddress(address + 8);
    const memberName = this.rdataView.getAsciiString(memberNameAddress);
    
    let tempOutput : Member = {member: ""};
    let memberDefinition : Struct | undefined;

    // Cover basic types
    if(basicTypes[typeId]){
      tempOutput.member = `'${memberName}', ${basicTypes[typeId]}`;
    }

    // Complex types
    else {
      const subTypeAddress = this.rdataView.getAddress(address + 16);
      const hasCustomSubType = subTypeAddress > 0 ? this.rdataView.getUint8(this.rdataView.getAddress(subTypeAddress + 8)) != 0 : true;
      
      memberDefinition = subTypeAddress > 0 ? this.parseStruct(subTypeAddress) : undefined;

      if(typeId === 1 && memberDefinition){
        tempOutput.member = hasCustomSubType ?
        `'${memberName}', ['[]', this.${memberDefinition.name}, ${this.rdataView.getUint32(address + 24)}]`:
        `'${memberName}', ['[]', ${memberDefinition.name}, ${this.rdataView.getUint32(address + 24)}]`;
      }

      else if(typeId === 2 && memberDefinition){
        tempOutput.member = hasCustomSubType ?
        `'${memberName}', Utils.getArrayReader(this.${memberDefinition.name})`:
          `'${memberName}', Utils.getArrayReader(${memberDefinition.name})` ;
      }

      else if(typeId === 3 && memberDefinition){
        tempOutput.member = hasCustomSubType ?
        `'${memberName}', Utils.getRefArrayReader(this.${memberDefinition.name})`:
          `'${memberName}', Utils.getRefArrayReader(${memberDefinition.name})`;
      }

      else if (typeId === 16 && memberDefinition){ // 0x10
        tempOutput.member = hasCustomSubType ?
        `'${memberName}', Utils.getPointerReader(this.${memberDefinition.name})`:
          `'${memberName}', Utils.getPointerReader(${memberDefinition.name})` ;
      }

      else if([20,29].includes(typeId) && memberDefinition){ //0x14 and 0x1D
        tempOutput.member = hasCustomSubType ?
        `'${memberName}', this.${memberDefinition.name}`:
          `'${memberName}', ${memberDefinition.name}`;
      }

      // Unknown types
      else if([4, 8, 9, 28].includes(typeId)){
        tempOutput.member = `'${memberName}', "Unknown${typeId}"`;
      }

      else {
        throw new InvalidTypeId(typeId, memberName);
      }

      // Attach the custom type definition to the return object
      if(!hasCustomSubType){
        tempOutput.definition = memberDefinition;
      }
    }

    return tempOutput;
  }

  parseStruct(address: number, version?: number): Struct{
    let currentAddress = address;
  
    // Simple types
    if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) === 0){
      const simpleType = this.getSimpleTypeName(address);

      return { name: simpleType };
    }
    
    const members = [];
    let definitions : Struct[] = [];

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

    const structNameAddress = this.rdataView.getAddress(currentAddress + 8);
    const structName = this.rdataView.getAsciiString(structNameAddress);

    if(definitions.length > 0){
      return { name: structName, members, version, definitions};
    } else {
      return { name: structName, members, version };
    }
  }
}

class InvalidTypeId extends TypeError {
  constructor(typeId: number, memberName: string){
    super(`Invalid typeId: ${typeId} in ${memberName}`);
  }
}

function flatDefinitions(defs: Array<Struct>): Array<Struct> {
  let flatDefs : Array<Struct> = []
  for(const {definitions, name, version, members} of defs){
    if(Array.isArray(definitions)){
      flatDefs = flatDefs.concat(flatDefinitions(definitions));
    }
    flatDefs.push({name, version, members})
  }
  return flatDefs;
}

function dedupe(array: Array<Struct>){
  return array.reduce((pv: Array<Struct>, cv: Struct) => {
    if(!pv.find(i => i.name === cv.name)){
      pv.push(cv);
    }
    return pv;
  }, [])
}