import { Cntc, FileParser, type LocalReader } from "t3d-lib";
import { triggerDownload } from "../util/download";
import { CntcExplorer, type CntcExplorerEntry, type CntcNavigationTarget } from "./cntc/cntc-explorer";
import type { ArchiveToolView } from "./archive-tool";

/**
 * Archive-wide CNTC table: scans every cntc file in the open archive, aggregates
 * entries grouped by type across files, and hands them to the shared
 * {@link CntcExplorer} for display. This wrapper only adds the things that are
 * specific to the archive-wide view: the parse-all loader, the status line, and
 * the JSON export buttons.
 */

interface CntcTableViewInit {
  reader: LocalReader;
  /** Deep-link a selected entry into the per-file CNTC view. */
  onNavigateToEntry?: (target: CntcNavigationTarget) => void;
  /** Open a (non-cntc) file by baseId, e.g. a skin's referenced model. */
  onOpenFile?: (baseId: number, newTab: boolean) => void;
}

export class CntcTableView implements ArchiveToolView {
  readonly root: HTMLDivElement;

  private reader: LocalReader;
  private resolver: InstanceType<typeof Cntc.CntcResolver>;
  private explorer: CntcExplorer;

  private statusEl: HTMLDivElement;
  private exportTypeBtn: HTMLButtonElement;
  private exportAllBtn: HTMLButtonElement;

  private loadToken = 0;
  private loading = false;

  constructor(init: CntcTableViewInit) {
    this.reader = init.reader;
    this.resolver = new Cntc.CntcResolver(this.reader);

    this.root = document.createElement("div");
    this.root.className = "archive-tool-view cntc-table-view";

    const toolbar = document.createElement("div");
    toolbar.className = "archive-tool-toolbar cntc-table-toolbar";
    this.statusEl = document.createElement("div");
    this.statusEl.className = "archive-tool-status cntc-table-status";
    this.exportTypeBtn = this.buildButton("Download selected type", () => this.downloadSelectedType());
    this.exportAllBtn = this.buildButton("Download all types", () => this.downloadAllTypes());
    const spacer = document.createElement("div");
    spacer.className = "archive-tool-toolbar-spacer cntc-table-toolbar-spacer";
    toolbar.append(this.statusEl, spacer, this.exportTypeBtn, this.exportAllBtn);

    this.explorer = new CntcExplorer({
      resolver: this.resolver,
      showSource: true,
      showOpenInFileView: true,
      onNavigateToEntry: init.onNavigateToEntry,
      onOpenFile: init.onOpenFile,
      onSelectType: () => this.updateExportState(),
    });

    this.root.append(toolbar, this.explorer.root);
    this.updateExportState();
  }

  setWaiting(message: string): void {
    this.statusEl.textContent = message;
    this.explorer.showMessage(message);
  }

  /**
   * Parses and aggregates every CNTC file. Idempotent while in flight, and
   * cancellable: a newer call (or `dispose`) bumps the token so a stale run
   * stops touching the UI.
   */
  async load(files: { mftId: number; baseId: number }[]): Promise<void> {
    if (this.loading) return;
    const token = ++this.loadToken;
    this.loading = true;

    if (files.length === 0) {
      this.statusEl.textContent = "No CNTC files in this archive.";
      this.explorer.showMessage("No CNTC files in this archive.");
      this.loading = false;
      return;
    }

    // Immediate feedback: parsing every CNTC file is slow, so show progress in
    // the status line right away instead of looking frozen.
    this.statusEl.textContent = `Parsing CNTC files… 0 / ${files.length}`;
    this.explorer.showMessage("Loading CNTC entries…");

    const entriesByType = new Map<number, CntcExplorerEntry[]>();
    let parsed = 0;
    for (const { mftId, baseId } of files) {
      if (token !== this.loadToken) return;
      try {
        const file = await this.reader.readFile(mftId, false, true);
        if (token !== this.loadToken) return;
        if (file.buffer) {
          const packfile = new FileParser(file.buffer);
          if (packfile.header.type === "cntc") {
            const entries = Cntc.getCntcEntries(Cntc.getCntcMainContent(packfile));
            for (const entry of entries) {
              const aggregated: CntcExplorerEntry = { ...entry, fileId: mftId, baseId };
              const bucket = entriesByType.get(entry.type);
              if (bucket) bucket.push(aggregated);
              else entriesByType.set(entry.type, [aggregated]);
            }
          }
        }
      } catch (err) {
        console.error("[cntc-table] failed to parse cntc file", mftId, err);
      }

      parsed += 1;
      // Yield periodically so the progress text repaints and the UI stays
      // responsive while the (serial) parse runs.
      if (parsed % 25 === 0) {
        this.statusEl.textContent = `Parsing CNTC files… ${parsed} / ${files.length}`;
        await new Promise((resolve) => setTimeout(resolve));
        if (token !== this.loadToken) return;
      }
    }

    this.loading = false;
    const totalEntries = [...entriesByType.values()].reduce((sum, list) => sum + list.length, 0);
    this.statusEl.textContent =
      `${totalEntries.toLocaleString()} entries · ${entriesByType.size} types · ` +
      `${files.length.toLocaleString()} CNTC files`;
    this.explorer.setData(entriesByType);
    this.updateExportState();
  }

  onShow(): void {
    this.explorer.onShow();
  }

  onHide(): void {
    // No GL / timers to pause.
  }

  dispose(): void {
    this.loadToken += 1;
    this.loading = false;
  }

  // ---- exports ----

  private downloadSelectedType(): void {
    const type = this.explorer.selectedType;
    if (type == null) return;
    const entries = this.explorer.allEntries().get(type) ?? [];
    this.downloadJson(`cntc-${type}-entries.json`, {
      cntcType: type,
      entryCount: entries.length,
      entries: entries.map(serializeEntry),
    });
  }

  private downloadAllTypes(): void {
    const all = this.explorer.allEntries();
    const types = [...all.keys()].sort((a, b) => a - b);
    if (types.length === 0) return;
    this.downloadJson("cntc-all-entries.json", {
      cntcTypeCount: types.length,
      totalEntryCount: types.reduce((sum, type) => sum + (all.get(type)?.length ?? 0), 0),
      cntcTypes: types.map((type) => {
        const entries = all.get(type) ?? [];
        return { cntcType: type, entryCount: entries.length, entries: entries.map(serializeEntry) };
      }),
    });
  }

  private downloadJson(fileName: string, data: unknown): void {
    triggerDownload(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }), fileName);
  }

  private updateExportState(): void {
    const type = this.explorer.selectedType;
    const all = this.explorer.allEntries();
    this.exportTypeBtn.disabled = type == null || (all.get(type)?.length ?? 0) === 0;
    this.exportAllBtn.disabled = all.size === 0;
  }

  private buildButton(label: string, onClick: () => void): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }
}

function serializeEntry(entry: CntcExplorerEntry): Record<string, unknown> {
  return {
    type: entry.type,
    fileId: entry.fileId,
    baseId: entry.baseId,
    rootIndex: entry.rootIndex,
    namespaceIndex: entry.namespaceIndex,
    size: entry.size,
    uniqueId: Cntc.getCntcEntryUniqueId(entry),
    dataId: Cntc.getCntcEntryDataId(entry),
    contentBase64: toBase64(entry.contentSlice),
  };
}

function toBase64(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}
