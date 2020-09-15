import { Fileref, Uint64, Uint8, DynArray } from "../src/types";

export const V0 = {
  chunkName: "tlfs",
  name: "PackMapToolFsV0",
  version: 0,
  definitions: {
    PackMapToolFsFileV0: {
      filename: Fileref(),
      time: Uint64,
      dataPtr: DynArray(Uint8)
    }
  },
  root: {
    filePtr: DynArray("PackMapToolFsFileV0")
  }
};

export const latest = V0;
export const definitionArray = [V0];