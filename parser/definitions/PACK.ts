import { Filename, String16, Uint64, Uint32, DynArray } from "../src/types";

export const V0 = {
  chunkName: "pack",
  name: "MapPackage",
  version: 0,
  definitions: {
    MapVariant: {
      file: String16(),
      name: String16(),
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
export const definitionArray = [V0];