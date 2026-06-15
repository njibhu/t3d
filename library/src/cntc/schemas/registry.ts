import { CntcBaseDefinition } from "../schema";
import { CNTC_ITEM_SCHEMA } from "./items";
import { CNTC_MAP_SCHEMA } from "./maps";
import { CNTC_SKIN_SCHEMA } from "./skins";
import { CNTC_TYPE_IDS } from "./type-ids";

export { CNTC_TYPE_IDS } from "./type-ids";

export const KNOWN_TYPE_DEFINITIONS = [
  new CntcBaseDefinition("Achievements", CNTC_TYPE_IDS.ACHIEVEMENTS),
  new CntcBaseDefinition("Achievement Categories", CNTC_TYPE_IDS.ACHIEVEMENT_CATEGORIES),
  new CntcBaseDefinition("Crafting Recipes", CNTC_TYPE_IDS.CRAFTING_RECIPES),
  new CntcBaseDefinition("Guild Upgrades", CNTC_TYPE_IDS.GUILD_UPGRADES),
  CNTC_ITEM_SCHEMA,
  CNTC_MAP_SCHEMA,
  new CntcBaseDefinition("Minipets", CNTC_TYPE_IDS.MINIPETS),
  new CntcBaseDefinition("Outfits", CNTC_TYPE_IDS.OUTFITS),
  new CntcBaseDefinition("Skills", CNTC_TYPE_IDS.SKILLS),
  CNTC_SKIN_SCHEMA,
  new CntcBaseDefinition("WvW Rank Definitions", CNTC_TYPE_IDS.WVW_RANK_DEFINITIONS),
  new CntcBaseDefinition("Animation Listeners", CNTC_TYPE_IDS.ANIMATION_LISTENERS),
  new CntcBaseDefinition("Animation Blend Trees", CNTC_TYPE_IDS.ANIMATION_BLEND_TREES),
  new CntcBaseDefinition("Configurations", CNTC_TYPE_IDS.CONFIGURATIONS),
  new CntcBaseDefinition("Content Access Groups", CNTC_TYPE_IDS.CONTENT_ACCESS_GROUPS),
  new CntcBaseDefinition("Day/Night Cycles", CNTC_TYPE_IDS.DAY_NIGHT_CYCLES),
  new CntcBaseDefinition("Dynamic Cameras", CNTC_TYPE_IDS.DYNAMIC_CAMERAS),
  new CntcBaseDefinition("Dynamic Camera Transitions", CNTC_TYPE_IDS.DYNAMIC_CAMERA_TRANSITIONS),
  new CntcBaseDefinition("Effects", CNTC_TYPE_IDS.EFFECTS),
  new CntcBaseDefinition("Item Conversion Arrays", CNTC_TYPE_IDS.ITEM_CONVERSION_ARRAYS),
  new CntcBaseDefinition("Item Crests", CNTC_TYPE_IDS.ITEM_CRESTS),
  new CntcBaseDefinition("Item Defaults", CNTC_TYPE_IDS.ITEM_DEFAULTS),
  new CntcBaseDefinition("Markers", CNTC_TYPE_IDS.MARKERS),
  new CntcBaseDefinition("Movement Modifiers", CNTC_TYPE_IDS.MOVEMENT_MODIFIERS),
  new CntcBaseDefinition("Movement Settings", CNTC_TYPE_IDS.MOVEMENT_SETTINGS),
  new CntcBaseDefinition("Random Unlock Tables", CNTC_TYPE_IDS.RANDOM_UNLOCK_TABLES),
  new CntcBaseDefinition("Rewards", CNTC_TYPE_IDS.REWARDS),
  new CntcBaseDefinition("Reward Tracks", CNTC_TYPE_IDS.REWARD_TRACKS),
  new CntcBaseDefinition("Terrain Effect Tables", CNTC_TYPE_IDS.TERRAIN_EFFECT_TABLES),
  new CntcBaseDefinition("Terrain Decal Tables", CNTC_TYPE_IDS.TERRAIN_DECAL_TABLES),
  new CntcBaseDefinition("Integers", CNTC_TYPE_IDS.INTEGERS),
  new CntcBaseDefinition("Numbers", CNTC_TYPE_IDS.NUMBERS),
] as const;
