export namespace V0_N {
  export type MapSurfaces = {
    chunkData: Array<MapSurfaceChunk>,
    typeData: Array<number>
  }

  export type MapSurfaceChunk = {
    coord: Array<number>,
    metadata: Array<MapSurfaceMeta>,
    typeData: Array<number>
  }

  export type MapSurfaceMeta = {
    index: number,
    descriptor: number,
    data: number
  }

}

export type V0 = V0_N.MapSurfaces;

export namespace V1_N {
  export type MapSurfaces = {
    attributeData: Array<MapSurfaceAttribute>,
    toolData: Array<MapSurfaceAttributeTool>
  }

  export type MapSurfaceAttribute = {
    Id: number,
    Sound: number,
    flags: number
  }

  export type MapSurfaceAttributeTool = {
    name: string,
    category: string,
    color: Array<number>
  }

}

export type V1 = V1_N.MapSurfaces;

export namespace V2_N {
  export type MapSurfaces = {
    attributeData: Array<MapSurfaceAttribute>,
    toolData: Array<MapSurfaceAttributeTool>,
    terrainArray: Array<MapSurfaceTerrainOverride>,
    propArray: Array<MapSurfacePropOverride>
  }

  export type MapSurfaceAttribute = {
    Id: number,
    Sound: number,
    flags: number
  }

  export type MapSurfaceAttributeTool = {
    name: string,
    category: string,
    color: Array<number>
  }

  export type MapSurfaceTerrainOverride = {
    chunkCoord: Array<number>,
    overrideArray: Array<MapSurfaceOverride>
  }

  export type MapSurfaceOverride = {
    surfaceId: number,
    bitArray: Array<number>
  }

  export type MapSurfacePropOverride = {
    propId: number,
    overrideArray: Array<MapSurfaceOverride>
  }

}

export type V2 = V2_N.MapSurfaces;

export type V0_U = V0 | V1 | V2;
export type V1_U = V1 | V2;
export type V2_U = V2;
