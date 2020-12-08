

export type PackMapTerrainV10 = {
  dims: Array<number>,
  swapDistance: number,
  heightMapArray: Array<number>,
  tileFlagArray: Array<number>,
  chunkArray: Array<PackMapTerrainChunkV10>,
  materials: PackMapTerrainMaterialsV10,
  typeArray: Array<BigInt>
}

export type PackMapTerrainChunkV10 = {
  chunkFlags: number,
  tileTableArray: Array<number>
}

export type PackMapTerrainMaterialsV10 = {
  pagedImage: string,
  constArray: Array<PackMapTerrainConstV10>,
  texFileArray: Array<PackMapTerrainTexV10>,
  materials: Array<PackMapTerrrainChunkMaterialV10>
}

export type PackMapTerrainConstV10 = {
  tokenName: number,
  value: Array<number>
}

export type PackMapTerrainTexV10 = {
  tokenName: number,
  flags: Array<number>,
  filename: string,
  layer: number
}

export type PackMapTerrrainChunkMaterialV10 = {
  tiling: number,
  hiResMaterial: PackMapTerrainMaterialV10,
  loResMaterial: PackMapTerrainMaterialV10,
  uvData: PackMapTerrainChunkUVDataV10
}

export type PackMapTerrainMaterialV10 = {
  materialFile: string,
  fvf: number,
  constIndexArray: Array<number>,
  texIndexArray: Array<number>
}

export type PackMapTerrainChunkUVDataV10 = {
  translation: Array<number>,
  xScaleRange: Array<number>,
  yScaleRange: Array<number>,
  scaleSpeed: Array<number>,
  rotation: number
}

export type PackMapTerrainV11 = {
  dims: Array<number>,
  swapDistance: number,
  heightMapArray: Array<number>,
  tileFlagArray: Array<number>,
  chunkArray: Array<PackMapTerrainChunkV11>,
  materials: PackMapTerrainMaterialsV11,
  typeArray: Array<BigInt>
}

export type PackMapTerrainChunkV11 = {
  chunkFlags: number,
  tileTableArray: Array<number>
}

export type PackMapTerrainMaterialsV11 = {
  pagedImage: string,
  constArray: Array<PackMapTerrainConstV11>,
  texFileArray: Array<PackMapTerrainTexV11>,
  materials: Array<PackMapTerrrainChunkMaterialV11>
}

export type PackMapTerrainConstV11 = {
  tokenName: number,
  value: Array<number>
}

export type PackMapTerrainTexV11 = {
  tokenName: number,
  flags: Array<number>,
  filename: string,
  layer: number
}

export type PackMapTerrrainChunkMaterialV11 = {
  tiling: Array<number>,
  hiResMaterial: PackMapTerrainMaterialV11,
  loResMaterial: PackMapTerrainMaterialV11,
  uvData: PackMapTerrainChunkUVDataV11
}

export type PackMapTerrainMaterialV11 = {
  materialFile: string,
  fvf: number,
  constIndexArray: Array<number>,
  texIndexArray: Array<number>
}

export type PackMapTerrainChunkUVDataV11 = {
  translation: Array<number>,
  xScaleRange: Array<number>,
  yScaleRange: Array<number>,
  scaleSpeed: Array<number>,
  rotation: number
}

export type PackMapTerrainV12 = {
  dims: Array<number>,
  swapDistance: number,
  heightMapArray: Array<number>,
  tileFlagArray: Array<number>,
  chunkArray: Array<PackMapTerrainChunkV12>,
  materials: PackMapTerrainMaterialsV12,
  typeArray: Array<BigInt>
}

export type PackMapTerrainChunkV12 = {
  chunkFlags: number,
  tileTableArray: Array<number>
}

export type PackMapTerrainMaterialsV12 = {
  pagedImage: string,
  constArray: Array<PackMapTerrainConstV12>,
  texFileArray: Array<PackMapTerrainTexV12>,
  materials: Array<PackMapTerrrainChunkMaterialV12>
}

export type PackMapTerrainConstV12 = {
  tokenName: number,
  value: Array<number>
}

export type PackMapTerrainTexV12 = {
  tokenName: number,
  flags: Array<number>,
  filename: string,
  layer: number
}

export type PackMapTerrrainChunkMaterialV12 = {
  tiling: Array<number>,
  hiResMaterial: PackMapTerrainMaterialV12,
  loResMaterial: PackMapTerrainMaterialV12,
  uvData: PackMapTerrainChunkUVDataV12
}

export type PackMapTerrainMaterialV12 = {
  materialFile: string,
  fvf: number,
  constIndexArray: Array<number>,
  texIndexArray: Array<number>
}

export type PackMapTerrainChunkUVDataV12 = {
  translation: Array<number>,
  xScaleRange: Array<number>,
  yScaleRange: Array<number>,
  scaleSpeed: Array<number>,
  rotation: number
}

export type PackMapTerrainV13 = {
  dims: Array<number>,
  swapDistance: number,
  heightMapArray: Array<number>,
  tileFlagArray: Array<number>,
  chunkArray: Array<PackMapTerrainChunkV13>,
  materials: PackMapTerrainMaterialsV13,
  typeArray: Array<BigInt>
}

export type PackMapTerrainChunkV13 = {
  chunkFlags: number,
  tileTableArray: Array<number>
}

export type PackMapTerrainMaterialsV13 = {
  pagedImage: string,
  constArray: Array<PackMapTerrainConstV13>,
  texFileArray: Array<PackMapTerrainTexV13>,
  materials: Array<PackMapTerrrainChunkMaterialV13>,
  midFade: Array<number>,
  farFade: Array<number>
}

export type PackMapTerrainConstV13 = {
  tokenName: number,
  value: Array<number>
}

export type PackMapTerrainTexV13 = {
  tokenName: number,
  flags: Array<number>,
  filename: string,
  layer: number
}

export type PackMapTerrrainChunkMaterialV13 = {
  tiling: Array<number>,
  hiResMaterial: PackMapTerrainMaterialV13,
  loResMaterial: PackMapTerrainMaterialV13,
  faderMaterial: PackMapTerrainMaterialV13,
  uvData: PackMapTerrainChunkUVDataV13
}

export type PackMapTerrainMaterialV13 = {
  materialFile: string,
  fvf: number,
  constIndexArray: Array<number>,
  texIndexArray: Array<number>
}

export type PackMapTerrainChunkUVDataV13 = {
  translation: Array<number>,
  xScaleRange: Array<number>,
  yScaleRange: Array<number>,
  scaleSpeed: Array<number>,
  rotation: number
}

export type PackMapTerrainV14 = {
  dims: Array<number>,
  swapDistance: number,
  heightMapArray: Array<number>,
  tileFlagArray: Array<number>,
  chunkArray: Array<PackMapTerrainChunkV14>,
  materials: PackMapTerrainMaterialsV14
}

export type PackMapTerrainChunkV14 = {
  chunkFlags: number,
  surfaceIndexArray: Array<number>,
  surfaceTokenArray: Array<BigInt>
}

export type PackMapTerrainMaterialsV14 = {
  pagedImage: string,
  constArray: Array<PackMapTerrainConstV14>,
  texFileArray: Array<PackMapTerrainTexV14>,
  materials: Array<PackMapTerrrainChunkMaterialV14>,
  midFade: Array<number>,
  farFade: Array<number>
}

export type PackMapTerrainConstV14 = {
  tokenName: number,
  value: Array<number>
}

export type PackMapTerrainTexV14 = {
  tokenName: number,
  flags: Array<number>,
  filename: string,
  layer: number
}

export type PackMapTerrrainChunkMaterialV14 = {
  tiling: Array<number>,
  hiResMaterial: PackMapTerrainMaterialV14,
  loResMaterial: PackMapTerrainMaterialV14,
  faderMaterial: PackMapTerrainMaterialV14,
  uvData: PackMapTerrainChunkUVDataV14
}

export type PackMapTerrainMaterialV14 = {
  materialFile: string,
  fvf: number,
  constIndexArray: Array<number>,
  texIndexArray: Array<number>
}

export type PackMapTerrainChunkUVDataV14 = {
  translation: Array<number>,
  xScaleRange: Array<number>,
  yScaleRange: Array<number>,
  scaleSpeed: Array<number>,
  rotation: number
}