import T3D, { type LocalReader, type ScanProgress } from "t3d-lib";
import type { MapDefinition } from "../types.js";
import { toError, toErrorMessage } from "../errors.js";

const WORKER_PATH = "./static/t3dworker.js";

type StoreListener = () => void;

export interface ArchiveScanState {
  status: "idle" | "scanning" | "complete" | "error";
  label: string;
  pct: number | null;
  scanned: number;
  total: number;
  error: string | null;
}

export interface ArchiveStoreSnapshot {
  status: "idle" | "opening" | "ready" | "error";
  reader: LocalReader | null;
  fileName: string | null;
  maps: MapDefinition[];
  scan: ArchiveScanState;
  error: string | null;
}

export class ArchiveStore {
  private listeners = new Set<StoreListener>();
  private openToken = 0;
  private snapshot: ArchiveStoreSnapshot = {
    status: "idle",
    reader: null,
    fileName: null,
    maps: [],
    scan: {
      status: "idle",
      label: "",
      pct: null,
      scanned: 0,
      total: 0,
      error: null,
    },
    error: null,
  };

  subscribe(listener: StoreListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  getState(): ArchiveStoreSnapshot {
    return this.snapshot;
  }

  async openArchive(file: File): Promise<void> {
    const token = ++this.openToken;
    this.patch({
      status: "opening",
      fileName: file.name,
      error: null,
      maps: [],
      scan: {
        status: "idle",
        label: "Opening archive",
        pct: null,
        scanned: 0,
        total: 0,
        error: null,
      },
    });

    try {
      const reader = await new Promise<LocalReader>((resolve, reject) => {
        try {
          T3D.getLocalReader(file, (nextReader: LocalReader) => resolve(nextReader), WORKER_PATH);
        } catch (error) {
          reject(toError(error));
        }
      });

      if (token !== this.openToken) return;

      const maps = await reader.getMapList();
      if (token !== this.openToken) return;

      this.patch({
        status: "ready",
        reader,
        fileName: file.name,
        maps,
        error: null,
        scan: {
          status: "idle",
          label: "Archive ready",
          pct: 100,
          scanned: 0,
          total: 0,
          error: null,
        },
      });

      void this.scanArchive(false, token);
    } catch (error) {
      if (token !== this.openToken) return;
      this.patch({
        status: "error",
        error: toErrorMessage(error),
        scan: {
          status: "error",
          label: "Archive failed to open",
          pct: null,
          scanned: 0,
          total: 0,
          error: toErrorMessage(error),
        },
      });
      throw error;
    }
  }

  async deepScan(): Promise<void> {
    await this.scanArchive(true, this.openToken);
  }

  private async scanArchive(forceRescan: boolean, token: number): Promise<void> {
    const reader = this.snapshot.reader;
    if (!reader) return;

    this.patch({
      scan: {
        status: "scanning",
        label: forceRescan ? "Deep scanning archive" : "Indexing archive",
        pct: 0,
        scanned: 0,
        total: 0,
        error: null,
      },
    });

    try {
      await T3D.getFileListIncremental(
        reader,
        {
          onEntry: () => {},
          onProgress: (progress: ScanProgress) => {
            if (token !== this.openToken) return;
            this.patch({
              scan: {
                status: "scanning",
                label: progress.label,
                pct: progress.pct,
                scanned: progress.scanned,
                total: progress.total,
                error: null,
              },
            });
          },
          onComplete: () => {
            void this.completeScan(token);
          },
          onError: (error: Error) => {
            if (token !== this.openToken) return;
            this.patch({
              scan: {
                status: "error",
                label: "Archive scan failed",
                pct: null,
                scanned: this.snapshot.scan.scanned,
                total: this.snapshot.scan.total,
                error: error.message,
              },
            });
          },
        },
        { forceRescan }
      );
    } catch (error) {
      if (token !== this.openToken) return;
      this.patch({
        scan: {
          status: "error",
          label: "Archive scan failed",
          pct: null,
          scanned: this.snapshot.scan.scanned,
          total: this.snapshot.scan.total,
          error: toErrorMessage(error),
        },
      });
    }
  }

  private async completeScan(token: number): Promise<void> {
    const reader = this.snapshot.reader;
    if (!reader || token !== this.openToken) return;
    const maps = await reader.getMapList();
    if (token !== this.openToken) return;
    this.patch({
      maps,
      scan: {
        status: "complete",
        label: "Archive scan complete",
        pct: 100,
        scanned: this.snapshot.scan.total,
        total: this.snapshot.scan.total,
        error: null,
      },
    });
  }

  private patch(next: Partial<ArchiveStoreSnapshot>): void {
    this.snapshot = { ...this.snapshot, ...next };
    for (const listener of this.listeners) {
      listener();
    }
  }
}
