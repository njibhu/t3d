export const TYPE35_ITEM_TYPE_LABELS = {
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

export const TYPE35_RARITY_LABELS = {
  0: "Junk",
  1: "Basic",
  2: "Fine",
  3: "Masterwork",
  4: "Rare",
  5: "Exotic",
  6: "Ascended",
};

export const TYPE35_ARMOR_SLOT_LABELS = {
  0: "Coat",
  1: "Leggings",
  2: "Gloves",
  3: "Helm",
  4: "HelmAquatic",
  5: "Boots",
  6: "Shoulders",
};

export const TYPE35_ARMOR_WEIGHT_CLASS_LABELS = {
  1: "Light",
  2: "Medium",
  3: "Heavy",
};

export function readUint32LE(bytes, offset) {
  if (!bytes || offset < 0 || offset + 4 > bytes.length) {
    return null;
  }

  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24 >>> 0)
  ) >>> 0;
}

export function getType35ItemTypeEnum(entryRecord) {
  if (!entryRecord || entryRecord.type !== 35) {
    return null;
  }

  return readUint32LE(entryRecord.contentSlice, 44);
}

export function getType35ItemTypeLabel(entryRecord) {
  const itemTypeEnum = getType35ItemTypeEnum(entryRecord);
  if (itemTypeEnum === null) {
    return "";
  }

  const label = TYPE35_ITEM_TYPE_LABELS[itemTypeEnum] ?? "Unknown";
  return `${label} (${itemTypeEnum})`;
}

function parseWeaponDetails(bytes) {
  const subtypeEnum = readUint32LE(bytes, 76);

  return {
    subtype_id: subtypeEnum,
    field_0x38: readUint32LE(bytes, 56),
    field_0x40: readUint32LE(bytes, 64),
    flag_0x48: readUint32LE(bytes, 72),
    field_0xC0: readUint32LE(bytes, 192),
  };
}

function parseArmorDetails(bytes) {
  const slotEnum = readUint32LE(bytes, 184);
  const weightClassEnum = readUint32LE(bytes, 280);

  return {
    type: slotEnum !== null ? TYPE35_ARMOR_SLOT_LABELS[slotEnum] ?? null : null,
    type_id: slotEnum,
    weight_class: weightClassEnum !== null ? TYPE35_ARMOR_WEIGHT_CLASS_LABELS[weightClassEnum] ?? null : null,
    weight_class_id: weightClassEnum,
    field_0x4C: readUint32LE(bytes, 76),
    field_0xBC: readUint32LE(bytes, 188),
    field_0xC0: readUint32LE(bytes, 192),
  };
}

export function parseType35Item(entryRecord) {
  if (!entryRecord || entryRecord.type !== 35 || !entryRecord.contentSlice) {
    return null;
  }

  const bytes = entryRecord.contentSlice;
  const itemTypeEnum = getType35ItemTypeEnum(entryRecord);
  const itemTypeLabel = TYPE35_ITEM_TYPE_LABELS[itemTypeEnum] ?? "Unknown";
  const rarityEnum = readUint32LE(bytes, 96);
  const parsed = {
    id: readUint32LE(bytes, 40),
    type: itemTypeLabel,
    type_id: itemTypeEnum,
    rarity: rarityEnum !== null ? TYPE35_RARITY_LABELS[rarityEnum] ?? null : null,
    rarity_id: rarityEnum,
    level: readUint32LE(bytes, 116),
    details: {},
    _cntc: {
      embedded_type: readUint32LE(bytes, 16),
      unknown_unique_id: readUint32LE(bytes, 20),
      decoded_length: bytes.length,
    },
  };

  if (itemTypeEnum === 24) {
    parsed.details = parseWeaponDetails(bytes);
  } else if (itemTypeEnum === 0) {
    parsed.details = parseArmorDetails(bytes);
  }

  return parsed;
}
