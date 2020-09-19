let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: GAME, versions: 1, strucTab: 0x17731A4
  /// ==================================================

  {
    name: "GAME",
    versions: {
      // => Version: 0
      0: function () {
        this.__root = this.ModelFileGame = ["gameData", Utils.getArrayReader("uint8")];
      },
    },
  },

  /// ==================================================
  /// Chunk: GAME, versions: 7, strucTab: 0x1830508
  /// ==================================================

  {
    name: "GAME",
    versions: {
      // => Version: 6
      6: function () {
        this.ScenePathNodeV6 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "flags",
          "uint32",
          "smoothing",
          "float32",
          "singlesided",
          "uint8",
        ];

        this.ScenePathV6 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV6),
          "closed",
          "uint8",
        ];

        this.SceneEdgeV6 = ["indices", ["[]", "uint32", 2], "triangles", Utils.getArrayReader("uint32")];

        this.SceneGameMeshV6 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV6),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaces",
          Utils.getArrayReader("uint8"),
        ];

        this.SceneGameSurfaceV6 = ["tokens", Utils.getArrayReader(Utils.getQWordReader())];

        this.__root = this.SceneFileGameV6 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV6),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV6),
          "surfaces",
          Utils.getArrayReader(this.SceneGameSurfaceV6),
        ];
      },

      // => Version: 5
      5: function () {
        this.ScenePathNodeV5 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
          "singlesided",
          "uint8",
        ];

        this.ScenePathV5 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV5),
          "closed",
          "uint8",
        ];

        this.SceneEdgeV5 = ["indices", ["[]", "uint32", 2], "triangles", Utils.getArrayReader("uint32")];

        this.SceneGameMeshV5 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV5),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaceFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.__root = this.SceneFileGameV5 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV5),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV5),
        ];
      },

      // => Version: 4
      4: function () {
        this.ScenePathNodeV4 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
          "singlesided",
          "uint8",
        ];

        this.ScenePathV4 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV4),
          "closed",
          "uint8",
        ];

        this.SceneEdgeV4 = ["indices", ["[]", "uint32", 2], "triangles", Utils.getArrayReader("uint32")];

        this.SceneGameMeshV4 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV4),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaceFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.SceneGrabNodeV4 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
        ];

        this.__root = this.SceneFileGameV4 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV4),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV4),
          "grabPoints",
          Utils.getArrayReader(this.SceneGrabNodeV4),
        ];
      },

      // => Version: 3
      3: function () {
        this.ScenePathNodeV3 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
        ];

        this.ScenePathV3 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV3),
          "closed",
          "uint8",
        ];

        this.SceneEdgeV3 = ["indices", ["[]", "uint32", 2], "triangles", Utils.getArrayReader("uint32")];

        this.SceneGameMeshV3 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV3),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaceFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.SceneGrabNodeV3 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
        ];

        this.__root = this.SceneFileGameV3 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV3),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV3),
          "grabPoints",
          Utils.getArrayReader(this.SceneGrabNodeV3),
        ];
      },

      // => Version: 2
      2: function () {
        this.ScenePathNodeV2 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
        ];

        this.ScenePathV2 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV2),
          "closed",
          "uint8",
        ];

        this.SceneEdgeV2 = ["indices", ["[]", "uint32", 2], "triangles", Utils.getArrayReader("uint32")];

        this.SceneGameMeshV2 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV2),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
        ];

        this.SceneGrabNodeV2 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
        ];

        this.__root = this.SceneFileGameV2 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV2),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV2),
          "grabPoints",
          Utils.getArrayReader(this.SceneGrabNodeV2),
        ];
      },

      // => Version: 1
      1: function () {
        this.ScenePathNodeV1 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
        ];

        this.ScenePathV1 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV1),
          "closed",
          "uint8",
        ];

        this.SceneEdgeV1 = ["indices", ["[]", "uint32", 2], "triangles", Utils.getArrayReader("uint32")];

        this.SceneGameMeshV1 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV1),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.SceneFileGameV1 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV1),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV1),
        ];
      },

      // => Version: 0
      0: function () {
        this.ScenePathNodeV0 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
        ];

        this.ScenePathV0 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV0),
          "closed",
          "uint8",
        ];

        this.SceneEdgeV0 = ["indices", ["[]", "uint32", 2], "triangles", Utils.getArrayReader("uint32")];

        this.SceneGameMeshV0 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV0),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.SceneFileGameV0 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV0),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV0),
        ];
      },
    },
  },
];
