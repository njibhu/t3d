export namespace V0_N {
  export type PackMapCubeMapV0 = {
    sampleArray: Array<PackMapCubeMapSampleV0>,
    paramsArray: Array<PackMapCubeMapParamsV0>
  }

  export type PackMapCubeMapSampleV0 = {
    position: Float32Array,
    flags: number,
    dataPtr: Uint8Array
  }

  export type PackMapCubeMapParamsV0 = {
    modulateColor: number,
    brightness: number,
    contrast: number,
    blurPasses: number
  }

}

export type V0 = V0_N.PackMapCubeMapV0;

export namespace V1_N {
  export type PackMapCubeMapV1 = {
    sampleArray: Array<PackMapCubeMapSampleV1>,
    paramsArray: Array<PackMapCubeMapParamsV1>
  }

  export type PackMapCubeMapSampleV1 = {
    position: Float32Array,
    flags: number,
    dayPtr: Uint8Array,
    nightPtr: Uint8Array
  }

  export type PackMapCubeMapParamsV1 = {
    modulateColor: number,
    brightness: number,
    contrast: number,
    blurPasses: number
  }

}

export type V1 = V1_N.PackMapCubeMapV1;

export namespace V2_N {
  export type PackMapCubeMapV2 = {
    sampleArray: Array<PackMapCubeMapSampleV2>,
    paramsArray: Array<PackMapCubeMapParamsV2>
  }

  export type PackMapCubeMapSampleV2 = {
    position: Float32Array,
    filenameDayDefault: number,
    filenameNightDefault: number,
    filenameDayScript: number,
    filenameNightScript: number
  }

  export type PackMapCubeMapParamsV2 = {
    modulateColor: number,
    brightness: number,
    contrast: number,
    blurPasses: number
  }

}

export type V2 = V2_N.PackMapCubeMapV2;

export namespace V3_N {
  export type PackMapCubeMapV3 = {
    sampleArray: Array<PackMapCubeMapSampleV3>,
    paramsArray: Array<PackMapCubeMapParamsV3>
  }

  export type PackMapCubeMapSampleV3 = {
    position: Float32Array,
    filenameDayDefault: number,
    filenameNightDefault: number,
    filenameDayScript: number,
    filenameNightScript: number,
    envID: bigint
  }

  export type PackMapCubeMapParamsV3 = {
    modulateColor: number,
    brightness: number,
    contrast: number,
    blurPasses: number,
    envVolume: string
  }

}

export type V3 = V3_N.PackMapCubeMapV3;

export namespace V4_N {
  export type PackMapCubeMapV4 = {
    sampleArray: Array<PackMapCubeMapSampleV4>,
    paramsArray: Array<PackMapCubeMapParamsV4>
  }

  export type PackMapCubeMapSampleV4 = {
    position: Float32Array,
    filenameDayDefault: number,
    filenameNightDefault: number,
    filenameDayScript: number,
    filenameNightScript: number,
    filenameDayDefaultHiRes: number,
    filenameNightDefaultHiRes: number,
    filenameDayScriptHiRes: number,
    filenameNightScriptHiRes: number,
    envID: bigint
  }

  export type PackMapCubeMapParamsV4 = {
    modulateColor: number,
    brightness: number,
    contrast: number,
    blurPasses: number,
    envVolume: string
  }

}

export type V4 = V4_N.PackMapCubeMapV4;

export type V0_U = V0 | V1 | V2 | V3 | V4;
export type V1_U = V1 | V2 | V3 | V4;
export type V2_U = V2 | V3 | V4;
export type V3_U = V3 | V4;
export type V4_U = V4;
