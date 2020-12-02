const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: CDHS, versions: 2, strucTab: 0x15313C0
  /// ==================================================

  {
    name: "CDHS",
    versions: {
      // => Version: 1, ReferencedFunction: 0x5B0AE0
      1: function () {
        this.PackVsGenParams = [
          "pointWindCount",
          "uint8",
          "lightPointCount",
          "uint8",
          "lightSpotCount",
          "uint8",
          "texTransCount",
          "uint8",
          "hazeMode",
          "uint8",
          "flags",
          "uint16",
        ];

        this.PackVertexShaderKey = [
          "vsGenParams",
          this.PackVsGenParams,
          "vertexFormat",
          "uint32",
          "texGenCount",
          "uint32",
          "texGen",
          ["[]", "uint32", 14],
          "vsVersion",
          "uint32",
        ];

        this.__root = this.PackShaderCache = ["data", Utils.getArrayReader(this.PackVertexShaderKey)];
      },

      // => Version: 0
      0: function () {
        this.PackVertexShaderKeyV0 = [
          "params",
          "uint32",
          "vertexFormat",
          "uint32",
          "texGenCount",
          "uint32",
          "texGen",
          ["[]", "uint32", 14],
          "vsVersion",
          "uint32",
        ];

        this.__root = this.PackShaderCacheV0 = ["data", Utils.getArrayReader(this.PackVertexShaderKeyV0)];
      },
    },
  },
];
