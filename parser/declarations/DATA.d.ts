export namespace V0 {
  export type PagedImageEmbeddedPagesDataV0 = {
    pages: Array<PagedImageEmbeddedPageDataV0>
  }

  export type PagedImageEmbeddedPageDataV0 = {
    layer: number,
    coord: Array<number>,
    rawData: Array<number>,
    compressedData: Array<number>
  }

}

export namespace V1 {
  export type PagedImageTableDataV1 = {
    layers: Array<PagedImageLayerDataV1>,
    pages: Array<PagedImagePageDataV1>
  }

  export type PagedImageLayerDataV1 = {
    dims: Array<number>,
    rawDims: Array<number>,
    diskFormat: number,
    rawFormat: number,
    strippedFormat: number
  }

  export type PagedImagePageDataV1 = {
    layer: number,
    coord: Array<number>,
    filename: string,
    flags: number,
    solidColor: Array<number>
  }

}

export namespace V2 {
  export type PagedImageTableDataV2 = {
    layers: Array<PagedImageLayerDataV2>,
    pages: Array<PagedImagePageDataV2>,
    flags: number
  }

  export type PagedImageLayerDataV2 = {
    dims: Array<number>,
    rawDims: Array<number>,
    diskFormat: number,
    rawFormat: number,
    strippedFormat: number
  }

  export type PagedImagePageDataV2 = {
    layer: number,
    coord: Array<number>,
    filename: string,
    flags: number,
    solidColor: Array<number>
  }

}

export namespace V3 {
  export type PagedImageTableDataV3 = {
    layers: Array<PagedImageLayerDataV3>,
    rawPages: Array<PagedImagePageDataV3>,
    strippedPages: Array<PagedImagePageDataV3>,
    flags: number
  }

  export type PagedImageLayerDataV3 = {
    rawDims: Array<number>,
    strippedDims: Array<number>,
    rawFormat: number,
    strippedFormat: number,
    diskFormat: number
  }

  export type PagedImagePageDataV3 = {
    layer: number,
    coord: Array<number>,
    filename: string,
    flags: number,
    solidColor: Array<number>
  }

}

