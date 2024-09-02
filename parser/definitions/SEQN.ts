import { Uint64, Uint32, Float32, Uint16, Uint8, DynArray, Pointer, FixedArray } from "../src/types";

const V0 = {
  chunkName: "seqn",
  name: "PackAnimSequencesV0",
  version: 0,
  definitions: {
    PackAnimSequenceV0: {
      sequence: Uint64,
      animationData: DynArray("PackAnimSequenceDataV0")
    },
    PackAnimSequenceDataV0: {
      token: Uint64,
      flags: Uint32,
      blendInTime: Float32,
      blendOutTime: Float32,
      chargeStages: DynArray("PackAnimSequenceChargeStageV0"),
      steps: DynArray("PackAnimSequenceStepV0"),
      triggers: DynArray("PackAnimSequenceTriggerV0")
    },
    PackAnimSequenceChargeStageV0: {
      duration: Uint16,
      endingChargeLevel: Uint8
    },
    PackAnimSequenceStepV0: {
      type: Uint8,
      animationSpeed: Float32,
      flags: Uint32,
      action: Pointer("PackAnimSequenceStepActionV0"),
      move: Pointer("PackAnimSequenceStepMoveV0")
    },
    PackAnimSequenceStepActionV0: {
      duration: Uint32
    },
    PackAnimSequenceStepMoveV0: {
      duration: Uint32,
      moveRotation: FixedArray(Float32, 4),
      facingRotation: FixedArray(Float32, 4),
      velocity: FixedArray(Float32, 2)
    },
    PackAnimSequenceTriggerV0: {
      trigger: Uint8,
      time: Uint32,
      flags: Uint32
    }
  },
  root: {
    sequences: DynArray("PackAnimSequenceV0")
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);