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
  CNTC_MAP_CONTENT_ACCESS_REFERENCE_OFFSET,
  getCntcContentAccessGroupMemberSlots,
  getCntcContentAccessInfoForEntry,
} from "./cntc-access";
import {
  CNTC_STORY_SEASON_NEXT_REFERENCE_OFFSET,
  CNTC_STORY_SEASON_STORY_REFERENCE_OFFSET,
  getCntcStoryInfo,
  getCntcStorySeasonInfoForEntry,
} from "./cntc-story";
import {
  CNTC_MAP_DATA_FILEREF_OFFSET,
  CNTC_MAP_NAME_STRING_OFFSET,
  CNTC_MAP_REGION_REFERENCE_OFFSET,
  CNTC_MAP_REGION_STRING_OFFSET,
  CNTC_REGION_CONTINENT_REFERENCE_OFFSET,
  getCntcMapContinentName,
  getCntcMapLocationFallback,
  getCntcMapNameIndex,
  getCntcMapRegionName,
  getCntcMapRegionIndex,
  getCntcMapTypeValue,
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
 *  - `mapName` / `mapRegion`: a map's codename / region-group string (a `strings` index).
 *  - `mapApiRegion` / `mapApiContinent`: the reconstructed public API location
 *    carried primarily through the map's linked sibling entries.
 *  - `mapContentAccess`: a map's content-access entry/group (type 151/152) reached from `@0x1F8`.
 *  - `contentAccessGroupMember`: a type-152 group's same-file member entry (type 151).
 *  - `storySeasonStory` / `storySeasonNext`: a type-388 season's representative
 *    story (type 68) and next season in the Story Journal chain.
 *  - `regionApiContinent`: a type-60 region's linked continent carrier. */
export interface CntcReference {
  kind:
    | "asset"
    | "skin"
    | "mapName"
    | "mapRegion"
    | "mapApiRegion"
    | "mapApiContinent"
    | "mapContentAccess"
    | "contentAccessGroupMember"
    | "storySeasonStory"
    | "storySeasonNext"
    | "regionApiContinent";
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

/** A resolved sibling cntc entry target, suitable for public library consumers. */
export interface CntcResolvedEntryTarget {
  baseId: number;
  type: number;
  dataId: number | null;
  uniqueId: number | null;
  offset: number;
}

/** The reconstructed public map location for a type-45 entry. */
export interface CntcResolvedMapLocation {
  regionId: number | null;
  regionName: string | null;
  continentId: number | null;
  continentName: string | null;
  derivedFrom: "type60-chain" | "fallback" | "unknown";
  regionCarrier: CntcResolvedEntryTarget | null;
  continentCarrier: CntcResolvedEntryTarget | null;
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
      { kind: "mapRegion", label: "region group @0x110", offset: CNTC_MAP_REGION_STRING_OFFSET, length: 4 },
      { kind: "mapApiRegion", label: "region", length: 4 },
      { kind: "mapApiContinent", label: "continent", length: 4 },
      { kind: "mapContentAccess", label: "content access @0x1F8", offset: CNTC_MAP_CONTENT_ACCESS_REFERENCE_OFFSET, length: 4 },
    ];
  }
  if (entry.type === 60) {
    return [{ kind: "regionApiContinent", label: "continent @0x68", offset: CNTC_REGION_CONTINENT_REFERENCE_OFFSET, length: 4 }];
  }
  if (entry.type === 388) {
    return [
      {
        kind: "storySeasonStory",
        label: "representative story @0x48",
        offset: CNTC_STORY_SEASON_STORY_REFERENCE_OFFSET,
        length: 4,
      },
      {
        kind: "storySeasonNext",
        label: "next season @0x50",
        offset: CNTC_STORY_SEASON_NEXT_REFERENCE_OFFSET,
        length: 4,
      },
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
  private mapLocationCache = new Map<string, Promise<CntcResolvedMapLocation | null>>();

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

      if (entry.type === 152) {
        for (const member of getCntcContentAccessGroupMemberSlots(entry)) {
          references.push({
            kind: "contentAccessGroupMember",
            label: `member @0x${member.offset.toString(16).toUpperCase()}`,
            offset: member.offset,
            length: 4,
          });
        }
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

    if (reference.kind === "mapApiRegion" || reference.kind === "mapApiContinent") {
      const location = await this.resolveMapLocation(baseId, entry);
      if (!location) return null;

      if (reference.kind === "mapApiRegion") {
        if (location.regionId == null) return null;
        return {
          label: location.derivedFrom === "type60-chain" ? "region @0x108" : "region (derived)",
          offset: location.derivedFrom === "type60-chain" ? CNTC_MAP_REGION_REFERENCE_OFFSET : undefined,
          length: reference.length,
          display: formatMapLocationValue(location.regionId, location.regionName),
          navigation: location.regionCarrier ? toEntryNavigation(location.regionCarrier) : { target: "none" },
        };
      }

      if (location.continentId == null) return null;
      return {
        label: location.derivedFrom === "type60-chain" ? "continent via region" : "continent (derived)",
        length: reference.length,
        display: formatMapLocationValue(location.continentId, location.continentName),
        navigation: location.continentCarrier ? toEntryNavigation(location.continentCarrier) : { target: "none" },
      };
    }

    if (reference.kind === "mapContentAccess") {
      const accessEntry = await this.resolveExternalEntry(baseId, entry, CNTC_MAP_CONTENT_ACCESS_REFERENCE_OFFSET, [151, 152]);
      if (!accessEntry) return null;
      const info = getCntcContentAccessInfoForEntry(accessEntry.entry);
      return {
        label: reference.label,
        offset: reference.offset,
        length: reference.length,
        display: formatContentAccessValue(accessEntry.entry, info),
        navigation: toEntryNavigation(accessEntry),
      };
    }

    if (reference.kind === "contentAccessGroupMember") {
      const memberOffset = reference.offset == null ? null : readUint32LE(entry.contentSlice, reference.offset);
      if (memberOffset == null) return null;

      const file = await this.loadFile(baseId);
      if (!file) return null;

      const memberEntry = findCntcEntryAtOffset(file.entries, memberOffset);
      if (!memberEntry || memberEntry.type !== 151) return null;

      const memberInfo = getCntcContentAccessInfoForEntry(memberEntry);
      return {
        label: reference.label,
        offset: reference.offset,
        length: reference.length,
        display: formatContentAccessValue(memberEntry, memberInfo),
        navigation: {
          target: "entry",
          baseId,
          type: memberEntry.type,
          dataId: getCntcEntryDataId(memberEntry),
          uniqueId: getCntcEntryUniqueId(memberEntry),
          offset: memberEntry.begin,
        },
      };
    }

    if (reference.kind === "storySeasonStory") {
      const storyEntry = await this.resolveExternalEntry(baseId, entry, CNTC_STORY_SEASON_STORY_REFERENCE_OFFSET, 68);
      if (!storyEntry) return null;
      return {
        label: reference.label,
        offset: reference.offset,
        length: reference.length,
        display: formatStoryValue(storyEntry.dataId),
        navigation: toEntryNavigation(storyEntry),
      };
    }

    if (reference.kind === "storySeasonNext") {
      const nextSeason = await this.resolveExternalEntry(baseId, entry, CNTC_STORY_SEASON_NEXT_REFERENCE_OFFSET, 388);
      if (!nextSeason) return null;
      return {
        label: reference.label,
        offset: reference.offset,
        length: reference.length,
        display: formatStorySeasonValue(nextSeason.entry),
        navigation: toEntryNavigation(nextSeason),
      };
    }

    if (reference.kind === "regionApiContinent") {
      const continentCarrier = await this.resolveExternalEntry(baseId, entry, CNTC_REGION_CONTINENT_REFERENCE_OFFSET, 11);
      if (!continentCarrier) return null;
      return {
        label: reference.label,
        offset: reference.offset,
        length: reference.length,
        display: formatMapLocationValue(continentCarrier.dataId ?? 0, getCntcMapContinentName(continentCarrier.dataId)),
        navigation: toEntryNavigation(continentCarrier),
      };
    }

    return null;
  }

  /**
   * Reconstructs a type-45 entry's public API `region_id` / `continent_id`,
   * primarily through the verified `type45 @0x108 -> type60 -> type11` chain.
   */
  async resolveMapLocation(baseId: number, entry: CntcEntry): Promise<CntcResolvedMapLocation | null> {
    if (entry.type !== 45) return null;

    const cacheKey = `${baseId}:${entry.begin}`;
    let pending = this.mapLocationCache.get(cacheKey);
    if (!pending) {
      pending = this.readMapLocation(baseId, entry);
      this.mapLocationCache.set(cacheKey, pending);
    }
    return pending;
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

  private async readMapLocation(baseId: number, entry: CntcEntry): Promise<CntcResolvedMapLocation> {
    const regionCarrier = await this.resolveExternalEntry(baseId, entry, CNTC_MAP_REGION_REFERENCE_OFFSET, 60);
    if (regionCarrier) {
      const continentCarrier = await this.resolveExternalEntry(
        regionCarrier.baseId,
        regionCarrier.entry,
        CNTC_REGION_CONTINENT_REFERENCE_OFFSET,
        11
      );
      const regionId = regionCarrier.dataId;
      const continentId = continentCarrier?.dataId ?? null;
      return {
        regionId,
        regionName: getCntcMapRegionName(regionId),
        continentId,
        continentName: getCntcMapContinentName(continentId),
        derivedFrom: "type60-chain",
        regionCarrier: toResolvedEntryTarget(regionCarrier),
        continentCarrier: continentCarrier ? toResolvedEntryTarget(continentCarrier) : null,
      };
    }

    const fallback = getCntcMapLocationFallback(
      await this.resolveMapString(baseId, getCntcMapRegionIndex(entry)),
      getCntcMapTypeValue(entry)
    );
    if (fallback) {
      return {
        ...fallback,
        derivedFrom: "fallback",
        regionCarrier: null,
        continentCarrier: null,
      };
    }

    return {
      regionId: null,
      regionName: null,
      continentId: null,
      continentName: null,
      derivedFrom: "unknown",
      regionCarrier: null,
      continentCarrier: null,
    };
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

  private async resolveExternalEntry(
    anchorBaseId: number,
    sourceEntry: CntcEntry,
    sourceOffset: number,
    expectedType: number | readonly number[]
  ): Promise<(CntcResolvedEntryTarget & { entry: CntcEntry }) | null> {
    const file = await this.loadFile(anchorBaseId);
    if (!file) return null;

    const fixup = file.mainContent.externalOffsets.find((candidate) => candidate.relocOffset === sourceEntry.begin + sourceOffset);
    if (!fixup) return null;

    const targetOffset = readUint32LE(file.mainContent.content, fixup.relocOffset);
    if (targetOffset == null) return null;

    const targetBaseId = await this.resolveTargetBaseId(anchorBaseId, fixup.targetFileIndex);
    if (targetBaseId == null) return null;

    const targetFile = await this.loadFile(targetBaseId);
    if (!targetFile) return null;

    const targetEntry = findCntcEntryAtOffset(targetFile.entries, targetOffset);
    const expectedTypes = Array.isArray(expectedType) ? expectedType : [expectedType];
    if (!targetEntry || !expectedTypes.includes(targetEntry.type)) return null;

    return {
      baseId: targetBaseId,
      type: targetEntry.type,
      dataId: getCntcEntryDataId(targetEntry),
      uniqueId: getCntcEntryUniqueId(targetEntry),
      offset: targetEntry.begin,
      entry: targetEntry,
    };
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

function formatMapLocationValue(id: number, name: string | null): string {
  if (name == null) {
    return String(id);
  }
  return `${id} | ${name || "(blank)"}`;
}

function formatContentAccessValue(entry: CntcEntry, info: { name: string } | null): string {
  const uniqueId = getCntcEntryUniqueId(entry);
  const prefix = entry.type === 152 ? "group" : "access";
  if (info) {
    return `${prefix} ${uniqueId ?? "?"} | ${info.name}`;
  }
  return `${prefix} ${uniqueId ?? "?"}`;
}

function formatStoryValue(storyId: number | null): string {
  if (storyId == null) {
    return "(story)";
  }
  const story = getCntcStoryInfo(storyId);
  return story ? `${storyId} | ${story.visibility}` : String(storyId);
}

function formatStorySeasonValue(entry: CntcEntry): string {
  const info = getCntcStorySeasonInfoForEntry(entry);
  const uniqueId = getCntcEntryUniqueId(entry);
  if (info) {
    return `season ${uniqueId ?? "?"} | ${info.name}`;
  }
  return `season ${uniqueId ?? "?"}`;
}

function toResolvedEntryTarget(reference: CntcResolvedEntryTarget): CntcResolvedEntryTarget {
  return {
    baseId: reference.baseId,
    type: reference.type,
    dataId: reference.dataId,
    uniqueId: reference.uniqueId,
    offset: reference.offset,
  };
}

function toEntryNavigation(reference: CntcResolvedEntryTarget): CntcReferenceNavigation {
  return {
    target: "entry",
    baseId: reference.baseId,
    type: reference.type,
    dataId: reference.dataId,
    uniqueId: reference.uniqueId,
    offset: reference.offset,
  };
}
