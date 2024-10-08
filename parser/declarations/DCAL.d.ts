export namespace V1_N {
  export type PackMapDecalsV1 = {
    decals: Array<PackMapDecalV1>
  }

  export type PackMapDecalV1 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScale: Float32Array,
    textureOffset: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number
  }

}

export type V1 = V1_N.PackMapDecalsV1;

export namespace V2_N {
  export type PackMapDecalsV2 = {
    decals: Array<PackMapDecalV2>
  }

  export type PackMapDecalV2 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScale: Float32Array,
    textureOffset: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number,
    animTranslation: Float32Array,
    animScaleRangeX: Float32Array,
    animScaleRangeY: Float32Array,
    animScaleSpeed: Float32Array,
    animRotation: number
  }

}

export type V2 = V2_N.PackMapDecalsV2;

export namespace V3_N {
  export type PackMapDecalsV3 = {
    decals: Array<PackMapDecalV3>
  }

  export type PackMapDecalV3 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScaleUV0: Float32Array,
    textureOffsetUV0: Float32Array,
    textureScaleUV1: Float32Array,
    textureOffsetUV1: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number,
    animTranslation: Float32Array,
    animScaleRangeX: Float32Array,
    animScaleRangeY: Float32Array,
    animScaleSpeed: Float32Array,
    animRotation: number,
    surfaceBias: number
  }

}

export type V3 = V3_N.PackMapDecalsV3;

export namespace V4_N {
  export type PackMapDecalsV4 = {
    decals: Array<PackMapDecalV4>
  }

  export type PackMapDecalV4 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScaleUV0: Float32Array,
    textureOffsetUV0: Float32Array,
    textureScaleUV1: Float32Array,
    textureOffsetUV1: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number,
    animTranslation: Float32Array,
    animScaleRangeX: Float32Array,
    animScaleRangeY: Float32Array,
    animScaleSpeed: Float32Array,
    animRotation: number,
    surfaceBias: number,
    constantTokens: Uint32Array,
    constantValues: Array<Float32Array>
  }

}

export type V4 = V4_N.PackMapDecalsV4;

export namespace V5_N {
  export type PackMapDecalsV5 = {
    decals: Array<PackMapDecalV5>
  }

  export type PackMapDecalV5 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScaleUV0: Float32Array,
    textureOffsetUV0: Float32Array,
    textureScaleUV1: Float32Array,
    textureOffsetUV1: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number,
    animTranslation: Float32Array,
    animScaleRangeX: Float32Array,
    animScaleRangeY: Float32Array,
    animScaleSpeed: Float32Array,
    animRotation: number,
    surfaceBias: number,
    constantTokens: Uint32Array,
    constantValues: Array<Float32Array>,
    vertices: Array<PackMapDecalVertexV4>,
    indices: Uint16Array,
    propIds: BigUint64Array
  }

  export type PackMapDecalVertexV4 = {
    position: Float32Array
  }

}

export type V5 = V5_N.PackMapDecalsV5;

export namespace V6_N {
  export type PackMapDecalsV6 = {
    decals: Array<PackMapDecalV6>
  }

  export type PackMapDecalV6 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScaleUV0: Float32Array,
    textureOffsetUV0: Float32Array,
    textureScaleUV1: Float32Array,
    textureOffsetUV1: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number,
    animTranslation: Float32Array,
    animScaleRangeX: Float32Array,
    animScaleRangeY: Float32Array,
    animScaleSpeed: Float32Array,
    animRotation: number,
    surfaceBias: number,
    constantTokens: Uint32Array,
    constantValues: Array<Float32Array>,
    vertices: Array<PackMapDecalVertexV5>,
    indices: Uint16Array,
    propIds: BigUint64Array,
    projection: number
  }

  export type PackMapDecalVertexV5 = {
    position: Float32Array
  }

}

export type V6 = V6_N.PackMapDecalsV6;

export namespace V7_N {
  export type PackMapDecalsV7 = {
    decals: Array<PackMapDecalV7>
  }

  export type PackMapDecalV7 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScaleUV0: Float32Array,
    textureOffsetUV0: Float32Array,
    textureScaleUV1: Float32Array,
    textureOffsetUV1: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number,
    animTranslation: Float32Array,
    animScaleRangeX: Float32Array,
    animScaleRangeY: Float32Array,
    animScaleSpeed: Float32Array,
    animRotation: number,
    surfaceBias: number,
    constantTokens: Uint32Array,
    constantValues: Array<Float32Array>,
    vertices: Array<PackMapDecalVertexV6>,
    indices: Uint16Array,
    propIds: BigUint64Array,
    projection: number,
    id: bigint
  }

  export type PackMapDecalVertexV6 = {
    position: Float32Array
  }

}

export type V7 = V7_N.PackMapDecalsV7;

export namespace V8_N {
  export type PackMapDecalsV8 = {
    decals: Array<PackMapDecalV8>
  }

  export type PackMapDecalV8 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScaleUV0: Float32Array,
    textureOffsetUV0: Float32Array,
    textureScaleUV1: Float32Array,
    textureOffsetUV1: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number,
    animTranslation: Float32Array,
    animScaleRangeX: Float32Array,
    animScaleRangeY: Float32Array,
    animScaleSpeed: Float32Array,
    animRotation: number,
    surfaceBias: number,
    constantTokens: Uint32Array,
    constantValues: Array<Float32Array>,
    vertices: Array<PackMapDecalVertexV7>,
    indices: Uint16Array,
    propIds: BigUint64Array,
    projection: number,
    surfaceId: bigint,
    id: bigint
  }

  export type PackMapDecalVertexV7 = {
    position: Float32Array
  }

}

export type V8 = V8_N.PackMapDecalsV8;

export namespace V9_N {
  export type PackMapDecalsV9 = {
    decals: Array<PackMapDecalV9>
  }

  export type PackMapDecalV9 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScaleUV0: Float32Array,
    textureOffsetUV0: Float32Array,
    textureScaleUV1: Float32Array,
    textureOffsetUV1: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number,
    animTranslation: Float32Array,
    animScaleRangeX: Float32Array,
    animScaleRangeY: Float32Array,
    animScaleSpeed: Float32Array,
    animRotation: number,
    surfaceBias: number,
    constantTokens: Uint32Array,
    constantValues: Array<Float32Array>,
    vertices: Array<PackMapDecalVertexV8>,
    indices: Uint16Array,
    propIds: BigUint64Array,
    projection: number,
    surfaceId: bigint,
    id: bigint
  }

  export type PackMapDecalVertexV8 = {
    position: Float32Array,
    normal: Float32Array,
    tangent: Float32Array,
    bitangent: Float32Array
  }

}

export type V9 = V9_N.PackMapDecalsV9;

export namespace V10_N {
  export type PackMapDecalsV10 = {
    decals: Array<PackMapDecalV10>
  }

  export type PackMapDecalV10 = {
    position: Float32Array,
    extents: Float32Array,
    rotation: Float32Array,
    textureScaleUV0: Float32Array,
    textureOffsetUV0: Float32Array,
    textureScaleUV1: Float32Array,
    textureOffsetUV1: Float32Array,
    gridSize: Float32Array,
    materialFilename: number,
    textureFilenames: Array<number>,
    flags: number,
    animTranslation: Float32Array,
    animScaleRangeX: Float32Array,
    animScaleRangeY: Float32Array,
    animScaleSpeed: Float32Array,
    animRotation: number,
    surfaceBias: number,
    constantTokens: Uint32Array,
    constantValues: Array<Float32Array>,
    vertices: Array<PackMapDecalVertexV9>,
    indices: Uint16Array,
    propIds: BigUint64Array,
    projection: number,
    surfaceId: bigint,
    id: bigint
  }

  export type PackMapDecalVertexV9 = {
    position: Float32Array,
    normal: Float32Array,
    tangent: Float32Array,
    bitangent: Float32Array
  }

}

export type V10 = V10_N.PackMapDecalsV10;

export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10;
export type V6_U = V6 | V7 | V8 | V9 | V10;
export type V7_U = V7 | V8 | V9 | V10;
export type V8_U = V8 | V9 | V10;
export type V9_U = V9 | V10;
export type V10_U = V10;
