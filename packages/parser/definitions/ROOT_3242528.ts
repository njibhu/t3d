import { Uint64, Float32, DynArray, FixedArray } from "../src/types";

export const V0 = {
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
};

export const V1 = {
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
};

export const latest = V1;
export const definitionArray = [V0, V1];