

export type PackMapLayers = {
  props: Array<PackMapLayerProp>,
  layers: Array<PackMapLayer>
}

export type PackMapLayerProp = {
  guid: number,
  layerIds: Array<number>
}

export type PackMapLayer = {
  layerId: number,
  metaData: Array<Array<number>>
}