let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: mfst, versions: 3, strucTab: 0x18FBDC4
  /// ==================================================

  {
    name: "mfst",
    versions: {
      // => Version: 2, ReferencedFunction: 0x1408880
      2: function() {
        this.ContentMapRedirector = [
          "mapGUID",
          ["[]", "uint8", 16],
          "token",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "radius",
          "float32",
        ];

        this.ContentMapModel = [
          "filename",
          Utils.getFileNameReader(),
          "flags",
          "uint32",
          "type",
          "uint32",
          "permutation",
          Utils.getQWordReader(),
        ];

        this.ContentMapStart = [
          "token",
          "uint32",
          "modelArray",
          Utils.getArrayReader(this.ContentMapModel),
          "position",
          ["[]", "float32", 3],
          "radius",
          "float32",
        ];

        this.ContentMap = [
          "mapGUID",
          ["[]", "uint8", 16],
          "mapRedirectorArray",
          Utils.getArrayReader(this.ContentMapRedirector),
          "mapStartArray",
          Utils.getArrayReader(this.ContentMapStart),
        ];

        this.__root = this.ContentPortalManifest = ["mapArray", Utils.getArrayReader(this.ContentMap)];
      },

      // => Version: 1
      1: function() {
        this.ContentMapRedirectorV1 = [
          "mapId",
          "uint32",
          "token",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "radius",
          "float32",
        ];

        this.ContentMapModelV1 = [
          "filename",
          Utils.getFileNameReader(),
          "flags",
          "uint32",
          "type",
          "uint32",
          "permutation",
          Utils.getQWordReader(),
        ];

        this.ContentMapStartV1 = [
          "token",
          "uint32",
          "modelArray",
          Utils.getArrayReader(this.ContentMapModelV1),
          "position",
          ["[]", "float32", 3],
          "radius",
          "float32",
        ];

        this.ContentMapV1 = [
          "mapId",
          "uint32",
          "mapRedirectorArray",
          Utils.getArrayReader(this.ContentMapRedirectorV1),
          "mapStartArray",
          Utils.getArrayReader(this.ContentMapStartV1),
        ];

        this.__root = this.ContentPortalManifestV1 = ["mapArray", Utils.getArrayReader(this.ContentMapV1)];
      },

      // => Version: 0
      0: function() {
        this.ContentMapRedirectorV0 = [
          "mapId",
          "uint32",
          "token",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "radius",
          "float32",
        ];

        this.ContentMapModelV0 = ["filename", Utils.getFileNameReader(), "flags", "uint32", "type", "uint32"];

        this.ContentMapStartV0 = [
          "token",
          "uint32",
          "modelArray",
          Utils.getArrayReader(this.ContentMapModelV0),
          "position",
          ["[]", "float32", 3],
          "radius",
          "float32",
        ];

        this.ContentMapV0 = [
          "mapId",
          "uint32",
          "mapRedirectorArray",
          Utils.getArrayReader(this.ContentMapRedirectorV0),
          "mapStartArray",
          Utils.getArrayReader(this.ContentMapStartV0),
        ];

        this.__root = this.ContentPortalManifestV0 = ["mapArray", Utils.getArrayReader(this.ContentMapV0)];
      },
    },
  },
];
