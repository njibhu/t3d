let Utils = require("../../util/ParserUtils.js")

module.exports = [
  /// ==================================================
  /// Chunk: ICON, versions: 1, strucTab: 0x1773248
  /// ==================================================

  {
    name: "ICON",
    versions: {
      // => Version: 0
      0: function() {
        this.__root = this.ModelFileIcon = [
          "jpgData",
          Utils.getArrayReader("uint8")
        ];
      }
    }
  }
];
