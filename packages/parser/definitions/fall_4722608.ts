import { Uint64, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "fall",
    name: "PackAnimFallbacksV0",
    version: 0,
    definitions: {
      PackAnimFallbackV0: {
        sourceAnim: Uint64,
        targetAnims: DynArray(Uint64)
      }
    },
    root: {
      fallbacks: DynArray("PackAnimFallbackV0")
    }
  }
]