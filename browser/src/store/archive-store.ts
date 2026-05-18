import T3D, { LocalReader } from "t3d-lib";
import { onProgress } from "./progress-bus";

export interface FileRow {
  mftId: number;
  baseId: number; // first baseId for display
  baseIds: number[]; // all baseIds for this file
  type: string;
  fileSize: number;
}

export type SidebarNode =
  | { kind: "single"; id: string; label: string }
  | { kind: "group"; id: string; label: string; children: { id: string; label: string }[] };

const WORKER_PATH = "./static/t3dworker.js";

export class ArchiveStore extends EventTarget {
  private localReader: LocalReader | null = null;
  private fileListByType: Record<string, number[]> = {};
  private reverseIndex: number[][] = [];

  /// Flat row array, computed lazily on first request
  private allRowsCache: FileRow[] | null = null;
  /// Lookup mft → row
  private rowByMft: Map<number, FileRow> = new Map();

  get reader(): LocalReader | null {
    return this.localReader;
  }

  get isLoaded(): boolean {
    return this.localReader !== null;
  }

  async openArchive(file: File, onProgressCb?: (label: string, pct: number) => void): Promise<void> {
    /// Subscribe to library progress while opening, then unsubscribe.
    const unsub = onProgressCb ? onProgress(onProgressCb) : () => {};

    await new Promise<void>((resolve, reject) => {
      try {
        /// Don't pass the 4th arg (noIndexedDB). The library's check is a
        /// double-negative: `if (settings.noIndexedDB !== false)` means
        /// passing `false` here actually DISABLES the IndexedDB cache and
        /// forces a full rescan on every reload.
        this.localReader = T3D.getLocalReader(file, () => resolve(), WORKER_PATH);
      } catch (err) {
        reject(err);
      }
    });

    await new Promise<void>((resolve) => {
      T3D.getFileListAsync(this.localReader!, (files) => {
        this.fileListByType = files;
        this.reverseIndex = this.localReader!.getReverseIndex();
        resolve();
      });
    });

    this.allRowsCache = null;
    this.rowByMft.clear();
    unsub();
    this.dispatchEvent(new Event("archive-loaded"));
  }

  /// Get all rows (lazy build, cached).
  getAllRows(): FileRow[] {
    if (this.allRowsCache) return this.allRowsCache;
    if (!this.localReader) return [];

    const rows: FileRow[] = [];
    for (const fileType in this.fileListByType) {
      for (const mftId of this.fileListByType[fileType]) {
        const meta = this.localReader.getFileMeta(mftId);
        const baseIds = this.reverseIndex[mftId] ?? [];
        const fileSize = meta ? meta.size : 0;
        if (fileSize > 0 && mftId > 15) {
          const row: FileRow = {
            mftId,
            baseId: baseIds[0] ?? 0,
            baseIds,
            type: fileType,
            fileSize,
          };
          rows.push(row);
          this.rowByMft.set(mftId, row);
        }
      }
    }
    rows.sort((a, b) => a.mftId - b.mftId);
    this.allRowsCache = rows;
    return rows;
  }

  /// Filter the cached rows by a sidebar node id.
  /// "All" → everything. "packGroup"/"textureGroup" → prefix groups.
  /// Anything else is a literal file-type match.
  getFilteredRows(nodeId: string): FileRow[] {
    const all = this.getAllRows();
    if (nodeId === "All") return all;
    if (nodeId === "packGroup") return all.filter((r) => r.type.startsWith("PF"));
    if (nodeId === "textureGroup") return all.filter((r) => r.type.startsWith("TEXTURE"));
    if (nodeId === "unsortedGroup") return all.filter((r) => isUnsorted(r.type));
    return all.filter((r) => r.type === nodeId);
  }

  getRowByMft(mftId: number): FileRow | undefined {
    if (!this.allRowsCache) this.getAllRows();
    return this.rowByMft.get(mftId);
  }

  /// Build the sidebar tree using the same grouping rules as v1
  /// (browser/src/index.js:311-363 in v1).
  buildSidebarNodes(): SidebarNode[] {
    const out: SidebarNode[] = [];
    out.push({ kind: "single", id: "All", label: "All" });

    const packChildren: { id: string; label: string }[] = [];
    const textureChildren: { id: string; label: string }[] = [];
    const unsortedChildren: { id: string; label: string }[] = [];

    for (const fileType of Object.keys(this.fileListByType).sort()) {
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

    if (packChildren.length > 0) {
      out.push({ kind: "group", id: "packGroup", label: "Pack Files", children: packChildren });
    }
    if (textureChildren.length > 0) {
      out.push({ kind: "group", id: "textureGroup", label: "Texture files", children: textureChildren });
    }
    if (unsortedChildren.length > 0) {
      out.push({ kind: "group", id: "unsortedGroup", label: "Unsorted", children: unsortedChildren });
    }
    return out;
  }
}

function isUnsorted(t: string): boolean {
  if (t.startsWith("TEXTURE")) return false;
  if (t.startsWith("PF")) return false;
  if (t === "BINARIES" || t === "STRINGS" || t === "UNKNOWN") return false;
  return true;
}
