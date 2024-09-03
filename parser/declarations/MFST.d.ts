export namespace V0_N {
  export type PackAssetManifestV0 = {
    buildId: number,
    records: Array<PackAssetManifestRecordV0>
  }

  export type PackAssetManifestRecordV0 = {
    baseId: number,
    fileId: number,
    size: number
  }

}

export type V0 = V0_N.PackAssetManifestV0;

export namespace V1_N {
  export type PackAssetManifestV1 = {
    buildId: number,
    records: Array<PackAssetManifestRecordV1>,
    streams: Array<PackAssetManifestStreamV1>
  }

  export type PackAssetManifestRecordV1 = {
    baseId: number,
    fileId: number,
    size: number
  }

  export type PackAssetManifestStreamV1 = {
    parentBaseId: number,
    streamBaseId: number
  }

}

export type V1 = V1_N.PackAssetManifestV1;

export namespace V2_N {
  export type PackAssetManifestV2 = {
    buildId: number,
    records: Array<PackAssetManifestRecordV2>,
    streams: Array<PackAssetManifestStreamV2>,
    noDeltaRecords: Array<PackAssetManifestRecordV2>
  }

  export type PackAssetManifestRecordV2 = {
    baseId: number,
    fileId: number,
    size: number
  }

  export type PackAssetManifestStreamV2 = {
    parentBaseId: number,
    streamBaseId: number
  }

}

export type V2 = V2_N.PackAssetManifestV2;

export namespace V3_N {
  export type PackAssetManifestV3 = {
    buildId: number,
    records: Array<PackAssetManifestRecordV3>,
    streams: Array<PackAssetManifestStreamV3>,
    options: Array<PackAssetManifestOptionsV3>
  }

  export type PackAssetManifestRecordV3 = {
    baseId: number,
    fileId: number,
    size: number
  }

  export type PackAssetManifestStreamV3 = {
    parentBaseId: number,
    streamBaseId: number
  }

  export type PackAssetManifestOptionsV3 = {
    baseId: number,
    fileId: number,
    flags: number
  }

}

export type V3 = V3_N.PackAssetManifestV3;

export namespace V4_N {
  export type PackAssetManifestV4 = {
    buildId: number,
    records: Array<PackAssetManifestRecordV4>,
    streams: Array<PackAssetManifestStreamV4>,
    options: Array<PackAssetManifestOptionsV4>,
    properties: Array<PackAssetManifestPropertyV4>,
    propertyTable: Array<PackAssetManifestPropertyIndexV4>
  }

  export type PackAssetManifestRecordV4 = {
    baseId: number,
    fileId: number,
    size: number,
    flags: number
  }

  export type PackAssetManifestStreamV4 = {
    parentBaseId: number,
    streamBaseId: number
  }

  export type PackAssetManifestOptionsV4 = {
    baseId: number,
    fileId: number,
    flags: number
  }

  export type PackAssetManifestPropertyV4 = {
    type: number,
    data: Array<number>
  }

  export type PackAssetManifestPropertyIndexV4 = {
    baseId: number,
    properyIndex: number
  }

}

export type V4 = V4_N.PackAssetManifestV4;

export namespace V5_N {
  export type PackAssetManifestV5 = {
    buildId: number,
    records: Array<PackAssetManifestRecordV5>,
    streams: Array<PackAssetManifestStreamV5>,
    properties: Array<PackAssetManifestPropertyV5>,
    propertyTable: Array<PackAssetManifestPropertyIndexV5>
  }

  export type PackAssetManifestRecordV5 = {
    baseId: number,
    fileId: number,
    size: number,
    flags: number
  }

  export type PackAssetManifestStreamV5 = {
    parentBaseId: number,
    streamBaseId: number
  }

  export type PackAssetManifestPropertyV5 = {
    type: number,
    data: Array<number>
  }

  export type PackAssetManifestPropertyIndexV5 = {
    baseId: number,
    properyIndex: number
  }

}

export type V5 = V5_N.PackAssetManifestV5;

export namespace V6_N {
  export type PackAssetManifest = {
    buildId: number,
    totalRecordSize: number,
    records: Array<PackAssetManifestRecord>,
    streams: Array<PackAssetManifestStream>,
    properties: Array<PackAssetManifestProperty>,
    propertyTable: Array<PackAssetManifestPropertyIndex>
  }

  export type PackAssetManifestRecord = {
    baseId: number,
    fileId: number,
    size: number,
    flags: number
  }

  export type PackAssetManifestStream = {
    parentBaseId: number,
    streamBaseId: number
  }

  export type PackAssetManifestProperty = {
    type: number,
    data: Array<number>
  }

  export type PackAssetManifestPropertyIndex = {
    baseId: number,
    properyIndex: number
  }

}

export type V6 = V6_N.PackAssetManifest;

export type V0_U = V0 | V1 | V2 | V3 | V4 | V5 | V6;
export type V1_U = V1 | V2 | V3 | V4 | V5 | V6;
export type V2_U = V2 | V3 | V4 | V5 | V6;
export type V3_U = V3 | V4 | V5 | V6;
export type V4_U = V4 | V5 | V6;
export type V5_U = V5 | V6;
export type V6_U = V6;
