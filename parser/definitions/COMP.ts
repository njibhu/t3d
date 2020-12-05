import { Uint32, DynArray, RefString16, FixedArray, Uint8, Uint64, Float32, Fileref, Uint16, Filename } from "../src/types";

export const V0 = {
  chunkName: "comp",
  name: "PackCompositeV0",
  version: 0,
  definitions: {
    PackCompositeBlitRectSetV0: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint32),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV0: {
      name: RefString16(),
      nameToken: Uint64,
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV0"),
      hairStyles: DynArray(Uint64),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV0"),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV0")
    },
    PackCompositeFileDataV0: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskClothSkin: Filename(),
      maskLeather: Filename(),
      maskMetal: Filename(),
      maskGlow: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV0: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename()
    },
    PackCompositeVariantV0: {
      components: DynArray("PackCompositeVariantComponentV0"),
      hairColor: "PackCompositeColorV0",
      patternColor: "PackCompositeColorV0",
      skinColor: "PackCompositeColorV0",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV0: {
      nameToken: Uint64,
      clothColor: "PackCompositeColorV0",
      leatherColor: "PackCompositeColorV0",
      metalColor: "PackCompositeColorV0"
    },
    PackCompositeColorV0: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    blitRects: DynArray("PackCompositeBlitRectSetV0"),
    raceSexData: DynArray("PackCompositeRaceDataV0")
  }
};

export const V1 = {
  chunkName: "comp",
  name: "PackCompositeV1",
  version: 1,
  definitions: {
    PackCompositeBlitRectSetV1: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint32),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV1: {
      name: RefString16(),
      nameToken: Uint64,
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV1"),
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV1"),
      skinColorPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV1")
    },
    PackCompositeFileDataV1: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV1: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename()
    },
    PackCompositeVariantV1: {
      components: DynArray("PackCompositeVariantComponentV1"),
      hairColor: "PackCompositeColorV1",
      patternColor: "PackCompositeColorV1",
      skinColor: "PackCompositeColorV1",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV1: {
      nameToken: Uint64,
      clothColor: "PackCompositeColorV1",
      leatherColor: "PackCompositeColorV1",
      metalColor: "PackCompositeColorV1"
    },
    PackCompositeColorV1: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    blitRects: DynArray("PackCompositeBlitRectSetV1"),
    raceSexData: DynArray("PackCompositeRaceDataV1")
  }
};

export const V2 = {
  chunkName: "comp",
  name: "PackCompositeV2",
  version: 2,
  definitions: {
    PackCompositeBlitRectSetV2: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint32),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV2: {
      name: RefString16(),
      nameToken: Uint64,
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV2"),
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV2"),
      skinColorPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV2")
    },
    PackCompositeFileDataV2: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV2: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename()
    },
    PackCompositeVariantV2: {
      components: DynArray("PackCompositeVariantComponentV2"),
      hairColor: "PackCompositeColorV2",
      patternColor: "PackCompositeColorV2",
      skinColor: "PackCompositeColorV2",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV2: {
      nameToken: Uint64,
      clothColor: "PackCompositeColorV2",
      leatherColor: "PackCompositeColorV2",
      metalColor: "PackCompositeColorV2"
    },
    PackCompositeColorV2: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    blitRects: DynArray("PackCompositeBlitRectSetV2"),
    raceSexData: DynArray("PackCompositeRaceDataV2")
  }
};

export const V3 = {
  chunkName: "comp",
  name: "PackCompositeV3",
  version: 3,
  definitions: {
    PackCompositeBlitRectSetV3: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint32),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV3: {
      name: RefString16(),
      nameToken: Uint64,
      beard: DynArray(Uint64),
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV3"),
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV3"),
      skinColorPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV3")
    },
    PackCompositeFileDataV3: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV3: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename()
    },
    PackCompositeVariantV3: {
      components: DynArray("PackCompositeVariantComponentV3"),
      hairColor: "PackCompositeColorV3",
      patternColor: "PackCompositeColorV3",
      skinColor: "PackCompositeColorV3",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV3: {
      nameToken: Uint64,
      clothColor: "PackCompositeColorV3",
      leatherColor: "PackCompositeColorV3",
      metalColor: "PackCompositeColorV3"
    },
    PackCompositeColorV3: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    blitRects: DynArray("PackCompositeBlitRectSetV3"),
    raceSexData: DynArray("PackCompositeRaceDataV3")
  }
};

export const V4 = {
  chunkName: "comp",
  name: "PackCompositeV4",
  version: 4,
  definitions: {
    PackCompositeBlitRectSetV4: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV4: {
      name: RefString16(),
      nameToken: Uint64,
      beard: DynArray(Uint64),
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV4"),
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV4"),
      skinColorPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV4")
    },
    PackCompositeFileDataV4: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV4: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename()
    },
    PackCompositeVariantV4: {
      components: DynArray("PackCompositeVariantComponentV4"),
      hairColor: "PackCompositeColorV4",
      patternColor: "PackCompositeColorV4",
      skinColor: "PackCompositeColorV4",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV4: {
      nameToken: Uint64,
      clothColor: "PackCompositeColorV4",
      leatherColor: "PackCompositeColorV4",
      metalColor: "PackCompositeColorV4"
    },
    PackCompositeColorV4: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV4"),
    raceSexData: DynArray("PackCompositeRaceDataV4")
  }
};

export const V5 = {
  chunkName: "comp",
  name: "PackCompositeV5",
  version: 5,
  definitions: {
    PackCompositeBlitRectSetV5: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV5: {
      name: RefString16(),
      nameToken: Uint64,
      beard: DynArray(Uint64),
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV5"),
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV5"),
      skinColorPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV5")
    },
    PackCompositeFileDataV5: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV5: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename()
    },
    PackCompositeVariantV5: {
      token: Uint64,
      components: DynArray("PackCompositeVariantComponentV5"),
      hairColor: "PackCompositeColorV5",
      hairColor2: "PackCompositeColorV5",
      patternColor: "PackCompositeColorV5",
      skinColor: "PackCompositeColorV5",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV5: {
      nameToken: Uint64,
      color0: "PackCompositeColorV5",
      color1: "PackCompositeColorV5",
      color2: "PackCompositeColorV5",
      color3: "PackCompositeColorV5"
    },
    PackCompositeColorV5: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV5"),
    raceSexData: DynArray("PackCompositeRaceDataV5")
  }
};

export const V6 = {
  chunkName: "comp",
  name: "PackCompositeV6",
  version: 6,
  definitions: {
    PackCompositeBlitRectSetV6: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV6: {
      name: RefString16(),
      nameToken: Uint64,
      beard: DynArray(Uint64),
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV6"),
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV6"),
      skinColorPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV6")
    },
    PackCompositeFileDataV6: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV6: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV6: {
      token: Uint64,
      components: DynArray("PackCompositeVariantComponentV6"),
      hairColor: "PackCompositeColorV6",
      hairColor2: "PackCompositeColorV6",
      patternColor: "PackCompositeColorV6",
      skinColor: "PackCompositeColorV6",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV6: {
      nameToken: Uint64,
      color0: "PackCompositeColorV6",
      color1: "PackCompositeColorV6",
      color2: "PackCompositeColorV6",
      color3: "PackCompositeColorV6"
    },
    PackCompositeColorV6: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV6"),
    raceSexData: DynArray("PackCompositeRaceDataV6")
  }
};

export const V7 = {
  chunkName: "comp",
  name: "PackCompositeV7",
  version: 7,
  definitions: {
    PackCompositeBlitRectSetV7: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV7: {
      name: RefString16(),
      nameToken: Uint64,
      beard: DynArray(Uint64),
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV7"),
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV7"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV7")
    },
    PackCompositeFileDataV7: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV7: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV7: {
      token: Uint64,
      components: DynArray("PackCompositeVariantComponentV7"),
      hairColor: "PackCompositeColorV7",
      hairColor2: "PackCompositeColorV7",
      patternColor: "PackCompositeColorV7",
      skinColor: "PackCompositeColorV7",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV7: {
      nameToken: Uint64,
      color0: "PackCompositeColorV7",
      color1: "PackCompositeColorV7",
      color2: "PackCompositeColorV7",
      color3: "PackCompositeColorV7"
    },
    PackCompositeColorV7: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV7"),
    raceSexData: DynArray("PackCompositeRaceDataV7")
  }
};

export const V8 = {
  chunkName: "comp",
  name: "PackCompositeV8",
  version: 8,
  definitions: {
    PackCompositeBlitRectSetV8: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV8: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV8"),
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV8"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV8")
    },
    PackCompositeFileDataV8: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV8: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV8: {
      token: Uint64,
      components: DynArray("PackCompositeVariantComponentV8"),
      hairColor: "PackCompositeColorV8",
      hairColor2: "PackCompositeColorV8",
      patternColor: "PackCompositeColorV8",
      skinColor: "PackCompositeColorV8",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV8: {
      nameToken: Uint64,
      color0: "PackCompositeColorV8",
      color1: "PackCompositeColorV8",
      color2: "PackCompositeColorV8",
      color3: "PackCompositeColorV8"
    },
    PackCompositeColorV8: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV8"),
    raceSexData: DynArray("PackCompositeRaceDataV8")
  }
};

export const V9 = {
  chunkName: "comp",
  name: "PackCompositeV9",
  version: 9,
  definitions: {
    PackCompositeBlitRectSetV9: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV9: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV9"),
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV9"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV9")
    },
    PackCompositeFileDataV9: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV9: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV9: {
      token: Uint64,
      components: DynArray("PackCompositeVariantComponentV9"),
      hairColor: "PackCompositeColorV9",
      hairColor2: "PackCompositeColorV9",
      patternColor: "PackCompositeColorV9",
      skinColor: "PackCompositeColorV9",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV9: {
      nameToken: Uint64,
      color0: "PackCompositeColorV9",
      color1: "PackCompositeColorV9",
      color2: "PackCompositeColorV9",
      color3: "PackCompositeColorV9"
    },
    PackCompositeColorV9: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV9"),
    raceSexData: DynArray("PackCompositeRaceDataV9"),
    configVersion: Uint16
  }
};

export const V10 = {
  chunkName: "comp",
  name: "PackCompositeV10",
  version: 10,
  definitions: {
    PackCompositeBlitRectSetV10: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeRaceDataV10: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV10"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV10"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV10")
    },
    PackCompositeFileDataV10: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV10: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV10: {
      token: Uint64,
      components: DynArray("PackCompositeVariantComponentV10"),
      hairColor: "PackCompositeColorV10",
      hairColor2: "PackCompositeColorV10",
      patternColor: "PackCompositeColorV10",
      skinColor: "PackCompositeColorV10",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV10: {
      nameToken: Uint64,
      color0: "PackCompositeColorV10",
      color1: "PackCompositeColorV10",
      color2: "PackCompositeColorV10",
      color3: "PackCompositeColorV10"
    },
    PackCompositeColorV10: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV10"),
    raceSexData: DynArray("PackCompositeRaceDataV10"),
    configVersion: Uint16
  }
};

export const V11 = {
  chunkName: "comp",
  name: "PackCompositeV11",
  version: 11,
  definitions: {
    PackCompositeBlitRectSetV11: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeBoneScaleV11: {
      BodyRegion: DynArray("PackCompositeBoneScaleRegionV11")
    },
    PackCompositeBoneScaleRegionV11: {
      value: Float32,
      Bone: DynArray("PackCompositeBoneScaleParamV11")
    },
    PackCompositeBoneScaleParamV11: {
      name: Uint64,
      flags: Uint8,
      max: Float32,
      min: Float32,
      rotate: FixedArray(Float32, 3),
      scale: FixedArray(Float32, 3),
      translate: FixedArray(Float32, 3)
    },
    PackCompositeRaceDataV11: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      ears: DynArray(Uint64),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV11"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV11"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV11")
    },
    PackCompositeFileDataV11: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV11: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV11: {
      token: Uint64,
      boneScaleIndex: Uint32,
      components: DynArray("PackCompositeVariantComponentV11"),
      hairColor: "PackCompositeColorV11",
      hairColor2: "PackCompositeColorV11",
      patternColor: "PackCompositeColorV11",
      skinColor: "PackCompositeColorV11",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV11: {
      nameToken: Uint64,
      color0: "PackCompositeColorV11",
      color1: "PackCompositeColorV11",
      color2: "PackCompositeColorV11",
      color3: "PackCompositeColorV11"
    },
    PackCompositeColorV11: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV11"),
    boneScales: DynArray("PackCompositeBoneScaleV11"),
    raceSexData: DynArray("PackCompositeRaceDataV11"),
    configVersion: Uint16
  }
};

export const V12 = {
  chunkName: "comp",
  name: "PackCompositeV12",
  version: 12,
  definitions: {
    PackCompositeBlitRectSetV12: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeBoneScaleV12: {
      BodyRegion: DynArray("PackCompositeBoneScaleRegionV12"),
      MorphWeight: DynArray("PackCompositeMorphWeightV12")
    },
    PackCompositeBoneScaleRegionV12: {
      name: Uint64,
      value: Float32,
      Bone: DynArray("PackCompositeBoneScaleParamV12")
    },
    PackCompositeBoneScaleParamV12: {
      name: Uint64,
      flags: Uint8,
      max: Float32,
      min: Float32,
      rotate: FixedArray(Float32, 3),
      scale: FixedArray(Float32, 3),
      translate: FixedArray(Float32, 3)
    },
    PackCompositeMorphWeightV12: {
      value: Float32,
      name: Uint64
    },
    PackCompositeRaceDataV12: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      bodyBoneScales: DynArray("PackCompositeBoneScaleV12"),
      bodyBoneScaleFiles: DynArray("PackCompositeBoneScaleFileV12"),
      ears: DynArray(Uint64),
      faceBoneScales: DynArray("PackCompositeBoneScaleV12"),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV12"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV12"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      skinStyleCount: Uint8,
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV12")
    },
    PackCompositeBoneScaleFileV12: {
      fileName: RefString16()
    },
    PackCompositeFileDataV12: {
      name: Uint64,
      type: Uint32,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint32
    },
    PackCompositeSkinPatternV12: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV12: {
      token: Uint64,
      boneScaleIndex: Uint32,
      components: DynArray("PackCompositeVariantComponentV12"),
      hairColor: "PackCompositeColorV12",
      hairColor2: "PackCompositeColorV12",
      patternColor: "PackCompositeColorV12",
      skinColor: "PackCompositeColorV12",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV12: {
      nameToken: Uint64,
      color0: "PackCompositeColorV12",
      color1: "PackCompositeColorV12",
      color2: "PackCompositeColorV12",
      color3: "PackCompositeColorV12"
    },
    PackCompositeColorV12: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV12"),
    boneScales: DynArray("PackCompositeBoneScaleV12"),
    raceSexData: DynArray("PackCompositeRaceDataV12"),
    configVersion: Uint16
  }
};

export const V13 = {
  chunkName: "comp",
  name: "PackCompositeV13",
  version: 13,
  definitions: {
    PackCompositeBlitRectSetV13: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeBoneScaleV13: {
      BodyRegion: DynArray("PackCompositeBoneScaleRegionV13"),
      MorphWeight: DynArray("PackCompositeMorphWeightV13")
    },
    PackCompositeBoneScaleRegionV13: {
      name: Uint64,
      value: Float32,
      Bone: DynArray("PackCompositeBoneScaleParamV13")
    },
    PackCompositeBoneScaleParamV13: {
      name: Uint64,
      flags: Uint8,
      max: Float32,
      min: Float32,
      rotate: FixedArray(Float32, 3),
      scale: FixedArray(Float32, 3),
      translate: FixedArray(Float32, 3)
    },
    PackCompositeMorphWeightV13: {
      value: Float32,
      name: Uint64
    },
    PackCompositeRaceDataV13: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      bodyBoneScales: DynArray("PackCompositeBoneScaleV13"),
      bodyBoneScaleFiles: DynArray("PackCompositeBoneScaleFileV13"),
      ears: DynArray(Uint64),
      faceBoneScales: DynArray("PackCompositeBoneScaleV13"),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV13"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV13"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      skinStyleCount: Uint8,
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV13")
    },
    PackCompositeBoneScaleFileV13: {
      fileName: RefString16()
    },
    PackCompositeFileDataV13: {
      name: Uint64,
      type: Uint8,
      flags: Uint8,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint8
    },
    PackCompositeSkinPatternV13: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV13: {
      token: Uint64,
      boneScaleIndex: Uint32,
      components: DynArray("PackCompositeVariantComponentV13"),
      hairColor: "PackCompositeColorV13",
      hairColor2: "PackCompositeColorV13",
      patternColor: "PackCompositeColorV13",
      skinColor: "PackCompositeColorV13",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV13: {
      nameToken: Uint64,
      color0: "PackCompositeColorV13",
      color1: "PackCompositeColorV13",
      color2: "PackCompositeColorV13",
      color3: "PackCompositeColorV13"
    },
    PackCompositeColorV13: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV13"),
    boneScales: DynArray("PackCompositeBoneScaleV13"),
    raceSexData: DynArray("PackCompositeRaceDataV13"),
    configVersion: Uint16
  }
};

export const V14 = {
  chunkName: "comp",
  name: "PackCompositeV14",
  version: 14,
  definitions: {
    PackCompositeBlitRectSetV14: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeBoneScaleV14: {
      BodyRegion: DynArray("PackCompositeBoneScaleRegionV14"),
      MorphWeight: DynArray("PackCompositeMorphWeightV14")
    },
    PackCompositeBoneScaleRegionV14: {
      name: Uint64,
      value: Float32,
      Bone: DynArray("PackCompositeBoneScaleParamV14")
    },
    PackCompositeBoneScaleParamV14: {
      name: Uint64,
      flags: Uint8,
      max: Float32,
      min: Float32,
      rotate: FixedArray(Float32, 3),
      scale: FixedArray(Float32, 3),
      translate: FixedArray(Float32, 3)
    },
    PackCompositeMorphWeightV14: {
      name: Uint64,
      value: Float32
    },
    PackCompositeRaceDataV14: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      bodyBoneScales: DynArray("PackCompositeBoneScaleV14"),
      bodyBoneScaleFiles: DynArray("PackCompositeBoneScaleFileV14"),
      ears: DynArray(Uint64),
      eyeColorPalette: RefString16(),
      faceBoneScales: DynArray("PackCompositeBoneScaleV14"),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV14"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV14"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      skinStyleCount: Uint8,
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV14")
    },
    PackCompositeBoneScaleFileV14: {
      fileName: RefString16()
    },
    PackCompositeFileDataV14: {
      name: Uint64,
      type: Uint8,
      flags: Uint8,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint8
    },
    PackCompositeSkinPatternV14: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV14: {
      token: Uint64,
      boneScaleIndex: Uint32,
      components: DynArray("PackCompositeVariantComponentV14"),
      eyeColor: "PackCompositeColorV14",
      hairColor: "PackCompositeColorV14",
      hairColor2: "PackCompositeColorV14",
      patternColor: "PackCompositeColorV14",
      skinColor: "PackCompositeColorV14",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV14: {
      nameToken: Uint64,
      color0: "PackCompositeColorV14",
      color1: "PackCompositeColorV14",
      color2: "PackCompositeColorV14",
      color3: "PackCompositeColorV14"
    },
    PackCompositeColorV14: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV14"),
    boneScales: DynArray("PackCompositeBoneScaleV14"),
    raceSexData: DynArray("PackCompositeRaceDataV14"),
    configVersion: Uint16
  }
};

export const V15 = {
  chunkName: "comp",
  name: "PackCompositeV15",
  version: 15,
  definitions: {
    PackCompositeBlitRectSetV15: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeBoneScaleV15: {
      BodyRegion: DynArray("PackCompositeBoneScaleRegionV15"),
      MorphWeight: DynArray("PackCompositeMorphWeightV15")
    },
    PackCompositeBoneScaleRegionV15: {
      name: Uint64,
      value: Float32,
      Bone: DynArray("PackCompositeBoneScaleParamV15")
    },
    PackCompositeBoneScaleParamV15: {
      name: Uint64,
      flags: Uint8,
      max: Float32,
      min: Float32,
      rotate: FixedArray(Float32, 3),
      scale: FixedArray(Float32, 3),
      translate: FixedArray(Float32, 3)
    },
    PackCompositeMorphWeightV15: {
      name: Uint64,
      value: Float32
    },
    PackCompositeRaceDataV15: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      bodyBoneScales: DynArray("PackCompositeBoneScaleV15"),
      bodyBoneScaleFiles: DynArray("PackCompositeBoneScaleFileV15"),
      ears: DynArray(Uint64),
      eyeColorPalette: RefString16(),
      faceBoneScales: DynArray("PackCompositeBoneScaleV15"),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV15"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Filename(),
      skinPatterns: DynArray("PackCompositeSkinPatternV15"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      skinStyleCount: Uint8,
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV15"),
      animOverrides: DynArray("PackCompositeAnimOverrideV15")
    },
    PackCompositeBoneScaleFileV15: {
      fileName: RefString16()
    },
    PackCompositeFileDataV15: {
      name: Uint64,
      type: Uint8,
      flags: Uint8,
      meshBase: Filename(),
      meshOverlap: Filename(),
      maskDye1: Filename(),
      maskDye2: Filename(),
      maskDye3: Filename(),
      maskDye4: Filename(),
      maskCut: Filename(),
      textureBase: Filename(),
      textureNormal: Filename(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint8
    },
    PackCompositeSkinPatternV15: {
      chest: Filename(),
      face: Filename(),
      feet: Filename(),
      hands: Filename(),
      legs: Filename(),
      ears: Filename()
    },
    PackCompositeVariantV15: {
      token: Uint64,
      boneScaleIndex: Uint32,
      components: DynArray("PackCompositeVariantComponentV15"),
      eyeColor: "PackCompositeColorV15",
      hairColor: "PackCompositeColorV15",
      hairColor2: "PackCompositeColorV15",
      patternColor: "PackCompositeColorV15",
      skinColor: "PackCompositeColorV15",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV15: {
      nameToken: Uint64,
      color0: "PackCompositeColorV15",
      color1: "PackCompositeColorV15",
      color2: "PackCompositeColorV15",
      color3: "PackCompositeColorV15"
    },
    PackCompositeColorV15: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    },
    PackCompositeAnimOverrideV15: {
      animRole: Uint64,
      filepath: Filename()
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV15"),
    boneScales: DynArray("PackCompositeBoneScaleV15"),
    raceSexData: DynArray("PackCompositeRaceDataV15"),
    configVersion: Uint16
  }
};

export const V16 = {
  chunkName: "comp",
  name: "PackCompositeV16",
  version: 16,
  definitions: {
    PackCompositeBlitRectSetV16: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeBoneScaleV16: {
      BodyRegion: DynArray("PackCompositeBoneScaleRegionV16"),
      MorphWeight: DynArray("PackCompositeMorphWeightV16")
    },
    PackCompositeBoneScaleRegionV16: {
      name: Uint64,
      value: Float32,
      Bone: DynArray("PackCompositeBoneScaleParamV16")
    },
    PackCompositeBoneScaleParamV16: {
      name: Uint64,
      flags: Uint8,
      max: Float32,
      min: Float32,
      rotate: FixedArray(Float32, 3),
      scale: FixedArray(Float32, 3),
      translate: FixedArray(Float32, 3)
    },
    PackCompositeMorphWeightV16: {
      name: Uint64,
      value: Float32
    },
    PackCompositeRaceDataV16: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      bodyBoneScales: DynArray("PackCompositeBoneScaleV16"),
      bodyBoneScaleFiles: DynArray("PackCompositeBoneScaleFileV16"),
      ears: DynArray(Uint64),
      eyeColorPalette: RefString16(),
      faceBoneScales: DynArray("PackCompositeBoneScaleV16"),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV16"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Fileref(),
      skinPatterns: DynArray("PackCompositeSkinPatternV16"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      skinStyleCount: Uint8,
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV16"),
      animOverrides: DynArray("PackCompositeAnimOverrideV16")
    },
    PackCompositeBoneScaleFileV16: {
      fileName: RefString16()
    },
    PackCompositeFileDataV16: {
      name: Uint64,
      type: Uint8,
      flags: Uint8,
      meshBase: Fileref(),
      meshOverlap: Fileref(),
      maskDye1: Fileref(),
      maskDye2: Fileref(),
      maskDye3: Fileref(),
      maskDye4: Fileref(),
      maskCut: Fileref(),
      textureBase: Fileref(),
      textureNormal: Fileref(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint8
    },
    PackCompositeSkinPatternV16: {
      chest: Fileref(),
      face: Fileref(),
      feet: Fileref(),
      hands: Fileref(),
      legs: Fileref(),
      ears: Fileref()
    },
    PackCompositeVariantV16: {
      token: Uint64,
      boneScaleIndex: Uint32,
      components: DynArray("PackCompositeVariantComponentV16"),
      eyeColor: "PackCompositeColorV16",
      hairColor: "PackCompositeColorV16",
      hairColor2: "PackCompositeColorV16",
      patternColor: "PackCompositeColorV16",
      skinColor: "PackCompositeColorV16",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV16: {
      nameToken: Uint64,
      color0: "PackCompositeColorV16",
      color1: "PackCompositeColorV16",
      color2: "PackCompositeColorV16",
      color3: "PackCompositeColorV16"
    },
    PackCompositeColorV16: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    },
    PackCompositeAnimOverrideV16: {
      animRole: Uint64,
      filepath: Fileref()
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV16"),
    boneScales: DynArray("PackCompositeBoneScaleV16"),
    raceSexData: DynArray("PackCompositeRaceDataV16"),
    configVersion: Uint16
  }
};

export const V17 = {
  chunkName: "comp",
  name: "PackCompositeV17",
  version: 17,
  definitions: {
    PackCompositeBlitRectSetV17: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeBoneScaleV17: {
      BodyRegion: DynArray("PackCompositeBoneScaleRegionV17"),
      MorphWeight: DynArray("PackCompositeMorphWeightV17")
    },
    PackCompositeBoneScaleRegionV17: {
      name: Uint64,
      value: Float32,
      Bone: DynArray("PackCompositeBoneScaleParamV17")
    },
    PackCompositeBoneScaleParamV17: {
      name: Uint64,
      flags: Uint8,
      max: Float32,
      min: Float32,
      rotate: FixedArray(Float32, 3),
      scale: FixedArray(Float32, 3),
      translate: FixedArray(Float32, 3)
    },
    PackCompositeMorphWeightV17: {
      name: Uint64,
      value: Float32
    },
    PackCompositeRaceDataV17: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      bodyBoneScales: DynArray("PackCompositeBoneScaleV17"),
      bodyBoneScaleFiles: DynArray("PackCompositeBoneScaleFileV17"),
      ears: DynArray(Uint64),
      eyeColorPalette: RefString16(),
      faceBoneScales: DynArray("PackCompositeBoneScaleV17"),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV17"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Fileref(),
      skinPatterns: DynArray("PackCompositeSkinPatternV17"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      skinStyles: DynArray("PackCompositeSkinStyleV17"),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV17"),
      animOverrides: DynArray("PackCompositeAnimOverrideV17")
    },
    PackCompositeBoneScaleFileV17: {
      fileName: RefString16()
    },
    PackCompositeFileDataV17: {
      name: Uint64,
      type: Uint8,
      flags: Uint8,
      meshBase: Fileref(),
      meshOverlap: Fileref(),
      maskDye1: Fileref(),
      maskDye2: Fileref(),
      maskDye3: Fileref(),
      maskDye4: Fileref(),
      maskCut: Fileref(),
      textureBase: Fileref(),
      textureNormal: Fileref(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint8
    },
    PackCompositeSkinPatternV17: {
      chest: Fileref(),
      face: Fileref(),
      feet: Fileref(),
      hands: Fileref(),
      legs: Fileref(),
      ears: Fileref()
    },
    PackCompositeSkinStyleV17: {
      chest: Uint64,
      feet: Uint64,
      hands: Uint64,
      legs: Uint64
    },
    PackCompositeVariantV17: {
      token: Uint64,
      boneScaleIndex: Uint32,
      components: DynArray("PackCompositeVariantComponentV17"),
      eyeColor: "PackCompositeColorV17",
      hairColor: "PackCompositeColorV17",
      hairColor2: "PackCompositeColorV17",
      patternColor: "PackCompositeColorV17",
      skinColor: "PackCompositeColorV17",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV17: {
      nameToken: Uint64,
      color0: "PackCompositeColorV17",
      color1: "PackCompositeColorV17",
      color2: "PackCompositeColorV17",
      color3: "PackCompositeColorV17"
    },
    PackCompositeColorV17: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    },
    PackCompositeAnimOverrideV17: {
      animRole: Uint64,
      filepath: Fileref()
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV17"),
    boneScales: DynArray("PackCompositeBoneScaleV17"),
    raceSexData: DynArray("PackCompositeRaceDataV17"),
    configVersion: Uint16
  }
};

export const V18 = {
  chunkName: "comp",
  name: "PackCompositeV18",
  version: 18,
  definitions: {
    PackCompositeBlitRectSetV18: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeBoneScaleV18: {
      BodyRegion: DynArray("PackCompositeBoneScaleRegionV18"),
      MorphWeight: DynArray("PackCompositeMorphWeightV18")
    },
    PackCompositeBoneScaleRegionV18: {
      name: Uint64,
      value: Float32,
      Bone: DynArray("PackCompositeBoneScaleParamV18")
    },
    PackCompositeBoneScaleParamV18: {
      name: Uint64,
      flags: Uint8,
      max: Float32,
      min: Float32,
      rotate: FixedArray(Float32, 3),
      scale: FixedArray(Float32, 3),
      translate: FixedArray(Float32, 3)
    },
    PackCompositeMorphWeightV18: {
      name: Uint64,
      value: Float32
    },
    PackCompositeRaceDataV18: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      bodyBoneScales: DynArray("PackCompositeBoneScaleV18"),
      bodyBoneScaleFiles: DynArray("PackCompositeBoneScaleFileV18"),
      ears: DynArray(Uint64),
      eyeColorPalette: RefString16(),
      faceBoneScales: DynArray("PackCompositeBoneScaleV18"),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV18"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Fileref(),
      skinPatterns: DynArray("PackCompositeSkinPatternV18"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      skinStyles: DynArray("PackCompositeSkinStyleV18"),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV18"),
      animOverrides: DynArray("PackCompositeAnimOverrideV18")
    },
    PackCompositeBoneScaleFileV18: {
      fileName: RefString16()
    },
    PackCompositeFileDataV18: {
      name: Uint64,
      type: Uint8,
      flags: Uint8,
      animRoleOverride: Uint64,
      meshBase: Fileref(),
      meshOverlap: Fileref(),
      maskDye1: Fileref(),
      maskDye2: Fileref(),
      maskDye3: Fileref(),
      maskDye4: Fileref(),
      maskCut: Fileref(),
      textureBase: Fileref(),
      textureNormal: Fileref(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint8
    },
    PackCompositeSkinPatternV18: {
      chest: Fileref(),
      face: Fileref(),
      feet: Fileref(),
      hands: Fileref(),
      legs: Fileref(),
      ears: Fileref()
    },
    PackCompositeSkinStyleV18: {
      chest: Uint64,
      feet: Uint64,
      hands: Uint64,
      legs: Uint64
    },
    PackCompositeVariantV18: {
      token: Uint64,
      boneScaleIndex: Uint32,
      components: DynArray("PackCompositeVariantComponentV18"),
      eyeColor: "PackCompositeColorV18",
      hairColor: "PackCompositeColorV18",
      hairColor2: "PackCompositeColorV18",
      patternColor: "PackCompositeColorV18",
      skinColor: "PackCompositeColorV18",
      skinIndex: Uint32
    },
    PackCompositeVariantComponentV18: {
      nameToken: Uint64,
      color0: "PackCompositeColorV18",
      color1: "PackCompositeColorV18",
      color2: "PackCompositeColorV18",
      color3: "PackCompositeColorV18"
    },
    PackCompositeColorV18: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    },
    PackCompositeAnimOverrideV18: {
      animRole: Uint64,
      filepath: Fileref()
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV18"),
    boneScales: DynArray("PackCompositeBoneScaleV18"),
    raceSexData: DynArray("PackCompositeRaceDataV18"),
    configVersion: Uint16
  }
};

export const V19 = {
  chunkName: "comp",
  name: "PackCompositeV19",
  version: 19,
  definitions: {
    PackCompositeBlitRectSetV19: {
      name: RefString16(),
      size: FixedArray(Uint32, 2),
      rectIndex: DynArray(Uint8),
      rectArray: DynArray(FixedArray(Uint32, 4))
    },
    PackCompositeBoneScaleV19: {
      BodyRegion: DynArray("PackCompositeBoneScaleRegionV19"),
      MorphWeight: DynArray("PackCompositeMorphWeightV19")
    },
    PackCompositeBoneScaleRegionV19: {
      name: Uint64,
      value: Float32,
      Bone: DynArray("PackCompositeBoneScaleParamV19")
    },
    PackCompositeBoneScaleParamV19: {
      name: Uint64,
      flags: Uint8,
      max: Float32,
      min: Float32,
      rotate: FixedArray(Float32, 3),
      scale: FixedArray(Float32, 3),
      translate: FixedArray(Float32, 3)
    },
    PackCompositeMorphWeightV19: {
      name: Uint64,
      value: Float32
    },
    PackCompositeRaceDataV19: {
      name: RefString16(),
      nameToken: Uint64,
      baseHeadToken: Uint64,
      beard: DynArray(Uint64),
      bodyBoneScales: DynArray("PackCompositeBoneScaleV19"),
      bodyBoneScaleFiles: DynArray("PackCompositeBoneScaleFileV19"),
      ears: DynArray(Uint64),
      eyeColorPalette: RefString16(),
      faceBoneScales: DynArray("PackCompositeBoneScaleV19"),
      faces: DynArray(Uint64),
      fileData: DynArray("PackCompositeFileDataV19"),
      flags: Uint32,
      hairStyles: DynArray(Uint64),
      hairColorPalette: RefString16(),
      skeletonFile: Fileref(),
      skinPatterns: DynArray("PackCompositeSkinPatternV19"),
      skinColorPalette: RefString16(),
      skinPatternPalette: RefString16(),
      skinStyles: DynArray("PackCompositeSkinStyleV19"),
      type: Uint32,
      variantRefRace: Uint64,
      variants: DynArray("PackCompositeVariantV19"),
      animOverrides: DynArray("PackCompositeAnimOverrideV19")
    },
    PackCompositeBoneScaleFileV19: {
      fileName: RefString16()
    },
    PackCompositeFileDataV19: {
      name: Uint64,
      type: Uint8,
      flags: Uint8,
      animRoleOverride: Uint64,
      meshBase: Fileref(),
      meshOverlap: Fileref(),
      maskDye1: Fileref(),
      maskDye2: Fileref(),
      maskDye3: Fileref(),
      maskDye4: Fileref(),
      maskCut: Fileref(),
      textureBase: Fileref(),
      textureNormal: Fileref(),
      dyeFlags: Uint32,
      hideFlags: Uint32,
      skinFlags: Uint32,
      blitRectIndex: Uint8
    },
    PackCompositeSkinPatternV19: {
      chest: Fileref(),
      face: Fileref(),
      feet: Fileref(),
      hands: Fileref(),
      legs: Fileref(),
      ears: Fileref()
    },
    PackCompositeSkinStyleV19: {
      chest: Uint64,
      feet: Uint64,
      hands: Uint64,
      legs: Uint64
    },
    PackCompositeVariantV19: {
      token: Uint64,
      boneScaleIndex: Uint32,
      components: DynArray("PackCompositeVariantComponentV19"),
      eyeColor: "PackCompositeColorV19",
      hairColor: "PackCompositeColorV19",
      hairColor2: "PackCompositeColorV19",
      patternColor: "PackCompositeColorV19",
      skinColor: "PackCompositeColorV19",
      skinIndex: Uint32,
      skinStyle: Uint32
    },
    PackCompositeVariantComponentV19: {
      nameToken: Uint64,
      color0: "PackCompositeColorV19",
      color1: "PackCompositeColorV19",
      color2: "PackCompositeColorV19",
      color3: "PackCompositeColorV19"
    },
    PackCompositeColorV19: {
      brightness: Uint8,
      contrast: Uint8,
      hue: Uint8,
      saturation: Uint8,
      lightness: Uint8
    },
    PackCompositeAnimOverrideV19: {
      animRole: Uint64,
      filepath: Fileref()
    }
  },
  root: {
    armorColorIds: DynArray(Uint32),
    blitRects: DynArray("PackCompositeBlitRectSetV19"),
    boneScales: DynArray("PackCompositeBoneScaleV19"),
    raceSexData: DynArray("PackCompositeRaceDataV19"),
    configVersion: Uint16
  }
};

export const latest = V19;
export const definitionArray = [V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14, V15, V16, V17, V18, V19];