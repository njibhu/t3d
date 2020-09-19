let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: occ, versions: 1, strucTab: 0x17213F0
  /// ==================================================

  {
    name: "occ",
    versions: {
      // => Version: 0
      0: function() {
        this.MapOcclusion = [
          "token",
          "uint32",
          "flags",
          "uint32",
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "name",
          Utils.getString16Reader(),
        ];

        this.__root = this.MapOcclusions = ["Occlusions", Utils.getArrayReader(this.MapOcclusion)];
      },
    },
  },
];
