export namespace V0 {
  export type TextPackVariants = {
    variants: Array<TextPackVariant>
  }

  export type TextPackVariant = {
    textId: number,
    variantTextIds: Array<number>
  }

}

