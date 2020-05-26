

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