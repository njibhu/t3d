import { CString, Uint32, FixedArray, Float32, DynArray, Uint8, Uint64, Filename } from "../src/types";

module.exports = [
  {
    chunkName: "PS3S",
    name: "AmatPs3Material",
    version: 0,
    definitions: {
      AmatPs3FragmentShaderConfig: {
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
      },
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
      },
      AmatPs3VertexShaderConfig: {
        instructionSlot: Uint32,
        instructionCount: Uint32,
        attributeInputMask: Uint32,
        registerCount: Uint32,
        constants: DynArray("AmatPs3ShaderConstant"),
        samplers: DynArray("AmatPs3SamplerConstant"),
        code: DynArray(Uint8)
      },
      AmatPs3Effect: {
        token: Uint64,
        passes: DynArray("AmatPs3Pass")
      },
      AmatPs3Pass: {
        renderState: "AmatPs3RenderState",
        pixelShader: Uint32,
        vertexShader: Uint32,
        psFileFame: Filename(),
        vsFileName: Filename()
      },
      AmatPs3RenderState: {
        cullMode: Uint32,
        alphaFunc: Uint32,
        alphaRef: Uint32,
        blendOp: Uint32,
        blendSrc: Uint32,
        blendDst: Uint32,
        colorMask: Uint32,
        depthWrite: Uint32,
        depthFunc: Uint32,
        depthBias: Float32
      },
      AmatPs3Sampler: {
        wraps: Uint32,
        wrapt: Uint32,
        maxAniso: Uint32,
        filterMin: Uint32,
        filterMag: Uint32,
        filterBias: Uint32
      }
    },
    root: {
      name: CString,
      fragmentShaders: DynArray("AmatPs3FragmentShaderConfig"),
      vertexShaders: DynArray("AmatPs3VertexShaderConfig"),
      effects: DynArray("AmatPs3Effect"),
      samplers: DynArray("AmatPs3Sampler")
    }
  }
]