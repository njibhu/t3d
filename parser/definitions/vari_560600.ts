import { Uint32, DynArray } from "../src/types";

export const V0 = {
  chunkName: "vari",
  name: "TextPackVariants",
  version: 0,
  definitions: {
    TextPackVariant: {
      textId: Uint32,
      variantTextIds: DynArray(Uint32)
    }
  },
  root: {
    variants: DynArray("TextPackVariant")
  }
};

export const latest = V0;
export const definitionArray = [V0];