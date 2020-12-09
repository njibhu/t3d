export namespace V2 {
  export type MapShore = {
    chains: Array<MapShoreChain>
  }

  export type MapShoreChain = {
    offset: number,
    opacity: number,
    animationSpeed: number,
    edgeSize: Array<number>,
    flags: number,
    points: Array<Array<number>>,
    materialFilename: string,
    textureFilenames: Array<string>,
    restTime: number,
    fadeRanges: Array<Array<number>>
  }

}

export namespace V3 {
  export type MapShore = {
    chains: Array<MapShoreChain>
  }

  export type MapShoreChain = {
    offset: number,
    opacity: number,
    animationSpeed: number,
    edgeSize: Array<number>,
    flags: number,
    points: Array<Array<number>>,
    materialFilename: string,
    textureFilenames: Array<string>,
    restTime: number,
    fadeRanges: Array<Array<number>>,
    simplifyDistMin: number,
    simplifyDistMax: number,
    simplifyDot: number
  }

}

