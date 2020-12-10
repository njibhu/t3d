export namespace V0_N {
  export type MapPackage = {
    baseFile: string,
    variants: Array<MapVariant>,
    flags: number
  }

  export type MapVariant = {
    file: string,
    name: string,
    token: BigInt,
    flags: number
  }

}

export type V0 = V0_N.MapPackage;

export type V0_U = V0;
