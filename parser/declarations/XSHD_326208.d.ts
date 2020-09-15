

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