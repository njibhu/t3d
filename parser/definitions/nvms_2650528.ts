import { FixedArray, Float32, Uint8, DynArray } from "../src/types";

export const V0 = {
  chunkName: "nvms",
  name: "PackMapNavMeshChunkV0",
  version: 0,
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    navMeshData: DynArray(Uint8),
    coarseGraphData: DynArray(Uint8),
    queryMediatorMoppData: DynArray(Uint8)
  }
};

export const V1 = {
  chunkName: "nvms",
  name: "PackMapNavMeshChunkV1",
  version: 1,
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    navMeshData: DynArray(Uint8),
    coarseGraphData: DynArray(Uint8),
    queryMediatorMoppData: DynArray(Uint8)
  }
};

export const V2 = {
  chunkName: "nvms",
  name: "PackMapNavMeshChunkV2",
  version: 2,
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    navMeshData: DynArray(Uint8),
    coarseGraphData: DynArray(Uint8),
    queryMediatorMoppData: DynArray(Uint8)
  }
};

export const latest = V2;
export const definitionArray = [V0, V1, V2];