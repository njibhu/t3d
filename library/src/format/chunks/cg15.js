let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: cg15, versions: 1, strucTab: 0x17242C8
  /// ==================================================

  {
    name: "cg15",
    versions: {
      // => Version: 0
      0: function () {
        this.PackMapCoarseNavGraphNodeV0 = [
          "materialId",
          "uint32",
          "bottomLeftBound",
          ["[]", "float32", 3],
          "topRightBound",
          ["[]", "float32", 3],
          "centroid",
          ["[]", "float32", 3],
          "faces",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapCoarseNavGraphConnectionEdgeV0 = [
          "edgeStart",
          ["[]", "float32", 3],
          "edgeEnd",
          ["[]", "float32", 3],
        ];

        this.PackMapCoarseNavGraphConnectionV0 = [
          "targetSectionUid",
          "uint32",
          "targetNodeIndex",
          "uint32",
          "edges",
          Utils.getArrayReader(this.PackMapCoarseNavGraphConnectionEdgeV0),
        ];

        this.PackMapCoarseNavGraphNodeConnectionsV0 = [
          "nodeIndex",
          "uint32",
          "connections",
          Utils.getArrayReader(this.PackMapCoarseNavGraphConnectionV0),
        ];

        this.PackMapCoarseNavGraphSectionV0 = [
          "sectionUid",
          "uint32",
          "nodes",
          Utils.getArrayReader(this.PackMapCoarseNavGraphNodeV0),
          "nodeConnections",
          Utils.getArrayReader(this.PackMapCoarseNavGraphNodeConnectionsV0),
        ];

        this.__root = this.PackMapCoarseNavGraphV0 = [
          "sections",
          Utils.getArrayReader(this.PackMapCoarseNavGraphSectionV0),
        ];
      },
    },
  },
];
