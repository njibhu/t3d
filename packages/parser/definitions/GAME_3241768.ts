import { Uint8, DynArray } from "./types";

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