export namespace V0_N {
  export type MapExpansionProperties = {
    properties: Array<MapExpansionProperty>
  }

  export type MapExpansionProperty = {
    type: number,
    val: number,
    strVal: string
  }

}

export type V0 = V0_N.MapExpansionProperties;

export type V0_U = V0;
