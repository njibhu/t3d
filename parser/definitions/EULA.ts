import { Uint8, RefString16, DynArray } from "../src/types";

const V0 = {
  chunkName: "eula",
  name: "PackEulaV0",
  version: 0,
  definitions: {
    PackEulaLanguageV0: {
      Language: Uint8,
      Text: RefString16()
    }
  },
  root: {
    Language: DynArray("PackEulaLanguageV0"),
    Version: Uint8
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);