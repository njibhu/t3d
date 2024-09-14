export namespace V0_N {
  export type MapSurfaces = {
    chunkData: Array<MapSurfaceChunk>,
    typeData: BigUint64Array
  }

  export type MapSurfaceChunk = {
    coord: Uint32Array,
    metadata: Array<MapSurfaceMeta>,
    typeData: Uint8Array
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
    Id: bigint,
    Sound: bigint,
    flags: number
  }

  export type MapSurfaceAttributeTool = {
    name: string,
    category: string,
    color: Uint8Array
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
    Id: bigint,
    Sound: bigint,
    flags: number
  }

  export type MapSurfaceAttributeTool = {
    name: string,
    category: string,
    color: Uint8Array
  }

  export type MapSurfaceTerrainOverride = {
    chunkCoord: Uint32Array,
    overrideArray: Array<MapSurfaceOverride>
  }

  export type MapSurfaceOverride = {
    surfaceId: bigint,
    bitArray: Uint32Array
  }

  export type MapSurfacePropOverride = {
    propId: bigint,
    overrideArray: Array<MapSurfaceOverride>
  }

}

export type V2 = V2_N.MapSurfaces;

export type V0_U = V0 | V1 | V2;
export type V1_U = V1 | V2;
export type V2_U = V2;
