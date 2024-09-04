export namespace V0_N {
  export type AmatGfxMaterial = {
    shaders: Array<AmatGfxShader>,
    samplers: Array<AmatGfxSamplerState>,
    techniques: Array<AmatGfxTechnique>
  }

  export type AmatGfxShader = {
    isPixelShader: number,
    dxShader: AmatGfxShaderBinary,
    osxShader: AmatGfxShaderBinary
  }

  export type AmatGfxShaderBinary = {
    data: Uint8Array,
    constants: Array<AmatGfxShaderConstant>,
    samplers: Array<AmatGfxSamplerConstant>
  }

  export type AmatGfxShaderConstant = {
    token: number
  }

  export type AmatGfxSamplerConstant = {
    token: BigInt,
    stateIndex: number,
    textureIndex: number,
    textureSlot: number
  }

  export type AmatGfxSamplerState = {
    state: number
  }

  export type AmatGfxTechnique = {
    quality: number,
    passes: Array<AmatGfxPass>
  }

  export type AmatGfxPass = {
    effects: Array<AmatGfxEffect>
  }

  export type AmatGfxEffect = {
    token: BigInt,
    renderState: BigInt,
    shaderPassFlags: number,
    pixelShaderIndex: number,
    vertexShaderVariants: Array<AmatGfxVertexShaderVariant>
  }

  export type AmatGfxVertexShaderVariant = {
    variant: number,
    vertexShaderIndex: number
  }

}

export type V0 = V0_N.AmatGfxMaterial;

export namespace V1_N {
  export type AmatGfxMaterial = {
    shaders: Array<AmatGfxShader>,
    samplers: Array<AmatGfxSamplerState>,
    techniques: Array<AmatGfxTechnique>
  }

  export type AmatGfxShader = {
    isPixelShader: number,
    dxShader: AmatGfxShaderBinary,
    osxShader: AmatGfxShaderBinary
  }

  export type AmatGfxShaderBinary = {
    data: Uint8Array,
    constants: Array<AmatGfxShaderConstant>,
    samplers: Array<AmatGfxSamplerConstant>
  }

  export type AmatGfxShaderConstant = {
    token: number
  }

  export type AmatGfxSamplerConstant = {
    token: BigInt,
    stateIndex: number,
    textureIndex: number,
    textureSlot: number
  }

  export type AmatGfxSamplerState = {
    state: number
  }

  export type AmatGfxTechnique = {
    quality: number,
    passes: Array<AmatGfxPass>
  }

  export type AmatGfxPass = {
    effects: Array<AmatGfxEffect>
  }

  export type AmatGfxEffect = {
    token: BigInt,
    renderState: BigInt,
    shaderPassFlags: number,
    pixelShaderIndex: number,
    vertexShaderVariants: Array<AmatGfxVertexShaderVariant>
  }

  export type AmatGfxVertexShaderVariant = {
    variant: number,
    vertexShaderIndex: number
  }

}

export type V1 = V1_N.AmatGfxMaterial;

export type V0_U = V0 | V1;
export type V1_U = V1;
