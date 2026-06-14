import {
  type CntcEntry,
  getCntcEntryDataId,
  getCntcEntryEmbeddedType,
  getCntcEntryUniqueId,
  readUint32LE,
} from "./content";

export type CntcReferenceKind = "asset" | "skin" | "mapName" | "mapRegion";
export type CntcLookupDefinition = Record<number, string>;

export interface CntcFieldDefinition {
  key: string;
  label: string | ((entry: CntcEntry, definition: CntcTypeDefinition | undefined) => string);
  valueKind: "entrySize" | "entryAccessor" | "uint32" | "lookup";
  offset?: number;
  length?: number;
  lookup?: CntcLookupDefinition;
  includeId?: boolean;
  unknownLabel?: string;
  includeWhen?: (entry: CntcEntry) => boolean;
  experimental?: boolean;
}

export interface CntcReferenceDefinition {
  key: string;
  kind: CntcReferenceKind;
  label: string;
  offset?: number;
  length?: number;
}

export type CntcAssetReferenceDefinition =
  | { label: string; offset: number }
  | { label: string; offsets: number[] }
  | { label: string; start: number; stride: number };

export interface CntcTypeDefinition {
  type: number;
  description: string;
  dataIdLabel?: string;
  dataIdCaption?: string;
  summaryCaption?: string;
  fields?: readonly CntcFieldDefinition[];
  references?: readonly CntcReferenceDefinition[];
  assetReferences?: readonly CntcAssetReferenceDefinition[];
  summaryFieldKey?: string;
}

interface CntcFieldOptions {
  length?: number;
  includeWhen?: (entry: CntcEntry) => boolean;
  experimental?: boolean;
}

interface CntcLookupFieldOptions extends CntcFieldOptions {
  includeId?: boolean;
  unknownLabel?: string;
}

export const BASE_FIELD_DEFINITIONS: readonly CntcFieldDefinition[] = [
  { key: "decodedLength", label: "decoded length", valueKind: "entrySize" },
  { key: "embeddedType", label: "embedded type @0x10", valueKind: "entryAccessor", offset: 16, length: 4 },
  { key: "uniqueId", label: "unique id @0x14", valueKind: "entryAccessor", offset: 20, length: 4 },
  {
    key: "dataId",
    label: (_entry, definition) => definition?.dataIdLabel ?? "id @0x28",
    valueKind: "entryAccessor",
    offset: 40,
    length: 4,
  },
];

export function whenUint32Equals(offset: number, expected: number): (entry: CntcEntry) => boolean {
  return (entry) => readUint32LE(entry.contentSlice, offset) === expected;
}

export function uint32Field(
  key: string,
  label: string,
  offset: number,
  options: CntcFieldOptions = {}
): CntcFieldDefinition {
  return {
    key,
    label,
    valueKind: "uint32",
    offset,
    length: options.length ?? 4,
    includeWhen: options.includeWhen,
    experimental: options.experimental,
  };
}

export function lookupField(
  key: string,
  label: string,
  offset: number,
  lookup: CntcLookupDefinition,
  options: CntcLookupFieldOptions = {}
): CntcFieldDefinition {
  return {
    key,
    label,
    valueKind: "lookup",
    offset,
    length: options.length ?? 4,
    lookup,
    includeId: options.includeId,
    unknownLabel: options.unknownLabel,
    includeWhen: options.includeWhen,
    experimental: options.experimental,
  };
}

export function formatCntcLookupValue(
  value: number | null,
  lookup: CntcLookupDefinition | undefined,
  options: { includeId?: boolean; unknownLabel?: string } = {}
): string | number | null {
  if (value == null) return null;
  if (!lookup) return value;
  const label = lookup[value];
  if (!label) {
    if (!options.unknownLabel) return value;
    return options.includeId ? `${options.unknownLabel} (${value})` : options.unknownLabel;
  }
  return options.includeId ? `${label} (${value})` : label;
}

export function readBaseCntcFieldValue(entry: CntcEntry, definition: CntcFieldDefinition): string | number | null {
  if (definition.includeWhen && !definition.includeWhen(entry)) {
    return null;
  }

  if (definition.valueKind === "entrySize") {
    return entry.contentSlice.length;
  }

  if (definition.valueKind === "entryAccessor") {
    if (definition.offset === 16) return getCntcEntryEmbeddedType(entry);
    if (definition.offset === 20) return getCntcEntryUniqueId(entry);
    if (definition.offset === 40) return getCntcEntryDataId(entry);
    return definition.offset == null ? null : readUint32LE(entry.contentSlice, definition.offset);
  }

  const rawValue = definition.offset == null ? null : readUint32LE(entry.contentSlice, definition.offset);
  if (definition.valueKind === "lookup") {
    return formatCntcLookupValue(rawValue, definition.lookup, {
      includeId: definition.includeId,
      unknownLabel: definition.unknownLabel,
    });
  }

  return rawValue;
}
