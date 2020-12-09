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

export type V0_U = V0;
