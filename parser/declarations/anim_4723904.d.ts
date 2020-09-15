

export type PackEmoteAnimationsV0 = {
  animations: Array<PackEmoteAnimationV0>
}

export type PackEmoteAnimationV0 = {
  token: number,
  timings: Array<PackEmoteTimingV0>
}

export type PackEmoteTimingV0 = {
  modelFileId: string,
  blendInTime: number,
  blendOutTime: number,
  duration: number
}

export type PackEmoteAnimationsV1 = {
  animations: Array<PackEmoteAnimationV1>
}

export type PackEmoteAnimationV1 = {
  token: number,
  timings: Array<PackEmoteTimingV1>
}

export type PackEmoteTimingV1 = {
  modelFileId: string,
  blendInTime: number,
  blendOutTime: number,
  duration: number,
  loopDuration: number
}

export type PackEmoteAnimationsV2 = {
  Animation: Array<PackEmoteAnimationV2>
}

export type PackEmoteAnimationV2 = {
  Token: number,
  Timing: Array<PackEmoteTimingV2>
}

export type PackEmoteTimingV2 = {
  ModelFile: string,
  BlendIn: number,
  BlendOut: number,
  IntroDuration: number,
  LoopDuration: number,
  OutroDuration: number
}