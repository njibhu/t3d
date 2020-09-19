let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: GEOM, versions: 2, strucTab: 0x1773278
  /// ==================================================

  {
    name: "GEOM",
    versions: {
      // => Version: 1, ReferencedFunction: 0xF28010
      1: function() {
        this.ModelMeshMorphVertV66 = ["index", "uint16", "vector", ["[]", "float32", 3]];

        this.ModelMeshMorphTargetV66 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV66),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV66),
          "mesh",
          Utils.getQWordReader(),
        ];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32",
        ];

        this.PackVertexType = ["fvf", "uint32", "vertices", Utils.getArrayReader("uint8")];

        this.ModelMeshVertexDataV1 = ["vertexCount", "uint32", "mesh", this.PackVertexType];

        this.ModelMeshIndexDataV1 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshGeometryV1 = [
          "verts",
          this.ModelMeshVertexDataV1,
          "indices",
          this.ModelMeshIndexDataV1,
          "lods",
          Utils.getArrayReader(this.ModelMeshIndexDataV1),
          "transforms",
          Utils.getArrayReader("uint32"),
        ];

        this.ModelMeshDataV66 = [
          "visBone",
          Utils.getQWordReader(),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV66),
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3],
          "bounds",
          Utils.getArrayReader(this.GrBoundData),
          "materialIndex",
          "uint32",
          "materialName",
          Utils.getStringReader(),
          "boneBindings",
          Utils.getArrayReader(Utils.getQWordReader()),
          "geometry",
          Utils.getPointerReader(this.ModelMeshGeometryV1),
        ];

        this.__root = this.ModelFileGeometryV1 = ["meshes", Utils.getRefArrayReader(this.ModelMeshDataV66)];
      },

      // => Version: 0
      0: function() {
        this.ModelMeshMorphVertV65 = ["index", "uint16", "vector", ["[]", "float32", 3]];

        this.ModelMeshMorphTargetV65 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV65),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV65),
          "mesh",
          Utils.getQWordReader(),
        ];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32",
        ];

        this.PackVertexType = ["fvf", "uint32", "vertices", Utils.getArrayReader("uint8")];

        this.ModelMeshVertexDataV0 = ["vertexCount", "uint32", "mesh", this.PackVertexType];

        this.ModelMeshIndexDataV0 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshGeometryV0 = [
          "verts",
          this.ModelMeshVertexDataV0,
          "indices",
          this.ModelMeshIndexDataV0,
          "lods",
          Utils.getArrayReader(this.ModelMeshIndexDataV0),
        ];

        this.ModelMeshDataV65 = [
          "visBone",
          Utils.getQWordReader(),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV65),
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3],
          "bounds",
          Utils.getArrayReader(this.GrBoundData),
          "materialIndex",
          "uint32",
          "materialName",
          Utils.getStringReader(),
          "boneNames",
          Utils.getArrayReader(Utils.getStringReader()),
          "geometry",
          Utils.getPointerReader(this.ModelMeshGeometryV0),
        ];

        this.__root = this.ModelFileGeometryV0 = ["meshes", Utils.getRefArrayReader(this.ModelMeshDataV65)];
      },
    },
  },
];
