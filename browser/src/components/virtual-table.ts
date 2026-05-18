/**
 * Verbatim port of w2ui v1.4.3's w2grid record-rendering algorithm.
 *
 * Reference: node_modules/w2ui/w2ui-1.4.3.js
 *   - getRecordsHTML : lines 6127-6154
 *   - scroll         : lines 6166-6296
 *   - getRecordHTML  : lines 6298-6418
 *
 * Variable names and control flow track w2ui closely so the diff against the
 * reference stays readable. Names like `buffered`, `show_extra`, `tr1`, `tr2`,
 * `rec_start`, `range_start`, `range_end` are deliberate.
 */

export interface VTColumn<T> {
  field: keyof T | string;
  caption: string;
  /// Either a fixed pixel width ("80px") or "auto" / "1fr". Anything that
  /// isn't `<n>px` is treated as "auto" — the table-layout: fixed engine
  /// will distribute the remainder of the table width across auto columns.
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
}

type SortDir = "asc" | "desc";

export class VirtualTable<T> {
  readonly root: HTMLDivElement;

  private columns: VTColumn<T>[];
  /// Pixel widths to apply to <col>/sizing cells; null means "auto"
  private columnPxWidths: (number | null)[];
  /// w2ui's recordHeight, renamed
  private rowHeight: number;
  private getRowKey: (row: T) => number | string;
  private onRowClick?: (row: T, event: MouseEvent) => void;

  /// DOM refs
  private headerWrap!: HTMLDivElement;
  private headerTable!: HTMLTableElement;
  private headerRow!: HTMLTableRowElement;
  private scroller!: HTMLDivElement;
  private bodyTable!: HTMLTableElement;
  private tableBody!: HTMLTableSectionElement;
  private spacerTop!: HTMLTableRowElement;
  private spacerBot!: HTMLTableRowElement;

  /// Source data and the visible-order index
  private data: T[] = [];
  /// Index into this.data, in the current sort + filter order. We work on
  /// this throughout; w2ui's `this.records[i]` becomes `this.data[this.order[i]]`.
  private order: number[] = [];

  private sortField: string | null = null;
  private sortDir: SortDir = "asc";

  private selectedKey: number | string | null = null;

  constructor(opts: VTOptions<T>) {
    this.columns = opts.columns;
    this.rowHeight = opts.rowHeight ?? 28;
    this.getRowKey = opts.getRowKey;
    this.onRowClick = opts.onRowClick;

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

  /* ---------- public API ---------- */

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
      const isSel = row != null && this.getRowKey(row) === key;
      tr.classList.toggle("selected", isSel);
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

  /* ---------- build (DOM skeleton) ---------- */

  private buildHeader(): void {
    this.headerWrap = document.createElement("div");
    this.headerWrap.className = "vt-header-wrap";

    this.headerTable = document.createElement("table");
    this.headerTable.className = "vt-header-table";

    const thead = document.createElement("thead");

    /// Sizing row (zero-height; sets column widths for the header table)
    thead.appendChild(this.buildSizingRow());

    /// Actual header row with sortable <th>s
    this.headerRow = document.createElement("tr");
    this.headerRow.className = "vt-header-row";
    for (let i = 0; i < this.columns.length; i++) {
      const col = this.columns[i];
      const th = document.createElement("th");
      th.dataset.col = String(i);
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
    this.headerTable.appendChild(thead);
    this.headerWrap.appendChild(this.headerTable);
    this.root.appendChild(this.headerWrap);
  }

  private buildBody(): void {
    this.scroller = document.createElement("div");
    this.scroller.className = "vt-scroller";
    this.scroller.tabIndex = 0;

    this.bodyTable = document.createElement("table");
    this.bodyTable.className = "vt-table";
    this.tableBody = document.createElement("tbody");
    this.bodyTable.appendChild(this.tableBody);
    this.scroller.appendChild(this.bodyTable);
    this.root.appendChild(this.scroller);

    /// Delegated click handler on the body table.
    this.bodyTable.addEventListener("click", (ev) => {
      const target = ev.target as HTMLElement;
      const tr = target.closest("tr") as HTMLTableRowElement | null;
      if (!tr || tr.classList.contains("vt-spacer-top") || tr.classList.contains("vt-spacer-bot")) return;
      const ind = Number(tr.dataset.ind);
      if (!Number.isFinite(ind)) return;
      const row = this.data[this.order[ind]];
      if (row != null && this.onRowClick) this.onRowClick(row, ev);
    });

    this.scroller.addEventListener(
      "scroll",
      () => {
        this.scroll(false);
      },
      { passive: true }
    );
  }

  /* ---------- row builders ---------- */

  /// w2ui's <tr line="0"> sizing template. Cells are zero-height but their
  /// widths drive column layout for the entire table (table-layout: fixed).
  private buildSizingRow(): HTMLTableRowElement {
    const tr = document.createElement("tr");
    tr.className = "vt-sizer";
    tr.dataset.line = "0";
    for (let i = 0; i < this.columns.length; i++) {
      const td = document.createElement("td");
      td.dataset.col = String(i);
      td.style.height = "0";
      const w = this.columnPxWidths[i];
      if (w != null) td.style.width = w + "px";
      tr.appendChild(td);
    }
    return tr;
  }

  /// w2ui's <tr id="…_rec_top|bottom" line="top|bottom" style="height: <h>px">
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

  /// w2ui's getRecordHTML(ind, lineNum) but for real rows only (ind >= 0).
  private buildRow(ind: number, lineNum: number): HTMLTableRowElement {
    const tr = document.createElement("tr");
    tr.dataset.line = String(lineNum);
    tr.dataset.ind = String(ind);
    tr.style.height = this.rowHeight + "px";

    const row = this.data[this.order[ind]];
    const isSel = this.selectedKey != null && this.getRowKey(row) === this.selectedKey;
    if (isSel) tr.classList.add("selected");

    for (let c = 0; c < this.columns.length; c++) {
      const col = this.columns[c];
      const td = document.createElement("td");
      td.dataset.col = String(c);
      if (col.align === "right") td.classList.add("num");
      const raw = col.get ? col.get(row) : (row as any)[col.field as string];
      const text = col.format ? col.format(raw, row) : raw == null ? "" : String(raw);
      td.textContent = text;
      tr.appendChild(td);
    }
    return tr;
  }

  /* ---------- getRecordsHTML (verbatim port of w2ui:6127-6154) ---------- */

  private getRecordsHTML(): void {
    const buffered = this.order.length;
    const recordsH = this.scroller.clientHeight;
    /// w2ui:6131 "larger number works better with chrome, smaller with FF."
    const show_extra = buffered > 300 ? 30 : 300;
    let limit = Math.floor(recordsH / this.rowHeight) + show_extra + 1;
    if (limit > buffered) limit = buffered;

    /// Rebuild <tbody> from scratch
    this.tableBody.replaceChildren();

    /// Always need first record for resizing purposes (w2ui:6135-6136)
    this.tableBody.appendChild(this.buildSizingRow());

    /// First empty row with height (w2ui:6138-6140)
    this.spacerTop = this.buildSpacerRow("top", 0);
    this.tableBody.appendChild(this.spacerTop);

    /// Rendered rows 1..limit (w2ui:6141-6143). w2ui uses lineNum = i+1.
    for (let i = 0; i < limit; i++) {
      if (this.data[this.order[i]] == null) continue;
      this.tableBody.appendChild(this.buildRow(i, i + 1));
    }

    /// Bottom spacer (w2ui:6144-6146)
    this.spacerBot = this.buildSpacerRow("bottom", (buffered - limit) * this.rowHeight);
    this.tableBody.appendChild(this.spacerBot);

  }

  /* ---------- scroll (verbatim port of w2ui:6166-6296) ---------- */

  private scroll(force: boolean): void {
    const buffered = this.order.length;
    const records = this.scroller;
    const recordsH = records.clientHeight;
    /// w2ui:6172
    if (buffered === 0 || recordsH === 0) return;
    /// w2ui:6173
    const show_extra = buffered > 300 ? 30 : 300;

    /// Skip the footer update and "extra records loaded" block (we're local-only).
    /// w2ui:6189: "only for local data source, else no extra records loaded".
    /// In our case `!url` is true and `total <= 300` means we don't need virt.
    if (!force && buffered <= 300) return;

    /// w2ui:6191-6195
    let start = Math.floor(records.scrollTop / this.rowHeight) - show_extra;
    let end = start + Math.floor(recordsH / this.rowHeight) + show_extra * 2 + 1;
    if (start < 1) start = 1;
    if (end > buffered) end = buffered;

    /// w2ui:6196-6202
    const tr1 = this.spacerTop;
    const tr2 = this.spacerBot;
    const firstEl = tr1.nextElementSibling as HTMLTableRowElement | null;
    const lastEl = tr2.previousElementSibling as HTMLTableRowElement | null;
    const first = firstEl ? parseInt(firstEl.dataset.line ?? "") : NaN;
    const last = lastEl ? parseInt(lastEl.dataset.line ?? "") : NaN;

    /// w2ui:6204 — scroll DOWN if first < start || first == 1 || pull_refresh
    if (force || !(first >= start) || first === 1) {
      /// w2ui:6206 early-out
      if (!force && end <= last + show_extra - 2 && end !== buffered) return;

      /// Remove from top (w2ui:6209-6213)
      while (true) {
        const tmp = tr1.nextElementSibling as HTMLTableRowElement | null;
        if (!tmp || tmp === tr2) break;
        const tmpLine = parseInt(tmp.dataset.line ?? "");
        if (Number.isFinite(tmpLine) && tmpLine < start) tmp.remove();
        else break;
      }
      /// Add at bottom (w2ui:6215-6222)
      const tmp = tr2.previousElementSibling as HTMLTableRowElement | null;
      let rec_start: number;
      const rsLine = tmp ? tmp.dataset.line ?? "" : "";
      if (rsLine === "top" || !Number.isFinite(parseInt(rsLine))) {
        rec_start = start - 1;
      } else {
        rec_start = parseInt(rsLine);
      }
      for (let i = rec_start + 1; i <= end; i++) {
        if (this.data[this.order[i - 1]] == null) continue;
        tr2.before(this.buildRow(i - 1, i));
      }
    } else {
      /// SCROLL UP (w2ui:6225)
      /// w2ui:6226 early-out
      if (start >= first - show_extra + 2 && start > 1) return;

      /// Remove from bottom (w2ui:6228-6232)
      while (true) {
        const tmp = tr2.previousElementSibling as HTMLTableRowElement | null;
        if (!tmp || tmp === tr1) break;
        const tmpLine = parseInt(tmp.dataset.line ?? "");
        if (Number.isFinite(tmpLine) && tmpLine > end) tmp.remove();
        else break;
      }
      /// Add at top (w2ui:6234-6241)
      const tmp = tr1.nextElementSibling as HTMLTableRowElement | null;
      let rec_start: number;
      const rsLine = tmp ? tmp.dataset.line ?? "" : "";
      if (rsLine === "bottom" || !Number.isFinite(parseInt(rsLine))) {
        rec_start = end + 1;
      } else {
        rec_start = parseInt(rsLine);
      }
      for (let i = rec_start - 1; i >= start; i--) {
        if (this.data[this.order[i - 1]] == null) continue;
        tr1.after(this.buildRow(i - 1, i));
      }
    }

    /// Resize spacers (w2ui:6246-6250)
    const h1 = (start - 1) * this.rowHeight;
    let h2 = (buffered - end) * this.rowHeight;
    if (h2 < 0) h2 = 0;
    tr1.style.height = h1 + "px";
    tr2.style.height = h2 + "px";
  }

  /* ---------- sort ---------- */

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
