export namespace V0_N {
  export type MapAudio = {
    globalAmbientScriptFilename: string,
    globalMusicScriptFilename: string
  }

}

export type V0 = V0_N.MapAudio;

export namespace V1_N {
  export type MapAudio = {
    globalAmbientScriptFilename: string,
    globalMusicScriptFilename: string,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSource: string,
    filenameAmbient: string,
    filenameMusic: string,
    points: Array<Array<number>>,
    position: Array<number>,
    orientation: Array<number>,
    fadeBand: number,
    height: number,
    radius: number
  }

}

export type V1 = V1_N.MapAudio;

export namespace V2_N {
  export type MapAudio = {
    globalAmbientScriptFilename: string,
    globalMusicScriptFilename: string,
    globalAmbientUnderwaterScriptFilename: string,
    globalMusicUnderwaterScriptFilename: string,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSource: string,
    filenameAmbient: string,
    filenameMusic: string,
    points: Array<Array<number>>,
    position: Array<number>,
    orientation: Array<number>,
    fadeBand: number,
    height: number,
    radius: number
  }

}

export type V2 = V2_N.MapAudio;

export namespace V3_N {
  export type MapAudio = {
    filenameAmbientDaySurface: string,
    filenameMusicDaySurface: string,
    filenameAmbientDayUnderwater: string,
    filenameMusicDayUnderwater: string,
    filenameAmbientNightSurface: string,
    filenameMusicNightSurface: string,
    filenameAmbientNightUnderwater: string,
    filenameMusicNightUnderwater: string,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: string,
    filenameAmbientDay: string,
    filenameMusicDay: string,
    filenameSourceNight: string,
    filenameAmbientNight: string,
    filenameMusicNight: string,
    points: Array<Array<number>>,
    position: Array<number>,
    orientation: Array<number>,
    fadeBand: number,
    height: number,
    radius: number
  }

}

export type V3 = V3_N.MapAudio;

export namespace V4_N {
  export type MapAudio = {
    filenameAmbientDaySurface: string,
    filenameMusicDaySurface: string,
    filenameAmbientDayUnderwater: string,
    filenameMusicDayUnderwater: string,
    filenameAmbientNightSurface: string,
    filenameMusicNightSurface: string,
    filenameAmbientNightUnderwater: string,
    filenameMusicNightUnderwater: string,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: string,
    filenameAmbientDay: string,
    filenameMusicDay: string,
    filenameSourceNight: string,
    filenameAmbientNight: string,
    filenameMusicNight: string,
    points: Array<Array<number>>,
    position: Array<number>,
    orientation: Array<number>,
    fadeBand: number,
    height: number,
    radius: number,
    guid: BigInt
  }

}

export type V4 = V4_N.MapAudio;

export namespace V5_N {
  export type MapAudio = {
    filenameAmbientDaySurface: string,
    filenameAmbientDayUnderwater: string,
    filenameAmbientNightSurface: string,
    filenameAmbientNightUnderwater: string,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: string,
    filenameAmbientDay: string,
    filenameSourceNight: string,
    filenameAmbientNight: string,
    points: Array<Array<number>>,
    position: Array<number>,
    orientation: Array<number>,
    fadeBand: number,
    height: number,
    radius: number,
    guid: BigInt,
    flags: number
  }

}

export type V5 = V5_N.MapAudio;

export namespace V6_N {
  export type MapAudio = {
    filenameAmbientDaySurface: string,
    filenameAmbientDayUnderwater: string,
    filenameAmbientNightSurface: string,
    filenameAmbientNightUnderwater: string,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: string,
    filenameAmbientDay: string,
    filenameSourceNight: string,
    filenameAmbientNight: string,
    filenameInterior: string,
    exteriorVolume: number,
    priority: number,
    points: Array<Array<number>>,
    position: Array<number>,
    orientation: Array<number>,
    fadeBand: number,
    height: number,
    radius: number,
    guid: BigInt,
    flags: number
  }

}

export type V6 = V6_N.MapAudio;

export namespace V7_N {
  export type MapAudio = {
    filenameAmbientDaySurface: string,
    filenameAmbientDayUnderwater: string,
    filenameAmbientNightSurface: string,
    filenameAmbientNightUnderwater: string,
    audioRegions: Array<PackMapAudioRegion>,
    audioRegionTools: Array<PackMapAudioRegionTool>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: string,
    filenameAmbientDay: string,
    filenameSourceNight: string,
    filenameAmbientNight: string,
    filenameInterior: string,
    exteriorVolume: number,
    priority: number,
    points: Array<Array<number>>,
    position: Array<number>,
    orientation: Array<number>,
    fadeBand: number,
    height: number,
    radius: number,
    guid: BigInt,
    flags: number
  }

  export type PackMapAudioRegionTool = {
    annotation: string
  }

}

export type V7 = V7_N.MapAudio;

export namespace V8_N {
  export type MapAudio = {
    filenameAmbientDaySurface: string,
    filenameAmbientDayUnderwater: string,
    filenameAmbientNightSurface: string,
    filenameAmbientNightUnderwater: string,
    audioRegions: Array<PackMapAudioRegion>,
    audioRegionTools: Array<PackMapAudioRegionTool>,
    audioDepArray: Array<PackMapAudioDep>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: string,
    filenameAmbientDay: string,
    filenameSourceNight: string,
    filenameAmbientNight: string,
    filenameInterior: string,
    exteriorVolume: number,
    priority: number,
    points: Array<Array<number>>,
    position: Array<number>,
    orientation: Array<number>,
    fadeBand: number,
    height: number,
    radius: number,
    guid: BigInt,
    flags: number
  }

  export type PackMapAudioRegionTool = {
    annotation: string
  }

  export type PackMapAudioDep = {
    dependency: string,
    flags: number
  }

}

export type V8 = V8_N.MapAudio;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8;
export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8;
export type V4_U = V4 | V5 | V6 | V7 | V8;
export type V5_U = V5 | V6 | V7 | V8;
export type V6_U = V6 | V7 | V8;
export type V7_U = V7 | V8;
export type V8_U = V8;
