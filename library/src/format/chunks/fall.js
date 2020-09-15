let Utils = require("../../util/ParserUtils.js")

module.exports = [
  /// ==================================================
  /// Chunk: fall, versions: 1, strucTab: 0x1884460
  /// ==================================================

  {
    name: "fall",
    versions: {
      // => Version: 0
      0: function() {
        this.PackAnimFallbackV0 = [
          "sourceAnim",
          Utils.getQWordReader(),
          "targetAnims",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.PackAnimFallbacksV0 = [
          "fallbacks",
          Utils.getArrayReader(this.PackAnimFallbackV0)
        ];
      }
    }
  }
];
