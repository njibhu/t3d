

export type AmatAppleMaterial = {
  name: string,
  shaders: Array<AmatAppleShader>,
  effects: Array<AmatAppleEffect>,
  samplers: Array<AmatAppleSamplerState>
}

export type AmatAppleShader = {
  isPixelShader: number,
  cachedData: Array<number>,
  physicalData: Array<number>,
  constants: Array<AmatAppleShaderConstant>,
  samplers: Array<AmatAppleShaderConstant>
}

export type AmatAppleShaderConstant = {
  token: number,
  regIndex: number,
  regCount: number
}

export type AmatAppleEffect = {
  token: number,
  passes: Array<AmatApplePass>
}

export type AmatApplePass = {
  renderState: AmatAppleRenderState,
  pixelShader: number,
  vertexShader: number,
  psFileFame: string,
  vsFileName: string
}

export type AmatAppleRenderState = {
  cullMode: number,
  blendControl: number,
  alphaTestAndMask: number,
  alphaTestRef: number,
  colorWrite: number,
  depthWriteEnable: number,
  depthFunction: number,
  depthBias: number
}

export type AmatAppleSamplerState = {
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