let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: main, versions: 1, strucTab: 0x187F4D0
  /// ==================================================

  {
    name: "main",
    versions: {
      // => Version: 0
      0: function() {
        this.CollideNavMeshChunkRef = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "chunkFilename",
          Utils.getFileNameReader(),
        ];

        this.__root = this.CollideNavMesh = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "chunkDims",
          ["[]", "uint32", 2],
          "chunkRefArray",
          Utils.getArrayReader(this.CollideNavMeshChunkRef),
        ];
      },
    },
  },

  /// ==================================================
  /// Chunk: main, versions: 1, strucTab: 0x187F4E8
  /// ==================================================

  {
    name: "main",
    versions: {
      // => Version: 0
      0: function() {
        this.__root = this.CollideNavMeshChunk = [
          "navMeshData",
          Utils.getArrayReader("uint8"),
          "coarseGraphData",
          Utils.getArrayReader("uint8"),
          "queryMediatorMoppData",
          Utils.getArrayReader("uint8"),
        ];
      },
    },
  },

  /// ==================================================
  /// Chunk: main, versions: 2, strucTab: 0x187F500
  /// ==================================================

  {
    name: "main",
    versions: {
      // => Version: 1
      1: function() {
        this.CollideModelManifestFile = [
          "modelFileStr",
          Utils.getString16Reader(),
          "modelFile",
          Utils.getFileNameReader(),
          "collisionFile",
          Utils.getFileNameReader(),
          "scales",
          Utils.getArrayReader("float32"),
        ];

        this.__root = this.CollideModelManifest = ["files", Utils.getArrayReader(this.CollideModelManifestFile)];
      },

      // => Version: 0
      0: function() {
        this.CollideModelManifestFile = [
          "modelFile",
          Utils.getFileNameReader(),
          "collisionFile",
          Utils.getFileNameReader(),
          "scales",
          Utils.getArrayReader("float32"),
        ];

        this.__root = this.CollideModelManifest = ["files", Utils.getArrayReader(this.CollideModelManifestFile)];
      },
    },
  },
];
