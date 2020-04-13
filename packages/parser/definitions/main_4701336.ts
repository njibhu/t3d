import { Uint8, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "main",
    name: "CollideNavMeshChunk",
    version: 0,
    root: {
      navMeshData: DynArray(Uint8),
      coarseGraphData: DynArray(Uint8),
      queryMediatorMoppData: DynArray(Uint8)
    }
  }
]