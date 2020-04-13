import { FixedArray, Float32, Uint32, Uint8 } from "../src/types";

module.exports = [
  {
    chunkName: "parm",
    name: "MapParam",
    version: 0,
    root: {
      rect: FixedArray(Float32, 4),
      flags: Uint32,
      guid: FixedArray(Uint8, 16)
    }
  }
]