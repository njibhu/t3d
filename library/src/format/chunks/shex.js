let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: shex, versions: 2, strucTab: 0x1722DD0
  /// ==================================================

  {
    name: "shex",
    versions: {
      // => Version: 1
      1: function() {
        this.__root = this.PackMapShadowExtV1 = [
          "filename",
          Utils.getFileNameReader(),
          "shadowDims",
          ["[]", "uint32", 2]
        ];
      }
    }
  }
];
