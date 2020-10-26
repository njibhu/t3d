export function transformSnapshot(input: any): any {
  // if Array
  if (Array.isArray(input)) {
    return input.map((v) => transformSnapshot(v));
  }
  // if Object
  if (typeof input === "object") {
    const isArray = !Object.keys(input).some((v) => isNaN(Number(v)));
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

  // if Native
  return input;
}

export function toArrayBuffer(buf: Buffer): ArrayBuffer {
  var ab = new ArrayBuffer(buf.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}
