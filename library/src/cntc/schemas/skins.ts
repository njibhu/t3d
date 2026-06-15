import { assetReference, CntcTypeSchema } from "../schema";
import { CNTC_TYPE_IDS } from "./type-ids";

class CntcSkinSchema extends CntcTypeSchema {
  readonly type = CNTC_TYPE_IDS.SKINS;
  readonly description = "Skins";

  constructor() {
    super();

    this.addAssetReference(assetReference("model", 48), assetReference("icon", 88), assetReference("model", 192, 32));
  }
}

export const CNTC_SKIN_SCHEMA = new CntcSkinSchema();
