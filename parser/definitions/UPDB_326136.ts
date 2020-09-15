import { Uint32, Uint8, DynArray, CString } from "../src/types";

export const V0 = {
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
};

export const latest = V0;
export const definitionArray = [V0];