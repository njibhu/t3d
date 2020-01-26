export enum AnetType {
  Byte = 5, //0x05
  Byte4 = 6, //0x06
  Double = 7, //0x07
  DWord = 10, //0x0A
  Filename = 11, //0x0B
  Float = 12, //0x0C
  Float2 = 13, //0x0D
  Float3 = 14, //0x0E
  Float4 = 15, //0x0F
  QWord = 17, //0x11
  WCharPtr = 18, //0x12
  CharPtr = 19, //0x13
  Word = 21, //0x15
  Byte16 = 22, //0x16
  Byte3 = 23, //0x17
  DWord2 = 24, //0x18
  DWord4 = 25, //0x19
  Word3 = 26, //0x1A
  Fileref = 27, //0x1B
}

interface BasicTypes {
  [name: number]: string;
}

// Syntax copied from old parser
export const basicTypes: BasicTypes = {
  [AnetType.Byte]: "'uint8'",
  [AnetType.Byte4]: "['[]', 'uint8', 4]",
  [AnetType.Double]: "'float64'",
  [AnetType.DWord]: "'uint32'",
  [AnetType.Filename]: "Utils.getFileNameReader()",
  [AnetType.Float]: "'float32'",
  [AnetType.Float2]: "['[]', 'float32', 2]",
  [AnetType.Float3]: "['[]', 'float32', 3]",
  [AnetType.Float4]: "['[]', 'float32', 4]",
  [AnetType.QWord]: "Utils.getQWordReader()",
  [AnetType.WCharPtr]: "Utils.getString16Reader()",
  [AnetType.CharPtr]: "Utils.getStringReader()",
  [AnetType.Word]: "'uint16'",
  [AnetType.Byte16]: "['[]', 'uint8', 16]",
  [AnetType.Byte3]: "['[]', 'uint8', 3]",
  [AnetType.DWord2]: "['[]', 'uint32', 2]",
  [AnetType.DWord4]: "['[]', 'uint32', 4]",
  [AnetType.Word3]: "['[]', 'uint16', 3]",
  [AnetType.Fileref]: "Utils.getFileNameReader()",
};
