import { Uint32, Uint64, DynArray } from "../src/types";

export const V0 = {
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
};

export const latest = V0;
export const definitionArray = [V0];