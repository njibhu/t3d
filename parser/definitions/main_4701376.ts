import { String16, Fileref, Float32, DynArray } from "../src/types";

export const V0 = {
  chunkName: "main",
  name: "CollideModelManifest",
  version: 0,
  definitions: {
    CollideModelManifestFile: {
      modelFile: Fileref(),
      collisionFile: Fileref(),
      scales: DynArray(Float32)
    }
  },
  root: {
    files: DynArray("CollideModelManifestFile")
  }
};

export const V1 = {
  chunkName: "main",
  name: "CollideModelManifest",
  version: 1,
  definitions: {
    CollideModelManifestFile: {
      modelFileStr: String16(),
      modelFile: Fileref(),
      collisionFile: Fileref(),
      scales: DynArray(Float32)
    }
  },
  root: {
    files: DynArray("CollideModelManifestFile")
  }
};

export const latest = V1;
export const definitionArray = [V0, V1];