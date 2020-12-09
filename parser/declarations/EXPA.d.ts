export namespace V0 {
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

export namespace V1 {
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

export namespace V2 {
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

export namespace V3 {
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

