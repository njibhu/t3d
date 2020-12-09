export namespace V0 {
  export type PackMapToolFsV0 = {
    filePtr: Array<PackMapToolFsFileV0>
  }

  export type PackMapToolFsFileV0 = {
    filename: string,
    time: BigInt,
    dataPtr: Array<number>
  }

}

