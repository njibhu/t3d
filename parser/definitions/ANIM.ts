import { Uint64, Uint8, DynArray, Uint32, Filename, Pointer, Float32, FixedArray, Uint16, RefArray } from "../src/types";

const V0 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationV0",
  version: 0,
  definitions: {
    ModelAnimationDataV8: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV8"),
      uvAnimData: DynArray("ModelUVAnimationV0")
    },
    ModelVisTrackDataV8: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV0: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelUVTransformV0")
    },
    ModelUVTransformV0: {
      type: Uint8,
      vectorTrackIndex: Uint32
    },
    ModelCompoundAnimationDataV0: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV8: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV8"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV0"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV8")
  }
};

const V1 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationV1",
  version: 1,
  definitions: {
    ModelAnimationDataV9: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV9"),
      uvAnimData: DynArray("ModelUVAnimationV1"),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64)
    },
    ModelVisTrackDataV9: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV1: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelUVTransformV1")
    },
    ModelUVTransformV1: {
      type: Uint8,
      vectorTrackIndex: Uint32
    },
    ModelCompoundAnimationDataV1: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV9: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV9"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV1"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV9")
  }
};

const V2 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV2",
  version: 2,
  definitions: {
    ModelAnimationDataV10: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV10"),
      uvAnimData: DynArray("ModelUVAnimationV2"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64)
    },
    ModelVisTrackDataV10: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV2: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelUVTransformV2")
    },
    ModelUVTransformV2: {
      type: Uint8,
      vectorTrackIndex: Uint32
    },
    ModelCompoundAnimationDataV2: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV10: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV10"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV2"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV10")
  }
};

const V3 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV3",
  version: 3,
  definitions: {
    ModelAnimationDataV11: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV11"),
      uvAnimData: DynArray("ModelUVAnimationV3"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV3")
    },
    ModelVisTrackDataV11: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV3: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelTrackTypeDataV3")
    },
    ModelTrackTypeDataV3: {
      type: Uint8,
      vectorTrackIndex: Uint32
    },
    ModelLightAnimationV3: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV3")
    },
    ModelCompoundAnimationDataV3: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV11: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV11"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV3"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV11")
  }
};

const V4 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV4",
  version: 4,
  definitions: {
    ModelAnimationDataV12: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV12"),
      uvAnimData: DynArray("ModelUVAnimationV4"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV4"),
      isAdditive: Uint32
    },
    ModelVisTrackDataV12: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV4: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelTrackTypeDataV4")
    },
    ModelTrackTypeDataV4: {
      type: Uint8,
      vectorTrackIndex: Uint32
    },
    ModelLightAnimationV4: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV4")
    },
    ModelCompoundAnimationDataV4: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV12: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV12"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV4"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV12")
  }
};

const V5 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV5",
  version: 5,
  definitions: {
    ModelAnimationDataV13: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV13"),
      uvAnimData: DynArray("ModelUVAnimationV5"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV5"),
      isAdditive: Uint32
    },
    ModelVisTrackDataV13: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV5: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelTrackTypeDataV5")
    },
    ModelTrackTypeDataV5: {
      type: Uint8,
      vectorTrackIndex: Uint32
    },
    ModelLightAnimationV5: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV5")
    },
    ModelCompoundAnimationDataV5: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV13: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV13"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV5"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV13")
  }
};

const V6 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV6",
  version: 6,
  definitions: {
    ModelAnimationDataV14: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV14"),
      uvAnimData: DynArray("ModelUVAnimationV6"),
      cloudAnim: DynArray("ModelCloudAnimV6"),
      matConstAnim: DynArray("ModelMatConstAnimV6"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV6"),
      isAdditive: Uint32
    },
    ModelVisTrackDataV14: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV6: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelTrackTypeDataV6")
    },
    ModelTrackTypeDataV6: {
      type: Uint8,
      vectorTrackIndex: Uint32
    },
    ModelCloudAnimV6: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV6")
    },
    ModelMatConstAnimV6: {
      matIndex: Uint32,
      constToken: Uint32,
      vectorTrackIndex: Uint32
    },
    ModelLightAnimationV6: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV6")
    },
    ModelCompoundAnimationDataV6: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV14: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV14"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV6"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV14")
  }
};

const V7 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV7",
  version: 7,
  definitions: {
    ModelAnimationDataV15: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV15"),
      uvAnimData: DynArray("ModelUVAnimationV7"),
      cloudAnim: DynArray("ModelCloudAnimV7"),
      matConstAnim: DynArray("ModelMatConstAnimV7"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV7"),
      isAdditive: Uint32
    },
    ModelVisTrackDataV15: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV7: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelTrackTypeDataV7")
    },
    ModelTrackTypeDataV7: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32
    },
    ModelCloudAnimV7: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV7")
    },
    ModelMatConstAnimV7: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32
    },
    ModelLightAnimationV7: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV7")
    },
    ModelCompoundAnimationDataV7: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV15: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV15"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV7"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV15")
  }
};

const V8 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV8",
  version: 8,
  definitions: {
    ModelAnimationDataV16: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV16"),
      uvAnimData: DynArray("ModelUVAnimationV8"),
      cloudAnim: DynArray("ModelCloudAnimV8"),
      matConstAnim: DynArray("ModelMatConstAnimV8"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV8"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3)
    },
    ModelVisTrackDataV16: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV8: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelTrackTypeDataV8")
    },
    ModelTrackTypeDataV8: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32
    },
    ModelCloudAnimV8: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV8")
    },
    ModelMatConstAnimV8: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32
    },
    ModelLightAnimationV8: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV8")
    },
    ModelCompoundAnimationDataV8: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV16: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV16"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV8"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV16")
  }
};

const V9 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV9",
  version: 9,
  definitions: {
    ModelAnimationDataV17: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV17"),
      uvAnimData: DynArray("ModelUVAnimationV9"),
      cloudAnim: DynArray("ModelCloudAnimV9"),
      matConstAnim: DynArray("ModelMatConstAnimV9"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV9"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3)
    },
    ModelVisTrackDataV17: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV9: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelTrackTypeDataV9")
    },
    ModelTrackTypeDataV9: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV9: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV9")
    },
    ModelMatConstAnimV9: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV9: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV9")
    },
    ModelCompoundAnimationDataV9: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV17: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV17"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV9"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV17")
  }
};

const V10 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV10",
  version: 10,
  definitions: {
    ModelAnimationDataV18: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV18"),
      uvAnimData: DynArray("ModelUVAnimationV10"),
      cloudAnim: DynArray("ModelCloudAnimV10"),
      matConstAnim: DynArray("ModelMatConstAnimV10"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV10"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV10")
    },
    ModelVisTrackDataV18: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV10: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelTrackTypeDataV10")
    },
    ModelTrackTypeDataV10: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV10: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV10")
    },
    ModelMatConstAnimV10: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV10: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV10")
    },
    ModelAnimPropertyDataV10: {
      id: Uint64,
      type: Uint32,
      val: Uint64,
      strVal: Filename()
    },
    ModelCompoundAnimationDataV10: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV18: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV18"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV10"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV18")
  }
};

const V11 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV11",
  version: 11,
  definitions: {
    ModelAnimationDataV19: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV19"),
      uvAnimData: DynArray("ModelUVAnimationV11"),
      cloudAnim: DynArray("ModelCloudAnimV11"),
      matConstAnim: DynArray("ModelMatConstAnimV11"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV11"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV11"),
      center: FixedArray(Float32, 3),
      radius: Float32
    },
    ModelVisTrackDataV19: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV11: {
      uvAnimId: Uint8,
      uvTransformData: DynArray("ModelTrackTypeDataV11")
    },
    ModelTrackTypeDataV11: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV11: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV11")
    },
    ModelMatConstAnimV11: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV11: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV11")
    },
    ModelAnimPropertyDataV11: {
      id: Uint64,
      type: Uint32,
      val: Uint64,
      strVal: Filename()
    },
    ModelCompoundAnimationDataV11: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV19: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV19"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV11"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV19")
  }
};

const V12 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV12",
  version: 12,
  definitions: {
    ModelAnimationDataV20: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV20"),
      uvAnimData: DynArray("ModelUVAnimationV12"),
      cloudAnim: DynArray("ModelCloudAnimV12"),
      matConstAnim: DynArray("ModelMatConstAnimV12"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV12"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV12"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV12")
    },
    ModelVisTrackDataV20: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV12: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV12")
    },
    ModelTrackTypeDataV12: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV12: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV12")
    },
    ModelMatConstAnimV12: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV12: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV12")
    },
    ModelAnimPropertyDataV12: {
      id: Uint64,
      type: Uint32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV12: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCompoundAnimationDataV12: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV20: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV20"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV12"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV20")
  }
};

const V13 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV13",
  version: 13,
  definitions: {
    ModelAnimationDataV21: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV21"),
      uvAnimData: DynArray("ModelUVAnimationV13"),
      cloudAnim: DynArray("ModelCloudAnimV13"),
      matConstAnim: DynArray("ModelMatConstAnimV13"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV13"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV13"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV13")
    },
    ModelVisTrackDataV21: {
      boneIndex: Uint32,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV13: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV13")
    },
    ModelTrackTypeDataV13: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV13: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV13")
    },
    ModelMatConstAnimV13: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV13: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV13")
    },
    ModelAnimPropertyDataV13: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV13: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCompoundAnimationDataV13: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV21: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV21"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV13"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV21")
  }
};

const V14 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV14",
  version: 14,
  definitions: {
    ModelAnimationDataV22: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV22"),
      uvAnimData: DynArray("ModelUVAnimationV14"),
      cloudAnim: DynArray("ModelCloudAnimV14"),
      matConstAnim: DynArray("ModelMatConstAnimV14"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV14"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV14"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV14")
    },
    ModelVisTrackDataV22: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV14: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV14")
    },
    ModelTrackTypeDataV14: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV14: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV14")
    },
    ModelMatConstAnimV14: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV14: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV14")
    },
    ModelAnimPropertyDataV14: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV14: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCompoundAnimationDataV14: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV22: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV22"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV14"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV22")
  }
};

const V15 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV15",
  version: 15,
  definitions: {
    ModelAnimationDataV23: {
      token: Uint64,
      data: DynArray(Uint8),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV23"),
      uvAnimData: DynArray("ModelUVAnimationV15"),
      cloudAnim: DynArray("ModelCloudAnimV15"),
      matConstAnim: DynArray("ModelMatConstAnimV15"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV15"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV15"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV15"),
      bcAnim: DynArray("ModelBoneConstraintAnimV15")
    },
    ModelVisTrackDataV23: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV15: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV15")
    },
    ModelTrackTypeDataV15: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV15: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV15")
    },
    ModelMatConstAnimV15: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV15: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV15")
    },
    ModelAnimPropertyDataV15: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV15: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV15: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV15")
    },
    ModelCompoundAnimationDataV15: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV23: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV23"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV15"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV23")
  }
};

const V16 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV16",
  version: 16,
  definitions: {
    ModelAnimationDataV24: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV0",
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV24"),
      uvAnimData: DynArray("ModelUVAnimationV16"),
      cloudAnim: DynArray("ModelCloudAnimV16"),
      matConstAnim: DynArray("ModelMatConstAnimV16"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV16"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV16"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV16"),
      bcAnim: DynArray("ModelBoneConstraintAnimV16"),
      streakAnim: DynArray("ModelStreakAnimV16")
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelVisTrackDataV24: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV16: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV16")
    },
    ModelTrackTypeDataV16: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV16: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV16")
    },
    ModelMatConstAnimV16: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV16: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV16")
    },
    ModelAnimPropertyDataV16: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV16: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV16: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV16")
    },
    ModelStreakAnimV16: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV16")
    },
    ModelAnchorAnimV16: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV16")
    },
    ModelCompoundAnimationDataV16: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV24: {
      filename: Filename(),
      sequenceTokens: DynArray(Uint64)
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV24"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV16"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV24")
  }
};

const V17 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV17",
  version: 17,
  definitions: {
    ModelAnimationDataV25: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV0",
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV25"),
      uvAnimData: DynArray("ModelUVAnimationV17"),
      cloudAnim: DynArray("ModelCloudAnimV17"),
      matConstAnim: DynArray("ModelMatConstAnimV17"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV17"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV17"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV17"),
      bcAnim: DynArray("ModelBoneConstraintAnimV17"),
      streakAnim: DynArray("ModelStreakAnimV17")
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelVisTrackDataV25: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV17: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV17")
    },
    ModelTrackTypeDataV17: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV17: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV17")
    },
    ModelMatConstAnimV17: {
      matIndex: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV17: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV17")
    },
    ModelAnimPropertyDataV17: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV17: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV17: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV17")
    },
    ModelStreakAnimV17: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV17")
    },
    ModelAnchorAnimV17: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV17")
    },
    ModelCompoundAnimationDataV17: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV25: {
      filename: Filename(),
      sequences: DynArray("ModelAnimationImportSequenceV17")
    },
    ModelAnimationImportSequenceV17: {
      name: Uint64,
      duration: Float32
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV25"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV17"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV25")
  }
};

const V18 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV18",
  version: 18,
  definitions: {
    ModelAnimationDataV26: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV0",
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV26"),
      uvAnimData: DynArray("ModelUVAnimationV18"),
      cloudAnim: DynArray("ModelCloudAnimV18"),
      matConstAnim: DynArray("ModelMatConstAnimV18"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV18"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV18"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV18"),
      bcAnim: DynArray("ModelBoneConstraintAnimV18"),
      streakAnim: DynArray("ModelStreakAnimV18")
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelVisTrackDataV26: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV18: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV18")
    },
    ModelTrackTypeDataV18: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV18: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV18")
    },
    ModelMatConstAnimV18: {
      materialId: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV18: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV18")
    },
    ModelAnimPropertyDataV18: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV18: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV18: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV18")
    },
    ModelStreakAnimV18: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV18")
    },
    ModelAnchorAnimV18: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV18")
    },
    ModelCompoundAnimationDataV18: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV26: {
      filename: Filename(),
      sequences: DynArray("ModelAnimationImportSequenceV18")
    },
    ModelAnimationImportSequenceV18: {
      name: Uint64,
      duration: Float32
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV26"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV18"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV26")
  }
};

const V19 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV19",
  version: 19,
  definitions: {
    ModelAnimationDataV27: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV0",
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV27"),
      uvAnimData: DynArray("ModelUVAnimationV19"),
      cloudAnim: DynArray("ModelCloudAnimV19"),
      matConstAnim: DynArray("ModelMatConstAnimV19"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV19"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV19"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV19"),
      bcAnim: DynArray("ModelBoneConstraintAnimV19"),
      streakAnim: DynArray("ModelStreakAnimV19")
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelVisTrackDataV27: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV19: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV19")
    },
    ModelTrackTypeDataV19: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV19: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV19")
    },
    ModelMatConstAnimV19: {
      materialId: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV19: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV19")
    },
    ModelAnimPropertyDataV19: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV19: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV19: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV19")
    },
    ModelStreakAnimV19: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV19")
    },
    ModelAnchorAnimV19: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV19")
    },
    ModelCompoundAnimationDataV19: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV27: {
      filename: Filename(),
      sequences: DynArray("ModelAnimationImportSequenceV19")
    },
    ModelAnimationImportSequenceV19: {
      name: Uint64,
      duration: Float32
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV27"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV19"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV27"),
    modelReference: Filename()
  }
};

const V20 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV20",
  version: 20,
  definitions: {
    ModelAnimationDataV28: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV0",
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV28"),
      uvAnimData: DynArray("ModelUVAnimationV20"),
      cloudAnim: DynArray("ModelCloudAnimV20"),
      matConstAnim: DynArray("ModelMatConstAnimV20"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV20"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV20"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV20"),
      bcAnim: DynArray("ModelBoneConstraintAnimV20"),
      streakAnim: DynArray("ModelStreakAnimV20"),
      lightningAnim: DynArray("ModelLightningAnimV20")
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelVisTrackDataV28: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV20: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV20")
    },
    ModelTrackTypeDataV20: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV20: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV20")
    },
    ModelMatConstAnimV20: {
      materialId: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV20: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV20")
    },
    ModelAnimPropertyDataV20: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV20: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV20: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV20")
    },
    ModelStreakAnimV20: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV20")
    },
    ModelAnchorAnimV20: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV20")
    },
    ModelLightningAnimV20: {
      bone: Uint64,
      lightningTrackData: DynArray("ModelTrackTypeDataV20")
    },
    ModelCompoundAnimationDataV20: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV28: {
      filename: Filename(),
      sequences: DynArray("ModelAnimationImportSequenceV20")
    },
    ModelAnimationImportSequenceV20: {
      name: Uint64,
      duration: Float32
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV28"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV20"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV28"),
    modelReference: Filename()
  }
};

const V21 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV21",
  version: 21,
  definitions: {
    ModelAnimationDataV29: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV0",
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV29"),
      uvAnimData: DynArray("ModelUVAnimationV21"),
      cloudAnim: DynArray("ModelCloudAnimV21"),
      matConstAnim: DynArray("ModelMatConstAnimV21"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV21"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV21"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV21"),
      bcAnim: DynArray("ModelBoneConstraintAnimV21"),
      streakAnim: DynArray("ModelStreakAnimV21"),
      lightningAnim: DynArray("ModelLightningAnimV21"),
      windAnimData: DynArray("ModelWindAnimationV21")
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelVisTrackDataV29: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV21: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV21")
    },
    ModelTrackTypeDataV21: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV21: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV21")
    },
    ModelMatConstAnimV21: {
      materialId: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV21: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV21")
    },
    ModelAnimPropertyDataV21: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV21: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV21: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV21")
    },
    ModelStreakAnimV21: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV21")
    },
    ModelAnchorAnimV21: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV21")
    },
    ModelLightningAnimV21: {
      bone: Uint64,
      lightningTrackData: DynArray("ModelTrackTypeDataV21")
    },
    ModelWindAnimationV21: {
      bone: Uint64,
      windTrackData: DynArray("ModelTrackTypeDataV21")
    },
    ModelCompoundAnimationDataV21: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV29: {
      filename: Filename(),
      sequences: DynArray("ModelAnimationImportSequenceV21")
    },
    ModelAnimationImportSequenceV21: {
      name: Uint64,
      duration: Float32
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV29"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV21"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV29"),
    modelReference: Filename()
  }
};

const V22 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV22",
  version: 22,
  definitions: {
    ModelAnimationDataV30: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV0",
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV30"),
      uvAnimData: DynArray("ModelUVAnimationV22"),
      cloudAnim: DynArray("ModelCloudAnimV22"),
      matConstAnim: DynArray("ModelMatConstAnimV22"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV22"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV22"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV22"),
      bcAnim: DynArray("ModelBoneConstraintAnimV22"),
      streakAnim: DynArray("ModelStreakAnimV22"),
      lightningAnim: DynArray("ModelLightningAnimV22"),
      windAnimData: DynArray("ModelWindAnimationV22")
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelVisTrackDataV30: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV22: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV22")
    },
    ModelTrackTypeDataV22: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV22: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV22")
    },
    ModelMatConstAnimV22: {
      materialId: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV22: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV22")
    },
    ModelAnimPropertyDataV22: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV22: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV22: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV22")
    },
    ModelStreakAnimV22: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV22")
    },
    ModelAnchorAnimV22: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV22")
    },
    ModelLightningAnimV22: {
      bone: Uint64,
      lightningTrackData: DynArray("ModelTrackTypeDataV22")
    },
    ModelWindAnimationV22: {
      bone: Uint64,
      windTrackData: DynArray("ModelTrackTypeDataV22")
    },
    ModelCompoundAnimationDataV22: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV30: {
      filename: Filename(),
      sequences: DynArray("ModelAnimationImportSequenceV22")
    },
    ModelAnimationImportSequenceV22: {
      name: Uint64,
      duration: Float32
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV30"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV22"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV30")
  }
};

const V23 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationBankV23",
  version: 23,
  definitions: {
    ModelAnimationDataV31: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV0",
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV31"),
      uvAnimData: DynArray("ModelUVAnimationV23"),
      cloudAnim: DynArray("ModelCloudAnimV23"),
      matConstAnim: DynArray("ModelMatConstAnimV23"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV23"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV23"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV23"),
      bcAnim: DynArray("ModelBoneConstraintAnimV23"),
      streakAnim: DynArray("ModelStreakAnimV23"),
      lightningAnim: DynArray("ModelLightningAnimV23"),
      windAnimData: DynArray("ModelWindAnimationV23")
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelVisTrackDataV31: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV23: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV23")
    },
    ModelTrackTypeDataV23: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV23: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV23")
    },
    ModelMatConstAnimV23: {
      materialId: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV23: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV23")
    },
    ModelAnimPropertyDataV23: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV23: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV23: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV23")
    },
    ModelStreakAnimV23: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV23")
    },
    ModelAnchorAnimV23: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV23")
    },
    ModelLightningAnimV23: {
      bone: Uint64,
      lightningTrackData: DynArray("ModelTrackTypeDataV23")
    },
    ModelWindAnimationV23: {
      bone: Uint64,
      windTrackData: DynArray("ModelTrackTypeDataV23")
    },
    ModelCompoundAnimationDataV23: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV31: {
      filename: Filename(),
      sequences: DynArray("ModelAnimationImportSequenceV23")
    },
    ModelAnimationImportSequenceV23: {
      name: Uint64,
      duration: Float32
    }
  },
  root: {
    animations: RefArray("ModelAnimationDataV31"),
    compoundAnimations: DynArray("ModelCompoundAnimationDataV23"),
    fallbacks: DynArray(Uint64),
    imports: DynArray("ModelAnimationImportDataV31")
  }
};

const V24 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationV24",
  version: 24,
  definitions: {
    ModelFileAnimationBankV24: {
      animations: RefArray("ModelAnimationDataV32"),
      compoundAnimations: DynArray("ModelCompoundAnimationDataV24"),
      fallbacks: DynArray(Uint64),
      imports: DynArray("ModelAnimationImportDataV32")
    },
    ModelAnimationDataV32: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV0",
      animLod: Pointer("ModelAnimationLodV24"),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV32"),
      uvAnimData: DynArray("ModelUVAnimationV24"),
      cloudAnim: DynArray("ModelCloudAnimV24"),
      matConstAnim: DynArray("ModelMatConstAnimV24"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV24"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV24"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV24"),
      bcAnim: DynArray("ModelBoneConstraintAnimV24"),
      streakAnim: DynArray("ModelStreakAnimV24"),
      lightningAnim: DynArray("ModelLightningAnimV24"),
      windAnimData: DynArray("ModelWindAnimationV24")
    },
    PackGrannyAnimationTypeV0: {
      animation: DynArray(Uint8)
    },
    ModelAnimationLodV24: {
      data: "PackGrannyAnimationTypeV0",
      fileFull: Filename()
    },
    ModelVisTrackDataV32: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV24: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV24")
    },
    ModelTrackTypeDataV24: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV24: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV24")
    },
    ModelMatConstAnimV24: {
      materialId: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV24: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV24")
    },
    ModelAnimPropertyDataV24: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV24: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV24: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV24")
    },
    ModelStreakAnimV24: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV24")
    },
    ModelAnchorAnimV24: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV24")
    },
    ModelLightningAnimV24: {
      bone: Uint64,
      lightningTrackData: DynArray("ModelTrackTypeDataV24")
    },
    ModelWindAnimationV24: {
      bone: Uint64,
      windTrackData: DynArray("ModelTrackTypeDataV24")
    },
    ModelCompoundAnimationDataV24: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV32: {
      filename: Filename(),
      sequences: DynArray("ModelAnimationImportSequenceV24")
    },
    ModelAnimationImportSequenceV24: {
      name: Uint64,
      duration: Float32
    }
  },
  root: {
    bank: Pointer("ModelFileAnimationBankV24"),
    anim: "PackGrannyAnimationTypeV0"
  }
};

const V25 = {
  chunkName: "ANIM",
  name: "ModelFileAnimationV25",
  version: 25,
  definitions: {
    ModelFileAnimationBankV25: {
      animations: RefArray("ModelAnimationDataV33"),
      compoundAnimations: DynArray("ModelCompoundAnimationDataV25"),
      fallbacks: DynArray(Uint64),
      imports: DynArray("ModelAnimationImportDataV33")
    },
    ModelAnimationDataV33: {
      token: Uint64,
      data: "PackGrannyAnimationTypeV1",
      animLod: Pointer("ModelAnimationLodV25"),
      moveSpeed: Float32,
      visTrackData: DynArray("ModelVisTrackDataV33"),
      uvAnimData: DynArray("ModelUVAnimationV25"),
      cloudAnim: DynArray("ModelCloudAnimV25"),
      matConstAnim: DynArray("ModelMatConstAnimV25"),
      morphTrackGroups: DynArray(Uint16),
      triggerTimes: DynArray(Float32),
      triggerTokens: DynArray(Uint64),
      lightAnimData: DynArray("ModelLightAnimationV25"),
      isAdditive: Uint32,
      variantCount: Uint32,
      variantIndices: FixedArray(Uint32, 3),
      properties: DynArray("ModelAnimPropertyDataV25"),
      center: FixedArray(Float32, 3),
      radius: Float32,
      tokenMapAnims: DynArray("ModelTokenMapAnimV25"),
      bcAnim: DynArray("ModelBoneConstraintAnimV25"),
      streakAnim: DynArray("ModelStreakAnimV25"),
      lightningAnim: DynArray("ModelLightningAnimV25"),
      windAnimData: DynArray("ModelWindAnimationV25")
    },
    PackGrannyAnimationTypeV1: {
      animation: DynArray(Uint8),
      pointers: DynArray(Uint32)
    },
    ModelAnimationLodV25: {
      data: "PackGrannyAnimationTypeV1",
      fileFull: Filename()
    },
    ModelVisTrackDataV33: {
      boneToken: Uint64,
      keys: DynArray(Float32)
    },
    ModelUVAnimationV25: {
      uvAnimId: Uint32,
      uvTransformData: DynArray("ModelTrackTypeDataV25")
    },
    ModelTrackTypeDataV25: {
      type: Uint8,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelCloudAnimV25: {
      bone: Uint64,
      cloudTrackData: DynArray("ModelTrackTypeDataV25")
    },
    ModelMatConstAnimV25: {
      materialId: Uint32,
      constToken: Uint32,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelLightAnimationV25: {
      bone: Uint64,
      lightTrackData: DynArray("ModelTrackTypeDataV25")
    },
    ModelAnimPropertyDataV25: {
      id: Uint64,
      type: Uint32,
      time: Float32,
      val: Uint64,
      strVal: Filename()
    },
    ModelTokenMapAnimV25: {
      linkToken: Uint64,
      trackGroupIndex: Uint32,
      vectorTrackIndex: Uint32,
      initialValue: FixedArray(Float32, 4)
    },
    ModelBoneConstraintAnimV25: {
      bone: Uint64,
      bcTrackData: DynArray("ModelTrackTypeDataV25")
    },
    ModelStreakAnimV25: {
      bone: Uint64,
      anchorAnim: DynArray("ModelAnchorAnimV25")
    },
    ModelAnchorAnimV25: {
      bone: Uint64,
      anchorTrackData: DynArray("ModelTrackTypeDataV25")
    },
    ModelLightningAnimV25: {
      bone: Uint64,
      lightningTrackData: DynArray("ModelTrackTypeDataV25")
    },
    ModelWindAnimationV25: {
      bone: Uint64,
      windTrackData: DynArray("ModelTrackTypeDataV25")
    },
    ModelCompoundAnimationDataV25: {
      token: Uint64,
      start: Uint64,
      loop: Uint64,
      end: Uint64
    },
    ModelAnimationImportDataV33: {
      filename: Filename(),
      sequences: DynArray("ModelAnimationImportSequenceV25")
    },
    ModelAnimationImportSequenceV25: {
      name: Uint64,
      duration: Float32
    }
  },
  root: {
    bank: Pointer("ModelFileAnimationBankV25"),
    anim: "PackGrannyAnimationTypeV1"
  }
};

export const latest = V25;
export const definitions = { V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14, V15, V16, V17, V18, V19, V20, V21, V22, V23, V24, V25 };
export const definitionArray = Object.values(definitions);