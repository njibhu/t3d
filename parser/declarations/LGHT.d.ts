export namespace V1_N {
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

export type V1 = V1_N.PackMapLights;

export namespace V2_N {
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

export type V2 = V2_N.PackMapLights;

export namespace V3_N {
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

export type V3 = V3_N.PackMapLights;

export namespace V4_N {
  export type PackMapLights = {
    lights: Array<PackMapLightgroups>
  }

  export type PackMapLightgroups = {
    guid: number,
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

export type V4 = V4_N.PackMapLights;

export namespace V5_N {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>
  }

  export type PackMapLightgroups = {
    guid: number,
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
    guid: number,
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

export type V5 = V5_N.PackMapLights;

export namespace V6_N {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V6 = V6_N.PackMapLights;

export namespace V7_N {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V7 = V7_N.PackMapLights;

export namespace V8_N {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V8 = V8_N.PackMapLights;

export namespace V9_N {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V9 = V9_N.PackMapLights;

export namespace V10_N {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>
  }

  export type PackMapLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V10 = V10_N.PackMapLights;

export namespace V11_N {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V11 = V11_N.PackMapLights;

export namespace V12_N {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V12 = V12_N.PackMapLights;

export namespace V13_N {
  export type PackMapLights = {
    pointLights: Array<PackMapLightgroups>,
    spotLights: Array<PackMapPointLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V13 = V13_N.PackMapLights;

export namespace V14_N {
  export type PackMapLightsV14 = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapProtalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapPointLightgroups = {
    guid: number,
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
    guid: number,
    fadeCamera: number,
    fadeLight: number,
    lighten: number,
    darken: number,
    points: Array<Array<number>>,
    broadId: number
  }

  export type PackMapSpotLightgroups = {
    guid: number,
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
    guid: number,
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

export type V14 = V14_N.PackMapLightsV14;

export namespace V15_N {
  export type PackMapLightsV15 = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapPortalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapPointLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V15 = V15_N.PackMapLightsV15;

export namespace V16_N {
  export type PackMapLights = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapPortalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapPointLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V16 = V16_N.PackMapLights;

export namespace V17_N {
  export type PackMapLights = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapPortalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapPointLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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
    guid: number,
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

export type V17 = V17_N.PackMapLights;

export namespace V18_N {
  export type PackMapLights = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapPortalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapPointLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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
    shadowData: PackMapSpotShadow,
    lodData: Array<PackMapSpotLod>
  }

  export type PackMapSpotShadow = {
    shadowFilename: string
  }

  export type PackMapSpotLod = {
    distance: number,
    flags: number,
    lightFlags: number,
    color: Array<number>,
    intensity: number,
    nearDist: number,
    farDist: number,
    innerAngle: number,
    outerAngle: number
  }

  export type PackMapVolumeLight = {
    guid: number,
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

export type V18 = V18_N.PackMapLights;

export namespace V19_N {
  export type PackMapLights = {
    pointLights: Array<PackMapPointLightgroups>,
    portalLights: Array<PackMapPortalLight>,
    spotLights: Array<PackMapSpotLightgroups>,
    volumeLights: Array<PackMapVolumeLight>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number,
    maxLightVsConstants: number
  }

  export type PackMapPointLightgroups = {
    guid: number,
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
    guid: number,
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
    guid: number,
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
    shadowData: PackMapSpotShadow,
    lodData: Array<PackMapSpotLod>
  }

  export type PackMapSpotShadow = {
    shadowFilename: string
  }

  export type PackMapSpotLod = {
    distance: number,
    flags: number,
    lightFlags: number,
    color: Array<number>,
    intensity: number,
    nearDist: number,
    farDist: number,
    innerAngle: number,
    outerAngle: number
  }

  export type PackMapVolumeLight = {
    guid: number,
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

export type V19 = V19_N.PackMapLights;

export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V6_U = V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V7_U = V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V8_U = V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V9_U = V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V10_U = V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V11_U = V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V12_U = V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V13_U = V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V14_U = V14 | V15 | V16 | V17 | V18 | V19;
export type V15_U = V15 | V16 | V17 | V18 | V19;
export type V16_U = V16 | V17 | V18 | V19;
export type V17_U = V17 | V18 | V19;
export type V18_U = V18 | V19;
export type V19_U = V19;
