let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: PGTB, versions: 4, strucTab: 0x153BDD8
  /// ==================================================

  {
    name: "PGTB",
    versions: {
      // => Version: 3, ReferencedFunction: 0x6127C0
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

        this.__root = this.PagedImageTableDataV3 = [
          "layers",
          Utils.getArrayReader(this.PagedImageLayerDataV3),
          "rawPages",
          Utils.getArrayReader(this.PagedImagePageDataV3),
          "strippedPages",
          Utils.getArrayReader(this.PagedImagePageDataV3),
          "flags",
          "uint32",
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

        this.__root = this.PagedImageTableDataV2 = [
          "layers",
          Utils.getArrayReader(this.PagedImageLayerDataV2),
          "pages",
          Utils.getArrayReader(this.PagedImagePageDataV2),
          "flags",
          "uint32",
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

        this.__root = this.PagedImageTableDataV1 = [
          "layers",
          Utils.getArrayReader(this.PagedImageLayerDataV1),
          "pages",
          Utils.getArrayReader(this.PagedImagePageDataV1),
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

        this.__root = this.PagedImageTableDataV0 = [
          "layers",
          Utils.getArrayReader(this.PagedImageLayerDataV0),
          "pages",
          Utils.getArrayReader(this.PagedImagePageDataV0),
        ];
      },
    },
  },
];
