export namespace V2_N {
  export type MapShore = {
    chains: Array<MapShoreChain>
  }

  export type MapShoreChain = {
    offset: number,
    opacity: number,
    animationSpeed: number,
    edgeSize: Float32Array,
    flags: number,
    points: Array<Float32Array>,
    materialFilename: number,
    textureFilenames: Array<number>,
    restTime: number,
    fadeRanges: Array<Float32Array>
  }

}

export type V2 = V2_N.MapShore;

export namespace V3_N {
  export type MapShore = {
    chains: Array<MapShoreChain>
  }

  export type MapShoreChain = {
    offset: number,
    opacity: number,
    animationSpeed: number,
    edgeSize: Float32Array,
    flags: number,
    points: Array<Float32Array>,
    materialFilename: number,
    textureFilenames: Array<number>,
    restTime: number,
    fadeRanges: Array<Float32Array>,
    simplifyDistMin: number,
    simplifyDistMax: number,
    simplifyDot: number
  }

}

export type V3 = V3_N.MapShore;

export type V2_U = V2 | V3;
export type V3_U = V3;
