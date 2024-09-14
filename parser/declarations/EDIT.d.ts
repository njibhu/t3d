export namespace V3_N {
  export type MapEditData = {
    regions: MapEditRegion,
    miniMapParams: MapEditRegion,
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    camLocations: Array<MapEditCamLocations>
  }

  export type MapEditRegion = {
    ambientColor: Uint8Array,
    directionalColor: Uint8Array,
    ambientIntenisty: number,
    directionalIntenisty: number
  }

  export type MapEditLayers = {
    layerStates: Uint8Array
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

}

export type V3 = V3_N.MapEditData;

export namespace V4_N {
  export type MapEditData = {
    regions: MapEditRegion,
    miniMapParams: MapEditRegion,
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    camLocations: Array<MapEditCamLocations>
  }

  export type MapEditRegion = {
    ambientColor: Uint8Array,
    directionalColor: Uint8Array,
    ambientIntenisty: number,
    directionalIntenisty: number
  }

  export type MapEditLayers = {
    layerPropCount: Uint32Array,
    layerStates: Uint8Array
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

}

export type V4 = V4_N.MapEditData;

export namespace V5_N {
  export type MapEditData = {
    regions: MapEditRegion,
    miniMapParams: MapEditRegion,
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>
  }

  export type MapEditRegion = {
    ambientColor: Uint8Array,
    directionalColor: Uint8Array,
    ambientIntenisty: number,
    directionalIntenisty: number
  }

  export type MapEditLayers = {
    layerPropCount: Uint32Array,
    layerStates: Uint8Array
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>
  }

  export type PackMapEditDirtyChunks = {
    dirtyFlags: number,
    chunkCoord: Uint32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

}

export type V5 = V5_N.MapEditData;

export namespace V6_N {
  export type MapEditData = {
    regions: MapEditRegion,
    miniMapParams: MapEditRegion,
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>
  }

  export type MapEditRegion = {
    ambientColor: Uint8Array,
    directionalColor: Uint8Array,
    ambientIntenisty: number,
    directionalIntenisty: number
  }

  export type MapEditLayers = {
    layerPropCount: Uint32Array,
    layerStates: Uint8Array
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

}

export type V6 = V6_N.MapEditData;

export namespace V7_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>
  }

  export type MapEditLayers = {
    layerPropCount: Uint32Array,
    layerStates: Uint8Array
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

}

export type V7 = V7_N.MapEditData;

export namespace V8_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>
  }

  export type MapEditLayers = {
    layerPropCount: Uint32Array,
    layerStates: Uint8Array,
    layerNames: Array<string>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

}

export type V8 = V8_N.MapEditData;

export namespace V9_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>,
    mapHome: string,
    homeSave: number
  }

  export type MapEditLayers = {
    layerPropCount: Uint32Array,
    layerStates: Uint8Array,
    layerNames: Array<string>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

}

export type V9 = V9_N.MapEditData;

export namespace V10_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>,
    mapHome: string,
    homeSave: number,
    reserved: string
  }

  export type MapEditLayers = {
    layerPropCount: Uint32Array,
    layerStates: Uint8Array,
    layerNames: Array<string>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

}

export type V10 = V10_N.MapEditData;

export namespace V11_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>,
    snapPoints: Array<MapEditSnapPoint>,
    mapHome: string,
    homeSave: number,
    reserved: string
  }

  export type MapEditLayers = {
    layerStates: Uint8Array,
    layerNames: Array<string>,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: bigint,
    moduleId: number,
    layerFlags: number
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

  export type MapEditSnapPoint = {
    guid: bigint,
    moduleId: number,
    flags: number,
    position: Float32Array,
    rotation: Float32Array,
    scale: number
  }

}

export type V11 = V11_N.MapEditData;

export namespace V12_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>,
    snapPoints: Array<MapEditSnapPoint>,
    mapHome: string,
    homeSave: number,
    reserved: string
  }

  export type MapEditLayers = {
    layerStates: Uint8Array,
    layerNames: Array<string>,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: bigint,
    moduleId: number,
    layerFlags: number
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

  export type MapEditSnapPoint = {
    guid: bigint,
    moduleId: number,
    flags: number,
    position: Float32Array,
    rotation: Float32Array,
    scale: number
  }

}

export type V12 = V12_N.MapEditData;

export namespace V13_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>,
    snapPoints: Array<MapEditSnapPoint>,
    mapHome: string,
    homeSave: number,
    reserved: string
  }

  export type MapEditLayers = {
    layerStates: Uint8Array,
    layerNames: Array<string>,
    layerIds: Uint32Array,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: bigint,
    moduleId: number,
    layerFlags: Uint32Array
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

  export type MapEditSnapPoint = {
    guid: bigint,
    moduleId: number,
    flags: number,
    position: Float32Array,
    rotation: Float32Array,
    scale: number
  }

}

export type V13 = V13_N.MapEditData;

export namespace V14_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    navMeshData: PackMapEditNavMeshData,
    snapPoints: Array<MapEditSnapPoint>,
    mapHome: string,
    homeSave: number,
    reserved: string
  }

  export type MapEditLayers = {
    layerStates: Uint8Array,
    layerNames: Array<string>,
    layerIds: Uint32Array,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: bigint,
    moduleId: number,
    layerFlags: Uint32Array
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

  export type PackMapEditNavMeshData = {
    floodPoints: Array<PackMapEditDirtyChunks>,
    surfacePolys: Array<PackMapEditSurfacePoly>,
    surfaceRoads: Array<PackMapEditSurfaceRoad>
  }

  export type PackMapEditSurfacePoly = {
    name: string,
    surfaceType: number,
    vertices: Array<Float32Array>,
    range: Float32Array
  }

  export type PackMapEditSurfaceRoad = {
    name: string,
    surfaceType: number,
    nodes: Array<PackMapEditSurfaceRoadNode>
  }

  export type PackMapEditSurfaceRoadNode = {
    position: Float32Array,
    radius: number
  }

  export type MapEditSnapPoint = {
    guid: bigint,
    moduleId: number,
    flags: number,
    position: Float32Array,
    rotation: Float32Array,
    scale: number
  }

}

export type V14 = V14_N.MapEditData;

export namespace V15_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    navMeshData: PackMapEditNavMeshData,
    snapPoints: Array<MapEditSnapPoint>,
    measureSpans: Array<MapEditMeasureSpan>,
    mapHome: string,
    homeSave: number,
    reserved: string
  }

  export type MapEditLayers = {
    layerStates: Uint8Array,
    layerNames: Array<string>,
    layerIds: Uint32Array,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: bigint,
    moduleId: number,
    layerFlags: Uint32Array
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

  export type PackMapEditNavMeshData = {
    floodPoints: Array<PackMapEditDirtyChunks>,
    surfacePolys: Array<PackMapEditSurfacePoly>,
    surfaceRoads: Array<PackMapEditSurfaceRoad>
  }

  export type PackMapEditSurfacePoly = {
    name: string,
    surfaceType: number,
    vertices: Array<Float32Array>,
    range: Float32Array
  }

  export type PackMapEditSurfaceRoad = {
    name: string,
    surfaceType: number,
    nodes: Array<PackMapEditSurfaceRoadNode>
  }

  export type PackMapEditSurfaceRoadNode = {
    position: Float32Array,
    radius: number
  }

  export type MapEditSnapPoint = {
    guid: bigint,
    moduleId: number,
    flags: number,
    position: Float32Array,
    rotation: Float32Array,
    scale: number
  }

  export type MapEditMeasureSpan = {
    name: string,
    substrateId0: bigint,
    substrateId1: bigint,
    substrateModuleId0: number,
    substrateModuleId1: number,
    position0: Float32Array,
    position1: Float32Array,
    limits: Float32Array
  }

}

export type V15 = V15_N.MapEditData;

export namespace V16_N {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    navMeshData: PackMapEditNavMeshData,
    snapPoints: Array<MapEditSnapPoint>,
    measureSpans: Array<MapEditMeasureSpan>,
    mapHome: string,
    homeSave: number,
    reserved: string
  }

  export type MapEditLayers = {
    layerStates: Uint8Array,
    layerNames: Array<string>,
    layerIds: Uint32Array,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: bigint,
    moduleId: number,
    layerFlags: Uint32Array
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Float32Array>,
    zRange: Float32Array
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Float32Array
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Float32Array,
    name: string
  }

  export type PackMapEditNavMeshData = {
    floodPoints: Array<PackMapEditDirtyChunks>,
    surfacePolys: Array<PackMapEditSurfacePoly>,
    surfaceRoads: Array<PackMapEditSurfaceRoad>,
    propModesForGeneration: Array<PackMapEditNavmeshGenPropMode>
  }

  export type PackMapEditSurfacePoly = {
    name: string,
    surfaceType: number,
    vertices: Array<Float32Array>,
    range: Float32Array
  }

  export type PackMapEditSurfaceRoad = {
    name: string,
    surfaceType: number,
    nodes: Array<PackMapEditSurfaceRoadNode>
  }

  export type PackMapEditSurfaceRoadNode = {
    position: Float32Array,
    radius: number
  }

  export type PackMapEditNavmeshGenPropMode = {
    propId: bigint,
    mode: number,
    animSequence: bigint
  }

  export type MapEditSnapPoint = {
    guid: bigint,
    moduleId: number,
    flags: number,
    position: Float32Array,
    rotation: Float32Array,
    scale: number
  }

  export type MapEditMeasureSpan = {
    name: string,
    substrateId0: bigint,
    substrateId1: bigint,
    substrateModuleId0: number,
    substrateModuleId1: number,
    position0: Float32Array,
    position1: Float32Array,
    limits: Float32Array
  }

}

export type V16 = V16_N.MapEditData;

export type V3_U = V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V4_U = V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V5_U = V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V6_U = V6 | V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V7_U = V7 | V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V8_U = V8 | V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V9_U = V9 | V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V10_U = V10 | V11 | V12 | V13 | V14 | V15 | V16;
export type V11_U = V11 | V12 | V13 | V14 | V15 | V16;
export type V12_U = V12 | V13 | V14 | V15 | V16;
export type V13_U = V13 | V14 | V15 | V16;
export type V14_U = V14 | V15 | V16;
export type V15_U = V15 | V16;
export type V16_U = V16;
