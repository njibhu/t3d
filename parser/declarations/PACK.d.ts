

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