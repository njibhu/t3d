let Utils = T3D.ParserUtils;

module.exports = [
  /// ==================================================
  /// Chunk: edit, versions: 17, strucTab: 0x1724B58
  /// ==================================================

  {
    name: "edit",
    versions: {
      // => Version: 16, ReferencedFunction: 0x452AB0
      16: function() {
        this.MapEditLayerItem = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "layerFlags",
          Utils.getArrayReader("uint32")
        ];

        this.MapEditLayers = [
          "layerStates",
          Utils.getArrayReader("uint8"),
          "layerNames",
          Utils.getArrayReader(Utils.getString16Reader()),
          "layerIds",
          Utils.getArrayReader("uint32"),
          "items",
          Utils.getArrayReader(this.MapEditLayerItem)
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.PackMapEditSurfacePoly = [
          "name",
          Utils.getString16Reader(),
          "surfaceType",
          "uint32",
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "range",
          ["[]", "float32", 2]
        ];

        this.PackMapEditSurfaceRoadNode = [
          "position",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.PackMapEditSurfaceRoad = [
          "name",
          Utils.getString16Reader(),
          "surfaceType",
          "uint32",
          "nodes",
          Utils.getArrayReader(this.PackMapEditSurfaceRoadNode)
        ];

        this.PackMapEditNavmeshGenPropMode = [
          "propId",
          Utils.getQWordReader(),
          "mode",
          "uint8",
          "animSequence",
          Utils.getQWordReader()
        ];

        this.PackMapEditNavMeshData = [
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "surfacePolys",
          Utils.getArrayReader(this.PackMapEditSurfacePoly),
          "surfaceRoads",
          Utils.getArrayReader(this.PackMapEditSurfaceRoad),
          "propModesForGeneration",
          Utils.getArrayReader(this.PackMapEditNavmeshGenPropMode)
        ];

        this.MapEditSnapPoint = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.MapEditMeasureSpan = [
          "name",
          Utils.getString16Reader(),
          "substrateId0",
          Utils.getQWordReader(),
          "substrateId1",
          Utils.getQWordReader(),
          "substrateModuleId0",
          "uint32",
          "substrateModuleId1",
          "uint32",
          "position0",
          ["[]", "float32", 3],
          "position1",
          ["[]", "float32", 3],
          "limits",
          ["[]", "float32", 3]
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "navMeshData",
          this.PackMapEditNavMeshData,
          "snapPoints",
          Utils.getArrayReader(this.MapEditSnapPoint),
          "measureSpans",
          Utils.getArrayReader(this.MapEditMeasureSpan),
          "mapHome",
          Utils.getString16Reader(),
          "homeSave",
          "uint8",
          "reserved",
          Utils.getString16Reader()
        ];
      },

      // => Version: 15, ReferencedFunction: 0x452AB0
      15: function() {
        this.MapEditLayerItem = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "layerFlags",
          Utils.getArrayReader("uint32")
        ];

        this.MapEditLayers = [
          "layerStates",
          Utils.getArrayReader("uint8"),
          "layerNames",
          Utils.getArrayReader(Utils.getString16Reader()),
          "layerIds",
          Utils.getArrayReader("uint32"),
          "items",
          Utils.getArrayReader(this.MapEditLayerItem)
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.PackMapEditSurfacePoly = [
          "name",
          Utils.getString16Reader(),
          "surfaceType",
          "uint32",
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "range",
          ["[]", "float32", 2]
        ];

        this.PackMapEditSurfaceRoadNode = [
          "position",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.PackMapEditSurfaceRoad = [
          "name",
          Utils.getString16Reader(),
          "surfaceType",
          "uint32",
          "nodes",
          Utils.getArrayReader(this.PackMapEditSurfaceRoadNode)
        ];

        this.PackMapEditNavMeshData = [
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "surfacePolys",
          Utils.getArrayReader(this.PackMapEditSurfacePoly),
          "surfaceRoads",
          Utils.getArrayReader(this.PackMapEditSurfaceRoad)
        ];

        this.MapEditSnapPoint = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.MapEditMeasureSpan = [
          "name",
          Utils.getString16Reader(),
          "substrateId0",
          Utils.getQWordReader(),
          "substrateId1",
          Utils.getQWordReader(),
          "substrateModuleId0",
          "uint32",
          "substrateModuleId1",
          "uint32",
          "position0",
          ["[]", "float32", 3],
          "position1",
          ["[]", "float32", 3],
          "limits",
          ["[]", "float32", 3]
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "navMeshData",
          this.PackMapEditNavMeshData,
          "snapPoints",
          Utils.getArrayReader(this.MapEditSnapPoint),
          "measureSpans",
          Utils.getArrayReader(this.MapEditMeasureSpan),
          "mapHome",
          Utils.getString16Reader(),
          "homeSave",
          "uint8",
          "reserved",
          Utils.getString16Reader()
        ];
      },

      // => Version: 14, ReferencedFunction: 0x452AB0
      14: function() {
        this.MapEditLayerItem = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "layerFlags",
          Utils.getArrayReader("uint32")
        ];

        this.MapEditLayers = [
          "layerStates",
          Utils.getArrayReader("uint8"),
          "layerNames",
          Utils.getArrayReader(Utils.getString16Reader()),
          "layerIds",
          Utils.getArrayReader("uint32"),
          "items",
          Utils.getArrayReader(this.MapEditLayerItem)
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.PackMapEditSurfacePoly = [
          "name",
          Utils.getString16Reader(),
          "surfaceType",
          "uint32",
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "range",
          ["[]", "float32", 2]
        ];

        this.PackMapEditSurfaceRoadNode = [
          "position",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.PackMapEditSurfaceRoad = [
          "name",
          Utils.getString16Reader(),
          "surfaceType",
          "uint32",
          "nodes",
          Utils.getArrayReader(this.PackMapEditSurfaceRoadNode)
        ];

        this.PackMapEditNavMeshData = [
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "surfacePolys",
          Utils.getArrayReader(this.PackMapEditSurfacePoly),
          "surfaceRoads",
          Utils.getArrayReader(this.PackMapEditSurfaceRoad)
        ];

        this.MapEditSnapPoint = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "navMeshData",
          this.PackMapEditNavMeshData,
          "snapPoints",
          Utils.getArrayReader(this.MapEditSnapPoint),
          "mapHome",
          Utils.getString16Reader(),
          "homeSave",
          "uint8",
          "reserved",
          Utils.getString16Reader()
        ];
      },

      // => Version: 13, ReferencedFunction: 0x452AB0
      13: function() {
        this.MapEditLayerItem = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "layerFlags",
          Utils.getArrayReader("uint32")
        ];

        this.MapEditLayers = [
          "layerStates",
          Utils.getArrayReader("uint8"),
          "layerNames",
          Utils.getArrayReader(Utils.getString16Reader()),
          "layerIds",
          Utils.getArrayReader("uint32"),
          "items",
          Utils.getArrayReader(this.MapEditLayerItem)
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.MapEditSnapPoint = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "snapPoints",
          Utils.getArrayReader(this.MapEditSnapPoint),
          "mapHome",
          Utils.getString16Reader(),
          "homeSave",
          "uint8",
          "reserved",
          Utils.getString16Reader()
        ];
      },

      // => Version: 12, ReferencedFunction: 0x452AB0
      12: function() {
        this.MapEditLayerItem = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "layerFlags",
          "uint32"
        ];

        this.MapEditLayers = [
          "layerStates",
          ["[]", "uint8", 31],
          "layerNames",
          ["[]", Utils.getString16Reader(), 31],
          "items",
          Utils.getArrayReader(this.MapEditLayerItem)
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.MapEditSnapPoint = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "snapPoints",
          Utils.getArrayReader(this.MapEditSnapPoint),
          "mapHome",
          Utils.getString16Reader(),
          "homeSave",
          "uint8",
          "reserved",
          Utils.getString16Reader()
        ];
      },

      // => Version: 11
      11: function() {
        this.MapEditLayerItem = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "layerFlags",
          "uint32"
        ];

        this.MapEditLayers = [
          "layerStates",
          ["[]", "uint8", 31],
          "layerNames",
          ["[]", Utils.getString16Reader(), 31],
          "items",
          Utils.getArrayReader(this.MapEditLayerItem)
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.MapEditSnapPoint = [
          "guid",
          Utils.getQWordReader(),
          "moduleId",
          "uint32",
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 3],
          "scale",
          "float32"
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "snapPoints",
          Utils.getArrayReader(this.MapEditSnapPoint),
          "mapHome",
          Utils.getString16Reader(),
          "homeSave",
          "uint8",
          "reserved",
          Utils.getString16Reader()
        ];
      },

      // => Version: 10
      10: function() {
        this.MapEditLayers = [
          "layerPropCount",
          ["[]", "uint32", 31],
          "layerStates",
          ["[]", "uint8", 31],
          "layerNames",
          ["[]", Utils.getString16Reader(), 31]
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "mapHome",
          Utils.getString16Reader(),
          "homeSave",
          "uint8",
          "reserved",
          Utils.getString16Reader()
        ];
      },

      // => Version: 9
      9: function() {
        this.MapEditLayers = [
          "layerPropCount",
          ["[]", "uint32", 31],
          "layerStates",
          ["[]", "uint8", 31],
          "layerNames",
          ["[]", Utils.getString16Reader(), 31]
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "mapHome",
          Utils.getString16Reader(),
          "homeSave",
          "uint8"
        ];
      },

      // => Version: 8
      8: function() {
        this.MapEditLayers = [
          "layerPropCount",
          ["[]", "uint32", 31],
          "layerStates",
          ["[]", "uint8", 31],
          "layerNames",
          ["[]", Utils.getString16Reader(), 31]
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks)
        ];
      },

      // => Version: 7
      7: function() {
        this.MapEditLayers = [
          "layerPropCount",
          ["[]", "uint32", 31],
          "layerStates",
          ["[]", "uint8", 31]
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2]),
          "zRange",
          ["[]", "float32", 2]
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.__root = this.MapEditData = [
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks)
        ];
      },

      // => Version: 6
      6: function() {
        this.MapEditRegion = [
          "regions",
          Utils.getArrayReader(Utils.getString16Reader())
        ];

        this.MapEditRegion = [
          "ambientColor",
          ["[]", "uint8", 3],
          "directionalColor",
          ["[]", "uint8", 3],
          "ambientIntenisty",
          "float32",
          "directionalIntenisty",
          "float32"
        ];

        this.MapEditLayers = [
          "layerPropCount",
          ["[]", "uint32", 31],
          "layerStates",
          ["[]", "uint8", 31]
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.PackMapEditDirtyChunks = [
          "flags",
          "uint32",
          "position",
          ["[]", "float32", 3]
        ];

        this.__root = this.MapEditData = [
          "regions",
          this.MapEditRegion,
          "miniMapParams",
          this.MapEditRegion,
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations),
          "floodPoints",
          Utils.getArrayReader(this.PackMapEditDirtyChunks)
        ];
      },

      // => Version: 5, ReferencedFunction: 0x452AB0
      5: function() {
        this.MapEditRegion = [
          "regions",
          Utils.getArrayReader(Utils.getString16Reader())
        ];

        this.MapEditRegion = [
          "ambientColor",
          ["[]", "uint8", 3],
          "directionalColor",
          ["[]", "uint8", 3],
          "ambientIntenisty",
          "float32",
          "directionalIntenisty",
          "float32"
        ];

        this.MapEditLayers = [
          "layerPropCount",
          ["[]", "uint32", 31],
          "layerStates",
          ["[]", "uint8", 31]
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.PackMapEditDirtyChunks = [
          "dirtyFlags",
          "uint32",
          "chunkCoord",
          ["[]", "uint32", 2]
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.__root = this.MapEditData = [
          "regions",
          this.MapEditRegion,
          "miniMapParams",
          this.MapEditRegion,
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "dirtyChunks",
          Utils.getArrayReader(this.PackMapEditDirtyChunks),
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations)
        ];
      },

      // => Version: 4, ReferencedFunction: 0x452AB0
      4: function() {
        this.MapEditRegion = [
          "regions",
          Utils.getArrayReader(Utils.getString16Reader())
        ];

        this.MapEditRegion = [
          "ambientColor",
          ["[]", "uint8", 3],
          "directionalColor",
          ["[]", "uint8", 3],
          "ambientIntenisty",
          "float32",
          "directionalIntenisty",
          "float32"
        ];

        this.MapEditLayers = [
          "layerPropCount",
          ["[]", "uint32", 31],
          "layerStates",
          ["[]", "uint8", 31]
        ];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.__root = this.MapEditData = [
          "regions",
          this.MapEditRegion,
          "miniMapParams",
          this.MapEditRegion,
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations)
        ];
      },

      // => Version: 3
      3: function() {
        this.MapEditRegion = [
          "regions",
          Utils.getArrayReader(Utils.getString16Reader())
        ];

        this.MapEditRegion = [
          "ambientColor",
          ["[]", "uint8", 3],
          "directionalColor",
          ["[]", "uint8", 3],
          "ambientIntenisty",
          "float32",
          "directionalIntenisty",
          "float32"
        ];

        this.MapEditLayers = ["layerStates", Utils.getArrayReader("uint8")];

        this.PackMapEditAnnotation = [
          "name",
          Utils.getString16Reader(),
          "flags",
          "uint32",
          "anchors",
          Utils.getArrayReader(["[]", "float32", 2])
        ];

        this.PackMapEditAnnotations = [
          "annotations",
          Utils.getArrayReader(this.PackMapEditAnnotation)
        ];

        this.MapEditCamLocations = [
          "attack",
          "float32",
          "rotation",
          "float32",
          "position",
          ["[]", "float32", 3],
          "name",
          Utils.getString16Reader()
        ];

        this.__root = this.MapEditData = [
          "regions",
          this.MapEditRegion,
          "miniMapParams",
          this.MapEditRegion,
          "layers",
          this.MapEditLayers,
          "annotations",
          this.PackMapEditAnnotations,
          "camLocations",
          Utils.getArrayReader(this.MapEditCamLocations)
        ];
      }
    }
  }
];
