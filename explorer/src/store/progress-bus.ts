import T3D from "t3d-lib";

export type ProgressListener = (label: string, pct: number) => void;

const listeners = new Set<ProgressListener>();

export function installProgressBus(): void {
  T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = (label: string, pct: number) => {
    for (const fn of listeners) fn(label, pct);
  };
}

export function onProgress(fn: ProgressListener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
