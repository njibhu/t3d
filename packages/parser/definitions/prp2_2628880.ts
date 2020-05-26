import { Filename, DynArray, Uint32, FixedArray, Float32, Uint64, Uint8, Uint16, String16 } from "../src/types";

module.exports = [
  {
    chunkName: "prp2",
    name: "PackMapPropV3",
    version: 3,
    definitions: {
      PackMapPropObjV3: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32,
        lod1: Uint16,
        lod2: Uint16,
        flags: Uint32
      },
      PackMapPropObjAnimSeqV3: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32,
        lod1: Uint16,
        lod2: Uint16,
        flags: Uint32,
        animSequence: Uint64
      },
      PackMapPropObjToolV3: {
        guid: Uint64,
        layerMask: Uint32
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV3"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV3"),
      propToolArray: DynArray("PackMapPropObjToolV3")
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV4",
    version: 4,
    definitions: {
      PackMapPropObjV4: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32,
        lod1: Uint16,
        lod2: Uint16,
        flags: Uint32,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV4: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32,
        lod1: Uint16,
        lod2: Uint16,
        flags: Uint32,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV4: {
        guid: Uint64,
        layerMask: Uint32
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV4"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV4"),
      propToolArray: DynArray("PackMapPropObjToolV4")
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV5",
    version: 5,
    definitions: {
      PackMapPropObjV5: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32,
        lod1: Uint16,
        lod2: Uint16,
        flags: Uint32,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV5: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32,
        lod1: Uint16,
        lod2: Uint16,
        flags: Uint32,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV5: {
        guid: Uint64,
        layerMask: Uint32,
        glomOrigin: FixedArray(Float32, 3),
        glomClipScale: FixedArray(Float32, 3),
        glomTargetId: Uint64,
        glomType: Uint8
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV5"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV5"),
      propToolArray: DynArray("PackMapPropObjToolV5")
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV6",
    version: 6,
    definitions: {
      PackMapPropObjV6: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV6: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV6: {
        guid: Uint64,
        layerMask: Uint32,
        glomOrigin: FixedArray(Float32, 3),
        glomClipScale: FixedArray(Float32, 3),
        glomTargetId: Uint64,
        glomType: Uint8
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV6"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV6"),
      propToolArray: DynArray("PackMapPropObjToolV6")
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV7",
    version: 7,
    definitions: {
      PackMapPropObjV7: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV7: {
        filename: Filename(),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV7: {
        guid: Uint64,
        layerMask: Uint32,
        glomOrigin: FixedArray(Float32, 3),
        glomClipScale: FixedArray(Float32, 3),
        glomTargetId: Uint64,
        glomType: Uint8
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV7"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV7"),
      propToolArray: DynArray("PackMapPropObjToolV7")
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV8",
    version: 8,
    definitions: {
      PackMapPropObjV8: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV8: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV8: {
        guid: Uint64,
        layerMask: Uint32,
        glomOrigin: FixedArray(Float32, 3),
        glomClipScale: FixedArray(Float32, 3),
        glomTargetId: Uint64,
        glomType: Uint8
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV8"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV8"),
      propToolArray: DynArray("PackMapPropObjToolV8")
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV9",
    version: 9,
    definitions: {
      PackMapPropObjV9: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV9: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV9: {
        guid: Uint64,
        layerMask: Uint32,
        glomOrigin: FixedArray(Float32, 3),
        glomClipScale: FixedArray(Float32, 3),
        glomTargetId: Uint64,
        glomType: Uint8
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV9"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV9"),
      propToolArray: DynArray("PackMapPropObjToolV9")
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV10",
    version: 10,
    definitions: {
      PackMapPropObjV10: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV10: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV10: {
        guid: Uint64,
        layerMask: Uint32,
        glomOrigin: FixedArray(Float32, 3),
        glomClipScale: FixedArray(Float32, 3),
        glomTargetId: Uint64,
        glomType: Uint8
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV10"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV10"),
      propToolArray: DynArray("PackMapPropObjToolV10")
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV11",
    version: 11,
    definitions: {
      PackMapPropObjV11: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV11: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV11: {
        guid: Uint64,
        layerMask: Uint32,
        glomOrigin: FixedArray(Float32, 3),
        glomClipScale: FixedArray(Float32, 3),
        glomTargetId: Uint64,
        glomType: Uint8
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV11"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV11"),
      propToolArray: DynArray("PackMapPropObjToolV11"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV12",
    version: 12,
    definitions: {
      PackMapPropObjV12: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV12: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV12: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8
      },
      PackMapPropObjMetaV12: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        byte: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV12: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV12"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV12"),
      propToolArray: DynArray("PackMapPropObjToolV12"),
      propMetaArray: DynArray("PackMapPropObjMetaV12"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV12"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV13",
    version: 13,
    definitions: {
      PackMapPropObjV13: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV13: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV13: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64)
      },
      PackMapPropObjMetaV13: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        byte: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV13: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64),
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV13"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV13"),
      propToolArray: DynArray("PackMapPropObjToolV13"),
      propMetaArray: DynArray("PackMapPropObjMetaV13"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV13"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV14",
    version: 14,
    definitions: {
      PackMapPropObjV14: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV14: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjToolV14: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64)
      },
      PackMapPropObjMetaV14: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV14: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64),
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV14"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV14"),
      propToolArray: DynArray("PackMapPropObjToolV14"),
      propMetaArray: DynArray("PackMapPropObjMetaV14"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV14"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV15",
    version: 15,
    definitions: {
      PackMapPropObjV15: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV15: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjInstanceV15: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        transforms: DynArray("PackMapPropTransformV15"),
        origGuidArray: DynArray(Uint64)
      },
      PackMapPropTransformV15: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackMapPropObjToolV15: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64)
      },
      PackMapPropObjMetaV15: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV15: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64),
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV15"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV15"),
      propInstanceArray: DynArray("PackMapPropObjInstanceV15"),
      propToolArray: DynArray("PackMapPropObjToolV15"),
      propMetaArray: DynArray("PackMapPropObjMetaV15"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV15"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV16",
    version: 16,
    definitions: {
      PackMapPropObjV16: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV16: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjInstanceV16: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        transforms: DynArray("PackMapPropTransformV16"),
        origGuidArray: DynArray(Uint64)
      },
      PackMapPropTransformV16: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackMapPropObjToolV16: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64)
      },
      PackMapPropObjMetaV16: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV16: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64),
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV16"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV16"),
      propInstanceArray: DynArray("PackMapPropObjInstanceV16"),
      propToolArray: DynArray("PackMapPropObjToolV16"),
      propMetaArray: DynArray("PackMapPropObjMetaV16"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV16"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV17",
    version: 17,
    definitions: {
      PackMapPropObjV17: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8
      },
      PackMapPropObjAnimSeqV17: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjInstanceV17: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        transforms: DynArray("PackMapPropTransformV17"),
        origGuidArray: DynArray(Uint64)
      },
      PackMapPropTransformV17: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackMapPropObjToolV17: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64)
      },
      PackMapPropObjMetaV17: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV17: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64),
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV17"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV17"),
      propInstanceArray: DynArray("PackMapPropObjInstanceV17"),
      propToolArray: DynArray("PackMapPropObjToolV17"),
      propMetaArray: DynArray("PackMapPropObjMetaV17"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV17"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV18",
    version: 18,
    definitions: {
      PackMapPropObjV18: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8
      },
      PackMapPropObjAnimSeqV18: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjInstanceV18: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        transforms: DynArray("PackMapPropTransformV18"),
        origGuidArray: DynArray(Uint64)
      },
      PackMapPropTransformV18: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackMapPropObjToolV18: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64)
      },
      PackMapPropObjMetaV18: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV18: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64),
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV18"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV18"),
      propInstanceArray: DynArray("PackMapPropObjInstanceV18"),
      propToolArray: DynArray("PackMapPropObjToolV18"),
      propMetaArray: DynArray("PackMapPropObjMetaV18"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV18"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV19",
    version: 19,
    definitions: {
      PackMapPropObjV19: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constTokens: DynArray(Uint32),
        constValues: DynArray(FixedArray(Float32, 4)),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8
      },
      PackMapPropObjAnimSeqV19: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constTokens: DynArray(Uint32),
        constValues: DynArray(FixedArray(Float32, 4)),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjInstanceV19: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constTokens: DynArray(Uint32),
        constValues: DynArray(FixedArray(Float32, 4)),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        transforms: DynArray("PackMapPropTransformV19"),
        origGuidArray: DynArray(Uint64)
      },
      PackMapPropTransformV19: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackMapPropObjToolV19: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64)
      },
      PackMapPropObjMetaV19: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constTokens: DynArray(Uint32),
        constValues: DynArray(FixedArray(Float32, 4)),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV19: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64),
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV19"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV19"),
      propInstanceArray: DynArray("PackMapPropObjInstanceV19"),
      propToolArray: DynArray("PackMapPropObjToolV19"),
      propMetaArray: DynArray("PackMapPropObjMetaV19"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV19"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV20",
    version: 20,
    definitions: {
      PackMapPropObjV20: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constants: DynArray("PackMapPropConstantV17"),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8
      },
      PackMapPropConstantV17: {
        token: Uint32,
        constant: FixedArray(Float32, 4),
        submodel: Uint32
      },
      PackMapPropObjAnimSeqV20: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constants: DynArray("PackMapPropConstantV17"),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjInstanceV20: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constants: DynArray("PackMapPropConstantV17"),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        transforms: DynArray("PackMapPropTransformV20"),
        origGuidArray: DynArray(Uint64)
      },
      PackMapPropTransformV20: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackMapPropObjToolV20: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64)
      },
      PackMapPropObjMetaV20: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constants: DynArray("PackMapPropConstantV17"),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV20: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64),
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV20"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV20"),
      propInstanceArray: DynArray("PackMapPropObjInstanceV20"),
      propToolArray: DynArray("PackMapPropObjToolV20"),
      propMetaArray: DynArray("PackMapPropObjMetaV20"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV20"),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  },
  {
    chunkName: "prp2",
    name: "PackMapPropV21",
    version: 21,
    definitions: {
      PackMapPropObjV21: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constants: DynArray("PackMapPropConstantV18"),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        reserved: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8
      },
      PackMapPropConstantV18: {
        token: Uint32,
        constant: FixedArray(Float32, 4),
        submodel: Uint32
      },
      PackMapPropObjAnimSeqV21: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constants: DynArray("PackMapPropConstantV18"),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        reserved: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        animSequence: Uint64
      },
      PackMapPropObjInstanceV21: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constants: DynArray("PackMapPropConstantV18"),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        reserved: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        transforms: DynArray("PackMapPropTransformV21"),
        origGuidArray: DynArray(Uint64)
      },
      PackMapPropTransformV21: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackMapPropObjToolV21: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64)
      },
      PackMapPropObjMetaV21: {
        filename: Filename(),
        blitTextures: DynArray(Filename()),
        constants: DynArray("PackMapPropConstantV18"),
        guid: Uint64,
        permutation: Uint64,
        bounds: FixedArray(Float32, 4),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 4),
        scale: Float32,
        lod1: Float32,
        lod2: Float32,
        flags: Uint32,
        reserved: Uint32,
        broadId: Uint16,
        bucketId: Uint16,
        byte: Uint8,
        sortLayer: Uint8,
        layerMask: Uint32,
        glomType: Uint8,
        parent: Uint64,
        glomOrigin: FixedArray(Float32, 3)
      },
      PackMapPropObjVolumeV21: {
        guid: Uint64,
        layerMask: Uint32,
        glomType: Uint8,
        children: DynArray(Uint64),
        glomClipScale: FixedArray(Float32, 3),
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        scale: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      propArray: DynArray("PackMapPropObjV21"),
      propAnimArray: DynArray("PackMapPropObjAnimSeqV21"),
      propInstanceArray: DynArray("PackMapPropObjInstanceV21"),
      propToolArray: DynArray("PackMapPropObjToolV21"),
      propMetaArray: DynArray("PackMapPropObjMetaV21"),
      propVolumeArray: DynArray("PackMapPropObjVolumeV21"),
      reserved: String16(),
      broadPhase: "PackBroadphaseType",
      nextBroadId: Uint32
    }
  }
]