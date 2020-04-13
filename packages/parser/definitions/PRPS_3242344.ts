import { Uint64, FixedArray, Float32, DynArray, Uint32, Filename } from "../src/types";

module.exports = [
  {
    chunkName: "PRPS",
    name: "ModelFileProperties",
    version: 0,
    definitions: {
      ModelFixedOffsetData: {
        name: Uint64,
        parentBone: Uint64,
        translation: FixedArray(Float32, 3)
      },
      ModelPropertyData: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename
      }
    },
    root: {
      fixedOffsetData: DynArray("ModelFixedOffsetData"),
      properties: DynArray("ModelPropertyData")
    }
  }
]