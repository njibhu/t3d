export namespace V3 {
  export type PackMapPropV3 = {
    propArray: Array<PackMapPropObjV3>,
    propAnimArray: Array<PackMapPropObjAnimSeqV3>,
    propToolArray: Array<PackMapPropObjToolV3>
  }

  export type PackMapPropObjV3 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number
  }

  export type PackMapPropObjAnimSeqV3 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV3 = {
    guid: BigInt,
    layerMask: number
  }

}

export namespace V4 {
  export type PackMapPropV4 = {
    propArray: Array<PackMapPropObjV4>,
    propAnimArray: Array<PackMapPropObjAnimSeqV4>,
    propToolArray: Array<PackMapPropObjToolV4>
  }

  export type PackMapPropObjV4 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV4 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV4 = {
    guid: BigInt,
    layerMask: number
  }

}

export namespace V5 {
  export type PackMapPropV5 = {
    propArray: Array<PackMapPropObjV5>,
    propAnimArray: Array<PackMapPropObjAnimSeqV5>,
    propToolArray: Array<PackMapPropObjToolV5>
  }

  export type PackMapPropObjV5 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV5 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV5 = {
    guid: BigInt,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: BigInt,
    glomType: number
  }

}

export namespace V6 {
  export type PackMapPropV6 = {
    propArray: Array<PackMapPropObjV6>,
    propAnimArray: Array<PackMapPropObjAnimSeqV6>,
    propToolArray: Array<PackMapPropObjToolV6>
  }

  export type PackMapPropObjV6 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV6 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV6 = {
    guid: BigInt,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: BigInt,
    glomType: number
  }

}

export namespace V7 {
  export type PackMapPropV7 = {
    propArray: Array<PackMapPropObjV7>,
    propAnimArray: Array<PackMapPropObjAnimSeqV7>,
    propToolArray: Array<PackMapPropObjToolV7>
  }

  export type PackMapPropObjV7 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV7 = {
    filename: string,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV7 = {
    guid: BigInt,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: BigInt,
    glomType: number
  }

}

export namespace V8 {
  export type PackMapPropV8 = {
    propArray: Array<PackMapPropObjV8>,
    propAnimArray: Array<PackMapPropObjAnimSeqV8>,
    propToolArray: Array<PackMapPropObjToolV8>
  }

  export type PackMapPropObjV8 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV8 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV8 = {
    guid: BigInt,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: BigInt,
    glomType: number
  }

}

export namespace V9 {
  export type PackMapPropV9 = {
    propArray: Array<PackMapPropObjV9>,
    propAnimArray: Array<PackMapPropObjAnimSeqV9>,
    propToolArray: Array<PackMapPropObjToolV9>
  }

  export type PackMapPropObjV9 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV9 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV9 = {
    guid: BigInt,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: BigInt,
    glomType: number
  }

}

export namespace V10 {
  export type PackMapPropV10 = {
    propArray: Array<PackMapPropObjV10>,
    propAnimArray: Array<PackMapPropObjAnimSeqV10>,
    propToolArray: Array<PackMapPropObjToolV10>
  }

  export type PackMapPropObjV10 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV10 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV10 = {
    guid: BigInt,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: BigInt,
    glomType: number
  }

}

export namespace V11 {
  export type PackMapPropV11 = {
    propArray: Array<PackMapPropObjV11>,
    propAnimArray: Array<PackMapPropObjAnimSeqV11>,
    propToolArray: Array<PackMapPropObjToolV11>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV11 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV11 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV11 = {
    guid: BigInt,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: BigInt,
    glomType: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V12 {
  export type PackMapPropV12 = {
    propArray: Array<PackMapPropObjV12>,
    propAnimArray: Array<PackMapPropObjAnimSeqV12>,
    propToolArray: Array<PackMapPropObjToolV12>,
    propMetaArray: Array<PackMapPropObjMetaV12>,
    propVolumeArray: Array<PackMapPropObjVolumeV12>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV12 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV12 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV12 = {
    guid: BigInt,
    layerMask: number,
    glomType: number
  }

  export type PackMapPropObjMetaV12 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV12 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V13 {
  export type PackMapPropV13 = {
    propArray: Array<PackMapPropObjV13>,
    propAnimArray: Array<PackMapPropObjAnimSeqV13>,
    propToolArray: Array<PackMapPropObjToolV13>,
    propMetaArray: Array<PackMapPropObjMetaV13>,
    propVolumeArray: Array<PackMapPropObjVolumeV13>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV13 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV13 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV13 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>
  }

  export type PackMapPropObjMetaV13 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV13 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V14 {
  export type PackMapPropV14 = {
    propArray: Array<PackMapPropObjV14>,
    propAnimArray: Array<PackMapPropObjAnimSeqV14>,
    propToolArray: Array<PackMapPropObjToolV14>,
    propMetaArray: Array<PackMapPropObjMetaV14>,
    propVolumeArray: Array<PackMapPropObjVolumeV14>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV14 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV14 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjToolV14 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>
  }

  export type PackMapPropObjMetaV14 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV14 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V15 {
  export type PackMapPropV15 = {
    propArray: Array<PackMapPropObjV15>,
    propAnimArray: Array<PackMapPropObjAnimSeqV15>,
    propInstanceArray: Array<PackMapPropObjInstanceV15>,
    propToolArray: Array<PackMapPropObjToolV15>,
    propMetaArray: Array<PackMapPropObjMetaV15>,
    propVolumeArray: Array<PackMapPropObjVolumeV15>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV15 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV15 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjInstanceV15 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    transforms: Array<PackMapPropTransformV15>,
    origGuidArray: Array<BigInt>
  }

  export type PackMapPropTransformV15 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV15 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>
  }

  export type PackMapPropObjMetaV15 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV15 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V16 {
  export type PackMapPropV16 = {
    propArray: Array<PackMapPropObjV16>,
    propAnimArray: Array<PackMapPropObjAnimSeqV16>,
    propInstanceArray: Array<PackMapPropObjInstanceV16>,
    propToolArray: Array<PackMapPropObjToolV16>,
    propMetaArray: Array<PackMapPropObjMetaV16>,
    propVolumeArray: Array<PackMapPropObjVolumeV16>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV16 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV16 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjInstanceV16 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    transforms: Array<PackMapPropTransformV16>,
    origGuidArray: Array<BigInt>
  }

  export type PackMapPropTransformV16 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV16 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>
  }

  export type PackMapPropObjMetaV16 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV16 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V17 {
  export type PackMapPropV17 = {
    propArray: Array<PackMapPropObjV17>,
    propAnimArray: Array<PackMapPropObjAnimSeqV17>,
    propInstanceArray: Array<PackMapPropObjInstanceV17>,
    propToolArray: Array<PackMapPropObjToolV17>,
    propMetaArray: Array<PackMapPropObjMetaV17>,
    propVolumeArray: Array<PackMapPropObjVolumeV17>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV17 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number
  }

  export type PackMapPropObjAnimSeqV17 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    animSequence: BigInt
  }

  export type PackMapPropObjInstanceV17 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    transforms: Array<PackMapPropTransformV17>,
    origGuidArray: Array<BigInt>
  }

  export type PackMapPropTransformV17 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV17 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>
  }

  export type PackMapPropObjMetaV17 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV17 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V18 {
  export type PackMapPropV18 = {
    propArray: Array<PackMapPropObjV18>,
    propAnimArray: Array<PackMapPropObjAnimSeqV18>,
    propInstanceArray: Array<PackMapPropObjInstanceV18>,
    propToolArray: Array<PackMapPropObjToolV18>,
    propMetaArray: Array<PackMapPropObjMetaV18>,
    propVolumeArray: Array<PackMapPropObjVolumeV18>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV18 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number
  }

  export type PackMapPropObjAnimSeqV18 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    animSequence: BigInt
  }

  export type PackMapPropObjInstanceV18 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    transforms: Array<PackMapPropTransformV18>,
    origGuidArray: Array<BigInt>
  }

  export type PackMapPropTransformV18 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV18 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>
  }

  export type PackMapPropObjMetaV18 = {
    filename: string,
    blitTextures: Array<string>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV18 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V19 {
  export type PackMapPropV19 = {
    propArray: Array<PackMapPropObjV19>,
    propAnimArray: Array<PackMapPropObjAnimSeqV19>,
    propInstanceArray: Array<PackMapPropObjInstanceV19>,
    propToolArray: Array<PackMapPropObjToolV19>,
    propMetaArray: Array<PackMapPropObjMetaV19>,
    propVolumeArray: Array<PackMapPropObjVolumeV19>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV19 = {
    filename: string,
    blitTextures: Array<string>,
    constTokens: Array<number>,
    constValues: Array<Array<number>>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number
  }

  export type PackMapPropObjAnimSeqV19 = {
    filename: string,
    blitTextures: Array<string>,
    constTokens: Array<number>,
    constValues: Array<Array<number>>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    animSequence: BigInt
  }

  export type PackMapPropObjInstanceV19 = {
    filename: string,
    blitTextures: Array<string>,
    constTokens: Array<number>,
    constValues: Array<Array<number>>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    transforms: Array<PackMapPropTransformV19>,
    origGuidArray: Array<BigInt>
  }

  export type PackMapPropTransformV19 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV19 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>
  }

  export type PackMapPropObjMetaV19 = {
    filename: string,
    blitTextures: Array<string>,
    constTokens: Array<number>,
    constValues: Array<Array<number>>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV19 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V20 {
  export type PackMapPropV20 = {
    propArray: Array<PackMapPropObjV20>,
    propAnimArray: Array<PackMapPropObjAnimSeqV20>,
    propInstanceArray: Array<PackMapPropObjInstanceV20>,
    propToolArray: Array<PackMapPropObjToolV20>,
    propMetaArray: Array<PackMapPropObjMetaV20>,
    propVolumeArray: Array<PackMapPropObjVolumeV20>,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV20 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV17>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number
  }

  export type PackMapPropConstantV17 = {
    token: number,
    constant: Array<number>,
    submodel: number
  }

  export type PackMapPropObjAnimSeqV20 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV17>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    animSequence: BigInt
  }

  export type PackMapPropObjInstanceV20 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV17>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    transforms: Array<PackMapPropTransformV20>,
    origGuidArray: Array<BigInt>
  }

  export type PackMapPropTransformV20 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV20 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>
  }

  export type PackMapPropObjMetaV20 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV17>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV20 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export namespace V21 {
  export type PackMapPropV21 = {
    propArray: Array<PackMapPropObjV21>,
    propAnimArray: Array<PackMapPropObjAnimSeqV21>,
    propInstanceArray: Array<PackMapPropObjInstanceV21>,
    propToolArray: Array<PackMapPropObjToolV21>,
    propMetaArray: Array<PackMapPropObjMetaV21>,
    propVolumeArray: Array<PackMapPropObjVolumeV21>,
    reserved: string,
    broadPhase: PackBroadphaseType,
    nextBroadId: number
  }

  export type PackMapPropObjV21 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV18>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    reserved: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number
  }

  export type PackMapPropConstantV18 = {
    token: number,
    constant: Array<number>,
    submodel: number
  }

  export type PackMapPropObjAnimSeqV21 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV18>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    reserved: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    animSequence: BigInt
  }

  export type PackMapPropObjInstanceV21 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV18>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    reserved: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    transforms: Array<PackMapPropTransformV21>,
    origGuidArray: Array<BigInt>
  }

  export type PackMapPropTransformV21 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV21 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>
  }

  export type PackMapPropObjMetaV21 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV18>,
    guid: BigInt,
    permutation: BigInt,
    bounds: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    reserved: number,
    broadId: number,
    bucketId: number,
    byte: number,
    sortLayer: number,
    layerMask: number,
    glomType: number,
    parent: BigInt,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV21 = {
    guid: BigInt,
    layerMask: number,
    glomType: number,
    children: Array<BigInt>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

