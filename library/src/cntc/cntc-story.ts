import { type CntcEntry, readUint32LE } from "./cntc-content";

/** Type-388 season order field (`@0x34`), matching the public Story Journal ordering. */
export const CNTC_STORY_SEASON_ORDER_OFFSET = 52;
/** Type-388 representative-story link (`@0x48`), usually a type-68 story entry. */
export const CNTC_STORY_SEASON_STORY_REFERENCE_OFFSET = 72;
/** Type-388 next-season link (`@0x50`), chaining seasons in Story Journal order. */
export const CNTC_STORY_SEASON_NEXT_REFERENCE_OFFSET = 80;
/** Type-388 localized text-system key (`@0x58`). */
export const CNTC_STORY_SEASON_TEXT_KEY_OFFSET = 88;
/** Type-68 story text key sits 32 bytes before the end of the entry across observed sizes. */
export const CNTC_STORY_TEXT_KEY_TAIL_DISTANCE = 32;

export interface CntcStorySeasonInfo {
  name: string;
  order: number;
  confidence: "verified";
}

export interface CntcStoryInfo {
  storyId: number;
  visibility: "public-api" | "cntc-only";
}

const CNTC_STORY_SEASONS = [
  { name: "My Story", order: 1 },
  { name: "Living World Season 1", order: 2 },
  { name: "Living World Season 2", order: 3 },
  { name: "Heart of Thorns", order: 4 },
  { name: "Living World Season 3", order: 5 },
  { name: "Path of Fire", order: 6 },
  { name: "Living World Season 4", order: 7 },
  { name: "The Icebrood Saga", order: 11 },
  { name: "End of Dragons", order: 12 },
  { name: "Secrets of the Obscure", order: 21 },
  { name: "Janthir Wilds", order: 22 },
  { name: "Visions of Eternity", order: 23 },
  { name: "Scarlet's War", order: 100 },
] as const satisfies readonly { name: string; order: number }[];

const CNTC_STORY_SEASON_INFO_BY_ORDER = new Map<number, CntcStorySeasonInfo>(
  CNTC_STORY_SEASONS.map((season) => [season.order, { ...season, confidence: "verified" }])
);

const CNTC_PUBLIC_STORY_IDS = new Set<number>([
  1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 31, 32, 33, 34, 35, 36,
  41, 42, 46, 56, 63, 64, 65, 66, 67, 68, 69, 71, 72, 75, 76, 78, 79, 80, 81, 82, 83, 85, 86, 87, 88, 89, 90, 91,
  93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
  117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 138, 139,
  140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161,
  162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 178, 179,
]);

/** Decoded Story Journal order for a type-388 season entry, or `null` otherwise. */
export function getCntcStorySeasonOrder(entry: CntcEntry): number | null {
  if (entry.type !== 388) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_STORY_SEASON_ORDER_OFFSET);
}

/** Verified season label for a Story Journal order value, or `null` if unknown. */
export function getCntcStorySeasonInfo(order: number | null): CntcStorySeasonInfo | null {
  if (order == null) {
    return null;
  }
  return CNTC_STORY_SEASON_INFO_BY_ORDER.get(order) ?? null;
}

/** Convenience helper for type-388 callers. */
export function getCntcStorySeasonInfoForEntry(entry: CntcEntry): CntcStorySeasonInfo | null {
  return getCntcStorySeasonInfo(getCntcStorySeasonOrder(entry));
}

/** Public-API visibility for a type-68 story id, or `null` if no id is given. */
export function getCntcStoryInfo(storyId: number | null): CntcStoryInfo | null {
  if (storyId == null) {
    return null;
  }
  return {
    storyId,
    visibility: CNTC_PUBLIC_STORY_IDS.has(storyId) ? "public-api" : "cntc-only",
  };
}

/** Heuristic story text-key offset for type-68 story entries, or `null` when inapplicable. */
export function getCntcStoryTextKeyOffset(entry: CntcEntry): number | null {
  if (entry.type !== 68 || entry.size < CNTC_STORY_TEXT_KEY_TAIL_DISTANCE) {
    return null;
  }
  return entry.size - CNTC_STORY_TEXT_KEY_TAIL_DISTANCE;
}
