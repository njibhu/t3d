import { FixedArray, Uint8, Uint32, Float32, DynArray, Filename, Uint64 } from "../src/types";

module.exports = [
  {
    chunkName: "mfst",
    name: "ContentPortalManifestV0",
    version: 0,
    definitions: {
      ContentMapV0: {
        mapId: Uint32,
        mapRedirectorArray: DynArray("ContentMapRedirectorV0"),
        mapStartArray: DynArray("ContentMapStartV0")
      },
      ContentMapRedirectorV0: {
        mapId: Uint32,
        token: Uint32,
        position: FixedArray(Float32, 3),
        radius: Float32
      },
      ContentMapStartV0: {
        token: Uint32,
        modelArray: DynArray("ContentMapModelV0"),
        position: FixedArray(Float32, 3),
        radius: Float32
      },
      ContentMapModelV0: {
        filename: Filename,
        flags: Uint32,
        type: Uint32
      }
    },
    root: {
      mapArray: DynArray("ContentMapV0")
    }
  },
  {
    chunkName: "mfst",
    name: "ContentPortalManifestV1",
    version: 1,
    definitions: {
      ContentMapV1: {
        mapId: Uint32,
        mapRedirectorArray: DynArray("ContentMapRedirectorV1"),
        mapStartArray: DynArray("ContentMapStartV1")
      },
      ContentMapRedirectorV1: {
        mapId: Uint32,
        token: Uint32,
        position: FixedArray(Float32, 3),
        radius: Float32
      },
      ContentMapStartV1: {
        token: Uint32,
        modelArray: DynArray("ContentMapModelV1"),
        position: FixedArray(Float32, 3),
        radius: Float32
      },
      ContentMapModelV1: {
        filename: Filename,
        flags: Uint32,
        type: Uint32,
        permutation: Uint64
      }
    },
    root: {
      mapArray: DynArray("ContentMapV1")
    }
  },
  {
    chunkName: "mfst",
    name: "ContentPortalManifest",
    version: 2,
    definitions: {
      ContentMap: {
        mapGUID: FixedArray(Uint8, 16),
        mapRedirectorArray: DynArray("ContentMapRedirector"),
        mapStartArray: DynArray("ContentMapStart")
      },
      ContentMapRedirector: {
        mapGUID: FixedArray(Uint8, 16),
        token: Uint32,
        position: FixedArray(Float32, 3),
        radius: Float32
      },
      ContentMapStart: {
        token: Uint32,
        modelArray: DynArray("ContentMapModel"),
        position: FixedArray(Float32, 3),
        radius: Float32
      },
      ContentMapModel: {
        filename: Filename,
        flags: Uint32,
        type: Uint32,
        permutation: Uint64
      }
    },
    root: {
      mapArray: DynArray("ContentMap")
    }
  }
]