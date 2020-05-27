import { Uint32, Uint64, DynArray, Uint8 } from "../src/types";

export const V0 = {
  chunkName: "MFST",
  name: "PackAssetManifestV0",
  version: 0,
  definitions: {
    PackAssetManifestRecordV0: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32
    }
  },
  root: {
    buildId: Uint32,
    records: DynArray("PackAssetManifestRecordV0")
  }
};

export const V1 = {
  chunkName: "MFST",
  name: "PackAssetManifestV1",
  version: 1,
  definitions: {
    PackAssetManifestRecordV1: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32
    },
    PackAssetManifestStreamV1: {
      parentBaseId: Uint32,
      streamBaseId: Uint32
    }
  },
  root: {
    buildId: Uint32,
    records: DynArray("PackAssetManifestRecordV1"),
    streams: DynArray("PackAssetManifestStreamV1")
  }
};

export const V2 = {
  chunkName: "MFST",
  name: "PackAssetManifestV2",
  version: 2,
  definitions: {
    PackAssetManifestRecordV2: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32
    },
    PackAssetManifestStreamV2: {
      parentBaseId: Uint32,
      streamBaseId: Uint32
    }
  },
  root: {
    buildId: Uint32,
    records: DynArray("PackAssetManifestRecordV2"),
    streams: DynArray("PackAssetManifestStreamV2"),
    noDeltaRecords: DynArray("PackAssetManifestRecordV2")
  }
};

export const V3 = {
  chunkName: "MFST",
  name: "PackAssetManifestV3",
  version: 3,
  definitions: {
    PackAssetManifestRecordV3: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32
    },
    PackAssetManifestStreamV3: {
      parentBaseId: Uint32,
      streamBaseId: Uint32
    },
    PackAssetManifestOptionsV3: {
      baseId: Uint32,
      fileId: Uint32,
      flags: Uint32
    }
  },
  root: {
    buildId: Uint32,
    records: DynArray("PackAssetManifestRecordV3"),
    streams: DynArray("PackAssetManifestStreamV3"),
    options: DynArray("PackAssetManifestOptionsV3")
  }
};

export const V4 = {
  chunkName: "MFST",
  name: "PackAssetManifestV4",
  version: 4,
  definitions: {
    PackAssetManifestRecordV4: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32,
      flags: Uint32
    },
    PackAssetManifestStreamV4: {
      parentBaseId: Uint32,
      streamBaseId: Uint32
    },
    PackAssetManifestOptionsV4: {
      baseId: Uint32,
      fileId: Uint32,
      flags: Uint32
    },
    PackAssetManifestPropertyV4: {
      type: Uint8,
      data: DynArray(Uint8)
    },
    PackAssetManifestPropertyIndexV4: {
      baseId: Uint32,
      properyIndex: Uint32
    }
  },
  root: {
    buildId: Uint32,
    records: DynArray("PackAssetManifestRecordV4"),
    streams: DynArray("PackAssetManifestStreamV4"),
    options: DynArray("PackAssetManifestOptionsV4"),
    properties: DynArray("PackAssetManifestPropertyV4"),
    propertyTable: DynArray("PackAssetManifestPropertyIndexV4")
  }
};

export const V5 = {
  chunkName: "MFST",
  name: "PackAssetManifestV5",
  version: 5,
  definitions: {
    PackAssetManifestRecordV5: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32,
      flags: Uint32
    },
    PackAssetManifestStreamV5: {
      parentBaseId: Uint32,
      streamBaseId: Uint32
    },
    PackAssetManifestPropertyV5: {
      type: Uint8,
      data: DynArray(Uint8)
    },
    PackAssetManifestPropertyIndexV5: {
      baseId: Uint32,
      properyIndex: Uint32
    }
  },
  root: {
    buildId: Uint32,
    records: DynArray("PackAssetManifestRecordV5"),
    streams: DynArray("PackAssetManifestStreamV5"),
    properties: DynArray("PackAssetManifestPropertyV5"),
    propertyTable: DynArray("PackAssetManifestPropertyIndexV5")
  }
};

export const V6 = {
  chunkName: "MFST",
  name: "PackAssetManifest",
  version: 6,
  definitions: {
    PackAssetManifestRecord: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32,
      flags: Uint32
    },
    PackAssetManifestStream: {
      parentBaseId: Uint32,
      streamBaseId: Uint32
    },
    PackAssetManifestProperty: {
      type: Uint8,
      data: DynArray(Uint8)
    },
    PackAssetManifestPropertyIndex: {
      baseId: Uint32,
      properyIndex: Uint32
    }
  },
  root: {
    buildId: Uint32,
    totalRecordSize: Uint64,
    records: DynArray("PackAssetManifestRecord"),
    streams: DynArray("PackAssetManifestStream"),
    properties: DynArray("PackAssetManifestProperty"),
    propertyTable: DynArray("PackAssetManifestPropertyIndex")
  }
};

export const latest = V6;
export const definitionArray = [V0, V1, V2, V3, V4, V5, V6];