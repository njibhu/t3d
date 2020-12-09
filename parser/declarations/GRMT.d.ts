export namespace V0 {
  export type AmatGrV0 = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    flags: number,
    textureMasks: Array<number>
  }

}

export namespace V1 {
  export type AmatGrV1 = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    flags: number,
    texType: number,
    textureMasks: Array<number>
  }

}

export namespace V2 {
  export type AmatGrV2 = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    sortTri: number,
    flags: number,
    texType: number,
    textureMasks: Array<number>
  }

}

export namespace V3 {
  export type AmatGrV3 = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    sortTri: number,
    debugFlags: number,
    flags: number,
    texType: number,
    textureMasks: Array<number>
  }

}

export namespace V4 {
  export type AmatGr = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    sortTri: number,
    procAnim: number,
    debugFlags: number,
    flags: number,
    texType: number,
    textureMasks: Array<number>
  }

}

export namespace V5 {
  export type AmatGr = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    sortTri: number,
    procAnim: number,
    debugFlags: number,
    flags: number,
    texType: number,
    textureMasks: Array<number>,
    texTokens: Array<BigInt>
  }

}

export namespace V6 {
  export type AmatGr = {
    texArrayRange: number,
    texCount: number,
    sortOrder: number,
    sortTri: number,
    procAnim: number,
    debugFlags: number,
    flags: number,
    texTokens: Array<BigInt>
  }

}

