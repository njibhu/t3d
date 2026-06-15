/**
 * Public CNTC API.
 *
 * Keep this facade narrow. Schema-building helpers and registry internals are
 * intentionally imported by sibling modules directly instead of exported here.
 */
export {
  getCntcEntries,
  getCntcEntryDataId,
  getCntcEntryUniqueId,
  getCntcMainContent,
  readUint32LE,
  resolveCntcString,
} from "./content";
export type { CntcEntry, CntcMainContent } from "./content";

export {
  CNTC_TYPE_IDS,
  getCntcDataIdCaption,
  getCntcEntrySummaryCaption,
  getCntcEntrySummaryValue,
  getCntcTypeDefinition,
  getCntcTypeDescription,
} from "./definitions";

export { describeCntcEntry } from "./fields";
export type { CntcField } from "./fields";

export { CntcResolver } from "./resolver";
export type { CntcReference, CntcReferenceNavigation, CntcResolvedFile, CntcResolvedReference } from "./resolver";
