

export type PackAnimFallbacksV0 = {
  fallbacks: Array<PackAnimFallbackV0>
}

export type PackAnimFallbackV0 = {
  sourceAnim: number,
  targetAnims: Array<number>
}