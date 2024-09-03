import { RefString, Uint32, FixedArray, Float32, Uint8, Pointer, DynArray, Uint64, Uint16, Filename } from "../src/types";

const V0 = {
  chunkName: "SKEL",
  name: "ModelFileSkeletonV0",
  version: 0,
  definitions: {
    ModelSkeletonDataV62: {
      grannyModel: Pointer("ModelGrannyModelV0"),
      boneConstraints: DynArray("ModelBoneConstraintV62"),
      boneFlags: DynArray(Uint32),
      boneSymmetries: DynArray("ModelBoneSymmetryV62"),
      emitterBones: DynArray(Uint32),
      trackMasks: DynArray("ModelTrackMaskV62")
    },
    ModelGrannyModelV0: {
      Name: RefString(),
      Skeleton: Pointer("ModelGrannySkeletonV0"),
      InitialPlacement: "ModelTransformData",
      MeshBindings: DynArray("ModelMeshBindingData"),
      ExtendedData: Pointer(Uint8),
      ExtendedData_: Pointer(Uint8)
    },
    ModelGrannySkeletonV0: {
      Name: RefString(),
      Bones: DynArray("ModelBoneData"),
      LODType: Uint32,
      ExtendedData: Pointer(Uint8),
      ExtendedData_: Pointer(Uint8)
    },
    ModelBoneData: {
      Name: RefString(),
      ParentIndex: Uint32,
      LocalTransform: "ModelTransformData",
      InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
      LODError: Float32,
      ExtendedData: Pointer(Uint8),
      ExtendedData_: Pointer(Uint8)
    },
    ModelTransformData: {
      Flags: Uint32,
      Position: FixedArray(Float32, 3),
      Orientation: FixedArray(Float32, 4),
      ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
    },
    ModelMeshBindingData: {
      Mesh: Pointer(Uint8)
    },
    ModelBoneConstraintV62: {
      token: Uint64,
      flags: Uint16,
      twistOffset: Float32,
      animBlend: Float32,
      drag: Float32,
      ellipseRatio: Float32,
      gravity: Float32,
      collisionRadius: Float32,
      wind: Float32,
      angle: FixedArray(Float32, 2),
      angleStrength: Float32,
      angleType: Uint8,
      distanceInner: FixedArray(Float32, 2),
      distanceInnerStrength: Float32,
      distanceInnerType: Uint8,
      links: DynArray("ModelBoneConstraintLinkV62"),
      distanceOuter: FixedArray(Float32, 2),
      distanceOuterStrength: Float32,
      distanceOuterType: Uint8,
      twist: FixedArray(Float32, 2),
      twistStrength: Float32,
      twistType: Uint8
    },
    ModelBoneConstraintLinkV62: {
      angle: Float32,
      azimuth: Float32,
      distance: FixedArray(Float32, 2),
      token: Uint64
    },
    ModelBoneSymmetryV62: {
      boneLeft: Uint64,
      boneRight: Uint64
    },
    ModelTrackMaskV62: {
      data: "PackGrannyTrackMaskType",
      token: Uint64
    },
    PackGrannyTrackMaskType: {
      trackMask: DynArray(Uint8)
    }
  },
  root: {
    skeletonData: Pointer("ModelSkeletonDataV62"),
    fileReference: Filename()
  }
};

const V1 = {
  chunkName: "SKEL",
  name: "ModelFileSkeletonV1",
  version: 1,
  definitions: {
    ModelSkeletonDataV63: {
      grannyModel: Pointer("ModelGrannyModelV1"),
      boneConstraints: DynArray("ModelBoneConstraintV63"),
      boneFlags: DynArray(Uint32),
      mirrorSpec: "PackGrannyMirrorSpecType",
      emitterBones: DynArray(Uint32),
      trackMasks: DynArray("ModelTrackMaskV63")
    },
    ModelGrannyModelV1: {
      Name: RefString(),
      Skeleton: Pointer("ModelGrannySkeletonV1"),
      InitialPlacement: "ModelTransformData",
      MeshBindings: DynArray("ModelMeshBindingData"),
      ExtendedData: Pointer(Uint8),
      ExtendedData_: Pointer(Uint8)
    },
    ModelGrannySkeletonV1: {
      Name: RefString(),
      Bones: DynArray("ModelBoneData"),
      LODType: Uint32,
      ExtendedData: Pointer(Uint8),
      ExtendedData_: Pointer(Uint8)
    },
    ModelBoneData: {
      Name: RefString(),
      ParentIndex: Uint32,
      LocalTransform: "ModelTransformData",
      InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
      LODError: Float32,
      ExtendedData: Pointer(Uint8),
      ExtendedData_: Pointer(Uint8)
    },
    ModelTransformData: {
      Flags: Uint32,
      Position: FixedArray(Float32, 3),
      Orientation: FixedArray(Float32, 4),
      ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
    },
    ModelMeshBindingData: {
      Mesh: Pointer(Uint8)
    },
    ModelBoneConstraintV63: {
      token: Uint64,
      flags: Uint16,
      twistOffset: Float32,
      animBlend: Float32,
      drag: Float32,
      ellipseRatio: Float32,
      gravity: Float32,
      collisionRadius: Float32,
      wind: Float32,
      angle: FixedArray(Float32, 2),
      angleStrength: Float32,
      angleType: Uint8,
      distanceInner: FixedArray(Float32, 2),
      distanceInnerStrength: Float32,
      distanceInnerType: Uint8,
      links: DynArray("ModelBoneConstraintLinkV63"),
      distanceOuter: FixedArray(Float32, 2),
      distanceOuterStrength: Float32,
      distanceOuterType: Uint8,
      twist: FixedArray(Float32, 2),
      twistStrength: Float32,
      twistType: Uint8
    },
    ModelBoneConstraintLinkV63: {
      angle: Float32,
      azimuth: Float32,
      distance: FixedArray(Float32, 2),
      token: Uint64
    },
    PackGrannyMirrorSpecType: {
      mirrorSpec: DynArray(Uint8)
    },
    ModelTrackMaskV63: {
      data: "PackGrannyTrackMaskType",
      token: Uint64
    },
    PackGrannyTrackMaskType: {
      trackMask: DynArray(Uint8)
    },
    ModelSkeletonOverridesV1: {
      boneConstraints: DynArray("ModelBoneConstraintV63")
    }
  },
  root: {
    skeletonData: Pointer("ModelSkeletonDataV63"),
    fileReference: Filename(),
    overrides: Pointer("ModelSkeletonOverridesV1")
  }
};

export const latest = V1;
export const definitions = { V0, V1 };
export const definitionArray = Object.values(definitions);