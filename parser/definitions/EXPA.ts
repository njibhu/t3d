import { Uint64, Uint32, DynArray, Float32 } from "../src/types";

const V0 = {
  chunkName: "EXPA",
  name: "ModelFileExpansionV0",
  version: 0,
  definitions: {
    ModelFileSnapPointV0: {
      bone: Uint64
    },
    ModelExpansionEmitterV0: {
      curl: Float32,
      vortexSize: Float32
    }
  },
  root: {
    snapPoints: DynArray("ModelFileSnapPointV0"),
    snapPointPriority: Float32,
    emitters: DynArray("ModelExpansionEmitterV0")
  }
};

const V1 = {
  chunkName: "EXPA",
  name: "ModelFileExpansionV1",
  version: 1,
  definitions: {
    ModelFileSnapPointV1: {
      bone: Uint64
    },
    ModelExpansionEmitterV1: {
      curl: Float32,
      vortexSize: Float32,
      curlQuality: Uint32,
      curlFlags: Uint32,
      fieldScale: Float32
    }
  },
  root: {
    snapPoints: DynArray("ModelFileSnapPointV1"),
    snapPointPriority: Float32,
    emitters: DynArray("ModelExpansionEmitterV1")
  }
};

const V2 = {
  chunkName: "EXPA",
  name: "ModelFileExpansionV2",
  version: 2,
  definitions: {
    ModelFileSnapPointV2: {
      bone: Uint64,
      shape: Uint64
    },
    ModelExpansionEmitterV2: {
      curl: Float32,
      vortexSize: Float32,
      curlQuality: Uint32,
      curlFlags: Uint32,
      fieldScale: Float32
    }
  },
  root: {
    snapPoints: DynArray("ModelFileSnapPointV2"),
    snapPointPriority: Float32,
    emitters: DynArray("ModelExpansionEmitterV2")
  }
};

const V3 = {
  chunkName: "EXPA",
  name: "ModelFileExpansionV3",
  version: 3,
  definitions: {
    ModelFileSnapPointV3: {
      bone: Uint64,
      shape: Uint64,
      flags: Uint32
    },
    ModelExpansionEmitterV3: {
      curl: Float32,
      vortexSize: Float32,
      curlQuality: Uint32,
      curlFlags: Uint32,
      fieldScale: Float32
    }
  },
  root: {
    snapPoints: DynArray("ModelFileSnapPointV3"),
    snapPointPriority: Float32,
    emitters: DynArray("ModelExpansionEmitterV3")
  }
};

export const latest = V3;
export const definitions = { V0, V1, V2, V3 };
export const definitionArray = Object.values(definitions);