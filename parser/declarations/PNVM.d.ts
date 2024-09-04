export namespace V0_N {
  export type PackMapPhysicsNavMeshV0 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapPhysicsNavMeshChunkV0>
  }

  export type PackMapPhysicsNavMeshChunkV0 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    navMeshData: Uint8Array,
    mediatorMoppData: Uint8Array
  }

}

export type V0 = V0_N.PackMapPhysicsNavMeshV0;

export namespace V1_N {
  export type PackMapPhysicsNavMeshV1 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkArray: Array<PackMapPhysicsNavMeshChunkV1>
  }

  export type PackMapPhysicsNavMeshChunkV1 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    navMeshData: Uint8Array,
    mediatorMoppData: Uint8Array,
    coarseGraphData: Uint8Array
  }

}

export type V1 = V1_N.PackMapPhysicsNavMeshV1;

export namespace V2_N {
  export type PackMapPhysicsNavMeshV2 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    erosionRadius: number,
    chunkArray: Array<PackMapPhysicsNavMeshChunkV2>
  }

  export type PackMapPhysicsNavMeshChunkV2 = {
    navMeshData: Uint8Array,
    mediatorMoppData: Uint8Array,
    coarseGraphData: Uint8Array
  }

}

export type V2 = V2_N.PackMapPhysicsNavMeshV2;

export type V0_U = V0 | V1 | V2;
export type V1_U = V1 | V2;
export type V2_U = V2;
