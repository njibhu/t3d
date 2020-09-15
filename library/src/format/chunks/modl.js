let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: MODL, versions: 66, strucTab: 0x1772BB0
  /// ==================================================

  {
    name: "MODL",
    versions: {
      // => Version: 65, ReferencedFunction: 0xF2C4D0
      65: function() {
        this.ModelTextureDataV65 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV65 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV65 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV65 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV65 = [
          "flags",
          "uint32",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2],
          "scrollFreq",
          ["[]", "float32", 2],
          "scale",
          ["[]", "float32", 2],
          "scaleFreq",
          ["[]", "float32", 2],
          "rotate",
          "float32",
          "rotate",
          "float32"
        ];

        this.ModelMaterialDataV65 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV65),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV65),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV65),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV65),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV65),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV65 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV65)
        ];

        this.ModelParticleCloudV65 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV65 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV65 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V65 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV65 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "affinity",
          "uint32",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV65),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV65),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV65),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V65),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV65 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV65),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV65)
        ];

        this.ModelObstacleDataV65 = [
          "affinity",
          "uint32",
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V65)
        ];

        this.ModelStreakV65 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV65 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV65 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV65),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV65)
        ];

        this.ModelEffectLightV65 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV65 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV65)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV65 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV65 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV65)
        ];

        this.ModelClothGroupBindingV65 = [
          "strippedToken",
          Utils.getQWordReader(),
          "boneName",
          Utils.getStringReader(),
          "OBBMin",
          ["[]", "float32", 3],
          "OBBMax",
          ["[]", "float32", 3]
        ];

        this.ModelClothSoftLockV65 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV65 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV65 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV65),
          "groupBindings",
          Utils.getArrayReader(this.ModelClothGroupBindingV65),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV65),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV65),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV65),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lockedNormals",
          Utils.getArrayReader("uint32"),
          "lockedTanegents",
          Utils.getArrayReader("uint32"),
          "lockedBitangents",
          Utils.getArrayReader("uint32"),
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8",
          "translateWeight",
          "float32",
          "visBone",
          Utils.getQWordReader()
        ];

        this.ModelEffectWindV65 = [
          "bone",
          Utils.getQWordReader(),
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelWindDataV65 = [
          "effectWind",
          Utils.getArrayReader(this.ModelEffectWindV65)
        ];

        this.ModelLightningSystemV65 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV65 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV65),
          "fps",
          "float32",
          "frequency",
          "float32",
          "groupMax",
          "uint32",
          "groupMin",
          "uint32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "texOffset",
          "float32",
          "texRange",
          ["[]", "float32", 2],
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thicknessPreset",
          "uint8",
          "thicknessRange",
          ["[]", "float32", 2],
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV65 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV65 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV65),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV65),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV65)
        ];

        this.ModelSoftBodyDataV65 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV65 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.ModelBoundingSphereV65 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.__root = this.ModelFileDataV65 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV65),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV65),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV65),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV65),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV65),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV65),
          "windData",
          Utils.getPointerReader(this.ModelWindDataV65),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV65),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV65),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV65),
          "boundingSphere",
          Utils.getPointerReader(this.ModelBoundingSphereV65)
        ];
      },

      // => Version: 64
      64: function() {
        this.ModelTextureDataV64 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV64 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV64 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV64 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV64 = [
          "flags",
          "uint32",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2],
          "scrollFreq",
          ["[]", "float32", 2],
          "scale",
          ["[]", "float32", 2],
          "scaleFreq",
          ["[]", "float32", 2],
          "rotate",
          "float32",
          "rotate",
          "float32"
        ];

        this.ModelMaterialDataV64 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV64),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV64),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV64),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV64),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV64),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV64 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV64)
        ];

        this.ModelMeshLodDataV64 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV64 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV64 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV64),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV64),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV64 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV64),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV64),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelParticleCloudV64 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV64 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV64 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V64 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV64 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "affinity",
          "uint32",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV64),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV64),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV64),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V64),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV64 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV64),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV64)
        ];

        this.ModelObstacleDataV64 = [
          "affinity",
          "uint32",
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V64)
        ];

        this.ModelStreakV64 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV64 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV64 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV64),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV64)
        ];

        this.ModelEffectLightV64 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV64 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV64)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV64 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV64 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV64)
        ];

        this.ModelClothGroupBindingV64 = [
          "strippedToken",
          Utils.getQWordReader(),
          "boneName",
          Utils.getStringReader(),
          "OBBMin",
          ["[]", "float32", 3],
          "OBBMax",
          ["[]", "float32", 3]
        ];

        this.ModelClothSoftLockV64 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV64 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV64 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV64),
          "groupBindings",
          Utils.getArrayReader(this.ModelClothGroupBindingV64),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV64),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV64),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV64),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lockedNormals",
          Utils.getArrayReader("uint32"),
          "lockedTanegents",
          Utils.getArrayReader("uint32"),
          "lockedBitangents",
          Utils.getArrayReader("uint32"),
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8",
          "translateWeight",
          "float32",
          "visBone",
          Utils.getQWordReader()
        ];

        this.ModelEffectWindV64 = [
          "bone",
          Utils.getQWordReader(),
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelWindDataV64 = [
          "effectWind",
          Utils.getArrayReader(this.ModelEffectWindV64)
        ];

        this.ModelLightningSystemV64 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV64 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV64),
          "fps",
          "float32",
          "frequency",
          "float32",
          "groupMax",
          "uint32",
          "groupMin",
          "uint32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "texOffset",
          "float32",
          "texRange",
          ["[]", "float32", 2],
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thicknessPreset",
          "uint8",
          "thicknessRange",
          ["[]", "float32", 2],
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV64 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV64 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV64),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV64),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV64)
        ];

        this.ModelSoftBodyDataV64 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV64 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.ModelBoundingSphereV64 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.__root = this.ModelFileDataV64 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV64),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV64),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV64),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV64),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV64),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV64),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV64),
          "windData",
          Utils.getPointerReader(this.ModelWindDataV64),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV64),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV64),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV64),
          "boundingSphere",
          Utils.getPointerReader(this.ModelBoundingSphereV64)
        ];
      },

      // => Version: 63, ReferencedFunction: 0xF2C410
      63: function() {
        this.ModelTextureDataV63 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV63 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV63 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV63 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV63 = [
          "flags",
          "uint32",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV63 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV63),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV63),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV63),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV63),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV63),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV63 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV63)
        ];

        this.ModelMeshLodDataV63 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV63 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV63 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV63),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV63),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV63 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV63),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV63),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelParticleCloudV63 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV63 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV63 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V63 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV63 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "affinity",
          "uint32",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV63),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV63),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV63),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V63),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV63 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV63),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV63)
        ];

        this.ModelObstacleDataV63 = [
          "affinity",
          "uint32",
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V63)
        ];

        this.ModelStreakV63 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV63 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV63 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV63),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV63)
        ];

        this.ModelEffectLightV63 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV63 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV63)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV63 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV63 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV63)
        ];

        this.ModelClothGroupBindingV63 = [
          "strippedToken",
          Utils.getQWordReader(),
          "boneName",
          Utils.getStringReader(),
          "OBBMin",
          ["[]", "float32", 3],
          "OBBMax",
          ["[]", "float32", 3]
        ];

        this.ModelClothSoftLockV63 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV63 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV63 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV63),
          "groupBindings",
          Utils.getArrayReader(this.ModelClothGroupBindingV63),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV63),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV63),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV63),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lockedNormals",
          Utils.getArrayReader("uint32"),
          "lockedTanegents",
          Utils.getArrayReader("uint32"),
          "lockedBitangents",
          Utils.getArrayReader("uint32"),
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8",
          "translateWeight",
          "float32"
        ];

        this.ModelEffectWindV63 = [
          "bone",
          Utils.getQWordReader(),
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelWindDataV63 = [
          "effectWind",
          Utils.getArrayReader(this.ModelEffectWindV63)
        ];

        this.ModelLightningSystemV63 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV63 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV63),
          "fps",
          "float32",
          "frequency",
          "float32",
          "groupMax",
          "uint32",
          "groupMin",
          "uint32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "texOffset",
          "float32",
          "texRange",
          ["[]", "float32", 2],
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thicknessPreset",
          "uint8",
          "thicknessRange",
          ["[]", "float32", 2],
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV63 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV63 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV63),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV63),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV63)
        ];

        this.ModelSoftBodyDataV63 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV63 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.ModelBoundingSphereV63 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.__root = this.ModelFileDataV63 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV63),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV63),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV63),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV63),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV63),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV63),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV63),
          "windData",
          Utils.getPointerReader(this.ModelWindDataV63),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV63),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV63),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV63),
          "boundingSphere",
          Utils.getPointerReader(this.ModelBoundingSphereV63)
        ];
      },

      // => Version: 62, ReferencedFunction: 0xF2C2F0
      62: function() {
        this.ModelTextureDataV62 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV62 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV62 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV62 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV62 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV62 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV62),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV62),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV62),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV62),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV62),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV62 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV62)
        ];

        this.ModelMeshLodDataV62 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV62 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV62 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV62),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV62),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV62 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV62),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV62),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelParticleCloudV62 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV62 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV62 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V62 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV62 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "affinity",
          "uint32",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV62),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV62),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV62),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V62),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV62 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV62),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV62)
        ];

        this.ModelObstacleDataV62 = [
          "affinity",
          "uint32",
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V62)
        ];

        this.ModelStreakV62 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV62 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV62 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV62),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV62)
        ];

        this.ModelEffectLightV62 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV62 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV62)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV62 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV62 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV62)
        ];

        this.ModelClothGroupBindingV62 = [
          "strippedToken",
          Utils.getQWordReader(),
          "boneName",
          Utils.getStringReader(),
          "OBBMin",
          ["[]", "float32", 3],
          "OBBMax",
          ["[]", "float32", 3]
        ];

        this.ModelClothSoftLockV62 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV62 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV62 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV62),
          "groupBindings",
          Utils.getArrayReader(this.ModelClothGroupBindingV62),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV62),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV62),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV62),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lockedNormals",
          Utils.getArrayReader("uint32"),
          "lockedTanegents",
          Utils.getArrayReader("uint32"),
          "lockedBitangents",
          Utils.getArrayReader("uint32"),
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8",
          "translateWeight",
          "float32"
        ];

        this.ModelEffectWindV62 = [
          "bone",
          Utils.getQWordReader(),
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelWindDataV62 = [
          "effectWind",
          Utils.getArrayReader(this.ModelEffectWindV62)
        ];

        this.ModelLightningSystemV62 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV62 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV62),
          "fps",
          "float32",
          "frequency",
          "float32",
          "groupMax",
          "uint32",
          "groupMin",
          "uint32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "texOffset",
          "float32",
          "texRange",
          ["[]", "float32", 2],
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thicknessPreset",
          "uint8",
          "thicknessRange",
          ["[]", "float32", 2],
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV62 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV62 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV62),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV62),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV62)
        ];

        this.ModelSoftBodyDataV62 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV62 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.ModelBoundingSphereV62 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.__root = this.ModelFileDataV62 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV62),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV62),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV62),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV62),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV62),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV62),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV62),
          "windData",
          Utils.getPointerReader(this.ModelWindDataV62),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV62),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV62),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV62),
          "boundingSphere",
          Utils.getPointerReader(this.ModelBoundingSphereV62)
        ];
      },

      // => Version: 61, ReferencedFunction: 0xF2C290
      61: function() {
        this.ModelTextureDataV61 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV61 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV61 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV61 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV61 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV61 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV61),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV61),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV61),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV61),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV61),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV61 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV61)
        ];

        this.ModelMeshLodDataV61 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV61 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV61 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV61),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV61),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV61 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV61),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV61),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV61 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV61 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV61,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneSymmetryV61 = [
          "boneLeft",
          Utils.getQWordReader(),
          "boneRight",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV61 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV61),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneSymmetries",
          Utils.getArrayReader(this.ModelBoneSymmetryV61)
        ];

        this.ModelMeshBindingDataV61 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV61 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV61 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV61),
          "InitialPlacement",
          this.ModelTransformDataV61,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV61),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV61),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV61 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV61 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV61 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV61 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V61 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV61 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "affinity",
          "uint32",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV61),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV61),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV61),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V61),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV61 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV61),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV61)
        ];

        this.ModelObstacleDataV61 = [
          "affinity",
          "uint32",
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V61)
        ];

        this.ModelStreakV61 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV61 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV61 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV61),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV61)
        ];

        this.ModelEffectLightV61 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV61 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV61)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV61 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV61 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV61)
        ];

        this.ModelClothGroupBindingV61 = [
          "strippedToken",
          Utils.getQWordReader(),
          "boneName",
          Utils.getStringReader(),
          "OBBMin",
          ["[]", "float32", 3],
          "OBBMax",
          ["[]", "float32", 3]
        ];

        this.ModelClothSoftLockV61 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV61 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV61 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV61),
          "groupBindings",
          Utils.getArrayReader(this.ModelClothGroupBindingV61),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV61),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV61),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV61),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lockedNormals",
          Utils.getArrayReader("uint32"),
          "lockedTanegents",
          Utils.getArrayReader("uint32"),
          "lockedBitangents",
          Utils.getArrayReader("uint32"),
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8"
        ];

        this.ModelEffectWindV61 = [
          "bone",
          Utils.getQWordReader(),
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelWindDataV61 = [
          "effectWind",
          Utils.getArrayReader(this.ModelEffectWindV61)
        ];

        this.ModelLightningSystemV61 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV61 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV61),
          "fps",
          "float32",
          "frequency",
          "float32",
          "groupMax",
          "uint32",
          "groupMin",
          "uint32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "texOffset",
          "float32",
          "texRange",
          ["[]", "float32", 2],
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thicknessPreset",
          "uint8",
          "thicknessRange",
          ["[]", "float32", 2],
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV61 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV61 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV61),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV61),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV61)
        ];

        this.ModelBoneConstraintLinkV61 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV61 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV61),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV61 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV61 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.ModelFixedOffsetDataV61 = [
          "name",
          Utils.getQWordReader(),
          "parentBone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3]
        ];

        this.__root = this.ModelFileDataV61 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV61),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV61),
          "model",
          Utils.getPointerReader(this.ModelModelDataV61),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV61),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV61),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV61),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV61),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV61),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV61),
          "windData",
          Utils.getPointerReader(this.ModelWindDataV61),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV61),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV61),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV61),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV61),
          "fixedOffsetData",
          Utils.getArrayReader(this.ModelFixedOffsetDataV61),
          "modelReference",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 60, ReferencedFunction: 0xF2BE90
      60: function() {
        this.ModelTextureDataV60 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV60 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV60 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV60 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV60 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV60 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV60),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV60),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV60),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV60),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV60),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV60 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV60)
        ];

        this.ModelMeshLodDataV60 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV60 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV60 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV60),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV60),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV60 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV60),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV60),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV60 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV60 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV60,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneSymmetryV60 = [
          "boneLeft",
          Utils.getQWordReader(),
          "boneRight",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV60 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV60),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneSymmetries",
          Utils.getArrayReader(this.ModelBoneSymmetryV60)
        ];

        this.ModelMeshBindingDataV60 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV60 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV60 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV60),
          "InitialPlacement",
          this.ModelTransformDataV60,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV60),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV60),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV60 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV60 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV60 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV60 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V60 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV60 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV60),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV60),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV60),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V60),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV60 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV60),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV60)
        ];

        this.ModelObstacleDataV60 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V60)
        ];

        this.ModelStreakV60 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV60 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV60 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV60),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV60)
        ];

        this.ModelEffectLightV60 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV60 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV60)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV60 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV60 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV60)
        ];

        this.ModelClothGroupBindingV60 = [
          "strippedToken",
          Utils.getQWordReader(),
          "boneName",
          Utils.getStringReader(),
          "OBBMin",
          ["[]", "float32", 3],
          "OBBMax",
          ["[]", "float32", 3]
        ];

        this.ModelClothSoftLockV60 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV60 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV60 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV60),
          "groupBindings",
          Utils.getArrayReader(this.ModelClothGroupBindingV60),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV60),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV60),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV60),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lockedNormals",
          Utils.getArrayReader("uint32"),
          "lockedTanegents",
          Utils.getArrayReader("uint32"),
          "lockedBitangents",
          Utils.getArrayReader("uint32"),
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8"
        ];

        this.ModelLightningSystemV60 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV60 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV60),
          "fps",
          "float32",
          "frequency",
          "float32",
          "groupMax",
          "uint32",
          "groupMin",
          "uint32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "texOffset",
          "float32",
          "texRange",
          ["[]", "float32", 2],
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thicknessPreset",
          "uint8",
          "thicknessRange",
          ["[]", "float32", 2],
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV60 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV60 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV60),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV60),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV60)
        ];

        this.ModelBoneConstraintLinkV60 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV60 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV60),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV60 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV60 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.ModelFixedOffsetDataV60 = [
          "name",
          Utils.getQWordReader(),
          "parentBone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3]
        ];

        this.__root = this.ModelFileDataV60 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV60),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV60),
          "model",
          Utils.getPointerReader(this.ModelModelDataV60),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV60),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV60),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV60),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV60),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV60),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV60),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV60),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV60),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV60),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV60),
          "fixedOffsetData",
          Utils.getArrayReader(this.ModelFixedOffsetDataV60),
          "modelReference",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 59, ReferencedFunction: 0xF2BE40
      59: function() {
        this.ModelTextureDataV59 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV59 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV59 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV59 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV59 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV59 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV59),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV59),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV59),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV59),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV59),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV59 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV59)
        ];

        this.ModelMeshLodDataV59 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV59 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV59 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV59),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV59),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV59 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV59),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV59),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV59 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV59 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV59,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneSymmetryV59 = [
          "boneLeft",
          Utils.getQWordReader(),
          "boneRight",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV59 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV59),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneSymmetries",
          Utils.getArrayReader(this.ModelBoneSymmetryV59)
        ];

        this.ModelMeshBindingDataV59 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV59 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV59 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV59),
          "InitialPlacement",
          this.ModelTransformDataV59,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV59),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV59),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV59 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV59 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV59 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV59 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V59 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV59 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV59),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV59),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV59),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V59),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV59 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV59),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV59)
        ];

        this.ModelObstacleDataV59 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V59)
        ];

        this.ModelStreakV59 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV59 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV59 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV59),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV59)
        ];

        this.ModelEffectLightV59 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV59 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV59)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV59 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV59 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV59)
        ];

        this.ModelClothSoftLockV59 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV59 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV59 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV59),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV59),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV59),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV59),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lockedNormals",
          Utils.getArrayReader("uint32"),
          "lockedTanegents",
          Utils.getArrayReader("uint32"),
          "lockedBitangents",
          Utils.getArrayReader("uint32"),
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8"
        ];

        this.ModelLightningSystemV59 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV59 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV59),
          "fps",
          "float32",
          "frequency",
          "float32",
          "groupMax",
          "uint32",
          "groupMin",
          "uint32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "texOffset",
          "float32",
          "texRange",
          ["[]", "float32", 2],
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thicknessPreset",
          "uint8",
          "thicknessRange",
          ["[]", "float32", 2],
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV59 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV59 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV59),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV59),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV59)
        ];

        this.ModelBoneConstraintLinkV59 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV59 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV59),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV59 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV59 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.ModelFixedOffsetDataV59 = [
          "name",
          Utils.getQWordReader(),
          "parentBone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3]
        ];

        this.__root = this.ModelFileDataV59 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV59),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV59),
          "model",
          Utils.getPointerReader(this.ModelModelDataV59),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV59),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV59),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV59),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV59),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV59),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV59),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV59),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV59),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV59),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV59),
          "fixedOffsetData",
          Utils.getArrayReader(this.ModelFixedOffsetDataV59),
          "modelReference",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 58, ReferencedFunction: 0xF2BD50
      58: function() {
        this.ModelTextureDataV58 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV58 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV58 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV58 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV58 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV58 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV58),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV58),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV58),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV58),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV58),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV58 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV58)
        ];

        this.ModelMeshLodDataV58 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV58 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV58 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV58),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV58),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV58 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV58),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV58),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV58 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV58 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV58,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneSymmetryV58 = [
          "boneLeft",
          Utils.getQWordReader(),
          "boneRight",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV58 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV58),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneSymmetries",
          Utils.getArrayReader(this.ModelBoneSymmetryV58)
        ];

        this.ModelMeshBindingDataV58 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV58 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV58 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV58),
          "InitialPlacement",
          this.ModelTransformDataV58,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV58),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV58),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV58 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV58 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV58 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV58 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V58 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV58 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV58),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV58),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV58),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V58),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV58 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV58),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV58)
        ];

        this.ModelObstacleDataV58 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V58)
        ];

        this.ModelStreakV58 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV58 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV58 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV58),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV58)
        ];

        this.ModelEffectLightV58 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV58 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV58)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV58 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV58 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV58)
        ];

        this.ModelClothSoftLockV58 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV58 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV58 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV58),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV58),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV58),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV58),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lockedNormals",
          Utils.getArrayReader("uint32"),
          "lockedTanegents",
          Utils.getArrayReader("uint32"),
          "lockedBitangents",
          Utils.getArrayReader("uint32"),
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8"
        ];

        this.ModelLightningSystemV58 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV58 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV58),
          "fps",
          "float32",
          "frequency",
          "float32",
          "groupMax",
          "uint32",
          "groupMin",
          "uint32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thicknessPreset",
          "uint8",
          "thicknessRange",
          ["[]", "float32", 2],
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV58 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV58 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV58),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV58),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV58)
        ];

        this.ModelBoneConstraintLinkV58 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV58 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV58),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV58 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV58 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.ModelFixedOffsetDataV58 = [
          "name",
          Utils.getQWordReader(),
          "parentBone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3]
        ];

        this.__root = this.ModelFileDataV58 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV58),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV58),
          "model",
          Utils.getPointerReader(this.ModelModelDataV58),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV58),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV58),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV58),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV58),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV58),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV58),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV58),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV58),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV58),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV58),
          "fixedOffsetData",
          Utils.getArrayReader(this.ModelFixedOffsetDataV58),
          "modelReference",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 57
      57: function() {
        this.ModelTextureDataV57 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV57 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV57 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV57 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV57 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV57 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV57),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV57),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV57),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV57),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV57),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV57 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV57)
        ];

        this.ModelMeshLodDataV57 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV57 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV57 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV57),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV57),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV57 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV57),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV57),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV57 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV57 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV57,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneSymmetryV57 = [
          "boneLeft",
          Utils.getQWordReader(),
          "boneRight",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV57 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV57),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneSymmetries",
          Utils.getArrayReader(this.ModelBoneSymmetryV57)
        ];

        this.ModelMeshBindingDataV57 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV57 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV57 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV57),
          "InitialPlacement",
          this.ModelTransformDataV57,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV57),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV57),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV57 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV57 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV57 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV57 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V57 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV57 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV57),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV57),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV57),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V57),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV57 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV57),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV57)
        ];

        this.ModelObstacleDataV57 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V57)
        ];

        this.ModelStreakV57 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV57 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV57 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV57),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV57)
        ];

        this.ModelEffectLightV57 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV57 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV57)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV57 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV57 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV57)
        ];

        this.ModelClothSoftLockV57 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV57 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV57 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV57),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV57),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV57),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV57),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8"
        ];

        this.ModelLightningSystemV57 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV57 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV57 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV57 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV57),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV57),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV57)
        ];

        this.ModelBoneConstraintLinkV57 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV57 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV57),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV57 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV57 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.ModelFixedOffsetDataV57 = [
          "name",
          Utils.getQWordReader(),
          "parentBone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3]
        ];

        this.__root = this.ModelFileDataV57 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV57),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV57),
          "model",
          Utils.getPointerReader(this.ModelModelDataV57),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV57),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV57),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV57),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV57),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV57),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV57),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV57),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV57),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV57),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV57),
          "fixedOffsetData",
          Utils.getArrayReader(this.ModelFixedOffsetDataV57),
          "modelReference",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 56
      56: function() {
        this.ModelTextureDataV56 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV56 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV56 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV56 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV56 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV56 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV56),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV56),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV56),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV56),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV56),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV56 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV56)
        ];

        this.ModelMeshLodDataV56 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV56 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV56 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV56),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV56),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV56 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV56),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV56),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV56 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV56 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV56,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneSymmetryV56 = [
          "boneLeft",
          Utils.getQWordReader(),
          "boneRight",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV56 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV56),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneSymmetries",
          Utils.getArrayReader(this.ModelBoneSymmetryV56)
        ];

        this.ModelMeshBindingDataV56 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV56 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV56 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV56),
          "InitialPlacement",
          this.ModelTransformDataV56,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV56),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV56),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV56 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV56 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV56 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV56 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V56 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV56 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV56),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV56),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV56),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V56),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV56 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV56),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV56)
        ];

        this.ModelObstacleDataV56 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V56)
        ];

        this.ModelStreakV56 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV56 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV56 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV56),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV56)
        ];

        this.ModelEffectLightV56 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV56 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV56)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV56 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV56 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV56)
        ];

        this.ModelClothSoftLockV56 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV56 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV56 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV56),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV56),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV56),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV56),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8"
        ];

        this.ModelLightningSystemV56 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV56 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV56 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV56 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV56),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV56),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV56)
        ];

        this.ModelBoneConstraintLinkV56 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV56 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV56),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV56 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV56 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.__root = this.ModelFileDataV56 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV56),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV56),
          "model",
          Utils.getPointerReader(this.ModelModelDataV56),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV56),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV56),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV56),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV56),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV56),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV56),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV56),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV56),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV56),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV56),
          "modelReference",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 55, ReferencedFunction: 0xF2BC60
      55: function() {
        this.ModelTextureDataV55 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV55 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV55 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV55 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV55 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV55 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV55),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV55),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV55),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV55),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV55),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV55 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV55)
        ];

        this.ModelMeshLodDataV55 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV55 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV55 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV55),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV55),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV55 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV55),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV55),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV55 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV55 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV55,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneSymmetryV55 = [
          "boneLeft",
          Utils.getQWordReader(),
          "boneRight",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV55 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV55),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneSymmetries",
          Utils.getArrayReader(this.ModelBoneSymmetryV55)
        ];

        this.ModelMeshBindingDataV55 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV55 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV55 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV55),
          "InitialPlacement",
          this.ModelTransformDataV55,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV55),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV55),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV55 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV55 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV55 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV55 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V55 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV55 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV55),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV55),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV55),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V55),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV55 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV55),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV55)
        ];

        this.ModelObstacleDataV55 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V55)
        ];

        this.ModelStreakV55 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV55 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV55 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV55),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV55)
        ];

        this.ModelEffectLightV55 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV55 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV55)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV55 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV55 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV55)
        ];

        this.ModelClothSoftLockV55 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV55 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV55 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV55),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV55),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV55),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV55),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8"
        ];

        this.ModelLightningSystemV55 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV55 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV55 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV55 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV55),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV55),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV55)
        ];

        this.ModelBoneConstraintLinkV55 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV55 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV55),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV55 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV55 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "boneInverseOffset",
          ["[]", ["[]", "float32", 4], 3]
        ];

        this.__root = this.ModelFileDataV55 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV55),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV55),
          "model",
          Utils.getPointerReader(this.ModelModelDataV55),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV55),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV55),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV55),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV55),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV55),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV55),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV55),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV55),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV55),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV55)
        ];
      },

      // => Version: 54
      54: function() {
        this.ModelTextureDataV54 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV54 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV54 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV54 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV54 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV54 = [
          "token",
          Utils.getQWordReader(),
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV54),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV54),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV54),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV54),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV54),
          "texCoordCount",
          "uint8"
        ];

        this.ModelPermutationDataV54 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV54)
        ];

        this.ModelMeshLodDataV54 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV54 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV54 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV54),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV54),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV54 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV54),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV54),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV54 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV54 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV54,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelBoneSymmetryV54 = [
          "boneLeft",
          Utils.getQWordReader(),
          "boneRight",
          Utils.getQWordReader()
        ];

        this.ModelSkeletonDataV54 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV54),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneSymmetries",
          Utils.getArrayReader(this.ModelBoneSymmetryV54)
        ];

        this.ModelMeshBindingDataV54 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV54 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV54 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV54),
          "InitialPlacement",
          this.ModelTransformDataV54,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV54),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV54),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV54 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV54 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV54 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV54 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelMatrix43V54 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelParticleEmitterV54 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV54),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV54),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV54),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V54),
          "windInfluence",
          "uint8",
          "alignmentType",
          "uint8",
          "spawnShape",
          "uint8"
        ];

        this.ModelCloudDataV54 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV54),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV54)
        ];

        this.ModelObstacleDataV54 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V54)
        ];

        this.ModelStreakV54 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV54 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV54 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV54),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV54)
        ];

        this.ModelEffectLightV54 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV54 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV54)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV54 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV54 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV54)
        ];

        this.ModelClothSoftLockV54 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV54 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV54 = [
          "materialIndex",
          "uint32",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "slack",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV54),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV54),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV54),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV54),
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "lockCount",
          "uint16",
          "lod1VertexCount",
          "uint16",
          "flags",
          "uint8",
          "rigidness",
          "uint8"
        ];

        this.ModelLightningSystemV54 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV54 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV54 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV54 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV54),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV54),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV54)
        ];

        this.ModelBoneConstraintLinkV54 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV54 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV54),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV54 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV54 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.__root = this.ModelFileDataV54 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV54),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV54),
          "model",
          Utils.getPointerReader(this.ModelModelDataV54),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV54),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV54),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV54),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV54),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV54),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV54),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV54),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV54),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV54),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV54)
        ];
      },

      // => Version: 53, ReferencedFunction: 0xF2B980
      53: function() {
        this.ModelTextureDataV53 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV53 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV53 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV53 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV53 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV53 = [
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV53),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV53),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV53),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV53),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV53)
        ];

        this.ModelPermutationDataV53 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV53)
        ];

        this.ModelMeshLodDataV53 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV53 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV53 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV53),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV53),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV53 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV53),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV53),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV53 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV53 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV53,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV53 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV53),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV53 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV53 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV53 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV53),
          "InitialPlacement",
          this.ModelTransformDataV53,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV53),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV53),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV53 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV53 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV53 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV53 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV53 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV53),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV53),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV53),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV53 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV53),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV53)
        ];

        this.ModelMatrix43V53 = [
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.ModelObstacleDataV53 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "response",
          "uint8",
          "flags",
          "uint32",
          "dragCoef",
          "float32",
          "gravityCoef",
          "float32",
          "length",
          "float32",
          "width",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "transform",
          Utils.getPointerReader(this.ModelMatrix43V53)
        ];

        this.ModelStreakV53 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV53 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV53 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV53),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV53)
        ];

        this.ModelEffectLightV53 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV53 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV53)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV53 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV53 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV53)
        ];

        this.ModelClothSoftLockV53 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV53 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothDataV53 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV53),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV53),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV53),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV53),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelLightningSystemV53 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV53 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV53 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV53 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV53),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV53),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV53)
        ];

        this.ModelBoneConstraintLinkV53 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV53 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV53),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV53 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV53 = [
          "bone",
          Utils.getQWordReader(),
          "translation",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.__root = this.ModelFileDataV53 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV53),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV53),
          "model",
          Utils.getPointerReader(this.ModelModelDataV53),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV53),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV53),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV53),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV53),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV53),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV53),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV53),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV53),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV53),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV53)
        ];
      },

      // => Version: 52, ReferencedFunction: 0xF2B830
      52: function() {
        this.ModelTextureDataV52 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV52 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV52 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV52 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV52 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV52 = [
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV52),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV52),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV52),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV52),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV52)
        ];

        this.ModelPermutationDataV52 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV52)
        ];

        this.ModelMeshLodDataV52 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV52 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV52 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV52),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV52),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV52 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV52),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV52),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV52 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV52 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV52,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV52 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV52),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV52 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV52 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV52 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV52),
          "InitialPlacement",
          this.ModelTransformDataV52,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV52),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV52),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV52 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV52 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV52 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV52 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV52 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV52),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV52),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV52),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV52 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV52),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV52)
        ];

        this.ModelObstacleDataV52 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV52 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV52 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV52 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV52),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV52)
        ];

        this.ModelEffectLightV52 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV52 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV52)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV52 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV52 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV52)
        ];

        this.ModelClothSoftLockV52 = ["weight", "uint8", "vertIndex", "uint16"];

        this.ModelClothConstraintV52 = [
          "distance",
          "uint16",
          "relationship",
          "uint16",
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16"
        ];

        this.ModelClothObstacleV52 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "depth",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "width",
          "float32"
        ];

        this.ModelClothDataV52 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "drag",
          "float32",
          "gravity",
          "float32",
          "compressibility",
          "float32",
          "stretchiness",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV52),
          "softLocks",
          Utils.getArrayReader(this.ModelClothSoftLockV52),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV52),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV52),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV52)
        ];

        this.ModelLightningSystemV52 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV52 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV52 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV52 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV52),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV52),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV52)
        ];

        this.ModelBoneConstraintLinkV52 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV52 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV52),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV52 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV52 = [
          "bone",
          Utils.getQWordReader(),
          "offset",
          ["[]", "float32", 3]
        ];

        this.__root = this.ModelFileDataV52 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV52),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV52),
          "model",
          Utils.getPointerReader(this.ModelModelDataV52),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV52),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV52),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV52),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV52),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV52),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV52),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV52),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV52),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV52),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV52)
        ];
      },

      // => Version: 51, ReferencedFunction: 0xF2B5B0
      51: function() {
        this.ModelTextureDataV51 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV51 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV51 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV51 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV51 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV51 = [
          "materialId",
          "uint32",
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV51),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV51),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV51),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV51),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV51)
        ];

        this.ModelPermutationDataV51 = [
          "token",
          Utils.getQWordReader(),
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV51)
        ];

        this.ModelMeshLodDataV51 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV51 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV51 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV51),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV51),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV51 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV51),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV51),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getStringReader()
        ];

        this.ModelTransformDataV51 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV51 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV51,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV51 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV51),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV51 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV51 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV51 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV51),
          "InitialPlacement",
          this.ModelTransformDataV51,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV51),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV51),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV51 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV51 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV51 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV51 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV51 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV51),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV51),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV51),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV51 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV51),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV51)
        ];

        this.ModelObstacleDataV51 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV51 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV51 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV51 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV51),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV51)
        ];

        this.ModelEffectLightV51 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV51 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV51)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV51 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV51 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV51)
        ];

        this.ModelClothConstraintV51 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV51 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "depth",
          "float32",
          "height",
          "float32",
          "radius",
          "float32",
          "width",
          "float32"
        ];

        this.ModelClothDataV51 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV51),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV51),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV51),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV51)
        ];

        this.ModelLightningSystemV51 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV51 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV51 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          ["[]", "float32", 2],
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV51 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV51),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV51),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV51)
        ];

        this.ModelBoneConstraintLinkV51 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV51 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV51),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV51 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV51 = [
          "bone",
          Utils.getQWordReader(),
          "offset",
          ["[]", "float32", 3]
        ];

        this.__root = this.ModelFileDataV51 = [
          "permutations",
          Utils.getArrayReader(this.ModelPermutationDataV51),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV51),
          "model",
          Utils.getPointerReader(this.ModelModelDataV51),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV51),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV51),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV51),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV51),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV51),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV51),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV51),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV51),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV51),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV51)
        ];
      },

      // => Version: 50, ReferencedFunction: 0xF2B570
      50: function() {
        this.ModelTextureDataV50 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV50 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV50 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV50 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV50 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV50 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV50),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV50),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV50),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV50),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV50)
        ];

        this.ModelMeshLodDataV50 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV50 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV50 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV50),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV50),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV50 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV50),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV50),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getArrayReader(this.GrBoundData)
        ];

        this.ModelTransformDataV50 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV50 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV50,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV50 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV50),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV50 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV50 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV50 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV50),
          "InitialPlacement",
          this.ModelTransformDataV50,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV50),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV50),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV50 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV50 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV50 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV50 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV50 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV50),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV50),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV50),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV50 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV50),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV50)
        ];

        this.ModelObstacleDataV50 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV50 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV50 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV50 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV50),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV50)
        ];

        this.ModelEffectLightV50 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV50 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV50)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV50 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV50 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV50)
        ];

        this.ModelClothConstraintV50 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV50 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV50 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV50),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV50),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV50),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV50)
        ];

        this.ModelLightningSystemV50 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "fvf",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV50 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV50 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV50 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV50),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV50),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV50)
        ];

        this.ModelBoneConstraintLinkV50 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV50 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV50),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV50 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV50 = [
          "bone",
          Utils.getQWordReader(),
          "offset",
          ["[]", "float32", 3]
        ];

        this.__root = this.ModelFileDataV50 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV50),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV50),
          "model",
          Utils.getPointerReader(this.ModelModelDataV50),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV50),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV50),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV50),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV50),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV50),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV50),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV50),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV50),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV50),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV50)
        ];
      },

      // => Version: 49
      49: function() {
        this.ModelTextureDataV49 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV49 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV49 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV49 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV49 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV49 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV49),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV49),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV49),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV49),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV49)
        ];

        this.ModelMeshLodDataV49 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV49 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV49 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV49),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV49),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV49 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV49),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV49),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getArrayReader(this.GrBoundData)
        ];

        this.ModelTransformDataV49 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV49 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV49,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV49 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV49),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV49 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV49 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV49 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV49),
          "InitialPlacement",
          this.ModelTransformDataV49,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV49),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV49),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV49 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV49 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV49 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV49 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV49 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV49),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV49),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV49),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV49 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV49),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV49)
        ];

        this.ModelObstacleDataV49 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV49 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV49 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV49 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV49),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV49)
        ];

        this.ModelEffectLightV49 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV49 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV49)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV49 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV49 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV49)
        ];

        this.ModelClothConstraintV49 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV49 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV49 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV49),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV49),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV49),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV49)
        ];

        this.ModelLightningSystemV49 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV49 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV49 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV49 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV49),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV49),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV49)
        ];

        this.ModelBoneConstraintLinkV49 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV49 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV49),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV49 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelBoneOffsetDataV49 = [
          "bone",
          Utils.getQWordReader(),
          "offset",
          ["[]", "float32", 3]
        ];

        this.__root = this.ModelFileDataV49 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV49),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV49),
          "model",
          Utils.getPointerReader(this.ModelModelDataV49),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV49),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV49),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV49),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV49),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV49),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV49),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV49),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV49),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV49),
          "boneOffsetData",
          Utils.getArrayReader(this.ModelBoneOffsetDataV49)
        ];
      },

      // => Version: 48, ReferencedFunction: 0xF2ADE0
      48: function() {
        this.ModelTextureDataV48 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV48 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV48 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV48 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV48 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV48 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV48),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV48),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV48),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV48),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV48)
        ];

        this.ModelMeshLodDataV48 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV48 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV48 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV48),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV48),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.GrBoundData = [
          "center",
          ["[]", "float32", 3],
          "boxExtent",
          ["[]", "float32", 3],
          "sphereRadius",
          "float32"
        ];

        this.ModelMeshDataV48 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV48),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV48),
          "mesh",
          this.PackGrannyMeshType,
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
          Utils.getArrayReader(this.GrBoundData)
        ];

        this.ModelTransformDataV48 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV48 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV48,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV48 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV48),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV48 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV48 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV48 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV48),
          "InitialPlacement",
          this.ModelTransformDataV48,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV48),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV48),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV48 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV48 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV48 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV48 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV48 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV48),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV48),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV48),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV48 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV48),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV48)
        ];

        this.ModelObstacleDataV48 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV48 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV48 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV48 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV48),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV48)
        ];

        this.ModelEffectLightV48 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV48 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV48)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV48 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV48 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV48)
        ];

        this.ModelClothConstraintV48 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV48 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV48 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV48),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV48),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV48),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV48)
        ];

        this.ModelLightningSystemV48 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV48 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV48 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV48 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV48),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV48),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV48)
        ];

        this.ModelBoneConstraintLinkV48 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV48 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV48),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV48 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileDataV48 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV48),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV48),
          "model",
          Utils.getPointerReader(this.ModelModelDataV48),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV48),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV48),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV48),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV48),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV48),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV48),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV48),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV48),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV48)
        ];
      },

      // => Version: 47, ReferencedFunction: 0xF2AB60
      47: function() {
        this.ModelTextureDataV47 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV47 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV47 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV47 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV47 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV47 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV47),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV47),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV47),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV47),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV47)
        ];

        this.ModelMeshLodDataV47 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphVertV47 = [
          "index",
          "uint16",
          "vector",
          ["[]", "float32", 3]
        ];

        this.ModelMeshMorphTargetV47 = [
          "positions",
          Utils.getArrayReader(this.ModelMeshMorphVertV47),
          "normals",
          Utils.getArrayReader(this.ModelMeshMorphVertV47),
          "mesh",
          Utils.getQWordReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV47 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV47),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV47),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV47 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV47 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV47,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV47 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV47),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV47 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV47 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV47 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV47),
          "InitialPlacement",
          this.ModelTransformDataV47,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV47),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV47),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV47 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV47 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV47 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV47 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV47 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV47),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV47),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV47),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV47 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV47),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV47)
        ];

        this.ModelObstacleDataV47 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV47 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV47 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV47 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV47),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV47)
        ];

        this.ModelEffectLightV47 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV47 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV47)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV47 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV47 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV47)
        ];

        this.ModelClothConstraintV47 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV47 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV47 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV47),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV47),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV47),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV47)
        ];

        this.ModelLightningSystemV47 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV47 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV47 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV47 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV47),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV47),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV47)
        ];

        this.ModelBoneConstraintLinkV47 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV47 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV47),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV47 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileDataV47 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV47),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV47),
          "model",
          Utils.getPointerReader(this.ModelModelDataV47),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV47),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV47),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV47),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV47),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV47),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV47),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV47),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV47),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV47)
        ];
      },

      // => Version: 46, ReferencedFunction: 0xF2AAD0
      46: function() {
        this.ModelTextureDataV46 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV46 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV46 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV46 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV46 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV46 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV46),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV46),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV46),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV46),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV46)
        ];

        this.ModelMeshLodDataV46 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV46 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV46 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV46),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV46),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV46 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV46 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV46,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV46 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV46),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV46 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV46 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV46 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV46),
          "InitialPlacement",
          this.ModelTransformDataV46,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV46),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV46),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV46 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV46 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV46 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV46 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV46 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV46),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV46),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV46),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV46 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV46),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV46)
        ];

        this.ModelObstacleDataV46 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV46 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV46 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV46 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV46),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV46)
        ];

        this.ModelEffectLightV46 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV46 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV46)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV46 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV46 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV46)
        ];

        this.ModelClothConstraintV46 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV46 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV46 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV46),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV46),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV46),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV46)
        ];

        this.ModelLightningSystemV46 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV46 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV46 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV46 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV46),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV46),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV46)
        ];

        this.ModelBoneConstraintLinkV46 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV46 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV46),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV46 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileDataV46 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV46),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV46),
          "model",
          Utils.getPointerReader(this.ModelModelDataV46),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV46),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV46),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV46),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV46),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV46),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV46),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV46),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV46),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV46)
        ];
      },

      // => Version: 45
      45: function() {
        this.ModelTextureDataV45 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV45 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV45 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV45 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialTexTransformV45 = [
          "random",
          "uint8",
          "uvIndex",
          "uint8",
          "columns",
          "uint8",
          "rows",
          "uint8",
          "count",
          "uint16",
          "fps",
          "float32",
          "scroll",
          ["[]", "float32", 2]
        ];

        this.ModelMaterialDataV45 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV45),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV45),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV45),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV45),
          "texTransforms",
          Utils.getArrayReader(this.ModelMaterialTexTransformV45)
        ];

        this.ModelMeshLodDataV45 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV45 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV45 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV45),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV45),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV45 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV45 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV45,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV45 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV45),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV45 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV45 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV45 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV45),
          "InitialPlacement",
          this.ModelTransformDataV45,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV45),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV45),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV45 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV45 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV45 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV45 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV45 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV45),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV45),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV45),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV45 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV45),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV45)
        ];

        this.ModelObstacleDataV45 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV45 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV45 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV45 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV45),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV45)
        ];

        this.ModelEffectLightV45 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV45 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV45)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV45 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV45 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV45)
        ];

        this.ModelClothConstraintV45 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV45 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV45 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV45),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV45),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV45),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV45)
        ];

        this.ModelLightningSystemV45 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV45 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV45 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV45 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV45),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV45),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV45)
        ];

        this.ModelBoneConstraintLinkV45 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV45 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV45),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV45 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileDataV45 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV45),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV45),
          "model",
          Utils.getPointerReader(this.ModelModelDataV45),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV45),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV45),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV45),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV45),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV45),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV45),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV45),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV45),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV45)
        ];
      },

      // => Version: 44, ReferencedFunction: 0xF2A910
      44: function() {
        this.ModelTextureDataV44 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV44 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV44 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV44 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV44 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV44),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV44),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV44),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV44)
        ];

        this.ModelMeshLodDataV44 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV44 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV44 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV44),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV44),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV44 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV44 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV44,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV44 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV44),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV44 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV44 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV44 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV44),
          "InitialPlacement",
          this.ModelTransformDataV44,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV44),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV44),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV44 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV44 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV44 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV44 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV44 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV44),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV44),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV44),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV44 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV44),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV44)
        ];

        this.ModelObstacleDataV44 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV44 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV44 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV44 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV44),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV44)
        ];

        this.ModelEffectLightV44 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV44 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV44)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV44 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV44 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV44)
        ];

        this.ModelClothConstraintV44 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV44 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV44 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV44),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV44),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV44),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV44)
        ];

        this.ModelLightningSystemV44 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV44 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV44 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV44 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV44),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV44),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV44)
        ];

        this.ModelBoneConstraintLinkV44 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV44 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV44),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV44 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileDataV44 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV44),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV44),
          "model",
          Utils.getPointerReader(this.ModelModelDataV44),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV44),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV44),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV44),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV44),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV44),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV44),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV44),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV44),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV44)
        ];
      },

      // => Version: 43
      43: function() {
        this.ModelTextureDataV43 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV43 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV43 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV43 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV43 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV43),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV43),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV43),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV43)
        ];

        this.ModelMeshLodDataV43 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV43 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV43 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV43),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV43),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV43 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV43 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV43,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV43 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV43),
          "LODType",
          "uint32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelMeshBindingDataV43 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV43 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV43 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV43),
          "InitialPlacement",
          this.ModelTransformDataV43,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV43),
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8"),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV43),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV43 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV43 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV43 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV43 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV43 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV43),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV43),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV43),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV43 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV43),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV43)
        ];

        this.ModelObstacleDataV43 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV43 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV43 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV43 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV43),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV43)
        ];

        this.ModelEffectLightV43 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV43 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV43)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV43 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV43 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV43)
        ];

        this.ModelClothConstraintV43 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV43 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV43 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV43),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV43),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV43),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV43)
        ];

        this.ModelLightningSystemV43 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV43 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV43 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV43 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV43),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV43),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV43)
        ];

        this.ModelBoneConstraintLinkV43 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV43 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV43),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV43 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileDataV43 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV43),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV43),
          "model",
          Utils.getPointerReader(this.ModelModelDataV43),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV43),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV43),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV43),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV43),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV43),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV43),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV43),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV43),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV43)
        ];
      },

      // => Version: 42
      42: function() {
        this.ModelTextureDataV42 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV42 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV42 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV42 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV42 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV42),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV42),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV42),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV42)
        ];

        this.ModelMeshLodDataV42 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV42 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV42 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV42),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV42),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV42 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV42 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV42,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV42 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV42),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV42 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV42 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV42 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV42),
          "InitialPlacement",
          this.ModelTransformDataV42,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV42),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV42),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV42 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV42 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV42 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV42 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV42 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV42),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV42),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV42),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV42 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV42),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV42)
        ];

        this.ModelObstacleDataV42 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV42 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV42 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV42 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV42),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV42)
        ];

        this.ModelEffectLightV42 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV42 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV42)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV42 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV42 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV42)
        ];

        this.ModelClothConstraintV42 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV42 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV42 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV42),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV42),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV42),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV42)
        ];

        this.ModelLightningSystemV42 = [
          "bone",
          Utils.getQWordReader(),
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV42 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV42 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV42 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV42),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV42),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV42)
        ];

        this.ModelBoneConstraintLinkV42 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV42 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV42),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV42 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileDataV42 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV42),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV42),
          "model",
          Utils.getPointerReader(this.ModelModelDataV42),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV42),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV42),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV42),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV42),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV42),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV42),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV42),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV42),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV42)
        ];
      },

      // => Version: 41
      41: function() {
        this.ModelTextureDataV41 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV41 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV41 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV41 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV41 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV41),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV41),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV41),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV41)
        ];

        this.ModelMeshLodDataV41 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV41 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV41 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV41),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV41),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV41 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV41 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV41,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV41 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV41),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV41 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV41 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV41 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV41),
          "InitialPlacement",
          this.ModelTransformDataV41,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV41),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV41),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV41 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV41 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV41 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV41 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV41 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV41),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV41),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV41),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV41 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV41),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV41)
        ];

        this.ModelObstacleDataV41 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV41 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV41 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV41 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV41),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV41)
        ];

        this.ModelEffectLightV41 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV41 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV41)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV41 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV41 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV41)
        ];

        this.ModelClothConstraintV41 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV41 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV41 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV41),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV41),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV41),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV41)
        ];

        this.ModelLightningSystemV41 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV41 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV41 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV41 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV41),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV41),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV41)
        ];

        this.ModelBoneConstraintLinkV41 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV41 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV41),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.ModelSoftBodyDataV41 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint32",
          "vertexFvf",
          "uint32",
          "vertBytes",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "bones",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileDataV41 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV41),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV41),
          "model",
          Utils.getPointerReader(this.ModelModelDataV41),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV41),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV41),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV41),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV41),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV41),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV41),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV41),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV41),
          "softBodyData",
          Utils.getArrayReader(this.ModelSoftBodyDataV41)
        ];
      },

      // => Version: 40, ReferencedFunction: 0xF2A8C0
      40: function() {
        this.ModelTextureDataV40 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV40 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV40 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV40 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV40 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV40),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV40),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV40),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV40)
        ];

        this.ModelMeshLodDataV40 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV40 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV40 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV40),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV40),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV40 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV40 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV40,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV40 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV40),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV40 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV40 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV40 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV40),
          "InitialPlacement",
          this.ModelTransformDataV40,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV40),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV40),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV40 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV40 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "fvf",
          "uint32",
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV40 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV40 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV40 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "offset",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV40),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV40),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV40),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "velocityInherit",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV40 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV40),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV40)
        ];

        this.ModelObstacleDataV40 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV40 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV40 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV40 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV40),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV40)
        ];

        this.ModelEffectLightV40 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV40 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV40)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV40 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV40 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV40)
        ];

        this.ModelClothConstraintV40 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV40 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV40 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV40),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV40),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV40),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV40)
        ];

        this.ModelLightningSystemV40 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV40 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV40 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV40 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV40),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV40),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV40)
        ];

        this.ModelBoneConstraintLinkV40 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV40 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV40),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.__root = this.ModelFileDataV40 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV40),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV40),
          "model",
          Utils.getPointerReader(this.ModelModelDataV40),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV40),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV40),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV40),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV40),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV40),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV40),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV40),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV40)
        ];
      },

      // => Version: 39, ReferencedFunction: 0xF2A810
      39: function() {
        this.ModelTextureDataV39 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV39 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV39 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV39 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV39 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV39),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV39),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV39),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV39)
        ];

        this.ModelMeshLodDataV39 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV39 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV39 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV39),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV39),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV39 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV39 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV39,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV39 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV39),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV39 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV39 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV39 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV39),
          "InitialPlacement",
          this.ModelTransformDataV39,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV39),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV39),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV39 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV39 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV39 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV39 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV39 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV39),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV39),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV39),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV39 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV39),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV39)
        ];

        this.ModelObstacleDataV39 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV39 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV39 = [
          "bone",
          Utils.getQWordReader(),
          "colorStart",
          "uint32",
          "colorEnd",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV39 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV39),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV39)
        ];

        this.ModelEffectLightV39 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV39 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV39)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV39 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV39 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV39)
        ];

        this.ModelClothConstraintV39 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV39 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV39 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV39),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV39),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV39),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV39)
        ];

        this.ModelLightningSystemV39 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV39 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV39 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV39 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV39),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV39),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV39)
        ];

        this.ModelBoneConstraintLinkV39 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV39 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV39),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.__root = this.ModelFileDataV39 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV39),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV39),
          "model",
          Utils.getPointerReader(this.ModelModelDataV39),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV39),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV39),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV39),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV39),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV39),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV39),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV39),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV39)
        ];
      },

      // => Version: 38, ReferencedFunction: 0xF2A6A0
      38: function() {
        this.ModelTextureDataV38 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV38 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV38 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV38 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV38 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV38),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV38),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV38),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV38)
        ];

        this.ModelMeshLodDataV38 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV38 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV38 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV38),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV38),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV38 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV38 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV38,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV38 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV38),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV38 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV38 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV38 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV38),
          "InitialPlacement",
          this.ModelTransformDataV38,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV38),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV38),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV38 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV38 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV38 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV38 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV38 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV38),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV38),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV38),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV38 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV38),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV38)
        ];

        this.ModelObstacleDataV38 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV38 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV38 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV38 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV38),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV38)
        ];

        this.ModelEffectLightV38 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV38 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV38)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV38 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV38 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV38)
        ];

        this.ModelClothConstraintV38 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV38 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV38 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV38),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV38),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV38),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV38)
        ];

        this.ModelLightningSystemV38 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV38 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV38 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV38 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV38),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV38),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV38)
        ];

        this.ModelBoneConstraintLinkV38 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV38 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV38),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.__root = this.ModelFileDataV38 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV38),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV38),
          "model",
          Utils.getPointerReader(this.ModelModelDataV38),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV38),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV38),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV38),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV38),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV38),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV38),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV38),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV38)
        ];
      },

      // => Version: 37
      37: function() {
        this.ModelTextureDataV37 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV37 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV37 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV37 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV37 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV37),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV37),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV37),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV37)
        ];

        this.ModelMeshLodDataV37 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV37 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV37 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV37),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV37),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV37 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV37 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV37,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV37 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV37),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV37 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV37 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV37 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV37),
          "InitialPlacement",
          this.ModelTransformDataV37,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV37),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV37),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV37 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV37 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV37 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV37 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV37 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV37),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV37),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV37),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV37 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV37),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV37)
        ];

        this.ModelObstacleDataV37 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV37 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV37 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV37 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV37),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV37)
        ];

        this.ModelEffectLightV37 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV37 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV37)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV37 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV37 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV37)
        ];

        this.ModelClothConstraintV37 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV37 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV37 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV37),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV37),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV37),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV37)
        ];

        this.ModelLightningSystemV37 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV37 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV37 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV37 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV37),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV37),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV37)
        ];

        this.ModelBoneConstraintLinkV37 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV37 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV37),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.__root = this.ModelFileDataV37 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV37),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV37),
          "model",
          Utils.getPointerReader(this.ModelModelDataV37),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV37),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV37),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV37),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV37),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV37),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV37),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV37),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV37)
        ];
      },

      // => Version: 36, ReferencedFunction: 0xF2A560
      36: function() {
        this.ModelTextureDataV36 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV36 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV36 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV36 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV36 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV36),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV36),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV36),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV36)
        ];

        this.ModelMeshLodDataV36 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV36 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV36 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV36),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV36),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV36 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV36 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV36,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV36 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV36),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV36 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV36 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV36 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV36),
          "InitialPlacement",
          this.ModelTransformDataV36,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV36),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV36),
          "skeletonHash",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV36 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV36 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV36 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV36 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV36 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV36),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV36),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV36),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV36 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV36),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV36)
        ];

        this.ModelObstacleDataV36 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV36 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV36 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV36 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV36),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV36)
        ];

        this.ModelEffectLightV36 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV36 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV36)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV36 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV36 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV36)
        ];

        this.ModelClothConstraintV36 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV36 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV36 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV36),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV36),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV36),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV36)
        ];

        this.ModelLightningSystemV36 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV36 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV36 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV36 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV36),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV36),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV36)
        ];

        this.ModelBoneConstraintLinkV36 = [
          "angle",
          "float32",
          "azimuth",
          "float32",
          "distance",
          ["[]", "float32", 2],
          "token",
          Utils.getQWordReader()
        ];

        this.ModelBoneConstraintV36 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "float32",
          "drag",
          "float32",
          "ellipseRatio",
          "float32",
          "gravity",
          "float32",
          "collisionRadius",
          "float32",
          "wind",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "float32",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "float32",
          "distanceInnerType",
          "uint8",
          "links",
          Utils.getArrayReader(this.ModelBoneConstraintLinkV36),
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "float32",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "float32",
          "twistType",
          "uint8"
        ];

        this.__root = this.ModelFileDataV36 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV36),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV36),
          "model",
          Utils.getPointerReader(this.ModelModelDataV36),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV36),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV36),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV36),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV36),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV36),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV36),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV36),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV36)
        ];
      },

      // => Version: 35, ReferencedFunction: 0xF2A400
      35: function() {
        this.ModelTextureDataV35 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV35 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV35 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV35 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV35 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV35),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV35),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV35),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV35)
        ];

        this.ModelMeshLodDataV35 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV35 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV35 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV35),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV35),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV35 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV35 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV35,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV35 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV35),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV35 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV35 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV35 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV35),
          "InitialPlacement",
          this.ModelTransformDataV35,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV35),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV35),
          "skeletonHash",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV35 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV35 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV35 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV35 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV35 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV35),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV35),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV35),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV35 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV35),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV35)
        ];

        this.ModelObstacleDataV35 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV35 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV35 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV35 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV35),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV35)
        ];

        this.ModelEffectLightV35 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV35 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV35)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV35 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV35 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV35)
        ];

        this.ModelClothConstraintV35 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV35 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV35 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV35),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV35),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV35),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV35)
        ];

        this.ModelLightningSystemV35 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV35 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          ["[]", "uint32", 3],
          "colorEnd",
          ["[]", "uint32", 3],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "opacity",
          ["[]", "float32", 2],
          "opacityPreset",
          "uint8",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV35 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "updatePos",
          "float32"
        ];

        this.ModelLightningDataV35 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV35),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV35),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV35)
        ];

        this.ModelBoneConstraintV35 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "uint8",
          "drag",
          "uint8",
          "ellipseRatio",
          "float32",
          "gravity",
          "uint8",
          "collisionRadius",
          "float32",
          "wind",
          "uint8",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "uint8",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "uint8",
          "distanceInnerType",
          "uint8",
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "uint8",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "uint8",
          "twistType",
          "uint8"
        ];

        this.__root = this.ModelFileDataV35 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV35),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV35),
          "model",
          Utils.getPointerReader(this.ModelModelDataV35),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV35),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV35),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV35),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV35),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV35),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV35),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV35),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV35)
        ];
      },

      // => Version: 34, ReferencedFunction: 0xF2A2E0
      34: function() {
        this.ModelTextureDataV34 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV34 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV34 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV34 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV34 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV34),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV34),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV34),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV34)
        ];

        this.ModelMeshLodDataV34 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV34 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV34 = [
          "visBone",
          Utils.getQWordReader(),
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV34),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV34),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV34 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV34 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV34,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV34 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV34),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV34 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV34 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV34 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV34),
          "InitialPlacement",
          this.ModelTransformDataV34,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV34),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV34),
          "skeletonHash",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV34 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV34 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV34 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV34 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV34 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV34),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV34),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV34),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV34 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV34),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV34)
        ];

        this.ModelObstacleDataV34 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelStreakV34 = [
          "acceleration",
          ["[]", "float32", 3],
          "velocity",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV34 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV34 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV34),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV34)
        ];

        this.ModelEffectLightV34 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32"
        ];

        this.ModelLightDataV34 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV34)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV34 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV34 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV34)
        ];

        this.ModelClothConstraintV34 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV34 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV34 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV34),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV34),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV34),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV34)
        ];

        this.ModelLightningSystemV34 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV34 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          "uint32",
          "colorEnd",
          "uint32",
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV34 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8"
        ];

        this.ModelLightningDataV34 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV34),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV34),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV34)
        ];

        this.ModelBoneConstraintV34 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "uint8",
          "drag",
          "uint8",
          "ellipseRatio",
          "float32",
          "gravity",
          "uint8",
          "collisionRadius",
          "float32",
          "wind",
          "uint8",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "uint8",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "uint8",
          "distanceInnerType",
          "uint8",
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "uint8",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "uint8",
          "twistType",
          "uint8"
        ];

        this.__root = this.ModelFileDataV34 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV34),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV34),
          "model",
          Utils.getPointerReader(this.ModelModelDataV34),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV34),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV34),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV34),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV34),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV34),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV34),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV34),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV34)
        ];
      },

      // => Version: 33
      33: function() {
        this.ModelTextureDataV33 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV33 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV33 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV33 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV33 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV33),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV33),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV33),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV33)
        ];

        this.ModelMeshLodDataV33 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV33 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV33 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV33),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV33),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV33 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV33 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV33,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV33 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV33),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV33 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV33 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV33 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV33),
          "InitialPlacement",
          this.ModelTransformDataV33,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV33),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV33),
          "skeletonHash",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV33 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV33 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV33 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV33 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV33 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV33),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV33),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV33),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV33 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV33),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV33)
        ];

        this.ModelObstacleDataV33 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV33 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV33 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV33 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV33),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV33)
        ];

        this.ModelEffectLightV33 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV33 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV33)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV33 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV33 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV33)
        ];

        this.ModelClothConstraintV33 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV33 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV33 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV33),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV33),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV33),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV33)
        ];

        this.ModelLightningSystemV33 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV33 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          "uint32",
          "colorEnd",
          "uint32",
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV33 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightningDataV33 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV33),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV33),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV33)
        ];

        this.ModelBoneConstraintV33 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint16",
          "twistOffset",
          "float32",
          "animBlend",
          "uint8",
          "drag",
          "uint8",
          "ellipseRatio",
          "float32",
          "gravity",
          "uint8",
          "collisionRadius",
          "float32",
          "wind",
          "uint8",
          "angle",
          ["[]", "float32", 2],
          "angleStrength",
          "uint8",
          "angleType",
          "uint8",
          "distanceInner",
          ["[]", "float32", 2],
          "distanceInnerStrength",
          "uint8",
          "distanceInnerType",
          "uint8",
          "distanceOuter",
          ["[]", "float32", 2],
          "distanceOuterStrength",
          "uint8",
          "distanceOuterType",
          "uint8",
          "twist",
          ["[]", "float32", 2],
          "twistStrength",
          "uint8",
          "twistType",
          "uint8"
        ];

        this.__root = this.ModelFileDataV33 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV33),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV33),
          "model",
          Utils.getPointerReader(this.ModelModelDataV33),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV33),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV33),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV33),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV33),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV33),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV33),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV33),
          "boneConstraints",
          Utils.getArrayReader(this.ModelBoneConstraintV33)
        ];
      },

      // => Version: 32
      32: function() {
        this.ModelTextureDataV32 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV32 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV32 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV32 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV32 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV32),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV32),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV32),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV32)
        ];

        this.ModelMeshLodDataV32 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV32 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV32 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV32),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV32),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV32 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV32 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV32,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV32 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV32),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV32 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV32 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV32 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV32),
          "InitialPlacement",
          this.ModelTransformDataV32,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV32),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV32),
          "skeletonHash",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV32 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV32 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV32 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV32 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV32 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV32),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV32),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV32),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV32 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV32),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV32)
        ];

        this.ModelObstacleDataV32 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV32 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV32 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV32 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV32),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV32)
        ];

        this.ModelEffectLightV32 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV32 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV32)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV32 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV32 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV32)
        ];

        this.ModelClothConstraintV32 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV32 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV32 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV32),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV32),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV32),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV32)
        ];

        this.ModelLightningSystemV32 = [
          "boltIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32"
        ];

        this.ModelLightningBoltV32 = [
          "bone",
          Utils.getQWordReader(),
          "nodeIndices",
          Utils.getArrayReader("uint16"),
          "colorBegin",
          "uint32",
          "colorEnd",
          "uint32",
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "fps",
          "float32",
          "probability",
          "float32",
          "lifetime",
          ["[]", "float32", 2],
          "numSegments",
          "uint16",
          "period",
          "float32",
          "texOffset",
          "float32",
          "texScale",
          "float32",
          "texSpeed",
          "float32",
          "thickness",
          "float32",
          "thicknessPreset",
          "uint8",
          "type",
          "uint8",
          "variance",
          "float32",
          "variancePreset",
          "uint8",
          "noise",
          "float32"
        ];

        this.ModelLightningNodeV32 = [
          "bone",
          Utils.getQWordReader(),
          "childrenIndices",
          Utils.getArrayReader("uint16"),
          "flags",
          "uint32",
          "probability",
          "float32",
          "radius",
          "float32",
          "shape",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightningDataV32 = [
          "systems",
          Utils.getArrayReader(this.ModelLightningSystemV32),
          "bolts",
          Utils.getArrayReader(this.ModelLightningBoltV32),
          "nodes",
          Utils.getArrayReader(this.ModelLightningNodeV32)
        ];

        this.__root = this.ModelFileDataV32 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV32),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV32),
          "model",
          Utils.getPointerReader(this.ModelModelDataV32),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV32),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV32),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV32),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV32),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV32),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV32),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader(),
          "lightningData",
          Utils.getPointerReader(this.ModelLightningDataV32)
        ];
      },

      // => Version: 31
      31: function() {
        this.ModelTextureDataV31 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV31 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV31 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV31 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV31 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV31),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV31),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV31),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV31)
        ];

        this.ModelMeshLodDataV31 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV31 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV31 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV31),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV31),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV31 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV31 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV31,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV31 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV31),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV31 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV31 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV31 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV31),
          "InitialPlacement",
          this.ModelTransformDataV31,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV31),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV31),
          "skeletonHash",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV31 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV31 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV31 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV31 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV31 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV31),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV31),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV31),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV31 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV31),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV31)
        ];

        this.ModelObstacleDataV31 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV31 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV31 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32",
          "flags",
          "uint32",
          "texV",
          "float32"
        ];

        this.ModelStreakDataV31 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV31),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV31)
        ];

        this.ModelEffectLightV31 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV31 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV31)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV31 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV31 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV31)
        ];

        this.ModelClothConstraintV31 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV31 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV31 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV31),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV31),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV31),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV31)
        ];

        this.__root = this.ModelFileDataV31 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV31),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV31),
          "model",
          Utils.getPointerReader(this.ModelModelDataV31),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV31),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV31),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV31),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV31),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV31),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV31),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 30
      30: function() {
        this.ModelTextureDataV30 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV30 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV30 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV30 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV30 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV30),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV30),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV30),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV30)
        ];

        this.ModelMeshLodDataV30 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV30 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV30 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV30),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV30),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV30 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV30 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV30,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV30 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV30),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV30 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV30 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV30 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV30),
          "InitialPlacement",
          this.ModelTransformDataV30,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV30),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV30),
          "skeletonHash",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV30 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "time",
          "float32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV30 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV30 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV30 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV30 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV30),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV30),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV30),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV30 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV30),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV30)
        ];

        this.ModelObstacleDataV30 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV30 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV30 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV30 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV30),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV30)
        ];

        this.ModelEffectLightV30 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV30 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV30)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV30 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV30 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV30)
        ];

        this.ModelClothConstraintV30 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV30 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV30 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV30),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV30),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV30),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV30)
        ];

        this.__root = this.ModelFileDataV30 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV30),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV30),
          "model",
          Utils.getPointerReader(this.ModelModelDataV30),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV30),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV30),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV30),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV30),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV30),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV30),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 29, ReferencedFunction: 0xF2A230
      29: function() {
        this.ModelTextureDataV29 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV29 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMatConstLinkV29 = [
          "linkToken",
          Utils.getQWordReader(),
          "constantToken",
          "uint32"
        ];

        this.ModelUVTransLinkV29 = [
          "linkToken",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint32",
          "type",
          "uint8"
        ];

        this.ModelMaterialDataV29 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV29),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV29),
          "matConstLinks",
          Utils.getArrayReader(this.ModelMatConstLinkV29),
          "uvTransLinks",
          Utils.getArrayReader(this.ModelUVTransLinkV29)
        ];

        this.ModelMeshLodDataV29 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV29 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV29 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV29),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV29),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV29 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV29 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV29,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV29 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV29),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV29 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV29 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV29 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV29),
          "InitialPlacement",
          this.ModelTransformDataV29,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV29),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV29),
          "skeletonHash",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV29 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV29 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV29 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV29 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV29 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV29),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV29),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV29),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV29 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV29),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV29)
        ];

        this.ModelObstacleDataV29 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV29 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV29 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV29 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV29),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV29)
        ];

        this.ModelEffectLightV29 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV29 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV29)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV29 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV29 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV29)
        ];

        this.ModelClothConstraintV29 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothObstacleV29 = [
          "bone",
          Utils.getQWordReader(),
          "type",
          "uint8"
        ];

        this.ModelClothDataV29 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV29),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV29),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV29),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16"),
          "obstacles",
          Utils.getArrayReader(this.ModelClothObstacleV29)
        ];

        this.__root = this.ModelFileDataV29 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV29),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV29),
          "model",
          Utils.getPointerReader(this.ModelModelDataV29),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV29),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV29),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV29),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV29),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV29),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV29),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 28
      28: function() {
        this.ModelTextureDataV28 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV28 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV28 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV28),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV28)
        ];

        this.ModelMeshLodDataV28 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV28 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV28 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV28),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV28),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader(),
          "minBound",
          ["[]", "float32", 3],
          "maxBound",
          ["[]", "float32", 3]
        ];

        this.ModelTransformDataV28 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV28 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV28,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV28 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV28),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV28 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV28 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV28 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV28),
          "InitialPlacement",
          this.ModelTransformDataV28,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV28),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV28),
          "skeletonHash",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.ModelPropertyDataV28 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV28 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV28 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV28 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV28 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV28),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV28),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV28),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV28 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV28),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV28)
        ];

        this.ModelObstacleDataV28 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV28 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV28 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV28 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV28),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV28)
        ];

        this.ModelEffectLightV28 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV28 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV28)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV28 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV28 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV28)
        ];

        this.ModelClothConstraintV28 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV28 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV28),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV28),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV28),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV28 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV28),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV28),
          "model",
          Utils.getPointerReader(this.ModelModelDataV28),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV28),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV28),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV28),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV28),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV28),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV28),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 27
      27: function() {
        this.ModelTextureDataV27 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV27 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV27 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV27),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV27)
        ];

        this.ModelMeshLodDataV27 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV27 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV27 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV27),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV27),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "meshName",
          Utils.getQWordReader()
        ];

        this.ModelTransformDataV27 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV27 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV27,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV27 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV27),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV27 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV27 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV27 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV27),
          "InitialPlacement",
          this.ModelTransformDataV27,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV27),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV27),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelPropertyDataV27 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV27 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV27 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV27 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV27 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV27),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV27),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV27),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV27 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV27),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV27)
        ];

        this.ModelObstacleDataV27 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV27 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV27 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV27 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV27),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV27)
        ];

        this.ModelEffectLightV27 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV27 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV27)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV27 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV27 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV27)
        ];

        this.ModelClothConstraintV27 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV27 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV27),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV27),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV27),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV27 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV27),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV27),
          "model",
          Utils.getPointerReader(this.ModelModelDataV27),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV27),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV27),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV27),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV27),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV27),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV27),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 26, ReferencedFunction: 0xF29DB0
      26: function() {
        this.ModelTextureDataV26 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV26 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV26 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV26),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV26)
        ];

        this.ModelMeshLodDataV26 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV26 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV26 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV26),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV26),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV26 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV26 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV26,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV26 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV26),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV26 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV26 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV26 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV26),
          "InitialPlacement",
          this.ModelTransformDataV26,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV26),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV26),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelPropertyDataV26 = [
          "id",
          Utils.getQWordReader(),
          "type",
          "uint32",
          "mergeIndex",
          "uint32",
          "val",
          Utils.getQWordReader(),
          "strVal",
          Utils.getFileNameReader()
        ];

        this.ModelParticleCloudV26 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV26 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV26 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV26 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV26),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV26),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV26),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV26 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV26),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV26)
        ];

        this.ModelObstacleDataV26 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV26 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV26 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV26 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV26),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV26)
        ];

        this.ModelEffectLightV26 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV26 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV26)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV26 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV26 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV26)
        ];

        this.ModelClothConstraintV26 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV26 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV26),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV26),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV26),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV26 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV26),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV26),
          "model",
          Utils.getPointerReader(this.ModelModelDataV26),
          "properties",
          Utils.getArrayReader(this.ModelPropertyDataV26),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV26),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV26),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV26),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV26),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV26),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 25, ReferencedFunction: 0xF29C20
      25: function() {
        this.ModelTextureDataV25 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV25 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV25 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV25),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV25)
        ];

        this.ModelMeshLodDataV25 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV25 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV25 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV25),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV25),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV25 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV25 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV25,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV25 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV25),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV25 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV25 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV25 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV25),
          "InitialPlacement",
          this.ModelTransformDataV25,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV25),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV25),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelFloatPropertyDataV25 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV25 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV25)
        ];

        this.ModelParticleCloudV25 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV25 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV25 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "float32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV25 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV25),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV25),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV25),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV25 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV25),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV25)
        ];

        this.ModelObstacleDataV25 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV25 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "jitter",
          "float32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV25 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV25 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV25),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV25)
        ];

        this.ModelEffectLightV25 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV25 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV25)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV25 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV25 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV25)
        ];

        this.ModelClothConstraintV25 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV25 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV25),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV25),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV25),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV25 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV25),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV25),
          "model",
          Utils.getPointerReader(this.ModelModelDataV25),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV25),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV25),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV25),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV25),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV25),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV25),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 24, ReferencedFunction: 0xF29BC0
      24: function() {
        this.ModelTextureDataV24 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV24 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV24 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV24),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV24)
        ];

        this.ModelMeshLodDataV24 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV24 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV24 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV24),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV24),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV24 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV24 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV24,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV24 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV24),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV24 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV24 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV24 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV24),
          "InitialPlacement",
          this.ModelTransformDataV24,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV24),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV24),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelFloatPropertyDataV24 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV24 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV24)
        ];

        this.ModelParticleCloudV24 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV24 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV24 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV24 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "emitterFlags",
          "uint32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV24),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV24),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV24),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV24 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV24),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV24)
        ];

        this.ModelObstacleDataV24 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV24 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV24 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV24 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV24),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV24)
        ];

        this.ModelEffectLightV24 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV24 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV24)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV24 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV24 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV24)
        ];

        this.ModelClothConstraintV24 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV24 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV24),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV24),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV24),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV24 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV24),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV24),
          "model",
          Utils.getPointerReader(this.ModelModelDataV24),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV24),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV24),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV24),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV24),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV24),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV24),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 23, ReferencedFunction: 0xF29B50
      23: function() {
        this.ModelTextureDataV23 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV23 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV23 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV23),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV23)
        ];

        this.ModelMeshLodDataV23 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV23 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV23 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV23),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV23),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV23 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV23 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV23,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV23 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV23),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV23 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV23 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV23 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV23),
          "InitialPlacement",
          this.ModelTransformDataV23,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV23),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV23),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelFloatPropertyDataV23 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV23 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV23)
        ];

        this.ModelParticleCloudV23 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV23 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV23 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV23 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV23),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV23),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV23),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelCloudDataV23 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV23),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV23)
        ];

        this.ModelObstacleDataV23 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakV23 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV23 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV23 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV23),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV23)
        ];

        this.ModelEffectLightV23 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV23 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV23)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV23 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV23 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV23)
        ];

        this.ModelClothConstraintV23 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV23 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV23),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV23),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV23),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV23 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV23),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV23),
          "model",
          Utils.getPointerReader(this.ModelModelDataV23),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV23),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV23),
          "obstacles",
          Utils.getArrayReader(this.ModelObstacleDataV23),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV23),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV23),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV23),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 22
      22: function() {
        this.ModelTextureDataV22 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV22 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV22 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV22),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV22)
        ];

        this.ModelMeshLodDataV22 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV22 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV22 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV22),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV22),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV22 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV22 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV22,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV22 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV22),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV22 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV22 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV22 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV22),
          "InitialPlacement",
          this.ModelTransformDataV22,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV22),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV22),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelFloatPropertyDataV22 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV22 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV22)
        ];

        this.ModelParticleCloudV22 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV22 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV22 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV22 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV22),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV22),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV22),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelParticleObstacleV22 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV22 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV22),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV22),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV22)
        ];

        this.ModelStreakV22 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV22 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV22 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV22),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV22)
        ];

        this.ModelEffectLightV22 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV22 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV22)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV22 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV22 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV22)
        ];

        this.ModelClothConstraintV22 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV22 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV22),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV22),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV22),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV22 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV22),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV22),
          "model",
          Utils.getPointerReader(this.ModelModelDataV22),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV22),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV22),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV22),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV22),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV22),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 21, ReferencedFunction: 0xF29A90
      21: function() {
        this.ModelTextureDataV21 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV21 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV21 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV21),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV21)
        ];

        this.ModelMeshLodDataV21 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV21 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV21 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV21),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV21),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV21 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV21 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV21,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV21 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV21),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV21 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV21 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV21 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV21),
          "InitialPlacement",
          this.ModelTransformDataV21,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV21),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "emitterBones",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV21),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelFloatPropertyDataV21 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV21 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV21)
        ];

        this.ModelParticleCloudV21 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "velocity",
          ["[]", "float32", 3]
        ];

        this.ModelParticleCurveV21 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV21 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV21 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "alignmentType",
          "uint8",
          "alignmentDir",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          "float32",
          "colorFalloff",
          ["[]", "float32", 2],
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV21),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV21),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV21),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32",
          "windInfluence",
          "uint8"
        ];

        this.ModelParticleObstacleV21 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV21 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV21),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV21),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV21)
        ];

        this.ModelStreakV21 = [
          "acceleration",
          ["[]", "float32", 3],
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "noise",
          "float32",
          "spawnDist",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32",
          "wind",
          "float32"
        ];

        this.ModelStreakAnchorV21 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV21 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV21),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV21)
        ];

        this.ModelEffectLightV21 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV21 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV21)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV21 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV21 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV21)
        ];

        this.ModelClothConstraintV21 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV21 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV21),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV21),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV21),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV21 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV21),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV21),
          "model",
          Utils.getPointerReader(this.ModelModelDataV21),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV21),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV21),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV21),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV21),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV21),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 20, ReferencedFunction: 0xF298E0
      20: function() {
        this.ModelTextureDataV20 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV20 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV20 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV20),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV20)
        ];

        this.ModelMeshLodDataV20 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV20 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV20 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV20),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV20),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV20 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV20 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV20,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV20 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV20),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV20 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV20 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV20 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV20),
          "InitialPlacement",
          this.ModelTransformDataV20,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV20),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV20),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelFloatPropertyDataV20 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV20 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV20)
        ];

        this.ModelParticleCloudV20 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV20 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV20 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV20 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV20),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV20),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV20),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV20 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV20 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV20),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV20),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV20)
        ];

        this.ModelStreakV20 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV20 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV20 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV20),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV20)
        ];

        this.ModelEffectLightV20 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV20 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV20)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV20 = [
          "token",
          Utils.getQWordReader(),
          "weight",
          "uint8"
        ];

        this.ModelClothMeshGroupV20 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV20)
        ];

        this.ModelClothConstraintV20 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV20 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV20),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV20),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV20),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV20 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV20),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV20),
          "model",
          Utils.getPointerReader(this.ModelModelDataV20),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV20),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV20),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV20),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV20),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV20),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 19
      19: function() {
        this.ModelTextureDataV19 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV19 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV19 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV19),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV19)
        ];

        this.ModelMeshLodDataV19 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV19 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV19 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV19),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV19),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV19 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV19 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV19,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV19 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV19),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV19 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV19 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV19 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV19),
          "InitialPlacement",
          this.ModelTransformDataV19,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV19),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV19),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelFloatPropertyDataV19 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV19 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV19)
        ];

        this.ModelParticleCloudV19 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV19 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV19 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV19 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV19),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV19),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV19),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV19 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV19 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV19),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV19),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV19)
        ];

        this.ModelStreakV19 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV19 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV19 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV19),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV19)
        ];

        this.ModelEffectLightV19 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV19 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV19)
        ];

        this.PackVertexType = [
          "fvf",
          "uint32",
          "vertices",
          Utils.getArrayReader("uint8")
        ];

        this.ModelClothBoneWeightV19 = ["index", "uint16", "weight", "uint8"];

        this.ModelClothMeshGroupV19 = [
          "weights",
          Utils.getArrayReader(this.ModelClothBoneWeightV19)
        ];

        this.ModelClothConstraintV19 = [
          "vertIndexA",
          "uint16",
          "vertIndexB",
          "uint16",
          "distance",
          "float32"
        ];

        this.ModelClothDataV19 = [
          "materialIndex",
          "uint32",
          "flags",
          "uint8",
          "gravity",
          "float32",
          "weight",
          "float32",
          "wind",
          "float32",
          "rigidness",
          "uint8",
          "mesh",
          this.PackVertexType,
          "indices",
          Utils.getArrayReader("uint16"),
          "lockCount",
          "uint16",
          "groups",
          Utils.getArrayReader(this.ModelClothMeshGroupV19),
          "softLocks",
          Utils.getArrayReader("uint8"),
          "lod0Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV19),
          "lod1Constraints",
          Utils.getArrayReader(this.ModelClothConstraintV19),
          "lod1VertexCount",
          "uint16",
          "lod1Indices",
          Utils.getArrayReader("uint16"),
          "barycentricCoords",
          Utils.getArrayReader(["[]", "float32", 3]),
          "barycentricIndices",
          Utils.getArrayReader("uint16")
        ];

        this.__root = this.ModelFileDataV19 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV19),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV19),
          "model",
          Utils.getPointerReader(this.ModelModelDataV19),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV19),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV19),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV19),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV19),
          "clothData",
          Utils.getArrayReader(this.ModelClothDataV19),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 18
      18: function() {
        this.ModelTextureDataV18 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV18 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV18 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV18),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV18)
        ];

        this.ModelMeshLodDataV18 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV18 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3]),
          "meshName",
          Utils.getStringReader()
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV18 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV18),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV18),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV18 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV18 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV18,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV18 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV18),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV18 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.PackGrannyTrackMaskType = [
          "trackMask",
          Utils.getArrayReader("uint8")
        ];

        this.ModelTrackMaskV18 = [
          "trackMask",
          this.PackGrannyTrackMaskType,
          "token",
          Utils.getQWordReader()
        ];

        this.ModelModelDataV18 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV18),
          "InitialPlacement",
          this.ModelTransformDataV18,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV18),
          "boneFlags",
          Utils.getArrayReader("uint32"),
          "trackMasks",
          Utils.getArrayReader(this.ModelTrackMaskV18),
          "skeletonHash",
          Utils.getArrayReader("uint8")
        ];

        this.ModelFloatPropertyDataV18 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV18 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV18)
        ];

        this.ModelParticleCloudV18 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV18 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV18 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV18 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV18),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV18),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV18),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV18 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV18 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV18),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV18),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV18)
        ];

        this.ModelStreakV18 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV18 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV18 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV18),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV18)
        ];

        this.ModelEffectLightV18 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 3],
          "farDistance",
          "float32",
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelLightDataV18 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV18)
        ];

        this.__root = this.ModelFileDataV18 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV18),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV18),
          "model",
          Utils.getPointerReader(this.ModelModelDataV18),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV18),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV18),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV18),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV18),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 17
      17: function() {
        this.ModelTextureDataV17 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV17 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV17 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV17),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV17)
        ];

        this.ModelMeshLodDataV17 = ["indices", Utils.getArrayReader("uint16")];

        this.ModelMeshMorphTargetV17 = [
          "positionIndices",
          Utils.getArrayReader("uint16"),
          "positions",
          Utils.getArrayReader(["[]", "float32", 3]),
          "normalIndices",
          Utils.getArrayReader("uint16"),
          "normals",
          Utils.getArrayReader(["[]", "float32", 3])
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV17 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV17),
          "morphTargets",
          Utils.getArrayReader(this.ModelMeshMorphTargetV17),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV17 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV17 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV17,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV17 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV17),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV17 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.ModelModelDataV17 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV17),
          "InitialPlacement",
          this.ModelTransformDataV17,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV17),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV17 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV17 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV17)
        ];

        this.ModelParticleCloudV17 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV17 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV17 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV17 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV17),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV17),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV17),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV17 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV17 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV17),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV17),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV17)
        ];

        this.ModelStreakV17 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV17 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV17 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV17),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV17)
        ];

        this.ModelEffectLightV17 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 4],
          "ranges",
          ["[]", "float32", 2]
        ];

        this.ModelLightDataV17 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV17)
        ];

        this.__root = this.ModelFileDataV17 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV17),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV17),
          "model",
          Utils.getPointerReader(this.ModelModelDataV17),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV17),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV17),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV17),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV17),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2],
          "soundScript",
          Utils.getFileNameReader()
        ];
      },

      // => Version: 16
      16: function() {
        this.ModelTextureDataV16 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV16 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV16 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV16),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV16)
        ];

        this.ModelMeshLodDataV16 = ["indices", Utils.getArrayReader("uint16")];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV16 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV16),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV16 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV16 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV16,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV16 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV16),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV16 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.ModelModelDataV16 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV16),
          "InitialPlacement",
          this.ModelTransformDataV16,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV16),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV16 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV16 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV16)
        ];

        this.ModelParticleCloudV16 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV16 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV16 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV16 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV16),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV16),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV16),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV16 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV16 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV16),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV16),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV16)
        ];

        this.ModelStreakV16 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV16 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV16 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV16),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV16)
        ];

        this.ModelEffectLightV16 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 4],
          "ranges",
          ["[]", "float32", 2]
        ];

        this.ModelLightDataV16 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV16)
        ];

        this.__root = this.ModelFileDataV16 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV16),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV16),
          "model",
          Utils.getPointerReader(this.ModelModelDataV16),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV16),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV16),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV16),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV16),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3]),
          "lodOverride",
          ["[]", "float32", 2]
        ];
      },

      // => Version: 15
      15: function() {
        this.ModelTextureDataV15 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV15 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV15 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV15),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV15)
        ];

        this.ModelMeshLodDataV15 = ["indices", Utils.getArrayReader("uint16")];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV15 = [
          "lods",
          Utils.getArrayReader(this.ModelMeshLodDataV15),
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV15 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV15 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV15,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV15 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV15),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV15 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.ModelModelDataV15 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV15),
          "InitialPlacement",
          this.ModelTransformDataV15,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV15),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV15 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV15 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV15)
        ];

        this.ModelParticleCloudV15 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV15 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV15 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV15 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV15),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV15),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV15),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV15 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV15 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV15),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV15),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV15)
        ];

        this.ModelStreakV15 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV15 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV15 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV15),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV15)
        ];

        this.ModelEffectLightV15 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          ["[]", "uint8", 4],
          "ranges",
          ["[]", "float32", 2]
        ];

        this.ModelLightDataV15 = [
          "effectLights",
          Utils.getArrayReader(this.ModelEffectLightV15)
        ];

        this.__root = this.ModelFileDataV15 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV15),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV15),
          "model",
          Utils.getPointerReader(this.ModelModelDataV15),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV15),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV15),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV15),
          "lightData",
          Utils.getPointerReader(this.ModelLightDataV15),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3])
        ];
      },

      // => Version: 14
      14: function() {
        this.ModelTextureDataV14 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV14 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV14 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV14),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV14)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV14 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32"),
          "actionOffsetNames",
          Utils.getArrayReader(Utils.getQWordReader()),
          "actionOffsets",
          Utils.getArrayReader(["[]", "float32", 3])
        ];

        this.ModelTransformDataV14 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV14 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV14,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV14 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV14),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV14 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.ModelModelDataV14 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV14),
          "InitialPlacement",
          this.ModelTransformDataV14,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV14),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV14 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV14 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV14)
        ];

        this.ModelParticleCloudV14 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV14 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV14 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV14 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV14),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV14),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV14),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV14 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV14 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV14),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV14),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV14)
        ];

        this.ModelStreakV14 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV14 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV14 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV14),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV14)
        ];

        this.__root = this.ModelFileDataV14 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV14),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV14),
          "model",
          Utils.getPointerReader(this.ModelModelDataV14),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV14),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV14),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV14)
        ];
      },

      // => Version: 13
      13: function() {
        this.ModelTextureDataV13 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV13 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV13 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV13),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV13)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV13 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV13 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV13 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV13,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV13 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV13),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV13 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.ModelModelDataV13 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV13),
          "InitialPlacement",
          this.ModelTransformDataV13,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV13),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV13 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV13 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV13)
        ];

        this.ModelParticleCloudV13 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV13 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV13 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV13 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV13),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV13),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV13),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV13 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV13 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV13),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV13),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV13)
        ];

        this.ModelStreakV13 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV13 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV13 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV13),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV13)
        ];

        this.__root = this.ModelFileDataV13 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV13),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV13),
          "model",
          Utils.getPointerReader(this.ModelModelDataV13),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV13),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV13),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV13)
        ];
      },

      // => Version: 12
      12: function() {
        this.ModelTextureDataV12 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV12 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV12 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV12),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV12)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV12 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32"),
          "seamVertIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV12 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV12 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV12,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV12 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV12),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV12 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.ModelModelDataV12 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV12),
          "InitialPlacement",
          this.ModelTransformDataV12,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV12),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV12 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV12 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV12)
        ];

        this.ModelParticleCloudV12 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV12 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV12 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV12 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV12),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV12),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV12),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV12 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV12 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV12),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV12),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV12)
        ];

        this.ModelStreakV12 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV12 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV12 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV12),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV12)
        ];

        this.__root = this.ModelFileDataV12 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV12),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV12),
          "model",
          Utils.getPointerReader(this.ModelModelDataV12),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV12),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV12),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV12)
        ];
      },

      // => Version: 11, ReferencedFunction: 0xF296A0
      11: function() {
        this.ModelTextureDataV11 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV11 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV11 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV11),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV11)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV11 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV11 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV11 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV11,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV11 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV11),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV11 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.ModelModelDataV11 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV11),
          "InitialPlacement",
          this.ModelTransformDataV11,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV11),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV11 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV11 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV11)
        ];

        this.ModelParticleCloudV11 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelParticleCurveV11 = [
          "curveType",
          "uint8",
          "keys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleFlipbookV11 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleEmitterV11 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "accelerationDistRange",
          ["[]", "float32", 2],
          "accelerationDistSpeed",
          ["[]", "float32", 2],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "colorFalloff",
          "float32",
          "drag",
          "float32",
          "opacityCurve",
          Utils.getPointerReader(this.ModelParticleCurveV11),
          "opacityCurvePreset",
          "uint32",
          "flags",
          "uint32",
          "flipbook",
          Utils.getPointerReader(this.ModelParticleFlipbookV11),
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationDrag",
          "float32",
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "scaleCurve",
          Utils.getPointerReader(this.ModelParticleCurveV11),
          "scaleCurvePreset",
          "uint32",
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "spawnWindEmit",
          ["[]", "float32", 2],
          "spawnWindSpeed",
          ["[]", "float32", 2],
          "texCoordRect",
          ["[]", "float32", 4],
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV11 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV11 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV11),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV11),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV11)
        ];

        this.ModelStreakV11 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV11 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV11 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV11),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV11)
        ];

        this.__root = this.ModelFileDataV11 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV11),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV11),
          "model",
          Utils.getPointerReader(this.ModelModelDataV11),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV11),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV11),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV11)
        ];
      },

      // => Version: 10
      10: function() {
        this.ModelTextureDataV10 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV10 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV10 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV10),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV10)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV10 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV10 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV10 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV10,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV10 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV10),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV10 = [
          "Mesh",
          Utils.getPointerReader("uint8")
        ];

        this.ModelModelDataV10 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV10),
          "InitialPlacement",
          this.ModelTransformDataV10,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV10),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV10 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV10 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV10)
        ];

        this.ModelParticleFlipbookV10 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleCloudV10 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "flipbook",
          Utils.getArrayReader(this.ModelParticleFlipbookV10),
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "opacityCurveType",
          "uint8",
          "opacityKeys",
          Utils.getArrayReader(["[]", "float32", 2]),
          "scaleCurveType",
          "uint8",
          "scaleKeys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleEmitterV10 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV10 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV10 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV10),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV10),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV10)
        ];

        this.ModelStreakV10 = [
          "anchorIndices",
          Utils.getArrayReader("uint32"),
          "bone",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "materialIndex",
          "uint32",
          "spawnFreq",
          "float32",
          "stretchDist",
          "float32",
          "texScale",
          "float32",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelStreakAnchorV10 = [
          "bone",
          Utils.getQWordReader(),
          "color",
          "uint32",
          "falloff",
          "float32",
          "lifetime",
          "float32"
        ];

        this.ModelStreakDataV10 = [
          "streaks",
          Utils.getArrayReader(this.ModelStreakV10),
          "anchors",
          Utils.getArrayReader(this.ModelStreakAnchorV10)
        ];

        this.__root = this.ModelFileDataV10 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV10),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV10),
          "model",
          Utils.getPointerReader(this.ModelModelDataV10),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV10),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV10),
          "streakData",
          Utils.getPointerReader(this.ModelStreakDataV10)
        ];
      },

      // => Version: 9
      9: function() {
        this.ModelTextureDataV9 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV9 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV9 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "texCoordCount",
          "uint8",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV9),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV9)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV9 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV9 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV9 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV9,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV9 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV9),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV9 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV9 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV9),
          "InitialPlacement",
          this.ModelTransformDataV9,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV9),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV9 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV9 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV9)
        ];

        this.ModelParticleFlipbookV9 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleCloudV9 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "flipbook",
          Utils.getArrayReader(this.ModelParticleFlipbookV9),
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "opacityCurveType",
          "uint8",
          "opacityKeys",
          Utils.getArrayReader(["[]", "float32", 2]),
          "scaleCurveType",
          "uint8",
          "scaleKeys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleEmitterV9 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV9 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV9 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV9),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV9),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV9)
        ];

        this.__root = this.ModelFileDataV9 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV9),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV9),
          "model",
          Utils.getPointerReader(this.ModelModelDataV9),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV9),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV9)
        ];
      },

      // => Version: 8, ReferencedFunction: 0xF2C790
      8: function() {
        this.ModelTextureDataV8 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader(),
          "uvAnimId",
          "uint8",
          "uvPSInputIndex",
          "uint8"
        ];

        this.ModelConstantDataV8 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV8 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV8),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV8)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV8 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32")
        ];

        this.ModelTransformDataV8 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV8 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV8,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV8 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV8),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV8 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV8 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV8),
          "InitialPlacement",
          this.ModelTransformDataV8,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV8),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV8 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV8 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV8)
        ];

        this.ModelParticleFlipbookV8 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleCloudV8 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "flipbook",
          Utils.getArrayReader(this.ModelParticleFlipbookV8),
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "opacityCurveType",
          "uint8",
          "opacityKeys",
          Utils.getArrayReader(["[]", "float32", 2]),
          "scaleCurveType",
          "uint8",
          "scaleKeys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleEmitterV8 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV8 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV8 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV8),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV8),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV8)
        ];

        this.__root = this.ModelFileDataV8 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV8),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV8),
          "model",
          Utils.getPointerReader(this.ModelModelDataV8),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV8),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV8)
        ];
      },

      // => Version: 7
      7: function() {
        this.ModelTextureDataV7 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader()
        ];

        this.ModelConstantDataV7 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV7 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV7),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV7)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV7 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32")
        ];

        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV7 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelAnimationDataV7 = [
          "token",
          Utils.getQWordReader(),
          "animation",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV7)
        ];

        this.ModelAnimationImportDataV7 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelTransformDataV7 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV7 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV7,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV7 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV7),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV7 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV7 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV7),
          "InitialPlacement",
          this.ModelTransformDataV7,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV7),
          "boneFlags",
          Utils.getArrayReader("uint32")
        ];

        this.ModelFloatPropertyDataV7 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV7 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV7)
        ];

        this.ModelCollisionMeshV7 = [
          "animationSequence",
          Utils.getQWordReader(),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionCloudV7 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelCollisionCubeV7 = [
          "transform",
          ["[]", ["[]", "float32", 4], 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV7 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV7 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelCollisionDataV7 = [
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV7),
          "clouds",
          Utils.getArrayReader(this.ModelCollisionCloudV7),
          "cubes",
          Utils.getArrayReader(this.ModelCollisionCubeV7),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV7),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV7)
        ];

        this.ModelParticleFlipbookV7 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleCloudV7 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "flipbook",
          Utils.getArrayReader(this.ModelParticleFlipbookV7),
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "opacityCurveType",
          "uint8",
          "opacityKeys",
          Utils.getArrayReader(["[]", "float32", 2]),
          "scaleCurveType",
          "uint8",
          "scaleKeys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleEmitterV7 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV7 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV7 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV7),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV7),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV7)
        ];

        this.__root = this.ModelFileDataV7 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV7),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV7),
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV7),
          "animationFallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "animationImports",
          Utils.getArrayReader(this.ModelAnimationImportDataV7),
          "model",
          Utils.getPointerReader(this.ModelModelDataV7),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV7),
          "collisionData",
          Utils.getPointerReader(this.ModelCollisionDataV7),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV7)
        ];
      },

      // => Version: 6, ReferencedFunction: 0xF2BED0
      6: function() {
        this.ModelTextureDataV6 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader()
        ];

        this.ModelConstantDataV6 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV6 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV6),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV6)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV6 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visBoneIndices",
          Utils.getArrayReader("uint32")
        ];

        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV6 = [
          "boneIndex",
          "uint32",
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelAnimationDataV6 = [
          "token",
          Utils.getQWordReader(),
          "animation",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV6)
        ];

        this.ModelAnimationImportDataV6 = [
          "filename",
          Utils.getFileNameReader(),
          "sequenceTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelTransformDataV6 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV6 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV6,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV6 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV6),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV6 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV6 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV6),
          "InitialPlacement",
          this.ModelTransformDataV6,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV6)
        ];

        this.ModelFloatPropertyDataV6 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV6 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV6)
        ];

        this.ModelCollisionMeshV6 = [
          "animationSequence",
          Utils.getQWordReader(),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionCloudV6 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelCollisionCubeV6 = [
          "transform",
          ["[]", ["[]", "float32", 4], 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV6 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV6 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelCollisionDataV6 = [
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV6),
          "clouds",
          Utils.getArrayReader(this.ModelCollisionCloudV6),
          "cubes",
          Utils.getArrayReader(this.ModelCollisionCubeV6),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV6),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV6)
        ];

        this.ModelParticleFlipbookV6 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleCloudV6 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "flipbook",
          Utils.getArrayReader(this.ModelParticleFlipbookV6),
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "opacityCurveType",
          "uint8",
          "opacityKeys",
          Utils.getArrayReader(["[]", "float32", 2]),
          "scaleCurveType",
          "uint8",
          "scaleKeys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleEmitterV6 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelParticleObstacleV6 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8",
          "visBoneIndex",
          "uint32"
        ];

        this.ModelCloudDataV6 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV6),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV6),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV6)
        ];

        this.__root = this.ModelFileDataV6 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV6),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV6),
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV6),
          "animationFallbacks",
          Utils.getArrayReader(Utils.getQWordReader()),
          "animationImports",
          Utils.getArrayReader(this.ModelAnimationImportDataV6),
          "model",
          Utils.getPointerReader(this.ModelModelDataV6),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV6),
          "collisionData",
          Utils.getPointerReader(this.ModelCollisionDataV6),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV6)
        ];
      },

      // => Version: 5
      5: function() {
        this.ModelTextureDataV5 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader()
        ];

        this.ModelConstantDataV5 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV5 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV5),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV5)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV5 = [
          "mesh",
          this.PackGrannyMeshType,
          "flags",
          "uint32",
          "visTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV5 = [
          "token",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelAnimationDataV5 = [
          "token",
          Utils.getQWordReader(),
          "animation",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV5)
        ];

        this.ModelTransformDataV5 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV5 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV5,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV5 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV5),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV5 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV5 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV5),
          "InitialPlacement",
          this.ModelTransformDataV5,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV5)
        ];

        this.ModelFloatPropertyDataV5 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV5 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV5)
        ];

        this.ModelCollisionMeshV5 = [
          "animationSequence",
          Utils.getQWordReader(),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionCloudV5 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelCollisionCubeV5 = [
          "transform",
          ["[]", ["[]", "float32", 4], 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV5 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV5 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelCollisionDataV5 = [
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV5),
          "clouds",
          Utils.getArrayReader(this.ModelCollisionCloudV5),
          "cubes",
          Utils.getArrayReader(this.ModelCollisionCubeV5),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV5),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV5)
        ];

        this.ModelParticleFlipbookV5 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleCloudV5 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flags",
          "uint32",
          "flipbook",
          Utils.getArrayReader(this.ModelParticleFlipbookV5),
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "opacityCurveType",
          "uint8",
          "opacityKeys",
          Utils.getArrayReader(["[]", "float32", 2]),
          "scaleCurveType",
          "uint8",
          "scaleKeys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleEmitterV5 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8"
        ];

        this.ModelParticleObstacleV5 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelCloudDataV5 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV5),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV5),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV5)
        ];

        this.__root = this.ModelFileDataV5 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV5),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV5),
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV5),
          "model",
          Utils.getPointerReader(this.ModelModelDataV5),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV5),
          "collisionData",
          Utils.getPointerReader(this.ModelCollisionDataV5),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV5)
        ];
      },

      // => Version: 4
      4: function() {
        this.ModelTextureDataV4 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader()
        ];

        this.ModelConstantDataV4 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV4 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV4),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV4)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV4 = [
          "mesh",
          this.PackGrannyMeshType,
          "visTokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelVisTrackDataV4 = [
          "token",
          Utils.getQWordReader(),
          "keys",
          Utils.getArrayReader("float32")
        ];

        this.ModelAnimationDataV4 = [
          "token",
          Utils.getQWordReader(),
          "animation",
          this.PackGrannyAnimationTypeV0,
          "moveSpeed",
          "float32",
          "visTrackData",
          Utils.getArrayReader(this.ModelVisTrackDataV4)
        ];

        this.ModelTransformDataV4 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV4 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV4,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV4 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV4),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV4 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV4 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV4),
          "InitialPlacement",
          this.ModelTransformDataV4,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV4)
        ];

        this.ModelFloatPropertyDataV4 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV4 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV4)
        ];

        this.ModelCollisionMeshV4 = [
          "animationSequence",
          Utils.getQWordReader(),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionCloudV4 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelCollisionCubeV4 = [
          "transform",
          ["[]", ["[]", "float32", 4], 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV4 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV4 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelCollisionDataV4 = [
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV4),
          "clouds",
          Utils.getArrayReader(this.ModelCollisionCloudV4),
          "cubes",
          Utils.getArrayReader(this.ModelCollisionCubeV4),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV4),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV4)
        ];

        this.ModelParticleFlipbookV4 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleCloudV4 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flipbook",
          Utils.getArrayReader(this.ModelParticleFlipbookV4),
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "opacityCurveType",
          "uint8",
          "opacityKeys",
          Utils.getArrayReader(["[]", "float32", 2]),
          "scaleCurveType",
          "uint8",
          "scaleKeys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleEmitterV4 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8"
        ];

        this.ModelParticleObstacleV4 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelCloudDataV4 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV4),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV4),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV4)
        ];

        this.__root = this.ModelFileDataV4 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV4),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV4),
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV4),
          "model",
          Utils.getPointerReader(this.ModelModelDataV4),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV4),
          "collisionData",
          Utils.getPointerReader(this.ModelCollisionDataV4),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV4)
        ];
      },

      // => Version: 3
      3: function() {
        this.ModelTextureDataV3 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader()
        ];

        this.ModelConstantDataV3 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV3 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV3),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV3)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV3 = ["mesh", this.PackGrannyMeshType];

        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelAnimationDataV3 = [
          "token",
          Utils.getQWordReader(),
          "animation",
          this.PackGrannyAnimationTypeV0
        ];

        this.ModelTransformDataV3 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV3 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV3,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV3 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV3),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV3 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV3 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV3),
          "InitialPlacement",
          this.ModelTransformDataV3,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV3)
        ];

        this.ModelFloatPropertyDataV3 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV3 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV3)
        ];

        this.ModelCollisionMeshV3 = [
          "animationSequence",
          Utils.getQWordReader(),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionCloudV3 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelCollisionCubeV3 = [
          "transform",
          ["[]", ["[]", "float32", 4], 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV3 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV3 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelCollisionDataV3 = [
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV3),
          "clouds",
          Utils.getArrayReader(this.ModelCollisionCloudV3),
          "cubes",
          Utils.getArrayReader(this.ModelCollisionCubeV3),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV3),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV3)
        ];

        this.ModelParticleFlipbookV3 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleCloudV3 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flipbook",
          Utils.getArrayReader(this.ModelParticleFlipbookV3),
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "opacityCurveType",
          "uint8",
          "opacityKeys",
          Utils.getArrayReader(["[]", "float32", 2]),
          "scaleCurveType",
          "uint8",
          "scaleKeys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleEmitterV3 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8"
        ];

        this.ModelParticleObstacleV3 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelCloudDataV3 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV3),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV3),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV3)
        ];

        this.__root = this.ModelFileDataV3 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV3),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV3),
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV3),
          "model",
          Utils.getPointerReader(this.ModelModelDataV3),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV3),
          "collisionData",
          Utils.getPointerReader(this.ModelCollisionDataV3),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV3)
        ];
      },

      // => Version: 2
      2: function() {
        this.ModelTextureDataV2 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader()
        ];

        this.ModelConstantDataV2 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV2 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV2),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV2)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV2 = ["mesh", this.PackGrannyMeshType];

        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelAnimationDataV2 = [
          "token",
          Utils.getQWordReader(),
          "animation",
          this.PackGrannyAnimationTypeV0
        ];

        this.ModelTransformDataV2 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV2 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV2,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV2 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV2),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV2 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV2 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV2),
          "InitialPlacement",
          this.ModelTransformDataV2,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV2)
        ];

        this.ModelFloatPropertyDataV2 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV2 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV2)
        ];

        this.ModelCollisionMeshV2 = [
          "animationSequence",
          Utils.getQWordReader(),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionCloudV2 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV2 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelCollisionDataV2 = [
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV2),
          "clouds",
          Utils.getArrayReader(this.ModelCollisionCloudV2),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV2)
        ];

        this.ModelParticleFlipbookV2 = [
          "columns",
          "uint8",
          "count",
          "uint8",
          "flags",
          "uint8",
          "fps",
          "uint32",
          "rows",
          "uint8",
          "start",
          "uint8"
        ];

        this.ModelParticleCloudV2 = [
          "acceleration",
          ["[]", "float32", 3],
          "bone",
          Utils.getQWordReader(),
          "drag",
          "float32",
          "emitterIndices",
          Utils.getArrayReader("uint32"),
          "flipbook",
          Utils.getArrayReader(this.ModelParticleFlipbookV2),
          "materialIndex",
          "uint32",
          "obstacleIndices",
          Utils.getArrayReader("uint32"),
          "opacityCurveType",
          "uint8",
          "opacityKeys",
          Utils.getArrayReader(["[]", "float32", 2]),
          "scaleCurveType",
          "uint8",
          "scaleKeys",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.ModelParticleEmitterV2 = [
          "acceleration",
          ["[]", ["[]", "float32", 2], 4],
          "bone",
          Utils.getQWordReader(),
          "colorBegin",
          ["[]", "float32", 4],
          "colorEnd",
          ["[]", "float32", 4],
          "colorPeriod",
          ["[]", "float32", 2],
          "flags",
          "uint32",
          "lifetime",
          ["[]", "float32", 2],
          "rotationChange",
          ["[]", "float32", 2],
          "rotationInitial",
          ["[]", "float32", 2],
          "scaleChange",
          ["[]", ["[]", "float32", 2], 2],
          "scaleInitial",
          ["[]", ["[]", "float32", 2], 2],
          "velocity",
          ["[]", ["[]", "float32", 2], 4],
          "velocityDistRange",
          ["[]", "float32", 2],
          "velocityDistSpeed",
          ["[]", "float32", 2],
          "spawnGroupSize",
          ["[]", "float32", 2],
          "spawnPeriod",
          "float32",
          "spawnProbability",
          "float32",
          "spawnRadius",
          ["[]", "float32", 2],
          "spawnShape",
          "uint8"
        ];

        this.ModelParticleObstacleV2 = [
          "bone",
          Utils.getQWordReader(),
          "dragCoef",
          "float32",
          "flags",
          "uint32",
          "geoData",
          ["[]", "float32", 3],
          "gravityCoef",
          "float32",
          "response",
          "uint8",
          "type",
          "uint8"
        ];

        this.ModelCloudDataV2 = [
          "clouds",
          Utils.getArrayReader(this.ModelParticleCloudV2),
          "emitters",
          Utils.getArrayReader(this.ModelParticleEmitterV2),
          "obstacles",
          Utils.getArrayReader(this.ModelParticleObstacleV2)
        ];

        this.__root = this.ModelFileDataV2 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV2),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV2),
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV2),
          "model",
          Utils.getPointerReader(this.ModelModelDataV2),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV2),
          "collisionData",
          Utils.getPointerReader(this.ModelCollisionDataV2),
          "cloudData",
          Utils.getPointerReader(this.ModelCloudDataV2)
        ];
      },

      // => Version: 1
      1: function() {
        this.ModelTextureDataV1 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader()
        ];

        this.ModelConstantDataV1 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV1 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV1),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV1)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV1 = ["mesh", this.PackGrannyMeshType];

        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelAnimationDataV1 = [
          "token",
          Utils.getQWordReader(),
          "animation",
          this.PackGrannyAnimationTypeV0
        ];

        this.ModelTransformDataV1 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV1 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV1,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV1 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV1),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV1 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV1 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV1),
          "InitialPlacement",
          this.ModelTransformDataV1,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV1)
        ];

        this.ModelFloatPropertyDataV1 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV1 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV1)
        ];

        this.ModelChunkCollisionMeshV1 = [
          "animationSequence",
          Utils.getQWordReader(),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelChunkCollisionCloudV1 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelChunkCollisionSurfaceV1 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.ModelChunkCollisionDataV1 = [
          "meshes",
          Utils.getArrayReader(this.ModelChunkCollisionMeshV1),
          "clouds",
          Utils.getArrayReader(this.ModelChunkCollisionCloudV1),
          "surfaces",
          Utils.getArrayReader(this.ModelChunkCollisionSurfaceV1)
        ];

        this.__root = this.ModelFileDataV1 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV1),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV1),
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV1),
          "model",
          Utils.getPointerReader(this.ModelModelDataV1),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV1),
          "collisionData",
          Utils.getPointerReader(this.ModelChunkCollisionDataV1)
        ];
      },

      // => Version: 0
      0: function() {
        this.ModelTextureDataV0 = [
          "filename",
          Utils.getFileNameReader(),
          "textureFlags",
          "uint32",
          "token",
          Utils.getQWordReader(),
          "blitId",
          Utils.getQWordReader()
        ];

        this.ModelConstantDataV0 = [
          "name",
          "uint32",
          "value",
          ["[]", "float32", 4],
          "constantFlags",
          "uint32"
        ];

        this.ModelMaterialDataV0 = [
          "filename",
          Utils.getFileNameReader(),
          "materialFlags",
          "uint32",
          "sortOrder",
          "uint32",
          "textures",
          Utils.getArrayReader(this.ModelTextureDataV0),
          "constants",
          Utils.getArrayReader(this.ModelConstantDataV0)
        ];

        this.PackGrannyMeshType = ["mesh", Utils.getArrayReader("uint8")];

        this.ModelMeshDataV0 = ["mesh", this.PackGrannyMeshType];

        this.PackGrannyAnimationTypeV0 = [
          "animation",
          Utils.getArrayReader("uint8")
        ];

        this.ModelAnimationDataV0 = [
          "token",
          Utils.getQWordReader(),
          "animation",
          this.PackGrannyAnimationTypeV0
        ];

        this.ModelTransformDataV0 = [
          "Flags",
          "uint32",
          "Position",
          ["[]", "float32", 3],
          "Orientation",
          ["[]", "float32", 4],
          "ScaleShear",
          ["[]", ["[]", "float32", 3], 3]
        ];

        this.ModelBoneDataV0 = [
          "Name",
          Utils.getStringReader(),
          "ParentIndex",
          "uint32",
          "LocalTransform",
          this.ModelTransformDataV0,
          "InverseWorld4x4",
          ["[]", ["[]", "float32", 4], 4],
          "LODError",
          "float32",
          "ExtendedData.Type",
          Utils.getPointerReader("uint8"),
          "ExtendedData.Object",
          Utils.getPointerReader("uint8")
        ];

        this.ModelSkeletonDataV0 = [
          "Name",
          Utils.getStringReader(),
          "Bones",
          Utils.getArrayReader(this.ModelBoneDataV0),
          "LODType",
          "uint32"
        ];

        this.ModelMeshBindingDataV0 = ["Mesh", Utils.getPointerReader("uint8")];

        this.ModelModelDataV0 = [
          "Name",
          Utils.getStringReader(),
          "Skeleton",
          Utils.getPointerReader(this.ModelSkeletonDataV0),
          "InitialPlacement",
          this.ModelTransformDataV0,
          "MeshBindings",
          Utils.getArrayReader(this.ModelMeshBindingDataV0)
        ];

        this.ModelFloatPropertyDataV0 = [
          "token",
          Utils.getQWordReader(),
          "value",
          "float32"
        ];

        this.ModelPropertyDataV0 = [
          "boolTokens",
          Utils.getArrayReader(Utils.getQWordReader()),
          "floatValues",
          Utils.getArrayReader(this.ModelFloatPropertyDataV0)
        ];

        this.__root = this.ModelFileDataV0 = [
          "materials",
          Utils.getRefArrayReader(this.ModelMaterialDataV0),
          "meshes",
          Utils.getRefArrayReader(this.ModelMeshDataV0),
          "animations",
          Utils.getRefArrayReader(this.ModelAnimationDataV0),
          "model",
          Utils.getPointerReader(this.ModelModelDataV0),
          "properties",
          Utils.getPointerReader(this.ModelPropertyDataV0)
        ];
      }
    }
  }
];
