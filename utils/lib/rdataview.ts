/**
 * This helper class is an evolved version of the DataView to better fit our needs.
 * It automatically bundles the offsetting of the buffer where the rdata segment should be loaded in memory.
 * And it contains various parsing functions that are not natively available in the dataview such
 * as getUint64 or getAddress or getAscii4...
 */
export class RDataView {
  private dataView: DataView;
  private rdataMin: number;
  private rdataMax: number;

  constructor(dataView: DataView, rdatamin: number, rdataMax: number) {
    this.dataView = dataView;
    this.rdataMax = rdataMax;
    this.rdataMin = rdatamin;
  }

  public getUint8(address: number): number {
    return this.dataView.getUint8(address);
  }

  public getUint16(address: number): number {
    return this.dataView.getUint16(address, true);
  }

  public getUint32(address: number): number {
    return this.dataView.getUint32(address, true);
  }

  public getUint64(address: number): number {
    // split 64-bit number into two 32-bit (4-byte) parts
    const left = this.dataView.getUint32(address, true);
    const right = this.dataView.getUint32(address + 4, true);

    return left + 2 ** 32 * right;
  }

  public isAscii(address: number): boolean {
    const parsedAddress = this.getUint8(address);

    return (
      (parsedAddress >= 48 && parsedAddress <= 57) ||
      (parsedAddress >= 65 && parsedAddress <= 90) ||
      (parsedAddress >= 97 && parsedAddress <= 122)
    );
  }

  public isAscii4(address: number): boolean {
    return ![0, 1, 2, 3].map(i => this.isAscii(address + i)).includes(false);
  }

  public getAscii(address: number): string {
    return String.fromCharCode(this.getUint8(address));
  }

  public getAscii4(address: number): string {
    return [0, 1, 2, 3].map(i => String.fromCharCode(this.getUint8(address + i))).join("");
  }

  /**
   * If the loaded address is outside of the memory range of the datasegment,
   * the value returned will be -1.
   * The 0 value is kept valid as some logic relies on it.
   *
   * Generic use will check `address > 0` before trying to load the content of the address.
   */
  public getAddress(address: number): number {
    const parsedAddress = this.getUint64(address);

    if (parsedAddress === 0) {
      return 0;
    }

    if (parsedAddress > this.rdataMin && parsedAddress < this.rdataMax) {
      return parsedAddress - this.rdataMin;
    }

    return -1;
  }

  public get length(): number {
    return this.dataView.byteLength;
  }

  public getAsciiString(address: number) {
    let currentAddress = address;
    let result = "";
    while (this.isAscii(currentAddress)) {
      result += this.getAscii(currentAddress);
      currentAddress += 1;
    }

    return result;
  }
}
