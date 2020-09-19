let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: GR2S, versions: 5, strucTab: 0x177309C
  /// ==================================================

  {
    name: "GR2S",
    versions: {
      // => Version: 4, ReferencedFunction: 0xF28C30
      4: function () {
        this.ModelGr2DataV4 = [
          "filename",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "data",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.ModelFileGr2sV4 = ["gr2Data", Utils.getArrayReader(this.ModelGr2DataV4)];
      },

      // => Version: 3, ReferencedFunction: 0xF28880
      3: function () {
        this.ModelGr2DataV3 = [
          "filename",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "data",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.ModelFileGr2sV3 = ["gr2Data", Utils.getArrayReader(this.ModelGr2DataV3)];
      },

      // => Version: 2, ReferencedFunction: 0xF282D0
      2: function () {
        this.ModelGr2DataV2 = [
          "filename",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "data",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.ModelFileGr2sV2 = ["gr2Data", Utils.getArrayReader(this.ModelGr2DataV2)];
      },

      // => Version: 1
      1: function () {
        this.ModelGr2DataV1 = [
          "filename",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "data",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.ModelFileGr2sV1 = ["gr2Data", Utils.getArrayReader(this.ModelGr2DataV1)];
      },

      // => Version: 0
      0: function () {
        this.ModelGr2DataV0 = ["data", Utils.getArrayReader("uint8")];

        this.__root = this.ModelFileGr2sV0 = ["gr2Data", Utils.getArrayReader(this.ModelGr2DataV0)];
      },
    },
  },
];
