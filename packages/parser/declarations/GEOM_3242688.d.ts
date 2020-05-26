

export type ModelFileGeometryV0 = {
  meshes: Array<ModelMeshDataV65>
}

export type ModelMeshDataV65 = {
  visBone: number,
  morphTargets: Array<ModelMeshMorphTargetV65>,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: number,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string,
  boneNames: Array<string>,
  geometry: ModelMeshGeometryV0
}

export type ModelMeshMorphTargetV65 = {
  positions: Array<ModelMeshMorphVertV65>,
  normals: Array<ModelMeshMorphVertV65>,
  mesh: number
}

export type ModelMeshMorphVertV65 = {
  index: number,
  vector: Array<number>
}

export type GrBoundData = {
  center: Array<number>,
  boxExtent: Array<number>,
  sphereRadius: number
}

export type ModelMeshGeometryV0 = {
  verts: ModelMeshVertexDataV0,
  indices: ModelMeshIndexDataV0,
  lods: Array<ModelMeshIndexDataV0>
}

export type ModelMeshVertexDataV0 = {
  vertexCount: number,
  mesh: PackVertexType
}

export type PackVertexType = {
  fvf: number,
  vertices: Array<number>
}

export type ModelMeshIndexDataV0 = {
  indices: Array<number>
}

export type ModelFileGeometryV1 = {
  meshes: Array<ModelMeshDataV66>
}

export type ModelMeshDataV66 = {
  visBone: number,
  morphTargets: Array<ModelMeshMorphTargetV66>,
  flags: number,
  seamVertIndices: Array<number>,
  meshName: number,
  minBound: Array<number>,
  maxBound: Array<number>,
  bounds: Array<GrBoundData>,
  materialIndex: number,
  materialName: string,
  boneBindings: Array<number>,
  geometry: ModelMeshGeometryV1
}

export type ModelMeshMorphTargetV66 = {
  positions: Array<ModelMeshMorphVertV66>,
  normals: Array<ModelMeshMorphVertV66>,
  mesh: number
}

export type ModelMeshMorphVertV66 = {
  index: number,
  vector: Array<number>
}

export type ModelMeshGeometryV1 = {
  verts: ModelMeshVertexDataV1,
  indices: ModelMeshIndexDataV1,
  lods: Array<ModelMeshIndexDataV1>,
  transforms: Array<number>
}

export type ModelMeshVertexDataV1 = {
  vertexCount: number,
  mesh: PackVertexType
}

export type ModelMeshIndexDataV1 = {
  indices: Array<number>
}