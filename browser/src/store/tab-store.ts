/// Persisted in sessionStorage so refresh restores open tabs by fileId.
const SS_KEY = "t3d-browser:tabs";

export interface PersistedTabs {
  openIds: number[];
  activeId: number | null;
}

export function loadTabs(): PersistedTabs {
  try {
    const raw = sessionStorage.getItem(SS_KEY);
    if (!raw) return { openIds: [], activeId: null };
    const parsed = JSON.parse(raw) as PersistedTabs;
    if (!parsed || !Array.isArray(parsed.openIds)) return { openIds: [], activeId: null };
    return parsed;
  } catch {
    return { openIds: [], activeId: null };
  }
}

export function saveTabs(tabs: PersistedTabs): void {
  try {
    sessionStorage.setItem(SS_KEY, JSON.stringify(tabs));
  } catch {
    /* quota or disabled — fine */
  }
}
