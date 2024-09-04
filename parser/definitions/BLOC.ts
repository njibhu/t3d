import { FixedArray, Uint32, Filename, DynArray } from "../src/types";

const V0 = {
  chunkName: "bloc",
  name: "PackMapBlock",
  version: 0,
  definitions: {
    PackMapBlockRecord: {
      filename: Filename()
    }
  },
  root: {
    blockDims: FixedArray(Uint32, 2),
    blockRecordArray: DynArray("PackMapBlockRecord")
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);