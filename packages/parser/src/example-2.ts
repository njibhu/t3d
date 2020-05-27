import * as AMSPTypes from "../declarations/AMSP_2281648";
import { latest as AMSPDef, latest } from "../definitions/AMSP_2281648";
import { registerDefinitions } from "./custom-types";

registerDefinitions(latest);

function parseAMSP(binaryChunk: Buffer): AMSPTypes.ScriptFileDataV29 {
  // wip
}

function chunkParseFunction(definition: typeof latest) {}
