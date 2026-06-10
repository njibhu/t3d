import { serializeExplorerUrl, urlStateFromScene } from "./url-state.js";
import type { CameraSnapshot, ExplorerUrlState, LayerKey } from "../types.js";

export interface UrlSyncDeps {
  getMapId(): number | null;
  getCameraSnapshot(): CameraSnapshot;
  isPhysicsEnabled(): boolean;
  getActiveEnvironmentId(): string | null;
  getAntialias(): boolean;
  getVisibleLayers(): Record<LayerKey, boolean>;
  getUrlState(): ExplorerUrlState;
  setUrlState(next: ExplorerUrlState): void;
}

/**
 * Mirrors the live scene/session state into the location hash so views are shareable,
 * and clears the hash when no map is loaded. Owns its polling timer and the last-written
 * value; reads and writes explorer state exclusively through {@link UrlSyncDeps}.
 */
export class UrlSync {
  private intervalId = 0;
  private lastSerialized = "";

  constructor(private readonly deps: UrlSyncDeps) {}

  start(): void {
    if (this.intervalId) return;
    this.intervalId = window.setInterval(() => this.tick(), 250);
  }

  stop(): void {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
    this.intervalId = 0;
  }

  private tick(): void {
    const mapId = this.deps.getMapId();
    if (mapId == null) {
      if (this.lastSerialized) {
        this.lastSerialized = "";
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      return;
    }

    const snapshot = this.deps.getCameraSnapshot();
    const next = urlStateFromScene(
      {
        ...this.deps.getUrlState(),
        mapId,
        layers: { ...this.deps.getVisibleLayers() },
        physics: this.deps.isPhysicsEnabled(),
        environmentId: this.deps.getActiveEnvironmentId(),
        antialias: this.deps.getAntialias(),
      },
      {
        cameraMode: snapshot.mode,
        position: snapshot.position,
        rotation: snapshot.rotation,
        orbitalTarget: snapshot.orbitalTarget,
        zoom: snapshot.zoom,
      }
    );
    this.deps.setUrlState(next);

    const serialized = serializeExplorerUrl(next);
    if (serialized !== this.lastSerialized) {
      this.lastSerialized = serialized;
      const url = new URL(window.location.href);
      url.hash = serialized;
      history.replaceState(null, "", url.toString());
    }
  }
}
