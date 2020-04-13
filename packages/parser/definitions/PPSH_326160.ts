import { Uint32, FixedArray, Float32, DynArray, Uint8 } from "../src/types";

module.exports = [
  {
    chunkName: "PPSH",
    name: "AmatPs3FragmentShaderConfig",
    version: 0,
    definitions: {
      AmatPs3ShaderConstant: {
        token: Uint32,
        regIndex: Uint32,
        regCount: Uint32,
        regValue: FixedArray(Float32, 4),
        data: Uint32
      },
      AmatPs3SamplerConstant: {
        regIndex: Uint32,
        stateIndex: Uint32,
        texIndex: Uint32
      }
    },
    root: {
      offset: Uint32,
      attributeInputMask: Uint32,
      texCoordsInputMask: Uint32,
      texCoords2D: Uint32,
      texCoordsCentroid: Uint32,
      fragmentControl: Uint32,
      registerCount: Uint32,
      constants: DynArray("AmatPs3ShaderConstant"),
      samplers: DynArray("AmatPs3SamplerConstant"),
      code: DynArray(Uint8)
    }
  }
]