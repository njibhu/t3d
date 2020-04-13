import { FixedArray, Float32, Uint32, Uint8, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "pnvm",
    name: "PackMapPhysicsNavMeshV0",
    version: 0,
    definitions: {
      PackMapPhysicsNavMeshChunkV0: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        navMeshData: DynArray(Uint8),
        mediatorMoppData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkDims: FixedArray(Uint32, 2),
      chunkArray: DynArray("PackMapPhysicsNavMeshChunkV0")
    }
  },
  {
    chunkName: "pnvm",
    name: "PackMapPhysicsNavMeshV1",
    version: 1,
    definitions: {
      PackMapPhysicsNavMeshChunkV1: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        navMeshData: DynArray(Uint8),
        mediatorMoppData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkDims: FixedArray(Uint32, 2),
      chunkArray: DynArray("PackMapPhysicsNavMeshChunkV1")
    }
  },
  {
    chunkName: "pnvm",
    name: "PackMapPhysicsNavMeshV2",
    version: 2,
    definitions: {
      PackMapPhysicsNavMeshChunkV2: {
        navMeshData: DynArray(Uint8),
        mediatorMoppData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkDims: FixedArray(Uint32, 2),
      erosionRadius: Float32,
      chunkArray: DynArray("PackMapPhysicsNavMeshChunkV2")
    }
  }
]