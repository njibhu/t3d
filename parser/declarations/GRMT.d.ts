export namespace V0_N {
  export type AmatGrV0 = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    flags: number,
    textureMasks: Uint32Array
  }

}

export type V0 = V0_N.AmatGrV0;

export namespace V1_N {
  export type AmatGrV1 = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    flags: number,
    texType: number,
    textureMasks: Uint32Array
  }

}

export type V1 = V1_N.AmatGrV1;

export namespace V2_N {
  export type AmatGrV2 = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    sortTri: number,
    flags: number,
    texType: number,
    textureMasks: Uint32Array
  }

}

export type V2 = V2_N.AmatGrV2;

export namespace V3_N {
  export type AmatGrV3 = {
    texArrayRange: number,
    texCount: number,
    texTransformRange: number,
    sortOrder: number,
    sortTri: number,
    debugFlags: number,
    flags: number,
    texType: number,
    textureMasks: Uint32Array
  }

}

export type V3 = V3_N.AmatGrV3;

export namespace V4_N {
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
    textureMasks: Uint32Array
  }

}

export type V4 = V4_N.AmatGr;

export namespace V5_N {
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
    textureMasks: Uint32Array,
    texTokens: BigUint64Array
  }

}

export type V5 = V5_N.AmatGr;

export namespace V6_N {
  export type AmatGr = {
    texArrayRange: number,
    texCount: number,
    sortOrder: number,
    sortTri: number,
    procAnim: number,
    debugFlags: number,
    flags: number,
    texTokens: BigUint64Array
  }

}

export type V6 = V6_N.AmatGr;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5 | V6;
export type V1_U = V1 | V2 | V3 | V4 | V5 | V6;
export type V2_U = V2 | V3 | V4 | V5 | V6;
export type V3_U = V3 | V4 | V5 | V6;
export type V4_U = V4 | V5 | V6;
export type V5_U = V5 | V6;
export type V6_U = V6;
