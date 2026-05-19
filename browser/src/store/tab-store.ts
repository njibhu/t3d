/**
 * Local persistence keys and accessors for the browser UI. Centralised so
 * key collisions / typos / drift are caught at one place. The tabs payload
 * lives in sessionStorage (per-tab UX state); pane sizes and the theme
 * choice are in localStorage (account-level preferences).
 */

const TABS_KEY = "t3d-browser:tabs";

export const PERSIST_KEYS = {
  theme: "t3d-browser:theme",
  leftPaneWidth: "t3d-browser:leftPaneW",
  sidebarHeight: "t3d-browser:sidebarH",
} as const;

export interface PersistedTabs {
  openIds: number[];
  activeId: number | null;
}

export function loadTabs(): PersistedTabs {
  try {
    const raw = sessionStorage.getItem(TABS_KEY);
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
    sessionStorage.setItem(TABS_KEY, JSON.stringify(tabs));
  } catch {
    // Quota or disabled - fine.
  }
}
