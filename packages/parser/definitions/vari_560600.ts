import { Uint32, DynArray } from "../src/types";

module.exports = [
  {
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
  }
]