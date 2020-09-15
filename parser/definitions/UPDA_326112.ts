import { Uint32, Uint8, DynArray, CString } from "../src/types";

export const V0 = {
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
};

export const latest = V0;
export const definitionArray = [V0];