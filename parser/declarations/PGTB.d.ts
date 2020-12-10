export namespace V0_N {
  export type PagedImageTableDataV0 = {
    layers: Array<PagedImageLayerDataV0>,
    pages: Array<PagedImagePageDataV0>
  }

  export type PagedImageLayerDataV0 = {
    dims: Array<number>,
    rawDims: Array<number>,
    diskFormat: number,
    rawFormat: number,
    strippedFormat: number
  }

  export type PagedImagePageDataV0 = {
    layer: number,
    coord: Array<number>,
    filename: string,
    flags: number
  }

}

export type V0 = V0_N.PagedImageTableDataV0;

export namespace V1_N {
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

export type V1 = V1_N.PagedImageTableDataV1;

export namespace V2_N {
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

export type V2 = V2_N.PagedImageTableDataV2;

export namespace V3_N {
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

export type V3 = V3_N.PagedImageTableDataV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
