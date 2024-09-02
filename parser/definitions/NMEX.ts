import { FixedArray, Float32, Uint32, Filename, DynArray, Uint64, Uint8 } from "../src/types";

const V0 = {
  chunkName: "nmex",
  name: "PackMapNavMeshExternalV0",
  version: 0,
  definitions: {
    PackMapNavMeshChunkExternalV0: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      filename: Filename()
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    chunkDims: FixedArray(Uint32, 2),
    chunkArray: DynArray("PackMapNavMeshChunkExternalV0")
  }
};

const V1 = {
  chunkName: "nmex",
  name: "PackMapNavMeshExternalV1",
  version: 1,
  definitions: {
    PackMapNavMeshChunkExternalV1: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      filename: Filename()
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    chunkDims: FixedArray(Uint32, 2),
    chunkArray: DynArray("PackMapNavMeshChunkExternalV1")
  }
};

const V2 = {
  chunkName: "nmex",
  name: "PackMapNavMeshExternalV2",
  version: 2,
  definitions: {
    PackMapNavMeshChunkExternalV2: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      filename: Filename()
    },
    PackMapNavMeshMoverV2: {
      mapPropId: Uint64,
      navMeshData: DynArray(Uint8),
      coarseGraphData: DynArray(Uint8),
      mediatorData: DynArray(Uint8)
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    chunkDims: FixedArray(Uint32, 2),
    chunkArray: DynArray("PackMapNavMeshChunkExternalV2"),
    dynamicArray: DynArray("PackMapNavMeshMoverV2")
  }
};

const V3 = {
  chunkName: "nmex",
  name: "PackMapNavMeshExternalV3",
  version: 3,
  definitions: {
    PackMapNavMeshChunkExternalV3: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      filename: Filename()
    },
    PackMapNavMeshMoverV3: {
      chunkIndex: Uint32,
      mapPropId: Uint64,
      navMeshData: DynArray(Uint8),
      coarseGraphData: DynArray(Uint8),
      mediatorData: DynArray(Uint8)
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    chunkDims: FixedArray(Uint32, 2),
    chunkArray: DynArray("PackMapNavMeshChunkExternalV3"),
    dynamicArray: DynArray("PackMapNavMeshMoverV3")
  }
};

export const latest = V3;
export const definitions = { V0, V1, V2, V3 };
export const definitionArray = Object.values(definitions);