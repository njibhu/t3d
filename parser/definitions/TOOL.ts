import { RefString16, Uint32, Uint8, DynArray, FixedArray, Float32, RefString } from "../src/types";

const V0 = {
  chunkName: "TOOL",
  name: "AmatToolParamsV0",
  version: 0,
  definitions: {
    AmatToolConstantV0: {
      token: Uint32,
      displayName: RefString16(),
      defaultValue: FixedArray(Float32, 4),
      flags: Uint32,
      minValue: FixedArray(Float32, 4),
      maxValue: FixedArray(Float32, 4)
    },
    AmatToolTextureV0: {
      texName: RefString16(),
      texDefaultFile: RefString16(),
      flags: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32)
    }
  },
  root: {
    description: RefString16(),
    flags: Uint32,
    text: RefString(),
    texCoordCount: Uint8,
    texTransformCount: Uint8,
    constants: DynArray("AmatToolConstantV0"),
    textures: DynArray("AmatToolTextureV0")
  }
};

const V1 = {
  chunkName: "TOOL",
  name: "AmatToolParamsV1",
  version: 1,
  definitions: {
    AmatToolConstantV1: {
      token: Uint32,
      displayName: RefString16(),
      defaultValue: FixedArray(Float32, 4),
      flags: Uint32,
      minValue: FixedArray(Float32, 4),
      maxValue: FixedArray(Float32, 4)
    },
    AmatToolTextureV1: {
      texName: RefString16(),
      texDefaultFile: RefString16(),
      flags: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32)
    }
  },
  root: {
    description: RefString16(),
    flags: Uint32,
    text: RefString(),
    texCoordCount: Uint8,
    texTransformCount: Uint8,
    constants: DynArray("AmatToolConstantV1"),
    textures: DynArray("AmatToolTextureV1")
  }
};

const V2 = {
  chunkName: "TOOL",
  name: "AmatToolParams",
  version: 2,
  definitions: {
    AmatToolConstant: {
      token: Uint32,
      displayName: RefString16(),
      defaultValue: FixedArray(Float32, 4),
      flags: Uint32,
      minValue: FixedArray(Float32, 4),
      maxValue: FixedArray(Float32, 4)
    },
    AmatToolTexture: {
      texName: RefString16(),
      texDefaultFile: RefString16(),
      flags: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32)
    }
  },
  root: {
    description: RefString16(),
    flags: Uint32,
    text: RefString(),
    texCoordCount: Uint8,
    texTransformCount: Uint8,
    constants: DynArray("AmatToolConstant"),
    textures: DynArray("AmatToolTexture")
  }
};

const V3 = {
  chunkName: "TOOL",
  name: "AmatToolParams",
  version: 3,
  definitions: {
    AmatToolConstant: {
      token: Uint32,
      displayName: RefString16(),
      defaultValue: FixedArray(Float32, 4),
      flags: Uint32,
      minValue: FixedArray(Float32, 4),
      maxValue: FixedArray(Float32, 4)
    },
    AmatToolTexture: {
      texName: RefString16(),
      texDefaultFile: RefString16(),
      flags: Uint32,
      texGen: DynArray(Uint32)
    }
  },
  root: {
    description: RefString16(),
    flags: Uint32,
    texCoordCount: Uint8,
    texTransformCount: Uint8,
    decompressedTextCount: Uint32,
    compressedText: DynArray(Uint8),
    constants: DynArray("AmatToolConstant"),
    textures: DynArray("AmatToolTexture")
  }
};

export const latest = V3;
export const definitions = { V0, V1, V2, V3 };
export const definitionArray = Object.values(definitions);