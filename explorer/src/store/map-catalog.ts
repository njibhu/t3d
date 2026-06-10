import type { ComboboxOption, MapDefinition } from "../types.js";
import { resolveCategoryDisplay } from "./category-logos.js";

export function buildCategoryOptions(maps: MapDefinition[]): ComboboxOption[] {
  const categories = new Map<string, { label: string; count: number; index: number }>();
  for (const map of maps) {
    const existing = categories.get(map.category);
    if (existing) {
      existing.count += 1;
      existing.index = Math.min(existing.index, map.categoryIndex);
    } else {
      categories.set(map.category, { label: map.category, count: 1, index: map.categoryIndex });
    }
  }

  return [...categories.entries()]
    .sort((a, b) => a[1].index - b[1].index || a[1].label.localeCompare(b[1].label))
    .map(([id, meta]) => {
      const { icon, label } = resolveCategoryDisplay(meta.label);
      return {
        id,
        label,
        icon: icon ?? undefined,
        meta: `${meta.count} map${meta.count === 1 ? "" : "s"}`,
        // Keep the original name (with its (X#)/(LW#) code) searchable even though it's hidden.
        keywords: [label, meta.label],
      };
    });
}

export function buildMapOptions(maps: MapDefinition[], category: string | null): ComboboxOption[] {
  return maps
    .filter((map) => category == null || map.category === category)
    .sort((a, b) => a.name.localeCompare(b.name) || a.baseId - b.baseId)
    .map((map) => ({
      id: String(map.baseId),
      label: map.name,
      meta: `${map.baseId}`,
      keywords: [map.name, map.category, String(map.baseId)],
    }));
}

export function filterComboboxOptions(options: ComboboxOption[], query: string): ComboboxOption[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return options;

  return options.filter((option) => {
    const haystacks = [option.label, option.meta ?? "", ...(option.keywords ?? [])];
    return haystacks.some((value) => value.toLowerCase().includes(needle));
  });
}
