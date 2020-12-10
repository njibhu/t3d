export namespace V0_N {
  export type TextPackManifest = {
    stringsPerFile: number,
    languages: Array<TextPackLanguage>
  }

  export type TextPackLanguage = {
    filenames: Array<string>
  }

}

export type V0 = V0_N.TextPackManifest;

export type V0_U = V0;
