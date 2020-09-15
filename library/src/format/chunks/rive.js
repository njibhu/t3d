let Utils = require("../../util/ParserUtils.js")

module.exports = [
  /// ==================================================
  /// Chunk: rive, versions: 6, strucTab: 0x1722A90
  /// ==================================================

  {
    name: "rive",
    versions: {
      // => Version: 5, ReferencedFunction: 0xEB50C0
      5: function() {
        this.PackMapRiverProperty = [
          "type",
          "uint32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.MapRiverReach = [
          "properties",
          Utils.getArrayReader(this.PackMapRiverProperty)
        ];

        this.MapRiver = [
          "guid",
          Utils.getQWordReader(),
          "name",
          Utils.getString16Reader(),
          "properties",
          Utils.getArrayReader(this.PackMapRiverProperty),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "reaches",
          Utils.getArrayReader(this.MapRiverReach)
        ];

        this.__root = this.PackMapRivers = [
          "rivers",
          Utils.getArrayReader(this.MapRiver)
        ];
      },

      // => Version: 4
      4: function() {
        this.MapRiverTextureMap = [
          "scale",
          "float32",
          "speedX",
          "float32",
          "speedY",
          "float32",
          "tiling",
          "float32",
          "flags",
          "uint32",
          "uvIndex",
          "uint8"
        ];

        this.MapRiverMaterial = [
          "materialFile",
          Utils.getFileNameReader(),
          "textureFiles",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "textureMaps",
          Utils.getArrayReader(this.MapRiverTextureMap),
          "flags",
          "uint32"
        ];

        this.MapRiverReach = [
          "width",
          "float32",
          "curveLength",
          "float32",
          "curvePercent",
          "float32",
          "xTessellation",
          "uint32",
          "yTessellation",
          ["[]", "uint32", 2],
          "broadId",
          "uint32",
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materials",
          Utils.getArrayReader(this.MapRiverMaterial),
          "reserved",
          Utils.getString16Reader()
        ];

        this.MapRiver = [
          "guid",
          Utils.getQWordReader(),
          "name",
          Utils.getString16Reader(),
          "xTiling",
          "float32",
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "reaches",
          Utils.getArrayReader(this.MapRiverReach),
          "flags",
          "uint32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapRivers = [
          "flags",
          "uint32",
          "nextBroadId",
          "uint32",
          "rivers",
          Utils.getArrayReader(this.MapRiver),
          "broadPhase",
          this.PackBroadphaseType
        ];
      },

      // => Version: 3
      3: function() {
        this.MapRiverTextureMap = [
          "scale",
          "float32",
          "speedX",
          "float32",
          "speedY",
          "float32",
          "tiling",
          "float32",
          "uvIndex",
          "uint8"
        ];

        this.MapRiverMaterial = [
          "materialFile",
          Utils.getFileNameReader(),
          "textureFiles",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "textureMaps",
          Utils.getArrayReader(this.MapRiverTextureMap)
        ];

        this.MapRiverReach = [
          "width",
          "float32",
          "curveLength",
          "float32",
          "curvePercent",
          "float32",
          "xTessellation",
          "uint32",
          "yTessellation",
          ["[]", "uint32", 2],
          "broadId",
          "uint32",
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materials",
          Utils.getArrayReader(this.MapRiverMaterial)
        ];

        this.MapRiver = [
          "guid",
          Utils.getQWordReader(),
          "name",
          Utils.getString16Reader(),
          "xTiling",
          "float32",
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "reaches",
          Utils.getArrayReader(this.MapRiverReach),
          "flags",
          "uint32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapRivers = [
          "flags",
          "uint32",
          "nextBroadId",
          "uint32",
          "rivers",
          Utils.getArrayReader(this.MapRiver),
          "broadPhase",
          this.PackBroadphaseType
        ];
      },

      // => Version: 2
      2: function() {
        this.MapRiverTextureMap = [
          "scale",
          "float32",
          "speedX",
          "float32",
          "speedY",
          "float32",
          "tiling",
          "float32",
          "uvIndex",
          "uint8"
        ];

        this.MapRiverMaterial = [
          "materialFile",
          Utils.getFileNameReader(),
          "textureFiles",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "textureMaps",
          Utils.getArrayReader(this.MapRiverTextureMap)
        ];

        this.MapRiverReach = [
          "width",
          "float32",
          "curveLength",
          "float32",
          "curvePercent",
          "float32",
          "xTessellation",
          "uint32",
          "yTessellation",
          ["[]", "uint32", 2],
          "broadId",
          "uint32",
          "fvf",
          "uint32",
          "materials",
          Utils.getArrayReader(this.MapRiverMaterial)
        ];

        this.MapRiver = [
          "guid",
          Utils.getQWordReader(),
          "name",
          Utils.getString16Reader(),
          "xTiling",
          "float32",
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "reaches",
          Utils.getArrayReader(this.MapRiverReach)
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapRivers = [
          "flags",
          "uint32",
          "nextBroadId",
          "uint32",
          "rivers",
          Utils.getArrayReader(this.MapRiver),
          "broadPhase",
          this.PackBroadphaseType
        ];
      },

      // => Version: 1
      1: function() {
        this.MapRiverTextureMap = [
          "scale",
          "float32",
          "speedX",
          "float32",
          "speedY",
          "float32",
          "tiling",
          "float32",
          "uvIndex",
          "uint8"
        ];

        this.MapRiverMaterial = [
          "materialFile",
          Utils.getFileNameReader(),
          "textureFiles",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "textureMaps",
          Utils.getArrayReader(this.MapRiverTextureMap)
        ];

        this.MapRiverReach = [
          "width",
          "float32",
          "curveLength",
          "float32",
          "curvePercent",
          "float32",
          "xTessellation",
          "uint32",
          "yTessellation",
          ["[]", "uint32", 2],
          "broadId",
          "uint32",
          "materials",
          Utils.getArrayReader(this.MapRiverMaterial)
        ];

        this.MapRiver = [
          "guid",
          Utils.getQWordReader(),
          "name",
          Utils.getString16Reader(),
          "xTiling",
          "float32",
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "reaches",
          Utils.getArrayReader(this.MapRiverReach)
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapRivers = [
          "flags",
          "uint32",
          "nextBroadId",
          "uint32",
          "rivers",
          Utils.getArrayReader(this.MapRiver),
          "broadPhase",
          this.PackBroadphaseType
        ];
      },

      // => Version: 0
      0: function() {
        this.MapRiverTextureMap = [
          "scale",
          "float32",
          "speed",
          "float32",
          "tiling",
          "float32",
          "uvIndex",
          "uint8"
        ];

        this.MapRiverMaterial = [
          "materialFile",
          Utils.getFileNameReader(),
          "textureFiles",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "textureMaps",
          Utils.getArrayReader(this.MapRiverTextureMap)
        ];

        this.MapRiverReach = [
          "width",
          "float32",
          "curveLength",
          "float32",
          "curvePercent",
          "float32",
          "xTessellation",
          "uint32",
          "yTessellation",
          ["[]", "uint32", 2],
          "broadId",
          "uint32",
          "materials",
          Utils.getArrayReader(this.MapRiverMaterial)
        ];

        this.MapRiver = [
          "guid",
          Utils.getQWordReader(),
          "xTiling",
          "float32",
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "reaches",
          Utils.getArrayReader(this.MapRiverReach)
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapRivers = [
          "flags",
          "uint32",
          "nextBroadId",
          "uint32",
          "rivers",
          Utils.getArrayReader(this.MapRiver),
          "broadPhase",
          this.PackBroadphaseType
        ];
      }
    }
  }
];
