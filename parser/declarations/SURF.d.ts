export namespace V0 {
  export type MapSurfaces = {
    chunkData: Array<MapSurfaceChunk>,
    typeData: Array<BigInt>
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

export namespace V1 {
  export type MapSurfaces = {
    attributeData: Array<MapSurfaceAttribute>,
    toolData: Array<MapSurfaceAttributeTool>
  }

  export type MapSurfaceAttribute = {
    Id: BigInt,
    Sound: BigInt,
    flags: number
  }

  export type MapSurfaceAttributeTool = {
    name: string,
    category: string,
    color: Array<number>
  }

}

export namespace V2 {
  export type MapSurfaces = {
    attributeData: Array<MapSurfaceAttribute>,
    toolData: Array<MapSurfaceAttributeTool>,
    terrainArray: Array<MapSurfaceTerrainOverride>,
    propArray: Array<MapSurfacePropOverride>
  }

  export type MapSurfaceAttribute = {
    Id: BigInt,
    Sound: BigInt,
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
    surfaceId: BigInt,
    bitArray: Array<number>
  }

  export type MapSurfacePropOverride = {
    propId: BigInt,
    overrideArray: Array<MapSurfaceOverride>
  }

}

