import type { CntcEntry } from "../content";
import {
  BASE_FIELD_DEFINITIONS,
  readBaseCntcFieldValue,
  type CntcAssetReferenceDefinition,
  type CntcFieldDefinition,
  type CntcReferenceDefinition,
  type CntcTypeDefinition,
} from "../schema";
import { CNTC_ITEM_SCHEMA } from "./items";
import { CNTC_MAP_SCHEMA } from "./maps";
import { CNTC_SKIN_SCHEMA } from "./skins";
import { CNTC_TYPE_IDS } from "./type-ids";

const KNOWN_TYPE_DEFINITIONS: readonly CntcTypeDefinition[] = [
  { type: CNTC_TYPE_IDS.ACHIEVEMENTS, description: "Achievements" },
  { type: CNTC_TYPE_IDS.ACHIEVEMENT_CATEGORIES, description: "Achievement Categories" },
  { type: CNTC_TYPE_IDS.CRAFTING_RECIPES, description: "Crafting Recipes" },
  { type: CNTC_TYPE_IDS.GUILD_UPGRADES, description: "Guild Upgrades" },
  CNTC_ITEM_SCHEMA.toDefinition(),
  CNTC_MAP_SCHEMA.toDefinition(),
  { type: CNTC_TYPE_IDS.MINIPETS, description: "Minipets" },
  { type: CNTC_TYPE_IDS.OUTFITS, description: "Outfits" },
  { type: CNTC_TYPE_IDS.SKILLS, description: "Skills" },
  CNTC_SKIN_SCHEMA.toDefinition(),
  { type: CNTC_TYPE_IDS.WVW_RANK_DEFINITIONS, description: "WvW Rank Definitions" },
  { type: CNTC_TYPE_IDS.ANIMATION_LISTENERS, description: "Animation Listeners" },
  { type: CNTC_TYPE_IDS.ANIMATION_BLEND_TREES, description: "Animation Blend Trees" },
  { type: CNTC_TYPE_IDS.CONFIGURATIONS, description: "Configurations" },
  { type: CNTC_TYPE_IDS.CONTENT_ACCESS_GROUPS, description: "Content Access Groups" },
  { type: CNTC_TYPE_IDS.DAY_NIGHT_CYCLES, description: "Day/Night Cycles" },
  { type: CNTC_TYPE_IDS.DYNAMIC_CAMERAS, description: "Dynamic Cameras" },
  { type: CNTC_TYPE_IDS.DYNAMIC_CAMERA_TRANSITIONS, description: "Dynamic Camera Transitions" },
  { type: CNTC_TYPE_IDS.EFFECTS, description: "Effects" },
  { type: CNTC_TYPE_IDS.ITEM_CONVERSION_ARRAYS, description: "Item Conversion Arrays" },
  { type: CNTC_TYPE_IDS.ITEM_CRESTS, description: "Item Crests" },
  { type: CNTC_TYPE_IDS.ITEM_DEFAULTS, description: "Item Defaults" },
  { type: CNTC_TYPE_IDS.MARKERS, description: "Markers" },
  { type: CNTC_TYPE_IDS.MOVEMENT_MODIFIERS, description: "Movement Modifiers" },
  { type: CNTC_TYPE_IDS.MOVEMENT_SETTINGS, description: "Movement Settings" },
  { type: CNTC_TYPE_IDS.RANDOM_UNLOCK_TABLES, description: "Random Unlock Tables" },
  { type: CNTC_TYPE_IDS.REWARDS, description: "Rewards" },
  { type: CNTC_TYPE_IDS.REWARD_TRACKS, description: "Reward Tracks" },
  { type: CNTC_TYPE_IDS.TERRAIN_EFFECT_TABLES, description: "Terrain Effect Tables" },
  { type: CNTC_TYPE_IDS.TERRAIN_DECAL_TABLES, description: "Terrain Decal Tables" },
  { type: CNTC_TYPE_IDS.INTEGERS, description: "Integers" },
  { type: CNTC_TYPE_IDS.NUMBERS, description: "Numbers" },
];

export const CNTC_TYPE_DEFINITIONS = Object.fromEntries(
  KNOWN_TYPE_DEFINITIONS.map((definition) => [definition.type, definition])
) as Record<number, CntcTypeDefinition>;

export const CNTC_TYPE_DESCRIPTIONS = Object.fromEntries(
  KNOWN_TYPE_DEFINITIONS.map((definition) => [definition.type, definition.description])
) as Record<number, string>;

function matchesAssetReference(definition: CntcAssetReferenceDefinition, offset: number): boolean {
  if ("offset" in definition) return definition.offset === offset;
  if ("offsets" in definition) return definition.offsets.includes(offset);
  return offset >= definition.start && (offset - definition.start) % definition.stride === 0;
}

export function getCntcTypeDefinition(type: number): CntcTypeDefinition | undefined {
  return CNTC_TYPE_DEFINITIONS[type];
}

export function getCntcTypeDescription(type: number): string {
  return getCntcTypeDefinition(type)?.description ?? "";
}

export function getCntcDataIdLabel(type: number): string {
  return getCntcTypeDefinition(type)?.dataIdLabel ?? "id";
}

export function getCntcDataIdCaption(type: number): string {
  return getCntcTypeDefinition(type)?.dataIdCaption ?? "data id";
}

export function getCntcFieldDefinitions(type: number): readonly CntcFieldDefinition[] {
  return getCntcTypeDefinition(type)?.fields ?? [];
}

export function getCntcFieldDefinition(type: number, key: string): CntcFieldDefinition | undefined {
  return [...BASE_FIELD_DEFINITIONS, ...getCntcFieldDefinitions(type)].find((field) => field.key === key);
}

export function getCntcReferenceDefinitions(type: number): readonly CntcReferenceDefinition[] {
  return getCntcTypeDefinition(type)?.references ?? [];
}

export function getCntcAssetReferenceLabel(type: number, offset: number): string {
  const definition = getCntcTypeDefinition(type);
  const assetReference = definition?.assetReferences?.find((candidate) => matchesAssetReference(candidate, offset));
  const hex = `@0x${offset.toString(16).toUpperCase()}`;
  return assetReference ? `${assetReference.label} ${hex}` : `file ref ${hex}`;
}

export function getCntcEntrySummaryCaption(type: number): string {
  const definition = getCntcTypeDefinition(type);
  if (definition?.summaryCaption) return definition.summaryCaption;
  if (!definition?.summaryFieldKey) return "";
  const field = getCntcFieldDefinition(type, definition.summaryFieldKey);
  return field && typeof field.label === "string" ? field.label : "";
}

export function getCntcEntrySummaryField(type: number): CntcFieldDefinition | undefined {
  const definition = getCntcTypeDefinition(type);
  return definition?.summaryFieldKey ? getCntcFieldDefinition(type, definition.summaryFieldKey) : undefined;
}

export function getCntcEntrySummaryValue(entry: CntcEntry): string {
  const field = getCntcEntrySummaryField(entry.type);
  if (!field) return "";
  const value = readBaseCntcFieldValue(entry, field);
  return value == null ? "" : String(value);
}
