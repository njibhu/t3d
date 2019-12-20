import { RDataView } from "./rdataview";

class StructTabParser {
  private parsedStructsId: Set<number>;
  private rdataView : RDataView;

  private structName : String;

  constructor(rdataView: RDataView){
    this.parsedStructsId = new Set();
    this.rdataView = rdataView;
  }

  parseStructTab(address: number, nbVersions: number) {
    let currentAddress = address;
    let loopIndex = nbVersions - 1;
    const historyDepth = 100;

    while (loopIndex >= 0 && loopIndex >= nbVersions - historyDepth) {
      currentAddress = this.rdataView.getAddress(currentAddress + 24 * loopIndex);
      // subAddress = this.rdataView.getAddress(currentAddress + 24 * loopIndex + 8);
      if (currentAddress != 0 && currentAddress != -1){
        this.parseStruct(currentAddress, true);
      }
    }
  }

  getSimpleTypeName(address: number){
    return "abcd";
  }

  parseMember(address: number){
    //...
  }

  parseStruct(address: number, isBase: boolean){
    let currentAddress = address;
    let optimized = false;
    const alreadyParsed = this.parsedStructsId.has(address);
    this.parsedStructsId.add(address);
  
    // Simple types
    if(this.rdataView.getUint8(address + 11) === 0){
      return this.getSimpleTypeName(address);
    }

    while(this.rdataView.getUint16(currentAddress) != 0){
      this.parseMember(currentAddress);
      currentAddress += 32;
    }

    this.structName = this.rdataView.getAsciiString(this.rdataView.getAddress(currentAddress + 8));
  }
}
