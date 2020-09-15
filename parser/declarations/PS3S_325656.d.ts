

export type AmatPs3Material = {
  name: string,
  fragmentShaders: Array<AmatPs3FragmentShaderConfig>,
  vertexShaders: Array<AmatPs3VertexShaderConfig>,
  effects: Array<AmatPs3Effect>,
  samplers: Array<AmatPs3Sampler>
}

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

export type AmatPs3VertexShaderConfig = {
  instructionSlot: number,
  instructionCount: number,
  attributeInputMask: number,
  registerCount: number,
  constants: Array<AmatPs3ShaderConstant>,
  samplers: Array<AmatPs3SamplerConstant>,
  code: Array<number>
}

export type AmatPs3Effect = {
  token: number,
  passes: Array<AmatPs3Pass>
}

export type AmatPs3Pass = {
  renderState: AmatPs3RenderState,
  pixelShader: number,
  vertexShader: number,
  psFileFame: string,
  vsFileName: string
}

export type AmatPs3RenderState = {
  cullMode: number,
  alphaFunc: number,
  alphaRef: number,
  blendOp: number,
  blendSrc: number,
  blendDst: number,
  colorMask: number,
  depthWrite: number,
  depthFunc: number,
  depthBias: number
}

export type AmatPs3Sampler = {
  wraps: number,
  wrapt: number,
  maxAniso: number,
  filterMin: number,
  filterMag: number,
  filterBias: number
}