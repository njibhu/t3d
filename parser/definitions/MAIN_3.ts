import { RefString16, Fileref, Float32, DynArray } from "../src/types";

const V0 = {
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

const V1 = {
  chunkName: "main",
  name: "CollideModelManifest",
  version: 1,
  definitions: {
    CollideModelManifestFile: {
      modelFileStr: RefString16(),
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
export const definitions = { V0, V1 };
export const definitionArray = Object.values(definitions);