import { RDataView } from "./rdataview";

interface Chunks {
  name: string;
  offset: number;
  versions: number;
}

export class RDataParser {
  rdataView: RDataView;

  constructor(dataView: DataView, rdataMin: number, rdataMax: number) {
    this.rdataView = new RDataView(dataView, rdataMin, rdataMax);
  }

  private isANStruct(address: number) {
    if (address === -1 || address === 0) {
      return false;
    }

    let currentAddress = address;
    let loopGuard = 50;

    while (
      this.rdataView.getUint16(currentAddress) != 0 &&
      loopGuard > 0
    ) {
      if (this.rdataView.getUint16(currentAddress) > 29) {
        return false;
      }

      currentAddress += 32;
      loopGuard -= 1;
    }

    const destAddr = this.rdataView.getAddress(currentAddress + 8);
    return loopGuard != 0 && destAddr != -1 && this.rdataView.isAscii4(destAddr);
  }

  private isANStructTab(address: number, versions: number) {
    if (address === -1 || address === 0) {
      return false;
    }

    let currentAddress = address;
    let loopIndex = 0;

    while (loopIndex < versions) {
      if (this.rdataView.getUint64(currentAddress) != 0) {
        if (
          !this.isANStruct(this.rdataView.getAddress(currentAddress))
        ) {
          break;
        }
      }
      currentAddress += 24;
      loopIndex += 1;
    }

    return loopIndex === versions;
  }
  
  // Public

  listChunks(): Array<Chunks>{
    const chunks : Array<Chunks> = [];

    for (let cursor = 0; cursor < this.rdataView.length; cursor += 4) {
      if (this.rdataView.isAscii4(cursor)) {
        const ascii = this.rdataView.getAscii4(cursor);
        const structPtr = this.rdataView.getAddress(cursor + 8);
        const versions = this.rdataView.getUint32(cursor + 4);

        if (versions > 0 && versions < 100) {
          if (this.isANStructTab(structPtr, versions)) {
            const currentChunk = {
              name: ascii.replace(/\u0000/, ""),
              versions: versions,
              offset: structPtr
            }

            // Chunks can be found multiple times, so we dedupe them
            if(!chunks.find(c => c.name === currentChunk.name)){
              chunks.push(currentChunk);
            }
          }
        }
      }
    }

    return chunks;
  }
}
