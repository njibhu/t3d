let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: vari, versions: 1, strucTab: 0x156581C
  /// ==================================================

  {
    name: "vari",
    versions: {
      // => Version: 0
      0: function() {
        this.TextPackVariant = ["textId", "uint32", "variantTextIds", Utils.getArrayReader("uint32")];

        this.__root = this.TextPackVariants = ["variants", Utils.getArrayReader(this.TextPackVariant)];
      },
    },
  },
];
