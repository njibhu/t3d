import { FixedArray, Uint32, DynArray, Filename, Uint8 } from "./types";

module.exports = [
  {
    chunkName: "DATA",
    name: "PagedImageEmbeddedPagesDataV0",
    version: 0,
    definitions: {
      PagedImageEmbeddedPageDataV0: {
        layer: Uint32,
        coord: FixedArray(Uint32, 2),
        rawData: DynArray(Uint8),
        compressedData: DynArray(Uint8)
      }
    },
    root: {
      pages: DynArray("PagedImageEmbeddedPageDataV0")
    }
  },
  {
    chunkName: "DATA",
    name: "PagedImageTableDataV1",
    version: 1,
    definitions: {
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
        filename: Filename,
        flags: Uint32,
        solidColor: FixedArray(Uint8, 4)
      }
    },
    root: {
      layers: DynArray("PagedImageLayerDataV1"),
      pages: DynArray("PagedImagePageDataV1")
    }
  },
  {
    chunkName: "DATA",
    name: "PagedImageTableDataV2",
    version: 2,
    definitions: {
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
        filename: Filename,
        flags: Uint32,
        solidColor: FixedArray(Uint8, 4)
      }
    },
    root: {
      layers: DynArray("PagedImageLayerDataV2"),
      pages: DynArray("PagedImagePageDataV2"),
      flags: Uint32
    }
  },
  {
    chunkName: "DATA",
    name: "PagedImageTableDataV3",
    version: 3,
    definitions: {
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
        filename: Filename,
        flags: Uint32,
        solidColor: FixedArray(Uint8, 4)
      }
    },
    root: {
      layers: DynArray("PagedImageLayerDataV3"),
      rawPages: DynArray("PagedImagePageDataV3"),
      strippedPages: DynArray("PagedImagePageDataV3"),
      flags: Uint32
    }
  }
]