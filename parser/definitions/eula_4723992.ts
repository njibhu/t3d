import { Uint8, String16, DynArray } from "../src/types";

export const V0 = {
  chunkName: "eula",
  name: "PackEulaV0",
  version: 0,
  definitions: {
    PackEulaLanguageV0: {
      Language: Uint8,
      Text: String16()
    }
  },
  root: {
    Language: DynArray("PackEulaLanguageV0"),
    Version: Uint8
  }
};

export const latest = V0;
export const definitionArray = [V0];