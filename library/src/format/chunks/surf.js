let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: surf, versions: 3, strucTab: 0x1722F58
  /// ==================================================

  {
    name: "surf",
    versions: {
      // => Version: 2
      2: function () {
        this.MapSurfaceAttribute = ["Id", Utils.getQWordReader(), "Sound", Utils.getQWordReader(), "flags", "uint32"];

        this.MapSurfaceAttributeTool = [
          "name",
          Utils.getString16Reader(),
          "category",
          Utils.getString16Reader(),
          "color",
          ["[]", "uint8", 4],
        ];

        this.MapSurfaceOverride = ["surfaceId", Utils.getQWordReader(), "bitArray", Utils.getArrayReader("uint32")];

        this.MapSurfaceTerrainOverride = [
          "chunkCoord",
          ["[]", "uint32", 2],
          "overrideArray",
          Utils.getArrayReader(this.MapSurfaceOverride),
        ];

        this.MapSurfacePropOverride = [
          "propId",
          Utils.getQWordReader(),
          "overrideArray",
          Utils.getArrayReader(this.MapSurfaceOverride),
        ];

        this.__root = this.MapSurfaces = [
          "attributeData",
          Utils.getArrayReader(this.MapSurfaceAttribute),
          "toolData",
          Utils.getArrayReader(this.MapSurfaceAttributeTool),
          "terrainArray",
          Utils.getArrayReader(this.MapSurfaceTerrainOverride),
          "propArray",
          Utils.getArrayReader(this.MapSurfacePropOverride),
        ];
      },

      // => Version: 1
      1: function () {
        this.MapSurfaceAttribute = ["Id", Utils.getQWordReader(), "Sound", Utils.getQWordReader(), "flags", "uint32"];

        this.MapSurfaceAttributeTool = [
          "name",
          Utils.getString16Reader(),
          "category",
          Utils.getString16Reader(),
          "color",
          ["[]", "uint8", 4],
        ];

        this.__root = this.MapSurfaces = [
          "attributeData",
          Utils.getArrayReader(this.MapSurfaceAttribute),
          "toolData",
          Utils.getArrayReader(this.MapSurfaceAttributeTool),
        ];
      },

      // => Version: 0
      0: function () {
        this.MapSurfaceMeta = ["index", "uint16", "descriptor", "uint8", "data", "uint8"];

        this.MapSurfaceChunk = [
          "coord",
          ["[]", "uint32", 3],
          "metadata",
          Utils.getArrayReader(this.MapSurfaceMeta),
          "typeData",
          Utils.getArrayReader("uint8"),
        ];

        this.__root = this.MapSurfaces = [
          "chunkData",
          Utils.getArrayReader(this.MapSurfaceChunk),
          "typeData",
          Utils.getArrayReader(Utils.getQWordReader()),
        ];
      },
    },
  },
];
