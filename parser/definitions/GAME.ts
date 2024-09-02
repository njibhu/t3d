import { Uint8, DynArray } from "../src/types";

const V0 = {
  chunkName: "GAME",
  name: "ModelFileGame",
  version: 0,
  root: {
    gameData: DynArray(Uint8)
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);