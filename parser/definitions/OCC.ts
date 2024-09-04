import { Uint32, FixedArray, DynArray, Float32, RefString16 } from "../src/types";

const V0 = {
  chunkName: "occ",
  name: "MapOcclusions",
  version: 0,
  definitions: {
    MapOcclusion: {
      token: Uint32,
      flags: Uint32,
      vertices: DynArray(FixedArray(Float32, 3)),
      name: RefString16()
    }
  },
  root: {
    Occlusions: DynArray("MapOcclusion")
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);