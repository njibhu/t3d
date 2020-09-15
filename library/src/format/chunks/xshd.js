let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: XSHD, versions: 1, strucTab: 0x1528BE8
  /// ==================================================

  {
    name: "XSHD",
    versions: {
      // => Version: 0
      0: function() {
        this.AmatXbxShaderConstant = [
          "token",
          "uint32",
          "regIndex",
          "uint32",
          "regCount",
          "uint32"
        ];

        this.AmatXbxSamplerConstant = [
          "regIndex",
          "uint32",
          "stateIndex",
          "uint32",
          "texIndex",
          "uint32"
        ];

        this.__root = this.AmatXbxShader = [
          "isPixelShader",
          "uint32",
          "cachedData",
          Utils.getArrayReader("uint8"),
          "physicalData",
          Utils.getArrayReader("uint8"),
          "constants",
          Utils.getArrayReader(this.AmatXbxShaderConstant),
          "samplers",
          Utils.getArrayReader(this.AmatXbxSamplerConstant)
        ];
      }
    }
  }
];
