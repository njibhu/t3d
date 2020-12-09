export namespace V1 {
  export type PackMapLights = {
    lights: Array<PackMapLight>
  }

  export type PackMapLight = {
    type: number,
    position: Array<number>,
    elevation: number,
    azimuth: number,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number
  }

}

export namespace V2 {
  export type PackMapLights = {
    groups: Array<PackMapLightgroups>
  }

  export type PackMapLightgroups = {
    lights: Array<PackMapLight>
  }

  export type PackMapLight = {
    type: number,
    position: Array<number>,
    elevation: number,
    azimuth: number,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
  }

}

export namespace V3 {
  export type PackMapLights = {
    lights: Array<PackMapLightgroups>
  }

  export type PackMapLightgroups = {
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>
  }

  export type PackMapLight = {
    type: number,
    position: Array<number>,
    elevation: number,
    azimuth: number,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
  }

  export type PackMapCurve = {
    gust: number,
    gustFreq: number,
    noise: number,
    phase: number,
    curveType: number
  }

}

export namespace V4 {
  export type PackMapLights = {
    lights: Array<PackMapLightgroups>
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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

}

export namespace V5 {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
    curves: Array<PackMapCurve>
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

}

export namespace V6 {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
    curves: Array<PackMapCurve>
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
    minExt: Array<number>,
    maxExt: Array<number>,
    intensities: Array<number>,
    pack: Array<number>,
    images: Array<PackMapVolumeImage>
  }

  export type PackMapVolumeImage = {
    filename: string,
    dims: number,
    format: number,
    image: Array<number>
  }

}

export namespace V7 {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
    curves: Array<PackMapCurve>
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
    minExt: Array<number>,
    maxExt: Array<number>,
    intensities: Array<number>,
    pack: Array<number>,
    name: string,
    images: Array<PackMapVolumeImage>
  }

  export type PackMapVolumeImage = {
    filename: string,
    dims: number,
    format: number,
    image: Array<number>
  }

}

export namespace V8 {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
    curves: Array<PackMapCurve>
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
    minExt: Array<number>,
    maxExt: Array<number>,
    intensities: Array<number>,
    pack: Array<number>,
    name: string,
    floodPoint: Array<number>,
    images: Array<PackMapVolumeImage>
  }

  export type PackMapVolumeImage = {
    filename: string,
    dims: number,
    format: number,
    image: Array<number>
  }

}

export namespace V9 {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
    curves: Array<PackMapCurve>
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
    floodPoint: Array<number>,
    flags: number,
    images: Array<PackMapVolumeImage>
  }

  export type PackMapVolumeImage = {
    filename: string,
    dims: number,
    format: number,
    image: Array<number>
  }

}

export namespace V10 {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
    curves: Array<PackMapCurve>
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
    floodPoint: Array<number>,
    flags: number,
    images: Array<PackMapVolumeImage>
  }

  export type PackMapVolumeImage = {
    filename: string,
    dims: Array<number>,
    format: number,
    image: Array<number>
  }

}

export namespace V11 {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>,
    broadId: number
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
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
    floodPoint: Array<number>,
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

}

export namespace V12 {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>,
    broadId: number
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
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
    floodPoint: Array<number>,
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

}

export namespace V13 {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>,
    broadId: number
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
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

}

export namespace V14 {
  export type PackMapLightsV14 = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapProtalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapPointLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>,
    broadId: number
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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
    lights: Array<PackMapPointLight>,
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

}

export namespace V15 {
  export type PackMapLightsV15 = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapPortalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapPointLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>,
    broadId: number
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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

  export type PackMapSpotLightgroups = {
    guid: BigInt,
    lights: Array<PackMapPointLight>,
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

}

export namespace V16 {
  export type PackMapLights = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapPortalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapPointLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>,
    broadId: number
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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

  export type PackMapSpotLightgroups = {
    guid: BigInt,
    lights: Array<PackMapSpotLight>,
    curves: Array<PackMapCurve>,
    broadId: number
  }

  export type PackMapSpotLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number,
    direction: Array<number>,
    innerAngle: number,
    outerAngle: number,
    textureName: string,
    shadowData: PackMapSpotShadow
  }

  export type PackMapSpotShadow = {
    shadowFilename: string
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

}

export namespace V17 {
  export type PackMapLights = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapPortalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapPointLightgroups = {
    guid: BigInt,
    lights: Array<PackMapLight>,
    curves: Array<PackMapCurve>,
    broadId: number
  }

  export type PackMapLight = {
    position: Array<number>,
    color: Array<number>,
    intensity: number,
    nearDistance: number,
    farDistance: number,
    flags: number
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

  export type PackMapSpotLightgroups = {
    guid: BigInt,
    lights: Array<PackMapSpotLight>,
    curves: Array<PackMapCurve>,
    broadId: number
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

}

