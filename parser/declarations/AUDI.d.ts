export namespace V0 {
  export type MapAudio = {
    globalAmbientScriptFilename: string,
    globalMusicScriptFilename: string
  }

}

export namespace V1 {
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

export namespace V2 {
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

export namespace V3 {
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

export namespace V4 {
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

export namespace V5 {
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

export namespace V6 {
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

export namespace V7 {
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

export namespace V8 {
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

