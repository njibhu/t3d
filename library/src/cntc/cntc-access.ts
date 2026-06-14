import { type CntcEntry, getCntcEntryUniqueId, readUint32LE } from "./cntc-content";

/** External reference from a map (type 45) to a content-access entry/group (`@0x1F8`). */
export const CNTC_MAP_CONTENT_ACCESS_REFERENCE_OFFSET = 504;
/** Type-151 product/access ordinal (`@0x4C`). */
export const CNTC_CONTENT_ACCESS_PRODUCT_ORDINAL_OFFSET = 76;
/** Type-151 localized text-system key (`@0x50`). */
export const CNTC_CONTENT_ACCESS_TEXT_KEY_OFFSET = 80;
/** Type-152 member table start (`@0x48`). Each slot is an 8-byte pair whose first u32 is a same-file entry offset. */
export const CNTC_CONTENT_ACCESS_GROUP_MEMBERS_OFFSET = 72;
/** Type-152 member table stride. */
export const CNTC_CONTENT_ACCESS_GROUP_MEMBER_STRIDE = 8;

export interface CntcContentAccessInfo {
  name: string;
  /** How directly the name is established from current reverse-engineering evidence. */
  confidence: "verified" | "dominant" | "tentative";
  /** Short note for mixed or incomplete buckets. */
  notes?: string;
}

export interface CntcContentAccessGroupMemberSlot {
  offset: number;
  value: number;
}

const CNTC_CONTENT_ACCESS_INFO_BY_UID = new Map<number, CntcContentAccessInfo>([
  [
    2,
    {
      name: "Core / baseline access",
      confidence: "tentative",
      notes: "Backed by the ordinal sequence, but no direct map-side targets are known in this build.",
    },
  ],
  [
    4,
    {
      name: "Heart of Thorns / Path of Fire era",
      confidence: "dominant",
      notes:
        "Direct map-side targets include Path of Fire, Living World Season 4, and Icebrood Saga maps. Heart of Thorns-era maps often omit the 0x1F8 reference in this build.",
    },
  ],
  [9, { name: "End of Dragons", confidence: "verified" }],
  [11, { name: "Secrets of the Obscure", confidence: "verified" }],
  [10, { name: "Janthir Wilds", confidence: "verified" }],
  [6, { name: "Visions of Eternity", confidence: "verified" }],
]);

const CNTC_CONTENT_ACCESS_INFO_BY_ORDINAL = new Map<number, CntcContentAccessInfo>([
  [1, { name: "Core / baseline access", confidence: "tentative" }],
  [2, { name: "Heart of Thorns / Path of Fire era", confidence: "dominant" }],
  [3, { name: "End of Dragons", confidence: "verified" }],
  [4, { name: "Secrets of the Obscure", confidence: "verified" }],
  [5, { name: "Janthir Wilds", confidence: "verified" }],
  [6, { name: "Visions of Eternity", confidence: "verified" }],
]);

const CNTC_CONTENT_ACCESS_GROUP_INFO_BY_UID = new Map<number, CntcContentAccessInfo>([
  [
    9,
    {
      name: "Path of Fire",
      confidence: "verified",
      notes: "Direct map-side targets include Crystal Oasis and Sparking the Flame.",
    },
  ],
]);

/** Wiki-backed display label for a type-151 access entry's unique id, or `null` if unknown. */
export function getCntcContentAccessInfo(accessUid: number | null): CntcContentAccessInfo | null {
  if (accessUid == null) {
    return null;
  }
  return CNTC_CONTENT_ACCESS_INFO_BY_UID.get(accessUid) ?? null;
}

/** Wiki-backed display label for a type-152 access group's unique id, or `null` if unknown. */
export function getCntcContentAccessGroupInfo(groupUid: number | null): CntcContentAccessInfo | null {
  if (groupUid == null) {
    return null;
  }
  return CNTC_CONTENT_ACCESS_GROUP_INFO_BY_UID.get(groupUid) ?? null;
}

/** Wiki-backed display label for a type-151 access entry's ordinal field, or `null` if unknown. */
export function getCntcContentAccessInfoForOrdinal(ordinal: number | null): CntcContentAccessInfo | null {
  if (ordinal == null) {
    return null;
  }
  return CNTC_CONTENT_ACCESS_INFO_BY_ORDINAL.get(ordinal) ?? null;
}

/** Type-151 ordinal that tracks the modern access-product sequence. */
export function getCntcContentAccessProductOrdinal(entry: CntcEntry): number | null {
  if (entry.type !== 151) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_CONTENT_ACCESS_PRODUCT_ORDINAL_OFFSET);
}

/** Same-file member offsets carried by a type-152 access-group entry. */
export function getCntcContentAccessGroupMemberSlots(entry: CntcEntry): CntcContentAccessGroupMemberSlot[] {
  if (entry.type !== 152) {
    return [];
  }

  const members: CntcContentAccessGroupMemberSlot[] = [];
  for (
    let offset = CNTC_CONTENT_ACCESS_GROUP_MEMBERS_OFFSET;
    offset + 4 <= entry.size;
    offset += CNTC_CONTENT_ACCESS_GROUP_MEMBER_STRIDE
  ) {
    const value = readUint32LE(entry.contentSlice, offset);
    if (value == null || value === 0) {
      continue;
    }
    members.push({ offset, value });
  }
  return members;
}

/** Resolved display info for either a type-151 access entry or a type-152 group entry. */
export function getCntcContentAccessInfoForEntry(entry: CntcEntry): CntcContentAccessInfo | null {
  if (entry.type === 151) {
    const byUid = getCntcContentAccessInfo(getCntcEntryUniqueId(entry));
    if (byUid) {
      return byUid;
    }
    return getCntcContentAccessInfoForOrdinal(getCntcContentAccessProductOrdinal(entry));
  }

  if (entry.type === 152) {
    return getCntcContentAccessGroupInfo(getCntcEntryUniqueId(entry));
  }

  return null;
}
