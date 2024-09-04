export namespace V0_N {
  export type MapOcclusionTome = {
    enableTomeQueries: number,
    tome: Uint8Array,
    propIDMap: Uint8Array,
    reserved: Uint8Array
  }

}

export type V0 = V0_N.MapOcclusionTome;

export type V0_U = V0;
