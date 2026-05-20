import T3D from "t3d-lib";
import { showAboutDialog } from "./components/about-dialog";
import { showOpenArchiveDialog } from "./components/open-archive-dialog";
import { ArchiveStore } from "./store/archive-store";
import { DEFAULT_PREFERENCES, loadPreferences, savePreferences } from "./store/preferences";
import { onProgress } from "./store/progress-bus";
import { buildHashState, parseHashState } from "./util/url-state";
import { ExplorerViewport } from "./viewport";
import { CameraPose, ControllerType, ExplorerHashState, MapEntry, MapLayerOptions, Theme } from "./types";

const CATEGORY_ALL = "__all__";

const DEFAULT_LAYERS: MapLayerOptions = {
  zone: false,
  props: true,
  collisions: false,
};

const HELP_COPY: Record<ControllerType, string> = {
  fly: "Fly camera: drag to look, W/A/S/D to move, R/F for altitude, Q/E to roll.",
  orbital: "Orbit camera: left drag to orbit, right drag to pan, wheel to zoom.",
};

interface DropdownRefs {
  trigger: HTMLButtonElement;
  panel: HTMLDivElement;
}

export class App {
  private root: HTMLElement;
  private store = new ArchiveStore();
  private preferences = loadPreferences();
  private pendingHash = parseHashState(window.location.hash);
  private viewport: ExplorerViewport;

  private mapList: MapEntry[] = [];
  private selectedMapId: number | null = this.pendingHash.map ?? null;
  private loadedMapId: number | null = null;
  private loadedLayers: MapLayerOptions | null = null;
  private searchTerm = "";
  private selectedCategory = CATEGORY_ALL;
  private currentLayers: MapLayerOptions = {
    zone: this.pendingHash.loadZone ?? DEFAULT_LAYERS.zone,
    props: this.pendingHash.loadProp ?? DEFAULT_LAYERS.props,
    collisions: this.pendingHash.showHavok ?? DEFAULT_LAYERS.collisions,
  };
  private currentController: ControllerType = this.pendingHash.cameraType ?? this.preferences.cameraType;
  private lastHash = window.location.hash.startsWith("#") ? window.location.hash.slice(1) : "";
  private isBusy = false;
  private isCategoryPickerOpen = false;
  private isMapPickerOpen = false;
  private isRenderDrawerOpen = false;
  private isHudCollapsed = false;
  private isHelpCollapsed = false;
  private isMapPickerCollapsed = false;
  private isRenderDrawerCollapsed = false;

  private toolbarCurrentMapEl!: HTMLDivElement;
  private toolbarArchiveEl!: HTMLDivElement;
  private themeToggleEl!: HTMLButtonElement;
  private categoryPickerTriggerEl!: HTMLButtonElement;
  private categoryPickerPanelEl!: HTMLDivElement;
  private categoryListEl!: HTMLDivElement;
  private mapPickerTriggerEl!: HTMLButtonElement;
  private mapPickerPanelEl!: HTMLDivElement;
  private mapPickerOverlayEl!: HTMLDivElement;
  private searchInputEl!: HTMLInputElement;
  private mapListEl!: HTMLDivElement;
  private loadButtonEl!: HTMLButtonElement;
  private scanButtonEl!: HTMLButtonElement;
  private zoneInputEl!: HTMLInputElement;
  private propsInputEl!: HTMLInputElement;
  private collisionsInputEl!: HTMLInputElement;
  private antialiasInputEl!: HTMLInputElement;
  private cameraToggleEl!: HTMLButtonElement;
  private renderDrawerToggleEl!: HTMLButtonElement;
  private renderDrawerEl!: HTMLDivElement;
  private cameraBadgeEl!: HTMLSpanElement;
  private speedInputEl!: HTMLInputElement;
  private speedValueEl!: HTMLSpanElement;
  private fogInputEl!: HTMLInputElement;
  private fogValueEl!: HTMLSpanElement;
  private screenshotButtonEl!: HTMLButtonElement;
  private helpTextEl!: HTMLParagraphElement;
  private hudEl!: HTMLDivElement;
  private helpCardEl!: HTMLDivElement;
  private viewportHostEl!: HTMLDivElement;
  private emptyStateEl!: HTMLDivElement;
  private emptyTitleEl!: HTMLHeadingElement;
  private emptyTextEl!: HTMLParagraphElement;
  private emptyActionEl!: HTMLButtonElement;
  private loadingOverlayEl!: HTMLDivElement;
  private loadingTitleEl!: HTMLDivElement;
  private loadingLabelEl!: HTMLDivElement;
  private loadingFillEl!: HTMLDivElement;

  constructor(root: HTMLElement) {
    this.root = root;

    const initialFog = this.pendingHash.fog ?? this.preferences.fog ?? DEFAULT_PREFERENCES.fog;
    const initialSpeed = this.preferences.movementSpeed ?? DEFAULT_PREFERENCES.movementSpeed;

    this.preferences.fog = initialFog;
    this.preferences.movementSpeed = initialSpeed;
    this.preferences.cameraType = this.currentController;

    this.viewport = new ExplorerViewport({
      antialias: this.preferences.antialias,
      movementSpeed: initialSpeed,
      fogDistance: initialFog,
      controllerType: this.currentController,
    });
  }

  async init(): Promise<void> {
    this.buildShell();
    this.applyTheme(this.preferences.theme);
    this.viewport.mount(this.viewportHostEl);
    this.updateArchiveInfo();
    this.updateSelectionSummary();
    this.updateMapList();
    this.updateHud();
    this.updateEmptyState();
    this.attachGlobalShortcuts();
    this.startUrlSync();

    if (this.pendingHash.map !== undefined) {
      this.showToast("Open a local archive to restore the shared map view.");
    }
  }

  reportLibraryError(message: string): void {
    console.error("[T3D]", message);
    this.showToast(message);
  }

  reportLibraryWarning(message: string): void {
    console.warn("[T3D]", message);
  }

  private buildShell(): void {
    this.root.innerHTML = "";

    const app = document.createElement("div");
    app.className = "explorer-app";

    const toolbar = this.buildToolbar();
    const viewportShell = this.buildViewportShell();

    app.append(toolbar, viewportShell);
    this.root.appendChild(app);
  }

  private buildToolbar(): HTMLDivElement {
    const toolbar = document.createElement("div");
    toolbar.className = "toolbar";

    const brand = document.createElement("div");
    brand.className = "toolbar-brand";
    brand.innerHTML = `<h1>T3D Explorer</h1><p>Map exploration for Guild Wars 2</p>`;
    toolbar.appendChild(brand);

    this.toolbarArchiveEl = document.createElement("div");
    this.toolbarArchiveEl.className = "toolbar-pill";
    toolbar.appendChild(this.toolbarArchiveEl);

    this.toolbarCurrentMapEl = document.createElement("div");
    this.toolbarCurrentMapEl.className = "toolbar-pill accent";
    toolbar.appendChild(this.toolbarCurrentMapEl);

    const utilityGroup = document.createElement("div");
    utilityGroup.className = "toolbar-utilities";

    const spacer = document.createElement("div");
    spacer.className = "toolbar-spacer";
    toolbar.appendChild(spacer);

    const aboutButton = document.createElement("button");
    aboutButton.textContent = "About";
    aboutButton.addEventListener("click", () => showAboutDialog());
    utilityGroup.appendChild(aboutButton);

    this.themeToggleEl = document.createElement("button");
    this.themeToggleEl.className = "theme-toggle";
    this.themeToggleEl.addEventListener("click", () => this.toggleTheme());
    utilityGroup.appendChild(this.themeToggleEl);
    toolbar.appendChild(utilityGroup);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (ev) => {
      if (this.preferences.theme !== null) return;
      this.applyTheme(ev.matches ? "dark" : "light");
    });

    return toolbar;
  }

  private buildMapPickerOverlay(): HTMLDivElement {
    const overlay = document.createElement("div");
    overlay.className = "map-picker-overlay overlay-panel overlay-left";
    this.mapPickerOverlayEl = overlay;
    this.appendOverlayCollapseButton(overlay, "left", "Map picker", () =>
      this.setMapPickerCollapsed(!this.isMapPickerCollapsed)
    );

    const pickerCard = document.createElement("section");
    pickerCard.className = "panel-card map-picker-card";
    pickerCard.innerHTML = `
      <div class="section-heading">
        <h2>Map Picker</h2>
        <p>Search by map name or baseId, filter by category, then load the selected map into the viewport.</p>
      </div>
    `;

    this.searchInputEl = document.createElement("input");
    this.searchInputEl.type = "search";
    this.searchInputEl.placeholder = "Search maps by name or baseId...";
    this.searchInputEl.addEventListener("input", () => {
      this.searchTerm = this.searchInputEl.value.trim().toLowerCase();
      this.updateMapList();
    });
    pickerCard.appendChild(this.searchInputEl);

    this.categoryPickerTriggerEl = document.createElement("button");
    this.categoryPickerTriggerEl.type = "button";
    this.categoryPickerTriggerEl.className = "map-picker-trigger category-picker-trigger";
    this.categoryPickerTriggerEl.addEventListener("click", () => this.setCategoryPickerOpen(!this.isCategoryPickerOpen));
    pickerCard.appendChild(this.categoryPickerTriggerEl);

    this.categoryPickerPanelEl = document.createElement("div");
    this.categoryPickerPanelEl.className = "map-picker-panel category-picker-panel";
    this.categoryPickerPanelEl.hidden = true;
    this.categoryListEl = document.createElement("div");
    this.categoryListEl.className = "category-list";
    this.categoryPickerPanelEl.appendChild(this.categoryListEl);
    pickerCard.appendChild(this.categoryPickerPanelEl);

    this.mapPickerTriggerEl = document.createElement("button");
    this.mapPickerTriggerEl.type = "button";
    this.mapPickerTriggerEl.className = "map-picker-trigger";
    this.mapPickerTriggerEl.addEventListener("click", () => this.setMapPickerOpen(!this.isMapPickerOpen));
    pickerCard.appendChild(this.mapPickerTriggerEl);

    this.mapPickerPanelEl = document.createElement("div");
    this.mapPickerPanelEl.className = "map-picker-panel";
    this.mapPickerPanelEl.hidden = true;
    pickerCard.appendChild(this.mapPickerPanelEl);

    this.mapListEl = document.createElement("div");
    this.mapListEl.className = "map-list";
    this.mapPickerPanelEl.appendChild(this.mapListEl);

    const scanHint = document.createElement("div");
    scanHint.className = "scan-hint";
    scanHint.innerHTML = `
      <p>Missing a map after a game patch? Rescan the archive to look for map files that are newer than the built-in list.</p>
    `;
    this.scanButtonEl = document.createElement("button");
    this.scanButtonEl.textContent = "Find missing maps";
    this.scanButtonEl.className = "scan-hint-button";
    this.scanButtonEl.addEventListener("click", () => void this.scanArchive(false));
    scanHint.appendChild(this.scanButtonEl);
    pickerCard.appendChild(scanHint);

    this.loadButtonEl = document.createElement("button");
    this.loadButtonEl.className = "primary wide";
    this.loadButtonEl.textContent = "Load selected map";
    this.loadButtonEl.addEventListener("click", () => void this.loadSelectedMap());
    pickerCard.appendChild(this.loadButtonEl);
    overlay.appendChild(pickerCard);

    return overlay;
  }

  private buildViewportShell(): HTMLElement {
    const shell = document.createElement("section");
    shell.className = "viewport-shell";

    this.viewportHostEl = document.createElement("div");
    this.viewportHostEl.className = "viewport-host";
    shell.appendChild(this.viewportHostEl);

    this.emptyStateEl = document.createElement("div");
    this.emptyStateEl.className = "viewport-empty";
    this.emptyStateEl.style.setProperty("--explorer-empty-art", "url('./static/Background5_2560_1440.jpg')");
    this.emptyTitleEl = document.createElement("h2");
    this.emptyTextEl = document.createElement("p");
    this.emptyActionEl = document.createElement("button");
    this.emptyActionEl.className = "primary";
    this.emptyActionEl.addEventListener("click", () => {
      if (!this.store.isLoaded) void this.promptOpenArchive();
      else void this.loadSelectedMap();
    });
    const emptyCard = document.createElement("div");
    emptyCard.className = "viewport-empty-card";
    emptyCard.append(this.emptyTitleEl, this.emptyTextEl, this.emptyActionEl);
    this.emptyStateEl.appendChild(emptyCard);
    shell.appendChild(this.emptyStateEl);

    shell.appendChild(this.buildMapPickerOverlay());

    const hud = document.createElement("div");
    hud.className = "hud overlay-panel overlay-right";
    this.hudEl = hud;
    this.appendOverlayCollapseButton(hud, "right", "Viewport controls", () => this.setHudCollapsed(!this.isHudCollapsed));
    this.cameraBadgeEl = document.createElement("span");
    this.cameraBadgeEl.className = "hud-badge";
    hud.appendChild(this.cameraBadgeEl);

    this.cameraToggleEl = document.createElement("button");
    this.cameraToggleEl.textContent = "Switch camera";
    this.cameraToggleEl.addEventListener("click", () => this.toggleCamera());
    hud.appendChild(this.cameraToggleEl);

    this.renderDrawerToggleEl = document.createElement("button");
    this.renderDrawerToggleEl.textContent = "Render settings";
    this.renderDrawerToggleEl.addEventListener("click", () => this.setRenderDrawerOpen(!this.isRenderDrawerOpen));
    hud.appendChild(this.renderDrawerToggleEl);

    this.screenshotButtonEl = document.createElement("button");
    this.screenshotButtonEl.textContent = "Screenshot";
    this.screenshotButtonEl.addEventListener("click", () => this.viewport.takeScreenshot());
    hud.appendChild(this.screenshotButtonEl);

    const speedControl = this.buildRangeControl("Speed", 500, 10000, this.preferences.movementSpeed, (input, badge) => {
      this.speedInputEl = input;
      this.speedValueEl = badge;
      input.addEventListener("input", () => {
        const value = input.valueAsNumber;
        this.preferences.movementSpeed = value;
        this.viewport.setMovementSpeed(value);
        this.speedValueEl.textContent = String(value);
        savePreferences(this.preferences);
      });
    });

    const fogControl = this.buildRangeControl("Fog", 0, 100000, this.preferences.fog, (input, badge) => {
      this.fogInputEl = input;
      this.fogValueEl = badge;
      input.addEventListener("input", () => {
        const value = input.valueAsNumber;
        this.preferences.fog = value;
        this.viewport.setFogDistance(value);
        this.fogValueEl.textContent = String(value);
        savePreferences(this.preferences);
      });
    });

    hud.append(speedControl, fogControl);
    shell.appendChild(hud);

    this.renderDrawerEl = this.buildRenderDrawer();
    shell.appendChild(this.renderDrawerEl);

    const help = document.createElement("div");
    help.className = "help-card overlay-panel overlay-left";
    this.helpCardEl = help;
    this.appendOverlayCollapseButton(help, "left", "Camera help", () => this.setHelpCollapsed(!this.isHelpCollapsed));
    help.innerHTML = `<h3>Camera help</h3>`;
    this.helpTextEl = document.createElement("p");
    help.appendChild(this.helpTextEl);
    shell.appendChild(help);

    this.loadingOverlayEl = document.createElement("div");
    this.loadingOverlayEl.className = "loading-overlay";
    const loadingCard = document.createElement("div");
    loadingCard.className = "loading-card";
    this.loadingTitleEl = document.createElement("div");
    this.loadingTitleEl.className = "loading-title";
    this.loadingLabelEl = document.createElement("div");
    this.loadingLabelEl.className = "loading-label";
    const progressBar = document.createElement("div");
    progressBar.className = "loading-bar";
    this.loadingFillEl = document.createElement("div");
    this.loadingFillEl.className = "loading-fill";
    progressBar.appendChild(this.loadingFillEl);
    loadingCard.append(this.loadingTitleEl, this.loadingLabelEl, progressBar);
    this.loadingOverlayEl.appendChild(loadingCard);
    shell.appendChild(this.loadingOverlayEl);

    return shell;
  }

  private buildCheckbox(label: string, checked: boolean, onChange: (checked: boolean) => void): HTMLInputElement {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = checked;
    input.setAttribute("aria-label", label);
    input.addEventListener("change", () => onChange(input.checked));
    return input;
  }

  private wrapControl(title: string, description: string, control: HTMLInputElement | true): HTMLLabelElement {
    const row = document.createElement("label");
    row.className = "setting-row";
    const text = document.createElement("span");
    text.className = "setting-copy";
    text.innerHTML = `<strong>${title}</strong><small>${description}</small>`;
    row.appendChild(text);

    if (control === true) {
      const badge = document.createElement("span");
      badge.className = "always-on-badge";
      badge.textContent = "On";
      row.appendChild(badge);
    } else {
      row.appendChild(control);
    }
    return row;
  }

  private buildRangeControl(
    label: string,
    min: number,
    max: number,
    value: number,
    wire: (input: HTMLInputElement, badge: HTMLSpanElement) => void
  ): HTMLLabelElement {
    const wrap = document.createElement("label");
    wrap.className = "hud-range";

    const title = document.createElement("span");
    title.className = "hud-range-title";
    title.textContent = label;

    const badge = document.createElement("span");
    badge.className = "hud-range-value";
    badge.textContent = String(value);

    const input = document.createElement("input");
    input.type = "range";
    input.min = String(min);
    input.max = String(max);
    input.value = String(value);

    const top = document.createElement("span");
    top.className = "hud-range-top";
    top.append(title, badge);
    wrap.append(top, input);

    wire(input, badge);
    return wrap;
  }

  private appendOverlayCollapseButton(
    panel: HTMLElement,
    side: "left" | "right",
    label: string,
    onToggle: () => void
  ): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `overlay-collapse overlay-collapse-${side}`;
    button.setAttribute("aria-label", `${label}: collapse or expand`);
    button.addEventListener("click", onToggle);
    panel.appendChild(button);
    return button;
  }

  private buildRenderDrawer(): HTMLDivElement {
    const drawer = document.createElement("div");
    drawer.className = "render-drawer overlay-panel overlay-right";
    drawer.hidden = true;
    this.appendOverlayCollapseButton(drawer, "right", "Render settings", () =>
      this.setRenderDrawerCollapsed(!this.isRenderDrawerCollapsed)
    );

    const header = document.createElement("div");
    header.className = "render-drawer-header";
    header.innerHTML = `
      <div>
        <h3>Render settings</h3>
        <p>Terrain and environment stay on. Use these controls for optional layers and viewport quality.</p>
      </div>
    `;

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "render-drawer-close";
    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", () => this.setRenderDrawerOpen(false));
    header.appendChild(closeBtn);

    const layerList = document.createElement("div");
    layerList.className = "setting-list";
    this.zoneInputEl = this.buildCheckbox("Zone models", this.currentLayers.zone, (checked) => {
      this.currentLayers.zone = checked;
      this.updateSelectionSummary();
      this.updateHashPreviewState();
    });
    this.propsInputEl = this.buildCheckbox("Props", this.currentLayers.props, (checked) => {
      this.currentLayers.props = checked;
      this.updateSelectionSummary();
      this.updateHashPreviewState();
    });
    this.collisionsInputEl = this.buildCheckbox("Visible collisions", this.currentLayers.collisions, (checked) => {
      this.currentLayers.collisions = checked;
      this.updateSelectionSummary();
      this.updateHashPreviewState();
    });
    this.antialiasInputEl = this.buildCheckbox("Anti-aliasing", this.preferences.antialias, (checked) => {
      this.preferences.antialias = checked;
      savePreferences(this.preferences);
      this.viewport.setAntialiasing(checked);
    });

    layerList.append(
      this.wrapControl("Terrain and environment", "Always enabled", true),
      this.wrapControl("Zone models", "Trees, foliage, and world dressing", this.zoneInputEl),
      this.wrapControl("Props", "Most 3D props and placed geometry", this.propsInputEl),
      this.wrapControl("Visible collisions", "Collision-only mesh overlay", this.collisionsInputEl),
      this.wrapControl("Anti-aliasing", "Rebuilds the viewport in place", this.antialiasInputEl)
    );

    drawer.append(header, layerList);
    return drawer;
  }

  private attachGlobalShortcuts(): void {
    window.addEventListener("keydown", (ev) => {
      const mod = ev.ctrlKey || ev.metaKey;
      if (mod && ev.key.toLowerCase() === "o") {
        ev.preventDefault();
        void this.promptOpenArchive();
      } else if (mod && ev.key.toLowerCase() === "k") {
        ev.preventDefault();
        if (!this.store.isLoaded) return;
        this.setMapPickerCollapsed(false);
        this.setCategoryPickerOpen(false);
        this.setMapPickerOpen(true);
        this.searchInputEl.focus();
        this.searchInputEl.select();
      } else if (ev.key === "Escape" && this.isRenderDrawerOpen) {
        this.setRenderDrawerOpen(false);
      } else if (ev.key === "Escape" && this.isMapPickerCollapsed) {
        this.setMapPickerCollapsed(false);
      } else if (ev.key === "Escape" && this.isHudCollapsed) {
        this.setHudCollapsed(false);
      } else if (ev.key === "Escape" && this.isHelpCollapsed) {
        this.setHelpCollapsed(false);
      } else if (ev.key === "Escape" && this.isCategoryPickerOpen) {
        this.setCategoryPickerOpen(false);
      } else if (ev.key === "Escape" && this.isMapPickerOpen) {
        this.setMapPickerOpen(false);
      }
    });

    document.addEventListener("pointerdown", (ev) => {
      const target = ev.target;
      if (!(target instanceof Node)) return;
      if (
        this.isMapPickerOpen &&
        !this.mapPickerPanelEl.contains(target) &&
        !this.mapPickerTriggerEl.contains(target)
      ) {
        this.setMapPickerOpen(false);
      }
      if (
        this.isCategoryPickerOpen &&
        !this.categoryPickerPanelEl.contains(target) &&
        !this.categoryPickerTriggerEl.contains(target)
      ) {
        this.setCategoryPickerOpen(false);
      }
    });
  }

  private async promptOpenArchive(): Promise<void> {
    try {
      await showOpenArchiveDialog(this.store);
      this.onArchiveLoaded(true);
      if (this.pendingHash.map !== undefined) {
        await this.restorePendingHash();
      }
    } catch (err) {
      if ((err as Error).message !== "cancelled") {
        this.showToast((err as Error).message);
      }
    }
  }

  private onArchiveLoaded(resetViewport: boolean): void {
    if (resetViewport) {
      this.loadedMapId = null;
      this.loadedLayers = null;
      this.viewport.clearMap();
    }
    this.mapList = this.store.getMapList();
    if (this.selectedMapId !== null && !this.store.findMap(this.selectedMapId)) {
      this.selectedMapId = null;
    }
    if (this.selectedMapId === null && this.mapList.length > 0) {
      this.selectedMapId = this.mapList[0].baseId;
    }

    this.populateCategorySelect();
    this.updateArchiveInfo();
    this.updateMapList();
    this.updateSelectionSummary();
    this.updateEmptyState();
    this.updateHud();
    this.syncUrlHash();
  }

  private async restorePendingHash(): Promise<void> {
    if (this.pendingHash.map === undefined) return;

    if (!this.store.findMap(this.pendingHash.map)) {
      await this.scanArchive(true);
    }

    const match = this.store.findMap(this.pendingHash.map);
    if (!match) {
      this.showToast(`Map ${this.pendingHash.map} was not found in this archive.`);
      this.pendingHash = {};
      return;
    }

    this.selectedMapId = match.baseId;
    this.updateMapList();
    this.updateSelectionSummary();
    await this.loadSelectedMap(this.pendingHash);
    this.pendingHash = {};
  }

  private async scanArchive(isAutoRestore: boolean): Promise<void> {
    if (!this.store.isLoaded) {
      this.showToast("Open an archive first.");
      return;
    }
    if (this.isBusy) return;

    this.setBusy(
      isAutoRestore ? "Scanning archive to restore the shared map..." : "Scanning archive for maps...",
      null,
      null
    );
    try {
      this.mapList = await this.store.scanArchiveForMaps((label, pct) => this.setBusy(null, label, pct));
      this.onArchiveLoaded(false);
      if (!isAutoRestore) {
        this.showToast(`Scan finished. ${this.mapList.length.toLocaleString()} map entries are available.`);
      }
    } catch (err) {
      this.showToast((err as Error).message);
    } finally {
      this.clearBusy();
    }
  }

  private async loadSelectedMap(hashState?: ExplorerHashState): Promise<void> {
    if (!this.store.reader || this.selectedMapId === null || this.isBusy) return;

    const map = this.store.findMap(this.selectedMapId);
    if (!map) {
      this.showToast("Select a valid map first.");
      return;
    }

    this.setBusy(`Loading ${map.name}...`, "Preparing renderers", 0);
    try {
      this.viewport.setController(hashState?.cameraType ?? this.currentController);
      if (hashState?.fog !== undefined) {
        this.preferences.fog = hashState.fog;
        this.viewport.setFogDistance(hashState.fog);
      }

      const context = await this.renderMap(this.selectedMapId, this.currentLayers, (label, pct) =>
        this.setBusy(null, label, pct)
      );

      this.viewport.applyMapContext(context, this.currentLayers);
      if (hashState) {
        this.viewport.applyShareState(hashState);
      } else {
        this.preferences.fog = Math.round(this.viewport.fog);
        savePreferences(this.preferences);
      }

      this.loadedMapId = this.selectedMapId;
      this.loadedLayers = { ...this.currentLayers };
      this.updateArchiveInfo();
      this.updateMapList();
      this.updateSelectionSummary();
      this.updateHud();
      this.updateEmptyState();
      this.updateHashPreviewState();
    } catch (err) {
      this.showToast((err as Error).message);
    } finally {
      this.clearBusy();
    }
  }

  private renderMap(
    mapId: number,
    layers: MapLayerOptions,
    onProgress: (label: string, pct: number) => void
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const unsubscribe = onProgress ? onProgressBus(onProgress) : () => {};
      try {
        T3D.renderMapContentsAsync(this.store.reader!, mapId, buildRenderers(layers), (context) => {
          unsubscribe();
          resolve(context);
        });
      } catch (err) {
        unsubscribe();
        reject(err);
      }
    });
  }

  private populateCategorySelect(): void {
    const categories = [CATEGORY_ALL, ...new Set(this.mapList.map((map) => map.category))];
    if (!categories.includes(this.selectedCategory)) {
      this.selectedCategory = CATEGORY_ALL;
    }

    this.categoryListEl.replaceChildren();
    for (const category of categories) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "picker-list-item";
      if (category === this.selectedCategory) button.classList.add("selected");
      button.textContent = category === CATEGORY_ALL ? "All categories" : category;
      button.addEventListener("click", () => {
        this.selectedCategory = category;
        this.syncSelectedMapToFilters();
        this.populateCategorySelect();
        this.updateSelectionSummary();
        this.updateMapList();
        this.setCategoryPickerOpen(false);
      });
      this.categoryListEl.appendChild(button);
    }
  }

  private getVisibleMaps(): MapEntry[] {
    return this.mapList.filter((map) => {
      if (this.selectedCategory !== CATEGORY_ALL && map.category !== this.selectedCategory) return false;
      if (!this.searchTerm) return true;
      return map.name.toLowerCase().includes(this.searchTerm) || String(map.baseId).includes(this.searchTerm);
    });
  }

  private updateMapList(): void {
    this.mapListEl.replaceChildren();

    const visible = this.getVisibleMaps();
    if (visible.length === 0) {
      const empty = document.createElement("div");
      empty.className = "map-list-empty";
      empty.textContent = this.store.isLoaded
        ? "No maps match the current filters."
        : "Open an archive to browse maps.";
      this.mapListEl.appendChild(empty);
      return;
    }

    for (const map of visible) {
      const button = document.createElement("button");
      button.className = "picker-list-item picker-list-item-map";
      if (map.baseId === this.selectedMapId) button.classList.add("selected");
      if (map.baseId === this.loadedMapId) button.classList.add("loaded");
      button.addEventListener("click", () => {
        this.selectedMapId = map.baseId;
        this.updateMapList();
        this.updateSelectionSummary();
        this.updateEmptyState();
        this.setMapPickerOpen(false);
      });

      const textWrap = document.createElement("span");
      textWrap.className = "picker-list-copy";
      const title = document.createElement("strong");
      title.textContent = map.name;
      const meta = document.createElement("small");
      meta.textContent = `${map.category} - ${map.baseId}`;
      textWrap.append(title, meta);

      button.appendChild(textWrap);
      this.mapListEl.appendChild(button);
    }
  }

  private updateArchiveInfo(): void {
    if (!this.store.isLoaded) {
      this.toolbarArchiveEl.textContent = "No archive loaded";
      this.scanButtonEl.disabled = true;
      return;
    }

    this.toolbarArchiveEl.textContent = `${this.store.fileName} - ${this.mapList.length.toLocaleString()} maps indexed`;
    this.scanButtonEl.disabled = false;
  }

  private updateSelectionSummary(): void {
    const selected = this.selectedMapId !== null ? this.store.findMap(this.selectedMapId) : undefined;
    const loaded = this.loadedMapId !== null ? this.store.findMap(this.loadedMapId) : undefined;

    if (!selected) {
      this.toolbarCurrentMapEl.textContent = loaded ? `Viewing: ${loaded.name}` : "Viewport idle";
      this.categoryPickerTriggerEl.disabled = !this.store.isLoaded;
      this.setDropdownTriggerContent(
        this.categoryPickerTriggerEl,
        this.selectedCategory === CATEGORY_ALL ? "All categories" : this.selectedCategory,
        this.store.isLoaded ? "Filter the map list by region or release" : "Available after archive load"
      );
      this.mapPickerTriggerEl.disabled = !this.store.isLoaded;
      this.setDropdownTriggerContent(
        this.mapPickerTriggerEl,
        this.store.isLoaded ? "Select a map" : "Open an archive first",
        this.store.isLoaded ? "Choose from the indexed map list" : "The map picker unlocks after archive load"
      );
      this.loadButtonEl.disabled = !this.store.isLoaded;
      this.loadButtonEl.textContent = "Load selected map";
      return;
    }

    const sameMap = loaded?.baseId === selected.baseId;
    const sameLayers =
      sameMap &&
      this.loadedLayers !== null &&
      this.currentLayers.zone === this.loadedLayers.zone &&
      this.currentLayers.props === this.loadedLayers.props &&
      this.currentLayers.collisions === this.loadedLayers.collisions;

    this.toolbarCurrentMapEl.textContent = loaded ? `Viewing: ${loaded.name}` : `Selected: ${selected.name}`;
    this.categoryPickerTriggerEl.disabled = false;
    this.setDropdownTriggerContent(
      this.categoryPickerTriggerEl,
      this.selectedCategory === CATEGORY_ALL ? "All categories" : this.selectedCategory,
      "Filter the map list by region or release"
    );
    this.mapPickerTriggerEl.disabled = false;
    this.setDropdownTriggerContent(this.mapPickerTriggerEl, selected.name, `${selected.category} · ${selected.baseId}`);
    this.loadButtonEl.disabled = !this.store.isLoaded;
    this.loadButtonEl.textContent = sameMap && sameLayers ? "Reload selected map" : "Load selected map";
  }

  private updateHud(): void {
    const active = this.loadedMapId !== null;
    this.cameraBadgeEl.textContent = `Camera: ${this.currentController}`;
    this.helpTextEl.textContent = HELP_COPY[this.currentController];
    this.speedInputEl.disabled = !active;
    this.fogInputEl.disabled = !active;
    this.cameraToggleEl.disabled = !active;
    this.renderDrawerToggleEl.disabled = !active;
    this.screenshotButtonEl.disabled = !active;
    this.speedInputEl.value = String(this.preferences.movementSpeed);
    this.speedValueEl.textContent = String(this.preferences.movementSpeed);
    this.fogInputEl.value = String(this.preferences.fog);
    this.fogValueEl.textContent = String(Math.round(this.viewport.fog));
  }

  private updateEmptyState(): void {
    const selected = this.selectedMapId !== null ? this.store.findMap(this.selectedMapId) : undefined;
    const active = this.loadedMapId !== null;
    this.emptyStateEl.hidden = active;

    if (!this.store.isLoaded) {
      this.emptyTitleEl.textContent = "Open a local archive to begin";
      this.emptyTextEl.textContent =
        this.pendingHash.map !== undefined
          ? `A shared view for map ${this.pendingHash.map} is waiting. Open the matching archive to restore it.`
          : "T3D Explorer now stays in one persistent viewport. Open Gw2.dat, choose a map from the overlay picker, and load it directly into view.";
      this.emptyActionEl.textContent = "Open archive...";
      this.emptyActionEl.disabled = false;
      return;
    }

    if (selected) {
      this.emptyTitleEl.textContent = selected.name;
      this.emptyTextEl.textContent = `BaseId ${selected.baseId}. Review the current render settings, then load the selected map into the viewport.`;
      this.emptyActionEl.textContent = "Load selected map";
      this.emptyActionEl.disabled = false;
      return;
    }

    this.emptyTitleEl.textContent = "Select a map";
    this.emptyTextEl.textContent = "Choose a map from the overlay picker to populate the viewport.";
    this.emptyActionEl.textContent = "Select a map";
    this.emptyActionEl.disabled = true;
  }

  private setBusy(title: string | null, label: string | null, pct: number | null): void {
    if (title !== null) this.loadingTitleEl.textContent = title;
    if (label !== null) {
      this.loadingLabelEl.textContent = pct === null ? label : `${label} - ${Math.round(pct)}%`;
      this.loadingFillEl.style.width = `${Math.max(0, Math.min(100, pct ?? 0))}%`;
    } else {
      this.loadingLabelEl.textContent = "";
      this.loadingFillEl.style.width = "18%";
    }
    this.loadingOverlayEl.classList.add("visible");
    this.isBusy = true;
  }

  private clearBusy(): void {
    this.loadingOverlayEl.classList.remove("visible");
    this.loadingTitleEl.textContent = "";
    this.loadingLabelEl.textContent = "";
    this.loadingFillEl.style.width = "0%";
    this.isBusy = false;
  }

  private toggleCamera(): void {
    if (this.loadedMapId === null) return;
    this.currentController = this.currentController === "fly" ? "orbital" : "fly";
    this.preferences.cameraType = this.currentController;
    savePreferences(this.preferences);
    this.viewport.setController(this.currentController);
    this.updateHud();
  }

  private toggleTheme(): void {
    const current = document.documentElement.classList.contains("theme-dark") ? "dark" : "light";
    const next: Theme = current === "dark" ? "light" : "dark";
    this.preferences.theme = next;
    savePreferences(this.preferences);
    this.applyTheme(next);
  }

  private applyTheme(theme: Theme | null): void {
    const resolved = theme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("theme-dark", resolved === "dark");
    document.documentElement.classList.toggle("theme-light", resolved === "light");
    this.themeToggleEl.textContent = resolved === "dark" ? "Dark" : "Light";
    this.themeToggleEl.title = `Switch to ${resolved === "dark" ? "light" : "dark"} theme`;
  }

  private startUrlSync(): void {
    window.setInterval(() => this.syncUrlHash(), 180);
  }

  private syncUrlHash(): void {
    if (this.loadedMapId === null) {
      if (!this.lastHash) return;
      this.lastHash = "";
      const url = new URL(window.location.href);
      url.hash = "";
      history.replaceState(null, "", url.toString());
      return;
    }

    const pose: CameraPose = this.viewport.getCameraPose();
    const activeLayers = this.loadedLayers ?? this.currentLayers;
    const hash = buildHashState(this.loadedMapId, pose, this.currentController, activeLayers, this.viewport.fog);
    if (hash === this.lastHash) return;
    this.lastHash = hash;
    const url = new URL(window.location.href);
    url.hash = hash;
    history.replaceState(null, "", url.toString());
  }

  private updateHashPreviewState(): void {
    this.updateSelectionSummary();
  }

  private showToast(msg: string): void {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3200);
  }

  private syncSelectedMapToFilters(): void {
    const visible = this.getVisibleMaps();
    if (visible.length === 0) {
      this.selectedMapId = null;
      return;
    }
    if (!visible.some((map) => map.baseId === this.selectedMapId)) {
      this.selectedMapId = visible[0]?.baseId ?? null;
    }
  }

  private setMapPickerOpen(open: boolean): void {
    this.isMapPickerOpen = this.setDropdownOpen(
      { trigger: this.mapPickerTriggerEl, panel: this.mapPickerPanelEl },
      open,
      this.store.isLoaded,
      () => this.setCategoryPickerOpen(false)
    );
    if (open) {
      queueMicrotask(() => this.searchInputEl.focus());
    }
  }

  private setCategoryPickerOpen(open: boolean): void {
    this.isCategoryPickerOpen = this.setDropdownOpen(
      { trigger: this.categoryPickerTriggerEl, panel: this.categoryPickerPanelEl },
      open,
      this.store.isLoaded,
      () => this.setMapPickerOpen(false)
    );
  }

  private setRenderDrawerOpen(open: boolean): void {
    const next = this.loadedMapId !== null ? open : false;
    this.isRenderDrawerOpen = next;
    this.renderDrawerEl.hidden = !next;
    this.renderDrawerToggleEl.classList.toggle("active", next);
    this.renderDrawerToggleEl.setAttribute("aria-expanded", String(next));
    if (!next) {
      this.setRenderDrawerCollapsed(false);
    }
  }

  private setDropdownTriggerContent(trigger: HTMLButtonElement, title: string, subtitle: string): void {
    trigger.innerHTML = `
      <span class="map-picker-trigger-copy">
        <strong>${title}</strong>
        <small>${subtitle}</small>
      </span>
      <span class="map-picker-trigger-caret" aria-hidden="true">▾</span>
    `;
  }

  private setDropdownOpen(refs: DropdownRefs, open: boolean, enabled: boolean, closeOther: () => void): boolean {
    const next = enabled ? open : false;
    if (next) closeOther();
    refs.panel.hidden = !next;
    refs.trigger.classList.toggle("open", next);
    refs.trigger.setAttribute("aria-expanded", String(next));
    return next;
  }

  private setHudCollapsed(collapsed: boolean): void {
    this.isHudCollapsed = collapsed;
    this.hudEl.classList.toggle("collapsed", collapsed);
  }

  private setHelpCollapsed(collapsed: boolean): void {
    this.isHelpCollapsed = collapsed;
    this.helpCardEl.classList.toggle("collapsed", collapsed);
  }

  private setMapPickerCollapsed(collapsed: boolean): void {
    this.isMapPickerCollapsed = collapsed;
    this.mapPickerOverlayEl.classList.toggle("collapsed", collapsed);
    if (collapsed) {
      this.setCategoryPickerOpen(false);
      this.setMapPickerOpen(false);
    }
  }

  private setRenderDrawerCollapsed(collapsed: boolean): void {
    this.isRenderDrawerCollapsed = this.isRenderDrawerOpen ? collapsed : false;
    this.renderDrawerEl.classList.toggle("collapsed", this.isRenderDrawerCollapsed);
  }
}

function buildRenderers(layers: MapLayerOptions): { renderClass: unknown; settings: Record<string, unknown> }[] {
  const renderers: { renderClass: unknown; settings: Record<string, unknown> }[] = [
    { renderClass: T3D.EnvironmentRenderer, settings: {} },
    { renderClass: T3D.TerrainRenderer, settings: {} },
  ];

  if (layers.zone) renderers.push({ renderClass: T3D.ZoneRenderer, settings: { visible: true } });
  if (layers.props) renderers.push({ renderClass: T3D.PropertiesRenderer, settings: { visible: true } });
  if (layers.collisions) renderers.push({ renderClass: T3D.HavokRenderer, settings: { visible: true } });

  return renderers;
}

function onProgressBus(listener: (label: string, pct: number) => void): () => void {
  return onProgress(listener);
}
