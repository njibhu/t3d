

export type PackMapResourceMapV0 = {
  nodeArray: Array<PackMapResourceMapNodeV0>
}

export type PackMapResourceMapNodeV0 = {
  position: Array<number>,
  flags: number,
  itemArray: Array<PackMapResourceMapNodeItemV0>
}

export type PackMapResourceMapNodeItemV0 = {
  filename: string,
  type: number
}

export type PackMapResourceMapV1 = {
  nodeArray: Array<PackMapResourceMapNodeV1>
}

export type PackMapResourceMapNodeV1 = {
  position: Array<number>,
  flags: number,
  itemArray: Array<PackMapResourceMapNodeItemV1>
}

export type PackMapResourceMapNodeItemV1 = {
  filename: string,
  type: number,
  permutation: number
}