import { Uint32, Uint8, DynArray, Uint64 } from "../src/types";

const V0 = {
  chunkName: "BGFX",
  name: "AmatMaterialV0",
  version: 0,
  definitions: {
    AmatShaderV0: {
      isPixelShader: Uint32,
      dx11Shader: "AmatShaderBinaryV0",
      osxShader: "AmatShaderBinaryV0"
    },
    AmatShaderBinaryV0: {
      data: DynArray(Uint8),
      constants: DynArray("AmatShaderConstantV0"),
      samplers: DynArray("AmatSamplerConstantV0")
    },
    AmatShaderConstantV0: {
      token: Uint32
    },
    AmatSamplerConstantV0: {
      token: Uint64,
      stateIndex: Uint32,
      textureIndex: Uint32,
      textureSlot: Uint32
    },
    AmatSamplerStateV0: {
      state: Uint32
    },
    AmatTechniqueV0: {
      quality: Uint32,
      passes: DynArray("AmatPassV0")
    },
    AmatPassV0: {
      effects: DynArray("AmatEffectV0")
    },
    AmatEffectV0: {
      token: Uint64,
      renderState: Uint64,
      shaderPassFlags: Uint32,
      pixelShaderIndex: Uint32,
      vertexShaderVariants: DynArray("AmatVertexShaderVariantV0")
    },
    AmatVertexShaderVariantV0: {
      variant: Uint32,
      vertexShaderIndex: Uint32
    }
  },
  root: {
    shaders: DynArray("AmatShaderV0"),
    samplers: DynArray("AmatSamplerStateV0"),
    techniques: DynArray("AmatTechniqueV0")
  }
};

const V1 = {
  chunkName: "BGFX",
  name: "AmatMaterialV1",
  version: 1,
  definitions: {
    AmatShaderV1: {
      isPixelShader: Uint32,
      dx11Shader: "AmatShaderBinaryV1",
      osxShader: "AmatShaderBinaryV1"
    },
    AmatShaderBinaryV1: {
      data: DynArray(Uint8),
      constants: DynArray("AmatShaderConstantV1"),
      samplers: DynArray("AmatSamplerConstantV1")
    },
    AmatShaderConstantV1: {
      token: Uint32
    },
    AmatSamplerConstantV1: {
      token: Uint64,
      stateIndex: Uint32,
      textureIndex: Uint32,
      textureSlot: Uint32
    },
    AmatSamplerStateV1: {
      state: Uint32
    },
    AmatTechniqueV1: {
      quality: Uint32,
      passes: DynArray("AmatPassV1")
    },
    AmatPassV1: {
      effects: DynArray("AmatEffectV1")
    },
    AmatEffectV1: {
      token: Uint64,
      renderState: Uint64,
      shaderPassFlags: Uint32,
      pixelShaderIndex: Uint32,
      vertexShaderVariants: DynArray("AmatVertexShaderVariantV1")
    },
    AmatVertexShaderVariantV1: {
      variant: Uint32,
      vertexShaderIndex: Uint32
    }
  },
  root: {
    shaders: DynArray("AmatShaderV1"),
    samplers: DynArray("AmatSamplerStateV1"),
    techniques: DynArray("AmatTechniqueV1")
  }
};

const V2 = {
  chunkName: "BGFX",
  name: "AmatMaterialV2",
  version: 2,
  definitions: {
    AmatShaderV2: {
      isPixelShader: Uint32,
      dx11Shader: "AmatShaderBinaryV2",
      pbrShader: "AmatShaderBinaryV2"
    },
    AmatShaderBinaryV2: {
      data: DynArray(Uint8),
      constants: DynArray("AmatShaderConstantV2"),
      samplers: DynArray("AmatSamplerConstantV2")
    },
    AmatShaderConstantV2: {
      token: Uint32
    },
    AmatSamplerConstantV2: {
      token: Uint64,
      stateIndex: Uint32,
      textureIndex: Uint32,
      textureSlot: Uint32
    },
    AmatSamplerStateV2: {
      state: Uint32
    },
    AmatTechniqueV2: {
      quality: Uint32,
      passes: DynArray("AmatPassV2")
    },
    AmatPassV2: {
      effects: DynArray("AmatEffectV2")
    },
    AmatEffectV2: {
      token: Uint64,
      renderState: Uint64,
      shaderPassFlags: Uint32,
      pixelShaderIndex: Uint32,
      vertexShaderVariants: DynArray("AmatVertexShaderVariantV2")
    },
    AmatVertexShaderVariantV2: {
      variant: Uint32,
      vertexShaderIndex: Uint32
    }
  },
  root: {
    shaders: DynArray("AmatShaderV2"),
    samplers: DynArray("AmatSamplerStateV2"),
    techniques: DynArray("AmatTechniqueV2")
  }
};

const V3 = {
  chunkName: "BGFX",
  name: "AmatMaterialV3",
  version: 3,
  definitions: {
    AmatShaderV3: {
      isPixelShader: Uint32,
      dx11Shader: "AmatShaderBinaryV3",
      pbrShader: "AmatShaderBinaryV3"
    },
    AmatShaderBinaryV3: {
      data: DynArray(Uint8),
      constants: DynArray("AmatShaderConstantV2"),
      samplers: DynArray("AmatSamplerConstantV2"),
      bindings: DynArray("AmatShaderBindingV3")
    },
    AmatShaderConstantV2: {
      token: Uint32
    },
    AmatSamplerConstantV2: {
      token: Uint64,
      stateIndex: Uint32,
      textureIndex: Uint32,
      textureSlot: Uint32
    },
    AmatShaderBindingV3: {
      token: Uint64,
      type: Uint8,
      access: Uint8,
      byte: Uint8
    },
    AmatSamplerStateV2: {
      state: Uint32
    },
    AmatTechniqueV2: {
      quality: Uint32,
      passes: DynArray("AmatPassV2")
    },
    AmatPassV2: {
      effects: DynArray("AmatEffectV2")
    },
    AmatEffectV2: {
      token: Uint64,
      renderState: Uint64,
      shaderPassFlags: Uint32,
      pixelShaderIndex: Uint32,
      vertexShaderVariants: DynArray("AmatVertexShaderVariantV2")
    },
    AmatVertexShaderVariantV2: {
      variant: Uint32,
      vertexShaderIndex: Uint32
    }
  },
  root: {
    shaders: DynArray("AmatShaderV3"),
    samplers: DynArray("AmatSamplerStateV2"),
    techniques: DynArray("AmatTechniqueV2")
  }
};

export const latest = V3;
export const definitions = { V0, V1, V2, V3 };
export const definitionArray = Object.values(definitions);