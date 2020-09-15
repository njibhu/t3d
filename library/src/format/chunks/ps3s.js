let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: PS3S, versions: 1, strucTab: 0x1528AD4
  /// ==================================================

  {
    name: "PS3S",
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

        this.AmatPs3FragmentShaderConfig = [
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

        this.AmatPs3VertexShaderConfig = [
          "instructionSlot",
          "uint32",
          "instructionCount",
          "uint32",
          "attributeInputMask",
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

        this.AmatPs3RenderState = [
          "cullMode",
          "uint32",
          "alphaFunc",
          "uint32",
          "alphaRef",
          "uint32",
          "blendOp",
          "uint32",
          "blendSrc",
          "uint32",
          "blendDst",
          "uint32",
          "colorMask",
          "uint32",
          "depthWrite",
          "uint32",
          "depthFunc",
          "uint32",
          "depthBias",
          "float32"
        ];

        this.AmatPs3Pass = [
          "renderState",
          this.AmatPs3RenderState,
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "psFileFame",
          Utils.getFileNameReader(),
          "vsFileName",
          Utils.getFileNameReader()
        ];

        this.AmatPs3Effect = [
          "token",
          Utils.getQWordReader(),
          "passes",
          Utils.getArrayReader(this.AmatPs3Pass)
        ];

        this.AmatPs3Sampler = [
          "wraps",
          "uint32",
          "wrapt",
          "uint32",
          "maxAniso",
          "uint32",
          "filterMin",
          "uint32",
          "filterMag",
          "uint32",
          "filterBias",
          "uint32"
        ];

        this.__root = this.AmatPs3Material = [
          "name",
          Utils.getStringReader(),
          "fragmentShaders",
          Utils.getArrayReader(this.AmatPs3FragmentShaderConfig),
          "vertexShaders",
          Utils.getArrayReader(this.AmatPs3VertexShaderConfig),
          "effects",
          Utils.getArrayReader(this.AmatPs3Effect),
          "samplers",
          Utils.getArrayReader(this.AmatPs3Sampler)
        ];
      }
    }
  }
];
