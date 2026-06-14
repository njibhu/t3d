import { type CntcEntry, readUint32LE } from "./cntc-content";

/**
 * Decoding for `cntc` type 45 ("Maps") entries.
 *
 * A map entry does not embed its renderable map data; it references the `mapc`
 * map-data file through the pack-wide `fileRefs` table (the same mechanism a
 * skin uses to reach its model), and carries two strings as indices into the
 * packfile's per-file `strings` table: its internal codename (e.g.
 * `"ValleyArch"` for Lion's Arch) and its region/world group (e.g. `"Valley"`).
 * All three offsets are established empirically and hold for every type-45
 * entry; the cross-file / string-table resolution itself lives in
 * {@link CntcResolver}, since it needs sibling-file data.
 *
 * The codename ↔ `mapc` relationship is one-to-one. Many map *definitions*
 * (instances, story steps, public/private variants) can share the same
 * (codename, `mapc`) pair, which is why there are far more type-45 entries than
 * distinct map-data files.
 */

/** File-ref index of the renderable map-data (`mapc`) file (`@0x68`). */
export const CNTC_MAP_DATA_FILEREF_OFFSET = 104;
/** The map-type enum (`@0x2C`); used in the verified region/continent fallback rules. */
export const CNTC_MAP_TYPE_OFFSET = 44;
/** String-table index of the map's internal codename (`@0xB0`), e.g. `"ValleyArch"`. */
export const CNTC_MAP_NAME_STRING_OFFSET = 176;
/** String-table index of the map's region/world group (`@0x110`), e.g. `"Valley"`. */
export const CNTC_MAP_REGION_STRING_OFFSET = 272;
/** External reference from a map (type 45) to its region carrier (type 60) (`@0x108`). */
export const CNTC_MAP_REGION_REFERENCE_OFFSET = 264;
/** External reference from a region carrier (type 60) to its continent carrier (type 11) (`@0x68`). */
export const CNTC_REGION_CONTINENT_REFERENCE_OFFSET = 104;

export interface CntcMapLocationInfo {
  regionId: number;
  regionName: string;
  continentId: number;
  continentName: string;
}

const CNTC_MAP_REGION_NAMES: Record<number, string> = {
  1: "Shiverpeak Mountains",
  2: "Ascalon",
  3: "Ruins of Orr",
  4: "Kryta",
  5: "Tarnished Coast",
  6: "Player vs. Player",
  7: "World vs. World",
  9: "Sea of Sorrows",
  10: "Heart of Maguuma",
  11: "Maguuma Wastes",
  12: "Crystal Desert",
  18: "Janthir",
  20: "Ring of Fire",
  25: "Mad King's Realm",
  26: "Fractals of the Mists",
  27: "Wintersday Celebration",
  28: "Molten Furnace",
  29: "Super Adventure Box",
  37: "Cantha",
  48: "Horn of Maguuma",
  50: "",
  58: "Castora",
};

const CNTC_MAP_CONTINENT_NAMES: Record<number, string> = {
  1: "Tyria",
  2: "Mists",
};

const CNTC_MAP_LOCATION_FALLBACKS = new Map<string, CntcMapLocationInfo>([
  ["Alpine|4", { regionId: 1, regionName: "Shiverpeak Mountains", continentId: 1, continentName: "Tyria" }],
  ["Arid|4", { regionId: 11, regionName: "Maguuma Wastes", continentId: 1, continentName: "Tyria" }],
  ["Event|4", { regionId: 29, regionName: "Super Adventure Box", continentId: 2, continentName: "Mists" }],
  ["Event|5", { regionId: 29, regionName: "Super Adventure Box", continentId: 2, continentName: "Mists" }],
  ["Regrown|4", { regionId: 2, regionName: "Ascalon", continentId: 1, continentName: "Tyria" }],
  ["Regrown|5", { regionId: 2, regionName: "Ascalon", continentId: 1, continentName: "Tyria" }],
  ["Regrown|16", { regionId: 2, regionName: "Ascalon", continentId: 1, continentName: "Tyria" }],
  ["SAB|4", { regionId: 29, regionName: "Super Adventure Box", continentId: 2, continentName: "Mists" }],
  ["Sky|4", { regionId: 50, regionName: "", continentId: 2, continentName: "Mists" }],
  ["Sky|5", { regionId: 48, regionName: "Horn of Maguuma", continentId: 1, continentName: "Tyria" }],
  ["Sky|16", { regionId: 50, regionName: "", continentId: 2, continentName: "Mists" }],
  ["Valley|4", { regionId: 4, regionName: "Kryta", continentId: 1, continentName: "Tyria" }],
  ["Valley|5", { regionId: 4, regionName: "Kryta", continentId: 1, continentName: "Tyria" }],
  ["Wetland|4", { regionId: 5, regionName: "Tarnished Coast", continentId: 1, continentName: "Tyria" }],
]);

/** The map-data `fileRefs` index (`@0x68`), or `null` when not a map entry. */
export function getCntcMapDataFileRefIndex(entry: CntcEntry): number | null {
  if (entry.type !== 45) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_MAP_DATA_FILEREF_OFFSET);
}

/** The map-type enum (`@0x2C`), or `null` when not a map entry. */
export function getCntcMapTypeValue(entry: CntcEntry): number | null {
  if (entry.type !== 45) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_MAP_TYPE_OFFSET);
}

/** The codename `strings` index (`@0xB0`), or `null` when not a map entry. */
export function getCntcMapNameIndex(entry: CntcEntry): number | null {
  if (entry.type !== 45) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_MAP_NAME_STRING_OFFSET);
}

/** The region/world `strings` index (`@0x110`), or `null` when not a map entry. */
export function getCntcMapRegionIndex(entry: CntcEntry): number | null {
  if (entry.type !== 45) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_MAP_REGION_STRING_OFFSET);
}

/** Verified public region name for a recovered `region_id`, or `null` if unknown. */
export function getCntcMapRegionName(regionId: number | null): string | null {
  if (regionId == null) {
    return null;
  }
  return Object.prototype.hasOwnProperty.call(CNTC_MAP_REGION_NAMES, regionId) ? CNTC_MAP_REGION_NAMES[regionId] : null;
}

/** Verified public continent name for a recovered `continent_id`, or `null` if unknown. */
export function getCntcMapContinentName(continentId: number | null): string | null {
  if (continentId == null) {
    return null;
  }
  return Object.prototype.hasOwnProperty.call(CNTC_MAP_CONTINENT_NAMES, continentId)
    ? CNTC_MAP_CONTINENT_NAMES[continentId]
    : null;
}

/**
 * Exact fallback for the small no-type60 bucket: `(regionGroup @0x110, mapType
 * @0x2C)` uniquely determines the public region/continent values in this build.
 */
export function getCntcMapLocationFallback(
  regionGroup: string | null,
  mapTypeValue: number | null
): CntcMapLocationInfo | null {
  if (regionGroup == null || mapTypeValue == null) {
    return null;
  }
  return CNTC_MAP_LOCATION_FALLBACKS.get(`${regionGroup}|${mapTypeValue}`) ?? null;
}
