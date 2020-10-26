

export type SceneFileGameV0 = {
  paths: Array<ScenePathV0>,
  meshes: Array<SceneGameMeshV0>
}

export type ScenePathV0 = {
  properties: Array<BigInt>,
  points: Array<ScenePathNodeV0>,
  closed: number
}

export type ScenePathNodeV0 = {
  position: Array<number>,
  rotation: Array<number>,
  radius: number,
  flags: number
}

export type SceneGameMeshV0 = {
  indices: Array<number>,
  vertices: Array<Array<number>>,
  edges: Array<SceneEdgeV0>,
  moppInfo: Array<number>,
  moppBytes: Array<number>
}

export type SceneEdgeV0 = {
  indices: Array<number>,
  triangles: Array<number>
}

export type SceneFileGameV1 = {
  paths: Array<ScenePathV1>,
  meshes: Array<SceneGameMeshV1>
}

export type ScenePathV1 = {
  properties: Array<BigInt>,
  points: Array<ScenePathNodeV1>,
  closed: number
}

export type ScenePathNodeV1 = {
  position: Array<number>,
  rotation: Array<number>,
  radius: number,
  flags: number,
  smoothing: number
}

export type SceneGameMeshV1 = {
  indices: Array<number>,
  vertices: Array<Array<number>>,
  edges: Array<SceneEdgeV1>,
  moppInfo: Array<number>,
  moppBytes: Array<number>
}

export type SceneEdgeV1 = {
  indices: Array<number>,
  triangles: Array<number>
}

export type SceneFileGameV2 = {
  paths: Array<ScenePathV2>,
  meshes: Array<SceneGameMeshV2>,
  grabPoints: Array<SceneGrabNodeV2>
}

export type ScenePathV2 = {
  properties: Array<BigInt>,
  points: Array<ScenePathNodeV2>,
  closed: number
}

export type ScenePathNodeV2 = {
  position: Array<number>,
  rotation: Array<number>,
  radius: number,
  flags: number,
  smoothing: number
}

export type SceneGameMeshV2 = {
  indices: Array<number>,
  vertices: Array<Array<number>>,
  edges: Array<SceneEdgeV2>,
  moppInfo: Array<number>,
  moppBytes: Array<number>
}

export type SceneEdgeV2 = {
  indices: Array<number>,
  triangles: Array<number>
}

export type SceneGrabNodeV2 = {
  position: Array<number>,
  rotation: Array<number>,
  radius: number,
  flags: number,
  smoothing: number
}

export type SceneFileGameV3 = {
  paths: Array<ScenePathV3>,
  meshes: Array<SceneGameMeshV3>,
  grabPoints: Array<SceneGrabNodeV3>
}

export type ScenePathV3 = {
  properties: Array<BigInt>,
  points: Array<ScenePathNodeV3>,
  closed: number
}

export type ScenePathNodeV3 = {
  position: Array<number>,
  rotation: Array<number>,
  radius: number,
  flags: number,
  smoothing: number
}

export type SceneGameMeshV3 = {
  indices: Array<number>,
  vertices: Array<Array<number>>,
  edges: Array<SceneEdgeV3>,
  moppInfo: Array<number>,
  moppBytes: Array<number>,
  surfaceFlags: Array<number>
}

export type SceneEdgeV3 = {
  indices: Array<number>,
  triangles: Array<number>
}

export type SceneGrabNodeV3 = {
  position: Array<number>,
  rotation: Array<number>,
  radius: number,
  flags: number,
  smoothing: number
}

export type SceneFileGameV4 = {
  paths: Array<ScenePathV4>,
  meshes: Array<SceneGameMeshV4>,
  grabPoints: Array<SceneGrabNodeV4>
}

export type ScenePathV4 = {
  properties: Array<BigInt>,
  points: Array<ScenePathNodeV4>,
  closed: number
}

export type ScenePathNodeV4 = {
  position: Array<number>,
  rotation: Array<number>,
  radius: number,
  flags: number,
  smoothing: number,
  singlesided: number
}

export type SceneGameMeshV4 = {
  indices: Array<number>,
  vertices: Array<Array<number>>,
  edges: Array<SceneEdgeV4>,
  moppInfo: Array<number>,
  moppBytes: Array<number>,
  surfaceFlags: Array<number>
}

export type SceneEdgeV4 = {
  indices: Array<number>,
  triangles: Array<number>
}

export type SceneGrabNodeV4 = {
  position: Array<number>,
  rotation: Array<number>,
  radius: number,
  flags: number,
  smoothing: number
}

export type SceneFileGameV5 = {
  paths: Array<ScenePathV5>,
  meshes: Array<SceneGameMeshV5>
}

export type ScenePathV5 = {
  properties: Array<BigInt>,
  points: Array<ScenePathNodeV5>,
  closed: number
}

export type ScenePathNodeV5 = {
  position: Array<number>,
  rotation: Array<number>,
  radius: number,
  flags: number,
  smoothing: number,
  singlesided: number
}

export type SceneGameMeshV5 = {
  indices: Array<number>,
  vertices: Array<Array<number>>,
  edges: Array<SceneEdgeV5>,
  moppInfo: Array<number>,
  moppBytes: Array<number>,
  surfaceFlags: Array<number>
}

export type SceneEdgeV5 = {
  indices: Array<number>,
  triangles: Array<number>
}

export type SceneFileGameV6 = {
  paths: Array<ScenePathV6>,
  meshes: Array<SceneGameMeshV6>,
  surfaces: Array<SceneGameSurfaceV6>
}

export type ScenePathV6 = {
  properties: Array<BigInt>,
  points: Array<ScenePathNodeV6>,
  closed: number
}

export type ScenePathNodeV6 = {
  position: Array<number>,
  rotation: Array<number>,
  flags: number,
  smoothing: number,
  singlesided: number
}

export type SceneGameMeshV6 = {
  indices: Array<number>,
  vertices: Array<Array<number>>,
  edges: Array<SceneEdgeV6>,
  moppInfo: Array<number>,
  moppBytes: Array<number>,
  surfaces: Array<number>
}

export type SceneEdgeV6 = {
  indices: Array<number>,
  triangles: Array<number>
}

export type SceneGameSurfaceV6 = {
  tokens: Array<BigInt>
}