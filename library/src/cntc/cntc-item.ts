import { type CntcEntry, getCntcEntryDataId, readUint32LE } from "./cntc-content";

/**
 * Decoding for `cntc` type 35 ("Items") entries.
 *
 * Only fields whose meaning is well established are decoded here: the item
 * type, rarity, level, and (for armor) the equipment slot and weight class.
 * Speculative/heuristic offsets (weapon fields, unknown references, flags) are
 * intentionally left to the browser's experimental layer so the library stays
 * limited to structures we are confident about.
 */

export const CNTC_ITEM_TYPE_LABELS: Record<number, string> = {
  0: "Armor",
  2: "Back",
  3: "Bag",
  4: "Consumable",
  5: "Container",
  6: "CraftingMaterial",
  9: "Gathering",
  10: "Gizmo",
  11: "JadeTechModule",
  15: "MiniPet",
  17: "PowerCore",
  18: "Relic",
  19: "Tool",
  21: "Trinket",
  22: "Trophy",
  23: "UpgradeComponent",
  24: "Weapon",
};

export const CNTC_ITEM_RARITY_LABELS: Record<number, string> = {
  0: "Junk",
  1: "Basic",
  2: "Fine",
  3: "Masterwork",
  4: "Rare",
  5: "Exotic",
  6: "Ascended",
};

export const CNTC_ARMOR_SLOT_LABELS: Record<number, string> = {
  0: "Coat",
  1: "Leggings",
  2: "Gloves",
  3: "Helm",
  4: "HelmAquatic",
  5: "Boots",
  6: "Shoulders",
};

export const CNTC_ARMOR_WEIGHT_CLASS_LABELS: Record<number, string> = {
  1: "Light",
  2: "Medium",
  3: "Heavy",
};

/** Armor-specific certain fields, present only when `itemTypeId === 0`. */
export interface CntcItemArmor {
  slotId: number | null;
  slot: string | null;
  weightClassId: number | null;
  weightClass: string | null;
}

/** The certain, decoded representation of a type 35 item entry. */
export interface CntcItem {
  id: number | null;
  itemTypeId: number | null;
  itemType: string;
  rarityId: number | null;
  rarity: string | null;
  level: number | null;
  armor?: CntcItemArmor;
}

/** The item-type enum (`@0x2C`), or `null` if the entry is not an item. */
export function getCntcItemTypeEnum(entry: CntcEntry): number | null {
  if (entry.type !== 35) {
    return null;
  }
  return readUint32LE(entry.contentSlice, 44);
}

/** Human-readable item type, e.g. `"Weapon (24)"`; `""` if not an item. */
export function getCntcItemTypeLabel(entry: CntcEntry): string {
  const itemTypeEnum = getCntcItemTypeEnum(entry);
  if (itemTypeEnum === null) {
    return "";
  }
  const label = CNTC_ITEM_TYPE_LABELS[itemTypeEnum] ?? "Unknown";
  return `${label} (${itemTypeEnum})`;
}

/** Decodes the certain fields of a type 35 item entry; `null` for other types. */
export function parseCntcItem(entry: CntcEntry): CntcItem | null {
  if (entry.type !== 35 || !entry.contentSlice) {
    return null;
  }

  const bytes = entry.contentSlice;
  const itemTypeId = getCntcItemTypeEnum(entry);
  const rarityId = readUint32LE(bytes, 96); // @0x60

  const item: CntcItem = {
    id: getCntcEntryDataId(entry), // @0x28
    itemTypeId,
    itemType: itemTypeId !== null ? (CNTC_ITEM_TYPE_LABELS[itemTypeId] ?? "Unknown") : "Unknown",
    rarityId,
    rarity: rarityId !== null ? (CNTC_ITEM_RARITY_LABELS[rarityId] ?? null) : null,
    level: readUint32LE(bytes, 116), // @0x74
  };

  if (itemTypeId === 0) {
    const slotId = readUint32LE(bytes, 184); // @0xB8
    const weightClassId = readUint32LE(bytes, 280); // @0x118
    item.armor = {
      slotId,
      slot: slotId !== null ? (CNTC_ARMOR_SLOT_LABELS[slotId] ?? null) : null,
      weightClassId,
      weightClass: weightClassId !== null ? (CNTC_ARMOR_WEIGHT_CLASS_LABELS[weightClassId] ?? null) : null,
    };
  }

  return item;
}
