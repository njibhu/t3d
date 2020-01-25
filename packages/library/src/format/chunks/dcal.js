let Utils = T3D.ParserUtils;

module.exports = [
  /// ==================================================
  /// Chunk: dcal, versions: 10, strucTab: 0x1724720
  /// ==================================================

  {
    name: "dcal",
    versions: {
      // => Version: 9, ReferencedFunction: 0xEBA2D0
      9: function() {
        this.PackMapDecalVertexV8 = [
          "position",
          ["[]", "float32", 3],
          "normal",
          ["[]", "float32", 3],
          "tangent",
          ["[]", "float32", 3],
          "bitangent",
          ["[]", "float32", 3]
        ];

        this.PackMapDecalV9 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "textureScaleUV0",
          ["[]", "float32", 2],
          "textureOffsetUV0",
          ["[]", "float32", 2],
          "textureScaleUV1",
          ["[]", "float32", 2],
          "textureOffsetUV1",
          ["[]", "float32", 2],
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "flags",
          "uint32",
          "animTranslation",
          ["[]", "float32", 2],
          "animScaleRangeX",
          ["[]", "float32", 2],
          "animScaleRangeY",
          ["[]", "float32", 2],
          "animScaleSpeed",
          ["[]", "float32", 2],
          "animRotation",
          "float32",
          "surfaceBias",
          "float32",
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "vertices",
          Utils.getArrayReader(this.PackMapDecalVertexV8),
          "indices",
          Utils.getArrayReader("uint16"),
          "propIds",
          Utils.getArrayReader(Utils.getQWordReader()),
          "projection",
          "uint8",
          "surfaceId",
          Utils.getQWordReader(),
          "id",
          Utils.getQWordReader()
        ];

        this.__root = this.PackMapDecalsV9 = [
          "decals",
          Utils.getArrayReader(this.PackMapDecalV9)
        ];
      },

      // => Version: 8
      8: function() {
        this.PackMapDecalVertexV7 = ["position", ["[]", "float32", 3]];

        this.PackMapDecalV8 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "textureScaleUV0",
          ["[]", "float32", 2],
          "textureOffsetUV0",
          ["[]", "float32", 2],
          "textureScaleUV1",
          ["[]", "float32", 2],
          "textureOffsetUV1",
          ["[]", "float32", 2],
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "flags",
          "uint32",
          "animTranslation",
          ["[]", "float32", 2],
          "animScaleRangeX",
          ["[]", "float32", 2],
          "animScaleRangeY",
          ["[]", "float32", 2],
          "animScaleSpeed",
          ["[]", "float32", 2],
          "animRotation",
          "float32",
          "surfaceBias",
          "float32",
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "vertices",
          Utils.getArrayReader(this.PackMapDecalVertexV7),
          "indices",
          Utils.getArrayReader("uint16"),
          "propIds",
          Utils.getArrayReader(Utils.getQWordReader()),
          "projection",
          "uint8",
          "surfaceId",
          Utils.getQWordReader(),
          "id",
          Utils.getQWordReader()
        ];

        this.__root = this.PackMapDecalsV8 = [
          "decals",
          Utils.getArrayReader(this.PackMapDecalV8)
        ];
      },

      // => Version: 7, ReferencedFunction: 0xEBA270
      7: function() {
        this.PackMapDecalVertexV6 = ["position", ["[]", "float32", 3]];

        this.PackMapDecalV7 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "textureScaleUV0",
          ["[]", "float32", 2],
          "textureOffsetUV0",
          ["[]", "float32", 2],
          "textureScaleUV1",
          ["[]", "float32", 2],
          "textureOffsetUV1",
          ["[]", "float32", 2],
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "flags",
          "uint32",
          "animTranslation",
          ["[]", "float32", 2],
          "animScaleRangeX",
          ["[]", "float32", 2],
          "animScaleRangeY",
          ["[]", "float32", 2],
          "animScaleSpeed",
          ["[]", "float32", 2],
          "animRotation",
          "float32",
          "surfaceBias",
          "float32",
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "vertices",
          Utils.getArrayReader(this.PackMapDecalVertexV6),
          "indices",
          Utils.getArrayReader("uint16"),
          "propIds",
          Utils.getArrayReader(Utils.getQWordReader()),
          "projection",
          "uint8",
          "id",
          Utils.getQWordReader()
        ];

        this.__root = this.PackMapDecalsV7 = [
          "decals",
          Utils.getArrayReader(this.PackMapDecalV7)
        ];
      },

      // => Version: 6
      6: function() {
        this.PackMapDecalVertexV5 = ["position", ["[]", "float32", 3]];

        this.PackMapDecalV6 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "textureScaleUV0",
          ["[]", "float32", 2],
          "textureOffsetUV0",
          ["[]", "float32", 2],
          "textureScaleUV1",
          ["[]", "float32", 2],
          "textureOffsetUV1",
          ["[]", "float32", 2],
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "flags",
          "uint32",
          "animTranslation",
          ["[]", "float32", 2],
          "animScaleRangeX",
          ["[]", "float32", 2],
          "animScaleRangeY",
          ["[]", "float32", 2],
          "animScaleSpeed",
          ["[]", "float32", 2],
          "animRotation",
          "float32",
          "surfaceBias",
          "float32",
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "vertices",
          Utils.getArrayReader(this.PackMapDecalVertexV5),
          "indices",
          Utils.getArrayReader("uint16"),
          "propIds",
          Utils.getArrayReader(Utils.getQWordReader()),
          "projection",
          "uint8"
        ];

        this.__root = this.PackMapDecalsV6 = [
          "decals",
          Utils.getArrayReader(this.PackMapDecalV6)
        ];
      },

      // => Version: 5
      5: function() {
        this.PackMapDecalVertexV4 = ["position", ["[]", "float32", 3]];

        this.PackMapDecalV5 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "textureScaleUV0",
          ["[]", "float32", 2],
          "textureOffsetUV0",
          ["[]", "float32", 2],
          "textureScaleUV1",
          ["[]", "float32", 2],
          "textureOffsetUV1",
          ["[]", "float32", 2],
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "flags",
          "uint32",
          "animTranslation",
          ["[]", "float32", 2],
          "animScaleRangeX",
          ["[]", "float32", 2],
          "animScaleRangeY",
          ["[]", "float32", 2],
          "animScaleSpeed",
          ["[]", "float32", 2],
          "animRotation",
          "float32",
          "surfaceBias",
          "float32",
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "vertices",
          Utils.getArrayReader(this.PackMapDecalVertexV4),
          "indices",
          Utils.getArrayReader("uint16"),
          "propIds",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.PackMapDecalsV5 = [
          "decals",
          Utils.getArrayReader(this.PackMapDecalV5)
        ];
      },

      // => Version: 4
      4: function() {
        this.PackMapDecalV4 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "textureScaleUV0",
          ["[]", "float32", 2],
          "textureOffsetUV0",
          ["[]", "float32", 2],
          "textureScaleUV1",
          ["[]", "float32", 2],
          "textureOffsetUV1",
          ["[]", "float32", 2],
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "flags",
          "uint32",
          "animTranslation",
          ["[]", "float32", 2],
          "animScaleRangeX",
          ["[]", "float32", 2],
          "animScaleRangeY",
          ["[]", "float32", 2],
          "animScaleSpeed",
          ["[]", "float32", 2],
          "animRotation",
          "float32",
          "surfaceBias",
          "float32",
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.__root = this.PackMapDecalsV4 = [
          "decals",
          Utils.getArrayReader(this.PackMapDecalV4)
        ];
      },

      // => Version: 3, ReferencedFunction: 0xEBA1F0
      3: function() {
        this.PackMapDecalV3 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "textureScaleUV0",
          ["[]", "float32", 2],
          "textureOffsetUV0",
          ["[]", "float32", 2],
          "textureScaleUV1",
          ["[]", "float32", 2],
          "textureOffsetUV1",
          ["[]", "float32", 2],
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "flags",
          "uint32",
          "animTranslation",
          ["[]", "float32", 2],
          "animScaleRangeX",
          ["[]", "float32", 2],
          "animScaleRangeY",
          ["[]", "float32", 2],
          "animScaleSpeed",
          ["[]", "float32", 2],
          "animRotation",
          "float32",
          "surfaceBias",
          "float32"
        ];

        this.__root = this.PackMapDecalsV3 = [
          "decals",
          Utils.getArrayReader(this.PackMapDecalV3)
        ];
      },

      // => Version: 2
      2: function() {
        this.PackMapDecalV2 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "textureScale",
          ["[]", "float32", 2],
          "textureOffset",
          ["[]", "float32", 2],
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "flags",
          "uint32",
          "animTranslation",
          ["[]", "float32", 2],
          "animScaleRangeX",
          ["[]", "float32", 2],
          "animScaleRangeY",
          ["[]", "float32", 2],
          "animScaleSpeed",
          ["[]", "float32", 2],
          "animRotation",
          "float32"
        ];

        this.__root = this.PackMapDecalsV2 = [
          "decals",
          Utils.getArrayReader(this.PackMapDecalV2)
        ];
      },

      // => Version: 1
      1: function() {
        this.PackMapDecalV1 = [
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "textureScale",
          ["[]", "float32", 2],
          "textureOffset",
          ["[]", "float32", 2],
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "flags",
          "uint32"
        ];

        this.__root = this.PackMapDecalsV1 = [
          "decals",
          Utils.getArrayReader(this.PackMapDecalV1)
        ];
      }
    }
  }
];
