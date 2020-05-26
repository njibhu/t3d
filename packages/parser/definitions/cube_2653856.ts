import { FixedArray, Float32, Filename, Uint64, DynArray, Uint32, String16, Uint8 } from "../src/types";

module.exports = [
  {
    chunkName: "cube",
    name: "PackMapCubeMapV0",
    version: 0,
    definitions: {
      PackMapCubeMapSampleV0: {
        position: FixedArray(Float32, 3),
        flags: Uint32,
        dataPtr: DynArray(Uint8)
      },
      PackMapCubeMapParamsV0: {
        modulateColor: Uint32,
        brightness: Float32,
        contrast: Float32,
        blurPasses: Uint32
      }
    },
    root: {
      sampleArray: DynArray("PackMapCubeMapSampleV0"),
      paramsArray: DynArray("PackMapCubeMapParamsV0")
    }
  },
  {
    chunkName: "cube",
    name: "PackMapCubeMapV1",
    version: 1,
    definitions: {
      PackMapCubeMapSampleV1: {
        position: FixedArray(Float32, 3),
        flags: Uint32,
        dayPtr: DynArray(Uint8),
        nightPtr: DynArray(Uint8)
      },
      PackMapCubeMapParamsV1: {
        modulateColor: Uint32,
        brightness: Float32,
        contrast: Float32,
        blurPasses: Uint32
      }
    },
    root: {
      sampleArray: DynArray("PackMapCubeMapSampleV1"),
      paramsArray: DynArray("PackMapCubeMapParamsV1")
    }
  },
  {
    chunkName: "cube",
    name: "PackMapCubeMapV2",
    version: 2,
    definitions: {
      PackMapCubeMapSampleV2: {
        position: FixedArray(Float32, 3),
        filenameDayDefault: Filename(),
        filenameNightDefault: Filename(),
        filenameDayScript: Filename(),
        filenameNightScript: Filename()
      },
      PackMapCubeMapParamsV2: {
        modulateColor: Uint32,
        brightness: Float32,
        contrast: Float32,
        blurPasses: Uint32
      }
    },
    root: {
      sampleArray: DynArray("PackMapCubeMapSampleV2"),
      paramsArray: DynArray("PackMapCubeMapParamsV2")
    }
  },
  {
    chunkName: "cube",
    name: "PackMapCubeMapV3",
    version: 3,
    definitions: {
      PackMapCubeMapSampleV3: {
        position: FixedArray(Float32, 3),
        filenameDayDefault: Filename(),
        filenameNightDefault: Filename(),
        filenameDayScript: Filename(),
        filenameNightScript: Filename(),
        envID: Uint64
      },
      PackMapCubeMapParamsV3: {
        modulateColor: Uint32,
        brightness: Float32,
        contrast: Float32,
        blurPasses: Uint32,
        envVolume: String16()
      }
    },
    root: {
      sampleArray: DynArray("PackMapCubeMapSampleV3"),
      paramsArray: DynArray("PackMapCubeMapParamsV3")
    }
  }
]