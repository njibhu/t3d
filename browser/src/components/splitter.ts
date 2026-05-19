/**
 * A drag handle that resizes one CSS Grid track by writing a custom property
 * on the grid container. The current track size is persisted to localStorage
 * so it survives reloads. Double-clicking the handle clears the override.
 *
 * The handle should be 4-8 px wide/tall and positioned as one of the grid's
 * tracks; the grid template must consume the same custom property for the
 * track this splitter resizes - e.g. `grid-template-columns: var(--w) 5px 1fr`.
 *
 * Calling `wireSplitter` also restores any previously-persisted size; the
 * caller doesn't need to read localStorage separately.
 */
export interface SplitterOptions {
  axis: "x" | "y";
  /** The CSS custom property name (without `--`) on the container. */
  cssVar: string;
  /** localStorage key used to persist the most recent size in pixels. */
  storageKey: string;
  clamp: (px: number) => number;
}

export function wireSplitter(handle: HTMLElement, container: HTMLElement, opts: SplitterOptions): void {
  const horizontal = opts.axis === "x";
  const cursor = horizontal ? "col-resize" : "row-resize";
  const cssVar = `--${opts.cssVar}`;

  const readCurrentSize = (): number => {
    const inline = container.style.getPropertyValue(cssVar);
    if (inline) return parseInt(inline, 10);
    // Fall back to the first computed grid track - the one we resize.
    const tracks = horizontal
      ? getComputedStyle(container).gridTemplateColumns
      : getComputedStyle(container).gridTemplateRows;
    return parseInt(tracks.split(/\s+/)[0] ?? "0", 10) || 0;
  };

  // Restore the previously-persisted size before any wiring; this ensures
  // the first frame already reflects the user's last choice.
  const saved = parseInt(localStorage.getItem(opts.storageKey) ?? "", 10);
  if (Number.isFinite(saved)) {
    container.style.setProperty(cssVar, opts.clamp(saved) + "px");
  }

  let dragging = false;
  let startCoord = 0;
  let startSize = 0;

  handle.addEventListener("pointerdown", (ev) => {
    dragging = true;
    startCoord = horizontal ? ev.clientX : ev.clientY;
    startSize = readCurrentSize();
    handle.setPointerCapture(ev.pointerId);
    document.body.style.cursor = cursor;
    document.body.style.userSelect = "none";
  });

  handle.addEventListener("pointermove", (ev) => {
    if (!dragging) return;
    const delta = (horizontal ? ev.clientX : ev.clientY) - startCoord;
    container.style.setProperty(cssVar, opts.clamp(startSize + delta) + "px");
  });

  const endDrag = (ev: PointerEvent): void => {
    if (!dragging) return;
    dragging = false;
    handle.releasePointerCapture(ev.pointerId);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
    localStorage.setItem(opts.storageKey, String(readCurrentSize()));
  };
  handle.addEventListener("pointerup", endDrag);
  handle.addEventListener("pointercancel", endDrag);

  handle.addEventListener("dblclick", () => {
    container.style.removeProperty(cssVar);
    localStorage.removeItem(opts.storageKey);
  });
}
