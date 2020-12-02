const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: octm, versions: 1, strucTab: 0x17213FC
  /// ==================================================

  {
    name: "octm",
    versions: {
      // => Version: 0
      0: function () {
        this.__root = this.MapOcclusionTome = [
          "enableTomeQueries",
          "uint32",
          "tome",
          Utils.getArrayReader("uint8"),
          "propIDMap",
          Utils.getArrayReader("uint8"),
          "reserved",
          Utils.getArrayReader("uint8"),
        ];
      },
    },
  },
];
