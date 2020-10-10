

export type CollideModelManifest = {
  files: Array<CollideModelManifestFile>
}

export type CollideModelManifestFile = {
  modelFileStr: string,
  modelFile: string,
  collisionFile: string,
  scales: Array<number>
}