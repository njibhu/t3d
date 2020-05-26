import { CString, Uint32, Uint8, DynArray, Uint64, Float32, Filename } from "../src/types";

module.exports = [
  {
    chunkName: "MRAS",
    name: "AmatAppleMaterial",
    version: 0,
    definitions: {
      AmatAppleShader: {
        isPixelShader: Uint32,
        cachedData: DynArray(Uint8),
        physicalData: DynArray(Uint8),
        constants: DynArray("AmatAppleShaderConstant"),
        samplers: DynArray("AmatAppleShaderConstant")
      },
      AmatAppleShaderConstant: {
        token: Uint32,
        regIndex: Uint32,
        regCount: Uint32
      },
      AmatAppleEffect: {
        token: Uint64,
        passes: DynArray("AmatApplePass")
      },
      AmatApplePass: {
        renderState: "AmatAppleRenderState",
        pixelShader: Uint32,
        vertexShader: Uint32,
        psFileFame: Filename(),
        vsFileName: Filename()
      },
      AmatAppleRenderState: {
        cullMode: Uint32,
        blendControl: Uint32,
        alphaTestAndMask: Uint32,
        alphaTestRef: Uint32,
        colorWrite: Uint32,
        depthWriteEnable: Uint32,
        depthFunction: Uint32,
        depthBias: Float32
      },
      AmatAppleSamplerState: {
        addressU: Uint32,
        addressV: Uint32,
        addressW: Uint32,
        borderColor: Uint32,
        magFilter: Uint32,
        maxAnisotropy: Uint32,
        maxMipLevel: Uint32,
        minFilter: Uint32,
        mipFilter: Uint32,
        mipMapLodBias: Float32
      }
    },
    root: {
      name: CString,
      shaders: DynArray("AmatAppleShader"),
      effects: DynArray("AmatAppleEffect"),
      samplers: DynArray("AmatAppleSamplerState")
    }
  }
]