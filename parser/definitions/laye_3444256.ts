import { Uint64, Uint32, DynArray, FixedArray } from "../src/types";

export const V0 = {
  chunkName: "laye",
  name: "PackMapLayers",
  version: 0,
  definitions: {
    PackMapLayerProp: {
      guid: Uint64,
      layerIds: DynArray(Uint32)
    },
    PackMapLayer: {
      layerId: Uint32,
      metaData: DynArray(FixedArray(Uint32, 4))
    }
  },
  root: {
    props: DynArray("PackMapLayerProp"),
    layers: DynArray("PackMapLayer")
  }
};

export const latest = V0;
export const definitionArray = [V0];