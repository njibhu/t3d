let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: area, versions: 5, strucTab: 0x1722F9C
  /// ==================================================

  {
    name: "area",
    versions: {
      // => Version: 4, ReferencedFunction: 0xEBB040
      4: function() {
        this.PackMapAreaPolygonV4 = ["points", Utils.getArrayReader(["[]", "float32", 3]), "height", "float32"];

        this.PackMapAreaPortalV4 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
        ];

        this.PackMapAreaVolumeV4 = [
          "portals",
          Utils.getArrayReader(this.PackMapAreaPortalV4),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "pointInterior",
          ["[]", "float32", 3],
          "pointExterior",
          ["[]", "float32", 3],
        ];

        this.PackMapAreaV4 = [
          "token",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "floor",
          "uint8",
          "flags",
          "uint32",
          "polygon",
          this.PackMapAreaPolygonV4,
          "volume",
          this.PackMapAreaVolumeV4,
        ];

        this.PackMapAreaToolV4 = ["annotation", Utils.getString16Reader(), "renderOffset", "float32"];

        this.__root = this.PackMapAreasV4 = [
          "areas",
          Utils.getArrayReader(this.PackMapAreaV4),
          "areaTools",
          Utils.getArrayReader(this.PackMapAreaToolV4),
        ];
      },

      // => Version: 3
      3: function() {
        this.PackMapAreaPolygonV3 = ["points", Utils.getArrayReader(["[]", "float32", 3]), "height", "float32"];

        this.PackMapAreaPortalV3 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
        ];

        this.PackMapAreaVolumeV3 = [
          "portals",
          Utils.getArrayReader(this.PackMapAreaPortalV3),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "pointInterior",
          ["[]", "float32", 3],
          "pointExterior",
          ["[]", "float32", 3],
        ];

        this.PackMapAreaV3 = [
          "token",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "floor",
          "uint8",
          "flags",
          "uint32",
          "polygon",
          this.PackMapAreaPolygonV3,
          "volume",
          this.PackMapAreaVolumeV3,
        ];

        this.PackMapAreaToolV3 = ["annotation", Utils.getString16Reader(), "renderOffset", "float32"];

        this.__root = this.PackMapAreasV3 = [
          "areas",
          Utils.getArrayReader(this.PackMapAreaV3),
          "areaTools",
          Utils.getArrayReader(this.PackMapAreaToolV3),
        ];
      },

      // => Version: 2
      2: function() {
        this.PackMapAreaPolygonV2 = ["points", Utils.getArrayReader(["[]", "float32", 3]), "height", "float32"];

        this.PackMapAreaPortalV2 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
        ];

        this.PackMapAreaVolumeV2 = [
          "portals",
          Utils.getArrayReader(this.PackMapAreaPortalV2),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "pointInterior",
          ["[]", "float32", 3],
          "pointExterior",
          ["[]", "float32", 3],
        ];

        this.PackMapAreaV2 = [
          "token",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "floor",
          "uint8",
          "flags",
          "uint32",
          "polygon",
          this.PackMapAreaPolygonV2,
          "volume",
          this.PackMapAreaVolumeV2,
        ];

        this.PackMapAreaToolV2 = ["annotation", Utils.getString16Reader()];

        this.__root = this.PackMapAreasV2 = [
          "areas",
          Utils.getArrayReader(this.PackMapAreaV2),
          "areaTools",
          Utils.getArrayReader(this.PackMapAreaToolV2),
        ];
      },

      // => Version: 1, ReferencedFunction: 0xE2EE00
      1: function() {
        this.PackMapAreaPolygonV1 = ["points", Utils.getArrayReader(["[]", "float32", 3]), "height", "float32"];

        this.PackMapAreaPortalV1 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
        ];

        this.PackMapAreaVolumeV1 = [
          "portals",
          Utils.getArrayReader(this.PackMapAreaPortalV1),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "pointInterior",
          ["[]", "float32", 3],
          "pointExterior",
          ["[]", "float32", 3],
        ];

        this.PackMapAreaV1 = [
          "token",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "floor",
          "uint8",
          "polygon",
          this.PackMapAreaPolygonV1,
          "volume",
          this.PackMapAreaVolumeV1,
        ];

        this.__root = this.PackMapAreasV1 = ["areas", Utils.getArrayReader(this.PackMapAreaV1)];
      },

      // => Version: 0
      0: function() {
        this.PackMapAreaV0 = [
          "min",
          ["[]", "float32", 3],
          "max",
          ["[]", "float32", 3],
          "internal",
          ["[]", "float32", 3],
          "external",
          ["[]", "float32", 3],
          "token",
          "uint32",
          "flags",
          "uint32",
        ];

        this.PackMapPortalV0 = ["portalVerts", Utils.getArrayReader(["[]", "float32", 3])];

        this.__root = this.PackMapAreasV0 = [
          "areas",
          Utils.getArrayReader(this.PackMapAreaV0),
          "portals",
          Utils.getArrayReader(this.PackMapPortalV0),
        ];
      },
    },
  },
];
