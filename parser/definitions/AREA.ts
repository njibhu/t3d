import { Uint64, Uint8, Uint32, FixedArray, DynArray, Float32, RefString16 } from "../src/types";

const V0 = {
  chunkName: "area",
  name: "PackMapAreasV0",
  version: 0,
  definitions: {
    PackMapAreaV0: {
      min: FixedArray(Float32, 3),
      max: FixedArray(Float32, 3),
      internal: FixedArray(Float32, 3),
      external: FixedArray(Float32, 3),
      token: Uint32,
      flags: Uint32
    },
    PackMapPortalV0: {
      portalVerts: DynArray(FixedArray(Float32, 3))
    }
  },
  root: {
    areas: DynArray("PackMapAreaV0"),
    portals: DynArray("PackMapPortalV0")
  }
};

const V1 = {
  chunkName: "area",
  name: "PackMapAreasV1",
  version: 1,
  definitions: {
    PackMapAreaV1: {
      token: Uint64,
      type: Uint8,
      floor: Uint8,
      polygon: "PackMapAreaPolygonV1",
      volume: "PackMapAreaVolumeV1"
    },
    PackMapAreaPolygonV1: {
      points: DynArray(FixedArray(Float32, 3)),
      height: Float32
    },
    PackMapAreaVolumeV1: {
      portals: DynArray("PackMapAreaPortalV1"),
      position: FixedArray(Float32, 3),
      extents: FixedArray(Float32, 3),
      pointInterior: FixedArray(Float32, 3),
      pointExterior: FixedArray(Float32, 3)
    },
    PackMapAreaPortalV1: {
      position: FixedArray(Float32, 3),
      extents: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3)
    }
  },
  root: {
    areas: DynArray("PackMapAreaV1")
  }
};

const V2 = {
  chunkName: "area",
  name: "PackMapAreasV2",
  version: 2,
  definitions: {
    PackMapAreaV2: {
      token: Uint64,
      type: Uint8,
      floor: Uint8,
      flags: Uint32,
      polygon: "PackMapAreaPolygonV2",
      volume: "PackMapAreaVolumeV2"
    },
    PackMapAreaPolygonV2: {
      points: DynArray(FixedArray(Float32, 3)),
      height: Float32
    },
    PackMapAreaVolumeV2: {
      portals: DynArray("PackMapAreaPortalV2"),
      position: FixedArray(Float32, 3),
      extents: FixedArray(Float32, 3),
      pointInterior: FixedArray(Float32, 3),
      pointExterior: FixedArray(Float32, 3)
    },
    PackMapAreaPortalV2: {
      position: FixedArray(Float32, 3),
      extents: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3)
    },
    PackMapAreaToolV2: {
      annotation: RefString16()
    }
  },
  root: {
    areas: DynArray("PackMapAreaV2"),
    areaTools: DynArray("PackMapAreaToolV2")
  }
};

const V3 = {
  chunkName: "area",
  name: "PackMapAreasV3",
  version: 3,
  definitions: {
    PackMapAreaV3: {
      token: Uint64,
      type: Uint8,
      floor: Uint8,
      flags: Uint32,
      polygon: "PackMapAreaPolygonV3",
      volume: "PackMapAreaVolumeV3"
    },
    PackMapAreaPolygonV3: {
      points: DynArray(FixedArray(Float32, 3)),
      height: Float32
    },
    PackMapAreaVolumeV3: {
      portals: DynArray("PackMapAreaPortalV3"),
      position: FixedArray(Float32, 3),
      extents: FixedArray(Float32, 3),
      pointInterior: FixedArray(Float32, 3),
      pointExterior: FixedArray(Float32, 3)
    },
    PackMapAreaPortalV3: {
      position: FixedArray(Float32, 3),
      extents: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3)
    },
    PackMapAreaToolV3: {
      annotation: RefString16(),
      renderOffset: Float32
    }
  },
  root: {
    areas: DynArray("PackMapAreaV3"),
    areaTools: DynArray("PackMapAreaToolV3")
  }
};

const V4 = {
  chunkName: "area",
  name: "PackMapAreasV4",
  version: 4,
  definitions: {
    PackMapAreaV4: {
      token: Uint64,
      type: Uint8,
      floor: Uint8,
      flags: Uint32,
      polygon: "PackMapAreaPolygonV4",
      volume: "PackMapAreaVolumeV4"
    },
    PackMapAreaPolygonV4: {
      points: DynArray(FixedArray(Float32, 3)),
      height: Float32
    },
    PackMapAreaVolumeV4: {
      portals: DynArray("PackMapAreaPortalV4"),
      position: FixedArray(Float32, 3),
      extents: FixedArray(Float32, 3),
      pointInterior: FixedArray(Float32, 3),
      pointExterior: FixedArray(Float32, 3)
    },
    PackMapAreaPortalV4: {
      position: FixedArray(Float32, 3),
      extents: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3)
    },
    PackMapAreaToolV4: {
      annotation: RefString16(),
      renderOffset: Float32
    }
  },
  root: {
    areas: DynArray("PackMapAreaV4"),
    areaTools: DynArray("PackMapAreaToolV4")
  }
};

export const latest = V4;
export const definitions = { V0, V1, V2, V3, V4 };
export const definitionArray = Object.values(definitions);