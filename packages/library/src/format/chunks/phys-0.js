let Utils = T3D.ParserUtils;

module.exports = [
  /// ==================================================
  /// Chunk: phys, versions: 11, strucTab: 0x17219F0
  /// ==================================================

  {
    name: "phys",
    versions: {
      // => Version: 10
      10: function() {
        this.PackMapPhysicsMeshV10 = [
          "indexArray",
          Utils.getArrayReader("uint16"),
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeData",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapPhysicsObjectV10 = [
          "mesh",
          Utils.getPointerReader(this.PackMapPhysicsMeshV10),
          "sceneFilePtr",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapPhysicsObjectRefV10 = [
          "sequence",
          Utils.getQWordReader(),
          "objectIndex",
          "uint32"
        ];

        this.PackMapPhysicsGeometryV10 = [
          "filePath",
          Utils.getString16Reader(),
          "quantizedExtents",
          "uint8",
          "objRefArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectRefV10),
          "surface",
          Utils.getArrayReader("uint16")
        ];

        this.PackMapPhysicsModelPropV10 = [
          "token",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelZoneV8 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelObstacleV10 = [
          "translate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsBlockV10 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "objectArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectV10),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV10),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV10),
          "debrisModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV10),
          "zoneModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelZoneV8),
          "obsModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelObstacleV10)
        ];

        this.__root = this.PackMapPhysicsV10 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "blockArray",
          Utils.getArrayReader(this.PackMapPhysicsBlockV10)
        ];
      },

      // => Version: 9, ReferencedFunction: 0xEBA150
      9: function() {
        this.PackMapPhysicsMeshV9 = [
          "indexArray",
          Utils.getArrayReader("uint16"),
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeData",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapPhysicsObjectV9 = [
          "mesh",
          Utils.getPointerReader(this.PackMapPhysicsMeshV9),
          "sceneFilePtr",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapPhysicsObjectRefV9 = [
          "sequence",
          Utils.getQWordReader(),
          "objectIndex",
          "uint32"
        ];

        this.PackMapPhysicsGeometryV9 = [
          "filePath",
          Utils.getString16Reader(),
          "quantizedExtents",
          "uint8",
          "objRefArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectRefV9)
        ];

        this.PackMapPhysicsModelPropV9 = [
          "token",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelZoneV7 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelObstacleV9 = [
          "translate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsBlockV9 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "objectArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectV9),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV9),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV9),
          "debrisModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV9),
          "zoneModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelZoneV7),
          "obsModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelObstacleV9)
        ];

        this.__root = this.PackMapPhysicsV9 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "blockArray",
          Utils.getArrayReader(this.PackMapPhysicsBlockV9)
        ];
      },

      // => Version: 8
      8: function() {
        this.PackMapPhysicsMeshV8 = [
          "indexArray",
          Utils.getArrayReader("uint16"),
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeData",
          Utils.getArrayReader("uint8")
        ];

        this.SceneBoxShapeV7 = [
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneSphereShapeV7 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneCapsuleShapeV7 = [
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneMeshShapeV7 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8")
        ];

        this.SceneFilePhysicsV7 = [
          "boxes",
          Utils.getArrayReader(this.SceneBoxShapeV7),
          "spheres",
          Utils.getArrayReader(this.SceneSphereShapeV7),
          "capsules",
          Utils.getArrayReader(this.SceneCapsuleShapeV7),
          "meshes",
          Utils.getArrayReader(this.SceneMeshShapeV7)
        ];

        this.ScenePathNodeV6 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "flags",
          "uint32",
          "smoothing",
          "float32",
          "singlesided",
          "uint8"
        ];

        this.ScenePathV6 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV6),
          "closed",
          "uint8"
        ];

        this.SceneEdgeV6 = [
          "indices",
          ["[]", "uint32", 2],
          "triangles",
          Utils.getArrayReader("uint32")
        ];

        this.SceneGameMeshV6 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV6),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.SceneGameSurfaceV6 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.SceneFileGameV6 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV6),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV6),
          "surfaces",
          Utils.getArrayReader(this.SceneGameSurfaceV6)
        ];

        this.PackMapPhysicsObjectV8 = [
          "mesh",
          Utils.getPointerReader(this.PackMapPhysicsMeshV8),
          "physics",
          Utils.getPointerReader(this.SceneFilePhysicsV7),
          "game",
          Utils.getPointerReader(this.SceneFileGameV6)
        ];

        this.PackMapPhysicsObjectRefV8 = [
          "sequence",
          Utils.getQWordReader(),
          "objectIndex",
          "uint32"
        ];

        this.PackMapPhysicsGeometryV8 = [
          "filePath",
          Utils.getString16Reader(),
          "quantizedExtents",
          "uint8",
          "objRefArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectRefV8)
        ];

        this.PackMapPhysicsModelPropV8 = [
          "token",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelZoneV6 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelObstacleV8 = [
          "translate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsBlockV8 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "objectArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectV8),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV8),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV8),
          "debrisModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV8),
          "zoneModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelZoneV6),
          "obsModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelObstacleV8)
        ];

        this.__root = this.PackMapPhysicsV8 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "blockArray",
          Utils.getArrayReader(this.PackMapPhysicsBlockV8)
        ];
      },

      // => Version: 7
      7: function() {
        this.PackMapPhysicsMeshV7 = [
          "indexArray",
          Utils.getArrayReader("uint16"),
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeData",
          Utils.getArrayReader("uint8")
        ];

        this.SceneBoxShapeV7 = [
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneSphereShapeV7 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneCapsuleShapeV7 = [
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneMeshShapeV7 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8")
        ];

        this.SceneFilePhysicsV7 = [
          "boxes",
          Utils.getArrayReader(this.SceneBoxShapeV7),
          "spheres",
          Utils.getArrayReader(this.SceneSphereShapeV7),
          "capsules",
          Utils.getArrayReader(this.SceneCapsuleShapeV7),
          "meshes",
          Utils.getArrayReader(this.SceneMeshShapeV7)
        ];

        this.ScenePathNodeV6 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "flags",
          "uint32",
          "smoothing",
          "float32",
          "singlesided",
          "uint8"
        ];

        this.ScenePathV6 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV6),
          "closed",
          "uint8"
        ];

        this.SceneEdgeV6 = [
          "indices",
          ["[]", "uint32", 2],
          "triangles",
          Utils.getArrayReader("uint32")
        ];

        this.SceneGameMeshV6 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV6),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.SceneGameSurfaceV6 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.SceneFileGameV6 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV6),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV6),
          "surfaces",
          Utils.getArrayReader(this.SceneGameSurfaceV6)
        ];

        this.PackMapPhysicsObjectV7 = [
          "mesh",
          Utils.getPointerReader(this.PackMapPhysicsMeshV7),
          "physics",
          Utils.getPointerReader(this.SceneFilePhysicsV7),
          "game",
          Utils.getPointerReader(this.SceneFileGameV6)
        ];

        this.PackMapPhysicsObjectRefV7 = [
          "sequence",
          Utils.getQWordReader(),
          "objectIndex",
          "uint32"
        ];

        this.PackMapPhysicsGeometryV7 = [
          "filePath",
          Utils.getString16Reader(),
          "quantizedExtents",
          "uint8",
          "objRefArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectRefV7)
        ];

        this.PackMapPhysicsModelPropV7 = [
          "token",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelZoneV5 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelObstacleV7 = [
          "translate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsBlockV7 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "objectArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectV7),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV7),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV7),
          "zoneModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelZoneV5),
          "obsModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelObstacleV7)
        ];

        this.__root = this.PackMapPhysicsV7 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "blockArray",
          Utils.getArrayReader(this.PackMapPhysicsBlockV7)
        ];
      },

      // => Version: 6, ReferencedFunction: 0xEBA130
      6: function() {
        this.PackMapPhysicsMeshV6 = [
          "indexArray",
          Utils.getArrayReader("uint16"),
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeData",
          Utils.getArrayReader("uint8")
        ];

        this.SceneBoxShapeV7 = [
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneSphereShapeV7 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneCapsuleShapeV7 = [
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneMeshShapeV7 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8")
        ];

        this.SceneFilePhysicsV7 = [
          "boxes",
          Utils.getArrayReader(this.SceneBoxShapeV7),
          "spheres",
          Utils.getArrayReader(this.SceneSphereShapeV7),
          "capsules",
          Utils.getArrayReader(this.SceneCapsuleShapeV7),
          "meshes",
          Utils.getArrayReader(this.SceneMeshShapeV7)
        ];

        this.ScenePathNodeV6 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "flags",
          "uint32",
          "smoothing",
          "float32",
          "singlesided",
          "uint8"
        ];

        this.ScenePathV6 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV6),
          "closed",
          "uint8"
        ];

        this.SceneEdgeV6 = [
          "indices",
          ["[]", "uint32", 2],
          "triangles",
          Utils.getArrayReader("uint32")
        ];

        this.SceneGameMeshV6 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV6),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.SceneGameSurfaceV6 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.SceneFileGameV6 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV6),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV6),
          "surfaces",
          Utils.getArrayReader(this.SceneGameSurfaceV6)
        ];

        this.PackMapPhysicsObjectV6 = [
          "mesh",
          Utils.getPointerReader(this.PackMapPhysicsMeshV6),
          "physics",
          Utils.getPointerReader(this.SceneFilePhysicsV7),
          "game",
          Utils.getPointerReader(this.SceneFileGameV6)
        ];

        this.PackMapPhysicsObjectRefV6 = [
          "sequence",
          Utils.getQWordReader(),
          "objectIndex",
          "uint32"
        ];

        this.PackMapPhysicsGeometryV6 = [
          "filePath",
          Utils.getString16Reader(),
          "quantizedExtents",
          "uint8",
          "objRefArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectRefV6)
        ];

        this.PackMapPhysicsModelPropV6 = [
          "token",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelZoneV4 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelObstacleV6 = [
          "translate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.__root = this.PackMapPhysicsV6 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "objectArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectV6),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV6),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV6),
          "zoneModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelZoneV4),
          "obsModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelObstacleV6)
        ];
      },

      // => Version: 5, ReferencedFunction: 0xEBA130
      5: function() {
        this.PackMapPhysicsMeshV5 = [
          "indexArray",
          Utils.getArrayReader("uint16"),
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeData",
          Utils.getArrayReader("uint8")
        ];

        this.SceneBoxShapeV7 = [
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneSphereShapeV7 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneCapsuleShapeV7 = [
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneMeshShapeV7 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8")
        ];

        this.SceneFilePhysicsV7 = [
          "boxes",
          Utils.getArrayReader(this.SceneBoxShapeV7),
          "spheres",
          Utils.getArrayReader(this.SceneSphereShapeV7),
          "capsules",
          Utils.getArrayReader(this.SceneCapsuleShapeV7),
          "meshes",
          Utils.getArrayReader(this.SceneMeshShapeV7)
        ];

        this.ScenePathNodeV5 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
          "singlesided",
          "uint8"
        ];

        this.ScenePathV5 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV5),
          "closed",
          "uint8"
        ];

        this.SceneEdgeV5 = [
          "indices",
          ["[]", "uint32", 2],
          "triangles",
          Utils.getArrayReader("uint32")
        ];

        this.SceneGameMeshV5 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV5),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaceFlags",
          Utils.getArrayReader("uint32")
        ];

        this.SceneFileGameV5 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV5),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV5)
        ];

        this.PackMapPhysicsObjectV5 = [
          "mesh",
          Utils.getPointerReader(this.PackMapPhysicsMeshV5),
          "physics",
          Utils.getPointerReader(this.SceneFilePhysicsV7),
          "game",
          Utils.getPointerReader(this.SceneFileGameV5)
        ];

        this.PackMapPhysicsObjectRefV5 = [
          "sequence",
          Utils.getQWordReader(),
          "objectIndex",
          "uint32"
        ];

        this.PackMapPhysicsGeometryV5 = [
          "filePath",
          Utils.getString16Reader(),
          "quantizedExtents",
          "uint8",
          "objRefArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectRefV5)
        ];

        this.PackMapPhysicsModelPropV5 = [
          "token",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelZoneV3 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelObstacleV5 = [
          "translate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.__root = this.PackMapPhysicsV5 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "objectArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectV5),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV5),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV5),
          "zoneModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelZoneV3),
          "obsModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelObstacleV5)
        ];
      },

      // => Version: 4, ReferencedFunction: 0xEBA130
      4: function() {
        this.PackMapPhysicsMeshV4 = [
          "indexArray",
          Utils.getArrayReader("uint16"),
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeData",
          Utils.getArrayReader("uint8")
        ];

        this.SceneBoxShapeV7 = [
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneSphereShapeV7 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneCapsuleShapeV7 = [
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneMeshShapeV7 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8")
        ];

        this.SceneFilePhysicsV7 = [
          "boxes",
          Utils.getArrayReader(this.SceneBoxShapeV7),
          "spheres",
          Utils.getArrayReader(this.SceneSphereShapeV7),
          "capsules",
          Utils.getArrayReader(this.SceneCapsuleShapeV7),
          "meshes",
          Utils.getArrayReader(this.SceneMeshShapeV7)
        ];

        this.ScenePathNodeV5 = [
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "radius",
          "float32",
          "flags",
          "uint32",
          "smoothing",
          "float32",
          "singlesided",
          "uint8"
        ];

        this.ScenePathV5 = [
          "properties",
          Utils.getArrayReader(Utils.getQWordReader()),
          "points",
          Utils.getArrayReader(this.ScenePathNodeV5),
          "closed",
          "uint8"
        ];

        this.SceneEdgeV5 = [
          "indices",
          ["[]", "uint32", 2],
          "triangles",
          Utils.getArrayReader("uint32")
        ];

        this.SceneGameMeshV5 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "edges",
          Utils.getArrayReader(this.SceneEdgeV5),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaceFlags",
          Utils.getArrayReader("uint32")
        ];

        this.SceneFileGameV5 = [
          "paths",
          Utils.getArrayReader(this.ScenePathV5),
          "meshes",
          Utils.getArrayReader(this.SceneGameMeshV5)
        ];

        this.PackMapPhysicsObjectV4 = [
          "mesh",
          Utils.getPointerReader(this.PackMapPhysicsMeshV4),
          "physics",
          Utils.getPointerReader(this.SceneFilePhysicsV7),
          "game",
          Utils.getPointerReader(this.SceneFileGameV5)
        ];

        this.PackMapPhysicsObjectRefV4 = [
          "sequence",
          Utils.getQWordReader(),
          "objectIndex",
          "uint32"
        ];

        this.PackMapPhysicsGeometryV4 = [
          "filePath",
          Utils.getFileNameReader(),
          "quantizedExtents",
          "uint8",
          "objRefArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectRefV4)
        ];

        this.PackMapPhysicsModelPropV4 = [
          "token",
          Utils.getQWordReader(),
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelZoneV2 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 4],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelObstacleV4 = [
          "translate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.__root = this.PackMapPhysicsV4 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "objectArray",
          Utils.getArrayReader(this.PackMapPhysicsObjectV4),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV4),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV4),
          "zoneModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelZoneV2),
          "obsModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelObstacleV4)
        ];
      },

      // => Version: 3
      3: function() {
        this.PackMapPhysicsMeshV3 = [
          "indexArray",
          Utils.getArrayReader("uint16"),
          "vertexArray",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppCodeData",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapPhysicsShapeDataV3 = [
          "scale",
          "float32",
          "gameDataPtr",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapPhysicsGeometryV3 = [
          "shapeDataIndexArray",
          Utils.getArrayReader("uint32")
        ];

        this.PackMapPhysicsModelPropV3 = [
          "token",
          ["[]", "uint32", 2],
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelZoneV1 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.__root = this.PackMapPhysicsV3 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "meshArray",
          Utils.getArrayReader(this.PackMapPhysicsMeshV3),
          "shapeArray",
          Utils.getArrayReader(this.PackMapPhysicsShapeDataV3),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV3),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV3),
          "zoneModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelZoneV1)
        ];
      },

      // => Version: 2, ReferencedFunction: 0xEBA110
      2: function() {
        this.PackMapPhysicsShapeDataV2 = [
          "scale",
          "float32",
          "gameDataPtr",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapPhysicsGeometryV2 = [
          "shapeDataIndexArray",
          Utils.getArrayReader("uint32")
        ];

        this.PackMapPhysicsModelPropV2 = [
          "token",
          ["[]", "uint32", 2],
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.PackMapPhysicsModelZoneV0 = [
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.__root = this.PackMapPhysicsV2 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "shapeArray",
          Utils.getArrayReader(this.PackMapPhysicsShapeDataV2),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV2),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV2),
          "zoneModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelZoneV0)
        ];
      },

      // => Version: 1, ReferencedFunction: 0xEBA0F0
      1: function() {
        this.PackMapPhysicsShapeDataV1 = [
          "scale",
          "float32",
          "gameDataPtr",
          Utils.getArrayReader("uint8")
        ];

        this.PackMapPhysicsGeometryV1 = [
          "shapeDataIndexArray",
          Utils.getArrayReader("uint32")
        ];

        this.PackMapPhysicsModelPropV1 = [
          "token",
          ["[]", "uint32", 2],
          "scale",
          "float32",
          "translate",
          ["[]", "float32", 3],
          "rotate",
          ["[]", "float32", 3],
          "geometryIndex",
          "uint32"
        ];

        this.__root = this.PackMapPhysicsV1 = [
          "boundsMin",
          ["[]", "float32", 3],
          "boundsMax",
          ["[]", "float32", 3],
          "shapeArray",
          Utils.getArrayReader(this.PackMapPhysicsShapeDataV1),
          "geometryArray",
          Utils.getArrayReader(this.PackMapPhysicsGeometryV1),
          "propModelArray",
          Utils.getArrayReader(this.PackMapPhysicsModelPropV1)
        ];
      }
    }
  }
];
