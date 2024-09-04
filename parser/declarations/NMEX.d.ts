export namespace V0_N {
  export type PackMapNavMeshExternalV0 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapNavMeshChunkExternalV0>
  }

  export type PackMapNavMeshChunkExternalV0 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    filename: number
  }

}

export type V0 = V0_N.PackMapNavMeshExternalV0;

export namespace V1_N {
  export type PackMapNavMeshExternalV1 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapNavMeshChunkExternalV1>
  }

  export type PackMapNavMeshChunkExternalV1 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    filename: number
  }

}

export type V1 = V1_N.PackMapNavMeshExternalV1;

export namespace V2_N {
  export type PackMapNavMeshExternalV2 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapNavMeshChunkExternalV2>,
    dynamicArray: Array<PackMapNavMeshMoverV2>
  }

  export type PackMapNavMeshChunkExternalV2 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    filename: number
  }

  export type PackMapNavMeshMoverV2 = {
    mapPropId: BigInt,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    mediatorData: Uint8Array
  }

}

export type V2 = V2_N.PackMapNavMeshExternalV2;

export namespace V3_N {
  export type PackMapNavMeshExternalV3 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapNavMeshChunkExternalV3>,
    dynamicArray: Array<PackMapNavMeshMoverV3>
  }

  export type PackMapNavMeshChunkExternalV3 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    filename: number
  }

  export type PackMapNavMeshMoverV3 = {
    chunkIndex: number,
    mapPropId: BigInt,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    mediatorData: Uint8Array
  }

}

export type V3 = V3_N.PackMapNavMeshExternalV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
