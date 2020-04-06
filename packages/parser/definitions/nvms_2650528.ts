import { FixedArray, Float32, Uint8, DynArray } from "./types";

module.exports = [
  {
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
  },
  {
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
  },
  {
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
  }
]