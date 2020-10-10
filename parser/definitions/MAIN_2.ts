import { Uint8, DynArray } from "../src/types";

export const V0 = {
  chunkName: "main",
  name: "CollideNavMeshChunk",
  version: 0,
  root: {
    navMeshData: DynArray(Uint8),
    coarseGraphData: DynArray(Uint8),
    queryMediatorMoppData: DynArray(Uint8)
  }
};

export const latest = V0;
export const definitionArray = [V0];