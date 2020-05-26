import { FixedArray, Uint32, Filename, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "bloc",
    name: "PackMapBlock",
    version: 0,
    definitions: {
      PackMapBlockRecord: {
        filename: Filename()
      }
    },
    root: {
      blockDims: FixedArray(Uint32, 2),
      blockRecordArray: DynArray("PackMapBlockRecord")
    }
  }
]