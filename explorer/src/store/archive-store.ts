import T3D, { LocalReader } from "t3d-lib";
import { MapEntry } from "../types";
import { onProgress } from "./progress-bus";

const WORKER_PATH = "./static/t3dworker.js";

export class ArchiveStore {
  private localReader: LocalReader | null = null;
  private mapList: MapEntry[] = [];
  private archiveName = "";

  get reader(): LocalReader | null {
    return this.localReader;
  }

  get isLoaded(): boolean {
    return this.localReader !== null;
  }

  get fileName(): string {
    return this.archiveName;
  }

  async openArchive(file: File, onProgressCb?: (label: string, pct: number) => void): Promise<void> {
    const unsubscribe = onProgressCb ? onProgress(onProgressCb) : () => {};
    try {
      await new Promise<void>((resolve, reject) => {
        try {
          this.localReader = T3D.getLocalReader(file, () => resolve(), WORKER_PATH);
        } catch (err) {
          reject(err);
        }
      });
      this.archiveName = file.name;
      this.mapList = await this.localReader!.getMapList();
      this.mapList.sort(sortMaps);
    } finally {
      unsubscribe();
    }
  }

  async scanArchiveForMaps(onProgressCb?: (label: string, pct: number) => void): Promise<MapEntry[]> {
    if (!this.localReader) throw new Error("Open an archive first.");

    const unsubscribe = onProgressCb ? onProgress(onProgressCb) : () => {};
    try {
      await this.localReader.readFileList();
      this.mapList = await this.localReader.getMapList();
      this.mapList.sort(sortMaps);
      return this.getMapList();
    } finally {
      unsubscribe();
    }
  }

  getMapList(): MapEntry[] {
    return [...this.mapList];
  }

  findMap(baseId: number): MapEntry | undefined {
    return this.mapList.find((entry) => entry.baseId === baseId);
  }
}

function sortMaps(a: MapEntry, b: MapEntry): number {
  if (a.categoryIndex !== b.categoryIndex) return a.categoryIndex - b.categoryIndex;
  return a.name.localeCompare(b.name);
}
