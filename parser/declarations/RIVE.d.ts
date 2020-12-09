export namespace V0 {
  export type PackMapRivers = {
    flags: number,
    nextBroadId: number,
    rivers: Array<MapRiver>,
    broadPhase: PackBroadphaseType
  }

  export type MapRiver = {
    guid: BigInt,
    xTiling: number,
    points: Array<Array<number>>,
    reaches: Array<MapRiverReach>
  }

  export type MapRiverReach = {
    width: number,
    curveLength: number,
    curvePercent: number,
    xTessellation: number,
    yTessellation: Array<number>,
    broadId: number,
    materials: Array<MapRiverMaterial>
  }

  export type MapRiverMaterial = {
    materialFile: string,
    textureFiles: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    textureMaps: Array<MapRiverTextureMap>
  }

  export type MapRiverTextureMap = {
    scale: number,
    speed: number,
    tiling: number,
    uvIndex: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V1 {
  export type PackMapRivers = {
    flags: number,
    nextBroadId: number,
    rivers: Array<MapRiver>,
    broadPhase: PackBroadphaseType
  }

  export type MapRiver = {
    guid: BigInt,
    name: string,
    xTiling: number,
    points: Array<Array<number>>,
    reaches: Array<MapRiverReach>
  }

  export type MapRiverReach = {
    width: number,
    curveLength: number,
    curvePercent: number,
    xTessellation: number,
    yTessellation: Array<number>,
    broadId: number,
    materials: Array<MapRiverMaterial>
  }

  export type MapRiverMaterial = {
    materialFile: string,
    textureFiles: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    textureMaps: Array<MapRiverTextureMap>
  }

  export type MapRiverTextureMap = {
    scale: number,
    speedX: number,
    speedY: number,
    tiling: number,
    uvIndex: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V2 {
  export type PackMapRivers = {
    flags: number,
    nextBroadId: number,
    rivers: Array<MapRiver>,
    broadPhase: PackBroadphaseType
  }

  export type MapRiver = {
    guid: BigInt,
    name: string,
    xTiling: number,
    points: Array<Array<number>>,
    reaches: Array<MapRiverReach>
  }

  export type MapRiverReach = {
    width: number,
    curveLength: number,
    curvePercent: number,
    xTessellation: number,
    yTessellation: Array<number>,
    broadId: number,
    fvf: number,
    materials: Array<MapRiverMaterial>
  }

  export type MapRiverMaterial = {
    materialFile: string,
    textureFiles: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    textureMaps: Array<MapRiverTextureMap>
  }

  export type MapRiverTextureMap = {
    scale: number,
    speedX: number,
    speedY: number,
    tiling: number,
    uvIndex: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V3 {
  export type PackMapRivers = {
    flags: number,
    nextBroadId: number,
    rivers: Array<MapRiver>,
    broadPhase: PackBroadphaseType
  }

  export type MapRiver = {
    guid: BigInt,
    name: string,
    xTiling: number,
    points: Array<Array<number>>,
    reaches: Array<MapRiverReach>,
    flags: number
  }

  export type MapRiverReach = {
    width: number,
    curveLength: number,
    curvePercent: number,
    xTessellation: number,
    yTessellation: Array<number>,
    broadId: number,
    fvf: number,
    flags: number,
    materials: Array<MapRiverMaterial>
  }

  export type MapRiverMaterial = {
    materialFile: string,
    textureFiles: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    textureMaps: Array<MapRiverTextureMap>
  }

  export type MapRiverTextureMap = {
    scale: number,
    speedX: number,
    speedY: number,
    tiling: number,
    uvIndex: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V4 {
  export type PackMapRivers = {
    flags: number,
    nextBroadId: number,
    rivers: Array<MapRiver>,
    broadPhase: PackBroadphaseType
  }

  export type MapRiver = {
    guid: BigInt,
    name: string,
    xTiling: number,
    points: Array<Array<number>>,
    reaches: Array<MapRiverReach>,
    flags: number
  }

  export type MapRiverReach = {
    width: number,
    curveLength: number,
    curvePercent: number,
    xTessellation: number,
    yTessellation: Array<number>,
    broadId: number,
    fvf: number,
    flags: number,
    materials: Array<MapRiverMaterial>,
    reserved: string
  }

  export type MapRiverMaterial = {
    materialFile: string,
    textureFiles: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    textureMaps: Array<MapRiverTextureMap>,
    flags: number
  }

  export type MapRiverTextureMap = {
    scale: number,
    speedX: number,
    speedY: number,
    tiling: number,
    flags: number,
    uvIndex: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V5 {
  export type PackMapRivers = {
    rivers: Array<MapRiver>
  }

  export type MapRiver = {
    guid: BigInt,
    name: string,
    properties: Array<PackMapRiverProperty>,
    points: Array<Array<number>>,
    reaches: Array<MapRiverReach>
  }

  export type PackMapRiverProperty = {
    type: number,
    val: BigInt,
    strVal: string
  }

  export type MapRiverReach = {
    properties: Array<PackMapRiverProperty>
  }

}

