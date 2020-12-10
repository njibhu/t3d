import { FixedArray, Uint8, Float32, RefArray, DynArray, Filename, Uint32, RefString16, Pointer, Uint16, Uint64 } from "../src/types";

export const V29 = {
  chunkName: "env",
  name: "PackMapEnvironmentV29",
  version: 29,
  definitions: {
    PackMapEnvDataLocalV29: {
      lighting: DynArray("PackMapEnvDataLightingV29"),
      clouds: Pointer("PackMapEnvDataCloudsV29"),
      effect: RefArray("PackMapEnvDataEffectV29"),
      haze: RefArray("PackMapEnvDataHazeV29"),
      particleFields: RefArray("PackMapEnvDataPFieldV29"),
      sky: Pointer("PackMapEnvDataSkyV29"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV29"),
      water: RefArray("PackMapEnvDataWaterV29"),
      wind: RefArray("PackMapEnvDataWindV29"),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV29: {
      lights: RefArray("PackMapEnvDataLightV29")
    },
    PackMapEnvDataLightV29: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV29: {
      layers: DynArray("PackMapEnvDataLayerV29")
    },
    PackMapEnvDataLayerV29: {
      altitude: Float32,
      scale: Float32,
      texture: Filename(),
      day: "PackMapEnvDataLayerAttributesV29",
      night: "PackMapEnvDataLayerAttributesV29",
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV29: {
      density: Float32,
      depth: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV29: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32
    },
    PackMapEnvDataHazeV29: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV29: {
      angle: FixedArray(Float32, 2),
      deviation: Float32,
      extent: Uint16,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataSkyV29: {
      flags: Uint8,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV29: {
      cards: DynArray("PackMapEnvDataSkyCardV29")
    },
    PackMapEnvDataSkyCardV29: {
      day: "PackMapEnvDataSkyCardAttributesV29",
      night: "PackMapEnvDataSkyCardAttributesV29",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV29: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV29: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename()
    },
    PackMapEnvDataWindV29: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV29: {
      lighting: DynArray("PackMapEnvDataLightingV29"),
      clouds: Pointer("PackMapEnvDataCloudsV29"),
      effect: RefArray("PackMapEnvDataEffectV29"),
      haze: RefArray("PackMapEnvDataHazeV29"),
      particleFields: RefArray("PackMapEnvDataPFieldV29"),
      sky: Pointer("PackMapEnvDataSkyV29"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV29"),
      water: RefArray("PackMapEnvDataWaterV29"),
      wind: RefArray("PackMapEnvDataWindV29"),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV29"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV29: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV29"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV29")
  }
};

export const V30 = {
  chunkName: "env",
  name: "PackMapEnvironmentV30",
  version: 30,
  definitions: {
    PackMapEnvDataLocalV30: {
      lighting: DynArray("PackMapEnvDataLightingV30"),
      clouds: Pointer("PackMapEnvDataCloudsV30"),
      effect: RefArray("PackMapEnvDataEffectV30"),
      haze: RefArray("PackMapEnvDataHazeV30"),
      particleFields: RefArray("PackMapEnvDataPFieldV30"),
      sky: Pointer("PackMapEnvDataSkyV30"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV30"),
      water: RefArray("PackMapEnvDataWaterV30"),
      wind: RefArray("PackMapEnvDataWindV30"),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV30: {
      lights: RefArray("PackMapEnvDataLightV30")
    },
    PackMapEnvDataLightV30: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV30: {
      layers: DynArray("PackMapEnvDataLayerV30")
    },
    PackMapEnvDataLayerV30: {
      altitude: Float32,
      cutOut: Float32,
      scale: Float32,
      texture: Filename(),
      day: "PackMapEnvDataLayerAttributesV30",
      night: "PackMapEnvDataLayerAttributesV30",
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV30: {
      density: Float32,
      depth: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV30: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32
    },
    PackMapEnvDataHazeV30: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV30: {
      angle: FixedArray(Float32, 2),
      deviation: Float32,
      extent: Uint16,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataSkyV30: {
      flags: Uint8,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV30: {
      cards: DynArray("PackMapEnvDataSkyCardV30")
    },
    PackMapEnvDataSkyCardV30: {
      day: "PackMapEnvDataSkyCardAttributesV30",
      night: "PackMapEnvDataSkyCardAttributesV30",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV30: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV30: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename()
    },
    PackMapEnvDataWindV30: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV30: {
      lighting: DynArray("PackMapEnvDataLightingV30"),
      clouds: Pointer("PackMapEnvDataCloudsV30"),
      effect: RefArray("PackMapEnvDataEffectV30"),
      haze: RefArray("PackMapEnvDataHazeV30"),
      particleFields: RefArray("PackMapEnvDataPFieldV30"),
      sky: Pointer("PackMapEnvDataSkyV30"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV30"),
      water: RefArray("PackMapEnvDataWaterV30"),
      wind: RefArray("PackMapEnvDataWindV30"),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV30"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV30: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV30"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV30")
  }
};

export const V31 = {
  chunkName: "env",
  name: "PackMapEnvironmentV31",
  version: 31,
  definitions: {
    PackMapEnvDataLocalV31: {
      lighting: DynArray("PackMapEnvDataLightingV31"),
      clouds: Pointer("PackMapEnvDataCloudsV31"),
      effect: RefArray("PackMapEnvDataEffectV31"),
      haze: RefArray("PackMapEnvDataHazeV31"),
      particleFields: RefArray("PackMapEnvDataPFieldV31"),
      sky: Pointer("PackMapEnvDataSkyV31"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV31"),
      water: RefArray("PackMapEnvDataWaterV31"),
      wind: RefArray("PackMapEnvDataWindV31"),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV31: {
      lights: RefArray("PackMapEnvDataLightV31")
    },
    PackMapEnvDataLightV31: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV31: {
      layers: DynArray("PackMapEnvDataLayerV31")
    },
    PackMapEnvDataLayerV31: {
      altitude: Float32,
      cutOut: Float32,
      scale: Float32,
      texture: Filename(),
      day: "PackMapEnvDataLayerAttributesV31",
      night: "PackMapEnvDataLayerAttributesV31",
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV31: {
      density: Float32,
      depth: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV31: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32
    },
    PackMapEnvDataHazeV31: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV31: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataSkyV31: {
      flags: Uint8,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV31: {
      cards: DynArray("PackMapEnvDataSkyCardV31")
    },
    PackMapEnvDataSkyCardV31: {
      day: "PackMapEnvDataSkyCardAttributesV31",
      night: "PackMapEnvDataSkyCardAttributesV31",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV31: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV31: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename()
    },
    PackMapEnvDataWindV31: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV31: {
      lighting: DynArray("PackMapEnvDataLightingV31"),
      clouds: Pointer("PackMapEnvDataCloudsV31"),
      effect: RefArray("PackMapEnvDataEffectV31"),
      haze: RefArray("PackMapEnvDataHazeV31"),
      particleFields: RefArray("PackMapEnvDataPFieldV31"),
      sky: Pointer("PackMapEnvDataSkyV31"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV31"),
      water: RefArray("PackMapEnvDataWaterV31"),
      wind: RefArray("PackMapEnvDataWindV31"),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV31"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV31: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV31"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV31")
  }
};

export const V32 = {
  chunkName: "env",
  name: "PackMapEnvironmentV32",
  version: 32,
  definitions: {
    PackMapEnvDataLocalV32: {
      lighting: DynArray("PackMapEnvDataLightingV32"),
      clouds: Pointer("PackMapEnvDataCloudsV32"),
      effect: RefArray("PackMapEnvDataEffectV32"),
      haze: RefArray("PackMapEnvDataHazeV32"),
      particleFields: RefArray("PackMapEnvDataPFieldV32"),
      sky: Pointer("PackMapEnvDataSkyV32"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV32"),
      water: RefArray("PackMapEnvDataWaterV32"),
      wind: RefArray("PackMapEnvDataWindV32"),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV32: {
      lights: RefArray("PackMapEnvDataLightV32")
    },
    PackMapEnvDataLightV32: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV32: {
      layers: DynArray("PackMapEnvDataLayerV32")
    },
    PackMapEnvDataLayerV32: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV32"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV32: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV32: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32
    },
    PackMapEnvDataHazeV32: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV32: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataSkyV32: {
      flags: Uint8,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV32: {
      cards: DynArray("PackMapEnvDataSkyCardV32")
    },
    PackMapEnvDataSkyCardV32: {
      day: "PackMapEnvDataSkyCardAttributesV32",
      night: "PackMapEnvDataSkyCardAttributesV32",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV32: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV32: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename()
    },
    PackMapEnvDataWindV32: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV32: {
      lighting: DynArray("PackMapEnvDataLightingV32"),
      clouds: Pointer("PackMapEnvDataCloudsV32"),
      effect: RefArray("PackMapEnvDataEffectV32"),
      haze: RefArray("PackMapEnvDataHazeV32"),
      particleFields: RefArray("PackMapEnvDataPFieldV32"),
      sky: Pointer("PackMapEnvDataSkyV32"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV32"),
      water: RefArray("PackMapEnvDataWaterV32"),
      wind: RefArray("PackMapEnvDataWindV32"),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV32"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV32: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV32"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV32")
  }
};

export const V33 = {
  chunkName: "env",
  name: "PackMapEnvironmentV33",
  version: 33,
  definitions: {
    PackMapEnvDataLocalV33: {
      lighting: DynArray("PackMapEnvDataLightingV33"),
      clouds: Pointer("PackMapEnvDataCloudsV33"),
      effect: RefArray("PackMapEnvDataEffectV33"),
      haze: RefArray("PackMapEnvDataHazeV33"),
      particleFields: RefArray("PackMapEnvDataPFieldV33"),
      sky: Pointer("PackMapEnvDataSkyV33"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV33"),
      water: RefArray("PackMapEnvDataWaterV33"),
      wind: RefArray("PackMapEnvDataWindV33"),
      name: RefString16(),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV33: {
      lights: RefArray("PackMapEnvDataLightV33")
    },
    PackMapEnvDataLightV33: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV33: {
      layers: DynArray("PackMapEnvDataLayerV33")
    },
    PackMapEnvDataLayerV33: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV33"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV33: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV33: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32
    },
    PackMapEnvDataHazeV33: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV33: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataSkyV33: {
      flags: Uint8,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV33: {
      cards: DynArray("PackMapEnvDataSkyCardV33")
    },
    PackMapEnvDataSkyCardV33: {
      day: "PackMapEnvDataSkyCardAttributesV33",
      night: "PackMapEnvDataSkyCardAttributesV33",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV33: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV33: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename()
    },
    PackMapEnvDataWindV33: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV33: {
      lighting: DynArray("PackMapEnvDataLightingV33"),
      clouds: Pointer("PackMapEnvDataCloudsV33"),
      effect: RefArray("PackMapEnvDataEffectV33"),
      haze: RefArray("PackMapEnvDataHazeV33"),
      particleFields: RefArray("PackMapEnvDataPFieldV33"),
      sky: Pointer("PackMapEnvDataSkyV33"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV33"),
      water: RefArray("PackMapEnvDataWaterV33"),
      wind: RefArray("PackMapEnvDataWindV33"),
      name: RefString16(),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV33"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV33: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV33"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV33")
  }
};

export const V34 = {
  chunkName: "env",
  name: "PackMapEnvironmentV34",
  version: 34,
  definitions: {
    PackMapEnvDataLocalV34: {
      lighting: DynArray("PackMapEnvDataLightingV34"),
      clouds: Pointer("PackMapEnvDataCloudsV34"),
      effect: RefArray("PackMapEnvDataEffectV34"),
      haze: RefArray("PackMapEnvDataHazeV34"),
      particleFields: RefArray("PackMapEnvDataPFieldV34"),
      sky: Pointer("PackMapEnvDataSkyV34"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV34"),
      water: RefArray("PackMapEnvDataWaterV34"),
      wind: RefArray("PackMapEnvDataWindV34"),
      name: RefString16(),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV34: {
      lights: RefArray("PackMapEnvDataLightV34")
    },
    PackMapEnvDataLightV34: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV34: {
      layers: DynArray("PackMapEnvDataLayerV34")
    },
    PackMapEnvDataLayerV34: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV34"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV34: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV34: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32
    },
    PackMapEnvDataHazeV34: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV34: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataSkyV34: {
      flags: Uint8,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV34: {
      cards: DynArray("PackMapEnvDataSkyCardV34")
    },
    PackMapEnvDataSkyCardV34: {
      day: "PackMapEnvDataSkyCardAttributesV34",
      night: "PackMapEnvDataSkyCardAttributesV34",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV34: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV34: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename()
    },
    PackMapEnvDataWindV34: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV34: {
      lighting: DynArray("PackMapEnvDataLightingV34"),
      clouds: Pointer("PackMapEnvDataCloudsV34"),
      effect: RefArray("PackMapEnvDataEffectV34"),
      haze: RefArray("PackMapEnvDataHazeV34"),
      particleFields: RefArray("PackMapEnvDataPFieldV34"),
      sky: Pointer("PackMapEnvDataSkyV34"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV34"),
      water: RefArray("PackMapEnvDataWaterV34"),
      wind: RefArray("PackMapEnvDataWindV34"),
      name: RefString16(),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV34"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV34: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV34"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV34")
  }
};

export const V35 = {
  chunkName: "env",
  name: "PackMapEnvironmentV35",
  version: 35,
  definitions: {
    PackMapEnvDataLocalV35: {
      lighting: DynArray("PackMapEnvDataLightingV35"),
      clouds: Pointer("PackMapEnvDataCloudsV35"),
      effect: RefArray("PackMapEnvDataEffectV35"),
      haze: RefArray("PackMapEnvDataHazeV35"),
      particleFields: RefArray("PackMapEnvDataPFieldV35"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV6"),
      sky: Pointer("PackMapEnvDataSkyV35"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV35"),
      water: RefArray("PackMapEnvDataWaterV35"),
      wind: RefArray("PackMapEnvDataWindV35"),
      name: RefString16(),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV35: {
      lights: RefArray("PackMapEnvDataLightV35")
    },
    PackMapEnvDataLightV35: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV35: {
      layers: DynArray("PackMapEnvDataLayerV35")
    },
    PackMapEnvDataLayerV35: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV35"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV35: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV35: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32
    },
    PackMapEnvDataHazeV35: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV35: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV6: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV35: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV35: {
      cards: DynArray("PackMapEnvDataSkyCardV35")
    },
    PackMapEnvDataSkyCardV35: {
      day: "PackMapEnvDataSkyCardAttributesV35",
      night: "PackMapEnvDataSkyCardAttributesV35",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV35: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV35: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename()
    },
    PackMapEnvDataWindV35: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV35: {
      lighting: DynArray("PackMapEnvDataLightingV35"),
      clouds: Pointer("PackMapEnvDataCloudsV35"),
      effect: RefArray("PackMapEnvDataEffectV35"),
      haze: RefArray("PackMapEnvDataHazeV35"),
      particleFields: RefArray("PackMapEnvDataPFieldV35"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV6"),
      sky: Pointer("PackMapEnvDataSkyV35"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV35"),
      water: RefArray("PackMapEnvDataWaterV35"),
      wind: RefArray("PackMapEnvDataWindV35"),
      name: RefString16(),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV35"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV35: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV35"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV35")
  }
};

export const V36 = {
  chunkName: "env",
  name: "PackMapEnvironmentV36",
  version: 36,
  definitions: {
    PackMapEnvDataLocalV36: {
      lighting: DynArray("PackMapEnvDataLightingV36"),
      clouds: Pointer("PackMapEnvDataCloudsV36"),
      effect: RefArray("PackMapEnvDataEffectV36"),
      haze: RefArray("PackMapEnvDataHazeV36"),
      particleFields: RefArray("PackMapEnvDataPFieldV36"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV7"),
      sky: Pointer("PackMapEnvDataSkyV36"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV36"),
      water: RefArray("PackMapEnvDataWaterV36"),
      wind: RefArray("PackMapEnvDataWindV36"),
      name: RefString16(),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV36: {
      lights: RefArray("PackMapEnvDataLightV36")
    },
    PackMapEnvDataLightV36: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV36: {
      layers: DynArray("PackMapEnvDataLayerV36")
    },
    PackMapEnvDataLayerV36: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV36"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV36: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV36: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32
    },
    PackMapEnvDataHazeV36: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV36: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV7: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV36: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV36: {
      cards: DynArray("PackMapEnvDataSkyCardV36")
    },
    PackMapEnvDataSkyCardV36: {
      day: "PackMapEnvDataSkyCardAttributesV36",
      night: "PackMapEnvDataSkyCardAttributesV36",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV36: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV36: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename(),
      depthAttenuation: Float32
    },
    PackMapEnvDataWindV36: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV36: {
      lighting: DynArray("PackMapEnvDataLightingV36"),
      clouds: Pointer("PackMapEnvDataCloudsV36"),
      effect: RefArray("PackMapEnvDataEffectV36"),
      haze: RefArray("PackMapEnvDataHazeV36"),
      particleFields: RefArray("PackMapEnvDataPFieldV36"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV7"),
      sky: Pointer("PackMapEnvDataSkyV36"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV36"),
      water: RefArray("PackMapEnvDataWaterV36"),
      wind: RefArray("PackMapEnvDataWindV36"),
      name: RefString16(),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV36"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV36: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV36"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV36")
  }
};

export const V37 = {
  chunkName: "env",
  name: "PackMapEnvironmentV37",
  version: 37,
  definitions: {
    PackMapEnvDataLocalV37: {
      lighting: DynArray("PackMapEnvDataLightingV37"),
      clouds: Pointer("PackMapEnvDataCloudsV37"),
      effect: RefArray("PackMapEnvDataEffectV37"),
      haze: RefArray("PackMapEnvDataHazeV37"),
      particleFields: RefArray("PackMapEnvDataPFieldV37"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV8"),
      sky: Pointer("PackMapEnvDataSkyV37"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV37"),
      water: RefArray("PackMapEnvDataWaterV37"),
      wind: RefArray("PackMapEnvDataWindV37"),
      name: RefString16(),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV37: {
      lights: RefArray("PackMapEnvDataLightV37")
    },
    PackMapEnvDataLightV37: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV37: {
      layers: DynArray("PackMapEnvDataLayerV37")
    },
    PackMapEnvDataLayerV37: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV37"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV37: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV37: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32
    },
    PackMapEnvDataHazeV37: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV37: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV8: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV37: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV37: {
      cards: DynArray("PackMapEnvDataSkyCardV37")
    },
    PackMapEnvDataSkyCardV37: {
      day: "PackMapEnvDataSkyCardAttributesV37",
      night: "PackMapEnvDataSkyCardAttributesV37",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV37: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV37: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename(),
      depthAttenuation: Float32
    },
    PackMapEnvDataWindV37: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV37: {
      lighting: DynArray("PackMapEnvDataLightingV37"),
      clouds: Pointer("PackMapEnvDataCloudsV37"),
      effect: RefArray("PackMapEnvDataEffectV37"),
      haze: RefArray("PackMapEnvDataHazeV37"),
      particleFields: RefArray("PackMapEnvDataPFieldV37"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV8"),
      sky: Pointer("PackMapEnvDataSkyV37"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV37"),
      water: RefArray("PackMapEnvDataWaterV37"),
      wind: RefArray("PackMapEnvDataWindV37"),
      name: RefString16(),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV37"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV37: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV37"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV37")
  }
};

export const V38 = {
  chunkName: "env",
  name: "PackMapEnvironmentV38",
  version: 38,
  definitions: {
    PackMapEnvDataLocalV38: {
      lighting: DynArray("PackMapEnvDataLightingV38"),
      clouds: Pointer("PackMapEnvDataCloudsV38"),
      effect: RefArray("PackMapEnvDataEffectV38"),
      haze: RefArray("PackMapEnvDataHazeV38"),
      particleFields: RefArray("PackMapEnvDataPFieldV38"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV9"),
      sky: Pointer("PackMapEnvDataSkyV38"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV38"),
      water: RefArray("PackMapEnvDataWaterV38"),
      wind: RefArray("PackMapEnvDataWindV38"),
      name: RefString16(),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2))
    },
    PackMapEnvDataLightingV38: {
      lights: RefArray("PackMapEnvDataLightV38")
    },
    PackMapEnvDataLightV38: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataCloudsV38: {
      layers: DynArray("PackMapEnvDataLayerV38")
    },
    PackMapEnvDataLayerV38: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV38"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV38: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV38: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV38: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV38: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV9: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV38: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV38: {
      cards: DynArray("PackMapEnvDataSkyCardV38")
    },
    PackMapEnvDataSkyCardV38: {
      day: "PackMapEnvDataSkyCardAttributesV38",
      night: "PackMapEnvDataSkyCardAttributesV38",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV38: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV38: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename(),
      depthAttenuation: Float32
    },
    PackMapEnvDataWindV38: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV38: {
      lighting: DynArray("PackMapEnvDataLightingV38"),
      clouds: Pointer("PackMapEnvDataCloudsV38"),
      effect: RefArray("PackMapEnvDataEffectV38"),
      haze: RefArray("PackMapEnvDataHazeV38"),
      particleFields: RefArray("PackMapEnvDataPFieldV38"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV9"),
      sky: Pointer("PackMapEnvDataSkyV38"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV38"),
      water: RefArray("PackMapEnvDataWaterV38"),
      wind: RefArray("PackMapEnvDataWindV38"),
      name: RefString16(),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV38"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV38: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV38"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV38")
  }
};

export const V39 = {
  chunkName: "env",
  name: "PackMapEnvironmentV39",
  version: 39,
  definitions: {
    PackMapEnvDataLocalV39: {
      lighting: DynArray("PackMapEnvDataLightingV39"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV10"),
      clouds: Pointer("PackMapEnvDataCloudsV39"),
      effect: RefArray("PackMapEnvDataEffectV39"),
      haze: RefArray("PackMapEnvDataHazeV39"),
      particleFields: RefArray("PackMapEnvDataPFieldV39"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV10"),
      sky: Pointer("PackMapEnvDataSkyV39"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV39"),
      water: RefArray("PackMapEnvDataWaterV39"),
      wind: RefArray("PackMapEnvDataWindV39"),
      name: RefString16(),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV39: {
      lights: RefArray("PackMapEnvDataLightV39")
    },
    PackMapEnvDataLightV39: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV10: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV39: {
      layers: DynArray("PackMapEnvDataLayerV39")
    },
    PackMapEnvDataLayerV39: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV39"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV39: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV39: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV39: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV39: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV10: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV39: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV39: {
      cards: DynArray("PackMapEnvDataSkyCardV39")
    },
    PackMapEnvDataSkyCardV39: {
      day: "PackMapEnvDataSkyCardAttributesV39",
      night: "PackMapEnvDataSkyCardAttributesV39",
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV39: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV39: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename(),
      depthAttenuation: Float32
    },
    PackMapEnvDataWindV39: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV39: {
      lighting: DynArray("PackMapEnvDataLightingV39"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV10"),
      clouds: Pointer("PackMapEnvDataCloudsV39"),
      effect: RefArray("PackMapEnvDataEffectV39"),
      haze: RefArray("PackMapEnvDataHazeV39"),
      particleFields: RefArray("PackMapEnvDataPFieldV39"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV10"),
      sky: Pointer("PackMapEnvDataSkyV39"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV39"),
      water: RefArray("PackMapEnvDataWaterV39"),
      wind: RefArray("PackMapEnvDataWindV39"),
      name: RefString16(),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV39"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV39: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV39"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV39")
  }
};

export const V40 = {
  chunkName: "env",
  name: "PackMapEnvironmentV40",
  version: 40,
  definitions: {
    PackMapEnvDataLocalV40: {
      lighting: DynArray("PackMapEnvDataLightingV40"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV11"),
      clouds: Pointer("PackMapEnvDataCloudsV40"),
      effect: RefArray("PackMapEnvDataEffectV40"),
      haze: RefArray("PackMapEnvDataHazeV40"),
      particleFields: RefArray("PackMapEnvDataPFieldV40"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV11"),
      sky: Pointer("PackMapEnvDataSkyV40"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV40"),
      water: RefArray("PackMapEnvDataWaterV40"),
      wind: RefArray("PackMapEnvDataWindV40"),
      name: RefString16(),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV40: {
      lights: RefArray("PackMapEnvDataLightV40")
    },
    PackMapEnvDataLightV40: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV11: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV40: {
      layers: DynArray("PackMapEnvDataLayerV40")
    },
    PackMapEnvDataLayerV40: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV40"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV40: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV40: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV40: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV40: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV11: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV40: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV40: {
      cards: DynArray("PackMapEnvDataSkyCardV40")
    },
    PackMapEnvDataSkyCardV40: {
      day: "PackMapEnvDataSkyCardAttributesV40",
      night: "PackMapEnvDataSkyCardAttributesV40",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV40: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV40: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      bumpTexture: Filename(),
      patternTexture: Filename(),
      depthAttenuation: Float32
    },
    PackMapEnvDataWindV40: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV40: {
      lighting: DynArray("PackMapEnvDataLightingV40"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV11"),
      clouds: Pointer("PackMapEnvDataCloudsV40"),
      effect: RefArray("PackMapEnvDataEffectV40"),
      haze: RefArray("PackMapEnvDataHazeV40"),
      particleFields: RefArray("PackMapEnvDataPFieldV40"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV11"),
      sky: Pointer("PackMapEnvDataSkyV40"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV40"),
      water: RefArray("PackMapEnvDataWaterV40"),
      wind: RefArray("PackMapEnvDataWindV40"),
      name: RefString16(),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV40"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV40: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV40"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV40")
  }
};

export const V41 = {
  chunkName: "env",
  name: "PackMapEnvironmentV41",
  version: 41,
  definitions: {
    PackMapEnvDataLocalV41: {
      lighting: DynArray("PackMapEnvDataLightingV41"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV12"),
      clouds: Pointer("PackMapEnvDataCloudsV41"),
      effect: RefArray("PackMapEnvDataEffectV41"),
      haze: RefArray("PackMapEnvDataHazeV41"),
      particleFields: RefArray("PackMapEnvDataPFieldV41"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV12"),
      sky: Pointer("PackMapEnvDataSkyV41"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV41"),
      water: RefArray("PackMapEnvDataWaterV41"),
      wind: RefArray("PackMapEnvDataWindV41"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV41: {
      lights: RefArray("PackMapEnvDataLightV41")
    },
    PackMapEnvDataLightV41: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV12: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV41: {
      layers: DynArray("PackMapEnvDataLayerV41")
    },
    PackMapEnvDataLayerV41: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV41"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV41: {
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV41: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV41: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV41: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV12: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV41: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV41: {
      cards: DynArray("PackMapEnvDataSkyCardV41")
    },
    PackMapEnvDataSkyCardV41: {
      day: "PackMapEnvDataSkyCardAttributesV41",
      night: "PackMapEnvDataSkyCardAttributesV41",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV41: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV41: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename())
    },
    PackMapEnvDataWindV41: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV41: {
      lighting: DynArray("PackMapEnvDataLightingV41"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV12"),
      clouds: Pointer("PackMapEnvDataCloudsV41"),
      effect: RefArray("PackMapEnvDataEffectV41"),
      haze: RefArray("PackMapEnvDataHazeV41"),
      particleFields: RefArray("PackMapEnvDataPFieldV41"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV12"),
      sky: Pointer("PackMapEnvDataSkyV41"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV41"),
      water: RefArray("PackMapEnvDataWaterV41"),
      wind: RefArray("PackMapEnvDataWindV41"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV41"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV41: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV41"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV41")
  }
};

export const V42 = {
  chunkName: "env",
  name: "PackMapEnvironmentV42",
  version: 42,
  definitions: {
    PackMapEnvDataLocalV42: {
      lighting: DynArray("PackMapEnvDataLightingV42"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV13"),
      clouds: Pointer("PackMapEnvDataCloudsV42"),
      effect: RefArray("PackMapEnvDataEffectV42"),
      haze: RefArray("PackMapEnvDataHazeV42"),
      particleFields: RefArray("PackMapEnvDataPFieldV42"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV13"),
      sky: Pointer("PackMapEnvDataSkyV42"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV42"),
      water: RefArray("PackMapEnvDataWaterV42"),
      wind: RefArray("PackMapEnvDataWindV42"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV42: {
      lights: RefArray("PackMapEnvDataLightV42")
    },
    PackMapEnvDataLightV42: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV13: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV42: {
      layers: DynArray("PackMapEnvDataLayerV42")
    },
    PackMapEnvDataLayerV42: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV42"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV42: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2)
    },
    PackMapEnvDataEffectV42: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV42: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV42: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV13: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV42: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV42: {
      cards: DynArray("PackMapEnvDataSkyCardV42")
    },
    PackMapEnvDataSkyCardV42: {
      day: "PackMapEnvDataSkyCardAttributesV42",
      night: "PackMapEnvDataSkyCardAttributesV42",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV42: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackMapEnvDataWaterV42: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename())
    },
    PackMapEnvDataWindV42: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV42: {
      lighting: DynArray("PackMapEnvDataLightingV42"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV13"),
      clouds: Pointer("PackMapEnvDataCloudsV42"),
      effect: RefArray("PackMapEnvDataEffectV42"),
      haze: RefArray("PackMapEnvDataHazeV42"),
      particleFields: RefArray("PackMapEnvDataPFieldV42"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV13"),
      sky: Pointer("PackMapEnvDataSkyV42"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV42"),
      water: RefArray("PackMapEnvDataWaterV42"),
      wind: RefArray("PackMapEnvDataWindV42"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV42"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV42: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV42"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV42")
  }
};

export const V43 = {
  chunkName: "env",
  name: "PackMapEnvironmentV43",
  version: 43,
  definitions: {
    PackMapEnvDataLocalV43: {
      lighting: DynArray("PackMapEnvDataLightingV43"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV14"),
      clouds: Pointer("PackMapEnvDataCloudsV43"),
      effect: RefArray("PackMapEnvDataEffectV43"),
      haze: RefArray("PackMapEnvDataHazeV43"),
      particleFields: RefArray("PackMapEnvDataPFieldV43"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV14"),
      sky: Pointer("PackMapEnvDataSkyV43"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV43"),
      water: RefArray("PackMapEnvDataWaterV43"),
      wind: RefArray("PackMapEnvDataWindV43"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV43: {
      lights: RefArray("PackMapEnvDataLightV43")
    },
    PackMapEnvDataLightV43: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV14: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV43: {
      layers: DynArray("PackMapEnvDataLayerV43")
    },
    PackMapEnvDataLayerV43: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV43"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV43: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataEffectV43: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV43: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV43: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV14: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV43: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV43: {
      cards: DynArray("PackMapEnvDataSkyCardV43")
    },
    PackMapEnvDataSkyCardV43: {
      day: "PackMapEnvDataSkyCardAttributesV43",
      night: "PackMapEnvDataSkyCardAttributesV43",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV43: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV43: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV43: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV43: {
      lighting: DynArray("PackMapEnvDataLightingV43"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV14"),
      clouds: Pointer("PackMapEnvDataCloudsV43"),
      effect: RefArray("PackMapEnvDataEffectV43"),
      haze: RefArray("PackMapEnvDataHazeV43"),
      particleFields: RefArray("PackMapEnvDataPFieldV43"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV14"),
      sky: Pointer("PackMapEnvDataSkyV43"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV43"),
      water: RefArray("PackMapEnvDataWaterV43"),
      wind: RefArray("PackMapEnvDataWindV43"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV43"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV43: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV43"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV43")
  }
};

export const V44 = {
  chunkName: "env",
  name: "PackMapEnvironmentV44",
  version: 44,
  definitions: {
    PackMapEnvDataLocalV44: {
      lighting: DynArray("PackMapEnvDataLightingV44"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV15"),
      clouds: Pointer("PackMapEnvDataCloudsV44"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV15"),
      effect: RefArray("PackMapEnvDataEffectV44"),
      haze: RefArray("PackMapEnvDataHazeV44"),
      particleFields: RefArray("PackMapEnvDataPFieldV44"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV15"),
      sky: Pointer("PackMapEnvDataSkyV44"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV44"),
      water: RefArray("PackMapEnvDataWaterV44"),
      wind: RefArray("PackMapEnvDataWindV44"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV44: {
      lights: RefArray("PackMapEnvDataLightV44")
    },
    PackMapEnvDataLightV44: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV15: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV44: {
      layers: DynArray("PackMapEnvDataLayerV44")
    },
    PackMapEnvDataLayerV44: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV44"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV44: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV15: {
      range: FixedArray(Float32, 2),
      colors: FixedArray(FixedArray(Uint8, 4), 6),
      distances: FixedArray(Float32, 6)
    },
    PackMapEnvDataEffectV44: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV44: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV44: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV15: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV44: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV44: {
      cards: DynArray("PackMapEnvDataSkyCardV44")
    },
    PackMapEnvDataSkyCardV44: {
      day: "PackMapEnvDataSkyCardAttributesV44",
      night: "PackMapEnvDataSkyCardAttributesV44",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV44: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV44: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV44: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV44: {
      lighting: DynArray("PackMapEnvDataLightingV44"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV15"),
      clouds: Pointer("PackMapEnvDataCloudsV44"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV15"),
      effect: RefArray("PackMapEnvDataEffectV44"),
      haze: RefArray("PackMapEnvDataHazeV44"),
      particleFields: RefArray("PackMapEnvDataPFieldV44"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV15"),
      sky: Pointer("PackMapEnvDataSkyV44"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV44"),
      water: RefArray("PackMapEnvDataWaterV44"),
      wind: RefArray("PackMapEnvDataWindV44"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV44"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV44: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV44"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV44")
  }
};

export const V45 = {
  chunkName: "env",
  name: "PackMapEnvironmentV45",
  version: 45,
  definitions: {
    PackMapEnvDataLocalV45: {
      lighting: DynArray("PackMapEnvDataLightingV45"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV16"),
      clouds: Pointer("PackMapEnvDataCloudsV45"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV16"),
      effect: RefArray("PackMapEnvDataEffectV45"),
      haze: RefArray("PackMapEnvDataHazeV45"),
      particleFields: RefArray("PackMapEnvDataPFieldV45"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV16"),
      sky: Pointer("PackMapEnvDataSkyV45"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV45"),
      water: RefArray("PackMapEnvDataWaterV45"),
      wind: RefArray("PackMapEnvDataWindV45"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV45: {
      lights: RefArray("PackMapEnvDataLightV45")
    },
    PackMapEnvDataLightV45: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV16: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV45: {
      layers: DynArray("PackMapEnvDataLayerV45")
    },
    PackMapEnvDataLayerV45: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV45"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV45: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV16: {
      range: FixedArray(Float32, 2),
      colors: FixedArray(FixedArray(Uint8, 4), 6),
      distances: FixedArray(Float32, 6)
    },
    PackMapEnvDataEffectV45: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV45: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV45: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV16: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV45: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV45: {
      cards: DynArray("PackMapEnvDataSkyCardV45")
    },
    PackMapEnvDataSkyCardV45: {
      day: "PackMapEnvDataSkyCardAttributesV45",
      night: "PackMapEnvDataSkyCardAttributesV45",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV45: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV45: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV45: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV45: {
      lighting: DynArray("PackMapEnvDataLightingV45"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV16"),
      clouds: Pointer("PackMapEnvDataCloudsV45"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV16"),
      effect: RefArray("PackMapEnvDataEffectV45"),
      haze: RefArray("PackMapEnvDataHazeV45"),
      particleFields: RefArray("PackMapEnvDataPFieldV45"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV16"),
      sky: Pointer("PackMapEnvDataSkyV45"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV45"),
      water: RefArray("PackMapEnvDataWaterV45"),
      wind: RefArray("PackMapEnvDataWindV45"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV45"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV45: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV45"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV45")
  }
};

export const V46 = {
  chunkName: "env",
  name: "PackMapEnvironmentV46",
  version: 46,
  definitions: {
    PackMapEnvDataLocalV46: {
      lighting: DynArray("PackMapEnvDataLightingV46"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV17"),
      clouds: Pointer("PackMapEnvDataCloudsV46"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV17"),
      effect: RefArray("PackMapEnvDataEffectV46"),
      haze: RefArray("PackMapEnvDataHazeV46"),
      particleFields: RefArray("PackMapEnvDataPFieldV46"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV17"),
      sky: Pointer("PackMapEnvDataSkyV46"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV46"),
      water: RefArray("PackMapEnvDataWaterV46"),
      wind: RefArray("PackMapEnvDataWindV46"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV46: {
      lights: RefArray("PackMapEnvDataLightV46")
    },
    PackMapEnvDataLightV46: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV17: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV46: {
      layers: DynArray("PackMapEnvDataLayerV46")
    },
    PackMapEnvDataLayerV46: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV46"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV46: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV17: {
      range: FixedArray(Float32, 2),
      colors: FixedArray(FixedArray(Uint8, 4), 6),
      distances: FixedArray(Float32, 6)
    },
    PackMapEnvDataEffectV46: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV46: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV46: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV17: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV46: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV46: {
      cards: DynArray("PackMapEnvDataSkyCardV46")
    },
    PackMapEnvDataSkyCardV46: {
      day: "PackMapEnvDataSkyCardAttributesV46",
      night: "PackMapEnvDataSkyCardAttributesV46",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV46: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV46: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV46: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV46: {
      lighting: DynArray("PackMapEnvDataLightingV46"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV17"),
      clouds: Pointer("PackMapEnvDataCloudsV46"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV17"),
      effect: RefArray("PackMapEnvDataEffectV46"),
      haze: RefArray("PackMapEnvDataHazeV46"),
      particleFields: RefArray("PackMapEnvDataPFieldV46"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV17"),
      sky: Pointer("PackMapEnvDataSkyV46"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV46"),
      water: RefArray("PackMapEnvDataWaterV46"),
      wind: RefArray("PackMapEnvDataWindV46"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV46"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV46: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV46"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV46")
  }
};

export const V47 = {
  chunkName: "env",
  name: "PackMapEnvironmentV47",
  version: 47,
  definitions: {
    PackMapEnvDataLocalV47: {
      lighting: DynArray("PackMapEnvDataLightingV47"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV18"),
      clouds: Pointer("PackMapEnvDataCloudsV47"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV18"),
      effect: RefArray("PackMapEnvDataEffectV47"),
      haze: RefArray("PackMapEnvDataHazeV47"),
      particleFields: RefArray("PackMapEnvDataPFieldV47"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV18"),
      sky: Pointer("PackMapEnvDataSkyV47"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV47"),
      water: RefArray("PackMapEnvDataWaterV47"),
      wind: RefArray("PackMapEnvDataWindV47"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV47: {
      lights: RefArray("PackMapEnvDataLightV47")
    },
    PackMapEnvDataLightV47: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV18: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV47: {
      layers: DynArray("PackMapEnvDataLayerV47")
    },
    PackMapEnvDataLayerV47: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV47"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV47: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV18: {
      range: FixedArray(Float32, 2),
      colors: FixedArray(FixedArray(Uint8, 4), 6),
      distances: FixedArray(Float32, 6)
    },
    PackMapEnvDataEffectV47: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV47: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV47: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV18: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV47: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV47: {
      cards: DynArray("PackMapEnvDataSkyCardV47")
    },
    PackMapEnvDataSkyCardV47: {
      day: "PackMapEnvDataSkyCardAttributesV47",
      night: "PackMapEnvDataSkyCardAttributesV47",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV47: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV47: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV47: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV47: {
      lighting: DynArray("PackMapEnvDataLightingV47"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV18"),
      clouds: Pointer("PackMapEnvDataCloudsV47"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV18"),
      effect: RefArray("PackMapEnvDataEffectV47"),
      haze: RefArray("PackMapEnvDataHazeV47"),
      particleFields: RefArray("PackMapEnvDataPFieldV47"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV18"),
      sky: Pointer("PackMapEnvDataSkyV47"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV47"),
      water: RefArray("PackMapEnvDataWaterV47"),
      wind: RefArray("PackMapEnvDataWindV47"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV47"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV47: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV47"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV47")
  }
};

export const V48 = {
  chunkName: "env",
  name: "PackMapEnvironmentV48",
  version: 48,
  definitions: {
    PackMapEnvDataLocalV48: {
      lighting: DynArray("PackMapEnvDataLightingV48"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV19"),
      clouds: Pointer("PackMapEnvDataCloudsV48"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV19"),
      effect: RefArray("PackMapEnvDataEffectV48"),
      haze: RefArray("PackMapEnvDataHazeV48"),
      particleFields: RefArray("PackMapEnvDataPFieldV48"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV19"),
      sky: Pointer("PackMapEnvDataSkyV48"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV48"),
      water: RefArray("PackMapEnvDataWaterV48"),
      wind: RefArray("PackMapEnvDataWindV48"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV48: {
      lights: RefArray("PackMapEnvDataLightV48")
    },
    PackMapEnvDataLightV48: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharV19: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV48: {
      layers: DynArray("PackMapEnvDataLayerV48")
    },
    PackMapEnvDataLayerV48: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV48"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV48: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV19: {
      range: FixedArray(Float32, 2),
      colors: FixedArray(FixedArray(Uint8, 4), 6),
      distances: FixedArray(Float32, 6)
    },
    PackMapEnvDataEffectV48: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV48: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV48: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV19: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV48: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV48: {
      cards: DynArray("PackMapEnvDataSkyCardV48")
    },
    PackMapEnvDataSkyCardV48: {
      day: "PackMapEnvDataSkyCardAttributesV48",
      night: "PackMapEnvDataSkyCardAttributesV48",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV48: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV48: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV48: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV48: {
      lighting: DynArray("PackMapEnvDataLightingV48"),
      lightingChar: DynArray("PackMapEnvDataLightingCharV19"),
      clouds: Pointer("PackMapEnvDataCloudsV48"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV19"),
      effect: RefArray("PackMapEnvDataEffectV48"),
      haze: RefArray("PackMapEnvDataHazeV48"),
      particleFields: RefArray("PackMapEnvDataPFieldV48"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV19"),
      sky: Pointer("PackMapEnvDataSkyV48"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV48"),
      water: RefArray("PackMapEnvDataWaterV48"),
      wind: RefArray("PackMapEnvDataWindV48"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV48"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV48: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV48"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV48")
  }
};

export const V49 = {
  chunkName: "env",
  name: "PackMapEnvironmentV49",
  version: 49,
  definitions: {
    PackMapEnvDataLocalV49: {
      lighting: DynArray("PackMapEnvDataLightingV49"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV20"),
      clouds: Pointer("PackMapEnvDataCloudsV49"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV20"),
      effect: RefArray("PackMapEnvDataEffectV49"),
      haze: RefArray("PackMapEnvDataHazeV49"),
      particleFields: RefArray("PackMapEnvDataPFieldV49"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV20"),
      sky: Pointer("PackMapEnvDataSkyV49"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV49"),
      water: RefArray("PackMapEnvDataWaterV49"),
      wind: RefArray("PackMapEnvDataWindV49"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV49: {
      lights: RefArray("PackMapEnvDataLightV49")
    },
    PackMapEnvDataLightV49: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV20: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV20")
    },
    PackMapEnvDataLightingCharV20: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV49: {
      layers: DynArray("PackMapEnvDataLayerV49")
    },
    PackMapEnvDataLayerV49: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV49"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV49: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV20: {
      range: FixedArray(Float32, 2),
      colors: FixedArray(FixedArray(Uint8, 4), 6),
      distances: FixedArray(Float32, 6)
    },
    PackMapEnvDataEffectV49: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV49: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV49: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV20: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV49: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV49: {
      cards: DynArray("PackMapEnvDataSkyCardV49")
    },
    PackMapEnvDataSkyCardV49: {
      day: "PackMapEnvDataSkyCardAttributesV49",
      night: "PackMapEnvDataSkyCardAttributesV49",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV49: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV49: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV49: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV49: {
      lighting: DynArray("PackMapEnvDataLightingV49"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV20"),
      clouds: Pointer("PackMapEnvDataCloudsV49"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV20"),
      effect: RefArray("PackMapEnvDataEffectV49"),
      haze: RefArray("PackMapEnvDataHazeV49"),
      particleFields: RefArray("PackMapEnvDataPFieldV49"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV20"),
      sky: Pointer("PackMapEnvDataSkyV49"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV49"),
      water: RefArray("PackMapEnvDataWaterV49"),
      wind: RefArray("PackMapEnvDataWindV49"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV49"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV49: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV49"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV49")
  }
};

export const V50 = {
  chunkName: "env",
  name: "PackMapEnvironmentV50",
  version: 50,
  definitions: {
    PackMapEnvDataLocalV50: {
      lighting: DynArray("PackMapEnvDataLightingV50"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV21"),
      clouds: Pointer("PackMapEnvDataCloudsV50"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV21"),
      effect: RefArray("PackMapEnvDataEffectV50"),
      haze: RefArray("PackMapEnvDataHazeV50"),
      particleFields: RefArray("PackMapEnvDataPFieldV50"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV21"),
      sky: Pointer("PackMapEnvDataSkyV50"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV50"),
      water: RefArray("PackMapEnvDataWaterV50"),
      wind: RefArray("PackMapEnvDataWindV50"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV50: {
      lights: RefArray("PackMapEnvDataLightV50")
    },
    PackMapEnvDataLightV50: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV21: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV21")
    },
    PackMapEnvDataLightingCharV21: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV50: {
      layers: DynArray("PackMapEnvDataLayerV50")
    },
    PackMapEnvDataLayerV50: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV50"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV50: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV21: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV50: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV50: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV50: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV21: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV50: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV50: {
      cards: DynArray("PackMapEnvDataSkyCardV50")
    },
    PackMapEnvDataSkyCardV50: {
      day: "PackMapEnvDataSkyCardAttributesV50",
      night: "PackMapEnvDataSkyCardAttributesV50",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV50: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV50: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV50: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV50: {
      lighting: DynArray("PackMapEnvDataLightingV50"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV21"),
      clouds: Pointer("PackMapEnvDataCloudsV50"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV21"),
      effect: RefArray("PackMapEnvDataEffectV50"),
      haze: RefArray("PackMapEnvDataHazeV50"),
      particleFields: RefArray("PackMapEnvDataPFieldV50"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV21"),
      sky: Pointer("PackMapEnvDataSkyV50"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV50"),
      water: RefArray("PackMapEnvDataWaterV50"),
      wind: RefArray("PackMapEnvDataWindV50"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV50"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV50: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV50"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV50")
  }
};

export const V51 = {
  chunkName: "env",
  name: "PackMapEnvironmentV51",
  version: 51,
  definitions: {
    PackMapEnvDataLocalV51: {
      lighting: DynArray("PackMapEnvDataLightingV51"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV22"),
      clouds: Pointer("PackMapEnvDataCloudsV51"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV22"),
      effect: RefArray("PackMapEnvDataEffectV51"),
      haze: RefArray("PackMapEnvDataHazeV51"),
      particleFields: RefArray("PackMapEnvDataPFieldV51"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV22"),
      sky: Pointer("PackMapEnvDataSkyV51"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV51"),
      water: RefArray("PackMapEnvDataWaterV51"),
      wind: RefArray("PackMapEnvDataWindV51"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV51: {
      lights: RefArray("PackMapEnvDataLightV51")
    },
    PackMapEnvDataLightV51: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV22: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV22")
    },
    PackMapEnvDataLightingCharV22: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV51: {
      layers: DynArray("PackMapEnvDataLayerV51")
    },
    PackMapEnvDataLayerV51: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV51"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV51: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV22: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV51: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV51: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV51: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint8,
      lifetime: Float32,
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: Float32,
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV22: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV51: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV51: {
      cards: DynArray("PackMapEnvDataSkyCardV51")
    },
    PackMapEnvDataSkyCardV51: {
      day: "PackMapEnvDataSkyCardAttributesV51",
      night: "PackMapEnvDataSkyCardAttributesV51",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV51: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV51: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV51: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV51: {
      lighting: DynArray("PackMapEnvDataLightingV51"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV22"),
      clouds: Pointer("PackMapEnvDataCloudsV51"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV22"),
      effect: RefArray("PackMapEnvDataEffectV51"),
      haze: RefArray("PackMapEnvDataHazeV51"),
      particleFields: RefArray("PackMapEnvDataPFieldV51"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV22"),
      sky: Pointer("PackMapEnvDataSkyV51"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV51"),
      water: RefArray("PackMapEnvDataWaterV51"),
      wind: RefArray("PackMapEnvDataWindV51"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV51"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV51: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV51"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV51")
  }
};

export const V52 = {
  chunkName: "env",
  name: "PackMapEnvironmentV52",
  version: 52,
  definitions: {
    PackMapEnvDataLocalV52: {
      lighting: DynArray("PackMapEnvDataLightingV52"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV23"),
      clouds: Pointer("PackMapEnvDataCloudsV52"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV23"),
      effect: RefArray("PackMapEnvDataEffectV52"),
      haze: RefArray("PackMapEnvDataHazeV52"),
      particleFields: RefArray("PackMapEnvDataPFieldV52"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV23"),
      sky: Pointer("PackMapEnvDataSkyV52"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV52"),
      water: RefArray("PackMapEnvDataWaterV52"),
      wind: RefArray("PackMapEnvDataWindV52"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV52: {
      lights: RefArray("PackMapEnvDataLightV52")
    },
    PackMapEnvDataLightV52: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV23: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV23")
    },
    PackMapEnvDataLightingCharV23: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV52: {
      layers: DynArray("PackMapEnvDataLayerV52")
    },
    PackMapEnvDataLayerV52: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV52"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV52: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV23: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV52: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV52: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV52: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV23: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV52: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV52: {
      cards: DynArray("PackMapEnvDataSkyCardV52")
    },
    PackMapEnvDataSkyCardV52: {
      day: "PackMapEnvDataSkyCardAttributesV52",
      night: "PackMapEnvDataSkyCardAttributesV52",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV52: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV52: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV52: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV52: {
      lighting: DynArray("PackMapEnvDataLightingV52"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV23"),
      clouds: Pointer("PackMapEnvDataCloudsV52"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV23"),
      effect: RefArray("PackMapEnvDataEffectV52"),
      haze: RefArray("PackMapEnvDataHazeV52"),
      particleFields: RefArray("PackMapEnvDataPFieldV52"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV23"),
      sky: Pointer("PackMapEnvDataSkyV52"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV52"),
      water: RefArray("PackMapEnvDataWaterV52"),
      wind: RefArray("PackMapEnvDataWindV52"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV52"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV52: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV52"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV52")
  }
};

export const V53 = {
  chunkName: "env",
  name: "PackMapEnvironmentV53",
  version: 53,
  definitions: {
    PackMapEnvDataLocalV53: {
      lighting: DynArray("PackMapEnvDataLightingV53"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV24"),
      clouds: Pointer("PackMapEnvDataCloudsV53"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV24"),
      effect: RefArray("PackMapEnvDataEffectV53"),
      haze: RefArray("PackMapEnvDataHazeV53"),
      particleFields: RefArray("PackMapEnvDataPFieldV53"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV24"),
      sky: Pointer("PackMapEnvDataSkyV53"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV53"),
      water: RefArray("PackMapEnvDataWaterV53"),
      wind: RefArray("PackMapEnvDataWindV53"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV53: {
      lights: RefArray("PackMapEnvDataLightV53")
    },
    PackMapEnvDataLightV53: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV24: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV24")
    },
    PackMapEnvDataLightingCharV24: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV53: {
      layers: DynArray("PackMapEnvDataLayerV53")
    },
    PackMapEnvDataLayerV53: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV53"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV53: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV24: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV53: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV53: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV53: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV24: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV53: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV53: {
      cards: DynArray("PackMapEnvDataSkyCardV53")
    },
    PackMapEnvDataSkyCardV53: {
      day: "PackMapEnvDataSkyCardAttributesV53",
      night: "PackMapEnvDataSkyCardAttributesV53",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV53: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV53: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV53: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV53: {
      lighting: DynArray("PackMapEnvDataLightingV53"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV24"),
      clouds: Pointer("PackMapEnvDataCloudsV53"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV24"),
      effect: RefArray("PackMapEnvDataEffectV53"),
      haze: RefArray("PackMapEnvDataHazeV53"),
      particleFields: RefArray("PackMapEnvDataPFieldV53"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV24"),
      sky: Pointer("PackMapEnvDataSkyV53"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV53"),
      water: RefArray("PackMapEnvDataWaterV53"),
      wind: RefArray("PackMapEnvDataWindV53"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV53"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV53: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV53"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV53")
  }
};

export const V54 = {
  chunkName: "env",
  name: "PackMapEnvironmentV54",
  version: 54,
  definitions: {
    PackMapEnvDataLocalV54: {
      lighting: DynArray("PackMapEnvDataLightingV54"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV25"),
      clouds: Pointer("PackMapEnvDataCloudsV54"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV25"),
      effect: RefArray("PackMapEnvDataEffectV54"),
      haze: RefArray("PackMapEnvDataHazeV54"),
      particleFields: RefArray("PackMapEnvDataPFieldV54"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV25"),
      sky: Pointer("PackMapEnvDataSkyV54"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV54"),
      water: RefArray("PackMapEnvDataWaterV54"),
      wind: RefArray("PackMapEnvDataWindV54"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV54: {
      lights: RefArray("PackMapEnvDataLightV54")
    },
    PackMapEnvDataLightV54: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV25: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV25")
    },
    PackMapEnvDataLightingCharV25: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV54: {
      layers: DynArray("PackMapEnvDataLayerV54")
    },
    PackMapEnvDataLayerV54: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV54"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV54: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV25: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV54: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV54: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV54: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV25: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV54: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV54: {
      cards: DynArray("PackMapEnvDataSkyCardV54")
    },
    PackMapEnvDataSkyCardV54: {
      day: "PackMapEnvDataSkyCardAttributesV54",
      night: "PackMapEnvDataSkyCardAttributesV54",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV54: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataWaterV54: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV54: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV54: {
      lighting: DynArray("PackMapEnvDataLightingV54"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV25"),
      clouds: Pointer("PackMapEnvDataCloudsV54"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV25"),
      effect: RefArray("PackMapEnvDataEffectV54"),
      haze: RefArray("PackMapEnvDataHazeV54"),
      particleFields: RefArray("PackMapEnvDataPFieldV54"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV25"),
      sky: Pointer("PackMapEnvDataSkyV54"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV54"),
      water: RefArray("PackMapEnvDataWaterV54"),
      wind: RefArray("PackMapEnvDataWindV54"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV54"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV54: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV54"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV54")
  }
};

export const V55 = {
  chunkName: "env",
  name: "PackMapEnvironmentV55",
  version: 55,
  definitions: {
    PackMapEnvDataLocalV55: {
      lighting: DynArray("PackMapEnvDataLightingV55"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV26"),
      clouds: Pointer("PackMapEnvDataCloudsV55"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV26"),
      effect: RefArray("PackMapEnvDataEffectV55"),
      haze: RefArray("PackMapEnvDataHazeV55"),
      particleFields: RefArray("PackMapEnvDataPFieldV55"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV26"),
      sky: Pointer("PackMapEnvDataSkyV55"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV55"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV26"),
      water: RefArray("PackMapEnvDataWaterV55"),
      wind: RefArray("PackMapEnvDataWindV55"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV55: {
      lights: RefArray("PackMapEnvDataLightV55")
    },
    PackMapEnvDataLightV55: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV26: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV26")
    },
    PackMapEnvDataLightingCharV26: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV55: {
      layers: DynArray("PackMapEnvDataLayerV55")
    },
    PackMapEnvDataLayerV55: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV55"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV55: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV26: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV55: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV55: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV55: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV26: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV55: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV55: {
      cards: DynArray("PackMapEnvDataSkyCardV55")
    },
    PackMapEnvDataSkyCardV55: {
      day: "PackMapEnvDataSkyCardAttributesV55",
      night: "PackMapEnvDataSkyCardAttributesV55",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV55: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV26: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV26"),
      targetVolume: Uint64
    },
    PackMapEnvDataSpawnListV26: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV26")
    },
    PackMapEnvDataSpawnModelDataV26: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      probability: Float32,
      delay: Float32,
      maxConcurrent: Uint16,
      flags: Uint32,
      modelFile: RefString16()
    },
    PackMapEnvDataWaterV55: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV55: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV55: {
      lighting: DynArray("PackMapEnvDataLightingV55"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV26"),
      clouds: Pointer("PackMapEnvDataCloudsV55"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV26"),
      effect: RefArray("PackMapEnvDataEffectV55"),
      haze: RefArray("PackMapEnvDataHazeV55"),
      particleFields: RefArray("PackMapEnvDataPFieldV55"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV26"),
      sky: Pointer("PackMapEnvDataSkyV55"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV55"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV26"),
      water: RefArray("PackMapEnvDataWaterV55"),
      wind: RefArray("PackMapEnvDataWindV55"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV55"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV55: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV55"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV55")
  }
};

export const V56 = {
  chunkName: "env",
  name: "PackMapEnvironmentV56",
  version: 56,
  definitions: {
    PackMapEnvDataLocalV56: {
      lighting: DynArray("PackMapEnvDataLightingV56"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV27"),
      clouds: Pointer("PackMapEnvDataCloudsV56"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV27"),
      effect: RefArray("PackMapEnvDataEffectV56"),
      haze: RefArray("PackMapEnvDataHazeV56"),
      particleFields: RefArray("PackMapEnvDataPFieldV56"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV27"),
      sky: Pointer("PackMapEnvDataSkyV56"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV56"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV27"),
      water: RefArray("PackMapEnvDataWaterV56"),
      wind: RefArray("PackMapEnvDataWindV56"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV56: {
      lights: RefArray("PackMapEnvDataLightV56")
    },
    PackMapEnvDataLightV56: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV27: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV27")
    },
    PackMapEnvDataLightingCharV27: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV56: {
      layers: DynArray("PackMapEnvDataLayerV56")
    },
    PackMapEnvDataLayerV56: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV56"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV56: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV27: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV56: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV56: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV56: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV27: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV56: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV56: {
      cards: DynArray("PackMapEnvDataSkyCardV56")
    },
    PackMapEnvDataSkyCardV56: {
      day: "PackMapEnvDataSkyCardAttributesV56",
      night: "PackMapEnvDataSkyCardAttributesV56",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV56: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV27: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV27"),
      targetVolume: Uint64
    },
    PackMapEnvDataSpawnListV27: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV27")
    },
    PackMapEnvDataSpawnModelDataV27: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: RefString16(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV56: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV56: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV56: {
      lighting: DynArray("PackMapEnvDataLightingV56"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV27"),
      clouds: Pointer("PackMapEnvDataCloudsV56"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV27"),
      effect: RefArray("PackMapEnvDataEffectV56"),
      haze: RefArray("PackMapEnvDataHazeV56"),
      particleFields: RefArray("PackMapEnvDataPFieldV56"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV27"),
      sky: Pointer("PackMapEnvDataSkyV56"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV56"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV27"),
      water: RefArray("PackMapEnvDataWaterV56"),
      wind: RefArray("PackMapEnvDataWindV56"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV56"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV56: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV56"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV56")
  }
};

export const V57 = {
  chunkName: "env",
  name: "PackMapEnvironmentV57",
  version: 57,
  definitions: {
    PackMapEnvDataLocalV57: {
      lighting: DynArray("PackMapEnvDataLightingV57"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV28"),
      clouds: Pointer("PackMapEnvDataCloudsV57"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV28"),
      effect: RefArray("PackMapEnvDataEffectV57"),
      haze: RefArray("PackMapEnvDataHazeV57"),
      particleFields: RefArray("PackMapEnvDataPFieldV57"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV28"),
      sky: Pointer("PackMapEnvDataSkyV57"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV57"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV28"),
      water: RefArray("PackMapEnvDataWaterV57"),
      wind: RefArray("PackMapEnvDataWindV57"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV57: {
      lights: RefArray("PackMapEnvDataLightV57")
    },
    PackMapEnvDataLightV57: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV28: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV28")
    },
    PackMapEnvDataLightingCharV28: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV57: {
      layers: DynArray("PackMapEnvDataLayerV57")
    },
    PackMapEnvDataLayerV57: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV57"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV57: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV28: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV57: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV57: {
      distColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV57: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV28: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV57: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV57: {
      cards: DynArray("PackMapEnvDataSkyCardV57")
    },
    PackMapEnvDataSkyCardV57: {
      day: "PackMapEnvDataSkyCardAttributesV57",
      night: "PackMapEnvDataSkyCardAttributesV57",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV57: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV28: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV28"),
      targetVolume: Uint64
    },
    PackMapEnvDataSpawnListV28: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV28")
    },
    PackMapEnvDataSpawnModelDataV28: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: RefString16(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV57: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV57: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV57: {
      lighting: DynArray("PackMapEnvDataLightingV57"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV28"),
      clouds: Pointer("PackMapEnvDataCloudsV57"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV28"),
      effect: RefArray("PackMapEnvDataEffectV57"),
      haze: RefArray("PackMapEnvDataHazeV57"),
      particleFields: RefArray("PackMapEnvDataPFieldV57"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV28"),
      sky: Pointer("PackMapEnvDataSkyV57"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV57"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV28"),
      water: RefArray("PackMapEnvDataWaterV57"),
      wind: RefArray("PackMapEnvDataWindV57"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV57"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV57: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV57"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV57")
  }
};

export const V58 = {
  chunkName: "env",
  name: "PackMapEnvironmentV58",
  version: 58,
  definitions: {
    PackMapEnvDataLocalV58: {
      lighting: DynArray("PackMapEnvDataLightingV58"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV29"),
      clouds: Pointer("PackMapEnvDataCloudsV58"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV29"),
      effect: RefArray("PackMapEnvDataEffectV58"),
      haze: RefArray("PackMapEnvDataHazeV58"),
      particleFields: RefArray("PackMapEnvDataPFieldV58"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV29"),
      sky: Pointer("PackMapEnvDataSkyV58"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV58"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV29"),
      water: RefArray("PackMapEnvDataWaterV58"),
      wind: RefArray("PackMapEnvDataWindV58"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV58: {
      lights: RefArray("PackMapEnvDataLightV58")
    },
    PackMapEnvDataLightV58: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV29: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV29")
    },
    PackMapEnvDataLightingCharV29: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV58: {
      layers: DynArray("PackMapEnvDataLayerV58")
    },
    PackMapEnvDataLayerV58: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV58"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV58: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV29: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV58: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV58: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV58: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV29: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV58: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV58: {
      cards: DynArray("PackMapEnvDataSkyCardV58")
    },
    PackMapEnvDataSkyCardV58: {
      day: "PackMapEnvDataSkyCardAttributesV58",
      night: "PackMapEnvDataSkyCardAttributesV58",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV58: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV29: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV29"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV29: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV29")
    },
    PackMapEnvDataSpawnModelDataV29: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: RefString16(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV58: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV58: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV58: {
      lighting: DynArray("PackMapEnvDataLightingV58"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV29"),
      clouds: Pointer("PackMapEnvDataCloudsV58"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV29"),
      effect: RefArray("PackMapEnvDataEffectV58"),
      haze: RefArray("PackMapEnvDataHazeV58"),
      particleFields: RefArray("PackMapEnvDataPFieldV58"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV29"),
      sky: Pointer("PackMapEnvDataSkyV58"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV58"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV29"),
      water: RefArray("PackMapEnvDataWaterV58"),
      wind: RefArray("PackMapEnvDataWindV58"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV58"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV58: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV58"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV58")
  }
};

export const V59 = {
  chunkName: "env",
  name: "PackMapEnvironmentV59",
  version: 59,
  definitions: {
    PackMapEnvDataLocalV59: {
      lighting: DynArray("PackMapEnvDataLightingV59"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV30"),
      clouds: Pointer("PackMapEnvDataCloudsV59"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV30"),
      effect: RefArray("PackMapEnvDataEffectV59"),
      haze: RefArray("PackMapEnvDataHazeV59"),
      particleFields: RefArray("PackMapEnvDataPFieldV59"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV30"),
      sky: Pointer("PackMapEnvDataSkyV59"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV59"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV30"),
      water: RefArray("PackMapEnvDataWaterV59"),
      wind: RefArray("PackMapEnvDataWindV59"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV59: {
      lights: RefArray("PackMapEnvDataLightV59")
    },
    PackMapEnvDataLightV59: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV30: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV30")
    },
    PackMapEnvDataLightingCharV30: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV59: {
      layers: DynArray("PackMapEnvDataLayerV59")
    },
    PackMapEnvDataLayerV59: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV59"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV59: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV30: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV59: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32
    },
    PackMapEnvDataHazeV59: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV59: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV30: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV59: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV59: {
      cards: DynArray("PackMapEnvDataSkyCardV59")
    },
    PackMapEnvDataSkyCardV59: {
      day: "PackMapEnvDataSkyCardAttributesV59",
      night: "PackMapEnvDataSkyCardAttributesV59",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV59: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV30: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV30"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV30: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV30")
    },
    PackMapEnvDataSpawnModelDataV30: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV59: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV59: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV59: {
      lighting: DynArray("PackMapEnvDataLightingV59"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV30"),
      clouds: Pointer("PackMapEnvDataCloudsV59"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV30"),
      effect: RefArray("PackMapEnvDataEffectV59"),
      haze: RefArray("PackMapEnvDataHazeV59"),
      particleFields: RefArray("PackMapEnvDataPFieldV59"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV30"),
      sky: Pointer("PackMapEnvDataSkyV59"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV59"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV30"),
      water: RefArray("PackMapEnvDataWaterV59"),
      wind: RefArray("PackMapEnvDataWindV59"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV59"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV59: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV59"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV59")
  }
};

export const V60 = {
  chunkName: "env",
  name: "PackMapEnvironmentV60",
  version: 60,
  definitions: {
    PackMapEnvDataLocalV60: {
      lighting: DynArray("PackMapEnvDataLightingV60"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV31"),
      clouds: Pointer("PackMapEnvDataCloudsV60"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV31"),
      effect: RefArray("PackMapEnvDataEffectV60"),
      haze: RefArray("PackMapEnvDataHazeV60"),
      particleFields: RefArray("PackMapEnvDataPFieldV60"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV31"),
      sky: Pointer("PackMapEnvDataSkyV60"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV60"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV31"),
      water: RefArray("PackMapEnvDataWaterV60"),
      wind: RefArray("PackMapEnvDataWindV60"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV60: {
      lights: RefArray("PackMapEnvDataLightV60")
    },
    PackMapEnvDataLightV60: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV31: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV31")
    },
    PackMapEnvDataLightingCharV31: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV60: {
      layers: DynArray("PackMapEnvDataLayerV60")
    },
    PackMapEnvDataLayerV60: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV60"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV60: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV31: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV60: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV60: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV60: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV31: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV60: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV60: {
      cards: DynArray("PackMapEnvDataSkyCardV60")
    },
    PackMapEnvDataSkyCardV60: {
      day: "PackMapEnvDataSkyCardAttributesV60",
      night: "PackMapEnvDataSkyCardAttributesV60",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV60: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV31: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV31"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV31: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV31")
    },
    PackMapEnvDataSpawnModelDataV31: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV60: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV60: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV60: {
      lighting: DynArray("PackMapEnvDataLightingV60"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV31"),
      clouds: Pointer("PackMapEnvDataCloudsV60"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV31"),
      effect: RefArray("PackMapEnvDataEffectV60"),
      haze: RefArray("PackMapEnvDataHazeV60"),
      particleFields: RefArray("PackMapEnvDataPFieldV60"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV31"),
      sky: Pointer("PackMapEnvDataSkyV60"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV60"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV31"),
      water: RefArray("PackMapEnvDataWaterV60"),
      wind: RefArray("PackMapEnvDataWindV60"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV60"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV60: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV60"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV60")
  }
};

export const V61 = {
  chunkName: "env",
  name: "PackMapEnvironmentV61",
  version: 61,
  definitions: {
    PackMapEnvDataLocalV61: {
      lighting: DynArray("PackMapEnvDataLightingV61"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV32"),
      clouds: Pointer("PackMapEnvDataCloudsV61"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV32"),
      effect: RefArray("PackMapEnvDataEffectV61"),
      haze: RefArray("PackMapEnvDataHazeV61"),
      particleFields: RefArray("PackMapEnvDataPFieldV61"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV32"),
      sky: Pointer("PackMapEnvDataSkyV61"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV61"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV32"),
      water: RefArray("PackMapEnvDataWaterV61"),
      wind: RefArray("PackMapEnvDataWindV61"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV61: {
      lights: RefArray("PackMapEnvDataLightV61")
    },
    PackMapEnvDataLightV61: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV32: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV32")
    },
    PackMapEnvDataLightingCharV32: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV61: {
      layers: DynArray("PackMapEnvDataLayerV61")
    },
    PackMapEnvDataLayerV61: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV61"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV61: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV32: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV61: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV61: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32
    },
    PackMapEnvDataPFieldV61: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV32: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV61: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV61: {
      cards: DynArray("PackMapEnvDataSkyCardV61")
    },
    PackMapEnvDataSkyCardV61: {
      day: "PackMapEnvDataSkyCardAttributesV61",
      night: "PackMapEnvDataSkyCardAttributesV61",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV61: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV32: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV32"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV32: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV32")
    },
    PackMapEnvDataSpawnModelDataV32: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV61: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV61: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV61: {
      lighting: DynArray("PackMapEnvDataLightingV61"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV32"),
      clouds: Pointer("PackMapEnvDataCloudsV61"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV32"),
      effect: RefArray("PackMapEnvDataEffectV61"),
      haze: RefArray("PackMapEnvDataHazeV61"),
      particleFields: RefArray("PackMapEnvDataPFieldV61"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV32"),
      sky: Pointer("PackMapEnvDataSkyV61"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV61"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV32"),
      water: RefArray("PackMapEnvDataWaterV61"),
      wind: RefArray("PackMapEnvDataWindV61"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV61"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV61: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV61"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV61")
  }
};

export const V62 = {
  chunkName: "env",
  name: "PackMapEnvironmentV62",
  version: 62,
  definitions: {
    PackMapEnvDataLocalV62: {
      lighting: DynArray("PackMapEnvDataLightingV62"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV33"),
      clouds: Pointer("PackMapEnvDataCloudsV62"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV33"),
      effect: RefArray("PackMapEnvDataEffectV62"),
      haze: RefArray("PackMapEnvDataHazeV62"),
      particleFields: RefArray("PackMapEnvDataPFieldV62"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV33"),
      sky: Pointer("PackMapEnvDataSkyV62"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV62"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV33"),
      water: RefArray("PackMapEnvDataWaterV62"),
      wind: RefArray("PackMapEnvDataWindV62"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV62: {
      lights: RefArray("PackMapEnvDataLightV62")
    },
    PackMapEnvDataLightV62: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV33: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV33")
    },
    PackMapEnvDataLightingCharV33: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV62: {
      layers: DynArray("PackMapEnvDataLayerV62")
    },
    PackMapEnvDataLayerV62: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV62"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV62: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV33: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV62: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV62: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV62: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV33: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV62: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV62: {
      cards: DynArray("PackMapEnvDataSkyCardV62")
    },
    PackMapEnvDataSkyCardV62: {
      day: "PackMapEnvDataSkyCardAttributesV62",
      night: "PackMapEnvDataSkyCardAttributesV62",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV62: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV33: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV33"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV33: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV33")
    },
    PackMapEnvDataSpawnModelDataV33: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV62: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4))
    },
    PackMapEnvDataWindV62: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV62: {
      lighting: DynArray("PackMapEnvDataLightingV62"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV33"),
      clouds: Pointer("PackMapEnvDataCloudsV62"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV33"),
      effect: RefArray("PackMapEnvDataEffectV62"),
      haze: RefArray("PackMapEnvDataHazeV62"),
      particleFields: RefArray("PackMapEnvDataPFieldV62"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV33"),
      sky: Pointer("PackMapEnvDataSkyV62"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV62"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV33"),
      water: RefArray("PackMapEnvDataWaterV62"),
      wind: RefArray("PackMapEnvDataWindV62"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV62"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV62: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV62"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV62")
  }
};

export const V63 = {
  chunkName: "env",
  name: "PackMapEnvironmentV63",
  version: 63,
  definitions: {
    PackMapEnvDataLocalV63: {
      lighting: DynArray("PackMapEnvDataLightingV63"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV34"),
      clouds: Pointer("PackMapEnvDataCloudsV63"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV34"),
      effect: RefArray("PackMapEnvDataEffectV63"),
      haze: RefArray("PackMapEnvDataHazeV63"),
      particleFields: RefArray("PackMapEnvDataPFieldV63"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV34"),
      sky: Pointer("PackMapEnvDataSkyV63"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV63"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV34"),
      water: RefArray("PackMapEnvDataWaterV63"),
      wind: RefArray("PackMapEnvDataWindV63"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV63: {
      lights: RefArray("PackMapEnvDataLightV63")
    },
    PackMapEnvDataLightV63: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV34: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV34")
    },
    PackMapEnvDataLightingCharV34: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV63: {
      layers: DynArray("PackMapEnvDataLayerV63")
    },
    PackMapEnvDataLayerV63: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV63"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV63: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV34: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV63: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV63: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV63: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV34: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV63: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32
    },
    PackMapEnvDataSkyCardsV63: {
      cards: DynArray("PackMapEnvDataSkyCardV63")
    },
    PackMapEnvDataSkyCardV63: {
      day: "PackMapEnvDataSkyCardAttributesV63",
      night: "PackMapEnvDataSkyCardAttributesV63",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV63: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV34: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV34"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV34: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV34")
    },
    PackMapEnvDataSpawnModelDataV34: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV63: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV63: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8
    },
    PackMapEnvDataGlobalV63: {
      lighting: DynArray("PackMapEnvDataLightingV63"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV34"),
      clouds: Pointer("PackMapEnvDataCloudsV63"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV34"),
      effect: RefArray("PackMapEnvDataEffectV63"),
      haze: RefArray("PackMapEnvDataHazeV63"),
      particleFields: RefArray("PackMapEnvDataPFieldV63"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV34"),
      sky: Pointer("PackMapEnvDataSkyV63"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV63"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV34"),
      water: RefArray("PackMapEnvDataWaterV63"),
      wind: RefArray("PackMapEnvDataWindV63"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV63"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV63: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV63"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV63")
  }
};

export const V64 = {
  chunkName: "env",
  name: "PackMapEnvironmentV64",
  version: 64,
  definitions: {
    PackMapEnvDataLocalV64: {
      lighting: DynArray("PackMapEnvDataLightingV64"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV35"),
      clouds: Pointer("PackMapEnvDataCloudsV64"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV35"),
      effect: RefArray("PackMapEnvDataEffectV64"),
      haze: RefArray("PackMapEnvDataHazeV64"),
      particleFields: RefArray("PackMapEnvDataPFieldV64"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV35"),
      sky: Pointer("PackMapEnvDataSkyV64"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV64"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV35"),
      water: RefArray("PackMapEnvDataWaterV64"),
      wind: RefArray("PackMapEnvDataWindV64"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV64: {
      lights: RefArray("PackMapEnvDataLightV64")
    },
    PackMapEnvDataLightV64: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV35: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV35")
    },
    PackMapEnvDataLightingCharV35: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV64: {
      layers: DynArray("PackMapEnvDataLayerV64")
    },
    PackMapEnvDataLayerV64: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV64"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV64: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV35: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV64: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV64: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV64: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV35: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV64: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV64: {
      cards: DynArray("PackMapEnvDataSkyCardV64")
    },
    PackMapEnvDataSkyCardV64: {
      day: "PackMapEnvDataSkyCardAttributesV64",
      night: "PackMapEnvDataSkyCardAttributesV64",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV64: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV35: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV35"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV35: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV35")
    },
    PackMapEnvDataSpawnModelDataV35: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV64: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV64: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataGlobalV64: {
      lighting: DynArray("PackMapEnvDataLightingV64"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV35"),
      clouds: Pointer("PackMapEnvDataCloudsV64"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV35"),
      effect: RefArray("PackMapEnvDataEffectV64"),
      haze: RefArray("PackMapEnvDataHazeV64"),
      particleFields: RefArray("PackMapEnvDataPFieldV64"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV35"),
      sky: Pointer("PackMapEnvDataSkyV64"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV64"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV35"),
      water: RefArray("PackMapEnvDataWaterV64"),
      wind: RefArray("PackMapEnvDataWindV64"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV64"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV64: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV64"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV64")
  }
};

export const V65 = {
  chunkName: "env",
  name: "PackMapEnvironmentV65",
  version: 65,
  definitions: {
    PackMapEnvDataLocalV65: {
      lighting: DynArray("PackMapEnvDataLightingV65"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV36"),
      clouds: Pointer("PackMapEnvDataCloudsV65"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV36"),
      effect: RefArray("PackMapEnvDataEffectV65"),
      haze: RefArray("PackMapEnvDataHazeV65"),
      particleFields: RefArray("PackMapEnvDataPFieldV65"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV36"),
      sky: Pointer("PackMapEnvDataSkyV65"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV65"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV36"),
      water: RefArray("PackMapEnvDataWaterV65"),
      wind: RefArray("PackMapEnvDataWindV65"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      center: FixedArray(Float32, 3),
      zRange: FixedArray(Float32, 2),
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      type: Uint8,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      guid: Uint64
    },
    PackMapEnvDataLightingV65: {
      lights: RefArray("PackMapEnvDataLightV65"),
      shadowInfluence: Float32
    },
    PackMapEnvDataLightV65: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV36: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV36")
    },
    PackMapEnvDataLightingCharV36: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV65: {
      layers: DynArray("PackMapEnvDataLayerV65")
    },
    PackMapEnvDataLayerV65: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV65"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV65: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV36: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV65: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV65: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV65: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV36: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV65: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV65: {
      cards: DynArray("PackMapEnvDataSkyCardV65")
    },
    PackMapEnvDataSkyCardV65: {
      day: "PackMapEnvDataSkyCardAttributesV65",
      night: "PackMapEnvDataSkyCardAttributesV65",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV65: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV36: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV36"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV36: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV36")
    },
    PackMapEnvDataSpawnModelDataV36: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV65: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV65: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataGlobalV65: {
      lighting: DynArray("PackMapEnvDataLightingV65"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV36"),
      clouds: Pointer("PackMapEnvDataCloudsV65"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV36"),
      effect: RefArray("PackMapEnvDataEffectV65"),
      haze: RefArray("PackMapEnvDataHazeV65"),
      particleFields: RefArray("PackMapEnvDataPFieldV65"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV36"),
      sky: Pointer("PackMapEnvDataSkyV65"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV65"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV36"),
      water: RefArray("PackMapEnvDataWaterV65"),
      wind: RefArray("PackMapEnvDataWindV65"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV65"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV65: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV65"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV65")
  }
};

export const V66 = {
  chunkName: "env",
  name: "PackMapEnvironmentV66",
  version: 66,
  definitions: {
    PackMapEnvDataLocalV66: {
      lighting: DynArray("PackMapEnvDataLightingV66"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV37"),
      clouds: Pointer("PackMapEnvDataCloudsV66"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV37"),
      effect: RefArray("PackMapEnvDataEffectV66"),
      haze: RefArray("PackMapEnvDataHazeV66"),
      particleFields: RefArray("PackMapEnvDataPFieldV66"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV37"),
      sky: Pointer("PackMapEnvDataSkyV66"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV66"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV37"),
      water: RefArray("PackMapEnvDataWaterV66"),
      wind: RefArray("PackMapEnvDataWindV66"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV37")
    },
    PackMapEnvDataLightingV66: {
      lights: RefArray("PackMapEnvDataLightV66"),
      shadowInfluence: Float32
    },
    PackMapEnvDataLightV66: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV37: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV37")
    },
    PackMapEnvDataLightingCharV37: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV66: {
      layers: DynArray("PackMapEnvDataLayerV66")
    },
    PackMapEnvDataLayerV66: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV66"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV66: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV37: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV66: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV66: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV66: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV37: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV66: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV66: {
      cards: DynArray("PackMapEnvDataSkyCardV66")
    },
    PackMapEnvDataSkyCardV66: {
      day: "PackMapEnvDataSkyCardAttributesV66",
      night: "PackMapEnvDataSkyCardAttributesV66",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV66: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV37: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV37"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV37: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV37")
    },
    PackMapEnvDataSpawnModelDataV37: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV66: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV66: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataShapeV37: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV66: {
      lighting: DynArray("PackMapEnvDataLightingV66"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV37"),
      clouds: Pointer("PackMapEnvDataCloudsV66"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV37"),
      effect: RefArray("PackMapEnvDataEffectV66"),
      haze: RefArray("PackMapEnvDataHazeV66"),
      particleFields: RefArray("PackMapEnvDataPFieldV66"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV37"),
      sky: Pointer("PackMapEnvDataSkyV66"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV66"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV37"),
      water: RefArray("PackMapEnvDataWaterV66"),
      wind: RefArray("PackMapEnvDataWindV66"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV66"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV66: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV66"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV66")
  }
};

export const V67 = {
  chunkName: "env",
  name: "PackMapEnvironmentV67",
  version: 67,
  definitions: {
    PackMapEnvDataLocalV67: {
      lighting: DynArray("PackMapEnvDataLightingV67"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV38"),
      clouds: Pointer("PackMapEnvDataCloudsV67"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV38"),
      effect: RefArray("PackMapEnvDataEffectV67"),
      haze: RefArray("PackMapEnvDataHazeV67"),
      particleFields: RefArray("PackMapEnvDataPFieldV67"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV38"),
      sky: Pointer("PackMapEnvDataSkyV67"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV67"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV38"),
      water: RefArray("PackMapEnvDataWaterV67"),
      wind: RefArray("PackMapEnvDataWindV67"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV38")
    },
    PackMapEnvDataLightingV67: {
      lights: RefArray("PackMapEnvDataLightV67"),
      shadowInfluence: Float32
    },
    PackMapEnvDataLightV67: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV38: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV38")
    },
    PackMapEnvDataLightingCharV38: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV67: {
      layers: DynArray("PackMapEnvDataLayerV67")
    },
    PackMapEnvDataLayerV67: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV67"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV67: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV38: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV67: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV67: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV67: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV38: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV67: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV67: {
      cards: DynArray("PackMapEnvDataSkyCardV67")
    },
    PackMapEnvDataSkyCardV67: {
      day: "PackMapEnvDataSkyCardAttributesV67",
      night: "PackMapEnvDataSkyCardAttributesV67",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV67: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV38: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV38"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV38: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV38")
    },
    PackMapEnvDataSpawnModelDataV38: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      animSequence: Uint64,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV67: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV67: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataShapeV38: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV67: {
      lighting: DynArray("PackMapEnvDataLightingV67"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV38"),
      clouds: Pointer("PackMapEnvDataCloudsV67"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV38"),
      effect: RefArray("PackMapEnvDataEffectV67"),
      haze: RefArray("PackMapEnvDataHazeV67"),
      particleFields: RefArray("PackMapEnvDataPFieldV67"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV38"),
      sky: Pointer("PackMapEnvDataSkyV67"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV67"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV38"),
      water: RefArray("PackMapEnvDataWaterV67"),
      wind: RefArray("PackMapEnvDataWindV67"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV67"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV67: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV67"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV67")
  }
};

export const V68 = {
  chunkName: "env",
  name: "PackMapEnvironmentV68",
  version: 68,
  definitions: {
    PackMapEnvDataLocalV68: {
      lighting: DynArray("PackMapEnvDataLightingV68"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV39"),
      clouds: Pointer("PackMapEnvDataCloudsV68"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV39"),
      effect: RefArray("PackMapEnvDataEffectV68"),
      haze: RefArray("PackMapEnvDataHazeV68"),
      particleFields: RefArray("PackMapEnvDataPFieldV68"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV39"),
      sky: Pointer("PackMapEnvDataSkyV68"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV68"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV39"),
      water: RefArray("PackMapEnvDataWaterV68"),
      wind: RefArray("PackMapEnvDataWindV68"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV39")
    },
    PackMapEnvDataLightingV68: {
      lights: RefArray("PackMapEnvDataLightV68"),
      shadowInfluence: Float32,
      backlight: Pointer("PackMapEnvDataLightV68")
    },
    PackMapEnvDataLightV68: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV39: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV39")
    },
    PackMapEnvDataLightingCharV39: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV68: {
      layers: DynArray("PackMapEnvDataLayerV68")
    },
    PackMapEnvDataLayerV68: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV68"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV68: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV39: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV68: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV68: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV68: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV39: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV68: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV68: {
      cards: DynArray("PackMapEnvDataSkyCardV68")
    },
    PackMapEnvDataSkyCardV68: {
      day: "PackMapEnvDataSkyCardAttributesV68",
      night: "PackMapEnvDataSkyCardAttributesV68",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV68: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV39: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV39"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV39: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV39")
    },
    PackMapEnvDataSpawnModelDataV39: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      animSequence: Uint64,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV68: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV68: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataShapeV39: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV68: {
      lighting: DynArray("PackMapEnvDataLightingV68"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV39"),
      clouds: Pointer("PackMapEnvDataCloudsV68"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV39"),
      effect: RefArray("PackMapEnvDataEffectV68"),
      haze: RefArray("PackMapEnvDataHazeV68"),
      particleFields: RefArray("PackMapEnvDataPFieldV68"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV39"),
      sky: Pointer("PackMapEnvDataSkyV68"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV68"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV39"),
      water: RefArray("PackMapEnvDataWaterV68"),
      wind: RefArray("PackMapEnvDataWindV68"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV68"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV68: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV68"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV68")
  }
};

export const V69 = {
  chunkName: "env",
  name: "PackMapEnvironmentV69",
  version: 69,
  definitions: {
    PackMapEnvDataLocalV69: {
      lighting: DynArray("PackMapEnvDataLightingV69"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV40"),
      clouds: Pointer("PackMapEnvDataCloudsV69"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV40"),
      effect: RefArray("PackMapEnvDataEffectV69"),
      haze: RefArray("PackMapEnvDataHazeV69"),
      particleFields: RefArray("PackMapEnvDataPFieldV69"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV40"),
      sky: Pointer("PackMapEnvDataSkyV69"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV69"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV40"),
      water: RefArray("PackMapEnvDataWaterV69"),
      wind: RefArray("PackMapEnvDataWindV69"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV40")
    },
    PackMapEnvDataLightingV69: {
      lights: RefArray("PackMapEnvDataLightV69"),
      shadowInfluence: Float32
    },
    PackMapEnvDataLightV69: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV40: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV40")
    },
    PackMapEnvDataLightingCharV40: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV69: {
      layers: DynArray("PackMapEnvDataLayerV69")
    },
    PackMapEnvDataLayerV69: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV69"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV69: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV40: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV69: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV69: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV69: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Uint16,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV40: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV69: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV69: {
      cards: DynArray("PackMapEnvDataSkyCardV69")
    },
    PackMapEnvDataSkyCardV69: {
      day: "PackMapEnvDataSkyCardAttributesV69",
      night: "PackMapEnvDataSkyCardAttributesV69",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV69: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV40: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV40"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV40: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV40")
    },
    PackMapEnvDataSpawnModelDataV40: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      animSequence: Uint64,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV69: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV69: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataShapeV40: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV69: {
      lighting: DynArray("PackMapEnvDataLightingV69"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV40"),
      clouds: Pointer("PackMapEnvDataCloudsV69"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV40"),
      effect: RefArray("PackMapEnvDataEffectV69"),
      haze: RefArray("PackMapEnvDataHazeV69"),
      particleFields: RefArray("PackMapEnvDataPFieldV69"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV40"),
      sky: Pointer("PackMapEnvDataSkyV69"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV69"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV40"),
      water: RefArray("PackMapEnvDataWaterV69"),
      wind: RefArray("PackMapEnvDataWindV69"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV69"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV69: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV69"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV69")
  }
};

export const V70 = {
  chunkName: "env",
  name: "PackMapEnvironmentV70",
  version: 70,
  definitions: {
    PackMapEnvDataLocalV70: {
      lighting: DynArray("PackMapEnvDataLightingV70"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV41"),
      clouds: Pointer("PackMapEnvDataCloudsV70"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV41"),
      effect: RefArray("PackMapEnvDataEffectV70"),
      haze: RefArray("PackMapEnvDataHazeV70"),
      particleFields: RefArray("PackMapEnvDataPFieldV70"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV41"),
      sky: Pointer("PackMapEnvDataSkyV70"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV70"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV41"),
      water: RefArray("PackMapEnvDataWaterV70"),
      wind: RefArray("PackMapEnvDataWindV70"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV41")
    },
    PackMapEnvDataLightingV70: {
      lights: RefArray("PackMapEnvDataLightV70"),
      shadowInfluence: Float32
    },
    PackMapEnvDataLightV70: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV41: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV41")
    },
    PackMapEnvDataLightingCharV41: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV70: {
      layers: DynArray("PackMapEnvDataLayerV70")
    },
    PackMapEnvDataLayerV70: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV70"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV70: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV41: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV70: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV70: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV70: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Float32,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV41: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV70: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV70: {
      cards: DynArray("PackMapEnvDataSkyCardV70")
    },
    PackMapEnvDataSkyCardV70: {
      day: "PackMapEnvDataSkyCardAttributesV70",
      night: "PackMapEnvDataSkyCardAttributesV70",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV70: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV41: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV41"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV41: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV41")
    },
    PackMapEnvDataSpawnModelDataV41: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      animSequence: Uint64,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV70: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV70: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataShapeV41: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV70: {
      lighting: DynArray("PackMapEnvDataLightingV70"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV41"),
      clouds: Pointer("PackMapEnvDataCloudsV70"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV41"),
      effect: RefArray("PackMapEnvDataEffectV70"),
      haze: RefArray("PackMapEnvDataHazeV70"),
      particleFields: RefArray("PackMapEnvDataPFieldV70"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV41"),
      sky: Pointer("PackMapEnvDataSkyV70"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV70"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV41"),
      water: RefArray("PackMapEnvDataWaterV70"),
      wind: RefArray("PackMapEnvDataWindV70"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV70"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV70: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV70"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV70")
  }
};

export const V71 = {
  chunkName: "env",
  name: "PackMapEnvironmentV71",
  version: 71,
  definitions: {
    PackMapEnvDataLocalV71: {
      lighting: DynArray("PackMapEnvDataLightingV71"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV42"),
      clouds: Pointer("PackMapEnvDataCloudsV71"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV42"),
      effect: RefArray("PackMapEnvDataEffectV71"),
      haze: RefArray("PackMapEnvDataHazeV71"),
      particleFields: RefArray("PackMapEnvDataPFieldV71"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV42"),
      sky: Pointer("PackMapEnvDataSkyV71"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV71"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV42"),
      water: RefArray("PackMapEnvDataWaterV71"),
      wind: RefArray("PackMapEnvDataWindV71"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV42")
    },
    PackMapEnvDataLightingV71: {
      lights: RefArray("PackMapEnvDataLightV71"),
      shadowInfluence: Float32,
      backlightColor: FixedArray(Uint8, 3),
      backlightIntensity: Float32
    },
    PackMapEnvDataLightV71: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV42: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV42")
    },
    PackMapEnvDataLightingCharV42: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV71: {
      layers: DynArray("PackMapEnvDataLayerV71")
    },
    PackMapEnvDataLayerV71: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV71"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV71: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV42: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV71: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV71: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV71: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Float32,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV42: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV71: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV71: {
      cards: DynArray("PackMapEnvDataSkyCardV71")
    },
    PackMapEnvDataSkyCardV71: {
      day: "PackMapEnvDataSkyCardAttributesV71",
      night: "PackMapEnvDataSkyCardAttributesV71",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV71: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV42: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV42"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV42: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV42")
    },
    PackMapEnvDataSpawnModelDataV42: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      animSequence: Uint64,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV71: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV71: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataShapeV42: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV71: {
      lighting: DynArray("PackMapEnvDataLightingV71"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV42"),
      clouds: Pointer("PackMapEnvDataCloudsV71"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV42"),
      effect: RefArray("PackMapEnvDataEffectV71"),
      haze: RefArray("PackMapEnvDataHazeV71"),
      particleFields: RefArray("PackMapEnvDataPFieldV71"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV42"),
      sky: Pointer("PackMapEnvDataSkyV71"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV71"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV42"),
      water: RefArray("PackMapEnvDataWaterV71"),
      wind: RefArray("PackMapEnvDataWindV71"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV71"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV71: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV71"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV71")
  }
};

export const V72 = {
  chunkName: "env",
  name: "PackMapEnvironmentV72",
  version: 72,
  definitions: {
    PackMapEnvDataLocalV72: {
      lighting: DynArray("PackMapEnvDataLightingV72"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV43"),
      clouds: Pointer("PackMapEnvDataCloudsV72"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV43"),
      effect: RefArray("PackMapEnvDataEffectV72"),
      haze: RefArray("PackMapEnvDataHazeV72"),
      particleFields: RefArray("PackMapEnvDataPFieldV72"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV43"),
      sky: Pointer("PackMapEnvDataSkyV72"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV72"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV43"),
      water: RefArray("PackMapEnvDataWaterV72"),
      wind: RefArray("PackMapEnvDataWindV72"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      audioToken: Uint64,
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV43")
    },
    PackMapEnvDataLightingV72: {
      lights: RefArray("PackMapEnvDataLightV72"),
      shadowInfluence: Float32,
      backlightColor: FixedArray(Uint8, 3),
      backlightIntensity: Float32
    },
    PackMapEnvDataLightV72: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV43: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV43")
    },
    PackMapEnvDataLightingCharV43: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV72: {
      layers: DynArray("PackMapEnvDataLayerV72")
    },
    PackMapEnvDataLayerV72: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV72"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV72: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV43: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV72: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV72: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV72: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Float32,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV43: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV72: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV72: {
      cards: DynArray("PackMapEnvDataSkyCardV72")
    },
    PackMapEnvDataSkyCardV72: {
      day: "PackMapEnvDataSkyCardAttributesV72",
      night: "PackMapEnvDataSkyCardAttributesV72",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV72: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV43: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV43"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV43: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV43")
    },
    PackMapEnvDataSpawnModelDataV43: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      animSequence: Uint64,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV72: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV72: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataShapeV43: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV72: {
      lighting: DynArray("PackMapEnvDataLightingV72"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV43"),
      clouds: Pointer("PackMapEnvDataCloudsV72"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV43"),
      effect: RefArray("PackMapEnvDataEffectV72"),
      haze: RefArray("PackMapEnvDataHazeV72"),
      particleFields: RefArray("PackMapEnvDataPFieldV72"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV43"),
      sky: Pointer("PackMapEnvDataSkyV72"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV72"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV43"),
      water: RefArray("PackMapEnvDataWaterV72"),
      wind: RefArray("PackMapEnvDataWindV72"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      audioToken: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV72"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV72: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV72"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV72")
  }
};

export const V73 = {
  chunkName: "env",
  name: "PackMapEnvironmentV73",
  version: 73,
  definitions: {
    PackMapEnvDataLocalV73: {
      lighting: DynArray("PackMapEnvDataLightingV73"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV44"),
      clouds: Pointer("PackMapEnvDataCloudsV73"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV44"),
      effect: RefArray("PackMapEnvDataEffectV73"),
      haze: RefArray("PackMapEnvDataHazeV73"),
      particleFields: RefArray("PackMapEnvDataPFieldV73"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV44"),
      sky: Pointer("PackMapEnvDataSkyV73"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV73"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV44"),
      water: RefArray("PackMapEnvDataWaterV73"),
      wind: RefArray("PackMapEnvDataWindV73"),
      audio: RefArray("PackMapEnvDataAudioV44"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV44")
    },
    PackMapEnvDataLightingV73: {
      lights: RefArray("PackMapEnvDataLightV73"),
      shadowInfluence: Float32,
      backlightColor: FixedArray(Uint8, 3),
      backlightIntensity: Float32
    },
    PackMapEnvDataLightV73: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV44: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV44")
    },
    PackMapEnvDataLightingCharV44: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV73: {
      layers: DynArray("PackMapEnvDataLayerV73")
    },
    PackMapEnvDataLayerV73: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV73"),
      name: RefString16()
    },
    PackMapEnvDataLayerAttributesV73: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32
    },
    PackMapEnvDataColoredLightRingsV44: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV73: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV73: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV73: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Float32,
      texPath: Filename(),
      type: Uint8,
      name: RefString16()
    },
    PackMapEnvDataPFieldCutoutV44: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV73: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV73: {
      cards: DynArray("PackMapEnvDataSkyCardV73")
    },
    PackMapEnvDataSkyCardV73: {
      day: "PackMapEnvDataSkyCardAttributesV73",
      night: "PackMapEnvDataSkyCardAttributesV73",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV73: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV44: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV44"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV44: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV44")
    },
    PackMapEnvDataSpawnModelDataV44: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      animSequence: Uint64,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV73: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV73: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataAudioV44: {
      token: Uint64
    },
    PackMapEnvDataShapeV44: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV73: {
      lighting: DynArray("PackMapEnvDataLightingV73"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV44"),
      clouds: Pointer("PackMapEnvDataCloudsV73"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV44"),
      effect: RefArray("PackMapEnvDataEffectV73"),
      haze: RefArray("PackMapEnvDataHazeV73"),
      particleFields: RefArray("PackMapEnvDataPFieldV73"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV44"),
      sky: Pointer("PackMapEnvDataSkyV73"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV73"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV44"),
      water: RefArray("PackMapEnvDataWaterV73"),
      wind: RefArray("PackMapEnvDataWindV73"),
      audio: RefArray("PackMapEnvDataAudioV44"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV73"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV73: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV73"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV73")
  }
};

export const V74 = {
  chunkName: "env",
  name: "PackMapEnvironmentV74",
  version: 74,
  definitions: {
    PackMapEnvDataLocalV74: {
      lighting: DynArray("PackMapEnvDataLightingV74"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV45"),
      clouds: Pointer("PackMapEnvDataCloudsV74"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV45"),
      effect: RefArray("PackMapEnvDataEffectV74"),
      haze: RefArray("PackMapEnvDataHazeV74"),
      particleFields: RefArray("PackMapEnvDataPFieldV74"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV45"),
      sky: Pointer("PackMapEnvDataSkyV74"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV74"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV45"),
      water: RefArray("PackMapEnvDataWaterV74"),
      wind: RefArray("PackMapEnvDataWindV74"),
      audio: RefArray("PackMapEnvDataAudioV45"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      reserved: RefString16(),
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV45")
    },
    PackMapEnvDataLightingV74: {
      lights: RefArray("PackMapEnvDataLightV74"),
      shadowInfluence: Float32,
      backlightColor: FixedArray(Uint8, 3),
      backlightIntensity: Float32
    },
    PackMapEnvDataLightV74: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV45: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV45")
    },
    PackMapEnvDataLightingCharV45: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV74: {
      layers: DynArray("PackMapEnvDataLayerV74")
    },
    PackMapEnvDataLayerV74: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV74"),
      name: RefString16(),
      reserved: Uint32
    },
    PackMapEnvDataLayerAttributesV74: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32,
      reserved: Uint32
    },
    PackMapEnvDataColoredLightRingsV45: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV74: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      flatteningRange: FixedArray(Float32, 2),
      flatteningCharacterRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataHazeV74: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV74: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Float32,
      texPath: Filename(),
      type: Uint8,
      name: RefString16(),
      reserved: Uint32
    },
    PackMapEnvDataPFieldCutoutV45: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV74: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV74: {
      cards: DynArray("PackMapEnvDataSkyCardV74")
    },
    PackMapEnvDataSkyCardV74: {
      day: "PackMapEnvDataSkyCardAttributesV74",
      night: "PackMapEnvDataSkyCardAttributesV74",
      flags: Uint32,
      name: RefString16()
    },
    PackMapEnvDataSkyCardAttributesV74: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32
    },
    PackMapEnvDataSpawnGroupsV45: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV45"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV45: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV45")
    },
    PackMapEnvDataSpawnModelDataV45: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      animSequence: Uint64,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV74: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV74: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataAudioV45: {
      token: Uint64
    },
    PackMapEnvDataShapeV45: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV74: {
      lighting: DynArray("PackMapEnvDataLightingV74"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV45"),
      clouds: Pointer("PackMapEnvDataCloudsV74"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV45"),
      effect: RefArray("PackMapEnvDataEffectV74"),
      haze: RefArray("PackMapEnvDataHazeV74"),
      particleFields: RefArray("PackMapEnvDataPFieldV74"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV45"),
      sky: Pointer("PackMapEnvDataSkyV74"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV74"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV45"),
      water: RefArray("PackMapEnvDataWaterV74"),
      wind: RefArray("PackMapEnvDataWindV74"),
      audio: RefArray("PackMapEnvDataAudioV45"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      reserved: RefString16(),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV74"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV74: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV74"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV74")
  }
};

export const V75 = {
  chunkName: "env",
  name: "PackMapEnvironmentV75",
  version: 75,
  definitions: {
    PackMapEnvDataLocalV75: {
      lighting: DynArray("PackMapEnvDataLightingV75"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV46"),
      clouds: Pointer("PackMapEnvDataCloudsV75"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV46"),
      effect: RefArray("PackMapEnvDataEffectV75"),
      haze: RefArray("PackMapEnvDataHazeV75"),
      particleFields: RefArray("PackMapEnvDataPFieldV75"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV46"),
      sky: Pointer("PackMapEnvDataSkyV75"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV75"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV46"),
      water: RefArray("PackMapEnvDataWaterV75"),
      wind: RefArray("PackMapEnvDataWindV75"),
      audio: RefArray("PackMapEnvDataAudioV46"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      flags: Uint32,
      ext: Pointer("PackMapEnvDataBaseExV46"),
      type: Uint8,
      guid: Uint64,
      shapeArray: DynArray("PackMapEnvDataShapeV46")
    },
    PackMapEnvDataLightingV75: {
      lights: RefArray("PackMapEnvDataLightV75"),
      shadowInfluence: Float32,
      backlightColor: FixedArray(Uint8, 3),
      backlightIntensity: Float32
    },
    PackMapEnvDataLightV75: {
      color: FixedArray(Uint8, 3),
      intensity: Float32,
      direction: FixedArray(Float32, 3)
    },
    PackMapEnvDataLightingCharGroupV46: {
      lightingChar: DynArray("PackMapEnvDataLightingCharV46")
    },
    PackMapEnvDataLightingCharV46: {
      sunScale: Float32,
      saturation: Float32,
      sunFill: Float32,
      ambScale: Float32,
      ambFill: Float32,
      flags: Uint8
    },
    PackMapEnvDataCloudsV75: {
      layers: DynArray("PackMapEnvDataLayerV75")
    },
    PackMapEnvDataLayerV75: {
      altitude: Float32,
      cutOut: Float32,
      depth: Float32,
      extent: Float32,
      scale: Float32,
      texture: Filename(),
      attributes: DynArray("PackMapEnvDataLayerAttributesV75"),
      name: RefString16(),
      reserved: Uint32
    },
    PackMapEnvDataLayerAttributesV75: {
      brightness: Float32,
      density: Float32,
      haze: Float32,
      lightIntensity: Float32,
      velocity: FixedArray(Float32, 2),
      fadeWidth: Float32,
      fadeEnd: Float32,
      reserved: Uint32
    },
    PackMapEnvDataColoredLightRingsV46: {
      range: FixedArray(Float32, 2),
      distances: FixedArray(Float32, 6),
      lightColors: FixedArray(FixedArray(Uint8, 4), 6),
      shadowColors: FixedArray(FixedArray(Uint8, 4), 6)
    },
    PackMapEnvDataEffectV75: {
      glow: FixedArray(Uint8, 4),
      tintColor: FixedArray(Uint8, 4),
      tintTargetColor: FixedArray(Uint8, 4),
      saturation: Float32,
      tintAmount: Float32,
      tintFocus: Float32,
      glowLevel: FixedArray(Uint8, 4),
      glowAmplify: Float32,
      focalDepth: Float32,
      focalRange: Float32,
      ssaoAmount: Float32,
      ssaoBrighten: Float32,
      ssaoContrast: Float32,
      ssaoSunScale: Float32,
      flags: Uint32,
      clutTexturePath: Filename(),
      ext: Pointer("PackMapEnvDataEffectExV46")
    },
    PackMapEnvDataEffectExV46: {
      dummy: Uint32
    },
    PackMapEnvDataHazeV75: {
      nearColor: FixedArray(Uint8, 4),
      farColor: FixedArray(Uint8, 4),
      distRange: FixedArray(Float32, 2),
      heightColor: FixedArray(Uint8, 4),
      heightRange: FixedArray(Float32, 2),
      depthCue: Float32,
      sunDirRange: FixedArray(Float32, 2)
    },
    PackMapEnvDataPFieldV75: {
      altitude: Float32,
      angle: FixedArray(Float32, 2),
      clusterCount: Uint16,
      clustering: FixedArray(Float32, 2),
      depth: Float32,
      deviation: Float32,
      deviationSpeed: FixedArray(Float32, 2),
      extent: Uint16,
      fade: Float32,
      fieldDirection: FixedArray(Float32, 3),
      flags: Uint16,
      lifetime: FixedArray(Float32, 2),
      opacity: FixedArray(Float32, 2),
      particleCount: Uint16,
      period: FixedArray(Float32, 2),
      rotation: FixedArray(Float32, 2),
      scaleX: FixedArray(Float32, 2),
      scaleY: FixedArray(Float32, 2),
      seed: Uint32,
      speed: FixedArray(Float32, 2),
      texColRow: FixedArray(Uint32, 2),
      texFPS: Float32,
      texPath: Filename(),
      type: Uint8,
      name: RefString16(),
      reserved: Uint32
    },
    PackMapEnvDataPFieldCutoutV46: {
      name: RefString16(),
      x: FixedArray(Float32, 4),
      y: FixedArray(Float32, 4),
      z: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyV75: {
      flags: Uint8,
      dayBrightness: Float32,
      dayHazeBottom: Float32,
      dayHazeDensity: Float32,
      dayHazeFalloff: Float32,
      dayLightIntensity: Float32,
      dayStarDensity: Float32,
      nightBrightness: Float32,
      nightHazeBottom: Float32,
      nightHazeDensity: Float32,
      nightHazeFalloff: Float32,
      nightLightIntensity: Float32,
      nightStarDensity: Float32,
      verticalOffset: Float32
    },
    PackMapEnvDataSkyCardsV75: {
      cards: DynArray("PackMapEnvDataSkyCardV75")
    },
    PackMapEnvDataSkyCardV75: {
      day: "PackMapEnvDataSkyCardAttributesV75",
      night: "PackMapEnvDataSkyCardAttributesV75",
      flags: Uint32,
      name: RefString16(),
      location: FixedArray(Float32, 3),
      material: Pointer("PackMapEnvDataSkyCardMaterialV46"),
      ext: Pointer("PackMapEnvDataSkyCardExV46")
    },
    PackMapEnvDataSkyCardAttributesV75: {
      azimuth: Float32,
      density: Float32,
      hazeDensity: Float32,
      latitude: Float32,
      lightIntensity: Float32,
      minHaze: Float32,
      scale: FixedArray(Float32, 2),
      speed: Float32,
      texture: Filename(),
      textureUV: FixedArray(Float32, 4),
      brightness: Float32,
      lensFlare: Pointer("PackMapEnvLensFlareV46"),
      ext: Pointer("PackMapEnvDataSkyCardAttributesExV46")
    },
    PackMapEnvLensFlareV46: {
      atoms: DynArray("PackMapEnvLensFlareAtomV46"),
      textures: DynArray("PackMapEnvLensFlareTextureV46"),
      material: Filename(),
      fadeBand: FixedArray(Float32, 2),
      reverseFadeBand: FixedArray(Float32, 2),
      opacityCoeff: Float32,
      flags: Uint8,
      constants: DynArray("PackMapEnvDataShaderConstantV46")
    },
    PackMapEnvLensFlareAtomV46: {
      rows: Uint32,
      columns: Uint32,
      start: Uint32,
      fps: Float32,
      color: FixedArray(Uint8, 4),
      offset: FixedArray(Float32, 2),
      scale: FixedArray(Float32, 2),
      baseRotation: Float32,
      cameraRotation: Float32,
      flags: Uint8
    },
    PackMapEnvLensFlareTextureV46: {
      texture: Filename()
    },
    PackMapEnvDataShaderConstantV46: {
      token: Uint32,
      value: FixedArray(Float32, 4)
    },
    PackMapEnvDataSkyCardAttributesExV46: {
      dummy: Uint32
    },
    PackMapEnvDataSkyCardMaterialV46: {
      filename: Filename(),
      constants: DynArray("PackMapEnvDataShaderConstantV46"),
      textures: DynArray("PackMapEnvDataShaderTextureV46"),
      textureAnimation: "PackEnvDataSkyCardAnimationV46",
      flipbook: "PackMapEnvDataSkycardFlipbookV46"
    },
    PackMapEnvDataShaderTextureV46: {
      filename: Filename(),
      textureUV: FixedArray(Float32, 4)
    },
    PackEnvDataSkyCardAnimationV46: {
      textureAnimTranslation: FixedArray(Float32, 2),
      textureAnimScaleRangeX: FixedArray(Float32, 2),
      textureAnimScaleRangeY: FixedArray(Float32, 2),
      textureAnimScaleSpeed: FixedArray(Float32, 2),
      textureAnimRotation: Float32,
      texCoords: Uint32
    },
    PackMapEnvDataSkycardFlipbookV46: {
      rows: Uint32,
      columns: Uint32,
      start: Uint32,
      count: Uint32,
      fps: Float32
    },
    PackMapEnvDataSkyCardExV46: {
      dummy: Uint32
    },
    PackMapEnvDataSpawnGroupsV46: {
      spawnGroups: DynArray("PackMapEnvDataSpawnListV46"),
      targets: DynArray(Uint64)
    },
    PackMapEnvDataSpawnListV46: {
      spawns: DynArray("PackMapEnvDataSpawnModelDataV46")
    },
    PackMapEnvDataSpawnModelDataV46: {
      spawnRange: FixedArray(Uint32, 2),
      lifeSpan: FixedArray(Uint32, 2),
      scaleRange: FixedArray(Float32, 2),
      heightRange: FixedArray(Float32, 2),
      rotXRange: FixedArray(Float32, 2),
      rotYRange: FixedArray(Float32, 2),
      rotZRange: FixedArray(Float32, 2),
      probability: Float32,
      delay: Float32,
      flags: Uint32,
      animSequence: Uint64,
      modelFile: Filename(),
      maxConcurrent: Uint16
    },
    PackMapEnvDataWaterV75: {
      waterFlags: Uint32,
      animAmplitude: Float32,
      animChoppiness: Float32,
      animWind: FixedArray(Float32, 2),
      bumpAmount: Float32,
      bumpAngle0: Float32,
      bumpAngle1: Float32,
      bumpScale0: Float32,
      bumpScale1: Float32,
      bumpSpeed0: Float32,
      bumpSpeed1: Float32,
      bumpTile0: Float32,
      bumpTile1: Float32,
      patternAngle: Float32,
      patternTile: Float32,
      patternSpeed: Float32,
      patternEdge: Float32,
      surfaceShallowColor: FixedArray(Uint8, 4),
      surfaceDeepColor: FixedArray(Uint8, 4),
      patternColor: FixedArray(Uint8, 4),
      surfaceFresnel: Float32,
      distortAmount: Float32,
      depthAttenuation: Float32,
      materialFilename: Filename(),
      textureFilenames: DynArray(Filename()),
      constantTokens: DynArray(Uint32),
      constantValues: DynArray(FixedArray(Float32, 4)),
      foamSpawn: Float32,
      foamDissolve: Float32,
      foamDepthAttenuation: Float32,
      foamColor0: FixedArray(Uint8, 4),
      foamColor1: FixedArray(Uint8, 4)
    },
    PackMapEnvDataWindV75: {
      azimuth: Uint8,
      elevation: Uint8,
      noise: Uint8,
      speed: Uint8,
      gust: Uint8,
      gustFreq: Uint8,
      gustSpeed: Uint8
    },
    PackMapEnvDataAudioV46: {
      token: Uint64
    },
    PackMapEnvDataBaseExV46: {
      ext2: Pointer("PackMapEnvDataBaseEx2V46"),
      brightTime: Float32,
      dimTime: Float32,
      darkCoeff: Float32,
      darkExp: Float32,
      darkMin: Float32,
      darkMax: Float32,
      brightMin: Float32,
      brightMax: Float32,
      brightScale: Float32,
      darkScale: Float32,
      waterReflectionParams: FixedArray(Float32, 4)
    },
    PackMapEnvDataBaseEx2V46: {
      dummy: Uint32
    },
    PackMapEnvDataShapeV46: {
      center: FixedArray(Float32, 3),
      height: Float32,
      fadeHorizInner: Float32,
      fadeHorizOuter: Float32,
      fadeVertical: Float32,
      vertexArray: DynArray(FixedArray(Float32, 2)),
      shapeType: Uint8
    },
    PackMapEnvDataGlobalV75: {
      lighting: DynArray("PackMapEnvDataLightingV75"),
      lightingCharGroups: DynArray("PackMapEnvDataLightingCharGroupV46"),
      clouds: Pointer("PackMapEnvDataCloudsV75"),
      coloredLightRings: RefArray("PackMapEnvDataColoredLightRingsV46"),
      effect: RefArray("PackMapEnvDataEffectV75"),
      haze: RefArray("PackMapEnvDataHazeV75"),
      particleFields: RefArray("PackMapEnvDataPFieldV75"),
      particleFieldCutouts: DynArray("PackMapEnvDataPFieldCutoutV46"),
      sky: Pointer("PackMapEnvDataSkyV75"),
      skyCards: Pointer("PackMapEnvDataSkyCardsV75"),
      spawns: Pointer("PackMapEnvDataSpawnGroupsV46"),
      water: RefArray("PackMapEnvDataWaterV75"),
      wind: RefArray("PackMapEnvDataWindV75"),
      audio: RefArray("PackMapEnvDataAudioV46"),
      name: RefString16(),
      nightMods: DynArray(Uint8),
      bindTarget: Uint64,
      flags: Uint32,
      ext: Pointer("PackMapEnvDataBaseExV46"),
      skyModeTex: DynArray("PackMapEnvDataSkyModeTexV75"),
      starFile: Filename()
    },
    PackMapEnvDataSkyModeTexV75: {
      texPathNE: Filename(),
      texPathSW: Filename(),
      texPathT: Filename()
    }
  },
  root: {
    dataLocalArray: DynArray("PackMapEnvDataLocalV75"),
    dataGlobal: Pointer("PackMapEnvDataGlobalV75")
  }
};

export const latest = V75;
export const definitionArray = [V29, V30, V31, V32, V33, V34, V35, V36, V37, V38, V39, V40, V41, V42, V43, V44, V45, V46, V47, V48, V49, V50, V51, V52, V53, V54, V55, V56, V57, V58, V59, V60, V61, V62, V63, V64, V65, V66, V67, V68, V69, V70, V71, V72, V73, V74, V75];