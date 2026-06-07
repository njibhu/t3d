/**
 * Human-readable descriptions for known `cntc` content type ids. These are the
 * type ids carried by {@link CntcEntry.type} / `PackContentIndexEntry.type`.
 * Only well-identified types are listed; unknown types render with an empty
 * description.
 */
export const CNTC_TYPE_DESCRIPTIONS: Record<number, string> = {
  0: "Achievements",
  1: "Achievement Categories",
  12: "Crafting Recipes",
  27: "Guild Upgrades",
  35: "Items",
  45: "Maps",
  48: "Minipets",
  51: "Outfits",
  64: "Skills",
  66: "Skins",
  85: "WvW Rank Definitions",
  99: "Animation Listeners",
  100: "Animation Blend Trees",
  149: "Configurations",
  152: "Content Access Groups",
  167: "Day/Night Cycles",
  179: "Dynamic Cameras",
  180: "Dynamic Camera Transitions",
  182: "Effects",
  236: "Item Conversion Arrays",
  237: "Item Crests",
  238: "Item Defaults",
  292: "Markers",
  302: "Movement Modifiers",
  304: "Movement Settings",
  348: "Random Unlock Tables",
  349: "Rewards",
  352: "Reward Tracks",
  401: "Terrain Effect Tables",
  402: "Terrain Decal Tables",
  433: "Integers",
  436: "Numbers",
};

/** Returns the known description for a type id, or `""` when unidentified. */
export function getCntcTypeDescription(type: number): string {
  return CNTC_TYPE_DESCRIPTIONS[type] ?? "";
}
