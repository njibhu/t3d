const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: havk, versions: 15, strucTab: 0x1723760
  /// ==================================================

  {
    name: "havk",
    versions: {
      // => Version: 14, ReferencedFunction: 0xEBA840
      14: function () {
        this.PackMoppType = ["moppData", Utils.getArrayReader("uint8")];

        this.PackMapCollideCollisionV14 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surfaces",
          Utils.getArrayReader("uint16"),
          "moppCodeData",
          this.PackMoppType,
        ];

        this.PackMapCollideBlockerV14 = ["vertices", Utils.getArrayReader(["[]", "float32", 3])];

        this.PackMapCollideNavMeshV14 = [
          "navMesh",
          Utils.getArrayReader("uint8"),
          "graph",
          Utils.getArrayReader("uint8"),
          "mediator",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapCollideAnimationV14 = [
          "sequence",
          Utils.getQWordReader(),
          "collisionIndices",
          Utils.getArrayReader("uint32"),
          "blockerIndices",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapCollideGeometryV14 = [
          "quantizedExtents",
          "uint8",
          "animations",
          Utils.getArrayReader("uint32"),
          "navMeshIndex",
          "uint16",
        ];

        this.PackMapCollideModelObsV14 = ["translate", ["[]", "float32", 3], "geometryIndex", "uint32"];

        this.PackMapCollideModelPropV14 = [
          "token",
          Utils.getQWordReader(),
          "sequence",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideModelZoneV14 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.__root = this.PackMapCollideV14 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "collisions",
          Utils.getArrayReader(this.PackMapCollideCollisionV14),
          "blockers",
          Utils.getArrayReader(this.PackMapCollideBlockerV14),
          "navMeshes",
          Utils.getArrayReader(this.PackMapCollideNavMeshV14),
          "animations",
          Utils.getArrayReader(this.PackMapCollideAnimationV14),
          "geometries",
          Utils.getArrayReader(this.PackMapCollideGeometryV14),
          "obsModels",
          Utils.getArrayReader(this.PackMapCollideModelObsV14),
          "propModels",
          Utils.getArrayReader(this.PackMapCollideModelPropV14),
          "zoneModels",
          Utils.getArrayReader(this.PackMapCollideModelZoneV14),
        ];
      },

      // => Version: 13, ReferencedFunction: 0xEBA4F0
      13: function () {
        this.PackMapCollideCollisionV13 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surfaces",
          Utils.getArrayReader("uint16"),
          "moppCodeData",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapCollideBlockerV13 = ["vertices", Utils.getArrayReader(["[]", "float32", 3])];

        this.PackMapCollideAnimationV13 = [
          "sequence",
          Utils.getQWordReader(),
          "collisionIndices",
          Utils.getArrayReader("uint32"),
          "blockerIndices",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapCollideGeometryV13 = ["quantizedExtents", "uint8", "animations", Utils.getArrayReader("uint32")];

        this.PackMapCollideModelObsV13 = ["translate", ["[]", "float32", 3], "geometryIndex", "uint32"];

        this.PackMapCollideModelPropV13 = [
          "token",
          Utils.getQWordReader(),
          "sequence",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideModelZoneV13 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.__root = this.PackMapCollideV13 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "collisions",
          Utils.getArrayReader(this.PackMapCollideCollisionV13),
          "blockers",
          Utils.getArrayReader(this.PackMapCollideBlockerV13),
          "animations",
          Utils.getArrayReader(this.PackMapCollideAnimationV13),
          "geometries",
          Utils.getArrayReader(this.PackMapCollideGeometryV13),
          "obsModels",
          Utils.getArrayReader(this.PackMapCollideModelObsV13),
          "propModels",
          Utils.getArrayReader(this.PackMapCollideModelPropV13),
          "zoneModels",
          Utils.getArrayReader(this.PackMapCollideModelZoneV13),
        ];
      },

      // => Version: 12
      12: function () {
        this.PackMapCollideMeshV12 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surfaces",
          Utils.getArrayReader("uint16"),
          "moppCodeScale",
          "float32",
          "moppCodeData",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapCollideMeshRefV12 = ["sequence", Utils.getQWordReader(), "meshIndex", "uint32"];

        this.PackMapCollideGeometryV12 = [
          "quantizedExtents",
          "uint8",
          "meshRefs",
          Utils.getArrayReader(this.PackMapCollideMeshRefV12),
        ];

        this.PackMapCollideModelObsV12 = ["translate", ["[]", "float32", 3], "geometryIndex", "uint32"];

        this.PackMapCollideModelPropV12 = [
          "token",
          Utils.getQWordReader(),
          "sequence",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideModelZoneV12 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideAiChunkV12 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.PackMapCollideV12 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "meshes",
          Utils.getArrayReader(this.PackMapCollideMeshV12),
          "geometries",
          Utils.getArrayReader(this.PackMapCollideGeometryV12),
          "obsModels",
          Utils.getArrayReader(this.PackMapCollideModelObsV12),
          "propModels",
          Utils.getArrayReader(this.PackMapCollideModelPropV12),
          "zoneModels",
          Utils.getArrayReader(this.PackMapCollideModelZoneV12),
          "aiChunkDims",
          ["[]", "uint32", 2],
          "aiChunks",
          Utils.getArrayReader(this.PackMapCollideAiChunkV12),
        ];
      },

      // => Version: 11
      11: function () {
        this.PackMapCollideMeshV11 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeScale",
          "float32",
          "moppCodeData",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapCollideMeshRefV11 = ["sequence", Utils.getQWordReader(), "meshIndex", "uint32"];

        this.PackMapCollideGeometryV11 = [
          "quantizedExtents",
          "uint8",
          "meshRefs",
          Utils.getArrayReader(this.PackMapCollideMeshRefV11),
        ];

        this.PackMapCollideModelObsV11 = ["translate", ["[]", "float32", 3], "geometryIndex", "uint32"];

        this.PackMapCollideModelPropV11 = [
          "token",
          Utils.getQWordReader(),
          "sequence",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideModelZoneV11 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideAiChunkV11 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.PackMapCollideV11 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "meshes",
          Utils.getArrayReader(this.PackMapCollideMeshV11),
          "geometries",
          Utils.getArrayReader(this.PackMapCollideGeometryV11),
          "obsModels",
          Utils.getArrayReader(this.PackMapCollideModelObsV11),
          "propModels",
          Utils.getArrayReader(this.PackMapCollideModelPropV11),
          "zoneModels",
          Utils.getArrayReader(this.PackMapCollideModelZoneV11),
          "aiChunkDims",
          ["[]", "uint32", 2],
          "aiChunks",
          Utils.getArrayReader(this.PackMapCollideAiChunkV11),
        ];
      },

      // => Version: 10
      10: function () {
        this.PackMapCollideMeshV10 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeScale",
          "float32",
          "moppCodeData",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapCollideMeshRefV10 = ["sequence", Utils.getQWordReader(), "meshIndex", "uint32"];

        this.PackMapCollideGeometryV10 = ["meshRefs", Utils.getArrayReader(this.PackMapCollideMeshRefV10)];

        this.PackMapCollideModelObsV10 = ["geometryIndex", "uint32"];

        this.PackMapCollideModelPropV10 = [
          "token",
          Utils.getQWordReader(),
          "sequence",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideModelZoneV10 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideAiChunkV10 = [
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.PackMapCollideV10 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "meshes",
          Utils.getArrayReader(this.PackMapCollideMeshV10),
          "geometries",
          Utils.getArrayReader(this.PackMapCollideGeometryV10),
          "obsModels",
          Utils.getArrayReader(this.PackMapCollideModelObsV10),
          "propModels",
          Utils.getArrayReader(this.PackMapCollideModelPropV10),
          "zoneModels",
          Utils.getArrayReader(this.PackMapCollideModelZoneV10),
          "aiBoundaryMin",
          ["[]", "float32", 3],
          "aiBoundaryMax",
          ["[]", "float32", 3],
          "aiChunkDims",
          ["[]", "uint32", 2],
          "aiChunks",
          Utils.getArrayReader(this.PackMapCollideAiChunkV10),
        ];
      },

      // => Version: 9
      9: function () {
        this.PackMapCollideMeshV9 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeScale",
          "float32",
          "moppCodeData",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapCollideMeshRefV9 = ["sequence", Utils.getQWordReader(), "meshIndex", "uint32"];

        this.PackMapCollideGeometryV9 = ["meshRefs", Utils.getArrayReader(this.PackMapCollideMeshRefV9)];

        this.PackMapCollideModelObsV9 = ["geometryIndex", "uint32"];

        this.PackMapCollideModelPropV9 = [
          "token",
          Utils.getQWordReader(),
          "sequence",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideModelZoneV9 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideAiChunkV9 = [
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.PackMapCollideV9 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "meshes",
          Utils.getArrayReader(this.PackMapCollideMeshV9),
          "geometries",
          Utils.getArrayReader(this.PackMapCollideGeometryV9),
          "obsModels",
          Utils.getArrayReader(this.PackMapCollideModelObsV9),
          "propModels",
          Utils.getArrayReader(this.PackMapCollideModelPropV9),
          "zoneModels",
          Utils.getArrayReader(this.PackMapCollideModelZoneV9),
          "aiBoundaryMin",
          ["[]", "float32", 3],
          "aiBoundaryMax",
          ["[]", "float32", 3],
          "aiChunkDims",
          ["[]", "uint32", 2],
          "aiChunks",
          Utils.getArrayReader(this.PackMapCollideAiChunkV9),
        ];
      },

      // => Version: 8, ReferencedFunction: 0xEBA8B0
      8: function () {
        this.PackMapCollideMeshV8 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeScale",
          "float32",
          "moppCodeData",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapCollideMeshRefV8 = ["sequence", Utils.getQWordReader(), "meshIndex", "uint32"];

        this.PackMapCollideGeometryV8 = ["meshRefs", Utils.getArrayReader(this.PackMapCollideMeshRefV8)];

        this.PackMapCollideModelPropV8 = [
          "token",
          Utils.getQWordReader(),
          "sequence",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideModelZoneV8 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideAiChunkV8 = [
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.PackMapCollideV8 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "meshes",
          Utils.getArrayReader(this.PackMapCollideMeshV8),
          "geometries",
          Utils.getArrayReader(this.PackMapCollideGeometryV8),
          "propModels",
          Utils.getArrayReader(this.PackMapCollideModelPropV8),
          "zoneModels",
          Utils.getArrayReader(this.PackMapCollideModelZoneV8),
          "aiBoundaryMin",
          ["[]", "float32", 3],
          "aiBoundaryMax",
          ["[]", "float32", 3],
          "aiChunkDims",
          ["[]", "uint32", 2],
          "aiChunks",
          Utils.getArrayReader(this.PackMapCollideAiChunkV8),
        ];
      },

      // => Version: 7
      7: function () {
        this.PackMapCollideMoppCodeV7 = ["cookedData", Utils.getArrayReader("uint8")];

        this.PackMapCollideMeshSizeV7 = ["scale", "float32", "moppCodeIndex", "uint32"];

        this.PackMapCollideMeshV7 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "sizes",
          Utils.getArrayReader(this.PackMapCollideMeshSizeV7),
        ];

        this.PackMapCollideMeshRefV7 = ["sequence", Utils.getQWordReader(), "meshIndex", "uint32"];

        this.PackMapCollideGeometryV7 = ["meshRefs", Utils.getArrayReader(this.PackMapCollideMeshRefV7)];

        this.PackMapCollideModelPropV7 = [
          "token",
          Utils.getQWordReader(),
          "sequence",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideModelZoneV7 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideAiChunkV7 = [
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.PackMapCollideV7 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "moppCodes",
          Utils.getArrayReader(this.PackMapCollideMoppCodeV7),
          "meshes",
          Utils.getArrayReader(this.PackMapCollideMeshV7),
          "geometries",
          Utils.getArrayReader(this.PackMapCollideGeometryV7),
          "propModels",
          Utils.getArrayReader(this.PackMapCollideModelPropV7),
          "zoneModels",
          Utils.getArrayReader(this.PackMapCollideModelZoneV7),
          "aiBoundaryMin",
          ["[]", "float32", 3],
          "aiBoundaryMax",
          ["[]", "float32", 3],
          "aiChunkDims",
          ["[]", "uint32", 2],
          "aiChunks",
          Utils.getArrayReader(this.PackMapCollideAiChunkV7),
        ];
      },

      // => Version: 6
      6: function () {
        this.PackMapCollideMoppCodeV6 = ["cookedData", Utils.getArrayReader("uint8")];

        this.PackMapCollideMeshSizeV6 = ["scale", "float32", "moppCodeIndex", "uint32"];

        this.PackMapCollideMeshV6 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "sizes",
          Utils.getArrayReader(this.PackMapCollideMeshSizeV6),
        ];

        this.PackMapCollideMeshRefV6 = ["sequence", Utils.getQWordReader(), "meshIndex", "uint32"];

        this.PackMapCollideGeometryV6 = ["meshRefs", Utils.getArrayReader(this.PackMapCollideMeshRefV6)];

        this.PackMapCollideModelPropV6 = [
          "token",
          Utils.getQWordReader(),
          "sequence",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.PackMapCollideModelZoneV6 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32",
        ];

        this.__root = this.PackMapCollideV6 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "moppCodes",
          Utils.getArrayReader(this.PackMapCollideMoppCodeV6),
          "meshes",
          Utils.getArrayReader(this.PackMapCollideMeshV6),
          "geometries",
          Utils.getArrayReader(this.PackMapCollideGeometryV6),
          "propModels",
          Utils.getArrayReader(this.PackMapCollideModelPropV6),
          "zoneModels",
          Utils.getArrayReader(this.PackMapCollideModelZoneV6),
        ];
      },
    },
  },
];
