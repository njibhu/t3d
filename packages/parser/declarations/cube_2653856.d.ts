

export type PackMapCubeMapV0 = {
  sampleArray: Array<PackMapCubeMapSampleV0>,
  paramsArray: Array<PackMapCubeMapParamsV0>
}

export type PackMapCubeMapSampleV0 = {
  position: Array<number>,
  flags: number,
  dataPtr: Array<number>
}

export type PackMapCubeMapParamsV0 = {
  modulateColor: number,
  brightness: number,
  contrast: number,
  blurPasses: number
}

export type PackMapCubeMapV1 = {
  sampleArray: Array<PackMapCubeMapSampleV1>,
  paramsArray: Array<PackMapCubeMapParamsV1>
}

export type PackMapCubeMapSampleV1 = {
  position: Array<number>,
  flags: number,
  dayPtr: Array<number>,
  nightPtr: Array<number>
}

export type PackMapCubeMapParamsV1 = {
  modulateColor: number,
  brightness: number,
  contrast: number,
  blurPasses: number
}

export type PackMapCubeMapV2 = {
  sampleArray: Array<PackMapCubeMapSampleV2>,
  paramsArray: Array<PackMapCubeMapParamsV2>
}

export type PackMapCubeMapSampleV2 = {
  position: Array<number>,
  filenameDayDefault: string,
  filenameNightDefault: string,
  filenameDayScript: string,
  filenameNightScript: string
}

export type PackMapCubeMapParamsV2 = {
  modulateColor: number,
  brightness: number,
  contrast: number,
  blurPasses: number
}

export type PackMapCubeMapV3 = {
  sampleArray: Array<PackMapCubeMapSampleV3>,
  paramsArray: Array<PackMapCubeMapParamsV3>
}

export type PackMapCubeMapSampleV3 = {
  position: Array<number>,
  filenameDayDefault: string,
  filenameNightDefault: string,
  filenameDayScript: string,
  filenameNightScript: string,
  envID: number
}

export type PackMapCubeMapParamsV3 = {
  modulateColor: number,
  brightness: number,
  contrast: number,
  blurPasses: number,
  envVolume: string
}