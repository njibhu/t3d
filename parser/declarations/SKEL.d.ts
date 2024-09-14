export namespace V0_N {
  export type ModelFileSkeletonV0 = {
    skeletonData: ModelSkeletonDataV62,
    fileReference: number
  }

  export type ModelSkeletonDataV62 = {
    grannyModel: ModelGrannyModelV0,
    boneConstraints: Array<ModelBoneConstraintV62>,
    boneFlags: Uint32Array,
    boneSymmetries: Array<ModelBoneSymmetryV62>,
    emitterBones: Uint32Array,
    trackMasks: Array<ModelTrackMaskV62>
  }

  export type ModelGrannyModelV0 = {
    Name: string,
    Skeleton: ModelGrannySkeletonV0,
    InitialPlacement: ModelTransformData,
    MeshBindings: Array<ModelMeshBindingData>,
    ExtendedData: number,
    ExtendedData_: number
  }

  export type ModelGrannySkeletonV0 = {
    Name: string,
    Bones: Array<ModelBoneData>,
    LODType: number,
    ExtendedData: number,
    ExtendedData_: number
  }

  export type ModelBoneData = {
    Name: string,
    ParentIndex: number,
    LocalTransform: ModelTransformData,
    InverseWorld4x4: Array<Float32Array>,
    LODError: number,
    ExtendedData: number,
    ExtendedData_: number
  }

  export type ModelTransformData = {
    Flags: number,
    Position: Float32Array,
    Orientation: Float32Array,
    ScaleShear: Array<Float32Array>
  }

  export type ModelMeshBindingData = {
    Mesh: number
  }

  export type ModelBoneConstraintV62 = {
    token: bigint,
    flags: number,
    twistOffset: number,
    animBlend: number,
    drag: number,
    ellipseRatio: number,
    gravity: number,
    collisionRadius: number,
    wind: number,
    angle: Float32Array,
    angleStrength: number,
    angleType: number,
    distanceInner: Float32Array,
    distanceInnerStrength: number,
    distanceInnerType: number,
    links: Array<ModelBoneConstraintLinkV62>,
    distanceOuter: Float32Array,
    distanceOuterStrength: number,
    distanceOuterType: number,
    twist: Float32Array,
    twistStrength: number,
    twistType: number
  }

  export type ModelBoneConstraintLinkV62 = {
    angle: number,
    azimuth: number,
    distance: Float32Array,
    token: bigint
  }

  export type ModelBoneSymmetryV62 = {
    boneLeft: bigint,
    boneRight: bigint
  }

  export type ModelTrackMaskV62 = {
    data: PackGrannyTrackMaskType,
    token: bigint
  }

  export type PackGrannyTrackMaskType = {
    trackMask: Uint8Array
  }

}

export type V0 = V0_N.ModelFileSkeletonV0;

export namespace V1_N {
  export type ModelFileSkeletonV1 = {
    skeletonData: ModelSkeletonDataV63,
    fileReference: number,
    overrides: ModelSkeletonOverridesV1
  }

  export type ModelSkeletonDataV63 = {
    grannyModel: ModelGrannyModelV1,
    boneConstraints: Array<ModelBoneConstraintV63>,
    boneFlags: Uint32Array,
    mirrorSpec: PackGrannyMirrorSpecType,
    emitterBones: Uint32Array,
    trackMasks: Array<ModelTrackMaskV63>
  }

  export type ModelGrannyModelV1 = {
    Name: string,
    Skeleton: ModelGrannySkeletonV1,
    InitialPlacement: ModelTransformData,
    MeshBindings: Array<ModelMeshBindingData>,
    ExtendedData: number,
    ExtendedData_: number
  }

  export type ModelGrannySkeletonV1 = {
    Name: string,
    Bones: Array<ModelBoneData>,
    LODType: number,
    ExtendedData: number,
    ExtendedData_: number
  }

  export type ModelBoneData = {
    Name: string,
    ParentIndex: number,
    LocalTransform: ModelTransformData,
    InverseWorld4x4: Array<Float32Array>,
    LODError: number,
    ExtendedData: number,
    ExtendedData_: number
  }

  export type ModelTransformData = {
    Flags: number,
    Position: Float32Array,
    Orientation: Float32Array,
    ScaleShear: Array<Float32Array>
  }

  export type ModelMeshBindingData = {
    Mesh: number
  }

  export type ModelBoneConstraintV63 = {
    token: bigint,
    flags: number,
    twistOffset: number,
    animBlend: number,
    drag: number,
    ellipseRatio: number,
    gravity: number,
    collisionRadius: number,
    wind: number,
    angle: Float32Array,
    angleStrength: number,
    angleType: number,
    distanceInner: Float32Array,
    distanceInnerStrength: number,
    distanceInnerType: number,
    links: Array<ModelBoneConstraintLinkV63>,
    distanceOuter: Float32Array,
    distanceOuterStrength: number,
    distanceOuterType: number,
    twist: Float32Array,
    twistStrength: number,
    twistType: number
  }

  export type ModelBoneConstraintLinkV63 = {
    angle: number,
    azimuth: number,
    distance: Float32Array,
    token: bigint
  }

  export type PackGrannyMirrorSpecType = {
    mirrorSpec: Uint8Array
  }

  export type ModelTrackMaskV63 = {
    data: PackGrannyTrackMaskType,
    token: bigint
  }

  export type PackGrannyTrackMaskType = {
    trackMask: Uint8Array
  }

  export type ModelSkeletonOverridesV1 = {
    boneConstraints: Array<ModelBoneConstraintV63>
  }

}

export type V1 = V1_N.ModelFileSkeletonV1;

export type V0_U = V0 | V1;
export type V1_U = V1;
