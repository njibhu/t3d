import { FixedArray, Float32, Uint32, Filename, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "main",
    name: "CollideNavMesh",
    version: 0,
    definitions: {
      CollideNavMeshChunkRef: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        chunkFilename: Filename
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      chunkDims: FixedArray(Uint32, 2),
      chunkRefArray: DynArray("CollideNavMeshChunkRef")
    }
  }
]