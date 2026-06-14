import { type CntcEntry, readUint32LE } from "../content";
import { type CntcFieldDefinition, type CntcTypeDefinition, uint32Field } from "../schema";
import { CNTC_TYPE_IDS } from "./type-ids";

export const CNTC_MAP_DATA_FILEREF_OFFSET = 104;
export const CNTC_MAP_NAME_STRING_OFFSET = 176;
export const CNTC_MAP_REGION_STRING_OFFSET = 272;

const MAP_FIELD_DEFINITIONS: readonly CntcFieldDefinition[] = [
  uint32Field("mapDataFileRefIndex", "map data file ref @0x68", CNTC_MAP_DATA_FILEREF_OFFSET),
  uint32Field("mapNameStringIndex", "codename string index @0xB0", CNTC_MAP_NAME_STRING_OFFSET),
  uint32Field("mapRegionStringIndex", "region string index @0x110", CNTC_MAP_REGION_STRING_OFFSET),
];

export const CNTC_MAP_DEFINITION: CntcTypeDefinition = {
  type: CNTC_TYPE_IDS.MAPS,
  description: "Maps",
  dataIdLabel: "map id @0x28",
  dataIdCaption: "map id",
  fields: MAP_FIELD_DEFINITIONS,
  references: [
    { key: "mapName", kind: "mapName", label: "codename @0xB0", offset: CNTC_MAP_NAME_STRING_OFFSET, length: 4 },
    { key: "mapRegion", kind: "mapRegion", label: "region @0x110", offset: CNTC_MAP_REGION_STRING_OFFSET, length: 4 },
  ],
  assetReferences: [
    { label: "map data", offset: CNTC_MAP_DATA_FILEREF_OFFSET },
    { label: "portal", offset: 96 },
    { label: "image", offsets: [88, 120] },
    { label: "audio", offsets: [56, 64, 72, 80] },
  ],
};

export function getCntcMapDataFileRefIndex(entry: CntcEntry): number | null {
  if (entry.type !== CNTC_TYPE_IDS.MAPS) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_MAP_DATA_FILEREF_OFFSET);
}

export function getCntcMapNameIndex(entry: CntcEntry): number | null {
  if (entry.type !== CNTC_TYPE_IDS.MAPS) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_MAP_NAME_STRING_OFFSET);
}

export function getCntcMapRegionIndex(entry: CntcEntry): number | null {
  if (entry.type !== CNTC_TYPE_IDS.MAPS) {
    return null;
  }
  return readUint32LE(entry.contentSlice, CNTC_MAP_REGION_STRING_OFFSET);
}
