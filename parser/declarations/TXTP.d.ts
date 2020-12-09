export namespace V0 {
  export type TextPackPasswords = {
    stringCount: number,
    passwords: Array<TextPackPassword>
  }

  export type TextPackPassword = {
    textId: number,
    password: BigInt
  }

}

