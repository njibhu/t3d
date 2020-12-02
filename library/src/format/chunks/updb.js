const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: UPDB, versions: 1, strucTab: 0x1528BC4
  /// ==================================================

  {
    name: "UPDB",
    versions: {
      // => Version: 0
      0: function () {
        this.AmatXbxUPDBentry = [
          "originalSize",
          "uint32",
          "compressedData",
          Utils.getArrayReader("uint8"),
          "originalName",
          Utils.getStringReader(),
        ];

        this.__root = this.AmatXbxUPDBinfo = ["uPDBarray", Utils.getArrayReader(this.AmatXbxUPDBentry)];
      },
    },
  },
];
