export namespace V0 {
  export type ModelFileRootMotionV0 = {
    rootMotions: Array<ModelRootMotionV0>
  }

  export type ModelRootMotionV0 = {
    sequence: BigInt,
    keys: Array<number>,
    values: Array<Array<number>>
  }

}

export namespace V1 {
  export type ModelFileRootMotionV1 = {
    rootMotions: Array<ModelRootMotionV1>
  }

  export type ModelRootMotionV1 = {
    sequence: BigInt,
    keys: Array<number>,
    posValues: Array<Array<number>>,
    quatValues: Array<Array<number>>
  }

}

