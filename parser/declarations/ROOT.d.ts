export namespace V0_N {
  export type ModelFileRootMotionV0 = {
    rootMotions: Array<ModelRootMotionV0>
  }

  export type ModelRootMotionV0 = {
    sequence: number,
    keys: Array<number>,
    values: Array<Array<number>>
  }

}

export type V0 = V0_N.ModelFileRootMotionV0;

export namespace V1_N {
  export type ModelFileRootMotionV1 = {
    rootMotions: Array<ModelRootMotionV1>
  }

  export type ModelRootMotionV1 = {
    sequence: number,
    keys: Array<number>,
    posValues: Array<Array<number>>,
    quatValues: Array<Array<number>>
  }

}

export type V1 = V1_N.ModelFileRootMotionV1;

export type V0_U = V0 | V1;
export type V1_U = V1;
