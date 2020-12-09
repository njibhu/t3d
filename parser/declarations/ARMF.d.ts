export namespace V0_N {
  export type PackAssetRootManifestV0 = {
    buildId: number,
    extraFiles: Array<PackAssetExtraFile>
  }

  export type PackAssetExtraFile = {
    baseId: number,
    fileId: number,
    size: number,
    fileType: number
  }

}

export type V0 = V0_N.PackAssetRootManifestV0;

export namespace V1_N {
  export type PackAssetRootManifest = {
    buildId: number,
    manifests: Array<PackAssetManifestFile>,
    extraFiles: Array<PackAssetExtraFile>
  }

  export type PackAssetManifestFile = {
    baseId: number,
    fileId: number,
    size: number,
    flags: number,
    name: string
  }

  export type PackAssetExtraFile = {
    baseId: number,
    fileId: number,
    size: number,
    fileType: number
  }

}

export type V1 = V1_N.PackAssetRootManifest;

export type V0_U = V0 | V1;
export type V1_U = V1;
