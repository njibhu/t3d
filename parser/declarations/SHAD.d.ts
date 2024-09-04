export namespace V0_N {
  export type PackMapShadowV0 = {
    shadowDims: Uint32Array,
    tileDims: Uint32Array,
    tiles: Array<PackMapShadowTileV0>,
    worldToShadow: Float32Array,
    s: Float32Array,
    t: Float32Array,
    u: Float32Array
  }

  export type PackMapShadowTileV0 = {
    compressionMode: number,
    bytes: Uint8Array
  }

}

export type V0 = V0_N.PackMapShadowV0;

export namespace V1_N {
  export type PackMapShadowV1 = {
    shadowDims: Uint32Array,
    tileDims: Uint32Array,
    tiles: Array<PackMapShadowTileV1>,
    worldToShadow: Float32Array,
    s: Float32Array,
    t: Float32Array,
    u: Float32Array,
    shadowEye: Float32Array,
    shadowDir: Float32Array,
    shadowUp: Float32Array
  }

  export type PackMapShadowTileV1 = {
    compressionMode: number,
    bytes: Uint8Array
  }

}

export type V1 = V1_N.PackMapShadowV1;

export type V0_U = V0 | V1;
export type V1_U = V1;
