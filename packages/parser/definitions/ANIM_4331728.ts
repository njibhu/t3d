import { Uint64, Float32, FixedArray, DynArray, Filename, Uint32 } from "../src/types";

module.exports = [
  {
    chunkName: "ANIM",
    name: "SceneFileAnimationV0",
    version: 0,
    definitions: {
      SceneAnimationV0: {
        name: Uint64,
        motion: "SceneMotionV0",
        actionPoints: DynArray("SceneActionPointV0")
      },
      SceneMotionV0: {
        keys: DynArray("SceneKeyframeV0")
      },
      SceneKeyframeV0: {
        time: Float32,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4)
      },
      SceneActionPointV0: {
        name: Uint64,
        motion: "SceneMotionV0"
      },
      SceneAnimationImportV0: {
        filename: Filename(),
        animNames: DynArray(Uint64)
      }
    },
    root: {
      animations: DynArray("SceneAnimationV0"),
      imports: DynArray("SceneAnimationImportV0")
    }
  },
  {
    chunkName: "ANIM",
    name: "SceneFileAnimationV1",
    version: 1,
    definitions: {
      SceneAnimationV1: {
        name: Uint64,
        motion: "SceneMotionV1",
        actionPoints: DynArray("SceneActionPointV1"),
        events: DynArray("SceneAnimationEventV1")
      },
      SceneMotionV1: {
        keys: DynArray("SceneKeyframeV1")
      },
      SceneKeyframeV1: {
        time: Float32,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4)
      },
      SceneActionPointV1: {
        name: Uint64,
        motion: "SceneMotionV1"
      },
      SceneAnimationEventV1: {
        name: Uint64,
        time: Float32
      },
      SceneAnimationImportV1: {
        filename: Filename(),
        animNames: DynArray(Uint64)
      }
    },
    root: {
      animations: DynArray("SceneAnimationV1"),
      imports: DynArray("SceneAnimationImportV1")
    }
  },
  {
    chunkName: "ANIM",
    name: "SceneFileAnimationV2",
    version: 2,
    definitions: {
      SceneAnimationV2: {
        name: Uint64,
        motion: "SceneMotionV2",
        actionPoints: DynArray("SceneActionPointV2"),
        events: DynArray("SceneAnimationEventV2")
      },
      SceneMotionV2: {
        keys: DynArray("SceneKeyframeV2")
      },
      SceneKeyframeV2: {
        time: Float32,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4)
      },
      SceneActionPointV2: {
        name: Uint64,
        motion: "SceneMotionV2"
      },
      SceneAnimationEventV2: {
        name: Uint64,
        time: Float32
      },
      ScenePoseV2: {
        name: Uint64,
        transforms: DynArray("SceneTransformV2")
      },
      SceneTransformV2: {
        name: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4)
      },
      SceneAnimationImportV2: {
        filename: Filename(),
        animNames: DynArray("SceneImportSequenceV2"),
        flags: Uint32
      },
      SceneImportSequenceV2: {
        name: Uint64
      }
    },
    root: {
      animations: DynArray("SceneAnimationV2"),
      poses: DynArray("ScenePoseV2"),
      imports: DynArray("SceneAnimationImportV2")
    }
  }
]