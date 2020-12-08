import { Uint64, Uint32, DynArray, RefString16, FixedArray, Uint8, Uint16 } from "../src/types";

export const V0 = {
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
};

export const V1 = {
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
      name: RefString16(),
      category: RefString16(),
      color: FixedArray(Uint8, 4)
    }
  },
  root: {
    attributeData: DynArray("MapSurfaceAttribute"),
    toolData: DynArray("MapSurfaceAttributeTool")
  }
};

export const V2 = {
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
      name: RefString16(),
      category: RefString16(),
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
};

export const latest = V2;
export const definitionArray = [V0, V1, V2];