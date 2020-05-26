

export type AmatXbxMaterial = {
  name: string,
  shaders: Array<AmatXbxShader>,
  effects: Array<AmatXbxEffect>,
  samplers: Array<AmatXbxSamplerState>
}

export type AmatXbxShader = {
  isPixelShader: number,
  cachedData: Array<number>,
  physicalData: Array<number>,
  constants: Array<AmatXbxShaderConstant>,
  samplers: Array<AmatXbxSamplerConstant>
}

export type AmatXbxShaderConstant = {
  token: number,
  regIndex: number,
  regCount: number
}

export type AmatXbxSamplerConstant = {
  regIndex: number,
  stateIndex: number,
  texIndex: number
}

export type AmatXbxEffect = {
  token: number,
  passes: Array<AmatXbxPass>
}

export type AmatXbxPass = {
  renderState: AmatXbxRenderState,
  pixelShader: number,
  vertexShader: number,
  psFileFame: string,
  vsFileName: string
}

export type AmatXbxRenderState = {
  cullMode: number,
  blendControl: number,
  alphaTestAndMask: number,
  alphaTestRef: number,
  colorWrite: number,
  depthWriteEnable: number,
  depthFunction: number,
  depthBias: number
}

export type AmatXbxSamplerState = {
  addressU: number,
  addressV: number,
  addressW: number,
  borderColor: number,
  magFilter: number,
  maxAnisotropy: number,
  maxMipLevel: number,
  minFilter: number,
  mipFilter: number,
  mipMapLodBias: number
}