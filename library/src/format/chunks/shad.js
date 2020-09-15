let Utils = require("../../util/ParserUtils.js")

module.exports = [
  /// ==================================================
  /// Chunk: shad, versions: 2, strucTab: 0x1722DB8
  /// ==================================================

  {
    name: "shad",
    versions: {
      // => Version: 1, ReferencedFunction: 0xEBB230
      1: function() {
        this.PackMapShadowTileV1 = [
          "compressionMode",
          "uint32",
          "bytes",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapShadowV1 = [
          "shadowDims",
          ["[]", "uint32", 2],
          "tileDims",
          ["[]", "uint32", 2],
          "tiles",
          Utils.getArrayReader(this.PackMapShadowTileV1),
          "worldToShadow",
          ["[]", "float32", 16],
          "s",
          ["[]", "float32", 2],
          "t",
          ["[]", "float32", 2],
          "u",
          ["[]", "float32", 2],
          "shadowEye",
          ["[]", "float32", 3],
          "shadowDir",
          ["[]", "float32", 3],
          "shadowUp",
          ["[]", "float32", 3]
        ];
      },

      // => Version: 0
      0: function() {
        this.PackMapShadowTileV0 = [
          "compressionMode",
          "uint32",
          "bytes",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapShadowV0 = [
          "shadowDims",
          ["[]", "uint32", 2],
          "tileDims",
          ["[]", "uint32", 2],
          "tiles",
          Utils.getArrayReader(this.PackMapShadowTileV0),
          "worldToShadow",
          ["[]", "float32", 16],
          "s",
          ["[]", "float32", 2],
          "t",
          ["[]", "float32", 2],
          "u",
          ["[]", "float32", 2]
        ];
      }
    }
  }
];
