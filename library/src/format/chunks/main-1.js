const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: Main, versions: 1, strucTab: 0x18841DC
  /// ==================================================

  {
    name: "Main",
    versions: {
      // => Version: 0
      0: function () {
        this.PackContentTypeInfo = [
          "guidOffset",
          "uint32",
          "uidOffset",
          "uint32",
          "dataIdOffset",
          "uint32",
          "nameOffset",
          "uint32",
          "trackReferences",
          "uint8",
        ];

        this.PackContentNamespace = ["name", Utils.getString16Reader(), "domain", "uint32", "parentIndex", "uint32"];

        this.PackContentIndexEntry = [
          "type",
          "uint32",
          "offset",
          "uint32",
          "namespaceIndex",
          "uint32",
          "rootIndex",
          "uint32",
        ];

        this.PackContentLocalOffsetFixup = ["relocOffset", "uint32"];

        this.PackContentExternalOffsetFixup = ["relocOffset", "uint32", "targetFileIndex", "uint32"];

        this.PackContentFileIndexFixup = ["relocOffset", "uint32"];

        this.PackContentStringIndexFixup = ["relocOffset", "uint32"];

        this.PackContentTrackedReference = [
          "sourceOffset",
          "uint32",
          "targetFileIndex",
          "uint32",
          "targetOffset",
          "uint32",
        ];

        this.__root = this.PackContent = [
          "flags",
          "uint32",
          "typeInfos",
          Utils.getArrayReader(this.PackContentTypeInfo),
          "namespaces",
          Utils.getArrayReader(this.PackContentNamespace),
          "fileRefs",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "indexEntries",
          Utils.getArrayReader(this.PackContentIndexEntry),
          "localOffsets",
          Utils.getArrayReader(this.PackContentLocalOffsetFixup),
          "externalOffsets",
          Utils.getArrayReader(this.PackContentExternalOffsetFixup),
          "fileIndices",
          Utils.getArrayReader(this.PackContentFileIndexFixup),
          "stringIndices",
          Utils.getArrayReader(this.PackContentStringIndexFixup),
          "trackedReferences",
          Utils.getArrayReader(this.PackContentTrackedReference),
          "strings",
          Utils.getArrayReader(Utils.getString16Reader()),
          "content",
          Utils.getArrayReader("uint8"),
        ];
      },
    },
  },

  /// ==================================================
  /// Chunk: Main, versions: 1, strucTab: 0x1884314
  /// ==================================================

  {
    name: "Main",
    versions: {
      // => Version: 0
      0: function () {
        this.PackMapMetadataMap = ["mapId", "uint16", "mapType", "uint8"];

        this.__root = this.PackMapMetadata = ["maps", Utils.getArrayReader(this.PackMapMetadataMap)];
      },
    },
  },
];
