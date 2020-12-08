

export type MapObstacles = {
  obstacles: Array<PackMapEditCollision>
}

export type PackMapEditCollision = {
  token: number,
  flags: number,
  bottmVertices: Array<Array<number>>,
  topVertices: Array<Array<number>>,
  name: string,
  surface: BigInt
}