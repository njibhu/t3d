import { Uint64, String16, Uint32, Filename, DynArray, FixedArray, Float32, Uint8 } from "../src/types";

module.exports = [
  {
    chunkName: "rive",
    name: "PackMapRivers",
    version: 0,
    definitions: {
      MapRiver: {
        guid: Uint64,
        xTiling: Float32,
        points: DynArray(FixedArray(Float32, 3)),
        reaches: DynArray("MapRiverReach")
      },
      MapRiverReach: {
        width: Float32,
        curveLength: Float32,
        curvePercent: Float32,
        xTessellation: Uint32,
        yTessellation: FixedArray(Uint32, 2),
        broadId: Uint32,
        materials: DynArray("MapRiverMaterial")
      },
      MapRiverMaterial: {
        materialFile: Filename(),
        textureFiles: DynArray(Filename()),
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        textureMaps: DynArray("MapRiverTextureMap")
      },
      MapRiverTextureMap: {
        scale: Float32,
        speed: Float32,
        tiling: Float32,
        uvIndex: Uint8
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      flags: Uint32,
      nextBroadId: Uint32,
      rivers: DynArray("MapRiver"),
      broadPhase: "PackBroadphaseType"
    }
  },
  {
    chunkName: "rive",
    name: "PackMapRivers",
    version: 1,
    definitions: {
      MapRiver: {
        guid: Uint64,
        name: String16(),
        xTiling: Float32,
        points: DynArray(FixedArray(Float32, 3)),
        reaches: DynArray("MapRiverReach")
      },
      MapRiverReach: {
        width: Float32,
        curveLength: Float32,
        curvePercent: Float32,
        xTessellation: Uint32,
        yTessellation: FixedArray(Uint32, 2),
        broadId: Uint32,
        materials: DynArray("MapRiverMaterial")
      },
      MapRiverMaterial: {
        materialFile: Filename(),
        textureFiles: DynArray(Filename()),
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        textureMaps: DynArray("MapRiverTextureMap")
      },
      MapRiverTextureMap: {
        scale: Float32,
        speedX: Float32,
        speedY: Float32,
        tiling: Float32,
        uvIndex: Uint8
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      flags: Uint32,
      nextBroadId: Uint32,
      rivers: DynArray("MapRiver"),
      broadPhase: "PackBroadphaseType"
    }
  },
  {
    chunkName: "rive",
    name: "PackMapRivers",
    version: 2,
    definitions: {
      MapRiver: {
        guid: Uint64,
        name: String16(),
        xTiling: Float32,
        points: DynArray(FixedArray(Float32, 3)),
        reaches: DynArray("MapRiverReach")
      },
      MapRiverReach: {
        width: Float32,
        curveLength: Float32,
        curvePercent: Float32,
        xTessellation: Uint32,
        yTessellation: FixedArray(Uint32, 2),
        broadId: Uint32,
        fvf: Uint32,
        materials: DynArray("MapRiverMaterial")
      },
      MapRiverMaterial: {
        materialFile: Filename(),
        textureFiles: DynArray(Filename()),
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        textureMaps: DynArray("MapRiverTextureMap")
      },
      MapRiverTextureMap: {
        scale: Float32,
        speedX: Float32,
        speedY: Float32,
        tiling: Float32,
        uvIndex: Uint8
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      flags: Uint32,
      nextBroadId: Uint32,
      rivers: DynArray("MapRiver"),
      broadPhase: "PackBroadphaseType"
    }
  },
  {
    chunkName: "rive",
    name: "PackMapRivers",
    version: 3,
    definitions: {
      MapRiver: {
        guid: Uint64,
        name: String16(),
        xTiling: Float32,
        points: DynArray(FixedArray(Float32, 3)),
        reaches: DynArray("MapRiverReach"),
        flags: Uint32
      },
      MapRiverReach: {
        width: Float32,
        curveLength: Float32,
        curvePercent: Float32,
        xTessellation: Uint32,
        yTessellation: FixedArray(Uint32, 2),
        broadId: Uint32,
        fvf: Uint32,
        flags: Uint32,
        materials: DynArray("MapRiverMaterial")
      },
      MapRiverMaterial: {
        materialFile: Filename(),
        textureFiles: DynArray(Filename()),
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        textureMaps: DynArray("MapRiverTextureMap")
      },
      MapRiverTextureMap: {
        scale: Float32,
        speedX: Float32,
        speedY: Float32,
        tiling: Float32,
        uvIndex: Uint8
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      flags: Uint32,
      nextBroadId: Uint32,
      rivers: DynArray("MapRiver"),
      broadPhase: "PackBroadphaseType"
    }
  },
  {
    chunkName: "rive",
    name: "PackMapRivers",
    version: 4,
    definitions: {
      MapRiver: {
        guid: Uint64,
        name: String16(),
        xTiling: Float32,
        points: DynArray(FixedArray(Float32, 3)),
        reaches: DynArray("MapRiverReach"),
        flags: Uint32
      },
      MapRiverReach: {
        width: Float32,
        curveLength: Float32,
        curvePercent: Float32,
        xTessellation: Uint32,
        yTessellation: FixedArray(Uint32, 2),
        broadId: Uint32,
        fvf: Uint32,
        flags: Uint32,
        materials: DynArray("MapRiverMaterial"),
        reserved: String16()
      },
      MapRiverMaterial: {
        materialFile: Filename(),
        textureFiles: DynArray(Filename()),
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        textureMaps: DynArray("MapRiverTextureMap"),
        flags: Uint32
      },
      MapRiverTextureMap: {
        scale: Float32,
        speedX: Float32,
        speedY: Float32,
        tiling: Float32,
        flags: Uint32,
        uvIndex: Uint8
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      flags: Uint32,
      nextBroadId: Uint32,
      rivers: DynArray("MapRiver"),
      broadPhase: "PackBroadphaseType"
    }
  },
  {
    chunkName: "rive",
    name: "PackMapRivers",
    version: 5,
    definitions: {
      MapRiver: {
        guid: Uint64,
        name: String16(),
        properties: DynArray("PackMapRiverProperty"),
        points: DynArray(FixedArray(Float32, 3)),
        reaches: DynArray("MapRiverReach")
      },
      PackMapRiverProperty: {
        type: Uint32,
        val: Uint64,
        strVal: Filename()
      },
      MapRiverReach: {
        properties: DynArray("PackMapRiverProperty")
      }
    },
    root: {
      rivers: DynArray("MapRiver")
    }
  }
]