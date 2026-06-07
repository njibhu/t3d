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
  return "id @0x28";
}

/** Short column caption for the data-id field, specialised per content type. */
export function getCntcDataIdCaption(type: number): string {
  if (type === 35) return "item id";
  if (type === 45) return "map id";
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
