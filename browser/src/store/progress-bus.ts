import T3D from "t3d-lib";

/// Fan-out for the library's TYPE_PROGRESS log channel. The library exposes
/// a single `logFunctions[TYPE_PROGRESS]` slot; if multiple consumers
/// (archive indexing, map renderers, …) want to listen they would otherwise
/// clobber each other. This module installs ONE dispatcher into that slot
/// at boot time and lets consumers subscribe via `onProgress`.

export type ProgressListener = (label: string, pct: number) => void;

const listeners = new Set<ProgressListener>();

T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = (label: string, pct: number) => {
  for (const fn of listeners) fn(label, pct);
};

/// Subscribe to library progress events. Returns an unsubscribe handle.
export function onProgress(fn: ProgressListener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
