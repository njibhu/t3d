const Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: lght, versions: 18, strucTab: 0x1720FD0
  /// ==================================================

  {
    name: "lght",
    versions: {
      // => Version: 17
      17: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapPortalData = [
          "fadeCamera",
          "float32",
          "fadeLight",
          "float32",
          "lighten",
          "float32",
          "darken",
          "float32",
        ];

        this.PackMapPortalLight = [
          "guid",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "portalData",
          Utils.getArrayReader(this.PackMapPortalData),
          "broadId",
          "uint16",
        ];

        this.PackMapSpotShadow = ["shadowFilename", Utils.getFileNameReader()];

        this.PackMapSpotLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "upDirection",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
          "shadowData",
          Utils.getPointerReader(this.PackMapSpotShadow),
        ];

        this.PackMapSpotLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapSpotLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          ["[]", "uint32", 2],
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoints",
          Utils.getArrayReader(["[]", "float32", 3]),
          "flags",
          "uint32",
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "portalLights",
          Utils.getArrayReader(this.PackMapPortalLight),
          "spotLights",
          Utils.getArrayReader(this.PackMapSpotLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 16
      16: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapPortalData = [
          "fadeCamera",
          "float32",
          "fadeLight",
          "float32",
          "lighten",
          "float32",
          "darken",
          "float32",
        ];

        this.PackMapPortalLight = [
          "guid",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "portalData",
          Utils.getArrayReader(this.PackMapPortalData),
          "broadId",
          "uint16",
        ];

        this.PackMapSpotShadow = ["shadowFilename", Utils.getFileNameReader()];

        this.PackMapSpotLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
          "shadowData",
          Utils.getPointerReader(this.PackMapSpotShadow),
        ];

        this.PackMapSpotLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapSpotLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          ["[]", "uint32", 2],
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoints",
          Utils.getArrayReader(["[]", "float32", 3]),
          "flags",
          "uint32",
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "portalLights",
          Utils.getArrayReader(this.PackMapPortalLight),
          "spotLights",
          Utils.getArrayReader(this.PackMapSpotLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 15, ReferencedFunction: 0xEB9730
      15: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapPortalData = [
          "fadeCamera",
          "float32",
          "fadeLight",
          "float32",
          "lighten",
          "float32",
          "darken",
          "float32",
        ];

        this.PackMapPortalLight = [
          "guid",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "portalData",
          Utils.getArrayReader(this.PackMapPortalData),
          "broadId",
          "uint16",
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapSpotLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          ["[]", "uint32", 2],
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoints",
          Utils.getArrayReader(["[]", "float32", 3]),
          "flags",
          "uint32",
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapLightsV15 = [
          "pointLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "portalLights",
          Utils.getArrayReader(this.PackMapPortalLight),
          "spotLights",
          Utils.getArrayReader(this.PackMapSpotLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 14
      14: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapProtalLight = [
          "guid",
          Utils.getQWordReader(),
          "fadeCamera",
          "float32",
          "fadeLight",
          "float32",
          "lighten",
          "float32",
          "darken",
          "float32",
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "broadId",
          "uint16",
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapSpotLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          ["[]", "uint32", 2],
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoints",
          Utils.getArrayReader(["[]", "float32", 3]),
          "flags",
          "uint32",
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapLightsV14 = [
          "pointLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "portalLights",
          Utils.getArrayReader(this.PackMapProtalLight),
          "spotLights",
          Utils.getArrayReader(this.PackMapSpotLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 13, ReferencedFunction: 0xEB95D0
      13: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          ["[]", "uint32", 2],
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoints",
          Utils.getArrayReader(["[]", "float32", 3]),
          "flags",
          "uint32",
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapLightgroups),
          "spotLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 12, ReferencedFunction: 0xEB9310
      12: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          ["[]", "uint32", 2],
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoint",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapLightgroups),
          "spotLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 11, ReferencedFunction: 0xEB9310
      11: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
          "broadId",
          "uint16",
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          ["[]", "uint32", 2],
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoint",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapLightgroups),
          "spotLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 10, ReferencedFunction: 0xEB9F20
      10: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          ["[]", "uint32", 2],
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoint",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
        ];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapLightgroups),
          "spotLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
        ];
      },

      // => Version: 9, ReferencedFunction: 0xEB9E60
      9: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          "uint32",
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "position",
          ["[]", "float32", 3],
          "extents",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoint",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
        ];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapLightgroups),
          "spotLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
        ];
      },

      // => Version: 8, ReferencedFunction: 0xEB9DE0
      8: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          "uint32",
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "minExt",
          ["[]", "float32", 3],
          "maxExt",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "floodPoint",
          ["[]", "float32", 3],
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
        ];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapLightgroups),
          "spotLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
        ];
      },

      // => Version: 7
      7: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          "uint32",
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "minExt",
          ["[]", "float32", 3],
          "maxExt",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "name",
          Utils.getString16Reader(),
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
        ];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapLightgroups),
          "spotLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
        ];
      },

      // => Version: 6
      6: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapVolumeImage = [
          "filename",
          Utils.getFileNameReader(),
          "dims",
          "uint32",
          "format",
          "uint32",
          "image",
          Utils.getArrayReader("uint8"),
        ];

        this.PackMapVolumeLight = [
          "guid",
          Utils.getQWordReader(),
          "minExt",
          ["[]", "float32", 3],
          "maxExt",
          ["[]", "float32", 3],
          "intensities",
          ["[]", "float32", 2],
          "pack",
          ["[]", "float32", 4],
          "images",
          Utils.getArrayReader(this.PackMapVolumeImage),
        ];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapLightgroups),
          "spotLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
          "volumeLights",
          Utils.getArrayReader(this.PackMapVolumeLight),
        ];
      },

      // => Version: 5, ReferencedFunction: 0xEB9C50
      5: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.PackMapPointLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
          "direction",
          ["[]", "float32", 3],
          "innerAngle",
          "float32",
          "outerAngle",
          "float32",
          "textureName",
          Utils.getFileNameReader(),
        ];

        this.PackMapPointLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapPointLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.__root = this.PackMapLights = [
          "pointLights",
          Utils.getArrayReader(this.PackMapLightgroups),
          "spotLights",
          Utils.getArrayReader(this.PackMapPointLightgroups),
        ];
      },

      // => Version: 4, ReferencedFunction: 0xEB9A50
      4: function () {
        this.PackMapLight = [
          "position",
          ["[]", "float32", 3],
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "offset",
          "float32",
          "amplitude",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "guid",
          Utils.getQWordReader(),
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.__root = this.PackMapLights = ["lights", Utils.getArrayReader(this.PackMapLightgroups)];
      },

      // => Version: 3, ReferencedFunction: 0xEB9910
      3: function () {
        this.PackMapLight = [
          "type",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "elevation",
          "float32",
          "azimuth",
          "float32",
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapCurve = [
          "gust",
          "float32",
          "gustFreq",
          "float32",
          "noise",
          "float32",
          "phase",
          "float32",
          "curveType",
          "uint32",
        ];

        this.PackMapLightgroups = [
          "lights",
          Utils.getArrayReader(this.PackMapLight),
          "curves",
          Utils.getArrayReader(this.PackMapCurve),
        ];

        this.__root = this.PackMapLights = ["lights", Utils.getArrayReader(this.PackMapLightgroups)];
      },

      // => Version: 2, ReferencedFunction: 0xEB97F0
      2: function () {
        this.PackMapLight = [
          "type",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "elevation",
          "float32",
          "azimuth",
          "float32",
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
          "flags",
          "uint32",
        ];

        this.PackMapLightgroups = ["lights", Utils.getArrayReader(this.PackMapLight)];

        this.__root = this.PackMapLights = ["groups", Utils.getArrayReader(this.PackMapLightgroups)];
      },

      // => Version: 1
      1: function () {
        this.PackMapLight = [
          "type",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "elevation",
          "float32",
          "azimuth",
          "float32",
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32",
          "nearDistance",
          "float32",
          "farDistance",
          "float32",
        ];

        this.__root = this.PackMapLights = ["lights", Utils.getArrayReader(this.PackMapLight)];
      },
    },
  },
];
