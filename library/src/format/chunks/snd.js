let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: snd, versions: 1, strucTab: 0x1721AA4
  /// ==================================================

  {
    name: "snd",
    versions: {
      // => Version: 0
      0: function () {
        this.__root = this.MapLegacy = [
          "data",
          Utils.getArrayReader("uint8"),
          "files",
          Utils.getArrayReader(Utils.getFileNameReader()),
        ];
      },
    },
  },
];
