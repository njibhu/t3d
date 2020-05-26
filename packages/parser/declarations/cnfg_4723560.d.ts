

export type PackAnimConfigV0 = {
  aimIKConfigs: Array<PackAnimAimIKConfigV0>,
  chainGroups: Array<PackAnimIKChainGroupV0>
}

export type PackAnimAimIKConfigV0 = {
  name: number,
  boneEye: number,
  boneSight: number,
  endEffector: number,
  frustumHAngle: number,
  frustumVAngle: number,
  frustumLength: number,
  targetVelocityConstraint: number,
  bones: Array<PackAnimAimIKBoneV0>,
  targets: Array<number>,
  flags: number
}

export type PackAnimAimIKBoneV0 = {
  boneToken: number,
  clampAngle: number,
  weight: number,
  smoothingWeight: number
}

export type PackAnimIKChainGroupV0 = {
  name: number,
  chains: Array<PackAnimIKChainV0>
}

export type PackAnimIKChainV0 = {
  name: number,
  smoothWeight: Array<number>,
  hyperExtensionStart: number,
  hyperExtensionScale: number,
  bones: Array<number>,
  targetRaycastInfo: PackAnimIKRaycastTargetV0,
  targetMode: number,
  chainType: number
}

export type PackAnimIKRaycastTargetV0 = {
  flags: number,
  direction: Array<number>
}