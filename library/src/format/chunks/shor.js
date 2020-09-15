let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: shor, versions: 4, strucTab: 0x1722DE8
  /// ==================================================

  {
    name: "shor",
    versions: {
      // => Version: 3, ReferencedFunction: 0xEBB250
      3: function() {
        this.MapShoreChain = [
          "offset",
          "float32",
          "opacity",
          "float32",
          "animationSpeed",
          "float32",
          "edgeSize",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "points",
          Utils.getArrayReader(["[]", "float32", 2]),
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "restTime",
          "float32",
          "fadeRanges",
          ["[]", ["[]", "float32", 2], 4],
          "simplifyDistMin",
          "float32",
          "simplifyDistMax",
          "float32",
          "simplifyDot",
          "float32"
        ];

        this.__root = this.MapShore = [
          "chains",
          Utils.getArrayReader(this.MapShoreChain)
        ];
      },

      // => Version: 2
      2: function() {
        this.MapShoreChain = [
          "offset",
          "float32",
          "opacity",
          "float32",
          "animationSpeed",
          "float32",
          "edgeSize",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "points",
          Utils.getArrayReader(["[]", "float32", 2]),
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "restTime",
          "float32",
          "fadeRanges",
          ["[]", ["[]", "float32", 2], 4]
        ];

        this.__root = this.MapShore = [
          "chains",
          Utils.getArrayReader(this.MapShoreChain)
        ];
      }
    }
  }
];
