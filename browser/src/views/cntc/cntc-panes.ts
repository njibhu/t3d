import { wireSplitter } from "../../components/splitter";

/**
 * Inserts two drag handles between the three CNTC panes (Types | Entries |
 * Inspector) and wires them so the first two columns are resizable, with the
 * inspector taking the remaining space. Shared by the per-file view and the
 * archive-wide table so both behave (and persist widths) identically.
 *
 * The container's grid template must consume `--cntc-types-w` and
 * `--cntc-entries-w` for its first and third tracks (see `.cntc-view` in the
 * stylesheet).
 */

const PERSIST = {
  typesWidth: "t3d-browser:cntcTypesW",
  entriesWidth: "t3d-browser:cntcEntriesW",
} as const;

const clampTypesWidth = (px: number): number => Math.max(160, Math.min(px, Math.max(160, window.innerWidth - 520)));
const clampEntriesWidth = (px: number): number => Math.max(220, Math.min(px, Math.max(220, window.innerWidth - 580)));

export function wireCntcPaneSplitters(
  container: HTMLElement,
  typesPane: HTMLElement,
  entriesPane: HTMLElement,
  inspectorPane: HTMLElement
): void {
  const typesHandle = buildHandle();
  const entriesHandle = buildHandle();
  container.replaceChildren(typesPane, typesHandle, entriesPane, entriesHandle, inspectorPane);

  // Seed the track sizes so each handle reads back its own width. Without an
  // inline value `wireSplitter` falls back to the *first* grid track for every
  // handle, which would make the entries handle jump on its first drag.
  if (!container.style.getPropertyValue("--cntc-types-w")) {
    container.style.setProperty("--cntc-types-w", "280px");
  }
  if (!container.style.getPropertyValue("--cntc-entries-w")) {
    container.style.setProperty("--cntc-entries-w", "380px");
  }

  wireSplitter(typesHandle, container, {
    axis: "x",
    cssVar: "cntc-types-w",
    storageKey: PERSIST.typesWidth,
    clamp: clampTypesWidth,
  });
  wireSplitter(entriesHandle, container, {
    axis: "x",
    cssVar: "cntc-entries-w",
    storageKey: PERSIST.entriesWidth,
    clamp: clampEntriesWidth,
  });
}

function buildHandle(): HTMLDivElement {
  const handle = document.createElement("div");
  handle.className = "cntc-splitter";
  handle.setAttribute("role", "separator");
  handle.setAttribute("aria-orientation", "vertical");
  handle.title = "Drag to resize · double-click to reset";
  return handle;
}
