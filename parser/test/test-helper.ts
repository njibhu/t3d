export function transformSnapshot(input: any): any {
  // if Array
  if (Array.isArray(input)) {
    return input.map((v) => transformSnapshot(v));
  }
  // if Object
  if (typeof input === "object") {
    const isArray = !Object.keys(input).some((v) => isNaN(Number(v))) && Object.keys(input).length > 0;
    if (isArray) {
      return new Array(Object.keys(input).length).fill(undefined).map((_v, index) => {
        return input[String(index)];
      });
    } else {
      const build = {};
      for (const [key, value] of Object.entries(input)) {
        build[key] = transformSnapshot(value);
      }
      return build;
    }
  }

  // 64bits ids
  if (typeof input === "string") {
    const split = input.split("-");
    if (split.length === 2) {
      const low = BigInt(split[0]);
      const high = BigInt(split[1]);
      return (high << BigInt(32)) | low;
    }
  }

  // if Native
  return input;
}

export function toArrayBuffer(buf: Buffer): ArrayBuffer {
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}
