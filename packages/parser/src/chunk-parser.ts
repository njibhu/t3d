import { BaseType, DataType } from "./types";

interface Definition {
  chunkName: string;
  name: string;
  version: number;
  definitions: {
    [definition: string]: { [key: string]: BaseType }
  };
  root: {
    [key: string]: BaseType 
  }
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

  constructor(definition: Definition){
    Object.assign(this, definition);
  }

  public parse(dv: DataView, pos: number): ParseFunctionReturn {
    let position = pos;
    const parsedObject = {};
    for (const key in this.root){
      let parsedResult: ParseFunctionReturn = this[this.root[key]](dv, position);
      parsedObject[key] = parsedResult.data;
      position = parsedResult.newPosition;
    }

    return {
      newPosition: position,
      data: parsedObject
    }
  }

  Float32(dv: DataView, pos: number): ParseFunctionReturn{
    return  { newPosition: pos + 4, data: dv.getFloat32(pos, true) }
  }
  
  Float64(dv: DataView, pos: number): ParseFunctionReturn{
    return { newPosition: pos + 8, data: dv.getFloat64(pos, true) };
  }

  Uint8(dv: DataView, pos: number): ParseFunctionReturn{
    return { newPosition: pos + 1, data: dv.getUint8(pos) }
  }

  Uint16(dv: DataView, pos: number): ParseFunctionReturn {
    return { newPosition: pos + 2, data: dv.getUint16(pos, true) }
  }

  Uint32(dv: DataView, pos: number): ParseFunctionReturn {
    return { newPosition: pos + 4, data: dv.getUint32(pos, true) };
  }

  Uint64(dv: DataView, pos: number): ParseFunctionReturn {
    return {
      newPosition: pos + 4, 
      data: dv.getUint32(pos, true) + 2 ** 32 * dv.getUint32(pos + 8, true)
    }  
  }

  CString(dv: DataView, pos: number): ParseFunctionReturn {
    const u8 = new Uint8Array(dv.buffer, pos);
    const end = u8.findIndex(v => v === 0);

    return {
      newPosition: pos + end, 
      data: String.fromCharCode.apply(null, new Uint8Array(u8.slice(0, end)))
    }
  }

  FixedArray(dv: DataView, pos: number, type: DataType | string, length: number): ParseFunctionReturn{
    return {
      // TODO
      newPosition: -1,
      data: {}
    }
  }

  DynArray(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {}
    }
  }

  RefArray(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {}
    }
  }

  Pointer(dv: DataView, pos: number, type: DataType | string): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {}
    }
  }

  String16(dv: DataView, pos: number): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {}
    }
  }

  Filename(dv: DataView, pos: number): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {}
    }
  }

  Fileref(dv: DataView, pos: number): ParseFunctionReturn {
    return {
      // TODO
      newPosition: -1,
      data: {}
    }
  }

  Unknown(dv: DataView, pos: number): ParseFunctionReturn {
    throw new Error("Could not parse unknown data");
  }

  parseType(dv: DataView, pos: number, typeDefinitionName: string): ParseFunctionReturn {
    const parsedObject = {};
    let position = pos;
    const definition = this.definitions[typeDefinitionName];
    for (const key in definition){
      let parsedResult: ParseFunctionReturn = definition[key](dv, position);
      parsedObject[key] = parsedResult.data;
      position = parsedResult.newPosition;
    }

    return {
      newPosition: position,
      data: parsedObject
    }
  }
}