export namespace V29_N {
  export type PackMapEnvironmentV29 = {
    dataLocalArray: Array<PackMapEnvDataLocalV29>,
    dataGlobal: PackMapEnvDataGlobalV29
  }

  export type PackMapEnvDataLocalV29 = {
    lighting: Array<PackMapEnvDataLightingV29>,
    clouds: PackMapEnvDataCloudsV29,
    effect: Array<PackMapEnvDataEffectV29>,
    haze: Array<PackMapEnvDataHazeV29>,
    particleFields: Array<PackMapEnvDataPFieldV29>,
    sky: PackMapEnvDataSkyV29,
    skyCards: PackMapEnvDataSkyCardsV29,
    water: Array<PackMapEnvDataWaterV29>,
    wind: Array<PackMapEnvDataWindV29>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV29 = {
    lights: Array<PackMapEnvDataLightV29>
  }

  export type PackMapEnvDataLightV29 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV29 = {
    layers: Array<PackMapEnvDataLayerV29>
  }

  export type PackMapEnvDataLayerV29 = {
    altitude: number,
    scale: number,
    texture: string,
    day: PackMapEnvDataLayerAttributesV29,
    night: PackMapEnvDataLayerAttributesV29,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV29 = {
    density: number,
    depth: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV29 = {
    glow: Array<number>,
    tintColor: Array<number>,
    saturation: number,
    tintAmount: number,
    glowLevel: Array<number>,
    glowAmplify: number
  }

  export type PackMapEnvDataHazeV29 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV29 = {
    angle: Array<number>,
    deviation: number,
    extent: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataSkyV29 = {
    flags: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV29 = {
    cards: Array<PackMapEnvDataSkyCardV29>
  }

  export type PackMapEnvDataSkyCardV29 = {
    day: PackMapEnvDataSkyCardAttributesV29,
    night: PackMapEnvDataSkyCardAttributesV29,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV29 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV29 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string
  }

  export type PackMapEnvDataWindV29 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV29 = {
    lighting: Array<PackMapEnvDataLightingV29>,
    clouds: PackMapEnvDataCloudsV29,
    effect: Array<PackMapEnvDataEffectV29>,
    haze: Array<PackMapEnvDataHazeV29>,
    particleFields: Array<PackMapEnvDataPFieldV29>,
    sky: PackMapEnvDataSkyV29,
    skyCards: PackMapEnvDataSkyCardsV29,
    water: Array<PackMapEnvDataWaterV29>,
    wind: Array<PackMapEnvDataWindV29>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV29>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV29 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V29 = V29_N.PackMapEnvironmentV29;

export namespace V30_N {
  export type PackMapEnvironmentV30 = {
    dataLocalArray: Array<PackMapEnvDataLocalV30>,
    dataGlobal: PackMapEnvDataGlobalV30
  }

  export type PackMapEnvDataLocalV30 = {
    lighting: Array<PackMapEnvDataLightingV30>,
    clouds: PackMapEnvDataCloudsV30,
    effect: Array<PackMapEnvDataEffectV30>,
    haze: Array<PackMapEnvDataHazeV30>,
    particleFields: Array<PackMapEnvDataPFieldV30>,
    sky: PackMapEnvDataSkyV30,
    skyCards: PackMapEnvDataSkyCardsV30,
    water: Array<PackMapEnvDataWaterV30>,
    wind: Array<PackMapEnvDataWindV30>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV30 = {
    lights: Array<PackMapEnvDataLightV30>
  }

  export type PackMapEnvDataLightV30 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV30 = {
    layers: Array<PackMapEnvDataLayerV30>
  }

  export type PackMapEnvDataLayerV30 = {
    altitude: number,
    cutOut: number,
    scale: number,
    texture: string,
    day: PackMapEnvDataLayerAttributesV30,
    night: PackMapEnvDataLayerAttributesV30,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV30 = {
    density: number,
    depth: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV30 = {
    glow: Array<number>,
    tintColor: Array<number>,
    saturation: number,
    tintAmount: number,
    glowLevel: Array<number>,
    glowAmplify: number
  }

  export type PackMapEnvDataHazeV30 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV30 = {
    angle: Array<number>,
    deviation: number,
    extent: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataSkyV30 = {
    flags: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV30 = {
    cards: Array<PackMapEnvDataSkyCardV30>
  }

  export type PackMapEnvDataSkyCardV30 = {
    day: PackMapEnvDataSkyCardAttributesV30,
    night: PackMapEnvDataSkyCardAttributesV30,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV30 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV30 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string
  }

  export type PackMapEnvDataWindV30 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV30 = {
    lighting: Array<PackMapEnvDataLightingV30>,
    clouds: PackMapEnvDataCloudsV30,
    effect: Array<PackMapEnvDataEffectV30>,
    haze: Array<PackMapEnvDataHazeV30>,
    particleFields: Array<PackMapEnvDataPFieldV30>,
    sky: PackMapEnvDataSkyV30,
    skyCards: PackMapEnvDataSkyCardsV30,
    water: Array<PackMapEnvDataWaterV30>,
    wind: Array<PackMapEnvDataWindV30>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV30>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV30 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V30 = V30_N.PackMapEnvironmentV30;

export namespace V31_N {
  export type PackMapEnvironmentV31 = {
    dataLocalArray: Array<PackMapEnvDataLocalV31>,
    dataGlobal: PackMapEnvDataGlobalV31
  }

  export type PackMapEnvDataLocalV31 = {
    lighting: Array<PackMapEnvDataLightingV31>,
    clouds: PackMapEnvDataCloudsV31,
    effect: Array<PackMapEnvDataEffectV31>,
    haze: Array<PackMapEnvDataHazeV31>,
    particleFields: Array<PackMapEnvDataPFieldV31>,
    sky: PackMapEnvDataSkyV31,
    skyCards: PackMapEnvDataSkyCardsV31,
    water: Array<PackMapEnvDataWaterV31>,
    wind: Array<PackMapEnvDataWindV31>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV31 = {
    lights: Array<PackMapEnvDataLightV31>
  }

  export type PackMapEnvDataLightV31 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV31 = {
    layers: Array<PackMapEnvDataLayerV31>
  }

  export type PackMapEnvDataLayerV31 = {
    altitude: number,
    cutOut: number,
    scale: number,
    texture: string,
    day: PackMapEnvDataLayerAttributesV31,
    night: PackMapEnvDataLayerAttributesV31,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV31 = {
    density: number,
    depth: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV31 = {
    glow: Array<number>,
    tintColor: Array<number>,
    saturation: number,
    tintAmount: number,
    glowLevel: Array<number>,
    glowAmplify: number
  }

  export type PackMapEnvDataHazeV31 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV31 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataSkyV31 = {
    flags: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV31 = {
    cards: Array<PackMapEnvDataSkyCardV31>
  }

  export type PackMapEnvDataSkyCardV31 = {
    day: PackMapEnvDataSkyCardAttributesV31,
    night: PackMapEnvDataSkyCardAttributesV31,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV31 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV31 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string
  }

  export type PackMapEnvDataWindV31 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV31 = {
    lighting: Array<PackMapEnvDataLightingV31>,
    clouds: PackMapEnvDataCloudsV31,
    effect: Array<PackMapEnvDataEffectV31>,
    haze: Array<PackMapEnvDataHazeV31>,
    particleFields: Array<PackMapEnvDataPFieldV31>,
    sky: PackMapEnvDataSkyV31,
    skyCards: PackMapEnvDataSkyCardsV31,
    water: Array<PackMapEnvDataWaterV31>,
    wind: Array<PackMapEnvDataWindV31>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV31>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV31 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V31 = V31_N.PackMapEnvironmentV31;

export namespace V32_N {
  export type PackMapEnvironmentV32 = {
    dataLocalArray: Array<PackMapEnvDataLocalV32>,
    dataGlobal: PackMapEnvDataGlobalV32
  }

  export type PackMapEnvDataLocalV32 = {
    lighting: Array<PackMapEnvDataLightingV32>,
    clouds: PackMapEnvDataCloudsV32,
    effect: Array<PackMapEnvDataEffectV32>,
    haze: Array<PackMapEnvDataHazeV32>,
    particleFields: Array<PackMapEnvDataPFieldV32>,
    sky: PackMapEnvDataSkyV32,
    skyCards: PackMapEnvDataSkyCardsV32,
    water: Array<PackMapEnvDataWaterV32>,
    wind: Array<PackMapEnvDataWindV32>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV32 = {
    lights: Array<PackMapEnvDataLightV32>
  }

  export type PackMapEnvDataLightV32 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV32 = {
    layers: Array<PackMapEnvDataLayerV32>
  }

  export type PackMapEnvDataLayerV32 = {
    altitude: number,
    cutOut: number,
    depth: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV32>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV32 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV32 = {
    glow: Array<number>,
    tintColor: Array<number>,
    saturation: number,
    tintAmount: number,
    glowLevel: Array<number>,
    glowAmplify: number
  }

  export type PackMapEnvDataHazeV32 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV32 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataSkyV32 = {
    flags: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV32 = {
    cards: Array<PackMapEnvDataSkyCardV32>
  }

  export type PackMapEnvDataSkyCardV32 = {
    day: PackMapEnvDataSkyCardAttributesV32,
    night: PackMapEnvDataSkyCardAttributesV32,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV32 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV32 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string
  }

  export type PackMapEnvDataWindV32 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV32 = {
    lighting: Array<PackMapEnvDataLightingV32>,
    clouds: PackMapEnvDataCloudsV32,
    effect: Array<PackMapEnvDataEffectV32>,
    haze: Array<PackMapEnvDataHazeV32>,
    particleFields: Array<PackMapEnvDataPFieldV32>,
    sky: PackMapEnvDataSkyV32,
    skyCards: PackMapEnvDataSkyCardsV32,
    water: Array<PackMapEnvDataWaterV32>,
    wind: Array<PackMapEnvDataWindV32>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV32>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV32 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V32 = V32_N.PackMapEnvironmentV32;

export namespace V33_N {
  export type PackMapEnvironmentV33 = {
    dataLocalArray: Array<PackMapEnvDataLocalV33>,
    dataGlobal: PackMapEnvDataGlobalV33
  }

  export type PackMapEnvDataLocalV33 = {
    lighting: Array<PackMapEnvDataLightingV33>,
    clouds: PackMapEnvDataCloudsV33,
    effect: Array<PackMapEnvDataEffectV33>,
    haze: Array<PackMapEnvDataHazeV33>,
    particleFields: Array<PackMapEnvDataPFieldV33>,
    sky: PackMapEnvDataSkyV33,
    skyCards: PackMapEnvDataSkyCardsV33,
    water: Array<PackMapEnvDataWaterV33>,
    wind: Array<PackMapEnvDataWindV33>,
    name: string,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV33 = {
    lights: Array<PackMapEnvDataLightV33>
  }

  export type PackMapEnvDataLightV33 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV33 = {
    layers: Array<PackMapEnvDataLayerV33>
  }

  export type PackMapEnvDataLayerV33 = {
    altitude: number,
    cutOut: number,
    depth: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV33>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV33 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV33 = {
    glow: Array<number>,
    tintColor: Array<number>,
    saturation: number,
    tintAmount: number,
    glowLevel: Array<number>,
    glowAmplify: number
  }

  export type PackMapEnvDataHazeV33 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV33 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataSkyV33 = {
    flags: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV33 = {
    cards: Array<PackMapEnvDataSkyCardV33>
  }

  export type PackMapEnvDataSkyCardV33 = {
    day: PackMapEnvDataSkyCardAttributesV33,
    night: PackMapEnvDataSkyCardAttributesV33,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV33 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV33 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string
  }

  export type PackMapEnvDataWindV33 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV33 = {
    lighting: Array<PackMapEnvDataLightingV33>,
    clouds: PackMapEnvDataCloudsV33,
    effect: Array<PackMapEnvDataEffectV33>,
    haze: Array<PackMapEnvDataHazeV33>,
    particleFields: Array<PackMapEnvDataPFieldV33>,
    sky: PackMapEnvDataSkyV33,
    skyCards: PackMapEnvDataSkyCardsV33,
    water: Array<PackMapEnvDataWaterV33>,
    wind: Array<PackMapEnvDataWindV33>,
    name: string,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV33>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV33 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V33 = V33_N.PackMapEnvironmentV33;

export namespace V34_N {
  export type PackMapEnvironmentV34 = {
    dataLocalArray: Array<PackMapEnvDataLocalV34>,
    dataGlobal: PackMapEnvDataGlobalV34
  }

  export type PackMapEnvDataLocalV34 = {
    lighting: Array<PackMapEnvDataLightingV34>,
    clouds: PackMapEnvDataCloudsV34,
    effect: Array<PackMapEnvDataEffectV34>,
    haze: Array<PackMapEnvDataHazeV34>,
    particleFields: Array<PackMapEnvDataPFieldV34>,
    sky: PackMapEnvDataSkyV34,
    skyCards: PackMapEnvDataSkyCardsV34,
    water: Array<PackMapEnvDataWaterV34>,
    wind: Array<PackMapEnvDataWindV34>,
    name: string,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV34 = {
    lights: Array<PackMapEnvDataLightV34>
  }

  export type PackMapEnvDataLightV34 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV34 = {
    layers: Array<PackMapEnvDataLayerV34>
  }

  export type PackMapEnvDataLayerV34 = {
    altitude: number,
    cutOut: number,
    depth: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV34>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV34 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV34 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number
  }

  export type PackMapEnvDataHazeV34 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV34 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataSkyV34 = {
    flags: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV34 = {
    cards: Array<PackMapEnvDataSkyCardV34>
  }

  export type PackMapEnvDataSkyCardV34 = {
    day: PackMapEnvDataSkyCardAttributesV34,
    night: PackMapEnvDataSkyCardAttributesV34,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV34 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV34 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string
  }

  export type PackMapEnvDataWindV34 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV34 = {
    lighting: Array<PackMapEnvDataLightingV34>,
    clouds: PackMapEnvDataCloudsV34,
    effect: Array<PackMapEnvDataEffectV34>,
    haze: Array<PackMapEnvDataHazeV34>,
    particleFields: Array<PackMapEnvDataPFieldV34>,
    sky: PackMapEnvDataSkyV34,
    skyCards: PackMapEnvDataSkyCardsV34,
    water: Array<PackMapEnvDataWaterV34>,
    wind: Array<PackMapEnvDataWindV34>,
    name: string,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV34>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV34 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V34 = V34_N.PackMapEnvironmentV34;

export namespace V35_N {
  export type PackMapEnvironmentV35 = {
    dataLocalArray: Array<PackMapEnvDataLocalV35>,
    dataGlobal: PackMapEnvDataGlobalV35
  }

  export type PackMapEnvDataLocalV35 = {
    lighting: Array<PackMapEnvDataLightingV35>,
    clouds: PackMapEnvDataCloudsV35,
    effect: Array<PackMapEnvDataEffectV35>,
    haze: Array<PackMapEnvDataHazeV35>,
    particleFields: Array<PackMapEnvDataPFieldV35>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV6>,
    sky: PackMapEnvDataSkyV35,
    skyCards: PackMapEnvDataSkyCardsV35,
    water: Array<PackMapEnvDataWaterV35>,
    wind: Array<PackMapEnvDataWindV35>,
    name: string,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV35 = {
    lights: Array<PackMapEnvDataLightV35>
  }

  export type PackMapEnvDataLightV35 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV35 = {
    layers: Array<PackMapEnvDataLayerV35>
  }

  export type PackMapEnvDataLayerV35 = {
    altitude: number,
    cutOut: number,
    depth: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV35>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV35 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV35 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number
  }

  export type PackMapEnvDataHazeV35 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV35 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV6 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV35 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV35 = {
    cards: Array<PackMapEnvDataSkyCardV35>
  }

  export type PackMapEnvDataSkyCardV35 = {
    day: PackMapEnvDataSkyCardAttributesV35,
    night: PackMapEnvDataSkyCardAttributesV35,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV35 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV35 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string
  }

  export type PackMapEnvDataWindV35 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV35 = {
    lighting: Array<PackMapEnvDataLightingV35>,
    clouds: PackMapEnvDataCloudsV35,
    effect: Array<PackMapEnvDataEffectV35>,
    haze: Array<PackMapEnvDataHazeV35>,
    particleFields: Array<PackMapEnvDataPFieldV35>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV6>,
    sky: PackMapEnvDataSkyV35,
    skyCards: PackMapEnvDataSkyCardsV35,
    water: Array<PackMapEnvDataWaterV35>,
    wind: Array<PackMapEnvDataWindV35>,
    name: string,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV35>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV35 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V35 = V35_N.PackMapEnvironmentV35;

export namespace V36_N {
  export type PackMapEnvironmentV36 = {
    dataLocalArray: Array<PackMapEnvDataLocalV36>,
    dataGlobal: PackMapEnvDataGlobalV36
  }

  export type PackMapEnvDataLocalV36 = {
    lighting: Array<PackMapEnvDataLightingV36>,
    clouds: PackMapEnvDataCloudsV36,
    effect: Array<PackMapEnvDataEffectV36>,
    haze: Array<PackMapEnvDataHazeV36>,
    particleFields: Array<PackMapEnvDataPFieldV36>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV7>,
    sky: PackMapEnvDataSkyV36,
    skyCards: PackMapEnvDataSkyCardsV36,
    water: Array<PackMapEnvDataWaterV36>,
    wind: Array<PackMapEnvDataWindV36>,
    name: string,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV36 = {
    lights: Array<PackMapEnvDataLightV36>
  }

  export type PackMapEnvDataLightV36 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV36 = {
    layers: Array<PackMapEnvDataLayerV36>
  }

  export type PackMapEnvDataLayerV36 = {
    altitude: number,
    cutOut: number,
    depth: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV36>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV36 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV36 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number
  }

  export type PackMapEnvDataHazeV36 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV36 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV7 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV36 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV36 = {
    cards: Array<PackMapEnvDataSkyCardV36>
  }

  export type PackMapEnvDataSkyCardV36 = {
    day: PackMapEnvDataSkyCardAttributesV36,
    night: PackMapEnvDataSkyCardAttributesV36,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV36 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV36 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string,
    depthAttenuation: number
  }

  export type PackMapEnvDataWindV36 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV36 = {
    lighting: Array<PackMapEnvDataLightingV36>,
    clouds: PackMapEnvDataCloudsV36,
    effect: Array<PackMapEnvDataEffectV36>,
    haze: Array<PackMapEnvDataHazeV36>,
    particleFields: Array<PackMapEnvDataPFieldV36>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV7>,
    sky: PackMapEnvDataSkyV36,
    skyCards: PackMapEnvDataSkyCardsV36,
    water: Array<PackMapEnvDataWaterV36>,
    wind: Array<PackMapEnvDataWindV36>,
    name: string,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV36>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV36 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V36 = V36_N.PackMapEnvironmentV36;

export namespace V37_N {
  export type PackMapEnvironmentV37 = {
    dataLocalArray: Array<PackMapEnvDataLocalV37>,
    dataGlobal: PackMapEnvDataGlobalV37
  }

  export type PackMapEnvDataLocalV37 = {
    lighting: Array<PackMapEnvDataLightingV37>,
    clouds: PackMapEnvDataCloudsV37,
    effect: Array<PackMapEnvDataEffectV37>,
    haze: Array<PackMapEnvDataHazeV37>,
    particleFields: Array<PackMapEnvDataPFieldV37>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV8>,
    sky: PackMapEnvDataSkyV37,
    skyCards: PackMapEnvDataSkyCardsV37,
    water: Array<PackMapEnvDataWaterV37>,
    wind: Array<PackMapEnvDataWindV37>,
    name: string,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV37 = {
    lights: Array<PackMapEnvDataLightV37>
  }

  export type PackMapEnvDataLightV37 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV37 = {
    layers: Array<PackMapEnvDataLayerV37>
  }

  export type PackMapEnvDataLayerV37 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV37>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV37 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV37 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number
  }

  export type PackMapEnvDataHazeV37 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV37 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV8 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV37 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV37 = {
    cards: Array<PackMapEnvDataSkyCardV37>
  }

  export type PackMapEnvDataSkyCardV37 = {
    day: PackMapEnvDataSkyCardAttributesV37,
    night: PackMapEnvDataSkyCardAttributesV37,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV37 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV37 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string,
    depthAttenuation: number
  }

  export type PackMapEnvDataWindV37 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV37 = {
    lighting: Array<PackMapEnvDataLightingV37>,
    clouds: PackMapEnvDataCloudsV37,
    effect: Array<PackMapEnvDataEffectV37>,
    haze: Array<PackMapEnvDataHazeV37>,
    particleFields: Array<PackMapEnvDataPFieldV37>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV8>,
    sky: PackMapEnvDataSkyV37,
    skyCards: PackMapEnvDataSkyCardsV37,
    water: Array<PackMapEnvDataWaterV37>,
    wind: Array<PackMapEnvDataWindV37>,
    name: string,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV37>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV37 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V37 = V37_N.PackMapEnvironmentV37;

export namespace V38_N {
  export type PackMapEnvironmentV38 = {
    dataLocalArray: Array<PackMapEnvDataLocalV38>,
    dataGlobal: PackMapEnvDataGlobalV38
  }

  export type PackMapEnvDataLocalV38 = {
    lighting: Array<PackMapEnvDataLightingV38>,
    clouds: PackMapEnvDataCloudsV38,
    effect: Array<PackMapEnvDataEffectV38>,
    haze: Array<PackMapEnvDataHazeV38>,
    particleFields: Array<PackMapEnvDataPFieldV38>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV9>,
    sky: PackMapEnvDataSkyV38,
    skyCards: PackMapEnvDataSkyCardsV38,
    water: Array<PackMapEnvDataWaterV38>,
    wind: Array<PackMapEnvDataWindV38>,
    name: string,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>
  }

  export type PackMapEnvDataLightingV38 = {
    lights: Array<PackMapEnvDataLightV38>
  }

  export type PackMapEnvDataLightV38 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataCloudsV38 = {
    layers: Array<PackMapEnvDataLayerV38>
  }

  export type PackMapEnvDataLayerV38 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV38>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV38 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV38 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV38 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV38 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV9 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV38 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV38 = {
    cards: Array<PackMapEnvDataSkyCardV38>
  }

  export type PackMapEnvDataSkyCardV38 = {
    day: PackMapEnvDataSkyCardAttributesV38,
    night: PackMapEnvDataSkyCardAttributesV38,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV38 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV38 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string,
    depthAttenuation: number
  }

  export type PackMapEnvDataWindV38 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV38 = {
    lighting: Array<PackMapEnvDataLightingV38>,
    clouds: PackMapEnvDataCloudsV38,
    effect: Array<PackMapEnvDataEffectV38>,
    haze: Array<PackMapEnvDataHazeV38>,
    particleFields: Array<PackMapEnvDataPFieldV38>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV9>,
    sky: PackMapEnvDataSkyV38,
    skyCards: PackMapEnvDataSkyCardsV38,
    water: Array<PackMapEnvDataWaterV38>,
    wind: Array<PackMapEnvDataWindV38>,
    name: string,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV38>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV38 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V38 = V38_N.PackMapEnvironmentV38;

export namespace V39_N {
  export type PackMapEnvironmentV39 = {
    dataLocalArray: Array<PackMapEnvDataLocalV39>,
    dataGlobal: PackMapEnvDataGlobalV39
  }

  export type PackMapEnvDataLocalV39 = {
    lighting: Array<PackMapEnvDataLightingV39>,
    lightingChar: Array<PackMapEnvDataLightingCharV10>,
    clouds: PackMapEnvDataCloudsV39,
    effect: Array<PackMapEnvDataEffectV39>,
    haze: Array<PackMapEnvDataHazeV39>,
    particleFields: Array<PackMapEnvDataPFieldV39>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV10>,
    sky: PackMapEnvDataSkyV39,
    skyCards: PackMapEnvDataSkyCardsV39,
    water: Array<PackMapEnvDataWaterV39>,
    wind: Array<PackMapEnvDataWindV39>,
    name: string,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV39 = {
    lights: Array<PackMapEnvDataLightV39>
  }

  export type PackMapEnvDataLightV39 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV10 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV39 = {
    layers: Array<PackMapEnvDataLayerV39>
  }

  export type PackMapEnvDataLayerV39 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV39>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV39 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV39 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV39 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV39 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV10 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV39 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV39 = {
    cards: Array<PackMapEnvDataSkyCardV39>
  }

  export type PackMapEnvDataSkyCardV39 = {
    day: PackMapEnvDataSkyCardAttributesV39,
    night: PackMapEnvDataSkyCardAttributesV39,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV39 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV39 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string,
    depthAttenuation: number
  }

  export type PackMapEnvDataWindV39 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV39 = {
    lighting: Array<PackMapEnvDataLightingV39>,
    lightingChar: Array<PackMapEnvDataLightingCharV10>,
    clouds: PackMapEnvDataCloudsV39,
    effect: Array<PackMapEnvDataEffectV39>,
    haze: Array<PackMapEnvDataHazeV39>,
    particleFields: Array<PackMapEnvDataPFieldV39>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV10>,
    sky: PackMapEnvDataSkyV39,
    skyCards: PackMapEnvDataSkyCardsV39,
    water: Array<PackMapEnvDataWaterV39>,
    wind: Array<PackMapEnvDataWindV39>,
    name: string,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV39>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV39 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V39 = V39_N.PackMapEnvironmentV39;

export namespace V40_N {
  export type PackMapEnvironmentV40 = {
    dataLocalArray: Array<PackMapEnvDataLocalV40>,
    dataGlobal: PackMapEnvDataGlobalV40
  }

  export type PackMapEnvDataLocalV40 = {
    lighting: Array<PackMapEnvDataLightingV40>,
    lightingChar: Array<PackMapEnvDataLightingCharV11>,
    clouds: PackMapEnvDataCloudsV40,
    effect: Array<PackMapEnvDataEffectV40>,
    haze: Array<PackMapEnvDataHazeV40>,
    particleFields: Array<PackMapEnvDataPFieldV40>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV11>,
    sky: PackMapEnvDataSkyV40,
    skyCards: PackMapEnvDataSkyCardsV40,
    water: Array<PackMapEnvDataWaterV40>,
    wind: Array<PackMapEnvDataWindV40>,
    name: string,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV40 = {
    lights: Array<PackMapEnvDataLightV40>
  }

  export type PackMapEnvDataLightV40 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV11 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV40 = {
    layers: Array<PackMapEnvDataLayerV40>
  }

  export type PackMapEnvDataLayerV40 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV40>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV40 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV40 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV40 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV40 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV11 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV40 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV40 = {
    cards: Array<PackMapEnvDataSkyCardV40>
  }

  export type PackMapEnvDataSkyCardV40 = {
    day: PackMapEnvDataSkyCardAttributesV40,
    night: PackMapEnvDataSkyCardAttributesV40,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV40 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV40 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    bumpTexture: string,
    patternTexture: string,
    depthAttenuation: number
  }

  export type PackMapEnvDataWindV40 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV40 = {
    lighting: Array<PackMapEnvDataLightingV40>,
    lightingChar: Array<PackMapEnvDataLightingCharV11>,
    clouds: PackMapEnvDataCloudsV40,
    effect: Array<PackMapEnvDataEffectV40>,
    haze: Array<PackMapEnvDataHazeV40>,
    particleFields: Array<PackMapEnvDataPFieldV40>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV11>,
    sky: PackMapEnvDataSkyV40,
    skyCards: PackMapEnvDataSkyCardsV40,
    water: Array<PackMapEnvDataWaterV40>,
    wind: Array<PackMapEnvDataWindV40>,
    name: string,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV40>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV40 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V40 = V40_N.PackMapEnvironmentV40;

export namespace V41_N {
  export type PackMapEnvironmentV41 = {
    dataLocalArray: Array<PackMapEnvDataLocalV41>,
    dataGlobal: PackMapEnvDataGlobalV41
  }

  export type PackMapEnvDataLocalV41 = {
    lighting: Array<PackMapEnvDataLightingV41>,
    lightingChar: Array<PackMapEnvDataLightingCharV12>,
    clouds: PackMapEnvDataCloudsV41,
    effect: Array<PackMapEnvDataEffectV41>,
    haze: Array<PackMapEnvDataHazeV41>,
    particleFields: Array<PackMapEnvDataPFieldV41>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV12>,
    sky: PackMapEnvDataSkyV41,
    skyCards: PackMapEnvDataSkyCardsV41,
    water: Array<PackMapEnvDataWaterV41>,
    wind: Array<PackMapEnvDataWindV41>,
    name: string,
    nightMods: Array<number>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV41 = {
    lights: Array<PackMapEnvDataLightV41>
  }

  export type PackMapEnvDataLightV41 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV12 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV41 = {
    layers: Array<PackMapEnvDataLayerV41>
  }

  export type PackMapEnvDataLayerV41 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV41>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV41 = {
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV41 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV41 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV41 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV12 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV41 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV41 = {
    cards: Array<PackMapEnvDataSkyCardV41>
  }

  export type PackMapEnvDataSkyCardV41 = {
    day: PackMapEnvDataSkyCardAttributesV41,
    night: PackMapEnvDataSkyCardAttributesV41,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV41 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV41 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>
  }

  export type PackMapEnvDataWindV41 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV41 = {
    lighting: Array<PackMapEnvDataLightingV41>,
    lightingChar: Array<PackMapEnvDataLightingCharV12>,
    clouds: PackMapEnvDataCloudsV41,
    effect: Array<PackMapEnvDataEffectV41>,
    haze: Array<PackMapEnvDataHazeV41>,
    particleFields: Array<PackMapEnvDataPFieldV41>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV12>,
    sky: PackMapEnvDataSkyV41,
    skyCards: PackMapEnvDataSkyCardsV41,
    water: Array<PackMapEnvDataWaterV41>,
    wind: Array<PackMapEnvDataWindV41>,
    name: string,
    nightMods: Array<number>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV41>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV41 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V41 = V41_N.PackMapEnvironmentV41;

export namespace V42_N {
  export type PackMapEnvironmentV42 = {
    dataLocalArray: Array<PackMapEnvDataLocalV42>,
    dataGlobal: PackMapEnvDataGlobalV42
  }

  export type PackMapEnvDataLocalV42 = {
    lighting: Array<PackMapEnvDataLightingV42>,
    lightingChar: Array<PackMapEnvDataLightingCharV13>,
    clouds: PackMapEnvDataCloudsV42,
    effect: Array<PackMapEnvDataEffectV42>,
    haze: Array<PackMapEnvDataHazeV42>,
    particleFields: Array<PackMapEnvDataPFieldV42>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV13>,
    sky: PackMapEnvDataSkyV42,
    skyCards: PackMapEnvDataSkyCardsV42,
    water: Array<PackMapEnvDataWaterV42>,
    wind: Array<PackMapEnvDataWindV42>,
    name: string,
    nightMods: Array<number>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV42 = {
    lights: Array<PackMapEnvDataLightV42>
  }

  export type PackMapEnvDataLightV42 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV13 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV42 = {
    layers: Array<PackMapEnvDataLayerV42>
  }

  export type PackMapEnvDataLayerV42 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV42>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV42 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>
  }

  export type PackMapEnvDataEffectV42 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV42 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV42 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV13 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV42 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV42 = {
    cards: Array<PackMapEnvDataSkyCardV42>
  }

  export type PackMapEnvDataSkyCardV42 = {
    day: PackMapEnvDataSkyCardAttributesV42,
    night: PackMapEnvDataSkyCardAttributesV42,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV42 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>
  }

  export type PackMapEnvDataWaterV42 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>
  }

  export type PackMapEnvDataWindV42 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV42 = {
    lighting: Array<PackMapEnvDataLightingV42>,
    lightingChar: Array<PackMapEnvDataLightingCharV13>,
    clouds: PackMapEnvDataCloudsV42,
    effect: Array<PackMapEnvDataEffectV42>,
    haze: Array<PackMapEnvDataHazeV42>,
    particleFields: Array<PackMapEnvDataPFieldV42>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV13>,
    sky: PackMapEnvDataSkyV42,
    skyCards: PackMapEnvDataSkyCardsV42,
    water: Array<PackMapEnvDataWaterV42>,
    wind: Array<PackMapEnvDataWindV42>,
    name: string,
    nightMods: Array<number>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV42>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV42 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V42 = V42_N.PackMapEnvironmentV42;

export namespace V43_N {
  export type PackMapEnvironmentV43 = {
    dataLocalArray: Array<PackMapEnvDataLocalV43>,
    dataGlobal: PackMapEnvDataGlobalV43
  }

  export type PackMapEnvDataLocalV43 = {
    lighting: Array<PackMapEnvDataLightingV43>,
    lightingChar: Array<PackMapEnvDataLightingCharV14>,
    clouds: PackMapEnvDataCloudsV43,
    effect: Array<PackMapEnvDataEffectV43>,
    haze: Array<PackMapEnvDataHazeV43>,
    particleFields: Array<PackMapEnvDataPFieldV43>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV14>,
    sky: PackMapEnvDataSkyV43,
    skyCards: PackMapEnvDataSkyCardsV43,
    water: Array<PackMapEnvDataWaterV43>,
    wind: Array<PackMapEnvDataWindV43>,
    name: string,
    nightMods: Array<number>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV43 = {
    lights: Array<PackMapEnvDataLightV43>
  }

  export type PackMapEnvDataLightV43 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV14 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV43 = {
    layers: Array<PackMapEnvDataLayerV43>
  }

  export type PackMapEnvDataLayerV43 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV43>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV43 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataEffectV43 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV43 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV43 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV14 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV43 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV43 = {
    cards: Array<PackMapEnvDataSkyCardV43>
  }

  export type PackMapEnvDataSkyCardV43 = {
    day: PackMapEnvDataSkyCardAttributesV43,
    night: PackMapEnvDataSkyCardAttributesV43,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV43 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV43 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV43 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV43 = {
    lighting: Array<PackMapEnvDataLightingV43>,
    lightingChar: Array<PackMapEnvDataLightingCharV14>,
    clouds: PackMapEnvDataCloudsV43,
    effect: Array<PackMapEnvDataEffectV43>,
    haze: Array<PackMapEnvDataHazeV43>,
    particleFields: Array<PackMapEnvDataPFieldV43>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV14>,
    sky: PackMapEnvDataSkyV43,
    skyCards: PackMapEnvDataSkyCardsV43,
    water: Array<PackMapEnvDataWaterV43>,
    wind: Array<PackMapEnvDataWindV43>,
    name: string,
    nightMods: Array<number>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV43>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV43 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V43 = V43_N.PackMapEnvironmentV43;

export namespace V44_N {
  export type PackMapEnvironmentV44 = {
    dataLocalArray: Array<PackMapEnvDataLocalV44>,
    dataGlobal: PackMapEnvDataGlobalV44
  }

  export type PackMapEnvDataLocalV44 = {
    lighting: Array<PackMapEnvDataLightingV44>,
    lightingChar: Array<PackMapEnvDataLightingCharV15>,
    clouds: PackMapEnvDataCloudsV44,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV15>,
    effect: Array<PackMapEnvDataEffectV44>,
    haze: Array<PackMapEnvDataHazeV44>,
    particleFields: Array<PackMapEnvDataPFieldV44>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV15>,
    sky: PackMapEnvDataSkyV44,
    skyCards: PackMapEnvDataSkyCardsV44,
    water: Array<PackMapEnvDataWaterV44>,
    wind: Array<PackMapEnvDataWindV44>,
    name: string,
    nightMods: Array<number>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV44 = {
    lights: Array<PackMapEnvDataLightV44>
  }

  export type PackMapEnvDataLightV44 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV15 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV44 = {
    layers: Array<PackMapEnvDataLayerV44>
  }

  export type PackMapEnvDataLayerV44 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV44>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV44 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV15 = {
    range: Array<number>,
    colors: Array<Array<number>>,
    distances: Array<number>
  }

  export type PackMapEnvDataEffectV44 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV44 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV44 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV15 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV44 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV44 = {
    cards: Array<PackMapEnvDataSkyCardV44>
  }

  export type PackMapEnvDataSkyCardV44 = {
    day: PackMapEnvDataSkyCardAttributesV44,
    night: PackMapEnvDataSkyCardAttributesV44,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV44 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV44 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV44 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV44 = {
    lighting: Array<PackMapEnvDataLightingV44>,
    lightingChar: Array<PackMapEnvDataLightingCharV15>,
    clouds: PackMapEnvDataCloudsV44,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV15>,
    effect: Array<PackMapEnvDataEffectV44>,
    haze: Array<PackMapEnvDataHazeV44>,
    particleFields: Array<PackMapEnvDataPFieldV44>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV15>,
    sky: PackMapEnvDataSkyV44,
    skyCards: PackMapEnvDataSkyCardsV44,
    water: Array<PackMapEnvDataWaterV44>,
    wind: Array<PackMapEnvDataWindV44>,
    name: string,
    nightMods: Array<number>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV44>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV44 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V44 = V44_N.PackMapEnvironmentV44;

export namespace V45_N {
  export type PackMapEnvironmentV45 = {
    dataLocalArray: Array<PackMapEnvDataLocalV45>,
    dataGlobal: PackMapEnvDataGlobalV45
  }

  export type PackMapEnvDataLocalV45 = {
    lighting: Array<PackMapEnvDataLightingV45>,
    lightingChar: Array<PackMapEnvDataLightingCharV16>,
    clouds: PackMapEnvDataCloudsV45,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV16>,
    effect: Array<PackMapEnvDataEffectV45>,
    haze: Array<PackMapEnvDataHazeV45>,
    particleFields: Array<PackMapEnvDataPFieldV45>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV16>,
    sky: PackMapEnvDataSkyV45,
    skyCards: PackMapEnvDataSkyCardsV45,
    water: Array<PackMapEnvDataWaterV45>,
    wind: Array<PackMapEnvDataWindV45>,
    name: string,
    nightMods: Array<number>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV45 = {
    lights: Array<PackMapEnvDataLightV45>
  }

  export type PackMapEnvDataLightV45 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV16 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV45 = {
    layers: Array<PackMapEnvDataLayerV45>
  }

  export type PackMapEnvDataLayerV45 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV45>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV45 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV16 = {
    range: Array<number>,
    colors: Array<Array<number>>,
    distances: Array<number>
  }

  export type PackMapEnvDataEffectV45 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV45 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV45 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV16 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV45 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV45 = {
    cards: Array<PackMapEnvDataSkyCardV45>
  }

  export type PackMapEnvDataSkyCardV45 = {
    day: PackMapEnvDataSkyCardAttributesV45,
    night: PackMapEnvDataSkyCardAttributesV45,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV45 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV45 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV45 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV45 = {
    lighting: Array<PackMapEnvDataLightingV45>,
    lightingChar: Array<PackMapEnvDataLightingCharV16>,
    clouds: PackMapEnvDataCloudsV45,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV16>,
    effect: Array<PackMapEnvDataEffectV45>,
    haze: Array<PackMapEnvDataHazeV45>,
    particleFields: Array<PackMapEnvDataPFieldV45>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV16>,
    sky: PackMapEnvDataSkyV45,
    skyCards: PackMapEnvDataSkyCardsV45,
    water: Array<PackMapEnvDataWaterV45>,
    wind: Array<PackMapEnvDataWindV45>,
    name: string,
    nightMods: Array<number>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV45>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV45 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V45 = V45_N.PackMapEnvironmentV45;

export namespace V46_N {
  export type PackMapEnvironmentV46 = {
    dataLocalArray: Array<PackMapEnvDataLocalV46>,
    dataGlobal: PackMapEnvDataGlobalV46
  }

  export type PackMapEnvDataLocalV46 = {
    lighting: Array<PackMapEnvDataLightingV46>,
    lightingChar: Array<PackMapEnvDataLightingCharV17>,
    clouds: PackMapEnvDataCloudsV46,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV17>,
    effect: Array<PackMapEnvDataEffectV46>,
    haze: Array<PackMapEnvDataHazeV46>,
    particleFields: Array<PackMapEnvDataPFieldV46>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV17>,
    sky: PackMapEnvDataSkyV46,
    skyCards: PackMapEnvDataSkyCardsV46,
    water: Array<PackMapEnvDataWaterV46>,
    wind: Array<PackMapEnvDataWindV46>,
    name: string,
    nightMods: Array<number>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV46 = {
    lights: Array<PackMapEnvDataLightV46>
  }

  export type PackMapEnvDataLightV46 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV17 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV46 = {
    layers: Array<PackMapEnvDataLayerV46>
  }

  export type PackMapEnvDataLayerV46 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV46>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV46 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV17 = {
    range: Array<number>,
    colors: Array<Array<number>>,
    distances: Array<number>
  }

  export type PackMapEnvDataEffectV46 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV46 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV46 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV17 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV46 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV46 = {
    cards: Array<PackMapEnvDataSkyCardV46>
  }

  export type PackMapEnvDataSkyCardV46 = {
    day: PackMapEnvDataSkyCardAttributesV46,
    night: PackMapEnvDataSkyCardAttributesV46,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV46 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV46 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV46 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV46 = {
    lighting: Array<PackMapEnvDataLightingV46>,
    lightingChar: Array<PackMapEnvDataLightingCharV17>,
    clouds: PackMapEnvDataCloudsV46,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV17>,
    effect: Array<PackMapEnvDataEffectV46>,
    haze: Array<PackMapEnvDataHazeV46>,
    particleFields: Array<PackMapEnvDataPFieldV46>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV17>,
    sky: PackMapEnvDataSkyV46,
    skyCards: PackMapEnvDataSkyCardsV46,
    water: Array<PackMapEnvDataWaterV46>,
    wind: Array<PackMapEnvDataWindV46>,
    name: string,
    nightMods: Array<number>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV46>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV46 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V46 = V46_N.PackMapEnvironmentV46;

export namespace V47_N {
  export type PackMapEnvironmentV47 = {
    dataLocalArray: Array<PackMapEnvDataLocalV47>,
    dataGlobal: PackMapEnvDataGlobalV47
  }

  export type PackMapEnvDataLocalV47 = {
    lighting: Array<PackMapEnvDataLightingV47>,
    lightingChar: Array<PackMapEnvDataLightingCharV18>,
    clouds: PackMapEnvDataCloudsV47,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV18>,
    effect: Array<PackMapEnvDataEffectV47>,
    haze: Array<PackMapEnvDataHazeV47>,
    particleFields: Array<PackMapEnvDataPFieldV47>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV18>,
    sky: PackMapEnvDataSkyV47,
    skyCards: PackMapEnvDataSkyCardsV47,
    water: Array<PackMapEnvDataWaterV47>,
    wind: Array<PackMapEnvDataWindV47>,
    name: string,
    nightMods: Array<number>,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV47 = {
    lights: Array<PackMapEnvDataLightV47>
  }

  export type PackMapEnvDataLightV47 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV18 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV47 = {
    layers: Array<PackMapEnvDataLayerV47>
  }

  export type PackMapEnvDataLayerV47 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV47>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV47 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV18 = {
    range: Array<number>,
    colors: Array<Array<number>>,
    distances: Array<number>
  }

  export type PackMapEnvDataEffectV47 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV47 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV47 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV18 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV47 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV47 = {
    cards: Array<PackMapEnvDataSkyCardV47>
  }

  export type PackMapEnvDataSkyCardV47 = {
    day: PackMapEnvDataSkyCardAttributesV47,
    night: PackMapEnvDataSkyCardAttributesV47,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV47 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV47 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV47 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV47 = {
    lighting: Array<PackMapEnvDataLightingV47>,
    lightingChar: Array<PackMapEnvDataLightingCharV18>,
    clouds: PackMapEnvDataCloudsV47,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV18>,
    effect: Array<PackMapEnvDataEffectV47>,
    haze: Array<PackMapEnvDataHazeV47>,
    particleFields: Array<PackMapEnvDataPFieldV47>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV18>,
    sky: PackMapEnvDataSkyV47,
    skyCards: PackMapEnvDataSkyCardsV47,
    water: Array<PackMapEnvDataWaterV47>,
    wind: Array<PackMapEnvDataWindV47>,
    name: string,
    nightMods: Array<number>,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV47>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV47 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V47 = V47_N.PackMapEnvironmentV47;

export namespace V48_N {
  export type PackMapEnvironmentV48 = {
    dataLocalArray: Array<PackMapEnvDataLocalV48>,
    dataGlobal: PackMapEnvDataGlobalV48
  }

  export type PackMapEnvDataLocalV48 = {
    lighting: Array<PackMapEnvDataLightingV48>,
    lightingChar: Array<PackMapEnvDataLightingCharV19>,
    clouds: PackMapEnvDataCloudsV48,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV19>,
    effect: Array<PackMapEnvDataEffectV48>,
    haze: Array<PackMapEnvDataHazeV48>,
    particleFields: Array<PackMapEnvDataPFieldV48>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV19>,
    sky: PackMapEnvDataSkyV48,
    skyCards: PackMapEnvDataSkyCardsV48,
    water: Array<PackMapEnvDataWaterV48>,
    wind: Array<PackMapEnvDataWindV48>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV48 = {
    lights: Array<PackMapEnvDataLightV48>
  }

  export type PackMapEnvDataLightV48 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharV19 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV48 = {
    layers: Array<PackMapEnvDataLayerV48>
  }

  export type PackMapEnvDataLayerV48 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV48>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV48 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV19 = {
    range: Array<number>,
    colors: Array<Array<number>>,
    distances: Array<number>
  }

  export type PackMapEnvDataEffectV48 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV48 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV48 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV19 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV48 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV48 = {
    cards: Array<PackMapEnvDataSkyCardV48>
  }

  export type PackMapEnvDataSkyCardV48 = {
    day: PackMapEnvDataSkyCardAttributesV48,
    night: PackMapEnvDataSkyCardAttributesV48,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV48 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV48 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV48 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV48 = {
    lighting: Array<PackMapEnvDataLightingV48>,
    lightingChar: Array<PackMapEnvDataLightingCharV19>,
    clouds: PackMapEnvDataCloudsV48,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV19>,
    effect: Array<PackMapEnvDataEffectV48>,
    haze: Array<PackMapEnvDataHazeV48>,
    particleFields: Array<PackMapEnvDataPFieldV48>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV19>,
    sky: PackMapEnvDataSkyV48,
    skyCards: PackMapEnvDataSkyCardsV48,
    water: Array<PackMapEnvDataWaterV48>,
    wind: Array<PackMapEnvDataWindV48>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV48>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV48 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V48 = V48_N.PackMapEnvironmentV48;

export namespace V49_N {
  export type PackMapEnvironmentV49 = {
    dataLocalArray: Array<PackMapEnvDataLocalV49>,
    dataGlobal: PackMapEnvDataGlobalV49
  }

  export type PackMapEnvDataLocalV49 = {
    lighting: Array<PackMapEnvDataLightingV49>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV20>,
    clouds: PackMapEnvDataCloudsV49,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV20>,
    effect: Array<PackMapEnvDataEffectV49>,
    haze: Array<PackMapEnvDataHazeV49>,
    particleFields: Array<PackMapEnvDataPFieldV49>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV20>,
    sky: PackMapEnvDataSkyV49,
    skyCards: PackMapEnvDataSkyCardsV49,
    water: Array<PackMapEnvDataWaterV49>,
    wind: Array<PackMapEnvDataWindV49>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV49 = {
    lights: Array<PackMapEnvDataLightV49>
  }

  export type PackMapEnvDataLightV49 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV20 = {
    lightingChar: Array<PackMapEnvDataLightingCharV20>
  }

  export type PackMapEnvDataLightingCharV20 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV49 = {
    layers: Array<PackMapEnvDataLayerV49>
  }

  export type PackMapEnvDataLayerV49 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV49>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV49 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV20 = {
    range: Array<number>,
    colors: Array<Array<number>>,
    distances: Array<number>
  }

  export type PackMapEnvDataEffectV49 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV49 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV49 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV20 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV49 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV49 = {
    cards: Array<PackMapEnvDataSkyCardV49>
  }

  export type PackMapEnvDataSkyCardV49 = {
    day: PackMapEnvDataSkyCardAttributesV49,
    night: PackMapEnvDataSkyCardAttributesV49,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV49 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV49 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV49 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV49 = {
    lighting: Array<PackMapEnvDataLightingV49>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV20>,
    clouds: PackMapEnvDataCloudsV49,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV20>,
    effect: Array<PackMapEnvDataEffectV49>,
    haze: Array<PackMapEnvDataHazeV49>,
    particleFields: Array<PackMapEnvDataPFieldV49>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV20>,
    sky: PackMapEnvDataSkyV49,
    skyCards: PackMapEnvDataSkyCardsV49,
    water: Array<PackMapEnvDataWaterV49>,
    wind: Array<PackMapEnvDataWindV49>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV49>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV49 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V49 = V49_N.PackMapEnvironmentV49;

export namespace V50_N {
  export type PackMapEnvironmentV50 = {
    dataLocalArray: Array<PackMapEnvDataLocalV50>,
    dataGlobal: PackMapEnvDataGlobalV50
  }

  export type PackMapEnvDataLocalV50 = {
    lighting: Array<PackMapEnvDataLightingV50>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV21>,
    clouds: PackMapEnvDataCloudsV50,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV21>,
    effect: Array<PackMapEnvDataEffectV50>,
    haze: Array<PackMapEnvDataHazeV50>,
    particleFields: Array<PackMapEnvDataPFieldV50>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV21>,
    sky: PackMapEnvDataSkyV50,
    skyCards: PackMapEnvDataSkyCardsV50,
    water: Array<PackMapEnvDataWaterV50>,
    wind: Array<PackMapEnvDataWindV50>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV50 = {
    lights: Array<PackMapEnvDataLightV50>
  }

  export type PackMapEnvDataLightV50 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV21 = {
    lightingChar: Array<PackMapEnvDataLightingCharV21>
  }

  export type PackMapEnvDataLightingCharV21 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV50 = {
    layers: Array<PackMapEnvDataLayerV50>
  }

  export type PackMapEnvDataLayerV50 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV50>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV50 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV21 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV50 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV50 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV50 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    opacity: Array<number>,
    particleCount: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV21 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV50 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV50 = {
    cards: Array<PackMapEnvDataSkyCardV50>
  }

  export type PackMapEnvDataSkyCardV50 = {
    day: PackMapEnvDataSkyCardAttributesV50,
    night: PackMapEnvDataSkyCardAttributesV50,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV50 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV50 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV50 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV50 = {
    lighting: Array<PackMapEnvDataLightingV50>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV21>,
    clouds: PackMapEnvDataCloudsV50,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV21>,
    effect: Array<PackMapEnvDataEffectV50>,
    haze: Array<PackMapEnvDataHazeV50>,
    particleFields: Array<PackMapEnvDataPFieldV50>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV21>,
    sky: PackMapEnvDataSkyV50,
    skyCards: PackMapEnvDataSkyCardsV50,
    water: Array<PackMapEnvDataWaterV50>,
    wind: Array<PackMapEnvDataWindV50>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV50>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV50 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V50 = V50_N.PackMapEnvironmentV50;

export namespace V51_N {
  export type PackMapEnvironmentV51 = {
    dataLocalArray: Array<PackMapEnvDataLocalV51>,
    dataGlobal: PackMapEnvDataGlobalV51
  }

  export type PackMapEnvDataLocalV51 = {
    lighting: Array<PackMapEnvDataLightingV51>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV22>,
    clouds: PackMapEnvDataCloudsV51,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV22>,
    effect: Array<PackMapEnvDataEffectV51>,
    haze: Array<PackMapEnvDataHazeV51>,
    particleFields: Array<PackMapEnvDataPFieldV51>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV22>,
    sky: PackMapEnvDataSkyV51,
    skyCards: PackMapEnvDataSkyCardsV51,
    water: Array<PackMapEnvDataWaterV51>,
    wind: Array<PackMapEnvDataWindV51>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV51 = {
    lights: Array<PackMapEnvDataLightV51>
  }

  export type PackMapEnvDataLightV51 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV22 = {
    lightingChar: Array<PackMapEnvDataLightingCharV22>
  }

  export type PackMapEnvDataLightingCharV22 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV51 = {
    layers: Array<PackMapEnvDataLayerV51>
  }

  export type PackMapEnvDataLayerV51 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV51>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV51 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV22 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV51 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV51 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV51 = {
    altitude: number,
    angle: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: number,
    opacity: Array<number>,
    particleCount: number,
    period: number,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV22 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV51 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV51 = {
    cards: Array<PackMapEnvDataSkyCardV51>
  }

  export type PackMapEnvDataSkyCardV51 = {
    day: PackMapEnvDataSkyCardAttributesV51,
    night: PackMapEnvDataSkyCardAttributesV51,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV51 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV51 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV51 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV51 = {
    lighting: Array<PackMapEnvDataLightingV51>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV22>,
    clouds: PackMapEnvDataCloudsV51,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV22>,
    effect: Array<PackMapEnvDataEffectV51>,
    haze: Array<PackMapEnvDataHazeV51>,
    particleFields: Array<PackMapEnvDataPFieldV51>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV22>,
    sky: PackMapEnvDataSkyV51,
    skyCards: PackMapEnvDataSkyCardsV51,
    water: Array<PackMapEnvDataWaterV51>,
    wind: Array<PackMapEnvDataWindV51>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV51>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV51 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V51 = V51_N.PackMapEnvironmentV51;

export namespace V52_N {
  export type PackMapEnvironmentV52 = {
    dataLocalArray: Array<PackMapEnvDataLocalV52>,
    dataGlobal: PackMapEnvDataGlobalV52
  }

  export type PackMapEnvDataLocalV52 = {
    lighting: Array<PackMapEnvDataLightingV52>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV23>,
    clouds: PackMapEnvDataCloudsV52,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV23>,
    effect: Array<PackMapEnvDataEffectV52>,
    haze: Array<PackMapEnvDataHazeV52>,
    particleFields: Array<PackMapEnvDataPFieldV52>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV23>,
    sky: PackMapEnvDataSkyV52,
    skyCards: PackMapEnvDataSkyCardsV52,
    water: Array<PackMapEnvDataWaterV52>,
    wind: Array<PackMapEnvDataWindV52>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV52 = {
    lights: Array<PackMapEnvDataLightV52>
  }

  export type PackMapEnvDataLightV52 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV23 = {
    lightingChar: Array<PackMapEnvDataLightingCharV23>
  }

  export type PackMapEnvDataLightingCharV23 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV52 = {
    layers: Array<PackMapEnvDataLayerV52>
  }

  export type PackMapEnvDataLayerV52 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV52>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV52 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV23 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV52 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV52 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV52 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV23 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV52 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV52 = {
    cards: Array<PackMapEnvDataSkyCardV52>
  }

  export type PackMapEnvDataSkyCardV52 = {
    day: PackMapEnvDataSkyCardAttributesV52,
    night: PackMapEnvDataSkyCardAttributesV52,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV52 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV52 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV52 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV52 = {
    lighting: Array<PackMapEnvDataLightingV52>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV23>,
    clouds: PackMapEnvDataCloudsV52,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV23>,
    effect: Array<PackMapEnvDataEffectV52>,
    haze: Array<PackMapEnvDataHazeV52>,
    particleFields: Array<PackMapEnvDataPFieldV52>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV23>,
    sky: PackMapEnvDataSkyV52,
    skyCards: PackMapEnvDataSkyCardsV52,
    water: Array<PackMapEnvDataWaterV52>,
    wind: Array<PackMapEnvDataWindV52>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV52>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV52 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V52 = V52_N.PackMapEnvironmentV52;

export namespace V53_N {
  export type PackMapEnvironmentV53 = {
    dataLocalArray: Array<PackMapEnvDataLocalV53>,
    dataGlobal: PackMapEnvDataGlobalV53
  }

  export type PackMapEnvDataLocalV53 = {
    lighting: Array<PackMapEnvDataLightingV53>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV24>,
    clouds: PackMapEnvDataCloudsV53,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV24>,
    effect: Array<PackMapEnvDataEffectV53>,
    haze: Array<PackMapEnvDataHazeV53>,
    particleFields: Array<PackMapEnvDataPFieldV53>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV24>,
    sky: PackMapEnvDataSkyV53,
    skyCards: PackMapEnvDataSkyCardsV53,
    water: Array<PackMapEnvDataWaterV53>,
    wind: Array<PackMapEnvDataWindV53>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV53 = {
    lights: Array<PackMapEnvDataLightV53>
  }

  export type PackMapEnvDataLightV53 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV24 = {
    lightingChar: Array<PackMapEnvDataLightingCharV24>
  }

  export type PackMapEnvDataLightingCharV24 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV53 = {
    layers: Array<PackMapEnvDataLayerV53>
  }

  export type PackMapEnvDataLayerV53 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV53>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV53 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV24 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV53 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV53 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV53 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV24 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV53 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV53 = {
    cards: Array<PackMapEnvDataSkyCardV53>
  }

  export type PackMapEnvDataSkyCardV53 = {
    day: PackMapEnvDataSkyCardAttributesV53,
    night: PackMapEnvDataSkyCardAttributesV53,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV53 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV53 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV53 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV53 = {
    lighting: Array<PackMapEnvDataLightingV53>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV24>,
    clouds: PackMapEnvDataCloudsV53,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV24>,
    effect: Array<PackMapEnvDataEffectV53>,
    haze: Array<PackMapEnvDataHazeV53>,
    particleFields: Array<PackMapEnvDataPFieldV53>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV24>,
    sky: PackMapEnvDataSkyV53,
    skyCards: PackMapEnvDataSkyCardsV53,
    water: Array<PackMapEnvDataWaterV53>,
    wind: Array<PackMapEnvDataWindV53>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV53>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV53 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V53 = V53_N.PackMapEnvironmentV53;

export namespace V54_N {
  export type PackMapEnvironmentV54 = {
    dataLocalArray: Array<PackMapEnvDataLocalV54>,
    dataGlobal: PackMapEnvDataGlobalV54
  }

  export type PackMapEnvDataLocalV54 = {
    lighting: Array<PackMapEnvDataLightingV54>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV25>,
    clouds: PackMapEnvDataCloudsV54,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV25>,
    effect: Array<PackMapEnvDataEffectV54>,
    haze: Array<PackMapEnvDataHazeV54>,
    particleFields: Array<PackMapEnvDataPFieldV54>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV25>,
    sky: PackMapEnvDataSkyV54,
    skyCards: PackMapEnvDataSkyCardsV54,
    water: Array<PackMapEnvDataWaterV54>,
    wind: Array<PackMapEnvDataWindV54>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV54 = {
    lights: Array<PackMapEnvDataLightV54>
  }

  export type PackMapEnvDataLightV54 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV25 = {
    lightingChar: Array<PackMapEnvDataLightingCharV25>
  }

  export type PackMapEnvDataLightingCharV25 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV54 = {
    layers: Array<PackMapEnvDataLayerV54>
  }

  export type PackMapEnvDataLayerV54 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV54>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV54 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV25 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV54 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV54 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV54 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV25 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV54 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV54 = {
    cards: Array<PackMapEnvDataSkyCardV54>
  }

  export type PackMapEnvDataSkyCardV54 = {
    day: PackMapEnvDataSkyCardAttributesV54,
    night: PackMapEnvDataSkyCardAttributesV54,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV54 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataWaterV54 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV54 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV54 = {
    lighting: Array<PackMapEnvDataLightingV54>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV25>,
    clouds: PackMapEnvDataCloudsV54,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV25>,
    effect: Array<PackMapEnvDataEffectV54>,
    haze: Array<PackMapEnvDataHazeV54>,
    particleFields: Array<PackMapEnvDataPFieldV54>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV25>,
    sky: PackMapEnvDataSkyV54,
    skyCards: PackMapEnvDataSkyCardsV54,
    water: Array<PackMapEnvDataWaterV54>,
    wind: Array<PackMapEnvDataWindV54>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV54>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV54 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V54 = V54_N.PackMapEnvironmentV54;

export namespace V55_N {
  export type PackMapEnvironmentV55 = {
    dataLocalArray: Array<PackMapEnvDataLocalV55>,
    dataGlobal: PackMapEnvDataGlobalV55
  }

  export type PackMapEnvDataLocalV55 = {
    lighting: Array<PackMapEnvDataLightingV55>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV26>,
    clouds: PackMapEnvDataCloudsV55,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV26>,
    effect: Array<PackMapEnvDataEffectV55>,
    haze: Array<PackMapEnvDataHazeV55>,
    particleFields: Array<PackMapEnvDataPFieldV55>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV26>,
    sky: PackMapEnvDataSkyV55,
    skyCards: PackMapEnvDataSkyCardsV55,
    spawns: PackMapEnvDataSpawnGroupsV26,
    water: Array<PackMapEnvDataWaterV55>,
    wind: Array<PackMapEnvDataWindV55>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV55 = {
    lights: Array<PackMapEnvDataLightV55>
  }

  export type PackMapEnvDataLightV55 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV26 = {
    lightingChar: Array<PackMapEnvDataLightingCharV26>
  }

  export type PackMapEnvDataLightingCharV26 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV55 = {
    layers: Array<PackMapEnvDataLayerV55>
  }

  export type PackMapEnvDataLayerV55 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV55>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV55 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV26 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV55 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV55 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV55 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV26 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV55 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV55 = {
    cards: Array<PackMapEnvDataSkyCardV55>
  }

  export type PackMapEnvDataSkyCardV55 = {
    day: PackMapEnvDataSkyCardAttributesV55,
    night: PackMapEnvDataSkyCardAttributesV55,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV55 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV26 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV26>,
    targetVolume: number
  }

  export type PackMapEnvDataSpawnListV26 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV26>
  }

  export type PackMapEnvDataSpawnModelDataV26 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    probability: number,
    delay: number,
    maxConcurrent: number,
    flags: number,
    modelFile: string
  }

  export type PackMapEnvDataWaterV55 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV55 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV55 = {
    lighting: Array<PackMapEnvDataLightingV55>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV26>,
    clouds: PackMapEnvDataCloudsV55,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV26>,
    effect: Array<PackMapEnvDataEffectV55>,
    haze: Array<PackMapEnvDataHazeV55>,
    particleFields: Array<PackMapEnvDataPFieldV55>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV26>,
    sky: PackMapEnvDataSkyV55,
    skyCards: PackMapEnvDataSkyCardsV55,
    spawns: PackMapEnvDataSpawnGroupsV26,
    water: Array<PackMapEnvDataWaterV55>,
    wind: Array<PackMapEnvDataWindV55>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV55>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV55 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V55 = V55_N.PackMapEnvironmentV55;

export namespace V56_N {
  export type PackMapEnvironmentV56 = {
    dataLocalArray: Array<PackMapEnvDataLocalV56>,
    dataGlobal: PackMapEnvDataGlobalV56
  }

  export type PackMapEnvDataLocalV56 = {
    lighting: Array<PackMapEnvDataLightingV56>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV27>,
    clouds: PackMapEnvDataCloudsV56,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV27>,
    effect: Array<PackMapEnvDataEffectV56>,
    haze: Array<PackMapEnvDataHazeV56>,
    particleFields: Array<PackMapEnvDataPFieldV56>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV27>,
    sky: PackMapEnvDataSkyV56,
    skyCards: PackMapEnvDataSkyCardsV56,
    spawns: PackMapEnvDataSpawnGroupsV27,
    water: Array<PackMapEnvDataWaterV56>,
    wind: Array<PackMapEnvDataWindV56>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV56 = {
    lights: Array<PackMapEnvDataLightV56>
  }

  export type PackMapEnvDataLightV56 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV27 = {
    lightingChar: Array<PackMapEnvDataLightingCharV27>
  }

  export type PackMapEnvDataLightingCharV27 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV56 = {
    layers: Array<PackMapEnvDataLayerV56>
  }

  export type PackMapEnvDataLayerV56 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV56>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV56 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV27 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV56 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV56 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV56 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV27 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV56 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV56 = {
    cards: Array<PackMapEnvDataSkyCardV56>
  }

  export type PackMapEnvDataSkyCardV56 = {
    day: PackMapEnvDataSkyCardAttributesV56,
    night: PackMapEnvDataSkyCardAttributesV56,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV56 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV27 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV27>,
    targetVolume: number
  }

  export type PackMapEnvDataSpawnListV27 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV27>
  }

  export type PackMapEnvDataSpawnModelDataV27 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV56 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV56 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV56 = {
    lighting: Array<PackMapEnvDataLightingV56>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV27>,
    clouds: PackMapEnvDataCloudsV56,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV27>,
    effect: Array<PackMapEnvDataEffectV56>,
    haze: Array<PackMapEnvDataHazeV56>,
    particleFields: Array<PackMapEnvDataPFieldV56>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV27>,
    sky: PackMapEnvDataSkyV56,
    skyCards: PackMapEnvDataSkyCardsV56,
    spawns: PackMapEnvDataSpawnGroupsV27,
    water: Array<PackMapEnvDataWaterV56>,
    wind: Array<PackMapEnvDataWindV56>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV56>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV56 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V56 = V56_N.PackMapEnvironmentV56;

export namespace V57_N {
  export type PackMapEnvironmentV57 = {
    dataLocalArray: Array<PackMapEnvDataLocalV57>,
    dataGlobal: PackMapEnvDataGlobalV57
  }

  export type PackMapEnvDataLocalV57 = {
    lighting: Array<PackMapEnvDataLightingV57>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV28>,
    clouds: PackMapEnvDataCloudsV57,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV28>,
    effect: Array<PackMapEnvDataEffectV57>,
    haze: Array<PackMapEnvDataHazeV57>,
    particleFields: Array<PackMapEnvDataPFieldV57>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV28>,
    sky: PackMapEnvDataSkyV57,
    skyCards: PackMapEnvDataSkyCardsV57,
    spawns: PackMapEnvDataSpawnGroupsV28,
    water: Array<PackMapEnvDataWaterV57>,
    wind: Array<PackMapEnvDataWindV57>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV57 = {
    lights: Array<PackMapEnvDataLightV57>
  }

  export type PackMapEnvDataLightV57 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV28 = {
    lightingChar: Array<PackMapEnvDataLightingCharV28>
  }

  export type PackMapEnvDataLightingCharV28 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV57 = {
    layers: Array<PackMapEnvDataLayerV57>
  }

  export type PackMapEnvDataLayerV57 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV57>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV57 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV28 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV57 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV57 = {
    distColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV57 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV28 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV57 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV57 = {
    cards: Array<PackMapEnvDataSkyCardV57>
  }

  export type PackMapEnvDataSkyCardV57 = {
    day: PackMapEnvDataSkyCardAttributesV57,
    night: PackMapEnvDataSkyCardAttributesV57,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV57 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV28 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV28>,
    targetVolume: number
  }

  export type PackMapEnvDataSpawnListV28 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV28>
  }

  export type PackMapEnvDataSpawnModelDataV28 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV57 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV57 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV57 = {
    lighting: Array<PackMapEnvDataLightingV57>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV28>,
    clouds: PackMapEnvDataCloudsV57,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV28>,
    effect: Array<PackMapEnvDataEffectV57>,
    haze: Array<PackMapEnvDataHazeV57>,
    particleFields: Array<PackMapEnvDataPFieldV57>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV28>,
    sky: PackMapEnvDataSkyV57,
    skyCards: PackMapEnvDataSkyCardsV57,
    spawns: PackMapEnvDataSpawnGroupsV28,
    water: Array<PackMapEnvDataWaterV57>,
    wind: Array<PackMapEnvDataWindV57>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV57>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV57 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V57 = V57_N.PackMapEnvironmentV57;

export namespace V58_N {
  export type PackMapEnvironmentV58 = {
    dataLocalArray: Array<PackMapEnvDataLocalV58>,
    dataGlobal: PackMapEnvDataGlobalV58
  }

  export type PackMapEnvDataLocalV58 = {
    lighting: Array<PackMapEnvDataLightingV58>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV29>,
    clouds: PackMapEnvDataCloudsV58,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV29>,
    effect: Array<PackMapEnvDataEffectV58>,
    haze: Array<PackMapEnvDataHazeV58>,
    particleFields: Array<PackMapEnvDataPFieldV58>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV29>,
    sky: PackMapEnvDataSkyV58,
    skyCards: PackMapEnvDataSkyCardsV58,
    spawns: PackMapEnvDataSpawnGroupsV29,
    water: Array<PackMapEnvDataWaterV58>,
    wind: Array<PackMapEnvDataWindV58>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV58 = {
    lights: Array<PackMapEnvDataLightV58>
  }

  export type PackMapEnvDataLightV58 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV29 = {
    lightingChar: Array<PackMapEnvDataLightingCharV29>
  }

  export type PackMapEnvDataLightingCharV29 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV58 = {
    layers: Array<PackMapEnvDataLayerV58>
  }

  export type PackMapEnvDataLayerV58 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV58>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV58 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV29 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV58 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV58 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV58 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV29 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV58 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV58 = {
    cards: Array<PackMapEnvDataSkyCardV58>
  }

  export type PackMapEnvDataSkyCardV58 = {
    day: PackMapEnvDataSkyCardAttributesV58,
    night: PackMapEnvDataSkyCardAttributesV58,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV58 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV29 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV29>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV29 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV29>
  }

  export type PackMapEnvDataSpawnModelDataV29 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV58 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV58 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV58 = {
    lighting: Array<PackMapEnvDataLightingV58>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV29>,
    clouds: PackMapEnvDataCloudsV58,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV29>,
    effect: Array<PackMapEnvDataEffectV58>,
    haze: Array<PackMapEnvDataHazeV58>,
    particleFields: Array<PackMapEnvDataPFieldV58>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV29>,
    sky: PackMapEnvDataSkyV58,
    skyCards: PackMapEnvDataSkyCardsV58,
    spawns: PackMapEnvDataSpawnGroupsV29,
    water: Array<PackMapEnvDataWaterV58>,
    wind: Array<PackMapEnvDataWindV58>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV58>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV58 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V58 = V58_N.PackMapEnvironmentV58;

export namespace V59_N {
  export type PackMapEnvironmentV59 = {
    dataLocalArray: Array<PackMapEnvDataLocalV59>,
    dataGlobal: PackMapEnvDataGlobalV59
  }

  export type PackMapEnvDataLocalV59 = {
    lighting: Array<PackMapEnvDataLightingV59>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV30>,
    clouds: PackMapEnvDataCloudsV59,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV30>,
    effect: Array<PackMapEnvDataEffectV59>,
    haze: Array<PackMapEnvDataHazeV59>,
    particleFields: Array<PackMapEnvDataPFieldV59>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV30>,
    sky: PackMapEnvDataSkyV59,
    skyCards: PackMapEnvDataSkyCardsV59,
    spawns: PackMapEnvDataSpawnGroupsV30,
    water: Array<PackMapEnvDataWaterV59>,
    wind: Array<PackMapEnvDataWindV59>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV59 = {
    lights: Array<PackMapEnvDataLightV59>
  }

  export type PackMapEnvDataLightV59 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV30 = {
    lightingChar: Array<PackMapEnvDataLightingCharV30>
  }

  export type PackMapEnvDataLightingCharV30 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV59 = {
    layers: Array<PackMapEnvDataLayerV59>
  }

  export type PackMapEnvDataLayerV59 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV59>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV59 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV30 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV59 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number
  }

  export type PackMapEnvDataHazeV59 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV59 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV30 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV59 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV59 = {
    cards: Array<PackMapEnvDataSkyCardV59>
  }

  export type PackMapEnvDataSkyCardV59 = {
    day: PackMapEnvDataSkyCardAttributesV59,
    night: PackMapEnvDataSkyCardAttributesV59,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV59 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV30 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV30>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV30 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV30>
  }

  export type PackMapEnvDataSpawnModelDataV30 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV59 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV59 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV59 = {
    lighting: Array<PackMapEnvDataLightingV59>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV30>,
    clouds: PackMapEnvDataCloudsV59,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV30>,
    effect: Array<PackMapEnvDataEffectV59>,
    haze: Array<PackMapEnvDataHazeV59>,
    particleFields: Array<PackMapEnvDataPFieldV59>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV30>,
    sky: PackMapEnvDataSkyV59,
    skyCards: PackMapEnvDataSkyCardsV59,
    spawns: PackMapEnvDataSpawnGroupsV30,
    water: Array<PackMapEnvDataWaterV59>,
    wind: Array<PackMapEnvDataWindV59>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV59>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV59 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V59 = V59_N.PackMapEnvironmentV59;

export namespace V60_N {
  export type PackMapEnvironmentV60 = {
    dataLocalArray: Array<PackMapEnvDataLocalV60>,
    dataGlobal: PackMapEnvDataGlobalV60
  }

  export type PackMapEnvDataLocalV60 = {
    lighting: Array<PackMapEnvDataLightingV60>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV31>,
    clouds: PackMapEnvDataCloudsV60,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV31>,
    effect: Array<PackMapEnvDataEffectV60>,
    haze: Array<PackMapEnvDataHazeV60>,
    particleFields: Array<PackMapEnvDataPFieldV60>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV31>,
    sky: PackMapEnvDataSkyV60,
    skyCards: PackMapEnvDataSkyCardsV60,
    spawns: PackMapEnvDataSpawnGroupsV31,
    water: Array<PackMapEnvDataWaterV60>,
    wind: Array<PackMapEnvDataWindV60>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV60 = {
    lights: Array<PackMapEnvDataLightV60>
  }

  export type PackMapEnvDataLightV60 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV31 = {
    lightingChar: Array<PackMapEnvDataLightingCharV31>
  }

  export type PackMapEnvDataLightingCharV31 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV60 = {
    layers: Array<PackMapEnvDataLayerV60>
  }

  export type PackMapEnvDataLayerV60 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV60>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV60 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV31 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV60 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>
  }

  export type PackMapEnvDataHazeV60 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV60 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV31 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV60 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV60 = {
    cards: Array<PackMapEnvDataSkyCardV60>
  }

  export type PackMapEnvDataSkyCardV60 = {
    day: PackMapEnvDataSkyCardAttributesV60,
    night: PackMapEnvDataSkyCardAttributesV60,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV60 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV31 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV31>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV31 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV31>
  }

  export type PackMapEnvDataSpawnModelDataV31 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV60 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV60 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV60 = {
    lighting: Array<PackMapEnvDataLightingV60>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV31>,
    clouds: PackMapEnvDataCloudsV60,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV31>,
    effect: Array<PackMapEnvDataEffectV60>,
    haze: Array<PackMapEnvDataHazeV60>,
    particleFields: Array<PackMapEnvDataPFieldV60>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV31>,
    sky: PackMapEnvDataSkyV60,
    skyCards: PackMapEnvDataSkyCardsV60,
    spawns: PackMapEnvDataSpawnGroupsV31,
    water: Array<PackMapEnvDataWaterV60>,
    wind: Array<PackMapEnvDataWindV60>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV60>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV60 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V60 = V60_N.PackMapEnvironmentV60;

export namespace V61_N {
  export type PackMapEnvironmentV61 = {
    dataLocalArray: Array<PackMapEnvDataLocalV61>,
    dataGlobal: PackMapEnvDataGlobalV61
  }

  export type PackMapEnvDataLocalV61 = {
    lighting: Array<PackMapEnvDataLightingV61>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV32>,
    clouds: PackMapEnvDataCloudsV61,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV32>,
    effect: Array<PackMapEnvDataEffectV61>,
    haze: Array<PackMapEnvDataHazeV61>,
    particleFields: Array<PackMapEnvDataPFieldV61>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV32>,
    sky: PackMapEnvDataSkyV61,
    skyCards: PackMapEnvDataSkyCardsV61,
    spawns: PackMapEnvDataSpawnGroupsV32,
    water: Array<PackMapEnvDataWaterV61>,
    wind: Array<PackMapEnvDataWindV61>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV61 = {
    lights: Array<PackMapEnvDataLightV61>
  }

  export type PackMapEnvDataLightV61 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV32 = {
    lightingChar: Array<PackMapEnvDataLightingCharV32>
  }

  export type PackMapEnvDataLightingCharV32 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV61 = {
    layers: Array<PackMapEnvDataLayerV61>
  }

  export type PackMapEnvDataLayerV61 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV61>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV61 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV32 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV61 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV61 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number
  }

  export type PackMapEnvDataPFieldV61 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV32 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV61 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV61 = {
    cards: Array<PackMapEnvDataSkyCardV61>
  }

  export type PackMapEnvDataSkyCardV61 = {
    day: PackMapEnvDataSkyCardAttributesV61,
    night: PackMapEnvDataSkyCardAttributesV61,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV61 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV32 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV32>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV32 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV32>
  }

  export type PackMapEnvDataSpawnModelDataV32 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV61 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV61 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV61 = {
    lighting: Array<PackMapEnvDataLightingV61>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV32>,
    clouds: PackMapEnvDataCloudsV61,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV32>,
    effect: Array<PackMapEnvDataEffectV61>,
    haze: Array<PackMapEnvDataHazeV61>,
    particleFields: Array<PackMapEnvDataPFieldV61>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV32>,
    sky: PackMapEnvDataSkyV61,
    skyCards: PackMapEnvDataSkyCardsV61,
    spawns: PackMapEnvDataSpawnGroupsV32,
    water: Array<PackMapEnvDataWaterV61>,
    wind: Array<PackMapEnvDataWindV61>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV61>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV61 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V61 = V61_N.PackMapEnvironmentV61;

export namespace V62_N {
  export type PackMapEnvironmentV62 = {
    dataLocalArray: Array<PackMapEnvDataLocalV62>,
    dataGlobal: PackMapEnvDataGlobalV62
  }

  export type PackMapEnvDataLocalV62 = {
    lighting: Array<PackMapEnvDataLightingV62>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV33>,
    clouds: PackMapEnvDataCloudsV62,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV33>,
    effect: Array<PackMapEnvDataEffectV62>,
    haze: Array<PackMapEnvDataHazeV62>,
    particleFields: Array<PackMapEnvDataPFieldV62>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV33>,
    sky: PackMapEnvDataSkyV62,
    skyCards: PackMapEnvDataSkyCardsV62,
    spawns: PackMapEnvDataSpawnGroupsV33,
    water: Array<PackMapEnvDataWaterV62>,
    wind: Array<PackMapEnvDataWindV62>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV62 = {
    lights: Array<PackMapEnvDataLightV62>
  }

  export type PackMapEnvDataLightV62 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV33 = {
    lightingChar: Array<PackMapEnvDataLightingCharV33>
  }

  export type PackMapEnvDataLightingCharV33 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV62 = {
    layers: Array<PackMapEnvDataLayerV62>
  }

  export type PackMapEnvDataLayerV62 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV62>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV62 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV33 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV62 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV62 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV62 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV33 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV62 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV62 = {
    cards: Array<PackMapEnvDataSkyCardV62>
  }

  export type PackMapEnvDataSkyCardV62 = {
    day: PackMapEnvDataSkyCardAttributesV62,
    night: PackMapEnvDataSkyCardAttributesV62,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV62 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV33 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV33>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV33 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV33>
  }

  export type PackMapEnvDataSpawnModelDataV33 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV62 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>
  }

  export type PackMapEnvDataWindV62 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV62 = {
    lighting: Array<PackMapEnvDataLightingV62>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV33>,
    clouds: PackMapEnvDataCloudsV62,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV33>,
    effect: Array<PackMapEnvDataEffectV62>,
    haze: Array<PackMapEnvDataHazeV62>,
    particleFields: Array<PackMapEnvDataPFieldV62>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV33>,
    sky: PackMapEnvDataSkyV62,
    skyCards: PackMapEnvDataSkyCardsV62,
    spawns: PackMapEnvDataSpawnGroupsV33,
    water: Array<PackMapEnvDataWaterV62>,
    wind: Array<PackMapEnvDataWindV62>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV62>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV62 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V62 = V62_N.PackMapEnvironmentV62;

export namespace V63_N {
  export type PackMapEnvironmentV63 = {
    dataLocalArray: Array<PackMapEnvDataLocalV63>,
    dataGlobal: PackMapEnvDataGlobalV63
  }

  export type PackMapEnvDataLocalV63 = {
    lighting: Array<PackMapEnvDataLightingV63>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV34>,
    clouds: PackMapEnvDataCloudsV63,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV34>,
    effect: Array<PackMapEnvDataEffectV63>,
    haze: Array<PackMapEnvDataHazeV63>,
    particleFields: Array<PackMapEnvDataPFieldV63>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV34>,
    sky: PackMapEnvDataSkyV63,
    skyCards: PackMapEnvDataSkyCardsV63,
    spawns: PackMapEnvDataSpawnGroupsV34,
    water: Array<PackMapEnvDataWaterV63>,
    wind: Array<PackMapEnvDataWindV63>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV63 = {
    lights: Array<PackMapEnvDataLightV63>
  }

  export type PackMapEnvDataLightV63 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV34 = {
    lightingChar: Array<PackMapEnvDataLightingCharV34>
  }

  export type PackMapEnvDataLightingCharV34 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV63 = {
    layers: Array<PackMapEnvDataLayerV63>
  }

  export type PackMapEnvDataLayerV63 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV63>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV63 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV34 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV63 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV63 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV63 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV34 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV63 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number
  }

  export type PackMapEnvDataSkyCardsV63 = {
    cards: Array<PackMapEnvDataSkyCardV63>
  }

  export type PackMapEnvDataSkyCardV63 = {
    day: PackMapEnvDataSkyCardAttributesV63,
    night: PackMapEnvDataSkyCardAttributesV63,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV63 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV34 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV34>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV34 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV34>
  }

  export type PackMapEnvDataSpawnModelDataV34 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV63 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV63 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number
  }

  export type PackMapEnvDataGlobalV63 = {
    lighting: Array<PackMapEnvDataLightingV63>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV34>,
    clouds: PackMapEnvDataCloudsV63,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV34>,
    effect: Array<PackMapEnvDataEffectV63>,
    haze: Array<PackMapEnvDataHazeV63>,
    particleFields: Array<PackMapEnvDataPFieldV63>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV34>,
    sky: PackMapEnvDataSkyV63,
    skyCards: PackMapEnvDataSkyCardsV63,
    spawns: PackMapEnvDataSpawnGroupsV34,
    water: Array<PackMapEnvDataWaterV63>,
    wind: Array<PackMapEnvDataWindV63>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV63>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV63 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V63 = V63_N.PackMapEnvironmentV63;

export namespace V64_N {
  export type PackMapEnvironmentV64 = {
    dataLocalArray: Array<PackMapEnvDataLocalV64>,
    dataGlobal: PackMapEnvDataGlobalV64
  }

  export type PackMapEnvDataLocalV64 = {
    lighting: Array<PackMapEnvDataLightingV64>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV35>,
    clouds: PackMapEnvDataCloudsV64,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV35>,
    effect: Array<PackMapEnvDataEffectV64>,
    haze: Array<PackMapEnvDataHazeV64>,
    particleFields: Array<PackMapEnvDataPFieldV64>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV35>,
    sky: PackMapEnvDataSkyV64,
    skyCards: PackMapEnvDataSkyCardsV64,
    spawns: PackMapEnvDataSpawnGroupsV35,
    water: Array<PackMapEnvDataWaterV64>,
    wind: Array<PackMapEnvDataWindV64>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV64 = {
    lights: Array<PackMapEnvDataLightV64>
  }

  export type PackMapEnvDataLightV64 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV35 = {
    lightingChar: Array<PackMapEnvDataLightingCharV35>
  }

  export type PackMapEnvDataLightingCharV35 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV64 = {
    layers: Array<PackMapEnvDataLayerV64>
  }

  export type PackMapEnvDataLayerV64 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV64>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV64 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV35 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV64 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV64 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV64 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV35 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV64 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV64 = {
    cards: Array<PackMapEnvDataSkyCardV64>
  }

  export type PackMapEnvDataSkyCardV64 = {
    day: PackMapEnvDataSkyCardAttributesV64,
    night: PackMapEnvDataSkyCardAttributesV64,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV64 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV35 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV35>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV35 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV35>
  }

  export type PackMapEnvDataSpawnModelDataV35 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV64 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV64 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataGlobalV64 = {
    lighting: Array<PackMapEnvDataLightingV64>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV35>,
    clouds: PackMapEnvDataCloudsV64,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV35>,
    effect: Array<PackMapEnvDataEffectV64>,
    haze: Array<PackMapEnvDataHazeV64>,
    particleFields: Array<PackMapEnvDataPFieldV64>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV35>,
    sky: PackMapEnvDataSkyV64,
    skyCards: PackMapEnvDataSkyCardsV64,
    spawns: PackMapEnvDataSpawnGroupsV35,
    water: Array<PackMapEnvDataWaterV64>,
    wind: Array<PackMapEnvDataWindV64>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV64>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV64 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V64 = V64_N.PackMapEnvironmentV64;

export namespace V65_N {
  export type PackMapEnvironmentV65 = {
    dataLocalArray: Array<PackMapEnvDataLocalV65>,
    dataGlobal: PackMapEnvDataGlobalV65
  }

  export type PackMapEnvDataLocalV65 = {
    lighting: Array<PackMapEnvDataLightingV65>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV36>,
    clouds: PackMapEnvDataCloudsV65,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV36>,
    effect: Array<PackMapEnvDataEffectV65>,
    haze: Array<PackMapEnvDataHazeV65>,
    particleFields: Array<PackMapEnvDataPFieldV65>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV36>,
    sky: PackMapEnvDataSkyV65,
    skyCards: PackMapEnvDataSkyCardsV65,
    spawns: PackMapEnvDataSpawnGroupsV36,
    water: Array<PackMapEnvDataWaterV65>,
    wind: Array<PackMapEnvDataWindV65>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    center: Array<number>,
    zRange: Array<number>,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    type: number,
    vertexArray: Array<Array<number>>,
    guid: number
  }

  export type PackMapEnvDataLightingV65 = {
    lights: Array<PackMapEnvDataLightV65>,
    shadowInfluence: number
  }

  export type PackMapEnvDataLightV65 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV36 = {
    lightingChar: Array<PackMapEnvDataLightingCharV36>
  }

  export type PackMapEnvDataLightingCharV36 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV65 = {
    layers: Array<PackMapEnvDataLayerV65>
  }

  export type PackMapEnvDataLayerV65 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV65>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV65 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV36 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV65 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV65 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV65 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV36 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV65 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV65 = {
    cards: Array<PackMapEnvDataSkyCardV65>
  }

  export type PackMapEnvDataSkyCardV65 = {
    day: PackMapEnvDataSkyCardAttributesV65,
    night: PackMapEnvDataSkyCardAttributesV65,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV65 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV36 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV36>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV36 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV36>
  }

  export type PackMapEnvDataSpawnModelDataV36 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV65 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV65 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataGlobalV65 = {
    lighting: Array<PackMapEnvDataLightingV65>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV36>,
    clouds: PackMapEnvDataCloudsV65,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV36>,
    effect: Array<PackMapEnvDataEffectV65>,
    haze: Array<PackMapEnvDataHazeV65>,
    particleFields: Array<PackMapEnvDataPFieldV65>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV36>,
    sky: PackMapEnvDataSkyV65,
    skyCards: PackMapEnvDataSkyCardsV65,
    spawns: PackMapEnvDataSpawnGroupsV36,
    water: Array<PackMapEnvDataWaterV65>,
    wind: Array<PackMapEnvDataWindV65>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV65>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV65 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V65 = V65_N.PackMapEnvironmentV65;

export namespace V66_N {
  export type PackMapEnvironmentV66 = {
    dataLocalArray: Array<PackMapEnvDataLocalV66>,
    dataGlobal: PackMapEnvDataGlobalV66
  }

  export type PackMapEnvDataLocalV66 = {
    lighting: Array<PackMapEnvDataLightingV66>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV37>,
    clouds: PackMapEnvDataCloudsV66,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV37>,
    effect: Array<PackMapEnvDataEffectV66>,
    haze: Array<PackMapEnvDataHazeV66>,
    particleFields: Array<PackMapEnvDataPFieldV66>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV37>,
    sky: PackMapEnvDataSkyV66,
    skyCards: PackMapEnvDataSkyCardsV66,
    spawns: PackMapEnvDataSpawnGroupsV37,
    water: Array<PackMapEnvDataWaterV66>,
    wind: Array<PackMapEnvDataWindV66>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV37>
  }

  export type PackMapEnvDataLightingV66 = {
    lights: Array<PackMapEnvDataLightV66>,
    shadowInfluence: number
  }

  export type PackMapEnvDataLightV66 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV37 = {
    lightingChar: Array<PackMapEnvDataLightingCharV37>
  }

  export type PackMapEnvDataLightingCharV37 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV66 = {
    layers: Array<PackMapEnvDataLayerV66>
  }

  export type PackMapEnvDataLayerV66 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV66>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV66 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV37 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV66 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV66 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV66 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV37 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV66 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV66 = {
    cards: Array<PackMapEnvDataSkyCardV66>
  }

  export type PackMapEnvDataSkyCardV66 = {
    day: PackMapEnvDataSkyCardAttributesV66,
    night: PackMapEnvDataSkyCardAttributesV66,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV66 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV37 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV37>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV37 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV37>
  }

  export type PackMapEnvDataSpawnModelDataV37 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV66 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV66 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataShapeV37 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV66 = {
    lighting: Array<PackMapEnvDataLightingV66>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV37>,
    clouds: PackMapEnvDataCloudsV66,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV37>,
    effect: Array<PackMapEnvDataEffectV66>,
    haze: Array<PackMapEnvDataHazeV66>,
    particleFields: Array<PackMapEnvDataPFieldV66>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV37>,
    sky: PackMapEnvDataSkyV66,
    skyCards: PackMapEnvDataSkyCardsV66,
    spawns: PackMapEnvDataSpawnGroupsV37,
    water: Array<PackMapEnvDataWaterV66>,
    wind: Array<PackMapEnvDataWindV66>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV66>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV66 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V66 = V66_N.PackMapEnvironmentV66;

export namespace V67_N {
  export type PackMapEnvironmentV67 = {
    dataLocalArray: Array<PackMapEnvDataLocalV67>,
    dataGlobal: PackMapEnvDataGlobalV67
  }

  export type PackMapEnvDataLocalV67 = {
    lighting: Array<PackMapEnvDataLightingV67>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV38>,
    clouds: PackMapEnvDataCloudsV67,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV38>,
    effect: Array<PackMapEnvDataEffectV67>,
    haze: Array<PackMapEnvDataHazeV67>,
    particleFields: Array<PackMapEnvDataPFieldV67>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV38>,
    sky: PackMapEnvDataSkyV67,
    skyCards: PackMapEnvDataSkyCardsV67,
    spawns: PackMapEnvDataSpawnGroupsV38,
    water: Array<PackMapEnvDataWaterV67>,
    wind: Array<PackMapEnvDataWindV67>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV38>
  }

  export type PackMapEnvDataLightingV67 = {
    lights: Array<PackMapEnvDataLightV67>,
    shadowInfluence: number
  }

  export type PackMapEnvDataLightV67 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV38 = {
    lightingChar: Array<PackMapEnvDataLightingCharV38>
  }

  export type PackMapEnvDataLightingCharV38 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV67 = {
    layers: Array<PackMapEnvDataLayerV67>
  }

  export type PackMapEnvDataLayerV67 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV67>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV67 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV38 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV67 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV67 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV67 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV38 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV67 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV67 = {
    cards: Array<PackMapEnvDataSkyCardV67>
  }

  export type PackMapEnvDataSkyCardV67 = {
    day: PackMapEnvDataSkyCardAttributesV67,
    night: PackMapEnvDataSkyCardAttributesV67,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV67 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV38 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV38>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV38 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV38>
  }

  export type PackMapEnvDataSpawnModelDataV38 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV67 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV67 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataShapeV38 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV67 = {
    lighting: Array<PackMapEnvDataLightingV67>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV38>,
    clouds: PackMapEnvDataCloudsV67,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV38>,
    effect: Array<PackMapEnvDataEffectV67>,
    haze: Array<PackMapEnvDataHazeV67>,
    particleFields: Array<PackMapEnvDataPFieldV67>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV38>,
    sky: PackMapEnvDataSkyV67,
    skyCards: PackMapEnvDataSkyCardsV67,
    spawns: PackMapEnvDataSpawnGroupsV38,
    water: Array<PackMapEnvDataWaterV67>,
    wind: Array<PackMapEnvDataWindV67>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV67>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV67 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V67 = V67_N.PackMapEnvironmentV67;

export namespace V68_N {
  export type PackMapEnvironmentV68 = {
    dataLocalArray: Array<PackMapEnvDataLocalV68>,
    dataGlobal: PackMapEnvDataGlobalV68
  }

  export type PackMapEnvDataLocalV68 = {
    lighting: Array<PackMapEnvDataLightingV68>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV39>,
    clouds: PackMapEnvDataCloudsV68,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV39>,
    effect: Array<PackMapEnvDataEffectV68>,
    haze: Array<PackMapEnvDataHazeV68>,
    particleFields: Array<PackMapEnvDataPFieldV68>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV39>,
    sky: PackMapEnvDataSkyV68,
    skyCards: PackMapEnvDataSkyCardsV68,
    spawns: PackMapEnvDataSpawnGroupsV39,
    water: Array<PackMapEnvDataWaterV68>,
    wind: Array<PackMapEnvDataWindV68>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV39>
  }

  export type PackMapEnvDataLightingV68 = {
    lights: Array<PackMapEnvDataLightV68>,
    shadowInfluence: number,
    backlight: PackMapEnvDataLightV68
  }

  export type PackMapEnvDataLightV68 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV39 = {
    lightingChar: Array<PackMapEnvDataLightingCharV39>
  }

  export type PackMapEnvDataLightingCharV39 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV68 = {
    layers: Array<PackMapEnvDataLayerV68>
  }

  export type PackMapEnvDataLayerV68 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV68>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV68 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV39 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV68 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV68 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV68 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV39 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV68 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV68 = {
    cards: Array<PackMapEnvDataSkyCardV68>
  }

  export type PackMapEnvDataSkyCardV68 = {
    day: PackMapEnvDataSkyCardAttributesV68,
    night: PackMapEnvDataSkyCardAttributesV68,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV68 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV39 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV39>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV39 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV39>
  }

  export type PackMapEnvDataSpawnModelDataV39 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV68 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV68 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataShapeV39 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV68 = {
    lighting: Array<PackMapEnvDataLightingV68>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV39>,
    clouds: PackMapEnvDataCloudsV68,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV39>,
    effect: Array<PackMapEnvDataEffectV68>,
    haze: Array<PackMapEnvDataHazeV68>,
    particleFields: Array<PackMapEnvDataPFieldV68>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV39>,
    sky: PackMapEnvDataSkyV68,
    skyCards: PackMapEnvDataSkyCardsV68,
    spawns: PackMapEnvDataSpawnGroupsV39,
    water: Array<PackMapEnvDataWaterV68>,
    wind: Array<PackMapEnvDataWindV68>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV68>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV68 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V68 = V68_N.PackMapEnvironmentV68;

export namespace V69_N {
  export type PackMapEnvironmentV69 = {
    dataLocalArray: Array<PackMapEnvDataLocalV69>,
    dataGlobal: PackMapEnvDataGlobalV69
  }

  export type PackMapEnvDataLocalV69 = {
    lighting: Array<PackMapEnvDataLightingV69>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV40>,
    clouds: PackMapEnvDataCloudsV69,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV40>,
    effect: Array<PackMapEnvDataEffectV69>,
    haze: Array<PackMapEnvDataHazeV69>,
    particleFields: Array<PackMapEnvDataPFieldV69>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV40>,
    sky: PackMapEnvDataSkyV69,
    skyCards: PackMapEnvDataSkyCardsV69,
    spawns: PackMapEnvDataSpawnGroupsV40,
    water: Array<PackMapEnvDataWaterV69>,
    wind: Array<PackMapEnvDataWindV69>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV40>
  }

  export type PackMapEnvDataLightingV69 = {
    lights: Array<PackMapEnvDataLightV69>,
    shadowInfluence: number
  }

  export type PackMapEnvDataLightV69 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV40 = {
    lightingChar: Array<PackMapEnvDataLightingCharV40>
  }

  export type PackMapEnvDataLightingCharV40 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV69 = {
    layers: Array<PackMapEnvDataLayerV69>
  }

  export type PackMapEnvDataLayerV69 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV69>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV69 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV40 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV69 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV69 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV69 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV40 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV69 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV69 = {
    cards: Array<PackMapEnvDataSkyCardV69>
  }

  export type PackMapEnvDataSkyCardV69 = {
    day: PackMapEnvDataSkyCardAttributesV69,
    night: PackMapEnvDataSkyCardAttributesV69,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV69 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV40 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV40>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV40 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV40>
  }

  export type PackMapEnvDataSpawnModelDataV40 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV69 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV69 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataShapeV40 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV69 = {
    lighting: Array<PackMapEnvDataLightingV69>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV40>,
    clouds: PackMapEnvDataCloudsV69,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV40>,
    effect: Array<PackMapEnvDataEffectV69>,
    haze: Array<PackMapEnvDataHazeV69>,
    particleFields: Array<PackMapEnvDataPFieldV69>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV40>,
    sky: PackMapEnvDataSkyV69,
    skyCards: PackMapEnvDataSkyCardsV69,
    spawns: PackMapEnvDataSpawnGroupsV40,
    water: Array<PackMapEnvDataWaterV69>,
    wind: Array<PackMapEnvDataWindV69>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV69>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV69 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V69 = V69_N.PackMapEnvironmentV69;

export namespace V70_N {
  export type PackMapEnvironmentV70 = {
    dataLocalArray: Array<PackMapEnvDataLocalV70>,
    dataGlobal: PackMapEnvDataGlobalV70
  }

  export type PackMapEnvDataLocalV70 = {
    lighting: Array<PackMapEnvDataLightingV70>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV41>,
    clouds: PackMapEnvDataCloudsV70,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV41>,
    effect: Array<PackMapEnvDataEffectV70>,
    haze: Array<PackMapEnvDataHazeV70>,
    particleFields: Array<PackMapEnvDataPFieldV70>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV41>,
    sky: PackMapEnvDataSkyV70,
    skyCards: PackMapEnvDataSkyCardsV70,
    spawns: PackMapEnvDataSpawnGroupsV41,
    water: Array<PackMapEnvDataWaterV70>,
    wind: Array<PackMapEnvDataWindV70>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV41>
  }

  export type PackMapEnvDataLightingV70 = {
    lights: Array<PackMapEnvDataLightV70>,
    shadowInfluence: number
  }

  export type PackMapEnvDataLightV70 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV41 = {
    lightingChar: Array<PackMapEnvDataLightingCharV41>
  }

  export type PackMapEnvDataLightingCharV41 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV70 = {
    layers: Array<PackMapEnvDataLayerV70>
  }

  export type PackMapEnvDataLayerV70 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV70>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV70 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV41 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV70 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV70 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV70 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV41 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV70 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV70 = {
    cards: Array<PackMapEnvDataSkyCardV70>
  }

  export type PackMapEnvDataSkyCardV70 = {
    day: PackMapEnvDataSkyCardAttributesV70,
    night: PackMapEnvDataSkyCardAttributesV70,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV70 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV41 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV41>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV41 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV41>
  }

  export type PackMapEnvDataSpawnModelDataV41 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV70 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV70 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataShapeV41 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV70 = {
    lighting: Array<PackMapEnvDataLightingV70>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV41>,
    clouds: PackMapEnvDataCloudsV70,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV41>,
    effect: Array<PackMapEnvDataEffectV70>,
    haze: Array<PackMapEnvDataHazeV70>,
    particleFields: Array<PackMapEnvDataPFieldV70>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV41>,
    sky: PackMapEnvDataSkyV70,
    skyCards: PackMapEnvDataSkyCardsV70,
    spawns: PackMapEnvDataSpawnGroupsV41,
    water: Array<PackMapEnvDataWaterV70>,
    wind: Array<PackMapEnvDataWindV70>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV70>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV70 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V70 = V70_N.PackMapEnvironmentV70;

export namespace V71_N {
  export type PackMapEnvironmentV71 = {
    dataLocalArray: Array<PackMapEnvDataLocalV71>,
    dataGlobal: PackMapEnvDataGlobalV71
  }

  export type PackMapEnvDataLocalV71 = {
    lighting: Array<PackMapEnvDataLightingV71>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV42>,
    clouds: PackMapEnvDataCloudsV71,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV42>,
    effect: Array<PackMapEnvDataEffectV71>,
    haze: Array<PackMapEnvDataHazeV71>,
    particleFields: Array<PackMapEnvDataPFieldV71>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV42>,
    sky: PackMapEnvDataSkyV71,
    skyCards: PackMapEnvDataSkyCardsV71,
    spawns: PackMapEnvDataSpawnGroupsV42,
    water: Array<PackMapEnvDataWaterV71>,
    wind: Array<PackMapEnvDataWindV71>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV42>
  }

  export type PackMapEnvDataLightingV71 = {
    lights: Array<PackMapEnvDataLightV71>,
    shadowInfluence: number,
    backlightColor: Array<number>,
    backlightIntensity: number
  }

  export type PackMapEnvDataLightV71 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV42 = {
    lightingChar: Array<PackMapEnvDataLightingCharV42>
  }

  export type PackMapEnvDataLightingCharV42 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV71 = {
    layers: Array<PackMapEnvDataLayerV71>
  }

  export type PackMapEnvDataLayerV71 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV71>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV71 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV42 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV71 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV71 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV71 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV42 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV71 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV71 = {
    cards: Array<PackMapEnvDataSkyCardV71>
  }

  export type PackMapEnvDataSkyCardV71 = {
    day: PackMapEnvDataSkyCardAttributesV71,
    night: PackMapEnvDataSkyCardAttributesV71,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV71 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV42 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV42>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV42 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV42>
  }

  export type PackMapEnvDataSpawnModelDataV42 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV71 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV71 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataShapeV42 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV71 = {
    lighting: Array<PackMapEnvDataLightingV71>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV42>,
    clouds: PackMapEnvDataCloudsV71,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV42>,
    effect: Array<PackMapEnvDataEffectV71>,
    haze: Array<PackMapEnvDataHazeV71>,
    particleFields: Array<PackMapEnvDataPFieldV71>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV42>,
    sky: PackMapEnvDataSkyV71,
    skyCards: PackMapEnvDataSkyCardsV71,
    spawns: PackMapEnvDataSpawnGroupsV42,
    water: Array<PackMapEnvDataWaterV71>,
    wind: Array<PackMapEnvDataWindV71>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV71>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV71 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V71 = V71_N.PackMapEnvironmentV71;

export namespace V72_N {
  export type PackMapEnvironmentV72 = {
    dataLocalArray: Array<PackMapEnvDataLocalV72>,
    dataGlobal: PackMapEnvDataGlobalV72
  }

  export type PackMapEnvDataLocalV72 = {
    lighting: Array<PackMapEnvDataLightingV72>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV43>,
    clouds: PackMapEnvDataCloudsV72,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV43>,
    effect: Array<PackMapEnvDataEffectV72>,
    haze: Array<PackMapEnvDataHazeV72>,
    particleFields: Array<PackMapEnvDataPFieldV72>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV43>,
    sky: PackMapEnvDataSkyV72,
    skyCards: PackMapEnvDataSkyCardsV72,
    spawns: PackMapEnvDataSpawnGroupsV43,
    water: Array<PackMapEnvDataWaterV72>,
    wind: Array<PackMapEnvDataWindV72>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    audioToken: number,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV43>
  }

  export type PackMapEnvDataLightingV72 = {
    lights: Array<PackMapEnvDataLightV72>,
    shadowInfluence: number,
    backlightColor: Array<number>,
    backlightIntensity: number
  }

  export type PackMapEnvDataLightV72 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV43 = {
    lightingChar: Array<PackMapEnvDataLightingCharV43>
  }

  export type PackMapEnvDataLightingCharV43 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV72 = {
    layers: Array<PackMapEnvDataLayerV72>
  }

  export type PackMapEnvDataLayerV72 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV72>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV72 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV43 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV72 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV72 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV72 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV43 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV72 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV72 = {
    cards: Array<PackMapEnvDataSkyCardV72>
  }

  export type PackMapEnvDataSkyCardV72 = {
    day: PackMapEnvDataSkyCardAttributesV72,
    night: PackMapEnvDataSkyCardAttributesV72,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV72 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV43 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV43>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV43 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV43>
  }

  export type PackMapEnvDataSpawnModelDataV43 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV72 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV72 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataShapeV43 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV72 = {
    lighting: Array<PackMapEnvDataLightingV72>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV43>,
    clouds: PackMapEnvDataCloudsV72,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV43>,
    effect: Array<PackMapEnvDataEffectV72>,
    haze: Array<PackMapEnvDataHazeV72>,
    particleFields: Array<PackMapEnvDataPFieldV72>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV43>,
    sky: PackMapEnvDataSkyV72,
    skyCards: PackMapEnvDataSkyCardsV72,
    spawns: PackMapEnvDataSpawnGroupsV43,
    water: Array<PackMapEnvDataWaterV72>,
    wind: Array<PackMapEnvDataWindV72>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    audioToken: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV72>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV72 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V72 = V72_N.PackMapEnvironmentV72;

export namespace V73_N {
  export type PackMapEnvironmentV73 = {
    dataLocalArray: Array<PackMapEnvDataLocalV73>,
    dataGlobal: PackMapEnvDataGlobalV73
  }

  export type PackMapEnvDataLocalV73 = {
    lighting: Array<PackMapEnvDataLightingV73>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV44>,
    clouds: PackMapEnvDataCloudsV73,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV44>,
    effect: Array<PackMapEnvDataEffectV73>,
    haze: Array<PackMapEnvDataHazeV73>,
    particleFields: Array<PackMapEnvDataPFieldV73>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV44>,
    sky: PackMapEnvDataSkyV73,
    skyCards: PackMapEnvDataSkyCardsV73,
    spawns: PackMapEnvDataSpawnGroupsV44,
    water: Array<PackMapEnvDataWaterV73>,
    wind: Array<PackMapEnvDataWindV73>,
    audio: Array<PackMapEnvDataAudioV44>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV44>
  }

  export type PackMapEnvDataLightingV73 = {
    lights: Array<PackMapEnvDataLightV73>,
    shadowInfluence: number,
    backlightColor: Array<number>,
    backlightIntensity: number
  }

  export type PackMapEnvDataLightV73 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV44 = {
    lightingChar: Array<PackMapEnvDataLightingCharV44>
  }

  export type PackMapEnvDataLightingCharV44 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV73 = {
    layers: Array<PackMapEnvDataLayerV73>
  }

  export type PackMapEnvDataLayerV73 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV73>,
    name: string
  }

  export type PackMapEnvDataLayerAttributesV73 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number
  }

  export type PackMapEnvDataColoredLightRingsV44 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV73 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV73 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV73 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string
  }

  export type PackMapEnvDataPFieldCutoutV44 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV73 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV73 = {
    cards: Array<PackMapEnvDataSkyCardV73>
  }

  export type PackMapEnvDataSkyCardV73 = {
    day: PackMapEnvDataSkyCardAttributesV73,
    night: PackMapEnvDataSkyCardAttributesV73,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV73 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV44 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV44>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV44 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV44>
  }

  export type PackMapEnvDataSpawnModelDataV44 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV73 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV73 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataAudioV44 = {
    token: number
  }

  export type PackMapEnvDataShapeV44 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV73 = {
    lighting: Array<PackMapEnvDataLightingV73>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV44>,
    clouds: PackMapEnvDataCloudsV73,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV44>,
    effect: Array<PackMapEnvDataEffectV73>,
    haze: Array<PackMapEnvDataHazeV73>,
    particleFields: Array<PackMapEnvDataPFieldV73>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV44>,
    sky: PackMapEnvDataSkyV73,
    skyCards: PackMapEnvDataSkyCardsV73,
    spawns: PackMapEnvDataSpawnGroupsV44,
    water: Array<PackMapEnvDataWaterV73>,
    wind: Array<PackMapEnvDataWindV73>,
    audio: Array<PackMapEnvDataAudioV44>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV73>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV73 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V73 = V73_N.PackMapEnvironmentV73;

export namespace V74_N {
  export type PackMapEnvironmentV74 = {
    dataLocalArray: Array<PackMapEnvDataLocalV74>,
    dataGlobal: PackMapEnvDataGlobalV74
  }

  export type PackMapEnvDataLocalV74 = {
    lighting: Array<PackMapEnvDataLightingV74>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV45>,
    clouds: PackMapEnvDataCloudsV74,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV45>,
    effect: Array<PackMapEnvDataEffectV74>,
    haze: Array<PackMapEnvDataHazeV74>,
    particleFields: Array<PackMapEnvDataPFieldV74>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV45>,
    sky: PackMapEnvDataSkyV74,
    skyCards: PackMapEnvDataSkyCardsV74,
    spawns: PackMapEnvDataSpawnGroupsV45,
    water: Array<PackMapEnvDataWaterV74>,
    wind: Array<PackMapEnvDataWindV74>,
    audio: Array<PackMapEnvDataAudioV45>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    reserved: string,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV45>
  }

  export type PackMapEnvDataLightingV74 = {
    lights: Array<PackMapEnvDataLightV74>,
    shadowInfluence: number,
    backlightColor: Array<number>,
    backlightIntensity: number
  }

  export type PackMapEnvDataLightV74 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV45 = {
    lightingChar: Array<PackMapEnvDataLightingCharV45>
  }

  export type PackMapEnvDataLightingCharV45 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV74 = {
    layers: Array<PackMapEnvDataLayerV74>
  }

  export type PackMapEnvDataLayerV74 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV74>,
    name: string,
    reserved: number
  }

  export type PackMapEnvDataLayerAttributesV74 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number,
    reserved: number
  }

  export type PackMapEnvDataColoredLightRingsV45 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV74 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    flatteningRange: Array<number>,
    flatteningCharacterRange: Array<number>
  }

  export type PackMapEnvDataHazeV74 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV74 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string,
    reserved: number
  }

  export type PackMapEnvDataPFieldCutoutV45 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV74 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV74 = {
    cards: Array<PackMapEnvDataSkyCardV74>
  }

  export type PackMapEnvDataSkyCardV74 = {
    day: PackMapEnvDataSkyCardAttributesV74,
    night: PackMapEnvDataSkyCardAttributesV74,
    flags: number,
    name: string
  }

  export type PackMapEnvDataSkyCardAttributesV74 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number
  }

  export type PackMapEnvDataSpawnGroupsV45 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV45>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV45 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV45>
  }

  export type PackMapEnvDataSpawnModelDataV45 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV74 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV74 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataAudioV45 = {
    token: number
  }

  export type PackMapEnvDataShapeV45 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV74 = {
    lighting: Array<PackMapEnvDataLightingV74>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV45>,
    clouds: PackMapEnvDataCloudsV74,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV45>,
    effect: Array<PackMapEnvDataEffectV74>,
    haze: Array<PackMapEnvDataHazeV74>,
    particleFields: Array<PackMapEnvDataPFieldV74>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV45>,
    sky: PackMapEnvDataSkyV74,
    skyCards: PackMapEnvDataSkyCardsV74,
    spawns: PackMapEnvDataSpawnGroupsV45,
    water: Array<PackMapEnvDataWaterV74>,
    wind: Array<PackMapEnvDataWindV74>,
    audio: Array<PackMapEnvDataAudioV45>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    reserved: string,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV74>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV74 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V74 = V74_N.PackMapEnvironmentV74;

export namespace V75_N {
  export type PackMapEnvironmentV75 = {
    dataLocalArray: Array<PackMapEnvDataLocalV75>,
    dataGlobal: PackMapEnvDataGlobalV75
  }

  export type PackMapEnvDataLocalV75 = {
    lighting: Array<PackMapEnvDataLightingV75>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV46>,
    clouds: PackMapEnvDataCloudsV75,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV46>,
    effect: Array<PackMapEnvDataEffectV75>,
    haze: Array<PackMapEnvDataHazeV75>,
    particleFields: Array<PackMapEnvDataPFieldV75>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV46>,
    sky: PackMapEnvDataSkyV75,
    skyCards: PackMapEnvDataSkyCardsV75,
    spawns: PackMapEnvDataSpawnGroupsV46,
    water: Array<PackMapEnvDataWaterV75>,
    wind: Array<PackMapEnvDataWindV75>,
    audio: Array<PackMapEnvDataAudioV46>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    flags: number,
    ext: PackMapEnvDataBaseExV46,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV46>
  }

  export type PackMapEnvDataLightingV75 = {
    lights: Array<PackMapEnvDataLightV75>,
    shadowInfluence: number,
    backlightColor: Array<number>,
    backlightIntensity: number
  }

  export type PackMapEnvDataLightV75 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV46 = {
    lightingChar: Array<PackMapEnvDataLightingCharV46>
  }

  export type PackMapEnvDataLightingCharV46 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV75 = {
    layers: Array<PackMapEnvDataLayerV75>
  }

  export type PackMapEnvDataLayerV75 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV75>,
    name: string,
    reserved: number
  }

  export type PackMapEnvDataLayerAttributesV75 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number,
    reserved: number
  }

  export type PackMapEnvDataColoredLightRingsV46 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV75 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    ssaoAmount: number,
    ssaoBrighten: number,
    ssaoContrast: number,
    ssaoSunScale: number,
    flags: number,
    clutTexturePath: string,
    ext: PackMapEnvDataEffectExV46
  }

  export type PackMapEnvDataEffectExV46 = {
    dummy: number
  }

  export type PackMapEnvDataHazeV75 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV75 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string,
    reserved: number
  }

  export type PackMapEnvDataPFieldCutoutV46 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV75 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV75 = {
    cards: Array<PackMapEnvDataSkyCardV75>
  }

  export type PackMapEnvDataSkyCardV75 = {
    day: PackMapEnvDataSkyCardAttributesV75,
    night: PackMapEnvDataSkyCardAttributesV75,
    flags: number,
    name: string,
    location: Array<number>,
    material: PackMapEnvDataSkyCardMaterialV46,
    ext: PackMapEnvDataSkyCardExV46
  }

  export type PackMapEnvDataSkyCardAttributesV75 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number,
    lensFlare: PackMapEnvLensFlareV46,
    ext: PackMapEnvDataSkyCardAttributesExV46
  }

  export type PackMapEnvLensFlareV46 = {
    atoms: Array<PackMapEnvLensFlareAtomV46>,
    textures: Array<PackMapEnvLensFlareTextureV46>,
    material: string,
    fadeBand: Array<number>,
    reverseFadeBand: Array<number>,
    opacityCoeff: number,
    flags: number,
    constants: Array<PackMapEnvDataShaderConstantV46>
  }

  export type PackMapEnvLensFlareAtomV46 = {
    rows: number,
    columns: number,
    start: number,
    fps: number,
    color: Array<number>,
    offset: Array<number>,
    scale: Array<number>,
    baseRotation: number,
    cameraRotation: number,
    flags: number
  }

  export type PackMapEnvLensFlareTextureV46 = {
    texture: string
  }

  export type PackMapEnvDataShaderConstantV46 = {
    token: number,
    value: Array<number>
  }

  export type PackMapEnvDataSkyCardAttributesExV46 = {
    dummy: number
  }

  export type PackMapEnvDataSkyCardMaterialV46 = {
    filename: string,
    constants: Array<PackMapEnvDataShaderConstantV46>,
    textures: Array<PackMapEnvDataShaderTextureV46>,
    textureAnimation: PackEnvDataSkyCardAnimationV46,
    flipbook: PackMapEnvDataSkycardFlipbookV46
  }

  export type PackMapEnvDataShaderTextureV46 = {
    filename: string,
    textureUV: Array<number>
  }

  export type PackEnvDataSkyCardAnimationV46 = {
    textureAnimTranslation: Array<number>,
    textureAnimScaleRangeX: Array<number>,
    textureAnimScaleRangeY: Array<number>,
    textureAnimScaleSpeed: Array<number>,
    textureAnimRotation: number,
    texCoords: number
  }

  export type PackMapEnvDataSkycardFlipbookV46 = {
    rows: number,
    columns: number,
    start: number,
    count: number,
    fps: number
  }

  export type PackMapEnvDataSkyCardExV46 = {
    dummy: number
  }

  export type PackMapEnvDataSpawnGroupsV46 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV46>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV46 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV46>
  }

  export type PackMapEnvDataSpawnModelDataV46 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV75 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV75 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataAudioV46 = {
    token: number
  }

  export type PackMapEnvDataBaseExV46 = {
    ext2: PackMapEnvDataBaseEx2V46,
    brightTime: number,
    dimTime: number,
    darkCoeff: number,
    darkExp: number,
    darkMin: number,
    darkMax: number,
    brightMin: number,
    brightMax: number,
    brightScale: number,
    darkScale: number,
    waterReflectionParams: Array<number>
  }

  export type PackMapEnvDataBaseEx2V46 = {
    dummy: number
  }

  export type PackMapEnvDataShapeV46 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV75 = {
    lighting: Array<PackMapEnvDataLightingV75>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV46>,
    clouds: PackMapEnvDataCloudsV75,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV46>,
    effect: Array<PackMapEnvDataEffectV75>,
    haze: Array<PackMapEnvDataHazeV75>,
    particleFields: Array<PackMapEnvDataPFieldV75>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV46>,
    sky: PackMapEnvDataSkyV75,
    skyCards: PackMapEnvDataSkyCardsV75,
    spawns: PackMapEnvDataSpawnGroupsV46,
    water: Array<PackMapEnvDataWaterV75>,
    wind: Array<PackMapEnvDataWindV75>,
    audio: Array<PackMapEnvDataAudioV46>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    flags: number,
    ext: PackMapEnvDataBaseExV46,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV75>,
    starFile: string
  }

  export type PackMapEnvDataSkyModeTexV75 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

}

export type V75 = V75_N.PackMapEnvironmentV75;

export namespace V76_N {
  export type PackMapEnvironmentV76 = {
    dataLocalArray: Array<PackMapEnvDataLocalV76>,
    dataGlobal: PackMapEnvDataGlobalV76
  }

  export type PackMapEnvDataLocalV76 = {
    lighting: Array<PackMapEnvDataLightingV76>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV47>,
    clouds: PackMapEnvDataCloudsV76,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV47>,
    effect: Array<PackMapEnvDataEffectV76>,
    haze: Array<PackMapEnvDataHazeV76>,
    particleFields: Array<PackMapEnvDataPFieldV76>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV47>,
    sky: PackMapEnvDataSkyV76,
    skyCards: PackMapEnvDataSkyCardsV76,
    spawns: PackMapEnvDataSpawnGroupsV47,
    water: Array<PackMapEnvDataWaterV76>,
    wind: Array<PackMapEnvDataWindV76>,
    audio: Array<PackMapEnvDataAudioV47>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    flags: number,
    ext: PackMapEnvDataBaseExV47,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV47>
  }

  export type PackMapEnvDataLightingV76 = {
    lights: Array<PackMapEnvDataLightV76>,
    shadowInfluence: number,
    backlightColor: Array<number>,
    backlightIntensity: number
  }

  export type PackMapEnvDataLightV76 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV47 = {
    lightingChar: Array<PackMapEnvDataLightingCharV47>
  }

  export type PackMapEnvDataLightingCharV47 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV76 = {
    layers: Array<PackMapEnvDataLayerV76>
  }

  export type PackMapEnvDataLayerV76 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV76>,
    name: string,
    reserved: number
  }

  export type PackMapEnvDataLayerAttributesV76 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number,
    reserved: number
  }

  export type PackMapEnvDataColoredLightRingsV47 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV76 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    ssaoAmount: number,
    ssaoBrighten: number,
    ssaoContrast: number,
    ssaoSunScale: number,
    flags: number,
    clutTexturePath: string,
    ext: PackMapEnvDataEffectExV47
  }

  export type PackMapEnvDataEffectExV47 = {
    dummy: number
  }

  export type PackMapEnvDataHazeV76 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV76 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string,
    reserved: number
  }

  export type PackMapEnvDataPFieldCutoutV47 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV76 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV76 = {
    cards: Array<PackMapEnvDataSkyCardV76>
  }

  export type PackMapEnvDataSkyCardV76 = {
    day: PackMapEnvDataSkyCardAttributesV76,
    night: PackMapEnvDataSkyCardAttributesV76,
    flags: number,
    name: string,
    location: Array<number>,
    material: PackMapEnvDataSkyCardMaterialV47,
    ext: PackMapEnvDataSkyCardExV47
  }

  export type PackMapEnvDataSkyCardAttributesV76 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number,
    lensFlare: PackMapEnvLensFlareV47,
    ext: PackMapEnvDataSkyCardAttributesExV47
  }

  export type PackMapEnvLensFlareV47 = {
    atoms: Array<PackMapEnvLensFlareAtomV47>,
    textures: Array<PackMapEnvLensFlareTextureV47>,
    material: string,
    fadeBand: Array<number>,
    reverseFadeBand: Array<number>,
    opacityCoeff: number,
    flags: number,
    constants: Array<PackMapEnvDataShaderConstantV47>
  }

  export type PackMapEnvLensFlareAtomV47 = {
    rows: number,
    columns: number,
    start: number,
    fps: number,
    color: Array<number>,
    offset: Array<number>,
    scale: Array<number>,
    baseRotation: number,
    cameraRotation: number,
    flags: number
  }

  export type PackMapEnvLensFlareTextureV47 = {
    texture: string
  }

  export type PackMapEnvDataShaderConstantV47 = {
    token: number,
    value: Array<number>
  }

  export type PackMapEnvDataSkyCardAttributesExV47 = {
    dummy: number
  }

  export type PackMapEnvDataSkyCardMaterialV47 = {
    filename: string,
    constants: Array<PackMapEnvDataShaderConstantV47>,
    textures: Array<PackMapEnvDataShaderTextureV47>,
    textureAnimation: PackEnvDataSkyCardAnimationV47,
    flipbook: PackMapEnvDataSkycardFlipbookV47
  }

  export type PackMapEnvDataShaderTextureV47 = {
    filename: string,
    textureUV: Array<number>
  }

  export type PackEnvDataSkyCardAnimationV47 = {
    textureAnimTranslation: Array<number>,
    textureAnimScaleRangeX: Array<number>,
    textureAnimScaleRangeY: Array<number>,
    textureAnimScaleSpeed: Array<number>,
    textureAnimRotation: number,
    texCoords: number
  }

  export type PackMapEnvDataSkycardFlipbookV47 = {
    rows: number,
    columns: number,
    start: number,
    count: number,
    fps: number
  }

  export type PackMapEnvDataSkyCardExV47 = {
    dummy: number
  }

  export type PackMapEnvDataSpawnGroupsV47 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV47>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV47 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV47>
  }

  export type PackMapEnvDataSpawnModelDataV47 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV76 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV76 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataAudioV47 = {
    token: number
  }

  export type PackMapEnvDataBaseExV47 = {
    ext2: PackMapEnvDataBaseEx2V47,
    brightTime: number,
    dimTime: number,
    darkCoeff: number,
    darkExp: number,
    darkMin: number,
    darkMax: number,
    brightMin: number,
    brightMax: number,
    brightScale: number,
    darkScale: number,
    waterReflectionParams: Array<number>
  }

  export type PackMapEnvDataBaseEx2V47 = {
    dummy: number
  }

  export type PackMapEnvDataShapeV47 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV76 = {
    lighting: Array<PackMapEnvDataLightingV76>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV47>,
    clouds: PackMapEnvDataCloudsV76,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV47>,
    effect: Array<PackMapEnvDataEffectV76>,
    haze: Array<PackMapEnvDataHazeV76>,
    particleFields: Array<PackMapEnvDataPFieldV76>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV47>,
    sky: PackMapEnvDataSkyV76,
    skyCards: PackMapEnvDataSkyCardsV76,
    spawns: PackMapEnvDataSpawnGroupsV47,
    water: Array<PackMapEnvDataWaterV76>,
    wind: Array<PackMapEnvDataWindV76>,
    audio: Array<PackMapEnvDataAudioV47>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    flags: number,
    ext: PackMapEnvDataBaseExV47,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV76>,
    starFile: string,
    skyModeCubeTex: Array<PackMapEnvDataSkyModeCubeTexV47>
  }

  export type PackMapEnvDataSkyModeTexV76 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

  export type PackMapEnvDataSkyModeCubeTexV47 = {
    texPathE: string,
    texPathW: string,
    texPathN: string,
    texPathS: string,
    texPathB: string,
    texPathT: string
  }

}

export type V76 = V76_N.PackMapEnvironmentV76;

export namespace V77_N {
  export type PackMapEnvironmentV77 = {
    dataLocalArray: Array<PackMapEnvDataLocalV76>,
    dataGlobal: PackMapEnvDataGlobalV76,
    dataOverrideArray: Array<PackMapEnvDataOverrideV77>
  }

  export type PackMapEnvDataLocalV76 = {
    lighting: Array<PackMapEnvDataLightingV76>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV47>,
    clouds: PackMapEnvDataCloudsV76,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV47>,
    effect: Array<PackMapEnvDataEffectV76>,
    haze: Array<PackMapEnvDataHazeV76>,
    particleFields: Array<PackMapEnvDataPFieldV76>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV47>,
    sky: PackMapEnvDataSkyV76,
    skyCards: PackMapEnvDataSkyCardsV76,
    spawns: PackMapEnvDataSpawnGroupsV47,
    water: Array<PackMapEnvDataWaterV76>,
    wind: Array<PackMapEnvDataWindV76>,
    audio: Array<PackMapEnvDataAudioV47>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    flags: number,
    ext: PackMapEnvDataBaseExV47,
    type: number,
    guid: number,
    shapeArray: Array<PackMapEnvDataShapeV47>
  }

  export type PackMapEnvDataLightingV76 = {
    lights: Array<PackMapEnvDataLightV76>,
    shadowInfluence: number,
    backlightColor: Array<number>,
    backlightIntensity: number
  }

  export type PackMapEnvDataLightV76 = {
    color: Array<number>,
    intensity: number,
    direction: Array<number>
  }

  export type PackMapEnvDataLightingCharGroupV47 = {
    lightingChar: Array<PackMapEnvDataLightingCharV47>
  }

  export type PackMapEnvDataLightingCharV47 = {
    sunScale: number,
    saturation: number,
    sunFill: number,
    ambScale: number,
    ambFill: number,
    flags: number
  }

  export type PackMapEnvDataCloudsV76 = {
    layers: Array<PackMapEnvDataLayerV76>
  }

  export type PackMapEnvDataLayerV76 = {
    altitude: number,
    cutOut: number,
    depth: number,
    extent: number,
    scale: number,
    texture: string,
    attributes: Array<PackMapEnvDataLayerAttributesV76>,
    name: string,
    reserved: number
  }

  export type PackMapEnvDataLayerAttributesV76 = {
    brightness: number,
    density: number,
    haze: number,
    lightIntensity: number,
    velocity: Array<number>,
    fadeWidth: number,
    fadeEnd: number,
    reserved: number
  }

  export type PackMapEnvDataColoredLightRingsV47 = {
    range: Array<number>,
    distances: Array<number>,
    lightColors: Array<Array<number>>,
    shadowColors: Array<Array<number>>
  }

  export type PackMapEnvDataEffectV76 = {
    glow: Array<number>,
    tintColor: Array<number>,
    tintTargetColor: Array<number>,
    saturation: number,
    tintAmount: number,
    tintFocus: number,
    glowLevel: Array<number>,
    glowAmplify: number,
    focalDepth: number,
    focalRange: number,
    ssaoAmount: number,
    ssaoBrighten: number,
    ssaoContrast: number,
    ssaoSunScale: number,
    flags: number,
    clutTexturePath: string,
    ext: PackMapEnvDataEffectExV47
  }

  export type PackMapEnvDataEffectExV47 = {
    dummy: number
  }

  export type PackMapEnvDataHazeV76 = {
    nearColor: Array<number>,
    farColor: Array<number>,
    distRange: Array<number>,
    heightColor: Array<number>,
    heightRange: Array<number>,
    depthCue: number,
    sunDirRange: Array<number>
  }

  export type PackMapEnvDataPFieldV76 = {
    altitude: number,
    angle: Array<number>,
    clusterCount: number,
    clustering: Array<number>,
    depth: number,
    deviation: number,
    deviationSpeed: Array<number>,
    extent: number,
    fade: number,
    fieldDirection: Array<number>,
    flags: number,
    lifetime: Array<number>,
    opacity: Array<number>,
    particleCount: number,
    period: Array<number>,
    rotation: Array<number>,
    scaleX: Array<number>,
    scaleY: Array<number>,
    seed: number,
    speed: Array<number>,
    texColRow: Array<number>,
    texFPS: number,
    texPath: string,
    type: number,
    name: string,
    reserved: number
  }

  export type PackMapEnvDataPFieldCutoutV47 = {
    name: string,
    x: Array<number>,
    y: Array<number>,
    z: Array<number>
  }

  export type PackMapEnvDataSkyV76 = {
    flags: number,
    dayBrightness: number,
    dayHazeBottom: number,
    dayHazeDensity: number,
    dayHazeFalloff: number,
    dayLightIntensity: number,
    dayStarDensity: number,
    nightBrightness: number,
    nightHazeBottom: number,
    nightHazeDensity: number,
    nightHazeFalloff: number,
    nightLightIntensity: number,
    nightStarDensity: number,
    verticalOffset: number
  }

  export type PackMapEnvDataSkyCardsV76 = {
    cards: Array<PackMapEnvDataSkyCardV76>
  }

  export type PackMapEnvDataSkyCardV76 = {
    day: PackMapEnvDataSkyCardAttributesV76,
    night: PackMapEnvDataSkyCardAttributesV76,
    flags: number,
    name: string,
    location: Array<number>,
    material: PackMapEnvDataSkyCardMaterialV47,
    ext: PackMapEnvDataSkyCardExV47
  }

  export type PackMapEnvDataSkyCardAttributesV76 = {
    azimuth: number,
    density: number,
    hazeDensity: number,
    latitude: number,
    lightIntensity: number,
    minHaze: number,
    scale: Array<number>,
    speed: number,
    texture: string,
    textureUV: Array<number>,
    brightness: number,
    lensFlare: PackMapEnvLensFlareV47,
    ext: PackMapEnvDataSkyCardAttributesExV47
  }

  export type PackMapEnvLensFlareV47 = {
    atoms: Array<PackMapEnvLensFlareAtomV47>,
    textures: Array<PackMapEnvLensFlareTextureV47>,
    material: string,
    fadeBand: Array<number>,
    reverseFadeBand: Array<number>,
    opacityCoeff: number,
    flags: number,
    constants: Array<PackMapEnvDataShaderConstantV47>
  }

  export type PackMapEnvLensFlareAtomV47 = {
    rows: number,
    columns: number,
    start: number,
    fps: number,
    color: Array<number>,
    offset: Array<number>,
    scale: Array<number>,
    baseRotation: number,
    cameraRotation: number,
    flags: number
  }

  export type PackMapEnvLensFlareTextureV47 = {
    texture: string
  }

  export type PackMapEnvDataShaderConstantV47 = {
    token: number,
    value: Array<number>
  }

  export type PackMapEnvDataSkyCardAttributesExV47 = {
    dummy: number
  }

  export type PackMapEnvDataSkyCardMaterialV47 = {
    filename: string,
    constants: Array<PackMapEnvDataShaderConstantV47>,
    textures: Array<PackMapEnvDataShaderTextureV47>,
    textureAnimation: PackEnvDataSkyCardAnimationV47,
    flipbook: PackMapEnvDataSkycardFlipbookV47
  }

  export type PackMapEnvDataShaderTextureV47 = {
    filename: string,
    textureUV: Array<number>
  }

  export type PackEnvDataSkyCardAnimationV47 = {
    textureAnimTranslation: Array<number>,
    textureAnimScaleRangeX: Array<number>,
    textureAnimScaleRangeY: Array<number>,
    textureAnimScaleSpeed: Array<number>,
    textureAnimRotation: number,
    texCoords: number
  }

  export type PackMapEnvDataSkycardFlipbookV47 = {
    rows: number,
    columns: number,
    start: number,
    count: number,
    fps: number
  }

  export type PackMapEnvDataSkyCardExV47 = {
    dummy: number
  }

  export type PackMapEnvDataSpawnGroupsV47 = {
    spawnGroups: Array<PackMapEnvDataSpawnListV47>,
    targets: Array<number>
  }

  export type PackMapEnvDataSpawnListV47 = {
    spawns: Array<PackMapEnvDataSpawnModelDataV47>
  }

  export type PackMapEnvDataSpawnModelDataV47 = {
    spawnRange: Array<number>,
    lifeSpan: Array<number>,
    scaleRange: Array<number>,
    heightRange: Array<number>,
    rotXRange: Array<number>,
    rotYRange: Array<number>,
    rotZRange: Array<number>,
    probability: number,
    delay: number,
    flags: number,
    animSequence: number,
    modelFile: string,
    maxConcurrent: number
  }

  export type PackMapEnvDataWaterV76 = {
    waterFlags: number,
    animAmplitude: number,
    animChoppiness: number,
    animWind: Array<number>,
    bumpAmount: number,
    bumpAngle0: number,
    bumpAngle1: number,
    bumpScale0: number,
    bumpScale1: number,
    bumpSpeed0: number,
    bumpSpeed1: number,
    bumpTile0: number,
    bumpTile1: number,
    patternAngle: number,
    patternTile: number,
    patternSpeed: number,
    patternEdge: number,
    surfaceShallowColor: Array<number>,
    surfaceDeepColor: Array<number>,
    patternColor: Array<number>,
    surfaceFresnel: number,
    distortAmount: number,
    depthAttenuation: number,
    materialFilename: string,
    textureFilenames: Array<string>,
    constantTokens: Array<number>,
    constantValues: Array<Array<number>>,
    foamSpawn: number,
    foamDissolve: number,
    foamDepthAttenuation: number,
    foamColor0: Array<number>,
    foamColor1: Array<number>
  }

  export type PackMapEnvDataWindV76 = {
    azimuth: number,
    elevation: number,
    noise: number,
    speed: number,
    gust: number,
    gustFreq: number,
    gustSpeed: number
  }

  export type PackMapEnvDataAudioV47 = {
    token: number
  }

  export type PackMapEnvDataBaseExV47 = {
    ext2: PackMapEnvDataBaseEx2V47,
    brightTime: number,
    dimTime: number,
    darkCoeff: number,
    darkExp: number,
    darkMin: number,
    darkMax: number,
    brightMin: number,
    brightMax: number,
    brightScale: number,
    darkScale: number,
    waterReflectionParams: Array<number>
  }

  export type PackMapEnvDataBaseEx2V47 = {
    dummy: number
  }

  export type PackMapEnvDataShapeV47 = {
    center: Array<number>,
    height: number,
    fadeHorizInner: number,
    fadeHorizOuter: number,
    fadeVertical: number,
    vertexArray: Array<Array<number>>,
    shapeType: number
  }

  export type PackMapEnvDataGlobalV76 = {
    lighting: Array<PackMapEnvDataLightingV76>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV47>,
    clouds: PackMapEnvDataCloudsV76,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV47>,
    effect: Array<PackMapEnvDataEffectV76>,
    haze: Array<PackMapEnvDataHazeV76>,
    particleFields: Array<PackMapEnvDataPFieldV76>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV47>,
    sky: PackMapEnvDataSkyV76,
    skyCards: PackMapEnvDataSkyCardsV76,
    spawns: PackMapEnvDataSpawnGroupsV47,
    water: Array<PackMapEnvDataWaterV76>,
    wind: Array<PackMapEnvDataWindV76>,
    audio: Array<PackMapEnvDataAudioV47>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    flags: number,
    ext: PackMapEnvDataBaseExV47,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV76>,
    starFile: string,
    skyModeCubeTex: Array<PackMapEnvDataSkyModeCubeTexV47>
  }

  export type PackMapEnvDataSkyModeTexV76 = {
    texPathNE: string,
    texPathSW: string,
    texPathT: string
  }

  export type PackMapEnvDataSkyModeCubeTexV47 = {
    texPathE: string,
    texPathW: string,
    texPathN: string,
    texPathS: string,
    texPathB: string,
    texPathT: string
  }

  export type PackMapEnvDataOverrideV77 = {
    lighting: Array<PackMapEnvDataLightingV76>,
    lightingCharGroups: Array<PackMapEnvDataLightingCharGroupV47>,
    clouds: PackMapEnvDataCloudsV76,
    coloredLightRings: Array<PackMapEnvDataColoredLightRingsV47>,
    effect: Array<PackMapEnvDataEffectV76>,
    haze: Array<PackMapEnvDataHazeV76>,
    particleFields: Array<PackMapEnvDataPFieldV76>,
    particleFieldCutouts: Array<PackMapEnvDataPFieldCutoutV47>,
    sky: PackMapEnvDataSkyV76,
    skyCards: PackMapEnvDataSkyCardsV76,
    spawns: PackMapEnvDataSpawnGroupsV47,
    water: Array<PackMapEnvDataWaterV76>,
    wind: Array<PackMapEnvDataWindV76>,
    audio: Array<PackMapEnvDataAudioV47>,
    name: string,
    nightMods: Array<number>,
    bindTarget: number,
    flags: number,
    ext: PackMapEnvDataBaseExV47,
    skyModeTex: Array<PackMapEnvDataSkyModeTexV76>,
    starFile: string,
    skyModeCubeTex: Array<PackMapEnvDataSkyModeCubeTexV47>,
    token: number,
    guid: number
  }

}

export type V77 = V77_N.PackMapEnvironmentV77;

export type V29_U = V29 | V30 | V31 | V32 | V33 | V34 | V35 | V36 | V37 | V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V30_U = V30 | V31 | V32 | V33 | V34 | V35 | V36 | V37 | V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V31_U = V31 | V32 | V33 | V34 | V35 | V36 | V37 | V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V32_U = V32 | V33 | V34 | V35 | V36 | V37 | V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V33_U = V33 | V34 | V35 | V36 | V37 | V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V34_U = V34 | V35 | V36 | V37 | V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V35_U = V35 | V36 | V37 | V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V36_U = V36 | V37 | V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V37_U = V37 | V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V38_U = V38 | V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V39_U = V39 | V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V40_U = V40 | V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V41_U = V41 | V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V42_U = V42 | V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V43_U = V43 | V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V44_U = V44 | V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V45_U = V45 | V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V46_U = V46 | V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V47_U = V47 | V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V48_U = V48 | V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V49_U = V49 | V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V50_U = V50 | V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V51_U = V51 | V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V52_U = V52 | V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V53_U = V53 | V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V54_U = V54 | V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V55_U = V55 | V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V56_U = V56 | V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V57_U = V57 | V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V58_U = V58 | V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V59_U = V59 | V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V60_U = V60 | V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V61_U = V61 | V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V62_U = V62 | V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V63_U = V63 | V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V64_U = V64 | V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V65_U = V65 | V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V66_U = V66 | V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V67_U = V67 | V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V68_U = V68 | V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V69_U = V69 | V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V70_U = V70 | V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V71_U = V71 | V72 | V73 | V74 | V75 | V76 | V77;
export type V72_U = V72 | V73 | V74 | V75 | V76 | V77;
export type V73_U = V73 | V74 | V75 | V76 | V77;
export type V74_U = V74 | V75 | V76 | V77;
export type V75_U = V75 | V76 | V77;
export type V76_U = V76 | V77;
export type V77_U = V77;
