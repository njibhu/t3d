import type { CntcEntry } from "../content";
import { assetReference, CntcTypeSchema } from "../schema";
import { CNTC_TYPE_IDS } from "./type-ids";

class CntcMapSchema extends CntcTypeSchema {
  readonly type = CNTC_TYPE_IDS.MAPS;
  readonly description = "Maps";

  readonly mapId = this.dataId("map id");
  readonly mapData = this.uint32("mapDataFileRefIndex", "map data file ref", 104);
  readonly codename = this.uint32("mapNameStringIndex", "codename string index", 176);
  readonly region = this.uint32("mapRegionStringIndex", "region string index", 272);

  constructor() {
    super();

    this.addReference(
      this.codename.reference("mapName", "string", "codename"),
      this.region.reference("mapRegion", "string", "region")
    );
    this.addAssetReference(
      this.mapData.assetReference("map data"),
      assetReference("portal", 96),
      assetReference("image", [88, 120]),
      assetReference("audio", [56, 64, 72, 80])
    );
  }

  getDataFileRefIndex(entry: CntcEntry): number | null {
    if (entry.type !== CNTC_TYPE_IDS.MAPS) {
      return null;
    }
    return this.mapData.read(entry);
  }

  getNameIndex(entry: CntcEntry): number | null {
    if (entry.type !== CNTC_TYPE_IDS.MAPS) {
      return null;
    }
    return this.codename.read(entry);
  }

  getRegionIndex(entry: CntcEntry): number | null {
    if (entry.type !== CNTC_TYPE_IDS.MAPS) {
      return null;
    }
    return this.region.read(entry);
  }
}

export const CNTC_MAP_SCHEMA = new CntcMapSchema();
