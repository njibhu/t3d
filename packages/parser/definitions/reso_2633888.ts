import { FixedArray, Float32, Uint32, Filename, Uint64, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "reso",
    name: "PackMapResourceMapV0",
    version: 0,
    definitions: {
      PackMapResourceMapNodeV0: {
        position: FixedArray(Float32, 3),
        flags: Uint32,
        itemArray: DynArray("PackMapResourceMapNodeItemV0")
      },
      PackMapResourceMapNodeItemV0: {
        filename: Filename,
        type: Uint32
      }
    },
    root: {
      nodeArray: DynArray("PackMapResourceMapNodeV0")
    }
  },
  {
    chunkName: "reso",
    name: "PackMapResourceMapV1",
    version: 1,
    definitions: {
      PackMapResourceMapNodeV1: {
        position: FixedArray(Float32, 3),
        flags: Uint32,
        itemArray: DynArray("PackMapResourceMapNodeItemV1")
      },
      PackMapResourceMapNodeItemV1: {
        filename: Filename,
        type: Uint32,
        permutation: Uint64
      }
    },
    root: {
      nodeArray: DynArray("PackMapResourceMapNodeV1")
    }
  }
]