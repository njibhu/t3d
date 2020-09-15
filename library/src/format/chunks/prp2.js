let Utils = require("../../util/ParserUtils.js")

module.exports = [
  /// ==================================================
  /// Chunk: prp2, versions: 22, strucTab: 0x1721F10
  /// ==================================================

  {
    name: "prp2",
    versions: {
      // => Version: 21
      21: function() {
        this.PackMapPropConstantV18 = [
          "token",
          "uint32",
          "constant",
          ["[]", "float32", 4],
          "submodel",
          "uint32"
        ];

        this.PackMapPropObjV21 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constants",
          Utils.getArrayReader(this.PackMapPropConstantV18),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "reserved",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV21 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constants",
          Utils.getArrayReader(this.PackMapPropConstantV18),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "reserved",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropTransformV21 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackMapPropObjInstanceV21 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constants",
          Utils.getArrayReader(this.PackMapPropConstantV18),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "reserved",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "transforms",
          Utils.getArrayReader(this.PackMapPropTransformV21),
          "origGuidArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjToolV21 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjMetaV21 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constants",
          Utils.getArrayReader(this.PackMapPropConstantV18),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "reserved",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV21 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader()),
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV21 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV21),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV21),
          "propInstanceArray",
          Utils.getArrayReader(this.PackMapPropObjInstanceV21),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV21),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV21),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV21),
          "reserved",
          Utils.getString16Reader(),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 20
      20: function() {
        this.PackMapPropConstantV17 = [
          "token",
          "uint32",
          "constant",
          ["[]", "float32", 4],
          "submodel",
          "uint32"
        ];

        this.PackMapPropObjV20 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constants",
          Utils.getArrayReader(this.PackMapPropConstantV17),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV20 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constants",
          Utils.getArrayReader(this.PackMapPropConstantV17),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropTransformV20 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackMapPropObjInstanceV20 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constants",
          Utils.getArrayReader(this.PackMapPropConstantV17),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "transforms",
          Utils.getArrayReader(this.PackMapPropTransformV20),
          "origGuidArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjToolV20 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjMetaV20 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constants",
          Utils.getArrayReader(this.PackMapPropConstantV17),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV20 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader()),
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV20 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV20),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV20),
          "propInstanceArray",
          Utils.getArrayReader(this.PackMapPropObjInstanceV20),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV20),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV20),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV20),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 19
      19: function() {
        this.PackMapPropObjV19 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constTokens",
          Utils.getArrayReader("uint32"),
          "constValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV19 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constTokens",
          Utils.getArrayReader("uint32"),
          "constValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropTransformV19 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackMapPropObjInstanceV19 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constTokens",
          Utils.getArrayReader("uint32"),
          "constValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "transforms",
          Utils.getArrayReader(this.PackMapPropTransformV19),
          "origGuidArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjToolV19 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjMetaV19 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constTokens",
          Utils.getArrayReader("uint32"),
          "constValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV19 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader()),
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV19 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV19),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV19),
          "propInstanceArray",
          Utils.getArrayReader(this.PackMapPropObjInstanceV19),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV19),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV19),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV19),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 18
      18: function() {
        this.PackMapPropObjV18 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV18 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropTransformV18 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackMapPropObjInstanceV18 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "transforms",
          Utils.getArrayReader(this.PackMapPropTransformV18),
          "origGuidArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjToolV18 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjMetaV18 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "sortLayer",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV18 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader()),
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV18 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV18),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV18),
          "propInstanceArray",
          Utils.getArrayReader(this.PackMapPropObjInstanceV18),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV18),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV18),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV18),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 17, ReferencedFunction: 0xEB6AF0
      17: function() {
        this.PackMapPropObjV17 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV17 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropTransformV17 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackMapPropObjInstanceV17 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "transforms",
          Utils.getArrayReader(this.PackMapPropTransformV17),
          "origGuidArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjToolV17 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjMetaV17 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV17 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader()),
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV17 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV17),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV17),
          "propInstanceArray",
          Utils.getArrayReader(this.PackMapPropObjInstanceV17),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV17),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV17),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV17),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 16
      16: function() {
        this.PackMapPropObjV16 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV16 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropTransformV16 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackMapPropObjInstanceV16 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "transforms",
          Utils.getArrayReader(this.PackMapPropTransformV16),
          "origGuidArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjToolV16 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjMetaV16 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "permutation",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV16 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader()),
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV16 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV16),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV16),
          "propInstanceArray",
          Utils.getArrayReader(this.PackMapPropObjInstanceV16),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV16),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV16),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV16),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 15
      15: function() {
        this.PackMapPropObjV15 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV15 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropTransformV15 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackMapPropObjInstanceV15 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "transforms",
          Utils.getArrayReader(this.PackMapPropTransformV15),
          "origGuidArray",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjToolV15 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjMetaV15 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "bounds",
          ["[]", "float32", 4],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV15 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader()),
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV15 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV15),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV15),
          "propInstanceArray",
          Utils.getArrayReader(this.PackMapPropObjInstanceV15),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV15),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV15),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV15),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 14, ReferencedFunction: 0xEB6A80
      14: function() {
        this.PackMapPropObjV14 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV14 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV14 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjMetaV14 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "bucketId",
          "uint16",
          "byte",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV14 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader()),
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV14 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV14),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV14),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV14),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV14),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV14),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 13
      13: function() {
        this.PackMapPropObjV13 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV13 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV13 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapPropObjMetaV13 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "byte",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV13 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "children",
          Utils.getArrayReader(Utils.getQWordReader()),
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV13 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV13),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV13),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV13),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV13),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV13),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 12, ReferencedFunction: 0xEB5900
      12: function() {
        this.PackMapPropObjV12 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV12 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV12 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8"
        ];

        this.PackMapPropObjMetaV12 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "byte",
          "uint8",
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "parent",
          Utils.getQWordReader(),
          "glomOrigin",
          ["[]", "float32", 3]
        ];

        this.PackMapPropObjVolumeV12 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomType",
          "uint8",
          "glomClipScale",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV12 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV12),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV12),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV12),
          "propMetaArray",
          Utils.getArrayReader(this.PackMapPropObjMetaV12),
          "propVolumeArray",
          Utils.getArrayReader(this.PackMapPropObjVolumeV12),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 11, ReferencedFunction: 0xEB5740
      11: function() {
        this.PackMapPropObjV11 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV11 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "broadId",
          "uint16",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV11 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomOrigin",
          ["[]", "float32", 3],
          "glomClipScale",
          ["[]", "float32", 3],
          "glomTargetId",
          Utils.getQWordReader(),
          "glomType",
          "uint8"
        ];

        this.PackBroadphaseType = [
          "broadphaseData",
          Utils.getArrayReader("uint8")
        ];

        this.__root = this.PackMapPropV11 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV11),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV11),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV11),
          "broadPhase",
          this.PackBroadphaseType,
          "nextBroadId",
          "uint32"
        ];
      },

      // => Version: 10, ReferencedFunction: 0xEB6F90
      10: function() {
        this.PackMapPropObjV10 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV10 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV10 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomOrigin",
          ["[]", "float32", 3],
          "glomClipScale",
          ["[]", "float32", 3],
          "glomTargetId",
          Utils.getQWordReader(),
          "glomType",
          "uint8"
        ];

        this.__root = this.PackMapPropV10 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV10),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV10),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV10)
        ];
      },

      // => Version: 9, ReferencedFunction: 0xEB6E40
      9: function() {
        this.PackMapPropObjV9 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV9 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV9 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomOrigin",
          ["[]", "float32", 3],
          "glomClipScale",
          ["[]", "float32", 3],
          "glomTargetId",
          Utils.getQWordReader(),
          "glomType",
          "uint8"
        ];

        this.__root = this.PackMapPropV9 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV9),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV9),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV9)
        ];
      },

      // => Version: 8
      8: function() {
        this.PackMapPropObjV8 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV8 = [
          "filename",
          Utils.getFileNameReader(),
          "blitTextures",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV8 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomOrigin",
          ["[]", "float32", 3],
          "glomClipScale",
          ["[]", "float32", 3],
          "glomTargetId",
          Utils.getQWordReader(),
          "glomType",
          "uint8"
        ];

        this.__root = this.PackMapPropV8 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV8),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV8),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV8)
        ];
      },

      // => Version: 7, ReferencedFunction: 0xEB6DF0
      7: function() {
        this.PackMapPropObjV7 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV7 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 4],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV7 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomOrigin",
          ["[]", "float32", 3],
          "glomClipScale",
          ["[]", "float32", 3],
          "glomTargetId",
          Utils.getQWordReader(),
          "glomType",
          "uint8"
        ];

        this.__root = this.PackMapPropV7 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV7),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV7),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV7)
        ];
      },

      // => Version: 6, ReferencedFunction: 0xEB6C50
      6: function() {
        this.PackMapPropObjV6 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV6 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32",
          "lod1",
          "float32",
          "lod2",
          "float32",
          "flags",
          "uint32",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV6 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomOrigin",
          ["[]", "float32", 3],
          "glomClipScale",
          ["[]", "float32", 3],
          "glomTargetId",
          Utils.getQWordReader(),
          "glomType",
          "uint8"
        ];

        this.__root = this.PackMapPropV6 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV6),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV6),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV6)
        ];
      },

      // => Version: 5
      5: function() {
        this.PackMapPropObjV5 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32",
          "lod1",
          "uint16",
          "lod2",
          "uint16",
          "flags",
          "uint32",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV5 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32",
          "lod1",
          "uint16",
          "lod2",
          "uint16",
          "flags",
          "uint32",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV5 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32",
          "glomOrigin",
          ["[]", "float32", 3],
          "glomClipScale",
          ["[]", "float32", 3],
          "glomTargetId",
          Utils.getQWordReader(),
          "glomType",
          "uint8"
        ];

        this.__root = this.PackMapPropV5 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV5),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV5),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV5)
        ];
      },

      // => Version: 4
      4: function() {
        this.PackMapPropObjV4 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32",
          "lod1",
          "uint16",
          "lod2",
          "uint16",
          "flags",
          "uint32",
          "byte",
          "uint8"
        ];

        this.PackMapPropObjAnimSeqV4 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32",
          "lod1",
          "uint16",
          "lod2",
          "uint16",
          "flags",
          "uint32",
          "byte",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV4 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32"
        ];

        this.__root = this.PackMapPropV4 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV4),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV4),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV4)
        ];
      },

      // => Version: 3
      3: function() {
        this.PackMapPropObjV3 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32",
          "lod1",
          "uint16",
          "lod2",
          "uint16",
          "flags",
          "uint32"
        ];

        this.PackMapPropObjAnimSeqV3 = [
          "filename",
          Utils.getFileNameReader(),
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32",
          "lod1",
          "uint16",
          "lod2",
          "uint16",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapPropObjToolV3 = [
          "guid",
          Utils.getQWordReader(),
          "layerMask",
          "uint32"
        ];

        this.__root = this.PackMapPropV3 = [
          "propArray",
          Utils.getArrayReader(this.PackMapPropObjV3),
          "propAnimArray",
          Utils.getArrayReader(this.PackMapPropObjAnimSeqV3),
          "propToolArray",
          Utils.getArrayReader(this.PackMapPropObjToolV3)
        ];
      }
    }
  }
];
