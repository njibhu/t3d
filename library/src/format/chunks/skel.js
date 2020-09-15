let Utils = require("../../util/ParserUtils.js")

module.exports = [
  /// ==================================================
  /// Chunk: SKEL, versions: 2, strucTab: 0x1773254
  /// ==================================================

  {
    name: "SKEL",
    versions: {
      // => Version: 1, ReferencedFunction: 0xF29110
      1: function() {
        this.ModelTransformData = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneData = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformData,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelGrannySkeletonV1 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneData),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingData = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelGrannyModelV1 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelGrannySkeletonV1),
          "InitialPlacement",
          this.ModelTransformData,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingData),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneConstraintLinkV63 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV63 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV63),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.PackGrannyMirrorSpecType = [
          "mirrorSpec",
          Utils.getArrayReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV63 = [
          "data",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV63 = [
          "grannyModel",
          Utils.getPointerReader(this.ModelGrannyModelV1),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV63),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "mirrorSpec",
          this.PackGrannyMirrorSpecType,
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV63)
        ];

        this.ModelSkeletonOverridesV1 = [
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV63)
        ];

        this.__root = this.ModelFileSkeletonV1 = [
          "skeletonData",
          Utils.getPointerReader(this.ModelSkeletonDataV63),
          "fileReference",
          Utils.getFileNameReader(),
          "overrides",
          Utils.getPointerReader(this.ModelSkeletonOverridesV1)
        ];
      },

      // => Version: 0
      0: function() {
        this.ModelTransformData = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneData = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformData,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelGrannySkeletonV0 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneData),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingData = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelGrannyModelV0 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelGrannySkeletonV0),
          "InitialPlacement",
          this.ModelTransformData,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingData),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneConstraintLinkV62 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV62 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV62),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelBoneSymmetryV62 = [
          "boneLeft",
          Utils.getQWordReader(),
          "boneRight",
          Utils.getQWordReader()
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV62 = [
          "data",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV62 = [
          "grannyModel",
          Utils.getPointerReader(this.ModelGrannyModelV0),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV62),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "boneSymmetries",
          Utils.getArrayReader(this.ModelBoneSymmetryV62),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV62)
        ];

        this.__root = this.ModelFileSkeletonV0 = [
          "skeletonData",
          Utils.getPointerReader(this.ModelSkeletonDataV62),
          "fileReference",
          Utils.getFileNameReader()
        ];
      }
    }
  },

  /// ==================================================
  /// Chunk: SKEL, versions: 4, strucTab: 0x183055C
  /// ==================================================

  {
    name: "SKEL",
    versions: {
      // => Version: 3
      3: function() {
        this.SceneBoneV3 = [
          "vertexA",
          ["[]", "float32", 3],
          "vertexB",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "mass",
          "float32",
          "name",
          Utils.getQWordReader()
        ];

        this.SceneJointV3 = [
          "bones",
          ["[]", "uint32", 2],
          "pivots",
          ["[]", ["[]", "float32", 3], 2],
          "twists",
          ["[]", ["[]", "float32", 3], 2],
          "planes",
          ["[]", ["[]", "float32", 3], 2],
          "coneLimit",
          "float32",
          "planeMin",
          "float32",
          "planeMax",
          "float32",
          "twistMin",
          "float32",
          "twistMax",
          "float32"
        ];

        this.SceneHingeJointV3 = [
          "bones",
          ["[]", "uint32", 2],
          "pivots",
          ["[]", ["[]", "float32", 3], 2],
          "hinges",
          ["[]", ["[]", "float32", 3], 2],
          "normals",
          ["[]", ["[]", "float32", 3], 2],
          "limitMin",
          "float32",
          "limitMax",
          "float32"
        ];

        this.__root = this.SceneFileSkeletonV3 = [
          "bones",
          Utils.getArrayReader(this.SceneBoneV3),
          "joints",
          Utils.getArrayReader(this.SceneJointV3),
          "hingeJoints",
          Utils.getArrayReader(this.SceneHingeJointV3),
          "ragdollToModel",
          Utils.getArrayReader("uint32")
        ];
      },

      // => Version: 2
      2: function() {
        this.SceneBoneV2 = [
          "vertexA",
          ["[]", "float32", 3],
          "vertexB",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "mass",
          "float32"
        ];

        this.SceneJointV2 = [
          "bones",
          ["[]", "uint32", 2],
          "pivots",
          ["[]", ["[]", "float32", 3], 2],
          "twists",
          ["[]", ["[]", "float32", 3], 2],
          "planes",
          ["[]", ["[]", "float32", 3], 2],
          "coneLimit",
          "float32",
          "planeMin",
          "float32",
          "planeMax",
          "float32",
          "twistMin",
          "float32",
          "twistMax",
          "float32"
        ];

        this.SceneHingeJointV2 = [
          "bones",
          ["[]", "uint32", 2],
          "pivots",
          ["[]", ["[]", "float32", 3], 2],
          "hinges",
          ["[]", ["[]", "float32", 3], 2],
          "normals",
          ["[]", ["[]", "float32", 3], 2],
          "limitMin",
          "float32",
          "limitMax",
          "float32"
        ];

        this.__root = this.SceneFileSkeletonV2 = [
          "bones",
          Utils.getArrayReader(this.SceneBoneV2),
          "joints",
          Utils.getArrayReader(this.SceneJointV2),
          "hingeJoints",
          Utils.getArrayReader(this.SceneHingeJointV2),
          "ragdollToModel",
          Utils.getArrayReader("uint32")
        ];
      },

      // => Version: 1
      1: function() {
        this.SceneBoneV1 = [
          "vertexA",
          ["[]", "float32", 3],
          "vertexB",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "mass",
          "float32"
        ];

        this.SceneJointV1 = [
          "bones",
          ["[]", "uint32", 2],
          "pivots",
          ["[]", ["[]", "float32", 3], 2],
          "twists",
          ["[]", ["[]", "float32", 3], 2],
          "planes",
          ["[]", ["[]", "float32", 3], 2],
          "coneLimit",
          "float32",
          "planeMin",
          "float32",
          "planeMax",
          "float32",
          "twistMin",
          "float32",
          "twistMax",
          "float32"
        ];

        this.SceneHingeJointV1 = [
          "bones",
          ["[]", "uint32", 2],
          "pivots",
          ["[]", ["[]", "float32", 3], 2],
          "hinges",
          ["[]", ["[]", "float32", 3], 2],
          "normals",
          ["[]", ["[]", "float32", 3], 2],
          "limitMin",
          "float32",
          "limitMax",
          "float32"
        ];

        this.SceneUnmappedBoneV1 = [
          "modelBoneIndex",
          "uint32",
          "sceneBoneIndex",
          "uint32",
          "localPose",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.__root = this.SceneFileSkeletonV1 = [
          "bones",
          Utils.getArrayReader(this.SceneBoneV1),
          "joints",
          Utils.getArrayReader(this.SceneJointV1),
          "hingeJoints",
          Utils.getArrayReader(this.SceneHingeJointV1),
          "unmappedBones",
          Utils.getArrayReader(this.SceneUnmappedBoneV1),
          "ragdollToModel",
          Utils.getArrayReader("uint32"),
          "modelToRagdoll",
          Utils.getArrayReader("uint32")
        ];
      },

      // => Version: 0
      0: function() {
        this.SceneBoneV0 = [
          "vertexA",
          ["[]", "float32", 3],
          "vertexB",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "mass",
          "float32"
        ];

        this.SceneJointV0 = [
          "bones",
          ["[]", "uint32", 2],
          "pivots",
          ["[]", ["[]", "float32", 3], 2],
          "twists",
          ["[]", ["[]", "float32", 3], 2],
          "planes",
          ["[]", ["[]", "float32", 3], 2],
          "coneLimit",
          "float32",
          "planeMin",
          "float32",
          "planeMax",
          "float32",
          "twistMin",
          "float32",
          "twistMax",
          "float32"
        ];

        this.SceneUnmappedBoneV0 = [
          "modelBoneIndex",
          "uint32",
          "sceneBoneIndex",
          "uint32",
          "localPose",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.__root = this.SceneFileSkeletonV0 = [
          "bones",
          Utils.getArrayReader(this.SceneBoneV0),
          "joints",
          Utils.getArrayReader(this.SceneJointV0),
          "unmappedBones",
          Utils.getArrayReader(this.SceneUnmappedBoneV0),
          "ragdollToModel",
          Utils.getArrayReader("uint32"),
          "modelToRagdoll",
          Utils.getArrayReader("uint32")
        ];
      }
    }
  }
];
