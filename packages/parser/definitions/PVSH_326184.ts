import { Uint32, FixedArray, Float32, DynArray, Uint8 } from "./types";

module.exports = [
  {
    chunkName: "PVSH",
    name: "AmatPs3VertexShaderConfig",
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
      instructionSlot: Uint32,
      instructionCount: Uint32,
      attributeInputMask: Uint32,
      registerCount: Uint32,
      constants: DynArray("AmatPs3ShaderConstant"),
      samplers: DynArray("AmatPs3SamplerConstant"),
      code: DynArray(Uint8)
    }
  }
]