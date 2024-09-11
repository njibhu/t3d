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
  public DEBUG: boolean;
  public FIX_NEGATIVE_ZERO: boolean;

  constructor(definition: Definition, public is64Bit = false) {
    Object.assign(this, definition);
    this.DEBUG = false;
    this.FIX_NEGATIVE_ZERO = false;
  }

  public parse(dv: DataView, pos: number): ParseFunctionReturn {
    let position = pos;
    const parsedObject: any = {};
    try {
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
    } catch (e) {
      if(this.DEBUG || (globalThis as any).T3D_PARSER_DEBUG){
        console.error("Partially parsed object:", parsedObject);
      }
      throw e;
    }

    return {
      newPosition: position,
      data: parsedObject,
    };
  }

  private parseType(dv: DataView, pos: number, typeDefinitionName: string): ParseFunctionReturn {
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
    let data = dv.getFloat32(pos, true);
    if(this.FIX_NEGATIVE_ZERO && isZeroNegative(data)){
      data = 0;
    }
    if (this.DEBUG) console.debug("Float32", data);
    return { newPosition: pos + 4, data };
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
    if (this.DEBUG) console.debug("Uint64", Number(dv.getBigUint64(pos, true)));
    return {
      newPosition: pos + 8,
      data: dv.getBigUint64(pos, true),
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
    let ptr = this.is64Bit ? pos + Number(dv.getBigUint64(pos, true)) : pos + dv.getUint32(pos, true);

    let data = "";
    let num;
    while (ptr + 1 < dv.byteLength && (num = dv.getUint8(ptr)) !== 0) {
      ptr += 1;
      data += String.fromCharCode(num);
    }

    return {
      newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
      data,
    };
  }

  private FixedArray(dv: DataView, pos: number, type: DataType | string, length: number): ParseFunctionReturn {
    // Some types can be mapped directly from their buffer into the return type
    if(typeof type != "string"){
      const arrayConstructor = getOptimisedArrayConstructor(type.baseType);
      if(arrayConstructor){
        return this.optimisedArray(dv, pos, length, arrayConstructor);
      }
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
    let arrayOffset = this.is64Bit ? Number(dv.getBigUint64(pos + PTR_SIZE_64, true)) : dv.getUint32(pos + PTR_SIZE_32, true);

    if (this.DEBUG) console.debug("DynArray", arrayLength, arrayOffset);

    if (arrayOffset === 0) {
      return {
        newPosition: pos + (this.is64Bit ? 12 : 8),
        data: [],
      };
    }
    let arrayPtr = pos + 4 + arrayOffset;

    return {
      newPosition: (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32) + 4,
      data: this.FixedArray(dv, arrayPtr, type, arrayLength).data,
    };
  }

  private RefArray(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    let offset = pos;
    const ret_arr: any = [];

    // Read array length
    const arr_len = dv.getUint32(offset, true);
    offset += 4;

    // Read pointer to array data
    const arr_ptr_offset = this.is64Bit ? Number(dv.getBigUint64(offset, true)) : dv.getUint32(offset, true);
    const arr_ptr = offset + arr_ptr_offset;
    offset += (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32);

    if (arr_len === 0) {
      return { newPosition: offset, data: ret_arr };
    }

     // Save original position to return later
     const orgPos = offset;

     // Go to pointer and read array of offsets
     let curr_pos = arr_ptr;
     const offsets = new Array(arr_len);// new Int32Array(arr_len);
     for (let i = 0; i < arr_len; i++) {
         offsets[i] = this.is64Bit ? Number(dv.getBigUint64(curr_pos + i * PTR_SIZE_64, true)) : dv.getInt32(curr_pos + i * PTR_SIZE_32, true);
     }

    // Set pointer to read structures
    let pointer = orgPos - (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32);
    const base_offset = this.is64Bit ? Number(dv.getBigUint64(pointer, true)): dv.getUint32(pointer, true);
    pointer += base_offset;

    for (let i = 0; i < offsets.length; i++) {
      if (offsets[i] !== 0) {
        const struct_pos = pointer + i * (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32) + offsets[i];
        if (typeof type === "string") {
          ret_arr.push(this.parseType(dv, struct_pos, type).data);
        } else {
          ret_arr.push(this[type.baseType](dv, struct_pos, type.subType!, type.length!).data);
        }
      }
    }

    return { newPosition: orgPos, data: ret_arr };

  }

  private Pointer(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    const offset = this.is64Bit ? Number(dv.getBigUint64(pos, true)) : dv.getUint32(pos, true);
    if (offset === 0) {
      return {
        newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
        data: {},
      };
    }

    const parsedItem =
      typeof type === "string"
        ? this.parseType(dv, pos + offset, type)
        : this[type.baseType](dv, pos + offset, type.subType!, type.length!);

    return {
      newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
      data: parsedItem.data,
    };
  }

  private RefString16(dv: DataView, pos: number): ParseFunctionReturn {
    let ptr = pos + (this.is64Bit ? Number(dv.getBigUint64(pos, true)): dv.getUint32(pos, true));

    let data = "";
    let num;
    while (ptr + 2 < dv.byteLength && (num = dv.getUint16(ptr, true)) !== 0) {
      ptr += 2;
      data += String.fromCharCode(num);
    }

    return {
      newPosition: pos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
      data,
    };
  }

  private Fileref(dv: DataView, pos: number): ParseFunctionReturn {
    return this.Filename(dv, pos);
  }

  private Filename(dv: DataView, orgPos: number): ParseFunctionReturn {
    // This implementation is based on the old Utils.getFileNameReader() function
    let pos = orgPos;
    try {
      let ptr = pos + (this.is64Bit ? Number(dv.getBigUint64(pos, true)): dv.getUint32(pos, true));
      if(this.DEBUG) { console.log(ptr.toString(16)); }

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
        newPosition: orgPos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
        data: ret > 0 ? ret : 0,
      };
    } catch (e) {
      if (this.DEBUG) {
        console.error("Error while parsing filename", e);
      }
      return {
        newPosition: orgPos + (this.is64Bit ? PTR_SIZE_64 : PTR_SIZE_32),
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

  private optimisedArray(dv: DataView, pos: number, length: number, OptimisedArray: NonNullable<ReturnType<typeof getOptimisedArrayConstructor>>): ParseFunctionReturn {
    const byteLength = length * OptimisedArray.BYTES_PER_ELEMENT;
    const byteArray = new Uint8Array(dv.buffer.slice(pos, pos + byteLength));
    const data = new OptimisedArray(byteArray.buffer);

    if (this.DEBUG) console.debug("OptimizedArray", data);
    // if(this.FIX_NEGATIVE_ZERO){
    //   for (let i = 0; i < data.length; i++) {
    //     if(isZeroNegative(data[i])){
    //       data[i] = 0;
    //     }
    //   }
    // }

    return {
      newPosition: pos + length * OptimisedArray!.BYTES_PER_ELEMENT,
      data,
    };
  }


}

function getOptimisedArrayConstructor(baseType: BaseType) {
  if(baseType === BaseType.Float32){
    return Float32Array;
  }
  if(baseType === BaseType.Float64){
    return Float64Array;
  }
  if(baseType === BaseType.Uint8){
    return Uint8Array;
  }
  if(baseType === BaseType.Uint16){
    return Uint16Array;
  }
  if(baseType === BaseType.Uint32){
    return Uint32Array;
  }
  if(baseType === BaseType.Uint64){
    return BigUint64Array;
  }
}

function isZeroNegative(zero: number) {
  const isZero = zero === 0;
  const isNegative = 1 / zero === -Infinity;
  return isNegative && isZero;
}