export namespace V0_N {
  export type PackMapWaterV0 = {
    waterFoamData: Array<number>,
    waterChunks: Array<number>
  }

}

export type V0 = V0_N.PackMapWaterV0;

export namespace V1_N {
  export type PackMapWaterV1 = {
    waterFlags: number,
    waterPlaneZ: number,
    waterSurfaces: Array<PackMapWaterSurfaceV1>
  }

  export type PackMapWaterSurfaceV1 = {
    guid: number,
    waterSurfaceFlags: number,
    waterSurfaceZ: number,
    vertices: Array<Array<number>>
  }

}

export type V1 = V1_N.PackMapWaterV1;

export type V0_U = V0 | V1;
export type V1_U = V1;
