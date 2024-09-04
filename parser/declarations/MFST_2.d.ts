export namespace V0_N {
  export type ContentPortalManifestV0 = {
    mapArray: Array<ContentMapV0>
  }

  export type ContentMapV0 = {
    mapId: number,
    mapRedirectorArray: Array<ContentMapRedirectorV0>,
    mapStartArray: Array<ContentMapStartV0>
  }

  export type ContentMapRedirectorV0 = {
    mapId: number,
    token: number,
    position: Float32Array,
    radius: number
  }

  export type ContentMapStartV0 = {
    token: number,
    modelArray: Array<ContentMapModelV0>,
    position: Float32Array,
    radius: number
  }

  export type ContentMapModelV0 = {
    filename: number,
    flags: number,
    type: number
  }

}

export type V0 = V0_N.ContentPortalManifestV0;

export namespace V1_N {
  export type ContentPortalManifestV1 = {
    mapArray: Array<ContentMapV1>
  }

  export type ContentMapV1 = {
    mapId: number,
    mapRedirectorArray: Array<ContentMapRedirectorV1>,
    mapStartArray: Array<ContentMapStartV1>
  }

  export type ContentMapRedirectorV1 = {
    mapId: number,
    token: number,
    position: Float32Array,
    radius: number
  }

  export type ContentMapStartV1 = {
    token: number,
    modelArray: Array<ContentMapModelV1>,
    position: Float32Array,
    radius: number
  }

  export type ContentMapModelV1 = {
    filename: number,
    flags: number,
    type: number,
    permutation: BigInt
  }

}

export type V1 = V1_N.ContentPortalManifestV1;

export namespace V2_N {
  export type ContentPortalManifest = {
    mapArray: Array<ContentMap>
  }

  export type ContentMap = {
    mapGUID: Uint8Array,
    mapRedirectorArray: Array<ContentMapRedirector>,
    mapStartArray: Array<ContentMapStart>
  }

  export type ContentMapRedirector = {
    mapGUID: Uint8Array,
    token: number,
    position: Float32Array,
    radius: number
  }

  export type ContentMapStart = {
    token: number,
    modelArray: Array<ContentMapModel>,
    position: Float32Array,
    radius: number
  }

  export type ContentMapModel = {
    filename: number,
    flags: number,
    type: number,
    permutation: BigInt
  }

}

export type V2 = V2_N.ContentPortalManifest;

export type V0_U = V0 | V1 | V2;
export type V1_U = V1 | V2;
export type V2_U = V2;
