

export type ModelFileSkeletonV0 = {
  skeletonData: ModelSkeletonDataV62,
  fileReference: string
}

export type ModelSkeletonDataV62 = {
  grannyModel: ModelGrannyModelV0,
  boneConstraints: Array<ModelBoneConstraintV62>,
  boneFlags: Array<number>,
  boneSymmetries: Array<ModelBoneSymmetryV62>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV62>
}

export type ModelGrannyModelV0 = {
  Name: string,
  Skeleton: ModelGrannySkeletonV0,
  InitialPlacement: ModelTransformData,
  MeshBindings: Array<ModelMeshBindingData>,
  ExtendedData: number
}

export type ModelGrannySkeletonV0 = {
  Name: string,
  Bones: Array<ModelBoneData>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneData = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformData,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformData = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingData = {
  Mesh: number
}

export type ModelBoneConstraintV62 = {
  token: BigInt,
  flags: number,
  twistOffset: number,
  animBlend: number,
  drag: number,
  ellipseRatio: number,
  gravity: number,
  collisionRadius: number,
  wind: number,
  angle: Array<number>,
  angleStrength: number,
  angleType: number,
  distanceInner: Array<number>,
  distanceInnerStrength: number,
  distanceInnerType: number,
  links: Array<ModelBoneConstraintLinkV62>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV62 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelBoneSymmetryV62 = {
  boneLeft: BigInt,
  boneRight: BigInt
}

export type ModelTrackMaskV62 = {
  data: PackGrannyTrackMaskType,
  token: BigInt
}

export type PackGrannyTrackMaskType = {
  trackMask: Array<number>
}

export type ModelFileSkeletonV1 = {
  skeletonData: ModelSkeletonDataV63,
  fileReference: string,
  overrides: ModelSkeletonOverridesV1
}

export type ModelSkeletonDataV63 = {
  grannyModel: ModelGrannyModelV1,
  boneConstraints: Array<ModelBoneConstraintV63>,
  boneFlags: Array<number>,
  mirrorSpec: PackGrannyMirrorSpecType,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV63>
}

export type ModelGrannyModelV1 = {
  Name: string,
  Skeleton: ModelGrannySkeletonV1,
  InitialPlacement: ModelTransformData,
  MeshBindings: Array<ModelMeshBindingData>,
  ExtendedData: number
}

export type ModelGrannySkeletonV1 = {
  Name: string,
  Bones: Array<ModelBoneData>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneConstraintV63 = {
  token: BigInt,
  flags: number,
  twistOffset: number,
  animBlend: number,
  drag: number,
  ellipseRatio: number,
  gravity: number,
  collisionRadius: number,
  wind: number,
  angle: Array<number>,
  angleStrength: number,
  angleType: number,
  distanceInner: Array<number>,
  distanceInnerStrength: number,
  distanceInnerType: number,
  links: Array<ModelBoneConstraintLinkV63>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV63 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type PackGrannyMirrorSpecType = {
  mirrorSpec: Array<number>
}

export type ModelTrackMaskV63 = {
  data: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelSkeletonOverridesV1 = {
  boneConstraints: Array<ModelBoneConstraintV63>
}