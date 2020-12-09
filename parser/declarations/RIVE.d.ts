export namespace V0_N {
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

export type V0 = V0_N.PackMapRivers;

export namespace V1_N {
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

export type V1 = V1_N.PackMapRivers;

export namespace V2_N {
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

export type V2 = V2_N.PackMapRivers;

export namespace V3_N {
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

export type V3 = V3_N.PackMapRivers;

export namespace V4_N {
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

export type V4 = V4_N.PackMapRivers;

export namespace V5_N {
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

export type V5 = V5_N.PackMapRivers;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5;
export type V1_U = V1 | V2 | V3 | V4 | V5;
export type V2_U = V2 | V3 | V4 | V5;
export type V3_U = V3 | V4 | V5;
export type V4_U = V4 | V5;
export type V5_U = V5;
