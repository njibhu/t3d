const match: {
  [name: string]: (...args: any) => string;
} = {
  Float32: () => "number",
  Float64: () => "number",
  Uint8: () => "number",
  Uint16: () => "number",
  Uint32: () => "number",
  Uint64: () => "number",
  CString: () => "string",
  FixedArray: (type: string, isNative: boolean): string => (isNative ? `Array<${match[type]()}>` : `Array<${type}>`),
  DynArray: (type: string, isNative: boolean): string => (isNative ? `Array<${match[type]()}>` : `Array<${type}>`),
  RefArray: (type: string, isNative: boolean): string => (isNative ? `Array<${match[type]()}>` : `Array<${type}>`),
  Pointer: (type: string, isNative: boolean): string => (isNative ? match[type]() : type),
  String16: () => "string",
  Filename: () => "string",
  Fileref: () => "string",
};

export function transform(type: string): string {
  const mainType = type.split("(")[0];
  const secondaryType = type.split("(").length > 1 ? type.split("(")[1].replace(")", "") : undefined;
  const isNative = secondaryType?.startsWith("'") || false;

  if (!match[mainType]) {
    throw new Error("Invalid definition type");
  }

  return match[mainType](secondaryType, isNative);
}
