

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
  token: number,
  actionBlock: PackAnimMachineActionBlockV0
}

export type PackAnimMachineTransitionV0 = {
  name: string,
  targetStateName: string,
  actionBlock: PackAnimMachineActionBlockV0,
  variants: Array<PackAnimMachineTransitionVariantV0>
}

export type PackAnimMachineTransitionVariantV0 = {
  token: number,
  actionBlock: PackAnimMachineActionBlockV0
}

export type PackAnimMachineStateVariantV0 = {
  token: number,
  actionBlock: PackAnimMachineActionBlockV0,
  actionVariantBlock: PackAnimMachineActionVariantBlockV0,
  transitions: Array<PackAnimMachineTransitionV0>
}

export type PackAnimModelV0 = {
  modelFileId: string,
  modelFileRaw: string,
  machineIndex: number
}