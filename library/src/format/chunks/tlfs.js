let Utils = require("../../util/ParserUtils.js")

module.exports = [
  /// ==================================================
  /// Chunk: tlfs, versions: 1, strucTab: 0x1721550
  /// ==================================================

  {
    name: "tlfs",
    versions: {
      // => Version: 0
      0: function() {
        this.PackMapToolFsFileV0 = [
          "filename",
          Utils.getFileNameReader(),
          "time",
          Utils.getQWordReader(),
          "dataPtr",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapToolFsV0 = [
          "filePtr",
          Utils.getArrayReader(this.PackMapToolFsFileV0)
        ];
      }
    }
  }
];
