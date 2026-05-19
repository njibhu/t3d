import T3D from "t3d-lib";

/**
 * The library exposes a single `Logger.logFunctions[TYPE_PROGRESS]` slot,
 * which would force consumers (archive indexing, map rendering) to clobber
 * each other if they each assigned to it. This module fans events from
 * that one slot out to any number of `onProgress` subscribers.
 *
 * Call `installProgressBus()` once during app boot; subsequent assignments
 * to the library's progress slot will be overwritten.
 */

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
