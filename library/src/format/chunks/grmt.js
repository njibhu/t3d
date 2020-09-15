let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: GRMT, versions: 7, strucTab: 0x1528A80
  /// ==================================================

  {
    name: "GRMT",
    versions: {
      // => Version: 6
      6: function() {
        this.__root = this.AmatGr = [
          "texArrayRange",
          "uint8",
          "texCount",
          "uint8",
          "sortOrder",
          "uint8",
          "sortTri",
          "uint8",
          "procAnim",
          "uint8",
          "debugFlags",
          "uint32",
          "flags",
          "uint32",
          "texTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];
      },

      // => Version: 5
      5: function() {
        this.__root = this.AmatGr = [
          "texArrayRange",
          "uint8",
          "texCount",
          "uint8",
          "texTransformRange",
          "uint8",
          "sortOrder",
          "uint8",
          "sortTri",
          "uint8",
          "procAnim",
          "uint8",
          "debugFlags",
          "uint32",
          "flags",
          "uint32",
          "texType",
          "uint32",
          "textureMasks",
          ["[]", "uint32", 4],
          "texTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];
      },

      // => Version: 4
      4: function() {
        this.__root = this.AmatGr = [
          "texArrayRange",
          "uint8",
          "texCount",
          "uint8",
          "texTransformRange",
          "uint8",
          "sortOrder",
          "uint8",
          "sortTri",
          "uint8",
          "procAnim",
          "uint8",
          "debugFlags",
          "uint32",
          "flags",
          "uint32",
          "texType",
          "uint32",
          "textureMasks",
          ["[]", "uint32", 4]
        ];
      },

      // => Version: 3
      3: function() {
        this.__root = this.AmatGrV3 = [
          "texArrayRange",
          "uint8",
          "texCount",
          "uint8",
          "texTransformRange",
          "uint8",
          "sortOrder",
          "uint8",
          "sortTri",
          "uint8",
          "debugFlags",
          "uint32",
          "flags",
          "uint32",
          "texType",
          "uint32",
          "textureMasks",
          ["[]", "uint32", 4]
        ];
      },

      // => Version: 2
      2: function() {
        this.__root = this.AmatGrV2 = [
          "texArrayRange",
          "uint8",
          "texCount",
          "uint8",
          "texTransformRange",
          "uint8",
          "sortOrder",
          "uint8",
          "sortTri",
          "uint8",
          "flags",
          "uint32",
          "texType",
          "uint32",
          "textureMasks",
          ["[]", "uint32", 4]
        ];
      },

      // => Version: 1
      1: function() {
        this.__root = this.AmatGrV1 = [
          "texArrayRange",
          "uint8",
          "texCount",
          "uint8",
          "texTransformRange",
          "uint8",
          "sortOrder",
          "uint8",
          "flags",
          "uint32",
          "texType",
          "uint32",
          "textureMasks",
          ["[]", "uint32", 4]
        ];
      },

      // => Version: 0
      0: function() {
        this.__root = this.AmatGrV0 = [
          "texArrayRange",
          "uint8",
          "texCount",
          "uint8",
          "texTransformRange",
          "uint8",
          "sortOrder",
          "uint8",
          "flags",
          "uint32",
          "textureMasks",
          ["[]", "uint32", 4]
        ];
      }
    }
  }
];
