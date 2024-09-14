export namespace V0_N {
  export type ModelFileProperties = {
    fixedOffsetData: Array<ModelFixedOffsetData>,
    properties: Array<ModelPropertyData>
  }

  export type ModelFixedOffsetData = {
    name: bigint,
    parentBone: bigint,
    translation: Float32Array
  }

  export type ModelPropertyData = {
    id: bigint,
    type: number,
    mergeIndex: number,
    time: number,
    val: bigint,
    strVal: number
  }

}

export type V0 = V0_N.ModelFileProperties;

export type V0_U = V0;
