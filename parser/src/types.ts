export enum BaseType {
  Float32 = "Float32",
  Float64 = "Float64",
  Uint8 = "Uint8",
  Uint16 = "Uint16",
  Uint32 = "Uint32",
  Uint64 = "Uint64",
  CString = "CString",
  FixedArray = "FixedArray",
  DynArray = "DynArray",
  RefArray = "RefArray",
  Pointer = "Pointer",
  String16 = "String16",
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

export function FixedArray(subType: DataType | string, length: number): DataType {
  return {
    baseType: BaseType.FixedArray,
    subType,
    length,
    declarationType: `Array<${typeof subType === "string" ? subType : subType.declarationType}>`,
  };
}

export function DynArray(subType: DataType | string): DataType {
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

export function String16(): DataType {
  return {
    baseType: BaseType.String16,
    declarationType: "string",
  };
}

export function Filename(): DataType {
  return {
    baseType: BaseType.Filename,
    declarationType: "string",
  };
}

export function Fileref(): DataType {
  return {
    baseType: BaseType.Fileref,
    declarationType: "string",
  };
}

export function Unknown(): DataType {
  return {
    baseType: BaseType.Unknown,
    declarationType: "unknown",
  };
}
