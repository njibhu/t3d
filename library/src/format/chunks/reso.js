let Utils = require("../../util/ParserUtils.js")

module.exports = [
  /// ==================================================
  /// Chunk: reso, versions: 2, strucTab: 0x17228C8
  /// ==================================================

  {
    name: "reso",
    versions: {
      // => Version: 1
      1: function() {
        this.PackMapResourceMapNodeItemV1 = [
          "filename",
          Utils.getFileNameReader(),
          "type",
          "uint32",
          "permutation",
          Utils.getQWordReader()
        ];

        this.PackMapResourceMapNodeV1 = [
          "position",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "itemArray",
          Utils.getArrayReader(this.PackMapResourceMapNodeItemV1)
        ];

        this.__root = this.PackMapResourceMapV1 = [
          "nodeArray",
          Utils.getArrayReader(this.PackMapResourceMapNodeV1)
        ];
      },

      // => Version: 0
      0: function() {
        this.PackMapResourceMapNodeItemV0 = [
          "filename",
          Utils.getFileNameReader(),
          "type",
          "uint32"
        ];

        this.PackMapResourceMapNodeV0 = [
          "position",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "itemArray",
          Utils.getArrayReader(this.PackMapResourceMapNodeItemV0)
        ];

        this.__root = this.PackMapResourceMapV0 = [
          "nodeArray",
          Utils.getArrayReader(this.PackMapResourceMapNodeV0)
        ];
      }
    }
  }
];
