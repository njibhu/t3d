export namespace V0_N {
  export type ModelFileExpansionV0 = {
    snapPoints: Array<ModelFileSnapPointV0>,
    snapPointPriority: number,
    emitters: Array<ModelExpansionEmitterV0>
  }

  export type ModelFileSnapPointV0 = {
    bone: BigInt
  }

  export type ModelExpansionEmitterV0 = {
    curl: number,
    vortexSize: number
  }

}

export type V0 = V0_N.ModelFileExpansionV0;

export namespace V1_N {
  export type ModelFileExpansionV1 = {
    snapPoints: Array<ModelFileSnapPointV1>,
    snapPointPriority: number,
    emitters: Array<ModelExpansionEmitterV1>
  }

  export type ModelFileSnapPointV1 = {
    bone: BigInt
  }

  export type ModelExpansionEmitterV1 = {
    curl: number,
    vortexSize: number,
    curlQuality: number,
    curlFlags: number,
    fieldScale: number
  }

}

export type V1 = V1_N.ModelFileExpansionV1;

export namespace V2_N {
  export type ModelFileExpansionV2 = {
    snapPoints: Array<ModelFileSnapPointV2>,
    snapPointPriority: number,
    emitters: Array<ModelExpansionEmitterV2>
  }

  export type ModelFileSnapPointV2 = {
    bone: BigInt,
    shape: BigInt
  }

  export type ModelExpansionEmitterV2 = {
    curl: number,
    vortexSize: number,
    curlQuality: number,
    curlFlags: number,
    fieldScale: number
  }

}

export type V2 = V2_N.ModelFileExpansionV2;

export namespace V3_N {
  export type ModelFileExpansionV3 = {
    snapPoints: Array<ModelFileSnapPointV3>,
    snapPointPriority: number,
    emitters: Array<ModelExpansionEmitterV3>
  }

  export type ModelFileSnapPointV3 = {
    bone: BigInt,
    shape: BigInt,
    flags: number
  }

  export type ModelExpansionEmitterV3 = {
    curl: number,
    vortexSize: number,
    curlQuality: number,
    curlFlags: number,
    fieldScale: number
  }

}

export type V3 = V3_N.ModelFileExpansionV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
