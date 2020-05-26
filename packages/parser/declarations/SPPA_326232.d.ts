

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