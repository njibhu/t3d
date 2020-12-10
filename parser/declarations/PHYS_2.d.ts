export namespace V0_N {
  export type SceneFilePhysicsV0 = {
    shapeData: Array<number>,
    shapes: Array<SceneShapeV0>,
    collisionShapes: Array<SceneCollisionShapeV0>,
    namedShapes: Array<SceneNamedShapeV0>
  }

  export type SceneShapeV0 = {
    shapeOffset: number
  }

  export type SceneCollisionShapeV0 = {
    shapeIndex: number
  }

  export type SceneNamedShapeV0 = {
    shapeIndex: number
  }

}

export type V0 = V0_N.SceneFilePhysicsV0;

export namespace V1_N {
  export type SceneFilePhysicsV1 = {
    shapeData: Array<number>,
    shapes: Array<SceneShapeV1>,
    collisionShapes: Array<SceneCollisionShapeV1>,
    namedShapes: Array<SceneNamedShapeV1>,
    paths: Array<ScenePathPhysicsV1>
  }

  export type SceneShapeV1 = {
    shapeOffset: number
  }

  export type SceneCollisionShapeV1 = {
    shapeIndex: number
  }

  export type SceneNamedShapeV1 = {
    shapeIndex: number
  }

  export type ScenePathPhysicsV1 = {
    pathData: Array<Array<number>>
  }

}

export type V1 = V1_N.SceneFilePhysicsV1;

export namespace V2_N {
  export type SceneFilePhysicsV2 = {
    shapeData: Array<number>,
    shapes: Array<SceneShapeV2>,
    collisionShapes: Array<SceneCollisionShapeV2>,
    queryShapes: Array<SceneQueryShapeV2>,
    namedShapes: Array<SceneNamedShapeV2>,
    paths: Array<ScenePathPhysicsV2>
  }

  export type SceneShapeV2 = {
    shapeOffset: number
  }

  export type SceneCollisionShapeV2 = {
    shapeIndex: number
  }

  export type SceneQueryShapeV2 = {
    shapeIndex: number
  }

  export type SceneNamedShapeV2 = {
    shapeIndex: number
  }

  export type ScenePathPhysicsV2 = {
    pathData: Array<Array<number>>
  }

}

export type V2 = V2_N.SceneFilePhysicsV2;

export namespace V3_N {
  export type SceneFilePhysicsV3 = {
    shapeData: Array<number>,
    shapes: Array<SceneShapeV3>,
    surfaces: Array<SceneShapeSurfaceV3>,
    collisionShapes: Array<SceneCollisionShapeV3>,
    triggerShapes: Array<SceneTriggerShapeV3>,
    namedShapes: Array<SceneNamedShapeV3>,
    paths: Array<ScenePathPhysicsV3>
  }

  export type SceneShapeV3 = {
    surfaces: Array<number>
  }

  export type SceneShapeSurfaceV3 = {
    tokens: Array<BigInt>
  }

  export type SceneCollisionShapeV3 = {
    shapeIndex: number
  }

  export type SceneTriggerShapeV3 = {
    shapeIndex: number,
    flags: number
  }

  export type SceneNamedShapeV3 = {
    shapeIndex: number
  }

  export type ScenePathPhysicsV3 = {
    pathData: Array<Array<number>>
  }

}

export type V3 = V3_N.SceneFilePhysicsV3;

export namespace V4_N {
  export type SceneFilePhysicsV4 = {
    shapeData: Array<number>,
    shapes: Array<SceneShapeV4>,
    surfaces: Array<SceneShapeSurfaceV4>,
    collisionShapes: Array<SceneCollisionShapeV4>,
    triggerShapes: Array<SceneTriggerShapeV4>,
    namedShapes: Array<SceneNamedShapeV4>
  }

  export type SceneShapeV4 = {
    surfaces: Array<number>
  }

  export type SceneShapeSurfaceV4 = {
    tokens: Array<BigInt>
  }

  export type SceneCollisionShapeV4 = {
    shapeIndex: number
  }

  export type SceneTriggerShapeV4 = {
    shapeIndex: number,
    flags: number
  }

  export type SceneNamedShapeV4 = {
    shapeIndex: number
  }

}

export type V4 = V4_N.SceneFilePhysicsV4;

export namespace V5_N {
  export type SceneFilePhysicsV5 = {
    surfaces: Array<SceneShapeSurfaceV5>,
    boxes: Array<SceneBoxShapeV5>,
    spheres: Array<SceneSphereShapeV5>,
    meshes: Array<SceneMeshShapeV5>,
    collisionShapes: Array<SceneCollisionShapeV5>,
    triggerShapes: Array<SceneTriggerShapeV5>,
    namedShapes: Array<SceneNamedShapeV5>
  }

  export type SceneShapeSurfaceV5 = {
    tokens: Array<BigInt>
  }

  export type SceneBoxShapeV5 = {
    surface: number,
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>
  }

  export type SceneSphereShapeV5 = {
    surface: number,
    center: Array<number>,
    radius: number
  }

  export type SceneMeshShapeV5 = {
    surfaces: Array<number>,
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppInfo: Array<number>,
    moppBytes: Array<number>
  }

  export type SceneCollisionShapeV5 = {
    shapeIndex: number
  }

  export type SceneTriggerShapeV5 = {
    shapeIndex: number,
    flags: number
  }

  export type SceneNamedShapeV5 = {
    shapeIndex: number
  }

}

export type V5 = V5_N.SceneFilePhysicsV5;

export namespace V6_N {
  export type SceneFilePhysicsV6 = {
    surfaces: Array<SceneShapeSurfaceV6>,
    boxes: Array<SceneBoxShapeV6>,
    spheres: Array<SceneSphereShapeV6>,
    capsules: Array<SceneCapsuleShapeV6>,
    meshes: Array<SceneMeshShapeV6>,
    collisionShapes: Array<SceneCollisionShapeV6>,
    triggerShapes: Array<SceneTriggerShapeV6>,
    namedShapes: Array<SceneNamedShapeV6>
  }

  export type SceneShapeSurfaceV6 = {
    tokens: Array<BigInt>
  }

  export type SceneBoxShapeV6 = {
    surface: number,
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>
  }

  export type SceneSphereShapeV6 = {
    surface: number,
    center: Array<number>,
    radius: number
  }

  export type SceneCapsuleShapeV6 = {
    surface: number,
    p0: Array<number>,
    p1: Array<number>,
    radius: number
  }

  export type SceneMeshShapeV6 = {
    surfaces: Array<number>,
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppInfo: Array<number>,
    moppBytes: Array<number>
  }

  export type SceneCollisionShapeV6 = {
    shapeIndex: number
  }

  export type SceneTriggerShapeV6 = {
    shapeIndex: number,
    flags: number
  }

  export type SceneNamedShapeV6 = {
    shapeIndex: number
  }

}

export type V6 = V6_N.SceneFilePhysicsV6;

export namespace V7_N {
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

}

export type V7 = V7_N.SceneFilePhysicsV7;

export namespace V8_N {
  export type SceneFilePhysicsV8 = {
    boxes: Array<SceneBoxShapeV8>,
    spheres: Array<SceneSphereShapeV8>,
    capsules: Array<SceneCapsuleShapeV8>,
    meshes: Array<SceneMeshShapeV8>,
    surfaces: Array<SceneSurfaceV8>
  }

  export type SceneBoxShapeV8 = {
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>
  }

  export type SceneSphereShapeV8 = {
    center: Array<number>,
    radius: number
  }

  export type SceneCapsuleShapeV8 = {
    p0: Array<number>,
    p1: Array<number>,
    radius: number
  }

  export type SceneMeshShapeV8 = {
    indices: Array<number>,
    vertices: Array<Array<number>>,
    moppInfo: Array<number>,
    moppBytes: Array<number>,
    surfaces: Array<number>
  }

  export type SceneSurfaceV8 = {
    tokens: Array<BigInt>
  }

}

export type V8 = V8_N.SceneFilePhysicsV8;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8;
export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8;
export type V4_U = V4 | V5 | V6 | V7 | V8;
export type V5_U = V5 | V6 | V7 | V8;
export type V6_U = V6 | V7 | V8;
export type V7_U = V7 | V8;
export type V8_U = V8;
