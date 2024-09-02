import { FixedArray, Float32, Uint16, DynArray, Uint8, Pointer, RefString16, Uint64, Uint32, Fileref } from "../src/types";

const V1 = {
  chunkName: "phys",
  name: "PackMapPhysicsV1",
  version: 1,
  definitions: {
    PackMapPhysicsShapeDataV1: {
      scale: Float32,
      gameDataPtr: DynArray(Uint8)
    },
    PackMapPhysicsGeometryV1: {
      shapeDataIndexArray: DynArray(Uint32)
    },
    PackMapPhysicsModelPropV1: {
      token: FixedArray(Uint32, 2),
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    shapeArray: DynArray("PackMapPhysicsShapeDataV1"),
    geometryArray: DynArray("PackMapPhysicsGeometryV1"),
    propModelArray: DynArray("PackMapPhysicsModelPropV1")
  }
};

const V2 = {
  chunkName: "phys",
  name: "PackMapPhysicsV2",
  version: 2,
  definitions: {
    PackMapPhysicsShapeDataV2: {
      scale: Float32,
      gameDataPtr: DynArray(Uint8)
    },
    PackMapPhysicsGeometryV2: {
      shapeDataIndexArray: DynArray(Uint32)
    },
    PackMapPhysicsModelPropV2: {
      token: FixedArray(Uint32, 2),
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelZoneV0: {
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    shapeArray: DynArray("PackMapPhysicsShapeDataV2"),
    geometryArray: DynArray("PackMapPhysicsGeometryV2"),
    propModelArray: DynArray("PackMapPhysicsModelPropV2"),
    zoneModelArray: DynArray("PackMapPhysicsModelZoneV0")
  }
};

const V3 = {
  chunkName: "phys",
  name: "PackMapPhysicsV3",
  version: 3,
  definitions: {
    PackMapPhysicsMeshV3: {
      indexArray: DynArray(Uint16),
      vertexArray: DynArray(FixedArray(Float32, 3)),
      moppCodeData: DynArray(Uint8)
    },
    PackMapPhysicsShapeDataV3: {
      scale: Float32,
      gameDataPtr: DynArray(Uint8)
    },
    PackMapPhysicsGeometryV3: {
      shapeDataIndexArray: DynArray(Uint32)
    },
    PackMapPhysicsModelPropV3: {
      token: FixedArray(Uint32, 2),
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelZoneV1: {
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    meshArray: DynArray("PackMapPhysicsMeshV3"),
    shapeArray: DynArray("PackMapPhysicsShapeDataV3"),
    geometryArray: DynArray("PackMapPhysicsGeometryV3"),
    propModelArray: DynArray("PackMapPhysicsModelPropV3"),
    zoneModelArray: DynArray("PackMapPhysicsModelZoneV1")
  }
};

const V4 = {
  chunkName: "phys",
  name: "PackMapPhysicsV4",
  version: 4,
  definitions: {
    PackMapPhysicsObjectV4: {
      mesh: Pointer("PackMapPhysicsMeshV4"),
      physics: Pointer("SceneFilePhysicsV7"),
      game: Pointer("SceneFileGameV5")
    },
    PackMapPhysicsMeshV4: {
      indexArray: DynArray(Uint16),
      vertexArray: DynArray(FixedArray(Float32, 3)),
      moppCodeData: DynArray(Uint8)
    },
    SceneFilePhysicsV7: {
      boxes: DynArray("SceneBoxShapeV7"),
      spheres: DynArray("SceneSphereShapeV7"),
      capsules: DynArray("SceneCapsuleShapeV7"),
      meshes: DynArray("SceneMeshShapeV7")
    },
    SceneBoxShapeV7: {
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4)
    },
    SceneSphereShapeV7: {
      center: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneCapsuleShapeV7: {
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneMeshShapeV7: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8)
    },
    SceneFileGameV5: {
      paths: DynArray("ScenePathV5"),
      meshes: DynArray("SceneGameMeshV5")
    },
    ScenePathV5: {
      properties: DynArray(Uint64),
      points: DynArray("ScenePathNodeV5"),
      closed: Uint8
    },
    ScenePathNodeV5: {
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4),
      radius: Float32,
      flags: Uint32,
      smoothing: Float32,
      singlesided: Uint8
    },
    SceneGameMeshV5: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      edges: DynArray("SceneEdgeV5"),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8),
      surfaceFlags: DynArray(Uint32)
    },
    SceneEdgeV5: {
      indices: FixedArray(Uint32, 2),
      triangles: DynArray(Uint32)
    },
    PackMapPhysicsGeometryV4: {
      filePath: Fileref(),
      quantizedExtents: Uint8,
      objRefArray: DynArray("PackMapPhysicsObjectRefV4")
    },
    PackMapPhysicsObjectRefV4: {
      sequence: Uint64,
      objectIndex: Uint32
    },
    PackMapPhysicsModelPropV4: {
      token: Uint64,
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelZoneV2: {
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelObstacleV4: {
      translate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    objectArray: DynArray("PackMapPhysicsObjectV4"),
    geometryArray: DynArray("PackMapPhysicsGeometryV4"),
    propModelArray: DynArray("PackMapPhysicsModelPropV4"),
    zoneModelArray: DynArray("PackMapPhysicsModelZoneV2"),
    obsModelArray: DynArray("PackMapPhysicsModelObstacleV4")
  }
};

const V5 = {
  chunkName: "phys",
  name: "PackMapPhysicsV5",
  version: 5,
  definitions: {
    PackMapPhysicsObjectV5: {
      mesh: Pointer("PackMapPhysicsMeshV5"),
      physics: Pointer("SceneFilePhysicsV7"),
      game: Pointer("SceneFileGameV5")
    },
    PackMapPhysicsMeshV5: {
      indexArray: DynArray(Uint16),
      vertexArray: DynArray(FixedArray(Float32, 3)),
      moppCodeData: DynArray(Uint8)
    },
    SceneFilePhysicsV7: {
      boxes: DynArray("SceneBoxShapeV7"),
      spheres: DynArray("SceneSphereShapeV7"),
      capsules: DynArray("SceneCapsuleShapeV7"),
      meshes: DynArray("SceneMeshShapeV7")
    },
    SceneBoxShapeV7: {
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4)
    },
    SceneSphereShapeV7: {
      center: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneCapsuleShapeV7: {
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneMeshShapeV7: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8)
    },
    SceneFileGameV5: {
      paths: DynArray("ScenePathV5"),
      meshes: DynArray("SceneGameMeshV5")
    },
    ScenePathV5: {
      properties: DynArray(Uint64),
      points: DynArray("ScenePathNodeV5"),
      closed: Uint8
    },
    ScenePathNodeV5: {
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4),
      radius: Float32,
      flags: Uint32,
      smoothing: Float32,
      singlesided: Uint8
    },
    SceneGameMeshV5: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      edges: DynArray("SceneEdgeV5"),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8),
      surfaceFlags: DynArray(Uint32)
    },
    SceneEdgeV5: {
      indices: FixedArray(Uint32, 2),
      triangles: DynArray(Uint32)
    },
    PackMapPhysicsGeometryV5: {
      filePath: RefString16(),
      quantizedExtents: Uint8,
      objRefArray: DynArray("PackMapPhysicsObjectRefV5")
    },
    PackMapPhysicsObjectRefV5: {
      sequence: Uint64,
      objectIndex: Uint32
    },
    PackMapPhysicsModelPropV5: {
      token: Uint64,
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelZoneV3: {
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelObstacleV5: {
      translate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    objectArray: DynArray("PackMapPhysicsObjectV5"),
    geometryArray: DynArray("PackMapPhysicsGeometryV5"),
    propModelArray: DynArray("PackMapPhysicsModelPropV5"),
    zoneModelArray: DynArray("PackMapPhysicsModelZoneV3"),
    obsModelArray: DynArray("PackMapPhysicsModelObstacleV5")
  }
};

const V6 = {
  chunkName: "phys",
  name: "PackMapPhysicsV6",
  version: 6,
  definitions: {
    PackMapPhysicsObjectV6: {
      mesh: Pointer("PackMapPhysicsMeshV6"),
      physics: Pointer("SceneFilePhysicsV7"),
      game: Pointer("SceneFileGameV6")
    },
    PackMapPhysicsMeshV6: {
      indexArray: DynArray(Uint16),
      vertexArray: DynArray(FixedArray(Float32, 3)),
      moppCodeData: DynArray(Uint8)
    },
    SceneFilePhysicsV7: {
      boxes: DynArray("SceneBoxShapeV7"),
      spheres: DynArray("SceneSphereShapeV7"),
      capsules: DynArray("SceneCapsuleShapeV7"),
      meshes: DynArray("SceneMeshShapeV7")
    },
    SceneBoxShapeV7: {
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4)
    },
    SceneSphereShapeV7: {
      center: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneCapsuleShapeV7: {
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneMeshShapeV7: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8)
    },
    SceneFileGameV6: {
      paths: DynArray("ScenePathV6"),
      meshes: DynArray("SceneGameMeshV6"),
      surfaces: DynArray("SceneGameSurfaceV6")
    },
    ScenePathV6: {
      properties: DynArray(Uint64),
      points: DynArray("ScenePathNodeV6"),
      closed: Uint8
    },
    ScenePathNodeV6: {
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4),
      flags: Uint32,
      smoothing: Float32,
      singlesided: Uint8
    },
    SceneGameMeshV6: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      edges: DynArray("SceneEdgeV6"),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8),
      surfaces: DynArray(Uint8)
    },
    SceneEdgeV6: {
      indices: FixedArray(Uint32, 2),
      triangles: DynArray(Uint32)
    },
    SceneGameSurfaceV6: {
      tokens: DynArray(Uint64)
    },
    PackMapPhysicsGeometryV6: {
      filePath: RefString16(),
      quantizedExtents: Uint8,
      objRefArray: DynArray("PackMapPhysicsObjectRefV6")
    },
    PackMapPhysicsObjectRefV6: {
      sequence: Uint64,
      objectIndex: Uint32
    },
    PackMapPhysicsModelPropV6: {
      token: Uint64,
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelZoneV4: {
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelObstacleV6: {
      translate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    objectArray: DynArray("PackMapPhysicsObjectV6"),
    geometryArray: DynArray("PackMapPhysicsGeometryV6"),
    propModelArray: DynArray("PackMapPhysicsModelPropV6"),
    zoneModelArray: DynArray("PackMapPhysicsModelZoneV4"),
    obsModelArray: DynArray("PackMapPhysicsModelObstacleV6")
  }
};

const V7 = {
  chunkName: "phys",
  name: "PackMapPhysicsV7",
  version: 7,
  definitions: {
    PackMapPhysicsBlockV7: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      objectArray: DynArray("PackMapPhysicsObjectV7"),
      geometryArray: DynArray("PackMapPhysicsGeometryV7"),
      propModelArray: DynArray("PackMapPhysicsModelPropV7"),
      zoneModelArray: DynArray("PackMapPhysicsModelZoneV5"),
      obsModelArray: DynArray("PackMapPhysicsModelObstacleV7")
    },
    PackMapPhysicsObjectV7: {
      mesh: Pointer("PackMapPhysicsMeshV7"),
      physics: Pointer("SceneFilePhysicsV7"),
      game: Pointer("SceneFileGameV6")
    },
    PackMapPhysicsMeshV7: {
      indexArray: DynArray(Uint16),
      vertexArray: DynArray(FixedArray(Float32, 3)),
      moppCodeData: DynArray(Uint8)
    },
    SceneFilePhysicsV7: {
      boxes: DynArray("SceneBoxShapeV7"),
      spheres: DynArray("SceneSphereShapeV7"),
      capsules: DynArray("SceneCapsuleShapeV7"),
      meshes: DynArray("SceneMeshShapeV7")
    },
    SceneBoxShapeV7: {
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4)
    },
    SceneSphereShapeV7: {
      center: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneCapsuleShapeV7: {
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneMeshShapeV7: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8)
    },
    SceneFileGameV6: {
      paths: DynArray("ScenePathV6"),
      meshes: DynArray("SceneGameMeshV6"),
      surfaces: DynArray("SceneGameSurfaceV6")
    },
    ScenePathV6: {
      properties: DynArray(Uint64),
      points: DynArray("ScenePathNodeV6"),
      closed: Uint8
    },
    ScenePathNodeV6: {
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4),
      flags: Uint32,
      smoothing: Float32,
      singlesided: Uint8
    },
    SceneGameMeshV6: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      edges: DynArray("SceneEdgeV6"),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8),
      surfaces: DynArray(Uint8)
    },
    SceneEdgeV6: {
      indices: FixedArray(Uint32, 2),
      triangles: DynArray(Uint32)
    },
    SceneGameSurfaceV6: {
      tokens: DynArray(Uint64)
    },
    PackMapPhysicsGeometryV7: {
      filePath: RefString16(),
      quantizedExtents: Uint8,
      objRefArray: DynArray("PackMapPhysicsObjectRefV7")
    },
    PackMapPhysicsObjectRefV7: {
      sequence: Uint64,
      objectIndex: Uint32
    },
    PackMapPhysicsModelPropV7: {
      token: Uint64,
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelZoneV5: {
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelObstacleV7: {
      translate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    blockArray: DynArray("PackMapPhysicsBlockV7")
  }
};

const V8 = {
  chunkName: "phys",
  name: "PackMapPhysicsV8",
  version: 8,
  definitions: {
    PackMapPhysicsBlockV8: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      objectArray: DynArray("PackMapPhysicsObjectV8"),
      geometryArray: DynArray("PackMapPhysicsGeometryV8"),
      propModelArray: DynArray("PackMapPhysicsModelPropV8"),
      debrisModelArray: DynArray("PackMapPhysicsModelPropV8"),
      zoneModelArray: DynArray("PackMapPhysicsModelZoneV6"),
      obsModelArray: DynArray("PackMapPhysicsModelObstacleV8")
    },
    PackMapPhysicsObjectV8: {
      mesh: Pointer("PackMapPhysicsMeshV8"),
      physics: Pointer("SceneFilePhysicsV7"),
      game: Pointer("SceneFileGameV6")
    },
    PackMapPhysicsMeshV8: {
      indexArray: DynArray(Uint16),
      vertexArray: DynArray(FixedArray(Float32, 3)),
      moppCodeData: DynArray(Uint8)
    },
    SceneFilePhysicsV7: {
      boxes: DynArray("SceneBoxShapeV7"),
      spheres: DynArray("SceneSphereShapeV7"),
      capsules: DynArray("SceneCapsuleShapeV7"),
      meshes: DynArray("SceneMeshShapeV7")
    },
    SceneBoxShapeV7: {
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4)
    },
    SceneSphereShapeV7: {
      center: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneCapsuleShapeV7: {
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneMeshShapeV7: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8)
    },
    SceneFileGameV6: {
      paths: DynArray("ScenePathV6"),
      meshes: DynArray("SceneGameMeshV6"),
      surfaces: DynArray("SceneGameSurfaceV6")
    },
    ScenePathV6: {
      properties: DynArray(Uint64),
      points: DynArray("ScenePathNodeV6"),
      closed: Uint8
    },
    ScenePathNodeV6: {
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4),
      flags: Uint32,
      smoothing: Float32,
      singlesided: Uint8
    },
    SceneGameMeshV6: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      edges: DynArray("SceneEdgeV6"),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8),
      surfaces: DynArray(Uint8)
    },
    SceneEdgeV6: {
      indices: FixedArray(Uint32, 2),
      triangles: DynArray(Uint32)
    },
    SceneGameSurfaceV6: {
      tokens: DynArray(Uint64)
    },
    PackMapPhysicsGeometryV8: {
      filePath: RefString16(),
      quantizedExtents: Uint8,
      objRefArray: DynArray("PackMapPhysicsObjectRefV8")
    },
    PackMapPhysicsObjectRefV8: {
      sequence: Uint64,
      objectIndex: Uint32
    },
    PackMapPhysicsModelPropV8: {
      token: Uint64,
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelZoneV6: {
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelObstacleV8: {
      translate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    blockArray: DynArray("PackMapPhysicsBlockV8")
  }
};

const V9 = {
  chunkName: "phys",
  name: "PackMapPhysicsV9",
  version: 9,
  definitions: {
    PackMapPhysicsBlockV9: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      objectArray: DynArray("PackMapPhysicsObjectV9"),
      geometryArray: DynArray("PackMapPhysicsGeometryV9"),
      propModelArray: DynArray("PackMapPhysicsModelPropV9"),
      debrisModelArray: DynArray("PackMapPhysicsModelPropV9"),
      zoneModelArray: DynArray("PackMapPhysicsModelZoneV7"),
      obsModelArray: DynArray("PackMapPhysicsModelObstacleV9")
    },
    PackMapPhysicsObjectV9: {
      mesh: Pointer("PackMapPhysicsMeshV9"),
      sceneFilePtr: DynArray(Uint8)
    },
    PackMapPhysicsMeshV9: {
      indexArray: DynArray(Uint16),
      vertexArray: DynArray(FixedArray(Float32, 3)),
      moppCodeData: DynArray(Uint8)
    },
    PackMapPhysicsGeometryV9: {
      filePath: RefString16(),
      quantizedExtents: Uint8,
      objRefArray: DynArray("PackMapPhysicsObjectRefV9")
    },
    PackMapPhysicsObjectRefV9: {
      sequence: Uint64,
      objectIndex: Uint32
    },
    PackMapPhysicsModelPropV9: {
      token: Uint64,
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelZoneV7: {
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelObstacleV9: {
      translate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    blockArray: DynArray("PackMapPhysicsBlockV9")
  }
};

const V10 = {
  chunkName: "phys",
  name: "PackMapPhysicsV10",
  version: 10,
  definitions: {
    PackMapPhysicsBlockV10: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      objectArray: DynArray("PackMapPhysicsObjectV10"),
      geometryArray: DynArray("PackMapPhysicsGeometryV10"),
      propModelArray: DynArray("PackMapPhysicsModelPropV10"),
      debrisModelArray: DynArray("PackMapPhysicsModelPropV10"),
      zoneModelArray: DynArray("PackMapPhysicsModelZoneV8"),
      obsModelArray: DynArray("PackMapPhysicsModelObstacleV10")
    },
    PackMapPhysicsObjectV10: {
      mesh: Pointer("PackMapPhysicsMeshV10"),
      sceneFilePtr: DynArray(Uint8)
    },
    PackMapPhysicsMeshV10: {
      indexArray: DynArray(Uint16),
      vertexArray: DynArray(FixedArray(Float32, 3)),
      moppCodeData: DynArray(Uint8)
    },
    PackMapPhysicsGeometryV10: {
      filePath: RefString16(),
      quantizedExtents: Uint8,
      objRefArray: DynArray("PackMapPhysicsObjectRefV10"),
      surface: DynArray(Uint16)
    },
    PackMapPhysicsObjectRefV10: {
      sequence: Uint64,
      objectIndex: Uint32
    },
    PackMapPhysicsModelPropV10: {
      token: Uint64,
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelZoneV8: {
      scale: Float32,
      translate: FixedArray(Float32, 3),
      rotate: FixedArray(Float32, 4),
      geometryIndex: Uint32
    },
    PackMapPhysicsModelObstacleV10: {
      translate: FixedArray(Float32, 3),
      geometryIndex: Uint32
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    blockArray: DynArray("PackMapPhysicsBlockV10")
  }
};

export const latest = V10;
export const definitions = { V1, V2, V3, V4, V5, V6, V7, V8, V9, V10 };
export const definitionArray = Object.values(definitions);