export namespace V3 {
  export type MapEditData = {
    regions: MapEditRegion,
    miniMapParams: MapEditRegion,
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    camLocations: Array<MapEditCamLocations>
  }

  export type MapEditRegion = {
    ambientColor: Array<number>,
    directionalColor: Array<number>,
    ambientIntenisty: number,
    directionalIntenisty: number
  }

  export type MapEditLayers = {
    layerStates: Array<number>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

}

export namespace V4 {
  export type MapEditData = {
    regions: MapEditRegion,
    miniMapParams: MapEditRegion,
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    camLocations: Array<MapEditCamLocations>
  }

  export type MapEditRegion = {
    ambientColor: Array<number>,
    directionalColor: Array<number>,
    ambientIntenisty: number,
    directionalIntenisty: number
  }

  export type MapEditLayers = {
    layerPropCount: Array<number>,
    layerStates: Array<number>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

}

export namespace V5 {
  export type MapEditData = {
    regions: MapEditRegion,
    miniMapParams: MapEditRegion,
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>
  }

  export type MapEditRegion = {
    ambientColor: Array<number>,
    directionalColor: Array<number>,
    ambientIntenisty: number,
    directionalIntenisty: number
  }

  export type MapEditLayers = {
    layerPropCount: Array<number>,
    layerStates: Array<number>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>
  }

  export type PackMapEditDirtyChunks = {
    dirtyFlags: number,
    chunkCoord: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

}

export namespace V6 {
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
    ambientColor: Array<number>,
    directionalColor: Array<number>,
    ambientIntenisty: number,
    directionalIntenisty: number
  }

  export type MapEditLayers = {
    layerPropCount: Array<number>,
    layerStates: Array<number>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

}

export namespace V7 {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>
  }

  export type MapEditLayers = {
    layerPropCount: Array<number>,
    layerStates: Array<number>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

}

export namespace V8 {
  export type MapEditData = {
    layers: MapEditLayers,
    annotations: PackMapEditAnnotations,
    dirtyChunks: Array<PackMapEditDirtyChunks>,
    camLocations: Array<MapEditCamLocations>,
    floodPoints: Array<PackMapEditDirtyChunks>
  }

  export type MapEditLayers = {
    layerPropCount: Array<number>,
    layerStates: Array<number>,
    layerNames: Array<string>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

}

export namespace V9 {
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
    layerPropCount: Array<number>,
    layerStates: Array<number>,
    layerNames: Array<string>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

}

export namespace V10 {
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
    layerPropCount: Array<number>,
    layerStates: Array<number>,
    layerNames: Array<string>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

}

export namespace V11 {
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
    layerStates: Array<number>,
    layerNames: Array<string>,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: BigInt,
    moduleId: number,
    layerFlags: number
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

  export type MapEditSnapPoint = {
    guid: BigInt,
    moduleId: number,
    flags: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

}

export namespace V12 {
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
    layerStates: Array<number>,
    layerNames: Array<string>,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: BigInt,
    moduleId: number,
    layerFlags: number
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

  export type MapEditSnapPoint = {
    guid: BigInt,
    moduleId: number,
    flags: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

}

export namespace V13 {
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
    layerStates: Array<number>,
    layerNames: Array<string>,
    layerIds: Array<number>,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: BigInt,
    moduleId: number,
    layerFlags: Array<number>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
    name: string
  }

  export type MapEditSnapPoint = {
    guid: BigInt,
    moduleId: number,
    flags: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

}

export namespace V14 {
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
    layerStates: Array<number>,
    layerNames: Array<string>,
    layerIds: Array<number>,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: BigInt,
    moduleId: number,
    layerFlags: Array<number>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
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
    vertices: Array<Array<number>>,
    range: Array<number>
  }

  export type PackMapEditSurfaceRoad = {
    name: string,
    surfaceType: number,
    nodes: Array<PackMapEditSurfaceRoadNode>
  }

  export type PackMapEditSurfaceRoadNode = {
    position: Array<number>,
    radius: number
  }

  export type MapEditSnapPoint = {
    guid: BigInt,
    moduleId: number,
    flags: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

}

export namespace V15 {
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
    layerStates: Array<number>,
    layerNames: Array<string>,
    layerIds: Array<number>,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: BigInt,
    moduleId: number,
    layerFlags: Array<number>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
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
    vertices: Array<Array<number>>,
    range: Array<number>
  }

  export type PackMapEditSurfaceRoad = {
    name: string,
    surfaceType: number,
    nodes: Array<PackMapEditSurfaceRoadNode>
  }

  export type PackMapEditSurfaceRoadNode = {
    position: Array<number>,
    radius: number
  }

  export type MapEditSnapPoint = {
    guid: BigInt,
    moduleId: number,
    flags: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type MapEditMeasureSpan = {
    name: string,
    substrateId0: BigInt,
    substrateId1: BigInt,
    substrateModuleId0: number,
    substrateModuleId1: number,
    position0: Array<number>,
    position1: Array<number>,
    limits: Array<number>
  }

}

export namespace V16 {
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
    layerStates: Array<number>,
    layerNames: Array<string>,
    layerIds: Array<number>,
    items: Array<MapEditLayerItem>
  }

  export type MapEditLayerItem = {
    guid: BigInt,
    moduleId: number,
    layerFlags: Array<number>
  }

  export type PackMapEditAnnotations = {
    annotations: Array<PackMapEditAnnotation>
  }

  export type PackMapEditAnnotation = {
    name: string,
    flags: number,
    anchors: Array<Array<number>>,
    zRange: Array<number>
  }

  export type PackMapEditDirtyChunks = {
    flags: number,
    position: Array<number>
  }

  export type MapEditCamLocations = {
    attack: number,
    rotation: number,
    position: Array<number>,
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
    vertices: Array<Array<number>>,
    range: Array<number>
  }

  export type PackMapEditSurfaceRoad = {
    name: string,
    surfaceType: number,
    nodes: Array<PackMapEditSurfaceRoadNode>
  }

  export type PackMapEditSurfaceRoadNode = {
    position: Array<number>,
    radius: number
  }

  export type PackMapEditNavmeshGenPropMode = {
    propId: BigInt,
    mode: number,
    animSequence: BigInt
  }

  export type MapEditSnapPoint = {
    guid: BigInt,
    moduleId: number,
    flags: number,
    position: Array<number>,
    rotation: Array<number>,
    scale: number
  }

  export type MapEditMeasureSpan = {
    name: string,
    substrateId0: BigInt,
    substrateId1: BigInt,
    substrateModuleId0: number,
    substrateModuleId1: number,
    position0: Array<number>,
    position1: Array<number>,
    limits: Array<number>
  }

}

