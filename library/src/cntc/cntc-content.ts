import type { FileParser } from "t3d-parser";

/**
 * Structural model of the `Main` (PackContent) chunk of a `cntc` packfile and
 * the per-entry records it contains.
 *
 * Everything in this file is "certain": it follows directly from the parser's
 * `MAIN_4` definition (`PackContentTypeInfo`, `PackContentIndexEntry`, …) and
 * the way `content` is sliced into one record per `indexEntries` offset. The
 * speculative field-by-field decoding of individual entry payloads lives in the
 * browser's experimental layer, not here.
 */

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

/** Marks an offset in `content` that holds a `fileRefs` index (an asset file-ref). */
export interface CntcFileIndexFixup {
  relocOffset: number;
}

/** The fields of the parsed `Main` chunk this module relies on. */
export interface CntcMainContent {
  typeInfos: CntcTypeInfo[];
  fileRefs: number[];
  indexEntries: CntcIndexEntry[];
  externalOffsets: CntcExternalOffsetFixup[];
  /** Fixups marking the offsets that hold a `fileRefs` index → an external asset file. */
  fileIndices: CntcFileIndexFixup[];
  /** Per-file UTF-16 string table (`RefString16`); entries reference it by index. */
  strings: string[];
  content: Uint8Array;
}

/** A single content record carved out of the `Main` chunk's byte stream. */
export interface CntcEntry {
  /** Position within `indexEntries`. */
  index: number;
  /** Content type id (see {@link CNTC_TYPE_DESCRIPTIONS}). */
  type: number;
  /** Inclusive start offset of this record within `content`. */
  begin: number;
  /** Exclusive end offset (start of the next record, or end of `content`). */
  end: number;
  /** Original `indexEntries[i].offset` (== `begin`). */
  offset: number;
  namespaceIndex: number;
  rootIndex: number;
  /** The record's bytes, copied out of `content`. */
  contentSlice: Uint8Array;
  size: number;
}

/** Returns the parsed `Main` chunk of a `cntc` packfile, throwing if absent. */
export function getCntcMainContent(file: FileParser): CntcMainContent {
  const mainChunk = file.getChunk("Main");
  if (!mainChunk?.data) {
    throw new Error(`Missing Main chunk in file type ${file.header?.type ?? "unknown"}`);
  }
  return mainChunk.data as CntcMainContent;
}

/** Splits the `Main` chunk's `content` into one {@link CntcEntry} per index entry. */
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

/** Buckets entries by their content `type`, preserving insertion order. */
export function groupCntcEntriesByType(entries: CntcEntry[]): Map<number, CntcEntry[]> {
  const grouped = new Map<number, CntcEntry[]>();
  for (const entry of entries) {
    const existing = grouped.get(entry.type);
    if (existing) {
      existing.push(entry);
    } else {
      grouped.set(entry.type, [entry]);
    }
  }
  return grouped;
}

/** Reads a little-endian uint32, or `null` when out of bounds. */
export function readUint32LE(bytes: Uint8Array | undefined, offset: number): number | null {
  if (!bytes || offset < 0 || offset + 4 > bytes.length) {
    return null;
  }
  return (
    (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | ((bytes[offset + 3] << 24) >>> 0)) >>> 0
  );
}

/**
 * Common entry-header readers. Every PackContent record begins with a fixed
 * header whose embedded type (`@0x10`), unique id (`@0x14`) and data id
 * (`@0x28`) occupy these offsets.
 */
export function getCntcEntryEmbeddedType(entry: CntcEntry): number | null {
  return readUint32LE(entry.contentSlice, 16);
}

export function getCntcEntryUniqueId(entry: CntcEntry): number | null {
  return readUint32LE(entry.contentSlice, 20);
}

export function getCntcEntryDataId(entry: CntcEntry): number | null {
  return readUint32LE(entry.contentSlice, 40);
}

/** Finds the entry whose `[begin, end)` byte range contains `offset`. */
export function findCntcEntryAtOffset(entries: CntcEntry[], offset: number): CntcEntry | null {
  return entries.find((entry) => offset >= entry.begin && offset < entry.end) ?? null;
}

/** Resolves an index into a packfile's {@link CntcMainContent.strings} table, or `null`. */
export function resolveCntcString(strings: string[] | undefined, index: number | null): string | null {
  if (!strings || index == null || index < 0 || index >= strings.length) {
    return null;
  }
  const value = strings[index];
  return typeof value === "string" ? value : null;
}
