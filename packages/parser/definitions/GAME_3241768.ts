import { Uint8, DynArray } from "../src/types";

export const V0 = {
  chunkName: "GAME",
  name: "ModelFileGame",
  version: 0,
  root: {
    gameData: DynArray(Uint8)
  }
};

export const latest = V0;
export const definitionArray = [V0];