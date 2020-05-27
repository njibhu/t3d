import { Uint32, String16, DynArray } from "../src/types";

export const V0 = {
  chunkName: "ARMF",
  name: "PackAssetRootManifestV0",
  version: 0,
  definitions: {
    PackAssetExtraFile: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32,
      fileType: Uint32
    }
  },
  root: {
    buildId: Uint32,
    extraFiles: DynArray("PackAssetExtraFile")
  }
};

export const V1 = {
  chunkName: "ARMF",
  name: "PackAssetRootManifest",
  version: 1,
  definitions: {
    PackAssetManifestFile: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32,
      flags: Uint32,
      name: String16()
    },
    PackAssetExtraFile: {
      baseId: Uint32,
      fileId: Uint32,
      size: Uint32,
      fileType: Uint32
    }
  },
  root: {
    buildId: Uint32,
    manifests: DynArray("PackAssetManifestFile"),
    extraFiles: DynArray("PackAssetExtraFile")
  }
};

export const latest = V1;
export const definitionArray = [V0, V1];