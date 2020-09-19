let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: txtm, versions: 1, strucTab: 0x15657D4
  /// ==================================================

  {
    name: "txtm",
    versions: {
      // => Version: 0
      0: function () {
        this.TextPackLanguage = ["filenames", Utils.getArrayReader(Utils.getFileNameReader())];

        this.__root = this.TextPackManifest = [
          "stringsPerFile",
          "uint32",
          "languages",
          Utils.getArrayReader(this.TextPackLanguage),
        ];
      },
    },
  },
];
