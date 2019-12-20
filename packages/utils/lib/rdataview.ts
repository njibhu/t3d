export class RDataView {
  private dataView: DataView;
  private rdataMin: number;
  private rdataMax: number;

  constructor(dataView: DataView, rdatamin: number, rdataMax: number) {
    this.dataView = dataView;
    this.rdataMax = rdataMax;
    this.rdataMin = rdatamin;
  }

  public getUint8(address): number {
    return this.dataView.getUint8(address);
  }

  public getUint16(address): number {
    return this.dataView.getUint16(address, true);
  }

  public getUint32(address): number {
    return this.dataView.getUint32(address, true);
  }

  public getUint64(address: number) {
    // split 64-bit number into two 32-bit (4-byte) parts
    const left = this.dataView.getUint32(address, true);
    const right = this.dataView.getUint32(address + 4, true);

    return left + 2 ** 32 * right;
  }

  public isAscii(address): boolean {
    const parsedAddress = this.getUint8(address);

    return (
      (parsedAddress >= 48 && parsedAddress <= 57) ||
      (parsedAddress >= 65 && parsedAddress <= 90) ||
      (parsedAddress >= 97 && parsedAddress <= 122)
    );
  }

  public isAscii4(address): boolean {
    return !([0,1,2,3].map(i => this.isAscii(address + i)).includes(false));
  }

  public getAscii(address): string {
    return String.fromCharCode(this.getUint8(address));
  }

  public getAscii4(address): string {
    return [0, 1, 2, 3]
      .map(i => String.fromCharCode(this.getUint8(address + i)))
      .join("");
  }

  public getAddress(address): number {
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
}
