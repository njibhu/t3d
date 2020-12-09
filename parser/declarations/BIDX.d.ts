export namespace V0_N {
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

export type V0 = V0_N.BankIndexDataV0;

export type V0_U = V0;
