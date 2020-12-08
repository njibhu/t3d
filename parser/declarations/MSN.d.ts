

export type MapMission = {
  interestPoint: Array<PackMapInterestPoint>
}

export type PackMapInterestPoint = {
  position: Array<number>,
  forward: Array<number>,
  description: string
}