export namespace V0_N {
  export type KeyTableData = {
    keyEntryArr: Array<KeyEntry>
  }

  export type KeyEntry = {
    assetType: number,
    assetId: number,
    key: bigint
  }

}

export type V0 = V0_N.KeyTableData;

export type V0_U = V0;
