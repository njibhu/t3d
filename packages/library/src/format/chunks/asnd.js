let Utils = T3D.ParserUtils;

module.exports = [
  /// ==================================================
  /// Chunk: ASND, versions: 3, strucTab: 0x16CF998
  /// ==================================================

  {
    name: "ASND",
    versions: {
      // => Version: 2
      2: function() {
        this.ReservedWaveformDataV2 = [
          "reserved1",
          "uint32",
          "reserved2",
          "uint32",
          "reserved3",
          "uint32",
          "reserved4",
          "uint32"
        ];

        this.__root = this.WaveformDataV2 = [
          "length",
          "float32",
          "offset",
          "float32",
          "reservedData",
          Utils.getPointerReader(this.ReservedWaveformDataV2),
          "reserved1",
          "uint32",
          "reserved2",
          "uint32",
          "crc",
          "uint32",
          "numSamples",
          "uint32",
          "loopStart",
          "uint32",
          "loopEnd",
          "uint32",
          "flags",
          "uint32",
          "format",
          "uint8",
          "reserved3",
          "uint8",
          "reserved4",
          "uint8",
          "reserved5",
          "uint8",
          "numChannels",
          "uint8",
          "reserved6",
          "uint8",
          "reserved7",
          "uint8",
          "reserved8",
          "uint8",
          "audioData",
          Utils.getArrayReader("uint8"),
          "otherData",
          Utils.getArrayReader("uint8")
        ];
      },

      // => Version: 1, ReferencedFunction: 0xE21150
      1: function() {
        this.__root = this.WaveformDataV1 = [
          "length",
          "float32",
          "offset",
          "float32",
          "crc",
          "uint32",
          "numSamples",
          "uint32",
          "loopStart",
          "uint32",
          "loopEnd",
          "uint32",
          "flags",
          "uint32",
          "format",
          "uint8",
          "noteBase",
          "uint8",
          "noteHigh",
          "uint8",
          "noteLow",
          "uint8",
          "numChannels",
          "uint8",
          "reserved1",
          "uint8",
          "reserved2",
          "uint8",
          "reserved3",
          "uint8",
          "audioData",
          Utils.getArrayReader("uint8"),
          "otherData",
          Utils.getArrayReader("uint8")
        ];
      },

      // => Version: 0
      0: function() {
        this.__root = this.WaveformDataV0 = [
          "data",
          Utils.getArrayReader("uint8"),
          "flags",
          "uint32",
          "length",
          "float32",
          "noteBase",
          "uint8",
          "noteHigh",
          "uint8",
          "noteLow",
          "uint8",
          "numChannels",
          "uint8",
          "numSamples",
          "uint32",
          "waveformDataType",
          "uint8"
        ];
      }
    }
  }
];
