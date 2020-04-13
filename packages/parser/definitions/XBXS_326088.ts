import { CString, Uint32, Uint8, DynArray, Uint64, Float32, Filename } from "../src/types";

module.exports = [
  {
    chunkName: "XBXS",
    name: "AmatXbxMaterial",
    version: 0,
    definitions: {
      AmatXbxShader: {
        isPixelShader: Uint32,
        cachedData: DynArray(Uint8),
        physicalData: DynArray(Uint8),
        constants: DynArray("AmatXbxShaderConstant"),
        samplers: DynArray("AmatXbxSamplerConstant")
      },
      AmatXbxShaderConstant: {
        token: Uint32,
        regIndex: Uint32,
        regCount: Uint32
      },
      AmatXbxSamplerConstant: {
        regIndex: Uint32,
        stateIndex: Uint32,
        texIndex: Uint32
      },
      AmatXbxEffect: {
        token: Uint64,
        passes: DynArray("AmatXbxPass")
      },
      AmatXbxPass: {
        renderState: "AmatXbxRenderState",
        pixelShader: Uint32,
        vertexShader: Uint32,
        psFileFame: Filename,
        vsFileName: Filename
      },
      AmatXbxRenderState: {
        cullMode: Uint32,
        blendControl: Uint32,
        alphaTestAndMask: Uint32,
        alphaTestRef: Uint32,
        colorWrite: Uint32,
        depthWriteEnable: Uint32,
        depthFunction: Uint32,
        depthBias: Float32
      },
      AmatXbxSamplerState: {
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
      shaders: DynArray("AmatXbxShader"),
      effects: DynArray("AmatXbxEffect"),
      samplers: DynArray("AmatXbxSamplerState")
    }
  }
]