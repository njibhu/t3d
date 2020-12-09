export namespace V0_N {
  export type MapOcclusions = {
    Occlusions: Array<MapOcclusion>
  }

  export type MapOcclusion = {
    token: number,
    flags: number,
    vertices: Array<Array<number>>,
    name: string
  }

}

export type V0 = V0_N.MapOcclusions;

export type V0_U = V0;
