let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: bloc, versions: 1, strucTab: 0x1724304
  /// ==================================================

  {
    name: "bloc",
    versions: {
      // => Version: 0
      0: function() {
        this.PackMapBlockRecord = ["filename", Utils.getFileNameReader()];

        this.__root = this.PackMapBlock = [
          "blockDims",
          ["[]", "uint32", 2],
          "blockRecordArray",
          Utils.getArrayReader(this.PackMapBlockRecord),
        ];
      },
    },
  },
];
