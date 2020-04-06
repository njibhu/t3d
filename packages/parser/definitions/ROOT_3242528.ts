import { Uint64, Float32, DynArray, FixedArray } from "./types";

module.exports = [
  {
    chunkName: "ROOT",
    name: "ModelFileRootMotionV0",
    version: 0,
    definitions: {
      ModelRootMotionV0: {
        sequence: Uint64,
        keys: DynArray(Float32),
        values: DynArray(FixedArray(Float32, 3))
      }
    },
    root: {
      rootMotions: DynArray("ModelRootMotionV0")
    }
  },
  {
    chunkName: "ROOT",
    name: "ModelFileRootMotionV1",
    version: 1,
    definitions: {
      ModelRootMotionV1: {
        sequence: Uint64,
        keys: DynArray(Float32),
        posValues: DynArray(FixedArray(Float32, 3)),
        quatValues: DynArray(FixedArray(Float32, 4))
      }
    },
    root: {
      rootMotions: DynArray("ModelRootMotionV1")
    }
  }
]