const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: EXPA, versions: 4, strucTab: 0x1773290
  /// ==================================================

  {
    name: "EXPA",
    versions: {
      // => Version: 3
      3: function () {
        this.ModelFileSnapPointV3 = [
          "bone",
          Utils.getQWordReader(),
          "shape",
          Utils.getQWordReader(),
          "flags",
          "uint32",
        ];

        this.ModelExpansionEmitterV3 = [
          "curl",
          "float32",
          "vortexSize",
          "float32",
          "curlQuality",
          "uint32",
          "curlFlags",
          "uint32",
          "fieldScale",
          "float32",
        ];

        this.__root = this.ModelFileExpansionV3 = [
          "snapPoints",
          Utils.getArrayReader(this.ModelFileSnapPointV3),
          "snapPointPriority",
          "float32",
          "emitters",
          Utils.getArrayReader(this.ModelExpansionEmitterV3),
        ];
      },

      // => Version: 2
      2: function () {
        this.ModelFileSnapPointV2 = ["bone", Utils.getQWordReader(), "shape", Utils.getQWordReader()];

        this.ModelExpansionEmitterV2 = [
          "curl",
          "float32",
          "vortexSize",
          "float32",
          "curlQuality",
          "uint32",
          "curlFlags",
          "uint32",
          "fieldScale",
          "float32",
        ];

        this.__root = this.ModelFileExpansionV2 = [
          "snapPoints",
          Utils.getArrayReader(this.ModelFileSnapPointV2),
          "snapPointPriority",
          "float32",
          "emitters",
          Utils.getArrayReader(this.ModelExpansionEmitterV2),
        ];
      },

      // => Version: 1
      1: function () {
        this.ModelFileSnapPointV1 = ["bone", Utils.getQWordReader()];

        this.ModelExpansionEmitterV1 = [
          "curl",
          "float32",
          "vortexSize",
          "float32",
          "curlQuality",
          "uint32",
          "curlFlags",
          "uint32",
          "fieldScale",
          "float32",
        ];

        this.__root = this.ModelFileExpansionV1 = [
          "snapPoints",
          Utils.getArrayReader(this.ModelFileSnapPointV1),
          "snapPointPriority",
          "float32",
          "emitters",
          Utils.getArrayReader(this.ModelExpansionEmitterV1),
        ];
      },

      // => Version: 0
      0: function () {
        this.ModelFileSnapPointV0 = ["bone", Utils.getQWordReader()];

        this.ModelExpansionEmitterV0 = ["curl", "float32", "vortexSize", "float32"];

        this.__root = this.ModelFileExpansionV0 = [
          "snapPoints",
          Utils.getArrayReader(this.ModelFileSnapPointV0),
          "snapPointPriority",
          "float32",
          "emitters",
          Utils.getArrayReader(this.ModelExpansionEmitterV0),
        ];
      },
    },
  },
];
