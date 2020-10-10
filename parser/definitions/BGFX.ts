import { Uint32, Uint8, DynArray, Uint64 } from "../src/types";

export const V0 = {
  chunkName: "BGFX",
  name: "AmatGfxMaterial",
  version: 0,
  definitions: {
    AmatGfxShader: {
      isPixelShader: Uint32,
      dxShader: "AmatGfxShaderBinary",
      osxShader: "AmatGfxShaderBinary"
    },
    AmatGfxShaderBinary: {
      data: DynArray(Uint8),
      constants: DynArray("AmatGfxShaderConstant"),
      samplers: DynArray("AmatGfxSamplerConstant")
    },
    AmatGfxShaderConstant: {
      token: Uint32
    },
    AmatGfxSamplerConstant: {
      token: Uint64,
      stateIndex: Uint32,
      textureIndex: Uint32,
      textureSlot: Uint32
    },
    AmatGfxSamplerState: {
      state: Uint32
    },
    AmatGfxTechnique: {
      quality: Uint32,
      passes: DynArray("AmatGfxPass")
    },
    AmatGfxPass: {
      effects: DynArray("AmatGfxEffect")
    },
    AmatGfxEffect: {
      token: Uint64,
      renderState: Uint64,
      shaderPassFlags: Uint32,
      pixelShaderIndex: Uint32,
      vertexShaderVariants: DynArray("AmatGfxVertexShaderVariant")
    },
    AmatGfxVertexShaderVariant: {
      variant: Uint32,
      vertexShaderIndex: Uint32
    }
  },
  root: {
    shaders: DynArray("AmatGfxShader"),
    samplers: DynArray("AmatGfxSamplerState"),
    techniques: DynArray("AmatGfxTechnique")
  }
};

export const latest = V0;
export const definitionArray = [V0];