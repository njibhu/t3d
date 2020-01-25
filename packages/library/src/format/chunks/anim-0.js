let Utils = T3D.ParserUtils;

module.exports = [
  /// ==================================================
  /// Chunk: ANIM, versions: 26, strucTab: 0x1772EC8
  /// ==================================================

  {
    name: "ANIM",
    versions: {
      // => Version: 25, ReferencedFunction: 0xF27630
      25: function() {
        this.PackGrannyAnimationTypeV1 = [
          "animation",
          Utils.getArrayReader("uint8"),
          "pointers",
          Utils.getArrayReader("uint32")
        ];

        this.ModelAnimationLodV25 = [
          "data",
          this.PackGrannyAnimationTypeV1,
          "fileFull",
          Utils.getFileNameReader()
        ];

        this.ModelVisTrackDataV33 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV25 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV25 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV25)
        ];

        this.ModelCloudAnimV25 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV25)
        ];

        this.ModelMatConstAnimV25 = [
          "materialId",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV25 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV25)
        ];

        this.ModelAnimPropertyDataV25 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV25 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV25 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV25)
        ];

        this.ModelAnchorAnimV25 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV25)
        ];

        this.ModelStreakAnimV25 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV25)
        ];

        this.ModelLightningAnimV25 = [
          "bone",
          Utils.getQWordReader(),
          "lightningTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV25)
        ];

        this.ModelWindAnimationV25 = [
          "bone",
          Utils.getQWordReader(),
          "windTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV25)
        ];

        this.ModelAnimationDataV33 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV1,
          "animLod",
          Utils.getPointerReader(this.ModelAnimationLodV25),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV33),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV25),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV25),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV25),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV25),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV25),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV25),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV25),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV25),
          "lightningAnim",
          Utils.getArrayReader(this.ModelLightningAnimV25),
          "windAnimData",
          Utils.getArrayReader(this.ModelWindAnimationV25)
        ];

        this.ModelCompoundAnimationDataV25 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportSequenceV25 = [
          "name",
          Utils.getQWordReader(),
          "duration",
          "float32"
        ];

        this.ModelAnimationImportDataV33 = [
          "filename",
          Utils.getFileNameReader(),
          "sequences",
          Utils.getArrayReader(this.ModelAnimationImportSequenceV25)
        ];

        this.ModelFileAnimationBankV25 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV33),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV25),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV33)
        ];

        this.__root = this.ModelFileAnimationV25 = [
          "bank",
          Utils.getPointerReader(this.ModelFileAnimationBankV25),
          "anim",
          this.PackGrannyAnimationTypeV1
        ];
      },

      // => Version: 24, ReferencedFunction: 0xF27440
      24: function() {
        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelAnimationLodV24 = [
          "data",
          this.PackGrannyAnimationTypeV0,
          "fileFull",
          Utils.getFileNameReader()
        ];

        this.ModelVisTrackDataV32 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV24 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV24 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV24)
        ];

        this.ModelCloudAnimV24 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV24)
        ];

        this.ModelMatConstAnimV24 = [
          "materialId",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV24 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV24)
        ];

        this.ModelAnimPropertyDataV24 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV24 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV24 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV24)
        ];

        this.ModelAnchorAnimV24 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV24)
        ];

        this.ModelStreakAnimV24 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV24)
        ];

        this.ModelLightningAnimV24 = [
          "bone",
          Utils.getQWordReader(),
          "lightningTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV24)
        ];

        this.ModelWindAnimationV24 = [
          "bone",
          Utils.getQWordReader(),
          "windTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV24)
        ];

        this.ModelAnimationDataV32 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV0,
          "animLod",
          Utils.getPointerReader(this.ModelAnimationLodV24),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV32),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV24),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV24),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV24),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV24),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV24),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV24),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV24),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV24),
          "lightningAnim",
          Utils.getArrayReader(this.ModelLightningAnimV24),
          "windAnimData",
          Utils.getArrayReader(this.ModelWindAnimationV24)
        ];

        this.ModelCompoundAnimationDataV24 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportSequenceV24 = [
          "name",
          Utils.getQWordReader(),
          "duration",
          "float32"
        ];

        this.ModelAnimationImportDataV32 = [
          "filename",
          Utils.getFileNameReader(),
          "sequences",
          Utils.getArrayReader(this.ModelAnimationImportSequenceV24)
        ];

        this.ModelFileAnimationBankV24 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV32),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV24),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV32)
        ];

        this.__root = this.ModelFileAnimationV24 = [
          "bank",
          Utils.getPointerReader(this.ModelFileAnimationBankV24),
          "anim",
          this.PackGrannyAnimationTypeV0
        ];
      },

      // => Version: 23, ReferencedFunction: 0xF272A0
      23: function() {
        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV31 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV23 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV23 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV23)
        ];

        this.ModelCloudAnimV23 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV23)
        ];

        this.ModelMatConstAnimV23 = [
          "materialId",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV23 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV23)
        ];

        this.ModelAnimPropertyDataV23 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV23 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV23 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV23)
        ];

        this.ModelAnchorAnimV23 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV23)
        ];

        this.ModelStreakAnimV23 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV23)
        ];

        this.ModelLightningAnimV23 = [
          "bone",
          Utils.getQWordReader(),
          "lightningTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV23)
        ];

        this.ModelWindAnimationV23 = [
          "bone",
          Utils.getQWordReader(),
          "windTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV23)
        ];

        this.ModelAnimationDataV31 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV31),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV23),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV23),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV23),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV23),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV23),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV23),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV23),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV23),
          "lightningAnim",
          Utils.getArrayReader(this.ModelLightningAnimV23),
          "windAnimData",
          Utils.getArrayReader(this.ModelWindAnimationV23)
        ];

        this.ModelCompoundAnimationDataV23 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportSequenceV23 = [
          "name",
          Utils.getQWordReader(),
          "duration",
          "float32"
        ];

        this.ModelAnimationImportDataV31 = [
          "filename",
          Utils.getFileNameReader(),
          "sequences",
          Utils.getArrayReader(this.ModelAnimationImportSequenceV23)
        ];

        this.__root = this.ModelFileAnimationBankV23 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV31),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV23),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV31)
        ];
      },

      // => Version: 22
      22: function() {
        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV30 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV22 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV22 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV22)
        ];

        this.ModelCloudAnimV22 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV22)
        ];

        this.ModelMatConstAnimV22 = [
          "materialId",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV22 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV22)
        ];

        this.ModelAnimPropertyDataV22 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV22 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV22 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV22)
        ];

        this.ModelAnchorAnimV22 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV22)
        ];

        this.ModelStreakAnimV22 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV22)
        ];

        this.ModelLightningAnimV22 = [
          "bone",
          Utils.getQWordReader(),
          "lightningTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV22)
        ];

        this.ModelWindAnimationV22 = [
          "bone",
          Utils.getQWordReader(),
          "windTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV22)
        ];

        this.ModelAnimationDataV30 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV30),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV22),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV22),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV22),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV22),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV22),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV22),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV22),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV22),
          "lightningAnim",
          Utils.getArrayReader(this.ModelLightningAnimV22),
          "windAnimData",
          Utils.getArrayReader(this.ModelWindAnimationV22)
        ];

        this.ModelCompoundAnimationDataV22 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportSequenceV22 = [
          "name",
          Utils.getQWordReader(),
          "duration",
          "float32"
        ];

        this.ModelAnimationImportDataV30 = [
          "filename",
          Utils.getFileNameReader(),
          "sequences",
          Utils.getArrayReader(this.ModelAnimationImportSequenceV22)
        ];

        this.__root = this.ModelFileAnimationBankV22 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV30),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV22),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV30)
        ];
      },

      // => Version: 21
      21: function() {
        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV29 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV21 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV21 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV21)
        ];

        this.ModelCloudAnimV21 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV21)
        ];

        this.ModelMatConstAnimV21 = [
          "materialId",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV21 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV21)
        ];

        this.ModelAnimPropertyDataV21 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV21 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV21 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV21)
        ];

        this.ModelAnchorAnimV21 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV21)
        ];

        this.ModelStreakAnimV21 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV21)
        ];

        this.ModelLightningAnimV21 = [
          "bone",
          Utils.getQWordReader(),
          "lightningTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV21)
        ];

        this.ModelWindAnimationV21 = [
          "bone",
          Utils.getQWordReader(),
          "windTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV21)
        ];

        this.ModelAnimationDataV29 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV29),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV21),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV21),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV21),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV21),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV21),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV21),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV21),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV21),
          "lightningAnim",
          Utils.getArrayReader(this.ModelLightningAnimV21),
          "windAnimData",
          Utils.getArrayReader(this.ModelWindAnimationV21)
        ];

        this.ModelCompoundAnimationDataV21 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportSequenceV21 = [
          "name",
          Utils.getQWordReader(),
          "duration",
          "float32"
        ];

        this.ModelAnimationImportDataV29 = [
          "filename",
          Utils.getFileNameReader(),
          "sequences",
          Utils.getArrayReader(this.ModelAnimationImportSequenceV21)
        ];

        this.__root = this.ModelFileAnimationBankV21 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV29),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV21),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV29),
          "modelReference",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 20
      20: function() {
        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV28 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV20 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV20 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV20)
        ];

        this.ModelCloudAnimV20 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV20)
        ];

        this.ModelMatConstAnimV20 = [
          "materialId",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV20 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV20)
        ];

        this.ModelAnimPropertyDataV20 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV20 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV20 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV20)
        ];

        this.ModelAnchorAnimV20 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV20)
        ];

        this.ModelStreakAnimV20 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV20)
        ];

        this.ModelLightningAnimV20 = [
          "bone",
          Utils.getQWordReader(),
          "lightningTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV20)
        ];

        this.ModelAnimationDataV28 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV28),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV20),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV20),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV20),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV20),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV20),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV20),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV20),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV20),
          "lightningAnim",
          Utils.getArrayReader(this.ModelLightningAnimV20)
        ];

        this.ModelCompoundAnimationDataV20 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportSequenceV20 = [
          "name",
          Utils.getQWordReader(),
          "duration",
          "float32"
        ];

        this.ModelAnimationImportDataV28 = [
          "filename",
          Utils.getFileNameReader(),
          "sequences",
          Utils.getArrayReader(this.ModelAnimationImportSequenceV20)
        ];

        this.__root = this.ModelFileAnimationBankV20 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV28),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV20),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV28),
          "modelReference",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 19
      19: function() {
        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV27 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV19 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV19 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV19)
        ];

        this.ModelCloudAnimV19 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV19)
        ];

        this.ModelMatConstAnimV19 = [
          "materialId",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV19 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV19)
        ];

        this.ModelAnimPropertyDataV19 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV19 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV19 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV19)
        ];

        this.ModelAnchorAnimV19 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV19)
        ];

        this.ModelStreakAnimV19 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV19)
        ];

        this.ModelAnimationDataV27 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV27),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV19),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV19),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV19),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV19),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV19),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV19),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV19),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV19)
        ];

        this.ModelCompoundAnimationDataV19 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportSequenceV19 = [
          "name",
          Utils.getQWordReader(),
          "duration",
          "float32"
        ];

        this.ModelAnimationImportDataV27 = [
          "filename",
          Utils.getFileNameReader(),
          "sequences",
          Utils.getArrayReader(this.ModelAnimationImportSequenceV19)
        ];

        this.__root = this.ModelFileAnimationBankV19 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV27),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV19),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV27),
          "modelReference",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 18, ReferencedFunction: 0xF271F0
      18: function() {
        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV26 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV18 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV18 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV18)
        ];

        this.ModelCloudAnimV18 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV18)
        ];

        this.ModelMatConstAnimV18 = [
          "materialId",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV18 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV18)
        ];

        this.ModelAnimPropertyDataV18 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV18 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV18 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV18)
        ];

        this.ModelAnchorAnimV18 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV18)
        ];

        this.ModelStreakAnimV18 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV18)
        ];

        this.ModelAnimationDataV26 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV26),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV18),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV18),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV18),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV18),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV18),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV18),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV18),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV18)
        ];

        this.ModelCompoundAnimationDataV18 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportSequenceV18 = [
          "name",
          Utils.getQWordReader(),
          "duration",
          "float32"
        ];

        this.ModelAnimationImportDataV26 = [
          "filename",
          Utils.getFileNameReader(),
          "sequences",
          Utils.getArrayReader(this.ModelAnimationImportSequenceV18)
        ];

        this.__root = this.ModelFileAnimationBankV18 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV26),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV18),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV26)
        ];
      },

      // => Version: 17, ReferencedFunction: 0xF26BD0
      17: function() {
        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV25 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV17 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV17 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV17)
        ];

        this.ModelCloudAnimV17 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV17)
        ];

        this.ModelMatConstAnimV17 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV17 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV17)
        ];

        this.ModelAnimPropertyDataV17 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV17 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV17 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV17)
        ];

        this.ModelAnchorAnimV17 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV17)
        ];

        this.ModelStreakAnimV17 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV17)
        ];

        this.ModelAnimationDataV25 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV25),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV17),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV17),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV17),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV17),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV17),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV17),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV17),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV17)
        ];

        this.ModelCompoundAnimationDataV17 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportSequenceV17 = [
          "name",
          Utils.getQWordReader(),
          "duration",
          "float32"
        ];

        this.ModelAnimationImportDataV25 = [
          "filename",
          Utils.getFileNameReader(),
          "sequences",
          Utils.getArrayReader(this.ModelAnimationImportSequenceV17)
        ];

        this.__root = this.ModelFileAnimationBankV17 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV25),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV17),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV25)
        ];
      },

      // => Version: 16
      16: function() {
        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV24 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV16 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV16 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV16)
        ];

        this.ModelCloudAnimV16 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV16)
        ];

        this.ModelMatConstAnimV16 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV16 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV16)
        ];

        this.ModelAnimPropertyDataV16 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV16 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV16 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV16)
        ];

        this.ModelAnchorAnimV16 = [
          "bone",
          Utils.getQWordReader(),
          "anchorTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV16)
        ];

        this.ModelStreakAnimV16 = [
          "bone",
          Utils.getQWordReader(),
          "anchorAnim",
          Utils.getArrayReader(this.ModelAnchorAnimV16)
        ];

        this.ModelAnimationDataV24 = [
          "token",
          Utils.getQWordReader(),
          "data",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV24),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV16),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV16),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV16),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV16),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV16),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV16),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV16),
          "streakAnim",
          Utils.getArrayReader(this.ModelStreakAnimV16)
        ];

        this.ModelCompoundAnimationDataV16 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV24 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV16 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV24),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV16),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV24)
        ];
      },

      // => Version: 15
      15: function() {
        this.ModelVisTrackDataV23 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV15 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV15 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV15)
        ];

        this.ModelCloudAnimV15 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV15)
        ];

        this.ModelMatConstAnimV15 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV15 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV15)
        ];

        this.ModelAnimPropertyDataV15 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV15 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelBoneConstraintAnimV15 = [
          "bone",
          Utils.getQWordReader(),
          "bcTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV15)
        ];

        this.ModelAnimationDataV23 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV23),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV15),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV15),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV15),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV15),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV15),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV15),
          "bcAnim",
          Utils.getArrayReader(this.ModelBoneConstraintAnimV15)
        ];

        this.ModelCompoundAnimationDataV15 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV23 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV15 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV23),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV15),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV23)
        ];
      },

      // => Version: 14, ReferencedFunction: 0xF26950
      14: function() {
        this.ModelVisTrackDataV22 = [
          "boneToken",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV14 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV14 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV14)
        ];

        this.ModelCloudAnimV14 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV14)
        ];

        this.ModelMatConstAnimV14 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV14 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV14)
        ];

        this.ModelAnimPropertyDataV14 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV14 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelAnimationDataV22 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV22),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV14),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV14),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV14),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV14),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV14),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV14)
        ];

        this.ModelCompoundAnimationDataV14 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV22 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV14 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV22),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV14),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV22)
        ];
      },

      // => Version: 13
      13: function() {
        this.ModelVisTrackDataV21 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV13 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV13 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV13)
        ];

        this.ModelCloudAnimV13 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV13)
        ];

        this.ModelMatConstAnimV13 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV13 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV13)
        ];

        this.ModelAnimPropertyDataV13 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV13 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelAnimationDataV21 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV21),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV13),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV13),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV13),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV13),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV13),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV13)
        ];

        this.ModelCompoundAnimationDataV13 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV21 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV13 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV21),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV13),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV21)
        ];
      },

      // => Version: 12, ReferencedFunction: 0xF268A0
      12: function() {
        this.ModelVisTrackDataV20 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV12 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV12 = [
          "uvAnimId",
          "uint32",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV12)
        ];

        this.ModelCloudAnimV12 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV12)
        ];

        this.ModelMatConstAnimV12 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV12 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV12)
        ];

        this.ModelAnimPropertyDataV12 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelTokenMapAnimV12 = [
          "linkToken",
          Utils.getQWordReader(),
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelAnimationDataV20 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV20),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV12),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV12),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV12),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV12),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV12),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "tokenMapAnims",
          Utils.getArrayReader(this.ModelTokenMapAnimV12)
        ];

        this.ModelCompoundAnimationDataV12 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV20 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV12 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV20),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV12),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV20)
        ];
      },

      // => Version: 11
      11: function() {
        this.ModelVisTrackDataV19 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV11 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV11 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV11)
        ];

        this.ModelCloudAnimV11 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV11)
        ];

        this.ModelMatConstAnimV11 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV11 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV11)
        ];

        this.ModelAnimPropertyDataV11 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelAnimationDataV19 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV19),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV11),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV11),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV11),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV11),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV11),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelCompoundAnimationDataV11 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV19 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV11 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV19),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV11),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV19)
        ];
      },

      // => Version: 10
      10: function() {
        this.ModelVisTrackDataV18 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV10 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV10 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV10)
        ];

        this.ModelCloudAnimV10 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV10)
        ];

        this.ModelMatConstAnimV10 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV10 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV10)
        ];

        this.ModelAnimPropertyDataV10 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelAnimationDataV18 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV18),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV10),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV10),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV10),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV10),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3],
          "properties",
          Utils.getArrayReader(this.ModelAnimPropertyDataV10)
        ];

        this.ModelCompoundAnimationDataV10 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV18 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV10 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV18),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV10),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV18)
        ];
      },

      // => Version: 9
      9: function() {
        this.ModelVisTrackDataV17 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV9 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelUVAnimationV9 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV9)
        ];

        this.ModelCloudAnimV9 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV9)
        ];

        this.ModelMatConstAnimV9 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32",
          "initialValue",
          ["[]", "float32", 4]
        ];

        this.ModelLightAnimationV9 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV9)
        ];

        this.ModelAnimationDataV17 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV17),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV9),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV9),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV9),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV9),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3]
        ];

        this.ModelCompoundAnimationDataV9 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV17 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV9 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV17),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV9),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV17)
        ];
      },

      // => Version: 8
      8: function() {
        this.ModelVisTrackDataV16 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV8 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelUVAnimationV8 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV8)
        ];

        this.ModelCloudAnimV8 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV8)
        ];

        this.ModelMatConstAnimV8 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelLightAnimationV8 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV8)
        ];

        this.ModelAnimationDataV16 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV16),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV8),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV8),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV8),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV8),
          "isAdditive",
          "uint32",
          "variantCount",
          "uint32",
          "variantIndices",
          ["[]", "uint32", 3]
        ];

        this.ModelCompoundAnimationDataV8 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV16 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV8 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV16),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV8),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV16)
        ];
      },

      // => Version: 7
      7: function() {
        this.ModelVisTrackDataV15 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV7 = [
          "type",
          "uint8",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelUVAnimationV7 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV7)
        ];

        this.ModelCloudAnimV7 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV7)
        ];

        this.ModelMatConstAnimV7 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "trackGroupIndex",
          "uint32",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelLightAnimationV7 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV7)
        ];

        this.ModelAnimationDataV15 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV15),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV7),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV7),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV7),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV7),
          "isAdditive",
          "uint32"
        ];

        this.ModelCompoundAnimationDataV7 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV15 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV7 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV15),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV7),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV15)
        ];
      },

      // => Version: 6
      6: function() {
        this.ModelVisTrackDataV14 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV6 = [
          "type",
          "uint8",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelUVAnimationV6 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV6)
        ];

        this.ModelCloudAnimV6 = [
          "bone",
          Utils.getQWordReader(),
          "cloudTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV6)
        ];

        this.ModelMatConstAnimV6 = [
          "matIndex",
          "uint32",
          "constToken",
          "uint32",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelLightAnimationV6 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV6)
        ];

        this.ModelAnimationDataV14 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV14),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV6),
          "cloudAnim",
          Utils.getArrayReader(this.ModelCloudAnimV6),
          "matConstAnim",
          Utils.getArrayReader(this.ModelMatConstAnimV6),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV6),
          "isAdditive",
          "uint32"
        ];

        this.ModelCompoundAnimationDataV6 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV14 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV6 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV14),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV6),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV14)
        ];
      },

      // => Version: 5
      5: function() {
        this.ModelVisTrackDataV13 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV5 = [
          "type",
          "uint8",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelUVAnimationV5 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV5)
        ];

        this.ModelLightAnimationV5 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV5)
        ];

        this.ModelAnimationDataV13 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV13),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV5),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV5),
          "isAdditive",
          "uint32"
        ];

        this.ModelCompoundAnimationDataV5 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV13 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV5 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV13),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV5),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV13)
        ];
      },

      // => Version: 4
      4: function() {
        this.ModelVisTrackDataV12 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV4 = [
          "type",
          "uint8",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelUVAnimationV4 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV4)
        ];

        this.ModelLightAnimationV4 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV4)
        ];

        this.ModelAnimationDataV12 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV12),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV4),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV4),
          "isAdditive",
          "uint32"
        ];

        this.ModelCompoundAnimationDataV4 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV12 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV4 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV12),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV4),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV12)
        ];
      },

      // => Version: 3
      3: function() {
        this.ModelVisTrackDataV11 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelTrackTypeDataV3 = [
          "type",
          "uint8",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelUVAnimationV3 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelTrackTypeDataV3)
        ];

        this.ModelLightAnimationV3 = [
          "bone",
          Utils.getQWordReader(),
          "lightTrackData",
          Utils.getArrayReader(this.ModelTrackTypeDataV3)
        ];

        this.ModelAnimationDataV11 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV11),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV3),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "lightAnimData",
          Utils.getArrayReader(this.ModelLightAnimationV3)
        ];

        this.ModelCompoundAnimationDataV3 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV11 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV3 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV11),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV3),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV11)
        ];
      },

      // => Version: 2
      2: function() {
        this.ModelVisTrackDataV10 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelUVTransformV2 = [
          "type",
          "uint8",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelUVAnimationV2 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelUVTransformV2)
        ];

        this.ModelAnimationDataV10 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV10),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV2),
          "morphTrackGroups",
          Utils.getArrayReader("uint16"),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelCompoundAnimationDataV2 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV10 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationBankV2 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV10),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV2),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV10)
        ];
      },

      // => Version: 1
      1: function() {
        this.ModelVisTrackDataV9 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelUVTransformV1 = [
          "type",
          "uint8",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelUVAnimationV1 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelUVTransformV1)
        ];

        this.ModelAnimationDataV9 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV9),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV1),
          "triggerTimes",
          Utils.getArrayReader("float32"),
          "triggerTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelCompoundAnimationDataV1 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV9 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationV1 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV9),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV1),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV9)
        ];
      },

      // => Version: 0
      0: function() {
        this.ModelVisTrackDataV8 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelUVTransformV0 = [
          "type",
          "uint8",
          "vectorTrackIndex",
          "uint32"
        ];

        this.ModelUVAnimationV0 = [
          "uvAnimId",
          "uint8",
          "uvTransformData",
          Utils.getArrayReader(this.ModelUVTransformV0)
        ];

        this.ModelAnimationDataV8 = [
          "token",
          Utils.getQWordReader(),
          "data",
          Utils.getArrayReader("uint8"),
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV8),
          "uvAnimData",
          Utils.getArrayReader(this.ModelUVAnimationV0)
        ];

        this.ModelCompoundAnimationDataV0 = [
          "token",
          Utils.getQWordReader(),
          "start",
          Utils.getQWordReader(),
          "loop",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader()
        ];

        this.ModelAnimationImportDataV8 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileAnimationV0 = [
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV8),
          "compoundAnimations",
          Utils.getArrayReader(this.ModelCompoundAnimationDataV0),
          "fallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "imports",
          Utils.getArrayReader(this.ModelAnimationImportDataV8)
        ];
      }
    }
  },

  /// ==================================================
  /// Chunk: ANIM, versions: 3, strucTab: 0x18304E4
  /// ==================================================

  {
    name: "ANIM",
    versions: {
      // => Version: 2
      2: function() {
        this.SceneKeyframeV2 = [
          "time",
          "float32",
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneMotionV2 = [
          "keys",
          Utils.getArrayReader(this.SceneKeyframeV2)
        ];

        this.SceneActionPointV2 = [
          "name",
          Utils.getQWordReader(),
          "motion",
          this.SceneMotionV2
        ];

        this.SceneAnimationEventV2 = [
          "name",
          Utils.getQWordReader(),
          "time",
          "float32"
        ];

        this.SceneAnimationV2 = [
          "name",
          Utils.getQWordReader(),
          "motion",
          this.SceneMotionV2,
          "actionPoints",
          Utils.getArrayReader(this.SceneActionPointV2),
          "events",
          Utils.getArrayReader(this.SceneAnimationEventV2)
        ];

        this.SceneTransformV2 = [
          "name",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.ScenePoseV2 = [
          "name",
          Utils.getQWordReader(),
          "transforms",
          Utils.getArrayReader(this.SceneTransformV2)
        ];

        this.SceneImportSequenceV2 = ["name", Utils.getQWordReader()];

        this.SceneAnimationImportV2 = [
          "filename",
          Utils.getFileNameReader(),
          "animNames",
          Utils.getArrayReader(this.SceneImportSequenceV2),
          "flags",
          "uint32"
        ];

        this.__root = this.SceneFileAnimationV2 = [
          "animations",
          Utils.getArrayReader(this.SceneAnimationV2),
          "poses",
          Utils.getArrayReader(this.ScenePoseV2),
          "imports",
          Utils.getArrayReader(this.SceneAnimationImportV2)
        ];
      },

      // => Version: 1
      1: function() {
        this.SceneKeyframeV1 = [
          "time",
          "float32",
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneMotionV1 = [
          "keys",
          Utils.getArrayReader(this.SceneKeyframeV1)
        ];

        this.SceneActionPointV1 = [
          "name",
          Utils.getQWordReader(),
          "motion",
          this.SceneMotionV1
        ];

        this.SceneAnimationEventV1 = [
          "name",
          Utils.getQWordReader(),
          "time",
          "float32"
        ];

        this.SceneAnimationV1 = [
          "name",
          Utils.getQWordReader(),
          "motion",
          this.SceneMotionV1,
          "actionPoints",
          Utils.getArrayReader(this.SceneActionPointV1),
          "events",
          Utils.getArrayReader(this.SceneAnimationEventV1)
        ];

        this.SceneAnimationImportV1 = [
          "filename",
          Utils.getFileNameReader(),
          "animNames",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.SceneFileAnimationV1 = [
          "animations",
          Utils.getArrayReader(this.SceneAnimationV1),
          "imports",
          Utils.getArrayReader(this.SceneAnimationImportV1)
        ];
      },

      // => Version: 0
      0: function() {
        this.SceneKeyframeV0 = [
          "time",
          "float32",
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneMotionV0 = [
          "keys",
          Utils.getArrayReader(this.SceneKeyframeV0)
        ];

        this.SceneActionPointV0 = [
          "name",
          Utils.getQWordReader(),
          "motion",
          this.SceneMotionV0
        ];

        this.SceneAnimationV0 = [
          "name",
          Utils.getQWordReader(),
          "motion",
          this.SceneMotionV0,
          "actionPoints",
          Utils.getArrayReader(this.SceneActionPointV0)
        ];

        this.SceneAnimationImportV0 = [
          "filename",
          Utils.getFileNameReader(),
          "animNames",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.SceneFileAnimationV0 = [
          "animations",
          Utils.getArrayReader(this.SceneAnimationV0),
          "imports",
          Utils.getArrayReader(this.SceneAnimationImportV0)
        ];
      }
    }
  }
];
