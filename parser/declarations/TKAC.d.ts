export namespace V0 {
  export type KeyTableData = {
    keyEntryArr: Array<KeyEntry>
  }

  export type KeyEntry = {
    assetType: number,
    assetId: number,
    key: BigInt
  }

}

