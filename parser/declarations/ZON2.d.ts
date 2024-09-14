export namespace V11_N {
  export type PackMapZonesV12 = {
    zoneDefArray: Array<PackMapZoneDefV12>,
    zoneArray: Array<PackMapZoneV12>
  }

  export type PackMapZoneDefV12 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV12>,
    timeStamp: bigint
  }

  export type PackMapZoneLayerDefV12 = {
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    noise: number,
    layerFlags: number,
    modelArray: Array<PackMapZoneModelV12>,
    subModel: PackMapZoneModelV12
  }

  export type PackMapZoneModelV12 = {
    filename: number,
    probability: number,
    flags: number
  }

  export type PackMapZoneV12 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV12>,
    collideData: Array<PackMapZoneCollideDataV12>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>
  }

  export type PackMapZoneEncodingDataV12 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV12 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

}

export type V11 = V11_N.PackMapZonesV12;

export namespace V12_N {
  export type PackMapZonesV13 = {
    zoneDefArray: Array<PackMapZoneDefV13>,
    zoneArray: Array<PackMapZoneV13>
  }

  export type PackMapZoneDefV13 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV13>,
    timeStamp: bigint
  }

  export type PackMapZoneLayerDefV13 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    noise: number,
    layerFlags: number,
    modelArray: Array<PackMapZoneModelV13>,
    subModel: PackMapZoneModelV13
  }

  export type PackMapZoneModelV13 = {
    filename: number,
    probability: number,
    flags: number
  }

  export type PackMapZoneV13 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV13>,
    collideData: Array<PackMapZoneCollideDataV13>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>
  }

  export type PackMapZoneEncodingDataV13 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV13 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

}

export type V12 = V12_N.PackMapZonesV13;

export namespace V13_N {
  export type PackMapZonesV14 = {
    zoneDefArray: Array<PackMapZoneDefV14>,
    zoneArray: Array<PackMapZoneV14>
  }

  export type PackMapZoneDefV14 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV14>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV2
  }

  export type PackMapZoneLayerDefV14 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    noise: number,
    layerFlags: number,
    modelArray: Array<PackMapZoneModelV14>,
    subModel: PackMapZoneModelV14
  }

  export type PackMapZoneModelV14 = {
    filename: number,
    probability: number,
    flags: number
  }

  export type PackMapZonePageTableV2 = {
    pageArray: Array<PackMapZonePageV2>,
    flags: number
  }

  export type PackMapZonePageV2 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array
  }

  export type PackMapZoneV14 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV14>,
    collideData: Array<PackMapZoneCollideDataV14>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>
  }

  export type PackMapZoneEncodingDataV14 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV14 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

}

export type V13 = V13_N.PackMapZonesV14;

export namespace V14_N {
  export type PackMapZonesV15 = {
    zoneDefArray: Array<PackMapZoneDefV15>,
    zoneArray: Array<PackMapZoneV15>
  }

  export type PackMapZoneDefV15 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV15>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV3
  }

  export type PackMapZoneLayerDefV15 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    noise: number,
    layerFlags: number,
    modelArray: Array<PackMapZoneModelV15>,
    subModel: PackMapZoneModelV15
  }

  export type PackMapZoneModelV15 = {
    filename: number,
    probability: number,
    flags: number,
    hslOffset: Float32Array
  }

  export type PackMapZonePageTableV3 = {
    pageArray: Array<PackMapZonePageV3>,
    flags: number
  }

  export type PackMapZonePageV3 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array
  }

  export type PackMapZoneV15 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV15>,
    collideData: Array<PackMapZoneCollideDataV15>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>
  }

  export type PackMapZoneEncodingDataV15 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV15 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

}

export type V14 = V14_N.PackMapZonesV15;

export namespace V15_N {
  export type PackMapZonesV16 = {
    zoneDefArray: Array<PackMapZoneDefV16>,
    zoneArray: Array<PackMapZoneV16>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapZoneDefV16 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV16>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV4
  }

  export type PackMapZoneLayerDefV16 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    noise: number,
    layerFlags: number,
    modelArray: Array<PackMapZoneModelV16>,
    subModel: PackMapZoneModelV16
  }

  export type PackMapZoneModelV16 = {
    filename: number,
    probability: number,
    flags: number,
    hslOffset: Float32Array
  }

  export type PackMapZonePageTableV4 = {
    pageArray: Array<PackMapZonePageV4>,
    flags: number
  }

  export type PackMapZonePageV4 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array
  }

  export type PackMapZoneV16 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV16>,
    collideData: Array<PackMapZoneCollideDataV16>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>,
    broadId: number
  }

  export type PackMapZoneEncodingDataV16 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV16 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Uint8Array
  }

}

export type V15 = V15_N.PackMapZonesV16;

export namespace V16_N {
  export type PackMapZonesV17 = {
    zoneDefArray: Array<PackMapZoneDefV17>,
    zoneArray: Array<PackMapZoneV17>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapZoneDefV17 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV17>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV5
  }

  export type PackMapZoneLayerDefV17 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    noise: number,
    layerFlags: number,
    modelArray: Array<PackMapZoneModelV17>,
    subModel: PackMapZoneModelV17
  }

  export type PackMapZoneModelV17 = {
    filename: number,
    probability: number,
    flags: number,
    hslOffset: Float32Array
  }

  export type PackMapZonePageTableV5 = {
    pageArray: Array<PackMapZonePageV5>,
    flags: number
  }

  export type PackMapZonePageV5 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array
  }

  export type PackMapZoneV17 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV17>,
    collideData: Array<PackMapZoneCollideDataV17>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>,
    broadId: number
  }

  export type PackMapZoneEncodingDataV17 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV17 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Uint8Array
  }

}

export type V16 = V16_N.PackMapZonesV17;

export namespace V17_N {
  export type PackMapZonesV18 = {
    zoneDefArray: Array<PackMapZoneDefV18>,
    zoneArray: Array<PackMapZoneV18>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapZoneDefV18 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV18>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV6
  }

  export type PackMapZoneLayerDefV18 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    hslRanges: Array<Float32Array>,
    noise: number,
    layerFlags: number,
    materialname: number,
    modelArray: Array<PackMapZoneModelV18>,
    subModel: PackMapZoneModelV18
  }

  export type PackMapZoneModelV18 = {
    filename: number,
    probability: number,
    flags: number,
    hslOffset: Float32Array,
    zOffsets: Uint8Array
  }

  export type PackMapZonePageTableV6 = {
    pageArray: Array<PackMapZonePageV6>,
    flags: number
  }

  export type PackMapZonePageV6 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array
  }

  export type PackMapZoneV18 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV18>,
    collideData: Array<PackMapZoneCollideDataV18>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>,
    broadId: number
  }

  export type PackMapZoneEncodingDataV18 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV18 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Uint8Array
  }

}

export type V17 = V17_N.PackMapZonesV18;

export namespace V18_N {
  export type PackMapZonesV19 = {
    zoneDefArray: Array<PackMapZoneDefV19>,
    zoneArray: Array<PackMapZoneV19>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapZoneDefV19 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV19>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV7
  }

  export type PackMapZoneLayerDefV19 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    hslRanges: Array<Float32Array>,
    noise: number,
    layerFlags: number,
    materialname: number,
    modelArray: Array<PackMapZoneModelV19>,
    subModel: PackMapZoneModelV19
  }

  export type PackMapZoneModelV19 = {
    filename: number,
    probability: number,
    flags: number,
    hslOffset: Float32Array,
    zOffsets: Uint8Array
  }

  export type PackMapZonePageTableV7 = {
    pageArray: Array<PackMapZonePageV7>,
    flags: number
  }

  export type PackMapZonePageV7 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array
  }

  export type PackMapZoneV19 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV19>,
    collideData: Array<PackMapZoneCollideDataV19>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>,
    broadId: number
  }

  export type PackMapZoneEncodingDataV19 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV19 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Uint8Array
  }

}

export type V18 = V18_N.PackMapZonesV19;

export namespace V19_N {
  export type PackMapZonesV20 = {
    zoneDefArray: Array<PackMapZoneDefV20>,
    zoneArray: Array<PackMapZoneV20>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapZoneDefV20 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV20>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV8
  }

  export type PackMapZoneLayerDefV20 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    hslRanges: Array<Float32Array>,
    instanceScaleJitter: number,
    noise: number,
    layerFlags: number,
    materialname: number,
    modelArray: Array<PackMapZoneModelV20>,
    subModel: PackMapZoneModelV20
  }

  export type PackMapZoneModelV20 = {
    filename: number,
    probability: number,
    flags: number,
    hslOffset: Float32Array,
    zOffsets: Uint8Array
  }

  export type PackMapZonePageTableV8 = {
    pageArray: Array<PackMapZonePageV8>,
    flags: number
  }

  export type PackMapZonePageV8 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array
  }

  export type PackMapZoneV20 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV20>,
    collideData: Array<PackMapZoneCollideDataV20>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>,
    broadId: number
  }

  export type PackMapZoneEncodingDataV20 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV20 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Uint8Array
  }

}

export type V19 = V19_N.PackMapZonesV20;

export namespace V20_N {
  export type PackMapZonesV21 = {
    zoneDefArray: Array<PackMapZoneDefV21>,
    zoneArray: Array<PackMapZoneV21>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number
  }

  export type PackMapZoneDefV21 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV21>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV9
  }

  export type PackMapZoneLayerDefV21 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    hslRanges: Array<Float32Array>,
    instanceScaleJitter: number,
    noise: number,
    layerFlags: number,
    materialname: number,
    modelArray: Array<PackMapZoneModelV21>,
    subModel: PackMapZoneModelV21
  }

  export type PackMapZoneModelV21 = {
    filename: number,
    probability: number,
    flags: number,
    hslOffset: Float32Array,
    zOffsets: Uint8Array
  }

  export type PackMapZonePageTableV9 = {
    pageArray: Array<PackMapZonePageV9>,
    flags: number
  }

  export type PackMapZonePageV9 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array
  }

  export type PackMapZoneV21 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV21>,
    collideData: Array<PackMapZoneCollideDataV21>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>,
    broadId: number
  }

  export type PackMapZoneEncodingDataV21 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV21 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Uint8Array
  }

}

export type V20 = V20_N.PackMapZonesV21;

export namespace V21_N {
  export type PackMapZonesV22 = {
    zoneDefArray: Array<PackMapZoneDefV22>,
    zoneArray: Array<PackMapZoneV22>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number,
    string: string
  }

  export type PackMapZoneDefV22 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV22>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV10,
    reserved: string
  }

  export type PackMapZoneLayerDefV22 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    hslRanges: Array<Float32Array>,
    instanceScaleJitter: number,
    noise: number,
    layerFlags: number,
    materialname: number,
    modelArray: Array<PackMapZoneModelV22>,
    subModel: PackMapZoneModelV22,
    reserved: string
  }

  export type PackMapZoneModelV22 = {
    filename: number,
    probability: number,
    flags: number,
    hslOffset: Float32Array,
    zOffsets: Uint8Array
  }

  export type PackMapZonePageTableV10 = {
    pageArray: Array<PackMapZonePageV10>,
    flags: number
  }

  export type PackMapZonePageV10 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array,
    string: string
  }

  export type PackMapZoneV22 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV22>,
    collideData: Array<PackMapZoneCollideDataV22>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>,
    broadId: number,
    reserved: string
  }

  export type PackMapZoneEncodingDataV22 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV22 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Uint8Array
  }

}

export type V21 = V21_N.PackMapZonesV22;

export namespace V22_N {
  export type PackMapZonesV23 = {
    zoneDefArray: Array<PackMapZoneDefV23>,
    zoneArray: Array<PackMapZoneV23>,
    broadPhase: PackBroadphaseType,
    maxBroadId: number,
    string: string
  }

  export type PackMapZoneDefV23 = {
    defFilename: number,
    token: number,
    layerDefArray: Array<PackMapZoneLayerDefV23>,
    timeStamp: bigint,
    pageTable: PackMapZonePageTableV11,
    reserved: string
  }

  export type PackMapZoneLayerDefV23 = {
    type: number,
    height: number,
    width: number,
    radiusGround: number,
    sortGroup: number,
    tiling: number,
    scaleRange: Float32Array,
    probability: number,
    fadeRange: Float32Array,
    rotRange: Array<Float32Array>,
    hslRanges: Array<Float32Array>,
    instanceScaleJitter: number,
    noise: number,
    layerFlags: number,
    materialname: number,
    modelArray: Array<PackMapZoneModelV23>,
    subModel: PackMapZoneModelV23,
    reserved: string
  }

  export type PackMapZoneModelV23 = {
    filename: number,
    probability: number,
    flags: number,
    hslOffset: Float32Array,
    zOffsets: Uint8Array,
    permutation: bigint
  }

  export type PackMapZonePageTableV11 = {
    pageArray: Array<PackMapZonePageV11>,
    flags: number
  }

  export type PackMapZonePageV11 = {
    flags: Uint8Array,
    chunkCoord: Uint32Array,
    seed: number,
    paintFlags: Uint32Array,
    string: string
  }

  export type PackMapZoneV23 = {
    zoneFlags: number,
    vertRect: Uint32Array,
    waterHeight: number,
    seed: number,
    defToken: number,
    range: Float32Array,
    zPos: number,
    flags: Uint8Array,
    encodeData: Array<PackMapZoneEncodingDataV23>,
    collideData: Array<PackMapZoneCollideDataV23>,
    offsetData: Uint16Array,
    vertices: Array<Float32Array>,
    broadId: number,
    reserved: string
  }

  export type PackMapZoneEncodingDataV23 = {
    index: number,
    offset: number
  }

  export type PackMapZoneCollideDataV23 = {
    normalX: number,
    normalY: number,
    zPos: number
  }

  export type PackBroadphaseType = {
    broadphaseData: Uint8Array
  }

}

export type V22 = V22_N.PackMapZonesV23;

export type V11_U = V11 | V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22;
export type V12_U = V12 | V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22;
export type V13_U = V13 | V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22;
export type V14_U = V14 | V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22;
export type V15_U = V15 | V16 | V17 | V18 | V19 | V20 | V21 | V22;
export type V16_U = V16 | V17 | V18 | V19 | V20 | V21 | V22;
export type V17_U = V17 | V18 | V19 | V20 | V21 | V22;
export type V18_U = V18 | V19 | V20 | V21 | V22;
export type V19_U = V19 | V20 | V21 | V22;
export type V20_U = V20 | V21 | V22;
export type V21_U = V21 | V22;
export type V22_U = V22;
