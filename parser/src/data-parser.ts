import { BaseType, DataType } from "./types";

interface Definition {
  definitions?: {
    [definition: string]: { [key: string]: DataType | string };
  };
  root: {
    [key: string]: DataType | string;
  };
}

interface ParseFunctionReturn {
  newPosition: number;
  data: any;
}

export class DataParser implements Definition {
  public readonly definitions: Definition["definitions"];
  public readonly root: Definition["root"];
  public DEBUG: boolean;

  constructor(definition: Definition) {
    Object.assign(this, definition);
    this.DEBUG = false;
  }

  public parse(dv: DataView, pos: number): ParseFunctionReturn {
    let position = pos;
    const parsedObject: any = {};
    for (const key in this.root) {
      const value = this.root[key];
      let parsedResult: ParseFunctionReturn;
      if (typeof value === "string") {
        if (this.DEBUG) console.log(key, position.toString(16), "(parseType)");
        parsedResult = this.parseType(dv, position, value);
      } else {
        const { baseType, subType, length } = value;
        if (this.DEBUG) console.log(key, position.toString(16), baseType, subType, length);
        parsedResult = this[baseType](dv, position, subType!, length!);
      }
      parsedObject[key] = parsedResult.data;
      position = parsedResult.newPosition;
    }

    return {
      newPosition: position,
      data: parsedObject,
    };
  }

  public parseType(dv: DataView, pos: number, typeDefinitionName: string): ParseFunctionReturn {
    const parsedObject: any = {};
    let position = pos;
    const definition = this.definitions![typeDefinitionName];
    for (const key in definition) {
      const value = definition[key];
      let parsedResult: ParseFunctionReturn;
      if (typeof value === "string") {
        if (this.DEBUG) console.log(">", key, position.toString(16), "(parseType)");
        parsedResult = this.parseType(dv, position, value);
      } else {
        const { baseType, subType, length } = value;
        if (this.DEBUG) console.log(">", key, position.toString(16), baseType, subType, length);
        parsedResult = this[baseType](dv, position, subType!, length!);
      }
      parsedObject[key] = parsedResult.data;

      position = parsedResult.newPosition;
    }

    return {
      newPosition: position,
      data: parsedObject,
    };
  }

  /**
   *      Parsers
   **/

  private Float32(dv: DataView, pos: number): ParseFunctionReturn {
    if (this.DEBUG) console.debug("Float32", dv.getFloat32(pos, true));
    return { newPosition: pos + 4, data: dv.getFloat32(pos, true) };
  }

  private Float64(dv: DataView, pos: number): ParseFunctionReturn {
    return { newPosition: pos + 8, data: dv.getFloat64(pos, true) };
  }

  private Uint8(dv: DataView, pos: number): ParseFunctionReturn {
    return { newPosition: pos + 1, data: dv.getUint8(pos) };
  }

  private Uint16(dv: DataView, pos: number): ParseFunctionReturn {
    return { newPosition: pos + 2, data: dv.getUint16(pos, true) };
  }

  private Uint32(dv: DataView, pos: number): ParseFunctionReturn {
    if (this.DEBUG) console.debug("Uint32", dv.getUint32(pos, true));
    return { newPosition: pos + 4, data: dv.getUint32(pos, true) };
  }

  private Uint64(dv: DataView, pos: number): ParseFunctionReturn {
    if (this.DEBUG) console.debug("Uint64", dv.getUint32(pos, true), dv.getUint32(pos + 4, true));
    return {
      newPosition: pos + 8,
      data: (BigInt(dv.getUint32(pos + 4, true)) << BigInt(32)) | BigInt(dv.getUint32(pos, true)),
    };
  }

  private CString(dv: DataView, pos: number, _subType: DataType | string, length: number): ParseFunctionReturn {
    const u8 = new Uint8Array(dv.buffer, pos);
    const end = length || u8.findIndex((v) => v === 0);

    if (this.DEBUG) console.debug("CString", String.fromCharCode.apply(null, new Uint8Array(u8.slice(0, end))));
    return {
      newPosition: pos + end,
      data: String.fromCharCode.apply(null, new Uint8Array(u8.slice(0, end))),
    };
  }

  private RefString(dv: DataView, pos: number): ParseFunctionReturn {
    let ptr = pos + dv.getUint32(pos, true);

    let data = "";
    let num;
    while (ptr + 1 < dv.byteLength && (num = dv.getUint8(ptr)) !== 0) {
      ptr += 1;
      data += String.fromCharCode(num);
    }

    return {
      newPosition: pos + 4,
      data,
    };
  }

  private FixedArray(dv: DataView, pos: number, type: DataType | string, length: number): ParseFunctionReturn {
    // Some types can be mapped directly from their buffer into the return type
    if (typeof type != "string" && this._getOptimisedArrayConstructor(type.baseType)) {
      return this.optimisedArray(dv, pos, type, length);
    }

    const data = [];
    let newPosition = pos;
    for (let itemIndex = 0; itemIndex < length; itemIndex++) {
      const parsedItem =
        typeof type === "string"
          ? this.parseType(dv, newPosition, type)
          : this[type.baseType](dv, newPosition, type.subType!, type.length!);
      data.push(parsedItem.data);
      newPosition = parsedItem.newPosition;
    }

    return {
      newPosition,
      data,
    };
  }

  private DynArray(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    let arrayLength = dv.getUint32(pos, true);
    let arrayOffset = dv.getUint32(pos + 4, true);
    if (this.DEBUG) console.debug("DynArray", arrayLength, arrayOffset);

    if (arrayOffset === 0) {
      return {
        newPosition: pos + 8,
        data: [],
      };
    }
    let arrayPtr = pos + 4 + arrayOffset;

    return {
      newPosition: pos + 8,
      data: this.FixedArray(dv, arrayPtr, type, arrayLength).data,
    };
  }

  private RefArray(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    let data: any = [];
    let arrayLength = dv.getUint32(pos, true);
    let arrayPtr = dv.getUint32(pos + 4, true) + pos + 4;
    if (this.DEBUG) console.debug("RefArray", "arrayPtr", (pos + 4).toString(16), arrayPtr.toString(16));
    if (arrayLength === 0) {
      return {
        data,
        newPosition: pos + 8,
      };
    }

    const pointer = dv.getUint32(pos + 4, true) + pos + 4;
    for (let index = 0; index < arrayLength; index++) {
      const offset = dv.getUint32(arrayPtr + 4 * index, true);
      if (offset !== 0) {
        if (this.DEBUG) console.debug("RefArray", "offset", offset.toString(16));
        let newPosition = pointer + index * 4 + offset;
        if (typeof type === "string") {
          data.push(this.parseType(dv, newPosition, type).data);
        } else {
          data.push(this[type.baseType](dv, newPosition, type.subType!, type.length!).data);
        }
      }
    }

    return {
      newPosition: pos + 8,
      data,
    };
  }

  private Pointer(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    const offset = dv.getUint32(pos, true);
    const parsedItem =
      typeof type === "string"
        ? this.parseType(dv, pos + offset, type)
        : this[type.baseType](dv, pos + offset, type.subType!, type.length!);

    return {
      newPosition: pos + 4,
      data: parsedItem.data,
    };
  }

  private RefString16(dv: DataView, pos: number): ParseFunctionReturn {
    let ptr = pos + dv.getUint32(pos, true);

    let data = "";
    let num;
    while (ptr + 2 < dv.byteLength && (num = dv.getUint16(ptr, true)) !== 0) {
      ptr += 2;
      data += String.fromCharCode(num);
    }

    return {
      newPosition: pos + 4,
      data,
    };
  }

  private Fileref(dv: DataView, pos: number): ParseFunctionReturn {
    return this.Filename(dv, pos);
  }

  private Filename(dv: DataView, pos: number): ParseFunctionReturn {
    // This implementation is based on the old Utils.getFileNameReader() function
    let newPosition = pos;
    //try {
    let ptr = newPosition + dv.getUint32(newPosition, true);
    newPosition += 4;

    const m_lowPart = dv.getUint16(ptr, true);
    ptr += 2;
    const m_highPart = dv.getUint16(ptr, true);
    ptr += 2;
    const _m_terminator = dv.getUint16(ptr, true);
    ptr += 2;

    /// Getting the file name...
    /// Both need to be >= than 256 (terminator is 0)
    const ret = 0xff00 * (m_highPart - 0x100) + (m_lowPart - 0x100) + 1;

    return {
      newPosition: pos + 4,
      data: ret > 0 ? ret : 0,
    };
    // } catch (e) {
    //   return {
    //     newPosition,
    //     data: -1,
    //   };
    // }
  }

  private Unknown(dv: DataView, pos: number): ParseFunctionReturn {
    throw new Error("Could not parse unknown data");
  }

  /**
   *      Parser utils & helpers
   **/

  private optimisedArray(dv: DataView, pos: number, type: DataType, length: number): ParseFunctionReturn {
    const OptimisedArray = this._getOptimisedArrayConstructor(type.baseType);
    if (this.DEBUG) console.debug("OptimizedArray", Array.from(new OptimisedArray!(dv.buffer, pos, length)));
    return {
      newPosition: pos + length * OptimisedArray!.BYTES_PER_ELEMENT,
      data: Array.from(new OptimisedArray!(dv.buffer, pos, length)),
    };
  }

  private _getOptimisedArrayConstructor(baseType: BaseType) {
    switch (baseType) {
      case BaseType.Float32:
        return Float32Array;

      case BaseType.Float64:
        return Float64Array;

      case BaseType.Uint8:
        return Uint8Array;

      case BaseType.Uint16:
        return Uint16Array;

      // case BaseType.Uint32:
      //   return Uint32Array;
    }
  }
}
