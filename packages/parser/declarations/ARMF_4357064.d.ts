

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