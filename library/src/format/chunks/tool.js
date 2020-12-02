const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: TOOL, versions: 4, strucTab: 0x1528B70
  /// ==================================================

  {
    name: "TOOL",
    versions: {
      // => Version: 3, ReferencedFunction: 0x5AEBF0
      3: function () {
        this.AmatToolConstant = [
          "token",
          "uint32",
          "displayName",
          Utils.getString16Reader(),
          "defaultValue",
          ["[]", "float32", 4],
          "flags",
          "uint32",
          "minValue",
          ["[]", "float32", 4],
          "maxValue",
          ["[]", "float32", 4],
        ];

        this.AmatToolTexture = [
          "texName",
          Utils.getString16Reader(),
          "texDefaultFile",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
        ];

        this.__root = this.AmatToolParams = [
          "description",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "texCoordCount",
          "uint8",
          "texTransformCount",
          "uint8",
          "decompressedTextCount",
          "uint32",
          "compressedText",
          Utils.getArrayReader("uint8"),
          "constants",
          Utils.getArrayReader(this.AmatToolConstant),
          "textures",
          Utils.getArrayReader(this.AmatToolTexture),
        ];
      },

      // => Version: 2, ReferencedFunction: 0x5AEB70
      2: function () {
        this.AmatToolConstant = [
          "token",
          "uint32",
          "displayName",
          Utils.getString16Reader(),
          "defaultValue",
          ["[]", "float32", 4],
          "flags",
          "uint32",
          "minValue",
          ["[]", "float32", 4],
          "maxValue",
          ["[]", "float32", 4],
        ];

        this.AmatToolTexture = [
          "texName",
          Utils.getString16Reader(),
          "texDefaultFile",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
        ];

        this.__root = this.AmatToolParams = [
          "description",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "text",
          Utils.getStringReader(),
          "texCoordCount",
          "uint8",
          "texTransformCount",
          "uint8",
          "constants",
          Utils.getArrayReader(this.AmatToolConstant),
          "textures",
          Utils.getArrayReader(this.AmatToolTexture),
        ];
      },

      // => Version: 1, ReferencedFunction: 0x5AEB10
      1: function () {
        this.AmatToolConstantV1 = [
          "token",
          "uint32",
          "displayName",
          Utils.getString16Reader(),
          "defaultValue",
          ["[]", "float32", 4],
          "flags",
          "uint32",
          "minValue",
          ["[]", "float32", 4],
          "maxValue",
          ["[]", "float32", 4],
        ];

        this.AmatToolTextureV1 = [
          "texName",
          Utils.getString16Reader(),
          "texDefaultFile",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
        ];

        this.__root = this.AmatToolParamsV1 = [
          "description",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "text",
          Utils.getStringReader(),
          "texCoordCount",
          "uint8",
          "texTransformCount",
          "uint8",
          "constants",
          Utils.getArrayReader(this.AmatToolConstantV1),
          "textures",
          Utils.getArrayReader(this.AmatToolTextureV1),
        ];
      },

      // => Version: 0
      0: function () {
        this.AmatToolConstantV0 = [
          "token",
          "uint32",
          "displayName",
          Utils.getString16Reader(),
          "defaultValue",
          ["[]", "float32", 4],
          "flags",
          "uint32",
          "minValue",
          ["[]", "float32", 4],
          "maxValue",
          ["[]", "float32", 4],
        ];

        this.AmatToolTextureV0 = [
          "texName",
          Utils.getString16Reader(),
          "texDefaultFile",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "texGen",
          Utils.getArrayReader("uint32"),
          "texTransform",
          Utils.getArrayReader("uint32"),
        ];

        this.__root = this.AmatToolParamsV0 = [
          "description",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "text",
          Utils.getStringReader(),
          "texCoordCount",
          "uint8",
          "texTransformCount",
          "uint8",
          "constants",
          Utils.getArrayReader(this.AmatToolConstantV0),
          "textures",
          Utils.getArrayReader(this.AmatToolTextureV0),
        ];
      },
    },
  },

  /// ==================================================
  /// Chunk: TOOL, versions: 17, strucTab: 0x17730D8
  /// ==================================================

  {
    name: "TOOL",
    versions: {
      // => Version: 16, ReferencedFunction: 0xF29440
      16: function () {
        this.ModelToolCloudV16 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV16 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV16 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV16 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.PackGrannyAnimationTypeV1 = [
          "animation",
          Utils.getArrayReader("uint8"),
          "pointers",
          Utils.getArrayReader("uint32"),
        ];

        this.ModelToolAnimationV16 = [
          "name",
          Utils.getQWordReader(),
          "filename",
          Utils.getString16Reader(),
          "data",
          this.PackGrannyAnimationTypeV1,
        ];

        this.ModelSequenceCompressionInfoV16 = [
          "animToken",
          Utils.getQWordReader(),
          "cmpGroup",
          Utils.getString16Reader(),
          "cmpType",
          Utils.getString16Reader(),
        ];

        this.__root = this.ModelFileToolV16 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV16),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV16),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV16),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV16),
          "permutationTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "highLodAnimations",
          Utils.getArrayReader(this.ModelToolAnimationV16),
          "compressionInfos",
          Utils.getArrayReader(this.ModelSequenceCompressionInfoV16),
          "region",
          Utils.getStringReader(),
        ];
      },

      // => Version: 15
      15: function () {
        this.ModelToolCloudV15 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV15 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV15 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV15 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.PackGrannyAnimationTypeV0 = ["animation", Utils.getArrayReader("uint8")];

        this.ModelToolAnimationV15 = [
          "name",
          Utils.getQWordReader(),
          "filename",
          Utils.getString16Reader(),
          "data",
          this.PackGrannyAnimationTypeV0,
        ];

        this.ModelSequenceCompressionInfoV15 = [
          "animToken",
          Utils.getQWordReader(),
          "cmpGroup",
          Utils.getString16Reader(),
          "cmpType",
          Utils.getString16Reader(),
        ];

        this.__root = this.ModelFileToolV15 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV15),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV15),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV15),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV15),
          "permutationTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "highLodAnimations",
          Utils.getArrayReader(this.ModelToolAnimationV15),
          "compressionInfos",
          Utils.getArrayReader(this.ModelSequenceCompressionInfoV15),
          "region",
          Utils.getStringReader(),
        ];
      },

      // => Version: 14
      14: function () {
        this.ModelToolCloudV14 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV14 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV14 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV14 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.PackGrannyAnimationTypeV0 = ["animation", Utils.getArrayReader("uint8")];

        this.ModelToolAnimationV14 = [
          "name",
          Utils.getQWordReader(),
          "filename",
          Utils.getString16Reader(),
          "data",
          this.PackGrannyAnimationTypeV0,
        ];

        this.ModelSequenceCompressionInfoV14 = [
          "animToken",
          Utils.getQWordReader(),
          "cmpGroup",
          Utils.getString16Reader(),
          "cmpType",
          Utils.getString16Reader(),
        ];

        this.__root = this.ModelFileToolV14 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV14),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV14),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV14),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV14),
          "permutationTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "highLodAnimations",
          Utils.getArrayReader(this.ModelToolAnimationV14),
          "compressionInfos",
          Utils.getArrayReader(this.ModelSequenceCompressionInfoV14),
        ];
      },

      // => Version: 13
      13: function () {
        this.ModelToolCloudV13 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV13 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV13 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV13 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.PackGrannyAnimationTypeV0 = ["animation", Utils.getArrayReader("uint8")];

        this.ModelToolAnimationV13 = [
          "name",
          Utils.getQWordReader(),
          "filename",
          Utils.getString16Reader(),
          "data",
          this.PackGrannyAnimationTypeV0,
        ];

        this.__root = this.ModelFileToolV13 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV13),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV13),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV13),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV13),
          "permutationTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "highLodAnimations",
          Utils.getArrayReader(this.ModelToolAnimationV13),
        ];
      },

      // => Version: 12
      12: function () {
        this.ModelToolCloudV12 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV12 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV12 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV12 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.PackGrannyAnimationTypeV0 = ["animation", Utils.getArrayReader("uint8")];

        this.ModelToolAnimationV12 = [
          "name",
          Utils.getQWordReader(),
          "filename",
          Utils.getString16Reader(),
          "data",
          this.PackGrannyAnimationTypeV0,
        ];

        this.__root = this.ModelFileToolV12 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV12),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV12),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV12),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV12),
          "permutationTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "highLodAnimations",
          Utils.getArrayReader(this.ModelToolAnimationV12),
        ];
      },

      // => Version: 11, ReferencedFunction: 0xF29420
      11: function () {
        this.ModelToolCloudV11 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV11 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV11 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV11 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.__root = this.ModelFileToolV11 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV11),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV11),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV11),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV11),
          "permutationTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
        ];
      },

      // => Version: 10, ReferencedFunction: 0xF29590
      10: function () {
        this.ModelToolCloudV10 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV10 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV10 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV10 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.__root = this.ModelFileToolV10 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV10),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV10),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV10),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV10),
          "permutationTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
        ];
      },

      // => Version: 9
      9: function () {
        this.ModelToolCloudV9 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV9 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV9 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV9 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolPropertyDataV9 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader(),
        ];

        this.__root = this.ModelFileToolV9 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV9),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV9),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV9),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV9),
          "permutationTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "properties",
          Utils.getArrayReader(this.ModelToolPropertyDataV9),
        ];
      },

      // => Version: 8
      8: function () {
        this.ModelToolCloudV8 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV8 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV8 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV8 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.__root = this.ModelFileToolV8 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV8),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV8),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV8),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV8),
          "permutationTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
        ];
      },

      // => Version: 7
      7: function () {
        this.ModelToolCloudV7 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV7 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV7 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolLightningV7 = [
          "systemNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "boltNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "nodeNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.__root = this.ModelFileToolV7 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV7),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV7),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV7),
          "lightningData",
          Utils.getPointerReader(this.ModelToolLightningV7),
        ];
      },

      // => Version: 6, ReferencedFunction: 0xF29550
      6: function () {
        this.ModelToolCloudV6 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolBlitTextureV6 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV6 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.__root = this.ModelFileToolV6 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV6),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV6),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV6),
        ];
      },

      // => Version: 5, ReferencedFunction: 0xF29520
      5: function () {
        this.ModelToolCloudV5 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolMotionV5 = [
          "sequence",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32"),
          "values",
          Utils.getArrayReader(["[]", "float32", 3]),
        ];

        this.ModelToolBlitTextureV5 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV5 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.__root = this.ModelFileToolV5 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV5),
          "motions",
          Utils.getArrayReader(this.ModelToolMotionV5),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV5),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV5),
        ];
      },

      // => Version: 4
      4: function () {
        this.ModelToolCloudV4 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolMotionV4 = [
          "sequence",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32"),
          "values",
          Utils.getArrayReader(["[]", "float32", 3]),
        ];

        this.ModelToolBlitTextureV4 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.ModelToolStreakV4 = [
          "streakNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "anchorNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.__root = this.ModelFileToolV4 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV4),
          "motions",
          Utils.getArrayReader(this.ModelToolMotionV4),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV4),
          "streakData",
          Utils.getPointerReader(this.ModelToolStreakV4),
        ];
      },

      // => Version: 3
      3: function () {
        this.ModelToolCloudV3 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolMotionV3 = [
          "sequence",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32"),
          "values",
          Utils.getArrayReader(["[]", "float32", 3]),
        ];

        this.ModelToolBlitTextureV3 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.__root = this.ModelFileToolV3 = [
          "modelType",
          Utils.getQWordReader(),
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV3),
          "motions",
          Utils.getArrayReader(this.ModelToolMotionV3),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV3),
        ];
      },

      // => Version: 2
      2: function () {
        this.ModelToolCloudV2 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolMotionV2 = [
          "sequence",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32"),
          "values",
          Utils.getArrayReader(["[]", "float32", 3]),
        ];

        this.ModelToolBlitTextureV2 = ["blitId", Utils.getQWordReader(), "filename", Utils.getFileNameReader()];

        this.__root = this.ModelFileToolV2 = [
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV2),
          "motions",
          Utils.getArrayReader(this.ModelToolMotionV2),
          "blitTextures",
          Utils.getArrayReader(this.ModelToolBlitTextureV2),
        ];
      },

      // => Version: 1
      1: function () {
        this.ModelToolCloudV1 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.ModelToolMotionV1 = [
          "sequence",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32"),
          "values",
          Utils.getArrayReader(["[]", "float32", 3]),
        ];

        this.__root = this.ModelFileToolV1 = [
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV1),
          "motions",
          Utils.getArrayReader(this.ModelToolMotionV1),
        ];
      },

      // => Version: 0
      0: function () {
        this.ModelToolCloudV0 = [
          "cloudNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "emitterNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "obstacleNames",
          Utils.getArrayReader(Utils.getStringReader()),
        ];

        this.__root = this.ModelFileToolV0 = [
          "materialNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "cloudData",
          Utils.getPointerReader(this.ModelToolCloudV0),
        ];
      },
    },
  },
];
