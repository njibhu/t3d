export namespace V0 {
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

export namespace V1 {
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

export namespace V2 {
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

export namespace V3 {
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

