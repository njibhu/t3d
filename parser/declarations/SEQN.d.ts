export namespace V0_N {
  export type PackAnimSequencesV0 = {
    sequences: Array<PackAnimSequenceV0>
  }

  export type PackAnimSequenceV0 = {
    sequence: bigint,
    animationData: Array<PackAnimSequenceDataV0>
  }

  export type PackAnimSequenceDataV0 = {
    token: bigint,
    flags: number,
    blendInTime: number,
    blendOutTime: number,
    chargeStages: Array<PackAnimSequenceChargeStageV0>,
    steps: Array<PackAnimSequenceStepV0>,
    triggers: Array<PackAnimSequenceTriggerV0>
  }

  export type PackAnimSequenceChargeStageV0 = {
    duration: number,
    endingChargeLevel: number
  }

  export type PackAnimSequenceStepV0 = {
    type: number,
    animationSpeed: number,
    flags: number,
    action: PackAnimSequenceStepActionV0,
    move: PackAnimSequenceStepMoveV0
  }

  export type PackAnimSequenceStepActionV0 = {
    duration: number
  }

  export type PackAnimSequenceStepMoveV0 = {
    duration: number,
    moveRotation: Float32Array,
    facingRotation: Float32Array,
    velocity: Float32Array
  }

  export type PackAnimSequenceTriggerV0 = {
    trigger: number,
    time: number,
    flags: number
  }

}

export type V0 = V0_N.PackAnimSequencesV0;

export type V0_U = V0;
