export namespace V0 {
  export type CollideModelManifest = {
    files: Array<CollideModelManifestFile>
  }

  export type CollideModelManifestFile = {
    modelFile: string,
    collisionFile: string,
    scales: Array<number>
  }

}

export namespace V1 {
  export type CollideModelManifest = {
    files: Array<CollideModelManifestFile>
  }

  export type CollideModelManifestFile = {
    modelFileStr: string,
    modelFile: string,
    collisionFile: string,
    scales: Array<number>
  }

}

