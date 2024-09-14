export namespace V0_N {
  export type SceneDataV0 = {
    sequence: Array<SequenceDataV0>,
    resources: ResourceDataV0
  }

  export type SequenceDataV0 = {
    environmentMap: number,
    map: string,
    clientMap: string,
    name: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV0>
  }

  export type TrackGroupDataV0 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV0>,
    track: Array<TrackDataV0>
  }

  export type PropertyDataV0 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV0 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV0>,
    flagKey: Array<FlagKeyDataV0>,
    triggerKey: Array<TriggerKeyDataV0>
  }

  export type CurveKeyDataV0 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV0 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV0 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV0 = {
    ambientLightResource: Array<AmbientLightDataV0>,
    textResource: Array<TextResourceDataV0>
  }

  export type AmbientLightDataV0 = {
    ambientGroundColor: ColorDefDataV0,
    ambientSkyColor: ColorDefDataV0,
    fillColor: ColorDefDataV0,
    hemisphericalColor: ColorDefDataV0,
    name: bigint
  }

  export type ColorDefDataV0 = {
    color: Uint8Array,
    intensity: number
  }

  export type TextResourceDataV0 = {
    name: bigint,
    textEntry: Array<TextEntryDataV0>
  }

  export type TextEntryDataV0 = {
    text: string,
    language: number
  }

}

export type V0 = V0_N.SceneDataV0;

export namespace V1_N {
  export type SceneDataV1 = {
    sequence: Array<SequenceDataV1>,
    resources: ResourceDataV1
  }

  export type SequenceDataV1 = {
    environmentMap: number,
    map: string,
    clientMap: string,
    name: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV1>
  }

  export type TrackGroupDataV1 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV1>,
    track: Array<TrackDataV1>
  }

  export type PropertyDataV1 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV1 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV1>,
    flagKey: Array<FlagKeyDataV1>,
    triggerKey: Array<TriggerKeyDataV1>
  }

  export type CurveKeyDataV1 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV1 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV1 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV1 = {
    ambientLightResource: Array<AmbientLightDataV1>,
    script: Array<ScriptDataV1>,
    textResource: Array<TextResourceDataV1>
  }

  export type AmbientLightDataV1 = {
    ambientGroundColor: ColorDefDataV1,
    ambientSkyColor: ColorDefDataV1,
    fillColor: ColorDefDataV1,
    hemisphericalColor: ColorDefDataV1,
    name: bigint
  }

  export type ColorDefDataV1 = {
    color: Uint8Array,
    intensity: number
  }

  export type ScriptDataV1 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV1 = {
    name: bigint,
    textEntry: Array<TextEntryDataV1>
  }

  export type TextEntryDataV1 = {
    text: string,
    language: number
  }

}

export type V1 = V1_N.SceneDataV1;

export namespace V2_N {
  export type SceneDataV2 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV2>,
    resources: ResourceDataV2
  }

  export type SequenceDataV2 = {
    environmentMap: number,
    map: string,
    clientMap: string,
    name: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV2>
  }

  export type TrackGroupDataV2 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV2>,
    track: Array<TrackDataV2>
  }

  export type PropertyDataV2 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV2 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV2>,
    flagKey: Array<FlagKeyDataV2>,
    triggerKey: Array<TriggerKeyDataV2>
  }

  export type CurveKeyDataV2 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV2 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV2 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV2 = {
    ambientLightResource: Array<AmbientLightDataV2>,
    script: Array<ScriptDataV2>,
    textResource: Array<TextResourceDataV2>
  }

  export type AmbientLightDataV2 = {
    ambientGroundColor: ColorDefDataV2,
    ambientSkyColor: ColorDefDataV2,
    fillColor: ColorDefDataV2,
    hemisphericalColor: ColorDefDataV2,
    name: bigint
  }

  export type ColorDefDataV2 = {
    color: Uint8Array,
    intensity: number
  }

  export type ScriptDataV2 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV2 = {
    name: bigint,
    textEntry: Array<TextEntryDataV2>
  }

  export type TextEntryDataV2 = {
    text: string,
    language: number
  }

}

export type V2 = V2_N.SceneDataV2;

export namespace V3_N {
  export type SceneDataV3 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV3>,
    resources: ResourceDataV3
  }

  export type SequenceDataV3 = {
    environmentMap: number,
    map: string,
    clientMap: string,
    name: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV3>
  }

  export type TrackGroupDataV3 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV3>,
    track: Array<TrackDataV3>
  }

  export type PropertyDataV3 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV3 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV3>,
    flagKey: Array<FlagKeyDataV3>,
    triggerKey: Array<TriggerKeyDataV3>
  }

  export type CurveKeyDataV3 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV3 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV3 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV3 = {
    ambientLightResource: Array<AmbientLightDataV3>,
    script: Array<ScriptDataV3>,
    textResource: Array<TextResourceDataV3>
  }

  export type AmbientLightDataV3 = {
    ambientGroundColor: ColorDefDataV3,
    ambientSkyColor: ColorDefDataV3,
    fillColor: ColorDefDataV3,
    hemisphericalColor: ColorDefDataV3,
    name: bigint
  }

  export type ColorDefDataV3 = {
    color: Uint8Array,
    intensity: number
  }

  export type ScriptDataV3 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV3 = {
    name: bigint,
    textEntry: Array<TextEntryDataV3>
  }

  export type TextEntryDataV3 = {
    text: string,
    language: number
  }

}

export type V3 = V3_N.SceneDataV3;

export namespace V4_N {
  export type SceneDataV4 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV4>,
    resources: ResourceDataV4
  }

  export type SequenceDataV4 = {
    environmentMap: number,
    map: string,
    clientMap: string,
    name: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV4>
  }

  export type TrackGroupDataV4 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV4>,
    track: Array<TrackDataV4>
  }

  export type PropertyDataV4 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV4 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV4>,
    flagKey: Array<FlagKeyDataV4>,
    triggerKey: Array<TriggerKeyDataV4>
  }

  export type CurveKeyDataV4 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV4 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV4 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV4 = {
    ambientLightResource: Array<AmbientLightDataV4>,
    script: Array<ScriptDataV4>,
    textResource: Array<TextResourceDataV4>
  }

  export type AmbientLightDataV4 = {
    ambientGroundColor: ColorDefDataV4,
    ambientSkyColor: ColorDefDataV4,
    fillColor: ColorDefDataV4,
    hemisphericalColor: ColorDefDataV4,
    name: bigint
  }

  export type ColorDefDataV4 = {
    color: Uint8Array,
    intensity: number
  }

  export type ScriptDataV4 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV4 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV4>
  }

  export type TextEntryDataV4 = {
    text: string,
    language: number
  }

}

export type V4 = V4_N.SceneDataV4;

export namespace V5_N {
  export type SceneDataV5 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV5>,
    resources: ResourceDataV5
  }

  export type SequenceDataV5 = {
    environmentMap: number,
    map: string,
    clientMap: string,
    name: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV5>
  }

  export type TrackGroupDataV5 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV5>,
    track: Array<TrackDataV5>
  }

  export type PropertyDataV5 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV5 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV5>,
    flagKey: Array<FlagKeyDataV5>,
    triggerKey: Array<TriggerKeyDataV5>
  }

  export type CurveKeyDataV5 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV5 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV5 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV5 = {
    ambientLightResource: Array<AmbientLightDataV5>,
    script: Array<ScriptDataV5>,
    textResource: Array<TextResourceDataV5>
  }

  export type AmbientLightDataV5 = {
    ambientGroundColor: ColorDefDataV5,
    ambientSkyColor: ColorDefDataV5,
    fillColor: ColorDefDataV5,
    hemisphericalColor: ColorDefDataV5,
    name: bigint
  }

  export type ColorDefDataV5 = {
    color: Uint8Array,
    intensity: number
  }

  export type ScriptDataV5 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV5 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV5>
  }

  export type TextEntryDataV5 = {
    text: string,
    language: number
  }

}

export type V5 = V5_N.SceneDataV5;

export namespace V6_N {
  export type SceneDataV6 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV6>,
    resources: ResourceDataV6
  }

  export type SequenceDataV6 = {
    name: bigint,
    length: number,
    environmentMap: number,
    map: string,
    clientMap: string,
    trackGroup: Array<TrackGroupDataV6>
  }

  export type TrackGroupDataV6 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV6>,
    track: Array<TrackDataV6>
  }

  export type PropertyDataV6 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV6 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV6>,
    flagKey: Array<FlagKeyDataV6>,
    triggerKey: Array<TriggerKeyDataV6>
  }

  export type CurveKeyDataV6 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV6 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV6 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV6 = {
    ambientLightResource: Array<AmbientLightDataV6>,
    script: Array<ScriptDataV6>,
    textResource: Array<TextResourceDataV6>
  }

  export type AmbientLightDataV6 = {
    ambientGroundColor: ColorDefDataV6,
    ambientSkyColor: ColorDefDataV6,
    fillColor: ColorDefDataV6,
    hemisphericalColor: ColorDefDataV6,
    name: bigint
  }

  export type ColorDefDataV6 = {
    color: Uint8Array,
    intensity: number
  }

  export type ScriptDataV6 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV6 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV6>
  }

  export type TextEntryDataV6 = {
    text: string,
    language: number
  }

}

export type V6 = V6_N.SceneDataV6;

export namespace V7_N {
  export type SceneDataV7 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV7>,
    resources: ResourceDataV7
  }

  export type SequenceDataV7 = {
    name: bigint,
    length: number,
    environmentMap: number,
    map: string,
    clientMap: string,
    trackGroup: Array<TrackGroupDataV7>
  }

  export type TrackGroupDataV7 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV7>,
    track: Array<TrackDataV7>
  }

  export type PropertyDataV7 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV7 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV7>,
    flagKey: Array<FlagKeyDataV7>,
    triggerKey: Array<TriggerKeyDataV7>
  }

  export type CurveKeyDataV7 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV7 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV7 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV7 = {
    ambientLightResource: Array<AmbientLightDataV7>,
    script: Array<ScriptDataV7>,
    textResource: Array<TextResourceDataV7>
  }

  export type AmbientLightDataV7 = {
    ambientGroundColor: ColorDefDataV7,
    ambientSkyColor: ColorDefDataV7,
    fillColor: ColorDefDataV7,
    hemisphericalColor: ColorDefDataV7,
    name: bigint
  }

  export type ColorDefDataV7 = {
    color: Uint8Array,
    intensity: number
  }

  export type ScriptDataV7 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV7 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV7>
  }

  export type TextEntryDataV7 = {
    text: string,
    language: number
  }

}

export type V7 = V7_N.SceneDataV7;

export namespace V8_N {
  export type SceneDataV8 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV8>,
    resources: ResourceDataV8
  }

  export type SequenceDataV8 = {
    name: bigint,
    length: number,
    environmentMap: number,
    map: string,
    clientMap: string,
    trackGroup: Array<TrackGroupDataV8>
  }

  export type TrackGroupDataV8 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV8>,
    track: Array<TrackDataV8>
  }

  export type PropertyDataV8 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV8 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV8>,
    flagKey: Array<FlagKeyDataV8>,
    triggerKey: Array<TriggerKeyDataV8>
  }

  export type CurveKeyDataV8 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV8 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV8 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV8 = {
    ambientLightResource: Array<AmbientLightDataV8>,
    fileNameRef: Array<FileNameRefDataV8>,
    script: Array<ScriptDataV8>,
    textResource: Array<TextResourceDataV8>
  }

  export type AmbientLightDataV8 = {
    ambientGroundColor: ColorDefDataV8,
    ambientSkyColor: ColorDefDataV8,
    fillColor: ColorDefDataV8,
    hemisphericalColor: ColorDefDataV8,
    name: bigint
  }

  export type ColorDefDataV8 = {
    color: Uint8Array,
    intensity: number
  }

  export type FileNameRefDataV8 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV8 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV8 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV8>
  }

  export type TextEntryDataV8 = {
    text: string,
    language: number
  }

}

export type V8 = V8_N.SceneDataV8;

export namespace V9_N {
  export type SceneDataV9 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV9>,
    resources: ResourceDataV9
  }

  export type SequenceDataV9 = {
    name: bigint,
    length: number,
    environmentMap: number,
    map: string,
    clientMap: string,
    trackGroup: Array<TrackGroupDataV9>
  }

  export type TrackGroupDataV9 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV9>,
    track: Array<TrackDataV9>
  }

  export type PropertyDataV9 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV9 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV9>,
    flagKey: Array<FlagKeyDataV9>,
    triggerKey: Array<TriggerKeyDataV9>
  }

  export type CurveKeyDataV9 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV9 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV9 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV9 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV9>,
    fileNameRef: Array<FileNameRefDataV9>,
    script: Array<ScriptDataV9>,
    textResource: Array<TextResourceDataV9>
  }

  export type AmbientLightDataV9 = {
    ambientGroundColor: ColorDefDataV9,
    ambientSkyColor: ColorDefDataV9,
    fillColor: ColorDefDataV9,
    hemisphericalColor: ColorDefDataV9,
    name: bigint
  }

  export type ColorDefDataV9 = {
    color: Uint8Array,
    intensity: number
  }

  export type FileNameRefDataV9 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV9 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV9 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV9>
  }

  export type TextEntryDataV9 = {
    text: string,
    language: number
  }

}

export type V9 = V9_N.SceneDataV9;

export namespace V10_N {
  export type SceneDataV10 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV10>,
    resources: ResourceDataV10
  }

  export type SequenceDataV10 = {
    name: bigint,
    length: number,
    environmentMap: number,
    map: string,
    clientMap: string,
    trackGroup: Array<TrackGroupDataV10>
  }

  export type TrackGroupDataV10 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV10>,
    track: Array<TrackDataV10>
  }

  export type PropertyDataV10 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV10 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV10>,
    flagKey: Array<FlagKeyDataV10>,
    triggerKey: Array<TriggerKeyDataV10>
  }

  export type CurveKeyDataV10 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV10 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV10 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV10 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV10>,
    fileNameRef: Array<FileNameRefDataV10>,
    script: Array<ScriptDataV10>,
    textResource: Array<TextResourceDataV10>
  }

  export type AmbientLightDataV10 = {
    ambientGroundColor: ColorDefDataV10,
    ambientSkyColor: ColorDefDataV10,
    fillColor: ColorDefDataV10,
    hemisphericalColor: ColorDefDataV10,
    name: bigint
  }

  export type ColorDefDataV10 = {
    color: Uint8Array,
    intensity: number
  }

  export type FileNameRefDataV10 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV10 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV10 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV10>
  }

  export type TextEntryDataV10 = {
    text: string,
    language: number
  }

}

export type V10 = V10_N.SceneDataV10;

export namespace V11_N {
  export type SceneDataV11 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV11>,
    resources: ResourceDataV11
  }

  export type SequenceDataV11 = {
    name: bigint,
    length: number,
    environmentMap: number,
    map: string,
    clientMap: string,
    trackGroup: Array<TrackGroupDataV11>
  }

  export type TrackGroupDataV11 = {
    name: bigint,
    type: number,
    flags: number,
    prop: Array<PropertyDataV11>,
    track: Array<TrackDataV11>
  }

  export type PropertyDataV11 = {
    type: number,
    value: bigint,
    pathVal: number
  }

  export type TrackDataV11 = {
    name: bigint,
    type: number,
    curveKey: Array<CurveKeyDataV11>,
    flagKey: Array<FlagKeyDataV11>,
    triggerKey: Array<TriggerKeyDataV11>
  }

  export type CurveKeyDataV11 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV11 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV11 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV11 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV11>,
    fileNameRef: Array<FileNameRefDataV11>,
    script: Array<ScriptDataV11>,
    textResource: Array<TextResourceDataV11>
  }

  export type AmbientLightDataV11 = {
    ambientGroundColor: ColorDefDataV11,
    ambientSkyColor: ColorDefDataV11,
    fillColor: ColorDefDataV11,
    hemisphericalColor: ColorDefDataV11,
    name: bigint
  }

  export type ColorDefDataV11 = {
    color: Uint8Array,
    intensity: number
  }

  export type FileNameRefDataV11 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV11 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV11 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV11>
  }

  export type TextEntryDataV11 = {
    text: string,
    language: number
  }

}

export type V11 = V11_N.SceneDataV11;

export namespace V12_N {
  export type SceneDataV12 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV12>,
    resources: ResourceDataV12
  }

  export type SequenceDataV12 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    trackGroup: Array<TrackGroupDataV12>
  }

  export type TrackGroupDataV12 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV12>,
    track: Array<TrackDataV12>,
    type: number
  }

  export type PropertyDataV12 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV12 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV12>,
    flagKey: Array<FlagKeyDataV12>,
    triggerKey: Array<TriggerKeyDataV12>,
    type: number
  }

  export type CurveKeyDataV12 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV12 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV12 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV12 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV12>,
    fileNameRef: Array<FileNameRefDataV12>,
    script: Array<ScriptDataV12>,
    textResource: Array<TextResourceDataV12>
  }

  export type AmbientLightDataV12 = {
    ambientGroundColor: ColorDefDataV12,
    ambientSkyColor: ColorDefDataV12,
    fillColor: ColorDefDataV12,
    hemisphericalColor: ColorDefDataV12,
    name: bigint
  }

  export type ColorDefDataV12 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV12 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV12 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV12 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV12>
  }

  export type TextEntryDataV12 = {
    text: string,
    language: number
  }

}

export type V12 = V12_N.SceneDataV12;

export namespace V13_N {
  export type SceneDataV13 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV13>,
    resources: ResourceDataV13
  }

  export type SequenceDataV13 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    trackGroup: Array<TrackGroupDataV13>
  }

  export type TrackGroupDataV13 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV13>,
    track: Array<TrackDataV13>,
    type: number
  }

  export type PropertyDataV13 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV13 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV13>,
    flagKey: Array<FlagKeyDataV13>,
    triggerKey: Array<TriggerKeyDataV13>,
    type: number
  }

  export type CurveKeyDataV13 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV13 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV13 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV13 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV13>,
    fileNameRef: Array<FileNameRefDataV13>,
    script: Array<ScriptDataV13>,
    textResource: Array<TextResourceDataV13>
  }

  export type AmbientLightDataV13 = {
    ambientGroundColor: ColorDefDataV13,
    ambientSkyColor: ColorDefDataV13,
    fillColor: ColorDefDataV13,
    hemisphericalColor: ColorDefDataV13,
    name: bigint
  }

  export type ColorDefDataV13 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV13 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV13 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV13 = {
    name: bigint,
    id: number,
    textEntry: Array<TextEntryDataV13>
  }

  export type TextEntryDataV13 = {
    text: string,
    language: number
  }

}

export type V13 = V13_N.SceneDataV13;

export namespace V14_N {
  export type SceneDataV14 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV14>,
    resources: ResourceDataV14
  }

  export type SequenceDataV14 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    trackGroup: Array<TrackGroupDataV14>
  }

  export type TrackGroupDataV14 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV14>,
    track: Array<TrackDataV14>,
    type: number
  }

  export type PropertyDataV14 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV14 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV14>,
    flagKey: Array<FlagKeyDataV14>,
    triggerKey: Array<TriggerKeyDataV14>,
    type: number
  }

  export type CurveKeyDataV14 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV14 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV14 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV14 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV14>,
    fileNameRef: Array<FileNameRefDataV14>,
    script: Array<ScriptDataV14>,
    textResource: Array<TextResourceDataV14>
  }

  export type AmbientLightDataV14 = {
    ambientGroundColor: ColorDefDataV14,
    ambientSkyColor: ColorDefDataV14,
    fillColor: ColorDefDataV14,
    hemisphericalColor: ColorDefDataV14,
    name: bigint
  }

  export type ColorDefDataV14 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV14 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV14 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV14 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV14>
  }

  export type TextEntryDataV14 = {
    text: string,
    language: number
  }

}

export type V14 = V14_N.SceneDataV14;

export namespace V15_N {
  export type SceneDataV15 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV15>,
    resources: ResourceDataV15
  }

  export type SequenceDataV15 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    updateScript: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV15>
  }

  export type TrackGroupDataV15 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV15>,
    track: Array<TrackDataV15>,
    type: number
  }

  export type PropertyDataV15 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV15 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV15>,
    flagKey: Array<FlagKeyDataV15>,
    triggerKey: Array<TriggerKeyDataV15>,
    type: number
  }

  export type CurveKeyDataV15 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV15 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV15 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV15 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV15>,
    fileNameRef: Array<FileNameRefDataV15>,
    script: Array<ScriptDataV15>,
    textResource: Array<TextResourceDataV15>
  }

  export type AmbientLightDataV15 = {
    ambientGroundColor: ColorDefDataV15,
    ambientSkyColor: ColorDefDataV15,
    fillColor: ColorDefDataV15,
    hemisphericalColor: ColorDefDataV15,
    name: bigint
  }

  export type ColorDefDataV15 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV15 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV15 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV15 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV15>
  }

  export type TextEntryDataV15 = {
    text: string,
    language: number
  }

}

export type V15 = V15_N.SceneDataV15;

export namespace V16_N {
  export type SceneDataV16 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV16>,
    resources: ResourceDataV16
  }

  export type SequenceDataV16 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    updateScript: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV16>
  }

  export type TrackGroupDataV16 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV16>,
    track: Array<TrackDataV16>,
    type: number
  }

  export type PropertyDataV16 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV16 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV16>,
    flagKey: Array<FlagKeyDataV16>,
    triggerKey: Array<TriggerKeyDataV16>,
    type: number
  }

  export type CurveKeyDataV16 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV16 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV16 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV16 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV16>,
    fileNameRef: Array<FileNameRefDataV16>,
    script: Array<ScriptDataV16>,
    textResource: Array<TextResourceDataV16>
  }

  export type AmbientLightDataV16 = {
    ambientGroundColor: ColorDefDataV16,
    ambientSkyColor: ColorDefDataV16,
    fillColor: ColorDefDataV16,
    hemisphericalColor: ColorDefDataV16,
    name: bigint
  }

  export type ColorDefDataV16 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV16 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV16 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV16 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV16>
  }

  export type TextEntryDataV16 = {
    text: string,
    language: number
  }

}

export type V16 = V16_N.SceneDataV16;

export namespace V17_N {
  export type SceneDataV17 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV17>,
    resources: ResourceDataV17
  }

  export type SequenceDataV17 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    updateScript: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV17>
  }

  export type TrackGroupDataV17 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV17>,
    track: Array<TrackDataV17>,
    type: number
  }

  export type PropertyDataV17 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV17 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV17>,
    flagKey: Array<FlagKeyDataV17>,
    triggerKey: Array<TriggerKeyDataV17>,
    type: number
  }

  export type CurveKeyDataV17 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV17 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV17 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV17 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV17>,
    fileNameRef: Array<FileNameRefDataV17>,
    script: Array<ScriptDataV17>,
    textResource: Array<TextResourceDataV17>
  }

  export type AmbientLightDataV17 = {
    ambientGroundColor: ColorDefDataV17,
    ambientSkyColor: ColorDefDataV17,
    fillColor: ColorDefDataV17,
    hemisphericalColor: ColorDefDataV17,
    name: bigint
  }

  export type ColorDefDataV17 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV17 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV17 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV17 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV17>
  }

  export type TextEntryDataV17 = {
    text: string,
    language: number
  }

}

export type V17 = V17_N.SceneDataV17;

export namespace V18_N {
  export type SceneDataV18 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV18>,
    resources: ResourceDataV18
  }

  export type SequenceDataV18 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    updateScript: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV18>
  }

  export type TrackGroupDataV18 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV18>,
    track: Array<TrackDataV18>,
    type: number
  }

  export type PropertyDataV18 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV18 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV18>,
    flagKey: Array<FlagKeyDataV18>,
    triggerKey: Array<TriggerKeyDataV18>,
    type: number
  }

  export type CurveKeyDataV18 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV18 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV18 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV18 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV18>,
    fileNameRef: Array<FileNameRefDataV18>,
    script: Array<ScriptDataV18>,
    textResource: Array<TextResourceDataV18>
  }

  export type AmbientLightDataV18 = {
    ambientGroundColor: ColorDefDataV18,
    ambientSkyColor: ColorDefDataV18,
    fillColor: ColorDefDataV18,
    hemisphericalColor: ColorDefDataV18,
    name: bigint
  }

  export type ColorDefDataV18 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV18 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV18 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV18 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV18>
  }

  export type TextEntryDataV18 = {
    text: string,
    language: number
  }

}

export type V18 = V18_N.SceneDataV18;

export namespace V19_N {
  export type SceneDataV19 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV19>,
    resources: ResourceDataV19
  }

  export type SequenceDataV19 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    updateScript: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV19>
  }

  export type TrackGroupDataV19 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV19>,
    track: Array<TrackDataV19>,
    type: number
  }

  export type PropertyDataV19 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV19 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV19>,
    flagKey: Array<FlagKeyDataV19>,
    triggerKey: Array<TriggerKeyDataV19>,
    type: number
  }

  export type CurveKeyDataV19 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV19 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV19 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV19 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV19>,
    fileNameRef: Array<FileNameRefDataV19>,
    script: Array<ScriptDataV19>,
    textResource: Array<TextResourceDataV19>
  }

  export type AmbientLightDataV19 = {
    ambientGroundColor: ColorDefDataV19,
    ambientSkyColor: ColorDefDataV19,
    fillColor: ColorDefDataV19,
    hemisphericalColor: ColorDefDataV19,
    name: bigint
  }

  export type ColorDefDataV19 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV19 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV19 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV19 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV19>
  }

  export type TextEntryDataV19 = {
    text: string,
    language: number
  }

}

export type V19 = V19_N.SceneDataV19;

export namespace V20_N {
  export type SceneDataV20 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV20>,
    resources: ResourceDataV20
  }

  export type SequenceDataV20 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    updateScript: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV20>
  }

  export type TrackGroupDataV20 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV20>,
    track: Array<TrackDataV20>,
    type: number
  }

  export type PropertyDataV20 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV20 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV20>,
    flagKey: Array<FlagKeyDataV20>,
    triggerKey: Array<TriggerKeyDataV20>,
    type: number
  }

  export type CurveKeyDataV20 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV20 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV20 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV20 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV20>,
    fileNameRef: Array<FileNameRefDataV20>,
    script: Array<ScriptDataV20>,
    textResource: Array<TextResourceDataV20>
  }

  export type AmbientLightDataV20 = {
    ambientGroundColor: ColorDefDataV20,
    ambientSkyColor: ColorDefDataV20,
    fillColor: ColorDefDataV20,
    hemisphericalColor: ColorDefDataV20,
    name: bigint
  }

  export type ColorDefDataV20 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV20 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV20 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV20 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV20>
  }

  export type TextEntryDataV20 = {
    text: string,
    language: number
  }

}

export type V20 = V20_N.SceneDataV20;

export namespace V21_N {
  export type SceneDataV21 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV21>,
    resources: ResourceDataV21,
    trackGroup: TrackGroupDataV21
  }

  export type SequenceDataV21 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    updateScript: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV21>
  }

  export type TrackGroupDataV21 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV21>,
    track: Array<TrackDataV21>,
    type: number
  }

  export type PropertyDataV21 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV21 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV21>,
    flagKey: Array<FlagKeyDataV21>,
    triggerKey: Array<TriggerKeyDataV21>,
    type: number
  }

  export type CurveKeyDataV21 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV21 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV21 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV21 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV21>,
    fileNameRef: Array<FileNameRefDataV21>,
    script: Array<ScriptDataV21>,
    textResource: Array<TextResourceDataV21>
  }

  export type AmbientLightDataV21 = {
    ambientGroundColor: ColorDefDataV21,
    ambientSkyColor: ColorDefDataV21,
    fillColor: ColorDefDataV21,
    hemisphericalColor: ColorDefDataV21,
    name: bigint
  }

  export type ColorDefDataV21 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV21 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV21 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV21 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV21>
  }

  export type TextEntryDataV21 = {
    text: string,
    language: number
  }

}

export type V21 = V21_N.SceneDataV21;

export namespace V22_N {
  export type SceneDataV22 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV22>,
    resources: ResourceDataV22,
    trackGroup: TrackGroupDataV22
  }

  export type SequenceDataV22 = {
    name: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    updateScript: bigint,
    length: number,
    trackGroup: Array<TrackGroupDataV22>
  }

  export type TrackGroupDataV22 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV22>,
    track: Array<TrackDataV22>,
    type: number
  }

  export type PropertyDataV22 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV22 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV22>,
    flagKey: Array<FlagKeyDataV22>,
    triggerKey: Array<TriggerKeyDataV22>,
    type: number
  }

  export type CurveKeyDataV22 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV22 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV22 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV22 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV22>,
    fileNameRef: Array<FileNameRefDataV22>,
    script: Array<ScriptDataV22>,
    textResource: Array<TextResourceDataV22>
  }

  export type AmbientLightDataV22 = {
    ambientGroundColor: ColorDefDataV22,
    ambientSkyColor: ColorDefDataV22,
    fillColor: ColorDefDataV22,
    hemisphericalColor: ColorDefDataV22,
    name: bigint
  }

  export type ColorDefDataV22 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV22 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV22 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV22 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV22>
  }

  export type TextEntryDataV22 = {
    text: string,
    language: number
  }

}

export type V22 = V22_N.SceneDataV22;

export namespace V23_N {
  export type SceneDataV23 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV23>,
    resources: ResourceDataV23,
    trackGroup: TrackGroupDataV23
  }

  export type SequenceDataV23 = {
    name: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV23>
  }

  export type TrackGroupDataV23 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV23>,
    track: Array<TrackDataV23>,
    type: number
  }

  export type PropertyDataV23 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV23 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV23>,
    flagKey: Array<FlagKeyDataV23>,
    triggerKey: Array<TriggerKeyDataV23>,
    type: number
  }

  export type CurveKeyDataV23 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV23 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV23 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV23 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV23>,
    fileNameRef: Array<FileNameRefDataV23>,
    script: Array<ScriptDataV23>,
    textResource: Array<TextResourceDataV23>
  }

  export type AmbientLightDataV23 = {
    ambientGroundColor: ColorDefDataV23,
    ambientSkyColor: ColorDefDataV23,
    fillColor: ColorDefDataV23,
    hemisphericalColor: ColorDefDataV23,
    name: bigint
  }

  export type ColorDefDataV23 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV23 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV23 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV23 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV23>
  }

  export type TextEntryDataV23 = {
    text: string,
    language: number
  }

}

export type V23 = V23_N.SceneDataV23;

export namespace V24_N {
  export type SceneDataV24 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV24>,
    resources: ResourceDataV24,
    trackGroup: TrackGroupDataV24
  }

  export type SequenceDataV24 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV24>
  }

  export type TrackGroupDataV24 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV24>,
    track: Array<TrackDataV24>,
    type: number
  }

  export type PropertyDataV24 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV24 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV24>,
    flagKey: Array<FlagKeyDataV24>,
    triggerKey: Array<TriggerKeyDataV24>,
    type: number
  }

  export type CurveKeyDataV24 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV24 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV24 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV24 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV24>,
    fileNameRef: Array<FileNameRefDataV24>,
    script: Array<ScriptDataV24>,
    textResource: Array<TextResourceDataV24>
  }

  export type AmbientLightDataV24 = {
    ambientGroundColor: ColorDefDataV24,
    ambientSkyColor: ColorDefDataV24,
    fillColor: ColorDefDataV24,
    hemisphericalColor: ColorDefDataV24,
    name: bigint
  }

  export type ColorDefDataV24 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV24 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV24 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV24 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV24>
  }

  export type TextEntryDataV24 = {
    text: string,
    language: number
  }

}

export type V24 = V24_N.SceneDataV24;

export namespace V25_N {
  export type SceneDataV25 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV25>,
    resources: ResourceDataV25,
    trackGroup: TrackGroupDataV25
  }

  export type SequenceDataV25 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV25>
  }

  export type TrackGroupDataV25 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV25>,
    track: Array<TrackDataV25>,
    type: number
  }

  export type PropertyDataV25 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV25 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV25>,
    flagKey: Array<FlagKeyDataV25>,
    triggerKey: Array<TriggerKeyDataV25>,
    type: number
  }

  export type CurveKeyDataV25 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV25 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV25 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV25 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV25>,
    fileNameRef: Array<FileNameRefDataV25>,
    script: Array<ScriptDataV25>,
    textResource: Array<TextResourceDataV25>
  }

  export type AmbientLightDataV25 = {
    ambientGroundColor: ColorDefDataV25,
    ambientSkyColor: ColorDefDataV25,
    fillColor: ColorDefDataV25,
    hemisphericalColor: ColorDefDataV25,
    name: bigint
  }

  export type ColorDefDataV25 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV25 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV25 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV25 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV25>
  }

  export type TextEntryDataV25 = {
    text: string,
    language: number
  }

}

export type V25 = V25_N.SceneDataV25;

export namespace V26_N {
  export type SceneDataV26 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV26>,
    resources: ResourceDataV26,
    trackGroup: TrackGroupDataV26
  }

  export type SequenceDataV26 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV26>
  }

  export type TrackGroupDataV26 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV26>,
    track: Array<TrackDataV26>,
    type: number
  }

  export type PropertyDataV26 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV26 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV26>,
    flagKey: Array<FlagKeyDataV26>,
    triggerKey: Array<TriggerKeyDataV26>,
    type: number
  }

  export type CurveKeyDataV26 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV26 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV26 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV26 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV26>,
    fileNameRef: Array<FileNameRefDataV26>,
    script: Array<ScriptDataV26>,
    textResource: Array<TextResourceDataV26>
  }

  export type AmbientLightDataV26 = {
    ambientGroundColor: ColorDefDataV26,
    ambientSkyColor: ColorDefDataV26,
    fillColor: ColorDefDataV26,
    hemisphericalColor: ColorDefDataV26,
    name: bigint
  }

  export type ColorDefDataV26 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV26 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV26 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV26 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV26>
  }

  export type TextEntryDataV26 = {
    text: string,
    language: number
  }

}

export type V26 = V26_N.SceneDataV26;

export namespace V27_N {
  export type SceneDataV27 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV27>,
    resources: ResourceDataV27,
    trackGroup: TrackGroupDataV27
  }

  export type SequenceDataV27 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV27>
  }

  export type TrackGroupDataV27 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV27>,
    track: Array<TrackDataV27>,
    type: number
  }

  export type PropertyDataV27 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV27 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV27>,
    flagKey: Array<FlagKeyDataV27>,
    triggerKey: Array<TriggerKeyDataV27>,
    type: number
  }

  export type CurveKeyDataV27 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV27 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV27 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV27 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV27>,
    fileNameRef: Array<FileNameRefDataV27>,
    script: Array<ScriptDataV27>,
    textResource: Array<TextResourceDataV27>
  }

  export type AmbientLightDataV27 = {
    ambientGroundColor: ColorDefDataV27,
    ambientSkyColor: ColorDefDataV27,
    fillColor: ColorDefDataV27,
    hemisphericalColor: ColorDefDataV27,
    name: bigint
  }

  export type ColorDefDataV27 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV27 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV27 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV27 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV27>
  }

  export type TextEntryDataV27 = {
    text: string,
    language: number
  }

}

export type V27 = V27_N.SceneDataV27;

export namespace V28_N {
  export type SceneDataV28 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV28>,
    resources: ResourceDataV28,
    trackGroup: TrackGroupDataV28
  }

  export type SequenceDataV28 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV28>
  }

  export type TrackGroupDataV28 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV28>,
    track: Array<TrackDataV28>,
    type: number
  }

  export type PropertyDataV28 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV28 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV28>,
    flagKey: Array<FlagKeyDataV28>,
    triggerKey: Array<TriggerKeyDataV28>,
    type: number
  }

  export type CurveKeyDataV28 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV28 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV28 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV28 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV28>,
    fileNameRef: Array<FileNameRefDataV28>,
    script: Array<ScriptDataV28>,
    textResource: Array<TextResourceDataV28>
  }

  export type AmbientLightDataV28 = {
    ambientGroundColor: ColorDefDataV28,
    ambientSkyColor: ColorDefDataV28,
    fillColor: ColorDefDataV28,
    hemisphericalColor: ColorDefDataV28,
    name: bigint
  }

  export type ColorDefDataV28 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV28 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV28 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV28 = {
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV28>
  }

  export type TextEntryDataV28 = {
    text: string,
    language: number
  }

}

export type V28 = V28_N.SceneDataV28;

export namespace V29_N {
  export type SceneDataV29 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV29>,
    resources: ResourceDataV29,
    trackGroup: TrackGroupDataV29
  }

  export type SequenceDataV29 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV29>
  }

  export type TrackGroupDataV29 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV29>,
    track: Array<TrackDataV29>,
    type: number
  }

  export type PropertyDataV29 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV29 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV29>,
    flagKey: Array<FlagKeyDataV29>,
    triggerKey: Array<TriggerKeyDataV29>,
    type: number
  }

  export type CurveKeyDataV29 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV29 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV29 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV29 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV29>,
    fileNameRef: Array<FileNameRefDataV29>,
    script: Array<ScriptDataV29>,
    textResource: Array<TextResourceDataV29>
  }

  export type AmbientLightDataV29 = {
    ambientGroundColor: ColorDefDataV29,
    ambientSkyColor: ColorDefDataV29,
    fillColor: ColorDefDataV29,
    hemisphericalColor: ColorDefDataV29,
    name: bigint
  }

  export type ColorDefDataV29 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV29 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV29 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV29 = {
    guid: Uint8Array,
    name: bigint,
    id: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV29>
  }

  export type TextEntryDataV29 = {
    text: string,
    language: number
  }

}

export type V29 = V29_N.SceneDataV29;

export namespace V30_N {
  export type SceneDataV30 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV30>,
    resources: ResourceDataV30,
    trackGroup: TrackGroupDataV30
  }

  export type SequenceDataV30 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV30>
  }

  export type TrackGroupDataV30 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV30>,
    track: Array<TrackDataV30>,
    type: number
  }

  export type PropertyDataV30 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV30 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV30>,
    flagKey: Array<FlagKeyDataV30>,
    triggerKey: Array<TriggerKeyDataV30>,
    type: number
  }

  export type CurveKeyDataV30 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV30 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV30 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV30 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV30>,
    fileNameRef: Array<FileNameRefDataV30>,
    script: Array<ScriptDataV30>,
    textResource: Array<TextResourceDataV30>
  }

  export type AmbientLightDataV30 = {
    ambientGroundColor: ColorDefDataV30,
    ambientSkyColor: ColorDefDataV30,
    fillColor: ColorDefDataV30,
    hemisphericalColor: ColorDefDataV30,
    name: bigint
  }

  export type ColorDefDataV30 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV30 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV30 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV30 = {
    name: bigint,
    index: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV30>
  }

  export type TextEntryDataV30 = {
    text: string,
    language: number
  }

}

export type V30 = V30_N.SceneDataV30;

export namespace V31_N {
  export type SceneDataV31 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV31>,
    resources: ResourceDataV31,
    trackGroup: TrackGroupDataV31
  }

  export type SequenceDataV31 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV31>
  }

  export type TrackGroupDataV31 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV31>,
    track: Array<TrackDataV31>,
    type: number
  }

  export type PropertyDataV31 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV31 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV31>,
    flagKey: Array<FlagKeyDataV31>,
    triggerKey: Array<TriggerKeyDataV31>,
    type: number
  }

  export type CurveKeyDataV31 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV31 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV31 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV31 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV31>,
    fileNameRef: Array<FileNameRefDataV31>,
    script: Array<ScriptDataV31>,
    textResource: Array<TextResourceDataV31>
  }

  export type AmbientLightDataV31 = {
    ambientGroundColor: ColorDefDataV31,
    ambientSkyColor: ColorDefDataV31,
    fillColor: ColorDefDataV31,
    hemisphericalColor: ColorDefDataV31,
    name: bigint
  }

  export type ColorDefDataV31 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV31 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV31 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV31 = {
    name: bigint,
    index: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV31>
  }

  export type TextEntryDataV31 = {
    text: string,
    language: number
  }

}

export type V31 = V31_N.SceneDataV31;

export namespace V32_N {
  export type SceneDataV32 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV32>,
    resources: ResourceDataV32,
    trackGroup: TrackGroupDataV32
  }

  export type SequenceDataV32 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV32>
  }

  export type TrackGroupDataV32 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV32>,
    track: Array<TrackDataV32>,
    type: number
  }

  export type PropertyDataV32 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV32 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV32>,
    flagKey: Array<FlagKeyDataV32>,
    triggerKey: Array<TriggerKeyDataV32>,
    type: number
  }

  export type CurveKeyDataV32 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV32 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV32 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV32 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV32>,
    fileNameRef: Array<FileNameRefDataV32>,
    script: Array<ScriptDataV32>,
    textResource: Array<TextResourceDataV32>
  }

  export type AmbientLightDataV32 = {
    ambientGroundColor: ColorDefDataV32,
    ambientSkyColor: ColorDefDataV32,
    fillColor: ColorDefDataV32,
    hemisphericalColor: ColorDefDataV32,
    name: bigint
  }

  export type ColorDefDataV32 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV32 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV32 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV32 = {
    name: bigint,
    index: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV32>
  }

  export type TextEntryDataV32 = {
    text: string,
    language: number
  }

}

export type V32 = V32_N.SceneDataV32;

export namespace V33_N {
  export type SceneDataV33 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV33>,
    resources: ResourceDataV33,
    trackGroup: TrackGroupDataV33
  }

  export type SequenceDataV33 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV33>
  }

  export type TrackGroupDataV33 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV33>,
    track: Array<TrackDataV33>,
    type: number
  }

  export type PropertyDataV33 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV33 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV33>,
    flagKey: Array<FlagKeyDataV33>,
    triggerKey: Array<TriggerKeyDataV33>,
    type: number
  }

  export type CurveKeyDataV33 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV33 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV33 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV33 = {
    crc: number,
    ambientLightResource: Array<AmbientLightDataV33>,
    fileNameRef: Array<FileNameRefDataV33>,
    script: Array<ScriptDataV33>,
    textResource: Array<TextResourceDataV33>
  }

  export type AmbientLightDataV33 = {
    ambientGroundColor: ColorDefDataV33,
    ambientSkyColor: ColorDefDataV33,
    fillColor: ColorDefDataV33,
    hemisphericalColor: ColorDefDataV33,
    name: bigint
  }

  export type ColorDefDataV33 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV33 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV33 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV33 = {
    name: bigint,
    index: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV33>
  }

  export type TextEntryDataV33 = {
    text: string,
    language: number
  }

}

export type V33 = V33_N.SceneDataV33;

export namespace V34_N {
  export type SceneDataV34 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV34>,
    resources: ResourceDataV34,
    trackGroup: TrackGroupDataV34
  }

  export type SequenceDataV34 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV34>
  }

  export type TrackGroupDataV34 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV34>,
    track: Array<TrackDataV34>,
    type: number
  }

  export type PropertyDataV34 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV34 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV34>,
    flagKey: Array<FlagKeyDataV34>,
    triggerKey: Array<TriggerKeyDataV34>,
    type: number
  }

  export type CurveKeyDataV34 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV34 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV34 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV34 = {
    ambientLightResource: Array<AmbientLightDataV34>,
    fileNameRef: Array<FileNameRefDataV34>,
    script: Array<ScriptDataV34>,
    textResource: Array<TextResourceDataV34>,
    speciesResource: Array<SpeciesResourceDataV34>
  }

  export type AmbientLightDataV34 = {
    ambientGroundColor: ColorDefDataV34,
    ambientSkyColor: ColorDefDataV34,
    fillColor: ColorDefDataV34,
    hemisphericalColor: ColorDefDataV34,
    name: bigint
  }

  export type ColorDefDataV34 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV34 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV34 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV34 = {
    name: bigint,
    index: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV34>
  }

  export type TextEntryDataV34 = {
    text: string,
    language: number
  }

  export type SpeciesResourceDataV34 = {
    speciesId: Uint8Array,
    modelId: bigint,
    modelVariant: bigint
  }

}

export type V34 = V34_N.SceneDataV34;

export namespace V35_N {
  export type SceneDataV35 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV35>,
    resources: ResourceDataV35,
    trackGroup: TrackGroupDataV35
  }

  export type SequenceDataV35 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV35>
  }

  export type TrackGroupDataV35 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV35>,
    track: Array<TrackDataV35>,
    type: number
  }

  export type PropertyDataV35 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV35 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV35>,
    flagKey: Array<FlagKeyDataV35>,
    triggerKey: Array<TriggerKeyDataV35>,
    type: number
  }

  export type CurveKeyDataV35 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV35 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV35 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV35 = {
    ambientLightResource: Array<AmbientLightDataV35>,
    fileNameRef: Array<FileNameRefDataV35>,
    script: Array<ScriptDataV35>,
    textResource: Array<TextResourceDataV35>,
    speciesResource: Array<SpeciesResourceDataV35>
  }

  export type AmbientLightDataV35 = {
    ambientGroundColor: ColorDefDataV35,
    ambientSkyColor: ColorDefDataV35,
    fillColor: ColorDefDataV35,
    hemisphericalColor: ColorDefDataV35,
    name: bigint
  }

  export type ColorDefDataV35 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV35 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV35 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV35 = {
    name: bigint,
    index: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV35>
  }

  export type TextEntryDataV35 = {
    text: string,
    language: number
  }

  export type SpeciesResourceDataV35 = {
    speciesId: Uint8Array,
    name: bigint,
    modelId: bigint,
    modelVariant: bigint
  }

}

export type V35 = V35_N.SceneDataV35;

export namespace V36_N {
  export type SceneDataV36 = {
    startingSequence: bigint,
    sequence: Array<SequenceDataV36>,
    resources: ResourceDataV36,
    trackGroup: TrackGroupDataV36
  }

  export type SequenceDataV36 = {
    name: bigint,
    playScript: bigint,
    updateScript: bigint,
    environmentMap: number,
    map: string,
    clientMap: string,
    length: number,
    flags: number,
    trackGroup: Array<TrackGroupDataV36>
  }

  export type TrackGroupDataV36 = {
    name: bigint,
    flags: number,
    prop: Array<PropertyDataV36>,
    track: Array<TrackDataV36>,
    type: number
  }

  export type PropertyDataV36 = {
    value: bigint,
    pathVal: number,
    type: number
  }

  export type TrackDataV36 = {
    name: bigint,
    curveKey: Array<CurveKeyDataV36>,
    flagKey: Array<FlagKeyDataV36>,
    triggerKey: Array<TriggerKeyDataV36>,
    type: number
  }

  export type CurveKeyDataV36 = {
    time: number,
    value: number,
    inTangent: number,
    outTangent: number
  }

  export type FlagKeyDataV36 = {
    time: number,
    value: number
  }

  export type TriggerKeyDataV36 = {
    time: number,
    flags1: number,
    flags2: number,
    flags3: number,
    flags4: number,
    token1: bigint,
    token2: bigint,
    value1: number,
    value2: number,
    value3: number,
    value4: number
  }

  export type ResourceDataV36 = {
    ambientLightResource: Array<AmbientLightDataV36>,
    fileNameRef: Array<FileNameRefDataV36>,
    script: Array<ScriptDataV36>,
    textResource: Array<TextResourceDataV36>,
    speciesResource: Array<SpeciesResourceDataV36>
  }

  export type AmbientLightDataV36 = {
    ambientGroundColor: ColorDefDataV36,
    ambientSkyColor: ColorDefDataV36,
    fillColor: ColorDefDataV36,
    hemisphericalColor: ColorDefDataV36,
    name: bigint
  }

  export type ColorDefDataV36 = {
    intensity: number,
    color: Uint8Array
  }

  export type FileNameRefDataV36 = {
    name: bigint,
    fileName: number
  }

  export type ScriptDataV36 = {
    name: bigint,
    byteCode: Uint8Array
  }

  export type TextResourceDataV36 = {
    name: bigint,
    index: number,
    voiceId: number,
    textEntry: Array<TextEntryDataV36>
  }

  export type TextEntryDataV36 = {
    text: string,
    language: number
  }

  export type SpeciesResourceDataV36 = {
    speciesId: Uint8Array,
    name: bigint,
    modelId: bigint,
    modelVariant: bigint
  }

}

export type V36 = V36_N.SceneDataV36;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V6_U = V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V7_U = V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V8_U = V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V9_U = V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V10_U = V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V11_U = V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V12_U = V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V13_U = V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V14_U = V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V15_U = V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V16_U = V16 | V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V17_U = V17 | V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V18_U = V18 | V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V19_U = V19 | V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V20_U = V20 | V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V21_U = V21 | V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V22_U = V22 | V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V23_U = V23 | V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V24_U = V24 | V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V25_U = V25 | V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V26_U = V26 | V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V27_U = V27 | V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V28_U = V28 | V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V29_U = V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V30_U = V30 | V31 | V32 | V33 | V34 | V35 | V36;
export type V31_U = V31 | V32 | V33 | V34 | V35 | V36;
export type V32_U = V32 | V33 | V34 | V35 | V36;
export type V33_U = V33 | V34 | V35 | V36;
export type V34_U = V34 | V35 | V36;
export type V35_U = V35 | V36;
export type V36_U = V36;
