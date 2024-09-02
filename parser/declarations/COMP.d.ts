export namespace V0_N {
  export type PackCompositeV0 = {
    blitRects: Array<PackCompositeBlitRectSetV0>,
    raceSexData: Array<PackCompositeRaceDataV0>
  }

  export type PackCompositeBlitRectSetV0 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV0 = {
    name: string,
    nameToken: BigInt,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV0>,
    hairStyles: Array<BigInt>,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV0>,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV0>
  }

  export type PackCompositeFileDataV0 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskClothSkin: string,
    maskLeather: string,
    maskMetal: string,
    maskGlow: string,
    textureBase: string,
    textureNormal: string,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV0 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string
  }

  export type PackCompositeVariantV0 = {
    components: Array<PackCompositeVariantComponentV0>,
    hairColor: PackCompositeColorV0,
    patternColor: PackCompositeColorV0,
    skinColor: PackCompositeColorV0,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV0 = {
    nameToken: BigInt,
    clothColor: PackCompositeColorV0,
    leatherColor: PackCompositeColorV0,
    metalColor: PackCompositeColorV0
  }

  export type PackCompositeColorV0 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V0 = V0_N.PackCompositeV0;

export namespace V1_N {
  export type PackCompositeV1 = {
    blitRects: Array<PackCompositeBlitRectSetV1>,
    raceSexData: Array<PackCompositeRaceDataV1>
  }

  export type PackCompositeBlitRectSetV1 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV1 = {
    name: string,
    nameToken: BigInt,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV1>,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV1>,
    skinColorPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV1>
  }

  export type PackCompositeFileDataV1 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV1 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string
  }

  export type PackCompositeVariantV1 = {
    components: Array<PackCompositeVariantComponentV1>,
    hairColor: PackCompositeColorV1,
    patternColor: PackCompositeColorV1,
    skinColor: PackCompositeColorV1,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV1 = {
    nameToken: BigInt,
    clothColor: PackCompositeColorV1,
    leatherColor: PackCompositeColorV1,
    metalColor: PackCompositeColorV1
  }

  export type PackCompositeColorV1 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V1 = V1_N.PackCompositeV1;

export namespace V2_N {
  export type PackCompositeV2 = {
    blitRects: Array<PackCompositeBlitRectSetV2>,
    raceSexData: Array<PackCompositeRaceDataV2>
  }

  export type PackCompositeBlitRectSetV2 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV2 = {
    name: string,
    nameToken: BigInt,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV2>,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV2>,
    skinColorPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV2>
  }

  export type PackCompositeFileDataV2 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV2 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string
  }

  export type PackCompositeVariantV2 = {
    components: Array<PackCompositeVariantComponentV2>,
    hairColor: PackCompositeColorV2,
    patternColor: PackCompositeColorV2,
    skinColor: PackCompositeColorV2,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV2 = {
    nameToken: BigInt,
    clothColor: PackCompositeColorV2,
    leatherColor: PackCompositeColorV2,
    metalColor: PackCompositeColorV2
  }

  export type PackCompositeColorV2 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V2 = V2_N.PackCompositeV2;

export namespace V3_N {
  export type PackCompositeV3 = {
    blitRects: Array<PackCompositeBlitRectSetV3>,
    raceSexData: Array<PackCompositeRaceDataV3>
  }

  export type PackCompositeBlitRectSetV3 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV3 = {
    name: string,
    nameToken: BigInt,
    beard: Array<BigInt>,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV3>,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV3>,
    skinColorPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV3>
  }

  export type PackCompositeFileDataV3 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV3 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string
  }

  export type PackCompositeVariantV3 = {
    components: Array<PackCompositeVariantComponentV3>,
    hairColor: PackCompositeColorV3,
    patternColor: PackCompositeColorV3,
    skinColor: PackCompositeColorV3,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV3 = {
    nameToken: BigInt,
    clothColor: PackCompositeColorV3,
    leatherColor: PackCompositeColorV3,
    metalColor: PackCompositeColorV3
  }

  export type PackCompositeColorV3 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V3 = V3_N.PackCompositeV3;

export namespace V4_N {
  export type PackCompositeV4 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV4>,
    raceSexData: Array<PackCompositeRaceDataV4>
  }

  export type PackCompositeBlitRectSetV4 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV4 = {
    name: string,
    nameToken: BigInt,
    beard: Array<BigInt>,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV4>,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV4>,
    skinColorPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV4>
  }

  export type PackCompositeFileDataV4 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV4 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string
  }

  export type PackCompositeVariantV4 = {
    components: Array<PackCompositeVariantComponentV4>,
    hairColor: PackCompositeColorV4,
    patternColor: PackCompositeColorV4,
    skinColor: PackCompositeColorV4,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV4 = {
    nameToken: BigInt,
    clothColor: PackCompositeColorV4,
    leatherColor: PackCompositeColorV4,
    metalColor: PackCompositeColorV4
  }

  export type PackCompositeColorV4 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V4 = V4_N.PackCompositeV4;

export namespace V5_N {
  export type PackCompositeV5 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV5>,
    raceSexData: Array<PackCompositeRaceDataV5>
  }

  export type PackCompositeBlitRectSetV5 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV5 = {
    name: string,
    nameToken: BigInt,
    beard: Array<BigInt>,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV5>,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV5>,
    skinColorPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV5>
  }

  export type PackCompositeFileDataV5 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV5 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string
  }

  export type PackCompositeVariantV5 = {
    token: BigInt,
    components: Array<PackCompositeVariantComponentV5>,
    hairColor: PackCompositeColorV5,
    hairColor2: PackCompositeColorV5,
    patternColor: PackCompositeColorV5,
    skinColor: PackCompositeColorV5,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV5 = {
    nameToken: BigInt,
    color0: PackCompositeColorV5,
    color1: PackCompositeColorV5,
    color2: PackCompositeColorV5,
    color3: PackCompositeColorV5
  }

  export type PackCompositeColorV5 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V5 = V5_N.PackCompositeV5;

export namespace V6_N {
  export type PackCompositeV6 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV6>,
    raceSexData: Array<PackCompositeRaceDataV6>
  }

  export type PackCompositeBlitRectSetV6 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV6 = {
    name: string,
    nameToken: BigInt,
    beard: Array<BigInt>,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV6>,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV6>,
    skinColorPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV6>
  }

  export type PackCompositeFileDataV6 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV6 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV6 = {
    token: BigInt,
    components: Array<PackCompositeVariantComponentV6>,
    hairColor: PackCompositeColorV6,
    hairColor2: PackCompositeColorV6,
    patternColor: PackCompositeColorV6,
    skinColor: PackCompositeColorV6,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV6 = {
    nameToken: BigInt,
    color0: PackCompositeColorV6,
    color1: PackCompositeColorV6,
    color2: PackCompositeColorV6,
    color3: PackCompositeColorV6
  }

  export type PackCompositeColorV6 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V6 = V6_N.PackCompositeV6;

export namespace V7_N {
  export type PackCompositeV7 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV7>,
    raceSexData: Array<PackCompositeRaceDataV7>
  }

  export type PackCompositeBlitRectSetV7 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV7 = {
    name: string,
    nameToken: BigInt,
    beard: Array<BigInt>,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV7>,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV7>,
    skinColorPalette: string,
    skinPatternPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV7>
  }

  export type PackCompositeFileDataV7 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV7 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV7 = {
    token: BigInt,
    components: Array<PackCompositeVariantComponentV7>,
    hairColor: PackCompositeColorV7,
    hairColor2: PackCompositeColorV7,
    patternColor: PackCompositeColorV7,
    skinColor: PackCompositeColorV7,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV7 = {
    nameToken: BigInt,
    color0: PackCompositeColorV7,
    color1: PackCompositeColorV7,
    color2: PackCompositeColorV7,
    color3: PackCompositeColorV7
  }

  export type PackCompositeColorV7 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V7 = V7_N.PackCompositeV7;

export namespace V8_N {
  export type PackCompositeV8 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV8>,
    raceSexData: Array<PackCompositeRaceDataV8>
  }

  export type PackCompositeBlitRectSetV8 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV8 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV8>,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV8>,
    skinColorPalette: string,
    skinPatternPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV8>
  }

  export type PackCompositeFileDataV8 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV8 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV8 = {
    token: BigInt,
    components: Array<PackCompositeVariantComponentV8>,
    hairColor: PackCompositeColorV8,
    hairColor2: PackCompositeColorV8,
    patternColor: PackCompositeColorV8,
    skinColor: PackCompositeColorV8,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV8 = {
    nameToken: BigInt,
    color0: PackCompositeColorV8,
    color1: PackCompositeColorV8,
    color2: PackCompositeColorV8,
    color3: PackCompositeColorV8
  }

  export type PackCompositeColorV8 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V8 = V8_N.PackCompositeV8;

export namespace V9_N {
  export type PackCompositeV9 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV9>,
    raceSexData: Array<PackCompositeRaceDataV9>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV9 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV9 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV9>,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV9>,
    skinColorPalette: string,
    skinPatternPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV9>
  }

  export type PackCompositeFileDataV9 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV9 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV9 = {
    token: BigInt,
    components: Array<PackCompositeVariantComponentV9>,
    hairColor: PackCompositeColorV9,
    hairColor2: PackCompositeColorV9,
    patternColor: PackCompositeColorV9,
    skinColor: PackCompositeColorV9,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV9 = {
    nameToken: BigInt,
    color0: PackCompositeColorV9,
    color1: PackCompositeColorV9,
    color2: PackCompositeColorV9,
    color3: PackCompositeColorV9
  }

  export type PackCompositeColorV9 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V9 = V9_N.PackCompositeV9;

export namespace V10_N {
  export type PackCompositeV10 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV10>,
    raceSexData: Array<PackCompositeRaceDataV10>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV10 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeRaceDataV10 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV10>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV10>,
    skinColorPalette: string,
    skinPatternPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV10>
  }

  export type PackCompositeFileDataV10 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV10 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV10 = {
    token: BigInt,
    components: Array<PackCompositeVariantComponentV10>,
    hairColor: PackCompositeColorV10,
    hairColor2: PackCompositeColorV10,
    patternColor: PackCompositeColorV10,
    skinColor: PackCompositeColorV10,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV10 = {
    nameToken: BigInt,
    color0: PackCompositeColorV10,
    color1: PackCompositeColorV10,
    color2: PackCompositeColorV10,
    color3: PackCompositeColorV10
  }

  export type PackCompositeColorV10 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V10 = V10_N.PackCompositeV10;

export namespace V11_N {
  export type PackCompositeV11 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV11>,
    boneScales: Array<PackCompositeBoneScaleV11>,
    raceSexData: Array<PackCompositeRaceDataV11>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV11 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeBoneScaleV11 = {
    BodyRegion: Array<PackCompositeBoneScaleRegionV11>
  }

  export type PackCompositeBoneScaleRegionV11 = {
    value: number,
    Bone: Array<PackCompositeBoneScaleParamV11>
  }

  export type PackCompositeBoneScaleParamV11 = {
    name: BigInt,
    flags: number,
    max: number,
    min: number,
    rotate: Array<number>,
    scale: Array<number>,
    translate: Array<number>
  }

  export type PackCompositeRaceDataV11 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    ears: Array<BigInt>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV11>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV11>,
    skinColorPalette: string,
    skinPatternPalette: string,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV11>
  }

  export type PackCompositeFileDataV11 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV11 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV11 = {
    token: BigInt,
    boneScaleIndex: number,
    components: Array<PackCompositeVariantComponentV11>,
    hairColor: PackCompositeColorV11,
    hairColor2: PackCompositeColorV11,
    patternColor: PackCompositeColorV11,
    skinColor: PackCompositeColorV11,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV11 = {
    nameToken: BigInt,
    color0: PackCompositeColorV11,
    color1: PackCompositeColorV11,
    color2: PackCompositeColorV11,
    color3: PackCompositeColorV11
  }

  export type PackCompositeColorV11 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V11 = V11_N.PackCompositeV11;

export namespace V12_N {
  export type PackCompositeV12 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV12>,
    boneScales: Array<PackCompositeBoneScaleV12>,
    raceSexData: Array<PackCompositeRaceDataV12>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV12 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeBoneScaleV12 = {
    BodyRegion: Array<PackCompositeBoneScaleRegionV12>,
    MorphWeight: Array<PackCompositeMorphWeightV12>
  }

  export type PackCompositeBoneScaleRegionV12 = {
    name: BigInt,
    value: number,
    Bone: Array<PackCompositeBoneScaleParamV12>
  }

  export type PackCompositeBoneScaleParamV12 = {
    name: BigInt,
    flags: number,
    max: number,
    min: number,
    rotate: Array<number>,
    scale: Array<number>,
    translate: Array<number>
  }

  export type PackCompositeMorphWeightV12 = {
    value: number,
    name: BigInt
  }

  export type PackCompositeRaceDataV12 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    bodyBoneScales: Array<PackCompositeBoneScaleV12>,
    bodyBoneScaleFiles: Array<PackCompositeBoneScaleFileV12>,
    ears: Array<BigInt>,
    faceBoneScales: Array<PackCompositeBoneScaleV12>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV12>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV12>,
    skinColorPalette: string,
    skinPatternPalette: string,
    skinStyleCount: number,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV12>
  }

  export type PackCompositeBoneScaleFileV12 = {
    fileName: string
  }

  export type PackCompositeFileDataV12 = {
    name: BigInt,
    type: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV12 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV12 = {
    token: BigInt,
    boneScaleIndex: number,
    components: Array<PackCompositeVariantComponentV12>,
    hairColor: PackCompositeColorV12,
    hairColor2: PackCompositeColorV12,
    patternColor: PackCompositeColorV12,
    skinColor: PackCompositeColorV12,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV12 = {
    nameToken: BigInt,
    color0: PackCompositeColorV12,
    color1: PackCompositeColorV12,
    color2: PackCompositeColorV12,
    color3: PackCompositeColorV12
  }

  export type PackCompositeColorV12 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V12 = V12_N.PackCompositeV12;

export namespace V13_N {
  export type PackCompositeV13 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV13>,
    boneScales: Array<PackCompositeBoneScaleV13>,
    raceSexData: Array<PackCompositeRaceDataV13>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV13 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeBoneScaleV13 = {
    BodyRegion: Array<PackCompositeBoneScaleRegionV13>,
    MorphWeight: Array<PackCompositeMorphWeightV13>
  }

  export type PackCompositeBoneScaleRegionV13 = {
    name: BigInt,
    value: number,
    Bone: Array<PackCompositeBoneScaleParamV13>
  }

  export type PackCompositeBoneScaleParamV13 = {
    name: BigInt,
    flags: number,
    max: number,
    min: number,
    rotate: Array<number>,
    scale: Array<number>,
    translate: Array<number>
  }

  export type PackCompositeMorphWeightV13 = {
    value: number,
    name: BigInt
  }

  export type PackCompositeRaceDataV13 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    bodyBoneScales: Array<PackCompositeBoneScaleV13>,
    bodyBoneScaleFiles: Array<PackCompositeBoneScaleFileV13>,
    ears: Array<BigInt>,
    faceBoneScales: Array<PackCompositeBoneScaleV13>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV13>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV13>,
    skinColorPalette: string,
    skinPatternPalette: string,
    skinStyleCount: number,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV13>
  }

  export type PackCompositeBoneScaleFileV13 = {
    fileName: string
  }

  export type PackCompositeFileDataV13 = {
    name: BigInt,
    type: number,
    flags: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV13 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV13 = {
    token: BigInt,
    boneScaleIndex: number,
    components: Array<PackCompositeVariantComponentV13>,
    hairColor: PackCompositeColorV13,
    hairColor2: PackCompositeColorV13,
    patternColor: PackCompositeColorV13,
    skinColor: PackCompositeColorV13,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV13 = {
    nameToken: BigInt,
    color0: PackCompositeColorV13,
    color1: PackCompositeColorV13,
    color2: PackCompositeColorV13,
    color3: PackCompositeColorV13
  }

  export type PackCompositeColorV13 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V13 = V13_N.PackCompositeV13;

export namespace V14_N {
  export type PackCompositeV14 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV14>,
    boneScales: Array<PackCompositeBoneScaleV14>,
    raceSexData: Array<PackCompositeRaceDataV14>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV14 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeBoneScaleV14 = {
    BodyRegion: Array<PackCompositeBoneScaleRegionV14>,
    MorphWeight: Array<PackCompositeMorphWeightV14>
  }

  export type PackCompositeBoneScaleRegionV14 = {
    name: BigInt,
    value: number,
    Bone: Array<PackCompositeBoneScaleParamV14>
  }

  export type PackCompositeBoneScaleParamV14 = {
    name: BigInt,
    flags: number,
    max: number,
    min: number,
    rotate: Array<number>,
    scale: Array<number>,
    translate: Array<number>
  }

  export type PackCompositeMorphWeightV14 = {
    name: BigInt,
    value: number
  }

  export type PackCompositeRaceDataV14 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    bodyBoneScales: Array<PackCompositeBoneScaleV14>,
    bodyBoneScaleFiles: Array<PackCompositeBoneScaleFileV14>,
    ears: Array<BigInt>,
    eyeColorPalette: string,
    faceBoneScales: Array<PackCompositeBoneScaleV14>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV14>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV14>,
    skinColorPalette: string,
    skinPatternPalette: string,
    skinStyleCount: number,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV14>
  }

  export type PackCompositeBoneScaleFileV14 = {
    fileName: string
  }

  export type PackCompositeFileDataV14 = {
    name: BigInt,
    type: number,
    flags: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV14 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV14 = {
    token: BigInt,
    boneScaleIndex: number,
    components: Array<PackCompositeVariantComponentV14>,
    eyeColor: PackCompositeColorV14,
    hairColor: PackCompositeColorV14,
    hairColor2: PackCompositeColorV14,
    patternColor: PackCompositeColorV14,
    skinColor: PackCompositeColorV14,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV14 = {
    nameToken: BigInt,
    color0: PackCompositeColorV14,
    color1: PackCompositeColorV14,
    color2: PackCompositeColorV14,
    color3: PackCompositeColorV14
  }

  export type PackCompositeColorV14 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

}

export type V14 = V14_N.PackCompositeV14;

export namespace V15_N {
  export type PackCompositeV15 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV15>,
    boneScales: Array<PackCompositeBoneScaleV15>,
    raceSexData: Array<PackCompositeRaceDataV15>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV15 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeBoneScaleV15 = {
    BodyRegion: Array<PackCompositeBoneScaleRegionV15>,
    MorphWeight: Array<PackCompositeMorphWeightV15>
  }

  export type PackCompositeBoneScaleRegionV15 = {
    name: BigInt,
    value: number,
    Bone: Array<PackCompositeBoneScaleParamV15>
  }

  export type PackCompositeBoneScaleParamV15 = {
    name: BigInt,
    flags: number,
    max: number,
    min: number,
    rotate: Array<number>,
    scale: Array<number>,
    translate: Array<number>
  }

  export type PackCompositeMorphWeightV15 = {
    name: BigInt,
    value: number
  }

  export type PackCompositeRaceDataV15 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    bodyBoneScales: Array<PackCompositeBoneScaleV15>,
    bodyBoneScaleFiles: Array<PackCompositeBoneScaleFileV15>,
    ears: Array<BigInt>,
    eyeColorPalette: string,
    faceBoneScales: Array<PackCompositeBoneScaleV15>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV15>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV15>,
    skinColorPalette: string,
    skinPatternPalette: string,
    skinStyleCount: number,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV15>,
    animOverrides: Array<PackCompositeAnimOverrideV15>
  }

  export type PackCompositeBoneScaleFileV15 = {
    fileName: string
  }

  export type PackCompositeFileDataV15 = {
    name: BigInt,
    type: number,
    flags: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV15 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV15 = {
    token: BigInt,
    boneScaleIndex: number,
    components: Array<PackCompositeVariantComponentV15>,
    eyeColor: PackCompositeColorV15,
    hairColor: PackCompositeColorV15,
    hairColor2: PackCompositeColorV15,
    patternColor: PackCompositeColorV15,
    skinColor: PackCompositeColorV15,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV15 = {
    nameToken: BigInt,
    color0: PackCompositeColorV15,
    color1: PackCompositeColorV15,
    color2: PackCompositeColorV15,
    color3: PackCompositeColorV15
  }

  export type PackCompositeColorV15 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

  export type PackCompositeAnimOverrideV15 = {
    animRole: BigInt,
    filepath: string
  }

}

export type V15 = V15_N.PackCompositeV15;

export namespace V16_N {
  export type PackCompositeV16 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV16>,
    boneScales: Array<PackCompositeBoneScaleV16>,
    raceSexData: Array<PackCompositeRaceDataV16>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV16 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeBoneScaleV16 = {
    BodyRegion: Array<PackCompositeBoneScaleRegionV16>,
    MorphWeight: Array<PackCompositeMorphWeightV16>
  }

  export type PackCompositeBoneScaleRegionV16 = {
    name: BigInt,
    value: number,
    Bone: Array<PackCompositeBoneScaleParamV16>
  }

  export type PackCompositeBoneScaleParamV16 = {
    name: BigInt,
    flags: number,
    max: number,
    min: number,
    rotate: Array<number>,
    scale: Array<number>,
    translate: Array<number>
  }

  export type PackCompositeMorphWeightV16 = {
    name: BigInt,
    value: number
  }

  export type PackCompositeRaceDataV16 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    bodyBoneScales: Array<PackCompositeBoneScaleV16>,
    bodyBoneScaleFiles: Array<PackCompositeBoneScaleFileV16>,
    ears: Array<BigInt>,
    eyeColorPalette: string,
    faceBoneScales: Array<PackCompositeBoneScaleV16>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV16>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV16>,
    skinColorPalette: string,
    skinPatternPalette: string,
    skinStyleCount: number,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV16>,
    animOverrides: Array<PackCompositeAnimOverrideV16>
  }

  export type PackCompositeBoneScaleFileV16 = {
    fileName: string
  }

  export type PackCompositeFileDataV16 = {
    name: BigInt,
    type: number,
    flags: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV16 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeVariantV16 = {
    token: BigInt,
    boneScaleIndex: number,
    components: Array<PackCompositeVariantComponentV16>,
    eyeColor: PackCompositeColorV16,
    hairColor: PackCompositeColorV16,
    hairColor2: PackCompositeColorV16,
    patternColor: PackCompositeColorV16,
    skinColor: PackCompositeColorV16,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV16 = {
    nameToken: BigInt,
    color0: PackCompositeColorV16,
    color1: PackCompositeColorV16,
    color2: PackCompositeColorV16,
    color3: PackCompositeColorV16
  }

  export type PackCompositeColorV16 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

  export type PackCompositeAnimOverrideV16 = {
    animRole: BigInt,
    filepath: string
  }

}

export type V16 = V16_N.PackCompositeV16;

export namespace V17_N {
  export type PackCompositeV17 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV17>,
    boneScales: Array<PackCompositeBoneScaleV17>,
    raceSexData: Array<PackCompositeRaceDataV17>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV17 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeBoneScaleV17 = {
    BodyRegion: Array<PackCompositeBoneScaleRegionV17>,
    MorphWeight: Array<PackCompositeMorphWeightV17>
  }

  export type PackCompositeBoneScaleRegionV17 = {
    name: BigInt,
    value: number,
    Bone: Array<PackCompositeBoneScaleParamV17>
  }

  export type PackCompositeBoneScaleParamV17 = {
    name: BigInt,
    flags: number,
    max: number,
    min: number,
    rotate: Array<number>,
    scale: Array<number>,
    translate: Array<number>
  }

  export type PackCompositeMorphWeightV17 = {
    name: BigInt,
    value: number
  }

  export type PackCompositeRaceDataV17 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    bodyBoneScales: Array<PackCompositeBoneScaleV17>,
    bodyBoneScaleFiles: Array<PackCompositeBoneScaleFileV17>,
    ears: Array<BigInt>,
    eyeColorPalette: string,
    faceBoneScales: Array<PackCompositeBoneScaleV17>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV17>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV17>,
    skinColorPalette: string,
    skinPatternPalette: string,
    skinStyles: Array<PackCompositeSkinStyleV17>,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV17>,
    animOverrides: Array<PackCompositeAnimOverrideV17>
  }

  export type PackCompositeBoneScaleFileV17 = {
    fileName: string
  }

  export type PackCompositeFileDataV17 = {
    name: BigInt,
    type: number,
    flags: number,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV17 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeSkinStyleV17 = {
    chest: BigInt,
    feet: BigInt,
    hands: BigInt,
    legs: BigInt
  }

  export type PackCompositeVariantV17 = {
    token: BigInt,
    boneScaleIndex: number,
    components: Array<PackCompositeVariantComponentV17>,
    eyeColor: PackCompositeColorV17,
    hairColor: PackCompositeColorV17,
    hairColor2: PackCompositeColorV17,
    patternColor: PackCompositeColorV17,
    skinColor: PackCompositeColorV17,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV17 = {
    nameToken: BigInt,
    color0: PackCompositeColorV17,
    color1: PackCompositeColorV17,
    color2: PackCompositeColorV17,
    color3: PackCompositeColorV17
  }

  export type PackCompositeColorV17 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

  export type PackCompositeAnimOverrideV17 = {
    animRole: BigInt,
    filepath: string
  }

}

export type V17 = V17_N.PackCompositeV17;

export namespace V18_N {
  export type PackCompositeV18 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV18>,
    boneScales: Array<PackCompositeBoneScaleV18>,
    raceSexData: Array<PackCompositeRaceDataV18>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV18 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeBoneScaleV18 = {
    BodyRegion: Array<PackCompositeBoneScaleRegionV18>,
    MorphWeight: Array<PackCompositeMorphWeightV18>
  }

  export type PackCompositeBoneScaleRegionV18 = {
    name: BigInt,
    value: number,
    Bone: Array<PackCompositeBoneScaleParamV18>
  }

  export type PackCompositeBoneScaleParamV18 = {
    name: BigInt,
    flags: number,
    max: number,
    min: number,
    rotate: Array<number>,
    scale: Array<number>,
    translate: Array<number>
  }

  export type PackCompositeMorphWeightV18 = {
    name: BigInt,
    value: number
  }

  export type PackCompositeRaceDataV18 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    bodyBoneScales: Array<PackCompositeBoneScaleV18>,
    bodyBoneScaleFiles: Array<PackCompositeBoneScaleFileV18>,
    ears: Array<BigInt>,
    eyeColorPalette: string,
    faceBoneScales: Array<PackCompositeBoneScaleV18>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV18>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV18>,
    skinColorPalette: string,
    skinPatternPalette: string,
    skinStyles: Array<PackCompositeSkinStyleV18>,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV18>,
    animOverrides: Array<PackCompositeAnimOverrideV18>
  }

  export type PackCompositeBoneScaleFileV18 = {
    fileName: string
  }

  export type PackCompositeFileDataV18 = {
    name: BigInt,
    type: number,
    flags: number,
    animRoleOverride: BigInt,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV18 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeSkinStyleV18 = {
    chest: BigInt,
    feet: BigInt,
    hands: BigInt,
    legs: BigInt
  }

  export type PackCompositeVariantV18 = {
    token: BigInt,
    boneScaleIndex: number,
    components: Array<PackCompositeVariantComponentV18>,
    eyeColor: PackCompositeColorV18,
    hairColor: PackCompositeColorV18,
    hairColor2: PackCompositeColorV18,
    patternColor: PackCompositeColorV18,
    skinColor: PackCompositeColorV18,
    skinIndex: number
  }

  export type PackCompositeVariantComponentV18 = {
    nameToken: BigInt,
    color0: PackCompositeColorV18,
    color1: PackCompositeColorV18,
    color2: PackCompositeColorV18,
    color3: PackCompositeColorV18
  }

  export type PackCompositeColorV18 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

  export type PackCompositeAnimOverrideV18 = {
    animRole: BigInt,
    filepath: string
  }

}

export type V18 = V18_N.PackCompositeV18;

export namespace V19_N {
  export type PackCompositeV20 = {
    armorColorIds: Array<number>,
    blitRects: Array<PackCompositeBlitRectSetV20>,
    boneScales: Array<PackCompositeBoneScaleV20>,
    raceSexData: Array<PackCompositeRaceDataV20>,
    configVersion: number
  }

  export type PackCompositeBlitRectSetV20 = {
    name: string,
    size: Array<number>,
    rectIndex: Array<number>,
    rectArray: Array<Array<number>>
  }

  export type PackCompositeBoneScaleV20 = {
    BodyRegion: Array<PackCompositeBoneScaleRegionV20>,
    MorphWeight: Array<PackCompositeMorphWeightV20>
  }

  export type PackCompositeBoneScaleRegionV20 = {
    name: BigInt,
    value: number,
    Bone: Array<PackCompositeBoneScaleParamV20>
  }

  export type PackCompositeBoneScaleParamV20 = {
    name: BigInt,
    flags: number,
    max: number,
    min: number,
    rotate: Array<number>,
    scale: Array<number>,
    translate: Array<number>
  }

  export type PackCompositeMorphWeightV20 = {
    name: BigInt,
    value: number
  }

  export type PackCompositeRaceDataV20 = {
    name: string,
    nameToken: BigInt,
    baseHeadToken: BigInt,
    beard: Array<BigInt>,
    bodyBoneScales: Array<PackCompositeBoneScaleV20>,
    bodyBoneScaleFiles: Array<PackCompositeBoneScaleFileV20>,
    ears: Array<BigInt>,
    eyeColorPalette: string,
    faceBoneScales: Array<PackCompositeBoneScaleV20>,
    faces: Array<BigInt>,
    fileData: Array<PackCompositeFileDataV20>,
    flags: number,
    hairStyles: Array<BigInt>,
    hairColorPalette: string,
    skeletonFile: string,
    skinPatterns: Array<PackCompositeSkinPatternV20>,
    skinColorPalette: string,
    skinPatternPalette: string,
    skinStyles: Array<PackCompositeSkinStyleV20>,
    type: number,
    variantRefRace: BigInt,
    variants: Array<PackCompositeVariantV20>,
    animOverrides: Array<PackCompositeAnimOverrideV20>
  }

  export type PackCompositeBoneScaleFileV20 = {
    fileName: string
  }

  export type PackCompositeFileDataV20 = {
    name: BigInt,
    type: number,
    flags: number,
    animRoleOverride: BigInt,
    meshBase: string,
    meshOverlap: string,
    maskDye1: string,
    maskDye2: string,
    maskDye3: string,
    maskDye4: string,
    maskCut: string,
    textureBase: string,
    textureNormal: string,
    dyeFlags: number,
    hideFlags: number,
    skinFlags: number,
    blitRectIndex: number
  }

  export type PackCompositeSkinPatternV20 = {
    chest: string,
    face: string,
    feet: string,
    hands: string,
    legs: string,
    ears: string
  }

  export type PackCompositeSkinStyleV20 = {
    chest: BigInt,
    feet: BigInt,
    hands: BigInt,
    legs: BigInt
  }

  export type PackCompositeVariantV20 = {
    token: BigInt,
    boneScaleIndex: number,
    components: Array<PackCompositeVariantComponentV20>,
    eyeColor: PackCompositeColorV20,
    hairColor: PackCompositeColorV20,
    hairColor2: PackCompositeColorV20,
    patternColor: PackCompositeColorV20,
    skinColor: PackCompositeColorV20,
    skinIndex: number,
    skinStyle: number
  }

  export type PackCompositeVariantComponentV20 = {
    nameToken: BigInt,
    color0: PackCompositeColorV20,
    color1: PackCompositeColorV20,
    color2: PackCompositeColorV20,
    color3: PackCompositeColorV20
  }

  export type PackCompositeColorV20 = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number
  }

  export type PackCompositeAnimOverrideV20 = {
    animRole: BigInt,
    filepath: string
  }

}

export type V19 = V19_N.PackCompositeV20;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V1_U = V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V2_U = V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V6_U = V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V7_U = V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V8_U = V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V9_U = V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V10_U = V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V11_U = V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V12_U = V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V13_U = V13 | V14 | V15 | V16 | V17 | V18 | V19;
export type V14_U = V14 | V15 | V16 | V17 | V18 | V19;
export type V15_U = V15 | V16 | V17 | V18 | V19;
export type V16_U = V16 | V17 | V18 | V19;
export type V17_U = V17 | V18 | V19;
export type V18_U = V18 | V19;
export type V19_U = V19;
