import type { ArchiveStoreSnapshot } from "../store/archive-store.js";
import type { LayerStateRecord } from "../store/layer-state.js";
import type { CameraMode, ExplorerUrlState, LayerKey } from "../types.js";

/**
 * The intent + read surface the view panels ({@link LauncherPanel}, {@link SettingsDrawer})
 * use to talk to the application. The App is the single owner of shared state and the scene
 * and implements this; panels never mutate state directly.
 */
export interface ExplorerController {
  // shared state (read)
  getArchiveState(): ArchiveStoreSnapshot;
  getUrlState(): ExplorerUrlState;
  getLayerState(): LayerStateRecord;
  isMapLoaded(): boolean;
  isLauncherOpen(): boolean;
  isSettingsOpen(): boolean;

  // launcher intents
  openArchive(file: File): void;
  runDeepScan(): void;
  loadSelectedMap(): void;
  toggleStartupLayer(key: LayerKey): void;

  // settings intents + scene reads
  getCameraMode(): CameraMode;
  setCameraMode(mode: CameraMode): void;
  isPhysicsEnabled(): boolean;
  togglePhysics(): void;
  hasCollisionsLoaded(): boolean;
  getAntialias(): boolean;
  toggleAntialias(): void;
  toggleSceneLayer(key: LayerKey): void;
  setFog(value: number): void;
  setMovementSpeed(value: number): void;
  setLightIntensity(value: number): void;
  setShadowStrength(value: number): void;
  setCollisionOpacity(value: number): void;
  getEnvironmentOptions(): Array<{ id: string; label: string }>;
  getActiveEnvironmentId(): string | null;
  setEnvironment(id: string | null): void;
  getCurrentMapId(): number | null;
  takeScreenshot(): void;
}
