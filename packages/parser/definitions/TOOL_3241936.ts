import { Uint64, CString, DynArray, Pointer, Fileref, String16, Uint8, Uint32, Filename, Float32, FixedArray } from "./types";

module.exports = [
  {
    chunkName: "TOOL",
    name: "ModelFileToolV0",
    version: 0,
    definitions: {
      ModelToolCloudV0: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString),
        obstacleNames: DynArray(CString)
      }
    },
    root: {
      materialNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV0")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV1",
    version: 1,
    definitions: {
      ModelToolCloudV1: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString),
        obstacleNames: DynArray(CString)
      },
      ModelToolMotionV1: {
        sequence: Uint64,
        keys: DynArray(Float32),
        values: DynArray(FixedArray(Float32, 3))
      }
    },
    root: {
      materialNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV1"),
      motions: DynArray("ModelToolMotionV1")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV2",
    version: 2,
    definitions: {
      ModelToolCloudV2: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString),
        obstacleNames: DynArray(CString)
      },
      ModelToolMotionV2: {
        sequence: Uint64,
        keys: DynArray(Float32),
        values: DynArray(FixedArray(Float32, 3))
      },
      ModelToolBlitTextureV2: {
        blitId: Uint64,
        filename: Filename
      }
    },
    root: {
      materialNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV2"),
      motions: DynArray("ModelToolMotionV2"),
      blitTextures: DynArray("ModelToolBlitTextureV2")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV3",
    version: 3,
    definitions: {
      ModelToolCloudV3: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString),
        obstacleNames: DynArray(CString)
      },
      ModelToolMotionV3: {
        sequence: Uint64,
        keys: DynArray(Float32),
        values: DynArray(FixedArray(Float32, 3))
      },
      ModelToolBlitTextureV3: {
        blitId: Uint64,
        filename: Filename
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV3"),
      motions: DynArray("ModelToolMotionV3"),
      blitTextures: DynArray("ModelToolBlitTextureV3")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV4",
    version: 4,
    definitions: {
      ModelToolCloudV4: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString),
        obstacleNames: DynArray(CString)
      },
      ModelToolMotionV4: {
        sequence: Uint64,
        keys: DynArray(Float32),
        values: DynArray(FixedArray(Float32, 3))
      },
      ModelToolBlitTextureV4: {
        blitId: Uint64,
        filename: Filename
      },
      ModelToolStreakV4: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV4"),
      motions: DynArray("ModelToolMotionV4"),
      blitTextures: DynArray("ModelToolBlitTextureV4"),
      streakData: Pointer("ModelToolStreakV4")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV5",
    version: 5,
    definitions: {
      ModelToolCloudV5: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolMotionV5: {
        sequence: Uint64,
        keys: DynArray(Float32),
        values: DynArray(FixedArray(Float32, 3))
      },
      ModelToolBlitTextureV5: {
        blitId: Uint64,
        filename: Filename
      },
      ModelToolStreakV5: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV5"),
      motions: DynArray("ModelToolMotionV5"),
      blitTextures: DynArray("ModelToolBlitTextureV5"),
      streakData: Pointer("ModelToolStreakV5")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV6",
    version: 6,
    definitions: {
      ModelToolCloudV6: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV6: {
        blitId: Uint64,
        filename: Filename
      },
      ModelToolStreakV6: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV6"),
      blitTextures: DynArray("ModelToolBlitTextureV6"),
      streakData: Pointer("ModelToolStreakV6")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV7",
    version: 7,
    definitions: {
      ModelToolCloudV7: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV7: {
        blitId: Uint64,
        filename: Filename
      },
      ModelToolStreakV7: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV7: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV7"),
      blitTextures: DynArray("ModelToolBlitTextureV7"),
      streakData: Pointer("ModelToolStreakV7"),
      lightningData: Pointer("ModelToolLightningV7")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV8",
    version: 8,
    definitions: {
      ModelToolCloudV8: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV8: {
        blitId: Uint64,
        filename: Filename
      },
      ModelToolStreakV8: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV8: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV8"),
      blitTextures: DynArray("ModelToolBlitTextureV8"),
      streakData: Pointer("ModelToolStreakV8"),
      lightningData: Pointer("ModelToolLightningV8"),
      permutationTokens: DynArray(Uint64)
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV9",
    version: 9,
    definitions: {
      ModelToolCloudV9: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV9: {
        blitId: Uint64,
        filename: Filename
      },
      ModelToolStreakV9: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV9: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      },
      ModelToolPropertyDataV9: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV9"),
      blitTextures: DynArray("ModelToolBlitTextureV9"),
      streakData: Pointer("ModelToolStreakV9"),
      lightningData: Pointer("ModelToolLightningV9"),
      permutationTokens: DynArray(Uint64),
      properties: DynArray("ModelToolPropertyDataV9")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV10",
    version: 10,
    definitions: {
      ModelToolCloudV10: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV10: {
        blitId: Uint64,
        filename: Filename
      },
      ModelToolStreakV10: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV10: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV10"),
      blitTextures: DynArray("ModelToolBlitTextureV10"),
      streakData: Pointer("ModelToolStreakV10"),
      lightningData: Pointer("ModelToolLightningV10"),
      permutationTokens: DynArray(Uint64)
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV11",
    version: 11,
    definitions: {
      ModelToolCloudV11: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV11: {
        blitId: Uint64,
        filename: Fileref
      },
      ModelToolStreakV11: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV11: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV11"),
      blitTextures: DynArray("ModelToolBlitTextureV11"),
      streakData: Pointer("ModelToolStreakV11"),
      lightningData: Pointer("ModelToolLightningV11"),
      permutationTokens: DynArray(Uint64)
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV12",
    version: 12,
    definitions: {
      ModelToolCloudV12: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV12: {
        blitId: Uint64,
        filename: Fileref
      },
      ModelToolStreakV12: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV12: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      },
      ModelToolAnimationV12: {
        name: Uint64,
        filename: String16,
        data: "PackGrannyAnimationTypeV0"
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV12"),
      blitTextures: DynArray("ModelToolBlitTextureV12"),
      streakData: Pointer("ModelToolStreakV12"),
      lightningData: Pointer("ModelToolLightningV12"),
      permutationTokens: DynArray(Uint64),
      highLodAnimations: DynArray("ModelToolAnimationV12")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV13",
    version: 13,
    definitions: {
      ModelToolCloudV13: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV13: {
        blitId: Uint64,
        filename: Fileref
      },
      ModelToolStreakV13: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV13: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      },
      ModelToolAnimationV13: {
        name: Uint64,
        filename: String16,
        data: "PackGrannyAnimationTypeV0"
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV13"),
      blitTextures: DynArray("ModelToolBlitTextureV13"),
      streakData: Pointer("ModelToolStreakV13"),
      lightningData: Pointer("ModelToolLightningV13"),
      permutationTokens: DynArray(Uint64),
      highLodAnimations: DynArray("ModelToolAnimationV13")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV14",
    version: 14,
    definitions: {
      ModelToolCloudV14: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV14: {
        blitId: Uint64,
        filename: Fileref
      },
      ModelToolStreakV14: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV14: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      },
      ModelToolAnimationV14: {
        name: Uint64,
        filename: String16,
        data: "PackGrannyAnimationTypeV0"
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelSequenceCompressionInfoV14: {
        animToken: Uint64,
        cmpGroup: String16,
        cmpType: String16
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV14"),
      blitTextures: DynArray("ModelToolBlitTextureV14"),
      streakData: Pointer("ModelToolStreakV14"),
      lightningData: Pointer("ModelToolLightningV14"),
      permutationTokens: DynArray(Uint64),
      highLodAnimations: DynArray("ModelToolAnimationV14"),
      compressionInfos: DynArray("ModelSequenceCompressionInfoV14")
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV15",
    version: 15,
    definitions: {
      ModelToolCloudV15: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV15: {
        blitId: Uint64,
        filename: Fileref
      },
      ModelToolStreakV15: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV15: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      },
      ModelToolAnimationV15: {
        name: Uint64,
        filename: String16,
        data: "PackGrannyAnimationTypeV0"
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelSequenceCompressionInfoV15: {
        animToken: Uint64,
        cmpGroup: String16,
        cmpType: String16
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV15"),
      blitTextures: DynArray("ModelToolBlitTextureV15"),
      streakData: Pointer("ModelToolStreakV15"),
      lightningData: Pointer("ModelToolLightningV15"),
      permutationTokens: DynArray(Uint64),
      highLodAnimations: DynArray("ModelToolAnimationV15"),
      compressionInfos: DynArray("ModelSequenceCompressionInfoV15"),
      region: CString
    }
  },
  {
    chunkName: "TOOL",
    name: "ModelFileToolV16",
    version: 16,
    definitions: {
      ModelToolCloudV16: {
        cloudNames: DynArray(CString),
        emitterNames: DynArray(CString)
      },
      ModelToolBlitTextureV16: {
        blitId: Uint64,
        filename: Fileref
      },
      ModelToolStreakV16: {
        streakNames: DynArray(CString),
        anchorNames: DynArray(CString)
      },
      ModelToolLightningV16: {
        systemNames: DynArray(CString),
        boltNames: DynArray(CString),
        nodeNames: DynArray(CString)
      },
      ModelToolAnimationV16: {
        name: Uint64,
        filename: String16,
        data: "PackGrannyAnimationTypeV1"
      },
      PackGrannyAnimationTypeV1: {
        animation: DynArray(Uint8),
        pointers: DynArray(Uint32)
      },
      ModelSequenceCompressionInfoV16: {
        animToken: Uint64,
        cmpGroup: String16,
        cmpType: String16
      }
    },
    root: {
      modelType: Uint64,
      materialNames: DynArray(CString),
      obstacleNames: DynArray(CString),
      cloudData: Pointer("ModelToolCloudV16"),
      blitTextures: DynArray("ModelToolBlitTextureV16"),
      streakData: Pointer("ModelToolStreakV16"),
      lightningData: Pointer("ModelToolLightningV16"),
      permutationTokens: DynArray(Uint64),
      highLodAnimations: DynArray("ModelToolAnimationV16"),
      compressionInfos: DynArray("ModelSequenceCompressionInfoV16"),
      region: CString
    }
  }
]