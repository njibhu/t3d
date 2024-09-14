export namespace V6_N {
  export type PackMapCollideV6 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    moppCodes: Array<PackMapCollideMoppCodeV6>,
    meshes: Array<PackMapCollideMeshV6>,
    geometries: Array<PackMapCollideGeometryV6>,
    propModels: Array<PackMapCollideModelPropV6>,
    zoneModels: Array<PackMapCollideModelZoneV6>
  }

  export type PackMapCollideMoppCodeV6 = {
    cookedData: Uint8Array
  }

  export type PackMapCollideMeshV6 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
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
    sequence: bigint,
    meshIndex: number
  }

  export type PackMapCollideModelPropV6 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV6 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

}

export type V6 = V6_N.PackMapCollideV6;

export namespace V7_N {
  export type PackMapCollideV7 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    moppCodes: Array<PackMapCollideMoppCodeV7>,
    meshes: Array<PackMapCollideMeshV7>,
    geometries: Array<PackMapCollideGeometryV7>,
    propModels: Array<PackMapCollideModelPropV7>,
    zoneModels: Array<PackMapCollideModelZoneV7>,
    aiBoundaryMin: Float32Array,
    aiBoundaryMax: Float32Array,
    aiChunkDims: Uint32Array,
    aiChunks: Array<PackMapCollideAiChunkV7>
  }

  export type PackMapCollideMoppCodeV7 = {
    cookedData: Uint8Array
  }

  export type PackMapCollideMeshV7 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
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
    sequence: bigint,
    meshIndex: number
  }

  export type PackMapCollideModelPropV7 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV7 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV7 = {
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array
  }

}

export type V7 = V7_N.PackMapCollideV7;

export namespace V8_N {
  export type PackMapCollideV8 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    meshes: Array<PackMapCollideMeshV8>,
    geometries: Array<PackMapCollideGeometryV8>,
    propModels: Array<PackMapCollideModelPropV8>,
    zoneModels: Array<PackMapCollideModelZoneV8>,
    aiBoundaryMin: Float32Array,
    aiBoundaryMax: Float32Array,
    aiChunkDims: Uint32Array,
    aiChunks: Array<PackMapCollideAiChunkV8>
  }

  export type PackMapCollideMeshV8 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    moppCodeScale: number,
    moppCodeData: Uint8Array
  }

  export type PackMapCollideGeometryV8 = {
    meshRefs: Array<PackMapCollideMeshRefV8>
  }

  export type PackMapCollideMeshRefV8 = {
    sequence: bigint,
    meshIndex: number
  }

  export type PackMapCollideModelPropV8 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV8 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV8 = {
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array
  }

}

export type V8 = V8_N.PackMapCollideV8;

export namespace V9_N {
  export type PackMapCollideV9 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    meshes: Array<PackMapCollideMeshV9>,
    geometries: Array<PackMapCollideGeometryV9>,
    obsModels: Array<PackMapCollideModelObsV9>,
    propModels: Array<PackMapCollideModelPropV9>,
    zoneModels: Array<PackMapCollideModelZoneV9>,
    aiBoundaryMin: Float32Array,
    aiBoundaryMax: Float32Array,
    aiChunkDims: Uint32Array,
    aiChunks: Array<PackMapCollideAiChunkV9>
  }

  export type PackMapCollideMeshV9 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    moppCodeScale: number,
    moppCodeData: Uint8Array
  }

  export type PackMapCollideGeometryV9 = {
    meshRefs: Array<PackMapCollideMeshRefV9>
  }

  export type PackMapCollideMeshRefV9 = {
    sequence: bigint,
    meshIndex: number
  }

  export type PackMapCollideModelObsV9 = {
    geometryIndex: number
  }

  export type PackMapCollideModelPropV9 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV9 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV9 = {
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array
  }

}

export type V9 = V9_N.PackMapCollideV9;

export namespace V10_N {
  export type PackMapCollideV10 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    meshes: Array<PackMapCollideMeshV10>,
    geometries: Array<PackMapCollideGeometryV10>,
    obsModels: Array<PackMapCollideModelObsV10>,
    propModels: Array<PackMapCollideModelPropV10>,
    zoneModels: Array<PackMapCollideModelZoneV10>,
    aiBoundaryMin: Float32Array,
    aiBoundaryMax: Float32Array,
    aiChunkDims: Uint32Array,
    aiChunks: Array<PackMapCollideAiChunkV10>
  }

  export type PackMapCollideMeshV10 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    moppCodeScale: number,
    moppCodeData: Uint8Array
  }

  export type PackMapCollideGeometryV10 = {
    meshRefs: Array<PackMapCollideMeshRefV10>
  }

  export type PackMapCollideMeshRefV10 = {
    sequence: bigint,
    meshIndex: number
  }

  export type PackMapCollideModelObsV10 = {
    geometryIndex: number
  }

  export type PackMapCollideModelPropV10 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV10 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV10 = {
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    queryMediatorMoppData: Uint8Array
  }

}

export type V10 = V10_N.PackMapCollideV10;

export namespace V11_N {
  export type PackMapCollideV11 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    meshes: Array<PackMapCollideMeshV11>,
    geometries: Array<PackMapCollideGeometryV11>,
    obsModels: Array<PackMapCollideModelObsV11>,
    propModels: Array<PackMapCollideModelPropV11>,
    zoneModels: Array<PackMapCollideModelZoneV11>,
    aiChunkDims: Uint32Array,
    aiChunks: Array<PackMapCollideAiChunkV11>
  }

  export type PackMapCollideMeshV11 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    moppCodeScale: number,
    moppCodeData: Uint8Array
  }

  export type PackMapCollideGeometryV11 = {
    quantizedExtents: number,
    meshRefs: Array<PackMapCollideMeshRefV11>
  }

  export type PackMapCollideMeshRefV11 = {
    sequence: bigint,
    meshIndex: number
  }

  export type PackMapCollideModelObsV11 = {
    translate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV11 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV11 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV11 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    queryMediatorMoppData: Uint8Array
  }

}

export type V11 = V11_N.PackMapCollideV11;

export namespace V12_N {
  export type PackMapCollideV12 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    meshes: Array<PackMapCollideMeshV12>,
    geometries: Array<PackMapCollideGeometryV12>,
    obsModels: Array<PackMapCollideModelObsV12>,
    propModels: Array<PackMapCollideModelPropV12>,
    zoneModels: Array<PackMapCollideModelZoneV12>,
    aiChunkDims: Uint32Array,
    aiChunks: Array<PackMapCollideAiChunkV12>
  }

  export type PackMapCollideMeshV12 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    surfaces: Uint16Array,
    moppCodeScale: number,
    moppCodeData: Uint8Array
  }

  export type PackMapCollideGeometryV12 = {
    quantizedExtents: number,
    meshRefs: Array<PackMapCollideMeshRefV12>
  }

  export type PackMapCollideMeshRefV12 = {
    sequence: bigint,
    meshIndex: number
  }

  export type PackMapCollideModelObsV12 = {
    translate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV12 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV12 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideAiChunkV12 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    navMeshData: Uint8Array,
    coarseGraphData: Uint8Array,
    queryMediatorMoppData: Uint8Array
  }

}

export type V12 = V12_N.PackMapCollideV12;

export namespace V13_N {
  export type PackMapCollideV13 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    collisions: Array<PackMapCollideCollisionV13>,
    blockers: Array<PackMapCollideBlockerV13>,
    animations: Array<PackMapCollideAnimationV13>,
    geometries: Array<PackMapCollideGeometryV13>,
    obsModels: Array<PackMapCollideModelObsV13>,
    propModels: Array<PackMapCollideModelPropV13>,
    zoneModels: Array<PackMapCollideModelZoneV13>
  }

  export type PackMapCollideCollisionV13 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    surfaces: Uint16Array,
    moppCodeData: Uint8Array
  }

  export type PackMapCollideBlockerV13 = {
    vertices: Array<Float32Array>
  }

  export type PackMapCollideAnimationV13 = {
    sequence: bigint,
    collisionIndices: Uint32Array,
    blockerIndices: Uint32Array
  }

  export type PackMapCollideGeometryV13 = {
    quantizedExtents: number,
    animations: Uint32Array
  }

  export type PackMapCollideModelObsV13 = {
    translate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV13 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV13 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

}

export type V13 = V13_N.PackMapCollideV13;

export namespace V14_N {
  export type PackMapCollideV14 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
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
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    surfaces: Uint16Array,
    moppCodeData: PackMoppType
  }

  export type PackMoppType = {
    moppData: Uint8Array
  }

  export type PackMapCollideBlockerV14 = {
    vertices: Array<Float32Array>
  }

  export type PackMapCollideNavMeshV14 = {
    navMesh: Uint8Array,
    graph: Uint8Array,
    mediator: Uint8Array
  }

  export type PackMapCollideAnimationV14 = {
    sequence: bigint,
    collisionIndices: Uint32Array,
    blockerIndices: Uint32Array
  }

  export type PackMapCollideGeometryV14 = {
    quantizedExtents: number,
    animations: Uint32Array,
    navMeshIndex: number
  }

  export type PackMapCollideModelObsV14 = {
    translate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV14 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV14 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

}

export type V14 = V14_N.PackMapCollideV14;

export namespace V15_N {
  export type PackMapCollideV15 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
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
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    surfaces: Uint16Array,
    moppCodeData: PackMoppType
  }

  export type PackMoppType = {
    moppData: Uint8Array
  }

  export type PackMapCollideBlockerV15 = {
    vertices: Array<Float32Array>
  }

  export type PackMapCollideAnimationV15 = {
    sequence: bigint,
    collisionIndices: Uint32Array,
    blockerIndices: Uint32Array
  }

  export type PackMapCollideGeometryV15 = {
    quantizedExtents: number,
    animations: Uint32Array,
    navMeshIndex: number
  }

  export type PackMapCollideModelObsV15 = {
    translate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV15 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV15 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideWaterVolumeV15 = {
    guid: bigint,
    flags: number,
    verticalRange: Float32Array,
    vertices: Array<Float32Array>
  }

}

export type V15 = V15_N.PackMapCollideV15;

export namespace V16_N {
  export type PackMapCollideV16 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
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
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    surfaces: Uint16Array,
    moppCodeData: PackMoppType
  }

  export type PackMoppType = {
    moppData: Uint8Array
  }

  export type PackMapCollideBlockerV16 = {
    vertices: Array<Float32Array>
  }

  export type PackMapCollideAnimationV16 = {
    sequence: bigint,
    collisionIndices: Uint32Array,
    blockerIndices: Uint32Array
  }

  export type PackMapCollideGeometryV16 = {
    quantizedExtents: number,
    animations: Uint32Array,
    navMeshIndex: number
  }

  export type PackMapCollideModelObsV16 = {
    translate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelPropV16 = {
    token: bigint,
    sequence: bigint,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideModelZoneV16 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapCollideWaterVolumeV16 = {
    guid: bigint,
    name: string,
    flags: number,
    verticalRange: Float32Array,
    vertices: Array<Float32Array>
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
