import { Uint64, DynArray } from "../src/types";

const V0 = {
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
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);