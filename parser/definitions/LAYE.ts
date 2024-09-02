import { Uint64, Uint32, DynArray, FixedArray } from "../src/types";

const V0 = {
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

const V1 = {
  chunkName: "laye",
  name: "PackMapLayers",
  version: 1,
  definitions: {
    PackMapLayerProp: {
      guid: Uint64,
      layerIds: DynArray(Uint32)
    },
    PackMapLayerLight: {
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
    lights: DynArray("PackMapLayerLight"),
    layers: DynArray("PackMapLayer")
  }
};

export const latest = V1;
export const definitions = { V0, V1 };
export const definitionArray = Object.values(definitions);