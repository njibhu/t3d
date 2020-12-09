export namespace V0_N {
  export type AmatToolParamsV0 = {
    description: string,
    flags: number,
    text: string,
    texCoordCount: number,
    texTransformCount: number,
    constants: Array<AmatToolConstantV0>,
    textures: Array<AmatToolTextureV0>
  }

  export type AmatToolConstantV0 = {
    token: number,
    displayName: string,
    defaultValue: Array<number>,
    flags: number,
    minValue: Array<number>,
    maxValue: Array<number>
  }

  export type AmatToolTextureV0 = {
    texName: string,
    texDefaultFile: string,
    flags: number,
    texGen: Array<number>,
    texTransform: Array<number>
  }

}

export type V0 = V0_N.AmatToolParamsV0;

export namespace V1_N {
  export type AmatToolParamsV1 = {
    description: string,
    flags: number,
    text: string,
    texCoordCount: number,
    texTransformCount: number,
    constants: Array<AmatToolConstantV1>,
    textures: Array<AmatToolTextureV1>
  }

  export type AmatToolConstantV1 = {
    token: number,
    displayName: string,
    defaultValue: Array<number>,
    flags: number,
    minValue: Array<number>,
    maxValue: Array<number>
  }

  export type AmatToolTextureV1 = {
    texName: string,
    texDefaultFile: string,
    flags: number,
    texGen: Array<number>,
    texTransform: Array<number>
  }

}

export type V1 = V1_N.AmatToolParamsV1;

export namespace V2_N {
  export type AmatToolParams = {
    description: string,
    flags: number,
    text: string,
    texCoordCount: number,
    texTransformCount: number,
    constants: Array<AmatToolConstant>,
    textures: Array<AmatToolTexture>
  }

  export type AmatToolConstant = {
    token: number,
    displayName: string,
    defaultValue: Array<number>,
    flags: number,
    minValue: Array<number>,
    maxValue: Array<number>
  }

  export type AmatToolTexture = {
    texName: string,
    texDefaultFile: string,
    flags: number,
    texGen: Array<number>,
    texTransform: Array<number>
  }

}

export type V2 = V2_N.AmatToolParams;

export namespace V3_N {
  export type AmatToolParams = {
    description: string,
    flags: number,
    texCoordCount: number,
    texTransformCount: number,
    decompressedTextCount: number,
    compressedText: Array<number>,
    constants: Array<AmatToolConstant>,
    textures: Array<AmatToolTexture>
  }

  export type AmatToolConstant = {
    token: number,
    displayName: string,
    defaultValue: Array<number>,
    flags: number,
    minValue: Array<number>,
    maxValue: Array<number>
  }

  export type AmatToolTexture = {
    texName: string,
    texDefaultFile: string,
    flags: number,
    texGen: Array<number>
  }

}

export type V3 = V3_N.AmatToolParams;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
