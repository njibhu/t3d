export namespace V0_N {
  export type AmatDx9MaterialV0 = {
    samplers: Array<AmatDx9SamplerV0>,
    shaders: Array<AmatDx9ShaderV0>,
    techniques: Array<AmatDx9TechniqueV0>
  }

  export type AmatDx9SamplerV0 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV0 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV0 = {
    name: string,
    sortTri: number,
    passes: Array<AmatDx9PassV0>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV0 = {
    renderState: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V0 = V0_N.AmatDx9MaterialV0;

export namespace V1_N {
  export type AmatDx9MaterialV1 = {
    samplers: Array<AmatDx9SamplerV1>,
    shaders: Array<AmatDx9ShaderV1>,
    techniques: Array<AmatDx9TechniqueV1>
  }

  export type AmatDx9SamplerV1 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV1 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV1 = {
    name: string,
    sortTri: number,
    passes: Array<AmatDx9PassV1>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV1 = {
    effectRenderStates: Array<AmatDx9RenderStatesV1>,
    samplerIndex: Array<number>,
    pixelShader: Array<number>,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: Array<number>
  }

  export type AmatDx9RenderStatesV1 = {
    renderStates: Array<number>
  }

}

export type V1 = V1_N.AmatDx9MaterialV1;

export namespace V2_N {
  export type AmatDx9MaterialV2 = {
    samplers: Array<AmatDx9SamplerV2>,
    shaders: Array<AmatDx9ShaderV2>,
    techniques: Array<AmatDx9TechniqueV2>
  }

  export type AmatDx9SamplerV2 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV2 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV2 = {
    name: string,
    sortTri: number,
    passes: Array<AmatDx9PassV2>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV2 = {
    effects: Array<AmatDx9EffectV2>
  }

  export type AmatDx9EffectV2 = {
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V2 = V2_N.AmatDx9MaterialV2;

export namespace V3_N {
  export type AmatDx9MaterialV3 = {
    samplers: Array<AmatDx9SamplerV3>,
    shaders: Array<AmatDx9ShaderV3>,
    techniques: Array<AmatDx9TechniqueV3>
  }

  export type AmatDx9SamplerV3 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV3 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV3 = {
    name: string,
    sortTri: number,
    passes: Array<AmatDx9PassV3>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV3 = {
    effects: Array<AmatDx9EffectV3>
  }

  export type AmatDx9EffectV3 = {
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V3 = V3_N.AmatDx9MaterialV3;

export namespace V4_N {
  export type AmatDx9MaterialV4 = {
    samplers: Array<AmatDx9SamplerV4>,
    shaders: Array<AmatDx9ShaderV4>,
    techniques: Array<AmatDx9TechniqueV4>
  }

  export type AmatDx9SamplerV4 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV4 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV4 = {
    name: string,
    sortTri: number,
    passes: Array<AmatDx9PassV4>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV4 = {
    effects: Array<AmatDx9EffectV4>
  }

  export type AmatDx9EffectV4 = {
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V4 = V4_N.AmatDx9MaterialV4;

export namespace V5_N {
  export type AmatDx9MaterialV5 = {
    samplers: Array<AmatDx9SamplerV5>,
    shaders: Array<AmatDx9ShaderV5>,
    techniques: Array<AmatDx9TechniqueV5>
  }

  export type AmatDx9SamplerV5 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV5 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV5 = {
    name: string,
    sortTri: number,
    passes: Array<AmatDx9PassV5>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV5 = {
    effects: Array<AmatDx9EffectV5>
  }

  export type AmatDx9EffectV5 = {
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V5 = V5_N.AmatDx9MaterialV5;

export namespace V6_N {
  export type AmatDx9MaterialV6 = {
    samplers: Array<AmatDx9SamplerV6>,
    shaders: Array<AmatDx9ShaderV6>,
    techniques: Array<AmatDx9TechniqueV6>
  }

  export type AmatDx9SamplerV6 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV6 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV6 = {
    name: string,
    passes: Array<AmatDx9PassV6>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV6 = {
    effects: Array<AmatDx9EffectV6>
  }

  export type AmatDx9EffectV6 = {
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V6 = V6_N.AmatDx9MaterialV6;

export namespace V7_N {
  export type AmatDx9MaterialV7 = {
    samplers: Array<AmatDx9SamplerV7>,
    shaders: Array<AmatDx9ShaderV7>,
    techniques: Array<AmatDx9TechniqueV7>
  }

  export type AmatDx9SamplerV7 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV7 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV7 = {
    name: string,
    passes: Array<AmatDx9PassV7>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV7 = {
    effects: Array<AmatDx9EffectV7>
  }

  export type AmatDx9EffectV7 = {
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V7 = V7_N.AmatDx9MaterialV7;

export namespace V8_N {
  export type AmatDx9MaterialV8 = {
    samplers: Array<AmatDx9SamplerV8>,
    shaders: Array<AmatDx9ShaderV8>,
    techniques: Array<AmatDx9TechniqueV8>
  }

  export type AmatDx9SamplerV8 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV8 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV8 = {
    name: string,
    passes: Array<AmatDx9PassV8>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV8 = {
    effects: Array<AmatDx9EffectV8>
  }

  export type AmatDx9EffectV8 = {
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V8 = V8_N.AmatDx9MaterialV8;

export namespace V9_N {
  export type AmatDx9MaterialV9 = {
    samplers: Array<AmatDx9SamplerV9>,
    shaders: Array<AmatDx9ShaderV9>,
    techniques: Array<AmatDx9TechniqueV9>
  }

  export type AmatDx9SamplerV9 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV9 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>
  }

  export type AmatDx9TechniqueV9 = {
    name: string,
    passes: Array<AmatDx9PassV9>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV9 = {
    effects: Array<AmatDx9EffectV9>
  }

  export type AmatDx9EffectV9 = {
    token: BigInt,
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V9 = V9_N.AmatDx9MaterialV9;

export namespace V10_N {
  export type AmatDx9MaterialV10 = {
    samplers: Array<AmatDx9SamplerV10>,
    shaders: Array<AmatDx9ShaderV10>,
    techniques: Array<AmatDx9TechniqueV10>
  }

  export type AmatDx9SamplerV10 = {
    textureIndex: number,
    state: Array<number>
  }

  export type AmatDx9ShaderV10 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>,
    instructionCount: number
  }

  export type AmatDx9TechniqueV10 = {
    name: string,
    passes: Array<AmatDx9PassV10>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV10 = {
    effects: Array<AmatDx9EffectV10>
  }

  export type AmatDx9EffectV10 = {
    token: BigInt,
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    texTransform: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V10 = V10_N.AmatDx9MaterialV10;

export namespace V11_N {
  export type AmatDx9MaterialV11 = {
    samplers: Array<AmatDx9SamplerV11>,
    shaders: Array<AmatDx9ShaderV11>,
    techniques: Array<AmatDx9TechniqueV11>,
    useLegacyBindTextures: number
  }

  export type AmatDx9SamplerV11 = {
    textureIndex: number,
    state: Array<number>,
    usesBindTexture: number
  }

  export type AmatDx9ShaderV11 = {
    shader: Array<number>,
    constRegisters: Array<number>,
    constTokens: Array<number>,
    instructionCount: number
  }

  export type AmatDx9TechniqueV11 = {
    name: string,
    passes: Array<AmatDx9PassV11>,
    maxPsVersion: number,
    maxVsVersion: number
  }

  export type AmatDx9PassV11 = {
    effects: Array<AmatDx9EffectV11>
  }

  export type AmatDx9EffectV11 = {
    token: BigInt,
    renderStates: Array<number>,
    samplerIndex: Array<number>,
    pixelShader: number,
    vertexShader: number,
    texGen: Array<number>,
    vsGenFlags: number,
    passFlags: number
  }

}

export type V11 = V11_N.AmatDx9MaterialV11;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11;
export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10 | V11;
export type V6_U = V6 | V7 | V8 | V9 | V10 | V11;
export type V7_U = V7 | V8 | V9 | V10 | V11;
export type V8_U = V8 | V9 | V10 | V11;
export type V9_U = V9 | V10 | V11;
export type V10_U = V10 | V11;
export type V11_U = V11;
