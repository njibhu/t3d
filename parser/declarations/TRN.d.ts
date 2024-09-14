export namespace V10_N {
  export type PackMapTerrainV10 = {
    dims: Uint32Array,
    swapDistance: number,
    heightMapArray: Float32Array,
    tileFlagArray: Uint32Array,
    chunkArray: Array<PackMapTerrainChunkV10>,
    materials: PackMapTerrainMaterialsV10,
    typeArray: BigUint64Array
  }

  export type PackMapTerrainChunkV10 = {
    chunkFlags: number,
    tileTableArray: Uint8Array
  }

  export type PackMapTerrainMaterialsV10 = {
    pagedImage: number,
    constArray: Array<PackMapTerrainConstV10>,
    texFileArray: Array<PackMapTerrainTexV10>,
    materials: Array<PackMapTerrrainChunkMaterialV10>
  }

  export type PackMapTerrainConstV10 = {
    tokenName: number,
    value: Float32Array
  }

  export type PackMapTerrainTexV10 = {
    tokenName: number,
    flags: number,
    filename: number,
    flags_: Uint32Array,
    layer: number
  }

  export type PackMapTerrrainChunkMaterialV10 = {
    tiling: number,
    hiResMaterial: PackMapTerrainMaterialV10,
    loResMaterial: PackMapTerrainMaterialV10,
    uvData: PackMapTerrainChunkUVDataV10
  }

  export type PackMapTerrainMaterialV10 = {
    materialFile: number,
    fvf: number,
    constIndexArray: Uint32Array,
    texIndexArray: Uint32Array
  }

  export type PackMapTerrainChunkUVDataV10 = {
    translation: Float32Array,
    xScaleRange: Float32Array,
    yScaleRange: Float32Array,
    scaleSpeed: Float32Array,
    rotation: number
  }

}

export type V10 = V10_N.PackMapTerrainV10;

export namespace V11_N {
  export type PackMapTerrainV11 = {
    dims: Uint32Array,
    swapDistance: number,
    heightMapArray: Float32Array,
    tileFlagArray: Uint32Array,
    chunkArray: Array<PackMapTerrainChunkV11>,
    materials: PackMapTerrainMaterialsV11,
    typeArray: BigUint64Array
  }

  export type PackMapTerrainChunkV11 = {
    chunkFlags: number,
    tileTableArray: Uint8Array
  }

  export type PackMapTerrainMaterialsV11 = {
    pagedImage: number,
    constArray: Array<PackMapTerrainConstV11>,
    texFileArray: Array<PackMapTerrainTexV11>,
    materials: Array<PackMapTerrrainChunkMaterialV11>
  }

  export type PackMapTerrainConstV11 = {
    tokenName: number,
    value: Float32Array
  }

  export type PackMapTerrainTexV11 = {
    tokenName: number,
    flags: number,
    filename: number,
    flags_: Uint32Array,
    layer: number
  }

  export type PackMapTerrrainChunkMaterialV11 = {
    tiling: Uint8Array,
    hiResMaterial: PackMapTerrainMaterialV11,
    loResMaterial: PackMapTerrainMaterialV11,
    uvData: PackMapTerrainChunkUVDataV11
  }

  export type PackMapTerrainMaterialV11 = {
    materialFile: number,
    fvf: number,
    constIndexArray: Uint32Array,
    texIndexArray: Uint32Array
  }

  export type PackMapTerrainChunkUVDataV11 = {
    translation: Float32Array,
    xScaleRange: Float32Array,
    yScaleRange: Float32Array,
    scaleSpeed: Float32Array,
    rotation: number
  }

}

export type V11 = V11_N.PackMapTerrainV11;

export namespace V12_N {
  export type PackMapTerrainV12 = {
    dims: Uint32Array,
    swapDistance: number,
    heightMapArray: Float32Array,
    tileFlagArray: Uint32Array,
    chunkArray: Array<PackMapTerrainChunkV12>,
    materials: PackMapTerrainMaterialsV12,
    typeArray: BigUint64Array
  }

  export type PackMapTerrainChunkV12 = {
    chunkFlags: number,
    tileTableArray: Uint8Array
  }

  export type PackMapTerrainMaterialsV12 = {
    pagedImage: number,
    constArray: Array<PackMapTerrainConstV12>,
    texFileArray: Array<PackMapTerrainTexV12>,
    materials: Array<PackMapTerrrainChunkMaterialV12>
  }

  export type PackMapTerrainConstV12 = {
    tokenName: number,
    value: Float32Array
  }

  export type PackMapTerrainTexV12 = {
    tokenName: number,
    flags: number,
    filename: number,
    flags_: Uint32Array,
    layer: number
  }

  export type PackMapTerrrainChunkMaterialV12 = {
    tiling: Uint8Array,
    hiResMaterial: PackMapTerrainMaterialV12,
    loResMaterial: PackMapTerrainMaterialV12,
    uvData: PackMapTerrainChunkUVDataV12
  }

  export type PackMapTerrainMaterialV12 = {
    materialFile: number,
    fvf: number,
    constIndexArray: Uint32Array,
    texIndexArray: Uint32Array
  }

  export type PackMapTerrainChunkUVDataV12 = {
    translation: Float32Array,
    xScaleRange: Float32Array,
    yScaleRange: Float32Array,
    scaleSpeed: Float32Array,
    rotation: number
  }

}

export type V12 = V12_N.PackMapTerrainV12;

export namespace V13_N {
  export type PackMapTerrainV13 = {
    dims: Uint32Array,
    swapDistance: number,
    heightMapArray: Float32Array,
    tileFlagArray: Uint32Array,
    chunkArray: Array<PackMapTerrainChunkV13>,
    materials: PackMapTerrainMaterialsV13,
    typeArray: BigUint64Array
  }

  export type PackMapTerrainChunkV13 = {
    chunkFlags: number,
    tileTableArray: Uint8Array
  }

  export type PackMapTerrainMaterialsV13 = {
    pagedImage: number,
    constArray: Array<PackMapTerrainConstV13>,
    texFileArray: Array<PackMapTerrainTexV13>,
    materials: Array<PackMapTerrrainChunkMaterialV13>,
    midFade: Float32Array,
    farFade: Float32Array
  }

  export type PackMapTerrainConstV13 = {
    tokenName: number,
    value: Float32Array
  }

  export type PackMapTerrainTexV13 = {
    tokenName: number,
    flags: number,
    filename: number,
    flags_: Uint32Array,
    layer: number
  }

  export type PackMapTerrrainChunkMaterialV13 = {
    tiling: Uint8Array,
    hiResMaterial: PackMapTerrainMaterialV13,
    loResMaterial: PackMapTerrainMaterialV13,
    faderMaterial: PackMapTerrainMaterialV13,
    uvData: PackMapTerrainChunkUVDataV13
  }

  export type PackMapTerrainMaterialV13 = {
    materialFile: number,
    fvf: number,
    constIndexArray: Uint32Array,
    texIndexArray: Uint32Array
  }

  export type PackMapTerrainChunkUVDataV13 = {
    translation: Float32Array,
    xScaleRange: Float32Array,
    yScaleRange: Float32Array,
    scaleSpeed: Float32Array,
    rotation: number
  }

}

export type V13 = V13_N.PackMapTerrainV13;

export namespace V14_N {
  export type PackMapTerrainV14 = {
    dims: Uint32Array,
    swapDistance: number,
    heightMapArray: Float32Array,
    tileFlagArray: Uint32Array,
    chunkArray: Array<PackMapTerrainChunkV14>,
    materials: PackMapTerrainMaterialsV14
  }

  export type PackMapTerrainChunkV14 = {
    chunkFlags: number,
    surfaceIndexArray: Uint16Array,
    surfaceTokenArray: BigUint64Array
  }

  export type PackMapTerrainMaterialsV14 = {
    pagedImage: number,
    constArray: Array<PackMapTerrainConstV14>,
    texFileArray: Array<PackMapTerrainTexV14>,
    materials: Array<PackMapTerrrainChunkMaterialV14>,
    midFade: Float32Array,
    farFade: Float32Array
  }

  export type PackMapTerrainConstV14 = {
    tokenName: number,
    value: Float32Array
  }

  export type PackMapTerrainTexV14 = {
    tokenName: number,
    flags: number,
    filename: number,
    flags_: Uint32Array,
    layer: number
  }

  export type PackMapTerrrainChunkMaterialV14 = {
    tiling: Uint8Array,
    hiResMaterial: PackMapTerrainMaterialV14,
    loResMaterial: PackMapTerrainMaterialV14,
    faderMaterial: PackMapTerrainMaterialV14,
    uvData: PackMapTerrainChunkUVDataV14
  }

  export type PackMapTerrainMaterialV14 = {
    materialFile: number,
    fvf: number,
    constIndexArray: Uint32Array,
    texIndexArray: Uint32Array
  }

  export type PackMapTerrainChunkUVDataV14 = {
    translation: Float32Array,
    xScaleRange: Float32Array,
    yScaleRange: Float32Array,
    scaleSpeed: Float32Array,
    rotation: number
  }

}

export type V14 = V14_N.PackMapTerrainV14;

export namespace V15_N {
  export type PackMapTerrainV15 = {
    dims: Uint32Array,
    swapDistance: number,
    heightMapArray: Float32Array,
    tileFlagArray: Uint32Array,
    chunkArray: Array<PackMapTerrainChunkV14>,
    materials: PackMapTerrainMaterialsV14,
    verticesPerChunkSide: number
  }

  export type PackMapTerrainChunkV14 = {
    chunkFlags: number,
    surfaceIndexArray: Uint16Array,
    surfaceTokenArray: BigUint64Array
  }

  export type PackMapTerrainMaterialsV14 = {
    pagedImage: number,
    constArray: Array<PackMapTerrainConstV14>,
    texFileArray: Array<PackMapTerrainTexV14>,
    materials: Array<PackMapTerrrainChunkMaterialV14>,
    midFade: Float32Array,
    farFade: Float32Array
  }

  export type PackMapTerrainConstV14 = {
    tokenName: number,
    value: Float32Array
  }

  export type PackMapTerrainTexV14 = {
    tokenName: number,
    flags: number,
    filename: number,
    flags_: Uint32Array,
    layer: number
  }

  export type PackMapTerrrainChunkMaterialV14 = {
    tiling: Uint8Array,
    hiResMaterial: PackMapTerrainMaterialV14,
    loResMaterial: PackMapTerrainMaterialV14,
    faderMaterial: PackMapTerrainMaterialV14,
    uvData: PackMapTerrainChunkUVDataV14
  }

  export type PackMapTerrainMaterialV14 = {
    materialFile: number,
    fvf: number,
    constIndexArray: Uint32Array,
    texIndexArray: Uint32Array
  }

  export type PackMapTerrainChunkUVDataV14 = {
    translation: Float32Array,
    xScaleRange: Float32Array,
    yScaleRange: Float32Array,
    scaleSpeed: Float32Array,
    rotation: number
  }

}

export type V15 = V15_N.PackMapTerrainV15;

export type V10_U = V10 | V11 | V12 | V13 | V14 | V15;
export type V11_U = V11 | V12 | V13 | V14 | V15;
export type V12_U = V12 | V13 | V14 | V15;
export type V13_U = V13 | V14 | V15;
export type V14_U = V14 | V15;
export type V15_U = V15;
