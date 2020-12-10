export namespace V0_N {
  export type CollideModelManifest = {
    files: Array<CollideModelManifestFile>
  }

  export type CollideModelManifestFile = {
    modelFile: string,
    collisionFile: string,
    scales: Array<number>
  }

}

export type V0 = V0_N.CollideModelManifest;

export namespace V1_N {
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

export type V1 = V1_N.CollideModelManifest;

export type V0_U = V0 | V1;
export type V1_U = V1;
