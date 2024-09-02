export namespace V0_N {
  export type PackMapLayers = {
    props: Array<PackMapLayerProp>,
    layers: Array<PackMapLayer>
  }

  export type PackMapLayerProp = {
    guid: BigInt,
    layerIds: Array<number>
  }

  export type PackMapLayer = {
    layerId: number,
    metaData: Array<Array<number>>
  }

}

export type V0 = V0_N.PackMapLayers;

export namespace V1_N {
  export type PackMapLayers = {
    props: Array<PackMapLayerProp>,
    lights: Array<PackMapLayerLight>,
    layers: Array<PackMapLayer>
  }

  export type PackMapLayerProp = {
    guid: BigInt,
    layerIds: Array<number>
  }

  export type PackMapLayerLight = {
    guid: BigInt,
    layerIds: Array<number>
  }

  export type PackMapLayer = {
    layerId: number,
    metaData: Array<Array<number>>
  }

}

export type V1 = V1_N.PackMapLayers;

export type V0_U = V0 | V1;
export type V1_U = V1;
