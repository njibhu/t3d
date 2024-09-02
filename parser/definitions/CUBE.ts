import { FixedArray, Float32, Filename, Uint64, DynArray, Uint32, RefString16, Uint8 } from "../src/types";

const V0 = {
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
};

const V1 = {
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
};

const V2 = {
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
};

const V3 = {
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
      envVolume: RefString16()
    }
  },
  root: {
    sampleArray: DynArray("PackMapCubeMapSampleV3"),
    paramsArray: DynArray("PackMapCubeMapParamsV3")
  }
};

const V4 = {
  chunkName: "cube",
  name: "PackMapCubeMapV4",
  version: 4,
  definitions: {
    PackMapCubeMapSampleV4: {
      position: FixedArray(Float32, 3),
      filenameDayDefault: Filename(),
      filenameNightDefault: Filename(),
      filenameDayScript: Filename(),
      filenameNightScript: Filename(),
      filenameDayDefaultHiRes: Filename(),
      filenameNightDefaultHiRes: Filename(),
      filenameDayScriptHiRes: Filename(),
      filenameNightScriptHiRes: Filename(),
      envID: Uint64
    },
    PackMapCubeMapParamsV4: {
      modulateColor: Uint32,
      brightness: Float32,
      contrast: Float32,
      blurPasses: Uint32,
      envVolume: RefString16()
    }
  },
  root: {
    sampleArray: DynArray("PackMapCubeMapSampleV4"),
    paramsArray: DynArray("PackMapCubeMapParamsV4")
  }
};

export const latest = V4;
export const definitions = { V0, V1, V2, V3, V4 };
export const definitionArray = Object.values(definitions);