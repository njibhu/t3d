export namespace V0_N {
  export type ModelFileProperties = {
    fixedOffsetData: Array<ModelFixedOffsetData>,
    properties: Array<ModelPropertyData>
  }

  export type ModelFixedOffsetData = {
    name: BigInt,
    parentBone: BigInt,
    translation: Float32Array
  }

  export type ModelPropertyData = {
    id: BigInt,
    type: number,
    mergeIndex: number,
    time: number,
    val: BigInt,
    strVal: number
  }

}

export type V0 = V0_N.ModelFileProperties;

export type V0_U = V0;
