let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: COLL, versions: 5, strucTab: 0x1773030
  /// ==================================================

  {
    name: "COLL",
    versions: {
      // => Version: 4
      4: function() {
        this.ModelCollisionKeyFrameV10 = [
          "time",
          "float32",
          "position",
          ["[]", "float32", 3],
          "orientation",
          ["[]", "float32", 4]
        ];

        this.ModelCollisionAnimatedObjectV10 = [
          "shapeIndices",
          Utils.getArrayReader("uint32"),
          "keyFrames",
          Utils.getArrayReader(this.ModelCollisionKeyFrameV10)
        ];

        this.ModelCollisionAnimationV10 = [
          "animation",
          Utils.getQWordReader(),
          "objects",
          Utils.getArrayReader(this.ModelCollisionAnimatedObjectV10),
          "targetPoints",
          Utils.getArrayReader(["[]", "float32", 3])
        ];

        this.ModelCollisionMeshV10 = [
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8"),
          "navSeedPoints",
          Utils.getArrayReader(["[]", "float32", 3])
        ];

        this.ModelCollisionBoxV10 = [
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV10 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionCapsuleV10 = [
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV10 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileCollisionV10 = [
          "animations",
          Utils.getArrayReader(this.ModelCollisionAnimationV10),
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV10),
          "boxes",
          Utils.getArrayReader(this.ModelCollisionBoxV10),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV10),
          "capsules",
          Utils.getArrayReader(this.ModelCollisionCapsuleV10),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV10)
        ];
      },

      // => Version: 3, ReferencedFunction: 0xF277D0
      3: function() {
        this.ModelCollisionKeyFrameV9 = [
          "time",
          "float32",
          "position",
          ["[]", "float32", 3],
          "orientation",
          ["[]", "float32", 4]
        ];

        this.ModelCollisionAnimatedObjectV9 = [
          "shapeIndices",
          Utils.getArrayReader("uint32"),
          "keyFrames",
          Utils.getArrayReader(this.ModelCollisionKeyFrameV9)
        ];

        this.ModelCollisionAnimationV9 = [
          "animation",
          Utils.getQWordReader(),
          "objects",
          Utils.getArrayReader(this.ModelCollisionAnimatedObjectV9)
        ];

        this.ModelCollisionMeshV9 = [
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionBoxV9 = [
          "dimensions",
          ["[]", "float32", 3],
          "position",
          ["[]", "float32", 3],
          "rotation",
          ["[]", "float32", 4],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV9 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionCapsuleV9 = [
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV9 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileCollisionV9 = [
          "animations",
          Utils.getArrayReader(this.ModelCollisionAnimationV9),
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV9),
          "boxes",
          Utils.getArrayReader(this.ModelCollisionBoxV9),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV9),
          "capsules",
          Utils.getArrayReader(this.ModelCollisionCapsuleV9),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV9)
        ];
      },

      // => Version: 2
      2: function() {
        this.ModelCollisionMeshV8 = [
          "animationSequences",
          Utils.getArrayReader(Utils.getQWordReader()),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionCloudV8 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelCollisionCubeV8 = [
          "transform",
          ["[]", ["[]", "float32", 4], 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV8 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionCapsuleV8 = [
          "p0",
          ["[]", "float32", 3],
          "p1",
          ["[]", "float32", 3],
          "radius",
          "float32",
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV8 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileCollisionV8 = [
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV8),
          "clouds",
          Utils.getArrayReader(this.ModelCollisionCloudV8),
          "cubes",
          Utils.getArrayReader(this.ModelCollisionCubeV8),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV8),
          "capsules",
          Utils.getArrayReader(this.ModelCollisionCapsuleV8),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV8)
        ];
      },

      // => Version: 1
      1: function() {
        this.ModelCollisionMeshV1 = [
          "animationSequences",
          Utils.getArrayReader(Utils.getQWordReader()),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionCloudV1 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelCollisionCubeV1 = [
          "transform",
          ["[]", ["[]", "float32", 4], 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV1 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV1 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileCollisionV1 = [
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV1),
          "clouds",
          Utils.getArrayReader(this.ModelCollisionCloudV1),
          "cubes",
          Utils.getArrayReader(this.ModelCollisionCubeV1),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV1),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV1)
        ];
      },

      // => Version: 0
      0: function() {
        this.ModelCollisionMeshV0 = [
          "animationSequence",
          Utils.getQWordReader(),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 3]),
          "indices",
          Utils.getArrayReader("uint16"),
          "surfaces",
          Utils.getArrayReader("uint8")
        ];

        this.ModelCollisionCloudV0 = [
          "animationSequence",
          Utils.getQWordReader(),
          "points",
          Utils.getArrayReader(["[]", "float32", 3]),
          "surface",
          "uint8"
        ];

        this.ModelCollisionCubeV0 = [
          "transform",
          ["[]", ["[]", "float32", 4], 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSphereV0 = [
          "radius",
          "float32",
          "position",
          ["[]", "float32", 3],
          "surface",
          "uint8"
        ];

        this.ModelCollisionSurfaceV0 = [
          "tokens",
          Utils.getArrayReader(Utils.getQWordReader())
        ];

        this.__root = this.ModelFileCollisionV0 = [
          "meshes",
          Utils.getArrayReader(this.ModelCollisionMeshV0),
          "clouds",
          Utils.getArrayReader(this.ModelCollisionCloudV0),
          "cubes",
          Utils.getArrayReader(this.ModelCollisionCubeV0),
          "spheres",
          Utils.getArrayReader(this.ModelCollisionSphereV0),
          "surfaces",
          Utils.getArrayReader(this.ModelCollisionSurfaceV0)
        ];
      }
    }
  }
];
