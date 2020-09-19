import { Uint32, Filename, DynArray } from "../src/types";

export const V0 = {
  chunkName: "txtm",
  name: "TextPackManifest",
  version: 0,
  definitions: {
    TextPackLanguage: {
      filenames: DynArray(Filename())
    }
  },
  root: {
    stringsPerFile: Uint32,
    languages: DynArray("TextPackLanguage")
  }
};

export const latest = V0;
export const definitionArray = [V0];