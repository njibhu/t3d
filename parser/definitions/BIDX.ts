import { Filename, DynArray } from "../src/types";

const V0 = {
  chunkName: "BIDX",
  name: "BankIndexDataV0",
  version: 0,
  definitions: {
    BankLanguageDataV0: {
      bankFileName: DynArray("BankFileNameDataV0")
    },
    BankFileNameDataV0: {
      fileName: Filename()
    }
  },
  root: {
    bankLanguage: DynArray("BankLanguageDataV0")
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);