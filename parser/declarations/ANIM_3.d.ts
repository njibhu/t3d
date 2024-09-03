export namespace V0_N {
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

}

export type V0 = V0_N.PackEmoteAnimationsV0;

export namespace V1_N {
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

}

export type V1 = V1_N.PackEmoteAnimationsV1;

export namespace V2_N {
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

}

export type V2 = V2_N.PackEmoteAnimationsV2;

export namespace V3_N {
  export type PackEmoteAnimationsV3 = {
    Animation: Array<PackEmoteAnimationV3>
  }

  export type PackEmoteAnimationV3 = {
    Token: number,
    Timing: Array<PackEmoteTimingV3>
  }

  export type PackEmoteTimingV3 = {
    ModelFile: string,
    BlendIn: number,
    BlendOut: number,
    IntroDuration: number,
    LoopDuration: number,
    OutroDuration: number,
    StartOffset: number
  }

}

export type V3 = V3_N.PackEmoteAnimationsV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
