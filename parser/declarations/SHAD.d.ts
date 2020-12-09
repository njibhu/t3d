export namespace V0 {
  export type PackMapShadowV0 = {
    shadowDims: Array<number>,
    tileDims: Array<number>,
    tiles: Array<PackMapShadowTileV0>,
    worldToShadow: Array<number>,
    s: Array<number>,
    t: Array<number>,
    u: Array<number>
  }

  export type PackMapShadowTileV0 = {
    compressionMode: number,
    bytes: Array<number>
  }

}

export namespace V1 {
  export type PackMapShadowV1 = {
    shadowDims: Array<number>,
    tileDims: Array<number>,
    tiles: Array<PackMapShadowTileV1>,
    worldToShadow: Array<number>,
    s: Array<number>,
    t: Array<number>,
    u: Array<number>,
    shadowEye: Array<number>,
    shadowDir: Array<number>,
    shadowUp: Array<number>
  }

  export type PackMapShadowTileV1 = {
    compressionMode: number,
    bytes: Array<number>
  }

}

