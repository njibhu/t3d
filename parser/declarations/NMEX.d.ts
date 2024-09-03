export namespace V0_N {
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

export type V0 = V0_N.PackMapNavMeshExternalV0;

export namespace V1_N {
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

export type V1 = V1_N.PackMapNavMeshExternalV1;

export namespace V2_N {
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
    mapPropId: number,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    mediatorData: Array<number>
  }

}

export type V2 = V2_N.PackMapNavMeshExternalV2;

export namespace V3_N {
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
    mapPropId: number,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    mediatorData: Array<number>
  }

}

export type V3 = V3_N.PackMapNavMeshExternalV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
