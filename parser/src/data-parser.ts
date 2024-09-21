import { BaseType, DataType } from "./types";

export interface Definition {
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

const PTR_SIZE_32 = 4;
const PTR_SIZE_64 = 8;

export class DataParser implements Definition {
  public readonly definitions: Definition["definitions"];
  public readonly root: Definition["root"];
  public readonly name: string;
  public readonly chunkName: string;
  public readonly version: number;
  public readonly PTR_SIZE: 4 | 8;

  constructor(
    definition: Definition,
    public is64Bit = false,
    public DEBUG = false
  ) {
    Object.assign(this, definition);
    this.PTR_SIZE = is64Bit ? PTR_SIZE_64 : PTR_SIZE_32;
  }

  public safeParse(dv: DataView, position = 0): { data: any; error: any | null } {
    try {
      return { data: this.parse(dv, position).data, error: null };
    } catch (e) {
      return {
        data: null,
        error: e,
      };
    }
  }

  public parse(dv: DataView, pos = 0): ParseFunctionReturn {
    this._debugLog(".", this.name, pos);

    let position = pos;
    const parsedObject: any = {};

    for (const key in this.root) {
      const value = this.root[key];
      let parsedResult: ParseFunctionReturn;
      if (typeof value === "string") {
        parsedResult = this.parseType(key, dv, position, value);
      } else {
        const { baseType, subType, length } = value;
        parsedResult = this[baseType](key, dv, position, subType!, length!);
      }
      parsedObject[key] = parsedResult.data;
      position = parsedResult.newPosition;
    }

    return {
      newPosition: position,
      data: parsedObject,
    };
  }

  private parseType(key: string, dv: DataView, pos: number, typeDefinitionName: string): ParseFunctionReturn {
    this._debugLog(key, typeDefinitionName, pos);

    const parsedObject: any = {};
    let position = pos;
    const definition = this.definitions![typeDefinitionName];
    for (const key in definition) {
      const value = definition[key];
      let parsedResult: ParseFunctionReturn;
      if (typeof value === "string") {
        parsedResult = this.parseType(key, dv, position, value);
      } else {
        const { baseType, subType, length } = value;
        parsedResult = this[baseType](key, dv, position, subType!, length!);
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

  private Float32(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.Float32, pos);

    const data = dv.getFloat32(pos, true);
    return { newPosition: pos + 4, data };
  }

  private Float64(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.Float64, pos);

    return { newPosition: pos + 8, data: dv.getFloat64(pos, true) };
  }

  private Uint8(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.Uint8, pos);

    return { newPosition: pos + 1, data: dv.getUint8(pos) };
  }

  private Uint16(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.Uint16, pos);

    return { newPosition: pos + 2, data: dv.getUint16(pos, true) };
  }

  private Uint32(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.Uint32, pos);

    return { newPosition: pos + 4, data: dv.getUint32(pos, true) };
  }

  private Uint64(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.Uint64, pos);

    return {
      newPosition: pos + 8,
      data: dv.getBigUint64(pos, true),
    };
  }

  private CString(
    key: string,
    dv: DataView,
    pos: number,
    _subType: DataType | string,
    length: number
  ): ParseFunctionReturn {
    this._debugLog(key, BaseType.CString, pos, length);

    const u8array = new Uint8Array(dv.buffer, pos);
    const end = length || u8array.findIndex((v) => v === 0);

    return {
      newPosition: pos + end,
      data: String.fromCharCode.apply(null, new Uint8Array(u8array.slice(0, end))),
    };
  }

  private RefString(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.RefString, pos);

    let pointer = this.is64Bit ? pos + Number(dv.getBigUint64(pos, true)) : pos + dv.getUint32(pos, true);
    let data = "";
    let charcode;
    while (pointer + 1 < dv.byteLength && (charcode = dv.getUint8(pointer)) !== 0) {
      pointer += 1;
      data += String.fromCharCode(charcode);
    }

    return {
      newPosition: pos + this.PTR_SIZE,
      data,
    };
  }

  private FixedArray(
    key: string,
    dv: DataView,
    pos: number,
    type: DataType | string,
    length: number
  ): ParseFunctionReturn {
    this._debugLog(key, BaseType.FixedArray, pos, length, type);

    // Some types can be mapped directly from their buffer into the return type
    if (typeof type != "string") {
      const arrayConstructor = getOptimisedArrayConstructor(type.baseType);
      if (arrayConstructor) {
        return this.optimisedArray(key, dv, pos, length, arrayConstructor);
      }
    }

    const data = [];
    let newPosition = pos;
    for (let itemIndex = 0; itemIndex < length; itemIndex++) {
      const parsedItem =
        typeof type === "string"
          ? this.parseType(key, dv, newPosition, type)
          : this[type.baseType](key, dv, newPosition, type.subType!, type.length!);
      data.push(parsedItem.data);
      newPosition = parsedItem.newPosition;
    }

    return {
      newPosition,
      data,
    };
  }

  private DynArray(key: string, dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    this._debugLog(key, BaseType.DynArray, pos, undefined, type);

    const arrayLength = dv.getUint32(pos, true);
    const arrayOffset = this.is64Bit ? Number(dv.getBigUint64(pos + 4, true)) : dv.getUint32(pos + 4, true);
    if (arrayOffset === 0) {
      return {
        newPosition: pos + (this.is64Bit ? 12 : 8),
        data: [],
      };
    }
    const arrayPtr = pos + 4 + arrayOffset;

    return {
      newPosition: pos + this.PTR_SIZE + 4,
      data: this.FixedArray(key, dv, arrayPtr, type, arrayLength).data,
    };
  }

  private RefArray(key: string, dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    this._debugLog(key, BaseType.RefArray, pos, undefined, type);

    let cursor = pos;
    const finalArray: any = [];

    const arrayLength = dv.getUint32(cursor, true);
    cursor += 4;

    const arrayOffset = this.offset(dv, cursor);
    const arrayPointer = cursor + arrayOffset;
    cursor += this.PTR_SIZE;

    if (arrayLength === 0) {
      return { newPosition: cursor, data: finalArray };
    }

    const savedPosition = cursor;
    const currentPosition = arrayPointer;

    const offsets = [];
    for (let i = 0; i < arrayLength; i++) {
      const offset = this.offset(dv, currentPosition + i * this.PTR_SIZE);

      offsets.push(Number(offset));
    }

    // Set pointer to read structures
    let pointer = savedPosition - this.PTR_SIZE;
    const baseOffset = this.offset(dv, pointer);
    pointer += baseOffset;

    for (let i = 0; i < offsets.length; i++) {
      if (offsets[i] !== 0) {
        const structPosition = pointer + i * this.PTR_SIZE + offsets[i];
        if (typeof type === "string") {
          finalArray.push(this.parseType(key, dv, structPosition, type).data);
        } else {
          finalArray.push(this[type.baseType](key, dv, structPosition, type.subType!, type.length!).data);
        }
      }
    }

    return { newPosition: savedPosition, data: finalArray };
  }

  private Pointer(key: string, dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    this._debugLog(key, BaseType.Pointer, pos, undefined, type);

    const offset = this.offset(dv, pos);
    if (offset === 0) {
      return {
        newPosition: pos + this.PTR_SIZE,
        data: {},
      };
    }

    const parsedItem =
      typeof type === "string"
        ? this.parseType(key, dv, pos + offset, type)
        : this[type.baseType](key, dv, pos + offset, type.subType!, type.length!);

    return {
      newPosition: pos + this.PTR_SIZE,
      data: parsedItem.data,
    };
  }

  private RefString16(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.RefString16, pos);

    const offset = this.offset(dv, pos);
    let pointer = pos + offset;

    let data = "";
    let charcode;
    while (pointer + 2 < dv.byteLength && (charcode = dv.getUint16(pointer, true)) !== 0) {
      pointer += 2;
      data += String.fromCharCode(charcode);
    }

    return {
      newPosition: pos + this.PTR_SIZE,
      data,
    };
  }

  private Fileref(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.Fileref, pos);

    return this.Filename(key, dv, pos);
  }

  private Filename(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.Filename, pos);

    const position = pos;
    const offset = this.offset(dv, pos);
    const pointer = position + offset;

    const m_lowPart = dv.getUint16(pointer, true);
    const m_highPart = dv.getUint16(pointer + 2, true);

    /// Getting the file name...
    /// Both need to be >= than 256 (terminator (third byte) is 0)
    const filename = 0xff00 * (m_highPart - 0x100) + (m_lowPart - 0x100) + 1;

    return {
      newPosition: pos + this.PTR_SIZE,
      data: filename > 0 ? filename : 0,
    };
  }

  private Unknown(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, BaseType.Unknown, pos);

    throw new Error("Could not parse unknown data");
  }

  /**
   *      Parser utils & helpers
   **/

  private offset(dv: DataView, pos: number): number {
    if(this.is64Bit) {
      const offset = dv.getBigUint64(pos, true);
      if(offset === BigInt(0)) {
        return 0;
      } else if(offset > BigInt(dv.byteLength)) {
        // Parse negative offset
        return -(Number(BigInt('0xFFFFFFFFFFFFFFFF') - offset) + 1);
      } else {
        return Number(offset);
      }
    } else {
      const offset = dv.getUint32(pos, true);
      if(offset > dv.byteLength) {
        // Parse negative offset
        return -((0xFFFFFFFF - offset) + 1);
      } else {
        return offset;
      }
    }
  }

  private optimisedArray(
    key: string,
    dv: DataView,
    pos: number,
    length: number,
    OptimisedArray: NonNullable<ReturnType<typeof getOptimisedArrayConstructor>>
  ): ParseFunctionReturn {
    this._debugLog(key, "OptimisedArray", pos);

    const byteLength = length * OptimisedArray.BYTES_PER_ELEMENT;
    const byteArray = new Uint8Array(dv.buffer.slice(pos, pos + byteLength));
    const data = new OptimisedArray(byteArray.buffer);

    return {
      newPosition: pos + length * OptimisedArray!.BYTES_PER_ELEMENT,
      data,
    };
  }

  private _debugLog(
    key: string,
    type: string,
    position: number,
    length?: number,
    subType?: DataType | string,
    value?: any
  ) {
    if (this.DEBUG) {
      let log = `> ${key}: (${type}) pos: ${position.toString(16)}`;
      if (length) log += `, length: ${length}`;
      if (subType) {
        if (typeof subType === "string") log += `, subType: ${subType}`;
        else {
          if (subType.subType) log += `, subType: ${subType.baseType}<${subType.subType}>`;
          else log += `, subType: ${subType.baseType}`;
        }
      }
      if (value) log += `, value: ${value}`;
      console.log(log);
    }
  }
}

function getOptimisedArrayConstructor(baseType: BaseType) {
  if (baseType === BaseType.Float32) {
    return Float32Array;
  }
  if (baseType === BaseType.Float64) {
    return Float64Array;
  }
  if (baseType === BaseType.Uint8) {
    return Uint8Array;
  }
  if (baseType === BaseType.Uint16) {
    return Uint16Array;
  }
  if (baseType === BaseType.Uint32) {
    return Uint32Array;
  }
  if (baseType === BaseType.Uint64) {
    return BigUint64Array;
  }
}
