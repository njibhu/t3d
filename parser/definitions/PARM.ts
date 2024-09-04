import { FixedArray, Float32, Uint32, Uint8 } from "../src/types";

const V0 = {
  chunkName: "parm",
  name: "MapParam",
  version: 0,
  root: {
    rect: FixedArray(Float32, 4),
    flags: Uint32,
    guid: FixedArray(Uint8, 16)
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);