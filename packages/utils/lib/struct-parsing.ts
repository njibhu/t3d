import { RDataView } from "./rdataview";
import { AnetType, legacyTypes } from "./anet-types";

export class StructTabParser {
  private parsedStructsId: Set<number>;
  private rdataView : RDataView;

  private structName : String;

  constructor(dataView: DataView,  rdataMin: number, rdataMax: number){
    this.parsedStructsId = new Set();
    this.rdataView = new RDataView(dataView, rdataMin, rdataMax);
  }

  public parseStructTab(address: number, nbVersions: number) {
    let currentAddress = address;
    let loopIndex = nbVersions - 1;
    const historyDepth = 100;

    while (loopIndex >= 0 && loopIndex >= nbVersions - historyDepth) {
      currentAddress = this.rdataView.getAddress(address + (24 * loopIndex));
      // subAddress = this.rdataView.getAddress(currentAddress + 24 * loopIndex + 8);
      if (currentAddress > 0){
        this.parseStruct(currentAddress, true);
      }
      loopIndex -= 1;
    }
  }

  getSimpleTypeName(address: number){
    const typeId = this.rdataView.getUint8(address);
    return legacyTypes[typeId];
  }

  parseMember(address: number){
    const memberName = this.rdataView.getAsciiString(this.rdataView.getAddress(address + 8));
    const typeId = this.rdataView.getUint16(address);
    let tempOutput;
    let optimized;
    if(typeId === 0){
      throw new InvalidTypeId(typeId, memberName);
    }

    else if(typeId === 1){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) === 0){
        tempOutput = `'${memberName}', ['[]', ${this.parseStruct(psAdr)}, ${this.rdataView.getUint32(address + 24)}]`;
      }
      else {
        tempOutput = `'${memberName}', ['[]', this.${this.parseStruct(psAdr)}, ${this.rdataView.getUint32(address + 24)}]`;
      }
      optimized = false;
    }

    else if(typeId === 2){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', Utils.getArrayReader(${this.parseStruct(psAdr)})`
      } else {
        tempOutput = `'${memberName}', Utils.getArrayReader(this.${this.parseStruct(psAdr)})`;
      }

      optimized = false;
    }

    else if(typeId === 3){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', Utils.getRefArrayReader(${this.parseStruct(psAdr)})`
      } else {
        tempOutput = `'${memberName}', Utils.getRefArrayReader(this.${this.parseStruct(psAdr)})`;
      }

      optimized = false;
    }

    else if(typeId === 4){
      tempOutput = `'${memberName}', Unknown0x04`;
      optimized = true;
    }

    else if(typeId === 5){
      tempOutput = `'${memberName}', "uint8"`;
      optimized = true;
    }

    else if(typeId === 6){
      tempOutput = `'${memberName}', "['[]', 'uint8', 4]"`;
      optimized = true;
    }

    else if(typeId === 7){
      tempOutput = `'${memberName}', "float64"`;
      optimized = true;
    }

    else if(typeId === 8){
      tempOutput = `'${memberName}', "Unknown0x08"`;
      optimized = true;
    }

    else if(typeId === 9){
      tempOutput = `'${memberName}', "Unknown0x09"`;
      optimized = true;
    }

    else if(typeId === 10){
      tempOutput = `'${memberName}', "uint32"`;
      optimized = true;
    }
    
    else if(typeId === 11){
      tempOutput = `'${memberName}', "Utils.getFileNameReader()"`;
      optimized = true;
    }

    else if(typeId === 12){
      tempOutput = `'${memberName}', "float32"`;
      optimized = true;
    }

    else if(typeId === 13){
      tempOutput = `'${memberName}', "['[]', 'float32', 2]"`;
      optimized = true;
    }

    else if(typeId === 14){
      tempOutput = `'${memberName}', "['[]', 'float32', 3]"`;
      optimized = true;
    }

    else if(typeId === 15){
      tempOutput = `'${memberName}', "['[]', 'float32', 4]"`;
      optimized = true;
    }

    else if (typeId === 16){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', Utils.getPointerReader(${this.parseStruct(psAdr)})`
      } else {
        tempOutput = `'${memberName}', Utils.getPointerReader(this.${this.parseStruct(psAdr)})`;
      }

      optimized = false;
    }

    else if(typeId === 17){
      tempOutput = `'${memberName}', Utils.getQWordReader()`;
      optimized = true;
    }

    else if(typeId === 18){
      tempOutput = `'${memberName}', Utils.getString16Reader()`;
      optimized = false;
    }

    else if(typeId === 19){
      tempOutput = `'${memberName}', Utils.getStringReader()`;
      optimized = false;
    }

    else if(typeId === 20){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', ${this.parseStruct(psAdr)}`
      } else {
        tempOutput = `'${memberName}', this.${this.parseStruct(psAdr)}`;
      }

      optimized = false;
    }

    else if(typeId === 21){
      tempOutput = `'${memberName}', "uint16"`;
      optimized = false;
    }

    else if(typeId === 22){
      tempOutput = `'${memberName}', "['[]', 'uint8', 16]"`;
      optimized = false;
    }

    else if(typeId === 23){
      tempOutput = `'${memberName}', "['[]', 'uint8', 3]"`;
      optimized = false;
    }

    else if(typeId === 24){
      tempOutput = `'${memberName}', "['[]', 'uint32', 2]"`;
      optimized = false;
    }

    else if(typeId === 25){
      tempOutput = `'${memberName}', "['[]', 'uint32', 4]"`;
      optimized = false;
    }

    else if(typeId === 26){
      tempOutput = `'${memberName}', "['[]', 'uint16', 3]"`;
      optimized = false;
    }

    else if(typeId === 27){
      tempOutput = `'${memberName}', "Utils.getFileNameReader()"`;
      optimized = false;
    }

    else if(typeId === 28){
      tempOutput = `'${memberName}', "Unknown0x1C"`;
      optimized = false;
    }

    else if(typeId === 29){
      let psAdr = this.rdataView.getAddress(address + 16);
      if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) == 0){
        tempOutput = `'${memberName}', ${this.parseStruct(psAdr)}`
      } else {
        tempOutput = `'${memberName}', this.${this.parseStruct(psAdr)}`;
      }

      optimized = false;
    }

    else {
      throw new InvalidTypeId(typeId, memberName);
    }

    console.log(tempOutput);

    return tempOutput;
  }

  parseStruct(address: number, isBase: boolean = false){
    let currentAddress = address;
    let optimized = false;
    const alreadyParsed = this.parsedStructsId.has(address);
    this.parsedStructsId.add(address);
  
    // Simple types
    if(this.rdataView.getUint8(this.rdataView.getAddress(address + 8)) === 0){
      const simpleType = this.getSimpleTypeName(address);
      console.log(simpleType);
      return simpleType;
    }

    while(this.rdataView.getUint16(currentAddress) != 0){
      const member = this.parseMember(currentAddress);
      if(member === null){
        break;
      }
      currentAddress += 32;
    }

    this.structName = this.rdataView.getAsciiString(this.rdataView.getAddress(currentAddress + 8));
    console.log(this.structName);
    
    return this.structName;
  }
}

class InvalidTypeId extends TypeError {
  constructor(typeId, memberName){
    super(`Invalid typeId: ${typeId} in ${memberName}`);
  }
}