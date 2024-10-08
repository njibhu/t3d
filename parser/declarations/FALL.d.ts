export namespace V0_N {
  export type PackAnimFallbacksV0 = {
    fallbacks: Array<PackAnimFallbackV0>
  }

  export type PackAnimFallbackV0 = {
    sourceAnim: bigint,
    targetAnims: BigUint64Array
  }

}

export type V0 = V0_N.PackAnimFallbacksV0;

export type V0_U = V0;
