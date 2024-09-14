export namespace V0_N {
  export type ModelFileGeometryV0 = {
    meshes: Array<ModelMeshDataV65>
  }

  export type ModelMeshDataV65 = {
    visBone: bigint,
    morphTargets: Array<ModelMeshMorphTargetV65>,
    flags: number,
    seamVertIndices: Uint32Array,
    meshName: bigint,
    minBound: Float32Array,
    maxBound: Float32Array,
    bounds: Array<GrBoundData>,
    materialIndex: number,
    materialName: string,
    boneNames: Array<string>,
    geometry: ModelMeshGeometryV0
  }

  export type ModelMeshMorphTargetV65 = {
    positions: Array<ModelMeshMorphVertV65>,
    normals: Array<ModelMeshMorphVertV65>,
    mesh: bigint
  }

  export type ModelMeshMorphVertV65 = {
    index: number,
    vector: Float32Array
  }

  export type GrBoundData = {
    center: Float32Array,
    boxExtent: Float32Array,
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
    vertices: Uint8Array
  }

  export type ModelMeshIndexDataV0 = {
    indices: Uint16Array
  }

}

export type V0 = V0_N.ModelFileGeometryV0;

export namespace V1_N {
  export type ModelFileGeometryV1 = {
    meshes: Array<ModelMeshDataV66>
  }

  export type ModelMeshDataV66 = {
    visBone: bigint,
    morphTargets: Array<ModelMeshMorphTargetV66>,
    flags: number,
    seamVertIndices: Uint32Array,
    meshName: bigint,
    minBound: Float32Array,
    maxBound: Float32Array,
    bounds: Array<GrBoundData>,
    materialIndex: number,
    materialName: string,
    boneBindings: BigUint64Array,
    geometry: ModelMeshGeometryV1
  }

  export type ModelMeshMorphTargetV66 = {
    positions: Array<ModelMeshMorphVertV66>,
    normals: Array<ModelMeshMorphVertV66>,
    mesh: bigint
  }

  export type ModelMeshMorphVertV66 = {
    index: number,
    vector: Float32Array
  }

  export type GrBoundData = {
    center: Float32Array,
    boxExtent: Float32Array,
    sphereRadius: number
  }

  export type ModelMeshGeometryV1 = {
    verts: ModelMeshVertexDataV1,
    indices: ModelMeshIndexDataV1,
    lods: Array<ModelMeshIndexDataV1>,
    transforms: Uint32Array
  }

  export type ModelMeshVertexDataV1 = {
    vertexCount: number,
    mesh: PackVertexType
  }

  export type PackVertexType = {
    fvf: number,
    vertices: Uint8Array
  }

  export type ModelMeshIndexDataV1 = {
    indices: Uint16Array
  }

}

export type V1 = V1_N.ModelFileGeometryV1;

export type V0_U = V0 | V1;
export type V1_U = V1;
