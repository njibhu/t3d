let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: exp, versions: 1, strucTab: 0x1720B58
  /// ==================================================

  {
    name: "exp",
    versions: {
      // => Version: 0
      0: function() {
        this.MapExpansionProperty = [
          "type",
          "uint32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.__root = this.MapExpansionProperties = [
          "properties",
          Utils.getArrayReader(this.MapExpansionProperty)
        ];
      }
    }
  }
];
