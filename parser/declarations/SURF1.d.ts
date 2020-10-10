

export type MapSurfaces = {
  attributeData: Array<MapSurfaceAttribute>,
  toolData: Array<MapSurfaceAttributeTool>,
  terrainArray: Array<MapSurfaceTerrainOverride>,
  propArray: Array<MapSurfacePropOverride>
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