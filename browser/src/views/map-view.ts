import { MapCanvas } from "../components/map-canvas";

export interface MapLayerOptions {
  zone: boolean;
  props: boolean;
  collisions: boolean;
}

export const DEFAULT_MAP_LAYERS: MapLayerOptions = { zone: false, props: true, collisions: false };

const LAYER_LABELS: Record<keyof MapLayerOptions, string> = {
  zone: "Zone models",
  props: "Props",
  collisions: "Collisions",
};

export class MapView {
  readonly canvas: MapCanvas;

  private mount: HTMLDivElement;
  private status: HTMLDivElement;
  private progressWrap: HTMLDivElement;
  private progressLabel: HTMLDivElement;
  private progressFill: HTMLDivElement;
  private reloadBtn: HTMLButtonElement;

  // Loading the full set of layers is expensive enough that we don't redo
  // it when the user toggles a checkbox - they explicitly Reload.
  private layers: MapLayerOptions = { ...DEFAULT_MAP_LAYERS };
  private loadedLayers: MapLayerOptions | null = null;
  private onReload: ((layers: MapLayerOptions) => void) | null = null;

  constructor(host: HTMLElement) {
    host.className = "view-pane map-view-pane";
    host.replaceChildren();

    const { toolbar, reloadBtn } = this.buildToolbar();
    this.reloadBtn = reloadBtn;

    this.mount = document.createElement("div");
    this.mount.className = "map-view";

    this.status = document.createElement("div");
    this.status.className = "map-status";
    this.status.textContent = "Loading map…";

    [this.progressWrap, this.progressLabel, this.progressFill] = this.buildProgressStrip();

    // Status pill and progress strip overlay the canvas; they're children
    // of the mount so they don't shift the canvas's layout.
    this.mount.append(this.status, this.progressWrap);
    host.append(toolbar, this.mount);

    this.canvas = new MapCanvas();
  }

  setOnReload(fn: (layers: MapLayerOptions) => void): void {
    this.onReload = fn;
  }

  setStatus(text: string): void {
    this.status.textContent = text;
  }

  /** `pct` is 0..100. Pass nulls to hide the progress strip. */
  setProgress(label: string | null, pct: number | null): void {
    const visible = label !== null && pct !== null;
    this.progressWrap.classList.toggle("visible", visible);
    if (visible) {
      this.progressLabel.textContent = `${label} · ${Math.round(pct)}%`;
      this.progressFill.style.width = Math.max(0, Math.min(100, pct)) + "%";
    }
  }

  onLoaded(layers: MapLayerOptions): void {
    this.loadedLayers = { ...layers };
    this.layers = { ...layers };
    this.refreshReloadState();
    this.setStatus("");
    this.setProgress(null, null);
  }

  activate(): void {
    this.canvas.mount(this.mount);
  }

  deactivate(): void {
    this.canvas.pause();
  }

  dispose(): void {
    this.canvas.dispose();
  }

  private buildToolbar(): { toolbar: HTMLDivElement; reloadBtn: HTMLButtonElement } {
    const toolbar = document.createElement("div");
    toolbar.className = "map-toolbar";

    for (const key of ["zone", "props", "collisions"] as const) {
      toolbar.appendChild(this.buildLayerToggle(key));
    }

    const reloadBtn = document.createElement("button");
    reloadBtn.className = "map-reload-btn";
    reloadBtn.textContent = "Reload with these layers";
    reloadBtn.addEventListener("click", () => {
      if (!this.onReload) return;
      this.setStatus("Reloading map…");
      this.onReload({ ...this.layers });
    });
    toolbar.appendChild(reloadBtn);
    return { toolbar, reloadBtn };
  }

  private buildLayerToggle(key: keyof MapLayerOptions): HTMLLabelElement {
    const label = document.createElement("label");
    label.className = "map-layer-toggle";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = this.layers[key];
    checkbox.addEventListener("change", () => {
      this.layers[key] = checkbox.checked;
      this.refreshReloadState();
    });
    label.append(checkbox, document.createTextNode(LAYER_LABELS[key]));
    return label;
  }

  private buildProgressStrip(): [HTMLDivElement, HTMLDivElement, HTMLDivElement] {
    const wrap = document.createElement("div");
    wrap.className = "map-progress";
    const label = document.createElement("div");
    label.className = "map-progress-label";
    const bar = document.createElement("div");
    bar.className = "map-progress-bar";
    const fill = document.createElement("div");
    fill.className = "map-progress-fill";
    bar.appendChild(fill);
    wrap.append(label, bar);
    return [wrap, label, fill];
  }

  private refreshReloadState(): void {
    const loaded = this.loadedLayers;
    const dirty =
      loaded != null &&
      (loaded.zone !== this.layers.zone ||
        loaded.props !== this.layers.props ||
        loaded.collisions !== this.layers.collisions);
    this.reloadBtn.classList.toggle("dirty", dirty);
  }
}
