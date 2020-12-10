export namespace V0_N {
  export type PackMapMetadata = {
    maps: Array<PackMapMetadataMap>
  }

  export type PackMapMetadataMap = {
    mapId: number,
    mapType: number
  }

}

export type V0 = V0_N.PackMapMetadata;

export type V0_U = V0;
