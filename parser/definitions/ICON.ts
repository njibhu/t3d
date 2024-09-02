import { Uint8, DynArray } from "../src/types";

const V0 = {
  chunkName: "ICON",
  name: "ModelFileIcon",
  version: 0,
  root: {
    jpgData: DynArray(Uint8)
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);