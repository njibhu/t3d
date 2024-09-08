export enum BaseType {
  Float32 = "Float32",
  Float64 = "Float64",
  Uint8 = "Uint8",
  Uint16 = "Uint16",
  Uint32 = "Uint32",
  Uint64 = "Uint64",
  RefString = "RefString",
  CString = "CString",
  FixedArray = "FixedArray",
  DynArray = "DynArray",
  RefArray = "RefArray",
  Pointer = "Pointer",
  RefString16 = "RefString16",
  Filename = "Filename",
  Fileref = "Fileref",
  Unknown = "Unknown",
}

export interface DataType {
  baseType: BaseType;
  subType?: DataType | string;
  length?: number;
  declarationType: string;
}

export const Float32: DataType = {
  baseType: BaseType.Float32,
  declarationType: "number",
};

export const Float64: DataType = {
  baseType: BaseType.Float64,
  declarationType: "number",
};

export const Uint8: DataType = {
  baseType: BaseType.Uint8,
  declarationType: "number",
};

export const Uint16: DataType = {
  baseType: BaseType.Uint16,
  declarationType: "number",
};

export const Uint32: DataType = {
  baseType: BaseType.Uint32,
  declarationType: "number",
};

export const Uint64: DataType = {
  baseType: BaseType.Uint64,
  declarationType: "BigInt",
};

export function CString(length?: number): DataType {
  return {
    baseType: BaseType.CString,
    length,
    declarationType: "string",
  };
}

export function RefString(): DataType {
  return {
    baseType: BaseType.RefString,
    declarationType: "string",
  };
}

export function FixedArray(subType: DataType | string, length: number): DataType {
  const nativeClass = getNativeArray(subType);
  if(nativeClass){
    return {
      baseType: BaseType.FixedArray,
      subType,
      length,
      declarationType: nativeClass.name,
    };
  }

  return {
    baseType: BaseType.FixedArray,
    subType,
    length,
    declarationType: `Array<${typeof subType === "string" ? subType : subType.declarationType}>`,
  };
}

export function DynArray(subType: DataType | string): DataType {
  const nativeClass = getNativeArray(subType);
  if(nativeClass){
    return {
      baseType: BaseType.DynArray,
      subType,
      declarationType: nativeClass.name,
    };
  }

  return {
    baseType: BaseType.DynArray,
    subType,
    declarationType: `Array<${typeof subType === "string" ? subType : subType.declarationType}>`,
  };
}

export function RefArray(subType: DataType | string): DataType {
  return {
    baseType: BaseType.RefArray,
    subType,
    declarationType: `Array<${typeof subType === "string" ? subType : subType.declarationType}>`,
  };
}

export function Pointer(subType: DataType | string): DataType {
  return {
    baseType: BaseType.Pointer,
    subType,
    declarationType: `${typeof subType === "string" ? subType : subType.declarationType}`,
  };
}

export function RefString16(): DataType {
  return {
    baseType: BaseType.RefString16,
    declarationType: "string",
  };
}

export function Filename(): DataType {
  return {
    baseType: BaseType.Filename,
    declarationType: "number",
  };
}

export function Fileref(): DataType {
  return {
    baseType: BaseType.Fileref,
    declarationType: "number",
  };
}

export function Unknown(): DataType {
  return {
    baseType: BaseType.Unknown,
    declarationType: "unknown",
  };
}

function getNativeArray(type: DataType | string) {
  if(typeof type === "string"){
    return undefined;
  }
  switch(type.baseType){
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
    case BaseType.Uint64:
      return BigUint64Array;
  }
}