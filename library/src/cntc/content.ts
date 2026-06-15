import type { FileParser } from "t3d-parser";

export interface CntcTypeInfo {
  guidOffset: number;
  uidOffset: number;
  dataIdOffset: number;
  nameOffset: number;
  trackReferences: number;
}

export interface CntcIndexEntry {
  type: number;
  offset: number;
  namespaceIndex: number;
  rootIndex: number;
}

export interface CntcExternalOffsetFixup {
  relocOffset: number;
  targetFileIndex: number;
}

export interface CntcFileIndexFixup {
  relocOffset: number;
}

export interface CntcMainContent {
  typeInfos: CntcTypeInfo[];
  fileRefs: number[];
  indexEntries: CntcIndexEntry[];
  externalOffsets: CntcExternalOffsetFixup[];
  fileIndices: CntcFileIndexFixup[];
  strings: string[];
  content: Uint8Array;
}

export interface CntcEntry {
  index: number;
  type: number;
  begin: number;
  end: number;
  offset: number;
  namespaceIndex: number;
  rootIndex: number;
  contentSlice: Uint8Array;
  size: number;
}

export function getCntcMainContent(file: FileParser): CntcMainContent {
  const mainChunk = file.getChunk("Main");
  if (!mainChunk?.data) {
    throw new Error(`Missing Main chunk in file type ${file.header?.type ?? "unknown"}`);
  }
  return mainChunk.data as CntcMainContent;
}

export function getCntcEntries(content: CntcMainContent): CntcEntry[] {
  return content.indexEntries.map((entry, index) => {
    const begin = entry.offset;
    const next = content.indexEntries[index + 1];
    const end = next ? next.offset : content.content.length;
    const contentSlice = content.content.slice(begin, end);
    return {
      index,
      type: entry.type,
      begin,
      end,
      offset: entry.offset,
      namespaceIndex: entry.namespaceIndex,
      rootIndex: entry.rootIndex,
      contentSlice,
      size: contentSlice.length,
    };
  });
}

export function groupCntcEntriesByType(entries: CntcEntry[]): Map<number, CntcEntry[]> {
  const grouped = new Map<number, CntcEntry[]>();
  for (const entry of entries) {
    const existing = grouped.get(entry.type);
    if (existing) existing.push(entry);
    else grouped.set(entry.type, [entry]);
  }
  return grouped;
}

export function readUint32LE(bytes: Uint8Array | undefined, offset: number): number | null {
  if (!bytes || offset < 0 || offset + 4 > bytes.length) {
    return null;
  }
  return (
    (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | ((bytes[offset + 3] << 24) >>> 0)) >>> 0
  );
}

export function getCntcEntryEmbeddedType(entry: CntcEntry): number | null {
  return readUint32LE(entry.contentSlice, 16);
}

export function getCntcEntryUniqueId(entry: CntcEntry): number | null {
  return readUint32LE(entry.contentSlice, 20);
}

export function getCntcEntryDataId(entry: CntcEntry): number | null {
  return readUint32LE(entry.contentSlice, 40);
}

export function findCntcEntryAtOffset(entries: CntcEntry[], offset: number): CntcEntry | null {
  return entries.find((entry) => offset >= entry.begin && offset < entry.end) ?? null;
}

export function resolveCntcString(strings: string[] | undefined, index: number | null): string | null {
  if (!strings || index == null || index < 0 || index >= strings.length) {
    return null;
  }
  const value = strings[index];
  return typeof value === "string" ? value : null;
}
