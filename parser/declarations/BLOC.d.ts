export namespace V0 {
  export type PackMapBlock = {
    blockDims: Array<number>,
    blockRecordArray: Array<PackMapBlockRecord>
  }

  export type PackMapBlockRecord = {
    filename: string
  }

}

