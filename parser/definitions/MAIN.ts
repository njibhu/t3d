import { FixedArray, Float32, Uint32, Filename, DynArray } from "../src/types";

const V0 = {
  chunkName: "main",
  name: "CollideNavMesh",
  version: 0,
  definitions: {
    CollideNavMeshChunkRef: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkFilename: Filename()
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    chunkDims: FixedArray(Uint32, 2),
    chunkRefArray: DynArray("CollideNavMeshChunkRef")
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);