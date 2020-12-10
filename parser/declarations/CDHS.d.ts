export namespace V0_N {
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

export type V0 = V0_N.PackShaderCacheV0;

export namespace V1_N {
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

export type V1 = V1_N.PackShaderCache;

export type V0_U = V0 | V1;
export type V1_U = V1;
