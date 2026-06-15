import type { CntcEntry } from "./content";
import { getCntcFieldDefinitions, getCntcTypeDefinition } from "./definitions";
import { BASE_FIELD_DEFINITIONS, formatCntcFieldLabel, readBaseCntcFieldValue } from "./schema";

export interface CntcField {
  label: string;
  offset?: number;
  length?: number;
  value: string | number | null;
  experimental?: boolean;
}

export function describeCntcEntry(entry: CntcEntry): CntcField[] {
  const typeDefinition = getCntcTypeDefinition(entry.type);
  const fieldDefinitions = [...BASE_FIELD_DEFINITIONS, ...getCntcFieldDefinitions(entry.type)].filter(
    (definition) => !definition.includeWhen || definition.includeWhen(entry)
  );

  return fieldDefinitions.map((definition) => {
    const label = typeof definition.label === "function" ? definition.label(entry, typeDefinition) : definition.label;
    return {
      label: formatCntcFieldLabel(label, definition.offset),
      offset: definition.offset,
      length: definition.length,
      value: readBaseCntcFieldValue(entry, definition),
      experimental: definition.experimental,
    };
  });
}
