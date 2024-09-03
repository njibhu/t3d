export namespace V0_N {
  export type ModelFileToolV0 = {
    materialNames: Array<string>,
    cloudData: ModelToolCloudV0
  }

  export type ModelToolCloudV0 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>,
    obstacleNames: Array<string>
  }

}

export type V0 = V0_N.ModelFileToolV0;

export namespace V1_N {
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
    sequence: number,
    keys: Array<number>,
    values: Array<Array<number>>
  }

}

export type V1 = V1_N.ModelFileToolV1;

export namespace V2_N {
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
    sequence: number,
    keys: Array<number>,
    values: Array<Array<number>>
  }

  export type ModelToolBlitTextureV2 = {
    blitId: number,
    filename: string
  }

}

export type V2 = V2_N.ModelFileToolV2;

export namespace V3_N {
  export type ModelFileToolV3 = {
    modelType: number,
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
    sequence: number,
    keys: Array<number>,
    values: Array<Array<number>>
  }

  export type ModelToolBlitTextureV3 = {
    blitId: number,
    filename: string
  }

}

export type V3 = V3_N.ModelFileToolV3;

export namespace V4_N {
  export type ModelFileToolV4 = {
    modelType: number,
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
    sequence: number,
    keys: Array<number>,
    values: Array<Array<number>>
  }

  export type ModelToolBlitTextureV4 = {
    blitId: number,
    filename: string
  }

  export type ModelToolStreakV4 = {
    streakNames: Array<string>,
    anchorNames: Array<string>
  }

}

export type V4 = V4_N.ModelFileToolV4;

export namespace V5_N {
  export type ModelFileToolV5 = {
    modelType: number,
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
    sequence: number,
    keys: Array<number>,
    values: Array<Array<number>>
  }

  export type ModelToolBlitTextureV5 = {
    blitId: number,
    filename: string
  }

  export type ModelToolStreakV5 = {
    streakNames: Array<string>,
    anchorNames: Array<string>
  }

}

export type V5 = V5_N.ModelFileToolV5;

export namespace V6_N {
  export type ModelFileToolV6 = {
    modelType: number,
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
    blitId: number,
    filename: string
  }

  export type ModelToolStreakV6 = {
    streakNames: Array<string>,
    anchorNames: Array<string>
  }

}

export type V6 = V6_N.ModelFileToolV6;

export namespace V7_N {
  export type ModelFileToolV7 = {
    modelType: number,
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
    blitId: number,
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

}

export type V7 = V7_N.ModelFileToolV7;

export namespace V8_N {
  export type ModelFileToolV8 = {
    modelType: number,
    materialNames: Array<string>,
    obstacleNames: Array<string>,
    cloudData: ModelToolCloudV8,
    blitTextures: Array<ModelToolBlitTextureV8>,
    streakData: ModelToolStreakV8,
    lightningData: ModelToolLightningV8,
    permutationTokens: Array<number>
  }

  export type ModelToolCloudV8 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>
  }

  export type ModelToolBlitTextureV8 = {
    blitId: number,
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

}

export type V8 = V8_N.ModelFileToolV8;

export namespace V9_N {
  export type ModelFileToolV9 = {
    modelType: number,
    materialNames: Array<string>,
    obstacleNames: Array<string>,
    cloudData: ModelToolCloudV9,
    blitTextures: Array<ModelToolBlitTextureV9>,
    streakData: ModelToolStreakV9,
    lightningData: ModelToolLightningV9,
    permutationTokens: Array<number>,
    properties: Array<ModelToolPropertyDataV9>
  }

  export type ModelToolCloudV9 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>
  }

  export type ModelToolBlitTextureV9 = {
    blitId: number,
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
    id: number,
    type: number,
    mergeIndex: number,
    time: number,
    val: number,
    strVal: string
  }

}

export type V9 = V9_N.ModelFileToolV9;

export namespace V10_N {
  export type ModelFileToolV10 = {
    modelType: number,
    materialNames: Array<string>,
    obstacleNames: Array<string>,
    cloudData: ModelToolCloudV10,
    blitTextures: Array<ModelToolBlitTextureV10>,
    streakData: ModelToolStreakV10,
    lightningData: ModelToolLightningV10,
    permutationTokens: Array<number>
  }

  export type ModelToolCloudV10 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>
  }

  export type ModelToolBlitTextureV10 = {
    blitId: number,
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

}

export type V10 = V10_N.ModelFileToolV10;

export namespace V11_N {
  export type ModelFileToolV11 = {
    modelType: number,
    materialNames: Array<string>,
    obstacleNames: Array<string>,
    cloudData: ModelToolCloudV11,
    blitTextures: Array<ModelToolBlitTextureV11>,
    streakData: ModelToolStreakV11,
    lightningData: ModelToolLightningV11,
    permutationTokens: Array<number>
  }

  export type ModelToolCloudV11 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>
  }

  export type ModelToolBlitTextureV11 = {
    blitId: number,
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

}

export type V11 = V11_N.ModelFileToolV11;

export namespace V12_N {
  export type ModelFileToolV12 = {
    modelType: number,
    materialNames: Array<string>,
    obstacleNames: Array<string>,
    cloudData: ModelToolCloudV12,
    blitTextures: Array<ModelToolBlitTextureV12>,
    streakData: ModelToolStreakV12,
    lightningData: ModelToolLightningV12,
    permutationTokens: Array<number>,
    highLodAnimations: Array<ModelToolAnimationV12>
  }

  export type ModelToolCloudV12 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>
  }

  export type ModelToolBlitTextureV12 = {
    blitId: number,
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
    name: number,
    filename: string,
    data: PackGrannyAnimationTypeV0
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Array<number>
  }

}

export type V12 = V12_N.ModelFileToolV12;

export namespace V13_N {
  export type ModelFileToolV13 = {
    modelType: number,
    materialNames: Array<string>,
    obstacleNames: Array<string>,
    cloudData: ModelToolCloudV13,
    blitTextures: Array<ModelToolBlitTextureV13>,
    streakData: ModelToolStreakV13,
    lightningData: ModelToolLightningV13,
    permutationTokens: Array<number>,
    highLodAnimations: Array<ModelToolAnimationV13>
  }

  export type ModelToolCloudV13 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>
  }

  export type ModelToolBlitTextureV13 = {
    blitId: number,
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
    name: number,
    filename: string,
    data: PackGrannyAnimationTypeV0
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Array<number>
  }

}

export type V13 = V13_N.ModelFileToolV13;

export namespace V14_N {
  export type ModelFileToolV14 = {
    modelType: number,
    materialNames: Array<string>,
    obstacleNames: Array<string>,
    cloudData: ModelToolCloudV14,
    blitTextures: Array<ModelToolBlitTextureV14>,
    streakData: ModelToolStreakV14,
    lightningData: ModelToolLightningV14,
    permutationTokens: Array<number>,
    highLodAnimations: Array<ModelToolAnimationV14>,
    compressionInfos: Array<ModelSequenceCompressionInfoV14>
  }

  export type ModelToolCloudV14 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>
  }

  export type ModelToolBlitTextureV14 = {
    blitId: number,
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
    name: number,
    filename: string,
    data: PackGrannyAnimationTypeV0
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Array<number>
  }

  export type ModelSequenceCompressionInfoV14 = {
    animToken: number,
    cmpGroup: string,
    cmpType: string
  }

}

export type V14 = V14_N.ModelFileToolV14;

export namespace V15_N {
  export type ModelFileToolV15 = {
    modelType: number,
    materialNames: Array<string>,
    obstacleNames: Array<string>,
    cloudData: ModelToolCloudV15,
    blitTextures: Array<ModelToolBlitTextureV15>,
    streakData: ModelToolStreakV15,
    lightningData: ModelToolLightningV15,
    permutationTokens: Array<number>,
    highLodAnimations: Array<ModelToolAnimationV15>,
    compressionInfos: Array<ModelSequenceCompressionInfoV15>,
    region: string
  }

  export type ModelToolCloudV15 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>
  }

  export type ModelToolBlitTextureV15 = {
    blitId: number,
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
    name: number,
    filename: string,
    data: PackGrannyAnimationTypeV0
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Array<number>
  }

  export type ModelSequenceCompressionInfoV15 = {
    animToken: number,
    cmpGroup: string,
    cmpType: string
  }

}

export type V15 = V15_N.ModelFileToolV15;

export namespace V16_N {
  export type ModelFileToolV16 = {
    modelType: number,
    materialNames: Array<string>,
    obstacleNames: Array<string>,
    cloudData: ModelToolCloudV16,
    blitTextures: Array<ModelToolBlitTextureV16>,
    streakData: ModelToolStreakV16,
    lightningData: ModelToolLightningV16,
    permutationTokens: Array<number>,
    highLodAnimations: Array<ModelToolAnimationV16>,
    compressionInfos: Array<ModelSequenceCompressionInfoV16>,
    region: string
  }

  export type ModelToolCloudV16 = {
    cloudNames: Array<string>,
    emitterNames: Array<string>
  }

  export type ModelToolBlitTextureV16 = {
    blitId: number,
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
    name: number,
    filename: string,
    data: PackGrannyAnimationTypeV1
  }

  export type PackGrannyAnimationTypeV1 = {
    animation: Array<number>,
    pointers: Array<number>
  }

  export type ModelSequenceCompressionInfoV16 = {
    animToken: number,
    cmpGroup: string,
    cmpType: string
  }

}

export type V16 = V16_N.ModelFileToolV16;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V6_U = V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V7_U = V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V8_U = V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V9_U = V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V10_U = V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V11_U = V11 | V12 | V13 | V14 | V15 | V16;
export type V12_U = V12 | V13 | V14 | V15 | V16;
export type V13_U = V13 | V14 | V15 | V16;
export type V14_U = V14 | V15 | V16;
export type V15_U = V15 | V16;
export type V16_U = V16;
