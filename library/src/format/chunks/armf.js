let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: ARMF, versions: 2, strucTab: 0x1834230
  /// ==================================================

  {
    name: "ARMF",
    versions: {
      // => Version: 1
      1: function() {
        this.PackAssetManifestFile = [
          "baseId",
          "uint32",
          "fileId",
          "uint32",
          "size",
          "uint32",
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader(),
        ];

        this.PackAssetExtraFile = ["baseId", "uint32", "fileId", "uint32", "size", "uint32", "fileType", "uint32"];

        this.__root = this.PackAssetRootManifest = [
          "buildId",
          "uint32",
          "manifests",
          Utils.getArrayReader(this.PackAssetManifestFile),
          "extraFiles",
          Utils.getArrayReader(this.PackAssetExtraFile),
        ];
      },

      // => Version: 0
      0: function() {
        this.PackAssetExtraFile = ["baseId", "uint32", "fileId", "uint32", "size", "uint32", "fileType", "uint32"];

        this.__root = this.PackAssetRootManifestV0 = [
          "buildId",
          "uint32",
          "extraFiles",
          Utils.getArrayReader(this.PackAssetExtraFile),
        ];
      },
    },
  },
];
