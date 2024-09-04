export namespace V0_N {
  export type MapObstacles = {
    obstacles: Array<PackMapEditCollision>
  }

  export type PackMapEditCollision = {
    token: number,
    flags: number,
    bottmVertices: Array<Float32Array>,
    topVertices: Array<Float32Array>
  }

}

export type V0 = V0_N.MapObstacles;

export namespace V1_N {
  export type MapObstacles = {
    obstacles: Array<PackMapEditCollision>
  }

  export type PackMapEditCollision = {
    token: number,
    flags: number,
    bottmVertices: Array<Float32Array>,
    topVertices: Array<Float32Array>,
    name: string
  }

}

export type V1 = V1_N.MapObstacles;

export namespace V2_N {
  export type MapObstacles = {
    obstacles: Array<PackMapEditCollision>
  }

  export type PackMapEditCollision = {
    token: number,
    flags: number,
    bottmVertices: Array<Float32Array>,
    topVertices: Array<Float32Array>,
    name: string,
    surface: BigInt
  }

}

export type V2 = V2_N.MapObstacles;

export type V0_U = V0 | V1 | V2;
export type V1_U = V1 | V2;
export type V2_U = V2;
