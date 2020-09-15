import { Uint64, Fileref, Float32, Uint32, DynArray } from "../src/types";

export const V0 = {
  chunkName: "anim",
  name: "PackEmoteAnimationsV0",
  version: 0,
  definitions: {
    PackEmoteAnimationV0: {
      token: Uint64,
      timings: DynArray("PackEmoteTimingV0")
    },
    PackEmoteTimingV0: {
      modelFileId: Fileref(),
      blendInTime: Float32,
      blendOutTime: Float32,
      duration: Uint32
    }
  },
  root: {
    animations: DynArray("PackEmoteAnimationV0")
  }
};

export const V1 = {
  chunkName: "anim",
  name: "PackEmoteAnimationsV1",
  version: 1,
  definitions: {
    PackEmoteAnimationV1: {
      token: Uint64,
      timings: DynArray("PackEmoteTimingV1")
    },
    PackEmoteTimingV1: {
      modelFileId: Fileref(),
      blendInTime: Float32,
      blendOutTime: Float32,
      duration: Uint32,
      loopDuration: Uint32
    }
  },
  root: {
    animations: DynArray("PackEmoteAnimationV1")
  }
};

export const V2 = {
  chunkName: "anim",
  name: "PackEmoteAnimationsV2",
  version: 2,
  definitions: {
    PackEmoteAnimationV2: {
      Token: Uint64,
      Timing: DynArray("PackEmoteTimingV2")
    },
    PackEmoteTimingV2: {
      ModelFile: Fileref(),
      BlendIn: Float32,
      BlendOut: Float32,
      IntroDuration: Uint32,
      LoopDuration: Uint32,
      OutroDuration: Uint32
    }
  },
  root: {
    Animation: DynArray("PackEmoteAnimationV2")
  }
};

export const latest = V2;
export const definitionArray = [V0, V1, V2];