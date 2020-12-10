export namespace V0_N {
  export type PackMapToolFsV0 = {
    filePtr: Array<PackMapToolFsFileV0>
  }

  export type PackMapToolFsFileV0 = {
    filename: string,
    time: BigInt,
    dataPtr: Array<number>
  }

}

export type V0 = V0_N.PackMapToolFsV0;

export type V0_U = V0;
