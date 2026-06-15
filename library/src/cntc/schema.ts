import {
  type CntcEntry,
  getCntcEntryDataId,
  getCntcEntryEmbeddedType,
  getCntcEntryUniqueId,
  readUint32LE,
} from "./content";

export type CntcReferenceKind = "asset" | "skin" | "string";
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
  targetType?: number;
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

export interface CntcFieldOptions {
  length?: number;
  includeWhen?: (entry: CntcEntry) => boolean;
  experimental?: boolean;
}

export interface CntcLookupFieldOptions extends CntcFieldOptions {
  includeId?: boolean;
  unknownLabel?: string;
}

export const BASE_FIELD_DEFINITIONS: readonly CntcFieldDefinition[] = [
  { key: "decodedLength", label: "decoded length", valueKind: "entrySize" },
  { key: "embeddedType", label: "embedded type", valueKind: "entryAccessor", offset: 16, length: 4 },
  { key: "uniqueId", label: "unique id", valueKind: "entryAccessor", offset: 20, length: 4 },
  {
    key: "dataId",
    label: (_entry, definition) => definition?.dataIdLabel ?? "id",
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

export class CntcFieldRef {
  readonly key: string;
  readonly label: string;
  readonly offset: number;
  private readonly valueKind: "uint32" | "lookup";
  private readonly lookup?: CntcLookupDefinition;
  private readonly options: CntcLookupFieldOptions;

  constructor(
    key: string,
    label: string,
    offset: number,
    options: CntcLookupFieldOptions & { valueKind?: "uint32" | "lookup"; lookup?: CntcLookupDefinition } = {}
  ) {
    this.key = key;
    this.label = label;
    this.offset = offset;
    this.valueKind = options.valueKind ?? "uint32";
    this.lookup = options.lookup;
    this.options = options;
  }

  read(entry: CntcEntry): number | null {
    return readUint32LE(entry.contentSlice, this.offset);
  }

  equals(expected: number): (entry: CntcEntry) => boolean {
    return (entry) => this.read(entry) === expected;
  }

  assetReference(label: string): CntcAssetReferenceDefinition {
    return { label, offset: this.offset };
  }

  reference(key: string, kind: CntcReferenceKind, label: string): CntcReferenceDefinition {
    return { key, kind, label, offset: this.offset, length: this.options.length ?? 4 };
  }

  toFieldDefinition(): CntcFieldDefinition {
    return {
      key: this.key,
      label: this.label,
      valueKind: this.valueKind,
      offset: this.offset,
      length: this.options.length ?? 4,
      lookup: this.lookup,
      includeId: this.options.includeId,
      unknownLabel: this.options.unknownLabel,
      includeWhen: this.options.includeWhen,
      experimental: this.options.experimental,
    };
  }
}

export interface CntcDataIdRef {
  readonly label: string;
}

export abstract class CntcTypeSchema {
  abstract readonly type: number;
  abstract readonly description: string;

  dataIdLabel?: string;
  dataIdCaption?: string;
  summaryCaption?: string;
  protected summaryField?: CntcFieldRef;
  protected readonly fieldRefs: CntcFieldRef[] = [];
  protected readonly referenceDefs: CntcReferenceDefinition[] = [];
  protected readonly assetReferenceDefs: CntcAssetReferenceDefinition[] = [];

  protected dataId(label: string, caption = label): CntcDataIdRef {
    this.dataIdLabel = label;
    this.dataIdCaption = caption;
    return { label };
  }

  protected uint32(key: string, label: string, offset: number, options: CntcFieldOptions = {}): CntcFieldRef {
    return this.addField(new CntcFieldRef(key, label, offset, options));
  }

  protected lookup(
    key: string,
    label: string,
    offset: number,
    lookup: CntcLookupDefinition,
    options: CntcLookupFieldOptions = {}
  ): CntcFieldRef {
    return this.addField(new CntcFieldRef(key, label, offset, { ...options, valueKind: "lookup", lookup }));
  }

  protected addReference(...references: CntcReferenceDefinition[]): void {
    this.referenceDefs.push(...references);
  }

  protected addAssetReference(...references: CntcAssetReferenceDefinition[]): void {
    this.assetReferenceDefs.push(...references);
  }

  protected setSummaryField(field: CntcFieldRef, caption?: string): void {
    this.summaryField = field;
    this.summaryCaption = caption;
  }

  toDefinition(): CntcTypeDefinition {
    return {
      type: this.type,
      description: this.description,
      dataIdLabel: this.dataIdLabel,
      dataIdCaption: this.dataIdCaption,
      summaryCaption: this.summaryCaption,
      fields: this.fieldRefs.map((field) => field.toFieldDefinition()),
      references: this.referenceDefs,
      assetReferences: this.assetReferenceDefs,
      summaryFieldKey: this.summaryField?.key,
    };
  }

  private addField(field: CntcFieldRef): CntcFieldRef {
    this.fieldRefs.push(field);
    return field;
  }
}

export function assetReference(label: string, offset: number): CntcAssetReferenceDefinition;
export function assetReference(label: string, offsets: number[]): CntcAssetReferenceDefinition;
export function assetReference(label: string, start: number, stride: number): CntcAssetReferenceDefinition;
export function assetReference(
  label: string,
  offsetOrOffsetsOrStart: number | number[],
  stride?: number
): CntcAssetReferenceDefinition {
  if (Array.isArray(offsetOrOffsetsOrStart)) return { label, offsets: offsetOrOffsetsOrStart };
  if (stride != null) return { label, start: offsetOrOffsetsOrStart, stride };
  return { label, offset: offsetOrOffsetsOrStart };
}

export function formatCntcFieldLabel(label: string, offset: number | undefined): string {
  if (offset == null) return label;
  return `${label} @0x${offset.toString(16).toUpperCase()}`;
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
