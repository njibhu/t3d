import { Uint32, DynArray, Uint16, RefString, Uint64, RefArray, FixedArray } from "../src/types";

const V0 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV0",
  version: 0,
  definitions: {
    AmatDx9SamplerV0: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV0: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV0: {
      name: RefString(),
      sortTri: Uint32,
      passes: DynArray("AmatDx9PassV0"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV0: {
      renderState: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV0"),
    shaders: DynArray("AmatDx9ShaderV0"),
    techniques: DynArray("AmatDx9TechniqueV0")
  }
};

const V1 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV1",
  version: 1,
  definitions: {
    AmatDx9SamplerV1: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV1: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV1: {
      name: RefString(),
      sortTri: Uint32,
      passes: DynArray("AmatDx9PassV1"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV1: {
      effectRenderStates: RefArray("AmatDx9RenderStatesV1"),
      samplerIndex: DynArray(Uint32),
      pixelShader: FixedArray(Uint32, 5),
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: FixedArray(Uint32, 5)
    },
    AmatDx9RenderStatesV1: {
      renderStates: DynArray(Uint32)
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV1"),
    shaders: DynArray("AmatDx9ShaderV1"),
    techniques: DynArray("AmatDx9TechniqueV1")
  }
};

const V2 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV2",
  version: 2,
  definitions: {
    AmatDx9SamplerV2: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV2: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV2: {
      name: RefString(),
      sortTri: Uint32,
      passes: DynArray("AmatDx9PassV2"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV2: {
      effects: FixedArray("AmatDx9EffectV2", 7)
    },
    AmatDx9EffectV2: {
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV2"),
    shaders: DynArray("AmatDx9ShaderV2"),
    techniques: DynArray("AmatDx9TechniqueV2")
  }
};

const V3 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV3",
  version: 3,
  definitions: {
    AmatDx9SamplerV3: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV3: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV3: {
      name: RefString(),
      sortTri: Uint32,
      passes: DynArray("AmatDx9PassV3"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV3: {
      effects: FixedArray("AmatDx9EffectV3", 7)
    },
    AmatDx9EffectV3: {
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV3"),
    shaders: DynArray("AmatDx9ShaderV3"),
    techniques: DynArray("AmatDx9TechniqueV3")
  }
};

const V4 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV4",
  version: 4,
  definitions: {
    AmatDx9SamplerV4: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV4: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV4: {
      name: RefString(),
      sortTri: Uint32,
      passes: DynArray("AmatDx9PassV4"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV4: {
      effects: FixedArray("AmatDx9EffectV4", 7)
    },
    AmatDx9EffectV4: {
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV4"),
    shaders: DynArray("AmatDx9ShaderV4"),
    techniques: DynArray("AmatDx9TechniqueV4")
  }
};

const V5 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV5",
  version: 5,
  definitions: {
    AmatDx9SamplerV5: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV5: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV5: {
      name: RefString(),
      sortTri: Uint32,
      passes: DynArray("AmatDx9PassV5"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV5: {
      effects: FixedArray("AmatDx9EffectV5", 7)
    },
    AmatDx9EffectV5: {
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV5"),
    shaders: DynArray("AmatDx9ShaderV5"),
    techniques: DynArray("AmatDx9TechniqueV5")
  }
};

const V6 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV6",
  version: 6,
  definitions: {
    AmatDx9SamplerV6: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV6: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV6: {
      name: RefString(),
      passes: DynArray("AmatDx9PassV6"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV6: {
      effects: FixedArray("AmatDx9EffectV6", 8)
    },
    AmatDx9EffectV6: {
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV6"),
    shaders: DynArray("AmatDx9ShaderV6"),
    techniques: DynArray("AmatDx9TechniqueV6")
  }
};

const V7 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV7",
  version: 7,
  definitions: {
    AmatDx9SamplerV7: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV7: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV7: {
      name: RefString(),
      passes: DynArray("AmatDx9PassV7"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV7: {
      effects: FixedArray("AmatDx9EffectV7", 8)
    },
    AmatDx9EffectV7: {
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV7"),
    shaders: DynArray("AmatDx9ShaderV7"),
    techniques: DynArray("AmatDx9TechniqueV7")
  }
};

const V8 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV8",
  version: 8,
  definitions: {
    AmatDx9SamplerV8: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV8: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV8: {
      name: RefString(),
      passes: DynArray("AmatDx9PassV8"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV8: {
      effects: RefArray("AmatDx9EffectV8")
    },
    AmatDx9EffectV8: {
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV8"),
    shaders: DynArray("AmatDx9ShaderV8"),
    techniques: DynArray("AmatDx9TechniqueV8")
  }
};

const V9 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV9",
  version: 9,
  definitions: {
    AmatDx9SamplerV9: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV9: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32)
    },
    AmatDx9TechniqueV9: {
      name: RefString(),
      passes: DynArray("AmatDx9PassV9"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV9: {
      effects: RefArray("AmatDx9EffectV9")
    },
    AmatDx9EffectV9: {
      token: Uint64,
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV9"),
    shaders: DynArray("AmatDx9ShaderV9"),
    techniques: DynArray("AmatDx9TechniqueV9")
  }
};

const V10 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV10",
  version: 10,
  definitions: {
    AmatDx9SamplerV10: {
      textureIndex: Uint32,
      state: DynArray(Uint32)
    },
    AmatDx9ShaderV10: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32),
      instructionCount: Uint16
    },
    AmatDx9TechniqueV10: {
      name: RefString(),
      passes: DynArray("AmatDx9PassV10"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV10: {
      effects: RefArray("AmatDx9EffectV10")
    },
    AmatDx9EffectV10: {
      token: Uint64,
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      texTransform: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV10"),
    shaders: DynArray("AmatDx9ShaderV10"),
    techniques: DynArray("AmatDx9TechniqueV10")
  }
};

const V11 = {
  chunkName: "DX9S",
  name: "AmatDx9MaterialV11",
  version: 11,
  definitions: {
    AmatDx9SamplerV11: {
      textureIndex: Uint32,
      state: DynArray(Uint32),
      usesBindTexture: Uint32
    },
    AmatDx9ShaderV11: {
      shader: DynArray(Uint32),
      constRegisters: DynArray(Uint32),
      constTokens: DynArray(Uint32),
      instructionCount: Uint16
    },
    AmatDx9TechniqueV11: {
      name: RefString(),
      passes: DynArray("AmatDx9PassV11"),
      maxPsVersion: Uint16,
      maxVsVersion: Uint16
    },
    AmatDx9PassV11: {
      effects: RefArray("AmatDx9EffectV11")
    },
    AmatDx9EffectV11: {
      token: Uint64,
      renderStates: DynArray(Uint32),
      samplerIndex: DynArray(Uint32),
      pixelShader: Uint32,
      vertexShader: Uint32,
      texGen: DynArray(Uint32),
      vsGenFlags: Uint32,
      passFlags: Uint32
    }
  },
  root: {
    samplers: DynArray("AmatDx9SamplerV11"),
    shaders: DynArray("AmatDx9ShaderV11"),
    techniques: DynArray("AmatDx9TechniqueV11"),
    useLegacyBindTextures: Uint32
  }
};

export const latest = V11;
export const definitions = { V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11 };
export const definitionArray = Object.values(definitions);