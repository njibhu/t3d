export namespace V0 {
  export type MapObstacles = {
    obstacles: Array<PackMapEditCollision>
  }

  export type PackMapEditCollision = {
    token: number,
    flags: number,
    bottmVertices: Array<Array<number>>,
    topVertices: Array<Array<number>>
  }

}

export namespace V1 {
  export type MapObstacles = {
    obstacles: Array<PackMapEditCollision>
  }

  export type PackMapEditCollision = {
    token: number,
    flags: number,
    bottmVertices: Array<Array<number>>,
    topVertices: Array<Array<number>>,
    name: string
  }

}

export namespace V2 {
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

}

