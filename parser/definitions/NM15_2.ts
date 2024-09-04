import { Uint32, FixedArray, Float32, Uint8, DynArray } from "../src/types";

const V0 = {
  chunkName: "nm15",
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

const V1 = {
  chunkName: "nm15",
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

const V2 = {
  chunkName: "nm15",
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

const V3 = {
  chunkName: "nm15",
  name: "PackMapNavMeshChunkV3",
  version: 3,
  root: {
    chunkIndex: Uint32,
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    navMeshData: DynArray(Uint8),
    coarseGraphData: DynArray(Uint8),
    queryMediatorMoppData: DynArray(Uint8)
  }
};

export const latest = V3;
export const definitions = { V0, V1, V2, V3 };
export const definitionArray = Object.values(definitions);