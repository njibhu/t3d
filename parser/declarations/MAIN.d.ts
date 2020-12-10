export namespace V0_N {
  export type CollideNavMesh = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkDims: Array<number>,
    chunkRefArray: Array<CollideNavMeshChunkRef>
  }

  export type CollideNavMeshChunkRef = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    chunkFilename: string
  }

}

export type V0 = V0_N.CollideNavMesh;

export type V0_U = V0;
