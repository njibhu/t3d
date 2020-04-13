import { Uint32, Filename, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "txtm",
    name: "TextPackManifest",
    version: 0,
    definitions: {
      TextPackLanguage: {
        filenames: DynArray(Filename)
      }
    },
    root: {
      stringsPerFile: Uint32,
      languages: DynArray("TextPackLanguage")
    }
  }
]