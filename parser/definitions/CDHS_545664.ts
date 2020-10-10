import { Uint8, Uint16, Uint32, FixedArray, DynArray } from "../src/types";

export const V0 = {
  chunkName: "CDHS",
  name: "PackShaderCacheV0",
  version: 0,
  definitions: {
    PackVertexShaderKeyV0: {
      params: Uint32,
      vertexFormat: Uint32,
      texGenCount: Uint32,
      texGen: FixedArray(Uint32, 14),
      vsVersion: Uint32
    }
  },
  root: {
    data: DynArray("PackVertexShaderKeyV0")
  }
};

export const V1 = {
  chunkName: "CDHS",
  name: "PackShaderCache",
  version: 1,
  definitions: {
    PackVertexShaderKey: {
      vsGenParams: "PackVsGenParams",
      vertexFormat: Uint32,
      texGenCount: Uint32,
      texGen: FixedArray(Uint32, 14),
      vsVersion: Uint32
    },
    PackVsGenParams: {
      pointWindCount: Uint8,
      lightPointCount: Uint8,
      lightSpotCount: Uint8,
      texTransCount: Uint8,
      hazeMode: Uint8,
      flags: Uint16
    }
  },
  root: {
    data: DynArray("PackVertexShaderKey")
  }
};

export const latest = V1;
export const definitionArray = [V0, V1];