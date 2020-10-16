

export type AmatGrV0 = {
  texArrayRange: number,
  texCount: number,
  texTransformRange: number,
  sortOrder: number,
  flags: number,
  textureMasks: Array<number>
}

export type AmatGrV1 = {
  texArrayRange: number,
  texCount: number,
  texTransformRange: number,
  sortOrder: number,
  flags: number,
  texType: number,
  textureMasks: Array<number>
}

export type AmatGrV2 = {
  texArrayRange: number,
  texCount: number,
  texTransformRange: number,
  sortOrder: number,
  sortTri: number,
  flags: number,
  texType: number,
  textureMasks: Array<number>
}

export type AmatGrV3 = {
  texArrayRange: number,
  texCount: number,
  texTransformRange: number,
  sortOrder: number,
  sortTri: number,
  debugFlags: number,
  flags: number,
  texType: number,
  textureMasks: Array<number>
}

export type AmatGr = {
  texArrayRange: number,
  texCount: number,
  sortOrder: number,
  sortTri: number,
  procAnim: number,
  debugFlags: number,
  flags: number,
  texTokens: Array<BigInt>
}