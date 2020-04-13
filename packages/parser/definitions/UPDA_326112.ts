import { Uint32, Uint8, DynArray, CString } from "../src/types";

module.exports = [
  {
    chunkName: "UPDA",
    name: "AmatAppleUPDBinfo",
    version: 0,
    definitions: {
      AmatAppleUPDBentry: {
        originalSize: Uint32,
        compressedData: DynArray(Uint8),
        originalName: CString
      }
    },
    root: {
      uPDBarray: DynArray("AmatAppleUPDBentry")
    }
  }
]