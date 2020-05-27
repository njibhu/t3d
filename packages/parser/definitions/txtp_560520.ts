import { Uint32, Uint64, DynArray } from "../src/types";

export const V0 = {
  chunkName: "txtp",
  name: "TextPackPasswords",
  version: 0,
  definitions: {
    TextPackPassword: {
      textId: Uint32,
      password: Uint64
    }
  },
  root: {
    stringCount: Uint32,
    passwords: DynArray("TextPackPassword")
  }
};

export const latest = V0;
export const definitionArray = [V0];