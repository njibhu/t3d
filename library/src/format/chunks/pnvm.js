const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: pnvm, versions: 3, strucTab: 0x172158C
  /// ==================================================

  {
    name: "pnvm",
    versions: {
      // => Version: 2
      2: function () {
        this.PackMapPhysicsNavMeshChunkV2 = [
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "mediatorMoppData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.PackMapPhysicsNavMeshV2 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "chunkDims",
          ["[]", "uint32", 2],
          "erosionRadius",
          "float32",
          "chunkArray",
          Utils.getArrayReader(this.PackMapPhysicsNavMeshChunkV2),
        ];
      },

      // => Version: 1, ReferencedFunction: 0xEBB290
      1: function () {
        this.PackMapPhysicsNavMeshChunkV1 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "mediatorMoppData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.PackMapPhysicsNavMeshV1 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "chunkDims",
          ["[]", "uint32", 2],
          "chunkArray",
          Utils.getArrayReader(this.PackMapPhysicsNavMeshChunkV1),
        ];
      },

      // => Version: 0
      0: function () {
        this.PackMapPhysicsNavMeshChunkV0 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "mediatorMoppData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.PackMapPhysicsNavMeshV0 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "chunkDims",
          ["[]", "uint32", 2],
          "chunkArray",
          Utils.getArrayReader(this.PackMapPhysicsNavMeshChunkV0),
        ];
      },
    },
  },
];
