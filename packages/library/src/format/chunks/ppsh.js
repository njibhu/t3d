let Utils = T3D.ParserUtils;

module.exports = [
  /// ==================================================
  /// Chunk: PPSH, versions: 1, strucTab: 0x1528BD0
  /// ==================================================

  {
    name: "PPSH",
    versions: {
      // => Version: 0
      0: function() {
        this.AmatPs3ShaderConstant = [
          "token",
          "uint32",
          "regIndex",
          "uint32",
          "regCount",
          "uint32",
          "regValue",
          ["[]", "float32", 4],
          "data",
          "uint32"
        ];

        this.AmatPs3SamplerConstant = [
          "regIndex",
          "uint32",
          "stateIndex",
          "uint32",
          "texIndex",
          "uint32"
        ];

        this.__root = this.AmatPs3FragmentShaderConfig = [
          "offset",
          "uint32",
          "attributeInputMask",
          "uint32",
          "texCoordsInputMask",
          "uint32",
          "texCoords2D",
          "uint32",
          "texCoordsCentroid",
          "uint32",
          "fragmentControl",
          "uint32",
          "registerCount",
          "uint32",
          "constants",
          Utils.getArrayReader(this.AmatPs3ShaderConstant),
          "samplers",
          Utils.getArrayReader(this.AmatPs3SamplerConstant),
          "code",
          Utils.getArrayReader("uint8")
        ];
      }
    }
  }
];
