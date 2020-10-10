

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

export type MapEditRegion = {
  ambientColor: Array<number>,
  directionalColor: Array<number>,
  ambientIntenisty: number,
  directionalIntenisty: number
}

export type MapEditLayers = {
  layerStates: Array<number>,
  layerNames: Array<string>,
  layerIds: Array<number>,
  items: Array<MapEditLayerItem>
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

export type MapEditCamLocations = {
  attack: number,
  rotation: number,
  position: Array<number>,
  name: string
}

export type PackMapEditDirtyChunks = {
  flags: number,
  position: Array<number>
}

export type MapEditLayerItem = {
  guid: number,
  moduleId: number,
  layerFlags: Array<number>
}

export type MapEditSnapPoint = {
  guid: number,
  moduleId: number,
  flags: number,
  position: Array<number>,
  rotation: Array<number>,
  scale: number
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

export type MapEditMeasureSpan = {
  name: string,
  substrateId0: number,
  substrateId1: number,
  substrateModuleId0: number,
  substrateModuleId1: number,
  position0: Array<number>,
  position1: Array<number>,
  limits: Array<number>
}

export type PackMapEditNavmeshGenPropMode = {
  propId: number,
  mode: number,
  animSequence: number
}