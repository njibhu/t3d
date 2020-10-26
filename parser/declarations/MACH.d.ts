

export type PackAnimMachinesV0 = {
  machines: Array<PackAnimMachineV0>,
  models: Array<PackAnimModelV0>
}

export type PackAnimMachineV0 = {
  states: Array<PackAnimMachineStateV0>
}

export type PackAnimMachineStateV0 = {
  name: string,
  actionBlock: PackAnimMachineActionBlockV0,
  actionVariantBlock: PackAnimMachineActionVariantBlockV0,
  transitions: Array<PackAnimMachineTransitionV0>,
  variants: Array<PackAnimMachineStateVariantV0>
}

export type PackAnimMachineActionBlockV0 = {
  actions: Array<PackAnimMachineActionV0>
}

export type PackAnimMachineActionV0 = {}

export type PackAnimMachineActionVariantBlockV0 = {
  actionVariants: Array<PackAnimMachineActionVariantV0>
}

export type PackAnimMachineActionVariantV0 = {
  token: BigInt,
  actionBlock: PackAnimMachineActionBlockV0
}

export type PackAnimMachineTransitionV0 = {
  name: string,
  targetStateName: string,
  actionBlock: PackAnimMachineActionBlockV0,
  variants: Array<PackAnimMachineTransitionVariantV0>
}

export type PackAnimMachineTransitionVariantV0 = {
  token: BigInt,
  actionBlock: PackAnimMachineActionBlockV0
}

export type PackAnimMachineStateVariantV0 = {
  token: BigInt,
  actionBlock: PackAnimMachineActionBlockV0,
  actionVariantBlock: PackAnimMachineActionVariantBlockV0,
  transitions: Array<PackAnimMachineTransitionV0>
}

export type PackAnimModelV0 = {
  modelFileId: string,
  modelFileRaw: string,
  machineIndex: number
}

export type PackAnimMachinesV1 = {
  machines: Array<PackAnimMachineV1>,
  models: Array<PackAnimModelV1>
}

export type PackAnimMachineV1 = {
  states: Array<PackAnimMachineStateV1>
}

export type PackAnimMachineStateV1 = {
  name: string,
  actionBlock: PackAnimMachineActionBlockV1,
  actionVariantBlock: PackAnimMachineActionVariantBlockV1,
  transitions: Array<PackAnimMachineTransitionV1>,
  variants: Array<PackAnimMachineStateVariantV1>
}

export type PackAnimMachineActionBlockV1 = {
  actions: Array<PackAnimMachineActionV1>
}

export type PackAnimMachineActionV1 = {}

export type PackAnimMachineActionVariantBlockV1 = {
  actionVariants: Array<PackAnimMachineActionVariantV1>
}

export type PackAnimMachineActionVariantV1 = {
  token: BigInt,
  actionBlock: PackAnimMachineActionBlockV1
}

export type PackAnimMachineTransitionV1 = {
  name: string,
  targetStateName: string,
  actionBlock: PackAnimMachineActionBlockV1,
  variants: Array<PackAnimMachineTransitionVariantV1>
}

export type PackAnimMachineTransitionVariantV1 = {
  token: BigInt,
  actionBlock: PackAnimMachineActionBlockV1
}

export type PackAnimMachineStateVariantV1 = {
  token: BigInt,
  actionBlock: PackAnimMachineActionBlockV1,
  actionVariantBlock: PackAnimMachineActionVariantBlockV1,
  transitions: Array<PackAnimMachineTransitionV1>
}

export type PackAnimModelV1 = {
  modelFileId: string,
  modelFileRaw: string,
  machineIndex: number,
  listeners: Array<number>
}