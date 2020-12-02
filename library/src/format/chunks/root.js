const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: ROOT, versions: 2, strucTab: 0x17731F0
  /// ==================================================

  {
    name: "ROOT",
    versions: {
      // => Version: 1, ReferencedFunction: 0xF290C0
      1: function () {
        this.ModelRootMotionV1 = [
          "sequence",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32"),
          "posValues",
          Utils.getArrayReader(["[]", "float32", 3]),
          "quatValues",
          Utils.getArrayReader(["[]", "float32", 4]),
        ];

        this.__root = this.ModelFileRootMotionV1 = ["rootMotions", Utils.getArrayReader(this.ModelRootMotionV1)];
      },

      // => Version: 0
      0: function () {
        this.ModelRootMotionV0 = [
          "sequence",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32"),
          "values",
          Utils.getArrayReader(["[]", "float32", 3]),
        ];

        this.__root = this.ModelFileRootMotionV0 = ["rootMotions", Utils.getArrayReader(this.ModelRootMotionV0)];
      },
    },
  },
];
