export namespace V0_N {
  export type CollideNavMeshChunk = {
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    queryMediatorMoppData: Uint8Array
  }

}

export type V0 = V0_N.CollideNavMeshChunk;

export type V0_U = V0;
