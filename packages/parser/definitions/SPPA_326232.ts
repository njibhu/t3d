import { Uint32, Uint8, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "SPPA",
    name: "AmatAppleShader",
    version: 0,
    definitions: {
      AmatAppleShaderConstant: {
        token: Uint32,
        regIndex: Uint32,
        regCount: Uint32
      }
    },
    root: {
      isPixelShader: Uint32,
      cachedData: DynArray(Uint8),
      physicalData: DynArray(Uint8),
      constants: DynArray("AmatAppleShaderConstant"),
      samplers: DynArray("AmatAppleShaderConstant")
    }
  }
]