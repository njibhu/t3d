export namespace V0_N {
  export type MapAudio = {
    globalAmbientScriptFilename: number,
    globalMusicScriptFilename: number
  }

}

export type V0 = V0_N.MapAudio;

export namespace V1_N {
  export type MapAudio = {
    globalAmbientScriptFilename: number,
    globalMusicScriptFilename: number,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSource: number,
    filenameAmbient: number,
    filenameMusic: number,
    points: Array<Float32Array>,
    position: Float32Array,
    orientation: Float32Array,
    fadeBand: number,
    height: number,
    radius: number
  }

}

export type V1 = V1_N.MapAudio;

export namespace V2_N {
  export type MapAudio = {
    globalAmbientScriptFilename: number,
    globalMusicScriptFilename: number,
    globalAmbientUnderwaterScriptFilename: number,
    globalMusicUnderwaterScriptFilename: number,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSource: number,
    filenameAmbient: number,
    filenameMusic: number,
    points: Array<Float32Array>,
    position: Float32Array,
    orientation: Float32Array,
    fadeBand: number,
    height: number,
    radius: number
  }

}

export type V2 = V2_N.MapAudio;

export namespace V3_N {
  export type MapAudio = {
    filenameAmbientDaySurface: number,
    filenameMusicDaySurface: number,
    filenameAmbientDayUnderwater: number,
    filenameMusicDayUnderwater: number,
    filenameAmbientNightSurface: number,
    filenameMusicNightSurface: number,
    filenameAmbientNightUnderwater: number,
    filenameMusicNightUnderwater: number,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: number,
    filenameAmbientDay: number,
    filenameMusicDay: number,
    filenameSourceNight: number,
    filenameAmbientNight: number,
    filenameMusicNight: number,
    points: Array<Float32Array>,
    position: Float32Array,
    orientation: Float32Array,
    fadeBand: number,
    height: number,
    radius: number
  }

}

export type V3 = V3_N.MapAudio;

export namespace V4_N {
  export type MapAudio = {
    filenameAmbientDaySurface: number,
    filenameMusicDaySurface: number,
    filenameAmbientDayUnderwater: number,
    filenameMusicDayUnderwater: number,
    filenameAmbientNightSurface: number,
    filenameMusicNightSurface: number,
    filenameAmbientNightUnderwater: number,
    filenameMusicNightUnderwater: number,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: number,
    filenameAmbientDay: number,
    filenameMusicDay: number,
    filenameSourceNight: number,
    filenameAmbientNight: number,
    filenameMusicNight: number,
    points: Array<Float32Array>,
    position: Float32Array,
    orientation: Float32Array,
    fadeBand: number,
    height: number,
    radius: number,
    guid: BigInt
  }

}

export type V4 = V4_N.MapAudio;

export namespace V5_N {
  export type MapAudio = {
    filenameAmbientDaySurface: number,
    filenameAmbientDayUnderwater: number,
    filenameAmbientNightSurface: number,
    filenameAmbientNightUnderwater: number,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: number,
    filenameAmbientDay: number,
    filenameSourceNight: number,
    filenameAmbientNight: number,
    points: Array<Float32Array>,
    position: Float32Array,
    orientation: Float32Array,
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
    filenameAmbientDaySurface: number,
    filenameAmbientDayUnderwater: number,
    filenameAmbientNightSurface: number,
    filenameAmbientNightUnderwater: number,
    audioRegions: Array<PackMapAudioRegion>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: number,
    filenameAmbientDay: number,
    filenameSourceNight: number,
    filenameAmbientNight: number,
    filenameInterior: number,
    exteriorVolume: number,
    priority: number,
    points: Array<Float32Array>,
    position: Float32Array,
    orientation: Float32Array,
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
    filenameAmbientDaySurface: number,
    filenameAmbientDayUnderwater: number,
    filenameAmbientNightSurface: number,
    filenameAmbientNightUnderwater: number,
    audioRegions: Array<PackMapAudioRegion>,
    audioRegionTools: Array<PackMapAudioRegionTool>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: number,
    filenameAmbientDay: number,
    filenameSourceNight: number,
    filenameAmbientNight: number,
    filenameInterior: number,
    exteriorVolume: number,
    priority: number,
    points: Array<Float32Array>,
    position: Float32Array,
    orientation: Float32Array,
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
    filenameAmbientDaySurface: number,
    filenameAmbientDayUnderwater: number,
    filenameAmbientNightSurface: number,
    filenameAmbientNightUnderwater: number,
    audioRegions: Array<PackMapAudioRegion>,
    audioRegionTools: Array<PackMapAudioRegionTool>,
    audioDepArray: Array<PackMapAudioDep>
  }

  export type PackMapAudioRegion = {
    regionType: number,
    overrideMode: number,
    filenameSourceDay: number,
    filenameAmbientDay: number,
    filenameSourceNight: number,
    filenameAmbientNight: number,
    filenameInterior: number,
    exteriorVolume: number,
    priority: number,
    points: Array<Float32Array>,
    position: Float32Array,
    orientation: Float32Array,
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
    dependency: number,
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
