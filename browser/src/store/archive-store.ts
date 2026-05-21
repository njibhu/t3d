import T3D from "t3d-lib";
import type { LocalReader, ScanEntry, ScanProgress } from "t3d-lib";

export interface FileRow {
  mftId: number;
  baseIds: number[];
  type: string;
  fileSize: number;
}

export type SidebarNode =
  | { kind: "single"; id: string; label: string }
  | { kind: "group"; id: string; label: string; children: { id: string; label: string }[] };

export interface ArchiveScanState {
  status: "idle" | "scanning" | "complete" | "error";
  scanned: number;
  total: number;
  progressLabel: string;
  progressPct: number;
  errorMessage: string | null;
}

const WORKER_PATH = "./static/t3dworker.js";

/** Synthetic sidebar IDs that group multiple file types. Real file-type
 *  identifiers (e.g. "TEXTURE_DDS", "PF_MODL") are used directly. */
export const SIDEBAR_GROUP = {
  all: "All",
  pack: "packGroup",
  texture: "textureGroup",
  unsorted: "unsortedGroup",
} as const;

type StoreListener = () => void;

export class ArchiveStore {
  private localReader: LocalReader | null = null;
  private fileListByType: Record<string, Set<number>> = {};
  private rowsByMftId = new Map<number, FileRow>();
  private allRowsCache: FileRow[] | null = null;
  private listeners = new Set<StoreListener>();
  private notifyQueued = false;
  private notifyTimer: number | null = null;
  private openToken = 0;
  private rowVersion = 0;
  private sidebarVersion = 0;
  private scanVersion = 0;
  private scanState: ArchiveScanState = {
    status: "idle",
    scanned: 0,
    total: 0,
    progressLabel: "",
    progressPct: 0,
    errorMessage: null,
  };

  get reader(): LocalReader | null {
    return this.localReader;
  }

  get isLoaded(): boolean {
    return this.localReader !== null;
  }

  get currentScanState(): ArchiveScanState {
    return this.scanState;
  }

  get rowsRevision(): number {
    return this.rowVersion;
  }

  get sidebarRevision(): number {
    return this.sidebarVersion;
  }

  get scanRevision(): number {
    return this.scanVersion;
  }

  subscribe(listener: StoreListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  async openArchive(file: File, onReadyCb?: (label: string, pct: number) => void): Promise<void> {
    const token = ++this.openToken;
    onReadyCb?.("Opening archive", 0);

    this.localReader = await new Promise<LocalReader>((resolve, reject) => {
      try {
        // Intentionally omitting the 4th arg: the library reads `noIndexedDB`
        // with a double-negative (`if (noIndexedDB !== false) ...`), so passing
        // `false` here actually disables the cache and forces a full rescan.
        T3D.getLocalReader(file, (reader: LocalReader) => resolve(reader), WORKER_PATH);
      } catch (err) {
        reject(err);
      }
    });

    if (token !== this.openToken) return;

    this.fileListByType = {};
    this.rowsByMftId.clear();
    this.allRowsCache = null;
    this.rowVersion += 1;
    this.sidebarVersion += 1;
    this.scanState = {
      status: "idle",
      scanned: 0,
      total: 0,
      progressLabel: "Archive ready",
      progressPct: 100,
      errorMessage: null,
    };
    this.scanVersion += 1;
    this.notify(true);
    onReadyCb?.("Archive ready", 100);

    void this.startBackgroundScan(token);
  }

  async retriggerFullScan(): Promise<void> {
    if (!this.localReader || this.scanState.status === "scanning") return;
    await this.startBackgroundScan(this.openToken, { forceRescan: true });
  }

  getAllRows(): FileRow[] {
    if (this.allRowsCache) return this.allRowsCache;
    const rows = [...this.rowsByMftId.values()];
    rows.sort((a, b) => a.mftId - b.mftId);
    this.allRowsCache = rows;
    return rows;
  }

  getFilteredRows(nodeId: string): FileRow[] {
    const all = this.getAllRows();
    if (nodeId === SIDEBAR_GROUP.all) return all;
    if (nodeId === SIDEBAR_GROUP.pack) return all.filter((r) => r.type.startsWith("PF"));
    if (nodeId === SIDEBAR_GROUP.texture) return all.filter((r) => r.type.startsWith("TEXTURE"));
    if (nodeId === SIDEBAR_GROUP.unsorted) return all.filter((r) => isUnsorted(r.type));
    return all.filter((r) => r.type === nodeId);
  }

  buildSidebarNodes(): SidebarNode[] {
    const out: SidebarNode[] = [{ kind: "single", id: SIDEBAR_GROUP.all, label: "All" }];

    const packChildren: { id: string; label: string }[] = [];
    const textureChildren: { id: string; label: string }[] = [];
    const unsortedChildren: { id: string; label: string }[] = [];

    for (const fileType of Object.keys(this.fileListByType).sort()) {
      if (!this.fileListByType[fileType]?.size) continue;
      if (fileType.startsWith("TEXTURE")) {
        textureChildren.push({ id: fileType, label: fileType });
      } else if (fileType.startsWith("PF")) {
        packChildren.push({ id: fileType, label: fileType });
      } else if (fileType === "BINARIES") {
        out.push({ kind: "single", id: fileType, label: "Binaries" });
      } else if (fileType === "STRINGS") {
        out.push({ kind: "single", id: fileType, label: "Strings" });
      } else if (fileType === "UNKNOWN") {
        out.push({ kind: "single", id: fileType, label: "Unknown" });
      } else {
        unsortedChildren.push({ id: fileType, label: fileType });
      }
    }

    if (packChildren.length) {
      out.push({ kind: "group", id: SIDEBAR_GROUP.pack, label: "Pack Files", children: packChildren });
    }
    if (textureChildren.length) {
      out.push({ kind: "group", id: SIDEBAR_GROUP.texture, label: "Texture files", children: textureChildren });
    }
    if (unsortedChildren.length) {
      out.push({ kind: "group", id: SIDEBAR_GROUP.unsorted, label: "Unsorted", children: unsortedChildren });
    }
    return out;
  }

  private async startBackgroundScan(token: number, options?: { forceRescan?: boolean }): Promise<void> {
    if (!this.localReader) return;

    this.scanState = {
      status: "scanning",
      scanned: 0,
      total: 0,
      progressLabel: "Finding types",
      progressPct: 0,
      errorMessage: null,
    };
    this.scanVersion += 1;
    this.notify(true);

    try {
      await T3D.getFileListIncremental(
        this.localReader,
        {
          onStart: (total) => {
            if (token !== this.openToken) return;
            this.scanState = { ...this.scanState, status: "scanning", total, scanned: 0, progressPct: 0 };
            this.scanVersion += 1;
            this.notify(true);
          },
          onEntry: (entry: ScanEntry) => {
            if (token !== this.openToken) return;
            this.applyScanEntry(entry);
          },
          onProgress: (progress: ScanProgress) => {
            if (token !== this.openToken) return;
            this.scanState = {
              ...this.scanState,
              status: "scanning",
              scanned: progress.scanned,
              total: progress.total,
              progressLabel: progress.label,
              progressPct: progress.pct,
            };
            this.scanVersion += 1;
            this.notify();
          },
          onComplete: () => {
            if (token !== this.openToken) return;
            this.scanState = {
              ...this.scanState,
              status: "complete",
              scanned: this.scanState.total || this.scanState.scanned,
              progressLabel: "Type scan complete",
              progressPct: 100,
              errorMessage: null,
            };
            this.scanVersion += 1;
            this.notify(true);
          },
          onError: (error: Error) => {
            if (token !== this.openToken) return;
            this.scanState = {
              ...this.scanState,
              status: "error",
              progressLabel: "Type scan failed",
              errorMessage: error.message,
            };
            this.scanVersion += 1;
            this.notify(true);
          },
        },
        options
      );
    } catch (error) {
      if (token !== this.openToken) return;
      this.scanState = {
        ...this.scanState,
        status: "error",
        progressLabel: "Type scan failed",
        errorMessage: (error as Error).message,
      };
      this.scanVersion += 1;
      this.notify(true);
    }
  }

  private applyScanEntry(entry: ScanEntry): void {
    const prev = this.rowsByMftId.get(entry.mftId);
    let sidebarChanged = false;
    if (prev?.type && prev.type !== entry.fileType) {
      const prevGroup = this.fileListByType[prev.type];
      prevGroup?.delete(entry.mftId);
      if (prevGroup?.size === 0) {
        delete this.fileListByType[prev.type];
        sidebarChanged = true;
      }
    }

    const typeGroup = this.fileListByType[entry.fileType];
    if (!typeGroup) {
      this.fileListByType[entry.fileType] = new Set<number>();
      sidebarChanged = true;
    }
    const nextTypeGroup = this.fileListByType[entry.fileType]!;
    nextTypeGroup.add(entry.mftId);
    if (
      prev &&
      prev.type === entry.fileType &&
      prev.fileSize === entry.size &&
      prev.baseIds.length === entry.baseIdList.length &&
      prev.baseIds.every((id, index) => id === entry.baseIdList[index])
    ) {
      return;
    }
    this.rowsByMftId.set(entry.mftId, {
      mftId: entry.mftId,
      baseIds: entry.baseIdList,
      type: entry.fileType,
      fileSize: entry.size,
    });
    this.allRowsCache = null;
    this.rowVersion += 1;
    if (sidebarChanged) this.sidebarVersion += 1;
    this.notify();
  }

  private notify(immediate = false): void {
    if (immediate) {
      if (this.notifyTimer != null) {
        clearTimeout(this.notifyTimer);
        this.notifyTimer = null;
      }
      this.notifyQueued = false;
      for (const listener of this.listeners) listener();
      return;
    }
    if (this.notifyQueued) return;
    this.notifyQueued = true;
    this.notifyTimer = window.setTimeout(() => {
      this.notifyQueued = false;
      this.notifyTimer = null;
      for (const listener of this.listeners) listener();
    }, 100);
  }
}

function isUnsorted(t: string): boolean {
  return !t.startsWith("TEXTURE") && !t.startsWith("PF") && t !== "BINARIES" && t !== "STRINGS" && t !== "UNKNOWN";
}
