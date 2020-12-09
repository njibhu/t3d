export namespace V0_N {
  export type TextPackVariants = {
    variants: Array<TextPackVariant>
  }

  export type TextPackVariant = {
    textId: number,
    variantTextIds: Array<number>
  }

}

export type V0 = V0_N.TextPackVariants;

export type V0_U = V0;
