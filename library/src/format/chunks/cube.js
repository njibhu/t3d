let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: cube, versions: 4, strucTab: 0x17244E0
  /// ==================================================

  {
    name: "cube",
    versions: {
      // => Version: 3
      3: function () {
        this.PackMapCubeMapSampleV3 = [
          "position",
          ["[]", "float32", 3],
          "filenameDayDefault",
          Utils.getFileNameReader(),
          "filenameNightDefault",
          Utils.getFileNameReader(),
          "filenameDayScript",
          Utils.getFileNameReader(),
          "filenameNightScript",
          Utils.getFileNameReader(),
          "envID",
          Utils.getQWordReader(),
        ];

        this.PackMapCubeMapParamsV3 = [
          "modulateColor",
          "uint32",
          "brightness",
          "float32",
          "contrast",
          "float32",
          "blurPasses",
          "uint32",
          "envVolume",
          Utils.getString16Reader(),
        ];

        this.__root = this.PackMapCubeMapV3 = [
          "sampleArray",
          Utils.getArrayReader(this.PackMapCubeMapSampleV3),
          "paramsArray",
          Utils.getArrayReader(this.PackMapCubeMapParamsV3),
        ];
      },

      // => Version: 2, ReferencedFunction: 0x452AB0
      2: function () {
        this.PackMapCubeMapSampleV2 = [
          "position",
          ["[]", "float32", 3],
          "filenameDayDefault",
          Utils.getFileNameReader(),
          "filenameNightDefault",
          Utils.getFileNameReader(),
          "filenameDayScript",
          Utils.getFileNameReader(),
          "filenameNightScript",
          Utils.getFileNameReader(),
        ];

        this.PackMapCubeMapParamsV2 = [
          "modulateColor",
          "uint32",
          "brightness",
          "float32",
          "contrast",
          "float32",
          "blurPasses",
          "uint32",
        ];

        this.__root = this.PackMapCubeMapV2 = [
          "sampleArray",
          Utils.getArrayReader(this.PackMapCubeMapSampleV2),
          "paramsArray",
          Utils.getArrayReader(this.PackMapCubeMapParamsV2),
        ];
      },

      // => Version: 1, ReferencedFunction: 0xEB92D0
      1: function () {
        this.PackMapCubeMapSampleV1 = [
          "position",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "dayPtr",
          Utils.getArrayReader("uint8"),
          "nightPtr",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapCubeMapParamsV1 = [
          "modulateColor",
          "uint32",
          "brightness",
          "float32",
          "contrast",
          "float32",
          "blurPasses",
          "uint32",
        ];

        this.__root = this.PackMapCubeMapV1 = [
          "sampleArray",
          Utils.getArrayReader(this.PackMapCubeMapSampleV1),
          "paramsArray",
          Utils.getArrayReader(this.PackMapCubeMapParamsV1),
        ];
      },

      // => Version: 0
      0: function () {
        this.PackMapCubeMapSampleV0 = [
          "position",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "dataPtr",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapCubeMapParamsV0 = [
          "modulateColor",
          "uint32",
          "brightness",
          "float32",
          "contrast",
          "float32",
          "blurPasses",
          "uint32",
        ];

        this.__root = this.PackMapCubeMapV0 = [
          "sampleArray",
          Utils.getArrayReader(this.PackMapCubeMapSampleV0),
          "paramsArray",
          Utils.getArrayReader(this.PackMapCubeMapParamsV0),
        ];
      },
    },
  },
];
