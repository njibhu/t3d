export namespace V6_N {
  export type PackMapCollideV6 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    moppCodes: Array<PackMapCollideMoppCodeV6>,
    meshes: Array<PackMapCollideMeshV6>,
    geometries: Array<PackMapCollideGeometryV6>,
    propModels: Array<PackMapCollideModelPropV6>,
    zoneModels: Array<PackMapCollideModelZoneV6>
  }

  export type PackMapCollideMoppCodeV6 = {
    cookedData: Array<number>
  }

  export type PackMapCollideMeshV6 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    sizes: Array<PackMapCollideMeshSizeV6>
  }

  export type PackMapCollideMeshSizeV6 = {
    scale: number,
    moppCodeIndex: number
  }

  export type PackMapCollideGeometryV6 = {
    meshRefs: Array<PackMapCollideMeshRefV6>
  }

  export type PackMapCollideMeshRefV6 = {
    sequence: number,
    meshIndex: number
  }

  export type PackMapCollideModelPropV6 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV6 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

}

export type V6 = V6_N.PackMapCollideV6;

export namespace V7_N {
  export type PackMapCollideV7 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    moppCodes: Array<PackMapCollideMoppCodeV7>,
    meshes: Array<PackMapCollideMeshV7>,
    geometries: Array<PackMapCollideGeometryV7>,
    propModels: Array<PackMapCollideModelPropV7>,
    zoneModels: Array<PackMapCollideModelZoneV7>,
    aiBoundaryMin: Array<number>,
    aiBoundaryMax: Array<number>,
    aiChunkDims: Array<number>,
    aiChunks: Array<PackMapCollideAiChunkV7>
  }

  export type PackMapCollideMoppCodeV7 = {
    cookedData: Array<number>
  }

  export type PackMapCollideMeshV7 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    sizes: Array<PackMapCollideMeshSizeV7>
  }

  export type PackMapCollideMeshSizeV7 = {
    scale: number,
    moppCodeIndex: number
  }

  export type PackMapCollideGeometryV7 = {
    meshRefs: Array<PackMapCollideMeshRefV7>
  }

  export type PackMapCollideMeshRefV7 = {
    sequence: number,
    meshIndex: number
  }

  export type PackMapCollideModelPropV7 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV7 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV7 = {
    navMeshData: Array<number>,
    coarseGraphData: Array<number>
  }

}

export type V7 = V7_N.PackMapCollideV7;

export namespace V8_N {
  export type PackMapCollideV8 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    meshes: Array<PackMapCollideMeshV8>,
    geometries: Array<PackMapCollideGeometryV8>,
    propModels: Array<PackMapCollideModelPropV8>,
    zoneModels: Array<PackMapCollideModelZoneV8>,
    aiBoundaryMin: Array<number>,
    aiBoundaryMax: Array<number>,
    aiChunkDims: Array<number>,
    aiChunks: Array<PackMapCollideAiChunkV8>
  }

  export type PackMapCollideMeshV8 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppCodeScale: number,
    moppCodeData: Array<number>
  }

  export type PackMapCollideGeometryV8 = {
    meshRefs: Array<PackMapCollideMeshRefV8>
  }

  export type PackMapCollideMeshRefV8 = {
    sequence: number,
    meshIndex: number
  }

  export type PackMapCollideModelPropV8 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV8 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV8 = {
    navMeshData: Array<number>,
    coarseGraphData: Array<number>
  }

}

export type V8 = V8_N.PackMapCollideV8;

export namespace V9_N {
  export type PackMapCollideV9 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    meshes: Array<PackMapCollideMeshV9>,
    geometries: Array<PackMapCollideGeometryV9>,
    obsModels: Array<PackMapCollideModelObsV9>,
    propModels: Array<PackMapCollideModelPropV9>,
    zoneModels: Array<PackMapCollideModelZoneV9>,
    aiBoundaryMin: Array<number>,
    aiBoundaryMax: Array<number>,
    aiChunkDims: Array<number>,
    aiChunks: Array<PackMapCollideAiChunkV9>
  }

  export type PackMapCollideMeshV9 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppCodeScale: number,
    moppCodeData: Array<number>
  }

  export type PackMapCollideGeometryV9 = {
    meshRefs: Array<PackMapCollideMeshRefV9>
  }

  export type PackMapCollideMeshRefV9 = {
    sequence: number,
    meshIndex: number
  }

  export type PackMapCollideModelObsV9 = {
    geometryIndex: number
  }

  export type PackMapCollideModelPropV9 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV9 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV9 = {
    navMeshData: Array<number>,
    coarseGraphData: Array<number>
  }

}

export type V9 = V9_N.PackMapCollideV9;

export namespace V10_N {
  export type PackMapCollideV10 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    meshes: Array<PackMapCollideMeshV10>,
    geometries: Array<PackMapCollideGeometryV10>,
    obsModels: Array<PackMapCollideModelObsV10>,
    propModels: Array<PackMapCollideModelPropV10>,
    zoneModels: Array<PackMapCollideModelZoneV10>,
    aiBoundaryMin: Array<number>,
    aiBoundaryMax: Array<number>,
    aiChunkDims: Array<number>,
    aiChunks: Array<PackMapCollideAiChunkV10>
  }

  export type PackMapCollideMeshV10 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppCodeScale: number,
    moppCodeData: Array<number>
  }

  export type PackMapCollideGeometryV10 = {
    meshRefs: Array<PackMapCollideMeshRefV10>
  }

  export type PackMapCollideMeshRefV10 = {
    sequence: number,
    meshIndex: number
  }

  export type PackMapCollideModelObsV10 = {
    geometryIndex: number
  }

  export type PackMapCollideModelPropV10 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV10 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV10 = {
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

}

export type V10 = V10_N.PackMapCollideV10;

export namespace V11_N {
  export type PackMapCollideV11 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    meshes: Array<PackMapCollideMeshV11>,
    geometries: Array<PackMapCollideGeometryV11>,
    obsModels: Array<PackMapCollideModelObsV11>,
    propModels: Array<PackMapCollideModelPropV11>,
    zoneModels: Array<PackMapCollideModelZoneV11>,
    aiChunkDims: Array<number>,
    aiChunks: Array<PackMapCollideAiChunkV11>
  }

  export type PackMapCollideMeshV11 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppCodeScale: number,
    moppCodeData: Array<number>
  }

  export type PackMapCollideGeometryV11 = {
    quantizedExtents: number,
    meshRefs: Array<PackMapCollideMeshRefV11>
  }

  export type PackMapCollideMeshRefV11 = {
    sequence: number,
    meshIndex: number
  }

  export type PackMapCollideModelObsV11 = {
    translate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV11 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV11 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV11 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

}

export type V11 = V11_N.PackMapCollideV11;

export namespace V12_N {
  export type PackMapCollideV12 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    meshes: Array<PackMapCollideMeshV12>,
    geometries: Array<PackMapCollideGeometryV12>,
    obsModels: Array<PackMapCollideModelObsV12>,
    propModels: Array<PackMapCollideModelPropV12>,
    zoneModels: Array<PackMapCollideModelZoneV12>,
    aiChunkDims: Array<number>,
    aiChunks: Array<PackMapCollideAiChunkV12>
  }

  export type PackMapCollideMeshV12 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    surfaces: Array<number>,
    moppCodeScale: number,
    moppCodeData: Array<number>
  }

  export type PackMapCollideGeometryV12 = {
    quantizedExtents: number,
    meshRefs: Array<PackMapCollideMeshRefV12>
  }

  export type PackMapCollideMeshRefV12 = {
    sequence: number,
    meshIndex: number
  }

  export type PackMapCollideModelObsV12 = {
    translate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV12 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV12 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV12 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    navMeshData: Array<number>,
    coarseGraphData: Array<number>,
    queryMediatorMoppData: Array<number>
  }

}

export type V12 = V12_N.PackMapCollideV12;

export namespace V13_N {
  export type PackMapCollideV13 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    collisions: Array<PackMapCollideCollisionV13>,
    blockers: Array<PackMapCollideBlockerV13>,
    animations: Array<PackMapCollideAnimationV13>,
    geometries: Array<PackMapCollideGeometryV13>,
    obsModels: Array<PackMapCollideModelObsV13>,
    propModels: Array<PackMapCollideModelPropV13>,
    zoneModels: Array<PackMapCollideModelZoneV13>
  }

  export type PackMapCollideCollisionV13 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    surfaces: Array<number>,
    moppCodeData: Array<number>
  }

  export type PackMapCollideBlockerV13 = {
    vertices: Array<Array<number>>
  }

  export type PackMapCollideAnimationV13 = {
    sequence: number,
    collisionIndices: Array<number>,
    blockerIndices: Array<number>
  }

  export type PackMapCollideGeometryV13 = {
    quantizedExtents: number,
    animations: Array<number>
  }

  export type PackMapCollideModelObsV13 = {
    translate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV13 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV13 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

}

export type V13 = V13_N.PackMapCollideV13;

export namespace V14_N {
  export type PackMapCollideV14 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    collisions: Array<PackMapCollideCollisionV14>,
    blockers: Array<PackMapCollideBlockerV14>,
    navMeshes: Array<PackMapCollideNavMeshV14>,
    animations: Array<PackMapCollideAnimationV14>,
    geometries: Array<PackMapCollideGeometryV14>,
    obsModels: Array<PackMapCollideModelObsV14>,
    propModels: Array<PackMapCollideModelPropV14>,
    zoneModels: Array<PackMapCollideModelZoneV14>
  }

  export type PackMapCollideCollisionV14 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    surfaces: Array<number>,
    moppCodeData: PackMoppType
  }

  export type PackMoppType = {
    moppData: Array<number>
  }

  export type PackMapCollideBlockerV14 = {
    vertices: Array<Array<number>>
  }

  export type PackMapCollideNavMeshV14 = {
    navMesh: Array<number>,
    graph: Array<number>,
    mediator: Array<number>
  }

  export type PackMapCollideAnimationV14 = {
    sequence: number,
    collisionIndices: Array<number>,
    blockerIndices: Array<number>
  }

  export type PackMapCollideGeometryV14 = {
    quantizedExtents: number,
    animations: Array<number>,
    navMeshIndex: number
  }

  export type PackMapCollideModelObsV14 = {
    translate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV14 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV14 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

}

export type V14 = V14_N.PackMapCollideV14;

export namespace V15_N {
  export type PackMapCollideV15 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    flags: number,
    waterSurfaceZ: number,
    collisions: Array<PackMapCollideCollisionV15>,
    blockers: Array<PackMapCollideBlockerV15>,
    animations: Array<PackMapCollideAnimationV15>,
    geometries: Array<PackMapCollideGeometryV15>,
    obsModels: Array<PackMapCollideModelObsV15>,
    propModels: Array<PackMapCollideModelPropV15>,
    zoneModels: Array<PackMapCollideModelZoneV15>,
    waterVolumes: Array<PackMapCollideWaterVolumeV15>
  }

  export type PackMapCollideCollisionV15 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    surfaces: Array<number>,
    moppCodeData: PackMoppType
  }

  export type PackMoppType = {
    moppData: Array<number>
  }

  export type PackMapCollideBlockerV15 = {
    vertices: Array<Array<number>>
  }

  export type PackMapCollideAnimationV15 = {
    sequence: number,
    collisionIndices: Array<number>,
    blockerIndices: Array<number>
  }

  export type PackMapCollideGeometryV15 = {
    quantizedExtents: number,
    animations: Array<number>,
    navMeshIndex: number
  }

  export type PackMapCollideModelObsV15 = {
    translate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV15 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV15 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideWaterVolumeV15 = {
    guid: number,
    flags: number,
    verticalRange: Array<number>,
    vertices: Array<Array<number>>
  }

}

export type V15 = V15_N.PackMapCollideV15;

export namespace V16_N {
  export type PackMapCollideV16 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    flags: number,
    waterSurfaceZ: number,
    collisions: Array<PackMapCollideCollisionV16>,
    blockers: Array<PackMapCollideBlockerV16>,
    animations: Array<PackMapCollideAnimationV16>,
    geometries: Array<PackMapCollideGeometryV16>,
    obsModels: Array<PackMapCollideModelObsV16>,
    propModels: Array<PackMapCollideModelPropV16>,
    zoneModels: Array<PackMapCollideModelZoneV16>,
    waterVolumes: Array<PackMapCollideWaterVolumeV16>
  }

  export type PackMapCollideCollisionV16 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    surfaces: Array<number>,
    moppCodeData: PackMoppType
  }

  export type PackMoppType = {
    moppData: Array<number>
  }

  export type PackMapCollideBlockerV16 = {
    vertices: Array<Array<number>>
  }

  export type PackMapCollideAnimationV16 = {
    sequence: number,
    collisionIndices: Array<number>,
    blockerIndices: Array<number>
  }

  export type PackMapCollideGeometryV16 = {
    quantizedExtents: number,
    animations: Array<number>,
    navMeshIndex: number
  }

  export type PackMapCollideModelObsV16 = {
    translate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV16 = {
    token: number,
    sequence: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV16 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapCollideWaterVolumeV16 = {
    guid: number,
    name: string,
    flags: number,
    verticalRange: Array<number>,
    vertices: Array<Array<number>>
  }

}

export type V16 = V16_N.PackMapCollideV16;

export type V6_U = V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V7_U = V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V8_U = V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V9_U = V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V10_U = V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V11_U = V11 | V12 | V13 | V14 | V15 | V16;
export type V12_U = V12 | V13 | V14 | V15 | V16;
export type V13_U = V13 | V14 | V15 | V16;
export type V14_U = V14 | V15 | V16;
export type V15_U = V15 | V16;
export type V16_U = V16;
