let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: nm15, versions: 4, strucTab: 0x1723E10
  /// ==================================================

  {
    name: "nm15",
    versions: {
      // => Version: 3, ReferencedFunction: 0x452AB0
      3: function() {
        this.PackMapNavMeshChunkV3 = [
          "chunkIndex",
          "uint32",
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapNavMeshMoverV3 = [
          "chunkIndex",
          "uint32",
          "mapPropId",
          Utils.getQWordReader(),
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "mediatorData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapNavMeshV3 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "chunkDims",
          ["[]", "uint32", 2],
          "chunkArray",
          Utils.getArrayReader(this.PackMapNavMeshChunkV3),
          "dynamicArray",
          Utils.getArrayReader(this.PackMapNavMeshMoverV3)
        ];
      },

      // => Version: 2
      2: function() {
        this.PackMapNavMeshChunkV2 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapNavMeshMoverV2 = [
          "mapPropId",
          Utils.getQWordReader(),
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "mediatorData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapNavMeshV2 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "chunkDims",
          ["[]", "uint32", 2],
          "chunkArray",
          Utils.getArrayReader(this.PackMapNavMeshChunkV2),
          "dynamicArray",
          Utils.getArrayReader(this.PackMapNavMeshMoverV2)
        ];
      },

      // => Version: 1, ReferencedFunction: 0xEB7230
      1: function() {
        this.PackMapNavMeshChunkV1 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapNavMeshV1 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "chunkDims",
          ["[]", "uint32", 2],
          "chunkArray",
          Utils.getArrayReader(this.PackMapNavMeshChunkV1)
        ];
      },

      // => Version: 0
      0: function() {
        this.PackMapNavMeshChunkV0 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapNavMeshV0 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "chunkDims",
          ["[]", "uint32", 2],
          "chunkArray",
          Utils.getArrayReader(this.PackMapNavMeshChunkV0)
        ];
      }
    }
  },

  /// ==================================================
  /// Chunk: nm15, versions: 4, strucTab: 0x1723F40
  /// ==================================================

  {
    name: "nm15",
    versions: {
      // => Version: 3
      3: function() {
        this.__root = this.PackMapNavMeshChunkV3 = [
          "chunkIndex",
          "uint32",
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8")
        ];
      },

      // => Version: 2
      2: function() {
        this.__root = this.PackMapNavMeshChunkV2 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8")
        ];
      },

      // => Version: 1, ReferencedFunction: 0xEB71D0
      1: function() {
        this.__root = this.PackMapNavMeshChunkV1 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8")
        ];
      },

      // => Version: 0
      0: function() {
        this.__root = this.PackMapNavMeshChunkV0 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8")
        ];
      }
    }
  }
];
