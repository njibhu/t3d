import { type CntcEntry, getCntcEntryDataId } from "../content";
import { assetReference, CntcTypeSchema, formatCntcLookupValue, type CntcLookupDefinition } from "../schema";
import { CNTC_TYPE_IDS } from "./type-ids";

interface CntcItemArmor {
  slotId: number | null;
  slot: string | null;
  weightClassId: number | null;
  weightClass: string | null;
}

interface CntcItem {
  id: number | null;
  itemTypeId: number | null;
  itemType: string;
  rarityId: number | null;
  rarity: string | null;
  level: number | null;
  armor?: CntcItemArmor;
}

const ITEM_TYPE_LOOKUP: CntcLookupDefinition = {
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

const ITEM_RARITY_LOOKUP: CntcLookupDefinition = {
  0: "Junk",
  1: "Basic",
  2: "Fine",
  3: "Masterwork",
  4: "Rare",
  5: "Exotic",
  6: "Ascended",
};

const ARMOR_SLOT_LOOKUP: CntcLookupDefinition = {
  0: "Coat",
  1: "Leggings",
  2: "Gloves",
  3: "Helm",
  4: "HelmAquatic",
  5: "Boots",
  6: "Shoulders",
};

const ARMOR_WEIGHT_CLASS_LOOKUP: CntcLookupDefinition = {
  1: "Light",
  2: "Medium",
  3: "Heavy",
};

class CntcItemSchema extends CntcTypeSchema {
  readonly type = CNTC_TYPE_IDS.ITEMS;
  readonly description = "Items";

  readonly itemId = this.dataId("item id");
  readonly itemTypeLookup = ITEM_TYPE_LOOKUP;
  readonly rarityLookup = ITEM_RARITY_LOOKUP;
  readonly armorSlotLookup = ARMOR_SLOT_LOOKUP;
  readonly armorWeightClassLookup = ARMOR_WEIGHT_CLASS_LOOKUP;
  readonly itemType = this.lookup("itemType", "item type", 44, this.itemTypeLookup, {
    includeId: true,
    unknownLabel: "Unknown",
  });
  readonly rarity = this.lookup("rarity", "rarity", 96, this.rarityLookup, {
    includeId: true,
    unknownLabel: "Unknown",
  });
  readonly level = this.uint32("level", "level", 116);
  readonly armorSlot = this.lookup("armorSlot", "armor slot", 184, this.armorSlotLookup, {
    includeId: true,
    unknownLabel: "Unknown",
    includeWhen: this.itemType.equals(0),
  });
  readonly armorWeightClass = this.lookup("armorWeightClass", "armor weight class", 280, this.armorWeightClassLookup, {
    includeId: true,
    unknownLabel: "Unknown",
    includeWhen: this.itemType.equals(0),
  });

  constructor() {
    super();

    this.setSummaryField(this.itemType, "Item Type");
    this.addReference({ key: "skin", kind: "skin", label: "skin ref", length: 4, targetType: CNTC_TYPE_IDS.SKINS });
    this.addAssetReference(assetReference("icon", 64));
  }

  getTypeEnum(entry: CntcEntry): number | null {
    if (entry.type !== CNTC_TYPE_IDS.ITEMS) {
      return null;
    }
    return this.itemType.read(entry);
  }

  getTypeLabel(entry: CntcEntry): string {
    const itemTypeId = this.getTypeEnum(entry);
    return itemTypeId == null
      ? ""
      : String(formatCntcLookupValue(itemTypeId, this.itemTypeLookup, { includeId: true, unknownLabel: "Unknown" }));
  }

  parse(entry: CntcEntry): CntcItem | null {
    if (entry.type !== CNTC_TYPE_IDS.ITEMS || !entry.contentSlice) {
      return null;
    }

    const itemTypeId = this.getTypeEnum(entry);
    const rarityId = this.rarity.read(entry);
    const item: CntcItem = {
      id: getCntcEntryDataId(entry),
      itemTypeId,
      itemType: String(
        formatCntcLookupValue(itemTypeId, this.itemTypeLookup, { unknownLabel: "Unknown" }) ?? "Unknown"
      ),
      rarityId,
      rarity:
        rarityId == null
          ? null
          : ((formatCntcLookupValue(rarityId, this.rarityLookup) as string | number | null)?.toString() ?? null),
      level: this.level.read(entry),
    };

    if (itemTypeId === 0) {
      const slotId = this.armorSlot.read(entry);
      const weightClassId = this.armorWeightClass.read(entry);
      item.armor = {
        slotId,
        slot:
          slotId == null
            ? null
            : ((formatCntcLookupValue(slotId, this.armorSlotLookup) as string | number | null)?.toString() ?? null),
        weightClassId,
        weightClass:
          weightClassId == null
            ? null
            : ((
                formatCntcLookupValue(weightClassId, this.armorWeightClassLookup) as string | number | null
              )?.toString() ?? null),
      };
    }

    return item;
  }
}

export const CNTC_ITEM_SCHEMA = new CntcItemSchema();
