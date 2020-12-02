const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: DX9S, versions: 12, strucTab: 0x1528AE0
  /// ==================================================

  {
    name: "DX9S",
    versions: {
      // => Version: 11, ReferencedFunction: 0x5AE350
      11: function () {
        this.AmatDx9SamplerV11 = [
          "textureIndex",
          "uint32",
          "state",
          Utils.getArrayReader("uint32"),
          "usesBindTexture",
          "uint32",
        ];

        this.AmatDx9ShaderV11 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
          "instructionCount",
          "uint16",
        ];

        this.AmatDx9EffectV11 = [
          "token",
          Utils.getQWordReader(),
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV11 = ["effects", Utils.getRefArrayReader(this.AmatDx9EffectV11)];

        this.AmatDx9TechniqueV11 = [
          "name",
          Utils.getStringReader(),
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV11),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV11 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV11),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV11),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV11),
          "useLegacyBindTextures",
          "uint32",
        ];
      },

      // => Version: 10
      10: function () {
        this.AmatDx9SamplerV10 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV10 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
          "instructionCount",
          "uint16",
        ];

        this.AmatDx9EffectV10 = [
          "token",
          Utils.getQWordReader(),
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV10 = ["effects", Utils.getRefArrayReader(this.AmatDx9EffectV10)];

        this.AmatDx9TechniqueV10 = [
          "name",
          Utils.getStringReader(),
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV10),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV10 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV10),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV10),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV10),
        ];
      },

      // => Version: 9, ReferencedFunction: 0x5AE990
      9: function () {
        this.AmatDx9SamplerV9 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV9 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9EffectV9 = [
          "token",
          Utils.getQWordReader(),
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV9 = ["effects", Utils.getRefArrayReader(this.AmatDx9EffectV9)];

        this.AmatDx9TechniqueV9 = [
          "name",
          Utils.getStringReader(),
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV9),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV9 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV9),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV9),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV9),
        ];
      },

      // => Version: 8, ReferencedFunction: 0x5AE760
      8: function () {
        this.AmatDx9SamplerV8 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV8 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9EffectV8 = [
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV8 = ["effects", Utils.getRefArrayReader(this.AmatDx9EffectV8)];

        this.AmatDx9TechniqueV8 = [
          "name",
          Utils.getStringReader(),
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV8),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV8 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV8),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV8),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV8),
        ];
      },

      // => Version: 7, ReferencedFunction: 0x5AE6E0
      7: function () {
        this.AmatDx9SamplerV7 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV7 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9EffectV7 = [
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV7 = ["effects", ["[]", this.AmatDx9EffectV7, 8]];

        this.AmatDx9TechniqueV7 = [
          "name",
          Utils.getStringReader(),
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV7),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV7 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV7),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV7),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV7),
        ];
      },

      // => Version: 6, ReferencedFunction: 0x5AE690
      6: function () {
        this.AmatDx9SamplerV6 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV6 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9EffectV6 = [
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV6 = ["effects", ["[]", this.AmatDx9EffectV6, 8]];

        this.AmatDx9TechniqueV6 = [
          "name",
          Utils.getStringReader(),
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV6),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV6 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV6),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV6),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV6),
        ];
      },

      // => Version: 5, ReferencedFunction: 0x5AE5A0
      5: function () {
        this.AmatDx9SamplerV5 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV5 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9EffectV5 = [
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV5 = ["effects", ["[]", this.AmatDx9EffectV5, 7]];

        this.AmatDx9TechniqueV5 = [
          "name",
          Utils.getStringReader(),
          "sortTri",
          "uint32",
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV5),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV5 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV5),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV5),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV5),
        ];
      },

      // => Version: 4
      4: function () {
        this.AmatDx9SamplerV4 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV4 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9EffectV4 = [
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV4 = ["effects", ["[]", this.AmatDx9EffectV4, 7]];

        this.AmatDx9TechniqueV4 = [
          "name",
          Utils.getStringReader(),
          "sortTri",
          "uint32",
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV4),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV4 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV4),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV4),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV4),
        ];
      },

      // => Version: 3
      3: function () {
        this.AmatDx9SamplerV3 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV3 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9EffectV3 = [
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV3 = ["effects", ["[]", this.AmatDx9EffectV3, 7]];

        this.AmatDx9TechniqueV3 = [
          "name",
          Utils.getStringReader(),
          "sortTri",
          "uint32",
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV3),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV3 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV3),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV3),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV3),
        ];
      },

      // => Version: 2, ReferencedFunction: 0x5AE370
      2: function () {
        this.AmatDx9SamplerV2 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV2 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9EffectV2 = [
          "renderStates",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9PassV2 = ["effects", ["[]", this.AmatDx9EffectV2, 7]];

        this.AmatDx9TechniqueV2 = [
          "name",
          Utils.getStringReader(),
          "sortTri",
          "uint32",
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV2),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV2 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV2),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV2),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV2),
        ];
      },

      // => Version: 1, ReferencedFunction: 0x5AE1C0
      1: function () {
        this.AmatDx9SamplerV1 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV1 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9RenderStatesV1 = ["renderStates", Utils.getArrayReader("uint32")];

        this.AmatDx9PassV1 = [
          "effectRenderStates",
          Utils.getRefArrayReader(this.AmatDx9RenderStatesV1),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          ["[]", "uint32", 5],
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          ["[]", "uint32", 5],
        ];

        this.AmatDx9TechniqueV1 = [
          "name",
          Utils.getStringReader(),
          "sortTri",
          "uint32",
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV1),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV1 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV1),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV1),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV1),
        ];
      },

      // => Version: 0
      0: function () {
        this.AmatDx9SamplerV0 = ["textureIndex", "uint32", "state", Utils.getArrayReader("uint32")];

        this.AmatDx9ShaderV0 = [
          "shader",
          Utils.getArrayReader("uint32"),
          "constRegisters",
          Utils.getArrayReader("uint32"),
          "constTokens",
          Utils.getArrayReader("uint32"),
        ];

        this.AmatDx9PassV0 = [
          "renderState",
          Utils.getArrayReader("uint32"),
          "samplerIndex",
          Utils.getArrayReader("uint32"),
          "pixelShader",
          "uint32",
          "vertexShader",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
          "vsGenFlags",
          "uint32",
          "passFlags",
          "uint32",
        ];

        this.AmatDx9TechniqueV0 = [
          "name",
          Utils.getStringReader(),
          "sortTri",
          "uint32",
          "passes",
          Utils.getArrayReader(this.AmatDx9PassV0),
          "maxPsVersion",
          "uint16",
          "maxVsVersion",
          "uint16",
        ];

        this.__root = this.AmatDx9MaterialV0 = [
          "samplers",
          Utils.getArrayReader(this.AmatDx9SamplerV0),
          "shaders",
          Utils.getArrayReader(this.AmatDx9ShaderV0),
          "techniques",
          Utils.getArrayReader(this.AmatDx9TechniqueV0),
        ];
      },
    },
  },
];
