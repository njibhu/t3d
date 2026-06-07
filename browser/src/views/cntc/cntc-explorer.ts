import { Cntc, type CntcEntry, type CntcField, type CntcReference, type CntcResolvedReference } from "t3d-lib";
import { VirtualTable, type VTColumn } from "../../components/virtual-table";
import { triggerDownload } from "../../util/download";
import { cntcFieldColor } from "./cntc-colors";
import { wireCntcPaneSplitters } from "./cntc-panes";

/**
 * The shared CNTC explorer: a 3-pane Types | Entries | Inspector view with an
 * annotated hex dump, library-driven decoded fields, and resolved cross-file
 * references. Both the per-file viewer (one cntc file) and the archive-wide
 * table (every cntc file) use it; they differ only in the data they feed in and
 * whether the source file/baseId columns are shown.
 *
 * The browser holds no parsing knowledge here — fields, offsets, references and
 * resolution all come from `t3d-lib`'s `Cntc` module.
 */

/** Where clicking an entry-kind reference should navigate. */
export interface CntcNavigationTarget {
  baseId: number;
  type: number;
  typeId?: number | null;
  uniqueId?: number | null;
  offset?: number | null;
  newTab?: boolean;
}

/** A looser target for locating an entry within the loaded data (baseId may be
 *  unknown, e.g. when landing a deep-link inside a single-file view). */
export interface CntcFocusTarget {
  type: number;
  baseId?: number | null;
  typeId?: number | null;
  uniqueId?: number | null;
  offset?: number | null;
}

/** A cntc entry tagged with the file it came from. */
export type CntcExplorerEntry = CntcEntry & { baseId: number; fileId?: number };

export interface CntcExplorerOptions {
  resolver: InstanceType<typeof Cntc.CntcResolver>;
  /** Show the source file/baseId columns (archive-wide table) vs hide (single file). */
  showSource?: boolean;
  /** Offer an "Open in file view" button on the inspector (table only). */
  showOpenInFileView?: boolean;
  /** Navigate to a referenced entry that lives outside the loaded data. */
  onNavigateToEntry?: (target: CntcNavigationTarget) => void;
  /** Open a (non-cntc) file by baseId, e.g. a skin's referenced model. */
  onOpenFile?: (baseId: number, newTab: boolean) => void;
  /** Notified when the selected type changes (for export-button state, etc.). */
  onSelectType?: (type: number | null) => void;
}

interface CntcTypeRow {
  recid: number;
  type: number;
  count: number;
  description: string;
}

interface CntcEntryRow {
  recid: number;
  fileId: number | null;
  baseId: number;
  rootIndex: number;
  namespaceIndex: number;
  size: number;
  uniqueId: number | null;
  dataId: number | null;
  itemType: string;
  entry: CntcExplorerEntry;
}

/** Handle to a not-yet-resolved reference row, filled in by async resolution. */
interface CntcRefRowHandle {
  reference: CntcReference;
  /** Position in the combined field+reference list, for consistent colouring. */
  colorIndex: number;
  label: HTMLTableCellElement;
  value: HTMLTableCellElement;
}

interface HexAnnotation {
  offset: number;
  length: number;
  color: string;
  label: string;
}

export class CntcExplorer {
  readonly root: HTMLDivElement;

  private resolver: InstanceType<typeof Cntc.CntcResolver>;
  private showSource: boolean;
  private showOpenInFileView: boolean;
  private onNavigateToEntry?: (target: CntcNavigationTarget) => void;
  private onOpenFile?: (baseId: number, newTab: boolean) => void;
  private onSelectType?: (type: number | null) => void;

  private typeTableHost: HTMLDivElement;
  private entryTableHost: HTMLDivElement;
  private entryEmptyEl: HTMLDivElement;
  private detailToolbarEl: HTMLDivElement;
  private detailInspectorEl: HTMLDivElement;
  private detailHexEl: HTMLPreElement;
  private detailFieldsEl: HTMLDivElement;

  private typeTable: VirtualTable<CntcTypeRow>;
  private entryTable: VirtualTable<CntcEntryRow> | null = null;

  private entryData = new Map<number, CntcExplorerEntry[]>();
  private typeRows: CntcTypeRow[] = [];
  private currentRows: CntcEntryRow[] = [];
  private selectedTypeValue: number | null = null;
  private detailToken = 0;

  constructor(options: CntcExplorerOptions) {
    this.resolver = options.resolver;
    this.showSource = options.showSource ?? false;
    this.showOpenInFileView = options.showOpenInFileView ?? false;
    this.onNavigateToEntry = options.onNavigateToEntry;
    this.onOpenFile = options.onOpenFile;
    this.onSelectType = options.onSelectType;

    this.root = document.createElement("div");
    this.root.className = "cntc-view";

    const typesPane = document.createElement("section");
    typesPane.className = "cntc-pane cntc-types-pane";
    this.typeTableHost = this.buildHost("cntc-types-list");
    typesPane.append(this.buildPaneTitle("Types"), this.typeTableHost);

    const entriesPane = document.createElement("section");
    entriesPane.className = "cntc-pane cntc-entries-pane";
    this.entryTableHost = this.buildHost("cntc-entry-table-host");
    this.entryEmptyEl = document.createElement("div");
    this.entryEmptyEl.className = "cntc-empty";
    this.entryEmptyEl.textContent = "Select a CNTC type.";
    entriesPane.append(this.buildPaneTitle("Entries"), this.entryTableHost, this.entryEmptyEl);

    const detailPane = document.createElement("section");
    detailPane.className = "cntc-pane cntc-detail-pane";
    const detailHost = document.createElement("div");
    detailHost.className = "cntc-table-detail";
    this.detailToolbarEl = document.createElement("div");
    this.detailToolbarEl.className = "cntc-detail-toolbar";
    this.detailInspectorEl = document.createElement("div");
    this.detailInspectorEl.className = "cntc-inspector-info";
    this.detailInspectorEl.textContent = "Select an entry to inspect its payload.";
    this.detailHexEl = document.createElement("pre");
    this.detailHexEl.className = "cntc-hex-dump";
    this.detailFieldsEl = document.createElement("div");
    this.detailFieldsEl.className = "cntc-decoded-fields";
    detailHost.append(this.detailToolbarEl, this.detailInspectorEl, this.detailHexEl, this.detailFieldsEl);
    detailPane.append(this.buildPaneTitle("Inspector"), detailHost);

    wireCntcPaneSplitters(this.root, typesPane, entriesPane, detailPane);

    this.typeTable = new VirtualTable<CntcTypeRow>({
      columns: [
        { field: "type", caption: "Type", width: "72px", align: "right", sortable: true },
        { field: "count", caption: "Count", width: "80px", align: "right", sortable: true },
        { field: "description", caption: "Description", width: "1fr", sortable: true },
      ],
      getRowKey: (row) => row.recid,
      onRowClick: (row) => this.selectType(row.type),
      onRowActivate: (row) => this.selectType(row.type),
    });
    this.typeTableHost.appendChild(this.typeTable.root);

    this.renderDetail(null);
  }

  // ---- public API ----

  get selectedType(): number | null {
    return this.selectedTypeValue;
  }

  /** All loaded entries grouped by type (used by the table's exports). */
  allEntries(): Map<number, CntcExplorerEntry[]> {
    return this.entryData;
  }

  /** Loads entries grouped by type and selects the first (most populous) type. */
  setData(entriesByType: Map<number, CntcExplorerEntry[]>): void {
    this.entryData = entriesByType;
    this.typeRows = [...entriesByType.entries()]
      .map(([type, entries]) => ({
        recid: type,
        type,
        count: entries.length,
        description: Cntc.getCntcTypeDescription(type) || "Unknown",
      }))
      .sort((a, b) => b.count - a.count);

    this.typeTable.setData(this.typeRows);

    if (this.typeRows.length > 0) {
      this.typeTable.setSelection(this.typeRows[0].recid);
      this.selectType(this.typeRows[0].type);
    } else {
      this.showMessage("No entries.");
    }
  }

  /** Clears the tables/inspector and shows a status message (loading/empty). */
  showMessage(message: string): void {
    this.entryData = new Map();
    this.typeRows = [];
    this.currentRows = [];
    this.selectedTypeValue = null;
    this.entryTable = null;
    this.typeTable.setData([]);
    this.entryTableHost.replaceChildren();
    this.entryTableHost.hidden = true;
    this.entryEmptyEl.hidden = false;
    this.entryEmptyEl.textContent = message;
    this.renderDetail(null);
    this.onSelectType?.(null);
  }

  /** Selects the matching entry (by baseId/offset/typeId/uniqueId); `false` if absent. */
  focusEntry(target: CntcFocusTarget): boolean {
    const match = (this.entryData.get(target.type) ?? []).find((entry) => {
      if (target.baseId != null && entry.baseId !== target.baseId) return false;
      if (target.offset != null && entry.begin !== target.offset) return false;
      if (target.typeId != null && Cntc.getCntcEntryDataId(entry) !== target.typeId) return false;
      if (target.uniqueId != null && Cntc.getCntcEntryUniqueId(entry) !== target.uniqueId) return false;
      return true;
    });
    if (!match) return false;

    this.typeTable.setSelection(match.type);
    this.typeTable.scrollToKey(match.type);
    this.selectType(match.type);
    const row = this.currentRows.find((candidate) => candidate.entry === match);
    if (row && this.entryTable) {
      this.entryTable.scrollToKey(row.recid);
      this.selectEntry(row);
    }
    return true;
  }

  onShow(): void {
    // VirtualTables measure clientHeight, which is 0 while hidden; re-feed their
    // data so they lay out for the now-visible viewport.
    this.typeTable.setData(this.typeRows, { preserveScroll: true });
    this.entryTable?.setData(this.currentRows, { preserveScroll: true });
  }

  // ---- selection ----

  private selectType(type: number): void {
    this.selectedTypeValue = type;
    this.typeTable.setSelection(type);
    this.onSelectType?.(type);

    const entries = this.entryData.get(type) ?? [];
    this.currentRows = entries.map((entry, index) => ({
      recid: index,
      fileId: entry.fileId ?? null,
      baseId: entry.baseId,
      rootIndex: entry.rootIndex,
      namespaceIndex: entry.namespaceIndex,
      size: entry.size,
      uniqueId: Cntc.getCntcEntryUniqueId(entry),
      dataId: Cntc.getCntcEntryDataId(entry),
      itemType: Cntc.getCntcItemTypeLabel(entry),
      entry,
    }));

    // The column set varies (source columns + a data-driven item-type column),
    // and VirtualTable fixes columns at construction, so rebuild per selection.
    const hasItemType = this.currentRows.some((row) => row.itemType !== "");
    this.entryTable = new VirtualTable<CntcEntryRow>({
      columns: buildEntryColumns(type, this.showSource, hasItemType),
      getRowKey: (row) => row.recid,
      onRowClick: (row) => this.selectEntry(row),
      onRowActivate: (row) => this.selectEntry(row),
    });
    this.entryTableHost.replaceChildren(this.entryTable.root);
    this.entryEmptyEl.hidden = this.currentRows.length > 0;
    this.entryTableHost.hidden = this.currentRows.length === 0;
    this.entryTable.setData(this.currentRows);

    this.selectEntry(this.currentRows[0] ?? null);
  }

  private selectEntry(row: CntcEntryRow | null): void {
    this.entryTable?.setSelection(row?.recid ?? null);
    this.renderDetail(row?.entry ?? null);
  }

  // ---- inspector ----

  private renderDetail(entry: CntcExplorerEntry | null): void {
    // Bump the token so in-flight reference resolution for a previous selection
    // bails out instead of writing into the new selection's cell.
    const token = ++this.detailToken;
    this.detailToolbarEl.replaceChildren();
    if (!entry) {
      this.detailInspectorEl.textContent = "Select an entry to inspect its payload.";
      this.detailHexEl.replaceChildren();
      this.detailFieldsEl.replaceChildren();
      return;
    }

    if (this.showOpenInFileView && this.onNavigateToEntry) {
      this.detailToolbarEl.append(
        this.buildButton("Open in file view →", (event) => this.deepLink(entry, event.ctrlKey || event.metaKey))
      );
    }
    this.detailToolbarEl.append(this.buildButton("Download entry BIN", () => this.downloadEntryBinary(entry)));

    this.detailInspectorEl.textContent = this.buildHeaderLine(entry);

    const fields = Cntc.describeCntcEntry(entry);

    const annotations: HexAnnotation[] = fields
      .map((field, index) =>
        field.offset != null
          ? { offset: field.offset, length: field.length ?? 4, color: cntcFieldColor(index), label: field.label }
          : null
      )
      .filter((annotation): annotation is HexAnnotation => annotation !== null);

    this.renderHexDump(entry, annotations);
    // Render decoded fields now; references are discovered from the file's fixup
    // tables (async), then appended + resolved.
    const fieldsTable = this.renderDecodedFields(fields);
    void this.discoverAndResolveReferences(entry, fieldsTable, fields.length, token);
  }

  /** Discovers an entry's references from the fixup tables, appends a row per
   *  reference, then resolves each into a displayable, navigable value. */
  private async discoverAndResolveReferences(
    entry: CntcExplorerEntry,
    table: HTMLTableElement,
    fieldCount: number,
    token: number
  ): Promise<void> {
    let references: CntcReference[];
    try {
      references = await this.resolver.listReferences(entry.baseId, entry);
    } catch {
      return;
    }
    if (token !== this.detailToken || references.length === 0) return;

    const refRows = this.appendReferenceRows(table, fieldCount, references);
    for (const refRow of refRows) {
      void this.resolveReference(entry, refRow, token);
    }
  }

  private buildHeaderLine(entry: CntcExplorerEntry): string {
    const parts = [`type=${entry.type}`];
    if (entry.fileId != null) parts.push(`file=${entry.fileId}`);
    parts.push(
      `baseId=${entry.baseId}`,
      `size=${entry.size}`,
      `root=${entry.rootIndex}`,
      `namespace=${entry.namespaceIndex}`
    );
    return parts.join(" | ");
  }

  private renderHexDump(entry: CntcExplorerEntry, annotations: HexAnnotation[]): void {
    this.detailHexEl.replaceChildren();

    const annotationByByte = new Map<number, { color: string; label: string }>();
    for (const annotation of annotations) {
      for (let i = annotation.offset; i < annotation.offset + annotation.length; i += 1) {
        annotationByByte.set(i, { color: annotation.color, label: annotation.label });
      }
    }

    const bytesPerLine = 16;
    for (let lineOffset = 0; lineOffset < entry.contentSlice.length; lineOffset += bytesPerLine) {
      const line = document.createElement("div");
      line.className = "cntc-hex-line";

      const offsetEl = document.createElement("span");
      offsetEl.className = "cntc-hex-offset";
      offsetEl.textContent = lineOffset.toString(16).toUpperCase().padStart(8, "0");

      const hexGroup = document.createElement("span");
      hexGroup.className = "cntc-hex-group";
      const asciiGroup = document.createElement("span");
      asciiGroup.className = "cntc-ascii-group";

      for (let index = 0; index < bytesPerLine; index += 1) {
        const byteOffset = lineOffset + index;
        if (byteOffset >= entry.contentSlice.length) break;
        const byte = entry.contentSlice[byteOffset];

        const byteEl = document.createElement("button");
        byteEl.type = "button";
        byteEl.className = "cntc-hex-byte";
        byteEl.dataset.byteOffset = String(byteOffset);
        byteEl.textContent = byte.toString(16).toUpperCase().padStart(2, "0");
        const annotation = annotationByByte.get(byteOffset);
        if (annotation) {
          byteEl.style.background = annotation.color;
          byteEl.classList.add("annotated");
          byteEl.title = `${annotation.label} | offset 0x${byteOffset.toString(16).toUpperCase()}`;
        } else {
          byteEl.title = `offset 0x${byteOffset.toString(16).toUpperCase()}`;
        }
        byteEl.addEventListener("click", () => this.inspectUint32(entry, byteOffset));
        hexGroup.appendChild(byteEl);

        const asciiEl = document.createElement("span");
        asciiEl.className = "cntc-ascii-byte";
        asciiEl.textContent = byte >= 0x20 && byte <= 0x7e ? String.fromCharCode(byte) : ".";
        asciiGroup.appendChild(asciiEl);
      }

      line.append(offsetEl, hexGroup, asciiGroup);
      this.detailHexEl.appendChild(line);
    }
  }

  private inspectUint32(entry: CntcExplorerEntry, offset: number): void {
    const value = Cntc.readUint32LE(entry.contentSlice, offset);
    if (value === null) {
      this.detailInspectorEl.textContent = `offset 0x${offset.toString(16).toUpperCase()} (${offset}) | uint32 unavailable: not enough bytes`;
      return;
    }
    this.detailInspectorEl.textContent = `offset 0x${offset.toString(16).toUpperCase()} (${offset}) | uint32 = ${value} | 0x${value.toString(16).toUpperCase()}`;
  }

  /**
   * Renders the library's field list (coloured by position) and returns the
   * table so reference rows can be appended once they are discovered/resolved.
   */
  private renderDecodedFields(fields: CntcField[]): HTMLTableElement {
    this.detailFieldsEl.replaceChildren();

    const title = document.createElement("div");
    title.className = "cntc-decoded-title";
    title.textContent = "Decoded fields";

    const table = document.createElement("table");
    table.className = "cntc-decoded-table";

    fields.forEach((field, index) => {
      const row = this.buildFieldRow(field.label, cntcFieldColor(index));
      row.value.textContent = field.value == null ? "n/a" : String(field.value);
      table.appendChild(row.element);
    });

    this.detailFieldsEl.append(title, table);
    return table;
  }

  /** Appends a placeholder row per discovered reference (coloured after the
   *  fields); returns handles to fill in once resolution completes. */
  private appendReferenceRows(
    table: HTMLTableElement,
    fieldCount: number,
    references: CntcReference[]
  ): CntcRefRowHandle[] {
    return references.map((reference, refIndex) => {
      const colorIndex = fieldCount + refIndex;
      const row = this.buildFieldRow(reference.label, cntcFieldColor(colorIndex));
      row.value.textContent = "Resolving…";
      table.appendChild(row.element);
      return { reference, colorIndex, label: row.label, value: row.value };
    });
  }

  private buildFieldRow(
    label: string,
    color: string
  ): {
    element: HTMLTableRowElement;
    label: HTMLTableCellElement;
    value: HTMLTableCellElement;
  } {
    const element = document.createElement("tr");
    const labelCell = document.createElement("th");
    this.setFieldLabel(labelCell, label, color);
    const valueCell = document.createElement("td");
    element.append(labelCell, valueCell);
    return { element, label: labelCell, value: valueCell };
  }

  private setFieldLabel(cell: HTMLTableCellElement, label: string, color: string): void {
    const swatch = document.createElement("span");
    swatch.className = "cntc-field-swatch";
    swatch.style.background = color;
    cell.replaceChildren(swatch, document.createTextNode(label));
  }

  private async resolveReference(entry: CntcExplorerEntry, refRow: CntcRefRowHandle, token: number): Promise<void> {
    try {
      const resolved = await this.resolver.resolveReference(entry.baseId, entry, refRow.reference);
      if (token !== this.detailToken) return;
      if (!resolved) {
        refRow.value.textContent = "Not found";
        return;
      }
      const color = cntcFieldColor(refRow.colorIndex);
      // The resolved label may now carry the (previously dynamic) offset.
      this.setFieldLabel(refRow.label, resolved.label, color);
      if (resolved.offset != null) {
        this.annotateHexRange(resolved.offset, resolved.length, color, resolved.label);
      }
      refRow.value.replaceChildren(this.buildReferenceLink(resolved));
    } catch {
      if (token !== this.detailToken) return;
      refRow.value.textContent = "Resolve failed";
    }
  }

  /** Recolours an already-rendered hex byte range (for refs resolved late). */
  private annotateHexRange(offset: number, length: number, color: string, label: string): void {
    for (let i = offset; i < offset + length; i += 1) {
      const byteEl = this.detailHexEl.querySelector<HTMLElement>(`.cntc-hex-byte[data-byte-offset="${i}"]`);
      if (!byteEl) continue;
      byteEl.style.background = color;
      byteEl.classList.add("annotated");
      byteEl.title = `${label} | offset 0x${i.toString(16).toUpperCase()}`;
    }
  }

  /** A reference value that jumps internally when possible, else navigates out. */
  private buildReferenceLink(resolved: CntcResolvedReference): HTMLElement {
    const navigation = resolved.navigation;
    // Display-only references (e.g. a resolved codename) and file references with
    // no open handler render as plain, unlinked text.
    if (navigation.target === "none" || (navigation.target === "file" && !this.onOpenFile)) {
      const span = document.createElement("span");
      span.textContent = resolved.display;
      return span;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "cntc-inline-link";
    button.textContent = resolved.display;

    if (navigation.target === "entry") {
      const target: CntcNavigationTarget = {
        baseId: navigation.baseId,
        type: navigation.type,
        typeId: navigation.dataId,
        uniqueId: navigation.uniqueId,
        offset: navigation.offset,
      };
      button.title = `Go to entry (CNTC ${navigation.baseId})`;
      button.addEventListener("click", (event) => {
        // Prefer jumping within the loaded set; fall back to navigating out.
        if (!this.focusEntry(target)) {
          this.onNavigateToEntry?.({ ...target, newTab: event.ctrlKey || event.metaKey });
        }
      });
    } else {
      button.title = `Open file ${navigation.baseId}`;
      button.addEventListener("click", (event) => this.onOpenFile?.(navigation.baseId, event.ctrlKey || event.metaKey));
    }
    return button;
  }

  private deepLink(entry: CntcExplorerEntry, newTab: boolean): void {
    this.onNavigateToEntry?.({
      baseId: entry.baseId,
      type: entry.type,
      typeId: Cntc.getCntcEntryDataId(entry),
      uniqueId: Cntc.getCntcEntryUniqueId(entry),
      offset: entry.begin,
      newTab,
    });
  }

  private downloadEntryBinary(entry: CntcExplorerEntry): void {
    const uniqueId = Cntc.getCntcEntryUniqueId(entry) ?? "unknown";
    triggerDownload(
      new Blob([entry.contentSlice], { type: "application/octet-stream" }),
      `${entry.baseId}_${entry.type}_${uniqueId}.cntc.bin`
    );
  }

  // ---- small DOM helpers ----

  private buildButton(label: string, onClick: (event: MouseEvent) => void): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  private buildPaneTitle(text: string): HTMLDivElement {
    const title = document.createElement("div");
    title.className = "cntc-pane-title";
    title.textContent = text;
    return title;
  }

  private buildHost(className: string): HTMLDivElement {
    const host = document.createElement("div");
    host.className = className;
    return host;
  }
}

function buildEntryColumns(type: number, showSource: boolean, hasItemType: boolean): VTColumn<CntcEntryRow>[] {
  const columns: VTColumn<CntcEntryRow>[] = [];
  if (showSource) {
    columns.push(
      { field: "fileId", caption: "File", width: "78px", align: "right", sortable: true },
      { field: "baseId", caption: "Base ID", width: "88px", align: "right", sortable: true }
    );
  }
  columns.push(
    { field: "rootIndex", caption: "Root", width: "60px", align: "right", sortable: true },
    { field: "namespaceIndex", caption: "Namespace", width: "92px", align: "right", sortable: true },
    { field: "size", caption: "Size", width: "60px", align: "right", sortable: true },
    { field: "uniqueId", caption: "Unique ID", width: "96px", align: "right", sortable: true },
    { field: "dataId", caption: Cntc.getCntcDataIdCaption(type), width: "1fr", align: "right", sortable: true }
  );
  if (hasItemType) {
    columns.push({ field: "itemType", caption: "Item Type", width: "120px", sortable: true });
  }
  return columns;
}
