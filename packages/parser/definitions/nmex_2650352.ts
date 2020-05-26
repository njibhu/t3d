import { FixedArray, Float32, Uint32, Filename, DynArray, Uint64, Uint8 } from "../src/types";

module.exports = [
  {
    chunkName: "nmex",
    name: "PackMapNavMeshExternalV0",
    version: 0,
    definitions: {
      PackMapNavMeshChunkExternalV0: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        filename: Filename()
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkDims: FixedArray(Uint32, 2),
      chunkArray: DynArray("PackMapNavMeshChunkExternalV0")
    }
  },
  {
    chunkName: "nmex",
    name: "PackMapNavMeshExternalV1",
    version: 1,
    definitions: {
      PackMapNavMeshChunkExternalV1: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        filename: Filename()
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkDims: FixedArray(Uint32, 2),
      chunkArray: DynArray("PackMapNavMeshChunkExternalV1")
    }
  },
  {
    chunkName: "nmex",
    name: "PackMapNavMeshExternalV2",
    version: 2,
    definitions: {
      PackMapNavMeshChunkExternalV2: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        filename: Filename()
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
      chunkArray: DynArray("PackMapNavMeshChunkExternalV2"),
      dynamicArray: DynArray("PackMapNavMeshMoverV2")
    }
  }
]