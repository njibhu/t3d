import type { FileParser } from "t3d-lib";
import { VirtualTable } from "../components/virtual-table";
import { triggerDownload } from "../util/download";

const KNOWN_TYPE_DESCRIPTIONS: Record<number, string> = {
  0: "Achievements",
  1: "Achievement Categories",
  12: "Crafting Recipes",
  35: "Items",
  45: "Maps",
  66: "Skins",
};

interface CntcMainChunk {
  indexEntries: Array<{
    type: number;
    offset: number;
    namespaceIndex: number;
    rootIndex: number;
  }>;
  content: Uint8Array;
}

export interface CntcEntryRecord {
  type: number;
  offset: number;
  namespaceIndex: number;
  rootIndex: number;
  contentSlice: Uint8Array;
  size: number;
}

export interface CntcDecodedField {
  label: string;
  value: string | number | null;
}

interface CntcTypeSummary {
  type: number;
  count: number;
  description: string;
}

interface CntcTypeRow extends CntcTypeSummary {
  recid: number;
  label: string;
}

interface CntcEntryRow {
  recid: number;
  rootIndex: number;
  namespaceIndex: number;
  size: number;
  uniqueId: number | null;
  typeId: number | null;
  entry: CntcEntryRecord;
}

export class CntcView {
  private host: HTMLElement;
  private root: HTMLDivElement;
  private typeListEl: HTMLDivElement;
  private entryTableHost: HTMLDivElement;
  private entryEmptyEl: HTMLDivElement;
  private detailHost: HTMLDivElement;
  private detailToolbarEl: HTMLDivElement;
  private detailInspectorEl: HTMLDivElement;
  private detailHexEl: HTMLPreElement;
  private typeTable: VirtualTable<CntcTypeRow>;
  private entryTable: VirtualTable<CntcEntryRow>;
  private pfBaseId = "cntc";
  private entriesByType = new Map<number, CntcEntryRecord[]>();
  private selectedType: number | null = null;
  private selectedEntry: CntcEntryRecord | null = null;

  constructor(host: HTMLElement) {
    this.host = host;
    this.host.className = "view-pane";

    this.root = document.createElement("div");
    this.root.className = "cntc-view";

    const leftPane = document.createElement("section");
    leftPane.className = "cntc-pane cntc-types-pane";
    const leftTitle = document.createElement("div");
    leftTitle.className = "cntc-pane-title";
    leftTitle.textContent = "Types";
    this.typeListEl = document.createElement("div");
    this.typeListEl.className = "cntc-types-list";
    leftPane.append(leftTitle, this.typeListEl);

    const centerPane = document.createElement("section");
    centerPane.className = "cntc-pane cntc-entries-pane";
    const centerTitle = document.createElement("div");
    centerTitle.className = "cntc-pane-title";
    centerTitle.textContent = "Entries";
    this.entryTableHost = document.createElement("div");
    this.entryTableHost.className = "cntc-entry-table-host";
    this.entryEmptyEl = document.createElement("div");
    this.entryEmptyEl.className = "cntc-empty";
    this.entryEmptyEl.textContent = "Select a CNTC type.";
    centerPane.append(centerTitle, this.entryTableHost, this.entryEmptyEl);

    const rightPane = document.createElement("section");
    rightPane.className = "cntc-pane cntc-detail-pane";
    const rightTitle = document.createElement("div");
    rightTitle.className = "cntc-pane-title";
    rightTitle.textContent = "Inspector";
    this.detailHost = document.createElement("div");
    this.detailHost.className = "cntc-detail-host";
    this.detailToolbarEl = document.createElement("div");
    this.detailToolbarEl.className = "cntc-detail-toolbar";
    this.detailInspectorEl = document.createElement("div");
    this.detailInspectorEl.className = "cntc-inspector-info";
    this.detailInspectorEl.textContent = "Click a hex byte to inspect the uint32 at that offset.";
    this.detailHexEl = document.createElement("pre");
    this.detailHexEl.className = "cntc-hex-dump";
    this.detailHost.append(this.detailToolbarEl, this.detailInspectorEl, this.detailHexEl);
    rightPane.append(rightTitle, this.detailHost);

    this.root.append(leftPane, centerPane, rightPane);
    this.host.replaceChildren(this.root);

    this.typeTable = new VirtualTable<CntcTypeRow>({
      columns: [
        { field: "type", caption: "Type", width: "72px", align: "right", sortable: true },
        { field: "count", caption: "Count", width: "72px", align: "right", sortable: true },
        { field: "label", caption: "Description", width: "1fr", sortable: true },
      ],
      getRowKey: (row) => row.recid,
      onRowClick: (row) => this.selectType(row.type),
      onRowActivate: (row) => this.selectType(row.type),
    });
    this.typeListEl.appendChild(this.typeTable.root);

    this.entryTable = new VirtualTable<CntcEntryRow>({
      columns: [
        { field: "rootIndex", caption: "Root", width: "64px", align: "right", sortable: true },
        { field: "namespaceIndex", caption: "Namespace", width: "86px", align: "right", sortable: true },
        { field: "size", caption: "Size", width: "64px", align: "right", sortable: true },
        { field: "uniqueId", caption: "Unique ID", width: "96px", align: "right", sortable: true },
        { field: "typeId", caption: "Type ID", width: "96px", align: "right", sortable: true },
      ],
      getRowKey: (row) => row.recid,
      onRowClick: (row) => this.selectEntry(row.entry),
      onRowActivate: (row) => this.selectEntry(row.entry),
    });
    this.entryTableHost.appendChild(this.entryTable.root);
  }

  setData(packfile: FileParser, fileName: string): void {
    this.pfBaseId = fileName.split(".", 1)[0] || "cntc";
    const mainChunk = getMainChunk(packfile);
    const entries = getEntries(mainChunk);
    this.entriesByType = groupEntries(entries);
    this.selectedType = null;
    this.selectedEntry = null;

    const typeRows = [...this.entriesByType.entries()]
      .map(([type, typeEntries]) => {
        const summary: CntcTypeSummary = {
          type,
          count: typeEntries.length,
          description: KNOWN_TYPE_DESCRIPTIONS[type] ?? "",
        };
        return {
          recid: type,
          ...summary,
          label: summary.description || "Unknown",
        };
      })
      .sort((left, right) => left.type - right.type);

    this.typeTable.setData(typeRows);
    if (typeRows.length > 0) {
      this.typeTable.setSelection(typeRows[0].recid);
      this.selectType(typeRows[0].type);
    } else {
      this.entryTable.setData([]);
      this.typeTable.setSelection(null);
      this.renderDetail(null);
    }
  }

  private selectType(type: number): void {
    this.selectedType = type;
    this.typeTable.setSelection(type);
    const entries = this.entriesByType.get(type) ?? [];
    this.entryEmptyEl.hidden = entries.length > 0;
    this.entryTableHost.hidden = entries.length === 0;
    const rows = entries.map((entry, index) => ({
      recid: index,
      rootIndex: entry.rootIndex,
      namespaceIndex: entry.namespaceIndex,
      size: entry.size,
      uniqueId: getUniqueId(entry),
      typeId: getTypeId(entry),
      entry,
    }));
    this.entryTable.setData(rows);
    if (rows.length > 0) {
      this.entryTable.setSelection(0);
      this.selectEntry(rows[0].entry);
    } else {
      this.entryTable.setSelection(null);
      this.selectEntry(null);
    }
  }

  private selectEntry(entry: CntcEntryRecord | null): void {
    this.selectedEntry = entry;
    const entries = this.selectedType == null ? [] : (this.entriesByType.get(this.selectedType) ?? []);
    if (entry == null) {
      this.entryTable.setSelection(null);
    } else {
      this.entryTable.setSelection(entries.indexOf(entry));
    }
    this.renderDetail(entry);
  }

  private renderDetail(entry: CntcEntryRecord | null): void {
    this.detailToolbarEl.replaceChildren();
    if (!entry) {
      this.detailInspectorEl.textContent = "Click a hex byte to inspect the uint32 at that offset.";
      this.detailHexEl.replaceChildren();
      return;
    }
    this.detailInspectorEl.textContent = "Click a hex byte to inspect the uint32 at that offset.";

    this.detailToolbarEl.append(
      this.buildDownloadButton("Download entry BIN", () => this.downloadSelectedEntryBinary())
    );

    this.renderHexDump(entry);
  }

  private buildDownloadButton(label: string, onClick: () => void): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  private downloadSelectedEntryBinary(): void {
    if (!this.selectedEntry) return;
    const uniqueId = getUniqueId(this.selectedEntry) ?? "unknown";
    triggerDownload(
      new Blob([this.selectedEntry.contentSlice], { type: "application/octet-stream" }),
      `${this.pfBaseId}_${this.selectedEntry.type}_${uniqueId}.cntc.bin`
    );
  }

  private renderHexDump(entry: CntcEntryRecord): void {
    this.detailHexEl.replaceChildren();

    const bytesPerLine = 16;
    for (let lineOffset = 0; lineOffset < entry.contentSlice.length; lineOffset += bytesPerLine) {
      const line = document.createElement("div");
      line.className = "cntc-hex-line";

      const offsetEl = document.createElement("span");
      offsetEl.className = "cntc-hex-offset";
      offsetEl.textContent = lineOffset.toString(16).toUpperCase().padStart(8, "0");
      line.appendChild(offsetEl);

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
        byteEl.title = `offset 0x${byteOffset.toString(16).toUpperCase()}`;
        byteEl.addEventListener("click", () => this.inspectUint32(entry, byteOffset));
        hexGroup.appendChild(byteEl);

        const asciiEl = document.createElement("span");
        asciiEl.className = "cntc-ascii-byte";
        asciiEl.textContent = byte >= 0x20 && byte <= 0x7e ? String.fromCharCode(byte) : ".";
        asciiGroup.appendChild(asciiEl);
      }

      line.append(hexGroup, asciiGroup);
      this.detailHexEl.appendChild(line);
    }
  }

  private inspectUint32(entry: CntcEntryRecord, offset: number): void {
    const value = readUint32LE(entry.contentSlice, offset);
    if (value === null) {
      this.detailInspectorEl.textContent =
        `offset 0x${offset.toString(16).toUpperCase()} (${offset}) | ` + "uint32 unavailable: not enough bytes";
      return;
    }
    this.detailInspectorEl.textContent =
      `offset 0x${offset.toString(16).toUpperCase()} (${offset}) | uint32 = ${value} | ` +
      `0x${value.toString(16).toUpperCase()}`;
  }
}

function getMainChunk(file: FileParser): CntcMainChunk {
  const mainChunk = file.getChunk("Main");
  if (!mainChunk?.data) {
    throw new Error(`Missing Main chunk in file type ${file.header?.type ?? "unknown"}`);
  }
  return mainChunk.data as CntcMainChunk;
}

function getEntries(mainChunk: CntcMainChunk): CntcEntryRecord[] {
  return mainChunk.indexEntries.map((entry, index) => {
    const begin = entry.offset;
    const end = mainChunk.indexEntries[index + 1] ? mainChunk.indexEntries[index + 1].offset : mainChunk.content.length;
    const contentSlice = mainChunk.content.slice(begin, end);
    return {
      ...entry,
      contentSlice,
      size: contentSlice.length,
    };
  });
}

function groupEntries(entries: CntcEntryRecord[]): Map<number, CntcEntryRecord[]> {
  const grouped = new Map<number, CntcEntryRecord[]>();
  for (const entry of entries) {
    const existing = grouped.get(entry.type);
    if (existing) {
      existing.push(entry);
    } else {
      grouped.set(entry.type, [entry]);
    }
  }
  return grouped;
}

function readUint32LE(bytes: Uint8Array | undefined, offset: number): number | null {
  if (!bytes || offset < 0 || offset + 4 > bytes.length) {
    return null;
  }
  return (
    (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | ((bytes[offset + 3] << 24) >>> 0)) >>> 0
  );
}

function getUniqueId(entryRecord: CntcEntryRecord): number | null {
  return readUint32LE(entryRecord.contentSlice, 20);
}

function getTypeId(entryRecord: CntcEntryRecord): number | null {
  return readUint32LE(entryRecord.contentSlice, 40);
}
