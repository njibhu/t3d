export namespace V0 {
  export type PackMapNavMeshExternalV0 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapNavMeshChunkExternalV0>
  }

  export type PackMapNavMeshChunkExternalV0 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    filename: string
  }

}

export namespace V1 {
  export type PackMapNavMeshExternalV1 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapNavMeshChunkExternalV1>
  }

  export type PackMapNavMeshChunkExternalV1 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    filename: string
  }

}

export namespace V2 {
  export type PackMapNavMeshExternalV2 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapNavMeshChunkExternalV2>,
    dynamicArray: Array<PackMapNavMeshMoverV2>
  }

  export type PackMapNavMeshChunkExternalV2 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    filename: string
  }

  export type PackMapNavMeshMoverV2 = {
    mapPropId: BigInt,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    mediatorData: Array<number>
  }

}

export namespace V3 {
  export type PackMapNavMeshExternalV3 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapNavMeshChunkExternalV3>,
    dynamicArray: Array<PackMapNavMeshMoverV3>
  }

  export type PackMapNavMeshChunkExternalV3 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    filename: string
  }

  export type PackMapNavMeshMoverV3 = {
    chunkIndex: number,
    mapPropId: BigInt,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    mediatorData: Array<number>
  }

}

