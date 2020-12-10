export namespace V0_N {
  export type PackMapCoarseNavGraphV0 = {
    sections: Array<PackMapCoarseNavGraphSectionV0>
  }

  export type PackMapCoarseNavGraphSectionV0 = {
    sectionUid: number,
    nodes: Array<PackMapCoarseNavGraphNodeV0>,
    nodeConnections: Array<PackMapCoarseNavGraphNodeConnectionsV0>
  }

  export type PackMapCoarseNavGraphNodeV0 = {
    materialId: number,
    bottomLeftBound: Array<number>,
    topRightBound: Array<number>,
    centroid: Array<number>,
    faces: Array<number>
  }

  export type PackMapCoarseNavGraphNodeConnectionsV0 = {
    nodeIndex: number,
    connections: Array<PackMapCoarseNavGraphConnectionV0>
  }

  export type PackMapCoarseNavGraphConnectionV0 = {
    targetSectionUid: number,
    targetNodeIndex: number,
    edges: Array<PackMapCoarseNavGraphConnectionEdgeV0>
  }

  export type PackMapCoarseNavGraphConnectionEdgeV0 = {
    edgeStart: Array<number>,
    edgeEnd: Array<number>
  }

}

export type V0 = V0_N.PackMapCoarseNavGraphV0;

export type V0_U = V0;
