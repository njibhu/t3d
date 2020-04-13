import { FixedArray, Float32, Uint32, Uint8, DynArray, Uint64 } from "../src/types";

module.exports = [
  {
    chunkName: "nvms",
    name: "PackMapNavMeshV0",
    version: 0,
    definitions: {
      PackMapNavMeshChunkV0: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8),
        queryMediatorMoppData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkDims: FixedArray(Uint32, 2),
      chunkArray: DynArray("PackMapNavMeshChunkV0")
    }
  },
  {
    chunkName: "nvms",
    name: "PackMapNavMeshV1",
    version: 1,
    definitions: {
      PackMapNavMeshChunkV1: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8),
        queryMediatorMoppData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkDims: FixedArray(Uint32, 2),
      chunkArray: DynArray("PackMapNavMeshChunkV1")
    }
  },
  {
    chunkName: "nvms",
    name: "PackMapNavMeshV2",
    version: 2,
    definitions: {
      PackMapNavMeshChunkV2: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8),
        queryMediatorMoppData: DynArray(Uint8)
      },
      PackMapNavMeshMoverV2: {
        mapPropId: Uint64,
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8),
        mediatorData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkDims: FixedArray(Uint32, 2),
      chunkArray: DynArray("PackMapNavMeshChunkV2"),
      dynamicArray: DynArray("PackMapNavMeshMoverV2")
    }
  }
]