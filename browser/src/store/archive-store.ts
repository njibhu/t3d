import T3D, { LocalReader } from "t3d-lib";
import { onProgress } from "./progress-bus";

export interface FileRow {
  mftId: number;
  baseIds: number[];
  type: string;
  fileSize: number;
}

export type SidebarNode =
  | { kind: "single"; id: string; label: string }
  | { kind: "group"; id: string; label: string; children: { id: string; label: string }[] };

const WORKER_PATH = "./static/t3dworker.js";

/** Synthetic sidebar IDs that group multiple file types. Real file-type
 *  identifiers (e.g. "TEXTURE_DDS", "PF_MODL") are used directly. */
export const SIDEBAR_GROUP = {
  all: "All",
  pack: "packGroup",
  texture: "textureGroup",
  unsorted: "unsortedGroup",
} as const;

export class ArchiveStore {
  private localReader: LocalReader | null = null;
  private fileListByType: Record<string, number[]> = {};
  private reverseIndex: number[][] = [];
  private allRowsCache: FileRow[] | null = null;

  get reader(): LocalReader | null {
    return this.localReader;
  }

  get isLoaded(): boolean {
    return this.localReader !== null;
  }

  async openArchive(file: File, onProgressCb?: (label: string, pct: number) => void): Promise<void> {
    const unsubscribe = onProgressCb ? onProgress(onProgressCb) : () => {};

    await new Promise<void>((resolve, reject) => {
      try {
        // Intentionally omitting the 4th arg: the library reads `noIndexedDB`
        // with a double-negative (`if (noIndexedDB !== false) …`), so passing
        // `false` here actually disables the cache and forces a full rescan.
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
    unsubscribe();
  }

  getAllRows(): FileRow[] {
    if (this.allRowsCache) return this.allRowsCache;
    if (!this.localReader) return [];

    const rows: FileRow[] = [];
    for (const fileType in this.fileListByType) {
      for (const mftId of this.fileListByType[fileType]) {
        const meta = this.localReader.getFileMeta(mftId);
        const fileSize = meta ? meta.size : 0;
        // MFT slots 0..15 are reserved metadata, never user-facing files.
        if (fileSize > 0 && mftId > 15) {
          rows.push({
            mftId,
            baseIds: this.reverseIndex[mftId] ?? [],
            type: fileType,
            fileSize,
          });
        }
      }
    }
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

    if (packChildren.length)
      out.push({ kind: "group", id: SIDEBAR_GROUP.pack, label: "Pack Files", children: packChildren });
    if (textureChildren.length)
      out.push({ kind: "group", id: SIDEBAR_GROUP.texture, label: "Texture files", children: textureChildren });
    if (unsortedChildren.length)
      out.push({ kind: "group", id: SIDEBAR_GROUP.unsorted, label: "Unsorted", children: unsortedChildren });
    return out;
  }
}

function isUnsorted(t: string): boolean {
  return !t.startsWith("TEXTURE") && !t.startsWith("PF") && t !== "BINARIES" && t !== "STRINGS" && t !== "UNKNOWN";
}
