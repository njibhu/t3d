let Utils = T3D.ParserUtils;

module.exports = [
  /// ==================================================
  /// Chunk: env, versions: 76, strucTab: 0x17206D8
  /// ==================================================

  {
    name: "env",
    versions: {
      // => Version: 75, ReferencedFunction: 0xEB9240
      75: function() {
        this.PackMapEnvDataLightV75 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV75 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV75),
          "shadowInfluence",
          "float32",
          "backlightColor",
          ["[]", "uint8", 3],
          "backlightIntensity",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV46 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV46 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV46)
        ];

        this.PackMapEnvDataLayerAttributesV75 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32",
          "reserved",
          "uint32"
        ];

        this.PackMapEnvDataLayerV75 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV75),
          "name",
          Utils.getString16Reader(),
          "reserved",
          "uint32"
        ];

        this.PackMapEnvDataCloudsV75 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV75)
        ];

        this.PackMapEnvDataColoredLightRingsV46 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectExV46 = ["dummy", "uint32"];

        this.PackMapEnvDataEffectV75 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "ssaoAmount",
          "float32",
          "ssaoBrighten",
          "float32",
          "ssaoContrast",
          "float32",
          "ssaoSunScale",
          "float32",
          "flags",
          "uint32",
          "clutTexturePath",
          Utils.getFileNameReader(),
          "ext",
          Utils.getPointerReader(this.PackMapEnvDataEffectExV46)
        ];

        this.PackMapEnvDataHazeV75 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV75 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "float32",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader(),
          "reserved",
          "uint32"
        ];

        this.PackMapEnvDataPFieldCutoutV46 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV75 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvLensFlareAtomV46 = [
          "rows",
          "uint32",
          "columns",
          "uint32",
          "start",
          "uint32",
          "fps",
          "float32",
          "color",
          ["[]", "uint8", 4],
          "offset",
          ["[]", "float32", 2],
          "scale",
          ["[]", "float32", 2],
          "baseRotation",
          "float32",
          "cameraRotation",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvLensFlareTextureV46 = [
          "texture",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataShaderConstantV46 = [
          "token",
          "uint32",
          "value",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvLensFlareV46 = [
          "atoms",
          Utils.getArrayReader(this.PackMapEnvLensFlareAtomV46),
          "textures",
          Utils.getArrayReader(this.PackMapEnvLensFlareTextureV46),
          "material",
          Utils.getFileNameReader(),
          "fadeBand",
          ["[]", "float32", 2],
          "reverseFadeBand",
          ["[]", "float32", 2],
          "opacityCoeff",
          "float32",
          "flags",
          "uint8",
          "constants",
          Utils.getArrayReader(this.PackMapEnvDataShaderConstantV46)
        ];

        this.PackMapEnvDataSkyCardAttributesExV46 = ["dummy", "uint32"];

        this.PackMapEnvDataSkyCardAttributesV75 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32",
          "lensFlare",
          Utils.getPointerReader(this.PackMapEnvLensFlareV46),
          "ext",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardAttributesExV46)
        ];

        this.PackMapEnvDataShaderTextureV46 = [
          "filename",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackEnvDataSkyCardAnimationV46 = [
          "textureAnimTranslation",
          ["[]", "float32", 2],
          "textureAnimScaleRangeX",
          ["[]", "float32", 2],
          "textureAnimScaleRangeY",
          ["[]", "float32", 2],
          "textureAnimScaleSpeed",
          ["[]", "float32", 2],
          "textureAnimRotation",
          "float32",
          "texCoords",
          "uint32"
        ];

        this.PackMapEnvDataSkycardFlipbookV46 = [
          "rows",
          "uint32",
          "columns",
          "uint32",
          "start",
          "uint32",
          "count",
          "uint32",
          "fps",
          "float32"
        ];

        this.PackMapEnvDataSkyCardMaterialV46 = [
          "filename",
          Utils.getFileNameReader(),
          "constants",
          Utils.getArrayReader(this.PackMapEnvDataShaderConstantV46),
          "textures",
          Utils.getArrayReader(this.PackMapEnvDataShaderTextureV46),
          "textureAnimation",
          this.PackEnvDataSkyCardAnimationV46,
          "flipbook",
          this.PackMapEnvDataSkycardFlipbookV46
        ];

        this.PackMapEnvDataSkyCardExV46 = ["dummy", "uint32"];

        this.PackMapEnvDataSkyCardV75 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV75,
          "night",
          this.PackMapEnvDataSkyCardAttributesV75,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader(),
          "location",
          ["[]", "float32", 3],
          "material",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardMaterialV46),
          "ext",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardExV46)
        ];

        this.PackMapEnvDataSkyCardsV75 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV75)
        ];

        this.PackMapEnvDataSpawnModelDataV46 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader(),
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV46 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV46)
        ];

        this.PackMapEnvDataSpawnGroupsV46 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV46),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV75 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV75 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataAudioV46 = ["token", Utils.getQWordReader()];

        this.PackMapEnvDataBaseEx2V46 = ["dummy", "uint32"];

        this.PackMapEnvDataBaseExV46 = [
          "ext2",
          Utils.getPointerReader(this.PackMapEnvDataBaseEx2V46),
          "brightTime",
          "float32",
          "dimTime",
          "float32",
          "darkCoeff",
          "float32",
          "darkExp",
          "float32",
          "darkMin",
          "float32",
          "darkMax",
          "float32",
          "brightMin",
          "float32",
          "brightMax",
          "float32",
          "brightScale",
          "float32",
          "darkScale",
          "float32",
          "waterReflectionParams",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataShapeV46 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV75 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV75),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV46),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV75),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV46),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV75),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV75),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV75),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV46),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV75),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV75),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV46),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV75),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV75),
          "audio",
          Utils.getRefArrayReader(this.PackMapEnvDataAudioV46),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "ext",
          Utils.getPointerReader(this.PackMapEnvDataBaseExV46),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV46)
        ];

        this.PackMapEnvDataSkyModeTexV75 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV75 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV75),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV46),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV75),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV46),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV75),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV75),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV75),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV46),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV75),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV75),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV46),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV75),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV75),
          "audio",
          Utils.getRefArrayReader(this.PackMapEnvDataAudioV46),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "ext",
          Utils.getPointerReader(this.PackMapEnvDataBaseExV46),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV75),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV75 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV75),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV75)
        ];
      },

      // => Version: 74
      74: function() {
        this.PackMapEnvDataLightV74 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV74 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV74),
          "shadowInfluence",
          "float32",
          "backlightColor",
          ["[]", "uint8", 3],
          "backlightIntensity",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV45 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV45 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV45)
        ];

        this.PackMapEnvDataLayerAttributesV74 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32",
          "reserved",
          "uint32"
        ];

        this.PackMapEnvDataLayerV74 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV74),
          "name",
          Utils.getString16Reader(),
          "reserved",
          "uint32"
        ];

        this.PackMapEnvDataCloudsV74 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV74)
        ];

        this.PackMapEnvDataColoredLightRingsV45 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV74 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV74 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV74 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "float32",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader(),
          "reserved",
          "uint32"
        ];

        this.PackMapEnvDataPFieldCutoutV45 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV74 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV74 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV74 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV74,
          "night",
          this.PackMapEnvDataSkyCardAttributesV74,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV74 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV74)
        ];

        this.PackMapEnvDataSpawnModelDataV45 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader(),
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV45 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV45)
        ];

        this.PackMapEnvDataSpawnGroupsV45 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV45),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV74 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV74 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataAudioV45 = ["token", Utils.getQWordReader()];

        this.PackMapEnvDataShapeV45 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV74 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV74),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV45),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV74),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV45),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV74),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV74),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV74),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV45),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV74),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV74),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV45),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV74),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV74),
          "audio",
          Utils.getRefArrayReader(this.PackMapEnvDataAudioV45),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "reserved",
          Utils.getString16Reader(),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV45)
        ];

        this.PackMapEnvDataSkyModeTexV74 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV74 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV74),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV45),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV74),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV45),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV74),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV74),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV74),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV45),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV74),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV74),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV45),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV74),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV74),
          "audio",
          Utils.getRefArrayReader(this.PackMapEnvDataAudioV45),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "reserved",
          Utils.getString16Reader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV74),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV74 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV74),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV74)
        ];
      },

      // => Version: 73
      73: function() {
        this.PackMapEnvDataLightV73 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV73 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV73),
          "shadowInfluence",
          "float32",
          "backlightColor",
          ["[]", "uint8", 3],
          "backlightIntensity",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV44 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV44 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV44)
        ];

        this.PackMapEnvDataLayerAttributesV73 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV73 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV73),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV73 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV73)
        ];

        this.PackMapEnvDataColoredLightRingsV44 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV73 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV73 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV73 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "float32",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV44 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV73 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV73 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV73 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV73,
          "night",
          this.PackMapEnvDataSkyCardAttributesV73,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV73 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV73)
        ];

        this.PackMapEnvDataSpawnModelDataV44 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader(),
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV44 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV44)
        ];

        this.PackMapEnvDataSpawnGroupsV44 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV44),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV73 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV73 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataAudioV44 = ["token", Utils.getQWordReader()];

        this.PackMapEnvDataShapeV44 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV73 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV73),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV44),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV73),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV44),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV73),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV73),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV73),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV44),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV73),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV73),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV44),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV73),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV73),
          "audio",
          Utils.getRefArrayReader(this.PackMapEnvDataAudioV44),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV44)
        ];

        this.PackMapEnvDataSkyModeTexV73 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV73 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV73),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV44),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV73),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV44),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV73),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV73),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV73),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV44),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV73),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV73),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV44),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV73),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV73),
          "audio",
          Utils.getRefArrayReader(this.PackMapEnvDataAudioV44),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV73),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV73 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV73),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV73)
        ];
      },

      // => Version: 72
      72: function() {
        this.PackMapEnvDataLightV72 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV72 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV72),
          "shadowInfluence",
          "float32",
          "backlightColor",
          ["[]", "uint8", 3],
          "backlightIntensity",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV43 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV43 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV43)
        ];

        this.PackMapEnvDataLayerAttributesV72 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV72 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV72),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV72 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV72)
        ];

        this.PackMapEnvDataColoredLightRingsV43 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV72 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV72 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV72 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "float32",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV43 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV72 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV72 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV72 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV72,
          "night",
          this.PackMapEnvDataSkyCardAttributesV72,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV72 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV72)
        ];

        this.PackMapEnvDataSpawnModelDataV43 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader(),
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV43 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV43)
        ];

        this.PackMapEnvDataSpawnGroupsV43 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV43),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV72 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV72 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataShapeV43 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV72 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV72),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV43),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV72),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV43),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV72),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV72),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV72),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV43),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV72),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV72),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV43),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV72),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV72),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "audioToken",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV43)
        ];

        this.PackMapEnvDataSkyModeTexV72 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV72 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV72),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV43),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV72),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV43),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV72),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV72),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV72),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV43),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV72),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV72),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV43),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV72),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV72),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "audioToken",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV72),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV72 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV72),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV72)
        ];
      },

      // => Version: 71, ReferencedFunction: 0xEB91A0
      71: function() {
        this.PackMapEnvDataLightV71 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV71 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV71),
          "shadowInfluence",
          "float32",
          "backlightColor",
          ["[]", "uint8", 3],
          "backlightIntensity",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV42 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV42 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV42)
        ];

        this.PackMapEnvDataLayerAttributesV71 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV71 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV71),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV71 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV71)
        ];

        this.PackMapEnvDataColoredLightRingsV42 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV71 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV71 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV71 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "float32",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV42 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV71 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV71 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV71 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV71,
          "night",
          this.PackMapEnvDataSkyCardAttributesV71,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV71 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV71)
        ];

        this.PackMapEnvDataSpawnModelDataV42 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader(),
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV42 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV42)
        ];

        this.PackMapEnvDataSpawnGroupsV42 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV42),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV71 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV71 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataShapeV42 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV71 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV71),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV42),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV71),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV42),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV71),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV71),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV71),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV42),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV71),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV71),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV42),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV71),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV71),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV42)
        ];

        this.PackMapEnvDataSkyModeTexV71 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV71 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV71),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV42),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV71),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV42),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV71),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV71),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV71),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV42),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV71),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV71),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV42),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV71),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV71),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV71),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV71 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV71),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV71)
        ];
      },

      // => Version: 70, ReferencedFunction: 0xEB9150
      70: function() {
        this.PackMapEnvDataLightV70 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV70 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV70),
          "shadowInfluence",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV41 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV41 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV41)
        ];

        this.PackMapEnvDataLayerAttributesV70 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV70 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV70),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV70 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV70)
        ];

        this.PackMapEnvDataColoredLightRingsV41 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV70 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV70 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV70 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "float32",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV41 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV70 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV70 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV70 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV70,
          "night",
          this.PackMapEnvDataSkyCardAttributesV70,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV70 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV70)
        ];

        this.PackMapEnvDataSpawnModelDataV41 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader(),
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV41 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV41)
        ];

        this.PackMapEnvDataSpawnGroupsV41 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV41),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV70 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV70 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataShapeV41 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV70 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV70),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV41),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV70),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV41),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV70),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV70),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV70),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV41),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV70),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV70),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV41),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV70),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV70),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV41)
        ];

        this.PackMapEnvDataSkyModeTexV70 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV70 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV70),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV41),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV70),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV41),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV70),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV70),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV70),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV41),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV70),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV70),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV41),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV70),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV70),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV70),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV70 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV70),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV70)
        ];
      },

      // => Version: 69
      69: function() {
        this.PackMapEnvDataLightV69 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV69 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV69),
          "shadowInfluence",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV40 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV40 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV40)
        ];

        this.PackMapEnvDataLayerAttributesV69 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV69 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV69),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV69 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV69)
        ];

        this.PackMapEnvDataColoredLightRingsV40 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV69 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV69 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV69 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV40 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV69 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV69 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV69 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV69,
          "night",
          this.PackMapEnvDataSkyCardAttributesV69,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV69 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV69)
        ];

        this.PackMapEnvDataSpawnModelDataV40 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader(),
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV40 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV40)
        ];

        this.PackMapEnvDataSpawnGroupsV40 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV40),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV69 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV69 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataShapeV40 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV69 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV69),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV40),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV69),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV40),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV69),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV69),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV69),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV40),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV69),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV69),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV40),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV69),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV69),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV40)
        ];

        this.PackMapEnvDataSkyModeTexV69 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV69 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV69),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV40),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV69),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV40),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV69),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV69),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV69),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV40),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV69),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV69),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV40),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV69),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV69),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV69),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV69 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV69),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV69)
        ];
      },

      // => Version: 68, ReferencedFunction: 0xEB9030
      68: function() {
        this.PackMapEnvDataLightV68 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV68 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV68),
          "shadowInfluence",
          "float32",
          "backlight",
          Utils.getPointerReader(this.PackMapEnvDataLightV68)
        ];

        this.PackMapEnvDataLightingCharV39 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV39 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV39)
        ];

        this.PackMapEnvDataLayerAttributesV68 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV68 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV68),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV68 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV68)
        ];

        this.PackMapEnvDataColoredLightRingsV39 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV68 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV68 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV68 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV39 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV68 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV68 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV68 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV68,
          "night",
          this.PackMapEnvDataSkyCardAttributesV68,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV68 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV68)
        ];

        this.PackMapEnvDataSpawnModelDataV39 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader(),
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV39 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV39)
        ];

        this.PackMapEnvDataSpawnGroupsV39 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV39),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV68 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV68 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataShapeV39 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV68 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV68),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV39),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV68),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV39),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV68),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV68),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV68),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV39),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV68),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV68),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV39),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV68),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV68),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV39)
        ];

        this.PackMapEnvDataSkyModeTexV68 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV68 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV68),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV39),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV68),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV39),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV68),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV68),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV68),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV39),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV68),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV68),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV39),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV68),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV68),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV68),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV68 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV68),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV68)
        ];
      },

      // => Version: 67
      67: function() {
        this.PackMapEnvDataLightV67 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV67 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV67),
          "shadowInfluence",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV38 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV38 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV38)
        ];

        this.PackMapEnvDataLayerAttributesV67 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV67 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV67),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV67 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV67)
        ];

        this.PackMapEnvDataColoredLightRingsV38 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV67 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV67 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV67 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV38 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV67 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV67 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV67 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV67,
          "night",
          this.PackMapEnvDataSkyCardAttributesV67,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV67 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV67)
        ];

        this.PackMapEnvDataSpawnModelDataV38 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "animSequence",
          Utils.getQWordReader(),
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV38 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV38)
        ];

        this.PackMapEnvDataSpawnGroupsV38 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV38),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV67 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV67 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataShapeV38 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV67 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV67),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV38),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV67),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV38),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV67),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV67),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV67),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV38),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV67),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV67),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV38),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV67),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV67),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV38)
        ];

        this.PackMapEnvDataSkyModeTexV67 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV67 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV67),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV38),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV67),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV38),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV67),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV67),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV67),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV38),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV67),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV67),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV38),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV67),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV67),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV67),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV67 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV67),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV67)
        ];
      },

      // => Version: 66, ReferencedFunction: 0xEB8EE0
      66: function() {
        this.PackMapEnvDataLightV66 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV66 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV66),
          "shadowInfluence",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV37 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV37 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV37)
        ];

        this.PackMapEnvDataLayerAttributesV66 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV66 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV66),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV66 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV66)
        ];

        this.PackMapEnvDataColoredLightRingsV37 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV66 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV66 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV66 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV37 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV66 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV66 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV66 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV66,
          "night",
          this.PackMapEnvDataSkyCardAttributesV66,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV66 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV66)
        ];

        this.PackMapEnvDataSpawnModelDataV37 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV37 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV37)
        ];

        this.PackMapEnvDataSpawnGroupsV37 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV37),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV66 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV66 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataShapeV37 = [
          "center",
          ["[]", "float32", 3],
          "height",
          "float32",
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "shapeType",
          "uint8"
        ];

        this.PackMapEnvDataLocalV66 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV66),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV37),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV66),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV37),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV66),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV66),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV66),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV37),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV66),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV66),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV37),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV66),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV66),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "guid",
          Utils.getQWordReader(),
          "shapeArray",
          Utils.getArrayReader(this.PackMapEnvDataShapeV37)
        ];

        this.PackMapEnvDataSkyModeTexV66 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV66 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV66),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV37),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV66),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV37),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV66),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV66),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV66),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV37),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV66),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV66),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV37),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV66),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV66),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV66),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV66 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV66),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV66)
        ];
      },

      // => Version: 65, ReferencedFunction: 0xEB8E80
      65: function() {
        this.PackMapEnvDataLightV65 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV65 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV65),
          "shadowInfluence",
          "float32"
        ];

        this.PackMapEnvDataLightingCharV36 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV36 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV36)
        ];

        this.PackMapEnvDataLayerAttributesV65 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV65 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV65),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV65 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV65)
        ];

        this.PackMapEnvDataColoredLightRingsV36 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV65 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV65 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV65 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV36 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV65 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV65 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV65 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV65,
          "night",
          this.PackMapEnvDataSkyCardAttributesV65,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV65 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV65)
        ];

        this.PackMapEnvDataSpawnModelDataV36 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV36 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV36)
        ];

        this.PackMapEnvDataSpawnGroupsV36 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV36),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV65 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV65 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataLocalV65 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV65),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV36),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV65),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV36),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV65),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV65),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV65),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV36),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV65),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV65),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV36),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV65),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV65),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV65 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV65 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV65),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV36),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV65),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV36),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV65),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV65),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV65),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV36),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV65),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV65),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV36),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV65),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV65),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV65),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV65 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV65),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV65)
        ];
      },

      // => Version: 64, ReferencedFunction: 0xEB8D90
      64: function() {
        this.PackMapEnvDataLightV64 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV64 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV64)
        ];

        this.PackMapEnvDataLightingCharV35 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV35 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV35)
        ];

        this.PackMapEnvDataLayerAttributesV64 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV64 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV64),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV64 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV64)
        ];

        this.PackMapEnvDataColoredLightRingsV35 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV64 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV64 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV64 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV35 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV64 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32",
          "verticalOffset",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV64 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV64 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV64,
          "night",
          this.PackMapEnvDataSkyCardAttributesV64,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV64 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV64)
        ];

        this.PackMapEnvDataSpawnModelDataV35 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV35 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV35)
        ];

        this.PackMapEnvDataSpawnGroupsV35 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV35),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV64 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV64 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8",
          "gustSpeed",
          "uint8"
        ];

        this.PackMapEnvDataLocalV64 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV64),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV35),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV64),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV35),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV64),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV64),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV64),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV35),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV64),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV64),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV35),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV64),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV64),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV64 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV64 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV64),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV35),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV64),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV35),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV64),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV64),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV64),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV35),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV64),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV64),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV35),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV64),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV64),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV64),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV64 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV64),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV64)
        ];
      },

      // => Version: 63, ReferencedFunction: 0xEB8C90
      63: function() {
        this.PackMapEnvDataLightV63 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV63 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV63)
        ];

        this.PackMapEnvDataLightingCharV34 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV34 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV34)
        ];

        this.PackMapEnvDataLayerAttributesV63 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV63 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV63),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV63 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV63)
        ];

        this.PackMapEnvDataColoredLightRingsV34 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV63 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV63 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV63 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV34 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV63 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV63 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV63 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV63,
          "night",
          this.PackMapEnvDataSkyCardAttributesV63,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV63 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV63)
        ];

        this.PackMapEnvDataSpawnModelDataV34 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV34 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV34)
        ];

        this.PackMapEnvDataSpawnGroupsV34 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV34),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV63 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4]),
          "foamSpawn",
          "float32",
          "foamDissolve",
          "float32",
          "foamDepthAttenuation",
          "float32",
          "foamColor0",
          ["[]", "uint8", 4],
          "foamColor1",
          ["[]", "uint8", 4]
        ];

        this.PackMapEnvDataWindV63 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV63 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV63),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV34),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV63),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV34),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV63),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV63),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV63),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV34),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV63),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV63),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV34),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV63),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV63),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV63 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV63 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV63),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV34),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV63),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV34),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV63),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV63),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV63),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV34),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV63),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV63),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV34),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV63),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV63),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV63),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV63 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV63),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV63)
        ];
      },

      // => Version: 62, ReferencedFunction: 0xEB8C60
      62: function() {
        this.PackMapEnvDataLightV62 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV62 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV62)
        ];

        this.PackMapEnvDataLightingCharV33 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV33 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV33)
        ];

        this.PackMapEnvDataLayerAttributesV62 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV62 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV62),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV62 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV62)
        ];

        this.PackMapEnvDataColoredLightRingsV33 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV62 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV62 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32",
          "sunDirRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataPFieldV62 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV33 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV62 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV62 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV62 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV62,
          "night",
          this.PackMapEnvDataSkyCardAttributesV62,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV62 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV62)
        ];

        this.PackMapEnvDataSpawnModelDataV33 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV33 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV33)
        ];

        this.PackMapEnvDataSpawnGroupsV33 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV33),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV62 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV62 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV62 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV62),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV33),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV62),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV33),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV62),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV62),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV62),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV33),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV62),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV62),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV33),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV62),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV62),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV62 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV62 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV62),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV33),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV62),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV33),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV62),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV62),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV62),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV33),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV62),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV62),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV33),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV62),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV62),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV62),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV62 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV62),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV62)
        ];
      },

      // => Version: 61, ReferencedFunction: 0xEB8C30
      61: function() {
        this.PackMapEnvDataLightV61 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV61 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV61)
        ];

        this.PackMapEnvDataLightingCharV32 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV32 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV32)
        ];

        this.PackMapEnvDataLayerAttributesV61 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV61 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV61),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV61 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV61)
        ];

        this.PackMapEnvDataColoredLightRingsV32 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV61 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2],
          "flatteningCharacterRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV61 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV61 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV32 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV61 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV61 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV61 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV61,
          "night",
          this.PackMapEnvDataSkyCardAttributesV61,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV61 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV61)
        ];

        this.PackMapEnvDataSpawnModelDataV32 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV32 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV32)
        ];

        this.PackMapEnvDataSpawnGroupsV32 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV32),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV61 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV61 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV61 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV61),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV32),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV61),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV32),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV61),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV61),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV61),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV32),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV61),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV61),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV32),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV61),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV61),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV61 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV61 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV61),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV32),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV61),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV32),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV61),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV61),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV61),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV32),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV61),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV61),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV32),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV61),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV61),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV61),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV61 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV61),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV61)
        ];
      },

      // => Version: 60, ReferencedFunction: 0xEB8C00
      60: function() {
        this.PackMapEnvDataLightV60 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV60 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV60)
        ];

        this.PackMapEnvDataLightingCharV31 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV31 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV31)
        ];

        this.PackMapEnvDataLayerAttributesV60 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV60 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV60),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV60 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV60)
        ];

        this.PackMapEnvDataColoredLightRingsV31 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV60 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32",
          "flatteningRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataHazeV60 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV60 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV31 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV60 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV60 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV60 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV60,
          "night",
          this.PackMapEnvDataSkyCardAttributesV60,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV60 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV60)
        ];

        this.PackMapEnvDataSpawnModelDataV31 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV31 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV31)
        ];

        this.PackMapEnvDataSpawnGroupsV31 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV31),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV60 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV60 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV60 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV60),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV31),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV60),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV31),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV60),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV60),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV60),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV31),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV60),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV60),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV31),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV60),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV60),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV60 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV60 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV60),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV31),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV60),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV31),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV60),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV60),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV60),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV31),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV60),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV60),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV31),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV60),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV60),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV60),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV60 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV60),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV60)
        ];
      },

      // => Version: 59, ReferencedFunction: 0xEB8AF0
      59: function() {
        this.PackMapEnvDataLightV59 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV59 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV59)
        ];

        this.PackMapEnvDataLightingCharV30 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV30 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV30)
        ];

        this.PackMapEnvDataLayerAttributesV59 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV59 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV59),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV59 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV59)
        ];

        this.PackMapEnvDataColoredLightRingsV30 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV59 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV59 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV59 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV30 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV59 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV59 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV59 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV59,
          "night",
          this.PackMapEnvDataSkyCardAttributesV59,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV59 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV59)
        ];

        this.PackMapEnvDataSpawnModelDataV30 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getFileNameReader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV30 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV30)
        ];

        this.PackMapEnvDataSpawnGroupsV30 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV30),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV59 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV59 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV59 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV59),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV30),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV59),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV30),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV59),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV59),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV59),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV30),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV59),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV59),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV30),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV59),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV59),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV59 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV59 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV59),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV30),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV59),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV30),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV59),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV59),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV59),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV30),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV59),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV59),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV30),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV59),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV59),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV59),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV59 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV59),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV59)
        ];
      },

      // => Version: 58, ReferencedFunction: 0xEB89E0
      58: function() {
        this.PackMapEnvDataLightV58 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV58 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV58)
        ];

        this.PackMapEnvDataLightingCharV29 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV29 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV29)
        ];

        this.PackMapEnvDataLayerAttributesV58 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV58 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV58),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV58 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV58)
        ];

        this.PackMapEnvDataColoredLightRingsV29 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV58 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV58 = [
          "nearColor",
          ["[]", "uint8", 4],
          "farColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV58 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV29 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV58 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV58 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV58 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV58,
          "night",
          this.PackMapEnvDataSkyCardAttributesV58,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV58 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV58)
        ];

        this.PackMapEnvDataSpawnModelDataV29 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getString16Reader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV29 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV29)
        ];

        this.PackMapEnvDataSpawnGroupsV29 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV29),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.PackMapEnvDataWaterV58 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV58 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV58 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV58),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV29),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV58),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV29),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV58),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV58),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV58),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV29),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV58),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV58),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV29),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV58),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV58),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV58 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV58 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV58),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV29),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV58),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV29),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV58),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV58),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV58),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV29),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV58),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV58),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV29),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV58),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV58),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV58),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV58 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV58),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV58)
        ];
      },

      // => Version: 57
      57: function() {
        this.PackMapEnvDataLightV57 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV57 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV57)
        ];

        this.PackMapEnvDataLightingCharV28 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV28 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV28)
        ];

        this.PackMapEnvDataLayerAttributesV57 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV57 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV57),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV57 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV57)
        ];

        this.PackMapEnvDataColoredLightRingsV28 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV57 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV57 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV57 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV28 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV57 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV57 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV57 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV57,
          "night",
          this.PackMapEnvDataSkyCardAttributesV57,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV57 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV57)
        ];

        this.PackMapEnvDataSpawnModelDataV28 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "heightRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getString16Reader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV28 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV28)
        ];

        this.PackMapEnvDataSpawnGroupsV28 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV28),
          "targetVolume",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataWaterV57 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV57 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV57 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV57),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV28),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV57),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV28),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV57),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV57),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV57),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV28),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV57),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV57),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV28),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV57),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV57),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV57 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV57 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV57),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV28),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV57),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV28),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV57),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV57),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV57),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV28),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV57),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV57),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV28),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV57),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV57),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV57),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV57 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV57),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV57)
        ];
      },

      // => Version: 56, ReferencedFunction: 0xEB88D0
      56: function() {
        this.PackMapEnvDataLightV56 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV56 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV56)
        ];

        this.PackMapEnvDataLightingCharV27 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV27 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV27)
        ];

        this.PackMapEnvDataLayerAttributesV56 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV56 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV56),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV56 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV56)
        ];

        this.PackMapEnvDataColoredLightRingsV27 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV56 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV56 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV56 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV27 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV56 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV56 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV56 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV56,
          "night",
          this.PackMapEnvDataSkyCardAttributesV56,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV56 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV56)
        ];

        this.PackMapEnvDataSpawnModelDataV27 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "scaleRange",
          ["[]", "float32", 2],
          "rotXRange",
          ["[]", "float32", 2],
          "rotYRange",
          ["[]", "float32", 2],
          "rotZRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "flags",
          "uint32",
          "modelFile",
          Utils.getString16Reader(),
          "maxConcurrent",
          "uint16"
        ];

        this.PackMapEnvDataSpawnListV27 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV27)
        ];

        this.PackMapEnvDataSpawnGroupsV27 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV27),
          "targetVolume",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataWaterV56 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV56 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV56 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV56),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV27),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV56),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV27),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV56),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV56),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV56),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV27),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV56),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV56),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV27),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV56),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV56),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV56 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV56 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV56),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV27),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV56),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV27),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV56),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV56),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV56),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV27),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV56),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV56),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV27),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV56),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV56),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV56),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV56 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV56),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV56)
        ];
      },

      // => Version: 55
      55: function() {
        this.PackMapEnvDataLightV55 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV55 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV55)
        ];

        this.PackMapEnvDataLightingCharV26 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV26 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV26)
        ];

        this.PackMapEnvDataLayerAttributesV55 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV55 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV55),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV55 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV55)
        ];

        this.PackMapEnvDataColoredLightRingsV26 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV55 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV55 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV55 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV26 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV55 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV55 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV55 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV55,
          "night",
          this.PackMapEnvDataSkyCardAttributesV55,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV55 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV55)
        ];

        this.PackMapEnvDataSpawnModelDataV26 = [
          "spawnRange",
          ["[]", "uint32", 2],
          "lifeSpan",
          ["[]", "uint32", 2],
          "probability",
          "float32",
          "delay",
          "float32",
          "maxConcurrent",
          "uint16",
          "flags",
          "uint32",
          "modelFile",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSpawnListV26 = [
          "spawns",
          Utils.getArrayReader(this.PackMapEnvDataSpawnModelDataV26)
        ];

        this.PackMapEnvDataSpawnGroupsV26 = [
          "spawnGroups",
          Utils.getArrayReader(this.PackMapEnvDataSpawnListV26),
          "targetVolume",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataWaterV55 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV55 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV55 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV55),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV26),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV55),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV26),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV55),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV55),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV55),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV26),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV55),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV55),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV26),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV55),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV55),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV55 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV55 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV55),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV26),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV55),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV26),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV55),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV55),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV55),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV26),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV55),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV55),
          "spawns",
          Utils.getPointerReader(this.PackMapEnvDataSpawnGroupsV26),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV55),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV55),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV55),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV55 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV55),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV55)
        ];
      },

      // => Version: 54, ReferencedFunction: 0xEB8820
      54: function() {
        this.PackMapEnvDataLightV54 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV54 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV54)
        ];

        this.PackMapEnvDataLightingCharV25 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV25 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV25)
        ];

        this.PackMapEnvDataLayerAttributesV54 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV54 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV54),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV54 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV54)
        ];

        this.PackMapEnvDataColoredLightRingsV25 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV54 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV54 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV54 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV25 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV54 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV54 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV54 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV54,
          "night",
          this.PackMapEnvDataSkyCardAttributesV54,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV54 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV54)
        ];

        this.PackMapEnvDataWaterV54 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV54 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV54 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV54),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV25),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV54),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV25),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV54),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV54),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV54),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV25),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV54),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV54),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV54),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV54),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV54 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV54 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV54),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV25),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV54),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV25),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV54),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV54),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV54),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV25),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV54),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV54),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV54),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV54),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV54),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV54 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV54),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV54)
        ];
      },

      // => Version: 53, ReferencedFunction: 0xEB8770
      53: function() {
        this.PackMapEnvDataLightV53 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV53 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV53)
        ];

        this.PackMapEnvDataLightingCharV24 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV24 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV24)
        ];

        this.PackMapEnvDataLayerAttributesV53 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV53 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV53),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV53 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV53)
        ];

        this.PackMapEnvDataColoredLightRingsV24 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV53 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV53 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV53 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "deviationSpeed",
          ["[]", "float32", 2],
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV24 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV53 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV53 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV53 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV53,
          "night",
          this.PackMapEnvDataSkyCardAttributesV53,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV53 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV53)
        ];

        this.PackMapEnvDataWaterV53 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV53 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV53 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV53),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV24),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV53),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV24),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV53),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV53),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV53),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV24),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV53),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV53),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV53),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV53),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV53 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV53 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV53),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV24),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV53),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV24),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV53),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV53),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV53),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV24),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV53),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV53),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV53),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV53),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV53),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV53 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV53),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV53)
        ];
      },

      // => Version: 52, ReferencedFunction: 0xEB8690
      52: function() {
        this.PackMapEnvDataLightV52 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV52 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV52)
        ];

        this.PackMapEnvDataLightingCharV23 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV23 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV23)
        ];

        this.PackMapEnvDataLayerAttributesV52 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV52 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV52),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV52 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV52)
        ];

        this.PackMapEnvDataColoredLightRingsV23 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV52 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV52 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV52 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "clusterCount",
          "uint16",
          "clustering",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint16",
          "lifetime",
          ["[]", "float32", 2],
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          ["[]", "float32", 2],
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "seed",
          "uint32",
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV23 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV52 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV52 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV52 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV52,
          "night",
          this.PackMapEnvDataSkyCardAttributesV52,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV52 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV52)
        ];

        this.PackMapEnvDataWaterV52 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV52 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV52 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV52),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV23),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV52),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV23),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV52),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV52),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV52),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV23),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV52),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV52),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV52),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV52),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV52 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV52 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV52),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV23),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV52),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV23),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV52),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV52),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV52),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV23),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV52),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV52),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV52),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV52),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV52),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV52 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV52),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV52)
        ];
      },

      // => Version: 51
      51: function() {
        this.PackMapEnvDataLightV51 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV51 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV51)
        ];

        this.PackMapEnvDataLightingCharV22 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV22 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV22)
        ];

        this.PackMapEnvDataLayerAttributesV51 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV51 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV51),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV51 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV51)
        ];

        this.PackMapEnvDataColoredLightRingsV22 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV51 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV51 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV51 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "lifetime",
          "float32",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "period",
          "float32",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV22 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV51 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV51 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV51 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV51,
          "night",
          this.PackMapEnvDataSkyCardAttributesV51,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV51 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV51)
        ];

        this.PackMapEnvDataWaterV51 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV51 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV51 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV51),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV22),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV51),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV22),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV51),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV51),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV51),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV22),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV51),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV51),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV51),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV51),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV51 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV51 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV51),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV22),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV51),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV22),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV51),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV51),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV51),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV22),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV51),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV51),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV51),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV51),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV51),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV51 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV51),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV51)
        ];
      },

      // => Version: 50, ReferencedFunction: 0xEB8580
      50: function() {
        this.PackMapEnvDataLightV50 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV50 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV50)
        ];

        this.PackMapEnvDataLightingCharV21 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV21 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV21)
        ];

        this.PackMapEnvDataLayerAttributesV50 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV50 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV50),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV50 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV50)
        ];

        this.PackMapEnvDataColoredLightRingsV21 = [
          "range",
          ["[]", "float32", 2],
          "distances",
          ["[]", "float32", 6],
          "lightColors",
          ["[]", ["[]", "uint8", 4], 6],
          "shadowColors",
          ["[]", ["[]", "uint8", 4], 6]
        ];

        this.PackMapEnvDataEffectV50 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV50 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV50 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV21 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV50 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV50 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV50 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV50,
          "night",
          this.PackMapEnvDataSkyCardAttributesV50,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV50 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV50)
        ];

        this.PackMapEnvDataWaterV50 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV50 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV50 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV50),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV21),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV50),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV21),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV50),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV50),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV50),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV21),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV50),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV50),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV50),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV50),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV50 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV50 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV50),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV21),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV50),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV21),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV50),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV50),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV50),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV21),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV50),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV50),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV50),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV50),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV50),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV50 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV50),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV50)
        ];
      },

      // => Version: 49, ReferencedFunction: 0xEB8430
      49: function() {
        this.PackMapEnvDataLightV49 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV49 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV49)
        ];

        this.PackMapEnvDataLightingCharV20 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLightingCharGroupV20 = [
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV20)
        ];

        this.PackMapEnvDataLayerAttributesV49 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV49 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV49),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV49 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV49)
        ];

        this.PackMapEnvDataColoredLightRingsV20 = [
          "range",
          ["[]", "float32", 2],
          "colors",
          ["[]", ["[]", "uint8", 4], 6],
          "distances",
          ["[]", "float32", 6]
        ];

        this.PackMapEnvDataEffectV49 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV49 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV49 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV20 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV49 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV49 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV49 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV49,
          "night",
          this.PackMapEnvDataSkyCardAttributesV49,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV49 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV49)
        ];

        this.PackMapEnvDataWaterV49 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV49 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV49 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV49),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV20),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV49),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV20),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV49),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV49),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV49),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV20),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV49),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV49),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV49),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV49),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV49 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV49 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV49),
          "lightingCharGroups",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharGroupV20),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV49),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV20),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV49),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV49),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV49),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV20),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV49),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV49),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV49),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV49),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV49),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV49 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV49),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV49)
        ];
      },

      // => Version: 48
      48: function() {
        this.PackMapEnvDataLightV48 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV48 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV48)
        ];

        this.PackMapEnvDataLightingCharV19 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV48 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV48 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV48),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV48 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV48)
        ];

        this.PackMapEnvDataColoredLightRingsV19 = [
          "range",
          ["[]", "float32", 2],
          "colors",
          ["[]", ["[]", "uint8", 4], 6],
          "distances",
          ["[]", "float32", 6]
        ];

        this.PackMapEnvDataEffectV48 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV48 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV48 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV19 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV48 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV48 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV48 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV48,
          "night",
          this.PackMapEnvDataSkyCardAttributesV48,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV48 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV48)
        ];

        this.PackMapEnvDataWaterV48 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV48 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV48 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV48),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV19),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV48),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV19),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV48),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV48),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV48),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV19),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV48),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV48),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV48),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV48),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV48 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV48 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV48),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV19),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV48),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV19),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV48),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV48),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV48),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV19),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV48),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV48),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV48),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV48),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "bindTarget",
          Utils.getQWordReader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV48),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV48 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV48),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV48)
        ];
      },

      // => Version: 47
      47: function() {
        this.PackMapEnvDataLightV47 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV47 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV47)
        ];

        this.PackMapEnvDataLightingCharV18 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV47 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV47 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV47),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV47 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV47)
        ];

        this.PackMapEnvDataColoredLightRingsV18 = [
          "range",
          ["[]", "float32", 2],
          "colors",
          ["[]", ["[]", "uint8", 4], 6],
          "distances",
          ["[]", "float32", 6]
        ];

        this.PackMapEnvDataEffectV47 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV47 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV47 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV18 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV47 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV47 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV47 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV47,
          "night",
          this.PackMapEnvDataSkyCardAttributesV47,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV47 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV47)
        ];

        this.PackMapEnvDataWaterV47 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV47 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV47 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV47),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV18),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV47),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV18),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV47),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV47),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV47),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV18),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV47),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV47),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV47),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV47),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV47 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV47 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV47),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV18),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV47),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV18),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV47),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV47),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV47),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV18),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV47),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV47),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV47),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV47),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV47),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV47 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV47),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV47)
        ];
      },

      // => Version: 46
      46: function() {
        this.PackMapEnvDataLightV46 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV46 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV46)
        ];

        this.PackMapEnvDataLightingCharV17 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV46 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV46 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV46),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV46 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV46)
        ];

        this.PackMapEnvDataColoredLightRingsV17 = [
          "range",
          ["[]", "float32", 2],
          "colors",
          ["[]", ["[]", "uint8", 4], 6],
          "distances",
          ["[]", "float32", 6]
        ];

        this.PackMapEnvDataEffectV46 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV46 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV46 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV17 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV46 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV46 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV46 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV46,
          "night",
          this.PackMapEnvDataSkyCardAttributesV46,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV46 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV46)
        ];

        this.PackMapEnvDataWaterV46 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV46 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV46 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV46),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV17),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV46),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV17),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV46),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV46),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV46),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV17),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV46),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV46),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV46),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV46),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV46 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV46 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV46),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV17),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV46),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV17),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV46),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV46),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV46),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV17),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV46),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV46),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV46),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV46),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV46),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV46 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV46),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV46)
        ];
      },

      // => Version: 45
      45: function() {
        this.PackMapEnvDataLightV45 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV45 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV45)
        ];

        this.PackMapEnvDataLightingCharV16 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV45 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV45 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV45),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV45 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV45)
        ];

        this.PackMapEnvDataColoredLightRingsV16 = [
          "range",
          ["[]", "float32", 2],
          "colors",
          ["[]", ["[]", "uint8", 4], 6],
          "distances",
          ["[]", "float32", 6]
        ];

        this.PackMapEnvDataEffectV45 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV45 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV45 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV16 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV45 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV45 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV45 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV45,
          "night",
          this.PackMapEnvDataSkyCardAttributesV45,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV45 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV45)
        ];

        this.PackMapEnvDataWaterV45 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV45 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV45 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV45),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV16),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV45),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV16),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV45),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV45),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV45),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV16),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV45),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV45),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV45),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV45),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV45 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV45 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV45),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV16),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV45),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV16),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV45),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV45),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV45),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV16),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV45),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV45),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV45),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV45),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV45),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV45 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV45),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV45)
        ];
      },

      // => Version: 44, ReferencedFunction: 0xEB8320
      44: function() {
        this.PackMapEnvDataLightV44 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV44 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV44)
        ];

        this.PackMapEnvDataLightingCharV15 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV44 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV44 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV44),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV44 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV44)
        ];

        this.PackMapEnvDataColoredLightRingsV15 = [
          "range",
          ["[]", "float32", 2],
          "colors",
          ["[]", ["[]", "uint8", 4], 6],
          "distances",
          ["[]", "float32", 6]
        ];

        this.PackMapEnvDataEffectV44 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV44 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV44 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV15 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV44 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV44 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV44 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV44,
          "night",
          this.PackMapEnvDataSkyCardAttributesV44,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV44 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV44)
        ];

        this.PackMapEnvDataWaterV44 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV44 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV44 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV44),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV15),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV44),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV15),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV44),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV44),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV44),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV15),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV44),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV44),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV44),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV44),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV44 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV44 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV44),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV15),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV44),
          "coloredLightRings",
          Utils.getRefArrayReader(this.PackMapEnvDataColoredLightRingsV15),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV44),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV44),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV44),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV15),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV44),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV44),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV44),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV44),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV44),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV44 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV44),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV44)
        ];
      },

      // => Version: 43, ReferencedFunction: 0xEB8270
      43: function() {
        this.PackMapEnvDataLightV43 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV43 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV43)
        ];

        this.PackMapEnvDataLightingCharV14 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV43 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2],
          "fadeWidth",
          "float32",
          "fadeEnd",
          "float32"
        ];

        this.PackMapEnvDataLayerV43 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV43),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV43 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV43)
        ];

        this.PackMapEnvDataEffectV43 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV43 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV43 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV14 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV43 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV43 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4],
          "brightness",
          "float32"
        ];

        this.PackMapEnvDataSkyCardV43 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV43,
          "night",
          this.PackMapEnvDataSkyCardAttributesV43,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV43 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV43)
        ];

        this.PackMapEnvDataWaterV43 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader()),
          "constantTokens",
          Utils.getArrayReader("uint32"),
          "constantValues",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.PackMapEnvDataWindV43 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV43 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV43),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV14),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV43),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV43),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV43),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV43),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV14),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV43),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV43),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV43),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV43),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV43 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV43 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV43),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV14),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV43),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV43),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV43),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV43),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV14),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV43),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV43),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV43),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV43),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV43),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV43 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV43),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV43)
        ];
      },

      // => Version: 42, ReferencedFunction: 0xEB81D0
      42: function() {
        this.PackMapEnvDataLightV42 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV42 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV42)
        ];

        this.PackMapEnvDataLightingCharV13 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV42 = [
          "brightness",
          "float32",
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV42 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV42),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV42 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV42)
        ];

        this.PackMapEnvDataEffectV42 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV42 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV42 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV13 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV42 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV42 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV42 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV42,
          "night",
          this.PackMapEnvDataSkyCardAttributesV42,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV42 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV42)
        ];

        this.PackMapEnvDataWaterV42 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader())
        ];

        this.PackMapEnvDataWindV42 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV42 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV42),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV13),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV42),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV42),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV42),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV42),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV13),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV42),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV42),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV42),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV42),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV42 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV42 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV42),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV13),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV42),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV42),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV42),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV42),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV13),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV42),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV42),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV42),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV42),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV42),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV42 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV42),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV42)
        ];
      },

      // => Version: 41, ReferencedFunction: 0xEB80B0
      41: function() {
        this.PackMapEnvDataLightV41 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV41 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV41)
        ];

        this.PackMapEnvDataLightingCharV12 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV41 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV41 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV41),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV41 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV41)
        ];

        this.PackMapEnvDataEffectV41 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV41 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV41 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV12 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV41 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV41 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV41 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV41,
          "night",
          this.PackMapEnvDataSkyCardAttributesV41,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV41 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV41)
        ];

        this.PackMapEnvDataWaterV41 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "depthAttenuation",
          "float32",
          "materialFilename",
          Utils.getFileNameReader(),
          "textureFilenames",
          Utils.getArrayReader(Utils.getFileNameReader())
        ];

        this.PackMapEnvDataWindV41 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV41 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV41),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV12),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV41),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV41),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV41),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV41),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV12),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV41),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV41),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV41),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV41),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV41 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV41 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV41),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV12),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV41),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV41),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV41),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV41),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV12),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV41),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV41),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV41),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV41),
          "name",
          Utils.getString16Reader(),
          "nightMods",
          Utils.getArrayReader("uint8"),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV41),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV41 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV41),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV41)
        ];
      },

      // => Version: 40, ReferencedFunction: 0xEB8070
      40: function() {
        this.PackMapEnvDataLightV40 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV40 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV40)
        ];

        this.PackMapEnvDataLightingCharV11 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV40 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV40 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV40),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV40 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV40)
        ];

        this.PackMapEnvDataEffectV40 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV40 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV40 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV11 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV40 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV40 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV40 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV40,
          "night",
          this.PackMapEnvDataSkyCardAttributesV40,
          "flags",
          "uint32",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV40 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV40)
        ];

        this.PackMapEnvDataWaterV40 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader(),
          "depthAttenuation",
          "float32"
        ];

        this.PackMapEnvDataWindV40 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV40 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV40),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV11),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV40),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV40),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV40),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV40),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV11),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV40),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV40),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV40),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV40),
          "name",
          Utils.getString16Reader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV40 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV40 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV40),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV11),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV40),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV40),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV40),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV40),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV11),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV40),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV40),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV40),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV40),
          "name",
          Utils.getString16Reader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV40),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV40 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV40),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV40)
        ];
      },

      // => Version: 39
      39: function() {
        this.PackMapEnvDataLightV39 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV39 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV39)
        ];

        this.PackMapEnvDataLightingCharV10 = [
          "sunScale",
          "float32",
          "saturation",
          "float32",
          "sunFill",
          "float32",
          "ambScale",
          "float32",
          "ambFill",
          "float32",
          "flags",
          "uint8"
        ];

        this.PackMapEnvDataLayerAttributesV39 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV39 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV39),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV39 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV39)
        ];

        this.PackMapEnvDataEffectV39 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV39 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV39 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV10 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV39 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV39 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV39 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV39,
          "night",
          this.PackMapEnvDataSkyCardAttributesV39,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV39 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV39)
        ];

        this.PackMapEnvDataWaterV39 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader(),
          "depthAttenuation",
          "float32"
        ];

        this.PackMapEnvDataWindV39 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV39 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV39),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV10),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV39),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV39),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV39),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV39),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV10),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV39),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV39),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV39),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV39),
          "name",
          Utils.getString16Reader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2]),
          "guid",
          Utils.getQWordReader()
        ];

        this.PackMapEnvDataSkyModeTexV39 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV39 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV39),
          "lightingChar",
          Utils.getArrayReader(this.PackMapEnvDataLightingCharV10),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV39),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV39),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV39),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV39),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV10),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV39),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV39),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV39),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV39),
          "name",
          Utils.getString16Reader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV39),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV39 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV39),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV39)
        ];
      },

      // => Version: 38, ReferencedFunction: 0xEB7FD0
      38: function() {
        this.PackMapEnvDataLightV38 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV38 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV38)
        ];

        this.PackMapEnvDataLayerAttributesV38 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV38 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV38),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV38 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV38)
        ];

        this.PackMapEnvDataEffectV38 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32",
          "focalDepth",
          "float32",
          "focalRange",
          "float32"
        ];

        this.PackMapEnvDataHazeV38 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV38 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV9 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV38 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV38 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV38 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV38,
          "night",
          this.PackMapEnvDataSkyCardAttributesV38,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV38 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV38)
        ];

        this.PackMapEnvDataWaterV38 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader(),
          "depthAttenuation",
          "float32"
        ];

        this.PackMapEnvDataWindV38 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV38 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV38),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV38),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV38),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV38),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV38),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV9),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV38),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV38),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV38),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV38),
          "name",
          Utils.getString16Reader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV38 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV38 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV38),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV38),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV38),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV38),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV38),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV9),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV38),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV38),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV38),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV38),
          "name",
          Utils.getString16Reader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV38),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV38 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV38),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV38)
        ];
      },

      // => Version: 37, ReferencedFunction: 0xEB7F50
      37: function() {
        this.PackMapEnvDataLightV37 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV37 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV37)
        ];

        this.PackMapEnvDataLayerAttributesV37 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV37 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "extent",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV37),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV37 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV37)
        ];

        this.PackMapEnvDataEffectV37 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32"
        ];

        this.PackMapEnvDataHazeV37 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV37 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV8 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV37 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV37 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV37 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV37,
          "night",
          this.PackMapEnvDataSkyCardAttributesV37,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV37 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV37)
        ];

        this.PackMapEnvDataWaterV37 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader(),
          "depthAttenuation",
          "float32"
        ];

        this.PackMapEnvDataWindV37 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV37 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV37),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV37),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV37),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV37),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV37),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV8),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV37),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV37),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV37),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV37),
          "name",
          Utils.getString16Reader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV37 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV37 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV37),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV37),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV37),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV37),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV37),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV8),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV37),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV37),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV37),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV37),
          "name",
          Utils.getString16Reader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV37),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV37 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV37),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV37)
        ];
      },

      // => Version: 36
      36: function() {
        this.PackMapEnvDataLightV36 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV36 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV36)
        ];

        this.PackMapEnvDataLayerAttributesV36 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV36 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV36),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV36 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV36)
        ];

        this.PackMapEnvDataEffectV36 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32"
        ];

        this.PackMapEnvDataHazeV36 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV36 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV7 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV36 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV36 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV36 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV36,
          "night",
          this.PackMapEnvDataSkyCardAttributesV36,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV36 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV36)
        ];

        this.PackMapEnvDataWaterV36 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader(),
          "depthAttenuation",
          "float32"
        ];

        this.PackMapEnvDataWindV36 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV36 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV36),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV36),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV36),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV36),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV36),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV7),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV36),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV36),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV36),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV36),
          "name",
          Utils.getString16Reader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV36 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV36 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV36),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV36),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV36),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV36),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV36),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV7),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV36),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV36),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV36),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV36),
          "name",
          Utils.getString16Reader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV36),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV36 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV36),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV36)
        ];
      },

      // => Version: 35, ReferencedFunction: 0xEB7EF0
      35: function() {
        this.PackMapEnvDataLightV35 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV35 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV35)
        ];

        this.PackMapEnvDataLayerAttributesV35 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV35 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV35),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV35 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV35)
        ];

        this.PackMapEnvDataEffectV35 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32"
        ];

        this.PackMapEnvDataHazeV35 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV35 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataPFieldCutoutV6 = [
          "name",
          Utils.getString16Reader(),
          "x",
          ["[]", "float32", 4],
          "y",
          ["[]", "float32", 4],
          "z",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyV35 = [
          "flags",
          "uint8",
          "dayBrightness",
          "float32",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightBrightness",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV35 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV35 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV35,
          "night",
          this.PackMapEnvDataSkyCardAttributesV35,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV35 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV35)
        ];

        this.PackMapEnvDataWaterV35 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataWindV35 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV35 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV35),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV35),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV35),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV35),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV35),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV6),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV35),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV35),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV35),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV35),
          "name",
          Utils.getString16Reader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV35 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV35 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV35),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV35),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV35),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV35),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV35),
          "particleFieldCutouts",
          Utils.getArrayReader(this.PackMapEnvDataPFieldCutoutV6),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV35),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV35),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV35),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV35),
          "name",
          Utils.getString16Reader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV35),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV35 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV35),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV35)
        ];
      },

      // => Version: 34
      34: function() {
        this.PackMapEnvDataLightV34 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV34 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV34)
        ];

        this.PackMapEnvDataLayerAttributesV34 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV34 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV34),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV34 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV34)
        ];

        this.PackMapEnvDataEffectV34 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "tintTargetColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "tintFocus",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32"
        ];

        this.PackMapEnvDataHazeV34 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV34 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyV34 = [
          "flags",
          "uint8",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV34 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV34 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV34,
          "night",
          this.PackMapEnvDataSkyCardAttributesV34,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV34 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV34)
        ];

        this.PackMapEnvDataWaterV34 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataWindV34 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV34 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV34),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV34),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV34),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV34),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV34),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV34),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV34),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV34),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV34),
          "name",
          Utils.getString16Reader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV34 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV34 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV34),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV34),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV34),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV34),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV34),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV34),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV34),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV34),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV34),
          "name",
          Utils.getString16Reader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV34),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV34 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV34),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV34)
        ];
      },

      // => Version: 33
      33: function() {
        this.PackMapEnvDataLightV33 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV33 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV33)
        ];

        this.PackMapEnvDataLayerAttributesV33 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV33 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV33),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV33 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV33)
        ];

        this.PackMapEnvDataEffectV33 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32"
        ];

        this.PackMapEnvDataHazeV33 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV33 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyV33 = [
          "flags",
          "uint8",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV33 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV33 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV33,
          "night",
          this.PackMapEnvDataSkyCardAttributesV33,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV33 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV33)
        ];

        this.PackMapEnvDataWaterV33 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataWindV33 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV33 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV33),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV33),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV33),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV33),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV33),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV33),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV33),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV33),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV33),
          "name",
          Utils.getString16Reader(),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV33 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV33 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV33),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV33),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV33),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV33),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV33),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV33),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV33),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV33),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV33),
          "name",
          Utils.getString16Reader(),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV33),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV33 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV33),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV33)
        ];
      },

      // => Version: 32, ReferencedFunction: 0xEB7D60
      32: function() {
        this.PackMapEnvDataLightV32 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV32 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV32)
        ];

        this.PackMapEnvDataLayerAttributesV32 = [
          "density",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV32 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "depth",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "attributes",
          Utils.getArrayReader(this.PackMapEnvDataLayerAttributesV32),
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV32 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV32)
        ];

        this.PackMapEnvDataEffectV32 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32"
        ];

        this.PackMapEnvDataHazeV32 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV32 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyV32 = [
          "flags",
          "uint8",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV32 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV32 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV32,
          "night",
          this.PackMapEnvDataSkyCardAttributesV32,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV32 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV32)
        ];

        this.PackMapEnvDataWaterV32 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataWindV32 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV32 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV32),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV32),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV32),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV32),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV32),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV32),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV32),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV32),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV32),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV32 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV32 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV32),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV32),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV32),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV32),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV32),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV32),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV32),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV32),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV32),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV32),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV32 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV32),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV32)
        ];
      },

      // => Version: 31, ReferencedFunction: 0xEB7CF0
      31: function() {
        this.PackMapEnvDataLightV31 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV31 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV31)
        ];

        this.PackMapEnvDataLayerAttributesV31 = [
          "density",
          "float32",
          "depth",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV31 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "day",
          this.PackMapEnvDataLayerAttributesV31,
          "night",
          this.PackMapEnvDataLayerAttributesV31,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV31 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV31)
        ];

        this.PackMapEnvDataEffectV31 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32"
        ];

        this.PackMapEnvDataHazeV31 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV31 = [
          "altitude",
          "float32",
          "angle",
          ["[]", "float32", 2],
          "depth",
          "float32",
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fade",
          "float32",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyV31 = [
          "flags",
          "uint8",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV31 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV31 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV31,
          "night",
          this.PackMapEnvDataSkyCardAttributesV31,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV31 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV31)
        ];

        this.PackMapEnvDataWaterV31 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "patternEdge",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataWindV31 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV31 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV31),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV31),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV31),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV31),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV31),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV31),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV31),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV31),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV31),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV31 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV31 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV31),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV31),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV31),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV31),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV31),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV31),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV31),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV31),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV31),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV31),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV31 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV31),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV31)
        ];
      },

      // => Version: 30, ReferencedFunction: 0xEB7C70
      30: function() {
        this.PackMapEnvDataLightV30 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV30 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV30)
        ];

        this.PackMapEnvDataLayerAttributesV30 = [
          "density",
          "float32",
          "depth",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV30 = [
          "altitude",
          "float32",
          "cutOut",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "day",
          this.PackMapEnvDataLayerAttributesV30,
          "night",
          this.PackMapEnvDataLayerAttributesV30,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV30 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV30)
        ];

        this.PackMapEnvDataEffectV30 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32"
        ];

        this.PackMapEnvDataHazeV30 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV30 = [
          "angle",
          ["[]", "float32", 2],
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyV30 = [
          "flags",
          "uint8",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV30 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV30 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV30,
          "night",
          this.PackMapEnvDataSkyCardAttributesV30,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV30 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV30)
        ];

        this.PackMapEnvDataWaterV30 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataWindV30 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV30 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV30),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV30),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV30),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV30),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV30),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV30),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV30),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV30),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV30),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV30 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV30 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV30),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV30),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV30),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV30),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV30),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV30),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV30),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV30),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV30),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV30),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV30 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV30),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV30)
        ];
      },

      // => Version: 29
      29: function() {
        this.PackMapEnvDataLightV29 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "direction",
          ["[]", "float32", 3]
        ];

        this.PackMapEnvDataLightingV29 = [
          "lights",
          Utils.getRefArrayReader(this.PackMapEnvDataLightV29)
        ];

        this.PackMapEnvDataLayerAttributesV29 = [
          "density",
          "float32",
          "depth",
          "float32",
          "haze",
          "float32",
          "lightIntensity",
          "float32",
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackMapEnvDataLayerV29 = [
          "altitude",
          "float32",
          "scale",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "day",
          this.PackMapEnvDataLayerAttributesV29,
          "night",
          this.PackMapEnvDataLayerAttributesV29,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataCloudsV29 = [
          "layers",
          Utils.getArrayReader(this.PackMapEnvDataLayerV29)
        ];

        this.PackMapEnvDataEffectV29 = [
          "glow",
          ["[]", "uint8", 4],
          "tintColor",
          ["[]", "uint8", 4],
          "saturation",
          "float32",
          "tintAmount",
          "float32",
          "glowLevel",
          ["[]", "uint8", 4],
          "glowAmplify",
          "float32"
        ];

        this.PackMapEnvDataHazeV29 = [
          "distColor",
          ["[]", "uint8", 4],
          "distRange",
          ["[]", "float32", 2],
          "heightColor",
          ["[]", "uint8", 4],
          "heightRange",
          ["[]", "float32", 2],
          "depthCue",
          "float32"
        ];

        this.PackMapEnvDataPFieldV29 = [
          "angle",
          ["[]", "float32", 2],
          "deviation",
          "float32",
          "extent",
          "uint16",
          "fieldDirection",
          ["[]", "float32", 3],
          "flags",
          "uint8",
          "opacity",
          ["[]", "float32", 2],
          "particleCount",
          "uint16",
          "rotation",
          ["[]", "float32", 2],
          "scaleX",
          ["[]", "float32", 2],
          "scaleY",
          ["[]", "float32", 2],
          "speed",
          ["[]", "float32", 2],
          "texColRow",
          ["[]", "uint32", 2],
          "texFPS",
          "uint16",
          "texPath",
          Utils.getFileNameReader(),
          "type",
          "uint8",
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyV29 = [
          "flags",
          "uint8",
          "dayHazeBottom",
          "float32",
          "dayHazeDensity",
          "float32",
          "dayHazeFalloff",
          "float32",
          "dayLightIntensity",
          "float32",
          "dayStarDensity",
          "float32",
          "nightHazeBottom",
          "float32",
          "nightHazeDensity",
          "float32",
          "nightHazeFalloff",
          "float32",
          "nightLightIntensity",
          "float32",
          "nightStarDensity",
          "float32"
        ];

        this.PackMapEnvDataSkyCardAttributesV29 = [
          "azimuth",
          "float32",
          "density",
          "float32",
          "hazeDensity",
          "float32",
          "latitude",
          "float32",
          "lightIntensity",
          "float32",
          "minHaze",
          "float32",
          "scale",
          ["[]", "float32", 2],
          "speed",
          "float32",
          "texture",
          Utils.getFileNameReader(),
          "textureUV",
          ["[]", "float32", 4]
        ];

        this.PackMapEnvDataSkyCardV29 = [
          "day",
          this.PackMapEnvDataSkyCardAttributesV29,
          "night",
          this.PackMapEnvDataSkyCardAttributesV29,
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEnvDataSkyCardsV29 = [
          "cards",
          Utils.getArrayReader(this.PackMapEnvDataSkyCardV29)
        ];

        this.PackMapEnvDataWaterV29 = [
          "waterFlags",
          "uint32",
          "animAmplitude",
          "float32",
          "animChoppiness",
          "float32",
          "animWind",
          ["[]", "float32", 2],
          "bumpAmount",
          "float32",
          "bumpAngle0",
          "float32",
          "bumpAngle1",
          "float32",
          "bumpScale0",
          "float32",
          "bumpScale1",
          "float32",
          "bumpSpeed0",
          "float32",
          "bumpSpeed1",
          "float32",
          "bumpTile0",
          "float32",
          "bumpTile1",
          "float32",
          "patternAngle",
          "float32",
          "patternTile",
          "float32",
          "patternSpeed",
          "float32",
          "surfaceShallowColor",
          ["[]", "uint8", 4],
          "surfaceDeepColor",
          ["[]", "uint8", 4],
          "patternColor",
          ["[]", "uint8", 4],
          "surfaceFresnel",
          "float32",
          "distortAmount",
          "float32",
          "bumpTexture",
          Utils.getFileNameReader(),
          "patternTexture",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataWindV29 = [
          "azimuth",
          "uint8",
          "elevation",
          "uint8",
          "noise",
          "uint8",
          "speed",
          "uint8",
          "gust",
          "uint8",
          "gustFreq",
          "uint8"
        ];

        this.PackMapEnvDataLocalV29 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV29),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV29),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV29),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV29),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV29),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV29),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV29),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV29),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV29),
          "center",
          ["[]", "float32", 3],
          "zRange",
          ["[]", "float32", 2],
          "fadeHorizInner",
          "float32",
          "fadeHorizOuter",
          "float32",
          "fadeVertical",
          "float32",
          "type",
          "uint8",
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEnvDataSkyModeTexV29 = [
          "texPathNE",
          Utils.getFileNameReader(),
          "texPathSW",
          Utils.getFileNameReader(),
          "texPathT",
          Utils.getFileNameReader()
        ];

        this.PackMapEnvDataGlobalV29 = [
          "lighting",
          Utils.getArrayReader(this.PackMapEnvDataLightingV29),
          "clouds",
          Utils.getPointerReader(this.PackMapEnvDataCloudsV29),
          "effect",
          Utils.getRefArrayReader(this.PackMapEnvDataEffectV29),
          "haze",
          Utils.getRefArrayReader(this.PackMapEnvDataHazeV29),
          "particleFields",
          Utils.getRefArrayReader(this.PackMapEnvDataPFieldV29),
          "sky",
          Utils.getPointerReader(this.PackMapEnvDataSkyV29),
          "skyCards",
          Utils.getPointerReader(this.PackMapEnvDataSkyCardsV29),
          "water",
          Utils.getRefArrayReader(this.PackMapEnvDataWaterV29),
          "wind",
          Utils.getRefArrayReader(this.PackMapEnvDataWindV29),
          "skyModeTex",
          Utils.getArrayReader(this.PackMapEnvDataSkyModeTexV29),
          "starFile",
          Utils.getFileNameReader()
        ];

        this.__root = this.PackMapEnvironmentV29 = [
          "dataLocalArray",
          Utils.getArrayReader(this.PackMapEnvDataLocalV29),
          "dataGlobal",
          Utils.getPointerReader(this.PackMapEnvDataGlobalV29)
        ];
      }
    }
  }
];
