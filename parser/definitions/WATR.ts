import { Uint32, Float32, Uint64, FixedArray, DynArray, Uint8 } from "../src/types";

const V0 = {
  chunkName: "watr",
  name: "PackMapWaterV0",
  version: 0,
  root: {
    waterFoamData: DynArray(Uint8),
    waterChunks: DynArray(Uint32)
  }
};

const V1 = {
  chunkName: "watr",
  name: "PackMapWaterV1",
  version: 1,
  definitions: {
    PackMapWaterSurfaceV1: {
      guid: Uint64,
      waterSurfaceFlags: Uint32,
      waterSurfaceZ: Float32,
      vertices: DynArray(FixedArray(Float32, 2))
    }
  },
  root: {
    waterFlags: Uint32,
    waterPlaneZ: Float32,
    waterSurfaces: DynArray("PackMapWaterSurfaceV1")
  }
};

export const latest = V1;
export const definitions = { V0, V1 };
export const definitionArray = Object.values(definitions);