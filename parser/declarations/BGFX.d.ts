export namespace V0_N {
  export type AmatMaterialV0 = {
    shaders: Array<AmatShaderV0>,
    samplers: Array<AmatSamplerStateV0>,
    techniques: Array<AmatTechniqueV0>
  }

  export type AmatShaderV0 = {
    isPixelShader: number,
    dx11Shader: AmatShaderBinaryV0,
    osxShader: AmatShaderBinaryV0
  }

  export type AmatShaderBinaryV0 = {
    data: Uint8Array,
    constants: Array<AmatShaderConstantV0>,
    samplers: Array<AmatSamplerConstantV0>
  }

  export type AmatShaderConstantV0 = {
    token: number
  }

  export type AmatSamplerConstantV0 = {
    token: bigint,
    stateIndex: number,
    textureIndex: number,
    textureSlot: number
  }

  export type AmatSamplerStateV0 = {
    state: number
  }

  export type AmatTechniqueV0 = {
    quality: number,
    passes: Array<AmatPassV0>
  }

  export type AmatPassV0 = {
    effects: Array<AmatEffectV0>
  }

  export type AmatEffectV0 = {
    token: bigint,
    renderState: bigint,
    shaderPassFlags: number,
    pixelShaderIndex: number,
    vertexShaderVariants: Array<AmatVertexShaderVariantV0>
  }

  export type AmatVertexShaderVariantV0 = {
    variant: number,
    vertexShaderIndex: number
  }

}

export type V0 = V0_N.AmatMaterialV0;

export namespace V1_N {
  export type AmatMaterialV1 = {
    shaders: Array<AmatShaderV1>,
    samplers: Array<AmatSamplerStateV1>,
    techniques: Array<AmatTechniqueV1>
  }

  export type AmatShaderV1 = {
    isPixelShader: number,
    dx11Shader: AmatShaderBinaryV1,
    osxShader: AmatShaderBinaryV1
  }

  export type AmatShaderBinaryV1 = {
    data: Uint8Array,
    constants: Array<AmatShaderConstantV1>,
    samplers: Array<AmatSamplerConstantV1>
  }

  export type AmatShaderConstantV1 = {
    token: number
  }

  export type AmatSamplerConstantV1 = {
    token: bigint,
    stateIndex: number,
    textureIndex: number,
    textureSlot: number
  }

  export type AmatSamplerStateV1 = {
    state: number
  }

  export type AmatTechniqueV1 = {
    quality: number,
    passes: Array<AmatPassV1>
  }

  export type AmatPassV1 = {
    effects: Array<AmatEffectV1>
  }

  export type AmatEffectV1 = {
    token: bigint,
    renderState: bigint,
    shaderPassFlags: number,
    pixelShaderIndex: number,
    vertexShaderVariants: Array<AmatVertexShaderVariantV1>
  }

  export type AmatVertexShaderVariantV1 = {
    variant: number,
    vertexShaderIndex: number
  }

}

export type V1 = V1_N.AmatMaterialV1;

export namespace V2_N {
  export type AmatMaterialV2 = {
    shaders: Array<AmatShaderV2>,
    samplers: Array<AmatSamplerStateV2>,
    techniques: Array<AmatTechniqueV2>
  }

  export type AmatShaderV2 = {
    isPixelShader: number,
    dx11Shader: AmatShaderBinaryV2,
    pbrShader: AmatShaderBinaryV2
  }

  export type AmatShaderBinaryV2 = {
    data: Uint8Array,
    constants: Array<AmatShaderConstantV2>,
    samplers: Array<AmatSamplerConstantV2>
  }

  export type AmatShaderConstantV2 = {
    token: number
  }

  export type AmatSamplerConstantV2 = {
    token: bigint,
    stateIndex: number,
    textureIndex: number,
    textureSlot: number
  }

  export type AmatSamplerStateV2 = {
    state: number
  }

  export type AmatTechniqueV2 = {
    quality: number,
    passes: Array<AmatPassV2>
  }

  export type AmatPassV2 = {
    effects: Array<AmatEffectV2>
  }

  export type AmatEffectV2 = {
    token: bigint,
    renderState: bigint,
    shaderPassFlags: number,
    pixelShaderIndex: number,
    vertexShaderVariants: Array<AmatVertexShaderVariantV2>
  }

  export type AmatVertexShaderVariantV2 = {
    variant: number,
    vertexShaderIndex: number
  }

}

export type V2 = V2_N.AmatMaterialV2;

export namespace V3_N {
  export type AmatMaterialV3 = {
    shaders: Array<AmatShaderV3>,
    samplers: Array<AmatSamplerStateV2>,
    techniques: Array<AmatTechniqueV2>
  }

  export type AmatShaderV3 = {
    isPixelShader: number,
    dx11Shader: AmatShaderBinaryV3,
    pbrShader: AmatShaderBinaryV3
  }

  export type AmatShaderBinaryV3 = {
    data: Uint8Array,
    constants: Array<AmatShaderConstantV2>,
    samplers: Array<AmatSamplerConstantV2>,
    bindings: Array<AmatShaderBindingV3>
  }

  export type AmatShaderConstantV2 = {
    token: number
  }

  export type AmatSamplerConstantV2 = {
    token: bigint,
    stateIndex: number,
    textureIndex: number,
    textureSlot: number
  }

  export type AmatShaderBindingV3 = {
    token: bigint,
    type: number,
    access: number,
    byte: number
  }

  export type AmatSamplerStateV2 = {
    state: number
  }

  export type AmatTechniqueV2 = {
    quality: number,
    passes: Array<AmatPassV2>
  }

  export type AmatPassV2 = {
    effects: Array<AmatEffectV2>
  }

  export type AmatEffectV2 = {
    token: bigint,
    renderState: bigint,
    shaderPassFlags: number,
    pixelShaderIndex: number,
    vertexShaderVariants: Array<AmatVertexShaderVariantV2>
  }

  export type AmatVertexShaderVariantV2 = {
    variant: number,
    vertexShaderIndex: number
  }

}

export type V3 = V3_N.AmatMaterialV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
