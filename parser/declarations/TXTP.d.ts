export namespace V0_N {
  export type TextPackPasswords = {
    stringCount: number,
    passwords: Array<TextPackPassword>
  }

  export type TextPackPassword = {
    textId: number,
    password: number
  }

}

export type V0 = V0_N.TextPackPasswords;

export type V0_U = V0;
