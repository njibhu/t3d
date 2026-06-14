import { type CntcEntry, getCntcEntryDataId, readUint32LE } from "../content";
import {
  formatCntcLookupValue,
  lookupField,
  type CntcFieldDefinition,
  type CntcLookupDefinition,
  type CntcTypeDefinition,
  uint32Field,
  whenUint32Equals,
} from "../schema";
import { CNTC_TYPE_IDS } from "./type-ids";

export const CNTC_ITEM_TYPE_LOOKUP: CntcLookupDefinition = {
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

export const CNTC_ITEM_RARITY_LOOKUP: CntcLookupDefinition = {
  0: "Junk",
  1: "Basic",
  2: "Fine",
  3: "Masterwork",
  4: "Rare",
  5: "Exotic",
  6: "Ascended",
};

export const CNTC_ARMOR_SLOT_LOOKUP: CntcLookupDefinition = {
  0: "Coat",
  1: "Leggings",
  2: "Gloves",
  3: "Helm",
  4: "HelmAquatic",
  5: "Boots",
  6: "Shoulders",
};

export const CNTC_ARMOR_WEIGHT_CLASS_LOOKUP: CntcLookupDefinition = {
  1: "Light",
  2: "Medium",
  3: "Heavy",
};

export const CNTC_ITEM_TYPE_OFFSET = 44;
export const CNTC_ITEM_RARITY_OFFSET = 96;
export const CNTC_ITEM_LEVEL_OFFSET = 116;
export const CNTC_ARMOR_SLOT_OFFSET = 184;
export const CNTC_ARMOR_WEIGHT_CLASS_OFFSET = 280;

const ITEM_FIELD_DEFINITIONS: readonly CntcFieldDefinition[] = [
  lookupField("itemType", "item type @0x2C", CNTC_ITEM_TYPE_OFFSET, CNTC_ITEM_TYPE_LOOKUP, {
    includeId: true,
    unknownLabel: "Unknown",
  }),
  lookupField("rarity", "rarity @0x60", CNTC_ITEM_RARITY_OFFSET, CNTC_ITEM_RARITY_LOOKUP, {
    includeId: true,
    unknownLabel: "Unknown",
  }),
  uint32Field("level", "level @0x74", CNTC_ITEM_LEVEL_OFFSET),
  uint32Field("weaponField38", "weapon field @0x38", 56, {
    includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 24),
    experimental: true,
  }),
  uint32Field("weaponUnknownRef40", "unknown ref @0x40", 64, {
    includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 24),
    experimental: true,
  }),
  uint32Field("weaponFlag48", "flag @0x48", 72, {
    includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 24),
    experimental: true,
  }),
  uint32Field("weaponSubtype4c", "subtype enum @0x4C", 76, {
    includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 24),
    experimental: true,
  }),
  uint32Field("weaponFieldC0", "weapon field @0xC0", 192, {
    includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 24),
    experimental: true,
  }),
  lookupField("armorSlot", "armor slot @0xB8", CNTC_ARMOR_SLOT_OFFSET, CNTC_ARMOR_SLOT_LOOKUP, {
    includeId: true,
    unknownLabel: "Unknown",
    includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 0),
  }),
  lookupField(
    "armorWeightClass",
    "armor weight class @0x118",
    CNTC_ARMOR_WEIGHT_CLASS_OFFSET,
    CNTC_ARMOR_WEIGHT_CLASS_LOOKUP,
    {
      includeId: true,
      unknownLabel: "Unknown",
      includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 0),
    }
  ),
  uint32Field("armorField4c", "armor field @0x4C", 76, {
    includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 0),
    experimental: true,
  }),
  uint32Field("armorFieldBc", "armor field @0xBC", 188, {
    includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 0),
    experimental: true,
  }),
  uint32Field("armorFieldC0", "armor field @0xC0", 192, {
    includeWhen: whenUint32Equals(CNTC_ITEM_TYPE_OFFSET, 0),
    experimental: true,
  }),
];

export const CNTC_ITEM_DEFINITION: CntcTypeDefinition = {
  type: CNTC_TYPE_IDS.ITEMS,
  description: "Items",
  dataIdLabel: "item id @0x28",
  dataIdCaption: "item id",
  summaryCaption: "Item Type",
  summaryFieldKey: "itemType",
  fields: ITEM_FIELD_DEFINITIONS,
  references: [{ key: "skin", kind: "skin", label: "skin ref", length: 4 }],
  assetReferences: [{ label: "icon", offset: 64 }],
};

export interface CntcItemArmor {
  slotId: number | null;
  slot: string | null;
  weightClassId: number | null;
  weightClass: string | null;
}

export interface CntcItem {
  id: number | null;
  itemTypeId: number | null;
  itemType: string;
  rarityId: number | null;
  rarity: string | null;
  level: number | null;
  armor?: CntcItemArmor;
}

export function getCntcItemTypeEnum(entry: CntcEntry): number | null {
  if (entry.type !== CNTC_TYPE_IDS.ITEMS) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_ITEM_TYPE_OFFSET);
}

export function getCntcItemTypeLabel(entry: CntcEntry): string {
  const itemTypeId = getCntcItemTypeEnum(entry);
  return itemTypeId == null
    ? ""
    : String(formatCntcLookupValue(itemTypeId, CNTC_ITEM_TYPE_LOOKUP, { includeId: true, unknownLabel: "Unknown" }));
}

export function parseCntcItem(entry: CntcEntry): CntcItem | null {
  if (entry.type !== CNTC_TYPE_IDS.ITEMS || !entry.contentSlice) {
    return null;
  }

  const itemTypeId = getCntcItemTypeEnum(entry);
  const rarityId = readUint32LE(entry.contentSlice, CNTC_ITEM_RARITY_OFFSET);
  const item: CntcItem = {
    id: getCntcEntryDataId(entry),
    itemTypeId,
    itemType: String(
      formatCntcLookupValue(itemTypeId, CNTC_ITEM_TYPE_LOOKUP, { unknownLabel: "Unknown" }) ?? "Unknown"
    ),
    rarityId,
    rarity:
      rarityId == null
        ? null
        : ((formatCntcLookupValue(rarityId, CNTC_ITEM_RARITY_LOOKUP) as string | number | null)?.toString() ?? null),
    level: readUint32LE(entry.contentSlice, CNTC_ITEM_LEVEL_OFFSET),
  };

  if (itemTypeId === 0) {
    const slotId = readUint32LE(entry.contentSlice, CNTC_ARMOR_SLOT_OFFSET);
    const weightClassId = readUint32LE(entry.contentSlice, CNTC_ARMOR_WEIGHT_CLASS_OFFSET);
    item.armor = {
      slotId,
      slot:
        slotId == null
          ? null
          : ((formatCntcLookupValue(slotId, CNTC_ARMOR_SLOT_LOOKUP) as string | number | null)?.toString() ?? null),
      weightClassId,
      weightClass:
        weightClassId == null
          ? null
          : ((
              formatCntcLookupValue(weightClassId, CNTC_ARMOR_WEIGHT_CLASS_LOOKUP) as string | number | null
            )?.toString() ?? null),
    };
  }

  return item;
}
