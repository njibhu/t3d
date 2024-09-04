import { Uint64, RefString, DynArray, Pointer, Fileref, RefString16, Uint8, Uint32, Filename, Float32, FixedArray } from "../src/types";

const V0 = {
  chunkName: "TOOL",
  name: "ModelFileToolV0",
  version: 0,
  definitions: {
    ModelToolCloudV0: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString()),
      obstacleNames: DynArray(RefString())
    }
  },
  root: {
    materialNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV0")
  }
};

const V1 = {
  chunkName: "TOOL",
  name: "ModelFileToolV1",
  version: 1,
  definitions: {
    ModelToolCloudV1: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString()),
      obstacleNames: DynArray(RefString())
    },
    ModelToolMotionV1: {
      sequence: Uint64,
      keys: DynArray(Float32),
      values: DynArray(FixedArray(Float32, 3))
    }
  },
  root: {
    materialNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV1"),
    motions: DynArray("ModelToolMotionV1")
  }
};

const V2 = {
  chunkName: "TOOL",
  name: "ModelFileToolV2",
  version: 2,
  definitions: {
    ModelToolCloudV2: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString()),
      obstacleNames: DynArray(RefString())
    },
    ModelToolMotionV2: {
      sequence: Uint64,
      keys: DynArray(Float32),
      values: DynArray(FixedArray(Float32, 3))
    },
    ModelToolBlitTextureV2: {
      blitId: Uint64,
      filename: Filename()
    }
  },
  root: {
    materialNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV2"),
    motions: DynArray("ModelToolMotionV2"),
    blitTextures: DynArray("ModelToolBlitTextureV2")
  }
};

const V3 = {
  chunkName: "TOOL",
  name: "ModelFileToolV3",
  version: 3,
  definitions: {
    ModelToolCloudV3: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString()),
      obstacleNames: DynArray(RefString())
    },
    ModelToolMotionV3: {
      sequence: Uint64,
      keys: DynArray(Float32),
      values: DynArray(FixedArray(Float32, 3))
    },
    ModelToolBlitTextureV3: {
      blitId: Uint64,
      filename: Filename()
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV3"),
    motions: DynArray("ModelToolMotionV3"),
    blitTextures: DynArray("ModelToolBlitTextureV3")
  }
};

const V4 = {
  chunkName: "TOOL",
  name: "ModelFileToolV4",
  version: 4,
  definitions: {
    ModelToolCloudV4: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString()),
      obstacleNames: DynArray(RefString())
    },
    ModelToolMotionV4: {
      sequence: Uint64,
      keys: DynArray(Float32),
      values: DynArray(FixedArray(Float32, 3))
    },
    ModelToolBlitTextureV4: {
      blitId: Uint64,
      filename: Filename()
    },
    ModelToolStreakV4: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV4"),
    motions: DynArray("ModelToolMotionV4"),
    blitTextures: DynArray("ModelToolBlitTextureV4"),
    streakData: Pointer("ModelToolStreakV4")
  }
};

const V5 = {
  chunkName: "TOOL",
  name: "ModelFileToolV5",
  version: 5,
  definitions: {
    ModelToolCloudV5: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolMotionV5: {
      sequence: Uint64,
      keys: DynArray(Float32),
      values: DynArray(FixedArray(Float32, 3))
    },
    ModelToolBlitTextureV5: {
      blitId: Uint64,
      filename: Filename()
    },
    ModelToolStreakV5: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV5"),
    motions: DynArray("ModelToolMotionV5"),
    blitTextures: DynArray("ModelToolBlitTextureV5"),
    streakData: Pointer("ModelToolStreakV5")
  }
};

const V6 = {
  chunkName: "TOOL",
  name: "ModelFileToolV6",
  version: 6,
  definitions: {
    ModelToolCloudV6: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV6: {
      blitId: Uint64,
      filename: Filename()
    },
    ModelToolStreakV6: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV6"),
    blitTextures: DynArray("ModelToolBlitTextureV6"),
    streakData: Pointer("ModelToolStreakV6")
  }
};

const V7 = {
  chunkName: "TOOL",
  name: "ModelFileToolV7",
  version: 7,
  definitions: {
    ModelToolCloudV7: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV7: {
      blitId: Uint64,
      filename: Filename()
    },
    ModelToolStreakV7: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV7: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV7"),
    blitTextures: DynArray("ModelToolBlitTextureV7"),
    streakData: Pointer("ModelToolStreakV7"),
    lightningData: Pointer("ModelToolLightningV7")
  }
};

const V8 = {
  chunkName: "TOOL",
  name: "ModelFileToolV8",
  version: 8,
  definitions: {
    ModelToolCloudV8: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV8: {
      blitId: Uint64,
      filename: Filename()
    },
    ModelToolStreakV8: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV8: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV8"),
    blitTextures: DynArray("ModelToolBlitTextureV8"),
    streakData: Pointer("ModelToolStreakV8"),
    lightningData: Pointer("ModelToolLightningV8"),
    permutationTokens: DynArray(Uint64)
  }
};

const V9 = {
  chunkName: "TOOL",
  name: "ModelFileToolV9",
  version: 9,
  definitions: {
    ModelToolCloudV9: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV9: {
      blitId: Uint64,
      filename: Filename()
    },
    ModelToolStreakV9: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV9: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    },
    ModelToolPropertyDataV9: {
      id: Uint64,
      type: Uint32,
      mergeIndex: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV9"),
    blitTextures: DynArray("ModelToolBlitTextureV9"),
    streakData: Pointer("ModelToolStreakV9"),
    lightningData: Pointer("ModelToolLightningV9"),
    permutationTokens: DynArray(Uint64),
    properties: DynArray("ModelToolPropertyDataV9")
  }
};

const V10 = {
  chunkName: "TOOL",
  name: "ModelFileToolV10",
  version: 10,
  definitions: {
    ModelToolCloudV10: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV10: {
      blitId: Uint64,
      filename: Filename()
    },
    ModelToolStreakV10: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV10: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV10"),
    blitTextures: DynArray("ModelToolBlitTextureV10"),
    streakData: Pointer("ModelToolStreakV10"),
    lightningData: Pointer("ModelToolLightningV10"),
    permutationTokens: DynArray(Uint64)
  }
};

const V11 = {
  chunkName: "TOOL",
  name: "ModelFileToolV11",
  version: 11,
  definitions: {
    ModelToolCloudV11: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV11: {
      blitId: Uint64,
      filename: Fileref()
    },
    ModelToolStreakV11: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV11: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV11"),
    blitTextures: DynArray("ModelToolBlitTextureV11"),
    streakData: Pointer("ModelToolStreakV11"),
    lightningData: Pointer("ModelToolLightningV11"),
    permutationTokens: DynArray(Uint64)
  }
};

const V12 = {
  chunkName: "TOOL",
  name: "ModelFileToolV12",
  version: 12,
  definitions: {
    ModelToolCloudV12: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV12: {
      blitId: Uint64,
      filename: Fileref()
    },
    ModelToolStreakV12: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV12: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    },
    ModelToolAnimationV12: {
      name: Uint64,
      filename: RefString16(),
      data: "PackGrannyAnimationTypeV0"
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV12"),
    blitTextures: DynArray("ModelToolBlitTextureV12"),
    streakData: Pointer("ModelToolStreakV12"),
    lightningData: Pointer("ModelToolLightningV12"),
    permutationTokens: DynArray(Uint64),
    highLodAnimations: DynArray("ModelToolAnimationV12")
  }
};

const V13 = {
  chunkName: "TOOL",
  name: "ModelFileToolV13",
  version: 13,
  definitions: {
    ModelToolCloudV13: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV13: {
      blitId: Uint64,
      filename: Fileref()
    },
    ModelToolStreakV13: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV13: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    },
    ModelToolAnimationV13: {
      name: Uint64,
      filename: RefString16(),
      data: "PackGrannyAnimationTypeV0"
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV13"),
    blitTextures: DynArray("ModelToolBlitTextureV13"),
    streakData: Pointer("ModelToolStreakV13"),
    lightningData: Pointer("ModelToolLightningV13"),
    permutationTokens: DynArray(Uint64),
    highLodAnimations: DynArray("ModelToolAnimationV13")
  }
};

const V14 = {
  chunkName: "TOOL",
  name: "ModelFileToolV14",
  version: 14,
  definitions: {
    ModelToolCloudV14: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV14: {
      blitId: Uint64,
      filename: Fileref()
    },
    ModelToolStreakV14: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV14: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    },
    ModelToolAnimationV14: {
      name: Uint64,
      filename: RefString16(),
      data: "PackGrannyAnimationTypeV0"
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelSequenceCompressionInfoV14: {
      animToken: Uint64,
      cmpGroup: RefString16(),
      cmpType: RefString16()
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV14"),
    blitTextures: DynArray("ModelToolBlitTextureV14"),
    streakData: Pointer("ModelToolStreakV14"),
    lightningData: Pointer("ModelToolLightningV14"),
    permutationTokens: DynArray(Uint64),
    highLodAnimations: DynArray("ModelToolAnimationV14"),
    compressionInfos: DynArray("ModelSequenceCompressionInfoV14")
  }
};

const V15 = {
  chunkName: "TOOL",
  name: "ModelFileToolV15",
  version: 15,
  definitions: {
    ModelToolCloudV15: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV15: {
      blitId: Uint64,
      filename: Fileref()
    },
    ModelToolStreakV15: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV15: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    },
    ModelToolAnimationV15: {
      name: Uint64,
      filename: RefString16(),
      data: "PackGrannyAnimationTypeV0"
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelSequenceCompressionInfoV15: {
      animToken: Uint64,
      cmpGroup: RefString16(),
      cmpType: RefString16()
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV15"),
    blitTextures: DynArray("ModelToolBlitTextureV15"),
    streakData: Pointer("ModelToolStreakV15"),
    lightningData: Pointer("ModelToolLightningV15"),
    permutationTokens: DynArray(Uint64),
    highLodAnimations: DynArray("ModelToolAnimationV15"),
    compressionInfos: DynArray("ModelSequenceCompressionInfoV15"),
    region: RefString()
  }
};

const V16 = {
  chunkName: "TOOL",
  name: "ModelFileToolV16",
  version: 16,
  definitions: {
    ModelToolCloudV16: {
      cloudNames: DynArray(RefString()),
      emitterNames: DynArray(RefString())
    },
    ModelToolBlitTextureV16: {
      blitId: Uint64,
      filename: Fileref()
    },
    ModelToolStreakV16: {
      streakNames: DynArray(RefString()),
      anchorNames: DynArray(RefString())
    },
    ModelToolLightningV16: {
      systemNames: DynArray(RefString()),
      boltNames: DynArray(RefString()),
      nodeNames: DynArray(RefString())
    },
    ModelToolAnimationV16: {
      name: Uint64,
      filename: RefString16(),
      data: "PackGrannyAnimationTypeV1"
    },
    PackGrannyAnimationTypeV1: {
      animation: DynArray(Uint8),
      pointers: DynArray(Uint32)
    },
    ModelSequenceCompressionInfoV16: {
      animToken: Uint64,
      cmpGroup: RefString16(),
      cmpType: RefString16()
    }
  },
  root: {
    modelType: Uint64,
    materialNames: DynArray(RefString()),
    obstacleNames: DynArray(RefString()),
    cloudData: Pointer("ModelToolCloudV16"),
    blitTextures: DynArray("ModelToolBlitTextureV16"),
    streakData: Pointer("ModelToolStreakV16"),
    lightningData: Pointer("ModelToolLightningV16"),
    permutationTokens: DynArray(Uint64),
    highLodAnimations: DynArray("ModelToolAnimationV16"),
    compressionInfos: DynArray("ModelSequenceCompressionInfoV16"),
    region: RefString()
  }
};

export const latest = V16;
export const definitions = { V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14, V15, V16 };
export const definitionArray = Object.values(definitions);