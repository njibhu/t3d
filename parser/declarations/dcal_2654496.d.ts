

export type PackMapDecalsV1 = {
  decals: Array<PackMapDecalV1>
}

export type PackMapDecalV1 = {
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  textureScale: Array<number>,
  textureOffset: Array<number>,
  materialFilename: string,
  textureFilenames: Array<string>,
  flags: number
}

export type PackMapDecalsV2 = {
  decals: Array<PackMapDecalV2>
}

export type PackMapDecalV2 = {
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  textureScale: Array<number>,
  textureOffset: Array<number>,
  materialFilename: string,
  textureFilenames: Array<string>,
  flags: number,
  animTranslation: Array<number>,
  animScaleRangeX: Array<number>,
  animScaleRangeY: Array<number>,
  animScaleSpeed: Array<number>,
  animRotation: number
}

export type PackMapDecalsV3 = {
  decals: Array<PackMapDecalV3>
}

export type PackMapDecalV3 = {
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  textureScaleUV0: Array<number>,
  textureOffsetUV0: Array<number>,
  textureScaleUV1: Array<number>,
  textureOffsetUV1: Array<number>,
  materialFilename: string,
  textureFilenames: Array<string>,
  flags: number,
  animTranslation: Array<number>,
  animScaleRangeX: Array<number>,
  animScaleRangeY: Array<number>,
  animScaleSpeed: Array<number>,
  animRotation: number,
  surfaceBias: number
}

export type PackMapDecalsV4 = {
  decals: Array<PackMapDecalV4>
}

export type PackMapDecalV4 = {
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  textureScaleUV0: Array<number>,
  textureOffsetUV0: Array<number>,
  textureScaleUV1: Array<number>,
  textureOffsetUV1: Array<number>,
  materialFilename: string,
  textureFilenames: Array<string>,
  flags: number,
  animTranslation: Array<number>,
  animScaleRangeX: Array<number>,
  animScaleRangeY: Array<number>,
  animScaleSpeed: Array<number>,
  animRotation: number,
  surfaceBias: number,
  constantTokens: Array<number>,
  constantValues: Array<Array<number>>
}

export type PackMapDecalsV5 = {
  decals: Array<PackMapDecalV5>
}

export type PackMapDecalV5 = {
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  textureScaleUV0: Array<number>,
  textureOffsetUV0: Array<number>,
  textureScaleUV1: Array<number>,
  textureOffsetUV1: Array<number>,
  materialFilename: string,
  textureFilenames: Array<string>,
  flags: number,
  animTranslation: Array<number>,
  animScaleRangeX: Array<number>,
  animScaleRangeY: Array<number>,
  animScaleSpeed: Array<number>,
  animRotation: number,
  surfaceBias: number,
  constantTokens: Array<number>,
  constantValues: Array<Array<number>>,
  vertices: Array<PackMapDecalVertexV4>,
  indices: Array<number>,
  propIds: Array<number>
}

export type PackMapDecalVertexV4 = {
  position: Array<number>
}

export type PackMapDecalsV6 = {
  decals: Array<PackMapDecalV6>
}

export type PackMapDecalV6 = {
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  textureScaleUV0: Array<number>,
  textureOffsetUV0: Array<number>,
  textureScaleUV1: Array<number>,
  textureOffsetUV1: Array<number>,
  materialFilename: string,
  textureFilenames: Array<string>,
  flags: number,
  animTranslation: Array<number>,
  animScaleRangeX: Array<number>,
  animScaleRangeY: Array<number>,
  animScaleSpeed: Array<number>,
  animRotation: number,
  surfaceBias: number,
  constantTokens: Array<number>,
  constantValues: Array<Array<number>>,
  vertices: Array<PackMapDecalVertexV5>,
  indices: Array<number>,
  propIds: Array<number>,
  projection: number
}

export type PackMapDecalVertexV5 = {
  position: Array<number>
}

export type PackMapDecalsV7 = {
  decals: Array<PackMapDecalV7>
}

export type PackMapDecalV7 = {
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  textureScaleUV0: Array<number>,
  textureOffsetUV0: Array<number>,
  textureScaleUV1: Array<number>,
  textureOffsetUV1: Array<number>,
  materialFilename: string,
  textureFilenames: Array<string>,
  flags: number,
  animTranslation: Array<number>,
  animScaleRangeX: Array<number>,
  animScaleRangeY: Array<number>,
  animScaleSpeed: Array<number>,
  animRotation: number,
  surfaceBias: number,
  constantTokens: Array<number>,
  constantValues: Array<Array<number>>,
  vertices: Array<PackMapDecalVertexV6>,
  indices: Array<number>,
  propIds: Array<number>,
  projection: number,
  id: number
}

export type PackMapDecalVertexV6 = {
  position: Array<number>
}

export type PackMapDecalsV8 = {
  decals: Array<PackMapDecalV8>
}

export type PackMapDecalV8 = {
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  textureScaleUV0: Array<number>,
  textureOffsetUV0: Array<number>,
  textureScaleUV1: Array<number>,
  textureOffsetUV1: Array<number>,
  materialFilename: string,
  textureFilenames: Array<string>,
  flags: number,
  animTranslation: Array<number>,
  animScaleRangeX: Array<number>,
  animScaleRangeY: Array<number>,
  animScaleSpeed: Array<number>,
  animRotation: number,
  surfaceBias: number,
  constantTokens: Array<number>,
  constantValues: Array<Array<number>>,
  vertices: Array<PackMapDecalVertexV7>,
  indices: Array<number>,
  propIds: Array<number>,
  projection: number,
  surfaceId: number,
  id: number
}

export type PackMapDecalVertexV7 = {
  position: Array<number>
}

export type PackMapDecalsV9 = {
  decals: Array<PackMapDecalV9>
}

export type PackMapDecalV9 = {
  position: Array<number>,
  extents: Array<number>,
  rotation: Array<number>,
  textureScaleUV0: Array<number>,
  textureOffsetUV0: Array<number>,
  textureScaleUV1: Array<number>,
  textureOffsetUV1: Array<number>,
  materialFilename: string,
  textureFilenames: Array<string>,
  flags: number,
  animTranslation: Array<number>,
  animScaleRangeX: Array<number>,
  animScaleRangeY: Array<number>,
  animScaleSpeed: Array<number>,
  animRotation: number,
  surfaceBias: number,
  constantTokens: Array<number>,
  constantValues: Array<Array<number>>,
  vertices: Array<PackMapDecalVertexV8>,
  indices: Array<number>,
  propIds: Array<number>,
  projection: number,
  surfaceId: number,
  id: number
}

export type PackMapDecalVertexV8 = {
  position: Array<number>,
  normal: Array<number>,
  tangent: Array<number>,
  bitangent: Array<number>
}