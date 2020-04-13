import { Uint32, Uint8, DynArray, CString } from "../src/types";

module.exports = [
  {
    chunkName: "UPDB",
    name: "AmatXbxUPDBinfo",
    version: 0,
    definitions: {
      AmatXbxUPDBentry: {
        originalSize: Uint32,
        compressedData: DynArray(Uint8),
        originalName: CString
      }
    },
    root: {
      uPDBarray: DynArray("AmatXbxUPDBentry")
    }
  }
]