import { Uint32, Uint8, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "XSHD",
    name: "AmatXbxShader",
    version: 0,
    definitions: {
      AmatXbxShaderConstant: {
        token: Uint32,
        regIndex: Uint32,
        regCount: Uint32
      },
      AmatXbxSamplerConstant: {
        regIndex: Uint32,
        stateIndex: Uint32,
        texIndex: Uint32
      }
    },
    root: {
      isPixelShader: Uint32,
      cachedData: DynArray(Uint8),
      physicalData: DynArray(Uint8),
      constants: DynArray("AmatXbxShaderConstant"),
      samplers: DynArray("AmatXbxSamplerConstant")
    }
  }
]