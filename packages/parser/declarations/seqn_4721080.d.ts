

export type PackAnimSequencesV0 = {
  sequences: Array<PackAnimSequenceV0>
}

export type PackAnimSequenceV0 = {
  sequence: number,
  animationData: Array<PackAnimSequenceDataV0>
}

export type PackAnimSequenceDataV0 = {
  token: number,
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
  moveRotation: Array<number>,
  facingRotation: Array<number>,
  velocity: Array<number>
}

export type PackAnimSequenceTriggerV0 = {
  trigger: number,
  time: number,
  flags: number
}