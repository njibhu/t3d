import { Filename, String16, Uint64, Uint32, DynArray } from "./types";

module.exports = [
  {
    chunkName: "pack",
    name: "MapPackage",
    version: 0,
    definitions: {
      MapVariant: {
        file: String16,
        name: String16,
        token: Uint64,
        flags: Uint32
      }
    },
    root: {
      baseFile: Filename,
      variants: DynArray("MapVariant"),
      flags: Uint32
    }
  }
]