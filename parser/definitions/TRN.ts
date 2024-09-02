import { FixedArray, Uint32, Float32, DynArray, Uint16, Uint64, Filename, Uint8, Pointer } from "../src/types";

const V10 = {
  chunkName: "trn",
  name: "PackMapTerrainV10",
  version: 10,
  definitions: {
    PackMapTerrainChunkV10: {
      chunkFlags: Uint32,
      tileTableArray: DynArray(Uint8)
    },
    PackMapTerrainMaterialsV10: {
      pagedImage: Filename(),
      constArray: DynArray("PackMapTerrainConstV10"),
      texFileArray: DynArray("PackMapTerrainTexV10"),
      materials: DynArray("PackMapTerrrainChunkMaterialV10")
    },
    PackMapTerrainConstV10: {
      tokenName: Uint32,
      value: FixedArray(Float32, 4)
    },
    PackMapTerrainTexV10: {
      tokenName: Uint32,
      flags: FixedArray(Uint32, 2),
      filename: Filename(),
      layer: Uint32
    },
    PackMapTerrrainChunkMaterialV10: {
      tiling: Uint8,
      hiResMaterial: "PackMapTerrainMaterialV10",
      loResMaterial: "PackMapTerrainMaterialV10",
      uvData: Pointer("PackMapTerrainChunkUVDataV10")
    },
    PackMapTerrainMaterialV10: {
      materialFile: Filename(),
      fvf: Uint32,
      constIndexArray: DynArray(Uint32),
      texIndexArray: DynArray(Uint32)
    },
    PackMapTerrainChunkUVDataV10: {
      translation: FixedArray(Float32, 2),
      xScaleRange: FixedArray(Float32, 2),
      yScaleRange: FixedArray(Float32, 2),
      scaleSpeed: FixedArray(Float32, 2),
      rotation: Float32
    }
  },
  root: {
    dims: FixedArray(Uint32, 2),
    swapDistance: Float32,
    heightMapArray: DynArray(Float32),
    tileFlagArray: DynArray(Uint32),
    chunkArray: DynArray("PackMapTerrainChunkV10"),
    materials: Pointer("PackMapTerrainMaterialsV10"),
    typeArray: DynArray(Uint64)
  }
};

const V11 = {
  chunkName: "trn",
  name: "PackMapTerrainV11",
  version: 11,
  definitions: {
    PackMapTerrainChunkV11: {
      chunkFlags: Uint32,
      tileTableArray: DynArray(Uint8)
    },
    PackMapTerrainMaterialsV11: {
      pagedImage: Filename(),
      constArray: DynArray("PackMapTerrainConstV11"),
      texFileArray: DynArray("PackMapTerrainTexV11"),
      materials: DynArray("PackMapTerrrainChunkMaterialV11")
    },
    PackMapTerrainConstV11: {
      tokenName: Uint32,
      value: FixedArray(Float32, 4)
    },
    PackMapTerrainTexV11: {
      tokenName: Uint32,
      flags: FixedArray(Uint32, 2),
      filename: Filename(),
      layer: Uint32
    },
    PackMapTerrrainChunkMaterialV11: {
      tiling: FixedArray(Uint8, 3),
      hiResMaterial: "PackMapTerrainMaterialV11",
      loResMaterial: "PackMapTerrainMaterialV11",
      uvData: Pointer("PackMapTerrainChunkUVDataV11")
    },
    PackMapTerrainMaterialV11: {
      materialFile: Filename(),
      fvf: Uint32,
      constIndexArray: DynArray(Uint32),
      texIndexArray: DynArray(Uint32)
    },
    PackMapTerrainChunkUVDataV11: {
      translation: FixedArray(Float32, 2),
      xScaleRange: FixedArray(Float32, 2),
      yScaleRange: FixedArray(Float32, 2),
      scaleSpeed: FixedArray(Float32, 2),
      rotation: Float32
    }
  },
  root: {
    dims: FixedArray(Uint32, 2),
    swapDistance: Float32,
    heightMapArray: DynArray(Float32),
    tileFlagArray: DynArray(Uint32),
    chunkArray: DynArray("PackMapTerrainChunkV11"),
    materials: Pointer("PackMapTerrainMaterialsV11"),
    typeArray: DynArray(Uint64)
  }
};

const V12 = {
  chunkName: "trn",
  name: "PackMapTerrainV12",
  version: 12,
  definitions: {
    PackMapTerrainChunkV12: {
      chunkFlags: Uint32,
      tileTableArray: DynArray(Uint8)
    },
    PackMapTerrainMaterialsV12: {
      pagedImage: Filename(),
      constArray: DynArray("PackMapTerrainConstV12"),
      texFileArray: DynArray("PackMapTerrainTexV12"),
      materials: DynArray("PackMapTerrrainChunkMaterialV12")
    },
    PackMapTerrainConstV12: {
      tokenName: Uint32,
      value: FixedArray(Float32, 4)
    },
    PackMapTerrainTexV12: {
      tokenName: Uint32,
      flags: FixedArray(Uint32, 2),
      filename: Filename(),
      layer: Uint32
    },
    PackMapTerrrainChunkMaterialV12: {
      tiling: FixedArray(Uint8, 3),
      hiResMaterial: "PackMapTerrainMaterialV12",
      loResMaterial: "PackMapTerrainMaterialV12",
      uvData: Pointer("PackMapTerrainChunkUVDataV12")
    },
    PackMapTerrainMaterialV12: {
      materialFile: Filename(),
      fvf: Uint32,
      constIndexArray: DynArray(Uint32),
      texIndexArray: DynArray(Uint32)
    },
    PackMapTerrainChunkUVDataV12: {
      translation: FixedArray(Float32, 2),
      xScaleRange: FixedArray(Float32, 2),
      yScaleRange: FixedArray(Float32, 2),
      scaleSpeed: FixedArray(Float32, 2),
      rotation: Float32
    }
  },
  root: {
    dims: FixedArray(Uint32, 2),
    swapDistance: Float32,
    heightMapArray: DynArray(Float32),
    tileFlagArray: DynArray(Uint32),
    chunkArray: DynArray("PackMapTerrainChunkV12"),
    materials: Pointer("PackMapTerrainMaterialsV12"),
    typeArray: DynArray(Uint64)
  }
};

const V13 = {
  chunkName: "trn",
  name: "PackMapTerrainV13",
  version: 13,
  definitions: {
    PackMapTerrainChunkV13: {
      chunkFlags: Uint32,
      tileTableArray: DynArray(Uint8)
    },
    PackMapTerrainMaterialsV13: {
      pagedImage: Filename(),
      constArray: DynArray("PackMapTerrainConstV13"),
      texFileArray: DynArray("PackMapTerrainTexV13"),
      materials: DynArray("PackMapTerrrainChunkMaterialV13"),
      midFade: FixedArray(Float32, 2),
      farFade: FixedArray(Float32, 2)
    },
    PackMapTerrainConstV13: {
      tokenName: Uint32,
      value: FixedArray(Float32, 4)
    },
    PackMapTerrainTexV13: {
      tokenName: Uint32,
      flags: FixedArray(Uint32, 2),
      filename: Filename(),
      layer: Uint32
    },
    PackMapTerrrainChunkMaterialV13: {
      tiling: FixedArray(Uint8, 3),
      hiResMaterial: "PackMapTerrainMaterialV13",
      loResMaterial: "PackMapTerrainMaterialV13",
      faderMaterial: "PackMapTerrainMaterialV13",
      uvData: Pointer("PackMapTerrainChunkUVDataV13")
    },
    PackMapTerrainMaterialV13: {
      materialFile: Filename(),
      fvf: Uint32,
      constIndexArray: DynArray(Uint32),
      texIndexArray: DynArray(Uint32)
    },
    PackMapTerrainChunkUVDataV13: {
      translation: FixedArray(Float32, 2),
      xScaleRange: FixedArray(Float32, 2),
      yScaleRange: FixedArray(Float32, 2),
      scaleSpeed: FixedArray(Float32, 2),
      rotation: Float32
    }
  },
  root: {
    dims: FixedArray(Uint32, 2),
    swapDistance: Float32,
    heightMapArray: DynArray(Float32),
    tileFlagArray: DynArray(Uint32),
    chunkArray: DynArray("PackMapTerrainChunkV13"),
    materials: Pointer("PackMapTerrainMaterialsV13"),
    typeArray: DynArray(Uint64)
  }
};

const V14 = {
  chunkName: "trn",
  name: "PackMapTerrainV14",
  version: 14,
  definitions: {
    PackMapTerrainChunkV14: {
      chunkFlags: Uint32,
      surfaceIndexArray: DynArray(Uint16),
      surfaceTokenArray: DynArray(Uint64)
    },
    PackMapTerrainMaterialsV14: {
      pagedImage: Filename(),
      constArray: DynArray("PackMapTerrainConstV14"),
      texFileArray: DynArray("PackMapTerrainTexV14"),
      materials: DynArray("PackMapTerrrainChunkMaterialV14"),
      midFade: FixedArray(Float32, 2),
      farFade: FixedArray(Float32, 2)
    },
    PackMapTerrainConstV14: {
      tokenName: Uint32,
      value: FixedArray(Float32, 4)
    },
    PackMapTerrainTexV14: {
      tokenName: Uint32,
      flags: FixedArray(Uint32, 2),
      filename: Filename(),
      layer: Uint32
    },
    PackMapTerrrainChunkMaterialV14: {
      tiling: FixedArray(Uint8, 3),
      hiResMaterial: "PackMapTerrainMaterialV14",
      loResMaterial: "PackMapTerrainMaterialV14",
      faderMaterial: "PackMapTerrainMaterialV14",
      uvData: Pointer("PackMapTerrainChunkUVDataV14")
    },
    PackMapTerrainMaterialV14: {
      materialFile: Filename(),
      fvf: Uint32,
      constIndexArray: DynArray(Uint32),
      texIndexArray: DynArray(Uint32)
    },
    PackMapTerrainChunkUVDataV14: {
      translation: FixedArray(Float32, 2),
      xScaleRange: FixedArray(Float32, 2),
      yScaleRange: FixedArray(Float32, 2),
      scaleSpeed: FixedArray(Float32, 2),
      rotation: Float32
    }
  },
  root: {
    dims: FixedArray(Uint32, 2),
    swapDistance: Float32,
    heightMapArray: DynArray(Float32),
    tileFlagArray: DynArray(Uint32),
    chunkArray: DynArray("PackMapTerrainChunkV14"),
    materials: Pointer("PackMapTerrainMaterialsV14")
  }
};

export const latest = V14;
export const definitions = { V10, V11, V12, V13, V14 };
export const definitionArray = Object.values(definitions);