const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: watr, versions: 1, strucTab: 0x172335C
  /// ==================================================

  {
    name: "watr",
    versions: {
      // => Version: 0
      0: function () {
        this.__root = this.PackMapWaterV0 = [
          "waterFoamData",
          Utils.getArrayReader("uint8"),
          "waterChunks",
          Utils.getArrayReader("uint32"),
        ];
      },
    },
  },
];
