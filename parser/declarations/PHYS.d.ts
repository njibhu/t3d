export namespace V1_N {
  export type PackMapPhysicsV1 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    shapeArray: Array<PackMapPhysicsShapeDataV1>,
    geometryArray: Array<PackMapPhysicsGeometryV1>,
    propModelArray: Array<PackMapPhysicsModelPropV1>
  }

  export type PackMapPhysicsShapeDataV1 = {
    scale: number,
    gameDataPtr: Uint8Array
  }

  export type PackMapPhysicsGeometryV1 = {
    shapeDataIndexArray: Uint32Array
  }

  export type PackMapPhysicsModelPropV1 = {
    token: Uint32Array,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

}

export type V1 = V1_N.PackMapPhysicsV1;

export namespace V2_N {
  export type PackMapPhysicsV2 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    shapeArray: Array<PackMapPhysicsShapeDataV2>,
    geometryArray: Array<PackMapPhysicsGeometryV2>,
    propModelArray: Array<PackMapPhysicsModelPropV2>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV0>
  }

  export type PackMapPhysicsShapeDataV2 = {
    scale: number,
    gameDataPtr: Uint8Array
  }

  export type PackMapPhysicsGeometryV2 = {
    shapeDataIndexArray: Uint32Array
  }

  export type PackMapPhysicsModelPropV2 = {
    token: Uint32Array,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV0 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

}

export type V2 = V2_N.PackMapPhysicsV2;

export namespace V3_N {
  export type PackMapPhysicsV3 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    meshArray: Array<PackMapPhysicsMeshV3>,
    shapeArray: Array<PackMapPhysicsShapeDataV3>,
    geometryArray: Array<PackMapPhysicsGeometryV3>,
    propModelArray: Array<PackMapPhysicsModelPropV3>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV1>
  }

  export type PackMapPhysicsMeshV3 = {
    indexArray: Uint16Array,
    vertexArray: Array<Float32Array>,
    moppCodeData: Uint8Array
  }

  export type PackMapPhysicsShapeDataV3 = {
    scale: number,
    gameDataPtr: Uint8Array
  }

  export type PackMapPhysicsGeometryV3 = {
    shapeDataIndexArray: Uint32Array
  }

  export type PackMapPhysicsModelPropV3 = {
    token: Uint32Array,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV1 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

}

export type V3 = V3_N.PackMapPhysicsV3;

export namespace V4_N {
  export type PackMapPhysicsV4 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    objectArray: Array<PackMapPhysicsObjectV4>,
    geometryArray: Array<PackMapPhysicsGeometryV4>,
    propModelArray: Array<PackMapPhysicsModelPropV4>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV2>,
    obsModelArray: Array<PackMapPhysicsModelObstacleV4>
  }

  export type PackMapPhysicsObjectV4 = {
    mesh: PackMapPhysicsMeshV4,
    physics: SceneFilePhysicsV7,
    game: SceneFileGameV5
  }

  export type PackMapPhysicsMeshV4 = {
    indexArray: Uint16Array,
    vertexArray: Array<Float32Array>,
    moppCodeData: Uint8Array
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Float32Array,
    position: Float32Array,
    rotation: Float32Array
  }

  export type SceneSphereShapeV7 = {
    center: Float32Array,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Float32Array,
    p1: Float32Array,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array
  }

  export type SceneFileGameV5 = {
    paths: Array<ScenePathV5>,
    meshes: Array<SceneGameMeshV5>
  }

  export type ScenePathV5 = {
    properties: BigUint64Array,
    points: Array<ScenePathNodeV5>,
    closed: number
  }

  export type ScenePathNodeV5 = {
    position: Float32Array,
    rotation: Float32Array,
    radius: number,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV5 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    edges: Array<SceneEdgeV5>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array,
    surfaceFlags: Uint32Array
  }

  export type SceneEdgeV5 = {
    indices: Uint32Array,
    triangles: Uint32Array
  }

  export type PackMapPhysicsGeometryV4 = {
    filePath: number,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV4>
  }

  export type PackMapPhysicsObjectRefV4 = {
    sequence: BigInt,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV4 = {
    token: BigInt,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV2 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV4 = {
    translate: Float32Array,
    geometryIndex: number
  }

}

export type V4 = V4_N.PackMapPhysicsV4;

export namespace V5_N {
  export type PackMapPhysicsV5 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    objectArray: Array<PackMapPhysicsObjectV5>,
    geometryArray: Array<PackMapPhysicsGeometryV5>,
    propModelArray: Array<PackMapPhysicsModelPropV5>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV3>,
    obsModelArray: Array<PackMapPhysicsModelObstacleV5>
  }

  export type PackMapPhysicsObjectV5 = {
    mesh: PackMapPhysicsMeshV5,
    physics: SceneFilePhysicsV7,
    game: SceneFileGameV5
  }

  export type PackMapPhysicsMeshV5 = {
    indexArray: Uint16Array,
    vertexArray: Array<Float32Array>,
    moppCodeData: Uint8Array
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Float32Array,
    position: Float32Array,
    rotation: Float32Array
  }

  export type SceneSphereShapeV7 = {
    center: Float32Array,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Float32Array,
    p1: Float32Array,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array
  }

  export type SceneFileGameV5 = {
    paths: Array<ScenePathV5>,
    meshes: Array<SceneGameMeshV5>
  }

  export type ScenePathV5 = {
    properties: BigUint64Array,
    points: Array<ScenePathNodeV5>,
    closed: number
  }

  export type ScenePathNodeV5 = {
    position: Float32Array,
    rotation: Float32Array,
    radius: number,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV5 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    edges: Array<SceneEdgeV5>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array,
    surfaceFlags: Uint32Array
  }

  export type SceneEdgeV5 = {
    indices: Uint32Array,
    triangles: Uint32Array
  }

  export type PackMapPhysicsGeometryV5 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV5>
  }

  export type PackMapPhysicsObjectRefV5 = {
    sequence: BigInt,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV5 = {
    token: BigInt,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV3 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV5 = {
    translate: Float32Array,
    geometryIndex: number
  }

}

export type V5 = V5_N.PackMapPhysicsV5;

export namespace V6_N {
  export type PackMapPhysicsV6 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    objectArray: Array<PackMapPhysicsObjectV6>,
    geometryArray: Array<PackMapPhysicsGeometryV6>,
    propModelArray: Array<PackMapPhysicsModelPropV6>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV4>,
    obsModelArray: Array<PackMapPhysicsModelObstacleV6>
  }

  export type PackMapPhysicsObjectV6 = {
    mesh: PackMapPhysicsMeshV6,
    physics: SceneFilePhysicsV7,
    game: SceneFileGameV6
  }

  export type PackMapPhysicsMeshV6 = {
    indexArray: Uint16Array,
    vertexArray: Array<Float32Array>,
    moppCodeData: Uint8Array
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Float32Array,
    position: Float32Array,
    rotation: Float32Array
  }

  export type SceneSphereShapeV7 = {
    center: Float32Array,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Float32Array,
    p1: Float32Array,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array
  }

  export type SceneFileGameV6 = {
    paths: Array<ScenePathV6>,
    meshes: Array<SceneGameMeshV6>,
    surfaces: Array<SceneGameSurfaceV6>
  }

  export type ScenePathV6 = {
    properties: BigUint64Array,
    points: Array<ScenePathNodeV6>,
    closed: number
  }

  export type ScenePathNodeV6 = {
    position: Float32Array,
    rotation: Float32Array,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV6 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    edges: Array<SceneEdgeV6>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array,
    surfaces: Uint8Array
  }

  export type SceneEdgeV6 = {
    indices: Uint32Array,
    triangles: Uint32Array
  }

  export type SceneGameSurfaceV6 = {
    tokens: BigUint64Array
  }

  export type PackMapPhysicsGeometryV6 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV6>
  }

  export type PackMapPhysicsObjectRefV6 = {
    sequence: BigInt,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV6 = {
    token: BigInt,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV4 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV6 = {
    translate: Float32Array,
    geometryIndex: number
  }

}

export type V6 = V6_N.PackMapPhysicsV6;

export namespace V7_N {
  export type PackMapPhysicsV7 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    blockArray: Array<PackMapPhysicsBlockV7>
  }

  export type PackMapPhysicsBlockV7 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    objectArray: Array<PackMapPhysicsObjectV7>,
    geometryArray: Array<PackMapPhysicsGeometryV7>,
    propModelArray: Array<PackMapPhysicsModelPropV7>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV5>,
    obsModelArray: Array<PackMapPhysicsModelObstacleV7>
  }

  export type PackMapPhysicsObjectV7 = {
    mesh: PackMapPhysicsMeshV7,
    physics: SceneFilePhysicsV7,
    game: SceneFileGameV6
  }

  export type PackMapPhysicsMeshV7 = {
    indexArray: Uint16Array,
    vertexArray: Array<Float32Array>,
    moppCodeData: Uint8Array
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Float32Array,
    position: Float32Array,
    rotation: Float32Array
  }

  export type SceneSphereShapeV7 = {
    center: Float32Array,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Float32Array,
    p1: Float32Array,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array
  }

  export type SceneFileGameV6 = {
    paths: Array<ScenePathV6>,
    meshes: Array<SceneGameMeshV6>,
    surfaces: Array<SceneGameSurfaceV6>
  }

  export type ScenePathV6 = {
    properties: BigUint64Array,
    points: Array<ScenePathNodeV6>,
    closed: number
  }

  export type ScenePathNodeV6 = {
    position: Float32Array,
    rotation: Float32Array,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV6 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    edges: Array<SceneEdgeV6>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array,
    surfaces: Uint8Array
  }

  export type SceneEdgeV6 = {
    indices: Uint32Array,
    triangles: Uint32Array
  }

  export type SceneGameSurfaceV6 = {
    tokens: BigUint64Array
  }

  export type PackMapPhysicsGeometryV7 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV7>
  }

  export type PackMapPhysicsObjectRefV7 = {
    sequence: BigInt,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV7 = {
    token: BigInt,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV5 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV7 = {
    translate: Float32Array,
    geometryIndex: number
  }

}

export type V7 = V7_N.PackMapPhysicsV7;

export namespace V8_N {
  export type PackMapPhysicsV8 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    blockArray: Array<PackMapPhysicsBlockV8>
  }

  export type PackMapPhysicsBlockV8 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    objectArray: Array<PackMapPhysicsObjectV8>,
    geometryArray: Array<PackMapPhysicsGeometryV8>,
    propModelArray: Array<PackMapPhysicsModelPropV8>,
    debrisModelArray: Array<PackMapPhysicsModelPropV8>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV6>,
    obsModelArray: Array<PackMapPhysicsModelObstacleV8>
  }

  export type PackMapPhysicsObjectV8 = {
    mesh: PackMapPhysicsMeshV8,
    physics: SceneFilePhysicsV7,
    game: SceneFileGameV6
  }

  export type PackMapPhysicsMeshV8 = {
    indexArray: Uint16Array,
    vertexArray: Array<Float32Array>,
    moppCodeData: Uint8Array
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Float32Array,
    position: Float32Array,
    rotation: Float32Array
  }

  export type SceneSphereShapeV7 = {
    center: Float32Array,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Float32Array,
    p1: Float32Array,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array
  }

  export type SceneFileGameV6 = {
    paths: Array<ScenePathV6>,
    meshes: Array<SceneGameMeshV6>,
    surfaces: Array<SceneGameSurfaceV6>
  }

  export type ScenePathV6 = {
    properties: BigUint64Array,
    points: Array<ScenePathNodeV6>,
    closed: number
  }

  export type ScenePathNodeV6 = {
    position: Float32Array,
    rotation: Float32Array,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV6 = {
    indices: Uint16Array,
    vertices: Array<Float32Array>,
    edges: Array<SceneEdgeV6>,
    moppInfo: Float32Array,
    moppBytes: Uint8Array,
    surfaces: Uint8Array
  }

  export type SceneEdgeV6 = {
    indices: Uint32Array,
    triangles: Uint32Array
  }

  export type SceneGameSurfaceV6 = {
    tokens: BigUint64Array
  }

  export type PackMapPhysicsGeometryV8 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV8>
  }

  export type PackMapPhysicsObjectRefV8 = {
    sequence: BigInt,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV8 = {
    token: BigInt,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV6 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV8 = {
    translate: Float32Array,
    geometryIndex: number
  }

}

export type V8 = V8_N.PackMapPhysicsV8;

export namespace V9_N {
  export type PackMapPhysicsV9 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    blockArray: Array<PackMapPhysicsBlockV9>
  }

  export type PackMapPhysicsBlockV9 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    objectArray: Array<PackMapPhysicsObjectV9>,
    geometryArray: Array<PackMapPhysicsGeometryV9>,
    propModelArray: Array<PackMapPhysicsModelPropV9>,
    debrisModelArray: Array<PackMapPhysicsModelPropV9>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV7>,
    obsModelArray: Array<PackMapPhysicsModelObstacleV9>
  }

  export type PackMapPhysicsObjectV9 = {
    mesh: PackMapPhysicsMeshV9,
    sceneFilePtr: Uint8Array
  }

  export type PackMapPhysicsMeshV9 = {
    indexArray: Uint16Array,
    vertexArray: Array<Float32Array>,
    moppCodeData: Uint8Array
  }

  export type PackMapPhysicsGeometryV9 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV9>
  }

  export type PackMapPhysicsObjectRefV9 = {
    sequence: BigInt,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV9 = {
    token: BigInt,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV7 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV9 = {
    translate: Float32Array,
    geometryIndex: number
  }

}

export type V9 = V9_N.PackMapPhysicsV9;

export namespace V10_N {
  export type PackMapPhysicsV10 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    blockArray: Array<PackMapPhysicsBlockV10>
  }

  export type PackMapPhysicsBlockV10 = {
    boundsMin: Float32Array,
    boundsMax: Float32Array,
    objectArray: Array<PackMapPhysicsObjectV10>,
    geometryArray: Array<PackMapPhysicsGeometryV10>,
    propModelArray: Array<PackMapPhysicsModelPropV10>,
    debrisModelArray: Array<PackMapPhysicsModelPropV10>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV8>,
    obsModelArray: Array<PackMapPhysicsModelObstacleV10>
  }

  export type PackMapPhysicsObjectV10 = {
    mesh: PackMapPhysicsMeshV10,
    sceneFilePtr: Uint8Array
  }

  export type PackMapPhysicsMeshV10 = {
    indexArray: Uint16Array,
    vertexArray: Array<Float32Array>,
    moppCodeData: Uint8Array
  }

  export type PackMapPhysicsGeometryV10 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV10>,
    surface: Uint16Array
  }

  export type PackMapPhysicsObjectRefV10 = {
    sequence: BigInt,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV10 = {
    token: BigInt,
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV8 = {
    scale: number,
    translate: Float32Array,
    rotate: Float32Array,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV10 = {
    translate: Float32Array,
    geometryIndex: number
  }

}

export type V10 = V10_N.PackMapPhysicsV10;

export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10;
export type V6_U = V6 | V7 | V8 | V9 | V10;
export type V7_U = V7 | V8 | V9 | V10;
export type V8_U = V8 | V9 | V10;
export type V9_U = V9 | V10;
export type V10_U = V10;
