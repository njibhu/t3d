

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

export type MapRiverReach = {
  properties: Array<PackMapRiverProperty>
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

export type PackMapRiverProperty = {
  type: number,
  val: BigInt,
  strVal: string
}