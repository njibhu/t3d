let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: UPDA, versions: 1, strucTab: 0x1528BB8
  /// ==================================================

  {
    name: "UPDA",
    versions: {
      // => Version: 0
      0: function() {
        this.AmatAppleUPDBentry = [
          "originalSize",
          "uint32",
          "compressedData",
          Utils.getArrayReader("uint8"),
          "originalName",
          Utils.getStringReader()
        ];

        this.__root = this.AmatAppleUPDBinfo = [
          "uPDBarray",
          Utils.getArrayReader(this.AmatAppleUPDBentry)
        ];
      }
    }
  }
];
