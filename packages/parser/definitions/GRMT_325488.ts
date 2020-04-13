import { Uint8, Uint32, Uint64, DynArray, FixedArray } from "../src/types";

module.exports = [
  {
    chunkName: "GRMT",
    name: "AmatGrV0",
    version: 0,
    root: {
      texArrayRange: Uint8,
      texCount: Uint8,
      texTransformRange: Uint8,
      sortOrder: Uint8,
      flags: Uint32,
      textureMasks: FixedArray(Uint32, 4)
    }
  },
  {
    chunkName: "GRMT",
    name: "AmatGrV1",
    version: 1,
    root: {
      texArrayRange: Uint8,
      texCount: Uint8,
      texTransformRange: Uint8,
      sortOrder: Uint8,
      flags: Uint32,
      texType: Uint32,
      textureMasks: FixedArray(Uint32, 4)
    }
  },
  {
    chunkName: "GRMT",
    name: "AmatGrV2",
    version: 2,
    root: {
      texArrayRange: Uint8,
      texCount: Uint8,
      texTransformRange: Uint8,
      sortOrder: Uint8,
      sortTri: Uint8,
      flags: Uint32,
      texType: Uint32,
      textureMasks: FixedArray(Uint32, 4)
    }
  },
  {
    chunkName: "GRMT",
    name: "AmatGrV3",
    version: 3,
    root: {
      texArrayRange: Uint8,
      texCount: Uint8,
      texTransformRange: Uint8,
      sortOrder: Uint8,
      sortTri: Uint8,
      debugFlags: Uint32,
      flags: Uint32,
      texType: Uint32,
      textureMasks: FixedArray(Uint32, 4)
    }
  },
  {
    chunkName: "GRMT",
    name: "AmatGr",
    version: 4,
    root: {
      texArrayRange: Uint8,
      texCount: Uint8,
      texTransformRange: Uint8,
      sortOrder: Uint8,
      sortTri: Uint8,
      procAnim: Uint8,
      debugFlags: Uint32,
      flags: Uint32,
      texType: Uint32,
      textureMasks: FixedArray(Uint32, 4)
    }
  },
  {
    chunkName: "GRMT",
    name: "AmatGr",
    version: 5,
    root: {
      texArrayRange: Uint8,
      texCount: Uint8,
      texTransformRange: Uint8,
      sortOrder: Uint8,
      sortTri: Uint8,
      procAnim: Uint8,
      debugFlags: Uint32,
      flags: Uint32,
      texType: Uint32,
      textureMasks: FixedArray(Uint32, 4),
      texTokens: DynArray(Uint64)
    }
  },
  {
    chunkName: "GRMT",
    name: "AmatGr",
    version: 6,
    root: {
      texArrayRange: Uint8,
      texCount: Uint8,
      sortOrder: Uint8,
      sortTri: Uint8,
      procAnim: Uint8,
      debugFlags: Uint32,
      flags: Uint32,
      texTokens: DynArray(Uint64)
    }
  }
]