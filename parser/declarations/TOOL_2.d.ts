

export type ModelFileToolV0 = {
  materialNames: Array<string>,
  cloudData: ModelToolCloudV0
}

export type ModelToolCloudV0 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>,
  obstacleNames: Array<string>
}

export type ModelFileToolV1 = {
  materialNames: Array<string>,
  cloudData: ModelToolCloudV1,
  motions: Array<ModelToolMotionV1>
}

export type ModelToolCloudV1 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>,
  obstacleNames: Array<string>
}

export type ModelToolMotionV1 = {
  sequence: BigInt,
  keys: Array<number>,
  values: Array<Array<number>>
}

export type ModelFileToolV2 = {
  materialNames: Array<string>,
  cloudData: ModelToolCloudV2,
  motions: Array<ModelToolMotionV2>,
  blitTextures: Array<ModelToolBlitTextureV2>
}

export type ModelToolCloudV2 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>,
  obstacleNames: Array<string>
}

export type ModelToolMotionV2 = {
  sequence: BigInt,
  keys: Array<number>,
  values: Array<Array<number>>
}

export type ModelToolBlitTextureV2 = {
  blitId: BigInt,
  filename: string
}

export type ModelFileToolV3 = {
  modelType: BigInt,
  materialNames: Array<string>,
  cloudData: ModelToolCloudV3,
  motions: Array<ModelToolMotionV3>,
  blitTextures: Array<ModelToolBlitTextureV3>
}

export type ModelToolCloudV3 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>,
  obstacleNames: Array<string>
}

export type ModelToolMotionV3 = {
  sequence: BigInt,
  keys: Array<number>,
  values: Array<Array<number>>
}

export type ModelToolBlitTextureV3 = {
  blitId: BigInt,
  filename: string
}

export type ModelFileToolV4 = {
  modelType: BigInt,
  materialNames: Array<string>,
  cloudData: ModelToolCloudV4,
  motions: Array<ModelToolMotionV4>,
  blitTextures: Array<ModelToolBlitTextureV4>,
  streakData: ModelToolStreakV4
}

export type ModelToolCloudV4 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>,
  obstacleNames: Array<string>
}

export type ModelToolMotionV4 = {
  sequence: BigInt,
  keys: Array<number>,
  values: Array<Array<number>>
}

export type ModelToolBlitTextureV4 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV4 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelFileToolV5 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV5,
  motions: Array<ModelToolMotionV5>,
  blitTextures: Array<ModelToolBlitTextureV5>,
  streakData: ModelToolStreakV5
}

export type ModelToolCloudV5 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolMotionV5 = {
  sequence: BigInt,
  keys: Array<number>,
  values: Array<Array<number>>
}

export type ModelToolBlitTextureV5 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV5 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelFileToolV6 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV6,
  blitTextures: Array<ModelToolBlitTextureV6>,
  streakData: ModelToolStreakV6
}

export type ModelToolCloudV6 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV6 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV6 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelFileToolV7 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV7,
  blitTextures: Array<ModelToolBlitTextureV7>,
  streakData: ModelToolStreakV7,
  lightningData: ModelToolLightningV7
}

export type ModelToolCloudV7 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV7 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV7 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV7 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelFileToolV8 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV8,
  blitTextures: Array<ModelToolBlitTextureV8>,
  streakData: ModelToolStreakV8,
  lightningData: ModelToolLightningV8,
  permutationTokens: Array<BigInt>
}

export type ModelToolCloudV8 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV8 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV8 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV8 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelFileToolV9 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV9,
  blitTextures: Array<ModelToolBlitTextureV9>,
  streakData: ModelToolStreakV9,
  lightningData: ModelToolLightningV9,
  permutationTokens: Array<BigInt>,
  properties: Array<ModelToolPropertyDataV9>
}

export type ModelToolCloudV9 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV9 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV9 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV9 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelToolPropertyDataV9 = {
  id: BigInt,
  type: number,
  mergeIndex: number,
  time: number,
  val: BigInt,
  strVal: string
}

export type ModelFileToolV10 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV10,
  blitTextures: Array<ModelToolBlitTextureV10>,
  streakData: ModelToolStreakV10,
  lightningData: ModelToolLightningV10,
  permutationTokens: Array<BigInt>
}

export type ModelToolCloudV10 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV10 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV10 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV10 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelFileToolV11 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV11,
  blitTextures: Array<ModelToolBlitTextureV11>,
  streakData: ModelToolStreakV11,
  lightningData: ModelToolLightningV11,
  permutationTokens: Array<BigInt>
}

export type ModelToolCloudV11 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV11 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV11 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV11 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelFileToolV12 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV12,
  blitTextures: Array<ModelToolBlitTextureV12>,
  streakData: ModelToolStreakV12,
  lightningData: ModelToolLightningV12,
  permutationTokens: Array<BigInt>,
  highLodAnimations: Array<ModelToolAnimationV12>
}

export type ModelToolCloudV12 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV12 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV12 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV12 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelToolAnimationV12 = {
  name: BigInt,
  filename: string,
  data: PackGrannyAnimationTypeV0
}

export type PackGrannyAnimationTypeV0 = {
  animation: Array<number>
}

export type ModelFileToolV13 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV13,
  blitTextures: Array<ModelToolBlitTextureV13>,
  streakData: ModelToolStreakV13,
  lightningData: ModelToolLightningV13,
  permutationTokens: Array<BigInt>,
  highLodAnimations: Array<ModelToolAnimationV13>
}

export type ModelToolCloudV13 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV13 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV13 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV13 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelToolAnimationV13 = {
  name: BigInt,
  filename: string,
  data: PackGrannyAnimationTypeV0
}

export type ModelFileToolV14 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV14,
  blitTextures: Array<ModelToolBlitTextureV14>,
  streakData: ModelToolStreakV14,
  lightningData: ModelToolLightningV14,
  permutationTokens: Array<BigInt>,
  highLodAnimations: Array<ModelToolAnimationV14>,
  compressionInfos: Array<ModelSequenceCompressionInfoV14>
}

export type ModelToolCloudV14 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV14 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV14 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV14 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelToolAnimationV14 = {
  name: BigInt,
  filename: string,
  data: PackGrannyAnimationTypeV0
}

export type ModelSequenceCompressionInfoV14 = {
  animToken: BigInt,
  cmpGroup: string,
  cmpType: string
}

export type ModelFileToolV15 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV15,
  blitTextures: Array<ModelToolBlitTextureV15>,
  streakData: ModelToolStreakV15,
  lightningData: ModelToolLightningV15,
  permutationTokens: Array<BigInt>,
  highLodAnimations: Array<ModelToolAnimationV15>,
  compressionInfos: Array<ModelSequenceCompressionInfoV15>,
  region: string
}

export type ModelToolCloudV15 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV15 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV15 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV15 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelToolAnimationV15 = {
  name: BigInt,
  filename: string,
  data: PackGrannyAnimationTypeV0
}

export type ModelSequenceCompressionInfoV15 = {
  animToken: BigInt,
  cmpGroup: string,
  cmpType: string
}

export type ModelFileToolV16 = {
  modelType: BigInt,
  materialNames: Array<string>,
  obstacleNames: Array<string>,
  cloudData: ModelToolCloudV16,
  blitTextures: Array<ModelToolBlitTextureV16>,
  streakData: ModelToolStreakV16,
  lightningData: ModelToolLightningV16,
  permutationTokens: Array<BigInt>,
  highLodAnimations: Array<ModelToolAnimationV16>,
  compressionInfos: Array<ModelSequenceCompressionInfoV16>,
  region: string
}

export type ModelToolCloudV16 = {
  cloudNames: Array<string>,
  emitterNames: Array<string>
}

export type ModelToolBlitTextureV16 = {
  blitId: BigInt,
  filename: string
}

export type ModelToolStreakV16 = {
  streakNames: Array<string>,
  anchorNames: Array<string>
}

export type ModelToolLightningV16 = {
  systemNames: Array<string>,
  boltNames: Array<string>,
  nodeNames: Array<string>
}

export type ModelToolAnimationV16 = {
  name: BigInt,
  filename: string,
  data: PackGrannyAnimationTypeV1
}

export type PackGrannyAnimationTypeV1 = {
  animation: Array<number>,
  pointers: Array<number>
}

export type ModelSequenceCompressionInfoV16 = {
  animToken: BigInt,
  cmpGroup: string,
  cmpType: string
}