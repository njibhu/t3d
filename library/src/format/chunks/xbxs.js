let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: XBXS, versions: 1, strucTab: 0x1528BAC
  /// ==================================================

  {
    name: "XBXS",
    versions: {
      // => Version: 0
      0: function() {
        this.AmatXbxShaderConstant = ["token", "uint32", "regIndex", "uint32", "regCount", "uint32"];

        this.AmatXbxSamplerConstant = ["regIndex", "uint32", "stateIndex", "uint32", "texIndex", "uint32"];

        this.AmatXbxShader = [
          "isPixelShader",
          "uint32",
          "cachedData",
          Utils.getArrayReader("uint8"),
          "physicalData",
          Utils.getArrayReader("uint8"),
          "constants",
          Utils.getArrayReader(this.AmatXbxShaderConstant),
          "samplers",
          Utils.getArrayReader(this.AmatXbxSamplerConstant),
        ];

        this.AmatXbxRenderState = [
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

        this.AmatXbxPass = [
          "renderState",
          this.AmatXbxRenderState,
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "psFileFame",
          Utils.getFileNameReader(),
          "vsFileName",
          Utils.getFileNameReader(),
        ];

        this.AmatXbxEffect = ["token", Utils.getQWordReader(), "passes", Utils.getArrayReader(this.AmatXbxPass)];

        this.AmatXbxSamplerState = [
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

        this.__root = this.AmatXbxMaterial = [
          "name",
          Utils.getStringReader(),
          "shaders",
          Utils.getArrayReader(this.AmatXbxShader),
          "effects",
          Utils.getArrayReader(this.AmatXbxEffect),
          "samplers",
          Utils.getArrayReader(this.AmatXbxSamplerState),
        ];
      },
    },
  },
];
