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
/** String-table index of the map's internal codename (`@0xB0`), e.g. `"ValleyArch"`. */
export const CNTC_MAP_NAME_STRING_OFFSET = 176;
/** String-table index of the map's region/world group (`@0x110`), e.g. `"Valley"`. */
export const CNTC_MAP_REGION_STRING_OFFSET = 272;

/** The map-data `fileRefs` index (`@0x68`), or `null` when not a map entry. */
export function getCntcMapDataFileRefIndex(entry: CntcEntry): number | null {
  if (entry.type !== 45) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_MAP_DATA_FILEREF_OFFSET);
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
