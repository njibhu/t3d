import { Filename, RefString16, Uint64, Uint32, DynArray } from "../src/types";

const V0 = {
  chunkName: "pack",
  name: "MapPackage",
  version: 0,
  definitions: {
    MapVariant: {
      file: RefString16(),
      name: RefString16(),
      token: Uint64,
      flags: Uint32
    }
  },
  root: {
    baseFile: Filename(),
    variants: DynArray("MapVariant"),
    flags: Uint32
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);