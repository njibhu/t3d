export namespace V0_N {
  export type PackEulaV0 = {
    Language: Array<PackEulaLanguageV0>,
    Version: number
  }

  export type PackEulaLanguageV0 = {
    Language: number,
    Text: string
  }

}

export type V0 = V0_N.PackEulaV0;

export type V0_U = V0;
