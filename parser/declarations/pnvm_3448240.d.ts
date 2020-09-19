

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