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

  public DEBUG: boolean;

  constructor(
    definition: Definition,
    public is64Bit = false
  ) {
    Object.assign(this, definition);
    this.DEBUG = false;
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
    this._debugLog(key, "Float32", pos);

    const data = dv.getFloat32(pos, true);
    return { newPosition: pos + 4, data };
  }

  private Float64(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "Float64", pos);

    return { newPosition: pos + 8, data: dv.getFloat64(pos, true) };
  }

  private Uint8(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "Uint8", pos);

    return { newPosition: pos + 1, data: dv.getUint8(pos) };
  }

  private Uint16(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "Uint16", pos);

    return { newPosition: pos + 2, data: dv.getUint16(pos, true) };
  }

  private Uint32(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "Uint32", pos);

    return { newPosition: pos + 4, data: dv.getUint32(pos, true) };
  }

  private Uint64(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "Uint64", pos);

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
    this._debugLog(key, "CString", pos, length);

    const u8array = new Uint8Array(dv.buffer, pos);
    const end = length || u8array.findIndex((v) => v === 0);

    return {
      newPosition: pos + end,
      data: String.fromCharCode.apply(null, new Uint8Array(u8array.slice(0, end))),
    };
  }

  private RefString(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "RefString", pos);

    let pointer = this.is64Bit ? pos + Number(dv.getBigUint64(pos, true)) : pos + dv.getUint32(pos, true);
    let data = "";
    let charcode;
    while (pointer + 1 < dv.byteLength && (charcode = dv.getUint8(pointer)) !== 0) {
      pointer += 1;
      data += String.fromCharCode(charcode);
    }

    return {
      newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
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
    this._debugLog(key, "FixedArray", pos, length, type);

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
    this._debugLog(key, "DynArray", pos, undefined, type);

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
      newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32) + 4,
      data: this.FixedArray(key, dv, arrayPtr, type, arrayLength).data,
    };
  }

  private RefArray(key: string, dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    this._debugLog(key, "RefArray", pos, undefined, type);

    let offset = pos;
    const finalArray: any = [];

    const arrayLength = dv.getUint32(offset, true);
    offset += 4;

    const arrayOffset = this.is64Bit ? Number(dv.getBigUint64(offset, true)) : dv.getUint32(offset, true);
    const arrayPointer = offset + arrayOffset;
    offset += this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32;

    if (arrayLength === 0) {
      return { newPosition: offset, data: finalArray };
    }

    const savedPosition = offset;
    const currentPosition = arrayPointer;
    const offsets = new Array(arrayLength);
    for (let i = 0; i < arrayLength; i++) {
      offsets[i] = this.is64Bit
        ? Number(dv.getBigUint64(currentPosition + i * PTR_SIZE_64, true))
        : dv.getInt32(currentPosition + i * PTR_SIZE_32, true);
    }

    // Set pointer to read structures
    let pointer = savedPosition - (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32);
    const baseOffset = this.is64Bit ? Number(dv.getBigUint64(pointer, true)) : dv.getUint32(pointer, true);
    pointer += baseOffset;

    for (let i = 0; i < offsets.length; i++) {
      if (offsets[i] !== 0) {
        const structPosition = pointer + i * (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32) + offsets[i];
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
    this._debugLog(key, "Pointer", pos, undefined, type);

    const offset = this.is64Bit ? Number(dv.getBigUint64(pos, true)) : dv.getUint32(pos, true);
    if (offset === 0) {
      return {
        newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
        data: {},
      };
    }

    const parsedItem =
      typeof type === "string"
        ? this.parseType(key, dv, pos + offset, type)
        : this[type.baseType](key, dv, pos + offset, type.subType!, type.length!);

    return {
      newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
      data: parsedItem.data,
    };
  }

  private RefString16(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "RefString16", pos);

    let pointer = pos + (this.is64Bit ? Number(dv.getBigUint64(pos, true)) : dv.getUint32(pos, true));

    let data = "";
    let charcode;
    while (pointer + 2 < dv.byteLength && (charcode = dv.getUint16(pointer, true)) !== 0) {
      pointer += 2;
      data += String.fromCharCode(charcode);
    }

    return {
      newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
      data,
    };
  }

  private Fileref(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "Fileref", pos);

    return this.Filename(key, dv, pos);
  }

  private Filename(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "Filename", pos);

    const position = pos;
    try {
      let pointer = position + (this.is64Bit ? Number(dv.getBigUint64(position, true)) : dv.getUint32(position, true));

      const m_lowPart = dv.getUint16(pointer, true);
      pointer += 2;
      const m_highPart = dv.getUint16(pointer, true);
      pointer += 2;
      //eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _m_terminator = dv.getUint16(pointer, true);
      pointer += 2;

      /// Getting the file name...
      /// Both need to be >= than 256 (terminator is 0)
      const filename = 0xff00 * (m_highPart - 0x100) + (m_lowPart - 0x100) + 1;

      return {
        newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
        data: filename > 0 ? filename : 0,
      };
    } catch (e) {
      if (this.DEBUG) {
        console.error("Error while parsing filename", e);
      }
      return {
        newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
        data: -1,
      };
    }
  }

  private Unknown(key: string, dv: DataView, pos: number): ParseFunctionReturn {
    this._debugLog(key, "Unknown", pos);

    throw new Error("Could not parse unknown data");
  }

  /**
   *      Parser utils & helpers
   **/

  private optimisedArray(
    key: string,
    dv: DataView,
    pos: number,
    length: number,
    OptimisedArray: NonNullable<ReturnType<typeof getOptimisedArrayConstructor>>
  ): ParseFunctionReturn {
    this._debugLog(key, "optimisedArray", pos);

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
      let log = `> ${key}: (${type}) pos: ${position}`;
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
