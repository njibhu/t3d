import { Uint32, Uint8, DynArray, RefString16, Fileref } from "../src/types";

const V0 = {
  chunkName: "Main",
  name: "PackContent",
  version: 0,
  definitions: {
    PackContentTypeInfo: {
      guidOffset: Uint32,
      uidOffset: Uint32,
      dataIdOffset: Uint32,
      nameOffset: Uint32,
      trackReferences: Uint8
    },
    PackContentNamespace: {
      name: RefString16(),
      domain: Uint32,
      parentIndex: Uint32
    },
    PackContentIndexEntry: {
      type: Uint32,
      offset: Uint32,
      namespaceIndex: Uint32,
      rootIndex: Uint32
    },
    PackContentLocalOffsetFixup: {
      relocOffset: Uint32
    },
    PackContentExternalOffsetFixup: {
      relocOffset: Uint32,
      targetFileIndex: Uint32
    },
    PackContentFileIndexFixup: {
      relocOffset: Uint32
    },
    PackContentStringIndexFixup: {
      relocOffset: Uint32
    },
    PackContentTrackedReference: {
      sourceOffset: Uint32,
      targetFileIndex: Uint32,
      targetOffset: Uint32
    }
  },
  root: {
    flags: Uint32,
    typeInfos: DynArray("PackContentTypeInfo"),
    namespaces: DynArray("PackContentNamespace"),
    fileRefs: DynArray(Fileref()),
    indexEntries: DynArray("PackContentIndexEntry"),
    localOffsets: DynArray("PackContentLocalOffsetFixup"),
    externalOffsets: DynArray("PackContentExternalOffsetFixup"),
    fileIndices: DynArray("PackContentFileIndexFixup"),
    stringIndices: DynArray("PackContentStringIndexFixup"),
    trackedReferences: DynArray("PackContentTrackedReference"),
    strings: DynArray(RefString16()),
    content: DynArray(Uint8)
  }
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);