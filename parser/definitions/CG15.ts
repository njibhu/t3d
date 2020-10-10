import { Uint32, FixedArray, Float32, DynArray } from "../src/types";

export const V0 = {
  chunkName: "cg15",
  name: "PackMapCoarseNavGraphV0",
  version: 0,
  definitions: {
    PackMapCoarseNavGraphSectionV0: {
      sectionUid: Uint32,
      nodes: DynArray("PackMapCoarseNavGraphNodeV0"),
      nodeConnections: DynArray("PackMapCoarseNavGraphNodeConnectionsV0")
    },
    PackMapCoarseNavGraphNodeV0: {
      materialId: Uint32,
      bottomLeftBound: FixedArray(Float32, 3),
      topRightBound: FixedArray(Float32, 3),
      centroid: FixedArray(Float32, 3),
      faces: DynArray(Uint32)
    },
    PackMapCoarseNavGraphNodeConnectionsV0: {
      nodeIndex: Uint32,
      connections: DynArray("PackMapCoarseNavGraphConnectionV0")
    },
    PackMapCoarseNavGraphConnectionV0: {
      targetSectionUid: Uint32,
      targetNodeIndex: Uint32,
      edges: DynArray("PackMapCoarseNavGraphConnectionEdgeV0")
    },
    PackMapCoarseNavGraphConnectionEdgeV0: {
      edgeStart: FixedArray(Float32, 3),
      edgeEnd: FixedArray(Float32, 3)
    }
  },
  root: {
    sections: DynArray("PackMapCoarseNavGraphSectionV0")
  }
};

export const latest = V0;
export const definitionArray = [V0];