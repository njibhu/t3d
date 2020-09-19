let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: trni, versions: 4, strucTab: 0x1723418
  /// ==================================================

  {
    name: "trni",
    versions: {
      // => Version: 3, ReferencedFunction: 0xEBAFE0
      3: function() {
        this.PagedImageLayerDataV3 = [
          "rawDims",
          ["[]", "uint32", 2],
          "strippedDims",
          ["[]", "uint32", 2],
          "rawFormat",
          "uint32",
          "strippedFormat",
          "uint32",
          "diskFormat",
          "uint32",
        ];

        this.PagedImagePageDataV3 = [
          "layer",
          "uint32",
          "coord",
          ["[]", "uint32", 2],
          "filename",
          Utils.getFileNameReader(),
          "flags",
          "uint32",
          "solidColor",
          ["[]", "uint8", 4],
        ];

        this.PagedImageTableDataV3 = [
          "layers",
          Utils.getArrayReader(this.PagedImageLayerDataV3),
          "rawPages",
          Utils.getArrayReader(this.PagedImagePageDataV3),
          "strippedPages",
          Utils.getArrayReader(this.PagedImagePageDataV3),
          "flags",
          "uint32",
        ];

        this.PagedImageEmbeddedPageDataV3 = [
          "layer",
          "uint32",
          "coord",
          ["[]", "uint32", 2],
          "data",
          Utils.getArrayReader("uint8"),
        ];

        this.PagedImageEmbeddedPagesDataV3 = [
          "rawPages",
          Utils.getArrayReader(this.PagedImageEmbeddedPageDataV3),
          "strippedPages",
          Utils.getArrayReader(this.PagedImageEmbeddedPageDataV3),
        ];

        this.__root = this.MapTerrainImg = [
          "tableData",
          Utils.getPointerReader(this.PagedImageTableDataV3),
          "pageData",
          Utils.getPointerReader(this.PagedImageEmbeddedPagesDataV3),
        ];
      },

      // => Version: 2
      2: function() {
        this.PagedImageLayerDataV2 = [
          "dims",
          ["[]", "uint32", 2],
          "rawDims",
          ["[]", "uint32", 2],
          "diskFormat",
          "uint32",
          "rawFormat",
          "uint32",
          "strippedFormat",
          "uint32",
        ];

        this.PagedImagePageDataV2 = [
          "layer",
          "uint32",
          "coord",
          ["[]", "uint32", 2],
          "filename",
          Utils.getFileNameReader(),
          "flags",
          "uint32",
          "solidColor",
          ["[]", "uint8", 4],
        ];

        this.PagedImageTableDataV2 = [
          "layers",
          Utils.getArrayReader(this.PagedImageLayerDataV2),
          "pages",
          Utils.getArrayReader(this.PagedImagePageDataV2),
          "flags",
          "uint32",
        ];

        this.PagedImageEmbeddedPageDataV2 = [
          "layer",
          "uint32",
          "coord",
          ["[]", "uint32", 2],
          "rawData",
          Utils.getArrayReader("uint8"),
          "compressedData",
          Utils.getArrayReader("uint8"),
        ];

        this.PagedImageEmbeddedPagesDataV2 = ["pages", Utils.getArrayReader(this.PagedImageEmbeddedPageDataV2)];

        this.__root = this.MapTerrainImg = [
          "tableData",
          Utils.getPointerReader(this.PagedImageTableDataV2),
          "pageData",
          Utils.getPointerReader(this.PagedImageEmbeddedPagesDataV2),
        ];
      },

      // => Version: 1
      1: function() {
        this.PagedImageLayerDataV1 = [
          "dims",
          ["[]", "uint32", 2],
          "rawDims",
          ["[]", "uint32", 2],
          "diskFormat",
          "uint32",
          "rawFormat",
          "uint32",
          "strippedFormat",
          "uint32",
        ];

        this.PagedImagePageDataV1 = [
          "layer",
          "uint32",
          "coord",
          ["[]", "uint32", 2],
          "filename",
          Utils.getFileNameReader(),
          "flags",
          "uint32",
          "solidColor",
          ["[]", "uint8", 4],
        ];

        this.PagedImageTableDataV1 = [
          "layers",
          Utils.getArrayReader(this.PagedImageLayerDataV1),
          "pages",
          Utils.getArrayReader(this.PagedImagePageDataV1),
        ];

        this.PagedImageEmbeddedPageDataV1 = [
          "layer",
          "uint32",
          "coord",
          ["[]", "uint32", 2],
          "rawData",
          Utils.getArrayReader("uint8"),
          "compressedData",
          Utils.getArrayReader("uint8"),
        ];

        this.PagedImageEmbeddedPagesDataV1 = ["pages", Utils.getArrayReader(this.PagedImageEmbeddedPageDataV1)];

        this.__root = this.MapTerrainImg = [
          "tableData",
          Utils.getPointerReader(this.PagedImageTableDataV1),
          "pageData",
          Utils.getPointerReader(this.PagedImageEmbeddedPagesDataV1),
        ];
      },

      // => Version: 0
      0: function() {
        this.PagedImageLayerDataV0 = [
          "dims",
          ["[]", "uint32", 2],
          "rawDims",
          ["[]", "uint32", 2],
          "diskFormat",
          "uint32",
          "rawFormat",
          "uint32",
          "strippedFormat",
          "uint32",
        ];

        this.PagedImagePageDataV0 = [
          "layer",
          "uint32",
          "coord",
          ["[]", "uint32", 2],
          "filename",
          Utils.getFileNameReader(),
          "flags",
          "uint32",
        ];

        this.PagedImageTableDataV0 = [
          "layers",
          Utils.getArrayReader(this.PagedImageLayerDataV0),
          "pages",
          Utils.getArrayReader(this.PagedImagePageDataV0),
        ];

        this.PagedImageEmbeddedPageDataV0 = [
          "layer",
          "uint32",
          "coord",
          ["[]", "uint32", 2],
          "rawData",
          Utils.getArrayReader("uint8"),
          "compressedData",
          Utils.getArrayReader("uint8"),
        ];

        this.PagedImageEmbeddedPagesDataV0 = ["pages", Utils.getArrayReader(this.PagedImageEmbeddedPageDataV0)];

        this.__root = this.MapTerrainImg = [
          "tableData",
          Utils.getPointerReader(this.PagedImageTableDataV0),
          "pageData",
          Utils.getPointerReader(this.PagedImageEmbeddedPagesDataV0),
        ];
      },
    },
  },
];
