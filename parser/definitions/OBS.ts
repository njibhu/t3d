import { Uint32, FixedArray, DynArray, Float32, RefString16, Uint64 } from "../src/types";

export const V0 = {
  chunkName: "obs",
  name: "MapObstacles",
  version: 0,
  definitions: {
    PackMapEditCollision: {
      token: Uint32,
      flags: Uint32,
      bottmVertices: DynArray(FixedArray(Float32, 3)),
      topVertices: DynArray(FixedArray(Float32, 3))
    }
  },
  root: {
    obstacles: DynArray("PackMapEditCollision")
  }
};

export const V1 = {
  chunkName: "obs",
  name: "MapObstacles",
  version: 1,
  definitions: {
    PackMapEditCollision: {
      token: Uint32,
      flags: Uint32,
      bottmVertices: DynArray(FixedArray(Float32, 3)),
      topVertices: DynArray(FixedArray(Float32, 3)),
      name: RefString16()
    }
  },
  root: {
    obstacles: DynArray("PackMapEditCollision")
  }
};

export const V2 = {
  chunkName: "obs",
  name: "MapObstacles",
  version: 2,
  definitions: {
    PackMapEditCollision: {
      token: Uint32,
      flags: Uint32,
      bottmVertices: DynArray(FixedArray(Float32, 3)),
      topVertices: DynArray(FixedArray(Float32, 3)),
      name: RefString16(),
      surface: Uint64
    }
  },
  root: {
    obstacles: DynArray("PackMapEditCollision")
  }
};

export const latest = V2;
export const definitionArray = [V0, V1, V2];