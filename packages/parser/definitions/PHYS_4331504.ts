import { FixedArray, Float32, DynArray, Uint16, Uint8, Uint64, Uint32 } from "../src/types";

export const V0 = {
  chunkName: "PHYS",
  name: "SceneFilePhysicsV0",
  version: 0,
  definitions: {
    SceneShapeV0: {
      shapeOffset: Uint32
    },
    SceneCollisionShapeV0: {
      shapeIndex: Uint32
    },
    SceneNamedShapeV0: {
      shapeIndex: Uint32
    }
  },
  root: {
    shapeData: DynArray(Uint8),
    shapes: DynArray("SceneShapeV0"),
    collisionShapes: DynArray("SceneCollisionShapeV0"),
    namedShapes: DynArray("SceneNamedShapeV0")
  }
};

export const V1 = {
  chunkName: "PHYS",
  name: "SceneFilePhysicsV1",
  version: 1,
  definitions: {
    SceneShapeV1: {
      shapeOffset: Uint32
    },
    SceneCollisionShapeV1: {
      shapeIndex: Uint32
    },
    SceneNamedShapeV1: {
      shapeIndex: Uint32
    },
    ScenePathPhysicsV1: {
      pathData: DynArray(FixedArray(Float32, 4))
    }
  },
  root: {
    shapeData: DynArray(Uint8),
    shapes: DynArray("SceneShapeV1"),
    collisionShapes: DynArray("SceneCollisionShapeV1"),
    namedShapes: DynArray("SceneNamedShapeV1"),
    paths: DynArray("ScenePathPhysicsV1")
  }
};

export const V2 = {
  chunkName: "PHYS",
  name: "SceneFilePhysicsV2",
  version: 2,
  definitions: {
    SceneShapeV2: {
      shapeOffset: Uint32
    },
    SceneCollisionShapeV2: {
      shapeIndex: Uint32
    },
    SceneQueryShapeV2: {
      shapeIndex: Uint32
    },
    SceneNamedShapeV2: {
      shapeIndex: Uint32
    },
    ScenePathPhysicsV2: {
      pathData: DynArray(FixedArray(Float32, 4))
    }
  },
  root: {
    shapeData: DynArray(Uint8),
    shapes: DynArray("SceneShapeV2"),
    collisionShapes: DynArray("SceneCollisionShapeV2"),
    queryShapes: DynArray("SceneQueryShapeV2"),
    namedShapes: DynArray("SceneNamedShapeV2"),
    paths: DynArray("ScenePathPhysicsV2")
  }
};

export const V3 = {
  chunkName: "PHYS",
  name: "SceneFilePhysicsV3",
  version: 3,
  definitions: {
    SceneShapeV3: {
      surfaces: DynArray(Uint8)
    },
    SceneShapeSurfaceV3: {
      tokens: DynArray(Uint64)
    },
    SceneCollisionShapeV3: {
      shapeIndex: Uint32
    },
    SceneTriggerShapeV3: {
      shapeIndex: Uint32,
      flags: Uint32
    },
    SceneNamedShapeV3: {
      shapeIndex: Uint32
    },
    ScenePathPhysicsV3: {
      pathData: DynArray(FixedArray(Float32, 4))
    }
  },
  root: {
    shapeData: DynArray(Uint8),
    shapes: DynArray("SceneShapeV3"),
    surfaces: DynArray("SceneShapeSurfaceV3"),
    collisionShapes: DynArray("SceneCollisionShapeV3"),
    triggerShapes: DynArray("SceneTriggerShapeV3"),
    namedShapes: DynArray("SceneNamedShapeV3"),
    paths: DynArray("ScenePathPhysicsV3")
  }
};

export const V4 = {
  chunkName: "PHYS",
  name: "SceneFilePhysicsV4",
  version: 4,
  definitions: {
    SceneShapeV4: {
      surfaces: DynArray(Uint8)
    },
    SceneShapeSurfaceV4: {
      tokens: DynArray(Uint64)
    },
    SceneCollisionShapeV4: {
      shapeIndex: Uint32
    },
    SceneTriggerShapeV4: {
      shapeIndex: Uint32,
      flags: Uint32
    },
    SceneNamedShapeV4: {
      shapeIndex: Uint32
    }
  },
  root: {
    shapeData: DynArray(Uint8),
    shapes: DynArray("SceneShapeV4"),
    surfaces: DynArray("SceneShapeSurfaceV4"),
    collisionShapes: DynArray("SceneCollisionShapeV4"),
    triggerShapes: DynArray("SceneTriggerShapeV4"),
    namedShapes: DynArray("SceneNamedShapeV4")
  }
};

export const V5 = {
  chunkName: "PHYS",
  name: "SceneFilePhysicsV5",
  version: 5,
  definitions: {
    SceneShapeSurfaceV5: {
      tokens: DynArray(Uint64)
    },
    SceneBoxShapeV5: {
      surface: Uint8,
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4)
    },
    SceneSphereShapeV5: {
      surface: Uint8,
      center: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneMeshShapeV5: {
      surfaces: DynArray(Uint8),
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8)
    },
    SceneCollisionShapeV5: {
      shapeIndex: Uint32
    },
    SceneTriggerShapeV5: {
      shapeIndex: Uint32,
      flags: Uint32
    },
    SceneNamedShapeV5: {
      shapeIndex: Uint32
    }
  },
  root: {
    surfaces: DynArray("SceneShapeSurfaceV5"),
    boxes: DynArray("SceneBoxShapeV5"),
    spheres: DynArray("SceneSphereShapeV5"),
    meshes: DynArray("SceneMeshShapeV5"),
    collisionShapes: DynArray("SceneCollisionShapeV5"),
    triggerShapes: DynArray("SceneTriggerShapeV5"),
    namedShapes: DynArray("SceneNamedShapeV5")
  }
};

export const V6 = {
  chunkName: "PHYS",
  name: "SceneFilePhysicsV6",
  version: 6,
  definitions: {
    SceneShapeSurfaceV6: {
      tokens: DynArray(Uint64)
    },
    SceneBoxShapeV6: {
      surface: Uint8,
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4)
    },
    SceneSphereShapeV6: {
      surface: Uint8,
      center: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneCapsuleShapeV6: {
      surface: Uint8,
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneMeshShapeV6: {
      surfaces: DynArray(Uint8),
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8)
    },
    SceneCollisionShapeV6: {
      shapeIndex: Uint32
    },
    SceneTriggerShapeV6: {
      shapeIndex: Uint32,
      flags: Uint32
    },
    SceneNamedShapeV6: {
      shapeIndex: Uint32
    }
  },
  root: {
    surfaces: DynArray("SceneShapeSurfaceV6"),
    boxes: DynArray("SceneBoxShapeV6"),
    spheres: DynArray("SceneSphereShapeV6"),
    capsules: DynArray("SceneCapsuleShapeV6"),
    meshes: DynArray("SceneMeshShapeV6"),
    collisionShapes: DynArray("SceneCollisionShapeV6"),
    triggerShapes: DynArray("SceneTriggerShapeV6"),
    namedShapes: DynArray("SceneNamedShapeV6")
  }
};

export const V7 = {
  chunkName: "PHYS",
  name: "SceneFilePhysicsV7",
  version: 7,
  definitions: {
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
    }
  },
  root: {
    boxes: DynArray("SceneBoxShapeV7"),
    spheres: DynArray("SceneSphereShapeV7"),
    capsules: DynArray("SceneCapsuleShapeV7"),
    meshes: DynArray("SceneMeshShapeV7")
  }
};

export const V8 = {
  chunkName: "PHYS",
  name: "SceneFilePhysicsV8",
  version: 8,
  definitions: {
    SceneBoxShapeV8: {
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4)
    },
    SceneSphereShapeV8: {
      center: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneCapsuleShapeV8: {
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32
    },
    SceneMeshShapeV8: {
      indices: DynArray(Uint16),
      vertices: DynArray(FixedArray(Float32, 3)),
      moppInfo: FixedArray(Float32, 4),
      moppBytes: DynArray(Uint8),
      surfaces: DynArray(Uint8)
    },
    SceneSurfaceV8: {
      tokens: DynArray(Uint64)
    }
  },
  root: {
    boxes: DynArray("SceneBoxShapeV8"),
    spheres: DynArray("SceneSphereShapeV8"),
    capsules: DynArray("SceneCapsuleShapeV8"),
    meshes: DynArray("SceneMeshShapeV8"),
    surfaces: DynArray("SceneSurfaceV8")
  }
};

export const latest = V8;
export const definitionArray = [V0, V1, V2, V3, V4, V5, V6, V7, V8];