export namespace V0_N {
  export type ModelFileProperties = {
    fixedOffsetData: Array<ModelFixedOffsetData>,
    properties: Array<ModelPropertyData>
  }

  export type ModelFixedOffsetData = {
    name: number,
    parentBone: number,
    translation: Array<number>
  }

  export type ModelPropertyData = {
    id: number,
    type: number,
    mergeIndex: number,
    time: number,
    val: number,
    strVal: string
  }

}

export type V0 = V0_N.ModelFileProperties;

export type V0_U = V0;
