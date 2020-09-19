

export type ModelFileAnimationV0 = {
  animations: Array<ModelAnimationDataV8>,
  compoundAnimations: Array<ModelCompoundAnimationDataV0>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV8>
}

export type ModelAnimationDataV8 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV8>,
  uvAnimData: Array<ModelUVAnimationV0>
}

export type ModelVisTrackDataV8 = {
  boneIndex: number,
  keys: Array<number>
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
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV8 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationV1 = {
  animations: Array<ModelAnimationDataV9>,
  compoundAnimations: Array<ModelCompoundAnimationDataV1>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV9>
}

export type ModelAnimationDataV9 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV9>,
  uvAnimData: Array<ModelUVAnimationV1>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>
}

export type ModelVisTrackDataV9 = {
  boneIndex: number,
  keys: Array<number>
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
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV9 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV2 = {
  animations: Array<ModelAnimationDataV10>,
  compoundAnimations: Array<ModelCompoundAnimationDataV2>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV10>
}

export type ModelAnimationDataV10 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV10>,
  uvAnimData: Array<ModelUVAnimationV2>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>
}

export type ModelVisTrackDataV10 = {
  boneIndex: number,
  keys: Array<number>
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
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV10 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV3 = {
  animations: Array<ModelAnimationDataV11>,
  compoundAnimations: Array<ModelCompoundAnimationDataV3>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV11>
}

export type ModelAnimationDataV11 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV11>,
  uvAnimData: Array<ModelUVAnimationV3>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV3>
}

export type ModelVisTrackDataV11 = {
  boneIndex: number,
  keys: Array<number>
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
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV3>
}

export type ModelCompoundAnimationDataV3 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV11 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV4 = {
  animations: Array<ModelAnimationDataV12>,
  compoundAnimations: Array<ModelCompoundAnimationDataV4>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV12>
}

export type ModelAnimationDataV12 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV12>,
  uvAnimData: Array<ModelUVAnimationV4>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV4>,
  isAdditive: number
}

export type ModelVisTrackDataV12 = {
  boneIndex: number,
  keys: Array<number>
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
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV4>
}

export type ModelCompoundAnimationDataV4 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV12 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV5 = {
  animations: Array<ModelAnimationDataV13>,
  compoundAnimations: Array<ModelCompoundAnimationDataV5>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV13>
}

export type ModelAnimationDataV13 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV13>,
  uvAnimData: Array<ModelUVAnimationV5>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV5>,
  isAdditive: number
}

export type ModelVisTrackDataV13 = {
  boneIndex: number,
  keys: Array<number>
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
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV5>
}

export type ModelCompoundAnimationDataV5 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV13 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV6 = {
  animations: Array<ModelAnimationDataV14>,
  compoundAnimations: Array<ModelCompoundAnimationDataV6>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV14>
}

export type ModelAnimationDataV14 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV14>,
  uvAnimData: Array<ModelUVAnimationV6>,
  cloudAnim: Array<ModelCloudAnimV6>,
  matConstAnim: Array<ModelMatConstAnimV6>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV6>,
  isAdditive: number
}

export type ModelVisTrackDataV14 = {
  boneIndex: number,
  keys: Array<number>
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
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV6>
}

export type ModelMatConstAnimV6 = {
  matIndex: number,
  constToken: number,
  vectorTrackIndex: number
}

export type ModelLightAnimationV6 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV6>
}

export type ModelCompoundAnimationDataV6 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV14 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV7 = {
  animations: Array<ModelAnimationDataV15>,
  compoundAnimations: Array<ModelCompoundAnimationDataV7>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV15>
}

export type ModelAnimationDataV15 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV15>,
  uvAnimData: Array<ModelUVAnimationV7>,
  cloudAnim: Array<ModelCloudAnimV7>,
  matConstAnim: Array<ModelMatConstAnimV7>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV7>,
  isAdditive: number
}

export type ModelVisTrackDataV15 = {
  boneIndex: number,
  keys: Array<number>
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
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV7>
}

export type ModelMatConstAnimV7 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number
}

export type ModelLightAnimationV7 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV7>
}

export type ModelCompoundAnimationDataV7 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV15 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV8 = {
  animations: Array<ModelAnimationDataV16>,
  compoundAnimations: Array<ModelCompoundAnimationDataV8>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV16>
}

export type ModelAnimationDataV16 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV16>,
  uvAnimData: Array<ModelUVAnimationV8>,
  cloudAnim: Array<ModelCloudAnimV8>,
  matConstAnim: Array<ModelMatConstAnimV8>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV8>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>
}

export type ModelVisTrackDataV16 = {
  boneIndex: number,
  keys: Array<number>
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
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV8>
}

export type ModelMatConstAnimV8 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number
}

export type ModelLightAnimationV8 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV8>
}

export type ModelCompoundAnimationDataV8 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV16 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV9 = {
  animations: Array<ModelAnimationDataV17>,
  compoundAnimations: Array<ModelCompoundAnimationDataV9>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV17>
}

export type ModelAnimationDataV17 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV17>,
  uvAnimData: Array<ModelUVAnimationV9>,
  cloudAnim: Array<ModelCloudAnimV9>,
  matConstAnim: Array<ModelMatConstAnimV9>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV9>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>
}

export type ModelVisTrackDataV17 = {
  boneIndex: number,
  keys: Array<number>
}

export type ModelUVAnimationV9 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV9>
}

export type ModelTrackTypeDataV9 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV9 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV9>
}

export type ModelMatConstAnimV9 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV9 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV9>
}

export type ModelCompoundAnimationDataV9 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV17 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV10 = {
  animations: Array<ModelAnimationDataV18>,
  compoundAnimations: Array<ModelCompoundAnimationDataV10>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV18>
}

export type ModelAnimationDataV18 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV18>,
  uvAnimData: Array<ModelUVAnimationV10>,
  cloudAnim: Array<ModelCloudAnimV10>,
  matConstAnim: Array<ModelMatConstAnimV10>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV10>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV10>
}

export type ModelVisTrackDataV18 = {
  boneIndex: number,
  keys: Array<number>
}

export type ModelUVAnimationV10 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV10>
}

export type ModelTrackTypeDataV10 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV10 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV10>
}

export type ModelMatConstAnimV10 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV10 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV10>
}

export type ModelAnimPropertyDataV10 = {
  id: number,
  type: number,
  val: number,
  strVal: string
}

export type ModelCompoundAnimationDataV10 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV18 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV11 = {
  animations: Array<ModelAnimationDataV19>,
  compoundAnimations: Array<ModelCompoundAnimationDataV11>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV19>
}

export type ModelAnimationDataV19 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV19>,
  uvAnimData: Array<ModelUVAnimationV11>,
  cloudAnim: Array<ModelCloudAnimV11>,
  matConstAnim: Array<ModelMatConstAnimV11>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV11>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV11>,
  center: Array<number>,
  radius: number
}

export type ModelVisTrackDataV19 = {
  boneIndex: number,
  keys: Array<number>
}

export type ModelUVAnimationV11 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV11>
}

export type ModelTrackTypeDataV11 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV11 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV11>
}

export type ModelMatConstAnimV11 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV11 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV11>
}

export type ModelAnimPropertyDataV11 = {
  id: number,
  type: number,
  val: number,
  strVal: string
}

export type ModelCompoundAnimationDataV11 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV19 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV12 = {
  animations: Array<ModelAnimationDataV20>,
  compoundAnimations: Array<ModelCompoundAnimationDataV12>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV20>
}

export type ModelAnimationDataV20 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV20>,
  uvAnimData: Array<ModelUVAnimationV12>,
  cloudAnim: Array<ModelCloudAnimV12>,
  matConstAnim: Array<ModelMatConstAnimV12>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV12>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV12>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV12>
}

export type ModelVisTrackDataV20 = {
  boneIndex: number,
  keys: Array<number>
}

export type ModelUVAnimationV12 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV12>
}

export type ModelTrackTypeDataV12 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV12 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV12>
}

export type ModelMatConstAnimV12 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV12 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV12>
}

export type ModelAnimPropertyDataV12 = {
  id: number,
  type: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV12 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCompoundAnimationDataV12 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV20 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV13 = {
  animations: Array<ModelAnimationDataV21>,
  compoundAnimations: Array<ModelCompoundAnimationDataV13>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV21>
}

export type ModelAnimationDataV21 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV21>,
  uvAnimData: Array<ModelUVAnimationV13>,
  cloudAnim: Array<ModelCloudAnimV13>,
  matConstAnim: Array<ModelMatConstAnimV13>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV13>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV13>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV13>
}

export type ModelVisTrackDataV21 = {
  boneIndex: number,
  keys: Array<number>
}

export type ModelUVAnimationV13 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV13>
}

export type ModelTrackTypeDataV13 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV13 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV13>
}

export type ModelMatConstAnimV13 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV13 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV13>
}

export type ModelAnimPropertyDataV13 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV13 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCompoundAnimationDataV13 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV21 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV14 = {
  animations: Array<ModelAnimationDataV22>,
  compoundAnimations: Array<ModelCompoundAnimationDataV14>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV22>
}

export type ModelAnimationDataV22 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV22>,
  uvAnimData: Array<ModelUVAnimationV14>,
  cloudAnim: Array<ModelCloudAnimV14>,
  matConstAnim: Array<ModelMatConstAnimV14>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV14>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV14>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV14>
}

export type ModelVisTrackDataV22 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV14 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV14>
}

export type ModelTrackTypeDataV14 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV14 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV14>
}

export type ModelMatConstAnimV14 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV14 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV14>
}

export type ModelAnimPropertyDataV14 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV14 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCompoundAnimationDataV14 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV22 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV15 = {
  animations: Array<ModelAnimationDataV23>,
  compoundAnimations: Array<ModelCompoundAnimationDataV15>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV23>
}

export type ModelAnimationDataV23 = {
  token: number,
  data: Array<number>,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV23>,
  uvAnimData: Array<ModelUVAnimationV15>,
  cloudAnim: Array<ModelCloudAnimV15>,
  matConstAnim: Array<ModelMatConstAnimV15>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV15>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV15>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV15>,
  bcAnim: Array<ModelBoneConstraintAnimV15>
}

export type ModelVisTrackDataV23 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV15 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV15>
}

export type ModelTrackTypeDataV15 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV15 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV15>
}

export type ModelMatConstAnimV15 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV15 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV15>
}

export type ModelAnimPropertyDataV15 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV15 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV15 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV15>
}

export type ModelCompoundAnimationDataV15 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV23 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV16 = {
  animations: Array<ModelAnimationDataV24>,
  compoundAnimations: Array<ModelCompoundAnimationDataV16>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV24>
}

export type ModelAnimationDataV24 = {
  token: number,
  data: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV24>,
  uvAnimData: Array<ModelUVAnimationV16>,
  cloudAnim: Array<ModelCloudAnimV16>,
  matConstAnim: Array<ModelMatConstAnimV16>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV16>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV16>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV16>,
  bcAnim: Array<ModelBoneConstraintAnimV16>,
  streakAnim: Array<ModelStreakAnimV16>
}

export type PackGrannyAnimationTypeV0 = {
  animation: Array<number>
}

export type ModelVisTrackDataV24 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV16 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV16>
}

export type ModelTrackTypeDataV16 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV16 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV16>
}

export type ModelMatConstAnimV16 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV16 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV16>
}

export type ModelAnimPropertyDataV16 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV16 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV16 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV16>
}

export type ModelStreakAnimV16 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV16>
}

export type ModelAnchorAnimV16 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV16>
}

export type ModelCompoundAnimationDataV16 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV24 = {
  filename: string,
  sequenceTokens: Array<number>
}

export type ModelFileAnimationBankV17 = {
  animations: Array<ModelAnimationDataV25>,
  compoundAnimations: Array<ModelCompoundAnimationDataV17>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV25>
}

export type ModelAnimationDataV25 = {
  token: number,
  data: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV25>,
  uvAnimData: Array<ModelUVAnimationV17>,
  cloudAnim: Array<ModelCloudAnimV17>,
  matConstAnim: Array<ModelMatConstAnimV17>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV17>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV17>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV17>,
  bcAnim: Array<ModelBoneConstraintAnimV17>,
  streakAnim: Array<ModelStreakAnimV17>
}

export type ModelVisTrackDataV25 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV17 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV17>
}

export type ModelTrackTypeDataV17 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV17 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV17>
}

export type ModelMatConstAnimV17 = {
  matIndex: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV17 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV17>
}

export type ModelAnimPropertyDataV17 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV17 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV17 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV17>
}

export type ModelStreakAnimV17 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV17>
}

export type ModelAnchorAnimV17 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV17>
}

export type ModelCompoundAnimationDataV17 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV25 = {
  filename: string,
  sequences: Array<ModelAnimationImportSequenceV17>
}

export type ModelAnimationImportSequenceV17 = {
  name: number,
  duration: number
}

export type ModelFileAnimationBankV18 = {
  animations: Array<ModelAnimationDataV26>,
  compoundAnimations: Array<ModelCompoundAnimationDataV18>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV26>
}

export type ModelAnimationDataV26 = {
  token: number,
  data: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV26>,
  uvAnimData: Array<ModelUVAnimationV18>,
  cloudAnim: Array<ModelCloudAnimV18>,
  matConstAnim: Array<ModelMatConstAnimV18>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV18>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV18>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV18>,
  bcAnim: Array<ModelBoneConstraintAnimV18>,
  streakAnim: Array<ModelStreakAnimV18>
}

export type ModelVisTrackDataV26 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV18 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV18>
}

export type ModelTrackTypeDataV18 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV18 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV18>
}

export type ModelMatConstAnimV18 = {
  materialId: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV18 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV18>
}

export type ModelAnimPropertyDataV18 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV18 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV18 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV18>
}

export type ModelStreakAnimV18 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV18>
}

export type ModelAnchorAnimV18 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV18>
}

export type ModelCompoundAnimationDataV18 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV26 = {
  filename: string,
  sequences: Array<ModelAnimationImportSequenceV18>
}

export type ModelAnimationImportSequenceV18 = {
  name: number,
  duration: number
}

export type ModelFileAnimationBankV19 = {
  animations: Array<ModelAnimationDataV27>,
  compoundAnimations: Array<ModelCompoundAnimationDataV19>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV27>,
  modelReference: string
}

export type ModelAnimationDataV27 = {
  token: number,
  data: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV27>,
  uvAnimData: Array<ModelUVAnimationV19>,
  cloudAnim: Array<ModelCloudAnimV19>,
  matConstAnim: Array<ModelMatConstAnimV19>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV19>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV19>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV19>,
  bcAnim: Array<ModelBoneConstraintAnimV19>,
  streakAnim: Array<ModelStreakAnimV19>
}

export type ModelVisTrackDataV27 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV19 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV19>
}

export type ModelTrackTypeDataV19 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV19 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV19>
}

export type ModelMatConstAnimV19 = {
  materialId: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV19 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV19>
}

export type ModelAnimPropertyDataV19 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV19 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV19 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV19>
}

export type ModelStreakAnimV19 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV19>
}

export type ModelAnchorAnimV19 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV19>
}

export type ModelCompoundAnimationDataV19 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV27 = {
  filename: string,
  sequences: Array<ModelAnimationImportSequenceV19>
}

export type ModelAnimationImportSequenceV19 = {
  name: number,
  duration: number
}

export type ModelFileAnimationBankV20 = {
  animations: Array<ModelAnimationDataV28>,
  compoundAnimations: Array<ModelCompoundAnimationDataV20>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV28>,
  modelReference: string
}

export type ModelAnimationDataV28 = {
  token: number,
  data: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV28>,
  uvAnimData: Array<ModelUVAnimationV20>,
  cloudAnim: Array<ModelCloudAnimV20>,
  matConstAnim: Array<ModelMatConstAnimV20>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV20>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV20>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV20>,
  bcAnim: Array<ModelBoneConstraintAnimV20>,
  streakAnim: Array<ModelStreakAnimV20>,
  lightningAnim: Array<ModelLightningAnimV20>
}

export type ModelVisTrackDataV28 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV20 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV20>
}

export type ModelTrackTypeDataV20 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV20 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV20>
}

export type ModelMatConstAnimV20 = {
  materialId: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV20 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV20>
}

export type ModelAnimPropertyDataV20 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV20 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV20 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV20>
}

export type ModelStreakAnimV20 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV20>
}

export type ModelAnchorAnimV20 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV20>
}

export type ModelLightningAnimV20 = {
  bone: number,
  lightningTrackData: Array<ModelTrackTypeDataV20>
}

export type ModelCompoundAnimationDataV20 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV28 = {
  filename: string,
  sequences: Array<ModelAnimationImportSequenceV20>
}

export type ModelAnimationImportSequenceV20 = {
  name: number,
  duration: number
}

export type ModelFileAnimationBankV21 = {
  animations: Array<ModelAnimationDataV29>,
  compoundAnimations: Array<ModelCompoundAnimationDataV21>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV29>,
  modelReference: string
}

export type ModelAnimationDataV29 = {
  token: number,
  data: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV29>,
  uvAnimData: Array<ModelUVAnimationV21>,
  cloudAnim: Array<ModelCloudAnimV21>,
  matConstAnim: Array<ModelMatConstAnimV21>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV21>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV21>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV21>,
  bcAnim: Array<ModelBoneConstraintAnimV21>,
  streakAnim: Array<ModelStreakAnimV21>,
  lightningAnim: Array<ModelLightningAnimV21>,
  windAnimData: Array<ModelWindAnimationV21>
}

export type ModelVisTrackDataV29 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV21 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV21>
}

export type ModelTrackTypeDataV21 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV21 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV21>
}

export type ModelMatConstAnimV21 = {
  materialId: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV21 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV21>
}

export type ModelAnimPropertyDataV21 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV21 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV21 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV21>
}

export type ModelStreakAnimV21 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV21>
}

export type ModelAnchorAnimV21 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV21>
}

export type ModelLightningAnimV21 = {
  bone: number,
  lightningTrackData: Array<ModelTrackTypeDataV21>
}

export type ModelWindAnimationV21 = {
  bone: number,
  windTrackData: Array<ModelTrackTypeDataV21>
}

export type ModelCompoundAnimationDataV21 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV29 = {
  filename: string,
  sequences: Array<ModelAnimationImportSequenceV21>
}

export type ModelAnimationImportSequenceV21 = {
  name: number,
  duration: number
}

export type ModelFileAnimationBankV22 = {
  animations: Array<ModelAnimationDataV30>,
  compoundAnimations: Array<ModelCompoundAnimationDataV22>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV30>
}

export type ModelAnimationDataV30 = {
  token: number,
  data: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV30>,
  uvAnimData: Array<ModelUVAnimationV22>,
  cloudAnim: Array<ModelCloudAnimV22>,
  matConstAnim: Array<ModelMatConstAnimV22>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV22>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV22>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV22>,
  bcAnim: Array<ModelBoneConstraintAnimV22>,
  streakAnim: Array<ModelStreakAnimV22>,
  lightningAnim: Array<ModelLightningAnimV22>,
  windAnimData: Array<ModelWindAnimationV22>
}

export type ModelVisTrackDataV30 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV22 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV22>
}

export type ModelTrackTypeDataV22 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV22 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV22>
}

export type ModelMatConstAnimV22 = {
  materialId: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV22 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV22>
}

export type ModelAnimPropertyDataV22 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV22 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV22 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV22>
}

export type ModelStreakAnimV22 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV22>
}

export type ModelAnchorAnimV22 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV22>
}

export type ModelLightningAnimV22 = {
  bone: number,
  lightningTrackData: Array<ModelTrackTypeDataV22>
}

export type ModelWindAnimationV22 = {
  bone: number,
  windTrackData: Array<ModelTrackTypeDataV22>
}

export type ModelCompoundAnimationDataV22 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV30 = {
  filename: string,
  sequences: Array<ModelAnimationImportSequenceV22>
}

export type ModelAnimationImportSequenceV22 = {
  name: number,
  duration: number
}

export type ModelFileAnimationBankV23 = {
  animations: Array<ModelAnimationDataV31>,
  compoundAnimations: Array<ModelCompoundAnimationDataV23>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV31>
}

export type ModelAnimationDataV31 = {
  token: number,
  data: PackGrannyAnimationTypeV0,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV31>,
  uvAnimData: Array<ModelUVAnimationV23>,
  cloudAnim: Array<ModelCloudAnimV23>,
  matConstAnim: Array<ModelMatConstAnimV23>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV23>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV23>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV23>,
  bcAnim: Array<ModelBoneConstraintAnimV23>,
  streakAnim: Array<ModelStreakAnimV23>,
  lightningAnim: Array<ModelLightningAnimV23>,
  windAnimData: Array<ModelWindAnimationV23>
}

export type ModelVisTrackDataV31 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV23 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV23>
}

export type ModelTrackTypeDataV23 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV23 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV23>
}

export type ModelMatConstAnimV23 = {
  materialId: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV23 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV23>
}

export type ModelAnimPropertyDataV23 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV23 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV23 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV23>
}

export type ModelStreakAnimV23 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV23>
}

export type ModelAnchorAnimV23 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV23>
}

export type ModelLightningAnimV23 = {
  bone: number,
  lightningTrackData: Array<ModelTrackTypeDataV23>
}

export type ModelWindAnimationV23 = {
  bone: number,
  windTrackData: Array<ModelTrackTypeDataV23>
}

export type ModelCompoundAnimationDataV23 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV31 = {
  filename: string,
  sequences: Array<ModelAnimationImportSequenceV23>
}

export type ModelAnimationImportSequenceV23 = {
  name: number,
  duration: number
}

export type ModelFileAnimationV24 = {
  bank: ModelFileAnimationBankV24,
  anim: PackGrannyAnimationTypeV0
}

export type ModelFileAnimationBankV24 = {
  animations: Array<ModelAnimationDataV32>,
  compoundAnimations: Array<ModelCompoundAnimationDataV24>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV32>
}

export type ModelAnimationDataV32 = {
  token: number,
  data: PackGrannyAnimationTypeV0,
  animLod: ModelAnimationLodV24,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV32>,
  uvAnimData: Array<ModelUVAnimationV24>,
  cloudAnim: Array<ModelCloudAnimV24>,
  matConstAnim: Array<ModelMatConstAnimV24>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV24>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV24>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV24>,
  bcAnim: Array<ModelBoneConstraintAnimV24>,
  streakAnim: Array<ModelStreakAnimV24>,
  lightningAnim: Array<ModelLightningAnimV24>,
  windAnimData: Array<ModelWindAnimationV24>
}

export type ModelAnimationLodV24 = {
  data: PackGrannyAnimationTypeV0,
  fileFull: string
}

export type ModelVisTrackDataV32 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV24 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV24>
}

export type ModelTrackTypeDataV24 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV24 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV24>
}

export type ModelMatConstAnimV24 = {
  materialId: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV24 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV24>
}

export type ModelAnimPropertyDataV24 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV24 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV24 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV24>
}

export type ModelStreakAnimV24 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV24>
}

export type ModelAnchorAnimV24 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV24>
}

export type ModelLightningAnimV24 = {
  bone: number,
  lightningTrackData: Array<ModelTrackTypeDataV24>
}

export type ModelWindAnimationV24 = {
  bone: number,
  windTrackData: Array<ModelTrackTypeDataV24>
}

export type ModelCompoundAnimationDataV24 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV32 = {
  filename: string,
  sequences: Array<ModelAnimationImportSequenceV24>
}

export type ModelAnimationImportSequenceV24 = {
  name: number,
  duration: number
}

export type ModelFileAnimationV25 = {
  bank: ModelFileAnimationBankV25,
  anim: PackGrannyAnimationTypeV1
}

export type ModelFileAnimationBankV25 = {
  animations: Array<ModelAnimationDataV33>,
  compoundAnimations: Array<ModelCompoundAnimationDataV25>,
  fallbacks: Array<number>,
  imports: Array<ModelAnimationImportDataV33>
}

export type ModelAnimationDataV33 = {
  token: number,
  data: PackGrannyAnimationTypeV1,
  animLod: ModelAnimationLodV25,
  moveSpeed: number,
  visTrackData: Array<ModelVisTrackDataV33>,
  uvAnimData: Array<ModelUVAnimationV25>,
  cloudAnim: Array<ModelCloudAnimV25>,
  matConstAnim: Array<ModelMatConstAnimV25>,
  morphTrackGroups: Array<number>,
  triggerTimes: Array<number>,
  triggerTokens: Array<number>,
  lightAnimData: Array<ModelLightAnimationV25>,
  isAdditive: number,
  variantCount: number,
  variantIndices: Array<number>,
  properties: Array<ModelAnimPropertyDataV25>,
  center: Array<number>,
  radius: number,
  tokenMapAnims: Array<ModelTokenMapAnimV25>,
  bcAnim: Array<ModelBoneConstraintAnimV25>,
  streakAnim: Array<ModelStreakAnimV25>,
  lightningAnim: Array<ModelLightningAnimV25>,
  windAnimData: Array<ModelWindAnimationV25>
}

export type PackGrannyAnimationTypeV1 = {
  animation: Array<number>,
  pointers: Array<number>
}

export type ModelAnimationLodV25 = {
  data: PackGrannyAnimationTypeV1,
  fileFull: string
}

export type ModelVisTrackDataV33 = {
  boneToken: number,
  keys: Array<number>
}

export type ModelUVAnimationV25 = {
  uvAnimId: number,
  uvTransformData: Array<ModelTrackTypeDataV25>
}

export type ModelTrackTypeDataV25 = {
  type: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelCloudAnimV25 = {
  bone: number,
  cloudTrackData: Array<ModelTrackTypeDataV25>
}

export type ModelMatConstAnimV25 = {
  materialId: number,
  constToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelLightAnimationV25 = {
  bone: number,
  lightTrackData: Array<ModelTrackTypeDataV25>
}

export type ModelAnimPropertyDataV25 = {
  id: number,
  type: number,
  time: number,
  val: number,
  strVal: string
}

export type ModelTokenMapAnimV25 = {
  linkToken: number,
  trackGroupIndex: number,
  vectorTrackIndex: number,
  initialValue: Array<number>
}

export type ModelBoneConstraintAnimV25 = {
  bone: number,
  bcTrackData: Array<ModelTrackTypeDataV25>
}

export type ModelStreakAnimV25 = {
  bone: number,
  anchorAnim: Array<ModelAnchorAnimV25>
}

export type ModelAnchorAnimV25 = {
  bone: number,
  anchorTrackData: Array<ModelTrackTypeDataV25>
}

export type ModelLightningAnimV25 = {
  bone: number,
  lightningTrackData: Array<ModelTrackTypeDataV25>
}

export type ModelWindAnimationV25 = {
  bone: number,
  windTrackData: Array<ModelTrackTypeDataV25>
}

export type ModelCompoundAnimationDataV25 = {
  token: number,
  start: number,
  loop: number,
  end: number
}

export type ModelAnimationImportDataV33 = {
  filename: string,
  sequences: Array<ModelAnimationImportSequenceV25>
}

export type ModelAnimationImportSequenceV25 = {
  name: number,
  duration: number
}