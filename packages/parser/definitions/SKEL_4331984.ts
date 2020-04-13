import { FixedArray, Float32, Uint64, DynArray, Uint32 } from "../src/types";

module.exports = [
  {
    chunkName: "SKEL",
    name: "SceneFileSkeletonV0",
    version: 0,
    definitions: {
      SceneBoneV0: {
        vertexA: FixedArray(Float32, 3),
        vertexB: FixedArray(Float32, 3),
        radius: Float32,
        mass: Float32
      },
      SceneJointV0: {
        bones: FixedArray(Uint32, 2),
        pivots: FixedArray(FixedArray(Float32, 3), 2),
        twists: FixedArray(FixedArray(Float32, 3), 2),
        planes: FixedArray(FixedArray(Float32, 3), 2),
        coneLimit: Float32,
        planeMin: Float32,
        planeMax: Float32,
        twistMin: Float32,
        twistMax: Float32
      },
      SceneUnmappedBoneV0: {
        modelBoneIndex: Uint32,
        sceneBoneIndex: Uint32,
        localPose: FixedArray(FixedArray(Float32, 4), 3)
      }
    },
    root: {
      bones: DynArray("SceneBoneV0"),
      joints: DynArray("SceneJointV0"),
      unmappedBones: DynArray("SceneUnmappedBoneV0"),
      ragdollToModel: DynArray(Uint32),
      modelToRagdoll: DynArray(Uint32)
    }
  },
  {
    chunkName: "SKEL",
    name: "SceneFileSkeletonV1",
    version: 1,
    definitions: {
      SceneBoneV1: {
        vertexA: FixedArray(Float32, 3),
        vertexB: FixedArray(Float32, 3),
        radius: Float32,
        mass: Float32
      },
      SceneJointV1: {
        bones: FixedArray(Uint32, 2),
        pivots: FixedArray(FixedArray(Float32, 3), 2),
        twists: FixedArray(FixedArray(Float32, 3), 2),
        planes: FixedArray(FixedArray(Float32, 3), 2),
        coneLimit: Float32,
        planeMin: Float32,
        planeMax: Float32,
        twistMin: Float32,
        twistMax: Float32
      },
      SceneHingeJointV1: {
        bones: FixedArray(Uint32, 2),
        pivots: FixedArray(FixedArray(Float32, 3), 2),
        hinges: FixedArray(FixedArray(Float32, 3), 2),
        normals: FixedArray(FixedArray(Float32, 3), 2),
        limitMin: Float32,
        limitMax: Float32
      },
      SceneUnmappedBoneV1: {
        modelBoneIndex: Uint32,
        sceneBoneIndex: Uint32,
        localPose: FixedArray(FixedArray(Float32, 4), 3)
      }
    },
    root: {
      bones: DynArray("SceneBoneV1"),
      joints: DynArray("SceneJointV1"),
      hingeJoints: DynArray("SceneHingeJointV1"),
      unmappedBones: DynArray("SceneUnmappedBoneV1"),
      ragdollToModel: DynArray(Uint32),
      modelToRagdoll: DynArray(Uint32)
    }
  },
  {
    chunkName: "SKEL",
    name: "SceneFileSkeletonV2",
    version: 2,
    definitions: {
      SceneBoneV2: {
        vertexA: FixedArray(Float32, 3),
        vertexB: FixedArray(Float32, 3),
        radius: Float32,
        mass: Float32
      },
      SceneJointV2: {
        bones: FixedArray(Uint32, 2),
        pivots: FixedArray(FixedArray(Float32, 3), 2),
        twists: FixedArray(FixedArray(Float32, 3), 2),
        planes: FixedArray(FixedArray(Float32, 3), 2),
        coneLimit: Float32,
        planeMin: Float32,
        planeMax: Float32,
        twistMin: Float32,
        twistMax: Float32
      },
      SceneHingeJointV2: {
        bones: FixedArray(Uint32, 2),
        pivots: FixedArray(FixedArray(Float32, 3), 2),
        hinges: FixedArray(FixedArray(Float32, 3), 2),
        normals: FixedArray(FixedArray(Float32, 3), 2),
        limitMin: Float32,
        limitMax: Float32
      }
    },
    root: {
      bones: DynArray("SceneBoneV2"),
      joints: DynArray("SceneJointV2"),
      hingeJoints: DynArray("SceneHingeJointV2"),
      ragdollToModel: DynArray(Uint32)
    }
  },
  {
    chunkName: "SKEL",
    name: "SceneFileSkeletonV3",
    version: 3,
    definitions: {
      SceneBoneV3: {
        vertexA: FixedArray(Float32, 3),
        vertexB: FixedArray(Float32, 3),
        radius: Float32,
        mass: Float32,
        name: Uint64
      },
      SceneJointV3: {
        bones: FixedArray(Uint32, 2),
        pivots: FixedArray(FixedArray(Float32, 3), 2),
        twists: FixedArray(FixedArray(Float32, 3), 2),
        planes: FixedArray(FixedArray(Float32, 3), 2),
        coneLimit: Float32,
        planeMin: Float32,
        planeMax: Float32,
        twistMin: Float32,
        twistMax: Float32
      },
      SceneHingeJointV3: {
        bones: FixedArray(Uint32, 2),
        pivots: FixedArray(FixedArray(Float32, 3), 2),
        hinges: FixedArray(FixedArray(Float32, 3), 2),
        normals: FixedArray(FixedArray(Float32, 3), 2),
        limitMin: Float32,
        limitMax: Float32
      }
    },
    root: {
      bones: DynArray("SceneBoneV3"),
      joints: DynArray("SceneJointV3"),
      hingeJoints: DynArray("SceneHingeJointV3"),
      ragdollToModel: DynArray(Uint32)
    }
  }
]