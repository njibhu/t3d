import { Uint8, DynArray } from "../src/types";

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