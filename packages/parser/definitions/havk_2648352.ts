import { FixedArray, Float32, Uint16, DynArray, Uint8, Uint64, Uint32 } from "./types";

module.exports = [
  {
    chunkName: "havk",
    name: "PackMapCollideV6",
    version: 6,
    definitions: {
      PackMapCollideMoppCodeV6: {
        cookedData: DynArray(Uint8)
      },
      PackMapCollideMeshV6: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        sizes: DynArray("PackMapCollideMeshSizeV6")
      },
      PackMapCollideMeshSizeV6: {
        scale: Float32,
        moppCodeIndex: Uint32
      },
      PackMapCollideGeometryV6: {
        meshRefs: DynArray("PackMapCollideMeshRefV6")
      },
      PackMapCollideMeshRefV6: {
        sequence: Uint64,
        meshIndex: Uint32
      },
      PackMapCollideModelPropV6: {
        token: Uint64,
        sequence: Uint64,
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelZoneV6: {
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      moppCodes: DynArray("PackMapCollideMoppCodeV6"),
      meshes: DynArray("PackMapCollideMeshV6"),
      geometries: DynArray("PackMapCollideGeometryV6"),
      propModels: DynArray("PackMapCollideModelPropV6"),
      zoneModels: DynArray("PackMapCollideModelZoneV6")
    }
  },
  {
    chunkName: "havk",
    name: "PackMapCollideV7",
    version: 7,
    definitions: {
      PackMapCollideMoppCodeV7: {
        cookedData: DynArray(Uint8)
      },
      PackMapCollideMeshV7: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        sizes: DynArray("PackMapCollideMeshSizeV7")
      },
      PackMapCollideMeshSizeV7: {
        scale: Float32,
        moppCodeIndex: Uint32
      },
      PackMapCollideGeometryV7: {
        meshRefs: DynArray("PackMapCollideMeshRefV7")
      },
      PackMapCollideMeshRefV7: {
        sequence: Uint64,
        meshIndex: Uint32
      },
      PackMapCollideModelPropV7: {
        token: Uint64,
        sequence: Uint64,
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelZoneV7: {
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideAiChunkV7: {
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      moppCodes: DynArray("PackMapCollideMoppCodeV7"),
      meshes: DynArray("PackMapCollideMeshV7"),
      geometries: DynArray("PackMapCollideGeometryV7"),
      propModels: DynArray("PackMapCollideModelPropV7"),
      zoneModels: DynArray("PackMapCollideModelZoneV7"),
      aiBoundaryMin: FixedArray(Float32, 3),
      aiBoundaryMax: FixedArray(Float32, 3),
      aiChunkDims: FixedArray(Uint32, 2),
      aiChunks: DynArray("PackMapCollideAiChunkV7")
    }
  },
  {
    chunkName: "havk",
    name: "PackMapCollideV8",
    version: 8,
    definitions: {
      PackMapCollideMeshV8: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        moppCodeScale: Float32,
        moppCodeData: DynArray(Uint8)
      },
      PackMapCollideGeometryV8: {
        meshRefs: DynArray("PackMapCollideMeshRefV8")
      },
      PackMapCollideMeshRefV8: {
        sequence: Uint64,
        meshIndex: Uint32
      },
      PackMapCollideModelPropV8: {
        token: Uint64,
        sequence: Uint64,
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelZoneV8: {
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideAiChunkV8: {
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      meshes: DynArray("PackMapCollideMeshV8"),
      geometries: DynArray("PackMapCollideGeometryV8"),
      propModels: DynArray("PackMapCollideModelPropV8"),
      zoneModels: DynArray("PackMapCollideModelZoneV8"),
      aiBoundaryMin: FixedArray(Float32, 3),
      aiBoundaryMax: FixedArray(Float32, 3),
      aiChunkDims: FixedArray(Uint32, 2),
      aiChunks: DynArray("PackMapCollideAiChunkV8")
    }
  },
  {
    chunkName: "havk",
    name: "PackMapCollideV9",
    version: 9,
    definitions: {
      PackMapCollideMeshV9: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        moppCodeScale: Float32,
        moppCodeData: DynArray(Uint8)
      },
      PackMapCollideGeometryV9: {
        meshRefs: DynArray("PackMapCollideMeshRefV9")
      },
      PackMapCollideMeshRefV9: {
        sequence: Uint64,
        meshIndex: Uint32
      },
      PackMapCollideModelObsV9: {
        geometryIndex: Uint32
      },
      PackMapCollideModelPropV9: {
        token: Uint64,
        sequence: Uint64,
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelZoneV9: {
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideAiChunkV9: {
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      meshes: DynArray("PackMapCollideMeshV9"),
      geometries: DynArray("PackMapCollideGeometryV9"),
      obsModels: DynArray("PackMapCollideModelObsV9"),
      propModels: DynArray("PackMapCollideModelPropV9"),
      zoneModels: DynArray("PackMapCollideModelZoneV9"),
      aiBoundaryMin: FixedArray(Float32, 3),
      aiBoundaryMax: FixedArray(Float32, 3),
      aiChunkDims: FixedArray(Uint32, 2),
      aiChunks: DynArray("PackMapCollideAiChunkV9")
    }
  },
  {
    chunkName: "havk",
    name: "PackMapCollideV10",
    version: 10,
    definitions: {
      PackMapCollideMeshV10: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        moppCodeScale: Float32,
        moppCodeData: DynArray(Uint8)
      },
      PackMapCollideGeometryV10: {
        meshRefs: DynArray("PackMapCollideMeshRefV10")
      },
      PackMapCollideMeshRefV10: {
        sequence: Uint64,
        meshIndex: Uint32
      },
      PackMapCollideModelObsV10: {
        geometryIndex: Uint32
      },
      PackMapCollideModelPropV10: {
        token: Uint64,
        sequence: Uint64,
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelZoneV10: {
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideAiChunkV10: {
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8),
        queryMediatorMoppData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      meshes: DynArray("PackMapCollideMeshV10"),
      geometries: DynArray("PackMapCollideGeometryV10"),
      obsModels: DynArray("PackMapCollideModelObsV10"),
      propModels: DynArray("PackMapCollideModelPropV10"),
      zoneModels: DynArray("PackMapCollideModelZoneV10"),
      aiBoundaryMin: FixedArray(Float32, 3),
      aiBoundaryMax: FixedArray(Float32, 3),
      aiChunkDims: FixedArray(Uint32, 2),
      aiChunks: DynArray("PackMapCollideAiChunkV10")
    }
  },
  {
    chunkName: "havk",
    name: "PackMapCollideV11",
    version: 11,
    definitions: {
      PackMapCollideMeshV11: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        moppCodeScale: Float32,
        moppCodeData: DynArray(Uint8)
      },
      PackMapCollideGeometryV11: {
        quantizedExtents: Uint8,
        meshRefs: DynArray("PackMapCollideMeshRefV11")
      },
      PackMapCollideMeshRefV11: {
        sequence: Uint64,
        meshIndex: Uint32
      },
      PackMapCollideModelObsV11: {
        translate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelPropV11: {
        token: Uint64,
        sequence: Uint64,
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelZoneV11: {
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideAiChunkV11: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8),
        queryMediatorMoppData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      meshes: DynArray("PackMapCollideMeshV11"),
      geometries: DynArray("PackMapCollideGeometryV11"),
      obsModels: DynArray("PackMapCollideModelObsV11"),
      propModels: DynArray("PackMapCollideModelPropV11"),
      zoneModels: DynArray("PackMapCollideModelZoneV11"),
      aiChunkDims: FixedArray(Uint32, 2),
      aiChunks: DynArray("PackMapCollideAiChunkV11")
    }
  },
  {
    chunkName: "havk",
    name: "PackMapCollideV12",
    version: 12,
    definitions: {
      PackMapCollideMeshV12: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        surfaces: DynArray(Uint16),
        moppCodeScale: Float32,
        moppCodeData: DynArray(Uint8)
      },
      PackMapCollideGeometryV12: {
        quantizedExtents: Uint8,
        meshRefs: DynArray("PackMapCollideMeshRefV12")
      },
      PackMapCollideMeshRefV12: {
        sequence: Uint64,
        meshIndex: Uint32
      },
      PackMapCollideModelObsV12: {
        translate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelPropV12: {
        token: Uint64,
        sequence: Uint64,
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelZoneV12: {
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideAiChunkV12: {
        boundsMin: FixedArray(Float32, 3),
        boundsMax: FixedArray(Float32, 3),
        navMeshData: DynArray(Uint8),
        coarseGraphData: DynArray(Uint8),
        queryMediatorMoppData: DynArray(Uint8)
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      meshes: DynArray("PackMapCollideMeshV12"),
      geometries: DynArray("PackMapCollideGeometryV12"),
      obsModels: DynArray("PackMapCollideModelObsV12"),
      propModels: DynArray("PackMapCollideModelPropV12"),
      zoneModels: DynArray("PackMapCollideModelZoneV12"),
      aiChunkDims: FixedArray(Uint32, 2),
      aiChunks: DynArray("PackMapCollideAiChunkV12")
    }
  },
  {
    chunkName: "havk",
    name: "PackMapCollideV13",
    version: 13,
    definitions: {
      PackMapCollideCollisionV13: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        surfaces: DynArray(Uint16),
        moppCodeData: DynArray(Uint8)
      },
      PackMapCollideBlockerV13: {
        vertices: DynArray(FixedArray(Float32, 3))
      },
      PackMapCollideAnimationV13: {
        sequence: Uint64,
        collisionIndices: DynArray(Uint32),
        blockerIndices: DynArray(Uint32)
      },
      PackMapCollideGeometryV13: {
        quantizedExtents: Uint8,
        animations: DynArray(Uint32)
      },
      PackMapCollideModelObsV13: {
        translate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelPropV13: {
        token: Uint64,
        sequence: Uint64,
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelZoneV13: {
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      collisions: DynArray("PackMapCollideCollisionV13"),
      blockers: DynArray("PackMapCollideBlockerV13"),
      animations: DynArray("PackMapCollideAnimationV13"),
      geometries: DynArray("PackMapCollideGeometryV13"),
      obsModels: DynArray("PackMapCollideModelObsV13"),
      propModels: DynArray("PackMapCollideModelPropV13"),
      zoneModels: DynArray("PackMapCollideModelZoneV13")
    }
  },
  {
    chunkName: "havk",
    name: "PackMapCollideV14",
    version: 14,
    definitions: {
      PackMapCollideCollisionV14: {
        indices: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 3)),
        surfaces: DynArray(Uint16),
        moppCodeData: "PackMoppType"
      },
      PackMoppType: {
        moppData: DynArray(Uint8)
      },
      PackMapCollideBlockerV14: {
        vertices: DynArray(FixedArray(Float32, 3))
      },
      PackMapCollideNavMeshV14: {
        navMesh: DynArray(Uint8),
        graph: DynArray(Uint8),
        mediator: DynArray(Uint8)
      },
      PackMapCollideAnimationV14: {
        sequence: Uint64,
        collisionIndices: DynArray(Uint32),
        blockerIndices: DynArray(Uint32)
      },
      PackMapCollideGeometryV14: {
        quantizedExtents: Uint8,
        animations: DynArray(Uint32),
        navMeshIndex: Uint16
      },
      PackMapCollideModelObsV14: {
        translate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelPropV14: {
        token: Uint64,
        sequence: Uint64,
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      },
      PackMapCollideModelZoneV14: {
        scale: Float32,
        translate: FixedArray(Float32, 3),
        rotate: FixedArray(Float32, 3),
        geometryIndex: Uint32
      }
    },
    root: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      collisions: DynArray("PackMapCollideCollisionV14"),
      blockers: DynArray("PackMapCollideBlockerV14"),
      navMeshes: DynArray("PackMapCollideNavMeshV14"),
      animations: DynArray("PackMapCollideAnimationV14"),
      geometries: DynArray("PackMapCollideGeometryV14"),
      obsModels: DynArray("PackMapCollideModelObsV14"),
      propModels: DynArray("PackMapCollideModelPropV14"),
      zoneModels: DynArray("PackMapCollideModelZoneV14")
    }
  }
]