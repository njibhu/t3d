let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: MRAS, versions: 1, strucTab: 0x1528BA0
  /// ==================================================

  {
    name: "MRAS",
    versions: {
      // => Version: 0
      0: function () {
        this.AmatAppleShaderConstant = ["token", "uint32", "regIndex", "uint32", "regCount", "uint32"];

        this.AmatAppleShader = [
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

        this.AmatAppleRenderState = [
          "cullMode",
          "uint32",
          "blendControl",
          "uint32",
          "alphaTestAndMask",
          "uint32",
          "alphaTestRef",
          "uint32",
          "colorWrite_ARGB",
          "uint32",
          "depthWriteEnable",
          "uint32",
          "depthFunction",
          "uint32",
          "depthBias",
          "float32",
        ];

        this.AmatApplePass = [
          "renderState",
          this.AmatAppleRenderState,
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "psFileFame",
          Utils.getFileNameReader(),
          "vsFileName",
          Utils.getFileNameReader(),
        ];

        this.AmatAppleEffect = ["token", Utils.getQWordReader(), "passes", Utils.getArrayReader(this.AmatApplePass)];

        this.AmatAppleSamplerState = [
          "addressU",
          "uint32",
          "addressV",
          "uint32",
          "addressW",
          "uint32",
          "borderColor",
          "uint32",
          "magFilter",
          "uint32",
          "maxAnisotropy",
          "uint32",
          "maxMipLevel",
          "uint32",
          "minFilter",
          "uint32",
          "mipFilter",
          "uint32",
          "mipMapLodBias",
          "float32",
        ];

        this.__root = this.AmatAppleMaterial = [
          "name",
          Utils.getStringReader(),
          "shaders",
          Utils.getArrayReader(this.AmatAppleShader),
          "effects",
          Utils.getArrayReader(this.AmatAppleEffect),
          "samplers",
          Utils.getArrayReader(this.AmatAppleSamplerState),
        ];
      },
    },
  },
];
