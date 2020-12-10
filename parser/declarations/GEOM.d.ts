export namespace V0_N {
  export type ModelFileGeometryV0 = {
    meshes: Array<ModelMeshDataV65>
  }

  export type ModelMeshDataV65 = {
    visBone: BigInt,
    morphTargets: Array<ModelMeshMorphTargetV65>,
    flags: number,
    seamVertIndices: Array<number>,
    meshName: BigInt,
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
    mesh: BigInt
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

}

export type V0 = V0_N.ModelFileGeometryV0;

export namespace V1_N {
  export type ModelFileGeometryV1 = {
    meshes: Array<ModelMeshDataV66>
  }

  export type ModelMeshDataV66 = {
    visBone: BigInt,
    morphTargets: Array<ModelMeshMorphTargetV66>,
    flags: number,
    seamVertIndices: Array<number>,
    meshName: BigInt,
    minBound: Array<number>,
    maxBound: Array<number>,
    bounds: Array<GrBoundData>,
    materialIndex: number,
    materialName: string,
    boneBindings: Array<BigInt>,
    geometry: ModelMeshGeometryV1
  }

  export type ModelMeshMorphTargetV66 = {
    positions: Array<ModelMeshMorphVertV66>,
    normals: Array<ModelMeshMorphVertV66>,
    mesh: BigInt
  }

  export type ModelMeshMorphVertV66 = {
    index: number,
    vector: Array<number>
  }

  export type GrBoundData = {
    center: Array<number>,
    boxExtent: Array<number>,
    sphereRadius: number
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

  export type PackVertexType = {
    fvf: number,
    vertices: Array<number>
  }

  export type ModelMeshIndexDataV1 = {
    indices: Array<number>
  }

}

export type V1 = V1_N.ModelFileGeometryV1;

export type V0_U = V0 | V1;
export type V1_U = V1;
