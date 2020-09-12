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

class ChunkParser implements Definition {
  public readonly chunkName;
  public readonly name;
  public readonly version;
  public readonly definitions;
  public readonly root;

  constructor(definition: Definition) {
    Object.assign(this, definition);
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
    return {
      // TODO
      newPosition: -1,
      data: {},
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

    return {
      // TODO
      newPosition: -1,
      data,
    };
  }

  private Pointer(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {},
    };
  }

  private String16(dv: DataView, pos: number): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {},
    };
  }

  private Filename(dv: DataView, pos: number): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {},
    };
  }

  private Fileref(dv: DataView, pos: number): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {},
    };
  }

  private Unknown(dv: DataView, pos: number): ParseFunctionReturn {
    throw new Error("Could not parse unknown data");
  }

  /**
   *      Parser utils
   **/

  private _getOptimisedArrayConstructor(baseType): Function {
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
