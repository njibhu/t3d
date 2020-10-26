

export type ContentPortalManifestV0 = {
  mapArray: Array<ContentMapV0>
}

export type ContentMapV0 = {
  mapId: number,
  mapRedirectorArray: Array<ContentMapRedirectorV0>,
  mapStartArray: Array<ContentMapStartV0>
}

export type ContentMapRedirectorV0 = {
  mapId: number,
  token: number,
  position: Array<number>,
  radius: number
}

export type ContentMapStartV0 = {
  token: number,
  modelArray: Array<ContentMapModelV0>,
  position: Array<number>,
  radius: number
}

export type ContentMapModelV0 = {
  filename: string,
  flags: number,
  type: number
}

export type ContentPortalManifestV1 = {
  mapArray: Array<ContentMapV1>
}

export type ContentMapV1 = {
  mapId: number,
  mapRedirectorArray: Array<ContentMapRedirectorV1>,
  mapStartArray: Array<ContentMapStartV1>
}

export type ContentMapRedirectorV1 = {
  mapId: number,
  token: number,
  position: Array<number>,
  radius: number
}

export type ContentMapStartV1 = {
  token: number,
  modelArray: Array<ContentMapModelV1>,
  position: Array<number>,
  radius: number
}

export type ContentMapModelV1 = {
  filename: string,
  flags: number,
  type: number,
  permutation: BigInt
}

export type ContentPortalManifest = {
  mapArray: Array<ContentMap>
}

export type ContentMap = {
  mapGUID: Array<number>,
  mapRedirectorArray: Array<ContentMapRedirector>,
  mapStartArray: Array<ContentMapStart>
}

export type ContentMapRedirector = {
  mapGUID: Array<number>,
  token: number,
  position: Array<number>,
  radius: number
}

export type ContentMapStart = {
  token: number,
  modelArray: Array<ContentMapModel>,
  position: Array<number>,
  radius: number
}

export type ContentMapModel = {
  filename: string,
  flags: number,
  type: number,
  permutation: BigInt
}