export namespace V1_N {
  export type MapMission = {
    interestPoint: Array<PackMapInterestPoint>
  }

  export type PackMapInterestPoint = {
    position: Array<number>,
    forward: Array<number>
  }

}

export type V1 = V1_N.MapMission;

export namespace V2_N {
  export type MapMission = {
    interestPoint: Array<PackMapInterestPoint>
  }

  export type PackMapInterestPoint = {
    position: Array<number>,
    forward: Array<number>,
    description: string
  }

}

export type V2 = V2_N.MapMission;

export type V1_U = V1 | V2;
export type V2_U = V2;
