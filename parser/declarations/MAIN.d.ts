export namespace V0_N {
  export type CollideNavMesh = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkDims: Uint32Array,
    chunkRefArray: Array<CollideNavMeshChunkRef>
  }

  export type CollideNavMeshChunkRef = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    chunkFilename: number
  }

}

export type V0 = V0_N.CollideNavMesh;

export type V0_U = V0;
