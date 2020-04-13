import { Float32, FixedArray, Uint32, DynArray, Filename } from "../src/types";

module.exports = [
  {
    chunkName: "shor",
    name: "MapShore",
    version: 2,
    definitions: {
      MapShoreChain: {
        offset: Float32,
        opacity: Float32,
        animationSpeed: Float32,
        edgeSize: FixedArray(Float32, 2),
        flags: Uint32,
        points: DynArray(FixedArray(Float32, 2)),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        restTime: Float32,
        fadeRanges: FixedArray(FixedArray(Float32, 2), 4)
      }
    },
    root: {
      chains: DynArray("MapShoreChain")
    }
  },
  {
    chunkName: "shor",
    name: "MapShore",
    version: 3,
    definitions: {
      MapShoreChain: {
        offset: Float32,
        opacity: Float32,
        animationSpeed: Float32,
        edgeSize: FixedArray(Float32, 2),
        flags: Uint32,
        points: DynArray(FixedArray(Float32, 2)),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        restTime: Float32,
        fadeRanges: FixedArray(FixedArray(Float32, 2), 4),
        simplifyDistMin: Float32,
        simplifyDistMax: Float32,
        simplifyDot: Float32
      }
    },
    root: {
      chains: DynArray("MapShoreChain")
    }
  }
]