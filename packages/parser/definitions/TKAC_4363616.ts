import { Uint32, Uint64, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "TKAC",
    name: "KeyTableData",
    version: 0,
    definitions: {
      KeyEntry: {
        assetType: Uint32,
        assetId: Uint32,
        key: Uint64
      }
    },
    root: {
      keyEntryArr: DynArray("KeyEntry")
    }
  }
]