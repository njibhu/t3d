export namespace V0 {
  export type BankIndexDataV0 = {
    bankLanguage: Array<BankLanguageDataV0>
  }

  export type BankLanguageDataV0 = {
    bankFileName: Array<BankFileNameDataV0>
  }

  export type BankFileNameDataV0 = {
    fileName: string
  }

}

