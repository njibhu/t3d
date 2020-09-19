let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: SPPA, versions: 1, strucTab: 0x1528BF4
  /// ==================================================

  {
    name: "SPPA",
    versions: {
      // => Version: 0
      0: function() {
        this.AmatAppleShaderConstant = ["token", "uint32", "regIndex", "uint32", "regCount", "uint32"];

        this.__root = this.AmatAppleShader = [
          "isPixelShader",
          "uint32",
          "cachedData",
          Utils.getArrayReader("uint8"),
          "physicalData",
          Utils.getArrayReader("uint8"),
          "constants",
          Utils.getArrayReader(this.AmatAppleShaderConstant),
          "samplers",
          Utils.getArrayReader(this.AmatAppleShaderConstant),
        ];
      },
    },
  },
];
