let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: PHYS, versions: 9, strucTab: 0x1830478
  /// ==================================================

  {
    name: "PHYS",
    versions: {
      // => Version: 8
      8: function() {
        this.SceneBoxShapeV8 = [
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneSphereShapeV8 = [
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneCapsuleShapeV8 = [
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneMeshShapeV8 = [
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.SceneSurfaceV8 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.SceneFilePhysicsV8 = [
          "boxes",
          Utils.getArrayReader(this.SceneBoxShapeV8),
          "spheres",
          Utils.getArrayReader(this.SceneSphereShapeV8),
          "capsules",
          Utils.getArrayReader(this.SceneCapsuleShapeV8),
          "meshes",
          Utils.getArrayReader(this.SceneMeshShapeV8),
          "surfaces",
          Utils.getArrayReader(this.SceneSurfaceV8)
        ];
      },

      // => Version: 7
      7: function() {
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

        this.__root = this.SceneFilePhysicsV7 = [
          "boxes",
          Utils.getArrayReader(this.SceneBoxShapeV7),
          "spheres",
          Utils.getArrayReader(this.SceneSphereShapeV7),
          "capsules",
          Utils.getArrayReader(this.SceneCapsuleShapeV7),
          "meshes",
          Utils.getArrayReader(this.SceneMeshShapeV7)
        ];
      },

      // => Version: 6
      6: function() {
        this.SceneShapeSurfaceV6 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.SceneBoxShapeV6 = [
          "surface",
          "uint8",
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneSphereShapeV6 = [
          "surface",
          "uint8",
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneCapsuleShapeV6 = [
          "surface",
          "uint8",
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneMeshShapeV6 = [
          "surfaces",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8")
        ];

        this.SceneCollisionShapeV6 = ["shapeIndex", "uint32"];

        this.SceneTriggerShapeV6 = ["shapeIndex", "uint32", "flags", "uint32"];

        this.SceneNamedShapeV6 = ["shapeIndex", "uint32"];

        this.__root = this.SceneFilePhysicsV6 = [
          "surfaces",
          Utils.getArrayReader(this.SceneShapeSurfaceV6),
          "boxes",
          Utils.getArrayReader(this.SceneBoxShapeV6),
          "spheres",
          Utils.getArrayReader(this.SceneSphereShapeV6),
          "capsules",
          Utils.getArrayReader(this.SceneCapsuleShapeV6),
          "meshes",
          Utils.getArrayReader(this.SceneMeshShapeV6),
          "collisionShapes",
          Utils.getArrayReader(this.SceneCollisionShapeV6),
          "triggerShapes",
          Utils.getArrayReader(this.SceneTriggerShapeV6),
          "namedShapes",
          Utils.getArrayReader(this.SceneNamedShapeV6)
        ];
      },

      // => Version: 5
      5: function() {
        this.SceneShapeSurfaceV5 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.SceneBoxShapeV5 = [
          "surface",
          "uint8",
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4]
        ];

        this.SceneSphereShapeV5 = [
          "surface",
          "uint8",
          "center",
          ["[]", "float32", 3],
          "radius",
          "float32"
        ];

        this.SceneMeshShapeV5 = [
          "surfaces",
          Utils.getArrayReader("uint8"),
          "indices",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "moppInfo",
          ["[]", "float32", 4],
          "moppBytes",
          Utils.getArrayReader("uint8")
        ];

        this.SceneCollisionShapeV5 = ["shapeIndex", "uint32"];

        this.SceneTriggerShapeV5 = ["shapeIndex", "uint32", "flags", "uint32"];

        this.SceneNamedShapeV5 = ["shapeIndex", "uint32"];

        this.__root = this.SceneFilePhysicsV5 = [
          "surfaces",
          Utils.getArrayReader(this.SceneShapeSurfaceV5),
          "boxes",
          Utils.getArrayReader(this.SceneBoxShapeV5),
          "spheres",
          Utils.getArrayReader(this.SceneSphereShapeV5),
          "meshes",
          Utils.getArrayReader(this.SceneMeshShapeV5),
          "collisionShapes",
          Utils.getArrayReader(this.SceneCollisionShapeV5),
          "triggerShapes",
          Utils.getArrayReader(this.SceneTriggerShapeV5),
          "namedShapes",
          Utils.getArrayReader(this.SceneNamedShapeV5)
        ];
      },

      // => Version: 4
      4: function() {
        this.SceneShapeV4 = ["surfaces", Utils.getArrayReader("uint8")];

        this.SceneShapeSurfaceV4 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.SceneCollisionShapeV4 = ["shapeIndex", "uint32"];

        this.SceneTriggerShapeV4 = ["shapeIndex", "uint32", "flags", "uint32"];

        this.SceneNamedShapeV4 = ["shapeIndex", "uint32"];

        this.__root = this.SceneFilePhysicsV4 = [
          "shapeData",
          Utils.getArrayReader("uint8"),
          "shapes",
          Utils.getArrayReader(this.SceneShapeV4),
          "surfaces",
          Utils.getArrayReader(this.SceneShapeSurfaceV4),
          "collisionShapes",
          Utils.getArrayReader(this.SceneCollisionShapeV4),
          "triggerShapes",
          Utils.getArrayReader(this.SceneTriggerShapeV4),
          "namedShapes",
          Utils.getArrayReader(this.SceneNamedShapeV4)
        ];
      },

      // => Version: 3
      3: function() {
        this.SceneShapeV3 = ["surfaces", Utils.getArrayReader("uint8")];

        this.SceneShapeSurfaceV3 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.SceneCollisionShapeV3 = ["shapeIndex", "uint32"];

        this.SceneTriggerShapeV3 = ["shapeIndex", "uint32", "flags", "uint32"];

        this.SceneNamedShapeV3 = ["shapeIndex", "uint32"];

        this.ScenePathPhysicsV3 = [
          "pathData",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.__root = this.SceneFilePhysicsV3 = [
          "shapeData",
          Utils.getArrayReader("uint8"),
          "shapes",
          Utils.getArrayReader(this.SceneShapeV3),
          "surfaces",
          Utils.getArrayReader(this.SceneShapeSurfaceV3),
          "collisionShapes",
          Utils.getArrayReader(this.SceneCollisionShapeV3),
          "triggerShapes",
          Utils.getArrayReader(this.SceneTriggerShapeV3),
          "namedShapes",
          Utils.getArrayReader(this.SceneNamedShapeV3),
          "paths",
          Utils.getArrayReader(this.ScenePathPhysicsV3)
        ];
      },

      // => Version: 2
      2: function() {
        this.SceneShapeV2 = ["shapeOffset", "uint32"];

        this.SceneCollisionShapeV2 = ["shapeIndex", "uint32"];

        this.SceneQueryShapeV2 = ["shapeIndex", "uint32"];

        this.SceneNamedShapeV2 = ["shapeIndex", "uint32"];

        this.ScenePathPhysicsV2 = [
          "pathData",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.__root = this.SceneFilePhysicsV2 = [
          "shapeData",
          Utils.getArrayReader("uint8"),
          "shapes",
          Utils.getArrayReader(this.SceneShapeV2),
          "collisionShapes",
          Utils.getArrayReader(this.SceneCollisionShapeV2),
          "queryShapes",
          Utils.getArrayReader(this.SceneQueryShapeV2),
          "namedShapes",
          Utils.getArrayReader(this.SceneNamedShapeV2),
          "paths",
          Utils.getArrayReader(this.ScenePathPhysicsV2)
        ];
      },

      // => Version: 1
      1: function() {
        this.SceneShapeV1 = ["shapeOffset", "uint32"];

        this.SceneCollisionShapeV1 = ["shapeIndex", "uint32"];

        this.SceneNamedShapeV1 = ["shapeIndex", "uint32"];

        this.ScenePathPhysicsV1 = [
          "pathData",
          Utils.getArrayReader(["[]", "float32", 4])
        ];

        this.__root = this.SceneFilePhysicsV1 = [
          "shapeData",
          Utils.getArrayReader("uint8"),
          "shapes",
          Utils.getArrayReader(this.SceneShapeV1),
          "collisionShapes",
          Utils.getArrayReader(this.SceneCollisionShapeV1),
          "namedShapes",
          Utils.getArrayReader(this.SceneNamedShapeV1),
          "paths",
          Utils.getArrayReader(this.ScenePathPhysicsV1)
        ];
      },

      // => Version: 0
      0: function() {
        this.SceneShapeV0 = ["shapeOffset", "uint32"];

        this.SceneCollisionShapeV0 = ["shapeIndex", "uint32"];

        this.SceneNamedShapeV0 = ["shapeIndex", "uint32"];

        this.__root = this.SceneFilePhysicsV0 = [
          "shapeData",
          Utils.getArrayReader("uint8"),
          "shapes",
          Utils.getArrayReader(this.SceneShapeV0),
          "collisionShapes",
          Utils.getArrayReader(this.SceneCollisionShapeV0),
          "namedShapes",
          Utils.getArrayReader(this.SceneNamedShapeV0)
        ];
      }
    }
  }
];
