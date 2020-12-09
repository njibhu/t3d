export namespace V0_N {
  export type PackContent = {
    flags: number,
    typeInfos: Array<PackContentTypeInfo>,
    namespaces: Array<PackContentNamespace>,
    fileRefs: Array<string>,
    indexEntries: Array<PackContentIndexEntry>,
    localOffsets: Array<PackContentLocalOffsetFixup>,
    externalOffsets: Array<PackContentExternalOffsetFixup>,
    fileIndices: Array<PackContentFileIndexFixup>,
    stringIndices: Array<PackContentStringIndexFixup>,
    trackedReferences: Array<PackContentTrackedReference>,
    strings: Array<string>,
    content: Array<number>
  }

  export type PackContentTypeInfo = {
    guidOffset: number,
    uidOffset: number,
    dataIdOffset: number,
    nameOffset: number,
    trackReferences: number
  }

  export type PackContentNamespace = {
    name: string,
    domain: number,
    parentIndex: number
  }

  export type PackContentIndexEntry = {
    type: number,
    offset: number,
    namespaceIndex: number,
    rootIndex: number
  }

  export type PackContentLocalOffsetFixup = {
    relocOffset: number
  }

  export type PackContentExternalOffsetFixup = {
    relocOffset: number,
    targetFileIndex: number
  }

  export type PackContentFileIndexFixup = {
    relocOffset: number
  }

  export type PackContentStringIndexFixup = {
    relocOffset: number
  }

  export type PackContentTrackedReference = {
    sourceOffset: number,
    targetFileIndex: number,
    targetOffset: number
  }

}

export type V0 = V0_N.PackContent;

export type V0_U = V0;
