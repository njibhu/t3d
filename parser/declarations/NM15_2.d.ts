export namespace V0_N {
  export type PackMapNavMeshChunkV0 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

}

export type V0 = V0_N.PackMapNavMeshChunkV0;

export namespace V1_N {
  export type PackMapNavMeshChunkV1 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

}

export type V1 = V1_N.PackMapNavMeshChunkV1;

export namespace V2_N {
  export type PackMapNavMeshChunkV2 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

}

export type V2 = V2_N.PackMapNavMeshChunkV2;

export namespace V3_N {
  export type PackMapNavMeshChunkV3 = {
    chunkIndex: number,
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

}

export type V3 = V3_N.PackMapNavMeshChunkV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
