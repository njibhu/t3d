import { Uint64, Uint32, DynArray, String16, FixedArray, Uint8, Uint16 } from "../src/types";

module.exports = [
  {
    chunkName: "surf",
    name: "MapSurfaces",
    version: 0,
    definitions: {
      MapSurfaceChunk: {
        coord: FixedArray(Uint32, 3),
        metadata: DynArray("MapSurfaceMeta"),
        typeData: DynArray(Uint8)
      },
      MapSurfaceMeta: {
        index: Uint16,
        descriptor: Uint8,
        data: Uint8
      }
    },
    root: {
      chunkData: DynArray("MapSurfaceChunk"),
      typeData: DynArray(Uint64)
    }
  },
  {
    chunkName: "surf",
    name: "MapSurfaces",
    version: 1,
    definitions: {
      MapSurfaceAttribute: {
        Id: Uint64,
        Sound: Uint64,
        flags: Uint32
      },
      MapSurfaceAttributeTool: {
        name: String16(),
        category: String16(),
        color: FixedArray(Uint8, 4)
      }
    },
    root: {
      attributeData: DynArray("MapSurfaceAttribute"),
      toolData: DynArray("MapSurfaceAttributeTool")
    }
  },
  {
    chunkName: "surf",
    name: "MapSurfaces",
    version: 2,
    definitions: {
      MapSurfaceAttribute: {
        Id: Uint64,
        Sound: Uint64,
        flags: Uint32
      },
      MapSurfaceAttributeTool: {
        name: String16(),
        category: String16(),
        color: FixedArray(Uint8, 4)
      },
      MapSurfaceTerrainOverride: {
        chunkCoord: FixedArray(Uint32, 2),
        overrideArray: DynArray("MapSurfaceOverride")
      },
      MapSurfaceOverride: {
        surfaceId: Uint64,
        bitArray: DynArray(Uint32)
      },
      MapSurfacePropOverride: {
        propId: Uint64,
        overrideArray: DynArray("MapSurfaceOverride")
      }
    },
    root: {
      attributeData: DynArray("MapSurfaceAttribute"),
      toolData: DynArray("MapSurfaceAttributeTool"),
      terrainArray: DynArray("MapSurfaceTerrainOverride"),
      propArray: DynArray("MapSurfacePropOverride")
    }
  }
]