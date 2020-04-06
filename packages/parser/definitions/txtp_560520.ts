import { Uint32, Uint64, DynArray } from "./types";

module.exports = [
  {
    chunkName: "txtp",
    name: "TextPackPasswords",
    version: 0,
    definitions: {
      TextPackPassword: {
        textId: Uint32,
        password: Uint64
      }
    },
    root: {
      stringCount: Uint32,
      passwords: DynArray("TextPackPassword")
    }
  }
]