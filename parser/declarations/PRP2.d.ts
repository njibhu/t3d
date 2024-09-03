export namespace V3_N {
  export type PackMapPropV3 = {
    propArray: Array<PackMapPropObjV3>,
    propAnimArray: Array<PackMapPropObjAnimSeqV3>,
    propToolArray: Array<PackMapPropObjToolV3>
  }

  export type PackMapPropObjV3 = {
    filename: string,
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number
  }

  export type PackMapPropObjAnimSeqV3 = {
    filename: string,
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    animSequence: number
  }

  export type PackMapPropObjToolV3 = {
    guid: number,
    layerMask: number
  }

}

export type V3 = V3_N.PackMapPropV3;

export namespace V4_N {
  export type PackMapPropV4 = {
    propArray: Array<PackMapPropObjV4>,
    propAnimArray: Array<PackMapPropObjAnimSeqV4>,
    propToolArray: Array<PackMapPropObjToolV4>
  }

  export type PackMapPropObjV4 = {
    filename: string,
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV4 = {
    guid: number,
    layerMask: number
  }

}

export type V4 = V4_N.PackMapPropV4;

export namespace V5_N {
  export type PackMapPropV5 = {
    propArray: Array<PackMapPropObjV5>,
    propAnimArray: Array<PackMapPropObjAnimSeqV5>,
    propToolArray: Array<PackMapPropObjToolV5>
  }

  export type PackMapPropObjV5 = {
    filename: string,
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV5 = {
    guid: number,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: number,
    glomType: number
  }

}

export type V5 = V5_N.PackMapPropV5;

export namespace V6_N {
  export type PackMapPropV6 = {
    propArray: Array<PackMapPropObjV6>,
    propAnimArray: Array<PackMapPropObjAnimSeqV6>,
    propToolArray: Array<PackMapPropObjToolV6>
  }

  export type PackMapPropObjV6 = {
    filename: string,
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV6 = {
    guid: number,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: number,
    glomType: number
  }

}

export type V6 = V6_N.PackMapPropV6;

export namespace V7_N {
  export type PackMapPropV7 = {
    propArray: Array<PackMapPropObjV7>,
    propAnimArray: Array<PackMapPropObjAnimSeqV7>,
    propToolArray: Array<PackMapPropObjToolV7>
  }

  export type PackMapPropObjV7 = {
    filename: string,
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV7 = {
    guid: number,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: number,
    glomType: number
  }

}

export type V7 = V7_N.PackMapPropV7;

export namespace V8_N {
  export type PackMapPropV8 = {
    propArray: Array<PackMapPropObjV8>,
    propAnimArray: Array<PackMapPropObjAnimSeqV8>,
    propToolArray: Array<PackMapPropObjToolV8>
  }

  export type PackMapPropObjV8 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV8 = {
    guid: number,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: number,
    glomType: number
  }

}

export type V8 = V8_N.PackMapPropV8;

export namespace V9_N {
  export type PackMapPropV9 = {
    propArray: Array<PackMapPropObjV9>,
    propAnimArray: Array<PackMapPropObjAnimSeqV9>,
    propToolArray: Array<PackMapPropObjToolV9>
  }

  export type PackMapPropObjV9 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV9 = {
    guid: number,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: number,
    glomType: number
  }

}

export type V9 = V9_N.PackMapPropV9;

export namespace V10_N {
  export type PackMapPropV10 = {
    propArray: Array<PackMapPropObjV10>,
    propAnimArray: Array<PackMapPropObjAnimSeqV10>,
    propToolArray: Array<PackMapPropObjToolV10>
  }

  export type PackMapPropObjV10 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV10 = {
    guid: number,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: number,
    glomType: number
  }

}

export type V10 = V10_N.PackMapPropV10;

export namespace V11_N {
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
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV11 = {
    guid: number,
    layerMask: number,
    glomOrigin: Array<number>,
    glomClipScale: Array<number>,
    glomTargetId: number,
    glomType: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V11 = V11_N.PackMapPropV11;

export namespace V12_N {
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
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV12 = {
    guid: number,
    layerMask: number,
    glomType: number
  }

  export type PackMapPropObjMetaV12 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV12 = {
    guid: number,
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

export type V12 = V12_N.PackMapPropV12;

export namespace V13_N {
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
    guid: number,
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
    guid: number,
    position: Array<number>,
    rotation: Array<number>,
    color: Array<number>,
    scale: number,
    lod1: number,
    lod2: number,
    flags: number,
    broadId: number,
    byte: number,
    animSequence: number
  }

  export type PackMapPropObjToolV13 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>
  }

  export type PackMapPropObjMetaV13 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV13 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V13 = V13_N.PackMapPropV13;

export namespace V14_N {
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
    guid: number,
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
    guid: number,
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
    animSequence: number
  }

  export type PackMapPropObjToolV14 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>
  }

  export type PackMapPropObjMetaV14 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV14 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V14 = V14_N.PackMapPropV14;

export namespace V15_N {
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
    guid: number,
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
    guid: number,
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
    animSequence: number
  }

  export type PackMapPropObjInstanceV15 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
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
    origGuidArray: Array<number>
  }

  export type PackMapPropTransformV15 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV15 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>
  }

  export type PackMapPropObjMetaV15 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV15 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V15 = V15_N.PackMapPropV15;

export namespace V16_N {
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
    guid: number,
    permutation: number,
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
    guid: number,
    permutation: number,
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
    animSequence: number
  }

  export type PackMapPropObjInstanceV16 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
    permutation: number,
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
    origGuidArray: Array<number>
  }

  export type PackMapPropTransformV16 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV16 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>
  }

  export type PackMapPropObjMetaV16 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
    permutation: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV16 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V16 = V16_N.PackMapPropV16;

export namespace V17_N {
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
    guid: number,
    permutation: number,
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
    guid: number,
    permutation: number,
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
    animSequence: number
  }

  export type PackMapPropObjInstanceV17 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
    permutation: number,
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
    origGuidArray: Array<number>
  }

  export type PackMapPropTransformV17 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV17 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>
  }

  export type PackMapPropObjMetaV17 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
    permutation: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV17 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V17 = V17_N.PackMapPropV17;

export namespace V18_N {
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
    guid: number,
    permutation: number,
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
    guid: number,
    permutation: number,
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
    animSequence: number
  }

  export type PackMapPropObjInstanceV18 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
    permutation: number,
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
    origGuidArray: Array<number>
  }

  export type PackMapPropTransformV18 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV18 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>
  }

  export type PackMapPropObjMetaV18 = {
    filename: string,
    blitTextures: Array<string>,
    guid: number,
    permutation: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV18 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V18 = V18_N.PackMapPropV18;

export namespace V19_N {
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
    guid: number,
    permutation: number,
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
    guid: number,
    permutation: number,
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
    animSequence: number
  }

  export type PackMapPropObjInstanceV19 = {
    filename: string,
    blitTextures: Array<string>,
    constTokens: Array<number>,
    constValues: Array<Array<number>>,
    guid: number,
    permutation: number,
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
    origGuidArray: Array<number>
  }

  export type PackMapPropTransformV19 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV19 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>
  }

  export type PackMapPropObjMetaV19 = {
    filename: string,
    blitTextures: Array<string>,
    constTokens: Array<number>,
    constValues: Array<Array<number>>,
    guid: number,
    permutation: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV19 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V19 = V19_N.PackMapPropV19;

export namespace V20_N {
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
    guid: number,
    permutation: number,
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
    guid: number,
    permutation: number,
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
    animSequence: number
  }

  export type PackMapPropObjInstanceV20 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV17>,
    guid: number,
    permutation: number,
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
    origGuidArray: Array<number>
  }

  export type PackMapPropTransformV20 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV20 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>
  }

  export type PackMapPropObjMetaV20 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV17>,
    guid: number,
    permutation: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV20 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V20 = V20_N.PackMapPropV20;

export namespace V21_N {
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
    guid: number,
    permutation: number,
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
    guid: number,
    permutation: number,
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
    animSequence: number
  }

  export type PackMapPropObjInstanceV21 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV18>,
    guid: number,
    permutation: number,
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
    origGuidArray: Array<number>
  }

  export type PackMapPropTransformV21 = {
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackMapPropObjToolV21 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>
  }

  export type PackMapPropObjMetaV21 = {
    filename: string,
    blitTextures: Array<string>,
    constants: Array<PackMapPropConstantV18>,
    guid: number,
    permutation: number,
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
    parent: number,
    glomOrigin: Array<number>
  }

  export type PackMapPropObjVolumeV21 = {
    guid: number,
    layerMask: number,
    glomType: number,
    children: Array<number>,
    glomClipScale: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Array<number>
  }

}

export type V21 = V21_N.PackMapPropV21;

export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V6_U = V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V7_U = V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V8_U = V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V9_U = V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V10_U = V10 | V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V11_U = V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V12_U = V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V13_U = V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V14_U = V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V15_U = V15 | V16 | V17 | V18 | V19 | V20 | V21;
export type V16_U = V16 | V17 | V18 | V19 | V20 | V21;
export type V17_U = V17 | V18 | V19 | V20 | V21;
export type V18_U = V18 | V19 | V20 | V21;
export type V19_U = V19 | V20 | V21;
export type V20_U = V20 | V21;
export type V21_U = V21;
