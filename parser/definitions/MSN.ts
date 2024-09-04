import { FixedArray, Float32, RefString16, DynArray } from "../src/types";

const V1 = {
  chunkName: "msn",
  name: "MapMission",
  version: 1,
  definitions: {
    PackMapInterestPoint: {
      position: FixedArray(Float32, 3),
      forward: FixedArray(Float32, 3)
    }
  },
  root: {
    interestPoint: DynArray("PackMapInterestPoint")
  }
};

const V2 = {
  chunkName: "msn",
  name: "MapMission",
  version: 2,
  definitions: {
    PackMapInterestPoint: {
      position: FixedArray(Float32, 3),
      forward: FixedArray(Float32, 3),
      description: RefString16()
    }
  },
  root: {
    interestPoint: DynArray("PackMapInterestPoint")
  }
};

export const latest = V2;
export const definitions = { V1, V2 };
export const definitionArray = Object.values(definitions);