export enum AType {
  FixedArray = 1,
  DynArray = 2,
  RefArray = 3,
  Unknown4 = 4,
  Byte = 5, //0x05
  Byte4 = 6, //0x06
  Double = 7, //0x07
  Unknown8 = 8,
  Unknown9 = 9,
  DWord = 10, //0x0A
  Filename = 11, //0x0B
  Float = 12, //0x0C
  Float2 = 13, //0x0D
  Float3 = 14, //0x0E
  Float4 = 15, //0x0F
  Pointer = 16, //0x10
  QWord = 17, //0x11
  WCharPtr = 18, //0x12
  CharPtr = 19, //0x13,
  CustomType = 20,
  Word = 21, //0x15
  Byte16 = 22, //0x16
  Byte3 = 23, //0x17
  DWord2 = 24, //0x18
  DWord4 = 25, //0x19
  Word3 = 26, //0x1A
  Fileref = 27, //0x1B
  Unknown28 = 28,
  CustomType2 = 29,
}

interface AnetTypes {
  [name: number]: (customSubType?: boolean, subTypeName?: string, subTypeAmount?: number) => string;
}

export const anetTypes: AnetTypes = {
  // 0x01
  [AType.FixedArray]: (customSubType, subTypeName, subTypeAmount): string =>
    customSubType ? `FixedArray('${subTypeName}', ${subTypeAmount})` : `FixedArray(${subTypeName}, ${subTypeAmount})`,
  // 0x02
  [AType.DynArray]: (customSubType, subTypeName): string =>
    customSubType ? `DynArray('${subTypeName}')` : `DynArray(${subTypeName})`,
  // 0x03
  [AType.RefArray]: (customSubType, subTypeName): string =>
    customSubType ? `RefArray('${subTypeName}')` : `RefArray(${subTypeName})`,
  // 0x04
  [AType.Unknown4]: () => {
    console.log("Found Unknown4, this chunk might break the parser");
    return "Unknown4";
  },
  // 0x05
  [AType.Byte]: () => "Uint8",
  // 0x6
  [AType.Byte4]: () => "FixedArray(Uint8, 4)",
  // 0x7
  [AType.Double]: () => "Float64",
  // 0x8
  [AType.Unknown8]: () => {
    console.log("Found Unknown8, this chunk might break the parser");
    return "Unknown8";
  },
  // 0x9
  [AType.Unknown9]: () => {
    console.log("Found Unknown9, this chunk might break the parser");
    return "Unknown9";
  },
  // 0x0A
  [AType.DWord]: () => "Uint32",
  // 0x0B
  [AType.Filename]: () => "Filename",
  // 0x0C
  [AType.Float]: () => "Float32",
  // 0x0D
  [AType.Float2]: () => "FixedArray(Float32, 2)",
  // 0x0E
  [AType.Float3]: () => "FixedArray(Float32, 3)",
  // 0x0F
  [AType.Float4]: () => "FixedArray(Float32, 4)",
  // 0x10
  [AType.Pointer]: (customSubType, subTypeName): string =>
    customSubType ? `Pointer('${subTypeName}')` : `Pointer(${subTypeName})`,
  // 0x11
  [AType.QWord]: () => "Uint64",
  // 0x12
  [AType.WCharPtr]: () => "String16",
  // 0x13
  [AType.CharPtr]: () => "CString",
  // 0x14
  [AType.CustomType]: (customSubType, subTypeName): string => (customSubType ? `'${subTypeName}'` : `${subTypeName}`),
  // 0x15
  [AType.Word]: () => "Uint16",
  // 0x16
  [AType.Byte16]: () => "FixedArray(Uint8, 16)",
  // 0x17
  [AType.Byte3]: () => "FixedArray(Uint8, 3)",
  // 0x18
  [AType.DWord2]: () => "FixedArray(Uint32, 2)",
  // 0x19
  [AType.DWord4]: () => "FixedArray(Uint32, 4)",
  // 0x1A
  [AType.Word3]: () => "FixedArray(Uint16, 3)",
  // 0x1B
  [AType.Fileref]: () => "Fileref",
  // 0x1C
  [AType.Unknown28]: () => {
    console.log("Found Unknown28, this chunk might break the parser");
    return "Unknown28";
  },
  // 0x1D
  [AType.CustomType2]: (customSubType, subTypeName): string => (customSubType ? `'${subTypeName}'` : `${subTypeName}`),
};
