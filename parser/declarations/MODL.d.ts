

export type ModelFileDataV0 = {
  materials: Array<ModelMaterialDataV0>,
  meshes: Array<ModelMeshDataV0>,
  animations: Array<ModelAnimationDataV0>,
  model: ModelModelDataV0,
  properties: ModelPropertyDataV0
}

export type ModelMaterialDataV0 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV0>,
  constants: Array<ModelConstantDataV0>
}

export type ModelTextureDataV0 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt
}

export type ModelConstantDataV0 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV0 = {
  mesh: PackGrannyMeshType
}

export type PackGrannyMeshType = {
  mesh: Array<number>
}

export type ModelAnimationDataV0 = {
  token: BigInt,
  animation: PackGrannyAnimationTypeV0
}

export type PackGrannyAnimationTypeV0 = {
  animation: Array<number>
}

export type ModelModelDataV0 = {
  Name: string,
  Skeleton: ModelSkeletonDataV0,
  InitialPlacement: ModelTransformDataV0,
  MeshBindings: Array<ModelMeshBindingDataV0>
}

export type ModelSkeletonDataV0 = {
  Name: string,
  Bones: Array<ModelBoneDataV0>,
  LODType: number
}

export type ModelBoneDataV0 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV0,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV0 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV0 = {
  Mesh: number
}

export type ModelPropertyDataV0 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV0>
}

export type ModelFloatPropertyDataV0 = {
  token: BigInt,
  value: number
}

export type ModelFileDataV1 = {
  materials: Array<ModelMaterialDataV1>,
  meshes: Array<ModelMeshDataV1>,
  animations: Array<ModelAnimationDataV1>,
  model: ModelModelDataV1,
  properties: ModelPropertyDataV1,
  collisionData: ModelChunkCollisionDataV1
}

export type ModelMaterialDataV1 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV1>,
  constants: Array<ModelConstantDataV1>
}

export type ModelTextureDataV1 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt
}

export type ModelConstantDataV1 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV1 = {
  mesh: PackGrannyMeshType
}

export type ModelAnimationDataV1 = {
  token: BigInt,
  animation: PackGrannyAnimationTypeV0
}

export type ModelModelDataV1 = {
  Name: string,
  Skeleton: ModelSkeletonDataV1,
  InitialPlacement: ModelTransformDataV1,
  MeshBindings: Array<ModelMeshBindingDataV1>
}

export type ModelSkeletonDataV1 = {
  Name: string,
  Bones: Array<ModelBoneDataV1>,
  LODType: number
}

export type ModelBoneDataV1 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV1,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV1 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV1 = {
  Mesh: number
}

export type ModelPropertyDataV1 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV1>
}

export type ModelFloatPropertyDataV1 = {
  token: BigInt,
  value: number
}

export type ModelChunkCollisionDataV1 = {
  meshes: Array<ModelChunkCollisionMeshV1>,
  clouds: Array<ModelChunkCollisionCloudV1>,
  surfaces: Array<ModelChunkCollisionSurfaceV1>
}

export type ModelChunkCollisionMeshV1 = {
  animationSequence: BigInt,
  vertices: Array<Array<number>>,
  indices: Array<number>,
  surfaces: Array<number>
}

export type ModelChunkCollisionCloudV1 = {
  animationSequence: BigInt,
  points: Array<Array<number>>,
  surface: number
}

export type ModelChunkCollisionSurfaceV1 = {
  tokens: Array<BigInt>
}

export type ModelFileDataV2 = {
  materials: Array<ModelMaterialDataV2>,
  meshes: Array<ModelMeshDataV2>,
  animations: Array<ModelAnimationDataV2>,
  model: ModelModelDataV2,
  properties: ModelPropertyDataV2,
  collisionData: ModelCollisionDataV2,
  cloudData: ModelCloudDataV2
}

export type ModelMaterialDataV2 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV2>,
  constants: Array<ModelConstantDataV2>
}

export type ModelTextureDataV2 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt
}

export type ModelConstantDataV2 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV2 = {
  mesh: PackGrannyMeshType
}

export type ModelAnimationDataV2 = {
  token: BigInt,
  animation: PackGrannyAnimationTypeV0
}

export type ModelModelDataV2 = {
  Name: string,
  Skeleton: ModelSkeletonDataV2,
  InitialPlacement: ModelTransformDataV2,
  MeshBindings: Array<ModelMeshBindingDataV2>
}

export type ModelSkeletonDataV2 = {
  Name: string,
  Bones: Array<ModelBoneDataV2>,
  LODType: number
}

export type ModelBoneDataV2 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV2,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV2 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV2 = {
  Mesh: number
}

export type ModelPropertyDataV2 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV2>
}

export type ModelFloatPropertyDataV2 = {
  token: BigInt,
  value: number
}

export type ModelCollisionDataV2 = {
  meshes: Array<ModelCollisionMeshV2>,
  clouds: Array<ModelCollisionCloudV2>,
  surfaces: Array<ModelCollisionSurfaceV2>
}

export type ModelCollisionMeshV2 = {
  animationSequence: BigInt,
  vertices: Array<Array<number>>,
  indices: Array<number>,
  surfaces: Array<number>
}

export type ModelCollisionCloudV2 = {
  animationSequence: BigInt,
  points: Array<Array<number>>,
  surface: number
}

export type ModelCollisionSurfaceV2 = {
  tokens: Array<BigInt>
}

export type ModelCloudDataV2 = {
  clouds: Array<ModelParticleCloudV2>,
  emitters: Array<ModelParticleEmitterV2>,
  obstacles: Array<ModelParticleObstacleV2>
}

export type ModelParticleCloudV2 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flipbook: Array<ModelParticleFlipbookV2>,
  materialIndex: number,
  obstacleIndices: Array<number>,
  opacityCurveType: number,
  opacityKeys: Array<Array<number>>,
  scaleCurveType: number,
  scaleKeys: Array<Array<number>>
}

export type ModelParticleFlipbookV2 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleEmitterV2 = {
  acceleration: Array<Array<number>>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  flags: number,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number
}

export type ModelParticleObstacleV2 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelFileDataV3 = {
  materials: Array<ModelMaterialDataV3>,
  meshes: Array<ModelMeshDataV3>,
  animations: Array<ModelAnimationDataV3>,
  model: ModelModelDataV3,
  properties: ModelPropertyDataV3,
  collisionData: ModelCollisionDataV3,
  cloudData: ModelCloudDataV3
}

export type ModelMaterialDataV3 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV3>,
  constants: Array<ModelConstantDataV3>
}

export type ModelTextureDataV3 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt
}

export type ModelConstantDataV3 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV3 = {
  mesh: PackGrannyMeshType
}

export type ModelAnimationDataV3 = {
  token: BigInt,
  animation: PackGrannyAnimationTypeV0
}

export type ModelModelDataV3 = {
  Name: string,
  Skeleton: ModelSkeletonDataV3,
  InitialPlacement: ModelTransformDataV3,
  MeshBindings: Array<ModelMeshBindingDataV3>
}

export type ModelSkeletonDataV3 = {
  Name: string,
  Bones: Array<ModelBoneDataV3>,
  LODType: number
}

export type ModelBoneDataV3 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV3,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV3 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV3 = {
  Mesh: number
}

export type ModelPropertyDataV3 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV3>
}

export type ModelFloatPropertyDataV3 = {
  token: BigInt,
  value: number
}

export type ModelCollisionDataV3 = {
  meshes: Array<ModelCollisionMeshV3>,
  clouds: Array<ModelCollisionCloudV3>,
  cubes: Array<ModelCollisionCubeV3>,
  spheres: Array<ModelCollisionSphereV3>,
  surfaces: Array<ModelCollisionSurfaceV3>
}

export type ModelCollisionMeshV3 = {
  animationSequence: BigInt,
  vertices: Array<Array<number>>,
  indices: Array<number>,
  surfaces: Array<number>
}

export type ModelCollisionCloudV3 = {
  animationSequence: BigInt,
  points: Array<Array<number>>,
  surface: number
}

export type ModelCollisionCubeV3 = {
  transform: Array<Array<number>>,
  surface: number
}

export type ModelCollisionSphereV3 = {
  radius: number,
  position: Array<number>,
  surface: number
}

export type ModelCollisionSurfaceV3 = {
  tokens: Array<BigInt>
}

export type ModelCloudDataV3 = {
  clouds: Array<ModelParticleCloudV3>,
  emitters: Array<ModelParticleEmitterV3>,
  obstacles: Array<ModelParticleObstacleV3>
}

export type ModelParticleCloudV3 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flipbook: Array<ModelParticleFlipbookV3>,
  materialIndex: number,
  obstacleIndices: Array<number>,
  opacityCurveType: number,
  opacityKeys: Array<Array<number>>,
  scaleCurveType: number,
  scaleKeys: Array<Array<number>>
}

export type ModelParticleFlipbookV3 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleEmitterV3 = {
  acceleration: Array<Array<number>>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  flags: number,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number
}

export type ModelParticleObstacleV3 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelFileDataV4 = {
  materials: Array<ModelMaterialDataV4>,
  meshes: Array<ModelMeshDataV4>,
  animations: Array<ModelAnimationDataV4>,
  model: ModelModelDataV4,
  properties: ModelPropertyDataV4,
  collisionData: ModelCollisionDataV4,
  cloudData: ModelCloudDataV4
}

export type ModelMaterialDataV4 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV4>,
  constants: Array<ModelConstantDataV4>
}

export type ModelTextureDataV4 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt
}

export type ModelConstantDataV4 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV4 = {
  mesh: PackGrannyMeshType,
  visTokens: Array<BigInt>
}

export type ModelAnimationDataV4 = {
  token: BigInt,
  animation: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV4>
}

export type ModelVisTrackDataV4 = {
  token: BigInt,
  keys: Array<number>
}

export type ModelModelDataV4 = {
  Name: string,
  Skeleton: ModelSkeletonDataV4,
  InitialPlacement: ModelTransformDataV4,
  MeshBindings: Array<ModelMeshBindingDataV4>
}

export type ModelSkeletonDataV4 = {
  Name: string,
  Bones: Array<ModelBoneDataV4>,
  LODType: number
}

export type ModelBoneDataV4 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV4,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV4 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV4 = {
  Mesh: number
}

export type ModelPropertyDataV4 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV4>
}

export type ModelFloatPropertyDataV4 = {
  token: BigInt,
  value: number
}

export type ModelCollisionDataV4 = {
  meshes: Array<ModelCollisionMeshV4>,
  clouds: Array<ModelCollisionCloudV4>,
  cubes: Array<ModelCollisionCubeV4>,
  spheres: Array<ModelCollisionSphereV4>,
  surfaces: Array<ModelCollisionSurfaceV4>
}

export type ModelCollisionMeshV4 = {
  animationSequence: BigInt,
  vertices: Array<Array<number>>,
  indices: Array<number>,
  surfaces: Array<number>
}

export type ModelCollisionCloudV4 = {
  animationSequence: BigInt,
  points: Array<Array<number>>,
  surface: number
}

export type ModelCollisionCubeV4 = {
  transform: Array<Array<number>>,
  surface: number
}

export type ModelCollisionSphereV4 = {
  radius: number,
  position: Array<number>,
  surface: number
}

export type ModelCollisionSurfaceV4 = {
  tokens: Array<BigInt>
}

export type ModelCloudDataV4 = {
  clouds: Array<ModelParticleCloudV4>,
  emitters: Array<ModelParticleEmitterV4>,
  obstacles: Array<ModelParticleObstacleV4>
}

export type ModelParticleCloudV4 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flipbook: Array<ModelParticleFlipbookV4>,
  materialIndex: number,
  obstacleIndices: Array<number>,
  opacityCurveType: number,
  opacityKeys: Array<Array<number>>,
  scaleCurveType: number,
  scaleKeys: Array<Array<number>>
}

export type ModelParticleFlipbookV4 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleEmitterV4 = {
  acceleration: Array<Array<number>>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  flags: number,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number
}

export type ModelParticleObstacleV4 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelFileDataV5 = {
  materials: Array<ModelMaterialDataV5>,
  meshes: Array<ModelMeshDataV5>,
  animations: Array<ModelAnimationDataV5>,
  model: ModelModelDataV5,
  properties: ModelPropertyDataV5,
  collisionData: ModelCollisionDataV5,
  cloudData: ModelCloudDataV5
}

export type ModelMaterialDataV5 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV5>,
  constants: Array<ModelConstantDataV5>
}

export type ModelTextureDataV5 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt
}

export type ModelConstantDataV5 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV5 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visTokens: Array<BigInt>
}

export type ModelAnimationDataV5 = {
  token: BigInt,
  animation: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV5>
}

export type ModelVisTrackDataV5 = {
  token: BigInt,
  keys: Array<number>
}

export type ModelModelDataV5 = {
  Name: string,
  Skeleton: ModelSkeletonDataV5,
  InitialPlacement: ModelTransformDataV5,
  MeshBindings: Array<ModelMeshBindingDataV5>
}

export type ModelSkeletonDataV5 = {
  Name: string,
  Bones: Array<ModelBoneDataV5>,
  LODType: number
}

export type ModelBoneDataV5 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV5,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV5 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV5 = {
  Mesh: number
}

export type ModelPropertyDataV5 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV5>
}

export type ModelFloatPropertyDataV5 = {
  token: BigInt,
  value: number
}

export type ModelCollisionDataV5 = {
  meshes: Array<ModelCollisionMeshV5>,
  clouds: Array<ModelCollisionCloudV5>,
  cubes: Array<ModelCollisionCubeV5>,
  spheres: Array<ModelCollisionSphereV5>,
  surfaces: Array<ModelCollisionSurfaceV5>
}

export type ModelCollisionMeshV5 = {
  animationSequence: BigInt,
  vertices: Array<Array<number>>,
  indices: Array<number>,
  surfaces: Array<number>
}

export type ModelCollisionCloudV5 = {
  animationSequence: BigInt,
  points: Array<Array<number>>,
  surface: number
}

export type ModelCollisionCubeV5 = {
  transform: Array<Array<number>>,
  surface: number
}

export type ModelCollisionSphereV5 = {
  radius: number,
  position: Array<number>,
  surface: number
}

export type ModelCollisionSurfaceV5 = {
  tokens: Array<BigInt>
}

export type ModelCloudDataV5 = {
  clouds: Array<ModelParticleCloudV5>,
  emitters: Array<ModelParticleEmitterV5>,
  obstacles: Array<ModelParticleObstacleV5>
}

export type ModelParticleCloudV5 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  flipbook: Array<ModelParticleFlipbookV5>,
  materialIndex: number,
  obstacleIndices: Array<number>,
  opacityCurveType: number,
  opacityKeys: Array<Array<number>>,
  scaleCurveType: number,
  scaleKeys: Array<Array<number>>
}

export type ModelParticleFlipbookV5 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleEmitterV5 = {
  acceleration: Array<Array<number>>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  flags: number,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number
}

export type ModelParticleObstacleV5 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelFileDataV6 = {
  materials: Array<ModelMaterialDataV6>,
  meshes: Array<ModelMeshDataV6>,
  animations: Array<ModelAnimationDataV6>,
  animationFallbacks: Array<BigInt>,
  animationImports: Array<ModelAnimationImportDataV6>,
  model: ModelModelDataV6,
  properties: ModelPropertyDataV6,
  collisionData: ModelCollisionDataV6,
  cloudData: ModelCloudDataV6
}

export type ModelMaterialDataV6 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV6>,
  constants: Array<ModelConstantDataV6>
}

export type ModelTextureDataV6 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt
}

export type ModelConstantDataV6 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV6 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>
}

export type ModelAnimationDataV6 = {
  token: BigInt,
  animation: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV6>
}

export type ModelVisTrackDataV6 = {
  boneIndex: number,
  keys: Array<number>
}

export type ModelAnimationImportDataV6 = {
  filename: string,
  sequenceTokens: Array<BigInt>
}

export type ModelModelDataV6 = {
  Name: string,
  Skeleton: ModelSkeletonDataV6,
  InitialPlacement: ModelTransformDataV6,
  MeshBindings: Array<ModelMeshBindingDataV6>
}

export type ModelSkeletonDataV6 = {
  Name: string,
  Bones: Array<ModelBoneDataV6>,
  LODType: number
}

export type ModelBoneDataV6 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV6,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV6 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV6 = {
  Mesh: number
}

export type ModelPropertyDataV6 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV6>
}

export type ModelFloatPropertyDataV6 = {
  token: BigInt,
  value: number
}

export type ModelCollisionDataV6 = {
  meshes: Array<ModelCollisionMeshV6>,
  clouds: Array<ModelCollisionCloudV6>,
  cubes: Array<ModelCollisionCubeV6>,
  spheres: Array<ModelCollisionSphereV6>,
  surfaces: Array<ModelCollisionSurfaceV6>
}

export type ModelCollisionMeshV6 = {
  animationSequence: BigInt,
  vertices: Array<Array<number>>,
  indices: Array<number>,
  surfaces: Array<number>
}

export type ModelCollisionCloudV6 = {
  animationSequence: BigInt,
  points: Array<Array<number>>,
  surface: number
}

export type ModelCollisionCubeV6 = {
  transform: Array<Array<number>>,
  surface: number
}

export type ModelCollisionSphereV6 = {
  radius: number,
  position: Array<number>,
  surface: number
}

export type ModelCollisionSurfaceV6 = {
  tokens: Array<BigInt>
}

export type ModelCloudDataV6 = {
  clouds: Array<ModelParticleCloudV6>,
  emitters: Array<ModelParticleEmitterV6>,
  obstacles: Array<ModelParticleObstacleV6>
}

export type ModelParticleCloudV6 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  flipbook: Array<ModelParticleFlipbookV6>,
  materialIndex: number,
  obstacleIndices: Array<number>,
  opacityCurveType: number,
  opacityKeys: Array<Array<number>>,
  scaleCurveType: number,
  scaleKeys: Array<Array<number>>
}

export type ModelParticleFlipbookV6 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleEmitterV6 = {
  acceleration: Array<Array<number>>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  flags: number,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  visBoneIndex: number
}

export type ModelParticleObstacleV6 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelFileDataV7 = {
  materials: Array<ModelMaterialDataV7>,
  meshes: Array<ModelMeshDataV7>,
  animations: Array<ModelAnimationDataV7>,
  animationFallbacks: Array<BigInt>,
  animationImports: Array<ModelAnimationImportDataV7>,
  model: ModelModelDataV7,
  properties: ModelPropertyDataV7,
  collisionData: ModelCollisionDataV7,
  cloudData: ModelCloudDataV7
}

export type ModelMaterialDataV7 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV7>,
  constants: Array<ModelConstantDataV7>
}

export type ModelTextureDataV7 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt
}

export type ModelConstantDataV7 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV7 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>
}

export type ModelAnimationDataV7 = {
  token: BigInt,
  animation: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV7>
}

export type ModelVisTrackDataV7 = {
  boneIndex: number,
  keys: Array<number>
}

export type ModelAnimationImportDataV7 = {
  filename: string,
  sequenceTokens: Array<BigInt>
}

export type ModelModelDataV7 = {
  Name: string,
  Skeleton: ModelSkeletonDataV7,
  InitialPlacement: ModelTransformDataV7,
  MeshBindings: Array<ModelMeshBindingDataV7>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV7 = {
  Name: string,
  Bones: Array<ModelBoneDataV7>,
  LODType: number
}

export type ModelBoneDataV7 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV7,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV7 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV7 = {
  Mesh: number
}

export type ModelPropertyDataV7 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV7>
}

export type ModelFloatPropertyDataV7 = {
  token: BigInt,
  value: number
}

export type ModelCollisionDataV7 = {
  meshes: Array<ModelCollisionMeshV7>,
  clouds: Array<ModelCollisionCloudV7>,
  cubes: Array<ModelCollisionCubeV7>,
  spheres: Array<ModelCollisionSphereV7>,
  surfaces: Array<ModelCollisionSurfaceV7>
}

export type ModelCollisionMeshV7 = {
  animationSequence: BigInt,
  vertices: Array<Array<number>>,
  indices: Array<number>,
  surfaces: Array<number>
}

export type ModelCollisionCloudV7 = {
  animationSequence: BigInt,
  points: Array<Array<number>>,
  surface: number
}

export type ModelCollisionCubeV7 = {
  transform: Array<Array<number>>,
  surface: number
}

export type ModelCollisionSphereV7 = {
  radius: number,
  position: Array<number>,
  surface: number
}

export type ModelCollisionSurfaceV7 = {
  tokens: Array<BigInt>
}

export type ModelCloudDataV7 = {
  clouds: Array<ModelParticleCloudV7>,
  emitters: Array<ModelParticleEmitterV7>,
  obstacles: Array<ModelParticleObstacleV7>
}

export type ModelParticleCloudV7 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  flipbook: Array<ModelParticleFlipbookV7>,
  materialIndex: number,
  obstacleIndices: Array<number>,
  opacityCurveType: number,
  opacityKeys: Array<Array<number>>,
  scaleCurveType: number,
  scaleKeys: Array<Array<number>>
}

export type ModelParticleFlipbookV7 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleEmitterV7 = {
  acceleration: Array<Array<number>>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  flags: number,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  visBoneIndex: number
}

export type ModelParticleObstacleV7 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelFileDataV8 = {
  materials: Array<ModelMaterialDataV8>,
  meshes: Array<ModelMeshDataV8>,
  model: ModelModelDataV8,
  properties: ModelPropertyDataV8,
  cloudData: ModelCloudDataV8
}

export type ModelMaterialDataV8 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV8>,
  constants: Array<ModelConstantDataV8>
}

export type ModelTextureDataV8 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV8 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV8 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>
}

export type ModelModelDataV8 = {
  Name: string,
  Skeleton: ModelSkeletonDataV8,
  InitialPlacement: ModelTransformDataV8,
  MeshBindings: Array<ModelMeshBindingDataV8>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV8 = {
  Name: string,
  Bones: Array<ModelBoneDataV8>,
  LODType: number
}

export type ModelBoneDataV8 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV8,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV8 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV8 = {
  Mesh: number
}

export type ModelPropertyDataV8 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV8>
}

export type ModelFloatPropertyDataV8 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV8 = {
  clouds: Array<ModelParticleCloudV8>,
  emitters: Array<ModelParticleEmitterV8>,
  obstacles: Array<ModelParticleObstacleV8>
}

export type ModelParticleCloudV8 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  flipbook: Array<ModelParticleFlipbookV8>,
  materialIndex: number,
  obstacleIndices: Array<number>,
  opacityCurveType: number,
  opacityKeys: Array<Array<number>>,
  scaleCurveType: number,
  scaleKeys: Array<Array<number>>
}

export type ModelParticleFlipbookV8 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleEmitterV8 = {
  acceleration: Array<Array<number>>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  flags: number,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  visBoneIndex: number
}

export type ModelParticleObstacleV8 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelFileDataV9 = {
  materials: Array<ModelMaterialDataV9>,
  meshes: Array<ModelMeshDataV9>,
  model: ModelModelDataV9,
  properties: ModelPropertyDataV9,
  cloudData: ModelCloudDataV9
}

export type ModelMaterialDataV9 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV9>,
  constants: Array<ModelConstantDataV9>
}

export type ModelTextureDataV9 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV9 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV9 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>
}

export type ModelModelDataV9 = {
  Name: string,
  Skeleton: ModelSkeletonDataV9,
  InitialPlacement: ModelTransformDataV9,
  MeshBindings: Array<ModelMeshBindingDataV9>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV9 = {
  Name: string,
  Bones: Array<ModelBoneDataV9>,
  LODType: number
}

export type ModelBoneDataV9 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV9,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV9 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV9 = {
  Mesh: number
}

export type ModelPropertyDataV9 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV9>
}

export type ModelFloatPropertyDataV9 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV9 = {
  clouds: Array<ModelParticleCloudV9>,
  emitters: Array<ModelParticleEmitterV9>,
  obstacles: Array<ModelParticleObstacleV9>
}

export type ModelParticleCloudV9 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  flipbook: Array<ModelParticleFlipbookV9>,
  materialIndex: number,
  obstacleIndices: Array<number>,
  opacityCurveType: number,
  opacityKeys: Array<Array<number>>,
  scaleCurveType: number,
  scaleKeys: Array<Array<number>>
}

export type ModelParticleFlipbookV9 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleEmitterV9 = {
  acceleration: Array<Array<number>>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  flags: number,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  visBoneIndex: number
}

export type ModelParticleObstacleV9 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelFileDataV10 = {
  materials: Array<ModelMaterialDataV10>,
  meshes: Array<ModelMeshDataV10>,
  model: ModelModelDataV10,
  properties: ModelPropertyDataV10,
  cloudData: ModelCloudDataV10,
  streakData: ModelStreakDataV10
}

export type ModelMaterialDataV10 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV10>,
  constants: Array<ModelConstantDataV10>
}

export type ModelTextureDataV10 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV10 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV10 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>
}

export type ModelModelDataV10 = {
  Name: string,
  Skeleton: ModelSkeletonDataV10,
  InitialPlacement: ModelTransformDataV10,
  MeshBindings: Array<ModelMeshBindingDataV10>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV10 = {
  Name: string,
  Bones: Array<ModelBoneDataV10>,
  LODType: number
}

export type ModelBoneDataV10 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV10,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV10 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV10 = {
  Mesh: number
}

export type ModelPropertyDataV10 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV10>
}

export type ModelFloatPropertyDataV10 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV10 = {
  clouds: Array<ModelParticleCloudV10>,
  emitters: Array<ModelParticleEmitterV10>,
  obstacles: Array<ModelParticleObstacleV10>
}

export type ModelParticleCloudV10 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  flipbook: Array<ModelParticleFlipbookV10>,
  materialIndex: number,
  obstacleIndices: Array<number>,
  opacityCurveType: number,
  opacityKeys: Array<Array<number>>,
  scaleCurveType: number,
  scaleKeys: Array<Array<number>>
}

export type ModelParticleFlipbookV10 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleEmitterV10 = {
  acceleration: Array<Array<number>>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  flags: number,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  visBoneIndex: number
}

export type ModelParticleObstacleV10 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV10 = {
  streaks: Array<ModelStreakV10>,
  anchors: Array<ModelStreakAnchorV10>
}

export type ModelStreakV10 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV10 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelFileDataV11 = {
  materials: Array<ModelMaterialDataV11>,
  meshes: Array<ModelMeshDataV11>,
  model: ModelModelDataV11,
  properties: ModelPropertyDataV11,
  cloudData: ModelCloudDataV11,
  streakData: ModelStreakDataV11
}

export type ModelMaterialDataV11 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV11>,
  constants: Array<ModelConstantDataV11>
}

export type ModelTextureDataV11 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV11 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV11 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>
}

export type ModelModelDataV11 = {
  Name: string,
  Skeleton: ModelSkeletonDataV11,
  InitialPlacement: ModelTransformDataV11,
  MeshBindings: Array<ModelMeshBindingDataV11>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV11 = {
  Name: string,
  Bones: Array<ModelBoneDataV11>,
  LODType: number
}

export type ModelBoneDataV11 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV11,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV11 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV11 = {
  Mesh: number
}

export type ModelPropertyDataV11 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV11>
}

export type ModelFloatPropertyDataV11 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV11 = {
  clouds: Array<ModelParticleCloudV11>,
  emitters: Array<ModelParticleEmitterV11>,
  obstacles: Array<ModelParticleObstacleV11>
}

export type ModelParticleCloudV11 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV11 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV11,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV11,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV11,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV11 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV11 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV11 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV11 = {
  streaks: Array<ModelStreakV11>,
  anchors: Array<ModelStreakAnchorV11>
}

export type ModelStreakV11 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV11 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelFileDataV12 = {
  materials: Array<ModelMaterialDataV12>,
  meshes: Array<ModelMeshDataV12>,
  model: ModelModelDataV12,
  properties: ModelPropertyDataV12,
  cloudData: ModelCloudDataV12,
  streakData: ModelStreakDataV12
}

export type ModelMaterialDataV12 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV12>,
  constants: Array<ModelConstantDataV12>
}

export type ModelTextureDataV12 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV12 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV12 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelModelDataV12 = {
  Name: string,
  Skeleton: ModelSkeletonDataV12,
  InitialPlacement: ModelTransformDataV12,
  MeshBindings: Array<ModelMeshBindingDataV12>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV12 = {
  Name: string,
  Bones: Array<ModelBoneDataV12>,
  LODType: number
}

export type ModelBoneDataV12 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV12,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV12 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV12 = {
  Mesh: number
}

export type ModelPropertyDataV12 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV12>
}

export type ModelFloatPropertyDataV12 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV12 = {
  clouds: Array<ModelParticleCloudV12>,
  emitters: Array<ModelParticleEmitterV12>,
  obstacles: Array<ModelParticleObstacleV12>
}

export type ModelParticleCloudV12 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV12 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV12,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV12,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV12,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV12 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV12 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV12 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV12 = {
  streaks: Array<ModelStreakV12>,
  anchors: Array<ModelStreakAnchorV12>
}

export type ModelStreakV12 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV12 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelFileDataV13 = {
  materials: Array<ModelMaterialDataV13>,
  meshes: Array<ModelMeshDataV13>,
  model: ModelModelDataV13,
  properties: ModelPropertyDataV13,
  cloudData: ModelCloudDataV13,
  streakData: ModelStreakDataV13
}

export type ModelMaterialDataV13 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV13>,
  constants: Array<ModelConstantDataV13>
}

export type ModelTextureDataV13 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV13 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV13 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelModelDataV13 = {
  Name: string,
  Skeleton: ModelSkeletonDataV13,
  InitialPlacement: ModelTransformDataV13,
  MeshBindings: Array<ModelMeshBindingDataV13>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV13 = {
  Name: string,
  Bones: Array<ModelBoneDataV13>,
  LODType: number
}

export type ModelBoneDataV13 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV13,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV13 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV13 = {
  Mesh: number
}

export type ModelPropertyDataV13 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV13>
}

export type ModelFloatPropertyDataV13 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV13 = {
  clouds: Array<ModelParticleCloudV13>,
  emitters: Array<ModelParticleEmitterV13>,
  obstacles: Array<ModelParticleObstacleV13>
}

export type ModelParticleCloudV13 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV13 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV13,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV13,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV13,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV13 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV13 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV13 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV13 = {
  streaks: Array<ModelStreakV13>,
  anchors: Array<ModelStreakAnchorV13>
}

export type ModelStreakV13 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV13 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelFileDataV14 = {
  materials: Array<ModelMaterialDataV14>,
  meshes: Array<ModelMeshDataV14>,
  model: ModelModelDataV14,
  properties: ModelPropertyDataV14,
  cloudData: ModelCloudDataV14,
  streakData: ModelStreakDataV14
}

export type ModelMaterialDataV14 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV14>,
  constants: Array<ModelConstantDataV14>
}

export type ModelTextureDataV14 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV14 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV14 = {
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>
}

export type ModelModelDataV14 = {
  Name: string,
  Skeleton: ModelSkeletonDataV14,
  InitialPlacement: ModelTransformDataV14,
  MeshBindings: Array<ModelMeshBindingDataV14>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV14 = {
  Name: string,
  Bones: Array<ModelBoneDataV14>,
  LODType: number
}

export type ModelBoneDataV14 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV14,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV14 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV14 = {
  Mesh: number
}

export type ModelPropertyDataV14 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV14>
}

export type ModelFloatPropertyDataV14 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV14 = {
  clouds: Array<ModelParticleCloudV14>,
  emitters: Array<ModelParticleEmitterV14>,
  obstacles: Array<ModelParticleObstacleV14>
}

export type ModelParticleCloudV14 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV14 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV14,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV14,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV14,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV14 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV14 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV14 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV14 = {
  streaks: Array<ModelStreakV14>,
  anchors: Array<ModelStreakAnchorV14>
}

export type ModelStreakV14 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV14 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelFileDataV15 = {
  materials: Array<ModelMaterialDataV15>,
  meshes: Array<ModelMeshDataV15>,
  model: ModelModelDataV15,
  properties: ModelPropertyDataV15,
  cloudData: ModelCloudDataV15,
  streakData: ModelStreakDataV15,
  lightData: ModelLightDataV15,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>
}

export type ModelMaterialDataV15 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV15>,
  constants: Array<ModelConstantDataV15>
}

export type ModelTextureDataV15 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV15 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV15 = {
  lods: Array<ModelMeshLodDataV15>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV15 = {
  indices: Array<number>
}

export type ModelModelDataV15 = {
  Name: string,
  Skeleton: ModelSkeletonDataV15,
  InitialPlacement: ModelTransformDataV15,
  MeshBindings: Array<ModelMeshBindingDataV15>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV15 = {
  Name: string,
  Bones: Array<ModelBoneDataV15>,
  LODType: number
}

export type ModelBoneDataV15 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV15,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV15 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV15 = {
  Mesh: number
}

export type ModelPropertyDataV15 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV15>
}

export type ModelFloatPropertyDataV15 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV15 = {
  clouds: Array<ModelParticleCloudV15>,
  emitters: Array<ModelParticleEmitterV15>,
  obstacles: Array<ModelParticleObstacleV15>
}

export type ModelParticleCloudV15 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV15 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV15,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV15,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV15,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV15 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV15 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV15 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV15 = {
  streaks: Array<ModelStreakV15>,
  anchors: Array<ModelStreakAnchorV15>
}

export type ModelStreakV15 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV15 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV15 = {
  effectLights: Array<ModelEffectLightV15>
}

export type ModelEffectLightV15 = {
  bone: BigInt,
  color: Array<number>,
  ranges: Array<number>
}

export type ModelFileDataV16 = {
  materials: Array<ModelMaterialDataV16>,
  meshes: Array<ModelMeshDataV16>,
  model: ModelModelDataV16,
  properties: ModelPropertyDataV16,
  cloudData: ModelCloudDataV16,
  streakData: ModelStreakDataV16,
  lightData: ModelLightDataV16,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>
}

export type ModelMaterialDataV16 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV16>,
  constants: Array<ModelConstantDataV16>
}

export type ModelTextureDataV16 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV16 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV16 = {
  lods: Array<ModelMeshLodDataV16>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV16 = {
  indices: Array<number>
}

export type ModelModelDataV16 = {
  Name: string,
  Skeleton: ModelSkeletonDataV16,
  InitialPlacement: ModelTransformDataV16,
  MeshBindings: Array<ModelMeshBindingDataV16>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV16 = {
  Name: string,
  Bones: Array<ModelBoneDataV16>,
  LODType: number
}

export type ModelBoneDataV16 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV16,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV16 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV16 = {
  Mesh: number
}

export type ModelPropertyDataV16 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV16>
}

export type ModelFloatPropertyDataV16 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV16 = {
  clouds: Array<ModelParticleCloudV16>,
  emitters: Array<ModelParticleEmitterV16>,
  obstacles: Array<ModelParticleObstacleV16>
}

export type ModelParticleCloudV16 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV16 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV16,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV16,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV16,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV16 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV16 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV16 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV16 = {
  streaks: Array<ModelStreakV16>,
  anchors: Array<ModelStreakAnchorV16>
}

export type ModelStreakV16 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV16 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV16 = {
  effectLights: Array<ModelEffectLightV16>
}

export type ModelEffectLightV16 = {
  bone: BigInt,
  color: Array<number>,
  ranges: Array<number>
}

export type ModelFileDataV17 = {
  materials: Array<ModelMaterialDataV17>,
  meshes: Array<ModelMeshDataV17>,
  model: ModelModelDataV17,
  properties: ModelPropertyDataV17,
  cloudData: ModelCloudDataV17,
  streakData: ModelStreakDataV17,
  lightData: ModelLightDataV17,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV17 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV17>,
  constants: Array<ModelConstantDataV17>
}

export type ModelTextureDataV17 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV17 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV17 = {
  lods: Array<ModelMeshLodDataV17>,
  morphTargets: Array<ModelMeshMorphTargetV17>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV17 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV17 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>
}

export type ModelModelDataV17 = {
  Name: string,
  Skeleton: ModelSkeletonDataV17,
  InitialPlacement: ModelTransformDataV17,
  MeshBindings: Array<ModelMeshBindingDataV17>,
  boneFlags: Array<number>
}

export type ModelSkeletonDataV17 = {
  Name: string,
  Bones: Array<ModelBoneDataV17>,
  LODType: number
}

export type ModelBoneDataV17 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV17,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV17 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV17 = {
  Mesh: number
}

export type ModelPropertyDataV17 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV17>
}

export type ModelFloatPropertyDataV17 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV17 = {
  clouds: Array<ModelParticleCloudV17>,
  emitters: Array<ModelParticleEmitterV17>,
  obstacles: Array<ModelParticleObstacleV17>
}

export type ModelParticleCloudV17 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV17 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV17,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV17,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV17,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV17 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV17 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV17 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV17 = {
  streaks: Array<ModelStreakV17>,
  anchors: Array<ModelStreakAnchorV17>
}

export type ModelStreakV17 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV17 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV17 = {
  effectLights: Array<ModelEffectLightV17>
}

export type ModelEffectLightV17 = {
  bone: BigInt,
  color: Array<number>,
  ranges: Array<number>
}

export type ModelFileDataV18 = {
  materials: Array<ModelMaterialDataV18>,
  meshes: Array<ModelMeshDataV18>,
  model: ModelModelDataV18,
  properties: ModelPropertyDataV18,
  cloudData: ModelCloudDataV18,
  streakData: ModelStreakDataV18,
  lightData: ModelLightDataV18,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV18 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV18>,
  constants: Array<ModelConstantDataV18>
}

export type ModelTextureDataV18 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV18 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV18 = {
  lods: Array<ModelMeshLodDataV18>,
  morphTargets: Array<ModelMeshMorphTargetV18>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV18 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV18 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV18 = {
  Name: string,
  Skeleton: ModelSkeletonDataV18,
  InitialPlacement: ModelTransformDataV18,
  MeshBindings: Array<ModelMeshBindingDataV18>,
  boneFlags: Array<number>,
  trackMasks: Array<ModelTrackMaskV18>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV18 = {
  Name: string,
  Bones: Array<ModelBoneDataV18>,
  LODType: number
}

export type ModelBoneDataV18 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV18,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV18 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV18 = {
  Mesh: number
}

export type ModelTrackMaskV18 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type PackGrannyTrackMaskType = {
  trackMask: Array<number>
}

export type ModelPropertyDataV18 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV18>
}

export type ModelFloatPropertyDataV18 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV18 = {
  clouds: Array<ModelParticleCloudV18>,
  emitters: Array<ModelParticleEmitterV18>,
  obstacles: Array<ModelParticleObstacleV18>
}

export type ModelParticleCloudV18 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV18 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV18,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV18,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV18,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV18 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV18 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV18 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV18 = {
  streaks: Array<ModelStreakV18>,
  anchors: Array<ModelStreakAnchorV18>
}

export type ModelStreakV18 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV18 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV18 = {
  effectLights: Array<ModelEffectLightV18>
}

export type ModelEffectLightV18 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelFileDataV19 = {
  materials: Array<ModelMaterialDataV19>,
  meshes: Array<ModelMeshDataV19>,
  model: ModelModelDataV19,
  properties: ModelPropertyDataV19,
  cloudData: ModelCloudDataV19,
  streakData: ModelStreakDataV19,
  lightData: ModelLightDataV19,
  clothData: Array<ModelClothDataV19>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV19 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV19>,
  constants: Array<ModelConstantDataV19>
}

export type ModelTextureDataV19 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV19 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV19 = {
  lods: Array<ModelMeshLodDataV19>,
  morphTargets: Array<ModelMeshMorphTargetV19>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV19 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV19 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV19 = {
  Name: string,
  Skeleton: ModelSkeletonDataV19,
  InitialPlacement: ModelTransformDataV19,
  MeshBindings: Array<ModelMeshBindingDataV19>,
  boneFlags: Array<number>,
  trackMasks: Array<ModelTrackMaskV19>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV19 = {
  Name: string,
  Bones: Array<ModelBoneDataV19>,
  LODType: number
}

export type ModelBoneDataV19 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV19,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV19 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV19 = {
  Mesh: number
}

export type ModelTrackMaskV19 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV19 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV19>
}

export type ModelFloatPropertyDataV19 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV19 = {
  clouds: Array<ModelParticleCloudV19>,
  emitters: Array<ModelParticleEmitterV19>,
  obstacles: Array<ModelParticleObstacleV19>
}

export type ModelParticleCloudV19 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV19 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV19,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV19,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV19,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV19 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV19 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV19 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV19 = {
  streaks: Array<ModelStreakV19>,
  anchors: Array<ModelStreakAnchorV19>
}

export type ModelStreakV19 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV19 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV19 = {
  effectLights: Array<ModelEffectLightV19>
}

export type ModelEffectLightV19 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV19 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV19>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV19>,
  lod1Constraints: Array<ModelClothConstraintV19>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type PackVertexType = {
  fvf: number,
  vertices: Array<number>
}

export type ModelClothMeshGroupV19 = {
  weights: Array<ModelClothBoneWeightV19>
}

export type ModelClothBoneWeightV19 = {
  index: number,
  weight: number
}

export type ModelClothConstraintV19 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV20 = {
  materials: Array<ModelMaterialDataV20>,
  meshes: Array<ModelMeshDataV20>,
  model: ModelModelDataV20,
  properties: ModelPropertyDataV20,
  cloudData: ModelCloudDataV20,
  streakData: ModelStreakDataV20,
  lightData: ModelLightDataV20,
  clothData: Array<ModelClothDataV20>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV20 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV20>,
  constants: Array<ModelConstantDataV20>
}

export type ModelTextureDataV20 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV20 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV20 = {
  lods: Array<ModelMeshLodDataV20>,
  morphTargets: Array<ModelMeshMorphTargetV20>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV20 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV20 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV20 = {
  Name: string,
  Skeleton: ModelSkeletonDataV20,
  InitialPlacement: ModelTransformDataV20,
  MeshBindings: Array<ModelMeshBindingDataV20>,
  boneFlags: Array<number>,
  trackMasks: Array<ModelTrackMaskV20>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV20 = {
  Name: string,
  Bones: Array<ModelBoneDataV20>,
  LODType: number
}

export type ModelBoneDataV20 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV20,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV20 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV20 = {
  Mesh: number
}

export type ModelTrackMaskV20 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV20 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV20>
}

export type ModelFloatPropertyDataV20 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV20 = {
  clouds: Array<ModelParticleCloudV20>,
  emitters: Array<ModelParticleEmitterV20>,
  obstacles: Array<ModelParticleObstacleV20>
}

export type ModelParticleCloudV20 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>
}

export type ModelParticleEmitterV20 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: Array<number>,
  colorFalloff: number,
  drag: number,
  opacityCurve: ModelParticleCurveV20,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV20,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV20,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number
}

export type ModelParticleCurveV20 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV20 = {
  columns: number,
  count: number,
  flags: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV20 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV20 = {
  streaks: Array<ModelStreakV20>,
  anchors: Array<ModelStreakAnchorV20>
}

export type ModelStreakV20 = {
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  spawnFreq: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number
}

export type ModelStreakAnchorV20 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV20 = {
  effectLights: Array<ModelEffectLightV20>
}

export type ModelEffectLightV20 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV20 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV20>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV20>,
  lod1Constraints: Array<ModelClothConstraintV20>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type ModelClothMeshGroupV20 = {
  weights: Array<ModelClothBoneWeightV20>
}

export type ModelClothBoneWeightV20 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV20 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV21 = {
  materials: Array<ModelMaterialDataV21>,
  meshes: Array<ModelMeshDataV21>,
  model: ModelModelDataV21,
  properties: ModelPropertyDataV21,
  cloudData: ModelCloudDataV21,
  streakData: ModelStreakDataV21,
  lightData: ModelLightDataV21,
  clothData: Array<ModelClothDataV21>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV21 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV21>,
  constants: Array<ModelConstantDataV21>
}

export type ModelTextureDataV21 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV21 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV21 = {
  lods: Array<ModelMeshLodDataV21>,
  morphTargets: Array<ModelMeshMorphTargetV21>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV21 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV21 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV21 = {
  Name: string,
  Skeleton: ModelSkeletonDataV21,
  InitialPlacement: ModelTransformDataV21,
  MeshBindings: Array<ModelMeshBindingDataV21>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV21>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV21 = {
  Name: string,
  Bones: Array<ModelBoneDataV21>,
  LODType: number
}

export type ModelBoneDataV21 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV21,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV21 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV21 = {
  Mesh: number
}

export type ModelTrackMaskV21 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV21 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV21>
}

export type ModelFloatPropertyDataV21 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV21 = {
  clouds: Array<ModelParticleCloudV21>,
  emitters: Array<ModelParticleEmitterV21>,
  obstacles: Array<ModelParticleObstacleV21>
}

export type ModelParticleCloudV21 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV21 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  opacityCurve: ModelParticleCurveV21,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV21,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV21,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV21 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV21 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV21 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV21 = {
  streaks: Array<ModelStreakV21>,
  anchors: Array<ModelStreakAnchorV21>
}

export type ModelStreakV21 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV21 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV21 = {
  effectLights: Array<ModelEffectLightV21>
}

export type ModelEffectLightV21 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV21 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV21>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV21>,
  lod1Constraints: Array<ModelClothConstraintV21>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type ModelClothMeshGroupV21 = {
  weights: Array<ModelClothBoneWeightV21>
}

export type ModelClothBoneWeightV21 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV21 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV22 = {
  materials: Array<ModelMaterialDataV22>,
  meshes: Array<ModelMeshDataV22>,
  model: ModelModelDataV22,
  properties: ModelPropertyDataV22,
  cloudData: ModelCloudDataV22,
  streakData: ModelStreakDataV22,
  lightData: ModelLightDataV22,
  clothData: Array<ModelClothDataV22>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV22 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV22>,
  constants: Array<ModelConstantDataV22>
}

export type ModelTextureDataV22 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV22 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV22 = {
  lods: Array<ModelMeshLodDataV22>,
  morphTargets: Array<ModelMeshMorphTargetV22>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV22 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV22 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV22 = {
  Name: string,
  Skeleton: ModelSkeletonDataV22,
  InitialPlacement: ModelTransformDataV22,
  MeshBindings: Array<ModelMeshBindingDataV22>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV22>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV22 = {
  Name: string,
  Bones: Array<ModelBoneDataV22>,
  LODType: number
}

export type ModelBoneDataV22 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV22,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV22 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV22 = {
  Mesh: number
}

export type ModelTrackMaskV22 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV22 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV22>
}

export type ModelFloatPropertyDataV22 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV22 = {
  clouds: Array<ModelParticleCloudV22>,
  emitters: Array<ModelParticleEmitterV22>,
  obstacles: Array<ModelParticleObstacleV22>
}

export type ModelParticleCloudV22 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV22 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  opacityCurve: ModelParticleCurveV22,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV22,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV22,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV22 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV22 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelParticleObstacleV22 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV22 = {
  streaks: Array<ModelStreakV22>,
  anchors: Array<ModelStreakAnchorV22>
}

export type ModelStreakV22 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV22 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV22 = {
  effectLights: Array<ModelEffectLightV22>
}

export type ModelEffectLightV22 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV22 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV22>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV22>,
  lod1Constraints: Array<ModelClothConstraintV22>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type ModelClothMeshGroupV22 = {
  weights: Array<ModelClothBoneWeightV22>
}

export type ModelClothBoneWeightV22 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV22 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV23 = {
  materials: Array<ModelMaterialDataV23>,
  meshes: Array<ModelMeshDataV23>,
  model: ModelModelDataV23,
  properties: ModelPropertyDataV23,
  cloudData: ModelCloudDataV23,
  obstacles: Array<ModelObstacleDataV23>,
  streakData: ModelStreakDataV23,
  lightData: ModelLightDataV23,
  clothData: Array<ModelClothDataV23>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV23 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV23>,
  constants: Array<ModelConstantDataV23>
}

export type ModelTextureDataV23 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV23 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV23 = {
  lods: Array<ModelMeshLodDataV23>,
  morphTargets: Array<ModelMeshMorphTargetV23>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV23 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV23 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV23 = {
  Name: string,
  Skeleton: ModelSkeletonDataV23,
  InitialPlacement: ModelTransformDataV23,
  MeshBindings: Array<ModelMeshBindingDataV23>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV23>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV23 = {
  Name: string,
  Bones: Array<ModelBoneDataV23>,
  LODType: number
}

export type ModelBoneDataV23 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV23,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV23 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV23 = {
  Mesh: number
}

export type ModelTrackMaskV23 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV23 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV23>
}

export type ModelFloatPropertyDataV23 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV23 = {
  clouds: Array<ModelParticleCloudV23>,
  emitters: Array<ModelParticleEmitterV23>
}

export type ModelParticleCloudV23 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV23 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  opacityCurve: ModelParticleCurveV23,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV23,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV23,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV23 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV23 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV23 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV23 = {
  streaks: Array<ModelStreakV23>,
  anchors: Array<ModelStreakAnchorV23>
}

export type ModelStreakV23 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV23 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV23 = {
  effectLights: Array<ModelEffectLightV23>
}

export type ModelEffectLightV23 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV23 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV23>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV23>,
  lod1Constraints: Array<ModelClothConstraintV23>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type ModelClothMeshGroupV23 = {
  weights: Array<ModelClothBoneWeightV23>
}

export type ModelClothBoneWeightV23 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV23 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV24 = {
  materials: Array<ModelMaterialDataV24>,
  meshes: Array<ModelMeshDataV24>,
  model: ModelModelDataV24,
  properties: ModelPropertyDataV24,
  cloudData: ModelCloudDataV24,
  obstacles: Array<ModelObstacleDataV24>,
  streakData: ModelStreakDataV24,
  lightData: ModelLightDataV24,
  clothData: Array<ModelClothDataV24>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV24 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV24>,
  constants: Array<ModelConstantDataV24>
}

export type ModelTextureDataV24 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV24 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV24 = {
  lods: Array<ModelMeshLodDataV24>,
  morphTargets: Array<ModelMeshMorphTargetV24>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV24 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV24 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV24 = {
  Name: string,
  Skeleton: ModelSkeletonDataV24,
  InitialPlacement: ModelTransformDataV24,
  MeshBindings: Array<ModelMeshBindingDataV24>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV24>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV24 = {
  Name: string,
  Bones: Array<ModelBoneDataV24>,
  LODType: number
}

export type ModelBoneDataV24 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV24,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV24 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV24 = {
  Mesh: number
}

export type ModelTrackMaskV24 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV24 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV24>
}

export type ModelFloatPropertyDataV24 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV24 = {
  clouds: Array<ModelParticleCloudV24>,
  emitters: Array<ModelParticleEmitterV24>
}

export type ModelParticleCloudV24 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV24 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV24,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV24,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV24,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV24 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV24 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV24 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV24 = {
  streaks: Array<ModelStreakV24>,
  anchors: Array<ModelStreakAnchorV24>
}

export type ModelStreakV24 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV24 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV24 = {
  effectLights: Array<ModelEffectLightV24>
}

export type ModelEffectLightV24 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV24 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV24>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV24>,
  lod1Constraints: Array<ModelClothConstraintV24>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type ModelClothMeshGroupV24 = {
  weights: Array<ModelClothBoneWeightV24>
}

export type ModelClothBoneWeightV24 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV24 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV25 = {
  materials: Array<ModelMaterialDataV25>,
  meshes: Array<ModelMeshDataV25>,
  model: ModelModelDataV25,
  properties: ModelPropertyDataV25,
  cloudData: ModelCloudDataV25,
  obstacles: Array<ModelObstacleDataV25>,
  streakData: ModelStreakDataV25,
  lightData: ModelLightDataV25,
  clothData: Array<ModelClothDataV25>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV25 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV25>,
  constants: Array<ModelConstantDataV25>
}

export type ModelTextureDataV25 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV25 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV25 = {
  lods: Array<ModelMeshLodDataV25>,
  morphTargets: Array<ModelMeshMorphTargetV25>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV25 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV25 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV25 = {
  Name: string,
  Skeleton: ModelSkeletonDataV25,
  InitialPlacement: ModelTransformDataV25,
  MeshBindings: Array<ModelMeshBindingDataV25>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV25>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV25 = {
  Name: string,
  Bones: Array<ModelBoneDataV25>,
  LODType: number
}

export type ModelBoneDataV25 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV25,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV25 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV25 = {
  Mesh: number
}

export type ModelTrackMaskV25 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV25 = {
  boolTokens: Array<BigInt>,
  floatValues: Array<ModelFloatPropertyDataV25>
}

export type ModelFloatPropertyDataV25 = {
  token: BigInt,
  value: number
}

export type ModelCloudDataV25 = {
  clouds: Array<ModelParticleCloudV25>,
  emitters: Array<ModelParticleEmitterV25>
}

export type ModelParticleCloudV25 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV25 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV25,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV25,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV25,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV25 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV25 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV25 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV25 = {
  streaks: Array<ModelStreakV25>,
  anchors: Array<ModelStreakAnchorV25>
}

export type ModelStreakV25 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV25 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV25 = {
  effectLights: Array<ModelEffectLightV25>
}

export type ModelEffectLightV25 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV25 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV25>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV25>,
  lod1Constraints: Array<ModelClothConstraintV25>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type ModelClothMeshGroupV25 = {
  weights: Array<ModelClothBoneWeightV25>
}

export type ModelClothBoneWeightV25 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV25 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV26 = {
  materials: Array<ModelMaterialDataV26>,
  meshes: Array<ModelMeshDataV26>,
  model: ModelModelDataV26,
  properties: Array<ModelPropertyDataV26>,
  cloudData: ModelCloudDataV26,
  obstacles: Array<ModelObstacleDataV26>,
  streakData: ModelStreakDataV26,
  lightData: ModelLightDataV26,
  clothData: Array<ModelClothDataV26>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV26 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV26>,
  constants: Array<ModelConstantDataV26>
}

export type ModelTextureDataV26 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV26 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV26 = {
  lods: Array<ModelMeshLodDataV26>,
  morphTargets: Array<ModelMeshMorphTargetV26>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>
}

export type ModelMeshLodDataV26 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV26 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV26 = {
  Name: string,
  Skeleton: ModelSkeletonDataV26,
  InitialPlacement: ModelTransformDataV26,
  MeshBindings: Array<ModelMeshBindingDataV26>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV26>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV26 = {
  Name: string,
  Bones: Array<ModelBoneDataV26>,
  LODType: number
}

export type ModelBoneDataV26 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV26,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV26 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV26 = {
  Mesh: number
}

export type ModelTrackMaskV26 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV26 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV26 = {
  clouds: Array<ModelParticleCloudV26>,
  emitters: Array<ModelParticleEmitterV26>
}

export type ModelParticleCloudV26 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV26 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV26,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV26,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV26,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV26 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV26 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV26 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV26 = {
  streaks: Array<ModelStreakV26>,
  anchors: Array<ModelStreakAnchorV26>
}

export type ModelStreakV26 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV26 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV26 = {
  effectLights: Array<ModelEffectLightV26>
}

export type ModelEffectLightV26 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV26 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV26>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV26>,
  lod1Constraints: Array<ModelClothConstraintV26>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type ModelClothMeshGroupV26 = {
  weights: Array<ModelClothBoneWeightV26>
}

export type ModelClothBoneWeightV26 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV26 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV27 = {
  materials: Array<ModelMaterialDataV27>,
  meshes: Array<ModelMeshDataV27>,
  model: ModelModelDataV27,
  properties: Array<ModelPropertyDataV27>,
  cloudData: ModelCloudDataV27,
  obstacles: Array<ModelObstacleDataV27>,
  streakData: ModelStreakDataV27,
  lightData: ModelLightDataV27,
  clothData: Array<ModelClothDataV27>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV27 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV27>,
  constants: Array<ModelConstantDataV27>
}

export type ModelTextureDataV27 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV27 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV27 = {
  lods: Array<ModelMeshLodDataV27>,
  morphTargets: Array<ModelMeshMorphTargetV27>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>,
  meshName: BigInt
}

export type ModelMeshLodDataV27 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV27 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV27 = {
  Name: string,
  Skeleton: ModelSkeletonDataV27,
  InitialPlacement: ModelTransformDataV27,
  MeshBindings: Array<ModelMeshBindingDataV27>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV27>,
  skeletonHash: Array<number>
}

export type ModelSkeletonDataV27 = {
  Name: string,
  Bones: Array<ModelBoneDataV27>,
  LODType: number
}

export type ModelBoneDataV27 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV27,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV27 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV27 = {
  Mesh: number
}

export type ModelTrackMaskV27 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV27 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV27 = {
  clouds: Array<ModelParticleCloudV27>,
  emitters: Array<ModelParticleEmitterV27>
}

export type ModelParticleCloudV27 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV27 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV27,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV27,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV27,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV27 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV27 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV27 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV27 = {
  streaks: Array<ModelStreakV27>,
  anchors: Array<ModelStreakAnchorV27>
}

export type ModelStreakV27 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV27 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV27 = {
  effectLights: Array<ModelEffectLightV27>
}

export type ModelEffectLightV27 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV27 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV27>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV27>,
  lod1Constraints: Array<ModelClothConstraintV27>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type ModelClothMeshGroupV27 = {
  weights: Array<ModelClothBoneWeightV27>
}

export type ModelClothBoneWeightV27 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV27 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV28 = {
  materials: Array<ModelMaterialDataV28>,
  meshes: Array<ModelMeshDataV28>,
  model: ModelModelDataV28,
  properties: Array<ModelPropertyDataV28>,
  cloudData: ModelCloudDataV28,
  obstacles: Array<ModelObstacleDataV28>,
  streakData: ModelStreakDataV28,
  lightData: ModelLightDataV28,
  clothData: Array<ModelClothDataV28>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV28 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV28>,
  constants: Array<ModelConstantDataV28>
}

export type ModelTextureDataV28 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV28 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMeshDataV28 = {
  lods: Array<ModelMeshLodDataV28>,
  morphTargets: Array<ModelMeshMorphTargetV28>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV28 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV28 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV28 = {
  Name: string,
  Skeleton: ModelSkeletonDataV28,
  InitialPlacement: ModelTransformDataV28,
  MeshBindings: Array<ModelMeshBindingDataV28>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV28>,
  skeletonHash: Array<number>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV28 = {
  Name: string,
  Bones: Array<ModelBoneDataV28>,
  LODType: number
}

export type ModelBoneDataV28 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV28,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV28 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV28 = {
  Mesh: number
}

export type ModelTrackMaskV28 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV28 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV28 = {
  clouds: Array<ModelParticleCloudV28>,
  emitters: Array<ModelParticleEmitterV28>
}

export type ModelParticleCloudV28 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV28 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV28,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV28,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV28,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV28 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV28 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV28 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV28 = {
  streaks: Array<ModelStreakV28>,
  anchors: Array<ModelStreakAnchorV28>
}

export type ModelStreakV28 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV28 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV28 = {
  effectLights: Array<ModelEffectLightV28>
}

export type ModelEffectLightV28 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV28 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV28>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV28>,
  lod1Constraints: Array<ModelClothConstraintV28>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>
}

export type ModelClothMeshGroupV28 = {
  weights: Array<ModelClothBoneWeightV28>
}

export type ModelClothBoneWeightV28 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV28 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelFileDataV29 = {
  materials: Array<ModelMaterialDataV29>,
  meshes: Array<ModelMeshDataV29>,
  model: ModelModelDataV29,
  properties: Array<ModelPropertyDataV29>,
  cloudData: ModelCloudDataV29,
  obstacles: Array<ModelObstacleDataV29>,
  streakData: ModelStreakDataV29,
  lightData: ModelLightDataV29,
  clothData: Array<ModelClothDataV29>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV29 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV29>,
  constants: Array<ModelConstantDataV29>,
  matConstLinks: Array<ModelMatConstLinkV29>,
  uvTransLinks: Array<ModelUVTransLinkV29>
}

export type ModelTextureDataV29 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV29 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV29 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV29 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV29 = {
  lods: Array<ModelMeshLodDataV29>,
  morphTargets: Array<ModelMeshMorphTargetV29>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV29 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV29 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV29 = {
  Name: string,
  Skeleton: ModelSkeletonDataV29,
  InitialPlacement: ModelTransformDataV29,
  MeshBindings: Array<ModelMeshBindingDataV29>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV29>,
  skeletonHash: Array<number>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV29 = {
  Name: string,
  Bones: Array<ModelBoneDataV29>,
  LODType: number
}

export type ModelBoneDataV29 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV29,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV29 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV29 = {
  Mesh: number
}

export type ModelTrackMaskV29 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV29 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV29 = {
  clouds: Array<ModelParticleCloudV29>,
  emitters: Array<ModelParticleEmitterV29>
}

export type ModelParticleCloudV29 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV29 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV29,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV29,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV29,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV29 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV29 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV29 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV29 = {
  streaks: Array<ModelStreakV29>,
  anchors: Array<ModelStreakAnchorV29>
}

export type ModelStreakV29 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV29 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV29 = {
  effectLights: Array<ModelEffectLightV29>
}

export type ModelEffectLightV29 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV29 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV29>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV29>,
  lod1Constraints: Array<ModelClothConstraintV29>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV29>
}

export type ModelClothMeshGroupV29 = {
  weights: Array<ModelClothBoneWeightV29>
}

export type ModelClothBoneWeightV29 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV29 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV29 = {
  bone: BigInt,
  type: number
}

export type ModelFileDataV30 = {
  materials: Array<ModelMaterialDataV30>,
  meshes: Array<ModelMeshDataV30>,
  model: ModelModelDataV30,
  properties: Array<ModelPropertyDataV30>,
  cloudData: ModelCloudDataV30,
  obstacles: Array<ModelObstacleDataV30>,
  streakData: ModelStreakDataV30,
  lightData: ModelLightDataV30,
  clothData: Array<ModelClothDataV30>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV30 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV30>,
  constants: Array<ModelConstantDataV30>,
  matConstLinks: Array<ModelMatConstLinkV30>,
  uvTransLinks: Array<ModelUVTransLinkV30>
}

export type ModelTextureDataV30 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV30 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV30 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV30 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV30 = {
  lods: Array<ModelMeshLodDataV30>,
  morphTargets: Array<ModelMeshMorphTargetV30>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV30 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV30 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV30 = {
  Name: string,
  Skeleton: ModelSkeletonDataV30,
  InitialPlacement: ModelTransformDataV30,
  MeshBindings: Array<ModelMeshBindingDataV30>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV30>,
  skeletonHash: Array<number>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV30 = {
  Name: string,
  Bones: Array<ModelBoneDataV30>,
  LODType: number
}

export type ModelBoneDataV30 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV30,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV30 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV30 = {
  Mesh: number
}

export type ModelTrackMaskV30 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV30 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV30 = {
  clouds: Array<ModelParticleCloudV30>,
  emitters: Array<ModelParticleEmitterV30>
}

export type ModelParticleCloudV30 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV30 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV30,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV30,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV30,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV30 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV30 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV30 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV30 = {
  streaks: Array<ModelStreakV30>,
  anchors: Array<ModelStreakAnchorV30>
}

export type ModelStreakV30 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  stretchDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV30 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number
}

export type ModelLightDataV30 = {
  effectLights: Array<ModelEffectLightV30>
}

export type ModelEffectLightV30 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV30 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV30>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV30>,
  lod1Constraints: Array<ModelClothConstraintV30>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV30>
}

export type ModelClothMeshGroupV30 = {
  weights: Array<ModelClothBoneWeightV30>
}

export type ModelClothBoneWeightV30 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV30 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV30 = {
  bone: BigInt,
  type: number
}

export type ModelFileDataV31 = {
  materials: Array<ModelMaterialDataV31>,
  meshes: Array<ModelMeshDataV31>,
  model: ModelModelDataV31,
  properties: Array<ModelPropertyDataV31>,
  cloudData: ModelCloudDataV31,
  obstacles: Array<ModelObstacleDataV31>,
  streakData: ModelStreakDataV31,
  lightData: ModelLightDataV31,
  clothData: Array<ModelClothDataV31>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string
}

export type ModelMaterialDataV31 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV31>,
  constants: Array<ModelConstantDataV31>,
  matConstLinks: Array<ModelMatConstLinkV31>,
  uvTransLinks: Array<ModelUVTransLinkV31>
}

export type ModelTextureDataV31 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV31 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV31 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV31 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV31 = {
  lods: Array<ModelMeshLodDataV31>,
  morphTargets: Array<ModelMeshMorphTargetV31>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV31 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV31 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV31 = {
  Name: string,
  Skeleton: ModelSkeletonDataV31,
  InitialPlacement: ModelTransformDataV31,
  MeshBindings: Array<ModelMeshBindingDataV31>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV31>,
  skeletonHash: Array<number>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV31 = {
  Name: string,
  Bones: Array<ModelBoneDataV31>,
  LODType: number
}

export type ModelBoneDataV31 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV31,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV31 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV31 = {
  Mesh: number
}

export type ModelTrackMaskV31 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV31 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV31 = {
  clouds: Array<ModelParticleCloudV31>,
  emitters: Array<ModelParticleEmitterV31>
}

export type ModelParticleCloudV31 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV31 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV31,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV31,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV31,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV31 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV31 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV31 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV31 = {
  streaks: Array<ModelStreakV31>,
  anchors: Array<ModelStreakAnchorV31>
}

export type ModelStreakV31 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV31 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV31 = {
  effectLights: Array<ModelEffectLightV31>
}

export type ModelEffectLightV31 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV31 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV31>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV31>,
  lod1Constraints: Array<ModelClothConstraintV31>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV31>
}

export type ModelClothMeshGroupV31 = {
  weights: Array<ModelClothBoneWeightV31>
}

export type ModelClothBoneWeightV31 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV31 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV31 = {
  bone: BigInt,
  type: number
}

export type ModelFileDataV32 = {
  materials: Array<ModelMaterialDataV32>,
  meshes: Array<ModelMeshDataV32>,
  model: ModelModelDataV32,
  properties: Array<ModelPropertyDataV32>,
  cloudData: ModelCloudDataV32,
  obstacles: Array<ModelObstacleDataV32>,
  streakData: ModelStreakDataV32,
  lightData: ModelLightDataV32,
  clothData: Array<ModelClothDataV32>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV32
}

export type ModelMaterialDataV32 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV32>,
  constants: Array<ModelConstantDataV32>,
  matConstLinks: Array<ModelMatConstLinkV32>,
  uvTransLinks: Array<ModelUVTransLinkV32>
}

export type ModelTextureDataV32 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV32 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV32 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV32 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV32 = {
  lods: Array<ModelMeshLodDataV32>,
  morphTargets: Array<ModelMeshMorphTargetV32>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV32 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV32 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV32 = {
  Name: string,
  Skeleton: ModelSkeletonDataV32,
  InitialPlacement: ModelTransformDataV32,
  MeshBindings: Array<ModelMeshBindingDataV32>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV32>,
  skeletonHash: Array<number>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV32 = {
  Name: string,
  Bones: Array<ModelBoneDataV32>,
  LODType: number
}

export type ModelBoneDataV32 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV32,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV32 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV32 = {
  Mesh: number
}

export type ModelTrackMaskV32 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV32 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV32 = {
  clouds: Array<ModelParticleCloudV32>,
  emitters: Array<ModelParticleEmitterV32>
}

export type ModelParticleCloudV32 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV32 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV32,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV32,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV32,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV32 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV32 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV32 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV32 = {
  streaks: Array<ModelStreakV32>,
  anchors: Array<ModelStreakAnchorV32>
}

export type ModelStreakV32 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV32 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV32 = {
  effectLights: Array<ModelEffectLightV32>
}

export type ModelEffectLightV32 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV32 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV32>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV32>,
  lod1Constraints: Array<ModelClothConstraintV32>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV32>
}

export type ModelClothMeshGroupV32 = {
  weights: Array<ModelClothBoneWeightV32>
}

export type ModelClothBoneWeightV32 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV32 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV32 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV32 = {
  systems: Array<ModelLightningSystemV32>,
  bolts: Array<ModelLightningBoltV32>,
  nodes: Array<ModelLightningNodeV32>
}

export type ModelLightningSystemV32 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV32 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: number,
  colorEnd: number,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV32 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  visBoneIndex: number
}

export type ModelFileDataV33 = {
  materials: Array<ModelMaterialDataV33>,
  meshes: Array<ModelMeshDataV33>,
  model: ModelModelDataV33,
  properties: Array<ModelPropertyDataV33>,
  cloudData: ModelCloudDataV33,
  obstacles: Array<ModelObstacleDataV33>,
  streakData: ModelStreakDataV33,
  lightData: ModelLightDataV33,
  clothData: Array<ModelClothDataV33>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV33,
  boneConstraints: Array<ModelBoneConstraintV33>
}

export type ModelMaterialDataV33 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV33>,
  constants: Array<ModelConstantDataV33>,
  matConstLinks: Array<ModelMatConstLinkV33>,
  uvTransLinks: Array<ModelUVTransLinkV33>
}

export type ModelTextureDataV33 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV33 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV33 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV33 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV33 = {
  lods: Array<ModelMeshLodDataV33>,
  morphTargets: Array<ModelMeshMorphTargetV33>,
  mesh: PackGrannyMeshType,
  flags: number,
  visBoneIndices: Array<number>,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV33 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV33 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV33 = {
  Name: string,
  Skeleton: ModelSkeletonDataV33,
  InitialPlacement: ModelTransformDataV33,
  MeshBindings: Array<ModelMeshBindingDataV33>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV33>,
  skeletonHash: Array<number>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV33 = {
  Name: string,
  Bones: Array<ModelBoneDataV33>,
  LODType: number
}

export type ModelBoneDataV33 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV33,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV33 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV33 = {
  Mesh: number
}

export type ModelTrackMaskV33 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV33 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV33 = {
  clouds: Array<ModelParticleCloudV33>,
  emitters: Array<ModelParticleEmitterV33>
}

export type ModelParticleCloudV33 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV33 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV33,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV33,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV33,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  visBoneIndex: number,
  windInfluence: number
}

export type ModelParticleCurveV33 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV33 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV33 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number,
  visBoneIndex: number
}

export type ModelStreakDataV33 = {
  streaks: Array<ModelStreakV33>,
  anchors: Array<ModelStreakAnchorV33>
}

export type ModelStreakV33 = {
  acceleration: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  visBoneIndex: number,
  wind: number
}

export type ModelStreakAnchorV33 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV33 = {
  effectLights: Array<ModelEffectLightV33>
}

export type ModelEffectLightV33 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number,
  visBoneIndex: number
}

export type ModelClothDataV33 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV33>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV33>,
  lod1Constraints: Array<ModelClothConstraintV33>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV33>
}

export type ModelClothMeshGroupV33 = {
  weights: Array<ModelClothBoneWeightV33>
}

export type ModelClothBoneWeightV33 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV33 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV33 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV33 = {
  systems: Array<ModelLightningSystemV33>,
  bolts: Array<ModelLightningBoltV33>,
  nodes: Array<ModelLightningNodeV33>
}

export type ModelLightningSystemV33 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV33 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: number,
  colorEnd: number,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV33 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  visBoneIndex: number
}

export type ModelBoneConstraintV33 = {
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
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelFileDataV34 = {
  materials: Array<ModelMaterialDataV34>,
  meshes: Array<ModelMeshDataV34>,
  model: ModelModelDataV34,
  properties: Array<ModelPropertyDataV34>,
  cloudData: ModelCloudDataV34,
  obstacles: Array<ModelObstacleDataV34>,
  streakData: ModelStreakDataV34,
  lightData: ModelLightDataV34,
  clothData: Array<ModelClothDataV34>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV34,
  boneConstraints: Array<ModelBoneConstraintV34>
}

export type ModelMaterialDataV34 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV34>,
  constants: Array<ModelConstantDataV34>,
  matConstLinks: Array<ModelMatConstLinkV34>,
  uvTransLinks: Array<ModelUVTransLinkV34>
}

export type ModelTextureDataV34 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV34 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV34 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV34 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV34 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV34>,
  morphTargets: Array<ModelMeshMorphTargetV34>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV34 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV34 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV34 = {
  Name: string,
  Skeleton: ModelSkeletonDataV34,
  InitialPlacement: ModelTransformDataV34,
  MeshBindings: Array<ModelMeshBindingDataV34>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV34>,
  skeletonHash: Array<number>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV34 = {
  Name: string,
  Bones: Array<ModelBoneDataV34>,
  LODType: number
}

export type ModelBoneDataV34 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV34,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV34 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV34 = {
  Mesh: number
}

export type ModelTrackMaskV34 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV34 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV34 = {
  clouds: Array<ModelParticleCloudV34>,
  emitters: Array<ModelParticleEmitterV34>
}

export type ModelParticleCloudV34 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV34 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV34,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV34,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV34,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV34 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV34 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV34 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV34 = {
  streaks: Array<ModelStreakV34>,
  anchors: Array<ModelStreakAnchorV34>
}

export type ModelStreakV34 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV34 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV34 = {
  effectLights: Array<ModelEffectLightV34>
}

export type ModelEffectLightV34 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV34 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV34>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV34>,
  lod1Constraints: Array<ModelClothConstraintV34>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV34>
}

export type ModelClothMeshGroupV34 = {
  weights: Array<ModelClothBoneWeightV34>
}

export type ModelClothBoneWeightV34 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV34 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV34 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV34 = {
  systems: Array<ModelLightningSystemV34>,
  bolts: Array<ModelLightningBoltV34>,
  nodes: Array<ModelLightningNodeV34>
}

export type ModelLightningSystemV34 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV34 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: number,
  colorEnd: number,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV34 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number
}

export type ModelBoneConstraintV34 = {
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
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelFileDataV35 = {
  materials: Array<ModelMaterialDataV35>,
  meshes: Array<ModelMeshDataV35>,
  model: ModelModelDataV35,
  properties: Array<ModelPropertyDataV35>,
  cloudData: ModelCloudDataV35,
  obstacles: Array<ModelObstacleDataV35>,
  streakData: ModelStreakDataV35,
  lightData: ModelLightDataV35,
  clothData: Array<ModelClothDataV35>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV35,
  boneConstraints: Array<ModelBoneConstraintV35>
}

export type ModelMaterialDataV35 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV35>,
  constants: Array<ModelConstantDataV35>,
  matConstLinks: Array<ModelMatConstLinkV35>,
  uvTransLinks: Array<ModelUVTransLinkV35>
}

export type ModelTextureDataV35 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV35 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV35 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV35 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV35 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV35>,
  morphTargets: Array<ModelMeshMorphTargetV35>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV35 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV35 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV35 = {
  Name: string,
  Skeleton: ModelSkeletonDataV35,
  InitialPlacement: ModelTransformDataV35,
  MeshBindings: Array<ModelMeshBindingDataV35>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV35>,
  skeletonHash: Array<number>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV35 = {
  Name: string,
  Bones: Array<ModelBoneDataV35>,
  LODType: number
}

export type ModelBoneDataV35 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV35,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV35 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV35 = {
  Mesh: number
}

export type ModelTrackMaskV35 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV35 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV35 = {
  clouds: Array<ModelParticleCloudV35>,
  emitters: Array<ModelParticleEmitterV35>
}

export type ModelParticleCloudV35 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV35 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV35,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV35,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV35,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV35 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV35 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV35 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV35 = {
  streaks: Array<ModelStreakV35>,
  anchors: Array<ModelStreakAnchorV35>
}

export type ModelStreakV35 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV35 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV35 = {
  effectLights: Array<ModelEffectLightV35>
}

export type ModelEffectLightV35 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV35 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV35>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV35>,
  lod1Constraints: Array<ModelClothConstraintV35>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV35>
}

export type ModelClothMeshGroupV35 = {
  weights: Array<ModelClothBoneWeightV35>
}

export type ModelClothBoneWeightV35 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV35 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV35 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV35 = {
  systems: Array<ModelLightningSystemV35>,
  bolts: Array<ModelLightningBoltV35>,
  nodes: Array<ModelLightningNodeV35>
}

export type ModelLightningSystemV35 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV35 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV35 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV35 = {
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
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelFileDataV36 = {
  materials: Array<ModelMaterialDataV36>,
  meshes: Array<ModelMeshDataV36>,
  model: ModelModelDataV36,
  properties: Array<ModelPropertyDataV36>,
  cloudData: ModelCloudDataV36,
  obstacles: Array<ModelObstacleDataV36>,
  streakData: ModelStreakDataV36,
  lightData: ModelLightDataV36,
  clothData: Array<ModelClothDataV36>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV36,
  boneConstraints: Array<ModelBoneConstraintV36>
}

export type ModelMaterialDataV36 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV36>,
  constants: Array<ModelConstantDataV36>,
  matConstLinks: Array<ModelMatConstLinkV36>,
  uvTransLinks: Array<ModelUVTransLinkV36>
}

export type ModelTextureDataV36 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV36 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV36 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV36 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV36 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV36>,
  morphTargets: Array<ModelMeshMorphTargetV36>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV36 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV36 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV36 = {
  Name: string,
  Skeleton: ModelSkeletonDataV36,
  InitialPlacement: ModelTransformDataV36,
  MeshBindings: Array<ModelMeshBindingDataV36>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV36>,
  skeletonHash: Array<number>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV36 = {
  Name: string,
  Bones: Array<ModelBoneDataV36>,
  LODType: number
}

export type ModelBoneDataV36 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV36,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV36 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV36 = {
  Mesh: number
}

export type ModelTrackMaskV36 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV36 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV36 = {
  clouds: Array<ModelParticleCloudV36>,
  emitters: Array<ModelParticleEmitterV36>
}

export type ModelParticleCloudV36 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV36 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV36,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV36,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV36,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV36 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV36 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV36 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV36 = {
  streaks: Array<ModelStreakV36>,
  anchors: Array<ModelStreakAnchorV36>
}

export type ModelStreakV36 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV36 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV36 = {
  effectLights: Array<ModelEffectLightV36>
}

export type ModelEffectLightV36 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV36 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV36>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV36>,
  lod1Constraints: Array<ModelClothConstraintV36>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV36>
}

export type ModelClothMeshGroupV36 = {
  weights: Array<ModelClothBoneWeightV36>
}

export type ModelClothBoneWeightV36 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV36 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV36 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV36 = {
  systems: Array<ModelLightningSystemV36>,
  bolts: Array<ModelLightningBoltV36>,
  nodes: Array<ModelLightningNodeV36>
}

export type ModelLightningSystemV36 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV36 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV36 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV36 = {
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
  links: Array<ModelBoneConstraintLinkV36>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV36 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelFileDataV37 = {
  materials: Array<ModelMaterialDataV37>,
  meshes: Array<ModelMeshDataV37>,
  model: ModelModelDataV37,
  properties: Array<ModelPropertyDataV37>,
  cloudData: ModelCloudDataV37,
  obstacles: Array<ModelObstacleDataV37>,
  streakData: ModelStreakDataV37,
  lightData: ModelLightDataV37,
  clothData: Array<ModelClothDataV37>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV37,
  boneConstraints: Array<ModelBoneConstraintV37>
}

export type ModelMaterialDataV37 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV37>,
  constants: Array<ModelConstantDataV37>,
  matConstLinks: Array<ModelMatConstLinkV37>,
  uvTransLinks: Array<ModelUVTransLinkV37>
}

export type ModelTextureDataV37 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV37 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV37 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV37 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV37 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV37>,
  morphTargets: Array<ModelMeshMorphTargetV37>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV37 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV37 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV37 = {
  Name: string,
  Skeleton: ModelSkeletonDataV37,
  InitialPlacement: ModelTransformDataV37,
  MeshBindings: Array<ModelMeshBindingDataV37>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV37>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV37 = {
  Name: string,
  Bones: Array<ModelBoneDataV37>,
  LODType: number
}

export type ModelBoneDataV37 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV37,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV37 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV37 = {
  Mesh: number
}

export type ModelTrackMaskV37 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV37 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV37 = {
  clouds: Array<ModelParticleCloudV37>,
  emitters: Array<ModelParticleEmitterV37>
}

export type ModelParticleCloudV37 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV37 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV37,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV37,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV37,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV37 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV37 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV37 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV37 = {
  streaks: Array<ModelStreakV37>,
  anchors: Array<ModelStreakAnchorV37>
}

export type ModelStreakV37 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV37 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV37 = {
  effectLights: Array<ModelEffectLightV37>
}

export type ModelEffectLightV37 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV37 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV37>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV37>,
  lod1Constraints: Array<ModelClothConstraintV37>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV37>
}

export type ModelClothMeshGroupV37 = {
  weights: Array<ModelClothBoneWeightV37>
}

export type ModelClothBoneWeightV37 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV37 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV37 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV37 = {
  systems: Array<ModelLightningSystemV37>,
  bolts: Array<ModelLightningBoltV37>,
  nodes: Array<ModelLightningNodeV37>
}

export type ModelLightningSystemV37 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV37 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV37 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV37 = {
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
  links: Array<ModelBoneConstraintLinkV37>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV37 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelFileDataV38 = {
  materials: Array<ModelMaterialDataV38>,
  meshes: Array<ModelMeshDataV38>,
  model: ModelModelDataV38,
  properties: Array<ModelPropertyDataV38>,
  cloudData: ModelCloudDataV38,
  obstacles: Array<ModelObstacleDataV38>,
  streakData: ModelStreakDataV38,
  lightData: ModelLightDataV38,
  clothData: Array<ModelClothDataV38>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV38,
  boneConstraints: Array<ModelBoneConstraintV38>
}

export type ModelMaterialDataV38 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV38>,
  constants: Array<ModelConstantDataV38>,
  matConstLinks: Array<ModelMatConstLinkV38>,
  uvTransLinks: Array<ModelUVTransLinkV38>
}

export type ModelTextureDataV38 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV38 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV38 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV38 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV38 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV38>,
  morphTargets: Array<ModelMeshMorphTargetV38>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV38 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV38 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV38 = {
  Name: string,
  Skeleton: ModelSkeletonDataV38,
  InitialPlacement: ModelTransformDataV38,
  MeshBindings: Array<ModelMeshBindingDataV38>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV38>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV38 = {
  Name: string,
  Bones: Array<ModelBoneDataV38>,
  LODType: number
}

export type ModelBoneDataV38 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV38,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV38 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV38 = {
  Mesh: number
}

export type ModelTrackMaskV38 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV38 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV38 = {
  clouds: Array<ModelParticleCloudV38>,
  emitters: Array<ModelParticleEmitterV38>
}

export type ModelParticleCloudV38 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV38 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV38,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV38,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV38,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV38 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV38 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV38 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV38 = {
  streaks: Array<ModelStreakV38>,
  anchors: Array<ModelStreakAnchorV38>
}

export type ModelStreakV38 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV38 = {
  bone: BigInt,
  color: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV38 = {
  effectLights: Array<ModelEffectLightV38>
}

export type ModelEffectLightV38 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV38 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV38>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV38>,
  lod1Constraints: Array<ModelClothConstraintV38>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV38>
}

export type ModelClothMeshGroupV38 = {
  weights: Array<ModelClothBoneWeightV38>
}

export type ModelClothBoneWeightV38 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV38 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV38 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV38 = {
  systems: Array<ModelLightningSystemV38>,
  bolts: Array<ModelLightningBoltV38>,
  nodes: Array<ModelLightningNodeV38>
}

export type ModelLightningSystemV38 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV38 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV38 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV38 = {
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
  links: Array<ModelBoneConstraintLinkV38>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV38 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelFileDataV39 = {
  materials: Array<ModelMaterialDataV39>,
  meshes: Array<ModelMeshDataV39>,
  model: ModelModelDataV39,
  properties: Array<ModelPropertyDataV39>,
  cloudData: ModelCloudDataV39,
  obstacles: Array<ModelObstacleDataV39>,
  streakData: ModelStreakDataV39,
  lightData: ModelLightDataV39,
  clothData: Array<ModelClothDataV39>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV39,
  boneConstraints: Array<ModelBoneConstraintV39>
}

export type ModelMaterialDataV39 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV39>,
  constants: Array<ModelConstantDataV39>,
  matConstLinks: Array<ModelMatConstLinkV39>,
  uvTransLinks: Array<ModelUVTransLinkV39>
}

export type ModelTextureDataV39 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV39 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV39 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV39 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV39 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV39>,
  morphTargets: Array<ModelMeshMorphTargetV39>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV39 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV39 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV39 = {
  Name: string,
  Skeleton: ModelSkeletonDataV39,
  InitialPlacement: ModelTransformDataV39,
  MeshBindings: Array<ModelMeshBindingDataV39>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV39>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV39 = {
  Name: string,
  Bones: Array<ModelBoneDataV39>,
  LODType: number
}

export type ModelBoneDataV39 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV39,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV39 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV39 = {
  Mesh: number
}

export type ModelTrackMaskV39 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV39 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV39 = {
  clouds: Array<ModelParticleCloudV39>,
  emitters: Array<ModelParticleEmitterV39>
}

export type ModelParticleCloudV39 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV39 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  opacityCurve: ModelParticleCurveV39,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV39,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV39,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV39 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV39 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV39 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV39 = {
  streaks: Array<ModelStreakV39>,
  anchors: Array<ModelStreakAnchorV39>
}

export type ModelStreakV39 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV39 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV39 = {
  effectLights: Array<ModelEffectLightV39>
}

export type ModelEffectLightV39 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV39 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV39>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV39>,
  lod1Constraints: Array<ModelClothConstraintV39>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV39>
}

export type ModelClothMeshGroupV39 = {
  weights: Array<ModelClothBoneWeightV39>
}

export type ModelClothBoneWeightV39 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV39 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV39 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV39 = {
  systems: Array<ModelLightningSystemV39>,
  bolts: Array<ModelLightningBoltV39>,
  nodes: Array<ModelLightningNodeV39>
}

export type ModelLightningSystemV39 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV39 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV39 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV39 = {
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
  links: Array<ModelBoneConstraintLinkV39>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV39 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelFileDataV40 = {
  materials: Array<ModelMaterialDataV40>,
  meshes: Array<ModelMeshDataV40>,
  model: ModelModelDataV40,
  properties: Array<ModelPropertyDataV40>,
  cloudData: ModelCloudDataV40,
  obstacles: Array<ModelObstacleDataV40>,
  streakData: ModelStreakDataV40,
  lightData: ModelLightDataV40,
  clothData: Array<ModelClothDataV40>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV40,
  boneConstraints: Array<ModelBoneConstraintV40>
}

export type ModelMaterialDataV40 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV40>,
  constants: Array<ModelConstantDataV40>,
  matConstLinks: Array<ModelMatConstLinkV40>,
  uvTransLinks: Array<ModelUVTransLinkV40>
}

export type ModelTextureDataV40 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV40 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV40 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV40 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV40 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV40>,
  morphTargets: Array<ModelMeshMorphTargetV40>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV40 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV40 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV40 = {
  Name: string,
  Skeleton: ModelSkeletonDataV40,
  InitialPlacement: ModelTransformDataV40,
  MeshBindings: Array<ModelMeshBindingDataV40>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV40>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV40 = {
  Name: string,
  Bones: Array<ModelBoneDataV40>,
  LODType: number
}

export type ModelBoneDataV40 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV40,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV40 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV40 = {
  Mesh: number
}

export type ModelTrackMaskV40 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV40 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV40 = {
  clouds: Array<ModelParticleCloudV40>,
  emitters: Array<ModelParticleEmitterV40>
}

export type ModelParticleCloudV40 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV40 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV40,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV40,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV40,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV40 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV40 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV40 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV40 = {
  streaks: Array<ModelStreakV40>,
  anchors: Array<ModelStreakAnchorV40>
}

export type ModelStreakV40 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV40 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV40 = {
  effectLights: Array<ModelEffectLightV40>
}

export type ModelEffectLightV40 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV40 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV40>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV40>,
  lod1Constraints: Array<ModelClothConstraintV40>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV40>
}

export type ModelClothMeshGroupV40 = {
  weights: Array<ModelClothBoneWeightV40>
}

export type ModelClothBoneWeightV40 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV40 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV40 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV40 = {
  systems: Array<ModelLightningSystemV40>,
  bolts: Array<ModelLightningBoltV40>,
  nodes: Array<ModelLightningNodeV40>
}

export type ModelLightningSystemV40 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV40 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV40 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV40 = {
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
  links: Array<ModelBoneConstraintLinkV40>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV40 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelFileDataV41 = {
  materials: Array<ModelMaterialDataV41>,
  meshes: Array<ModelMeshDataV41>,
  model: ModelModelDataV41,
  properties: Array<ModelPropertyDataV41>,
  cloudData: ModelCloudDataV41,
  obstacles: Array<ModelObstacleDataV41>,
  streakData: ModelStreakDataV41,
  lightData: ModelLightDataV41,
  clothData: Array<ModelClothDataV41>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV41,
  boneConstraints: Array<ModelBoneConstraintV41>,
  softBodyData: Array<ModelSoftBodyDataV41>
}

export type ModelMaterialDataV41 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV41>,
  constants: Array<ModelConstantDataV41>,
  matConstLinks: Array<ModelMatConstLinkV41>,
  uvTransLinks: Array<ModelUVTransLinkV41>
}

export type ModelTextureDataV41 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV41 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV41 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV41 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV41 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV41>,
  morphTargets: Array<ModelMeshMorphTargetV41>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV41 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV41 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV41 = {
  Name: string,
  Skeleton: ModelSkeletonDataV41,
  InitialPlacement: ModelTransformDataV41,
  MeshBindings: Array<ModelMeshBindingDataV41>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV41>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV41 = {
  Name: string,
  Bones: Array<ModelBoneDataV41>,
  LODType: number
}

export type ModelBoneDataV41 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV41,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV41 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV41 = {
  Mesh: number
}

export type ModelTrackMaskV41 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV41 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV41 = {
  clouds: Array<ModelParticleCloudV41>,
  emitters: Array<ModelParticleEmitterV41>
}

export type ModelParticleCloudV41 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV41 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV41,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV41,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV41,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV41 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV41 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV41 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV41 = {
  streaks: Array<ModelStreakV41>,
  anchors: Array<ModelStreakAnchorV41>
}

export type ModelStreakV41 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV41 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV41 = {
  effectLights: Array<ModelEffectLightV41>
}

export type ModelEffectLightV41 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV41 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV41>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV41>,
  lod1Constraints: Array<ModelClothConstraintV41>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV41>
}

export type ModelClothMeshGroupV41 = {
  weights: Array<ModelClothBoneWeightV41>
}

export type ModelClothBoneWeightV41 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV41 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV41 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV41 = {
  systems: Array<ModelLightningSystemV41>,
  bolts: Array<ModelLightningBoltV41>,
  nodes: Array<ModelLightningNodeV41>
}

export type ModelLightningSystemV41 = {
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV41 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV41 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV41 = {
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
  links: Array<ModelBoneConstraintLinkV41>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV41 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV41 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelFileDataV42 = {
  materials: Array<ModelMaterialDataV42>,
  meshes: Array<ModelMeshDataV42>,
  model: ModelModelDataV42,
  properties: Array<ModelPropertyDataV42>,
  cloudData: ModelCloudDataV42,
  obstacles: Array<ModelObstacleDataV42>,
  streakData: ModelStreakDataV42,
  lightData: ModelLightDataV42,
  clothData: Array<ModelClothDataV42>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV42,
  boneConstraints: Array<ModelBoneConstraintV42>,
  softBodyData: Array<ModelSoftBodyDataV42>
}

export type ModelMaterialDataV42 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV42>,
  constants: Array<ModelConstantDataV42>,
  matConstLinks: Array<ModelMatConstLinkV42>,
  uvTransLinks: Array<ModelUVTransLinkV42>
}

export type ModelTextureDataV42 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV42 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV42 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV42 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV42 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV42>,
  morphTargets: Array<ModelMeshMorphTargetV42>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV42 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV42 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV42 = {
  Name: string,
  Skeleton: ModelSkeletonDataV42,
  InitialPlacement: ModelTransformDataV42,
  MeshBindings: Array<ModelMeshBindingDataV42>,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV42>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV42 = {
  Name: string,
  Bones: Array<ModelBoneDataV42>,
  LODType: number
}

export type ModelBoneDataV42 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV42,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV42 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV42 = {
  Mesh: number
}

export type ModelTrackMaskV42 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV42 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV42 = {
  clouds: Array<ModelParticleCloudV42>,
  emitters: Array<ModelParticleEmitterV42>
}

export type ModelParticleCloudV42 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV42 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV42,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV42,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV42,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV42 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV42 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV42 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV42 = {
  streaks: Array<ModelStreakV42>,
  anchors: Array<ModelStreakAnchorV42>
}

export type ModelStreakV42 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV42 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV42 = {
  effectLights: Array<ModelEffectLightV42>
}

export type ModelEffectLightV42 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV42 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV42>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV42>,
  lod1Constraints: Array<ModelClothConstraintV42>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV42>
}

export type ModelClothMeshGroupV42 = {
  weights: Array<ModelClothBoneWeightV42>
}

export type ModelClothBoneWeightV42 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV42 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV42 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV42 = {
  systems: Array<ModelLightningSystemV42>,
  bolts: Array<ModelLightningBoltV42>,
  nodes: Array<ModelLightningNodeV42>
}

export type ModelLightningSystemV42 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV42 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV42 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV42 = {
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
  links: Array<ModelBoneConstraintLinkV42>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV42 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV42 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelFileDataV43 = {
  materials: Array<ModelMaterialDataV43>,
  meshes: Array<ModelMeshDataV43>,
  model: ModelModelDataV43,
  properties: Array<ModelPropertyDataV43>,
  cloudData: ModelCloudDataV43,
  obstacles: Array<ModelObstacleDataV43>,
  streakData: ModelStreakDataV43,
  lightData: ModelLightDataV43,
  clothData: Array<ModelClothDataV43>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV43,
  boneConstraints: Array<ModelBoneConstraintV43>,
  softBodyData: Array<ModelSoftBodyDataV43>
}

export type ModelMaterialDataV43 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV43>,
  constants: Array<ModelConstantDataV43>,
  matConstLinks: Array<ModelMatConstLinkV43>,
  uvTransLinks: Array<ModelUVTransLinkV43>
}

export type ModelTextureDataV43 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV43 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV43 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV43 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV43 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV43>,
  morphTargets: Array<ModelMeshMorphTargetV43>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV43 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV43 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV43 = {
  Name: string,
  Skeleton: ModelSkeletonDataV43,
  InitialPlacement: ModelTransformDataV43,
  MeshBindings: Array<ModelMeshBindingDataV43>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV43>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV43 = {
  Name: string,
  Bones: Array<ModelBoneDataV43>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV43 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV43,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV43 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV43 = {
  Mesh: number
}

export type ModelTrackMaskV43 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV43 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV43 = {
  clouds: Array<ModelParticleCloudV43>,
  emitters: Array<ModelParticleEmitterV43>
}

export type ModelParticleCloudV43 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV43 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV43,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV43,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV43,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV43 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV43 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV43 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV43 = {
  streaks: Array<ModelStreakV43>,
  anchors: Array<ModelStreakAnchorV43>
}

export type ModelStreakV43 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV43 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV43 = {
  effectLights: Array<ModelEffectLightV43>
}

export type ModelEffectLightV43 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV43 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV43>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV43>,
  lod1Constraints: Array<ModelClothConstraintV43>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV43>
}

export type ModelClothMeshGroupV43 = {
  weights: Array<ModelClothBoneWeightV43>
}

export type ModelClothBoneWeightV43 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV43 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV43 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV43 = {
  systems: Array<ModelLightningSystemV43>,
  bolts: Array<ModelLightningBoltV43>,
  nodes: Array<ModelLightningNodeV43>
}

export type ModelLightningSystemV43 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV43 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV43 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV43 = {
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
  links: Array<ModelBoneConstraintLinkV43>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV43 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV43 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelFileDataV44 = {
  materials: Array<ModelMaterialDataV44>,
  meshes: Array<ModelMeshDataV44>,
  model: ModelModelDataV44,
  properties: Array<ModelPropertyDataV44>,
  cloudData: ModelCloudDataV44,
  obstacles: Array<ModelObstacleDataV44>,
  streakData: ModelStreakDataV44,
  lightData: ModelLightDataV44,
  clothData: Array<ModelClothDataV44>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV44,
  boneConstraints: Array<ModelBoneConstraintV44>,
  softBodyData: Array<ModelSoftBodyDataV44>
}

export type ModelMaterialDataV44 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV44>,
  constants: Array<ModelConstantDataV44>,
  matConstLinks: Array<ModelMatConstLinkV44>,
  uvTransLinks: Array<ModelUVTransLinkV44>
}

export type ModelTextureDataV44 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV44 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV44 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV44 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMeshDataV44 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV44>,
  morphTargets: Array<ModelMeshMorphTargetV44>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV44 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV44 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV44 = {
  Name: string,
  Skeleton: ModelSkeletonDataV44,
  InitialPlacement: ModelTransformDataV44,
  MeshBindings: Array<ModelMeshBindingDataV44>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV44>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV44 = {
  Name: string,
  Bones: Array<ModelBoneDataV44>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV44 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV44,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV44 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV44 = {
  Mesh: number
}

export type ModelTrackMaskV44 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV44 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV44 = {
  clouds: Array<ModelParticleCloudV44>,
  emitters: Array<ModelParticleEmitterV44>
}

export type ModelParticleCloudV44 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV44 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV44,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV44,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV44,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV44 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV44 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV44 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV44 = {
  streaks: Array<ModelStreakV44>,
  anchors: Array<ModelStreakAnchorV44>
}

export type ModelStreakV44 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV44 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV44 = {
  effectLights: Array<ModelEffectLightV44>
}

export type ModelEffectLightV44 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV44 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV44>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV44>,
  lod1Constraints: Array<ModelClothConstraintV44>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV44>
}

export type ModelClothMeshGroupV44 = {
  weights: Array<ModelClothBoneWeightV44>
}

export type ModelClothBoneWeightV44 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV44 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV44 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV44 = {
  systems: Array<ModelLightningSystemV44>,
  bolts: Array<ModelLightningBoltV44>,
  nodes: Array<ModelLightningNodeV44>
}

export type ModelLightningSystemV44 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV44 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV44 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV44 = {
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
  links: Array<ModelBoneConstraintLinkV44>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV44 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV44 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelFileDataV45 = {
  materials: Array<ModelMaterialDataV45>,
  meshes: Array<ModelMeshDataV45>,
  model: ModelModelDataV45,
  properties: Array<ModelPropertyDataV45>,
  cloudData: ModelCloudDataV45,
  obstacles: Array<ModelObstacleDataV45>,
  streakData: ModelStreakDataV45,
  lightData: ModelLightDataV45,
  clothData: Array<ModelClothDataV45>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV45,
  boneConstraints: Array<ModelBoneConstraintV45>,
  softBodyData: Array<ModelSoftBodyDataV45>
}

export type ModelMaterialDataV45 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV45>,
  constants: Array<ModelConstantDataV45>,
  matConstLinks: Array<ModelMatConstLinkV45>,
  uvTransLinks: Array<ModelUVTransLinkV45>,
  texTransforms: Array<ModelMaterialTexTransformV45>
}

export type ModelTextureDataV45 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV45 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV45 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV45 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV45 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV45 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV45>,
  morphTargets: Array<ModelMeshMorphTargetV45>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV45 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV45 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV45 = {
  Name: string,
  Skeleton: ModelSkeletonDataV45,
  InitialPlacement: ModelTransformDataV45,
  MeshBindings: Array<ModelMeshBindingDataV45>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV45>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV45 = {
  Name: string,
  Bones: Array<ModelBoneDataV45>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV45 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV45,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV45 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV45 = {
  Mesh: number
}

export type ModelTrackMaskV45 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV45 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV45 = {
  clouds: Array<ModelParticleCloudV45>,
  emitters: Array<ModelParticleEmitterV45>
}

export type ModelParticleCloudV45 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV45 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV45,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV45,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV45,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV45 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV45 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV45 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV45 = {
  streaks: Array<ModelStreakV45>,
  anchors: Array<ModelStreakAnchorV45>
}

export type ModelStreakV45 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV45 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV45 = {
  effectLights: Array<ModelEffectLightV45>
}

export type ModelEffectLightV45 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV45 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV45>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV45>,
  lod1Constraints: Array<ModelClothConstraintV45>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV45>
}

export type ModelClothMeshGroupV45 = {
  weights: Array<ModelClothBoneWeightV45>
}

export type ModelClothBoneWeightV45 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV45 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV45 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV45 = {
  systems: Array<ModelLightningSystemV45>,
  bolts: Array<ModelLightningBoltV45>,
  nodes: Array<ModelLightningNodeV45>
}

export type ModelLightningSystemV45 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV45 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV45 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV45 = {
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
  links: Array<ModelBoneConstraintLinkV45>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV45 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV45 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelFileDataV46 = {
  materials: Array<ModelMaterialDataV46>,
  meshes: Array<ModelMeshDataV46>,
  model: ModelModelDataV46,
  properties: Array<ModelPropertyDataV46>,
  cloudData: ModelCloudDataV46,
  obstacles: Array<ModelObstacleDataV46>,
  streakData: ModelStreakDataV46,
  lightData: ModelLightDataV46,
  clothData: Array<ModelClothDataV46>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV46,
  boneConstraints: Array<ModelBoneConstraintV46>,
  softBodyData: Array<ModelSoftBodyDataV46>
}

export type ModelMaterialDataV46 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV46>,
  constants: Array<ModelConstantDataV46>,
  matConstLinks: Array<ModelMatConstLinkV46>,
  uvTransLinks: Array<ModelUVTransLinkV46>,
  texTransforms: Array<ModelMaterialTexTransformV46>
}

export type ModelTextureDataV46 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV46 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV46 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV46 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV46 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV46 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV46>,
  morphTargets: Array<ModelMeshMorphTargetV46>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV46 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV46 = {
  positionIndices: Array<number>,
  positions: Array<Array<number>>,
  normalIndices: Array<number>,
  normals: Array<Array<number>>,
  meshName: string
}

export type ModelModelDataV46 = {
  Name: string,
  Skeleton: ModelSkeletonDataV46,
  InitialPlacement: ModelTransformDataV46,
  MeshBindings: Array<ModelMeshBindingDataV46>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV46>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV46 = {
  Name: string,
  Bones: Array<ModelBoneDataV46>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV46 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV46,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV46 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV46 = {
  Mesh: number
}

export type ModelTrackMaskV46 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV46 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV46 = {
  clouds: Array<ModelParticleCloudV46>,
  emitters: Array<ModelParticleEmitterV46>
}

export type ModelParticleCloudV46 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV46 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV46,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV46,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV46,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV46 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV46 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV46 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV46 = {
  streaks: Array<ModelStreakV46>,
  anchors: Array<ModelStreakAnchorV46>
}

export type ModelStreakV46 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV46 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV46 = {
  effectLights: Array<ModelEffectLightV46>
}

export type ModelEffectLightV46 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV46 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV46>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV46>,
  lod1Constraints: Array<ModelClothConstraintV46>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV46>
}

export type ModelClothMeshGroupV46 = {
  weights: Array<ModelClothBoneWeightV46>
}

export type ModelClothBoneWeightV46 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV46 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV46 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV46 = {
  systems: Array<ModelLightningSystemV46>,
  bolts: Array<ModelLightningBoltV46>,
  nodes: Array<ModelLightningNodeV46>
}

export type ModelLightningSystemV46 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV46 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV46 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV46 = {
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
  links: Array<ModelBoneConstraintLinkV46>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV46 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV46 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelFileDataV47 = {
  materials: Array<ModelMaterialDataV47>,
  meshes: Array<ModelMeshDataV47>,
  model: ModelModelDataV47,
  properties: Array<ModelPropertyDataV47>,
  cloudData: ModelCloudDataV47,
  obstacles: Array<ModelObstacleDataV47>,
  streakData: ModelStreakDataV47,
  lightData: ModelLightDataV47,
  clothData: Array<ModelClothDataV47>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV47,
  boneConstraints: Array<ModelBoneConstraintV47>,
  softBodyData: Array<ModelSoftBodyDataV47>
}

export type ModelMaterialDataV47 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV47>,
  constants: Array<ModelConstantDataV47>,
  matConstLinks: Array<ModelMatConstLinkV47>,
  uvTransLinks: Array<ModelUVTransLinkV47>,
  texTransforms: Array<ModelMaterialTexTransformV47>
}

export type ModelTextureDataV47 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV47 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV47 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV47 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV47 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV47 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV47>,
  morphTargets: Array<ModelMeshMorphTargetV47>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>
}

export type ModelMeshLodDataV47 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV47 = {
  positions: Array<ModelMeshMorphVertV47>,
  normals: Array<ModelMeshMorphVertV47>,
  mesh: BigInt
}

export type ModelMeshMorphVertV47 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV47 = {
  Name: string,
  Skeleton: ModelSkeletonDataV47,
  InitialPlacement: ModelTransformDataV47,
  MeshBindings: Array<ModelMeshBindingDataV47>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV47>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV47 = {
  Name: string,
  Bones: Array<ModelBoneDataV47>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV47 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV47,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV47 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV47 = {
  Mesh: number
}

export type ModelTrackMaskV47 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV47 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV47 = {
  clouds: Array<ModelParticleCloudV47>,
  emitters: Array<ModelParticleEmitterV47>
}

export type ModelParticleCloudV47 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV47 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV47,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV47,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV47,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV47 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV47 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV47 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV47 = {
  streaks: Array<ModelStreakV47>,
  anchors: Array<ModelStreakAnchorV47>
}

export type ModelStreakV47 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV47 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV47 = {
  effectLights: Array<ModelEffectLightV47>
}

export type ModelEffectLightV47 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV47 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV47>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV47>,
  lod1Constraints: Array<ModelClothConstraintV47>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV47>
}

export type ModelClothMeshGroupV47 = {
  weights: Array<ModelClothBoneWeightV47>
}

export type ModelClothBoneWeightV47 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV47 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV47 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV47 = {
  systems: Array<ModelLightningSystemV47>,
  bolts: Array<ModelLightningBoltV47>,
  nodes: Array<ModelLightningNodeV47>
}

export type ModelLightningSystemV47 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV47 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV47 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV47 = {
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
  links: Array<ModelBoneConstraintLinkV47>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV47 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV47 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelFileDataV48 = {
  materials: Array<ModelMaterialDataV48>,
  meshes: Array<ModelMeshDataV48>,
  model: ModelModelDataV48,
  properties: Array<ModelPropertyDataV48>,
  cloudData: ModelCloudDataV48,
  obstacles: Array<ModelObstacleDataV48>,
  streakData: ModelStreakDataV48,
  lightData: ModelLightDataV48,
  clothData: Array<ModelClothDataV48>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV48,
  boneConstraints: Array<ModelBoneConstraintV48>,
  softBodyData: Array<ModelSoftBodyDataV48>
}

export type ModelMaterialDataV48 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV48>,
  constants: Array<ModelConstantDataV48>,
  matConstLinks: Array<ModelMatConstLinkV48>,
  uvTransLinks: Array<ModelUVTransLinkV48>,
  texTransforms: Array<ModelMaterialTexTransformV48>
}

export type ModelTextureDataV48 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV48 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV48 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV48 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV48 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV48 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV48>,
  morphTargets: Array<ModelMeshMorphTargetV48>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>
}

export type ModelMeshLodDataV48 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV48 = {
  positions: Array<ModelMeshMorphVertV48>,
  normals: Array<ModelMeshMorphVertV48>,
  mesh: BigInt
}

export type ModelMeshMorphVertV48 = {
  index: number,
  vector: Array<number>
}

export type GrBoundData = {
  center: Array<number>,
  boxExtent: Array<number>,
  sphereRadius: number
}

export type ModelModelDataV48 = {
  Name: string,
  Skeleton: ModelSkeletonDataV48,
  InitialPlacement: ModelTransformDataV48,
  MeshBindings: Array<ModelMeshBindingDataV48>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV48>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV48 = {
  Name: string,
  Bones: Array<ModelBoneDataV48>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV48 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV48,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV48 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV48 = {
  Mesh: number
}

export type ModelTrackMaskV48 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV48 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV48 = {
  clouds: Array<ModelParticleCloudV48>,
  emitters: Array<ModelParticleEmitterV48>
}

export type ModelParticleCloudV48 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV48 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV48,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV48,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV48,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV48 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV48 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV48 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV48 = {
  streaks: Array<ModelStreakV48>,
  anchors: Array<ModelStreakAnchorV48>
}

export type ModelStreakV48 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV48 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV48 = {
  effectLights: Array<ModelEffectLightV48>
}

export type ModelEffectLightV48 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV48 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV48>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV48>,
  lod1Constraints: Array<ModelClothConstraintV48>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV48>
}

export type ModelClothMeshGroupV48 = {
  weights: Array<ModelClothBoneWeightV48>
}

export type ModelClothBoneWeightV48 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV48 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV48 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV48 = {
  systems: Array<ModelLightningSystemV48>,
  bolts: Array<ModelLightningBoltV48>,
  nodes: Array<ModelLightningNodeV48>
}

export type ModelLightningSystemV48 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV48 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV48 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV48 = {
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
  links: Array<ModelBoneConstraintLinkV48>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV48 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV48 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelFileDataV49 = {
  materials: Array<ModelMaterialDataV49>,
  meshes: Array<ModelMeshDataV49>,
  model: ModelModelDataV49,
  properties: Array<ModelPropertyDataV49>,
  cloudData: ModelCloudDataV49,
  obstacles: Array<ModelObstacleDataV49>,
  streakData: ModelStreakDataV49,
  lightData: ModelLightDataV49,
  clothData: Array<ModelClothDataV49>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV49,
  boneConstraints: Array<ModelBoneConstraintV49>,
  softBodyData: Array<ModelSoftBodyDataV49>,
  boneOffsetData: Array<ModelBoneOffsetDataV49>
}

export type ModelMaterialDataV49 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV49>,
  constants: Array<ModelConstantDataV49>,
  matConstLinks: Array<ModelMatConstLinkV49>,
  uvTransLinks: Array<ModelUVTransLinkV49>,
  texTransforms: Array<ModelMaterialTexTransformV49>
}

export type ModelTextureDataV49 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV49 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV49 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV49 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV49 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV49 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV49>,
  morphTargets: Array<ModelMeshMorphTargetV49>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>
}

export type ModelMeshLodDataV49 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV49 = {
  positions: Array<ModelMeshMorphVertV49>,
  normals: Array<ModelMeshMorphVertV49>,
  mesh: BigInt
}

export type ModelMeshMorphVertV49 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV49 = {
  Name: string,
  Skeleton: ModelSkeletonDataV49,
  InitialPlacement: ModelTransformDataV49,
  MeshBindings: Array<ModelMeshBindingDataV49>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV49>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV49 = {
  Name: string,
  Bones: Array<ModelBoneDataV49>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV49 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV49,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV49 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV49 = {
  Mesh: number
}

export type ModelTrackMaskV49 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV49 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV49 = {
  clouds: Array<ModelParticleCloudV49>,
  emitters: Array<ModelParticleEmitterV49>
}

export type ModelParticleCloudV49 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV49 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV49,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV49,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV49,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV49 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV49 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV49 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV49 = {
  streaks: Array<ModelStreakV49>,
  anchors: Array<ModelStreakAnchorV49>
}

export type ModelStreakV49 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV49 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV49 = {
  effectLights: Array<ModelEffectLightV49>
}

export type ModelEffectLightV49 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV49 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV49>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV49>,
  lod1Constraints: Array<ModelClothConstraintV49>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV49>
}

export type ModelClothMeshGroupV49 = {
  weights: Array<ModelClothBoneWeightV49>
}

export type ModelClothBoneWeightV49 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV49 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV49 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV49 = {
  systems: Array<ModelLightningSystemV49>,
  bolts: Array<ModelLightningBoltV49>,
  nodes: Array<ModelLightningNodeV49>
}

export type ModelLightningSystemV49 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  materialIndex: number
}

export type ModelLightningBoltV49 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV49 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV49 = {
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
  links: Array<ModelBoneConstraintLinkV49>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV49 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV49 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV49 = {
  bone: BigInt,
  offset: Array<number>
}

export type ModelFileDataV50 = {
  materials: Array<ModelMaterialDataV50>,
  meshes: Array<ModelMeshDataV50>,
  model: ModelModelDataV50,
  properties: Array<ModelPropertyDataV50>,
  cloudData: ModelCloudDataV50,
  obstacles: Array<ModelObstacleDataV50>,
  streakData: ModelStreakDataV50,
  lightData: ModelLightDataV50,
  clothData: Array<ModelClothDataV50>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV50,
  boneConstraints: Array<ModelBoneConstraintV50>,
  softBodyData: Array<ModelSoftBodyDataV50>,
  boneOffsetData: Array<ModelBoneOffsetDataV50>
}

export type ModelMaterialDataV50 = {
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV50>,
  constants: Array<ModelConstantDataV50>,
  matConstLinks: Array<ModelMatConstLinkV50>,
  uvTransLinks: Array<ModelUVTransLinkV50>,
  texTransforms: Array<ModelMaterialTexTransformV50>
}

export type ModelTextureDataV50 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV50 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV50 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV50 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV50 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV50 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV50>,
  morphTargets: Array<ModelMeshMorphTargetV50>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>
}

export type ModelMeshLodDataV50 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV50 = {
  positions: Array<ModelMeshMorphVertV50>,
  normals: Array<ModelMeshMorphVertV50>,
  mesh: BigInt
}

export type ModelMeshMorphVertV50 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV50 = {
  Name: string,
  Skeleton: ModelSkeletonDataV50,
  InitialPlacement: ModelTransformDataV50,
  MeshBindings: Array<ModelMeshBindingDataV50>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV50>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV50 = {
  Name: string,
  Bones: Array<ModelBoneDataV50>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV50 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV50,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV50 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV50 = {
  Mesh: number
}

export type ModelTrackMaskV50 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV50 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV50 = {
  clouds: Array<ModelParticleCloudV50>,
  emitters: Array<ModelParticleEmitterV50>
}

export type ModelParticleCloudV50 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV50 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV50,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV50,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV50,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV50 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV50 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV50 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV50 = {
  streaks: Array<ModelStreakV50>,
  anchors: Array<ModelStreakAnchorV50>
}

export type ModelStreakV50 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV50 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV50 = {
  effectLights: Array<ModelEffectLightV50>
}

export type ModelEffectLightV50 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV50 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV50>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV50>,
  lod1Constraints: Array<ModelClothConstraintV50>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV50>
}

export type ModelClothMeshGroupV50 = {
  weights: Array<ModelClothBoneWeightV50>
}

export type ModelClothBoneWeightV50 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV50 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV50 = {
  bone: BigInt,
  type: number
}

export type ModelLightningDataV50 = {
  systems: Array<ModelLightningSystemV50>,
  bolts: Array<ModelLightningBoltV50>,
  nodes: Array<ModelLightningNodeV50>
}

export type ModelLightningSystemV50 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV50 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV50 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: number,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV50 = {
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
  links: Array<ModelBoneConstraintLinkV50>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV50 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV50 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV50 = {
  bone: BigInt,
  offset: Array<number>
}

export type ModelFileDataV51 = {
  permutations: Array<ModelPermutationDataV51>,
  meshes: Array<ModelMeshDataV51>,
  model: ModelModelDataV51,
  properties: Array<ModelPropertyDataV51>,
  cloudData: ModelCloudDataV51,
  obstacles: Array<ModelObstacleDataV51>,
  streakData: ModelStreakDataV51,
  lightData: ModelLightDataV51,
  clothData: Array<ModelClothDataV51>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV51,
  boneConstraints: Array<ModelBoneConstraintV51>,
  softBodyData: Array<ModelSoftBodyDataV51>,
  boneOffsetData: Array<ModelBoneOffsetDataV51>
}

export type ModelPermutationDataV51 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV51>
}

export type ModelMaterialDataV51 = {
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV51>,
  constants: Array<ModelConstantDataV51>,
  matConstLinks: Array<ModelMatConstLinkV51>,
  uvTransLinks: Array<ModelUVTransLinkV51>,
  texTransforms: Array<ModelMaterialTexTransformV51>
}

export type ModelTextureDataV51 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV51 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV51 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV51 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV51 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV51 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV51>,
  morphTargets: Array<ModelMeshMorphTargetV51>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV51 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV51 = {
  positions: Array<ModelMeshMorphVertV51>,
  normals: Array<ModelMeshMorphVertV51>,
  mesh: BigInt
}

export type ModelMeshMorphVertV51 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV51 = {
  Name: string,
  Skeleton: ModelSkeletonDataV51,
  InitialPlacement: ModelTransformDataV51,
  MeshBindings: Array<ModelMeshBindingDataV51>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV51>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV51 = {
  Name: string,
  Bones: Array<ModelBoneDataV51>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV51 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV51,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV51 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV51 = {
  Mesh: number
}

export type ModelTrackMaskV51 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV51 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV51 = {
  clouds: Array<ModelParticleCloudV51>,
  emitters: Array<ModelParticleEmitterV51>
}

export type ModelParticleCloudV51 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV51 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV51,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV51,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV51,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV51 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV51 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV51 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV51 = {
  streaks: Array<ModelStreakV51>,
  anchors: Array<ModelStreakAnchorV51>
}

export type ModelStreakV51 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV51 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV51 = {
  effectLights: Array<ModelEffectLightV51>
}

export type ModelEffectLightV51 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV51 = {
  materialIndex: number,
  flags: number,
  gravity: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV51>,
  softLocks: Array<number>,
  lod0Constraints: Array<ModelClothConstraintV51>,
  lod1Constraints: Array<ModelClothConstraintV51>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV51>
}

export type ModelClothMeshGroupV51 = {
  weights: Array<ModelClothBoneWeightV51>
}

export type ModelClothBoneWeightV51 = {
  token: BigInt,
  weight: number
}

export type ModelClothConstraintV51 = {
  vertIndexA: number,
  vertIndexB: number,
  distance: number
}

export type ModelClothObstacleV51 = {
  bone: BigInt,
  type: number,
  depth: number,
  height: number,
  radius: number,
  width: number
}

export type ModelLightningDataV51 = {
  systems: Array<ModelLightningSystemV51>,
  bolts: Array<ModelLightningBoltV51>,
  nodes: Array<ModelLightningNodeV51>
}

export type ModelLightningSystemV51 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV51 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV51 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV51 = {
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
  links: Array<ModelBoneConstraintLinkV51>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV51 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV51 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV51 = {
  bone: BigInt,
  offset: Array<number>
}

export type ModelFileDataV52 = {
  permutations: Array<ModelPermutationDataV52>,
  meshes: Array<ModelMeshDataV52>,
  model: ModelModelDataV52,
  properties: Array<ModelPropertyDataV52>,
  cloudData: ModelCloudDataV52,
  obstacles: Array<ModelObstacleDataV52>,
  streakData: ModelStreakDataV52,
  lightData: ModelLightDataV52,
  clothData: Array<ModelClothDataV52>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV52,
  boneConstraints: Array<ModelBoneConstraintV52>,
  softBodyData: Array<ModelSoftBodyDataV52>,
  boneOffsetData: Array<ModelBoneOffsetDataV52>
}

export type ModelPermutationDataV52 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV52>
}

export type ModelMaterialDataV52 = {
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV52>,
  constants: Array<ModelConstantDataV52>,
  matConstLinks: Array<ModelMatConstLinkV52>,
  uvTransLinks: Array<ModelUVTransLinkV52>,
  texTransforms: Array<ModelMaterialTexTransformV52>
}

export type ModelTextureDataV52 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV52 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV52 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV52 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV52 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV52 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV52>,
  morphTargets: Array<ModelMeshMorphTargetV52>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV52 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV52 = {
  positions: Array<ModelMeshMorphVertV52>,
  normals: Array<ModelMeshMorphVertV52>,
  mesh: BigInt
}

export type ModelMeshMorphVertV52 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV52 = {
  Name: string,
  Skeleton: ModelSkeletonDataV52,
  InitialPlacement: ModelTransformDataV52,
  MeshBindings: Array<ModelMeshBindingDataV52>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV52>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV52 = {
  Name: string,
  Bones: Array<ModelBoneDataV52>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV52 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV52,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV52 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV52 = {
  Mesh: number
}

export type ModelTrackMaskV52 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV52 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV52 = {
  clouds: Array<ModelParticleCloudV52>,
  emitters: Array<ModelParticleEmitterV52>
}

export type ModelParticleCloudV52 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV52 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV52,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV52,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV52,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV52 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV52 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV52 = {
  bone: BigInt,
  dragCoef: number,
  flags: number,
  geoData: Array<number>,
  gravityCoef: number,
  response: number,
  type: number
}

export type ModelStreakDataV52 = {
  streaks: Array<ModelStreakV52>,
  anchors: Array<ModelStreakAnchorV52>
}

export type ModelStreakV52 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV52 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV52 = {
  effectLights: Array<ModelEffectLightV52>
}

export type ModelEffectLightV52 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV52 = {
  materialIndex: number,
  flags: number,
  drag: number,
  gravity: number,
  compressibility: number,
  stretchiness: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV52>,
  softLocks: Array<ModelClothSoftLockV52>,
  lod0Constraints: Array<ModelClothConstraintV52>,
  lod1Constraints: Array<ModelClothConstraintV52>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacles: Array<ModelClothObstacleV52>
}

export type ModelClothMeshGroupV52 = {
  weights: Array<ModelClothBoneWeightV52>
}

export type ModelClothBoneWeightV52 = {
  token: BigInt,
  weight: number
}

export type ModelClothSoftLockV52 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV52 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelClothObstacleV52 = {
  bone: BigInt,
  type: number,
  depth: number,
  height: number,
  radius: number,
  width: number
}

export type ModelLightningDataV52 = {
  systems: Array<ModelLightningSystemV52>,
  bolts: Array<ModelLightningBoltV52>,
  nodes: Array<ModelLightningNodeV52>
}

export type ModelLightningSystemV52 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV52 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV52 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV52 = {
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
  links: Array<ModelBoneConstraintLinkV52>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV52 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV52 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV52 = {
  bone: BigInt,
  offset: Array<number>
}

export type ModelFileDataV53 = {
  permutations: Array<ModelPermutationDataV53>,
  meshes: Array<ModelMeshDataV53>,
  model: ModelModelDataV53,
  properties: Array<ModelPropertyDataV53>,
  cloudData: ModelCloudDataV53,
  obstacles: Array<ModelObstacleDataV53>,
  streakData: ModelStreakDataV53,
  lightData: ModelLightDataV53,
  clothData: Array<ModelClothDataV53>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV53,
  boneConstraints: Array<ModelBoneConstraintV53>,
  softBodyData: Array<ModelSoftBodyDataV53>,
  boneOffsetData: Array<ModelBoneOffsetDataV53>
}

export type ModelPermutationDataV53 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV53>
}

export type ModelMaterialDataV53 = {
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  texCoordCount: number,
  textures: Array<ModelTextureDataV53>,
  constants: Array<ModelConstantDataV53>,
  matConstLinks: Array<ModelMatConstLinkV53>,
  uvTransLinks: Array<ModelUVTransLinkV53>,
  texTransforms: Array<ModelMaterialTexTransformV53>
}

export type ModelTextureDataV53 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV53 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV53 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV53 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV53 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV53 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV53>,
  morphTargets: Array<ModelMeshMorphTargetV53>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV53 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV53 = {
  positions: Array<ModelMeshMorphVertV53>,
  normals: Array<ModelMeshMorphVertV53>,
  mesh: BigInt
}

export type ModelMeshMorphVertV53 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV53 = {
  Name: string,
  Skeleton: ModelSkeletonDataV53,
  InitialPlacement: ModelTransformDataV53,
  MeshBindings: Array<ModelMeshBindingDataV53>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV53>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV53 = {
  Name: string,
  Bones: Array<ModelBoneDataV53>,
  LODType: number,
  ExtendedData: number
}

export type ModelBoneDataV53 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV53,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV53 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelMeshBindingDataV53 = {
  Mesh: number
}

export type ModelTrackMaskV53 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV53 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV53 = {
  clouds: Array<ModelParticleCloudV53>,
  emitters: Array<ModelParticleEmitterV53>
}

export type ModelParticleCloudV53 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV53 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentType: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV53,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV53,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV53,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnShape: number,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  windInfluence: number
}

export type ModelParticleCurveV53 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV53 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelObstacleDataV53 = {
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V53
}

export type ModelMatrix43V53 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelStreakDataV53 = {
  streaks: Array<ModelStreakV53>,
  anchors: Array<ModelStreakAnchorV53>
}

export type ModelStreakV53 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV53 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV53 = {
  effectLights: Array<ModelEffectLightV53>
}

export type ModelEffectLightV53 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV53 = {
  materialIndex: number,
  flags: number,
  drag: number,
  gravity: number,
  compressibility: number,
  stretchiness: number,
  weight: number,
  wind: number,
  rigidness: number,
  mesh: PackVertexType,
  indices: Array<number>,
  lockCount: number,
  groups: Array<ModelClothMeshGroupV53>,
  softLocks: Array<ModelClothSoftLockV53>,
  lod0Constraints: Array<ModelClothConstraintV53>,
  lod1Constraints: Array<ModelClothConstraintV53>,
  lod1VertexCount: number,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>
}

export type ModelClothMeshGroupV53 = {
  weights: Array<ModelClothBoneWeightV53>
}

export type ModelClothBoneWeightV53 = {
  token: BigInt,
  weight: number
}

export type ModelClothSoftLockV53 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV53 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelLightningDataV53 = {
  systems: Array<ModelLightningSystemV53>,
  bolts: Array<ModelLightningBoltV53>,
  nodes: Array<ModelLightningNodeV53>
}

export type ModelLightningSystemV53 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV53 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV53 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV53 = {
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
  links: Array<ModelBoneConstraintLinkV53>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV53 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV53 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV53 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>
}

export type ModelFileDataV54 = {
  permutations: Array<ModelPermutationDataV54>,
  meshes: Array<ModelMeshDataV54>,
  model: ModelModelDataV54,
  properties: Array<ModelPropertyDataV54>,
  cloudData: ModelCloudDataV54,
  obstacles: Array<ModelObstacleDataV54>,
  streakData: ModelStreakDataV54,
  lightData: ModelLightDataV54,
  clothData: Array<ModelClothDataV54>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV54,
  boneConstraints: Array<ModelBoneConstraintV54>,
  softBodyData: Array<ModelSoftBodyDataV54>,
  boneOffsetData: Array<ModelBoneOffsetDataV54>
}

export type ModelPermutationDataV54 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV54>
}

export type ModelMaterialDataV54 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV54>,
  constants: Array<ModelConstantDataV54>,
  matConstLinks: Array<ModelMatConstLinkV54>,
  uvTransLinks: Array<ModelUVTransLinkV54>,
  texTransforms: Array<ModelMaterialTexTransformV54>,
  texCoordCount: number
}

export type ModelTextureDataV54 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV54 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV54 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV54 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV54 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV54 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV54>,
  morphTargets: Array<ModelMeshMorphTargetV54>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV54 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV54 = {
  positions: Array<ModelMeshMorphVertV54>,
  normals: Array<ModelMeshMorphVertV54>,
  mesh: BigInt
}

export type ModelMeshMorphVertV54 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV54 = {
  Name: string,
  Skeleton: ModelSkeletonDataV54,
  InitialPlacement: ModelTransformDataV54,
  MeshBindings: Array<ModelMeshBindingDataV54>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV54>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV54 = {
  Name: string,
  Bones: Array<ModelBoneDataV54>,
  LODType: number,
  ExtendedData: number,
  boneSymmetries: Array<ModelBoneSymmetryV54>
}

export type ModelBoneDataV54 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV54,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV54 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelBoneSymmetryV54 = {
  boneLeft: BigInt,
  boneRight: BigInt
}

export type ModelMeshBindingDataV54 = {
  Mesh: number
}

export type ModelTrackMaskV54 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV54 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV54 = {
  clouds: Array<ModelParticleCloudV54>,
  emitters: Array<ModelParticleEmitterV54>
}

export type ModelParticleCloudV54 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV54 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV54,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV54,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV54,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V54,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV54 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV54 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V54 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV54 = {
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V54
}

export type ModelStreakDataV54 = {
  streaks: Array<ModelStreakV54>,
  anchors: Array<ModelStreakAnchorV54>
}

export type ModelStreakV54 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV54 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV54 = {
  effectLights: Array<ModelEffectLightV54>
}

export type ModelEffectLightV54 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV54 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV54>,
  softLocks: Array<ModelClothSoftLockV54>,
  lod0Constraints: Array<ModelClothConstraintV54>,
  lod1Constraints: Array<ModelClothConstraintV54>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lod1VertexCount: number,
  flags: number,
  rigidness: number
}

export type ModelClothMeshGroupV54 = {
  weights: Array<ModelClothBoneWeightV54>
}

export type ModelClothBoneWeightV54 = {
  token: BigInt,
  weight: number
}

export type ModelClothSoftLockV54 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV54 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelLightningDataV54 = {
  systems: Array<ModelLightningSystemV54>,
  bolts: Array<ModelLightningBoltV54>,
  nodes: Array<ModelLightningNodeV54>
}

export type ModelLightningSystemV54 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV54 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV54 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV54 = {
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
  links: Array<ModelBoneConstraintLinkV54>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV54 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV54 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV54 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>
}

export type ModelFileDataV55 = {
  permutations: Array<ModelPermutationDataV55>,
  meshes: Array<ModelMeshDataV55>,
  model: ModelModelDataV55,
  properties: Array<ModelPropertyDataV55>,
  cloudData: ModelCloudDataV55,
  obstacles: Array<ModelObstacleDataV55>,
  streakData: ModelStreakDataV55,
  lightData: ModelLightDataV55,
  clothData: Array<ModelClothDataV55>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV55,
  boneConstraints: Array<ModelBoneConstraintV55>,
  softBodyData: Array<ModelSoftBodyDataV55>,
  boneOffsetData: Array<ModelBoneOffsetDataV55>
}

export type ModelPermutationDataV55 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV55>
}

export type ModelMaterialDataV55 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV55>,
  constants: Array<ModelConstantDataV55>,
  matConstLinks: Array<ModelMatConstLinkV55>,
  uvTransLinks: Array<ModelUVTransLinkV55>,
  texTransforms: Array<ModelMaterialTexTransformV55>,
  texCoordCount: number
}

export type ModelTextureDataV55 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV55 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV55 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV55 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV55 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV55 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV55>,
  morphTargets: Array<ModelMeshMorphTargetV55>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV55 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV55 = {
  positions: Array<ModelMeshMorphVertV55>,
  normals: Array<ModelMeshMorphVertV55>,
  mesh: BigInt
}

export type ModelMeshMorphVertV55 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV55 = {
  Name: string,
  Skeleton: ModelSkeletonDataV55,
  InitialPlacement: ModelTransformDataV55,
  MeshBindings: Array<ModelMeshBindingDataV55>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV55>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV55 = {
  Name: string,
  Bones: Array<ModelBoneDataV55>,
  LODType: number,
  ExtendedData: number,
  boneSymmetries: Array<ModelBoneSymmetryV55>
}

export type ModelBoneDataV55 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV55,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV55 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelBoneSymmetryV55 = {
  boneLeft: BigInt,
  boneRight: BigInt
}

export type ModelMeshBindingDataV55 = {
  Mesh: number
}

export type ModelTrackMaskV55 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV55 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV55 = {
  clouds: Array<ModelParticleCloudV55>,
  emitters: Array<ModelParticleEmitterV55>
}

export type ModelParticleCloudV55 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV55 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV55,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV55,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV55,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V55,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV55 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV55 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V55 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV55 = {
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V55
}

export type ModelStreakDataV55 = {
  streaks: Array<ModelStreakV55>,
  anchors: Array<ModelStreakAnchorV55>
}

export type ModelStreakV55 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV55 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV55 = {
  effectLights: Array<ModelEffectLightV55>
}

export type ModelEffectLightV55 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV55 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV55>,
  softLocks: Array<ModelClothSoftLockV55>,
  lod0Constraints: Array<ModelClothConstraintV55>,
  lod1Constraints: Array<ModelClothConstraintV55>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lod1VertexCount: number,
  flags: number,
  rigidness: number
}

export type ModelClothMeshGroupV55 = {
  weights: Array<ModelClothBoneWeightV55>
}

export type ModelClothBoneWeightV55 = {
  token: BigInt,
  weight: number
}

export type ModelClothSoftLockV55 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV55 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelLightningDataV55 = {
  systems: Array<ModelLightningSystemV55>,
  bolts: Array<ModelLightningBoltV55>,
  nodes: Array<ModelLightningNodeV55>
}

export type ModelLightningSystemV55 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV55 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV55 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV55 = {
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
  links: Array<ModelBoneConstraintLinkV55>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV55 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV55 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV55 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelFileDataV56 = {
  permutations: Array<ModelPermutationDataV56>,
  meshes: Array<ModelMeshDataV56>,
  model: ModelModelDataV56,
  properties: Array<ModelPropertyDataV56>,
  cloudData: ModelCloudDataV56,
  obstacles: Array<ModelObstacleDataV56>,
  streakData: ModelStreakDataV56,
  lightData: ModelLightDataV56,
  clothData: Array<ModelClothDataV56>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV56,
  boneConstraints: Array<ModelBoneConstraintV56>,
  softBodyData: Array<ModelSoftBodyDataV56>,
  boneOffsetData: Array<ModelBoneOffsetDataV56>,
  modelReference: string
}

export type ModelPermutationDataV56 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV56>
}

export type ModelMaterialDataV56 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV56>,
  constants: Array<ModelConstantDataV56>,
  matConstLinks: Array<ModelMatConstLinkV56>,
  uvTransLinks: Array<ModelUVTransLinkV56>,
  texTransforms: Array<ModelMaterialTexTransformV56>,
  texCoordCount: number
}

export type ModelTextureDataV56 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV56 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV56 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV56 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV56 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV56 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV56>,
  morphTargets: Array<ModelMeshMorphTargetV56>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV56 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV56 = {
  positions: Array<ModelMeshMorphVertV56>,
  normals: Array<ModelMeshMorphVertV56>,
  mesh: BigInt
}

export type ModelMeshMorphVertV56 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV56 = {
  Name: string,
  Skeleton: ModelSkeletonDataV56,
  InitialPlacement: ModelTransformDataV56,
  MeshBindings: Array<ModelMeshBindingDataV56>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV56>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV56 = {
  Name: string,
  Bones: Array<ModelBoneDataV56>,
  LODType: number,
  ExtendedData: number,
  boneSymmetries: Array<ModelBoneSymmetryV56>
}

export type ModelBoneDataV56 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV56,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV56 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelBoneSymmetryV56 = {
  boneLeft: BigInt,
  boneRight: BigInt
}

export type ModelMeshBindingDataV56 = {
  Mesh: number
}

export type ModelTrackMaskV56 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV56 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV56 = {
  clouds: Array<ModelParticleCloudV56>,
  emitters: Array<ModelParticleEmitterV56>
}

export type ModelParticleCloudV56 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV56 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV56,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV56,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV56,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V56,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV56 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV56 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V56 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV56 = {
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V56
}

export type ModelStreakDataV56 = {
  streaks: Array<ModelStreakV56>,
  anchors: Array<ModelStreakAnchorV56>
}

export type ModelStreakV56 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV56 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV56 = {
  effectLights: Array<ModelEffectLightV56>
}

export type ModelEffectLightV56 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV56 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV56>,
  softLocks: Array<ModelClothSoftLockV56>,
  lod0Constraints: Array<ModelClothConstraintV56>,
  lod1Constraints: Array<ModelClothConstraintV56>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lod1VertexCount: number,
  flags: number,
  rigidness: number
}

export type ModelClothMeshGroupV56 = {
  weights: Array<ModelClothBoneWeightV56>
}

export type ModelClothBoneWeightV56 = {
  token: BigInt,
  weight: number
}

export type ModelClothSoftLockV56 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV56 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelLightningDataV56 = {
  systems: Array<ModelLightningSystemV56>,
  bolts: Array<ModelLightningBoltV56>,
  nodes: Array<ModelLightningNodeV56>
}

export type ModelLightningSystemV56 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV56 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV56 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV56 = {
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
  links: Array<ModelBoneConstraintLinkV56>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV56 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV56 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV56 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelFileDataV57 = {
  permutations: Array<ModelPermutationDataV57>,
  meshes: Array<ModelMeshDataV57>,
  model: ModelModelDataV57,
  properties: Array<ModelPropertyDataV57>,
  cloudData: ModelCloudDataV57,
  obstacles: Array<ModelObstacleDataV57>,
  streakData: ModelStreakDataV57,
  lightData: ModelLightDataV57,
  clothData: Array<ModelClothDataV57>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV57,
  boneConstraints: Array<ModelBoneConstraintV57>,
  softBodyData: Array<ModelSoftBodyDataV57>,
  boneOffsetData: Array<ModelBoneOffsetDataV57>,
  fixedOffsetData: Array<ModelFixedOffsetDataV57>,
  modelReference: string
}

export type ModelPermutationDataV57 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV57>
}

export type ModelMaterialDataV57 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV57>,
  constants: Array<ModelConstantDataV57>,
  matConstLinks: Array<ModelMatConstLinkV57>,
  uvTransLinks: Array<ModelUVTransLinkV57>,
  texTransforms: Array<ModelMaterialTexTransformV57>,
  texCoordCount: number
}

export type ModelTextureDataV57 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV57 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV57 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV57 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV57 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV57 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV57>,
  morphTargets: Array<ModelMeshMorphTargetV57>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV57 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV57 = {
  positions: Array<ModelMeshMorphVertV57>,
  normals: Array<ModelMeshMorphVertV57>,
  mesh: BigInt
}

export type ModelMeshMorphVertV57 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV57 = {
  Name: string,
  Skeleton: ModelSkeletonDataV57,
  InitialPlacement: ModelTransformDataV57,
  MeshBindings: Array<ModelMeshBindingDataV57>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV57>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV57 = {
  Name: string,
  Bones: Array<ModelBoneDataV57>,
  LODType: number,
  ExtendedData: number,
  boneSymmetries: Array<ModelBoneSymmetryV57>
}

export type ModelBoneDataV57 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV57,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV57 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelBoneSymmetryV57 = {
  boneLeft: BigInt,
  boneRight: BigInt
}

export type ModelMeshBindingDataV57 = {
  Mesh: number
}

export type ModelTrackMaskV57 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV57 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV57 = {
  clouds: Array<ModelParticleCloudV57>,
  emitters: Array<ModelParticleEmitterV57>
}

export type ModelParticleCloudV57 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV57 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV57,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV57,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV57,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V57,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV57 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV57 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V57 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV57 = {
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V57
}

export type ModelStreakDataV57 = {
  streaks: Array<ModelStreakV57>,
  anchors: Array<ModelStreakAnchorV57>
}

export type ModelStreakV57 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV57 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV57 = {
  effectLights: Array<ModelEffectLightV57>
}

export type ModelEffectLightV57 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV57 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV57>,
  softLocks: Array<ModelClothSoftLockV57>,
  lod0Constraints: Array<ModelClothConstraintV57>,
  lod1Constraints: Array<ModelClothConstraintV57>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lod1VertexCount: number,
  flags: number,
  rigidness: number
}

export type ModelClothMeshGroupV57 = {
  weights: Array<ModelClothBoneWeightV57>
}

export type ModelClothBoneWeightV57 = {
  token: BigInt,
  weight: number
}

export type ModelClothSoftLockV57 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV57 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelLightningDataV57 = {
  systems: Array<ModelLightningSystemV57>,
  bolts: Array<ModelLightningBoltV57>,
  nodes: Array<ModelLightningNodeV57>
}

export type ModelLightningSystemV57 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV57 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  fps: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  period: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thickness: number,
  thicknessPreset: number,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV57 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV57 = {
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
  links: Array<ModelBoneConstraintLinkV57>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV57 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV57 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV57 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelFixedOffsetDataV57 = {
  name: BigInt,
  parentBone: BigInt,
  translation: Array<number>
}

export type ModelFileDataV58 = {
  permutations: Array<ModelPermutationDataV58>,
  meshes: Array<ModelMeshDataV58>,
  model: ModelModelDataV58,
  properties: Array<ModelPropertyDataV58>,
  cloudData: ModelCloudDataV58,
  obstacles: Array<ModelObstacleDataV58>,
  streakData: ModelStreakDataV58,
  lightData: ModelLightDataV58,
  clothData: Array<ModelClothDataV58>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV58,
  boneConstraints: Array<ModelBoneConstraintV58>,
  softBodyData: Array<ModelSoftBodyDataV58>,
  boneOffsetData: Array<ModelBoneOffsetDataV58>,
  fixedOffsetData: Array<ModelFixedOffsetDataV58>,
  modelReference: string
}

export type ModelPermutationDataV58 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV58>
}

export type ModelMaterialDataV58 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV58>,
  constants: Array<ModelConstantDataV58>,
  matConstLinks: Array<ModelMatConstLinkV58>,
  uvTransLinks: Array<ModelUVTransLinkV58>,
  texTransforms: Array<ModelMaterialTexTransformV58>,
  texCoordCount: number
}

export type ModelTextureDataV58 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV58 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV58 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV58 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV58 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV58 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV58>,
  morphTargets: Array<ModelMeshMorphTargetV58>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV58 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV58 = {
  positions: Array<ModelMeshMorphVertV58>,
  normals: Array<ModelMeshMorphVertV58>,
  mesh: BigInt
}

export type ModelMeshMorphVertV58 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV58 = {
  Name: string,
  Skeleton: ModelSkeletonDataV58,
  InitialPlacement: ModelTransformDataV58,
  MeshBindings: Array<ModelMeshBindingDataV58>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV58>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV58 = {
  Name: string,
  Bones: Array<ModelBoneDataV58>,
  LODType: number,
  ExtendedData: number,
  boneSymmetries: Array<ModelBoneSymmetryV58>
}

export type ModelBoneDataV58 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV58,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV58 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelBoneSymmetryV58 = {
  boneLeft: BigInt,
  boneRight: BigInt
}

export type ModelMeshBindingDataV58 = {
  Mesh: number
}

export type ModelTrackMaskV58 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV58 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV58 = {
  clouds: Array<ModelParticleCloudV58>,
  emitters: Array<ModelParticleEmitterV58>
}

export type ModelParticleCloudV58 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV58 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV58,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV58,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV58,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V58,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV58 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV58 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V58 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV58 = {
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V58
}

export type ModelStreakDataV58 = {
  streaks: Array<ModelStreakV58>,
  anchors: Array<ModelStreakAnchorV58>
}

export type ModelStreakV58 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV58 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV58 = {
  effectLights: Array<ModelEffectLightV58>
}

export type ModelEffectLightV58 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV58 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV58>,
  softLocks: Array<ModelClothSoftLockV58>,
  lod0Constraints: Array<ModelClothConstraintV58>,
  lod1Constraints: Array<ModelClothConstraintV58>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lockedNormals: Array<number>,
  lockedTanegents: Array<number>,
  lockedBitangents: Array<number>,
  lod1VertexCount: number,
  flags: number,
  rigidness: number
}

export type ModelClothMeshGroupV58 = {
  weights: Array<ModelClothBoneWeightV58>
}

export type ModelClothBoneWeightV58 = {
  token: BigInt,
  weight: number
}

export type ModelClothSoftLockV58 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV58 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelLightningDataV58 = {
  systems: Array<ModelLightningSystemV58>,
  bolts: Array<ModelLightningBoltV58>,
  nodes: Array<ModelLightningNodeV58>
}

export type ModelLightningSystemV58 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV58 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  flipbook: ModelParticleFlipbookV58,
  fps: number,
  frequency: number,
  groupMax: number,
  groupMin: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  texOffset: number,
  texScale: number,
  texSpeed: number,
  thicknessPreset: number,
  thicknessRange: Array<number>,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV58 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV58 = {
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
  links: Array<ModelBoneConstraintLinkV58>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV58 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV58 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV58 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelFixedOffsetDataV58 = {
  name: BigInt,
  parentBone: BigInt,
  translation: Array<number>
}

export type ModelFileDataV59 = {
  permutations: Array<ModelPermutationDataV59>,
  meshes: Array<ModelMeshDataV59>,
  model: ModelModelDataV59,
  properties: Array<ModelPropertyDataV59>,
  cloudData: ModelCloudDataV59,
  obstacles: Array<ModelObstacleDataV59>,
  streakData: ModelStreakDataV59,
  lightData: ModelLightDataV59,
  clothData: Array<ModelClothDataV59>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV59,
  boneConstraints: Array<ModelBoneConstraintV59>,
  softBodyData: Array<ModelSoftBodyDataV59>,
  boneOffsetData: Array<ModelBoneOffsetDataV59>,
  fixedOffsetData: Array<ModelFixedOffsetDataV59>,
  modelReference: string
}

export type ModelPermutationDataV59 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV59>
}

export type ModelMaterialDataV59 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV59>,
  constants: Array<ModelConstantDataV59>,
  matConstLinks: Array<ModelMatConstLinkV59>,
  uvTransLinks: Array<ModelUVTransLinkV59>,
  texTransforms: Array<ModelMaterialTexTransformV59>,
  texCoordCount: number
}

export type ModelTextureDataV59 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV59 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV59 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV59 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV59 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV59 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV59>,
  morphTargets: Array<ModelMeshMorphTargetV59>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV59 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV59 = {
  positions: Array<ModelMeshMorphVertV59>,
  normals: Array<ModelMeshMorphVertV59>,
  mesh: BigInt
}

export type ModelMeshMorphVertV59 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV59 = {
  Name: string,
  Skeleton: ModelSkeletonDataV59,
  InitialPlacement: ModelTransformDataV59,
  MeshBindings: Array<ModelMeshBindingDataV59>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV59>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV59 = {
  Name: string,
  Bones: Array<ModelBoneDataV59>,
  LODType: number,
  ExtendedData: number,
  boneSymmetries: Array<ModelBoneSymmetryV59>
}

export type ModelBoneDataV59 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV59,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV59 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelBoneSymmetryV59 = {
  boneLeft: BigInt,
  boneRight: BigInt
}

export type ModelMeshBindingDataV59 = {
  Mesh: number
}

export type ModelTrackMaskV59 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV59 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV59 = {
  clouds: Array<ModelParticleCloudV59>,
  emitters: Array<ModelParticleEmitterV59>
}

export type ModelParticleCloudV59 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV59 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV59,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV59,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV59,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V59,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV59 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV59 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V59 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV59 = {
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V59
}

export type ModelStreakDataV59 = {
  streaks: Array<ModelStreakV59>,
  anchors: Array<ModelStreakAnchorV59>
}

export type ModelStreakV59 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV59 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV59 = {
  effectLights: Array<ModelEffectLightV59>
}

export type ModelEffectLightV59 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV59 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV59>,
  softLocks: Array<ModelClothSoftLockV59>,
  lod0Constraints: Array<ModelClothConstraintV59>,
  lod1Constraints: Array<ModelClothConstraintV59>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lockedNormals: Array<number>,
  lockedTanegents: Array<number>,
  lockedBitangents: Array<number>,
  lod1VertexCount: number,
  flags: number,
  rigidness: number
}

export type ModelClothMeshGroupV59 = {
  weights: Array<ModelClothBoneWeightV59>
}

export type ModelClothBoneWeightV59 = {
  token: BigInt,
  weight: number
}

export type ModelClothSoftLockV59 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV59 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelLightningDataV59 = {
  systems: Array<ModelLightningSystemV59>,
  bolts: Array<ModelLightningBoltV59>,
  nodes: Array<ModelLightningNodeV59>
}

export type ModelLightningSystemV59 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV59 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  flipbook: ModelParticleFlipbookV59,
  fps: number,
  frequency: number,
  groupMax: number,
  groupMin: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  texOffset: number,
  texRange: Array<number>,
  texScale: number,
  texSpeed: number,
  thicknessPreset: number,
  thicknessRange: Array<number>,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV59 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV59 = {
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
  links: Array<ModelBoneConstraintLinkV59>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV59 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV59 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV59 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelFixedOffsetDataV59 = {
  name: BigInt,
  parentBone: BigInt,
  translation: Array<number>
}

export type ModelFileDataV60 = {
  permutations: Array<ModelPermutationDataV60>,
  meshes: Array<ModelMeshDataV60>,
  model: ModelModelDataV60,
  properties: Array<ModelPropertyDataV60>,
  cloudData: ModelCloudDataV60,
  obstacles: Array<ModelObstacleDataV60>,
  streakData: ModelStreakDataV60,
  lightData: ModelLightDataV60,
  clothData: Array<ModelClothDataV60>,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV60,
  boneConstraints: Array<ModelBoneConstraintV60>,
  softBodyData: Array<ModelSoftBodyDataV60>,
  boneOffsetData: Array<ModelBoneOffsetDataV60>,
  fixedOffsetData: Array<ModelFixedOffsetDataV60>,
  modelReference: string
}

export type ModelPermutationDataV60 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV60>
}

export type ModelMaterialDataV60 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV60>,
  constants: Array<ModelConstantDataV60>,
  matConstLinks: Array<ModelMatConstLinkV60>,
  uvTransLinks: Array<ModelUVTransLinkV60>,
  texTransforms: Array<ModelMaterialTexTransformV60>,
  texCoordCount: number
}

export type ModelTextureDataV60 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV60 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV60 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV60 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV60 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV60 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV60>,
  morphTargets: Array<ModelMeshMorphTargetV60>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV60 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV60 = {
  positions: Array<ModelMeshMorphVertV60>,
  normals: Array<ModelMeshMorphVertV60>,
  mesh: BigInt
}

export type ModelMeshMorphVertV60 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV60 = {
  Name: string,
  Skeleton: ModelSkeletonDataV60,
  InitialPlacement: ModelTransformDataV60,
  MeshBindings: Array<ModelMeshBindingDataV60>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV60>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV60 = {
  Name: string,
  Bones: Array<ModelBoneDataV60>,
  LODType: number,
  ExtendedData: number,
  boneSymmetries: Array<ModelBoneSymmetryV60>
}

export type ModelBoneDataV60 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV60,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV60 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelBoneSymmetryV60 = {
  boneLeft: BigInt,
  boneRight: BigInt
}

export type ModelMeshBindingDataV60 = {
  Mesh: number
}

export type ModelTrackMaskV60 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV60 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV60 = {
  clouds: Array<ModelParticleCloudV60>,
  emitters: Array<ModelParticleEmitterV60>
}

export type ModelParticleCloudV60 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV60 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV60,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV60,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV60,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V60,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV60 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV60 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V60 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV60 = {
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V60
}

export type ModelStreakDataV60 = {
  streaks: Array<ModelStreakV60>,
  anchors: Array<ModelStreakAnchorV60>
}

export type ModelStreakV60 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV60 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV60 = {
  effectLights: Array<ModelEffectLightV60>
}

export type ModelEffectLightV60 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV60 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV60>,
  groupBindings: Array<ModelClothGroupBindingV60>,
  softLocks: Array<ModelClothSoftLockV60>,
  lod0Constraints: Array<ModelClothConstraintV60>,
  lod1Constraints: Array<ModelClothConstraintV60>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lockedNormals: Array<number>,
  lockedTanegents: Array<number>,
  lockedBitangents: Array<number>,
  lod1VertexCount: number,
  flags: number,
  rigidness: number
}

export type ModelClothMeshGroupV60 = {
  weights: Array<ModelClothBoneWeightV60>
}

export type ModelClothBoneWeightV60 = {
  token: BigInt,
  weight: number
}

export type ModelClothGroupBindingV60 = {
  strippedToken: BigInt,
  boneName: string,
  OBBMin: Array<number>,
  OBBMax: Array<number>
}

export type ModelClothSoftLockV60 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV60 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelLightningDataV60 = {
  systems: Array<ModelLightningSystemV60>,
  bolts: Array<ModelLightningBoltV60>,
  nodes: Array<ModelLightningNodeV60>
}

export type ModelLightningSystemV60 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV60 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  flipbook: ModelParticleFlipbookV60,
  fps: number,
  frequency: number,
  groupMax: number,
  groupMin: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  texOffset: number,
  texRange: Array<number>,
  texScale: number,
  texSpeed: number,
  thicknessPreset: number,
  thicknessRange: Array<number>,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV60 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV60 = {
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
  links: Array<ModelBoneConstraintLinkV60>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV60 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV60 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV60 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelFixedOffsetDataV60 = {
  name: BigInt,
  parentBone: BigInt,
  translation: Array<number>
}

export type ModelFileDataV61 = {
  permutations: Array<ModelPermutationDataV61>,
  meshes: Array<ModelMeshDataV61>,
  model: ModelModelDataV61,
  properties: Array<ModelPropertyDataV61>,
  cloudData: ModelCloudDataV61,
  obstacles: Array<ModelObstacleDataV61>,
  streakData: ModelStreakDataV61,
  lightData: ModelLightDataV61,
  clothData: Array<ModelClothDataV61>,
  windData: ModelWindDataV61,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV61,
  boneConstraints: Array<ModelBoneConstraintV61>,
  softBodyData: Array<ModelSoftBodyDataV61>,
  boneOffsetData: Array<ModelBoneOffsetDataV61>,
  fixedOffsetData: Array<ModelFixedOffsetDataV61>,
  modelReference: string
}

export type ModelPermutationDataV61 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV61>
}

export type ModelMaterialDataV61 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV61>,
  constants: Array<ModelConstantDataV61>,
  matConstLinks: Array<ModelMatConstLinkV61>,
  uvTransLinks: Array<ModelUVTransLinkV61>,
  texTransforms: Array<ModelMaterialTexTransformV61>,
  texCoordCount: number
}

export type ModelTextureDataV61 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV61 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV61 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV61 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV61 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV61 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV61>,
  morphTargets: Array<ModelMeshMorphTargetV61>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV61 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV61 = {
  positions: Array<ModelMeshMorphVertV61>,
  normals: Array<ModelMeshMorphVertV61>,
  mesh: BigInt
}

export type ModelMeshMorphVertV61 = {
  index: number,
  vector: Array<number>
}

export type ModelModelDataV61 = {
  Name: string,
  Skeleton: ModelSkeletonDataV61,
  InitialPlacement: ModelTransformDataV61,
  MeshBindings: Array<ModelMeshBindingDataV61>,
  ExtendedData: number,
  boneFlags: Array<number>,
  emitterBones: Array<number>,
  trackMasks: Array<ModelTrackMaskV61>,
  center: Array<number>,
  radius: number
}

export type ModelSkeletonDataV61 = {
  Name: string,
  Bones: Array<ModelBoneDataV61>,
  LODType: number,
  ExtendedData: number,
  boneSymmetries: Array<ModelBoneSymmetryV61>
}

export type ModelBoneDataV61 = {
  Name: string,
  ParentIndex: number,
  LocalTransform: ModelTransformDataV61,
  InverseWorld4x4: Array<Array<number>>,
  LODError: number,
  ExtendedData: number
}

export type ModelTransformDataV61 = {
  Flags: number,
  Position: Array<number>,
  Orientation: Array<number>,
  ScaleShear: Array<Array<number>>
}

export type ModelBoneSymmetryV61 = {
  boneLeft: BigInt,
  boneRight: BigInt
}

export type ModelMeshBindingDataV61 = {
  Mesh: number
}

export type ModelTrackMaskV61 = {
  trackMask: PackGrannyTrackMaskType,
  token: BigInt
}

export type ModelPropertyDataV61 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelCloudDataV61 = {
  clouds: Array<ModelParticleCloudV61>,
  emitters: Array<ModelParticleEmitterV61>
}

export type ModelParticleCloudV61 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV61 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  affinity: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV61,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV61,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV61,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V61,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV61 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV61 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V61 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV61 = {
  affinity: number,
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V61
}

export type ModelStreakDataV61 = {
  streaks: Array<ModelStreakV61>,
  anchors: Array<ModelStreakAnchorV61>
}

export type ModelStreakV61 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV61 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV61 = {
  effectLights: Array<ModelEffectLightV61>
}

export type ModelEffectLightV61 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV61 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV61>,
  groupBindings: Array<ModelClothGroupBindingV61>,
  softLocks: Array<ModelClothSoftLockV61>,
  lod0Constraints: Array<ModelClothConstraintV61>,
  lod1Constraints: Array<ModelClothConstraintV61>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lockedNormals: Array<number>,
  lockedTanegents: Array<number>,
  lockedBitangents: Array<number>,
  lod1VertexCount: number,
  flags: number,
  rigidness: number
}

export type ModelClothMeshGroupV61 = {
  weights: Array<ModelClothBoneWeightV61>
}

export type ModelClothBoneWeightV61 = {
  token: BigInt,
  weight: number
}

export type ModelClothGroupBindingV61 = {
  strippedToken: BigInt,
  boneName: string,
  OBBMin: Array<number>,
  OBBMax: Array<number>
}

export type ModelClothSoftLockV61 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV61 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelWindDataV61 = {
  effectWind: Array<ModelEffectWindV61>
}

export type ModelEffectWindV61 = {
  bone: BigInt,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelLightningDataV61 = {
  systems: Array<ModelLightningSystemV61>,
  bolts: Array<ModelLightningBoltV61>,
  nodes: Array<ModelLightningNodeV61>
}

export type ModelLightningSystemV61 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV61 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  flipbook: ModelParticleFlipbookV61,
  fps: number,
  frequency: number,
  groupMax: number,
  groupMin: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  texOffset: number,
  texRange: Array<number>,
  texScale: number,
  texSpeed: number,
  thicknessPreset: number,
  thicknessRange: Array<number>,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV61 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelBoneConstraintV61 = {
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
  links: Array<ModelBoneConstraintLinkV61>,
  distanceOuter: Array<number>,
  distanceOuterStrength: number,
  distanceOuterType: number,
  twist: Array<number>,
  twistStrength: number,
  twistType: number
}

export type ModelBoneConstraintLinkV61 = {
  angle: number,
  azimuth: number,
  distance: Array<number>,
  token: BigInt
}

export type ModelSoftBodyDataV61 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV61 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelFixedOffsetDataV61 = {
  name: BigInt,
  parentBone: BigInt,
  translation: Array<number>
}

export type ModelFileDataV62 = {
  permutations: Array<ModelPermutationDataV62>,
  meshes: Array<ModelMeshDataV62>,
  cloudData: ModelCloudDataV62,
  obstacles: Array<ModelObstacleDataV62>,
  streakData: ModelStreakDataV62,
  lightData: ModelLightDataV62,
  clothData: Array<ModelClothDataV62>,
  windData: ModelWindDataV62,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV62,
  softBodyData: Array<ModelSoftBodyDataV62>,
  boneOffsetData: Array<ModelBoneOffsetDataV62>,
  boundingSphere: ModelBoundingSphereV62
}

export type ModelPermutationDataV62 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV62>
}

export type ModelMaterialDataV62 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV62>,
  constants: Array<ModelConstantDataV62>,
  matConstLinks: Array<ModelMatConstLinkV62>,
  uvTransLinks: Array<ModelUVTransLinkV62>,
  texTransforms: Array<ModelMaterialTexTransformV62>,
  texCoordCount: number
}

export type ModelTextureDataV62 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV62 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV62 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV62 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV62 = {
  random: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV62 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV62>,
  morphTargets: Array<ModelMeshMorphTargetV62>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV62 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV62 = {
  positions: Array<ModelMeshMorphVertV62>,
  normals: Array<ModelMeshMorphVertV62>,
  mesh: BigInt
}

export type ModelMeshMorphVertV62 = {
  index: number,
  vector: Array<number>
}

export type ModelCloudDataV62 = {
  clouds: Array<ModelParticleCloudV62>,
  emitters: Array<ModelParticleEmitterV62>
}

export type ModelParticleCloudV62 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV62 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  affinity: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV62,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV62,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV62,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V62,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV62 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV62 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V62 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV62 = {
  affinity: number,
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V62
}

export type ModelStreakDataV62 = {
  streaks: Array<ModelStreakV62>,
  anchors: Array<ModelStreakAnchorV62>
}

export type ModelStreakV62 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV62 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV62 = {
  effectLights: Array<ModelEffectLightV62>
}

export type ModelEffectLightV62 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV62 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV62>,
  groupBindings: Array<ModelClothGroupBindingV62>,
  softLocks: Array<ModelClothSoftLockV62>,
  lod0Constraints: Array<ModelClothConstraintV62>,
  lod1Constraints: Array<ModelClothConstraintV62>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lockedNormals: Array<number>,
  lockedTanegents: Array<number>,
  lockedBitangents: Array<number>,
  lod1VertexCount: number,
  flags: number,
  rigidness: number,
  translateWeight: number
}

export type ModelClothMeshGroupV62 = {
  weights: Array<ModelClothBoneWeightV62>
}

export type ModelClothBoneWeightV62 = {
  token: BigInt,
  weight: number
}

export type ModelClothGroupBindingV62 = {
  strippedToken: BigInt,
  boneName: string,
  OBBMin: Array<number>,
  OBBMax: Array<number>
}

export type ModelClothSoftLockV62 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV62 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelWindDataV62 = {
  effectWind: Array<ModelEffectWindV62>
}

export type ModelEffectWindV62 = {
  bone: BigInt,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelLightningDataV62 = {
  systems: Array<ModelLightningSystemV62>,
  bolts: Array<ModelLightningBoltV62>,
  nodes: Array<ModelLightningNodeV62>
}

export type ModelLightningSystemV62 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV62 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  flipbook: ModelParticleFlipbookV62,
  fps: number,
  frequency: number,
  groupMax: number,
  groupMin: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  texOffset: number,
  texRange: Array<number>,
  texScale: number,
  texSpeed: number,
  thicknessPreset: number,
  thicknessRange: Array<number>,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV62 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelSoftBodyDataV62 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV62 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelBoundingSphereV62 = {
  center: Array<number>,
  radius: number
}

export type ModelFileDataV63 = {
  permutations: Array<ModelPermutationDataV63>,
  meshes: Array<ModelMeshDataV63>,
  cloudData: ModelCloudDataV63,
  obstacles: Array<ModelObstacleDataV63>,
  streakData: ModelStreakDataV63,
  lightData: ModelLightDataV63,
  clothData: Array<ModelClothDataV63>,
  windData: ModelWindDataV63,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV63,
  softBodyData: Array<ModelSoftBodyDataV63>,
  boneOffsetData: Array<ModelBoneOffsetDataV63>,
  boundingSphere: ModelBoundingSphereV63
}

export type ModelPermutationDataV63 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV63>
}

export type ModelMaterialDataV63 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV63>,
  constants: Array<ModelConstantDataV63>,
  matConstLinks: Array<ModelMatConstLinkV63>,
  uvTransLinks: Array<ModelUVTransLinkV63>,
  texTransforms: Array<ModelMaterialTexTransformV63>,
  texCoordCount: number
}

export type ModelTextureDataV63 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV63 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV63 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV63 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV63 = {
  flags: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>
}

export type ModelMeshDataV63 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV63>,
  morphTargets: Array<ModelMeshMorphTargetV63>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV63 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV63 = {
  positions: Array<ModelMeshMorphVertV63>,
  normals: Array<ModelMeshMorphVertV63>,
  mesh: BigInt
}

export type ModelMeshMorphVertV63 = {
  index: number,
  vector: Array<number>
}

export type ModelCloudDataV63 = {
  clouds: Array<ModelParticleCloudV63>,
  emitters: Array<ModelParticleEmitterV63>
}

export type ModelParticleCloudV63 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV63 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  affinity: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV63,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV63,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV63,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V63,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV63 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV63 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V63 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV63 = {
  affinity: number,
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V63
}

export type ModelStreakDataV63 = {
  streaks: Array<ModelStreakV63>,
  anchors: Array<ModelStreakAnchorV63>
}

export type ModelStreakV63 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV63 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV63 = {
  effectLights: Array<ModelEffectLightV63>
}

export type ModelEffectLightV63 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV63 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV63>,
  groupBindings: Array<ModelClothGroupBindingV63>,
  softLocks: Array<ModelClothSoftLockV63>,
  lod0Constraints: Array<ModelClothConstraintV63>,
  lod1Constraints: Array<ModelClothConstraintV63>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lockedNormals: Array<number>,
  lockedTanegents: Array<number>,
  lockedBitangents: Array<number>,
  lod1VertexCount: number,
  flags: number,
  rigidness: number,
  translateWeight: number
}

export type ModelClothMeshGroupV63 = {
  weights: Array<ModelClothBoneWeightV63>
}

export type ModelClothBoneWeightV63 = {
  token: BigInt,
  weight: number
}

export type ModelClothGroupBindingV63 = {
  strippedToken: BigInt,
  boneName: string,
  OBBMin: Array<number>,
  OBBMax: Array<number>
}

export type ModelClothSoftLockV63 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV63 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelWindDataV63 = {
  effectWind: Array<ModelEffectWindV63>
}

export type ModelEffectWindV63 = {
  bone: BigInt,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelLightningDataV63 = {
  systems: Array<ModelLightningSystemV63>,
  bolts: Array<ModelLightningBoltV63>,
  nodes: Array<ModelLightningNodeV63>
}

export type ModelLightningSystemV63 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV63 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  flipbook: ModelParticleFlipbookV63,
  fps: number,
  frequency: number,
  groupMax: number,
  groupMin: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  texOffset: number,
  texRange: Array<number>,
  texScale: number,
  texSpeed: number,
  thicknessPreset: number,
  thicknessRange: Array<number>,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV63 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelSoftBodyDataV63 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV63 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelBoundingSphereV63 = {
  center: Array<number>,
  radius: number
}

export type ModelFileDataV64 = {
  permutations: Array<ModelPermutationDataV64>,
  meshes: Array<ModelMeshDataV64>,
  cloudData: ModelCloudDataV64,
  obstacles: Array<ModelObstacleDataV64>,
  streakData: ModelStreakDataV64,
  lightData: ModelLightDataV64,
  clothData: Array<ModelClothDataV64>,
  windData: ModelWindDataV64,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV64,
  softBodyData: Array<ModelSoftBodyDataV64>,
  boneOffsetData: Array<ModelBoneOffsetDataV64>,
  boundingSphere: ModelBoundingSphereV64
}

export type ModelPermutationDataV64 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV64>
}

export type ModelMaterialDataV64 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV64>,
  constants: Array<ModelConstantDataV64>,
  matConstLinks: Array<ModelMatConstLinkV64>,
  uvTransLinks: Array<ModelUVTransLinkV64>,
  texTransforms: Array<ModelMaterialTexTransformV64>,
  texCoordCount: number
}

export type ModelTextureDataV64 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV64 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV64 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV64 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV64 = {
  flags: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>,
  scrollFreq: Array<number>,
  scale: Array<number>,
  scaleFreq: Array<number>,
  rotate: number
}

export type ModelMeshDataV64 = {
  visBone: BigInt,
  lods: Array<ModelMeshLodDataV64>,
  morphTargets: Array<ModelMeshMorphTargetV64>,
  mesh: PackGrannyMeshType,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: BigInt,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string
}

export type ModelMeshLodDataV64 = {
  indices: Array<number>
}

export type ModelMeshMorphTargetV64 = {
  positions: Array<ModelMeshMorphVertV64>,
  normals: Array<ModelMeshMorphVertV64>,
  mesh: BigInt
}

export type ModelMeshMorphVertV64 = {
  index: number,
  vector: Array<number>
}

export type ModelCloudDataV64 = {
  clouds: Array<ModelParticleCloudV64>,
  emitters: Array<ModelParticleEmitterV64>
}

export type ModelParticleCloudV64 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV64 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  affinity: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV64,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV64,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV64,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V64,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV64 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV64 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V64 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV64 = {
  affinity: number,
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V64
}

export type ModelStreakDataV64 = {
  streaks: Array<ModelStreakV64>,
  anchors: Array<ModelStreakAnchorV64>
}

export type ModelStreakV64 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV64 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV64 = {
  effectLights: Array<ModelEffectLightV64>
}

export type ModelEffectLightV64 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV64 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV64>,
  groupBindings: Array<ModelClothGroupBindingV64>,
  softLocks: Array<ModelClothSoftLockV64>,
  lod0Constraints: Array<ModelClothConstraintV64>,
  lod1Constraints: Array<ModelClothConstraintV64>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lockedNormals: Array<number>,
  lockedTanegents: Array<number>,
  lockedBitangents: Array<number>,
  lod1VertexCount: number,
  flags: number,
  rigidness: number,
  translateWeight: number,
  visBone: BigInt
}

export type ModelClothMeshGroupV64 = {
  weights: Array<ModelClothBoneWeightV64>
}

export type ModelClothBoneWeightV64 = {
  token: BigInt,
  weight: number
}

export type ModelClothGroupBindingV64 = {
  strippedToken: BigInt,
  boneName: string,
  OBBMin: Array<number>,
  OBBMax: Array<number>
}

export type ModelClothSoftLockV64 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV64 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelWindDataV64 = {
  effectWind: Array<ModelEffectWindV64>
}

export type ModelEffectWindV64 = {
  bone: BigInt,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelLightningDataV64 = {
  systems: Array<ModelLightningSystemV64>,
  bolts: Array<ModelLightningBoltV64>,
  nodes: Array<ModelLightningNodeV64>
}

export type ModelLightningSystemV64 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV64 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  flipbook: ModelParticleFlipbookV64,
  fps: number,
  frequency: number,
  groupMax: number,
  groupMin: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  texOffset: number,
  texRange: Array<number>,
  texScale: number,
  texSpeed: number,
  thicknessPreset: number,
  thicknessRange: Array<number>,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV64 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelSoftBodyDataV64 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV64 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelBoundingSphereV64 = {
  center: Array<number>,
  radius: number
}

export type ModelFileDataV65 = {
  permutations: Array<ModelPermutationDataV65>,
  cloudData: ModelCloudDataV65,
  obstacles: Array<ModelObstacleDataV65>,
  streakData: ModelStreakDataV65,
  lightData: ModelLightDataV65,
  clothData: Array<ModelClothDataV65>,
  windData: ModelWindDataV65,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV65,
  softBodyData: Array<ModelSoftBodyDataV65>,
  boneOffsetData: Array<ModelBoneOffsetDataV65>,
  boundingSphere: ModelBoundingSphereV65
}

export type ModelPermutationDataV65 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV65>
}

export type ModelMaterialDataV65 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV65>,
  constants: Array<ModelConstantDataV65>,
  matConstLinks: Array<ModelMatConstLinkV65>,
  uvTransLinks: Array<ModelUVTransLinkV65>,
  texTransforms: Array<ModelMaterialTexTransformV65>,
  texCoordCount: number
}

export type ModelTextureDataV65 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV65 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV65 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV65 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV65 = {
  flags: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>,
  scrollFreq: Array<number>,
  scale: Array<number>,
  scaleFreq: Array<number>,
  rotate: number
}

export type ModelCloudDataV65 = {
  clouds: Array<ModelParticleCloudV65>,
  emitters: Array<ModelParticleEmitterV65>
}

export type ModelParticleCloudV65 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV65 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  affinity: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV65,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV65,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV65,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V65,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV65 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV65 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V65 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV65 = {
  affinity: number,
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V65
}

export type ModelStreakDataV65 = {
  streaks: Array<ModelStreakV65>,
  anchors: Array<ModelStreakAnchorV65>
}

export type ModelStreakV65 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV65 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV65 = {
  effectLights: Array<ModelEffectLightV65>
}

export type ModelEffectLightV65 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV65 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV65>,
  groupBindings: Array<ModelClothGroupBindingV65>,
  softLocks: Array<ModelClothSoftLockV65>,
  lod0Constraints: Array<ModelClothConstraintV65>,
  lod1Constraints: Array<ModelClothConstraintV65>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lockedNormals: Array<number>,
  lockedTanegents: Array<number>,
  lockedBitangents: Array<number>,
  lod1VertexCount: number,
  flags: number,
  rigidness: number,
  translateWeight: number,
  visBone: BigInt
}

export type ModelClothMeshGroupV65 = {
  weights: Array<ModelClothBoneWeightV65>
}

export type ModelClothBoneWeightV65 = {
  token: BigInt,
  weight: number
}

export type ModelClothGroupBindingV65 = {
  strippedToken: BigInt,
  boneName: string,
  OBBMin: Array<number>,
  OBBMax: Array<number>
}

export type ModelClothSoftLockV65 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV65 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelWindDataV65 = {
  effectWind: Array<ModelEffectWindV65>
}

export type ModelEffectWindV65 = {
  bone: BigInt,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelLightningDataV65 = {
  systems: Array<ModelLightningSystemV65>,
  bolts: Array<ModelLightningBoltV65>,
  nodes: Array<ModelLightningNodeV65>
}

export type ModelLightningSystemV65 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV65 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  flipbook: ModelParticleFlipbookV65,
  fps: number,
  frequency: number,
  groupMax: number,
  groupMin: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  texOffset: number,
  texRange: Array<number>,
  texScale: number,
  texSpeed: number,
  thicknessPreset: number,
  thicknessRange: Array<number>,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV65 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelSoftBodyDataV65 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV65 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelBoundingSphereV65 = {
  center: Array<number>,
  radius: number
}

export type ModelFileDataV66 = {
  permutations: Array<ModelPermutationDataV66>,
  cloudData: ModelCloudDataV66,
  obstacles: Array<ModelObstacleDataV66>,
  streakData: ModelStreakDataV66,
  lightData: ModelLightDataV66,
  clothData: Array<ModelClothDataV66>,
  windData: ModelWindDataV66,
  actionOffsetNames: Array<BigInt>,
  actionOffsets: Array<Array<number>>,
  lodOverride: Array<number>,
  soundScript: string,
  lightningData: ModelLightningDataV66,
  softBodyData: Array<ModelSoftBodyDataV66>,
  boneOffsetData: Array<ModelBoneOffsetDataV66>,
  boundingSphere: ModelBoundingSphereV66
}

export type ModelPermutationDataV66 = {
  token: BigInt,
  materials: Array<ModelMaterialDataV66>
}

export type ModelMaterialDataV66 = {
  token: BigInt,
  materialId: number,
  filename: string,
  materialFlags: number,
  sortOrder: number,
  textures: Array<ModelTextureDataV66>,
  constants: Array<ModelConstantDataV66>,
  matConstLinks: Array<ModelMatConstLinkV66>,
  uvTransLinks: Array<ModelUVTransLinkV66>,
  texTransforms: Array<ModelMaterialTexTransformV66>,
  texCoordCount: number,
  sortLayer: number
}

export type ModelTextureDataV66 = {
  filename: string,
  textureFlags: number,
  token: BigInt,
  blitId: BigInt,
  uvAnimId: number,
  uvPSInputIndex: number
}

export type ModelConstantDataV66 = {
  name: number,
  value: Array<number>,
  constantFlags: number
}

export type ModelMatConstLinkV66 = {
  linkToken: BigInt,
  constantToken: number
}

export type ModelUVTransLinkV66 = {
  linkToken: BigInt,
  uvAnimId: number,
  type: number
}

export type ModelMaterialTexTransformV66 = {
  flags: number,
  uvIndex: number,
  columns: number,
  rows: number,
  count: number,
  fps: number,
  scroll: Array<number>,
  scrollFreq: Array<number>,
  scale: Array<number>,
  scaleFreq: Array<number>,
  rotate: number
}

export type ModelCloudDataV66 = {
  clouds: Array<ModelParticleCloudV66>,
  emitters: Array<ModelParticleEmitterV66>
}

export type ModelParticleCloudV66 = {
  acceleration: Array<number>,
  bone: BigInt,
  drag: number,
  emitterIndices: Array<number>,
  fvf: number,
  flags: number,
  materialIndex: number,
  obstacleIndices: Array<number>,
  velocity: Array<number>
}

export type ModelParticleEmitterV66 = {
  acceleration: Array<Array<number>>,
  accelerationDistRange: Array<number>,
  accelerationDistSpeed: Array<number>,
  affinity: number,
  alignmentDir: Array<number>,
  bone: BigInt,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  drag: number,
  emitterFlags: number,
  offset: number,
  opacityCurve: ModelParticleCurveV66,
  opacityCurvePreset: number,
  flags: number,
  flipbook: ModelParticleFlipbookV66,
  lifetime: Array<number>,
  rotationChange: Array<number>,
  rotationDrag: number,
  rotationInitial: Array<number>,
  scaleChange: Array<Array<number>>,
  scaleInitial: Array<Array<number>>,
  scaleCurve: ModelParticleCurveV66,
  scaleCurvePreset: number,
  velocity: Array<Array<number>>,
  velocityDistRange: Array<number>,
  velocityDistSpeed: Array<number>,
  velocityInherit: Array<number>,
  spawnGroupSize: Array<number>,
  spawnPeriod: number,
  spawnProbability: number,
  spawnRadius: Array<number>,
  spawnWindEmit: Array<number>,
  spawnWindSpeed: Array<number>,
  texCoordRect: Array<number>,
  transform: ModelMatrix43V66,
  windInfluence: number,
  alignmentType: number,
  spawnShape: number
}

export type ModelParticleCurveV66 = {
  curveType: number,
  keys: Array<Array<number>>
}

export type ModelParticleFlipbookV66 = {
  columns: number,
  count: number,
  fps: number,
  rows: number,
  start: number
}

export type ModelMatrix43V66 = {
  x: Array<number>,
  y: Array<number>,
  z: Array<number>
}

export type ModelObstacleDataV66 = {
  affinity: number,
  bone: BigInt,
  type: number,
  response: number,
  flags: number,
  dragCoef: number,
  gravityCoef: number,
  length: number,
  width: number,
  height: number,
  radius: number,
  transform: ModelMatrix43V66
}

export type ModelStreakDataV66 = {
  streaks: Array<ModelStreakV66>,
  anchors: Array<ModelStreakAnchorV66>
}

export type ModelStreakV66 = {
  acceleration: Array<number>,
  velocity: Array<number>,
  anchorIndices: Array<number>,
  bone: BigInt,
  flags: number,
  jitter: number,
  materialIndex: number,
  noise: number,
  spawnDist: number,
  texScale: number,
  wind: number
}

export type ModelStreakAnchorV66 = {
  bone: BigInt,
  colorStart: number,
  colorEnd: number,
  falloff: number,
  lifetime: number,
  flags: number,
  texV: number
}

export type ModelLightDataV66 = {
  effectLights: Array<ModelEffectLightV66>
}

export type ModelEffectLightV66 = {
  bone: BigInt,
  color: Array<number>,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelClothDataV66 = {
  materialIndex: number,
  drag: number,
  gravity: number,
  compressibility: number,
  slack: number,
  stretchiness: number,
  weight: number,
  wind: number,
  mesh: PackVertexType,
  indices: Array<number>,
  groups: Array<ModelClothMeshGroupV66>,
  groupBindings: Array<ModelClothGroupBindingV66>,
  softLocks: Array<ModelClothSoftLockV66>,
  lod0Constraints: Array<ModelClothConstraintV66>,
  lod1Constraints: Array<ModelClothConstraintV66>,
  lod1Indices: Array<number>,
  barycentricCoords: Array<Array<number>>,
  barycentricIndices: Array<number>,
  obstacleIndices: Array<number>,
  lockCount: number,
  lockedNormals: Array<number>,
  lockedTanegents: Array<number>,
  lockedBitangents: Array<number>,
  lod1VertexCount: number,
  flags: number,
  rigidness: number,
  translateWeight: number,
  visBone: BigInt
}

export type ModelClothMeshGroupV66 = {
  weights: Array<ModelClothBoneWeightV66>
}

export type ModelClothBoneWeightV66 = {
  token: BigInt,
  weight: number
}

export type ModelClothGroupBindingV66 = {
  strippedToken: BigInt,
  boneName: string,
  OBBMin: Array<number>,
  OBBMax: Array<number>
}

export type ModelClothSoftLockV66 = {
  weight: number,
  vertIndex: number
}

export type ModelClothConstraintV66 = {
  distance: number,
  relationship: number,
  vertIndexA: number,
  vertIndexB: number
}

export type ModelWindDataV66 = {
  effectWind: Array<ModelEffectWindV66>
}

export type ModelEffectWindV66 = {
  bone: BigInt,
  farDistance: number,
  intensity: number,
  nearDistance: number
}

export type ModelLightningDataV66 = {
  systems: Array<ModelLightningSystemV66>,
  bolts: Array<ModelLightningBoltV66>,
  nodes: Array<ModelLightningNodeV66>
}

export type ModelLightningSystemV66 = {
  bone: BigInt,
  boltIndices: Array<number>,
  flags: number,
  fvf: number,
  materialIndex: number
}

export type ModelLightningBoltV66 = {
  bone: BigInt,
  nodeIndices: Array<number>,
  colorBegin: Array<number>,
  colorEnd: Array<number>,
  colorPeriod: number,
  colorFalloff: Array<number>,
  flags: number,
  flipbook: ModelParticleFlipbookV66,
  fps: number,
  frequency: number,
  groupMax: number,
  groupMin: number,
  probability: number,
  lifetime: Array<number>,
  numSegments: number,
  opacity: Array<number>,
  opacityPreset: number,
  texOffset: number,
  texRange: Array<number>,
  texScale: number,
  texSpeed: number,
  thicknessPreset: number,
  thicknessRange: Array<number>,
  type: number,
  variance: number,
  variancePreset: number,
  noise: number
}

export type ModelLightningNodeV66 = {
  bone: BigInt,
  childrenIndices: Array<number>,
  flags: number,
  probability: number,
  radius: Array<number>,
  shape: number,
  updatePos: number
}

export type ModelSoftBodyDataV66 = {
  materialIndex: number,
  flags: number,
  vertexFvf: number,
  vertBytes: Array<number>,
  indices: Array<number>,
  bones: Array<BigInt>
}

export type ModelBoneOffsetDataV66 = {
  bone: BigInt,
  translation: Array<number>,
  rotation: Array<number>,
  boneInverseOffset: Array<Array<number>>
}

export type ModelBoundingSphereV66 = {
  center: Array<number>,
  radius: number
}