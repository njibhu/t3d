import {
  CNTC_CONTENT_ACCESS_GROUP_MEMBER_STRIDE,
  CNTC_CONTENT_ACCESS_GROUP_MEMBERS_OFFSET,
  CNTC_CONTENT_ACCESS_PRODUCT_ORDINAL_OFFSET,
  CNTC_CONTENT_ACCESS_TEXT_KEY_OFFSET,
  getCntcContentAccessInfoForEntry,
  getCntcContentAccessInfoForOrdinal,
  getCntcContentAccessProductOrdinal,
  getCntcContentAccessGroupMemberSlots,
} from "./cntc-access";
import {
  CNTC_STORY_SEASON_ORDER_OFFSET,
  CNTC_STORY_SEASON_TEXT_KEY_OFFSET,
  getCntcStoryInfo,
  getCntcStorySeasonInfoForEntry,
  getCntcStorySeasonOrder,
  getCntcStoryTextKeyOffset,
} from "./cntc-story";
import {
  CNTC_MAP_TYPE_OFFSET,
  CNTC_REGION_CONTINENT_REFERENCE_OFFSET,
  getCntcMapContinentName,
  getCntcMapRegionName,
  getCntcMapTypeValue,
} from "./cntc-map";
import {
  type CntcEntry,
  getCntcEntryDataId,
  getCntcEntryEmbeddedType,
  getCntcEntryUniqueId,
  readUint32LE,
} from "./cntc-content";
import { getCntcItemTypeEnum, getCntcItemTypeLabel, parseCntcItem } from "./cntc-item";

/**
 * Field-level description of a `cntc` entry: every decoded value together with
 * the byte range it occupies. This is the single source of truth for *what*
 * lives *where* in an entry — consumers (e.g. the browser) render these
 * generically and must not hardcode offsets or per-type logic themselves.
 */
export interface CntcField {
  label: string;
  /** Byte offset of the field within the entry, when it maps to specific bytes. */
  offset?: number;
  /** Byte length of the field (defaults to 4 when an offset is present). */
  length?: number;
  value: string | number | null;
  /** True when the field's meaning is inferred but not yet confirmed. */
  experimental?: boolean;
}

/** Display label for the data-id field (`@0x28`), specialised per content type. */
export function getCntcDataIdLabel(type: number): string {
  if (type === 35) return "item id @0x28";
  if (type === 45) return "map id @0x28";
  if (type === 68) return "story id @0x28";
  if (type === 151) return "access value @0x28";
  if (type === 60) return "region id @0x28";
  if (type === 11) return "continent id @0x28";
  if (type === 152) return "group value @0x28";
  if (type === 388) return "season value @0x28";
  return "id @0x28";
}

/** Short column caption for the data-id field, specialised per content type. */
export function getCntcDataIdCaption(type: number): string {
  if (type === 35) return "item id";
  if (type === 45) return "map id";
  if (type === 68) return "story id";
  if (type === 151) return "access value";
  if (type === 60) return "region id";
  if (type === 11) return "continent id";
  if (type === 152) return "group value";
  if (type === 388) return "season value";
  return "data id";
}

/** Describes the decoded fields of an entry (label, byte range, value). */
export function describeCntcEntry(entry: CntcEntry): CntcField[] {
  const bytes = entry.contentSlice;
  const fields: CntcField[] = [
    { label: "decoded length", value: bytes.length },
    { label: "embedded type @0x10", offset: 16, length: 4, value: getCntcEntryEmbeddedType(entry) },
    { label: "unique id @0x14", offset: 20, length: 4, value: getCntcEntryUniqueId(entry) },
    { label: getCntcDataIdLabel(entry.type), offset: 40, length: 4, value: getCntcEntryDataId(entry) },
  ];

  if (entry.type === 35) {
    fields.push(...describeItemFields(entry));
  } else if (entry.type === 45) {
    fields.push(...describeMapFields(entry));
  } else if (entry.type === 68) {
    fields.push(...describeStoryFields(entry));
  } else if (entry.type === 151) {
    fields.push(...describeContentAccessFields(entry));
  } else if (entry.type === 152) {
    fields.push(...describeContentAccessGroupFields(entry));
  } else if (entry.type === 388) {
    fields.push(...describeStorySeasonFields(entry));
  } else if (entry.type === 60) {
    fields.push(...describeRegionFields(entry));
  } else if (entry.type === 11) {
    fields.push(...describeContinentFields(entry));
  }

  return fields;
}

function describeItemFields(entry: CntcEntry): CntcField[] {
  const bytes = entry.contentSlice;
  const item = parseCntcItem(entry);
  const itemTypeEnum = getCntcItemTypeEnum(entry);

  const fields: CntcField[] = [
    { label: "item type @0x2C", offset: 44, length: 4, value: getCntcItemTypeLabel(entry) },
    {
      label: "rarity @0x60",
      offset: 96,
      length: 4,
      value: item?.rarityId != null ? `${item.rarity ?? "Unknown"} (${item.rarityId})` : readUint32LE(bytes, 96),
    },
    { label: "level @0x74", offset: 116, length: 4, value: item?.level ?? readUint32LE(bytes, 116) },
  ];

  // Weapon (24) and Armor (0) carry additional, mostly still-experimental fields.
  if (itemTypeEnum === 24) {
    fields.push(
      { label: "weapon field @0x38", offset: 56, length: 4, value: readUint32LE(bytes, 56), experimental: true },
      { label: "unknown ref @0x40", offset: 64, length: 4, value: readUint32LE(bytes, 64), experimental: true },
      { label: "flag @0x48", offset: 72, length: 4, value: readUint32LE(bytes, 72), experimental: true },
      { label: "subtype enum @0x4C", offset: 76, length: 4, value: readUint32LE(bytes, 76), experimental: true },
      { label: "weapon field @0xC0", offset: 192, length: 4, value: readUint32LE(bytes, 192), experimental: true }
    );
  } else if (itemTypeEnum === 0) {
    fields.push(
      {
        label: "armor slot @0xB8",
        offset: 184,
        length: 4,
        value:
          item?.armor?.slotId != null
            ? `${item.armor.slot ?? "Unknown"} (${item.armor.slotId})`
            : readUint32LE(bytes, 184),
      },
      {
        label: "armor weight class @0x118",
        offset: 280,
        length: 4,
        value:
          item?.armor?.weightClassId != null
            ? `${item.armor.weightClass ?? "Unknown"} (${item.armor.weightClassId})`
            : readUint32LE(bytes, 280),
      },
      { label: "armor field @0x4C", offset: 76, length: 4, value: readUint32LE(bytes, 76), experimental: true },
      { label: "armor field @0xBC", offset: 188, length: 4, value: readUint32LE(bytes, 188), experimental: true },
      { label: "armor field @0xC0", offset: 192, length: 4, value: readUint32LE(bytes, 192), experimental: true }
    );
  }

  return fields;
}

function describeMapFields(entry: CntcEntry): CntcField[] {
  return [{ label: "map type @0x2C", offset: CNTC_MAP_TYPE_OFFSET, length: 4, value: getCntcMapTypeValue(entry) }];
}

function describeStoryFields(entry: CntcEntry): CntcField[] {
  const storyId = getCntcEntryDataId(entry);
  const story = getCntcStoryInfo(storyId);
  const textKeyOffset = getCntcStoryTextKeyOffset(entry);
  const fields: CntcField[] = [{ label: "story visibility", value: story?.visibility ?? null }];

  if (textKeyOffset != null) {
    fields.push({
      label: `text key @0x${textKeyOffset.toString(16).toUpperCase()}`,
      offset: textKeyOffset,
      length: 4,
      value: readUint32LE(entry.contentSlice, textKeyOffset),
    });
  }

  return fields;
}

function describeContentAccessFields(entry: CntcEntry): CntcField[] {
  const info = getCntcContentAccessInfoForEntry(entry);
  const ordinal = getCntcContentAccessProductOrdinal(entry);
  const fields: CntcField[] = [
    { label: "access name", value: info?.name ?? null },
    {
      label: "product ordinal @0x4C",
      offset: CNTC_CONTENT_ACCESS_PRODUCT_ORDINAL_OFFSET,
      length: 4,
      value: ordinal,
    },
    { label: "ordinal name", value: getCntcContentAccessInfoForOrdinal(ordinal)?.name ?? null },
    {
      label: "text key @0x50",
      offset: CNTC_CONTENT_ACCESS_TEXT_KEY_OFFSET,
      length: 4,
      value: readUint32LE(entry.contentSlice, CNTC_CONTENT_ACCESS_TEXT_KEY_OFFSET),
    },
  ];
  if (info) {
    fields.push({ label: "name confidence", value: info.confidence });
    if (info.notes) {
      fields.push({ label: "name notes", value: info.notes });
    }
  }
  return fields;
}

function describeContentAccessGroupFields(entry: CntcEntry): CntcField[] {
  const info = getCntcContentAccessInfoForEntry(entry);
  const members = getCntcContentAccessGroupMemberSlots(entry);
  const fields: CntcField[] = [
    { label: "group name", value: info?.name ?? null },
    { label: "member count", value: members.length },
  ];

  for (const member of members) {
    fields.push({
      label: `member @0x${member.offset.toString(16).toUpperCase()}`,
      offset: member.offset,
      length: 4,
      value: member.value,
    });
    if (member.offset + CNTC_CONTENT_ACCESS_GROUP_MEMBER_STRIDE <= entry.size) {
      fields.push({
        label: `member field @0x${(member.offset + 4).toString(16).toUpperCase()}`,
        offset: member.offset + 4,
        length: 4,
        value: readUint32LE(entry.contentSlice, member.offset + 4),
        experimental: true,
      });
    }
  }

  if (info) {
    fields.push({ label: "name confidence", value: info.confidence });
    if (info.notes) {
      fields.push({ label: "name notes", value: info.notes });
    }
  } else if (members.length > 0) {
    fields.push({
      label: `member table @0x${CNTC_CONTENT_ACCESS_GROUP_MEMBERS_OFFSET.toString(16).toUpperCase()}`,
      value: "same-file access entry offsets",
    });
  }

  return fields;
}

function describeStorySeasonFields(entry: CntcEntry): CntcField[] {
  const info = getCntcStorySeasonInfoForEntry(entry);
  const order = getCntcStorySeasonOrder(entry);
  return [
    { label: "season name", value: info?.name ?? null },
    { label: "season order @0x34", offset: CNTC_STORY_SEASON_ORDER_OFFSET, length: 4, value: order },
    {
      label: "text key @0x58",
      offset: CNTC_STORY_SEASON_TEXT_KEY_OFFSET,
      length: 4,
      value: readUint32LE(entry.contentSlice, CNTC_STORY_SEASON_TEXT_KEY_OFFSET),
    },
  ];
}

function describeRegionFields(entry: CntcEntry): CntcField[] {
  const regionId = getCntcEntryDataId(entry);
  return [
    { label: "region name", value: getCntcMapRegionName(regionId) },
    {
      label: "continent ref @0x68",
      offset: CNTC_REGION_CONTINENT_REFERENCE_OFFSET,
      length: 4,
      value: readUint32LE(entry.contentSlice, CNTC_REGION_CONTINENT_REFERENCE_OFFSET),
    },
  ];
}

function describeContinentFields(entry: CntcEntry): CntcField[] {
  const continentId = getCntcEntryDataId(entry);
  return [{ label: "continent name", value: getCntcMapContinentName(continentId) }];
}
