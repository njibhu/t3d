

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
  data: Array<number>,
  constants: Array<AmatGfxShaderConstant>,
  samplers: Array<AmatGfxSamplerConstant>
}

export type AmatGfxShaderConstant = {
  token: number
}

export type AmatGfxSamplerConstant = {
  token: number,
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
  token: number,
  renderState: number,
  shaderPassFlags: number,
  pixelShaderIndex: number,
  vertexShaderVariants: Array<AmatGfxVertexShaderVariant>
}

export type AmatGfxVertexShaderVariant = {
  variant: number,
  vertexShaderIndex: number
}