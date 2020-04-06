import { String16, Uint32, Uint8, DynArray, FixedArray, Float32, CString } from "./types";

module.exports = [
  {
    chunkName: "TOOL",
    name: "AmatToolParamsV0",
    version: 0,
    definitions: {
      AmatToolConstantV0: {
        token: Uint32,
        displayName: String16,
        defaultValue: FixedArray(Float32, 4),
        flags: Uint32,
        minValue: FixedArray(Float32, 4),
        maxValue: FixedArray(Float32, 4)
      },
      AmatToolTextureV0: {
        texName: String16,
        texDefaultFile: String16,
        flags: Uint32,
        texGen: DynArray(Uint32),
        texTransform: DynArray(Uint32)
      }
    },
    root: {
      description: String16,
      flags: Uint32,
      text: CString,
      texCoordCount: Uint8,
      texTransformCount: Uint8,
      constants: DynArray("AmatToolConstantV0"),
      textures: DynArray("AmatToolTextureV0")
    }
  },
  {
    chunkName: "TOOL",
    name: "AmatToolParamsV1",
    version: 1,
    definitions: {
      AmatToolConstantV1: {
        token: Uint32,
        displayName: String16,
        defaultValue: FixedArray(Float32, 4),
        flags: Uint32,
        minValue: FixedArray(Float32, 4),
        maxValue: FixedArray(Float32, 4)
      },
      AmatToolTextureV1: {
        texName: String16,
        texDefaultFile: String16,
        flags: Uint32,
        texGen: DynArray(Uint32),
        texTransform: DynArray(Uint32)
      }
    },
    root: {
      description: String16,
      flags: Uint32,
      text: CString,
      texCoordCount: Uint8,
      texTransformCount: Uint8,
      constants: DynArray("AmatToolConstantV1"),
      textures: DynArray("AmatToolTextureV1")
    }
  },
  {
    chunkName: "TOOL",
    name: "AmatToolParams",
    version: 2,
    definitions: {
      AmatToolConstant: {
        token: Uint32,
        displayName: String16,
        defaultValue: FixedArray(Float32, 4),
        flags: Uint32,
        minValue: FixedArray(Float32, 4),
        maxValue: FixedArray(Float32, 4)
      },
      AmatToolTexture: {
        texName: String16,
        texDefaultFile: String16,
        flags: Uint32,
        texGen: DynArray(Uint32),
        texTransform: DynArray(Uint32)
      }
    },
    root: {
      description: String16,
      flags: Uint32,
      text: CString,
      texCoordCount: Uint8,
      texTransformCount: Uint8,
      constants: DynArray("AmatToolConstant"),
      textures: DynArray("AmatToolTexture")
    }
  },
  {
    chunkName: "TOOL",
    name: "AmatToolParams",
    version: 3,
    definitions: {
      AmatToolConstant: {
        token: Uint32,
        displayName: String16,
        defaultValue: FixedArray(Float32, 4),
        flags: Uint32,
        minValue: FixedArray(Float32, 4),
        maxValue: FixedArray(Float32, 4)
      },
      AmatToolTexture: {
        texName: String16,
        texDefaultFile: String16,
        flags: Uint32,
        texGen: DynArray(Uint32)
      }
    },
    root: {
      description: String16,
      flags: Uint32,
      texCoordCount: Uint8,
      texTransformCount: Uint8,
      decompressedTextCount: Uint32,
      compressedText: DynArray(Uint8),
      constants: DynArray("AmatToolConstant"),
      textures: DynArray("AmatToolTexture")
    }
  }
]