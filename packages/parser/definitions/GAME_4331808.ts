import { Uint64, DynArray, FixedArray, Float32, Uint32, Uint8, Uint16 } from "./types";

module.exports = [
  {
    chunkName: "GAME",
    name: "SceneFileGameV0",
    version: 0,
    definitions: {
      ScenePathV0: {
        properties: DynArray(Uint64),
        points: DynArray("ScenePathNodeV0"),
        closed: Uint8
      },
      ScenePathNodeV0: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        radius: Float32,
        flags: Uint32
      },
      SceneGameMeshV0: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        edges: DynArray("SceneEdgeV0"),
        moppInfo: FixedArray(Float32, 4),
        moppBytes: DynArray(Uint8)
      },
      SceneEdgeV0: {
        indices: FixedArray(Uint32, 2),
        triangles: DynArray(Uint32)
      }
    },
    root: {
      paths: DynArray("ScenePathV0"),
      meshes: DynArray("SceneGameMeshV0")
    }
  },
  {
    chunkName: "GAME",
    name: "SceneFileGameV1",
    version: 1,
    definitions: {
      ScenePathV1: {
        properties: DynArray(Uint64),
        points: DynArray("ScenePathNodeV1"),
        closed: Uint8
      },
      ScenePathNodeV1: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        radius: Float32,
        flags: Uint32,
        smoothing: Float32
      },
      SceneGameMeshV1: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        edges: DynArray("SceneEdgeV1"),
        moppInfo: FixedArray(Float32, 4),
        moppBytes: DynArray(Uint8)
      },
      SceneEdgeV1: {
        indices: FixedArray(Uint32, 2),
        triangles: DynArray(Uint32)
      }
    },
    root: {
      paths: DynArray("ScenePathV1"),
      meshes: DynArray("SceneGameMeshV1")
    }
  },
  {
    chunkName: "GAME",
    name: "SceneFileGameV2",
    version: 2,
    definitions: {
      ScenePathV2: {
        properties: DynArray(Uint64),
        points: DynArray("ScenePathNodeV2"),
        closed: Uint8
      },
      ScenePathNodeV2: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        radius: Float32,
        flags: Uint32,
        smoothing: Float32
      },
      SceneGameMeshV2: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        edges: DynArray("SceneEdgeV2"),
        moppInfo: FixedArray(Float32, 4),
        moppBytes: DynArray(Uint8)
      },
      SceneEdgeV2: {
        indices: FixedArray(Uint32, 2),
        triangles: DynArray(Uint32)
      },
      SceneGrabNodeV2: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        radius: Float32,
        flags: Uint32,
        smoothing: Float32
      }
    },
    root: {
      paths: DynArray("ScenePathV2"),
      meshes: DynArray("SceneGameMeshV2"),
      grabPoints: DynArray("SceneGrabNodeV2")
    }
  },
  {
    chunkName: "GAME",
    name: "SceneFileGameV3",
    version: 3,
    definitions: {
      ScenePathV3: {
        properties: DynArray(Uint64),
        points: DynArray("ScenePathNodeV3"),
        closed: Uint8
      },
      ScenePathNodeV3: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        radius: Float32,
        flags: Uint32,
        smoothing: Float32
      },
      SceneGameMeshV3: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        edges: DynArray("SceneEdgeV3"),
        moppInfo: FixedArray(Float32, 4),
        moppBytes: DynArray(Uint8),
        surfaceFlags: DynArray(Uint32)
      },
      SceneEdgeV3: {
        indices: FixedArray(Uint32, 2),
        triangles: DynArray(Uint32)
      },
      SceneGrabNodeV3: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        radius: Float32,
        flags: Uint32,
        smoothing: Float32
      }
    },
    root: {
      paths: DynArray("ScenePathV3"),
      meshes: DynArray("SceneGameMeshV3"),
      grabPoints: DynArray("SceneGrabNodeV3")
    }
  },
  {
    chunkName: "GAME",
    name: "SceneFileGameV4",
    version: 4,
    definitions: {
      ScenePathV4: {
        properties: DynArray(Uint64),
        points: DynArray("ScenePathNodeV4"),
        closed: Uint8
      },
      ScenePathNodeV4: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        radius: Float32,
        flags: Uint32,
        smoothing: Float32,
        singlesided: Uint8
      },
      SceneGameMeshV4: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        edges: DynArray("SceneEdgeV4"),
        moppInfo: FixedArray(Float32, 4),
        moppBytes: DynArray(Uint8),
        surfaceFlags: DynArray(Uint32)
      },
      SceneEdgeV4: {
        indices: FixedArray(Uint32, 2),
        triangles: DynArray(Uint32)
      },
      SceneGrabNodeV4: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        radius: Float32,
        flags: Uint32,
        smoothing: Float32
      }
    },
    root: {
      paths: DynArray("ScenePathV4"),
      meshes: DynArray("SceneGameMeshV4"),
      grabPoints: DynArray("SceneGrabNodeV4")
    }
  },
  {
    chunkName: "GAME",
    name: "SceneFileGameV5",
    version: 5,
    definitions: {
      ScenePathV5: {
        properties: DynArray(Uint64),
        points: DynArray("ScenePathNodeV5"),
        closed: Uint8
      },
      ScenePathNodeV5: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        radius: Float32,
        flags: Uint32,
        smoothing: Float32,
        singlesided: Uint8
      },
      SceneGameMeshV5: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        edges: DynArray("SceneEdgeV5"),
        moppInfo: FixedArray(Float32, 4),
        moppBytes: DynArray(Uint8),
        surfaceFlags: DynArray(Uint32)
      },
      SceneEdgeV5: {
        indices: FixedArray(Uint32, 2),
        triangles: DynArray(Uint32)
      }
    },
    root: {
      paths: DynArray("ScenePathV5"),
      meshes: DynArray("SceneGameMeshV5")
    }
  },
  {
    chunkName: "GAME",
    name: "SceneFileGameV6",
    version: 6,
    definitions: {
      ScenePathV6: {
        properties: DynArray(Uint64),
        points: DynArray("ScenePathNodeV6"),
        closed: Uint8
      },
      ScenePathNodeV6: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        flags: Uint32,
        smoothing: Float32,
        singlesided: Uint8
      },
      SceneGameMeshV6: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        edges: DynArray("SceneEdgeV6"),
        moppInfo: FixedArray(Float32, 4),
        moppBytes: DynArray(Uint8),
        surfaces: DynArray(Uint8)
      },
      SceneEdgeV6: {
        indices: FixedArray(Uint32, 2),
        triangles: DynArray(Uint32)
      },
      SceneGameSurfaceV6: {
        tokens: DynArray(Uint64)
      }
    },
    root: {
      paths: DynArray("ScenePathV6"),
      meshes: DynArray("SceneGameMeshV6"),
      surfaces: DynArray("SceneGameSurfaceV6")
    }
  }
]