let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: MFST, versions: 7, strucTab: 0x18341D0
  /// ==================================================

  {
    name: "MFST",
    versions: {
      // => Version: 6
      6: function() {
        this.PackAssetManifestRecord = ["baseId", "uint32", "fileId", "uint32", "size", "uint32", "flags", "uint32"];

        this.PackAssetManifestStream = ["parentBaseId", "uint32", "streamBaseId", "uint32"];

        this.PackAssetManifestProperty = ["type", "uint8", "data", Utils.getArrayReader("uint8")];

        this.PackAssetManifestPropertyIndex = ["baseId", "uint32", "properyIndex", "uint32"];

        this.__root = this.PackAssetManifest = [
          "buildId",
          "uint32",
          "totalRecordSize",
          Utils.getQWordReader(),
          "records",
          Utils.getArrayReader(this.PackAssetManifestRecord),
          "streams",
          Utils.getArrayReader(this.PackAssetManifestStream),
          "properties",
          Utils.getArrayReader(this.PackAssetManifestProperty),
          "propertyTable",
          Utils.getArrayReader(this.PackAssetManifestPropertyIndex),
        ];
      },

      // => Version: 5
      5: function() {
        this.PackAssetManifestRecordV5 = ["baseId", "uint32", "fileId", "uint32", "size", "uint32", "flags", "uint32"];

        this.PackAssetManifestStreamV5 = ["parentBaseId", "uint32", "streamBaseId", "uint32"];

        this.PackAssetManifestPropertyV5 = ["type", "uint8", "data", Utils.getArrayReader("uint8")];

        this.PackAssetManifestPropertyIndexV5 = ["baseId", "uint32", "properyIndex", "uint32"];

        this.__root = this.PackAssetManifestV5 = [
          "buildId",
          "uint32",
          "records",
          Utils.getArrayReader(this.PackAssetManifestRecordV5),
          "streams",
          Utils.getArrayReader(this.PackAssetManifestStreamV5),
          "properties",
          Utils.getArrayReader(this.PackAssetManifestPropertyV5),
          "propertyTable",
          Utils.getArrayReader(this.PackAssetManifestPropertyIndexV5),
        ];
      },

      // => Version: 4
      4: function() {
        this.PackAssetManifestRecordV4 = ["baseId", "uint32", "fileId", "uint32", "size", "uint32", "flags", "uint32"];

        this.PackAssetManifestStreamV4 = ["parentBaseId", "uint32", "streamBaseId", "uint32"];

        this.PackAssetManifestOptionsV4 = ["baseId", "uint32", "fileId", "uint32", "flags", "uint32"];

        this.PackAssetManifestPropertyV4 = ["type", "uint8", "data", Utils.getArrayReader("uint8")];

        this.PackAssetManifestPropertyIndexV4 = ["baseId", "uint32", "properyIndex", "uint32"];

        this.__root = this.PackAssetManifestV4 = [
          "buildId",
          "uint32",
          "records",
          Utils.getArrayReader(this.PackAssetManifestRecordV4),
          "streams",
          Utils.getArrayReader(this.PackAssetManifestStreamV4),
          "options",
          Utils.getArrayReader(this.PackAssetManifestOptionsV4),
          "properties",
          Utils.getArrayReader(this.PackAssetManifestPropertyV4),
          "propertyTable",
          Utils.getArrayReader(this.PackAssetManifestPropertyIndexV4),
        ];
      },

      // => Version: 3
      3: function() {
        this.PackAssetManifestRecordV3 = ["baseId", "uint32", "fileId", "uint32", "size", "uint32"];

        this.PackAssetManifestStreamV3 = ["parentBaseId", "uint32", "streamBaseId", "uint32"];

        this.PackAssetManifestOptionsV3 = ["baseId", "uint32", "fileId", "uint32", "flags", "uint32"];

        this.__root = this.PackAssetManifestV3 = [
          "buildId",
          "uint32",
          "records",
          Utils.getArrayReader(this.PackAssetManifestRecordV3),
          "streams",
          Utils.getArrayReader(this.PackAssetManifestStreamV3),
          "options",
          Utils.getArrayReader(this.PackAssetManifestOptionsV3),
        ];
      },

      // => Version: 2
      2: function() {
        this.PackAssetManifestRecordV2 = ["baseId", "uint32", "fileId", "uint32", "size", "uint32"];

        this.PackAssetManifestStreamV2 = ["parentBaseId", "uint32", "streamBaseId", "uint32"];

        this.__root = this.PackAssetManifestV2 = [
          "buildId",
          "uint32",
          "records",
          Utils.getArrayReader(this.PackAssetManifestRecordV2),
          "streams",
          Utils.getArrayReader(this.PackAssetManifestStreamV2),
          "noDeltaRecords",
          Utils.getArrayReader(this.PackAssetManifestRecordV2),
        ];
      },

      // => Version: 1
      1: function() {
        this.PackAssetManifestRecordV1 = ["baseId", "uint32", "fileId", "uint32", "size", "uint32"];

        this.PackAssetManifestStreamV1 = ["parentBaseId", "uint32", "streamBaseId", "uint32"];

        this.__root = this.PackAssetManifestV1 = [
          "buildId",
          "uint32",
          "records",
          Utils.getArrayReader(this.PackAssetManifestRecordV1),
          "streams",
          Utils.getArrayReader(this.PackAssetManifestStreamV1),
        ];
      },

      // => Version: 0
      0: function() {
        this.PackAssetManifestRecordV0 = ["baseId", "uint32", "fileId", "uint32", "size", "uint32"];

        this.__root = this.PackAssetManifestV0 = [
          "buildId",
          "uint32",
          "records",
          Utils.getArrayReader(this.PackAssetManifestRecordV0),
        ];
      },
    },
  },
];
