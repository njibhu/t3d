export namespace V0_N {
  export type PackMapAreasV0 = {
    areas: Array<PackMapAreaV0>,
    portals: Array<PackMapPortalV0>
  }

  export type PackMapAreaV0 = {
    min: Array<number>,
    max: Array<number>,
    internal: Array<number>,
    external: Array<number>,
    token: number,
    flags: number
  }

  export type PackMapPortalV0 = {
    portalVerts: Array<Array<number>>
  }

}

export type V0 = V0_N.PackMapAreasV0;

export namespace V1_N {
  export type PackMapAreasV1 = {
    areas: Array<PackMapAreaV1>
  }

  export type PackMapAreaV1 = {
    token: BigInt,
    type: number,
    floor: number,
    polygon: PackMapAreaPolygonV1,
    volume: PackMapAreaVolumeV1
  }

  export type PackMapAreaPolygonV1 = {
    points: Array<Array<number>>,
    height: number
  }

  export type PackMapAreaVolumeV1 = {
    portals: Array<PackMapAreaPortalV1>,
    position: Array<number>,
    extents: Array<number>,
    pointInterior: Array<number>,
    pointExterior: Array<number>
  }

  export type PackMapAreaPortalV1 = {
    position: Array<number>,
    extents: Array<number>,
    rotation: Array<number>
  }

}

export type V1 = V1_N.PackMapAreasV1;

export namespace V2_N {
  export type PackMapAreasV2 = {
    areas: Array<PackMapAreaV2>,
    areaTools: Array<PackMapAreaToolV2>
  }

  export type PackMapAreaV2 = {
    token: BigInt,
    type: number,
    floor: number,
    flags: number,
    polygon: PackMapAreaPolygonV2,
    volume: PackMapAreaVolumeV2
  }

  export type PackMapAreaPolygonV2 = {
    points: Array<Array<number>>,
    height: number
  }

  export type PackMapAreaVolumeV2 = {
    portals: Array<PackMapAreaPortalV2>,
    position: Array<number>,
    extents: Array<number>,
    pointInterior: Array<number>,
    pointExterior: Array<number>
  }

  export type PackMapAreaPortalV2 = {
    position: Array<number>,
    extents: Array<number>,
    rotation: Array<number>
  }

  export type PackMapAreaToolV2 = {
    annotation: string
  }

}

export type V2 = V2_N.PackMapAreasV2;

export namespace V3_N {
  export type PackMapAreasV3 = {
    areas: Array<PackMapAreaV3>,
    areaTools: Array<PackMapAreaToolV3>
  }

  export type PackMapAreaV3 = {
    token: BigInt,
    type: number,
    floor: number,
    flags: number,
    polygon: PackMapAreaPolygonV3,
    volume: PackMapAreaVolumeV3
  }

  export type PackMapAreaPolygonV3 = {
    points: Array<Array<number>>,
    height: number
  }

  export type PackMapAreaVolumeV3 = {
    portals: Array<PackMapAreaPortalV3>,
    position: Array<number>,
    extents: Array<number>,
    pointInterior: Array<number>,
    pointExterior: Array<number>
  }

  export type PackMapAreaPortalV3 = {
    position: Array<number>,
    extents: Array<number>,
    rotation: Array<number>
  }

  export type PackMapAreaToolV3 = {
    annotation: string,
    renderOffset: number
  }

}

export type V3 = V3_N.PackMapAreasV3;

export namespace V4_N {
  export type PackMapAreasV4 = {
    areas: Array<PackMapAreaV4>,
    areaTools: Array<PackMapAreaToolV4>
  }

  export type PackMapAreaV4 = {
    token: BigInt,
    type: number,
    floor: number,
    flags: number,
    polygon: PackMapAreaPolygonV4,
    volume: PackMapAreaVolumeV4
  }

  export type PackMapAreaPolygonV4 = {
    points: Array<Array<number>>,
    height: number
  }

  export type PackMapAreaVolumeV4 = {
    portals: Array<PackMapAreaPortalV4>,
    position: Array<number>,
    extents: Array<number>,
    pointInterior: Array<number>,
    pointExterior: Array<number>
  }

  export type PackMapAreaPortalV4 = {
    position: Array<number>,
    extents: Array<number>,
    rotation: Array<number>
  }

  export type PackMapAreaToolV4 = {
    annotation: string,
    renderOffset: number
  }

}

export type V4 = V4_N.PackMapAreasV4;

export type V0_U = V0 | V1 | V2 | V3 | V4;
export type V1_U = V1 | V2 | V3 | V4;
export type V2_U = V2 | V3 | V4;
export type V3_U = V3 | V4;
export type V4_U = V4;
