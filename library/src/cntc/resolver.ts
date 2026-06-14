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
} from "./content";
import type { CntcReferenceKind } from "./schema";
import { getCntcAssetReferenceLabel, getCntcReferenceDefinitions } from "./schemas/registry";
import { getCntcMapNameIndex, getCntcMapRegionIndex } from "./schemas/maps";
import { CNTC_TYPE_IDS } from "./schemas/type-ids";

export interface CntcResolvedFile {
  baseId: number;
  mainContent: CntcMainContent;
  entries: CntcEntry[];
}

export interface CntcSkinReference {
  skinId: number | null;
  baseId: number;
  type: number;
  dataId: number | null;
  uniqueId: number | null;
  offset: number;
  sourceOffset: number;
}

export interface CntcReference {
  kind: CntcReferenceKind;
  label: string;
  offset?: number;
  length: number;
}

export type CntcReferenceNavigation =
  | { target: "entry"; baseId: number; type: number; dataId: number | null; uniqueId: number | null; offset: number }
  | { target: "file"; baseId: number }
  | { target: "none" };

export interface CntcResolvedReference {
  label: string;
  offset?: number;
  length: number;
  display: string;
  navigation: CntcReferenceNavigation;
}

export function describeCntcReferences(entry: CntcEntry): CntcReference[] {
  return getCntcReferenceDefinitions(entry.type).map((definition) => ({
    kind: definition.kind,
    label: definition.label,
    offset: definition.offset,
    length: definition.length ?? 4,
  }));
}

const ITEM_SKIN_FIXUP_HINT = 176;
const PACK_SEARCH_SPAN = 64;

export class CntcResolver {
  private reader: LocalReader;
  private fileCache = new Map<number, Promise<CntcResolvedFile | null>>();
  private packBaseIdCache = new Map<number, Promise<number | null>>();

  constructor(reader: LocalReader) {
    this.reader = reader;
  }

  seedFile(file: CntcResolvedFile): void {
    this.fileCache.set(file.baseId, Promise.resolve(file));
  }

  async loadFile(baseId: number): Promise<CntcResolvedFile | null> {
    let pending = this.fileCache.get(baseId);
    if (!pending) {
      pending = this.readFile(baseId);
      this.fileCache.set(baseId, pending);
    }
    return pending;
  }

  async listReferences(baseId: number, entry: CntcEntry): Promise<CntcReference[]> {
    const references: CntcReference[] = [];
    const file = await this.loadFile(baseId);

    if (file) {
      for (const fixup of file.mainContent.fileIndices) {
        if (fixup.relocOffset < entry.begin || fixup.relocOffset >= entry.end) continue;
        const offset = fixup.relocOffset - entry.begin;
        references.push({ kind: "asset", label: getCntcAssetReferenceLabel(entry.type, offset), offset, length: 4 });
      }
    }

    references.push(...describeCntcReferences(entry));
    return references.sort(
      (left, right) => (left.offset ?? Number.MAX_SAFE_INTEGER) - (right.offset ?? Number.MAX_SAFE_INTEGER)
    );
  }

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

  private async resolveItemSkin(itemBaseId: number, itemEntry: CntcEntry): Promise<CntcSkinReference | null> {
    if (itemEntry.type !== CNTC_TYPE_IDS.ITEMS) return null;
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
      if (!targetEntry || targetEntry.type !== CNTC_TYPE_IDS.SKINS) continue;

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

  private async resolveMapString(mapBaseId: number, stringIndex: number | null): Promise<string | null> {
    if (stringIndex == null) return null;
    const file = await this.loadFile(mapBaseId);
    if (!file) return null;
    return resolveCntcString(file.mainContent.strings, stringIndex);
  }

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
