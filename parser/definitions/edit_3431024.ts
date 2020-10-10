import { Uint8, DynArray, String16, Uint32, Uint64, FixedArray, Float32 } from "../src/types";

export const V3 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 3,
  definitions: {
    MapEditRegion: {
      ambientColor: FixedArray(Uint8, 3),
      directionalColor: FixedArray(Uint8, 3),
      ambientIntenisty: Float32,
      directionalIntenisty: Float32
    },
    MapEditLayers: {
      layerStates: DynArray(Uint8)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2))
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    }
  },
  root: {
    regions: "MapEditRegion",
    miniMapParams: "MapEditRegion",
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    camLocations: DynArray("MapEditCamLocations")
  }
};

export const V4 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 4,
  definitions: {
    MapEditRegion: {
      ambientColor: FixedArray(Uint8, 3),
      directionalColor: FixedArray(Uint8, 3),
      ambientIntenisty: Float32,
      directionalIntenisty: Float32
    },
    MapEditLayers: {
      layerPropCount: FixedArray(Uint32, 31),
      layerStates: FixedArray(Uint8, 31)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2))
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    }
  },
  root: {
    regions: "MapEditRegion",
    miniMapParams: "MapEditRegion",
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    camLocations: DynArray("MapEditCamLocations")
  }
};

export const V5 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 5,
  definitions: {
    MapEditRegion: {
      ambientColor: FixedArray(Uint8, 3),
      directionalColor: FixedArray(Uint8, 3),
      ambientIntenisty: Float32,
      directionalIntenisty: Float32
    },
    MapEditLayers: {
      layerPropCount: FixedArray(Uint32, 31),
      layerStates: FixedArray(Uint8, 31)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2))
    },
    PackMapEditDirtyChunks: {
      dirtyFlags: Uint32,
      chunkCoord: FixedArray(Uint32, 2)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    }
  },
  root: {
    regions: "MapEditRegion",
    miniMapParams: "MapEditRegion",
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations")
  }
};

export const V6 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 6,
  definitions: {
    MapEditRegion: {
      ambientColor: FixedArray(Uint8, 3),
      directionalColor: FixedArray(Uint8, 3),
      ambientIntenisty: Float32,
      directionalIntenisty: Float32
    },
    MapEditLayers: {
      layerPropCount: FixedArray(Uint32, 31),
      layerStates: FixedArray(Uint8, 31)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2))
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    }
  },
  root: {
    regions: "MapEditRegion",
    miniMapParams: "MapEditRegion",
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    floodPoints: DynArray("PackMapEditDirtyChunks")
  }
};

export const V7 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 7,
  definitions: {
    MapEditLayers: {
      layerPropCount: FixedArray(Uint32, 31),
      layerStates: FixedArray(Uint8, 31)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    floodPoints: DynArray("PackMapEditDirtyChunks")
  }
};

export const V8 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 8,
  definitions: {
    MapEditLayers: {
      layerPropCount: FixedArray(Uint32, 31),
      layerStates: FixedArray(Uint8, 31),
      layerNames: FixedArray(String16(), 31)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    floodPoints: DynArray("PackMapEditDirtyChunks")
  }
};

export const V9 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 9,
  definitions: {
    MapEditLayers: {
      layerPropCount: FixedArray(Uint32, 31),
      layerStates: FixedArray(Uint8, 31),
      layerNames: FixedArray(String16(), 31)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    floodPoints: DynArray("PackMapEditDirtyChunks"),
    mapHome: String16(),
    homeSave: Uint8
  }
};

export const V10 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 10,
  definitions: {
    MapEditLayers: {
      layerPropCount: FixedArray(Uint32, 31),
      layerStates: FixedArray(Uint8, 31),
      layerNames: FixedArray(String16(), 31)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    floodPoints: DynArray("PackMapEditDirtyChunks"),
    mapHome: String16(),
    homeSave: Uint8,
    reserved: String16()
  }
};

export const V11 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 11,
  definitions: {
    MapEditLayers: {
      layerStates: FixedArray(Uint8, 31),
      layerNames: FixedArray(String16(), 31),
      items: DynArray("MapEditLayerItem")
    },
    MapEditLayerItem: {
      guid: Uint64,
      moduleId: Uint32,
      layerFlags: Uint32
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    },
    MapEditSnapPoint: {
      guid: Uint64,
      moduleId: Uint32,
      flags: Uint32,
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3),
      scale: Float32
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    floodPoints: DynArray("PackMapEditDirtyChunks"),
    snapPoints: DynArray("MapEditSnapPoint"),
    mapHome: String16(),
    homeSave: Uint8,
    reserved: String16()
  }
};

export const V12 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 12,
  definitions: {
    MapEditLayers: {
      layerStates: FixedArray(Uint8, 31),
      layerNames: FixedArray(String16(), 31),
      items: DynArray("MapEditLayerItem")
    },
    MapEditLayerItem: {
      guid: Uint64,
      moduleId: Uint32,
      layerFlags: Uint32
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    },
    MapEditSnapPoint: {
      guid: Uint64,
      moduleId: Uint32,
      flags: Uint32,
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3),
      scale: Float32
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    floodPoints: DynArray("PackMapEditDirtyChunks"),
    snapPoints: DynArray("MapEditSnapPoint"),
    mapHome: String16(),
    homeSave: Uint8,
    reserved: String16()
  }
};

export const V13 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 13,
  definitions: {
    MapEditLayers: {
      layerStates: DynArray(Uint8),
      layerNames: DynArray(String16()),
      layerIds: DynArray(Uint32),
      items: DynArray("MapEditLayerItem")
    },
    MapEditLayerItem: {
      guid: Uint64,
      moduleId: Uint32,
      layerFlags: DynArray(Uint32)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    },
    MapEditSnapPoint: {
      guid: Uint64,
      moduleId: Uint32,
      flags: Uint32,
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3),
      scale: Float32
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    floodPoints: DynArray("PackMapEditDirtyChunks"),
    snapPoints: DynArray("MapEditSnapPoint"),
    mapHome: String16(),
    homeSave: Uint8,
    reserved: String16()
  }
};

export const V14 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 14,
  definitions: {
    MapEditLayers: {
      layerStates: DynArray(Uint8),
      layerNames: DynArray(String16()),
      layerIds: DynArray(Uint32),
      items: DynArray("MapEditLayerItem")
    },
    MapEditLayerItem: {
      guid: Uint64,
      moduleId: Uint32,
      layerFlags: DynArray(Uint32)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    },
    PackMapEditNavMeshData: {
      floodPoints: DynArray("PackMapEditDirtyChunks"),
      surfacePolys: DynArray("PackMapEditSurfacePoly"),
      surfaceRoads: DynArray("PackMapEditSurfaceRoad")
    },
    PackMapEditSurfacePoly: {
      name: String16(),
      surfaceType: Uint32,
      vertices: DynArray(FixedArray(Float32, 2)),
      range: FixedArray(Float32, 2)
    },
    PackMapEditSurfaceRoad: {
      name: String16(),
      surfaceType: Uint32,
      nodes: DynArray("PackMapEditSurfaceRoadNode")
    },
    PackMapEditSurfaceRoadNode: {
      position: FixedArray(Float32, 3),
      radius: Float32
    },
    MapEditSnapPoint: {
      guid: Uint64,
      moduleId: Uint32,
      flags: Uint32,
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3),
      scale: Float32
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    navMeshData: "PackMapEditNavMeshData",
    snapPoints: DynArray("MapEditSnapPoint"),
    mapHome: String16(),
    homeSave: Uint8,
    reserved: String16()
  }
};

export const V15 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 15,
  definitions: {
    MapEditLayers: {
      layerStates: DynArray(Uint8),
      layerNames: DynArray(String16()),
      layerIds: DynArray(Uint32),
      items: DynArray("MapEditLayerItem")
    },
    MapEditLayerItem: {
      guid: Uint64,
      moduleId: Uint32,
      layerFlags: DynArray(Uint32)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    },
    PackMapEditNavMeshData: {
      floodPoints: DynArray("PackMapEditDirtyChunks"),
      surfacePolys: DynArray("PackMapEditSurfacePoly"),
      surfaceRoads: DynArray("PackMapEditSurfaceRoad")
    },
    PackMapEditSurfacePoly: {
      name: String16(),
      surfaceType: Uint32,
      vertices: DynArray(FixedArray(Float32, 2)),
      range: FixedArray(Float32, 2)
    },
    PackMapEditSurfaceRoad: {
      name: String16(),
      surfaceType: Uint32,
      nodes: DynArray("PackMapEditSurfaceRoadNode")
    },
    PackMapEditSurfaceRoadNode: {
      position: FixedArray(Float32, 3),
      radius: Float32
    },
    MapEditSnapPoint: {
      guid: Uint64,
      moduleId: Uint32,
      flags: Uint32,
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3),
      scale: Float32
    },
    MapEditMeasureSpan: {
      name: String16(),
      substrateId0: Uint64,
      substrateId1: Uint64,
      substrateModuleId0: Uint32,
      substrateModuleId1: Uint32,
      position0: FixedArray(Float32, 3),
      position1: FixedArray(Float32, 3),
      limits: FixedArray(Float32, 3)
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    navMeshData: "PackMapEditNavMeshData",
    snapPoints: DynArray("MapEditSnapPoint"),
    measureSpans: DynArray("MapEditMeasureSpan"),
    mapHome: String16(),
    homeSave: Uint8,
    reserved: String16()
  }
};

export const V16 = {
  chunkName: "edit",
  name: "MapEditData",
  version: 16,
  definitions: {
    MapEditLayers: {
      layerStates: DynArray(Uint8),
      layerNames: DynArray(String16()),
      layerIds: DynArray(Uint32),
      items: DynArray("MapEditLayerItem")
    },
    MapEditLayerItem: {
      guid: Uint64,
      moduleId: Uint32,
      layerFlags: DynArray(Uint32)
    },
    PackMapEditAnnotations: {
      annotations: DynArray("PackMapEditAnnotation")
    },
    PackMapEditAnnotation: {
      name: String16(),
      flags: Uint32,
      anchors: DynArray(FixedArray(Float32, 2)),
      zRange: FixedArray(Float32, 2)
    },
    PackMapEditDirtyChunks: {
      flags: Uint32,
      position: FixedArray(Float32, 3)
    },
    MapEditCamLocations: {
      attack: Float32,
      rotation: Float32,
      position: FixedArray(Float32, 3),
      name: String16()
    },
    PackMapEditNavMeshData: {
      floodPoints: DynArray("PackMapEditDirtyChunks"),
      surfacePolys: DynArray("PackMapEditSurfacePoly"),
      surfaceRoads: DynArray("PackMapEditSurfaceRoad"),
      propModesForGeneration: DynArray("PackMapEditNavmeshGenPropMode")
    },
    PackMapEditSurfacePoly: {
      name: String16(),
      surfaceType: Uint32,
      vertices: DynArray(FixedArray(Float32, 2)),
      range: FixedArray(Float32, 2)
    },
    PackMapEditSurfaceRoad: {
      name: String16(),
      surfaceType: Uint32,
      nodes: DynArray("PackMapEditSurfaceRoadNode")
    },
    PackMapEditSurfaceRoadNode: {
      position: FixedArray(Float32, 3),
      radius: Float32
    },
    PackMapEditNavmeshGenPropMode: {
      propId: Uint64,
      mode: Uint8,
      animSequence: Uint64
    },
    MapEditSnapPoint: {
      guid: Uint64,
      moduleId: Uint32,
      flags: Uint32,
      position: FixedArray(Float32, 3),
      rotation: FixedArray(Float32, 3),
      scale: Float32
    },
    MapEditMeasureSpan: {
      name: String16(),
      substrateId0: Uint64,
      substrateId1: Uint64,
      substrateModuleId0: Uint32,
      substrateModuleId1: Uint32,
      position0: FixedArray(Float32, 3),
      position1: FixedArray(Float32, 3),
      limits: FixedArray(Float32, 3)
    }
  },
  root: {
    layers: "MapEditLayers",
    annotations: "PackMapEditAnnotations",
    dirtyChunks: DynArray("PackMapEditDirtyChunks"),
    camLocations: DynArray("MapEditCamLocations"),
    navMeshData: "PackMapEditNavMeshData",
    snapPoints: DynArray("MapEditSnapPoint"),
    measureSpans: DynArray("MapEditMeasureSpan"),
    mapHome: String16(),
    homeSave: Uint8,
    reserved: String16()
  }
};

export const latest = V16;
export const definitionArray = [V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14, V15, V16];