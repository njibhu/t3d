import { Uint16, Uint8, DynArray } from "../src/types";

module.exports = [
  {
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
  }
]