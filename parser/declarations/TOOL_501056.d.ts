

export type AmatToolParamsV0 = {
  description: string,
  flags: number,
  text: string,
  texCoordCount: number,
  texTransformCount: number,
  constants: Array<AmatToolConstantV0>,
  textures: Array<AmatToolTextureV0>
}

export type AmatToolConstantV0 = {
  token: number,
  displayName: string,
  defaultValue: Array<number>,
  flags: number,
  minValue: Array<number>,
  maxValue: Array<number>
}

export type AmatToolTextureV0 = {
  texName: string,
  texDefaultFile: string,
  flags: number,
  texGen: Array<number>,
  texTransform: Array<number>
}

export type AmatToolParamsV1 = {
  description: string,
  flags: number,
  text: string,
  texCoordCount: number,
  texTransformCount: number,
  constants: Array<AmatToolConstantV1>,
  textures: Array<AmatToolTextureV1>
}

export type AmatToolConstantV1 = {
  token: number,
  displayName: string,
  defaultValue: Array<number>,
  flags: number,
  minValue: Array<number>,
  maxValue: Array<number>
}

export type AmatToolTextureV1 = {
  texName: string,
  texDefaultFile: string,
  flags: number,
  texGen: Array<number>,
  texTransform: Array<number>
}

export type AmatToolParams = {
  description: string,
  flags: number,
  texCoordCount: number,
  texTransformCount: number,
  decompressedTextCount: number,
  compressedText: Array<number>,
  constants: Array<AmatToolConstant>,
  textures: Array<AmatToolTexture>
}

export type AmatToolConstant = {
  token: number,
  displayName: string,
  defaultValue: Array<number>,
  flags: number,
  minValue: Array<number>,
  maxValue: Array<number>
}

export type AmatToolTexture = {
  texName: string,
  texDefaultFile: string,
  flags: number,
  texGen: Array<number>
}