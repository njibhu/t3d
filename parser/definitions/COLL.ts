import { Uint64, Uint32, DynArray, Float32, FixedArray, Uint16, Uint8 } from "../src/types";

const V0 = {
  chunkName: "COLL",
  name: "ModelFileCollisionV0",
  version: 0,
  definitions: {
    ModelCollisionMeshV0: {
      animationSequence: Uint64,
      vertices: DynArray(FixedArray(Float32, 3)),
      indices: DynArray(Uint16),
      surfaces: DynArray(Uint8)
    },
    ModelCollisionCloudV0: {
      animationSequence: Uint64,
      points: DynArray(FixedArray(Float32, 3)),
      surface: Uint8
    },
    ModelCollisionCubeV0: {
      transform: FixedArray(FixedArray(Float32, 4), 3),
      surface: Uint8
    },
    ModelCollisionSphereV0: {
      radius: Float32,
      position: FixedArray(Float32, 3),
      surface: Uint8
    },
    ModelCollisionSurfaceV0: {
      tokens: DynArray(Uint64)
    }
  },
  root: {
    meshes: DynArray("ModelCollisionMeshV0"),
    clouds: DynArray("ModelCollisionCloudV0"),
    cubes: DynArray("ModelCollisionCubeV0"),
    spheres: DynArray("ModelCollisionSphereV0"),
    surfaces: DynArray("ModelCollisionSurfaceV0")
  }
};

const V1 = {
  chunkName: "COLL",
  name: "ModelFileCollisionV1",
  version: 1,
  definitions: {
    ModelCollisionMeshV1: {
      animationSequences: DynArray(Uint64),
      vertices: DynArray(FixedArray(Float32, 3)),
      indices: DynArray(Uint16),
      surfaces: DynArray(Uint8)
    },
    ModelCollisionCloudV1: {
      animationSequence: Uint64,
      points: DynArray(FixedArray(Float32, 3)),
      surface: Uint8
    },
    ModelCollisionCubeV1: {
      transform: FixedArray(FixedArray(Float32, 4), 3),
      surface: Uint8
    },
    ModelCollisionSphereV1: {
      radius: Float32,
      position: FixedArray(Float32, 3),
      surface: Uint8
    },
    ModelCollisionSurfaceV1: {
      tokens: DynArray(Uint64)
    }
  },
  root: {
    meshes: DynArray("ModelCollisionMeshV1"),
    clouds: DynArray("ModelCollisionCloudV1"),
    cubes: DynArray("ModelCollisionCubeV1"),
    spheres: DynArray("ModelCollisionSphereV1"),
    surfaces: DynArray("ModelCollisionSurfaceV1")
  }
};

const V2 = {
  chunkName: "COLL",
  name: "ModelFileCollisionV8",
  version: 2,
  definitions: {
    ModelCollisionMeshV8: {
      animationSequences: DynArray(Uint64),
      vertices: DynArray(FixedArray(Float32, 3)),
      indices: DynArray(Uint16),
      surfaces: DynArray(Uint8)
    },
    ModelCollisionCloudV8: {
      animationSequence: Uint64,
      points: DynArray(FixedArray(Float32, 3)),
      surface: Uint8
    },
    ModelCollisionCubeV8: {
      transform: FixedArray(FixedArray(Float32, 4), 3),
      surface: Uint8
    },
    ModelCollisionSphereV8: {
      radius: Float32,
      position: FixedArray(Float32, 3),
      surface: Uint8
    },
    ModelCollisionCapsuleV8: {
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32,
      surface: Uint8
    },
    ModelCollisionSurfaceV8: {
      tokens: DynArray(Uint64)
    }
  },
  root: {
    meshes: DynArray("ModelCollisionMeshV8"),
    clouds: DynArray("ModelCollisionCloudV8"),
    cubes: DynArray("ModelCollisionCubeV8"),
    spheres: DynArray("ModelCollisionSphereV8"),
    capsules: DynArray("ModelCollisionCapsuleV8"),
    surfaces: DynArray("ModelCollisionSurfaceV8")
  }
};

const V3 = {
  chunkName: "COLL",
  name: "ModelFileCollisionV9",
  version: 3,
  definitions: {
    ModelCollisionAnimationV9: {
      animation: Uint64,
      objects: DynArray("ModelCollisionAnimatedObjectV9")
    },
    ModelCollisionAnimatedObjectV9: {
      shapeIndices: DynArray(Uint32),
      keyFrames: DynArray("ModelCollisionKeyFrameV9")
    },
    ModelCollisionKeyFrameV9: {
      time: Float32,
      position: FixedArray(Float32, 3),
      orientation: FixedArray(Float32, 4)
    },
    ModelCollisionMeshV9: {
      vertices: DynArray(FixedArray(Float32, 3)),
      indices: DynArray(Uint16),
      surfaces: DynArray(Uint8)
    },
    ModelCollisionBoxV9: {
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4),
      surface: Uint8
    },
    ModelCollisionSphereV9: {
      radius: Float32,
      position: FixedArray(Float32, 3),
      surface: Uint8
    },
    ModelCollisionCapsuleV9: {
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32,
      surface: Uint8
    },
    ModelCollisionSurfaceV9: {
      tokens: DynArray(Uint64)
    }
  },
  root: {
    animations: DynArray("ModelCollisionAnimationV9"),
    meshes: DynArray("ModelCollisionMeshV9"),
    boxes: DynArray("ModelCollisionBoxV9"),
    spheres: DynArray("ModelCollisionSphereV9"),
    capsules: DynArray("ModelCollisionCapsuleV9"),
    surfaces: DynArray("ModelCollisionSurfaceV9")
  }
};

const V4 = {
  chunkName: "COLL",
  name: "ModelFileCollisionV10",
  version: 4,
  definitions: {
    ModelCollisionAnimationV10: {
      animation: Uint64,
      objects: DynArray("ModelCollisionAnimatedObjectV10"),
      targetPoints: DynArray(FixedArray(Float32, 3))
    },
    ModelCollisionAnimatedObjectV10: {
      shapeIndices: DynArray(Uint32),
      keyFrames: DynArray("ModelCollisionKeyFrameV10")
    },
    ModelCollisionKeyFrameV10: {
      time: Float32,
      position: FixedArray(Float32, 3),
      orientation: FixedArray(Float32, 4)
    },
    ModelCollisionMeshV10: {
      vertices: DynArray(FixedArray(Float32, 3)),
      indices: DynArray(Uint16),
      surfaces: DynArray(Uint8),
      navSeedPoints: DynArray(FixedArray(Float32, 3))
    },
    ModelCollisionBoxV10: {
      dimensions: FixedArray(Float32, 3),
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 4),
      surface: Uint8
    },
    ModelCollisionSphereV10: {
      radius: Float32,
      position: FixedArray(Float32, 3),
      surface: Uint8
    },
    ModelCollisionCapsuleV10: {
      p0: FixedArray(Float32, 3),
      p1: FixedArray(Float32, 3),
      radius: Float32,
      surface: Uint8
    },
    ModelCollisionSurfaceV10: {
      tokens: DynArray(Uint64)
    }
  },
  root: {
    animations: DynArray("ModelCollisionAnimationV10"),
    meshes: DynArray("ModelCollisionMeshV10"),
    boxes: DynArray("ModelCollisionBoxV10"),
    spheres: DynArray("ModelCollisionSphereV10"),
    capsules: DynArray("ModelCollisionCapsuleV10"),
    surfaces: DynArray("ModelCollisionSurfaceV10")
  }
};

export const latest = V4;
export const definitions = { V0, V1, V2, V3, V4 };
export const definitionArray = Object.values(definitions);