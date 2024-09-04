export namespace V0_N {
  export type PackMapBlock = {
    blockDims: Uint32Array,
    blockRecordArray: Array<PackMapBlockRecord>
  }

  export type PackMapBlockRecord = {
    filename: number
  }

}

export type V0 = V0_N.PackMapBlock;

export type V0_U = V0;
