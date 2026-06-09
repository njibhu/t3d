import { ProgressBar } from "./components/progress-bar.js";
import { ExplorerScene } from "./scene/explorer-scene.js";
import { ArchiveStore } from "./store/archive-store.js";
import {
  createLayerState,
  markLayerError,
  markLayerHidden,
  markLayerLoading,
  markLayerVisible,
  setLayerRequested,
  visibleLayerSelection,
  type LayerStateRecord,
} from "./store/layer-state.js";
import { onProgress } from "./store/progress-bus.js";
import { createExplorerSessionState, setRendererAntialias, switchCameraMode } from "./store/session-state.js";
import { createDefaultExplorerUrlState, parseExplorerUrl } from "./store/url-state.js";
import { UrlSync } from "./store/url-sync.js";
import { toErrorMessage } from "./errors.js";
import { LauncherPanel } from "./ui/launcher-panel.js";
import { SettingsDrawer } from "./ui/settings-drawer.js";
import { showToast } from "./ui/toast.js";
import { layerLabel } from "./ui/format.js";
import type { ExplorerController } from "./ui/explorer-controller.js";
import type { ArchiveStoreSnapshot } from "./store/archive-store.js";
import {
  DEFAULT_LAYER_SELECTION,
  LAYER_KEYS,
  type CameraMode,
  type ExplorerUrlState,
  type LayerKey,
  type ProgressState,
} from "./types.js";

/**
 * Composition root. Owns the shared state (URL, session, and layer state), the scene, and
 * the stores, and implements {@link ExplorerController} — the single place state mutates.
 * The launcher and settings views render from this and route intents back through it.
 */
export class App implements ExplorerController {
  private readonly root: HTMLElement;
  private readonly archiveStore = new ArchiveStore();
  private readonly scene = new ExplorerScene();

  private readonly initialUrlState = parseExplorerUrl(window.location.hash);
  private currentUrlState: ExplorerUrlState = createDefaultExplorerUrlState();
  private sessionState = createExplorerSessionState();
  private layerState = createLayerState();
  private autoLoadAttempted = false;

  private launcherOpen = true;
  private settingsOpen = false;
  private sceneProgress: ProgressState = { visible: false, label: "", pct: null };

  private globalProgress!: ProgressBar;
  private pointerHintEl!: HTMLDivElement;
  private launcherHandle!: HTMLButtonElement;
  private settingsHandle!: HTMLButtonElement;
  private launcher!: LauncherPanel;
  private settings!: SettingsDrawer;
  private urlSync!: UrlSync;

  constructor(root: HTMLElement) {
    this.root = root;
    this.currentUrlState = {
      ...createDefaultExplorerUrlState(),
      ...this.initialUrlState,
      layers: { ...DEFAULT_LAYER_SELECTION, ...this.initialUrlState.layers },
    };
    this.sessionState = createExplorerSessionState({
      mapId: this.currentUrlState.mapId,
      cameraMode: this.currentUrlState.cameraMode,
      antialias: this.currentUrlState.antialias,
      physics: this.currentUrlState.physics,
      layers: this.currentUrlState.layers,
    });
    this.layerState = createLayerState(this.currentUrlState.layers);
  }

  init(): void {
    this.buildShell();
    this.attachStore();
    this.attachSceneEvents();
    this.applyInitialSettingsToScene();
    this.urlSync = new UrlSync({
      getMapId: () => this.scene.getCurrentMapId(),
      getCameraSnapshot: () => this.scene.getCameraSnapshot(),
      isPhysicsEnabled: () => this.scene.isPhysicsEnabled(),
      getActiveEnvironmentId: () => this.scene.getActiveEnvironmentId(),
      getAntialias: () => this.sessionState.antialias,
      getVisibleLayers: () => visibleLayerSelection(this.layerState),
      getUrlState: () => this.currentUrlState,
      setUrlState: (next) => {
        this.currentUrlState = next;
      },
    });
    this.urlSync.start();
    this.render();
  }

  // --- ExplorerController: reads ------------------------------------------

  getArchiveState(): ArchiveStoreSnapshot {
    return this.archiveStore.getState();
  }

  getUrlState(): ExplorerUrlState {
    return this.currentUrlState;
  }

  getLayerState(): LayerStateRecord {
    return this.layerState;
  }

  isMapLoaded(): boolean {
    return this.scene.getCurrentMapId() != null;
  }

  isLauncherOpen(): boolean {
    return this.launcherOpen;
  }

  isSettingsOpen(): boolean {
    return this.settingsOpen;
  }

  getCameraMode(): CameraMode {
    return this.scene.getCameraMode();
  }

  isPhysicsEnabled(): boolean {
    return this.scene.isPhysicsEnabled();
  }

  hasCollisionsLoaded(): boolean {
    return this.scene.hasCollisionsLoaded();
  }

  getAntialias(): boolean {
    return this.sessionState.antialias;
  }

  getEnvironmentOptions(): Array<{ id: string; label: string }> {
    return this.scene.getEnvironmentOptions();
  }

  getActiveEnvironmentId(): string | null {
    return this.scene.getActiveEnvironmentId();
  }

  getCurrentMapId(): number | null {
    return this.scene.getCurrentMapId();
  }

  // --- ExplorerController: intents ----------------------------------------

  openArchive(file: File): void {
    void this.runOpenArchive(file);
  }

  runDeepScan(): void {
    void this.runDeepScanTask();
  }

  loadSelectedMap(): void {
    void this.loadMap(false);
  }

  toggleStartupLayer(key: LayerKey): void {
    const current = this.layerState[key].requested;
    this.layerState = setLayerRequested(this.layerState, key, !current);
    this.syncLayerSelectionToState();
    this.render();
  }

  toggleSceneLayer(key: LayerKey): void {
    void this.toggleSceneLayerTask(key);
  }

  setCameraMode(mode: CameraMode): void {
    this.sessionState = switchCameraMode(this.sessionState, mode, this.scene.hasCollisionsLoaded());
    this.currentUrlState.cameraMode = mode;
    this.scene.setCameraMode(mode);
    this.render();
  }

  togglePhysics(): void {
    const enabled = this.scene.setPhysicsEnabled(!this.scene.isPhysicsEnabled());
    this.currentUrlState.physics = enabled;
    this.sessionState = { ...this.sessionState, physics: enabled };
    this.render();
  }

  toggleAntialias(): void {
    void this.toggleAntialiasTask();
  }

  setFog(value: number): void {
    this.currentUrlState.fog = value;
    this.scene.setFogDistance(value);
  }

  setMovementSpeed(value: number): void {
    this.currentUrlState.movementSpeed = value;
    this.scene.setMovementSpeed(value);
  }

  setLightIntensity(value: number): void {
    this.currentUrlState.lightIntensity = value;
    this.scene.setLightIntensity(value);
  }

  setShadowStrength(value: number): void {
    this.currentUrlState.shadowStrength = value;
    this.scene.setShadowStrength(value);
  }

  setCollisionOpacity(value: number): void {
    this.currentUrlState.collisionOpacity = value;
    this.scene.setCollisionOpacity(value);
  }

  setEnvironment(id: string | null): void {
    this.currentUrlState.environmentId = id;
    this.scene.setEnvironmentVariant(id);
  }

  takeScreenshot(): void {
    this.scene.takeScreenshot();
  }

  // --- shell ---------------------------------------------------------------

  private buildShell(): void {
    this.root.innerHTML = "";
    this.root.className = "explorer-app";

    const shell = document.createElement("div");
    shell.className = "explorer-shell";

    const sceneHost = document.createElement("div");
    sceneHost.className = "scene-host";
    shell.appendChild(sceneHost);
    this.scene.mount(sceneHost);

    const veil = document.createElement("div");
    veil.className = "scene-veil";
    shell.appendChild(veil);

    const hud = document.createElement("header");
    hud.className = "hud";

    const brand = document.createElement("div");
    brand.className = "hud-brand";
    brand.innerHTML = `<span class="hud-kicker">Tyria 3D</span><strong>T3D Explorer</strong>`;
    hud.appendChild(brand);
    shell.appendChild(hud);

    this.globalProgress = new ProgressBar("global-progress");
    shell.appendChild(this.globalProgress.root);

    this.launcher = new LauncherPanel(this);
    shell.appendChild(this.launcher.root);

    this.settings = new SettingsDrawer(this);
    shell.appendChild(this.settings.root);

    // Edge handles that slide the panels in and out (shown once a map is loaded).
    this.launcherHandle = this.buildSideHandle("Maps", "left", () => {
      this.launcherOpen = !this.launcherOpen;
      this.render();
    });
    this.settingsHandle = this.buildSideHandle("Settings", "right", () => {
      this.settingsOpen = !this.settingsOpen;
      this.render();
    });
    shell.append(this.launcherHandle, this.settingsHandle);

    this.pointerHintEl = document.createElement("div");
    this.pointerHintEl.className = "pointer-hint";
    shell.appendChild(this.pointerHintEl);

    this.root.appendChild(shell);
  }

  private buildSideHandle(label: string, side: "left" | "right", onClick: () => void): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `side-handle side-handle--${side}`;
    button.setAttribute("aria-expanded", "false");
    const chevron = document.createElement("span");
    chevron.className = "side-handle-chevron";
    chevron.textContent = "›";
    chevron.setAttribute("aria-hidden", "true");
    const text = document.createElement("span");
    text.className = "side-handle-label";
    text.textContent = label;
    button.append(chevron, text);
    button.addEventListener("click", onClick);
    return button;
  }

  private attachStore(): void {
    this.archiveStore.subscribe(() => {
      this.launcher.syncOptions();
      this.render();
      this.maybeAutoLoadMap();
    });
  }

  private attachSceneEvents(): void {
    this.scene.setPointerLockChangeHandler((locked) => this.renderPointerHint(locked));
    this.scene.setPhysicsChangeHandler((enabled) => {
      this.currentUrlState.physics = enabled;
      this.sessionState = { ...this.sessionState, physics: enabled };
      this.settings.sync();
    });
    this.scene.setCameraModeChangeHandler((mode) => {
      this.currentUrlState.cameraMode = mode;
      this.sessionState = switchCameraMode(this.sessionState, mode, this.scene.hasCollisionsLoaded());
      this.settings.sync();
      this.renderPointerHint(this.scene.isPointerLocked());
    });
  }

  // --- intents (async implementations) ------------------------------------

  private async runOpenArchive(file: File): Promise<void> {
    try {
      await this.archiveStore.openArchive(file);
      this.launcher.syncOptions();
      this.render();
    } catch (error) {
      showToast(toErrorMessage(error));
    }
  }

  private async runDeepScanTask(): Promise<void> {
    try {
      await this.archiveStore.deepScan();
    } catch (error) {
      showToast(toErrorMessage(error));
    }
  }

  private maybeAutoLoadMap(): void {
    if (this.autoLoadAttempted || this.currentUrlState.mapId == null) return;
    const maps = this.archiveStore.getState().maps;
    const match = maps.find((entry) => entry.baseId === this.currentUrlState.mapId);
    if (!match) return;
    this.autoLoadAttempted = true;
    this.launcher.selectMap(match.category, String(match.baseId));
    void this.loadMap(true);
  }

  private async loadMap(fromAutoLoad: boolean): Promise<void> {
    try {
      const reader = this.archiveStore.getState().reader;
      const mapId = this.launcher.getSelectedMapId();
      if (!reader || !Number.isFinite(mapId)) {
        showToast("Open an archive and select a map first.");
        return;
      }

      this.currentUrlState.mapId = mapId;
      this.currentUrlState.layers = { ...visibleLayerSelection(this.layerState) };
      this.sessionState = { ...this.sessionState, mapId, layers: { ...this.currentUrlState.layers } };
      this.layerState = createLayerState(this.currentUrlState.layers);
      const shouldRestoreCamera = fromAutoLoad && this.initialUrlState.mapId === mapId;

      // Slide the launcher out to the side as soon as loading starts, rather than letting it
      // jump to its docked position once the map is ready.
      this.launcherOpen = false;
      this.render();

      await this.runSceneTask("Loading terrain & environment", async () => {
        await this.scene.loadBaseMap(reader, mapId);
        this.applyInitialSettingsToScene();
        for (const key of LAYER_KEYS) {
          if (this.layerState[key].requested) {
            this.layerState = markLayerLoading(this.layerState, key);
            this.render();
            await this.scene.ensureLayerVisible(key);
            this.layerState = markLayerVisible(this.layerState, key);
          } else {
            this.scene.setLayerVisible(key, false);
          }
        }
        this.scene.setCameraMode(this.sessionState.cameraMode);
        if (shouldRestoreCamera) {
          this.scene.applySnapshot({
            mode: this.currentUrlState.cameraMode,
            position: this.currentUrlState.position ?? undefined,
            rotation: this.currentUrlState.rotation ?? undefined,
            orbitalTarget: this.currentUrlState.orbitalTarget ?? undefined,
          });
        }
        this.scene.setEnvironmentVariant(this.currentUrlState.environmentId);
        this.scene.setPhysicsEnabled(this.currentUrlState.physics);
      });

      this.settingsOpen = true;
      this.render();
    } catch (error) {
      // Bring the launcher back so the user can retry (it has no edge handle until a map loads).
      this.launcherOpen = true;
      showToast(toErrorMessage(error));
      this.render();
    }
  }

  private async toggleSceneLayerTask(key: LayerKey): Promise<void> {
    const state = this.layerState[key];
    try {
      if (state.requested) {
        this.scene.setLayerVisible(key, false);
        this.layerState = markLayerHidden(this.layerState, key);
      } else if (state.loaded) {
        this.scene.setLayerVisible(key, true);
        this.layerState = markLayerVisible(this.layerState, key);
      } else {
        this.layerState = markLayerLoading(this.layerState, key);
        this.render();
        await this.runSceneTask(`Loading ${layerLabel(key)}`, async () => {
          await this.scene.ensureLayerVisible(key);
        });
        this.layerState = markLayerVisible(this.layerState, key);
      }
      this.syncLayerSelectionToState();
      this.render();
    } catch (error) {
      this.layerState = markLayerError(this.layerState, key, toErrorMessage(error));
      showToast(toErrorMessage(error));
      this.render();
    }
  }

  private async toggleAntialiasTask(): Promise<void> {
    try {
      const next = !this.sessionState.antialias;
      this.sessionState = setRendererAntialias(this.sessionState, next);
      this.currentUrlState.antialias = next;
      await this.runSceneTask("Rebuilding renderer", () => {
        this.scene.recreateRenderer(next);
        return Promise.resolve();
      });
      this.render();
    } catch (error) {
      showToast(toErrorMessage(error));
      this.render();
    }
  }

  private async runSceneTask(label: string, task: () => Promise<void>): Promise<void> {
    this.sceneProgress = { visible: true, label, pct: null, tone: "accent" };
    this.renderProgress();
    const unsubscribe = onProgress((nextLabel, pct) => {
      this.sceneProgress = { visible: true, label: nextLabel, pct, tone: "accent" };
      this.renderProgress();
    });
    try {
      await task();
      this.sceneProgress = { visible: false, label: "", pct: null };
    } catch (error) {
      this.sceneProgress = { visible: true, label: toErrorMessage(error), pct: null, tone: "error" };
      this.renderProgress();
      throw error;
    } finally {
      unsubscribe();
      this.renderProgress();
    }
  }

  // --- rendering -----------------------------------------------------------

  private applyInitialSettingsToScene(): void {
    this.scene.setFogDistance(this.currentUrlState.fog);
    this.scene.setMovementSpeed(this.currentUrlState.movementSpeed);
    this.scene.setLightIntensity(this.currentUrlState.lightIntensity);
    this.scene.setShadowStrength(this.currentUrlState.shadowStrength);
    this.scene.setCollisionOpacity(this.currentUrlState.collisionOpacity);
  }

  private syncLayerSelectionToState(): void {
    const selection = visibleLayerSelection(this.layerState);
    this.currentUrlState.layers = { ...selection };
    this.sessionState = { ...this.sessionState, layers: { ...selection } };
  }

  private render(): void {
    const mapLoaded = this.scene.getCurrentMapId() != null;
    this.root.dataset.mapLoaded = String(mapLoaded);
    // The edge handles only make sense once a map is loaded; before that the centered
    // launcher is the only entry point.
    this.launcherHandle.hidden = !mapLoaded;
    this.settingsHandle.hidden = !mapLoaded;
    this.launcherHandle.classList.toggle("open", this.launcherOpen);
    this.launcherHandle.setAttribute("aria-expanded", String(this.launcherOpen));
    this.settingsHandle.classList.toggle("open", this.settingsOpen);
    this.settingsHandle.setAttribute("aria-expanded", String(this.settingsOpen));

    this.launcher.sync();
    this.settings.sync();
    this.renderProgress();
    this.renderPointerHint(this.scene.isPointerLocked());
  }

  private renderProgress(): void {
    const progress = this.sceneProgress.visible ? this.sceneProgress : this.getArchiveProgress();
    this.globalProgress.setState(progress);
  }

  private renderPointerHint(locked: boolean): void {
    const show = this.scene.getCurrentMapId() != null && this.scene.getCameraMode() === "firstPerson";
    this.pointerHintEl.hidden = !show;
    if (!show) return;
    this.pointerHintEl.textContent = locked
      ? "First Person active. Esc releases the cursor."
      : this.scene.isPhysicsEnabled()
        ? "First Person active. Click the map to capture the cursor. Space jumps while physics is enabled."
        : "First Person active. Click the map to capture the cursor. Esc releases the cursor.";
  }

  private getArchiveProgress(): ProgressState {
    const archive = this.archiveStore.getState();
    if (archive.status === "opening") {
      return { visible: true, label: "Opening archive", pct: null, tone: "accent" };
    }
    if (archive.scan.status === "scanning") {
      return {
        visible: true,
        label: archive.scan.label,
        pct: archive.scan.pct,
        detail:
          archive.scan.total > 0
            ? `${archive.scan.scanned.toLocaleString()} / ${archive.scan.total.toLocaleString()}`
            : undefined,
      };
    }
    if (archive.scan.status === "error") {
      return { visible: true, label: archive.scan.error ?? "Archive scan failed", pct: null, tone: "error" };
    }
    return { visible: false, label: "", pct: null };
  }
}
