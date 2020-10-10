import { Uint16, Uint8, DynArray } from "../src/types";

export const V0 = {
  chunkName: "Main",
  name: "PackMapMetadata",
  version: 0,
  definitions: {
    PackMapMetadataMap: {
      mapId: Uint16,
      mapType: Uint8
    }
  },
  root: {
    maps: DynArray("PackMapMetadataMap")
  }
};

export const latest = V0;
export const definitionArray = [V0];