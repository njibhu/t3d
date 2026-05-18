/**
 * Spacer-row virtualisation. The body is one `<table>`; two `<tr>` spacers
 * bracket the rendered window, their heights computed from the unrendered
 * rows above and below. Native `scrollHeight` reflects the full virtual
 * list because the spacers contribute their inline heights, so the browser
 * scrollbar behaves correctly even for hundreds of thousands of rows.
 */

export interface VTColumn<T> {
  field: keyof T | string;
  caption: string;
  /** Either a fixed pixel width ("80px") or "auto"/"1fr". Non-px values let
   * the `table-layout: fixed` engine distribute the remaining width. */
  width: string;
  align?: "left" | "right";
  sortable?: boolean;
  get?: (row: T) => string | number;
  format?: (value: any, row: T) => string;
}

export interface VTOptions<T> {
  columns: VTColumn<T>[];
  rowHeight?: number;
  getRowKey: (row: T) => number | string;
  onRowClick?: (row: T, event: MouseEvent) => void;
  /** Fired when keyboard navigation moves the highlight to a new row. */
  onRowActivate?: (row: T) => void;
}

type SortDir = "asc" | "desc";

export class VirtualTable<T> {
  readonly root: HTMLDivElement;

  private columns: VTColumn<T>[];
  /** Resolved px widths used by the sizing row; null where the column is auto. */
  private columnPxWidths: (number | null)[];
  private rowHeight: number;
  private getRowKey: (row: T) => number | string;
  private onRowClick?: (row: T, event: MouseEvent) => void;
  private onRowActivate?: (row: T) => void;

  private headerRow!: HTMLTableRowElement;
  private scroller!: HTMLDivElement;
  private tableBody!: HTMLTableSectionElement;
  private spacerTop!: HTMLTableRowElement;
  private spacerBot!: HTMLTableRowElement;

  private data: T[] = [];
  /** Indices into `data`, in the current sort+filter order. */
  private order: number[] = [];

  private sortField: string | null = null;
  private sortDir: SortDir = "asc";

  private selectedKey: number | string | null = null;

  constructor(opts: VTOptions<T>) {
    this.columns = opts.columns;
    this.rowHeight = opts.rowHeight ?? 28;
    this.getRowKey = opts.getRowKey;
    this.onRowClick = opts.onRowClick;
    this.onRowActivate = opts.onRowActivate;

    this.columnPxWidths = this.columns.map((c) => {
      const m = /^(\d+(?:\.\d+)?)px$/.exec(c.width);
      return m ? parseFloat(m[1]) : null;
    });

    this.root = document.createElement("div");
    this.root.className = "vt-root";
    this.root.style.setProperty("--t3d-row-height", `${this.rowHeight}px`);

    this.buildHeader();
    this.buildBody();
  }

  // ---- public API ----

  setData(rows: T[]): void {
    this.data = rows;
    this.order = rows.map((_, i) => i);
    if (this.sortField) this.applySort();
    this.scroller.scrollTop = 0;
    this.getRecordsHTML();
  }

  setSelection(key: number | string | null): void {
    this.selectedKey = key;
    let tr = this.spacerTop.nextElementSibling as HTMLTableRowElement | null;
    while (tr && tr !== this.spacerBot) {
      const ind = Number(tr.dataset.ind);
      const row = Number.isFinite(ind) ? this.data[this.order[ind]] : null;
      tr.classList.toggle("selected", row != null && this.getRowKey(row) === key);
      tr = tr.nextElementSibling as HTMLTableRowElement | null;
    }
  }

  scrollToKey(key: number | string): void {
    for (let i = 0; i < this.order.length; i++) {
      const row = this.data[this.order[i]];
      if (row != null && this.getRowKey(row) === key) {
        this.scroller.scrollTop = i * this.rowHeight;
        this.scroll(true);
        return;
      }
    }
  }

  get visibleCount(): number {
    return this.order.length;
  }

  get totalCount(): number {
    return this.data.length;
  }

  private buildHeader(): void {
    const wrap = document.createElement("div");
    wrap.className = "vt-header-wrap";

    const table = document.createElement("table");
    table.className = "vt-header-table";

    const thead = document.createElement("thead");
    thead.appendChild(this.buildSizingRow());

    this.headerRow = document.createElement("tr");
    this.headerRow.className = "vt-header-row";
    for (const col of this.columns) {
      const th = document.createElement("th");
      if (col.align === "right") th.classList.add("num");
      th.textContent = col.caption;
      const indicator = document.createElement("span");
      indicator.className = "sort-indicator";
      th.appendChild(indicator);
      if (col.sortable !== false) {
        th.addEventListener("click", () => this.toggleSort(String(col.field)));
      }
      this.headerRow.appendChild(th);
    }
    thead.appendChild(this.headerRow);
    table.appendChild(thead);
    wrap.appendChild(table);
    this.root.appendChild(wrap);
  }

  private buildBody(): void {
    this.scroller = document.createElement("div");
    this.scroller.className = "vt-scroller";
    this.scroller.tabIndex = 0;

    const table = document.createElement("table");
    table.className = "vt-table";
    this.tableBody = document.createElement("tbody");
    table.appendChild(this.tableBody);
    this.scroller.appendChild(table);
    this.root.appendChild(this.scroller);

    const activateFromEvent = (ev: MouseEvent): void => {
      const tr = (ev.target as HTMLElement).closest("tr") as HTMLTableRowElement | null;
      if (!tr || tr.classList.contains("vt-spacer-top") || tr.classList.contains("vt-spacer-bot")) return;
      const ind = Number(tr.dataset.ind);
      if (!Number.isFinite(ind)) return;
      const row = this.data[this.order[ind]];
      if (row == null) return;
      this.scroller.focus({ preventScroll: true });
      this.onRowClick?.(row, ev);
    };
    table.addEventListener("click", activateFromEvent);
    // Middle-click opens in a new tab (consumer reads ev.button). Suppress
    // the default browser auto-scroll cursor on mousedown.
    table.addEventListener("auxclick", (ev) => {
      if (ev.button !== 1) return;
      ev.preventDefault();
      activateFromEvent(ev);
    });
    table.addEventListener("mousedown", (ev) => {
      if (ev.button === 1) ev.preventDefault();
    });

    this.scroller.addEventListener("scroll", () => this.scroll(false), { passive: true });
    this.scroller.addEventListener("keydown", (ev) => this.onKeyDown(ev));
  }

  private onKeyDown(ev: KeyboardEvent): void {
    const n = this.order.length;
    if (n === 0) return;

    const current = this.findOrderIndexOfSelection();
    const viewportRows = Math.max(1, Math.floor(this.scroller.clientHeight / this.rowHeight));
    let next = current;
    switch (ev.key) {
      case "ArrowDown": next = current < 0 ? 0 : Math.min(n - 1, current + 1); break;
      case "ArrowUp":   next = current < 0 ? 0 : Math.max(0, current - 1); break;
      case "PageDown":  next = current < 0 ? 0 : Math.min(n - 1, current + viewportRows); break;
      case "PageUp":    next = current < 0 ? 0 : Math.max(0, current - viewportRows); break;
      case "Home":      next = 0; break;
      case "End":       next = n - 1; break;
      default: return;
    }
    ev.preventDefault();
    if (next === current) return;
    const row = this.data[this.order[next]];
    if (row == null) return;
    this.setSelection(this.getRowKey(row));
    this.ensureRowVisible(next);
    this.onRowActivate?.(row);
  }

  private findOrderIndexOfSelection(): number {
    if (this.selectedKey == null) return -1;
    for (let i = 0; i < this.order.length; i++) {
      const r = this.data[this.order[i]];
      if (r != null && this.getRowKey(r) === this.selectedKey) return i;
    }
    return -1;
  }

  private ensureRowVisible(orderIdx: number): void {
    const top = orderIdx * this.rowHeight;
    const bottom = top + this.rowHeight;
    const viewTop = this.scroller.scrollTop;
    const viewBottom = viewTop + this.scroller.clientHeight;
    if (top < viewTop) {
      this.scroller.scrollTop = top;
    } else if (bottom > viewBottom) {
      this.scroller.scrollTop = bottom - this.scroller.clientHeight;
    }
  }

  // ---- DOM row builders ----

  /** Zero-height row whose cell widths pin the column layout under
   *  `table-layout: fixed`. Both header and body tables include one. */
  private buildSizingRow(): HTMLTableRowElement {
    const tr = document.createElement("tr");
    tr.className = "vt-sizer";
    tr.dataset.line = "0";
    for (let i = 0; i < this.columns.length; i++) {
      const td = document.createElement("td");
      td.style.height = "0";
      const w = this.columnPxWidths[i];
      if (w != null) td.style.width = w + "px";
      tr.appendChild(td);
    }
    return tr;
  }

  /** Empty row whose inline `height` represents the unrendered range above
   *  or below the rendered window. */
  private buildSpacerRow(which: "top" | "bottom", heightPx: number): HTMLTableRowElement {
    const tr = document.createElement("tr");
    tr.className = which === "top" ? "vt-spacer-top" : "vt-spacer-bot";
    tr.dataset.line = which;
    tr.style.height = heightPx + "px";
    const td = document.createElement("td");
    td.colSpan = this.columns.length;
    tr.appendChild(td);
    return tr;
  }

  private buildRow(ind: number, lineNum: number): HTMLTableRowElement {
    const tr = document.createElement("tr");
    tr.dataset.line = String(lineNum);
    tr.dataset.ind = String(ind);
    tr.style.height = this.rowHeight + "px";

    const row = this.data[this.order[ind]];
    if (this.selectedKey != null && this.getRowKey(row) === this.selectedKey) {
      tr.classList.add("selected");
    }

    for (const col of this.columns) {
      const td = document.createElement("td");
      if (col.align === "right") td.classList.add("num");
      const raw = col.get ? col.get(row) : (row as any)[col.field as string];
      td.textContent = col.format ? col.format(raw, row) : raw == null ? "" : String(raw);
      tr.appendChild(td);
    }
    return tr;
  }

  // ---- initial render + incremental scroll ----

  /** A "buffered" threshold below which virtualisation isn't worth the work:
   *  the whole list is rendered at once and `scroll()` becomes a no-op. */
  private static readonly DIRECT_RENDER_THRESHOLD = 300;

  /** Overscan above and below the visible window. Larger for short lists so
   *  fast wheel-scrolls don't briefly outrun the renderer. */
  private overscanFor(buffered: number): number {
    return buffered > VirtualTable.DIRECT_RENDER_THRESHOLD ? 30 : 300;
  }

  private getRecordsHTML(): void {
    const buffered = this.order.length;
    const overscan = this.overscanFor(buffered);
    const limit = Math.min(buffered, Math.floor(this.scroller.clientHeight / this.rowHeight) + overscan + 1);

    this.tableBody.replaceChildren();
    this.tableBody.appendChild(this.buildSizingRow());

    this.spacerTop = this.buildSpacerRow("top", 0);
    this.tableBody.appendChild(this.spacerTop);

    // Rendered window is 1-indexed (lineNum=1..limit); see buildRow.
    for (let i = 0; i < limit; i++) {
      if (this.data[this.order[i]] == null) continue;
      this.tableBody.appendChild(this.buildRow(i, i + 1));
    }

    this.spacerBot = this.buildSpacerRow("bottom", (buffered - limit) * this.rowHeight);
    this.tableBody.appendChild(this.spacerBot);
  }

  private scroll(force: boolean): void {
    const buffered = this.order.length;
    const viewH = this.scroller.clientHeight;
    if (buffered === 0 || viewH === 0) return;
    if (!force && buffered <= VirtualTable.DIRECT_RENDER_THRESHOLD) return;

    const overscan = this.overscanFor(buffered);
    let windowStart = Math.floor(this.scroller.scrollTop / this.rowHeight) - overscan;
    let windowEnd = windowStart + Math.floor(viewH / this.rowHeight) + overscan * 2 + 1;
    if (windowStart < 1) windowStart = 1;
    if (windowEnd > buffered) windowEnd = buffered;

    const topSpacer = this.spacerTop;
    const botSpacer = this.spacerBot;
    const firstLine = parseInt((topSpacer.nextElementSibling as HTMLElement | null)?.dataset.line ?? "");
    const lastLine = parseInt((botSpacer.previousElementSibling as HTMLElement | null)?.dataset.line ?? "");

    const isScrollDown = force || !(firstLine >= windowStart) || firstLine === 1;
    if (isScrollDown) {
      if (!force && windowEnd <= lastLine + overscan - 2 && windowEnd !== buffered) return;
      this.trimAboveWindow(topSpacer, botSpacer, windowStart);
      this.appendAfter(botSpacer, this.lineAtEdge(botSpacer.previousElementSibling, windowStart - 1) + 1, windowEnd);
    } else {
      if (windowStart >= firstLine - overscan + 2 && windowStart > 1) return;
      this.trimBelowWindow(topSpacer, botSpacer, windowEnd);
      this.prependBefore(topSpacer, this.lineAtEdge(topSpacer.nextElementSibling, windowEnd + 1) - 1, windowStart);
    }

    topSpacer.style.height = (windowStart - 1) * this.rowHeight + "px";
    botSpacer.style.height = Math.max(0, buffered - windowEnd) * this.rowHeight + "px";
  }

  /** Read the line number from a sibling next to a spacer. Returns `fallback`
   *  if the sibling is the other spacer (i.e. the rendered window is empty). */
  private lineAtEdge(sibling: Element | null, fallback: number): number {
    const line = (sibling as HTMLElement | null)?.dataset.line ?? "";
    if (line === "top" || line === "bottom") return fallback;
    const n = parseInt(line);
    return Number.isFinite(n) ? n : fallback;
  }

  private trimAboveWindow(topSpacer: Element, botSpacer: Element, windowStart: number): void {
    while (true) {
      const sibling = topSpacer.nextElementSibling as HTMLElement | null;
      if (!sibling || sibling === botSpacer) break;
      const line = parseInt(sibling.dataset.line ?? "");
      if (Number.isFinite(line) && line < windowStart) sibling.remove();
      else break;
    }
  }

  private trimBelowWindow(topSpacer: Element, botSpacer: Element, windowEnd: number): void {
    while (true) {
      const sibling = botSpacer.previousElementSibling as HTMLElement | null;
      if (!sibling || sibling === topSpacer) break;
      const line = parseInt(sibling.dataset.line ?? "");
      if (Number.isFinite(line) && line > windowEnd) sibling.remove();
      else break;
    }
  }

  private appendAfter(botSpacer: Element, fromLine: number, toLine: number): void {
    for (let line = fromLine; line <= toLine; line++) {
      if (this.data[this.order[line - 1]] == null) continue;
      botSpacer.before(this.buildRow(line - 1, line));
    }
  }

  private prependBefore(topSpacer: Element, fromLine: number, toLine: number): void {
    for (let line = fromLine; line >= toLine; line--) {
      if (this.data[this.order[line - 1]] == null) continue;
      topSpacer.after(this.buildRow(line - 1, line));
    }
  }

  // ---- sort ----

  private toggleSort(field: string): void {
    if (this.sortField === field) {
      this.sortDir = this.sortDir === "asc" ? "desc" : "asc";
    } else {
      this.sortField = field;
      this.sortDir = "asc";
    }
    this.applySort();
    this.repaintHeaderIndicators();
    this.scroller.scrollTop = 0;
    this.getRecordsHTML();
  }

  private applySort(): void {
    const field = this.sortField;
    if (!field) return;
    const col = this.columns.find((c) => String(c.field) === field);
    if (!col) return;
    const getter = col.get ?? ((r: T) => (r as any)[col.field as string]);
    const dir = this.sortDir === "asc" ? 1 : -1;
    this.order.sort((a, b) => {
      const va = getter(this.data[a]);
      const vb = getter(this.data[b]);
      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;
      if (typeof va === "number" && typeof vb === "number") return (va - vb) * dir;
      const sa = String(va);
      const sb = String(vb);
      return sa < sb ? -dir : sa > sb ? dir : 0;
    });
  }

  private repaintHeaderIndicators(): void {
    const ths = this.headerRow.children;
    for (let i = 0; i < this.columns.length; i++) {
      const indicator = (ths[i] as HTMLElement).querySelector(".sort-indicator");
      if (!indicator) continue;
      if (String(this.columns[i].field) === this.sortField) {
        indicator.textContent = this.sortDir === "asc" ? "▲" : "▼";
      } else {
        indicator.textContent = "";
      }
    }
  }
}
