export namespace V0_N {
  export type PackMapBlock = {
    blockDims: Array<number>,
    blockRecordArray: Array<PackMapBlockRecord>
  }

  export type PackMapBlockRecord = {
    filename: string
  }

}

export type V0 = V0_N.PackMapBlock;

export type V0_U = V0;
