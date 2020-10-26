

export type PackMapLights = {
  pointLights: Array<PackMapPointLightgroups>,
  portalLights: Array<PackMapPortalLight>,
  spotLights: Array<PackMapSpotLightgroups>,
  volumeLights: Array<PackMapVolumeLight>,
  broadPhase: PackBroadphaseType,
  maxBroadId: number
}

export type PackMapLight = {
  position: Array<number>,
  color: Array<number>,
  intensity: number,
  nearDistance: number,
  farDistance: number,
  flags: number
}

export type PackMapLightgroups = {
  guid: BigInt,
  lights: Array<PackMapLight>,
  curves: Array<PackMapCurve>,
  broadId: number
}

export type PackMapCurve = {
  gust: number,
  gustFreq: number,
  noise: number,
  phase: number,
  offset: number,
  amplitude: number,
  curveType: number
}

export type PackMapPointLightgroups = {
  guid: BigInt,
  lights: Array<PackMapLight>,
  curves: Array<PackMapCurve>,
  broadId: number
}

export type PackMapPointLight = {
  position: Array<number>,
  color: Array<number>,
  intensity: number,
  nearDistance: number,
  farDistance: number,
  flags: number,
  direction: Array<number>,
  innerAngle: number,
  outerAngle: number,
  textureName: string
}

export type PackMapVolumeLight = {
  guid: BigInt,
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  intensities: Array<number>,
  pack: Array<number>,
  name: string,
  floodPoints: Array<Array<number>>,
  flags: number,
  images: Array<PackMapVolumeImage>,
  broadId: number
}

export type PackMapVolumeImage = {
  filename: string,
  dims: Array<number>,
  format: number,
  image: Array<number>
}

export type PackBroadphaseType = {
  broadphaseData: Array<number>
}

export type PackMapLightsV14 = {
  pointLights: Array<PackMapPointLightgroups>,
  portalLights: Array<PackMapProtalLight>,
  spotLights: Array<PackMapSpotLightgroups>,
  volumeLights: Array<PackMapVolumeLight>,
  broadPhase: PackBroadphaseType,
  maxBroadId: number
}

export type PackMapProtalLight = {
  guid: BigInt,
  fadeCamera: number,
  fadeLight: number,
  lighten: number,
  darken: number,
  points: Array<Array<number>>,
  broadId: number
}

export type PackMapSpotLightgroups = {
  guid: BigInt,
  lights: Array<PackMapSpotLight>,
  curves: Array<PackMapCurve>,
  broadId: number
}

export type PackMapLightsV15 = {
  pointLights: Array<PackMapPointLightgroups>,
  portalLights: Array<PackMapPortalLight>,
  spotLights: Array<PackMapSpotLightgroups>,
  volumeLights: Array<PackMapVolumeLight>,
  broadPhase: PackBroadphaseType,
  maxBroadId: number
}

export type PackMapPortalLight = {
  guid: BigInt,
  points: Array<Array<number>>,
  portalData: Array<PackMapPortalData>,
  broadId: number
}

export type PackMapPortalData = {
  fadeCamera: number,
  fadeLight: number,
  lighten: number,
  darken: number
}

export type PackMapSpotLight = {
  position: Array<number>,
  color: Array<number>,
  intensity: number,
  nearDistance: number,
  farDistance: number,
  flags: number,
  direction: Array<number>,
  upDirection: Array<number>,
  innerAngle: number,
  outerAngle: number,
  textureName: string,
  shadowData: PackMapSpotShadow
}

export type PackMapSpotShadow = {
  shadowFilename: string
}