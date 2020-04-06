import { Uint8, DynArray, Uint32 } from "./types";

module.exports = [
  {
    chunkName: "watr",
    name: "PackMapWaterV0",
    version: 0,
    root: {
      waterFoamData: DynArray(Uint8),
      waterChunks: DynArray(Uint32)
    }
  }
]