import { isFourAscii, getUint64 } from "./binary-parsing";

export class RDataParser {
  dataView: DataView;
  rdataMin: number;
  rdataMax: number;

  constructor(dataView: DataView, rdataMin: number, rdataMax: number) {
    this.rdataMax = rdataMax;
    this.rdataMin = rdataMin;
    this.dataView = dataView;
  }

  private offsetAddr(loadedAddress) {
    return loadedAddress - this.rdataMin;
  }

  private isValidAddr(address) {
    const nAddress = address + this.rdataMin;
    return nAddress > this.rdataMin && nAddress < this.rdataMax;
  }

  private isANStruct(address: number) {
    if (!this.isValidAddr(address)) {
      return false;
    }

    let currentAddress = address;
    let loopGuard = 50;

    while (
      this.dataView.getUint16(currentAddress, true) != 0 &&
      loopGuard > 0
    ) {
      if (this.dataView.getUint16(currentAddress, true) > 29) {
        return false;
      }

      currentAddress += 32;
      loopGuard -= 1;
    }

    const destAddr = this.offsetAddr(getUint64(this.dataView, currentAddress + 8));
    return (
      loopGuard != 0 &&
      this.isValidAddr(destAddr) &&
      isFourAscii([
        this.dataView.getUint8(destAddr),
        this.dataView.getUint8(destAddr + 1),
        this.dataView.getUint8(destAddr + 2),
        this.dataView.getUint8(destAddr + 3)
      ])
    );
  }

  private isANStructTab(address: number, versions: number) {
    if (!this.isValidAddr(address)) {
      return false;
    }

    let currentAddress = address;
    let loopIndex = 0;

    while (loopIndex < versions) {
      if (getUint64(this.dataView, currentAddress) != 0) {
        if (
          !this.isANStruct(this.offsetAddr(getUint64(this.dataView, currentAddress)))
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

  listChunks(): Set<string>{
    const chunks : Set<string> = new Set();

    for (let cursor = 0; cursor < this.rdataMax - this.rdataMin; cursor += 4) {
      const ascii = [
        this.dataView.getUint8(cursor),
        this.dataView.getUint8(cursor + 1),
        this.dataView.getUint8(cursor + 2),
        this.dataView.getUint8(cursor + 3)
      ];

      if (isFourAscii(ascii)) {
        const structPtr = this.offsetAddr(getUint64(this.dataView, cursor + 8));
        const versions = this.dataView.getUint32(cursor + 4, true);
        if (versions > 0 && versions < 100) {
          if (this.isValidAddr(structPtr) && this.isANStructTab(structPtr, versions)) {
            // Register found string
            chunks.add(ascii.map(c => String.fromCharCode(c)).join("").replace(/\u0000/, ""));
          }
        }
      }
    }

    return chunks;
  }
}
