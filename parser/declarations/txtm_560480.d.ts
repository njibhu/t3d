

export type TextPackManifest = {
  stringsPerFile: number,
  languages: Array<TextPackLanguage>
}

export type TextPackLanguage = {
  filenames: Array<string>
}