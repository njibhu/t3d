let Utils = T3D.ParserUtils;

module.exports = [
  /// ==================================================
  /// Chunk: pack, versions: 1, strucTab: 0x1721464
  /// ==================================================

  {
    name: "pack",
    versions: {
      // => Version: 0
      0: function() {
        this.MapVariant = [
          "file",
          Utils.getString16Reader(),
          "name",
          Utils.getString16Reader(),
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint32"
        ];

        this.__root = this.MapPackage = [
          "baseFile",
          Utils.getFileNameReader(),
          "variants",
          Utils.getArrayReader(this.MapVariant),
          "flags",
          "uint32"
        ];
      }
    }
  }
];
