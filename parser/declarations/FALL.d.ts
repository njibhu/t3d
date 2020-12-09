export namespace V0 {
  export type PackAnimFallbacksV0 = {
    fallbacks: Array<PackAnimFallbackV0>
  }

  export type PackAnimFallbackV0 = {
    sourceAnim: BigInt,
    targetAnims: Array<BigInt>
  }

}

