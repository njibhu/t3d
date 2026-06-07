import { FileParser } from "t3d-parser";
import type LocalReader from "../LocalReader/LocalReader";
import {
  type CntcEntry,
  type CntcMainContent,
  findCntcEntryAtOffset,
  getCntcEntries,
  getCntcEntryDataId,
  getCntcEntryUniqueId,
  getCntcMainContent,
  readUint32LE,
  resolveCntcString,
} from "./cntc-content";
import {
  CNTC_MAP_DATA_FILEREF_OFFSET,
  CNTC_MAP_NAME_STRING_OFFSET,
  CNTC_MAP_REGION_STRING_OFFSET,
  getCntcMapNameIndex,
  getCntcMapRegionIndex,
} from "./cntc-map";

/**
 * Cross-file `cntc` reference resolution: an item (type 35) → its skin (type
 * 66), a skin → its model file, and a map (type 45) → its `mapc` map-data file
 * plus its internal codename. These follow pointers that leave the entry's own
 * bytes (a sibling-file pointer, a pack-wide `fileRefs` index, or a per-file
 * `strings` index), so resolution needs to read sibling `cntc` files via a
 * {@link LocalReader}. Results are cached per resolver instance.
 *
 * The offsets below are the empirically established layout; keep speculative
 * guesses out of here.
 */

export interface CntcResolvedFile {
  baseId: number;
  mainContent: CntcMainContent;
  entries: CntcEntry[];
}

/** The skin (type 66) entry an item points at. */
export interface CntcSkinReference {
  skinId: number | null;
  baseId: number;
  type: number;
  dataId: number | null;
  uniqueId: number | null;
  /** Offset of the matched skin entry within its own file. */
  offset: number;
  /** Offset (within the item entry) of the pointer that referenced the skin. */
  sourceOffset: number;
}

/** A cross-file reference an entry carries, before it is resolved.
 *  - `asset`: a `fileRefs` index → an external asset file (model/texture/audio/
 *    portal/mapc), discovered from the `fileIndices` fixup table.
 *  - `skin`: an item → its skin entry (an `externalOffsets` pointer).
 *  - `mapName` / `mapRegion`: a map's codename / region string (a `strings` index). */
export interface CntcReference {
  kind: "asset" | "skin" | "mapName" | "mapRegion";
  label: string;
  /** Known source offset within the entry, when fixed (asset/map refs); the skin
   *  ref's offset is only known after resolution. */
  offset?: number;
  length: number;
}

/** Where a resolved reference points: another cntc entry, a file, or nowhere
 *  (a display-only value such as a resolved codename string). */
export type CntcReferenceNavigation =
  | { target: "entry"; baseId: number; type: number; dataId: number | null; uniqueId: number | null; offset: number }
  | { target: "file"; baseId: number }
  | { target: "none" };

/** A resolved cross-file reference: what to display, where its pointer is, and
 *  where it navigates to. */
export interface CntcResolvedReference {
  label: string;
  /** Source offset within the entry (for hex annotation), when known. */
  offset?: number;
  length: number;
  display: string;
  navigation: CntcReferenceNavigation;
}

/**
 * The entry-only references a given entry carries — the ones that don't come
 * from the `fileIndices` asset table: an item's skin pointer and a map's
 * codename/region strings. Asset file-refs are discovered separately, from the
 * fixup table, by {@link CntcResolver.listReferences}.
 */
export function describeCntcReferences(entry: CntcEntry): CntcReference[] {
  if (entry.type === 35) return [{ kind: "skin", label: "skin ref", length: 4 }];
  if (entry.type === 45) {
    return [
      { kind: "mapName", label: "codename @0xB0", offset: CNTC_MAP_NAME_STRING_OFFSET, length: 4 },
      { kind: "mapRegion", label: "region @0x110", offset: CNTC_MAP_REGION_STRING_OFFSET, length: 4 },
    ];
  }
  return [];
}

/** External fixup nearest this offset (from the item's start) holds the skin pointer. */
const ITEM_SKIN_FIXUP_HINT = 176;
/** A `cntc` "pack" manifest (the one carrying `typeInfos`/`fileRefs`) sits at
 *  most this many baseIds before a data file. */
const PACK_SEARCH_SPAN = 64;

/** Known asset file-ref offsets (for friendly labels only — discovery is fixup-driven). */
const ITEM_ICON_FILEREF_OFFSET = 64; // 0x40
const SKIN_MODEL_FILEREF_OFFSET = 48; // 0x30
const SKIN_ICON_FILEREF_OFFSET = 88; // 0x58
const SKIN_MODEL_ARRAY_START = 192; // 0xC0, stride 0x20
const SKIN_MODEL_ARRAY_STRIDE = 32;
const MAP_PORTAL_FILEREF_OFFSET = 96; // 0x60
const MAP_IMAGE_FILEREF_OFFSETS = new Set([88, 120]); // 0x58, 0x78
const MAP_AUDIO_FILEREF_OFFSETS = new Set([56, 64, 72, 80]); // 0x38,0x40,0x48,0x50

/** A friendly label for an asset file-ref found at `offset` in a `type` entry;
 *  falls back to a generic label so unknown refs are still listed correctly. */
function assetReferenceLabel(type: number, offset: number): string {
  const hex = `@0x${offset.toString(16).toUpperCase()}`;
  if (type === 35 && offset === ITEM_ICON_FILEREF_OFFSET) return `icon ${hex}`;
  if (type === 66) {
    if (offset === SKIN_MODEL_FILEREF_OFFSET) return `model ${hex}`;
    if (offset === SKIN_ICON_FILEREF_OFFSET) return `icon ${hex}`;
    if (offset >= SKIN_MODEL_ARRAY_START && (offset - SKIN_MODEL_ARRAY_START) % SKIN_MODEL_ARRAY_STRIDE === 0) {
      return `model ${hex}`;
    }
  }
  if (type === 45) {
    if (offset === CNTC_MAP_DATA_FILEREF_OFFSET) return `map data ${hex}`;
    if (offset === MAP_PORTAL_FILEREF_OFFSET) return `portal ${hex}`;
    if (MAP_IMAGE_FILEREF_OFFSETS.has(offset)) return `image ${hex}`;
    if (MAP_AUDIO_FILEREF_OFFSETS.has(offset)) return `audio ${hex}`;
  }
  return `file ref ${hex}`;
}

export class CntcResolver {
  private reader: LocalReader;
  private fileCache = new Map<number, Promise<CntcResolvedFile | null>>();
  private packBaseIdCache = new Map<number, Promise<number | null>>();

  constructor(reader: LocalReader) {
    this.reader = reader;
  }

  /** Seed an already-parsed file so resolution doesn't re-read it. */
  seedFile(file: CntcResolvedFile): void {
    this.fileCache.set(file.baseId, Promise.resolve(file));
  }

  /** Reads + parses a `cntc` file by baseId (cached); `null` if missing/not cntc. */
  async loadFile(baseId: number): Promise<CntcResolvedFile | null> {
    let pending = this.fileCache.get(baseId);
    if (!pending) {
      pending = this.readFile(baseId);
      this.fileCache.set(baseId, pending);
    }
    return pending;
  }

  /**
   * Lists every reference an entry carries, discovered from the fixup tables
   * rather than from fixed offsets: one asset file-ref per `fileIndices` fixup
   * inside the entry, plus the type-specific entry/string refs from
   * {@link describeCntcReferences}. Needs the entry's file (for `fileIndices`),
   * so it is async. References are ordered by their source offset.
   */
  async listReferences(baseId: number, entry: CntcEntry): Promise<CntcReference[]> {
    const references: CntcReference[] = [];

    const file = await this.loadFile(baseId);
    if (file) {
      for (const fixup of file.mainContent.fileIndices) {
        if (fixup.relocOffset < entry.begin || fixup.relocOffset >= entry.end) continue;
        const offset = fixup.relocOffset - entry.begin;
        references.push({ kind: "asset", label: assetReferenceLabel(entry.type, offset), offset, length: 4 });
      }
    }

    references.push(...describeCntcReferences(entry));
    return references.sort(
      (left, right) => (left.offset ?? Number.MAX_SAFE_INTEGER) - (right.offset ?? Number.MAX_SAFE_INTEGER)
    );
  }

  /**
   * Resolves a reference described by {@link describeCntcReferences} into a
   * displayable value, a source offset (for hex annotation) and a navigation
   * target. This is the unified entry point consumers should use.
   */
  async resolveReference(
    baseId: number,
    entry: CntcEntry,
    reference: CntcReference
  ): Promise<CntcResolvedReference | null> {
    if (reference.kind === "skin") {
      const skin = await this.resolveItemSkin(baseId, entry);
      if (!skin) return null;
      return {
        label: `skin ref @0x${skin.sourceOffset.toString(16).toUpperCase()}`,
        offset: skin.sourceOffset,
        length: 4,
        display: skin.skinId != null ? String(skin.skinId) : "(skin)",
        navigation: {
          target: "entry",
          baseId: skin.baseId,
          type: skin.type,
          dataId: skin.dataId,
          uniqueId: skin.uniqueId,
          offset: skin.offset,
        },
      };
    }

    if (reference.kind === "asset") {
      const fileRefIndex = reference.offset == null ? null : readUint32LE(entry.contentSlice, reference.offset);
      const assetBaseId = await this.resolveFileRef(baseId, fileRefIndex);
      if (assetBaseId == null) return null;
      return {
        label: reference.label,
        offset: reference.offset,
        length: reference.length,
        display: String(assetBaseId),
        navigation: { target: "file", baseId: assetBaseId },
      };
    }

    if (reference.kind === "mapName" || reference.kind === "mapRegion") {
      const index = reference.kind === "mapName" ? getCntcMapNameIndex(entry) : getCntcMapRegionIndex(entry);
      const value = await this.resolveMapString(baseId, index);
      if (value == null) return null;
      return {
        label: reference.label,
        offset: reference.offset,
        length: reference.length,
        display: value,
        navigation: { target: "none" },
      };
    }

    return null;
  }

  /**
   * Resolves the skin (type 66) entry that an item (type 35) references by
   * following the external offset fixup closest to the item's skin pointer.
   */
  private async resolveItemSkin(itemBaseId: number, itemEntry: CntcEntry): Promise<CntcSkinReference | null> {
    if (itemEntry.type !== 35) return null;
    const file = await this.loadFile(itemBaseId);
    if (!file) return null;

    const fixups = file.mainContent.externalOffsets
      .filter((fixup) => fixup.relocOffset >= itemEntry.begin && fixup.relocOffset < itemEntry.end)
      .sort(
        (left, right) =>
          Math.abs(left.relocOffset - (itemEntry.begin + ITEM_SKIN_FIXUP_HINT)) -
          Math.abs(right.relocOffset - (itemEntry.begin + ITEM_SKIN_FIXUP_HINT))
      );

    for (const fixup of fixups) {
      const targetOffset = readUint32LE(file.mainContent.content, fixup.relocOffset);
      if (targetOffset == null) continue;

      const targetBaseId = await this.resolveTargetBaseId(itemBaseId, fixup.targetFileIndex);
      if (targetBaseId == null) continue;

      const targetFile = await this.loadFile(targetBaseId);
      if (!targetFile) continue;

      const targetEntry = findCntcEntryAtOffset(targetFile.entries, targetOffset);
      if (!targetEntry || targetEntry.type !== 66) continue;

      return {
        skinId: getCntcEntryDataId(targetEntry),
        baseId: targetBaseId,
        type: targetEntry.type,
        dataId: getCntcEntryDataId(targetEntry),
        uniqueId: getCntcEntryUniqueId(targetEntry),
        offset: targetEntry.begin,
        sourceOffset: fixup.relocOffset - itemEntry.begin,
      };
    }

    return null;
  }

  /** Resolves a map (type 45) string-table field (codename, region) from its file's `strings`. */
  private async resolveMapString(mapBaseId: number, stringIndex: number | null): Promise<string | null> {
    if (stringIndex == null) return null;
    const file = await this.loadFile(mapBaseId);
    if (!file) return null;
    return resolveCntcString(file.mainContent.strings, stringIndex);
  }

  /** Looks up a pack-wide `fileRefs` index (anchored near `anchorBaseId`) → file baseId. */
  private async resolveFileRef(anchorBaseId: number, fileRefIndex: number | null): Promise<number | null> {
    if (fileRefIndex == null) return null;

    const packBaseId = await this.resolvePackBaseId(anchorBaseId);
    if (packBaseId == null) return null;

    const packFile = await this.loadFile(packBaseId);
    if (!packFile) return null;

    const targetBaseId = packFile.mainContent.fileRefs[fileRefIndex];
    return Number.isFinite(targetBaseId) && targetBaseId > 0 ? targetBaseId : null;
  }

  private async resolveTargetBaseId(anchorBaseId: number, targetFileIndex: number): Promise<number | null> {
    const packBaseId = await this.resolvePackBaseId(anchorBaseId);
    return packBaseId == null ? null : packBaseId + targetFileIndex;
  }

  private async resolvePackBaseId(anchorBaseId: number): Promise<number | null> {
    let pending = this.packBaseIdCache.get(anchorBaseId);
    if (!pending) {
      pending = (async () => {
        const floor = Math.max(0, anchorBaseId - PACK_SEARCH_SPAN);
        for (let candidate = anchorBaseId; candidate >= floor; candidate -= 1) {
          const file = await this.loadFile(candidate);
          if (file?.mainContent.typeInfos.length) return candidate;
        }
        return null;
      })();
      this.packBaseIdCache.set(anchorBaseId, pending);
    }
    return pending;
  }

  private async readFile(baseId: number): Promise<CntcResolvedFile | null> {
    const mftId = this.reader.getFileIndex(baseId);
    if (!Number.isFinite(mftId)) return null;

    const file = await this.reader.readFile(mftId, false, true);
    if (!file.buffer) return null;

    const packfile = new FileParser(file.buffer);
    if (packfile.header.type !== "cntc") return null;

    const mainContent = getCntcMainContent(packfile);
    return { baseId, mainContent, entries: getCntcEntries(mainContent) };
  }
}
