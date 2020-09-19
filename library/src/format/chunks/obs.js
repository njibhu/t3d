let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: obs, versions: 3, strucTab: 0x172127C
  /// ==================================================

  {
    name: "obs",
    versions: {
      // => Version: 2
      2: function() {
        this.PackMapEditCollision = [
          "token",
          "uint32",
          "flags",
          "uint32",
          "bottmVertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "topVertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "name",
          Utils.getString16Reader(),
          "surface",
          Utils.getQWordReader(),
        ];

        this.__root = this.MapObstacles = ["obstacles", Utils.getArrayReader(this.PackMapEditCollision)];
      },

      // => Version: 1
      1: function() {
        this.PackMapEditCollision = [
          "token",
          "uint32",
          "flags",
          "uint32",
          "bottmVertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "topVertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "name",
          Utils.getString16Reader(),
        ];

        this.__root = this.MapObstacles = ["obstacles", Utils.getArrayReader(this.PackMapEditCollision)];
      },

      // => Version: 0
      0: function() {
        this.PackMapEditCollision = [
          "token",
          "uint32",
          "flags",
          "uint32",
          "bottmVertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "topVertices",
          Utils.getArrayReader(["[]", "float32", 3]),
        ];

        this.__root = this.MapObstacles = ["obstacles", Utils.getArrayReader(this.PackMapEditCollision)];
      },
    },
  },
];
