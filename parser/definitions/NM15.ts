import { FixedArray, Float32, Uint32, Uint8, DynArray, Uint64 } from "../src/types";

const V0 = {
  chunkName: "nm15",
  name: "PackMapNavMeshV0",
  version: 0,
  definitions: {
    PackMapNavMeshChunkV0: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      navMeshData: DynArray(Uint8),
      coarseGraphData: DynArray(Uint8),
      queryMediatorMoppData: DynArray(Uint8)
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    chunkDims: FixedArray(Uint32, 2),
    chunkArray: DynArray("PackMapNavMeshChunkV0")
  }
};

const V1 = {
  chunkName: "nm15",
  name: "PackMapNavMeshV1",
  version: 1,
  definitions: {
    PackMapNavMeshChunkV1: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      navMeshData: DynArray(Uint8),
      coarseGraphData: DynArray(Uint8),
      queryMediatorMoppData: DynArray(Uint8)
    }
  },
  root: {
    boundsMin: FixedArray(Float32, 3),
    boundsMax: FixedArray(Float32, 3),
    chunkDims: FixedArray(Uint32, 2),
    chunkArray: DynArray("PackMapNavMeshChunkV1")
  }
};

const V2 = {
  chunkName: "nm15",
  name: "PackMapNavMeshV2",
  version: 2,
  definitions: {
    PackMapNavMeshChunkV2: {
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      navMeshData: DynArray(Uint8),
      coarseGraphData: DynArray(Uint8),
      queryMediatorMoppData: DynArray(Uint8)
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
    chunkArray: DynArray("PackMapNavMeshChunkV2"),
    dynamicArray: DynArray("PackMapNavMeshMoverV2")
  }
};

const V3 = {
  chunkName: "nm15",
  name: "PackMapNavMeshV3",
  version: 3,
  definitions: {
    PackMapNavMeshChunkV3: {
      chunkIndex: Uint32,
      boundsMin: FixedArray(Float32, 3),
      boundsMax: FixedArray(Float32, 3),
      navMeshData: DynArray(Uint8),
      coarseGraphData: DynArray(Uint8),
      queryMediatorMoppData: DynArray(Uint8)
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
    chunkArray: DynArray("PackMapNavMeshChunkV3"),
    dynamicArray: DynArray("PackMapNavMeshMoverV3")
  }
};

export const latest = V3;
export const definitions = { V0, V1, V2, V3 };
export const definitionArray = Object.values(definitions);