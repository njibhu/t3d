import { FixedArray, Uint32, Uint8, DynArray, Float32 } from "../src/types";

const V0 = {
  chunkName: "shad",
  name: "PackMapShadowV0",
  version: 0,
  definitions: {
    PackMapShadowTileV0: {
      compressionMode: Uint32,
      bytes: DynArray(Uint8)
    }
  },
  root: {
    shadowDims: FixedArray(Uint32, 2),
    tileDims: FixedArray(Uint32, 2),
    tiles: DynArray("PackMapShadowTileV0"),
    worldToShadow: FixedArray(Float32, 16),
    s: FixedArray(Float32, 2),
    t: FixedArray(Float32, 2),
    u: FixedArray(Float32, 2)
  }
};

const V1 = {
  chunkName: "shad",
  name: "PackMapShadowV1",
  version: 1,
  definitions: {
    PackMapShadowTileV1: {
      compressionMode: Uint32,
      bytes: DynArray(Uint8)
    }
  },
  root: {
    shadowDims: FixedArray(Uint32, 2),
    tileDims: FixedArray(Uint32, 2),
    tiles: DynArray("PackMapShadowTileV1"),
    worldToShadow: FixedArray(Float32, 16),
    s: FixedArray(Float32, 2),
    t: FixedArray(Float32, 2),
    u: FixedArray(Float32, 2),
    shadowEye: FixedArray(Float32, 3),
    shadowDir: FixedArray(Float32, 3),
    shadowUp: FixedArray(Float32, 3)
  }
};

export const latest = V1;
export const definitions = { V0, V1 };
export const definitionArray = Object.values(definitions);