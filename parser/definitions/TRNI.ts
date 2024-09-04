import { FixedArray, Uint32, DynArray, Filename, Uint8, Pointer } from "../src/types";

const V0 = {
  chunkName: "trni",
  name: "MapTerrainImg",
  version: 0,
  definitions: {
    PagedImageTableDataV0: {
      layers: DynArray("PagedImageLayerDataV0"),
      pages: DynArray("PagedImagePageDataV0")
    },
    PagedImageLayerDataV0: {
      dims: FixedArray(Uint32, 2),
      rawDims: FixedArray(Uint32, 2),
      diskFormat: Uint32,
      rawFormat: Uint32,
      strippedFormat: Uint32
    },
    PagedImagePageDataV0: {
      layer: Uint32,
      coord: FixedArray(Uint32, 2),
      filename: Filename(),
      flags: Uint32
    },
    PagedImageEmbeddedPagesDataV0: {
      pages: DynArray("PagedImageEmbeddedPageDataV0")
    },
    PagedImageEmbeddedPageDataV0: {
      layer: Uint32,
      coord: FixedArray(Uint32, 2),
      rawData: DynArray(Uint8),
      compressedData: DynArray(Uint8)
    }
  },
  root: {
    tableData: Pointer("PagedImageTableDataV0"),
    pageData: Pointer("PagedImageEmbeddedPagesDataV0")
  }
};

const V1 = {
  chunkName: "trni",
  name: "MapTerrainImg",
  version: 1,
  definitions: {
    PagedImageTableDataV1: {
      layers: DynArray("PagedImageLayerDataV1"),
      pages: DynArray("PagedImagePageDataV1")
    },
    PagedImageLayerDataV1: {
      dims: FixedArray(Uint32, 2),
      rawDims: FixedArray(Uint32, 2),
      diskFormat: Uint32,
      rawFormat: Uint32,
      strippedFormat: Uint32
    },
    PagedImagePageDataV1: {
      layer: Uint32,
      coord: FixedArray(Uint32, 2),
      filename: Filename(),
      flags: Uint32,
      solidColor: FixedArray(Uint8, 4)
    },
    PagedImageEmbeddedPagesDataV1: {
      pages: DynArray("PagedImageEmbeddedPageDataV1")
    },
    PagedImageEmbeddedPageDataV1: {
      layer: Uint32,
      coord: FixedArray(Uint32, 2),
      rawData: DynArray(Uint8),
      compressedData: DynArray(Uint8)
    }
  },
  root: {
    tableData: Pointer("PagedImageTableDataV1"),
    pageData: Pointer("PagedImageEmbeddedPagesDataV1")
  }
};

const V2 = {
  chunkName: "trni",
  name: "MapTerrainImg",
  version: 2,
  definitions: {
    PagedImageTableDataV2: {
      layers: DynArray("PagedImageLayerDataV2"),
      pages: DynArray("PagedImagePageDataV2"),
      flags: Uint32
    },
    PagedImageLayerDataV2: {
      dims: FixedArray(Uint32, 2),
      rawDims: FixedArray(Uint32, 2),
      diskFormat: Uint32,
      rawFormat: Uint32,
      strippedFormat: Uint32
    },
    PagedImagePageDataV2: {
      layer: Uint32,
      coord: FixedArray(Uint32, 2),
      filename: Filename(),
      flags: Uint32,
      solidColor: FixedArray(Uint8, 4)
    },
    PagedImageEmbeddedPagesDataV2: {
      pages: DynArray("PagedImageEmbeddedPageDataV2")
    },
    PagedImageEmbeddedPageDataV2: {
      layer: Uint32,
      coord: FixedArray(Uint32, 2),
      rawData: DynArray(Uint8),
      compressedData: DynArray(Uint8)
    }
  },
  root: {
    tableData: Pointer("PagedImageTableDataV2"),
    pageData: Pointer("PagedImageEmbeddedPagesDataV2")
  }
};

const V3 = {
  chunkName: "trni",
  name: "MapTerrainImg",
  version: 3,
  definitions: {
    PagedImageTableDataV3: {
      layers: DynArray("PagedImageLayerDataV3"),
      rawPages: DynArray("PagedImagePageDataV3"),
      strippedPages: DynArray("PagedImagePageDataV3"),
      flags: Uint32
    },
    PagedImageLayerDataV3: {
      rawDims: FixedArray(Uint32, 2),
      strippedDims: FixedArray(Uint32, 2),
      rawFormat: Uint32,
      strippedFormat: Uint32,
      diskFormat: Uint32
    },
    PagedImagePageDataV3: {
      layer: Uint32,
      coord: FixedArray(Uint32, 2),
      filename: Filename(),
      flags: Uint32,
      solidColor: FixedArray(Uint8, 4)
    },
    PagedImageEmbeddedPagesDataV3: {
      rawPages: DynArray("PagedImageEmbeddedPageDataV3"),
      strippedPages: DynArray("PagedImageEmbeddedPageDataV3")
    },
    PagedImageEmbeddedPageDataV3: {
      layer: Uint32,
      coord: FixedArray(Uint32, 2),
      data: DynArray(Uint8)
    }
  },
  root: {
    tableData: Pointer("PagedImageTableDataV3"),
    pageData: Pointer("PagedImageEmbeddedPagesDataV3")
  }
};

export const latest = V3;
export const definitions = { V0, V1, V2, V3 };
export const definitionArray = Object.values(definitions);