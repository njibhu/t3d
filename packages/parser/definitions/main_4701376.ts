import { String16, Fileref, Float32, DynArray } from "../src/types";

module.exports = [
  {
    chunkName: "main",
    name: "CollideModelManifest",
    version: 0,
    definitions: {
      CollideModelManifestFile: {
        modelFile: Fileref,
        collisionFile: Fileref,
        scales: DynArray(Float32)
      }
    },
    root: {
      files: DynArray("CollideModelManifestFile")
    }
  },
  {
    chunkName: "main",
    name: "CollideModelManifest",
    version: 1,
    definitions: {
      CollideModelManifestFile: {
        modelFileStr: String16,
        modelFile: Fileref,
        collisionFile: Fileref,
        scales: DynArray(Float32)
      }
    },
    root: {
      files: DynArray("CollideModelManifestFile")
    }
  }
]