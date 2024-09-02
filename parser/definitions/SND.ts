import { Uint8, DynArray, Filename } from "../src/types";

const V0 = {
  chunkName: "snd",
  name: "MapLegacy",
  version: 0,
  root: {
    data: DynArray(Uint8),
    files: DynArray(Filename())
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);