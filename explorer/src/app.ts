import { ProgressBar } from "./components/progress-bar.js";
import { ExplorerScene } from "./scene/explorer-scene.js";
import { isEditableTarget } from "./scene/three-utils.js";
import { ArchiveStore } from "./store/archive-store.js";
import { onProgress } from "./store/progress-bus.js";
import { createExplorerSessionState, setRendererAntialias, switchCameraMode } from "./store/session-state.js";
import { createDefaultExplorerUrlState, parseExplorerUrl } from "./store/url-state.js";
import { UrlSync } from "./store/url-sync.js";
import {
  assignKeybinding,
  DEFAULT_KEYBINDINGS,
  formatKeyCode,
  loadKeybindings,
  saveKeybindings,
  type Keybindings,
  type MovementAction,
} from "./store/keybindings.js";
import { toErrorMessage } from "./errors.js";
import { LauncherPanel } from "./ui/launcher-panel.js";
import { SettingsDrawer } from "./ui/settings-drawer.js";
import { ControlsDrawer } from "./ui/controls-drawer.js";
import { showToast } from "./ui/toast.js";
import { showConfirmDialog } from "./ui/confirm-dialog.js";
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
  private layerState: Record<LayerKey, boolean> = { ...DEFAULT_LAYER_SELECTION };
  private keybindings: Keybindings = loadKeybindings();
  private autoLoadAttempted = false;

  private launcherOpen = true;
  private settingsOpen = false;
  private controlsOpen = false;
  private sceneProgress: ProgressState = { visible: false, label: "", pct: null };

  private globalProgress!: ProgressBar;
  private pointerHintEl!: HTMLDivElement;
  private launcherHandle!: HTMLButtonElement;
  private settingsHandle!: HTMLButtonElement;
  private controlsHandle!: HTMLButtonElement;
  private launcher!: LauncherPanel;
  private settings!: SettingsDrawer;
  private controls!: ControlsDrawer;
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
    this.layerState = { ...DEFAULT_LAYER_SELECTION, ...this.currentUrlState.layers };
  }

  init(): void {
    this.buildShell();
    this.attachStore();
    this.attachSceneEvents();
    this.attachGlobalShortcuts();
    this.applyInitialSettingsToScene();
    this.urlSync = new UrlSync({
      getMapId: () => this.scene.getCurrentMapId(),
      getCameraSnapshot: () => this.scene.getCameraSnapshot(),
      isPhysicsEnabled: () => this.scene.isPhysicsEnabled(),
      getActiveEnvironmentId: () => this.scene.getActiveEnvironmentId(),
      getAntialias: () => this.sessionState.antialias,
      getVisibleLayers: () => ({ ...this.layerState }),
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

  getLayerState(): Record<LayerKey, boolean> {
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

  isControlsOpen(): boolean {
    return this.controlsOpen;
  }

  getKeybindings(): Keybindings {
    return this.keybindings;
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

  toggleSceneLayer(key: LayerKey): void {
    const visible = !this.layerState[key];
    this.layerState = { ...this.layerState, [key]: visible };
    this.scene.setLayerVisible(key, visible);
    this.syncLayerSelectionToState();
    this.render();
  }

  setCameraMode(mode: CameraMode): void {
    const previousMode = this.currentUrlState.cameraMode;
    this.sessionState = switchCameraMode(this.sessionState, mode, this.scene.hasCollisionsLoaded());
    this.currentUrlState.cameraMode = mode;
    this.scene.setCameraMode(mode);
    // Top-down is meant for slicing the map open: turn the clip plane on entering it and
    // off when leaving (the clip plane is global, so it must not linger in other views).
    if (mode === "topDown" && previousMode !== "topDown") {
      this.applyClipEnabled(true);
    } else if (mode !== "topDown" && previousMode === "topDown") {
      this.applyClipEnabled(false);
    }
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

  setClipEnabled(value: boolean): void {
    this.applyClipEnabled(value);
    this.render();
  }

  private applyClipEnabled(value: boolean): void {
    this.currentUrlState.clipEnabled = value;
    this.scene.setClipEnabled(value);
  }

  setClipHeight(value: number): void {
    this.currentUrlState.clipHeight = value;
    this.scene.setClipHeight(value);
  }

  setKeybinding(action: MovementAction, code: string): void {
    this.keybindings = assignKeybinding(this.keybindings, action, code);
    this.applyKeybindings();
    this.render();
  }

  resetKeybindings(): void {
    this.keybindings = { ...DEFAULT_KEYBINDINGS };
    this.applyKeybindings();
    this.render();
  }

  private applyKeybindings(): void {
    saveKeybindings(this.keybindings);
    this.scene.setKeybindings(this.keybindings);
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

    // The logo doubles as a portal to the sibling Browser app. A subtle pulsing spark hints
    // there's "more here", and hovering slides out a labelled link with a travelling arrow.
    const brand = document.createElement("a");
    brand.className = "hud-brand";
    brand.href = "https://njibhu.github.io/t3d/browser";
    brand.setAttribute("aria-label", "T3D Explorer — open the T3D Browser");
    brand.innerHTML = `
      <span class="hud-kicker">Tyria 3D</span>
      <strong>T3D Explorer</strong>
      <span class="hud-spark" aria-hidden="true"></span>
      <span class="hud-brand-reveal" aria-hidden="true">
        <span class="hud-brand-arrow">↗</span>
        <span class="hud-brand-reveal-text">Open the T3D Browser app</span>
      </span>`;
    hud.appendChild(brand);
    shell.appendChild(hud);

    this.globalProgress = new ProgressBar("global-progress");
    shell.appendChild(this.globalProgress.root);

    this.launcher = new LauncherPanel(this);
    shell.appendChild(this.launcher.root);

    this.settings = new SettingsDrawer(this);
    shell.appendChild(this.settings.root);

    this.controls = new ControlsDrawer(this);
    shell.appendChild(this.controls.root);

    // Edge handles that slide the panels in and out (shown once a map is loaded). Settings and
    // Controls share the right edge and the same drawer slot, so opening one closes the other.
    this.launcherHandle = this.buildSideHandle("Maps", "left", () => {
      this.launcherOpen = !this.launcherOpen;
      this.render();
    });
    this.settingsHandle = this.buildSideHandle("Settings", "right", () => {
      this.settingsOpen = !this.settingsOpen;
      if (this.settingsOpen) this.controlsOpen = false;
      this.render();
    });
    this.controlsHandle = this.buildSideHandle("Controls", "right", () => {
      this.controlsOpen = !this.controlsOpen;
      if (this.controlsOpen) this.settingsOpen = false;
      this.render();
    });

    const leftRail = document.createElement("div");
    leftRail.className = "side-rail side-rail--left";
    leftRail.appendChild(this.launcherHandle);
    const rightRail = document.createElement("div");
    rightRail.className = "side-rail side-rail--right";
    rightRail.append(this.settingsHandle, this.controlsHandle);
    shell.append(leftRail, rightRail);

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
    this.scene.setMovementSpeedChangeHandler((value) => {
      this.currentUrlState.movementSpeed = value;
      this.settings.sync();
    });
  }

  private attachGlobalShortcuts(): void {
    window.addEventListener("keydown", (event) => {
      // Plain "P" toggles physics; ignore repeats, text fields, and OS combos like Ctrl+P.
      if (event.code !== "KeyP" || event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
      if (isEditableTarget(event.target) || this.scene.getCurrentMapId() == null) return;
      this.togglePhysics();
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
    // Don't silently load a map from a shared link — confirm first. On cancel the map stays
    // pre-selected in the launcher so it can still be loaded manually.
    void showConfirmDialog({
      kicker: "Shared link",
      title: "Load shared map?",
      message: `This link opens "${match.name}". Load it now?`,
      confirmLabel: "Load map",
      cancelLabel: "Stay here",
    }).then((confirmed) => {
      if (confirmed) void this.loadMap(true);
    });
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
      this.currentUrlState.layers = { ...this.layerState };
      this.sessionState = { ...this.sessionState, mapId, layers: { ...this.layerState } };
      const shouldRestoreCamera = fromAutoLoad && this.initialUrlState.mapId === mapId;

      // Slide the launcher out to the side as soon as loading starts, rather than letting it
      // jump to its docked position once the map is ready.
      this.launcherOpen = false;
      this.render();

      await this.runSceneTask("Loading terrain & environment", async () => {
        await this.scene.loadBaseMap(reader, mapId);
        this.applyInitialSettingsToScene();
        // Everything loads up front now; the per-layer toggles only control visibility.
        for (const key of LAYER_KEYS) {
          await this.scene.ensureLayerVisible(key);
          this.scene.setLayerVisible(key, this.layerState[key]);
        }
        this.scene.setCameraMode(this.sessionState.cameraMode);
        if (shouldRestoreCamera) {
          this.scene.applySnapshot({
            mode: this.currentUrlState.cameraMode,
            position: this.currentUrlState.position ?? undefined,
            rotation: this.currentUrlState.rotation ?? undefined,
            orbitalTarget: this.currentUrlState.orbitalTarget ?? undefined,
            zoom: this.currentUrlState.orthoZoom ?? undefined,
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
    this.scene.setClipHeight(this.currentUrlState.clipHeight);
    this.scene.setClipEnabled(this.currentUrlState.clipEnabled);
    this.scene.setKeybindings(this.keybindings);
  }

  private syncLayerSelectionToState(): void {
    const selection = { ...this.layerState };
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
    this.controlsHandle.hidden = !mapLoaded;
    this.launcherHandle.classList.toggle("open", this.launcherOpen);
    this.launcherHandle.setAttribute("aria-expanded", String(this.launcherOpen));
    this.settingsHandle.classList.toggle("open", this.settingsOpen);
    this.settingsHandle.setAttribute("aria-expanded", String(this.settingsOpen));
    this.controlsHandle.classList.toggle("open", this.controlsOpen);
    this.controlsHandle.setAttribute("aria-expanded", String(this.controlsOpen));

    this.launcher.sync();
    this.settings.sync();
    this.controls.sync();
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
        ? `First Person active. Click the map to capture the cursor. ${formatKeyCode(this.keybindings.up)} jumps while physics is enabled.`
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
