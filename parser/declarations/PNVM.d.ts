export namespace V0_N {
  export type PackMapPhysicsNavMeshV0 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapPhysicsNavMeshChunkV0>
  }

  export type PackMapPhysicsNavMeshChunkV0 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    mediatorMoppData: Array<number>
  }

}

export type V0 = V0_N.PackMapPhysicsNavMeshV0;

export namespace V1_N {
  export type PackMapPhysicsNavMeshV1 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkArray: Array<PackMapPhysicsNavMeshChunkV1>
  }

  export type PackMapPhysicsNavMeshChunkV1 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    mediatorMoppData: Array<number>,
    coarseGraphData: Array<number>
  }

}

export type V1 = V1_N.PackMapPhysicsNavMeshV1;

export namespace V2_N {
  export type PackMapPhysicsNavMeshV2 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    erosionRadius: number,
    chunkArray: Array<PackMapPhysicsNavMeshChunkV2>
  }

  export type PackMapPhysicsNavMeshChunkV2 = {
    navMeshData: Array<number>,
    mediatorMoppData: Array<number>,
    coarseGraphData: Array<number>
  }

}

export type V2 = V2_N.PackMapPhysicsNavMeshV2;

export type V0_U = V0 | V1 | V2;
export type V1_U = V1 | V2;
export type V2_U = V2;
