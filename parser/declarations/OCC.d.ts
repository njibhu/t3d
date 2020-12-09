export namespace V0 {
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

