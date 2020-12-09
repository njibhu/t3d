export namespace V0_N {
  export type PackMapNavMeshV0 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapNavMeshChunkV0>
  }

  export type PackMapNavMeshChunkV0 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

}

export type V0 = V0_N.PackMapNavMeshV0;

export namespace V1_N {
  export type PackMapNavMeshV1 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapNavMeshChunkV1>
  }

  export type PackMapNavMeshChunkV1 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

}

export type V1 = V1_N.PackMapNavMeshV1;

export namespace V2_N {
  export type PackMapNavMeshV2 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapNavMeshChunkV2>,
    dynamicArray: Array<PackMapNavMeshMoverV2>
  }

  export type PackMapNavMeshChunkV2 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

  export type PackMapNavMeshMoverV2 = {
    mapPropId: BigInt,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    mediatorData: Array<number>
  }

}

export type V2 = V2_N.PackMapNavMeshV2;

export namespace V3_N {
  export type PackMapNavMeshV3 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapNavMeshChunkV3>,
    dynamicArray: Array<PackMapNavMeshMoverV3>
  }

  export type PackMapNavMeshChunkV3 = {
    chunkIndex: number,
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

  export type PackMapNavMeshMoverV3 = {
    chunkIndex: number,
    mapPropId: BigInt,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    mediatorData: Array<number>
  }

}

export type V3 = V3_N.PackMapNavMeshV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
