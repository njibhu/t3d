export namespace V0 {
  export type PackShaderCacheV0 = {
    data: Array<PackVertexShaderKeyV0>
  }

  export type PackVertexShaderKeyV0 = {
    params: number,
    vertexFormat: number,
    texGenCount: number,
    texGen: Array<number>,
    vsVersion: number
  }

}

export namespace V1 {
  export type PackShaderCache = {
    data: Array<PackVertexShaderKey>
  }

  export type PackVertexShaderKey = {
    vsGenParams: PackVsGenParams,
    vertexFormat: number,
    texGenCount: number,
    texGen: Array<number>,
    vsVersion: number
  }

  export type PackVsGenParams = {
    pointWindCount: number,
    lightPointCount: number,
    lightSpotCount: number,
    texTransCount: number,
    hazeMode: number,
    flags: number
  }

}

