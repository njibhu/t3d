import { Filename, DynArray } from "./types";

module.exports = [
  {
    chunkName: "BIDX",
    name: "BankIndexDataV0",
    version: 0,
    definitions: {
      BankLanguageDataV0: {
        bankFileName: DynArray("BankFileNameDataV0")
      },
      BankFileNameDataV0: {
        fileName: Filename
      }
    },
    root: {
      bankLanguage: DynArray("BankLanguageDataV0")
    }
  }
]