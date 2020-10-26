import { Uint64, Uint16, FixedArray, Float32, DynArray, Uint32, CString, Uint8, Pointer, RefArray } from "../src/types";

export const V0 = {
  chunkName: "GEOM",
  name: "ModelFileGeometryV0",
  version: 0,
  definitions: {
    ModelMeshDataV65: {
      visBone: Uint64,
      morphTargets: DynArray("ModelMeshMorphTargetV65"),
      flags: Uint32,
      seamVertIndices: DynArray(Uint32),
      meshName: Uint64,
      minBound: FixedArray(Float32, 3),
      maxBound: FixedArray(Float32, 3),
      bounds: DynArray("GrBoundData"),
      materialIndex: Uint32,
      materialName: CString(),
      boneNames: DynArray(CString()),
      geometry: Pointer("ModelMeshGeometryV0")
    },
    ModelMeshMorphTargetV65: {
      positions: DynArray("ModelMeshMorphVertV65"),
      normals: DynArray("ModelMeshMorphVertV65"),
      mesh: Uint64
    },
    ModelMeshMorphVertV65: {
      index: Uint16,
      vector: FixedArray(Float32, 3)
    },
    GrBoundData: {
      center: FixedArray(Float32, 3),
      boxExtent: FixedArray(Float32, 3),
      sphereRadius: Float32
    },
    ModelMeshGeometryV0: {
      verts: "ModelMeshVertexDataV0",
      indices: "ModelMeshIndexDataV0",
      lods: DynArray("ModelMeshIndexDataV0")
    },
    ModelMeshVertexDataV0: {
      vertexCount: Uint32,
      mesh: "PackVertexType"
    },
    PackVertexType: {
      fvf: Uint32,
      vertices: DynArray(Uint8)
    },
    ModelMeshIndexDataV0: {
      indices: DynArray(Uint16)
    }
  },
  root: {
    meshes: RefArray("ModelMeshDataV65")
  }
};

export const V1 = {
  chunkName: "GEOM",
  name: "ModelFileGeometryV1",
  version: 1,
  definitions: {
    ModelMeshDataV66: {
      visBone: Uint64,
      morphTargets: DynArray("ModelMeshMorphTargetV66"),
      flags: Uint32,
      seamVertIndices: DynArray(Uint32),
      meshName: Uint64,
      minBound: FixedArray(Float32, 3),
      maxBound: FixedArray(Float32, 3),
      bounds: DynArray("GrBoundData"),
      materialIndex: Uint32,
      materialName: CString(),
      boneBindings: DynArray(Uint64),
      geometry: Pointer("ModelMeshGeometryV1")
    },
    ModelMeshMorphTargetV66: {
      positions: DynArray("ModelMeshMorphVertV66"),
      normals: DynArray("ModelMeshMorphVertV66"),
      mesh: Uint64
    },
    ModelMeshMorphVertV66: {
      index: Uint16,
      vector: FixedArray(Float32, 3)
    },
    GrBoundData: {
      center: FixedArray(Float32, 3),
      boxExtent: FixedArray(Float32, 3),
      sphereRadius: Float32
    },
    ModelMeshGeometryV1: {
      verts: "ModelMeshVertexDataV1",
      indices: "ModelMeshIndexDataV1",
      lods: DynArray("ModelMeshIndexDataV1"),
      transforms: DynArray(Uint32)
    },
    ModelMeshVertexDataV1: {
      vertexCount: Uint32,
      mesh: "PackVertexType"
    },
    PackVertexType: {
      fvf: Uint32,
      vertices: DynArray(Uint8)
    },
    ModelMeshIndexDataV1: {
      indices: DynArray(Uint16)
    }
  },
  root: {
    meshes: RefArray("ModelMeshDataV66")
  }
};

export const latest = V1;
export const definitionArray = [V0, V1];