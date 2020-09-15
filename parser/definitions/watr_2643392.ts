import { Uint8, DynArray, Uint32 } from "../src/types";

export const V0 = {
  chunkName: "watr",
  name: "PackMapWaterV0",
  version: 0,
  root: {
    waterFoamData: DynArray(Uint8),
    waterChunks: DynArray(Uint32)
  }
};

export const latest = V0;
export const definitionArray = [V0];