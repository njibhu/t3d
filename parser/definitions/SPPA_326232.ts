import { Uint32, Uint8, DynArray } from "../src/types";

export const V0 = {
  chunkName: "SPPA",
  name: "AmatAppleShader",
  version: 0,
  definitions: {
    AmatAppleShaderConstant: {
      token: Uint32,
      regIndex: Uint32,
      regCount: Uint32
    }
  },
  root: {
    isPixelShader: Uint32,
    cachedData: DynArray(Uint8),
    physicalData: DynArray(Uint8),
    constants: DynArray("AmatAppleShaderConstant"),
    samplers: DynArray("AmatAppleShaderConstant")
  }
};

export const latest = V0;
export const definitionArray = [V0];