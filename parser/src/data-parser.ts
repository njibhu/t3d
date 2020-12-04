import { BaseType, DataType } from "./types";

interface Definition {
  definitions: {
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

  constructor(definition: Definition) {
    Object.assign(this, definition);
  }

  public parse(dv: DataView, pos: number): ParseFunctionReturn {
    let position = pos;
    const parsedObject = {};
    for (const key in this.root) {
      const value = this.root[key];
      let parsedResult: ParseFunctionReturn;
      if (typeof value === "string") {
        parsedResult = this.parseType(dv, position, value);
      } else {
        const { baseType, subType, length } = value;
        parsedResult = this[baseType](dv, position, subType, length);
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
    const parsedObject = {};
    let position = pos;
    const definition = this.definitions[typeDefinitionName];
    for (const key in definition) {
      const value = definition[key];
      let parsedResult: ParseFunctionReturn;
      if (typeof value === "string") {
        parsedResult = this.parseType(dv, position, value);
      } else {
        const { baseType, subType, length } = value;
        parsedResult = this[baseType](dv, position, subType, length);
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
    return { newPosition: pos + 4, data: dv.getUint32(pos, true) };
  }

  private Uint64(dv: DataView, pos: number): ParseFunctionReturn {
    return {
      newPosition: pos + 8,
      data: (BigInt(dv.getUint32(pos + 4, true)) << BigInt(32)) | BigInt(dv.getUint32(pos, true)),
    };
  }

  private CString(dv: DataView, pos: number, _subType: DataType | string, length: number): ParseFunctionReturn {
    const u8 = new Uint8Array(dv.buffer, pos);
    const end = length || u8.findIndex((v) => v === 0);

    return {
      newPosition: pos + end,
      data: String.fromCharCode.apply(null, new Uint8Array(u8.slice(0, end))),
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
          : this[type.baseType](dv, newPosition, type.subType, type.length);
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
    let data = [];
    let arrayLength = dv.getUint32(pos, true);
    let arrayPtr = dv.getUint32(pos + 4, true) + pos;
    if (arrayLength === 0) {
      return {
        data,
        newPosition: pos + 8,
      };
    }

    const pointer = dv.getUint32(pos + 4, true) + pos + 4;
    for (let index = 0; index < arrayLength; index++) {
      const offset = dv.getInt32(arrayPtr + 4 * index);
      if (offset !== 0) {
        let newPosition = pointer + index * 4 + offset;
        if (typeof type === "string") {
          data.push(this.parseType(dv, newPosition, type).data);
        } else {
          data.push(this[type.baseType](dv, newPosition, type.subType, type.length).data);
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
        : this[type.baseType](dv, pos + offset, type.subType, type.length);

    return {
      newPosition: parsedItem.newPosition,
      data: parsedItem.data,
    };
  }

  private String16(dv: DataView, pos: number): ParseFunctionReturn {
    let newPosition = pos;
    let ptr = pos + dv.getUint32(pos, true);
    newPosition += 4;

    let data = "";
    let num;
    while (ptr + 2 < dv.byteLength && (num = dv.getUint16(ptr)) !== 0) {
      ptr += 2;
      data += String.fromCharCode(num);
    }

    return {
      newPosition,
      data,
    };
  }

  private Fileref(dv: DataView, pos: number): ParseFunctionReturn {
    return this.Filename(dv, pos);
  }

  private Filename(dv: DataView, pos: number): ParseFunctionReturn {
    // This implementation is based on the old Utils.getFileNameReader() function
    let newPosition = pos;
    try {
      let ptr = newPosition + dv.getUint32(newPosition, true);
      newPosition += 4;

      const m_lowPart = dv.getUint16(ptr);
      ptr += 2;
      const m_highPart = dv.getUint16(ptr);
      ptr += 2;
      const _m_terminator = dv.getUint16(ptr);
      ptr += 2;

      /// Getting the file name...
      /// Both need to be >= than 256 (terminator is 0)
      const ret = 0xff00 * (m_highPart - 0x100) + (m_lowPart - 0x100) + 1;

      return {
        newPosition,
        data: ret > 0 ? ret : 0,
      };
    } catch (e) {
      return {
        newPosition,
        data: -1,
      };
    }
  }

  private Unknown(dv: DataView, pos: number): ParseFunctionReturn {
    throw new Error("Could not parse unknown data");
  }

  /**
   *      Parser utils & helpers
   **/

  private optimisedArray(dv: DataView, pos: number, type: DataType, length: number): ParseFunctionReturn {
    const OptimisedArray = this._getOptimisedArrayConstructor(type.baseType);
    return {
      newPosition: pos + length * OptimisedArray.BYTES_PER_ELEMENT,
      data: Array.from(new OptimisedArray(dv.buffer, pos, length)),
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
