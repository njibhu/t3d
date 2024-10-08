import { Uint32, Uint8, DynArray } from "../src/types";

const V0 = {
  chunkName: "octm",
  name: "MapOcclusionTome",
  version: 0,
  root: {
    enableTomeQueries: Uint32,
    tome: DynArray(Uint8),
    propIDMap: DynArray(Uint8),
    reserved: DynArray(Uint8)
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);