import { String16, Uint32, Uint8, DynArray } from "../src/types";

export const V0 = {
  chunkName: "GR2S",
  name: "ModelFileGr2sV0",
  version: 0,
  definitions: {
    ModelGr2DataV0: {
      data: DynArray(Uint8)
    }
  },
  root: {
    gr2Data: DynArray("ModelGr2DataV0")
  }
};

export const V1 = {
  chunkName: "GR2S",
  name: "ModelFileGr2sV1",
  version: 1,
  definitions: {
    ModelGr2DataV1: {
      filename: String16(),
      flags: Uint32,
      data: DynArray(Uint8)
    }
  },
  root: {
    gr2Data: DynArray("ModelGr2DataV1")
  }
};

export const V2 = {
  chunkName: "GR2S",
  name: "ModelFileGr2sV2",
  version: 2,
  definitions: {
    ModelGr2DataV2: {
      filename: String16(),
      flags: Uint32,
      data: DynArray(Uint8)
    }
  },
  root: {
    gr2Data: DynArray("ModelGr2DataV2")
  }
};

export const V3 = {
  chunkName: "GR2S",
  name: "ModelFileGr2sV3",
  version: 3,
  definitions: {
    ModelGr2DataV3: {
      filename: String16(),
      flags: Uint32,
      data: DynArray(Uint8)
    }
  },
  root: {
    gr2Data: DynArray("ModelGr2DataV3")
  }
};

export const V4 = {
  chunkName: "GR2S",
  name: "ModelFileGr2sV4",
  version: 4,
  definitions: {
    ModelGr2DataV4: {
      filename: String16(),
      flags: Uint32,
      data: DynArray(Uint8)
    }
  },
  root: {
    gr2Data: DynArray("ModelGr2DataV4")
  }
};

export const latest = V4;
export const definitionArray = [V0, V1, V2, V3, V4];