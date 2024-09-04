export namespace V0_N {
  export type PackMapNavMeshV0 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapNavMeshChunkV0>
  }

  export type PackMapNavMeshChunkV0 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    queryMediatorMoppData: Uint8Array
  }

}

export type V0 = V0_N.PackMapNavMeshV0;

export namespace V1_N {
  export type PackMapNavMeshV1 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapNavMeshChunkV1>
  }

  export type PackMapNavMeshChunkV1 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    queryMediatorMoppData: Uint8Array
  }

}

export type V1 = V1_N.PackMapNavMeshV1;

export namespace V2_N {
  export type PackMapNavMeshV2 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapNavMeshChunkV2>,
    dynamicArray: Array<PackMapNavMeshMoverV2>
  }

  export type PackMapNavMeshChunkV2 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    queryMediatorMoppData: Uint8Array
  }

  export type PackMapNavMeshMoverV2 = {
    mapPropId: BigInt,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    mediatorData: Uint8Array
  }

}

export type V2 = V2_N.PackMapNavMeshV2;

export namespace V3_N {
  export type PackMapNavMeshV3 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapNavMeshChunkV3>,
    dynamicArray: Array<PackMapNavMeshMoverV3>
  }

  export type PackMapNavMeshChunkV3 = {
    chunkIndex: number,
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    queryMediatorMoppData: Uint8Array
  }

  export type PackMapNavMeshMoverV3 = {
    chunkIndex: number,
    mapPropId: BigInt,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    mediatorData: Uint8Array
  }

}

export type V3 = V3_N.PackMapNavMeshV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
