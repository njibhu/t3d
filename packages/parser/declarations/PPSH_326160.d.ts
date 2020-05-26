

export type AmatPs3FragmentShaderConfig = {
  offset: number,
  attributeInputMask: number,
  texCoordsInputMask: number,
  texCoords2D: number,
  texCoordsCentroid: number,
  fragmentControl: number,
  registerCount: number,
  constants: Array<AmatPs3ShaderConstant>,
  samplers: Array<AmatPs3SamplerConstant>,
  code: Array<number>
}

export type AmatPs3ShaderConstant = {
  token: number,
  regIndex: number,
  regCount: number,
  regValue: Array<number>,
  data: number
}

export type AmatPs3SamplerConstant = {
  regIndex: number,
  stateIndex: number,
  texIndex: number
}