import { Uint8, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "GAME",
    name: "ModelFileGame",
    version: 0,
    root: {
      gameData: DynArray(Uint8)
    }
  }
]