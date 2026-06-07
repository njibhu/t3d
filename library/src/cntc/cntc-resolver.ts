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
} from "./cntc-content";

/**
 * Cross-file `cntc` reference resolution: an item (type 35) → its skin (type
 * 66), and a skin → its model file. Both follow pointers that leave the entry's
 * own bytes, so resolution needs to read sibling `cntc` files via a
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

/** A cross-file reference an entry carries, before it is resolved. */
export interface CntcReference {
  kind: "skin" | "model";
  label: string;
  /** Known source offset within the entry, when fixed (model ref); the skin
   *  ref's offset is only known after resolution. */
  offset?: number;
  length: number;
}

/** Where a resolved reference points: another cntc entry, or a (model) file. */
export type CntcReferenceNavigation =
  | { target: "entry"; baseId: number; type: number; dataId: number | null; uniqueId: number | null; offset: number }
  | { target: "file"; baseId: number };

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

/** Lists the cross-file references an entry carries (none for most types). */
export function describeCntcReferences(entry: CntcEntry): CntcReference[] {
  if (entry.type === 35) return [{ kind: "skin", label: "skin ref", length: 4 }];
  if (entry.type === 66) {
    return [{ kind: "model", label: "model ref @0x30", offset: SKIN_MODEL_FILEREF_OFFSET, length: 4 }];
  }
  return [];
}

/** External fixup nearest this offset (from the item's start) holds the skin pointer. */
const ITEM_SKIN_FIXUP_HINT = 176;
/** A `cntc` "pack" manifest (the one carrying `typeInfos`/`fileRefs`) sits at
 *  most this many baseIds before a data file. */
const PACK_SEARCH_SPAN = 64;
/** Offset of the model file-ref index inside a skin (type 66) entry. */
const SKIN_MODEL_FILEREF_OFFSET = 48;

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

    const modelBaseId = await this.resolveSkinModel(baseId, entry);
    if (modelBaseId == null) return null;
    return {
      label: reference.label,
      offset: reference.offset,
      length: reference.length,
      display: String(modelBaseId),
      navigation: { target: "file", baseId: modelBaseId },
    };
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

  /** Resolves the model file baseId referenced by a skin (type 66) entry. */
  private async resolveSkinModel(skinBaseId: number, skinEntry: CntcEntry): Promise<number | null> {
    if (skinEntry.type !== 66) return null;

    const fileRefIndex = readUint32LE(skinEntry.contentSlice, SKIN_MODEL_FILEREF_OFFSET);
    if (fileRefIndex == null) return null;

    const packBaseId = await this.resolvePackBaseId(skinBaseId);
    if (packBaseId == null) return null;

    const packFile = await this.loadFile(packBaseId);
    if (!packFile) return null;

    const modelBaseId = packFile.mainContent.fileRefs[fileRefIndex];
    return Number.isFinite(modelBaseId) && modelBaseId > 0 ? modelBaseId : null;
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
