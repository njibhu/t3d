import { Uint8, DynArray } from "./types";

module.exports = [
  {
    chunkName: "ICON",
    name: "ModelFileIcon",
    version: 0,
    root: {
      jpgData: DynArray(Uint8)
    }
  }
]