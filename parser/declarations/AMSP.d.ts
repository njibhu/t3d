

export type ScriptFileDataV0 = {
  fadeInTime: number,
  flags: number,
  handler: Array<HandlerDataV0>,
  metaSound: Array<MetaSoundDataV0>,
  scriptRef: Array<ScriptRefDataV0>,
  triggerKey: Array<TriggerKeyDataV0>,
  volume: number
}

export type HandlerDataV0 = {
  byteCode: Array<number>,
  flags: number,
  name: BigInt
}

export type MetaSoundDataV0 = {
  attenuation: AttenuationDataV0,
  category: BigInt,
  channelMode: number,
  channelPriority: number,
  depth: DynamicParamDataV0,
  dsp: Array<DspDataV0>,
  endCue: BigInt,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  fileIterateMode: number,
  fileName: Array<FileNameDataV0>,
  flags: number,
  initialDelay: RangeDataV0,
  loopCount: number,
  loopMode: number,
  name: BigInt,
  pan: DynamicParamDataV0,
  pitch: DynamicParamDataV0,
  playbackMode: number,
  playLength: RangeDataV0,
  playlistId: BigInt,
  positionMode: number,
  positionOffset: Array<number>,
  positionOffsetAngle: RangeDataV0,
  positionRange: RangeDataV0,
  repeatCount: RangeDataV0,
  repeatTime: RangeDataV0,
  startTimeOffset: RangeDataV0,
  repeatTimeFrom: number,
  volume: DynamicParamDataV0
}

export type AttenuationDataV0 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV0,
  pan3D: DynamicParamDataV0,
  spread3D: DynamicParamDataV0,
  volumeA: DynamicParamDataV0
}

export type DynamicParamDataV0 = {
  envelopeData: EnvelopeDataV0,
  randomParamData: RandomParamDataV0,
  type: number,
  value: number
}

export type EnvelopeDataV0 = {
  envelopePoint: Array<EnvelopePointDataV0>,
  offsetType: number,
  offsetParameter: BigInt
}

export type EnvelopePointDataV0 = {
  offset: number,
  value: number
}

export type RandomParamDataV0 = {
  time: RangeDataV0,
  value: RangeDataV0
}

export type RangeDataV0 = {
  max: number,
  min: number
}

export type DspDataV0 = {
  param: Array<DynamicParamDataV0>,
  type: number
}

export type FileNameDataV0 = {
  audioType: number,
  fileName: string,
  language: BigInt,
  weight: number
}

export type ScriptRefDataV0 = {
  fileName: string,
  name: BigInt
}

export type TriggerKeyDataV0 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV0>
}

export type TriggerMarkerDataV0 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV1 = {
  audioSettings: AudioSettingsDataV1,
  fadeInTime: number,
  flags: number,
  handler: Array<HandlerDataV1>,
  metaSound: Array<MetaSoundDataV1>,
  scriptRef: Array<ScriptRefDataV1>,
  triggerKey: Array<TriggerKeyDataV1>,
  volume: number
}

export type AudioSettingsDataV1 = {
  category: Array<CategoryDataV1>,
  distanceScale: number,
  voiceBankFileName: string,
  volumeGroup: Array<VolumeGroupDataV1>
}

export type CategoryDataV1 = {
  attenuation: AttenuationDataV1,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number,
  muteFadeTime: number,
  name: BigInt,
  volumeA: number,
  volumeAThreshold: number,
  volumeB: number,
  volumeBThreshold: number,
  volumeChangeRate: number,
  volumeDucking: number,
  volumeDuckingTimeAttack: number,
  volumeDuckingTimeRelease: number,
  volumeGroupName: BigInt
}

export type AttenuationDataV1 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV1,
  pan3D: DynamicParamDataV1,
  spread3D: DynamicParamDataV1,
  volumeA: DynamicParamDataV1
}

export type DynamicParamDataV1 = {
  envelopeData: EnvelopeDataV1,
  randomParamData: RandomParamDataV1,
  type: number,
  value: number
}

export type EnvelopeDataV1 = {
  envelopePoint: Array<EnvelopePointDataV1>,
  offsetType: number,
  offsetParameter: BigInt
}

export type EnvelopePointDataV1 = {
  offset: number,
  value: number
}

export type RandomParamDataV1 = {
  time: RangeDataV1,
  value: RangeDataV1
}

export type RangeDataV1 = {
  max: number,
  min: number
}

export type VolumeGroupDataV1 = {
  flags: number,
  name: BigInt,
  parentName: BigInt,
  volume: number
}

export type HandlerDataV1 = {
  byteCode: Array<number>,
  flags: number,
  name: BigInt
}

export type MetaSoundDataV1 = {
  attenuation: AttenuationDataV1,
  category: BigInt,
  channelMode: number,
  channelPriority: number,
  depth: DynamicParamDataV1,
  dsp: Array<DspDataV1>,
  endCue: BigInt,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  fileIterateMode: number,
  fileName: Array<FileNameDataV1>,
  flags: number,
  initialDelay: RangeDataV1,
  loopCount: number,
  loopMode: number,
  name: BigInt,
  pan: DynamicParamDataV1,
  pitch: DynamicParamDataV1,
  playbackMode: number,
  playLength: RangeDataV1,
  playlistId: BigInt,
  positionMode: number,
  positionOffset: Array<number>,
  positionOffsetAngle: RangeDataV1,
  positionRange: RangeDataV1,
  repeatCount: RangeDataV1,
  repeatTime: RangeDataV1,
  startTimeOffset: RangeDataV1,
  repeatTimeFrom: number,
  volume: DynamicParamDataV1
}

export type DspDataV1 = {
  param: Array<DynamicParamDataV1>,
  type: number
}

export type FileNameDataV1 = {
  audioType: number,
  fileName: string,
  language: BigInt,
  weight: number
}

export type ScriptRefDataV1 = {
  fileName: string,
  name: BigInt
}

export type TriggerKeyDataV1 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV1>
}

export type TriggerMarkerDataV1 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV2 = {
  musicCue: BigInt,
  audioSettings: AudioSettingsDataV2,
  handler: Array<HandlerDataV2>,
  metaSound: Array<MetaSoundDataV2>,
  scriptRef: Array<ScriptRefDataV2>,
  triggerKey: Array<TriggerKeyDataV2>,
  flags: number,
  fadeInTime: number,
  volume: number
}

export type AudioSettingsDataV2 = {
  volumeGroup: Array<VolumeGroupDataV2>,
  category: Array<CategoryDataV2>,
  distanceScale: number,
  voiceBankFileName: string
}

export type VolumeGroupDataV2 = {
  name: BigInt,
  parentName: BigInt,
  flags: number,
  volume: number
}

export type CategoryDataV2 = {
  name: BigInt,
  volumeGroupName: BigInt,
  attenuation: AttenuationDataV2,
  muteFadeTime: number,
  volumeA: number,
  volumeAThreshold: number,
  volumeB: number,
  volumeBThreshold: number,
  volumeChangeRate: number,
  volumeDucking: number,
  volumeDuckingTimeAttack: number,
  volumeDuckingTimeRelease: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV2 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV2,
  pan3D: DynamicParamDataV2,
  spread3D: DynamicParamDataV2,
  volumeA: DynamicParamDataV2
}

export type DynamicParamDataV2 = {
  envelopeData: EnvelopeDataV2,
  randomParamData: RandomParamDataV2,
  value: number,
  type: number
}

export type EnvelopeDataV2 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV2>,
  offsetType: number
}

export type EnvelopePointDataV2 = {
  offset: number,
  value: number
}

export type RandomParamDataV2 = {
  time: RangeDataV2,
  value: RangeDataV2
}

export type RangeDataV2 = {
  max: number,
  min: number
}

export type HandlerDataV2 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV2 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV2>,
  attenuation: AttenuationDataV2,
  fileName: Array<FileNameDataV2>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV2,
  pan: DynamicParamDataV2,
  pitch: DynamicParamDataV2,
  pitchMS: DynamicParamDataV2,
  volume: DynamicParamDataV2,
  volumeMS: DynamicParamDataV2,
  initialDelay: RangeDataV2,
  playLength: RangeDataV2,
  positionOffsetAngle: RangeDataV2,
  positionRange: RangeDataV2,
  repeatCount: RangeDataV2,
  repeatTime: RangeDataV2,
  startTimeOffset: RangeDataV2,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type DspDataV2 = {
  param: Array<DynamicParamDataV2>,
  type: number
}

export type FileNameDataV2 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV2 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV2 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV2>
}

export type TriggerMarkerDataV2 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV3 = {
  musicCue: BigInt,
  endCue: BigInt,
  audioSettings: AudioSettingsDataV3,
  handler: Array<HandlerDataV3>,
  metaSound: Array<MetaSoundDataV3>,
  scriptRef: Array<ScriptRefDataV3>,
  triggerKey: Array<TriggerKeyDataV3>,
  flags: number,
  fadeInTime: number,
  volume: number
}

export type AudioSettingsDataV3 = {
  volumeGroup: Array<VolumeGroupDataV3>,
  category: Array<CategoryDataV3>,
  distanceScale: number,
  voiceBankFileName: string
}

export type VolumeGroupDataV3 = {
  name: BigInt,
  parentName: BigInt,
  flags: number,
  volume: number
}

export type CategoryDataV3 = {
  name: BigInt,
  volumeGroupName: BigInt,
  attenuation: AttenuationDataV3,
  muteFadeTime: number,
  volumeA: number,
  volumeAThreshold: number,
  volumeB: number,
  volumeBThreshold: number,
  volumeChangeRate: number,
  volumeDucking: number,
  volumeDuckingTimeAttack: number,
  volumeDuckingTimeRelease: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV3 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV3,
  pan3D: DynamicParamDataV3,
  spread3D: DynamicParamDataV3,
  volumeA: DynamicParamDataV3
}

export type DynamicParamDataV3 = {
  envelopeData: EnvelopeDataV3,
  randomParamData: RandomParamDataV3,
  value: number,
  type: number
}

export type EnvelopeDataV3 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV3>,
  offsetType: number
}

export type EnvelopePointDataV3 = {
  offset: number,
  value: number
}

export type RandomParamDataV3 = {
  time: RangeDataV3,
  value: RangeDataV3
}

export type RangeDataV3 = {
  max: number,
  min: number
}

export type HandlerDataV3 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV3 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV3>,
  attenuation: AttenuationDataV3,
  fileName: Array<FileNameDataV3>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV3,
  pan: DynamicParamDataV3,
  pitch: DynamicParamDataV3,
  pitchMS: DynamicParamDataV3,
  volume: DynamicParamDataV3,
  volumeMS: DynamicParamDataV3,
  initialDelay: RangeDataV3,
  playLength: RangeDataV3,
  positionOffsetAngle: RangeDataV3,
  positionRange: RangeDataV3,
  repeatCount: RangeDataV3,
  repeatTime: RangeDataV3,
  startTimeOffset: RangeDataV3,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type DspDataV3 = {
  param: Array<DynamicParamDataV3>,
  type: number
}

export type FileNameDataV3 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV3 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV3 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV3>
}

export type TriggerMarkerDataV3 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV4 = {
  musicCue: BigInt,
  endCue: BigInt,
  audioSettings: AudioSettingsDataV4,
  handler: Array<HandlerDataV4>,
  metaSound: Array<MetaSoundDataV4>,
  scriptRef: Array<ScriptRefDataV4>,
  triggerKey: Array<TriggerKeyDataV4>,
  flags: number,
  fadeInTime: number,
  volume: number
}

export type AudioSettingsDataV4 = {
  volumeGroup: Array<VolumeGroupDataV4>,
  category: Array<CategoryDataV4>,
  distanceScale: number,
  bankIndexFileName: string,
  bankScriptFileName: string
}

export type VolumeGroupDataV4 = {
  name: BigInt,
  parentName: BigInt,
  flags: number,
  volume: number
}

export type CategoryDataV4 = {
  name: BigInt,
  volumeGroupName: BigInt,
  attenuation: AttenuationDataV4,
  muteFadeTime: number,
  volumeA: number,
  volumeAThreshold: number,
  volumeB: number,
  volumeBThreshold: number,
  volumeChangeRate: number,
  volumeDucking: number,
  volumeDuckingTimeAttack: number,
  volumeDuckingTimeRelease: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV4 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV4,
  pan3D: DynamicParamDataV4,
  spread3D: DynamicParamDataV4,
  volumeA: DynamicParamDataV4
}

export type DynamicParamDataV4 = {
  envelopeData: EnvelopeDataV4,
  randomParamData: RandomParamDataV4,
  value: number,
  type: number
}

export type EnvelopeDataV4 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV4>,
  offsetType: number
}

export type EnvelopePointDataV4 = {
  offset: number,
  value: number
}

export type RandomParamDataV4 = {
  time: RangeDataV4,
  value: RangeDataV4
}

export type RangeDataV4 = {
  max: number,
  min: number
}

export type HandlerDataV4 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV4 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV4>,
  attenuation: AttenuationDataV4,
  fileName: Array<FileNameDataV4>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV4,
  pan: DynamicParamDataV4,
  pitch: DynamicParamDataV4,
  pitchMS: DynamicParamDataV4,
  volume: DynamicParamDataV4,
  volumeMS: DynamicParamDataV4,
  initialDelay: RangeDataV4,
  playLength: RangeDataV4,
  positionOffsetAngle: RangeDataV4,
  positionRange: RangeDataV4,
  repeatCount: RangeDataV4,
  repeatTime: RangeDataV4,
  startTimeOffset: RangeDataV4,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type DspDataV4 = {
  param: Array<DynamicParamDataV4>,
  type: number
}

export type FileNameDataV4 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV4 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV4 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV4>
}

export type TriggerMarkerDataV4 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV5 = {
  musicCue: BigInt,
  endCue: BigInt,
  audioSettings: AudioSettingsDataV5,
  handler: Array<HandlerDataV5>,
  metaSound: Array<MetaSoundDataV5>,
  scriptRef: Array<ScriptRefDataV5>,
  triggerKey: Array<TriggerKeyDataV5>,
  flags: number,
  fadeInTime: number,
  volume: number
}

export type AudioSettingsDataV5 = {
  defaultBuss: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  category: Array<CategoryDataV5>,
  snapshot: Array<SnapshotDataV5>,
  bankIndexFileName: string,
  bankScriptFileName: string
}

export type CategoryDataV5 = {
  name: BigInt,
  volumeGroupName: BigInt,
  attenuation: AttenuationDataV5,
  muteFadeTime: number,
  volumeA: number,
  volumeAThreshold: number,
  volumeB: number,
  volumeBThreshold: number,
  volumeChangeRate: number,
  volumeDucking: number,
  volumeDuckingTimeAttack: number,
  volumeDuckingTimeRelease: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV5 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV5,
  pan3D: DynamicParamDataV5,
  spread3D: DynamicParamDataV5,
  volumeA: DynamicParamDataV5
}

export type DynamicParamDataV5 = {
  envelopeData: EnvelopeDataV5,
  randomParamData: RandomParamDataV5,
  value: number,
  type: number
}

export type EnvelopeDataV5 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV5>,
  offsetType: number
}

export type EnvelopePointDataV5 = {
  offset: number,
  value: number
}

export type RandomParamDataV5 = {
  time: RangeDataV5,
  value: RangeDataV5
}

export type RangeDataV5 = {
  max: number,
  min: number
}

export type SnapshotDataV5 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDataV5>
}

export type BussDataV5 = {
  name: BigInt,
  output: BigInt,
  flags: number,
  dsp: Array<DspDataV5>,
  volume: number
}

export type DspDataV5 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type HandlerDataV5 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV5 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV5>,
  attenuation: AttenuationDataV5,
  fileName: Array<FileNameDataV5>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV5,
  pan: DynamicParamDataV5,
  pitch: DynamicParamDataV5,
  pitchMS: DynamicParamDataV5,
  volume: DynamicParamDataV5,
  volumeMS: DynamicParamDataV5,
  initialDelay: RangeDataV5,
  playLength: RangeDataV5,
  positionOffsetAngle: RangeDataV5,
  positionRange: RangeDataV5,
  repeatCount: RangeDataV5,
  repeatTime: RangeDataV5,
  startTimeOffset: RangeDataV5,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV5 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV5 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV5 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV5>
}

export type TriggerMarkerDataV5 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV6 = {
  musicCue: BigInt,
  endCue: BigInt,
  audioSettings: AudioSettingsDataV6,
  handler: Array<HandlerDataV6>,
  metaSound: Array<MetaSoundDataV6>,
  scriptRef: Array<ScriptRefDataV6>,
  triggerKey: Array<TriggerKeyDataV6>,
  flags: number,
  fadeInTime: number,
  volume: number
}

export type AudioSettingsDataV6 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  buss: Array<BussDataV6>,
  category: Array<CategoryDataV6>,
  snapshot: Array<SnapshotDataV6>,
  bankIndexFileName: string,
  bankScriptFileName: string
}

export type BussDataV6 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV6
}

export type BussDynamicDataV6 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV6>
}

export type DspDataV6 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV6 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV6,
  muteFadeTime: number,
  volumeA: number,
  volumeAThreshold: number,
  volumeB: number,
  volumeBThreshold: number,
  volumeChangeRate: number,
  volumeDucking: number,
  volumeDuckingTimeAttack: number,
  volumeDuckingTimeRelease: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV6 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV6,
  pan3D: DynamicParamDataV6,
  spread3D: DynamicParamDataV6,
  volumeA: DynamicParamDataV6
}

export type DynamicParamDataV6 = {
  envelopeData: EnvelopeDataV6,
  randomParamData: RandomParamDataV6,
  value: number,
  type: number
}

export type EnvelopeDataV6 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV6>,
  offsetType: number
}

export type EnvelopePointDataV6 = {
  offset: number,
  value: number
}

export type RandomParamDataV6 = {
  time: RangeDataV6,
  value: RangeDataV6
}

export type RangeDataV6 = {
  max: number,
  min: number
}

export type SnapshotDataV6 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV6>
}

export type HandlerDataV6 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV6 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV6>,
  attenuation: AttenuationDataV6,
  fileName: Array<FileNameDataV6>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV6,
  pan: DynamicParamDataV6,
  pitch: DynamicParamDataV6,
  pitchMS: DynamicParamDataV6,
  volume: DynamicParamDataV6,
  volumeMS: DynamicParamDataV6,
  initialDelay: RangeDataV6,
  playLength: RangeDataV6,
  positionOffsetAngle: RangeDataV6,
  positionRange: RangeDataV6,
  repeatCount: RangeDataV6,
  repeatTime: RangeDataV6,
  startTimeOffset: RangeDataV6,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV6 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV6 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV6 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV6>
}

export type TriggerMarkerDataV6 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV7 = {
  musicCue: BigInt,
  endCue: BigInt,
  audioSettings: AudioSettingsDataV7,
  handler: Array<HandlerDataV7>,
  metaSound: Array<MetaSoundDataV7>,
  scriptRef: Array<ScriptRefDataV7>,
  triggerKey: Array<TriggerKeyDataV7>,
  flags: number,
  fadeInTime: number,
  volume: number
}

export type AudioSettingsDataV7 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  focusTransition: number,
  buss: Array<BussDataV7>,
  category: Array<CategoryDataV7>,
  snapshot: Array<SnapshotDataV7>,
  bankIndexFileName: string,
  bankScriptFileName: string
}

export type BussDataV7 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV7
}

export type BussDynamicDataV7 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV7>
}

export type DspDataV7 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV7 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV7,
  dynamicData: CategoryDynamicDataV7,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV7 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV7,
  pan3D: DynamicParamDataV7,
  spread3D: DynamicParamDataV7,
  volumeA: DynamicParamDataV7,
  volumeB: DynamicParamDataV7
}

export type DynamicParamDataV7 = {
  envelopeData: EnvelopeDataV7,
  randomParamData: RandomParamDataV7,
  value: number,
  type: number
}

export type EnvelopeDataV7 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV7>,
  offsetType: number
}

export type EnvelopePointDataV7 = {
  offset: number,
  value: number
}

export type RandomParamDataV7 = {
  time: RangeDataV7,
  value: RangeDataV7
}

export type RangeDataV7 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV7 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  flags: number
}

export type SnapshotDataV7 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV7>,
  category: Array<CategoryDynamicDataV7>
}

export type HandlerDataV7 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV7 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV7>,
  attenuation: AttenuationDataV7,
  fileName: Array<FileNameDataV7>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV7,
  pan: DynamicParamDataV7,
  pitch: DynamicParamDataV7,
  pitchMS: DynamicParamDataV7,
  volume: DynamicParamDataV7,
  volumeMS: DynamicParamDataV7,
  initialDelay: RangeDataV7,
  playLength: RangeDataV7,
  positionOffsetAngle: RangeDataV7,
  positionRange: RangeDataV7,
  repeatCount: RangeDataV7,
  repeatTime: RangeDataV7,
  startTimeOffset: RangeDataV7,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV7 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV7 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV7 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV7>
}

export type TriggerMarkerDataV7 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV8 = {
  musicCue: BigInt,
  endCue: BigInt,
  audioSettings: AudioSettingsDataV8,
  handler: Array<HandlerDataV8>,
  metaSound: Array<MetaSoundDataV8>,
  scriptRef: Array<ScriptRefDataV8>,
  triggerKey: Array<TriggerKeyDataV8>,
  flags: number,
  fadeInTime: number,
  volume: number
}

export type AudioSettingsDataV8 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  focusTransition: number,
  buss: Array<BussDataV8>,
  category: Array<CategoryDataV8>,
  reverb: Array<ReverbDataV8>,
  snapshot: Array<SnapshotDataV8>,
  bankIndexFileName: string,
  bankScriptFileName: string
}

export type BussDataV8 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV8
}

export type BussDynamicDataV8 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV8>
}

export type DspDataV8 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV8 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV8,
  dynamicData: CategoryDynamicDataV8,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV8 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV8,
  pan3D: DynamicParamDataV8,
  spread3D: DynamicParamDataV8,
  volumeA: DynamicParamDataV8,
  volumeB: DynamicParamDataV8
}

export type DynamicParamDataV8 = {
  envelopeData: EnvelopeDataV8,
  randomParamData: RandomParamDataV8,
  value: number,
  type: number
}

export type EnvelopeDataV8 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV8>,
  offsetType: number
}

export type EnvelopePointDataV8 = {
  offset: number,
  value: number
}

export type RandomParamDataV8 = {
  time: RangeDataV8,
  value: RangeDataV8
}

export type RangeDataV8 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV8 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV8 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number
}

export type SnapshotDataV8 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV8>,
  category: Array<CategoryDynamicDataV8>
}

export type HandlerDataV8 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV8 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV8>,
  attenuation: AttenuationDataV8,
  fileName: Array<FileNameDataV8>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV8,
  pan: DynamicParamDataV8,
  pitch: DynamicParamDataV8,
  pitchMS: DynamicParamDataV8,
  volume: DynamicParamDataV8,
  volumeMS: DynamicParamDataV8,
  initialDelay: RangeDataV8,
  playLength: RangeDataV8,
  positionOffsetAngle: RangeDataV8,
  positionRange: RangeDataV8,
  repeatCount: RangeDataV8,
  repeatTime: RangeDataV8,
  startTimeOffset: RangeDataV8,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV8 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV8 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV8 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV8>
}

export type TriggerMarkerDataV8 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV9 = {
  musicCue: BigInt,
  endCue: BigInt,
  audioSettings: AudioSettingsDataV9,
  handler: Array<HandlerDataV9>,
  metaSound: Array<MetaSoundDataV9>,
  scriptRef: Array<ScriptRefDataV9>,
  triggerKey: Array<TriggerKeyDataV9>,
  flags: number,
  fadeInTime: number,
  volume: number
}

export type AudioSettingsDataV9 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  focusTransition: number,
  buss: Array<BussDataV9>,
  category: Array<CategoryDataV9>,
  reverb: Array<ReverbDataV9>,
  snapshot: Array<SnapshotDataV9>,
  bankIndexFileName: string,
  bankScriptFileName: string
}

export type BussDataV9 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV9
}

export type BussDynamicDataV9 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV9>
}

export type DspDataV9 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV9 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  soundPoolCategory: BigInt,
  attenuation: AttenuationDataV9,
  dynamicData: CategoryDynamicDataV9,
  muteFadeTime: number,
  soundPoolDelay: number,
  flags: number,
  maxAudible: number,
  soundPoolCount: number,
  maxAudibleBehavior: number,
  soundPoolCountBehavior: number,
  soundPoolMode: number
}

export type AttenuationDataV9 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV9,
  pan3D: DynamicParamDataV9,
  spread3D: DynamicParamDataV9,
  volumeA: DynamicParamDataV9,
  volumeB: DynamicParamDataV9
}

export type DynamicParamDataV9 = {
  envelopeData: EnvelopeDataV9,
  randomParamData: RandomParamDataV9,
  value: number,
  type: number
}

export type EnvelopeDataV9 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV9>,
  offsetType: number
}

export type EnvelopePointDataV9 = {
  offset: number,
  value: number
}

export type RandomParamDataV9 = {
  time: RangeDataV9,
  value: RangeDataV9
}

export type RangeDataV9 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV9 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV9 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number
}

export type SnapshotDataV9 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV9>,
  category: Array<CategoryDynamicDataV9>
}

export type HandlerDataV9 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV9 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV9>,
  attenuation: AttenuationDataV9,
  fileName: Array<FileNameDataV9>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV9,
  pan: DynamicParamDataV9,
  pitch: DynamicParamDataV9,
  pitchMS: DynamicParamDataV9,
  volume: DynamicParamDataV9,
  volumeMS: DynamicParamDataV9,
  initialDelay: RangeDataV9,
  playLength: RangeDataV9,
  positionOffsetAngle: RangeDataV9,
  positionRange: RangeDataV9,
  repeatCount: RangeDataV9,
  repeatTime: RangeDataV9,
  startTimeOffset: RangeDataV9,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV9 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV9 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV9 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV9>
}

export type TriggerMarkerDataV9 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV10 = {
  musicCue: BigInt,
  audioSettings: AudioSettingsDataV10,
  handler: Array<HandlerDataV10>,
  metaSound: Array<MetaSoundDataV10>,
  scriptRef: Array<ScriptRefDataV10>,
  triggerKey: Array<TriggerKeyDataV10>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number
}

export type AudioSettingsDataV10 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  focusTransition: number,
  buss: Array<BussDataV10>,
  category: Array<CategoryDataV10>,
  reverb: Array<ReverbDataV10>,
  snapshot: Array<SnapshotDataV10>,
  bankIndexFileName: string,
  bankScriptFileName: string
}

export type BussDataV10 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV10
}

export type BussDynamicDataV10 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV10>
}

export type DspDataV10 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV10 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV10,
  dynamicData: CategoryDynamicDataV10,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV10 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV10,
  pan3D: DynamicParamDataV10,
  spread3D: DynamicParamDataV10,
  volumeA: DynamicParamDataV10,
  volumeB: DynamicParamDataV10
}

export type DynamicParamDataV10 = {
  envelopeData: EnvelopeDataV10,
  randomParamData: RandomParamDataV10,
  value: number,
  type: number
}

export type EnvelopeDataV10 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV10>,
  offsetType: number
}

export type EnvelopePointDataV10 = {
  offset: number,
  value: number
}

export type RandomParamDataV10 = {
  time: RangeDataV10,
  value: RangeDataV10
}

export type RangeDataV10 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV10 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV10 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number
}

export type SnapshotDataV10 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV10>,
  category: Array<CategoryDynamicDataV10>
}

export type HandlerDataV10 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV10 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV10>,
  attenuation: AttenuationDataV10,
  fileName: Array<FileNameDataV10>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV10,
  pan: DynamicParamDataV10,
  pitch: DynamicParamDataV10,
  pitchMS: DynamicParamDataV10,
  volume: DynamicParamDataV10,
  volumeMS: DynamicParamDataV10,
  initialDelay: RangeDataV10,
  playLength: RangeDataV10,
  positionOffsetAngle: RangeDataV10,
  positionRange: RangeDataV10,
  repeatCount: RangeDataV10,
  repeatTime: RangeDataV10,
  startTimeOffset: RangeDataV10,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV10 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV10 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV10 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV10>
}

export type TriggerMarkerDataV10 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV11 = {
  musicCue: BigInt,
  audioSettings: AudioSettingsDataV11,
  handler: Array<HandlerDataV11>,
  metaSound: Array<MetaSoundDataV11>,
  scriptRef: Array<ScriptRefDataV11>,
  triggerKey: Array<TriggerKeyDataV11>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number
}

export type AudioSettingsDataV11 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  focusTransition: number,
  buss: Array<BussDataV11>,
  category: Array<CategoryDataV11>,
  reverb: Array<ReverbDataV11>,
  snapshot: Array<SnapshotDataV11>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV11 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV11
}

export type BussDynamicDataV11 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV11>
}

export type DspDataV11 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV11 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV11,
  dynamicData: CategoryDynamicDataV11,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV11 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV11,
  pan3D: DynamicParamDataV11,
  spread3D: DynamicParamDataV11,
  volumeA: DynamicParamDataV11,
  volumeB: DynamicParamDataV11
}

export type DynamicParamDataV11 = {
  envelopeData: EnvelopeDataV11,
  randomParamData: RandomParamDataV11,
  value: number,
  type: number
}

export type EnvelopeDataV11 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV11>,
  offsetType: number
}

export type EnvelopePointDataV11 = {
  offset: number,
  value: number
}

export type RandomParamDataV11 = {
  time: RangeDataV11,
  value: RangeDataV11
}

export type RangeDataV11 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV11 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV11 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number
}

export type SnapshotDataV11 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV11>,
  category: Array<CategoryDynamicDataV11>
}

export type HandlerDataV11 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV11 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV11>,
  attenuation: AttenuationDataV11,
  fileName: Array<FileNameDataV11>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV11,
  pan: DynamicParamDataV11,
  pitch: DynamicParamDataV11,
  pitchMS: DynamicParamDataV11,
  volume: DynamicParamDataV11,
  volumeMS: DynamicParamDataV11,
  initialDelay: RangeDataV11,
  playLength: RangeDataV11,
  positionOffsetAngle: RangeDataV11,
  positionRange: RangeDataV11,
  repeatCount: RangeDataV11,
  repeatTime: RangeDataV11,
  startTimeOffset: RangeDataV11,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV11 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV11 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV11 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV11>
}

export type TriggerMarkerDataV11 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV12 = {
  musicCue: BigInt,
  audioSettings: AudioSettingsDataV12,
  handler: Array<HandlerDataV12>,
  metaSound: Array<MetaSoundDataV12>,
  scriptRef: Array<ScriptRefDataV12>,
  triggerKey: Array<TriggerKeyDataV12>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV12 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  focusTransition: number,
  buss: Array<BussDataV12>,
  category: Array<CategoryDataV12>,
  reverb: Array<ReverbDataV12>,
  snapshot: Array<SnapshotDataV12>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV12 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV12
}

export type BussDynamicDataV12 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV12>
}

export type DspDataV12 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV12 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV12,
  dynamicData: CategoryDynamicDataV12,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV12 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV12,
  pan3D: DynamicParamDataV12,
  spread3D: DynamicParamDataV12,
  volumeA: DynamicParamDataV12,
  volumeB: DynamicParamDataV12
}

export type DynamicParamDataV12 = {
  envelopeData: EnvelopeDataV12,
  randomParamData: RandomParamDataV12,
  value: number,
  type: number
}

export type EnvelopeDataV12 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV12>,
  offsetType: number
}

export type EnvelopePointDataV12 = {
  offset: number,
  value: number
}

export type RandomParamDataV12 = {
  time: RangeDataV12,
  value: RangeDataV12
}

export type RangeDataV12 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV12 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV12 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number
}

export type SnapshotDataV12 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV12>,
  category: Array<CategoryDynamicDataV12>
}

export type HandlerDataV12 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV12 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV12>,
  attenuation: AttenuationDataV12,
  fileName: Array<FileNameDataV12>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV12,
  pan: DynamicParamDataV12,
  pitch: DynamicParamDataV12,
  pitchMS: DynamicParamDataV12,
  volume: DynamicParamDataV12,
  volumeMS: DynamicParamDataV12,
  initialDelay: RangeDataV12,
  playLength: RangeDataV12,
  positionOffsetAngle: RangeDataV12,
  positionRange: RangeDataV12,
  repeatCount: RangeDataV12,
  repeatTime: RangeDataV12,
  startTimeOffset: RangeDataV12,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV12 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV12 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV12 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV12>
}

export type TriggerMarkerDataV12 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV13 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  audioSettings: AudioSettingsDataV13,
  handler: Array<HandlerDataV13>,
  metaSound: Array<MetaSoundDataV13>,
  scriptRef: Array<ScriptRefDataV13>,
  triggerKey: Array<TriggerKeyDataV13>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV13 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  focusTransition: number,
  buss: Array<BussDataV13>,
  category: Array<CategoryDataV13>,
  reverb: Array<ReverbDataV13>,
  snapshot: Array<SnapshotDataV13>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV13 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV13
}

export type BussDynamicDataV13 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV13>
}

export type DspDataV13 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV13 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV13,
  dynamicData: CategoryDynamicDataV13,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV13 = {
  coneInsideAngle: number,
  coneOutsideAngle: number,
  coneOutsideVolume: number,
  lowPass: DynamicParamDataV13,
  pan3D: DynamicParamDataV13,
  spread3D: DynamicParamDataV13,
  volumeA: DynamicParamDataV13,
  volumeB: DynamicParamDataV13
}

export type DynamicParamDataV13 = {
  envelopeData: EnvelopeDataV13,
  randomParamData: RandomParamDataV13,
  value: number,
  type: number
}

export type EnvelopeDataV13 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV13>,
  offsetType: number
}

export type EnvelopePointDataV13 = {
  offset: number,
  value: number
}

export type RandomParamDataV13 = {
  time: RangeDataV13,
  value: RangeDataV13
}

export type RangeDataV13 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV13 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV13 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number
}

export type SnapshotDataV13 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV13>,
  category: Array<CategoryDynamicDataV13>
}

export type HandlerDataV13 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV13 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV13>,
  attenuation: AttenuationDataV13,
  fileName: Array<FileNameDataV13>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV13,
  pan: DynamicParamDataV13,
  pitch: DynamicParamDataV13,
  pitchMS: DynamicParamDataV13,
  volume: DynamicParamDataV13,
  volumeMS: DynamicParamDataV13,
  initialDelay: RangeDataV13,
  playLength: RangeDataV13,
  positionOffsetAngle: RangeDataV13,
  positionRange: RangeDataV13,
  repeatCount: RangeDataV13,
  repeatTime: RangeDataV13,
  startTimeOffset: RangeDataV13,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV13 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV13 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV13 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV13>
}

export type TriggerMarkerDataV13 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV14 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  audioSettings: AudioSettingsDataV14,
  handler: Array<HandlerDataV14>,
  metaSound: Array<MetaSoundDataV14>,
  scriptRef: Array<ScriptRefDataV14>,
  triggerKey: Array<TriggerKeyDataV14>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV14 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV14>,
  category: Array<CategoryDataV14>,
  reverb: Array<ReverbDataV14>,
  snapshot: Array<SnapshotDataV14>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV14 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV14
}

export type BussDynamicDataV14 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV14>
}

export type DspDataV14 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV14 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV14,
  dynamicData: CategoryDynamicDataV14,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV14 = {
  doppler: number,
  lowPass: DynamicParamDataV14,
  pan3D: DynamicParamDataV14,
  spread3D: DynamicParamDataV14,
  volumeA: DynamicParamDataV14,
  volumeB: DynamicParamDataV14
}

export type DynamicParamDataV14 = {
  envelopeData: EnvelopeDataV14,
  randomParamData: RandomParamDataV14,
  value: number,
  type: number
}

export type EnvelopeDataV14 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV14>,
  offsetType: number
}

export type EnvelopePointDataV14 = {
  offset: number,
  value: number
}

export type RandomParamDataV14 = {
  time: RangeDataV14,
  value: RangeDataV14
}

export type RangeDataV14 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV14 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV14 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number
}

export type SnapshotDataV14 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV14>,
  category: Array<CategoryDynamicDataV14>
}

export type HandlerDataV14 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV14 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV14>,
  attenuation: AttenuationDataV14,
  fileName: Array<FileNameDataV14>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV14,
  pan: DynamicParamDataV14,
  pitch: DynamicParamDataV14,
  pitchMS: DynamicParamDataV14,
  volume: DynamicParamDataV14,
  volumeMS: DynamicParamDataV14,
  initialDelay: RangeDataV14,
  playLength: RangeDataV14,
  positionOffsetAngle: RangeDataV14,
  positionRange: RangeDataV14,
  repeatCount: RangeDataV14,
  repeatTime: RangeDataV14,
  startTimeOffset: RangeDataV14,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV14 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV14 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV14 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV14>
}

export type TriggerMarkerDataV14 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV15 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  audioSettings: AudioSettingsDataV15,
  handler: Array<HandlerDataV15>,
  metaSound: Array<MetaSoundDataV15>,
  scriptRef: Array<ScriptRefDataV15>,
  triggerKey: Array<TriggerKeyDataV15>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV15 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV15>,
  category: Array<CategoryDataV15>,
  reverb: Array<ReverbDataV15>,
  snapshot: Array<SnapshotDataV15>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV15 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV15
}

export type BussDynamicDataV15 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV15>
}

export type DspDataV15 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV15 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV15,
  dynamicData: CategoryDynamicDataV15,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV15 = {
  doppler: number,
  lowPass: DynamicParamDataV15,
  pan3D: DynamicParamDataV15,
  reverb: DynamicParamDataV15,
  spread3D: DynamicParamDataV15,
  volumeA: DynamicParamDataV15,
  volumeB: DynamicParamDataV15
}

export type DynamicParamDataV15 = {
  envelopeData: EnvelopeDataV15,
  randomParamData: RandomParamDataV15,
  value: number,
  type: number
}

export type EnvelopeDataV15 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV15>,
  offsetType: number
}

export type EnvelopePointDataV15 = {
  offset: number,
  value: number
}

export type RandomParamDataV15 = {
  time: RangeDataV15,
  value: RangeDataV15
}

export type RangeDataV15 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV15 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV15 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number
}

export type SnapshotDataV15 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV15>,
  category: Array<CategoryDynamicDataV15>
}

export type HandlerDataV15 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV15 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV15>,
  attenuation: AttenuationDataV15,
  fileName: Array<FileNameDataV15>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV15,
  pan: DynamicParamDataV15,
  pitch: DynamicParamDataV15,
  pitchMS: DynamicParamDataV15,
  volume: DynamicParamDataV15,
  volumeMS: DynamicParamDataV15,
  initialDelay: RangeDataV15,
  playLength: RangeDataV15,
  positionOffsetAngle: RangeDataV15,
  positionRange: RangeDataV15,
  repeatCount: RangeDataV15,
  repeatTime: RangeDataV15,
  startTimeOffset: RangeDataV15,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV15 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV15 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV15 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV15>
}

export type TriggerMarkerDataV15 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV16 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  audioSettings: AudioSettingsDataV16,
  handler: Array<HandlerDataV16>,
  metaSound: Array<MetaSoundDataV16>,
  scriptRef: Array<ScriptRefDataV16>,
  triggerKey: Array<TriggerKeyDataV16>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV16 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV16>,
  category: Array<CategoryDataV16>,
  reverb: Array<ReverbDataV16>,
  snapshot: Array<SnapshotDataV16>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV16 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV16
}

export type BussDynamicDataV16 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV16>
}

export type DspDataV16 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV16 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV16,
  dynamicData: CategoryDynamicDataV16,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV16 = {
  doppler: number,
  lowPass: DynamicParamDataV16,
  pan3D: DynamicParamDataV16,
  reverb: DynamicParamDataV16,
  spread3D: DynamicParamDataV16,
  volumeA: DynamicParamDataV16,
  volumeB: DynamicParamDataV16
}

export type DynamicParamDataV16 = {
  envelopeData: EnvelopeDataV16,
  randomParamData: RandomParamDataV16,
  value: number,
  type: number
}

export type EnvelopeDataV16 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV16>,
  offsetType: number
}

export type EnvelopePointDataV16 = {
  offset: number,
  value: number
}

export type RandomParamDataV16 = {
  time: RangeDataV16,
  value: RangeDataV16
}

export type RangeDataV16 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV16 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV16 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV16 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV16>,
  category: Array<CategoryDynamicDataV16>
}

export type HandlerDataV16 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV16 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV16>,
  attenuation: AttenuationDataV16,
  fileName: Array<FileNameDataV16>,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV16,
  pan: DynamicParamDataV16,
  pitch: DynamicParamDataV16,
  pitchMS: DynamicParamDataV16,
  volume: DynamicParamDataV16,
  volumeMS: DynamicParamDataV16,
  initialDelay: RangeDataV16,
  playLength: RangeDataV16,
  positionOffsetAngle: RangeDataV16,
  positionRange: RangeDataV16,
  repeatCount: RangeDataV16,
  repeatTime: RangeDataV16,
  startTimeOffset: RangeDataV16,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV16 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV16 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV16 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV16>
}

export type TriggerMarkerDataV16 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV17 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  audioSettings: AudioSettingsDataV17,
  handler: Array<HandlerDataV17>,
  metaSound: Array<MetaSoundDataV17>,
  scriptRef: Array<ScriptRefDataV17>,
  triggerKey: Array<TriggerKeyDataV17>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV17 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV17>,
  category: Array<CategoryDataV17>,
  reverb: Array<ReverbDataV17>,
  snapshot: Array<SnapshotDataV17>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV17 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV17
}

export type BussDynamicDataV17 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV17>
}

export type DspDataV17 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV17 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV17,
  dynamicData: CategoryDynamicDataV17,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV17 = {
  doppler: number,
  lowPass: DynamicParamDataV17,
  pan3D: DynamicParamDataV17,
  reverb: DynamicParamDataV17,
  spread3D: DynamicParamDataV17,
  volumeA: DynamicParamDataV17,
  volumeB: DynamicParamDataV17
}

export type DynamicParamDataV17 = {
  envelopeData: EnvelopeDataV17,
  randomParamData: RandomParamDataV17,
  value: number,
  type: number
}

export type EnvelopeDataV17 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV17>,
  offsetType: number
}

export type EnvelopePointDataV17 = {
  offset: number,
  value: number
}

export type RandomParamDataV17 = {
  time: RangeDataV17,
  value: RangeDataV17
}

export type RangeDataV17 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV17 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV17 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV17 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV17>,
  category: Array<CategoryDynamicDataV17>
}

export type HandlerDataV17 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV17 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV17>,
  attenuation: AttenuationDataV17,
  fileName: Array<FileNameDataV17>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV17,
  pan: DynamicParamDataV17,
  pitch: DynamicParamDataV17,
  pitchMS: DynamicParamDataV17,
  volume: DynamicParamDataV17,
  volumeMS: DynamicParamDataV17,
  initialDelay: RangeDataV17,
  playLength: RangeDataV17,
  positionOffsetAngle: RangeDataV17,
  positionRange: RangeDataV17,
  repeatCount: RangeDataV17,
  repeatTime: RangeDataV17,
  startTimeOffset: RangeDataV17,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV17 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV17 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV17 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV17>
}

export type TriggerMarkerDataV17 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV18 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  audioSettings: AudioSettingsDataV18,
  handler: Array<HandlerDataV18>,
  metaSound: Array<MetaSoundDataV18>,
  scriptRef: Array<ScriptRefDataV18>,
  triggerKey: Array<TriggerKeyDataV18>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV18 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV18>,
  category: Array<CategoryDataV18>,
  reverb: Array<ReverbDataV18>,
  snapshot: Array<SnapshotDataV18>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV18 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV18
}

export type BussDynamicDataV18 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV18>
}

export type DspDataV18 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV18 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV18,
  dynamicData: CategoryDynamicDataV18,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV18 = {
  doppler: number,
  lowPass: DynamicParamDataV18,
  pan3D: DynamicParamDataV18,
  reverb: DynamicParamDataV18,
  spread3D: DynamicParamDataV18,
  volumeA: DynamicParamDataV18,
  volumeB: DynamicParamDataV18
}

export type DynamicParamDataV18 = {
  envelopeData: EnvelopeDataV18,
  randomParamData: RandomParamDataV18,
  value: number,
  type: number
}

export type EnvelopeDataV18 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV18>,
  offsetType: number
}

export type EnvelopePointDataV18 = {
  offset: number,
  value: number
}

export type RandomParamDataV18 = {
  time: RangeDataV18,
  value: RangeDataV18
}

export type RangeDataV18 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV18 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV18 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV18 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV18>,
  category: Array<CategoryDynamicDataV18>
}

export type HandlerDataV18 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV18 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV18>,
  attenuation: AttenuationDataV18,
  fileName: Array<FileNameDataV18>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV18,
  pan: DynamicParamDataV18,
  pitch: DynamicParamDataV18,
  pitchMS: DynamicParamDataV18,
  volume: DynamicParamDataV18,
  volumeMS: DynamicParamDataV18,
  initialDelay: RangeDataV18,
  playLength: RangeDataV18,
  positionOffsetAngle: RangeDataV18,
  positionRange: RangeDataV18,
  repeatCount: RangeDataV18,
  repeatTime: RangeDataV18,
  startTimeOffset: RangeDataV18,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV18 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV18 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV18 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV18>
}

export type TriggerMarkerDataV18 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV19 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  audioSettings: AudioSettingsDataV19,
  handler: Array<HandlerDataV19>,
  metaSound: Array<MetaSoundDataV19>,
  scriptRef: Array<ScriptRefDataV19>,
  triggerKey: Array<TriggerKeyDataV19>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV19 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV19>,
  category: Array<CategoryDataV19>,
  reverb: Array<ReverbDataV19>,
  snapshot: Array<SnapshotDataV19>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV19 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV19
}

export type BussDynamicDataV19 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV19>
}

export type DspDataV19 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV19 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV19,
  dynamicData: CategoryDynamicDataV19,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV19 = {
  doppler: number,
  lowPass: DynamicParamDataV19,
  pan3D: DynamicParamDataV19,
  reverb: DynamicParamDataV19,
  spread3D: DynamicParamDataV19,
  volumeA: DynamicParamDataV19,
  volumeB: DynamicParamDataV19
}

export type DynamicParamDataV19 = {
  envelopeData: EnvelopeDataV19,
  randomParamData: RandomParamDataV19,
  value: number,
  type: number
}

export type EnvelopeDataV19 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV19>,
  offsetType: number
}

export type EnvelopePointDataV19 = {
  offset: number,
  value: number
}

export type RandomParamDataV19 = {
  time: RangeDataV19,
  value: RangeDataV19
}

export type RangeDataV19 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV19 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV19 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV19 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV19>,
  category: Array<CategoryDynamicDataV19>,
  priority: number
}

export type HandlerDataV19 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV19 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV19>,
  attenuation: AttenuationDataV19,
  fileName: Array<FileNameDataV19>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV19,
  pan: DynamicParamDataV19,
  pitch: DynamicParamDataV19,
  pitchMS: DynamicParamDataV19,
  volume: DynamicParamDataV19,
  volumeMS: DynamicParamDataV19,
  initialDelay: RangeDataV19,
  playLength: RangeDataV19,
  positionOffsetAngle: RangeDataV19,
  positionRange: RangeDataV19,
  repeatCount: RangeDataV19,
  repeatTime: RangeDataV19,
  startTimeOffset: RangeDataV19,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV19 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV19 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV19 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV19>
}

export type TriggerMarkerDataV19 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV20 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV20,
  handler: Array<HandlerDataV20>,
  metaSound: Array<MetaSoundDataV20>,
  scriptRef: Array<ScriptRefDataV20>,
  triggerKey: Array<TriggerKeyDataV20>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV20 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV20>,
  category: Array<CategoryDataV20>,
  reverb: Array<ReverbDataV20>,
  snapshot: Array<SnapshotDataV20>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV20 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV20
}

export type BussDynamicDataV20 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV20>
}

export type DspDataV20 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV20 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV20,
  dynamicData: CategoryDynamicDataV20,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV20 = {
  doppler: number,
  lowPass: DynamicParamDataV20,
  pan3D: DynamicParamDataV20,
  reverb: DynamicParamDataV20,
  spread3D: DynamicParamDataV20,
  volumeA: DynamicParamDataV20,
  volumeB: DynamicParamDataV20
}

export type DynamicParamDataV20 = {
  envelopeData: EnvelopeDataV20,
  randomParamData: RandomParamDataV20,
  value: number,
  type: number
}

export type EnvelopeDataV20 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV20>,
  offsetType: number
}

export type EnvelopePointDataV20 = {
  offset: number,
  value: number
}

export type RandomParamDataV20 = {
  time: RangeDataV20,
  value: RangeDataV20
}

export type RangeDataV20 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV20 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type ReverbDataV20 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV20 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV20>,
  category: Array<CategoryDynamicDataV20>,
  priority: number
}

export type HandlerDataV20 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV20 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV20>,
  attenuation: AttenuationDataV20,
  fileName: Array<FileNameDataV20>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV20,
  pan: DynamicParamDataV20,
  pitch: DynamicParamDataV20,
  pitchMS: DynamicParamDataV20,
  volume: DynamicParamDataV20,
  volumeMS: DynamicParamDataV20,
  initialDelay: RangeDataV20,
  playLength: RangeDataV20,
  positionOffsetAngle: RangeDataV20,
  positionRange: RangeDataV20,
  repeatCount: RangeDataV20,
  repeatTime: RangeDataV20,
  startTimeOffset: RangeDataV20,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type FileNameDataV20 = {
  language: BigInt,
  weight: number,
  fileName: string,
  audioType: number
}

export type ScriptRefDataV20 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV20 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV20>
}

export type TriggerMarkerDataV20 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV21 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV21,
  handler: Array<HandlerDataV21>,
  metaSound: Array<MetaSoundDataV21>,
  scriptRef: Array<ScriptRefDataV21>,
  triggerKey: Array<TriggerKeyDataV21>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV21 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV21>,
  category: Array<CategoryDataV21>,
  musicCondition: Array<MusicConditionDataV21>,
  musicPlaylist: Array<MusicPlaylistDataV21>,
  reverb: Array<ReverbDataV21>,
  snapshot: Array<SnapshotDataV21>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV21 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV21
}

export type BussDynamicDataV21 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV21>
}

export type DspDataV21 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV21 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV21,
  dynamicData: CategoryDynamicDataV21,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV21 = {
  doppler: number,
  lowPass: DynamicParamDataV21,
  pan3D: DynamicParamDataV21,
  reverb: DynamicParamDataV21,
  spread3D: DynamicParamDataV21,
  volumeA: DynamicParamDataV21,
  volumeB: DynamicParamDataV21
}

export type DynamicParamDataV21 = {
  envelopeData: EnvelopeDataV21,
  randomParamData: RandomParamDataV21,
  value: number,
  type: number
}

export type EnvelopeDataV21 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV21>,
  offsetType: number
}

export type EnvelopePointDataV21 = {
  offset: number,
  value: number
}

export type RandomParamDataV21 = {
  time: RangeDataV21,
  value: RangeDataV21
}

export type RangeDataV21 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV21 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type MusicConditionDataV21 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MusicPlaylistDataV21 = {
  category: BigInt,
  name: BigInt,
  primaryPlaylistId: BigInt,
  secondaryPlaylistId: BigInt,
  fileName: Array<FileNameDataV21>,
  fadeInTime: number,
  fadeOutTime: number,
  flags: number,
  initialSilence: RangeDataV21,
  intervalSilence: RangeDataV21,
  maxPlayLength: RangeDataV21,
  volume: DynamicParamDataV21,
  fileIterateMode: number
}

export type FileNameDataV21 = {
  condition: BigInt,
  language: BigInt,
  volume: number,
  weight: number,
  fileName: string,
  audioType: number
}

export type ReverbDataV21 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV21 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV21>,
  category: Array<CategoryDynamicDataV21>,
  priority: number
}

export type HandlerDataV21 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV21 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV21>,
  attenuation: AttenuationDataV21,
  fileName: Array<FileNameDataV21>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV21,
  pan: DynamicParamDataV21,
  pitch: DynamicParamDataV21,
  pitchMS: DynamicParamDataV21,
  volume: DynamicParamDataV21,
  volumeMS: DynamicParamDataV21,
  initialDelay: RangeDataV21,
  playLength: RangeDataV21,
  positionOffsetAngle: RangeDataV21,
  positionRange: RangeDataV21,
  repeatCount: RangeDataV21,
  repeatTime: RangeDataV21,
  startTimeOffset: RangeDataV21,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type ScriptRefDataV21 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV21 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV21>
}

export type TriggerMarkerDataV21 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV22 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV22,
  handler: Array<HandlerDataV22>,
  metaSound: Array<MetaSoundDataV22>,
  scriptRef: Array<ScriptRefDataV22>,
  triggerKey: Array<TriggerKeyDataV22>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number
}

export type AudioSettingsDataV22 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV22>,
  category: Array<CategoryDataV22>,
  musicCondition: Array<MusicConditionDataV22>,
  musicPlaylist: Array<MusicPlaylistDataV22>,
  reverb: Array<ReverbDataV22>,
  snapshot: Array<SnapshotDataV22>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV22 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV22
}

export type BussDynamicDataV22 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV22>
}

export type DspDataV22 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV22 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV22,
  dynamicData: CategoryDynamicDataV22,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV22 = {
  doppler: number,
  lowPass: DynamicParamDataV22,
  highPass: DynamicParamDataV22,
  pan3D: DynamicParamDataV22,
  reverb: DynamicParamDataV22,
  spread3D: DynamicParamDataV22,
  volumeA: DynamicParamDataV22,
  volumeB: DynamicParamDataV22
}

export type DynamicParamDataV22 = {
  envelopeData: EnvelopeDataV22,
  randomParamData: RandomParamDataV22,
  value: number,
  type: number
}

export type EnvelopeDataV22 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV22>,
  offsetType: number
}

export type EnvelopePointDataV22 = {
  offset: number,
  value: number
}

export type RandomParamDataV22 = {
  time: RangeDataV22,
  value: RangeDataV22
}

export type RangeDataV22 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV22 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  highPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type MusicConditionDataV22 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MusicPlaylistDataV22 = {
  category: BigInt,
  name: BigInt,
  primaryPlaylistId: BigInt,
  secondaryPlaylistId: BigInt,
  fileName: Array<FileNameDataV22>,
  fadeInTime: number,
  fadeOutTime: number,
  flags: number,
  initialSilence: RangeDataV22,
  intervalSilence: RangeDataV22,
  maxPlayLength: RangeDataV22,
  volume: DynamicParamDataV22,
  fileIterateMode: number
}

export type FileNameDataV22 = {
  condition: BigInt,
  language: BigInt,
  volume: number,
  weight: number,
  fileName: string,
  audioType: number
}

export type ReverbDataV22 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV22 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV22>,
  category: Array<CategoryDynamicDataV22>,
  priority: number
}

export type HandlerDataV22 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV22 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV22>,
  attenuation: AttenuationDataV22,
  fileName: Array<FileNameDataV22>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV22,
  pan: DynamicParamDataV22,
  pitch: DynamicParamDataV22,
  pitchMS: DynamicParamDataV22,
  volume: DynamicParamDataV22,
  volumeMS: DynamicParamDataV22,
  initialDelay: RangeDataV22,
  playLength: RangeDataV22,
  positionOffsetAngle: RangeDataV22,
  positionRange: RangeDataV22,
  repeatCount: RangeDataV22,
  repeatTime: RangeDataV22,
  startTimeOffset: RangeDataV22,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type ScriptRefDataV22 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV22 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV22>
}

export type TriggerMarkerDataV22 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV23 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV23,
  handler: Array<HandlerDataV23>,
  metaSound: Array<MetaSoundDataV23>,
  scriptRef: Array<ScriptRefDataV23>,
  triggerKey: Array<TriggerKeyDataV23>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number,
  musicMutePriority: number
}

export type AudioSettingsDataV23 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV23>,
  category: Array<CategoryDataV23>,
  musicCondition: Array<MusicConditionDataV23>,
  musicPlaylist: Array<MusicPlaylistDataV23>,
  reverb: Array<ReverbDataV23>,
  snapshot: Array<SnapshotDataV23>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV23 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV23
}

export type BussDynamicDataV23 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV23>
}

export type DspDataV23 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV23 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV23,
  dynamicData: CategoryDynamicDataV23,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV23 = {
  doppler: number,
  lowPass: DynamicParamDataV23,
  highPass: DynamicParamDataV23,
  pan3D: DynamicParamDataV23,
  reverb: DynamicParamDataV23,
  spread3D: DynamicParamDataV23,
  volumeA: DynamicParamDataV23,
  volumeB: DynamicParamDataV23
}

export type DynamicParamDataV23 = {
  envelopeData: EnvelopeDataV23,
  randomParamData: RandomParamDataV23,
  value: number,
  type: number
}

export type EnvelopeDataV23 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV23>,
  offsetType: number
}

export type EnvelopePointDataV23 = {
  offset: number,
  value: number
}

export type RandomParamDataV23 = {
  time: RangeDataV23,
  value: RangeDataV23
}

export type RangeDataV23 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV23 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  highPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type MusicConditionDataV23 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MusicPlaylistDataV23 = {
  category: BigInt,
  name: BigInt,
  primaryPlaylistId: BigInt,
  secondaryPlaylistId: BigInt,
  fileName: Array<FileNameDataV23>,
  fadeInTime: number,
  fadeOutTime: number,
  flags: number,
  initialSilence: RangeDataV23,
  intervalSilence: RangeDataV23,
  maxPlayLength: RangeDataV23,
  volume: DynamicParamDataV23,
  fileIterateMode: number
}

export type FileNameDataV23 = {
  condition: BigInt,
  language: BigInt,
  volume: number,
  weight: number,
  fileName: string,
  audioType: number
}

export type ReverbDataV23 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV23 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV23>,
  category: Array<CategoryDynamicDataV23>,
  priority: number
}

export type HandlerDataV23 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV23 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV23>,
  attenuation: AttenuationDataV23,
  fileName: Array<FileNameDataV23>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV23,
  pan: DynamicParamDataV23,
  pitch: DynamicParamDataV23,
  pitchMS: DynamicParamDataV23,
  volume: DynamicParamDataV23,
  volumeMS: DynamicParamDataV23,
  initialDelay: RangeDataV23,
  playLength: RangeDataV23,
  positionOffsetAngle: RangeDataV23,
  positionRange: RangeDataV23,
  repeatCount: RangeDataV23,
  repeatTime: RangeDataV23,
  startTimeOffset: RangeDataV23,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type ScriptRefDataV23 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV23 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV23>
}

export type TriggerMarkerDataV23 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV24 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV24,
  handler: Array<HandlerDataV24>,
  metaSound: Array<MetaSoundDataV24>,
  scriptRef: Array<ScriptRefDataV24>,
  triggerKey: Array<TriggerKeyDataV24>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number,
  musicMutePriority: number
}

export type AudioSettingsDataV24 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV24>,
  category: Array<CategoryDataV24>,
  musicCondition: Array<MusicConditionDataV24>,
  musicPlaylist: Array<MusicPlaylistDataV24>,
  reverb: Array<ReverbDataV24>,
  snapshot: Array<SnapshotDataV24>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV24 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV24
}

export type BussDynamicDataV24 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV24>
}

export type DspDataV24 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV24 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV24,
  dynamicData: CategoryDynamicDataV24,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV24 = {
  doppler: number,
  lowPass: DynamicParamDataV24,
  highPass: DynamicParamDataV24,
  pan3D: DynamicParamDataV24,
  reverb: DynamicParamDataV24,
  spread3D: DynamicParamDataV24,
  volumeA: DynamicParamDataV24,
  volumeB: DynamicParamDataV24
}

export type DynamicParamDataV24 = {
  envelopeData: EnvelopeDataV24,
  randomParamData: RandomParamDataV24,
  value: number,
  type: number
}

export type EnvelopeDataV24 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV24>,
  offsetType: number
}

export type EnvelopePointDataV24 = {
  offset: number,
  value: number
}

export type RandomParamDataV24 = {
  time: RangeDataV24,
  value: RangeDataV24
}

export type RangeDataV24 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV24 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  highPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type MusicConditionDataV24 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MusicPlaylistDataV24 = {
  category: BigInt,
  name: BigInt,
  primaryPlaylistId: BigInt,
  secondaryPlaylistId: BigInt,
  fileName: Array<FileNameDataV24>,
  fadeInTime: number,
  fadeOutTime: number,
  flags: number,
  initialSilence: RangeDataV24,
  intervalSilence: RangeDataV24,
  maxPlayLength: RangeDataV24,
  volume: DynamicParamDataV24,
  fileIterateMode: number
}

export type FileNameDataV24 = {
  condition: BigInt,
  language: BigInt,
  volume: number,
  weight: number,
  fileName: string,
  audioType: number,
  noteBase: number,
  noteMin: number,
  noteMax: number
}

export type ReverbDataV24 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV24 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV24>,
  category: Array<CategoryDynamicDataV24>,
  priority: number
}

export type HandlerDataV24 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV24 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV24>,
  attenuation: AttenuationDataV24,
  fileName: Array<FileNameDataV24>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV24,
  pan: DynamicParamDataV24,
  pitch: DynamicParamDataV24,
  pitchMS: DynamicParamDataV24,
  volume: DynamicParamDataV24,
  volumeMS: DynamicParamDataV24,
  initialDelay: RangeDataV24,
  playLength: RangeDataV24,
  positionOffsetAngle: RangeDataV24,
  positionRange: RangeDataV24,
  repeatCount: RangeDataV24,
  repeatTime: RangeDataV24,
  startTimeOffset: RangeDataV24,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type ScriptRefDataV24 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV24 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV24>
}

export type TriggerMarkerDataV24 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV25 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV25,
  handler: Array<HandlerDataV25>,
  metaSound: Array<MetaSoundDataV25>,
  scriptRef: Array<ScriptRefDataV25>,
  triggerKey: Array<TriggerKeyDataV25>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number,
  musicMutePriority: number
}

export type AudioSettingsDataV25 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  buss: Array<BussDataV25>,
  category: Array<CategoryDataV25>,
  material: Array<MaterialDataV25>,
  musicCondition: Array<MusicConditionDataV25>,
  musicPlaylist: Array<MusicPlaylistDataV25>,
  reverb: Array<ReverbDataV25>,
  snapshot: Array<SnapshotDataV25>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV25 = {
  name: BigInt,
  flags: number,
  output: BigInt,
  dynamicData: BussDynamicDataV25
}

export type BussDynamicDataV25 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV25>
}

export type DspDataV25 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV25 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV25,
  dynamicData: CategoryDynamicDataV25,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number
}

export type AttenuationDataV25 = {
  doppler: number,
  lowPass: DynamicParamDataV25,
  highPass: DynamicParamDataV25,
  pan3D: DynamicParamDataV25,
  reverb: DynamicParamDataV25,
  spread3D: DynamicParamDataV25,
  volumeA: DynamicParamDataV25,
  volumeB: DynamicParamDataV25
}

export type DynamicParamDataV25 = {
  envelopeData: EnvelopeDataV25,
  randomParamData: RandomParamDataV25,
  value: number,
  type: number
}

export type EnvelopeDataV25 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV25>,
  offsetType: number
}

export type EnvelopePointDataV25 = {
  offset: number,
  value: number
}

export type RandomParamDataV25 = {
  time: RangeDataV25,
  value: RangeDataV25
}

export type RangeDataV25 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV25 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  highPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number
}

export type MaterialDataV25 = {
  name: BigInt,
  flags: number,
  absorptionLF: number,
  absorptionMF: number,
  absorptionHF: number,
  occlusion: number
}

export type MusicConditionDataV25 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MusicPlaylistDataV25 = {
  category: BigInt,
  name: BigInt,
  primaryPlaylistId: BigInt,
  secondaryPlaylistId: BigInt,
  fileName: Array<FileNameDataV25>,
  fadeInTime: number,
  fadeOutTime: number,
  flags: number,
  initialSilence: RangeDataV25,
  intervalSilence: RangeDataV25,
  maxPlayLength: RangeDataV25,
  volume: DynamicParamDataV25,
  fileIterateMode: number
}

export type FileNameDataV25 = {
  condition: BigInt,
  language: BigInt,
  volume: number,
  weight: number,
  fileName: string,
  audioType: number,
  noteBase: number,
  noteMin: number,
  noteMax: number
}

export type ReverbDataV25 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV25 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV25>,
  category: Array<CategoryDynamicDataV25>,
  priority: number
}

export type HandlerDataV25 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV25 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV25>,
  attenuation: AttenuationDataV25,
  fileName: Array<FileNameDataV25>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV25,
  pan: DynamicParamDataV25,
  pitch: DynamicParamDataV25,
  pitchMS: DynamicParamDataV25,
  volume: DynamicParamDataV25,
  volumeMS: DynamicParamDataV25,
  initialDelay: RangeDataV25,
  playLength: RangeDataV25,
  positionOffsetAngle: RangeDataV25,
  positionRange: RangeDataV25,
  repeatCount: RangeDataV25,
  repeatTime: RangeDataV25,
  startTimeOffset: RangeDataV25,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type ScriptRefDataV25 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV25 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV25>
}

export type TriggerMarkerDataV25 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV26 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV26,
  handler: Array<HandlerDataV26>,
  metaSound: Array<MetaSoundDataV26>,
  scriptRef: Array<ScriptRefDataV26>,
  triggerKey: Array<TriggerKeyDataV26>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number,
  musicMutePriority: number
}

export type AudioSettingsDataV26 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  focusTransition: number,
  memoryPool: number,
  reverbLevel: number,
  minChannelsLQ: number,
  maxChannelsLQ: number,
  buss: Array<BussDataV26>,
  category: Array<CategoryDataV26>,
  material: Array<MaterialDataV26>,
  musicCondition: Array<MusicConditionDataV26>,
  musicPlaylist: Array<MusicPlaylistDataV26>,
  reverb: Array<ReverbDataV26>,
  snapshot: Array<SnapshotDataV26>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV26 = {
  name: BigInt,
  output: BigInt,
  flags: number,
  normalizeFadeTime: number,
  normalizeThreshold: number,
  normalizeMaxAmp: number,
  compressorThreshold: number,
  compressorAttack: number,
  compressorRelease: number,
  compressorGainMakeup: number,
  dynamicData: BussDynamicDataV26
}

export type BussDynamicDataV26 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV26>
}

export type DspDataV26 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV26 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV26,
  dynamicData: CategoryDynamicDataV26,
  focusReserve: number,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number,
  priority: number
}

export type AttenuationDataV26 = {
  doppler: number,
  lowPass: DynamicParamDataV26,
  highPass: DynamicParamDataV26,
  pan3D: DynamicParamDataV26,
  reverb: DynamicParamDataV26,
  spread3D: DynamicParamDataV26,
  volumeA: DynamicParamDataV26,
  volumeB: DynamicParamDataV26,
  lfe: DynamicParamDataV26
}

export type DynamicParamDataV26 = {
  envelopeData: EnvelopeDataV26,
  randomParamData: RandomParamDataV26,
  value: number,
  type: number
}

export type EnvelopeDataV26 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV26>,
  offsetType: number
}

export type EnvelopePointDataV26 = {
  offset: number,
  value: number
}

export type RandomParamDataV26 = {
  time: RangeDataV26,
  value: RangeDataV26
}

export type RangeDataV26 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV26 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  highPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number,
  minAudible: number,
  maxAudibleLQ: number,
  maxAudibleHG: number
}

export type MaterialDataV26 = {
  name: BigInt,
  flags: number,
  absorptionLF: number,
  absorptionMF: number,
  absorptionHF: number,
  occlusion: number
}

export type MusicConditionDataV26 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MusicPlaylistDataV26 = {
  category: BigInt,
  name: BigInt,
  primaryPlaylistId: BigInt,
  secondaryPlaylistId: BigInt,
  fileName: Array<FileNameDataV26>,
  fadeInTime: number,
  fadeOutTime: number,
  flags: number,
  initialSilence: RangeDataV26,
  intervalSilence: RangeDataV26,
  maxPlayLength: RangeDataV26,
  volume: DynamicParamDataV26,
  fileIterateMode: number
}

export type FileNameDataV26 = {
  condition: BigInt,
  language: BigInt,
  volume: number,
  weight: number,
  fileName: string,
  audioType: number,
  noteBase: number,
  noteMin: number,
  noteMax: number
}

export type ReverbDataV26 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type SnapshotDataV26 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV26>,
  category: Array<CategoryDynamicDataV26>,
  priority: number
}

export type HandlerDataV26 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV26 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV26>,
  attenuation: AttenuationDataV26,
  fileName: Array<FileNameDataV26>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV26,
  pan: DynamicParamDataV26,
  pitch: DynamicParamDataV26,
  pitchMS: DynamicParamDataV26,
  volume: DynamicParamDataV26,
  volumeMS: DynamicParamDataV26,
  initialDelay: RangeDataV26,
  playLength: RangeDataV26,
  positionOffsetAngle: RangeDataV26,
  positionRange: RangeDataV26,
  repeatCount: RangeDataV26,
  repeatTime: RangeDataV26,
  startTimeOffset: RangeDataV26,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type ScriptRefDataV26 = {
  name: BigInt,
  fileName: string
}

export type TriggerKeyDataV26 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV26>
}

export type TriggerMarkerDataV26 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV27 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV27,
  handler: Array<HandlerDataV27>,
  metaSound: Array<MetaSoundDataV27>,
  scriptRef: Array<ScriptRefDataV27>,
  triggerKey: Array<TriggerKeyDataV27>,
  property: Array<PropertyDataV27>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number,
  musicMutePriority: number
}

export type AudioSettingsDataV27 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  echoLevel: number,
  focusTransition: number,
  memoryPool: number,
  reverbLevel: number,
  minChannelsLQ: number,
  maxChannelsLQ: number,
  buss: Array<BussDataV27>,
  category: Array<CategoryDataV27>,
  material: Array<MaterialDataV27>,
  musicCondition: Array<MusicConditionDataV27>,
  musicPlaylist: Array<MusicPlaylistDataV27>,
  property: Array<PropertyDataV27>,
  reverb: Array<ReverbDataV27>,
  scriptRef: Array<ScriptRefDataV27>,
  snapshot: Array<SnapshotDataV27>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV27 = {
  name: BigInt,
  output: BigInt,
  flags: number,
  normalizeFadeTime: number,
  normalizeThreshold: number,
  normalizeMaxAmp: number,
  compressorThreshold: number,
  compressorAttack: number,
  compressorRelease: number,
  compressorGainMakeup: number,
  dynamicData: BussDynamicDataV27
}

export type BussDynamicDataV27 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV27>
}

export type DspDataV27 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV27 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV27,
  dynamicData: CategoryDynamicDataV27,
  focusReserve: number,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number,
  priority: number
}

export type AttenuationDataV27 = {
  doppler: number,
  lowPass: DynamicParamDataV27,
  highPass: DynamicParamDataV27,
  pan3D: DynamicParamDataV27,
  reverb: DynamicParamDataV27,
  spread3D: DynamicParamDataV27,
  volumeA: DynamicParamDataV27,
  volumeB: DynamicParamDataV27,
  lfe: DynamicParamDataV27
}

export type DynamicParamDataV27 = {
  envelopeData: EnvelopeDataV27,
  randomParamData: RandomParamDataV27,
  value: number,
  type: number
}

export type EnvelopeDataV27 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV27>,
  offsetType: number
}

export type EnvelopePointDataV27 = {
  offset: number,
  value: number
}

export type RandomParamDataV27 = {
  time: RangeDataV27,
  value: RangeDataV27
}

export type RangeDataV27 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV27 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  highPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number,
  minAudible: number,
  maxAudibleLQ: number,
  maxAudibleHG: number
}

export type MaterialDataV27 = {
  name: BigInt,
  flags: number,
  absorptionLF: number,
  absorptionMF: number,
  absorptionHF: number,
  occlusion: number
}

export type MusicConditionDataV27 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MusicPlaylistDataV27 = {
  category: BigInt,
  name: BigInt,
  primaryPlaylistId: BigInt,
  secondaryPlaylistId: BigInt,
  fileName: Array<FileNameDataV27>,
  fadeInTime: number,
  fadeOutTime: number,
  flags: number,
  initialSilence: RangeDataV27,
  intervalSilence: RangeDataV27,
  maxPlayLength: RangeDataV27,
  volume: DynamicParamDataV27,
  fileIterateMode: number
}

export type FileNameDataV27 = {
  condition: BigInt,
  language: BigInt,
  volume: number,
  weight: number,
  fileName: string,
  audioType: number,
  noteBase: number,
  noteMin: number,
  noteMax: number
}

export type PropertyDataV27 = {
  name: BigInt,
  tokenValue: BigInt,
  floatValue: number
}

export type ReverbDataV27 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type ScriptRefDataV27 = {
  name: BigInt,
  fileName: string
}

export type SnapshotDataV27 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV27>,
  category: Array<CategoryDynamicDataV27>,
  priority: number
}

export type HandlerDataV27 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV27 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV27>,
  attenuation: AttenuationDataV27,
  fileName: Array<FileNameDataV27>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV27,
  pan: DynamicParamDataV27,
  pitch: DynamicParamDataV27,
  pitchMS: DynamicParamDataV27,
  volume: DynamicParamDataV27,
  volumeMS: DynamicParamDataV27,
  initialDelay: RangeDataV27,
  playLength: RangeDataV27,
  positionOffsetAngle: RangeDataV27,
  positionRange: RangeDataV27,
  repeatCount: RangeDataV27,
  repeatTime: RangeDataV27,
  startTimeOffset: RangeDataV27,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type TriggerKeyDataV27 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV27>
}

export type TriggerMarkerDataV27 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV28 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV28,
  handler: Array<HandlerDataV28>,
  metaSound: Array<MetaSoundDataV28>,
  scriptRef: Array<ScriptRefDataV28>,
  triggerKey: Array<TriggerKeyDataV28>,
  property: Array<PropertyDataV28>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number,
  musicMutePriority: number,
  soundPoolMode: number
}

export type AudioSettingsDataV28 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  echoLevel: number,
  focusTransition: number,
  memoryPool: number,
  reverbLevel: number,
  minChannelsLQ: number,
  maxChannelsLQ: number,
  buss: Array<BussDataV28>,
  category: Array<CategoryDataV28>,
  material: Array<MaterialDataV28>,
  musicCondition: Array<MusicConditionDataV28>,
  musicPlaylist: Array<MusicPlaylistDataV28>,
  property: Array<PropertyDataV28>,
  reverb: Array<ReverbDataV28>,
  scriptRef: Array<ScriptRefDataV28>,
  snapshot: Array<SnapshotDataV28>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string
}

export type BussDataV28 = {
  name: BigInt,
  output: BigInt,
  flags: number,
  normalizeFadeTime: number,
  normalizeThreshold: number,
  normalizeMaxAmp: number,
  compressorThreshold: number,
  compressorAttack: number,
  compressorRelease: number,
  compressorGainMakeup: number,
  dynamicData: BussDynamicDataV28
}

export type BussDynamicDataV28 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV28>
}

export type DspDataV28 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV28 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV28,
  dynamicData: CategoryDynamicDataV28,
  focusReserve: number,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number,
  priority: number
}

export type AttenuationDataV28 = {
  doppler: number,
  lowPass: DynamicParamDataV28,
  highPass: DynamicParamDataV28,
  pan3D: DynamicParamDataV28,
  reverb: DynamicParamDataV28,
  spread3D: DynamicParamDataV28,
  volumeA: DynamicParamDataV28,
  volumeB: DynamicParamDataV28,
  lfe: DynamicParamDataV28
}

export type DynamicParamDataV28 = {
  envelopeData: EnvelopeDataV28,
  randomParamData: RandomParamDataV28,
  value: number,
  type: number
}

export type EnvelopeDataV28 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV28>,
  offsetType: number
}

export type EnvelopePointDataV28 = {
  offset: number,
  value: number
}

export type RandomParamDataV28 = {
  time: RangeDataV28,
  value: RangeDataV28
}

export type RangeDataV28 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV28 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  highPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number,
  minAudible: number,
  maxAudibleLQ: number,
  maxAudibleHG: number
}

export type MaterialDataV28 = {
  name: BigInt,
  flags: number,
  absorptionLF: number,
  absorptionMF: number,
  absorptionHF: number,
  occlusion: number
}

export type MusicConditionDataV28 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MusicPlaylistDataV28 = {
  category: BigInt,
  name: BigInt,
  primaryPlaylistId: BigInt,
  secondaryPlaylistId: BigInt,
  fileName: Array<FileNameDataV28>,
  fadeInTime: number,
  fadeOutTime: number,
  flags: number,
  initialSilence: RangeDataV28,
  intervalSilence: RangeDataV28,
  maxPlayLength: RangeDataV28,
  volume: DynamicParamDataV28,
  fileIterateMode: number
}

export type FileNameDataV28 = {
  condition: BigInt,
  language: BigInt,
  volume: number,
  weight: number,
  fileName: string,
  audioType: number,
  noteBase: number,
  noteMin: number,
  noteMax: number
}

export type PropertyDataV28 = {
  name: BigInt,
  tokenValue: BigInt,
  floatValue: number
}

export type ReverbDataV28 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type ScriptRefDataV28 = {
  name: BigInt,
  fileName: string
}

export type SnapshotDataV28 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV28>,
  category: Array<CategoryDynamicDataV28>,
  priority: number
}

export type HandlerDataV28 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV28 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV28>,
  attenuation: AttenuationDataV28,
  fileName: Array<FileNameDataV28>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV28,
  pan: DynamicParamDataV28,
  pitch: DynamicParamDataV28,
  pitchMS: DynamicParamDataV28,
  volume: DynamicParamDataV28,
  volumeMS: DynamicParamDataV28,
  initialDelay: RangeDataV28,
  playLength: RangeDataV28,
  positionOffsetAngle: RangeDataV28,
  positionRange: RangeDataV28,
  repeatCount: RangeDataV28,
  repeatTime: RangeDataV28,
  replayDelay: RangeDataV28,
  startTimeOffset: RangeDataV28,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type TriggerKeyDataV28 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV28>
}

export type TriggerMarkerDataV28 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}

export type ScriptFileDataV29 = {
  musicCue: BigInt,
  reverbOverride: BigInt,
  snapshot: BigInt,
  audioSettings: AudioSettingsDataV29,
  handler: Array<HandlerDataV29>,
  metaSound: Array<MetaSoundDataV29>,
  scriptRef: Array<ScriptRefDataV29>,
  triggerKey: Array<TriggerKeyDataV29>,
  property: Array<PropertyDataV29>,
  flags: number,
  soundPoolCount: number,
  fadeInTime: number,
  soundPoolDelay: number,
  volume: number,
  musicCuePriority: number,
  musicMutePriority: number,
  soundPoolMode: number
}

export type AudioSettingsDataV29 = {
  defaultSnapshot: BigInt,
  effectsBuss: BigInt,
  distanceScale: number,
  dopplerScale: number,
  echoLevel: number,
  focusTransition: number,
  memoryPool: number,
  reverbLevel: number,
  minChannelsLQ: number,
  maxChannelsLQ: number,
  buss: Array<BussDataV29>,
  category: Array<CategoryDataV29>,
  material: Array<MaterialDataV29>,
  musicCondition: Array<MusicConditionDataV29>,
  musicPlaylist: Array<MusicPlaylistDataV29>,
  property: Array<PropertyDataV29>,
  reverb: Array<ReverbDataV29>,
  scriptRef: Array<ScriptRefDataV29>,
  snapshot: Array<SnapshotDataV29>,
  bankIndexFileName: string,
  bankScriptFileName: string,
  musicScriptFileName: string,
  musicExternal: Array<MusicExternalDataV29>
}

export type BussDataV29 = {
  name: BigInt,
  output: BigInt,
  flags: number,
  normalizeFadeTime: number,
  normalizeThreshold: number,
  normalizeMaxAmp: number,
  compressorThreshold: number,
  compressorAttack: number,
  compressorRelease: number,
  compressorGainMakeup: number,
  dynamicData: BussDynamicDataV29
}

export type BussDynamicDataV29 = {
  name: BigInt,
  flags: number,
  volume: number,
  dsp: Array<DspDataV29>
}

export type DspDataV29 = {
  type: number,
  flags: number,
  property: Array<number>
}

export type CategoryDataV29 = {
  name: BigInt,
  volumeGroupName: BigInt,
  outputBussName: BigInt,
  attenuation: AttenuationDataV29,
  dynamicData: CategoryDynamicDataV29,
  focusReserve: number,
  muteFadeTime: number,
  flags: number,
  maxAudible: number,
  maxAudibleBehavior: number,
  priority: number
}

export type AttenuationDataV29 = {
  doppler: number,
  lowPass: DynamicParamDataV29,
  highPass: DynamicParamDataV29,
  pan3D: DynamicParamDataV29,
  reverb: DynamicParamDataV29,
  spread3D: DynamicParamDataV29,
  volumeA: DynamicParamDataV29,
  volumeB: DynamicParamDataV29,
  lfe: DynamicParamDataV29
}

export type DynamicParamDataV29 = {
  envelopeData: EnvelopeDataV29,
  randomParamData: RandomParamDataV29,
  value: number,
  type: number
}

export type EnvelopeDataV29 = {
  offsetParameter: BigInt,
  envelopePoint: Array<EnvelopePointDataV29>,
  offsetType: number
}

export type EnvelopePointDataV29 = {
  offset: number,
  value: number
}

export type RandomParamDataV29 = {
  time: RangeDataV29,
  value: RangeDataV29
}

export type RangeDataV29 = {
  max: number,
  min: number
}

export type CategoryDynamicDataV29 = {
  name: BigInt,
  volume: number,
  nonFocusGain: number,
  lowPass: number,
  highPass: number,
  reverbDirect: number,
  reverbRoom: number,
  flags: number,
  minAudible: number,
  maxAudibleLQ: number,
  maxAudibleHG: number
}

export type MaterialDataV29 = {
  name: BigInt,
  flags: number,
  absorptionLF: number,
  absorptionMF: number,
  absorptionHF: number,
  occlusion: number
}

export type MusicConditionDataV29 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MusicPlaylistDataV29 = {
  category: BigInt,
  name: BigInt,
  primaryPlaylistId: BigInt,
  secondaryPlaylistId: BigInt,
  fileName: Array<FileNameDataV29>,
  fadeInTime: number,
  fadeOutTime: number,
  flags: number,
  initialSilence: RangeDataV29,
  intervalSilence: RangeDataV29,
  maxPlayLength: RangeDataV29,
  volume: DynamicParamDataV29,
  fileIterateMode: number
}

export type FileNameDataV29 = {
  condition: BigInt,
  language: BigInt,
  volume: number,
  weight: number,
  fileName: string,
  audioType: number,
  noteBase: number,
  noteMin: number,
  noteMax: number
}

export type PropertyDataV29 = {
  name: BigInt,
  tokenValue: BigInt,
  floatValue: number
}

export type ReverbDataV29 = {
  name: BigInt,
  flags: number,
  room: number,
  roomHF: number,
  roomLF: number,
  decayTime: number,
  decayHFRatio: number,
  reflections: number,
  reflectionsDelay: number,
  reverb: number,
  reverbDelay: number,
  referenceHF: number,
  referenceLF: number,
  diffusion: number,
  density: number,
  echoDelay: number,
  echoDecayRatio: number,
  echoWetMix: number,
  echoDryMix: number
}

export type ScriptRefDataV29 = {
  name: BigInt,
  fileName: string
}

export type SnapshotDataV29 = {
  name: BigInt,
  blendInTime: number,
  blendOutTime: number,
  flags: number,
  buss: Array<BussDynamicDataV29>,
  category: Array<CategoryDynamicDataV29>,
  priority: number
}

export type MusicExternalDataV29 = {
  name: BigInt,
  externalPlaylist: string
}

export type HandlerDataV29 = {
  name: BigInt,
  flags: number,
  byteCode: Array<number>
}

export type MetaSoundDataV29 = {
  category: BigInt,
  endCue: BigInt,
  name: BigInt,
  offsetBone: BigInt,
  playlistId: BigInt,
  dsp: Array<DspDataV29>,
  attenuation: AttenuationDataV29,
  fileName: Array<FileNameDataV29>,
  channelFadeIn: number,
  channelFadeOut: number,
  endCueOffset: number,
  fadeInTime: number,
  fadeOutTime: number,
  positionOffset: Array<number>,
  channelMax: number,
  flags: number,
  loopCount: number,
  depth: DynamicParamDataV29,
  pan: DynamicParamDataV29,
  pitch: DynamicParamDataV29,
  pitchMS: DynamicParamDataV29,
  volume: DynamicParamDataV29,
  volumeMS: DynamicParamDataV29,
  initialDelay: RangeDataV29,
  playLength: RangeDataV29,
  positionOffsetAngle: RangeDataV29,
  positionRange: RangeDataV29,
  repeatCount: RangeDataV29,
  repeatTime: RangeDataV29,
  replayDelay: RangeDataV29,
  startTimeOffset: RangeDataV29,
  channelMode: number,
  channelPriority: number,
  fileIterateMode: number,
  loopMode: number,
  musicPriority: number,
  playbackMode: number,
  positionMode: number,
  repeatTimeFrom: number
}

export type TriggerKeyDataV29 = {
  name: BigInt,
  triggerMarker: Array<TriggerMarkerDataV29>
}

export type TriggerMarkerDataV29 = {
  cue: BigInt,
  end: BigInt,
  time: number,
  type: number
}