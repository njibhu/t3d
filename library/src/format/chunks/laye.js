let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: laye, versions: 1, strucTab: 0x1720B64
  /// ==================================================

  {
    name: "laye",
    versions: {
      // => Version: 0
      0: function() {
        this.PackMapLayerProp = ["guid", Utils.getQWordReader(), "layerIds", Utils.getArrayReader("uint32")];

        this.PackMapLayer = ["layerId", "uint32", "metaData", Utils.getArrayReader(["[]", "uint32", 4])];

        this.__root = this.PackMapLayers = [
          "props",
          Utils.getArrayReader(this.PackMapLayerProp),
          "layers",
          Utils.getArrayReader(this.PackMapLayer),
        ];
      },
    },
  },
];
