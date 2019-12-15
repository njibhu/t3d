
// This is coming from MDN
export function getUint64(dataview: DataView, byteOffset: number) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = dataview.getUint32(byteOffset, true);
  const right = dataview.getUint32(byteOffset + 4, true);

  // combine the two 32-bit values
  const combined = true
    ? left + 2 ** 32 * right
    : 2 ** 32 * left + right;

  return combined;
}

export function isFourAscii(buffer: Array<number> | ArrayBuffer): boolean {
  return (
    isAscii(buffer[0]) &&
    isAscii(buffer[1]) &&
    isAscii(buffer[2]) &&
    (buffer[3] == 0 || isAscii(buffer[3]))
  );
}

export function isAscii(byte: number): boolean {
  return (
    (byte >= 48 && byte <= 57) ||
    (byte >= 65 && byte <= 90) ||
    (byte >= 97 && byte <= 122)
  );
}