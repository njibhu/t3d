export namespace V0_N {
  export type PackAnimConfigV0 = {
    aimIKConfigs: Array<PackAnimAimIKConfigV0>,
    chainGroups: Array<PackAnimIKChainGroupV0>
  }

  export type PackAnimAimIKConfigV0 = {
    name: BigInt,
    boneEye: BigInt,
    boneSight: BigInt,
    endEffector: BigInt,
    frustumHAngle: number,
    frustumVAngle: number,
    frustumLength: number,
    targetVelocityConstraint: number,
    bones: Array<PackAnimAimIKBoneV0>,
    targets: BigUint64Array,
    flags: number
  }

  export type PackAnimAimIKBoneV0 = {
    boneToken: BigInt,
    clampAngle: number,
    weight: number,
    smoothingWeight: number
  }

  export type PackAnimIKChainGroupV0 = {
    name: BigInt,
    chains: Array<PackAnimIKChainV0>
  }

  export type PackAnimIKChainV0 = {
    name: BigInt,
    smoothWeight: Float32Array,
    hyperExtensionStart: number,
    hyperExtensionScale: number,
    bones: BigUint64Array,
    targetRaycastInfo: PackAnimIKRaycastTargetV0,
    targetMode: number,
    chainType: number
  }

  export type PackAnimIKRaycastTargetV0 = {
    flags: number,
    direction: Float32Array
  }

}

export type V0 = V0_N.PackAnimConfigV0;

export type V0_U = V0;
