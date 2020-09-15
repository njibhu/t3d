let Utils = require("../../util/ParserUtils.js")

module.exports = [
  /// ==================================================
  /// Chunk: BKCK, versions: 3, strucTab: 0x16CF458
  /// ==================================================

  {
    name: "BKCK",
    versions: {
      // => Version: 2
      2: function() {
        this.AsndFileDataV2 = [
          "voiceId",
          "uint32",
          "flags",
          "uint32",
          "reserved1",
          "uint32",
          "reserved2",
          "uint32",
          "reserved3",
          "uint32",
          "reserved4",
          "uint32",
          "length",
          "float32",
          "offset",
          "float32",
          "reserved5",
          "uint8",
          "reserved6",
          "uint8",
          "reserved7",
          "uint8",
          "reserved8",
          "uint8",
          "audioData",
          Utils.getArrayReader("uint8")
        ];

        this.ReservedBankDataV2 = [
          "reserved1",
          "uint32",
          "reserved2",
          "uint32",
          "reserved3",
          "uint32",
          "reserved4",
          "uint32"
        ];

        this.__root = this.BankFileDataV2 = [
          "reserved1",
          "uint32",
          "reserved2",
          "uint32",
          "reserved3",
          "uint32",
          "reserved4",
          "uint32",
          "asndFile",
          Utils.getArrayReader(this.AsndFileDataV2),
          "reservedData",
          Utils.getPointerReader(this.ReservedBankDataV2)
        ];
      },

      // => Version: 1
      1: function() {
        this.AsndFileDataV1 = [
          "voiceId",
          "uint32",
          "flags",
          "uint32",
          "reserved1",
          "uint32",
          "reserved2",
          "uint32",
          "length",
          "float32",
          "offset",
          "float32",
          "audioData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.BankFileDataV1 = [
          "reserved1",
          "uint32",
          "reserved2",
          "uint32",
          "asndFile",
          Utils.getArrayReader(this.AsndFileDataV1)
        ];
      },

      // => Version: 0
      0: function() {
        this.AsndFileDataV0 = [
          "voiceId",
          "uint32",
          "flags",
          "uint32",
          "reserved1",
          "uint32",
          "reserved2",
          "uint32",
          "length",
          "float32",
          "offset",
          "float32",
          "audioData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.BankFileDataV0 = [
          "reserved1",
          "uint32",
          "reserved2",
          "uint32",
          "asndFile",
          Utils.getArrayReader(this.AsndFileDataV0)
        ];
      }
    }
  }
];
