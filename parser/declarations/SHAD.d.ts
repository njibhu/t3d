export namespace V0_N {
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

export type V0 = V0_N.PackMapShadowV0;

export namespace V1_N {
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

export type V1 = V1_N.PackMapShadowV1;

export type V0_U = V0 | V1;
export type V1_U = V1;
