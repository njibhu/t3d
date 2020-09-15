let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: trn, versions: 15, strucTab: 0x17232A8
  /// ==================================================

  {
    name: "trn",
    versions: {
      // => Version: 14
      14: function() {
        this.PackMapTerrainChunkV14 = [
          "chunkFlags",
          "uint32",
          "surfaceIndexArray",
          Utils.getArrayReader("uint16"),
          "surfaceTokenArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapTerrainConstV14 = [
          "tokenName",
          "uint32",
          "value",
          ["[]", "float32", 4]
        ];

        this.PackMapTerrainTexV14 = [
          "tokenName",
          "uint32",
          "flags",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "flags",
          ["[]", "uint32", 2],
          "layer",
          "uint32"
        ];

        this.PackMapTerrainMaterialV14 = [
          "materialFile",
          Utils.getFileNameReader(),
          "fvf",
          "uint32",
          "constIndexArray",
          Utils.getArrayReader("uint32"),
          "texIndexArray",
          Utils.getArrayReader("uint32")
        ];

        this.PackMapTerrainChunkUVDataV14 = [
          "translation",
          ["[]", "float32", 2],
          "xScaleRange",
          ["[]", "float32", 2],
          "yScaleRange",
          ["[]", "float32", 2],
          "scaleSpeed",
          ["[]", "float32", 2],
          "rotation",
          "float32"
        ];

        this.PackMapTerrrainChunkMaterialV14 = [
          "tiling",
          ["[]", "uint8", 3],
          "hiResMaterial",
          this.PackMapTerrainMaterialV14,
          "loResMaterial",
          this.PackMapTerrainMaterialV14,
          "faderMaterial",
          this.PackMapTerrainMaterialV14,
          "uvData",
          Utils.getPointerReader(this.PackMapTerrainChunkUVDataV14)
        ];

        this.PackMapTerrainMaterialsV14 = [
          "pagedImage",
          Utils.getFileNameReader(),
          "constArray",
          Utils.getArrayReader(this.PackMapTerrainConstV14),
          "texFileArray",
          Utils.getArrayReader(this.PackMapTerrainTexV14),
          "materials",
          Utils.getArrayReader(this.PackMapTerrrainChunkMaterialV14),
          "midFade",
          ["[]", "float32", 2],
          "farFade",
          ["[]", "float32", 2]
        ];

        this.__root = this.PackMapTerrainV14 = [
          "dims",
          ["[]", "uint32", 2],
          "swapDistance",
          "float32",
          "heightMapArray",
          Utils.getArrayReader("float32"),
          "tileFlagArray",
          Utils.getArrayReader("uint32"),
          "chunkArray",
          Utils.getArrayReader(this.PackMapTerrainChunkV14),
          "materials",
          Utils.getPointerReader(this.PackMapTerrainMaterialsV14)
        ];
      },

      // => Version: 13, ReferencedFunction: 0xEBAF80
      13: function() {
        this.PackMapTerrainChunkV13 = [
          "chunkFlags",
          "uint32",
          "tileTableArray",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapTerrainConstV13 = [
          "tokenName",
          "uint32",
          "value",
          ["[]", "float32", 4]
        ];

        this.PackMapTerrainTexV13 = [
          "tokenName",
          "uint32",
          "flags",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "flags",
          ["[]", "uint32", 2],
          "layer",
          "uint32"
        ];

        this.PackMapTerrainMaterialV13 = [
          "materialFile",
          Utils.getFileNameReader(),
          "fvf",
          "uint32",
          "constIndexArray",
          Utils.getArrayReader("uint32"),
          "texIndexArray",
          Utils.getArrayReader("uint32")
        ];

        this.PackMapTerrainChunkUVDataV13 = [
          "translation",
          ["[]", "float32", 2],
          "xScaleRange",
          ["[]", "float32", 2],
          "yScaleRange",
          ["[]", "float32", 2],
          "scaleSpeed",
          ["[]", "float32", 2],
          "rotation",
          "float32"
        ];

        this.PackMapTerrrainChunkMaterialV13 = [
          "tiling",
          ["[]", "uint8", 3],
          "hiResMaterial",
          this.PackMapTerrainMaterialV13,
          "loResMaterial",
          this.PackMapTerrainMaterialV13,
          "faderMaterial",
          this.PackMapTerrainMaterialV13,
          "uvData",
          Utils.getPointerReader(this.PackMapTerrainChunkUVDataV13)
        ];

        this.PackMapTerrainMaterialsV13 = [
          "pagedImage",
          Utils.getFileNameReader(),
          "constArray",
          Utils.getArrayReader(this.PackMapTerrainConstV13),
          "texFileArray",
          Utils.getArrayReader(this.PackMapTerrainTexV13),
          "materials",
          Utils.getArrayReader(this.PackMapTerrrainChunkMaterialV13),
          "midFade",
          ["[]", "float32", 2],
          "farFade",
          ["[]", "float32", 2]
        ];

        this.__root = this.PackMapTerrainV13 = [
          "dims",
          ["[]", "uint32", 2],
          "swapDistance",
          "float32",
          "heightMapArray",
          Utils.getArrayReader("float32"),
          "tileFlagArray",
          Utils.getArrayReader("uint32"),
          "chunkArray",
          Utils.getArrayReader(this.PackMapTerrainChunkV13),
          "materials",
          Utils.getPointerReader(this.PackMapTerrainMaterialsV13),
          "typeArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];
      },

      // => Version: 12, ReferencedFunction: 0xEBAE60
      12: function() {
        this.PackMapTerrainChunkV12 = [
          "chunkFlags",
          "uint32",
          "tileTableArray",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapTerrainConstV12 = [
          "tokenName",
          "uint32",
          "value",
          ["[]", "float32", 4]
        ];

        this.PackMapTerrainTexV12 = [
          "tokenName",
          "uint32",
          "flags",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "flags",
          ["[]", "uint32", 2],
          "layer",
          "uint32"
        ];

        this.PackMapTerrainMaterialV12 = [
          "materialFile",
          Utils.getFileNameReader(),
          "fvf",
          "uint32",
          "constIndexArray",
          Utils.getArrayReader("uint32"),
          "texIndexArray",
          Utils.getArrayReader("uint32")
        ];

        this.PackMapTerrainChunkUVDataV12 = [
          "translation",
          ["[]", "float32", 2],
          "xScaleRange",
          ["[]", "float32", 2],
          "yScaleRange",
          ["[]", "float32", 2],
          "scaleSpeed",
          ["[]", "float32", 2],
          "rotation",
          "float32"
        ];

        this.PackMapTerrrainChunkMaterialV12 = [
          "tiling",
          ["[]", "uint8", 3],
          "hiResMaterial",
          this.PackMapTerrainMaterialV12,
          "loResMaterial",
          this.PackMapTerrainMaterialV12,
          "uvData",
          Utils.getPointerReader(this.PackMapTerrainChunkUVDataV12)
        ];

        this.PackMapTerrainMaterialsV12 = [
          "pagedImage",
          Utils.getFileNameReader(),
          "constArray",
          Utils.getArrayReader(this.PackMapTerrainConstV12),
          "texFileArray",
          Utils.getArrayReader(this.PackMapTerrainTexV12),
          "materials",
          Utils.getArrayReader(this.PackMapTerrrainChunkMaterialV12)
        ];

        this.__root = this.PackMapTerrainV12 = [
          "dims",
          ["[]", "uint32", 2],
          "swapDistance",
          "float32",
          "heightMapArray",
          Utils.getArrayReader("float32"),
          "tileFlagArray",
          Utils.getArrayReader("uint32"),
          "chunkArray",
          Utils.getArrayReader(this.PackMapTerrainChunkV12),
          "materials",
          Utils.getPointerReader(this.PackMapTerrainMaterialsV12),
          "typeArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];
      },

      // => Version: 11, ReferencedFunction: 0xEBADD0
      11: function() {
        this.PackMapTerrainChunkV11 = [
          "chunkFlags",
          "uint32",
          "tileTableArray",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapTerrainConstV11 = [
          "tokenName",
          "uint32",
          "value",
          ["[]", "float32", 4]
        ];

        this.PackMapTerrainTexV11 = [
          "tokenName",
          "uint32",
          "flags",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "flags",
          ["[]", "uint32", 2],
          "layer",
          "uint32"
        ];

        this.PackMapTerrainMaterialV11 = [
          "materialFile",
          Utils.getFileNameReader(),
          "fvf",
          "uint32",
          "constIndexArray",
          Utils.getArrayReader("uint32"),
          "texIndexArray",
          Utils.getArrayReader("uint32")
        ];

        this.PackMapTerrainChunkUVDataV11 = [
          "translation",
          ["[]", "float32", 2],
          "xScaleRange",
          ["[]", "float32", 2],
          "yScaleRange",
          ["[]", "float32", 2],
          "scaleSpeed",
          ["[]", "float32", 2],
          "rotation",
          "float32"
        ];

        this.PackMapTerrrainChunkMaterialV11 = [
          "tiling",
          ["[]", "uint8", 3],
          "hiResMaterial",
          this.PackMapTerrainMaterialV11,
          "loResMaterial",
          this.PackMapTerrainMaterialV11,
          "uvData",
          Utils.getPointerReader(this.PackMapTerrainChunkUVDataV11)
        ];

        this.PackMapTerrainMaterialsV11 = [
          "pagedImage",
          Utils.getFileNameReader(),
          "constArray",
          Utils.getArrayReader(this.PackMapTerrainConstV11),
          "texFileArray",
          Utils.getArrayReader(this.PackMapTerrainTexV11),
          "materials",
          Utils.getArrayReader(this.PackMapTerrrainChunkMaterialV11)
        ];

        this.__root = this.PackMapTerrainV11 = [
          "dims",
          ["[]", "uint32", 2],
          "swapDistance",
          "float32",
          "heightMapArray",
          Utils.getArrayReader("float32"),
          "tileFlagArray",
          Utils.getArrayReader("uint32"),
          "chunkArray",
          Utils.getArrayReader(this.PackMapTerrainChunkV11),
          "materials",
          Utils.getPointerReader(this.PackMapTerrainMaterialsV11),
          "typeArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];
      },

      // => Version: 10
      10: function() {
        this.PackMapTerrainChunkV10 = [
          "chunkFlags",
          "uint32",
          "tileTableArray",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapTerrainConstV10 = [
          "tokenName",
          "uint32",
          "value",
          ["[]", "float32", 4]
        ];

        this.PackMapTerrainTexV10 = [
          "tokenName",
          "uint32",
          "flags",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "flags",
          ["[]", "uint32", 2],
          "layer",
          "uint32"
        ];

        this.PackMapTerrainMaterialV10 = [
          "materialFile",
          Utils.getFileNameReader(),
          "fvf",
          "uint32",
          "constIndexArray",
          Utils.getArrayReader("uint32"),
          "texIndexArray",
          Utils.getArrayReader("uint32")
        ];

        this.PackMapTerrainChunkUVDataV10 = [
          "translation",
          ["[]", "float32", 2],
          "xScaleRange",
          ["[]", "float32", 2],
          "yScaleRange",
          ["[]", "float32", 2],
          "scaleSpeed",
          ["[]", "float32", 2],
          "rotation",
          "float32"
        ];

        this.PackMapTerrrainChunkMaterialV10 = [
          "tiling",
          "uint8",
          "hiResMaterial",
          this.PackMapTerrainMaterialV10,
          "loResMaterial",
          this.PackMapTerrainMaterialV10,
          "uvData",
          Utils.getPointerReader(this.PackMapTerrainChunkUVDataV10)
        ];

        this.PackMapTerrainMaterialsV10 = [
          "pagedImage",
          Utils.getFileNameReader(),
          "constArray",
          Utils.getArrayReader(this.PackMapTerrainConstV10),
          "texFileArray",
          Utils.getArrayReader(this.PackMapTerrainTexV10),
          "materials",
          Utils.getArrayReader(this.PackMapTerrrainChunkMaterialV10)
        ];

        this.__root = this.PackMapTerrainV10 = [
          "dims",
          ["[]", "uint32", 2],
          "swapDistance",
          "float32",
          "heightMapArray",
          Utils.getArrayReader("float32"),
          "tileFlagArray",
          Utils.getArrayReader("uint32"),
          "chunkArray",
          Utils.getArrayReader(this.PackMapTerrainChunkV10),
          "materials",
          Utils.getPointerReader(this.PackMapTerrainMaterialsV10),
          "typeArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];
      }
    }
  }
];
