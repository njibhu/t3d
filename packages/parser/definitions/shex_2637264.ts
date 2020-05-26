import { Filename, FixedArray, Uint32 } from "../src/types";

module.exports = [
  {
    chunkName: "shex",
    name: "PackMapShadowExtV1",
    version: 1,
    root: {
      filename: Filename(),
      shadowDims: FixedArray(Uint32, 2)
    }
  }
]