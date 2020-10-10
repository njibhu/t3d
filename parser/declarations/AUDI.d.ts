

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
  guid: number,
  flags: number
}

export type PackMapAudioRegionTool = {
  annotation: string
}

export type PackMapAudioDep = {
  dependency: string,
  flags: number
}