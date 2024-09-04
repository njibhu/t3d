export namespace V0_N {
  export type PackMapResourceMapV0 = {
    nodeArray: Array<PackMapResourceMapNodeV0>
  }

  export type PackMapResourceMapNodeV0 = {
    position: Float32Array,
    flags: number,
    itemArray: Array<PackMapResourceMapNodeItemV0>
  }

  export type PackMapResourceMapNodeItemV0 = {
    filename: number,
    type: number
  }

}

export type V0 = V0_N.PackMapResourceMapV0;

export namespace V1_N {
  export type PackMapResourceMapV1 = {
    nodeArray: Array<PackMapResourceMapNodeV1>
  }

  export type PackMapResourceMapNodeV1 = {
    position: Float32Array,
    flags: number,
    itemArray: Array<PackMapResourceMapNodeItemV1>
  }

  export type PackMapResourceMapNodeItemV1 = {
    filename: number,
    type: number,
    permutation: BigInt
  }

}

export type V1 = V1_N.PackMapResourceMapV1;

export type V0_U = V0 | V1;
export type V1_U = V1;
