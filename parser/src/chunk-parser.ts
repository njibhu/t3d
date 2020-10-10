import { BaseType, DataType } from "./types";

interface Definition {
  chunkName: string;
  name: string;
  version: number;
  definitions: {
    [definition: string]: { [key: string]: BaseType };
  };
  root: {
    [key: string]: BaseType;
  };
}

interface ParseFunctionReturn {
  newPosition: number;
  data: any;
}

export class ChunkParser implements Definition {
  public readonly chunkName;
  public readonly name;
  public readonly version;
  public readonly definitions;
  public readonly root;

  constructor(definitions: Definition) {
    Object.assign(this, definitions);
  }

  public parse(dv: DataView, pos: number): ParseFunctionReturn {
    let position = pos;
    const parsedObject = {};
    for (const key in this.root) {
      let parsedResult: ParseFunctionReturn = this[this.root[key]](dv, position);
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
      let parsedResult: ParseFunctionReturn = definition[key](dv, position);
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
      newPosition: pos + 4,
      data: dv.getUint32(pos, true) + 2 ** 32 * dv.getUint32(pos + 8, true),
    };
  }

  private CString(dv: DataView, pos: number): ParseFunctionReturn {
    const u8 = new Uint8Array(dv.buffer, pos);
    const end = u8.findIndex((v) => v === 0);

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
          : this[type.baseType](dv, newPosition, type, type.length);

      data.push(parsedItem.data);
      newPosition = parsedItem.newPosition;
    }

    return {
      newPosition,
      data,
    };
  }

  private DynArray(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    let arrayLength = dv.getUint32(pos);
    let arrayOffset = dv.getUint32(pos + 4);
    if (arrayOffset === 0) {
      // 0 is the place of the offset itself, it cannot be the content of the array itself.
      throw new Error("DynArray offset cannot be 0");
    }
    let arrayPtr = pos + 4 + arrayOffset;

    return this.FixedArray(dv, arrayPtr, type, arrayLength);
  }

  private RefArray(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    let data = [];
    let arrayLength = dv.getUint32(pos);
    let arrayPtr = dv.getUint32(pos + 4) + pos;
    if (arrayLength === 0) {
      return {
        data,
        newPosition: pos + 8,
      };
    }

    const pointer = dv.getUint32(pos + 4) + pos + 4;
    for (let index = 0; index < arrayLength; index++) {
      const offset = dv.getInt32(arrayPtr + 4 * index);
      if (offset !== 0) {
        let newPosition = pointer + index * 4 + offset;
        if (typeof type === "string") {
          data.push(this.parseType(dv, newPosition, type).data);
        } else {
          data.push(this[type.baseType](dv, newPosition, type, type.length).data);
        }
      }
    }

    return {
      newPosition: pos + 8,
      data,
    };
  }

  private Pointer(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    const offset = dv.getUint32(pos);
    const parsedItem =
      typeof type === "string"
        ? this.parseType(dv, pos + offset, type)
        : this[type.baseType](dv, pos + offset, type, type.length);

    return {
      newPosition: parsedItem.newPosition,
      data: parsedItem.data,
    };
  }

  private String16(dv: DataView, pos: number): ParseFunctionReturn {
    let newPosition = pos;
    let ptr = pos + dv.getUint32(pos);
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
      let ptr = newPosition + dv.getUint32(newPosition);
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
      data: new OptimisedArray(dv.buffer, 0, length),
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

      case BaseType.Uint32:
        return Uint32Array;
    }
  }
}
