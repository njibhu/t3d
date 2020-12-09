export namespace V1 {
  export type MapMission = {
    interestPoint: Array<PackMapInterestPoint>
  }

  export type PackMapInterestPoint = {
    position: Array<number>,
    forward: Array<number>
  }

}

export namespace V2 {
  export type MapMission = {
    interestPoint: Array<PackMapInterestPoint>
  }

  export type PackMapInterestPoint = {
    position: Array<number>,
    forward: Array<number>,
    description: string
  }

}

