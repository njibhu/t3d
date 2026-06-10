import type { ArchiveStoreSnapshot } from "../store/archive-store.js";

/** Human-readable one-line summary of the archive's load/scan status. */
export function buildArchiveInfo(state: ArchiveStoreSnapshot): string {
  if (state.status === "idle") {
    return "Choose a local archive to begin.";
  }
  if (state.status === "opening") {
    return state.fileName ? `Opening ${state.fileName}...` : "Opening archive...";
  }
  if (state.status === "error") {
    return "Archive failed to open.";
  }

  const scanBits = (() => {
    if (state.scan.status === "scanning") {
      return `Archive scan: ${state.scan.pct ?? 0}%`;
    }
    if (state.scan.status === "complete") {
      return "Archive scan complete";
    }
    if (state.scan.status === "error") {
      return "Archive scan failed";
    }
    return "Archive ready";
  })();

  return `${state.fileName ?? "Archive loaded"} · ${state.maps.length.toLocaleString()} known maps · ${scanBits}`;
}

export function formatRangeValue(value: number, step: number): string {
  return step >= 1 ? `${Math.round(value)}` : `${Math.round(value * 100) / 100}`;
}
