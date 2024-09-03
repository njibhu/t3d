export namespace V1_N {
  export type PackMapPhysicsV1 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    shapeArray: Array<PackMapPhysicsShapeDataV1>,
    geometryArray: Array<PackMapPhysicsGeometryV1>,
    propModelArray: Array<PackMapPhysicsModelPropV1>
  }

  export type PackMapPhysicsShapeDataV1 = {
    scale: number,
    gameDataPtr: Array<number>
  }

  export type PackMapPhysicsGeometryV1 = {
    shapeDataIndexArray: Array<number>
  }

  export type PackMapPhysicsModelPropV1 = {
    token: Array<number>,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

}

export type V1 = V1_N.PackMapPhysicsV1;

export namespace V2_N {
  export type PackMapPhysicsV2 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    shapeArray: Array<PackMapPhysicsShapeDataV2>,
    geometryArray: Array<PackMapPhysicsGeometryV2>,
    propModelArray: Array<PackMapPhysicsModelPropV2>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV0>
  }

  export type PackMapPhysicsShapeDataV2 = {
    scale: number,
    gameDataPtr: Array<number>
  }

  export type PackMapPhysicsGeometryV2 = {
    shapeDataIndexArray: Array<number>
  }

  export type PackMapPhysicsModelPropV2 = {
    token: Array<number>,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV0 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

}

export type V2 = V2_N.PackMapPhysicsV2;

export namespace V3_N {
  export type PackMapPhysicsV3 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    meshArray: Array<PackMapPhysicsMeshV3>,
    shapeArray: Array<PackMapPhysicsShapeDataV3>,
    geometryArray: Array<PackMapPhysicsGeometryV3>,
    propModelArray: Array<PackMapPhysicsModelPropV3>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV1>
  }

  export type PackMapPhysicsMeshV3 = {
    indexArray: Array<number>,
    vertexArray: Array<Array<number>>,
    moppCodeData: Array<number>
  }

  export type PackMapPhysicsShapeDataV3 = {
    scale: number,
    gameDataPtr: Array<number>
  }

  export type PackMapPhysicsGeometryV3 = {
    shapeDataIndexArray: Array<number>
  }

  export type PackMapPhysicsModelPropV3 = {
    token: Array<number>,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV1 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

}

export type V3 = V3_N.PackMapPhysicsV3;

export namespace V4_N {
  export type PackMapPhysicsV4 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
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
    indexArray: Array<number>,
    vertexArray: Array<Array<number>>,
    moppCodeData: Array<number>
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>
  }

  export type SceneSphereShapeV7 = {
    center: Array<number>,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Array<number>,
    p1: Array<number>,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppInfo: Array<number>,
    moppBytes: Array<number>
  }

  export type SceneFileGameV5 = {
    paths: Array<ScenePathV5>,
    meshes: Array<SceneGameMeshV5>
  }

  export type ScenePathV5 = {
    properties: Array<number>,
    points: Array<ScenePathNodeV5>,
    closed: number
  }

  export type ScenePathNodeV5 = {
    position: Array<number>,
    rotation: Array<number>,
    radius: number,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV5 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    edges: Array<SceneEdgeV5>,
    moppInfo: Array<number>,
    moppBytes: Array<number>,
    surfaceFlags: Array<number>
  }

  export type SceneEdgeV5 = {
    indices: Array<number>,
    triangles: Array<number>
  }

  export type PackMapPhysicsGeometryV4 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV4>
  }

  export type PackMapPhysicsObjectRefV4 = {
    sequence: number,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV4 = {
    token: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV2 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV4 = {
    translate: Array<number>,
    geometryIndex: number
  }

}

export type V4 = V4_N.PackMapPhysicsV4;

export namespace V5_N {
  export type PackMapPhysicsV5 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
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
    indexArray: Array<number>,
    vertexArray: Array<Array<number>>,
    moppCodeData: Array<number>
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>
  }

  export type SceneSphereShapeV7 = {
    center: Array<number>,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Array<number>,
    p1: Array<number>,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppInfo: Array<number>,
    moppBytes: Array<number>
  }

  export type SceneFileGameV5 = {
    paths: Array<ScenePathV5>,
    meshes: Array<SceneGameMeshV5>
  }

  export type ScenePathV5 = {
    properties: Array<number>,
    points: Array<ScenePathNodeV5>,
    closed: number
  }

  export type ScenePathNodeV5 = {
    position: Array<number>,
    rotation: Array<number>,
    radius: number,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV5 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    edges: Array<SceneEdgeV5>,
    moppInfo: Array<number>,
    moppBytes: Array<number>,
    surfaceFlags: Array<number>
  }

  export type SceneEdgeV5 = {
    indices: Array<number>,
    triangles: Array<number>
  }

  export type PackMapPhysicsGeometryV5 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV5>
  }

  export type PackMapPhysicsObjectRefV5 = {
    sequence: number,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV5 = {
    token: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV3 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV5 = {
    translate: Array<number>,
    geometryIndex: number
  }

}

export type V5 = V5_N.PackMapPhysicsV5;

export namespace V6_N {
  export type PackMapPhysicsV6 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
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
    indexArray: Array<number>,
    vertexArray: Array<Array<number>>,
    moppCodeData: Array<number>
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>
  }

  export type SceneSphereShapeV7 = {
    center: Array<number>,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Array<number>,
    p1: Array<number>,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppInfo: Array<number>,
    moppBytes: Array<number>
  }

  export type SceneFileGameV6 = {
    paths: Array<ScenePathV6>,
    meshes: Array<SceneGameMeshV6>,
    surfaces: Array<SceneGameSurfaceV6>
  }

  export type ScenePathV6 = {
    properties: Array<number>,
    points: Array<ScenePathNodeV6>,
    closed: number
  }

  export type ScenePathNodeV6 = {
    position: Array<number>,
    rotation: Array<number>,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV6 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    edges: Array<SceneEdgeV6>,
    moppInfo: Array<number>,
    moppBytes: Array<number>,
    surfaces: Array<number>
  }

  export type SceneEdgeV6 = {
    indices: Array<number>,
    triangles: Array<number>
  }

  export type SceneGameSurfaceV6 = {
    tokens: Array<number>
  }

  export type PackMapPhysicsGeometryV6 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV6>
  }

  export type PackMapPhysicsObjectRefV6 = {
    sequence: number,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV6 = {
    token: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV4 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV6 = {
    translate: Array<number>,
    geometryIndex: number
  }

}

export type V6 = V6_N.PackMapPhysicsV6;

export namespace V7_N {
  export type PackMapPhysicsV7 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    blockArray: Array<PackMapPhysicsBlockV7>
  }

  export type PackMapPhysicsBlockV7 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
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
    indexArray: Array<number>,
    vertexArray: Array<Array<number>>,
    moppCodeData: Array<number>
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>
  }

  export type SceneSphereShapeV7 = {
    center: Array<number>,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Array<number>,
    p1: Array<number>,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppInfo: Array<number>,
    moppBytes: Array<number>
  }

  export type SceneFileGameV6 = {
    paths: Array<ScenePathV6>,
    meshes: Array<SceneGameMeshV6>,
    surfaces: Array<SceneGameSurfaceV6>
  }

  export type ScenePathV6 = {
    properties: Array<number>,
    points: Array<ScenePathNodeV6>,
    closed: number
  }

  export type ScenePathNodeV6 = {
    position: Array<number>,
    rotation: Array<number>,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV6 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    edges: Array<SceneEdgeV6>,
    moppInfo: Array<number>,
    moppBytes: Array<number>,
    surfaces: Array<number>
  }

  export type SceneEdgeV6 = {
    indices: Array<number>,
    triangles: Array<number>
  }

  export type SceneGameSurfaceV6 = {
    tokens: Array<number>
  }

  export type PackMapPhysicsGeometryV7 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV7>
  }

  export type PackMapPhysicsObjectRefV7 = {
    sequence: number,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV7 = {
    token: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV5 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV7 = {
    translate: Array<number>,
    geometryIndex: number
  }

}

export type V7 = V7_N.PackMapPhysicsV7;

export namespace V8_N {
  export type PackMapPhysicsV8 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    blockArray: Array<PackMapPhysicsBlockV8>
  }

  export type PackMapPhysicsBlockV8 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
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
    indexArray: Array<number>,
    vertexArray: Array<Array<number>>,
    moppCodeData: Array<number>
  }

  export type SceneFilePhysicsV7 = {
    boxes: Array<SceneBoxShapeV7>,
    spheres: Array<SceneSphereShapeV7>,
    capsules: Array<SceneCapsuleShapeV7>,
    meshes: Array<SceneMeshShapeV7>
  }

  export type SceneBoxShapeV7 = {
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>
  }

  export type SceneSphereShapeV7 = {
    center: Array<number>,
    radius: number
  }

  export type SceneCapsuleShapeV7 = {
    p0: Array<number>,
    p1: Array<number>,
    radius: number
  }

  export type SceneMeshShapeV7 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppInfo: Array<number>,
    moppBytes: Array<number>
  }

  export type SceneFileGameV6 = {
    paths: Array<ScenePathV6>,
    meshes: Array<SceneGameMeshV6>,
    surfaces: Array<SceneGameSurfaceV6>
  }

  export type ScenePathV6 = {
    properties: Array<number>,
    points: Array<ScenePathNodeV6>,
    closed: number
  }

  export type ScenePathNodeV6 = {
    position: Array<number>,
    rotation: Array<number>,
    flags: number,
    smoothing: number,
    singlesided: number
  }

  export type SceneGameMeshV6 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    edges: Array<SceneEdgeV6>,
    moppInfo: Array<number>,
    moppBytes: Array<number>,
    surfaces: Array<number>
  }

  export type SceneEdgeV6 = {
    indices: Array<number>,
    triangles: Array<number>
  }

  export type SceneGameSurfaceV6 = {
    tokens: Array<number>
  }

  export type PackMapPhysicsGeometryV8 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV8>
  }

  export type PackMapPhysicsObjectRefV8 = {
    sequence: number,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV8 = {
    token: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV6 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV8 = {
    translate: Array<number>,
    geometryIndex: number
  }

}

export type V8 = V8_N.PackMapPhysicsV8;

export namespace V9_N {
  export type PackMapPhysicsV9 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    blockArray: Array<PackMapPhysicsBlockV9>
  }

  export type PackMapPhysicsBlockV9 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    objectArray: Array<PackMapPhysicsObjectV9>,
    geometryArray: Array<PackMapPhysicsGeometryV9>,
    propModelArray: Array<PackMapPhysicsModelPropV9>,
    debrisModelArray: Array<PackMapPhysicsModelPropV9>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV7>,
    obsModelArray: Array<PackMapPhysicsModelObstacleV9>
  }

  export type PackMapPhysicsObjectV9 = {
    mesh: PackMapPhysicsMeshV9,
    sceneFilePtr: Array<number>
  }

  export type PackMapPhysicsMeshV9 = {
    indexArray: Array<number>,
    vertexArray: Array<Array<number>>,
    moppCodeData: Array<number>
  }

  export type PackMapPhysicsGeometryV9 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV9>
  }

  export type PackMapPhysicsObjectRefV9 = {
    sequence: number,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV9 = {
    token: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV7 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV9 = {
    translate: Array<number>,
    geometryIndex: number
  }

}

export type V9 = V9_N.PackMapPhysicsV9;

export namespace V10_N {
  export type PackMapPhysicsV10 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    blockArray: Array<PackMapPhysicsBlockV10>
  }

  export type PackMapPhysicsBlockV10 = {
    boundsMin: Array<number>,
    boundsMax: Array<number>,
    objectArray: Array<PackMapPhysicsObjectV10>,
    geometryArray: Array<PackMapPhysicsGeometryV10>,
    propModelArray: Array<PackMapPhysicsModelPropV10>,
    debrisModelArray: Array<PackMapPhysicsModelPropV10>,
    zoneModelArray: Array<PackMapPhysicsModelZoneV8>,
    obsModelArray: Array<PackMapPhysicsModelObstacleV10>
  }

  export type PackMapPhysicsObjectV10 = {
    mesh: PackMapPhysicsMeshV10,
    sceneFilePtr: Array<number>
  }

  export type PackMapPhysicsMeshV10 = {
    indexArray: Array<number>,
    vertexArray: Array<Array<number>>,
    moppCodeData: Array<number>
  }

  export type PackMapPhysicsGeometryV10 = {
    filePath: string,
    quantizedExtents: number,
    objRefArray: Array<PackMapPhysicsObjectRefV10>,
    surface: Array<number>
  }

  export type PackMapPhysicsObjectRefV10 = {
    sequence: number,
    objectIndex: number
  }

  export type PackMapPhysicsModelPropV10 = {
    token: number,
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelZoneV8 = {
    scale: number,
    translate: Array<number>,
    rotate: Array<number>,
    geometryIndex: number
  }

  export type PackMapPhysicsModelObstacleV10 = {
    translate: Array<number>,
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
