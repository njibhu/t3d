export namespace V0_N {
  export type ModelFileAnimationV0 = {
    animations: Array<ModelAnimationDataV8>,
    compoundAnimations: Array<ModelCompoundAnimationDataV0>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV8>
  }

  export type ModelAnimationDataV8 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV8>,
    uvAnimData: Array<ModelUVAnimationV0>
  }

  export type ModelVisTrackDataV8 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV0 = {
    uvAnimId: number,
    uvTransformData: Array<ModelUVTransformV0>
  }

  export type ModelUVTransformV0 = {
    type: number,
    vectorTrackIndex: number
  }

  export type ModelCompoundAnimationDataV0 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV8 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V0 = V0_N.ModelFileAnimationV0;

export namespace V1_N {
  export type ModelFileAnimationV1 = {
    animations: Array<ModelAnimationDataV9>,
    compoundAnimations: Array<ModelCompoundAnimationDataV1>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV9>
  }

  export type ModelAnimationDataV9 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV9>,
    uvAnimData: Array<ModelUVAnimationV1>,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array
  }

  export type ModelVisTrackDataV9 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV1 = {
    uvAnimId: number,
    uvTransformData: Array<ModelUVTransformV1>
  }

  export type ModelUVTransformV1 = {
    type: number,
    vectorTrackIndex: number
  }

  export type ModelCompoundAnimationDataV1 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV9 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V1 = V1_N.ModelFileAnimationV1;

export namespace V2_N {
  export type ModelFileAnimationBankV2 = {
    animations: Array<ModelAnimationDataV10>,
    compoundAnimations: Array<ModelCompoundAnimationDataV2>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV10>
  }

  export type ModelAnimationDataV10 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV10>,
    uvAnimData: Array<ModelUVAnimationV2>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array
  }

  export type ModelVisTrackDataV10 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV2 = {
    uvAnimId: number,
    uvTransformData: Array<ModelUVTransformV2>
  }

  export type ModelUVTransformV2 = {
    type: number,
    vectorTrackIndex: number
  }

  export type ModelCompoundAnimationDataV2 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV10 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V2 = V2_N.ModelFileAnimationBankV2;

export namespace V3_N {
  export type ModelFileAnimationBankV3 = {
    animations: Array<ModelAnimationDataV11>,
    compoundAnimations: Array<ModelCompoundAnimationDataV3>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV11>
  }

  export type ModelAnimationDataV11 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV11>,
    uvAnimData: Array<ModelUVAnimationV3>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV3>
  }

  export type ModelVisTrackDataV11 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV3 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV3>
  }

  export type ModelTrackTypeDataV3 = {
    type: number,
    vectorTrackIndex: number
  }

  export type ModelLightAnimationV3 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV3>
  }

  export type ModelCompoundAnimationDataV3 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV11 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V3 = V3_N.ModelFileAnimationBankV3;

export namespace V4_N {
  export type ModelFileAnimationBankV4 = {
    animations: Array<ModelAnimationDataV12>,
    compoundAnimations: Array<ModelCompoundAnimationDataV4>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV12>
  }

  export type ModelAnimationDataV12 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV12>,
    uvAnimData: Array<ModelUVAnimationV4>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV4>,
    isAdditive: number
  }

  export type ModelVisTrackDataV12 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV4 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV4>
  }

  export type ModelTrackTypeDataV4 = {
    type: number,
    vectorTrackIndex: number
  }

  export type ModelLightAnimationV4 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV4>
  }

  export type ModelCompoundAnimationDataV4 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV12 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V4 = V4_N.ModelFileAnimationBankV4;

export namespace V5_N {
  export type ModelFileAnimationBankV5 = {
    animations: Array<ModelAnimationDataV13>,
    compoundAnimations: Array<ModelCompoundAnimationDataV5>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV13>
  }

  export type ModelAnimationDataV13 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV13>,
    uvAnimData: Array<ModelUVAnimationV5>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV5>,
    isAdditive: number
  }

  export type ModelVisTrackDataV13 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV5 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV5>
  }

  export type ModelTrackTypeDataV5 = {
    type: number,
    vectorTrackIndex: number
  }

  export type ModelLightAnimationV5 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV5>
  }

  export type ModelCompoundAnimationDataV5 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV13 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V5 = V5_N.ModelFileAnimationBankV5;

export namespace V6_N {
  export type ModelFileAnimationBankV6 = {
    animations: Array<ModelAnimationDataV14>,
    compoundAnimations: Array<ModelCompoundAnimationDataV6>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV14>
  }

  export type ModelAnimationDataV14 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV14>,
    uvAnimData: Array<ModelUVAnimationV6>,
    cloudAnim: Array<ModelCloudAnimV6>,
    matConstAnim: Array<ModelMatConstAnimV6>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV6>,
    isAdditive: number
  }

  export type ModelVisTrackDataV14 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV6 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV6>
  }

  export type ModelTrackTypeDataV6 = {
    type: number,
    vectorTrackIndex: number
  }

  export type ModelCloudAnimV6 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV6>
  }

  export type ModelMatConstAnimV6 = {
    matIndex: number,
    constToken: number,
    vectorTrackIndex: number
  }

  export type ModelLightAnimationV6 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV6>
  }

  export type ModelCompoundAnimationDataV6 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV14 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V6 = V6_N.ModelFileAnimationBankV6;

export namespace V7_N {
  export type ModelFileAnimationBankV7 = {
    animations: Array<ModelAnimationDataV15>,
    compoundAnimations: Array<ModelCompoundAnimationDataV7>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV15>
  }

  export type ModelAnimationDataV15 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV15>,
    uvAnimData: Array<ModelUVAnimationV7>,
    cloudAnim: Array<ModelCloudAnimV7>,
    matConstAnim: Array<ModelMatConstAnimV7>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV7>,
    isAdditive: number
  }

  export type ModelVisTrackDataV15 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV7 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV7>
  }

  export type ModelTrackTypeDataV7 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number
  }

  export type ModelCloudAnimV7 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV7>
  }

  export type ModelMatConstAnimV7 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number
  }

  export type ModelLightAnimationV7 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV7>
  }

  export type ModelCompoundAnimationDataV7 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV15 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V7 = V7_N.ModelFileAnimationBankV7;

export namespace V8_N {
  export type ModelFileAnimationBankV8 = {
    animations: Array<ModelAnimationDataV16>,
    compoundAnimations: Array<ModelCompoundAnimationDataV8>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV16>
  }

  export type ModelAnimationDataV16 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV16>,
    uvAnimData: Array<ModelUVAnimationV8>,
    cloudAnim: Array<ModelCloudAnimV8>,
    matConstAnim: Array<ModelMatConstAnimV8>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV8>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array
  }

  export type ModelVisTrackDataV16 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV8 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV8>
  }

  export type ModelTrackTypeDataV8 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number
  }

  export type ModelCloudAnimV8 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV8>
  }

  export type ModelMatConstAnimV8 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number
  }

  export type ModelLightAnimationV8 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV8>
  }

  export type ModelCompoundAnimationDataV8 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV16 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V8 = V8_N.ModelFileAnimationBankV8;

export namespace V9_N {
  export type ModelFileAnimationBankV9 = {
    animations: Array<ModelAnimationDataV17>,
    compoundAnimations: Array<ModelCompoundAnimationDataV9>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV17>
  }

  export type ModelAnimationDataV17 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV17>,
    uvAnimData: Array<ModelUVAnimationV9>,
    cloudAnim: Array<ModelCloudAnimV9>,
    matConstAnim: Array<ModelMatConstAnimV9>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV9>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array
  }

  export type ModelVisTrackDataV17 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV9 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV9>
  }

  export type ModelTrackTypeDataV9 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV9 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV9>
  }

  export type ModelMatConstAnimV9 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV9 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV9>
  }

  export type ModelCompoundAnimationDataV9 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV17 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V9 = V9_N.ModelFileAnimationBankV9;

export namespace V10_N {
  export type ModelFileAnimationBankV10 = {
    animations: Array<ModelAnimationDataV18>,
    compoundAnimations: Array<ModelCompoundAnimationDataV10>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV18>
  }

  export type ModelAnimationDataV18 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV18>,
    uvAnimData: Array<ModelUVAnimationV10>,
    cloudAnim: Array<ModelCloudAnimV10>,
    matConstAnim: Array<ModelMatConstAnimV10>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV10>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV10>
  }

  export type ModelVisTrackDataV18 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV10 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV10>
  }

  export type ModelTrackTypeDataV10 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV10 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV10>
  }

  export type ModelMatConstAnimV10 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV10 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV10>
  }

  export type ModelAnimPropertyDataV10 = {
    id: bigint,
    type: number,
    val: bigint,
    strVal: number
  }

  export type ModelCompoundAnimationDataV10 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV18 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V10 = V10_N.ModelFileAnimationBankV10;

export namespace V11_N {
  export type ModelFileAnimationBankV11 = {
    animations: Array<ModelAnimationDataV19>,
    compoundAnimations: Array<ModelCompoundAnimationDataV11>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV19>
  }

  export type ModelAnimationDataV19 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV19>,
    uvAnimData: Array<ModelUVAnimationV11>,
    cloudAnim: Array<ModelCloudAnimV11>,
    matConstAnim: Array<ModelMatConstAnimV11>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV11>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV11>,
    center: Float32Array,
    radius: number
  }

  export type ModelVisTrackDataV19 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV11 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV11>
  }

  export type ModelTrackTypeDataV11 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV11 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV11>
  }

  export type ModelMatConstAnimV11 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV11 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV11>
  }

  export type ModelAnimPropertyDataV11 = {
    id: bigint,
    type: number,
    val: bigint,
    strVal: number
  }

  export type ModelCompoundAnimationDataV11 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV19 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V11 = V11_N.ModelFileAnimationBankV11;

export namespace V12_N {
  export type ModelFileAnimationBankV12 = {
    animations: Array<ModelAnimationDataV20>,
    compoundAnimations: Array<ModelCompoundAnimationDataV12>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV20>
  }

  export type ModelAnimationDataV20 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV20>,
    uvAnimData: Array<ModelUVAnimationV12>,
    cloudAnim: Array<ModelCloudAnimV12>,
    matConstAnim: Array<ModelMatConstAnimV12>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV12>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV12>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV12>
  }

  export type ModelVisTrackDataV20 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV12 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV12>
  }

  export type ModelTrackTypeDataV12 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV12 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV12>
  }

  export type ModelMatConstAnimV12 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV12 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV12>
  }

  export type ModelAnimPropertyDataV12 = {
    id: bigint,
    type: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV12 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCompoundAnimationDataV12 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV20 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V12 = V12_N.ModelFileAnimationBankV12;

export namespace V13_N {
  export type ModelFileAnimationBankV13 = {
    animations: Array<ModelAnimationDataV21>,
    compoundAnimations: Array<ModelCompoundAnimationDataV13>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV21>
  }

  export type ModelAnimationDataV21 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV21>,
    uvAnimData: Array<ModelUVAnimationV13>,
    cloudAnim: Array<ModelCloudAnimV13>,
    matConstAnim: Array<ModelMatConstAnimV13>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV13>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV13>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV13>
  }

  export type ModelVisTrackDataV21 = {
    boneIndex: number,
    keys: Float32Array
  }

  export type ModelUVAnimationV13 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV13>
  }

  export type ModelTrackTypeDataV13 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV13 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV13>
  }

  export type ModelMatConstAnimV13 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV13 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV13>
  }

  export type ModelAnimPropertyDataV13 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV13 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCompoundAnimationDataV13 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV21 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V13 = V13_N.ModelFileAnimationBankV13;

export namespace V14_N {
  export type ModelFileAnimationBankV14 = {
    animations: Array<ModelAnimationDataV22>,
    compoundAnimations: Array<ModelCompoundAnimationDataV14>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV22>
  }

  export type ModelAnimationDataV22 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV22>,
    uvAnimData: Array<ModelUVAnimationV14>,
    cloudAnim: Array<ModelCloudAnimV14>,
    matConstAnim: Array<ModelMatConstAnimV14>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV14>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV14>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV14>
  }

  export type ModelVisTrackDataV22 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV14 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV14>
  }

  export type ModelTrackTypeDataV14 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV14 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV14>
  }

  export type ModelMatConstAnimV14 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV14 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV14>
  }

  export type ModelAnimPropertyDataV14 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV14 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCompoundAnimationDataV14 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV22 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V14 = V14_N.ModelFileAnimationBankV14;

export namespace V15_N {
  export type ModelFileAnimationBankV15 = {
    animations: Array<ModelAnimationDataV23>,
    compoundAnimations: Array<ModelCompoundAnimationDataV15>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV23>
  }

  export type ModelAnimationDataV23 = {
    token: bigint,
    data: Uint8Array,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV23>,
    uvAnimData: Array<ModelUVAnimationV15>,
    cloudAnim: Array<ModelCloudAnimV15>,
    matConstAnim: Array<ModelMatConstAnimV15>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV15>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV15>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV15>,
    bcAnim: Array<ModelBoneConstraintAnimV15>
  }

  export type ModelVisTrackDataV23 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV15 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV15>
  }

  export type ModelTrackTypeDataV15 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV15 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV15>
  }

  export type ModelMatConstAnimV15 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV15 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV15>
  }

  export type ModelAnimPropertyDataV15 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV15 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV15 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV15>
  }

  export type ModelCompoundAnimationDataV15 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV23 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V15 = V15_N.ModelFileAnimationBankV15;

export namespace V16_N {
  export type ModelFileAnimationBankV16 = {
    animations: Array<ModelAnimationDataV24>,
    compoundAnimations: Array<ModelCompoundAnimationDataV16>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV24>
  }

  export type ModelAnimationDataV24 = {
    token: bigint,
    data: PackGrannyAnimationTypeV0,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV24>,
    uvAnimData: Array<ModelUVAnimationV16>,
    cloudAnim: Array<ModelCloudAnimV16>,
    matConstAnim: Array<ModelMatConstAnimV16>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV16>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV16>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV16>,
    bcAnim: Array<ModelBoneConstraintAnimV16>,
    streakAnim: Array<ModelStreakAnimV16>
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Uint8Array
  }

  export type ModelVisTrackDataV24 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV16 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV16>
  }

  export type ModelTrackTypeDataV16 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV16 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV16>
  }

  export type ModelMatConstAnimV16 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV16 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV16>
  }

  export type ModelAnimPropertyDataV16 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV16 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV16 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV16>
  }

  export type ModelStreakAnimV16 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV16>
  }

  export type ModelAnchorAnimV16 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV16>
  }

  export type ModelCompoundAnimationDataV16 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV24 = {
    filename: number,
    sequenceTokens: BigUint64Array
  }

}

export type V16 = V16_N.ModelFileAnimationBankV16;

export namespace V17_N {
  export type ModelFileAnimationBankV17 = {
    animations: Array<ModelAnimationDataV25>,
    compoundAnimations: Array<ModelCompoundAnimationDataV17>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV25>
  }

  export type ModelAnimationDataV25 = {
    token: bigint,
    data: PackGrannyAnimationTypeV0,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV25>,
    uvAnimData: Array<ModelUVAnimationV17>,
    cloudAnim: Array<ModelCloudAnimV17>,
    matConstAnim: Array<ModelMatConstAnimV17>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV17>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV17>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV17>,
    bcAnim: Array<ModelBoneConstraintAnimV17>,
    streakAnim: Array<ModelStreakAnimV17>
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Uint8Array
  }

  export type ModelVisTrackDataV25 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV17 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV17>
  }

  export type ModelTrackTypeDataV17 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV17 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV17>
  }

  export type ModelMatConstAnimV17 = {
    matIndex: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV17 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV17>
  }

  export type ModelAnimPropertyDataV17 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV17 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV17 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV17>
  }

  export type ModelStreakAnimV17 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV17>
  }

  export type ModelAnchorAnimV17 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV17>
  }

  export type ModelCompoundAnimationDataV17 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV25 = {
    filename: number,
    sequences: Array<ModelAnimationImportSequenceV17>
  }

  export type ModelAnimationImportSequenceV17 = {
    name: bigint,
    duration: number
  }

}

export type V17 = V17_N.ModelFileAnimationBankV17;

export namespace V18_N {
  export type ModelFileAnimationBankV18 = {
    animations: Array<ModelAnimationDataV26>,
    compoundAnimations: Array<ModelCompoundAnimationDataV18>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV26>
  }

  export type ModelAnimationDataV26 = {
    token: bigint,
    data: PackGrannyAnimationTypeV0,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV26>,
    uvAnimData: Array<ModelUVAnimationV18>,
    cloudAnim: Array<ModelCloudAnimV18>,
    matConstAnim: Array<ModelMatConstAnimV18>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV18>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV18>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV18>,
    bcAnim: Array<ModelBoneConstraintAnimV18>,
    streakAnim: Array<ModelStreakAnimV18>
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Uint8Array
  }

  export type ModelVisTrackDataV26 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV18 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV18>
  }

  export type ModelTrackTypeDataV18 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV18 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV18>
  }

  export type ModelMatConstAnimV18 = {
    materialId: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV18 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV18>
  }

  export type ModelAnimPropertyDataV18 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV18 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV18 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV18>
  }

  export type ModelStreakAnimV18 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV18>
  }

  export type ModelAnchorAnimV18 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV18>
  }

  export type ModelCompoundAnimationDataV18 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV26 = {
    filename: number,
    sequences: Array<ModelAnimationImportSequenceV18>
  }

  export type ModelAnimationImportSequenceV18 = {
    name: bigint,
    duration: number
  }

}

export type V18 = V18_N.ModelFileAnimationBankV18;

export namespace V19_N {
  export type ModelFileAnimationBankV19 = {
    animations: Array<ModelAnimationDataV27>,
    compoundAnimations: Array<ModelCompoundAnimationDataV19>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV27>,
    modelReference: number
  }

  export type ModelAnimationDataV27 = {
    token: bigint,
    data: PackGrannyAnimationTypeV0,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV27>,
    uvAnimData: Array<ModelUVAnimationV19>,
    cloudAnim: Array<ModelCloudAnimV19>,
    matConstAnim: Array<ModelMatConstAnimV19>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV19>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV19>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV19>,
    bcAnim: Array<ModelBoneConstraintAnimV19>,
    streakAnim: Array<ModelStreakAnimV19>
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Uint8Array
  }

  export type ModelVisTrackDataV27 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV19 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV19>
  }

  export type ModelTrackTypeDataV19 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV19 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV19>
  }

  export type ModelMatConstAnimV19 = {
    materialId: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV19 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV19>
  }

  export type ModelAnimPropertyDataV19 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV19 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV19 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV19>
  }

  export type ModelStreakAnimV19 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV19>
  }

  export type ModelAnchorAnimV19 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV19>
  }

  export type ModelCompoundAnimationDataV19 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV27 = {
    filename: number,
    sequences: Array<ModelAnimationImportSequenceV19>
  }

  export type ModelAnimationImportSequenceV19 = {
    name: bigint,
    duration: number
  }

}

export type V19 = V19_N.ModelFileAnimationBankV19;

export namespace V20_N {
  export type ModelFileAnimationBankV20 = {
    animations: Array<ModelAnimationDataV28>,
    compoundAnimations: Array<ModelCompoundAnimationDataV20>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV28>,
    modelReference: number
  }

  export type ModelAnimationDataV28 = {
    token: bigint,
    data: PackGrannyAnimationTypeV0,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV28>,
    uvAnimData: Array<ModelUVAnimationV20>,
    cloudAnim: Array<ModelCloudAnimV20>,
    matConstAnim: Array<ModelMatConstAnimV20>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV20>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV20>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV20>,
    bcAnim: Array<ModelBoneConstraintAnimV20>,
    streakAnim: Array<ModelStreakAnimV20>,
    lightningAnim: Array<ModelLightningAnimV20>
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Uint8Array
  }

  export type ModelVisTrackDataV28 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV20 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV20>
  }

  export type ModelTrackTypeDataV20 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV20 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV20>
  }

  export type ModelMatConstAnimV20 = {
    materialId: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV20 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV20>
  }

  export type ModelAnimPropertyDataV20 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV20 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV20 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV20>
  }

  export type ModelStreakAnimV20 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV20>
  }

  export type ModelAnchorAnimV20 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV20>
  }

  export type ModelLightningAnimV20 = {
    bone: bigint,
    lightningTrackData: Array<ModelTrackTypeDataV20>
  }

  export type ModelCompoundAnimationDataV20 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV28 = {
    filename: number,
    sequences: Array<ModelAnimationImportSequenceV20>
  }

  export type ModelAnimationImportSequenceV20 = {
    name: bigint,
    duration: number
  }

}

export type V20 = V20_N.ModelFileAnimationBankV20;

export namespace V21_N {
  export type ModelFileAnimationBankV21 = {
    animations: Array<ModelAnimationDataV29>,
    compoundAnimations: Array<ModelCompoundAnimationDataV21>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV29>,
    modelReference: number
  }

  export type ModelAnimationDataV29 = {
    token: bigint,
    data: PackGrannyAnimationTypeV0,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV29>,
    uvAnimData: Array<ModelUVAnimationV21>,
    cloudAnim: Array<ModelCloudAnimV21>,
    matConstAnim: Array<ModelMatConstAnimV21>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV21>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV21>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV21>,
    bcAnim: Array<ModelBoneConstraintAnimV21>,
    streakAnim: Array<ModelStreakAnimV21>,
    lightningAnim: Array<ModelLightningAnimV21>,
    windAnimData: Array<ModelWindAnimationV21>
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Uint8Array
  }

  export type ModelVisTrackDataV29 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV21 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV21>
  }

  export type ModelTrackTypeDataV21 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV21 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV21>
  }

  export type ModelMatConstAnimV21 = {
    materialId: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV21 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV21>
  }

  export type ModelAnimPropertyDataV21 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV21 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV21 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV21>
  }

  export type ModelStreakAnimV21 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV21>
  }

  export type ModelAnchorAnimV21 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV21>
  }

  export type ModelLightningAnimV21 = {
    bone: bigint,
    lightningTrackData: Array<ModelTrackTypeDataV21>
  }

  export type ModelWindAnimationV21 = {
    bone: bigint,
    windTrackData: Array<ModelTrackTypeDataV21>
  }

  export type ModelCompoundAnimationDataV21 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV29 = {
    filename: number,
    sequences: Array<ModelAnimationImportSequenceV21>
  }

  export type ModelAnimationImportSequenceV21 = {
    name: bigint,
    duration: number
  }

}

export type V21 = V21_N.ModelFileAnimationBankV21;

export namespace V22_N {
  export type ModelFileAnimationBankV22 = {
    animations: Array<ModelAnimationDataV30>,
    compoundAnimations: Array<ModelCompoundAnimationDataV22>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV30>
  }

  export type ModelAnimationDataV30 = {
    token: bigint,
    data: PackGrannyAnimationTypeV0,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV30>,
    uvAnimData: Array<ModelUVAnimationV22>,
    cloudAnim: Array<ModelCloudAnimV22>,
    matConstAnim: Array<ModelMatConstAnimV22>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV22>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV22>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV22>,
    bcAnim: Array<ModelBoneConstraintAnimV22>,
    streakAnim: Array<ModelStreakAnimV22>,
    lightningAnim: Array<ModelLightningAnimV22>,
    windAnimData: Array<ModelWindAnimationV22>
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Uint8Array
  }

  export type ModelVisTrackDataV30 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV22 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV22>
  }

  export type ModelTrackTypeDataV22 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV22 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV22>
  }

  export type ModelMatConstAnimV22 = {
    materialId: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV22 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV22>
  }

  export type ModelAnimPropertyDataV22 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV22 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV22 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV22>
  }

  export type ModelStreakAnimV22 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV22>
  }

  export type ModelAnchorAnimV22 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV22>
  }

  export type ModelLightningAnimV22 = {
    bone: bigint,
    lightningTrackData: Array<ModelTrackTypeDataV22>
  }

  export type ModelWindAnimationV22 = {
    bone: bigint,
    windTrackData: Array<ModelTrackTypeDataV22>
  }

  export type ModelCompoundAnimationDataV22 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV30 = {
    filename: number,
    sequences: Array<ModelAnimationImportSequenceV22>
  }

  export type ModelAnimationImportSequenceV22 = {
    name: bigint,
    duration: number
  }

}

export type V22 = V22_N.ModelFileAnimationBankV22;

export namespace V23_N {
  export type ModelFileAnimationBankV23 = {
    animations: Array<ModelAnimationDataV31>,
    compoundAnimations: Array<ModelCompoundAnimationDataV23>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV31>
  }

  export type ModelAnimationDataV31 = {
    token: bigint,
    data: PackGrannyAnimationTypeV0,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV31>,
    uvAnimData: Array<ModelUVAnimationV23>,
    cloudAnim: Array<ModelCloudAnimV23>,
    matConstAnim: Array<ModelMatConstAnimV23>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV23>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV23>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV23>,
    bcAnim: Array<ModelBoneConstraintAnimV23>,
    streakAnim: Array<ModelStreakAnimV23>,
    lightningAnim: Array<ModelLightningAnimV23>,
    windAnimData: Array<ModelWindAnimationV23>
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Uint8Array
  }

  export type ModelVisTrackDataV31 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV23 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV23>
  }

  export type ModelTrackTypeDataV23 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV23 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV23>
  }

  export type ModelMatConstAnimV23 = {
    materialId: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV23 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV23>
  }

  export type ModelAnimPropertyDataV23 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV23 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV23 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV23>
  }

  export type ModelStreakAnimV23 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV23>
  }

  export type ModelAnchorAnimV23 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV23>
  }

  export type ModelLightningAnimV23 = {
    bone: bigint,
    lightningTrackData: Array<ModelTrackTypeDataV23>
  }

  export type ModelWindAnimationV23 = {
    bone: bigint,
    windTrackData: Array<ModelTrackTypeDataV23>
  }

  export type ModelCompoundAnimationDataV23 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV31 = {
    filename: number,
    sequences: Array<ModelAnimationImportSequenceV23>
  }

  export type ModelAnimationImportSequenceV23 = {
    name: bigint,
    duration: number
  }

}

export type V23 = V23_N.ModelFileAnimationBankV23;

export namespace V24_N {
  export type ModelFileAnimationV24 = {
    bank: ModelFileAnimationBankV24,
    anim: PackGrannyAnimationTypeV0
  }

  export type ModelFileAnimationBankV24 = {
    animations: Array<ModelAnimationDataV32>,
    compoundAnimations: Array<ModelCompoundAnimationDataV24>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV32>
  }

  export type ModelAnimationDataV32 = {
    token: bigint,
    data: PackGrannyAnimationTypeV0,
    animLod: ModelAnimationLodV24,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV32>,
    uvAnimData: Array<ModelUVAnimationV24>,
    cloudAnim: Array<ModelCloudAnimV24>,
    matConstAnim: Array<ModelMatConstAnimV24>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV24>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV24>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV24>,
    bcAnim: Array<ModelBoneConstraintAnimV24>,
    streakAnim: Array<ModelStreakAnimV24>,
    lightningAnim: Array<ModelLightningAnimV24>,
    windAnimData: Array<ModelWindAnimationV24>
  }

  export type PackGrannyAnimationTypeV0 = {
    animation: Uint8Array
  }

  export type ModelAnimationLodV24 = {
    data: PackGrannyAnimationTypeV0,
    fileFull: number
  }

  export type ModelVisTrackDataV32 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV24 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV24>
  }

  export type ModelTrackTypeDataV24 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV24 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV24>
  }

  export type ModelMatConstAnimV24 = {
    materialId: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV24 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV24>
  }

  export type ModelAnimPropertyDataV24 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV24 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV24 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV24>
  }

  export type ModelStreakAnimV24 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV24>
  }

  export type ModelAnchorAnimV24 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV24>
  }

  export type ModelLightningAnimV24 = {
    bone: bigint,
    lightningTrackData: Array<ModelTrackTypeDataV24>
  }

  export type ModelWindAnimationV24 = {
    bone: bigint,
    windTrackData: Array<ModelTrackTypeDataV24>
  }

  export type ModelCompoundAnimationDataV24 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV32 = {
    filename: number,
    sequences: Array<ModelAnimationImportSequenceV24>
  }

  export type ModelAnimationImportSequenceV24 = {
    name: bigint,
    duration: number
  }

}

export type V24 = V24_N.ModelFileAnimationV24;

export namespace V25_N {
  export type ModelFileAnimationV25 = {
    bank: ModelFileAnimationBankV25,
    anim: PackGrannyAnimationTypeV1
  }

  export type ModelFileAnimationBankV25 = {
    animations: Array<ModelAnimationDataV33>,
    compoundAnimations: Array<ModelCompoundAnimationDataV25>,
    fallbacks: BigUint64Array,
    imports: Array<ModelAnimationImportDataV33>
  }

  export type ModelAnimationDataV33 = {
    token: bigint,
    data: PackGrannyAnimationTypeV1,
    animLod: ModelAnimationLodV25,
    moveSpeed: number,
    visTrackData: Array<ModelVisTrackDataV33>,
    uvAnimData: Array<ModelUVAnimationV25>,
    cloudAnim: Array<ModelCloudAnimV25>,
    matConstAnim: Array<ModelMatConstAnimV25>,
    morphTrackGroups: Uint16Array,
    triggerTimes: Float32Array,
    triggerTokens: BigUint64Array,
    lightAnimData: Array<ModelLightAnimationV25>,
    isAdditive: number,
    variantCount: number,
    variantIndices: Uint32Array,
    properties: Array<ModelAnimPropertyDataV25>,
    center: Float32Array,
    radius: number,
    tokenMapAnims: Array<ModelTokenMapAnimV25>,
    bcAnim: Array<ModelBoneConstraintAnimV25>,
    streakAnim: Array<ModelStreakAnimV25>,
    lightningAnim: Array<ModelLightningAnimV25>,
    windAnimData: Array<ModelWindAnimationV25>
  }

  export type PackGrannyAnimationTypeV1 = {
    animation: Uint8Array,
    pointers: Uint32Array
  }

  export type ModelAnimationLodV25 = {
    data: PackGrannyAnimationTypeV1,
    fileFull: number
  }

  export type ModelVisTrackDataV33 = {
    boneToken: bigint,
    keys: Float32Array
  }

  export type ModelUVAnimationV25 = {
    uvAnimId: number,
    uvTransformData: Array<ModelTrackTypeDataV25>
  }

  export type ModelTrackTypeDataV25 = {
    type: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelCloudAnimV25 = {
    bone: bigint,
    cloudTrackData: Array<ModelTrackTypeDataV25>
  }

  export type ModelMatConstAnimV25 = {
    materialId: number,
    constToken: number,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelLightAnimationV25 = {
    bone: bigint,
    lightTrackData: Array<ModelTrackTypeDataV25>
  }

  export type ModelAnimPropertyDataV25 = {
    id: bigint,
    type: number,
    time: number,
    val: bigint,
    strVal: number
  }

  export type ModelTokenMapAnimV25 = {
    linkToken: bigint,
    trackGroupIndex: number,
    vectorTrackIndex: number,
    initialValue: Float32Array
  }

  export type ModelBoneConstraintAnimV25 = {
    bone: bigint,
    bcTrackData: Array<ModelTrackTypeDataV25>
  }

  export type ModelStreakAnimV25 = {
    bone: bigint,
    anchorAnim: Array<ModelAnchorAnimV25>
  }

  export type ModelAnchorAnimV25 = {
    bone: bigint,
    anchorTrackData: Array<ModelTrackTypeDataV25>
  }

  export type ModelLightningAnimV25 = {
    bone: bigint,
    lightningTrackData: Array<ModelTrackTypeDataV25>
  }

  export type ModelWindAnimationV25 = {
    bone: bigint,
    windTrackData: Array<ModelTrackTypeDataV25>
  }

  export type ModelCompoundAnimationDataV25 = {
    token: bigint,
    start: bigint,
    loop: bigint,
    end: bigint
  }

  export type ModelAnimationImportDataV33 = {
    filename: number,
    sequences: Array<ModelAnimationImportSequenceV25>
  }

  export type ModelAnimationImportSequenceV25 = {
    name: bigint,
    duration: number
  }

}

export type V25 = V25_N.ModelFileAnimationV25;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V6_U = V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V7_U = V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V8_U = V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V9_U = V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V10_U = V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V11_U = V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V12_U = V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V13_U = V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V14_U = V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V15_U = V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V16_U = V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V17_U = V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V18_U = V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V19_U = V19 | V20 | V21 | V22 | V23 | V24 | V25;
export type V20_U = V20 | V21 | V22 | V23 | V24 | V25;
export type V21_U = V21 | V22 | V23 | V24 | V25;
export type V22_U = V22 | V23 | V24 | V25;
export type V23_U = V23 | V24 | V25;
export type V24_U = V24 | V25;
export type V25_U = V25;
