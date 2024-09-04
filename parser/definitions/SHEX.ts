import { Filename, FixedArray, Uint32 } from "../src/types";

const V1 = {
  chunkName: "shex",
  name: "PackMapShadowExtV1",
  version: 1,
  root: {
    filename: Filename(),
    shadowDims: FixedArray(Uint32, 2)
  }
};

export const latest = V1;
export const definitions = { V1 };
export const definitionArray = Object.values(definitions);