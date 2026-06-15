import type { CntcEntry } from "./content";
import {
  BASE_FIELD_DEFINITIONS,
  readBaseCntcFieldValue,
  type CntcAssetReferenceDefinition,
  type CntcFieldDefinition,
  type CntcReferenceDefinition,
  type CntcTypeDefinition,
} from "./schema";
import { CNTC_TYPE_IDS, KNOWN_TYPE_DEFINITIONS } from "./schemas/registry";

type CntcKnownTypeDefinition = (typeof KNOWN_TYPE_DEFINITIONS)[number];
type CntcKnownTypeId = CntcKnownTypeDefinition["type"];
type CntcDefinitionForType<T extends CntcKnownTypeId> = Extract<CntcKnownTypeDefinition, { readonly type: T }>;

export const CNTC_TYPE_DEFINITIONS = Object.fromEntries(
  KNOWN_TYPE_DEFINITIONS.map((definition) => [definition.type, definition])
) as Record<number, CntcTypeDefinition>;

export const CNTC_TYPE_DESCRIPTIONS = Object.fromEntries(
  KNOWN_TYPE_DEFINITIONS.map((definition) => [definition.type, definition.description])
) as Record<number, string>;

function matchesAssetReference(definition: CntcAssetReferenceDefinition, offset: number): boolean {
  if ("offset" in definition) return definition.offset === offset;
  if ("offsets" in definition) return definition.offsets.includes(offset);
  return offset >= definition.start && (offset - definition.start) % definition.stride === 0;
}

export { CNTC_TYPE_IDS };

export function getCntcTypeDefinition<T extends CntcKnownTypeId>(type: T): CntcDefinitionForType<T>;
export function getCntcTypeDefinition(type: number): CntcTypeDefinition | undefined;
export function getCntcTypeDefinition(type: number): CntcTypeDefinition | undefined {
  return CNTC_TYPE_DEFINITIONS[type];
}

export function getCntcTypeDescription(type: number): string {
  return getCntcTypeDefinition(type)?.description ?? "";
}

export function getCntcDataIdLabel(type: number): string {
  return getCntcTypeDefinition(type)?.dataIdLabel ?? "id";
}

export function getCntcDataIdCaption(type: number): string {
  return getCntcTypeDefinition(type)?.dataIdCaption ?? "data id";
}

export function getCntcFieldDefinitions(type: number): readonly CntcFieldDefinition[] {
  return getCntcTypeDefinition(type)?.fields ?? [];
}

export function getCntcFieldDefinition(type: number, key: string): CntcFieldDefinition | undefined {
  return [...BASE_FIELD_DEFINITIONS, ...getCntcFieldDefinitions(type)].find((field) => field.key === key);
}

export function getCntcReferenceDefinitions(type: number): readonly CntcReferenceDefinition[] {
  return getCntcTypeDefinition(type)?.references ?? [];
}

export function getCntcAssetReferenceLabel(type: number, offset: number): string {
  const definition = getCntcTypeDefinition(type);
  const assetReference = definition?.assetReferences.find((candidate) => matchesAssetReference(candidate, offset));
  const hex = `@0x${offset.toString(16).toUpperCase()}`;
  return assetReference ? `${assetReference.label} ${hex}` : `file ref ${hex}`;
}

export function getCntcEntrySummaryCaption(type: number): string {
  const definition = getCntcTypeDefinition(type);
  if (definition?.summaryCaption) return definition.summaryCaption;
  if (!definition?.summaryFieldKey) return "";
  const field = getCntcFieldDefinition(type, definition.summaryFieldKey);
  return field && typeof field.label === "string" ? field.label : "";
}

export function getCntcEntrySummaryField(type: number): CntcFieldDefinition | undefined {
  const definition = getCntcTypeDefinition(type);
  return definition?.summaryFieldKey ? getCntcFieldDefinition(type, definition.summaryFieldKey) : undefined;
}

export function getCntcEntrySummaryValue(entry: CntcEntry): string {
  const field = getCntcEntrySummaryField(entry.type);
  if (!field) return "";
  const value = readBaseCntcFieldValue(entry, field);
  return value == null ? "" : String(value);
}
