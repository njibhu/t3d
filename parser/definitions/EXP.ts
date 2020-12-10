import { Uint32, Uint64, Filename, DynArray } from "../src/types";

export const V0 = {
  chunkName: "exp",
  name: "MapExpansionProperties",
  version: 0,
  definitions: {
    MapExpansionProperty: {
      type: Uint32,
      val: Uint64,
      strVal: Filename()
    }
  },
  root: {
    properties: DynArray("MapExpansionProperty")
  }
};

export const latest = V0;
export const definitionArray = [V0];