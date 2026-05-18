import { MapCanvas } from "../components/map-canvas";

export interface MapLayerOptions {
  zone: boolean;
  props: boolean;
  collisions: boolean;
}

export class MapView {
  private host: HTMLElement;
  private toolbar: HTMLDivElement;
  private mount: HTMLDivElement;
  private status: HTMLDivElement;
  private progressLabel!: HTMLDivElement;
  private progressBar!: HTMLDivElement;
  private progressFill!: HTMLDivElement;
  readonly canvas: MapCanvas;

  /// Layer state. The "Reload" button triggers a fresh load with these
  /// settings since terrain/props/zone/collisions are expensive to compute
  /// and we don't want to do it eagerly when a toggle is flipped.
  private layers: MapLayerOptions = { zone: false, props: true, collisions: false };
  /// Tracks the last successfully-loaded set so we can show "stale" hint
  private loadedLayers: MapLayerOptions | null = null;

  /// Callback the view asks the file-viewer to perform when the user wants
  /// to reload with new layer settings.
  private onReload: ((layers: MapLayerOptions) => void) | null = null;

  constructor(host: HTMLElement) {
    this.host = host;
    this.host.className = "view-pane map-view-pane";
    this.host.replaceChildren();

    this.toolbar = document.createElement("div");
    this.toolbar.className = "map-toolbar";

    this.mount = document.createElement("div");
    this.mount.className = "map-view";

    this.status = document.createElement("div");
    this.status.className = "map-status";
    this.status.textContent = "Loading map…";

    /// Progress strip — sibling of the status pill, overlaying the canvas
    /// at the bottom. Shows the current label + a thin animated bar.
    const progressWrap = document.createElement("div");
    progressWrap.className = "map-progress";
    this.progressLabel = document.createElement("div");
    this.progressLabel.className = "map-progress-label";
    this.progressBar = document.createElement("div");
    this.progressBar.className = "map-progress-bar";
    this.progressFill = document.createElement("div");
    this.progressFill.className = "map-progress-fill";
    this.progressBar.appendChild(this.progressFill);
    progressWrap.append(this.progressLabel, this.progressBar);

    /// Status + progress overlay on top of the canvas; they live inside
    /// the mount so they don't shift the canvas's layout.
    this.mount.append(this.status, progressWrap);
    this.host.append(this.toolbar, this.mount);

    this.buildToolbar();
    this.canvas = new MapCanvas();
  }

  setOnReload(fn: (layers: MapLayerOptions) => void): void {
    this.onReload = fn;
  }

  setStatus(text: string): void {
    this.status.textContent = text;
  }

  /// Update the progress bar. `pct` is 0..100. Pass null to hide it.
  setProgress(label: string | null, pct: number | null): void {
    const visible = label !== null && pct !== null;
    this.progressLabel.parentElement!.classList.toggle("visible", visible);
    if (visible) {
      this.progressLabel.textContent = `${label} · ${Math.round(pct)}%`;
      this.progressFill.style.width = Math.max(0, Math.min(100, pct)) + "%";
    }
  }

  /// Called by file-viewer after a successful renderMapContentsAsync.
  onLoaded(layers: MapLayerOptions): void {
    this.loadedLayers = { ...layers };
    this.layers = { ...layers };
    this.refreshToolbarState();
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

  private buildToolbar(): void {
    this.toolbar.replaceChildren();
    const zoneLbl = this.checkbox("Zone models", "zone");
    const propsLbl = this.checkbox("Props", "props");
    const collLbl = this.checkbox("Collisions", "collisions");

    const reload = document.createElement("button");
    reload.className = "map-reload-btn";
    reload.textContent = "Reload with these layers";
    reload.addEventListener("click", () => {
      if (!this.onReload) return;
      this.setStatus("Reloading map…");
      this.onReload({ ...this.layers });
    });

    this.toolbar.append(zoneLbl, propsLbl, collLbl, reload);
    this.refreshToolbarState();
  }

  private checkbox(label: string, key: keyof MapLayerOptions): HTMLLabelElement {
    const lbl = document.createElement("label");
    lbl.className = "map-layer-toggle";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = this.layers[key];
    cb.addEventListener("change", () => {
      this.layers[key] = cb.checked;
      this.refreshToolbarState();
    });
    lbl.append(cb, document.createTextNode(label));
    /// Keep a ref so refreshToolbarState can update it
    (lbl as any)._cb = cb;
    (lbl as any)._key = key;
    return lbl;
  }

  private refreshToolbarState(): void {
    /// Highlight the Reload button if pending layers differ from loaded
    const reload = this.toolbar.querySelector(".map-reload-btn") as HTMLButtonElement | null;
    if (!reload) return;
    let dirty = false;
    if (this.loadedLayers) {
      dirty =
        this.loadedLayers.zone !== this.layers.zone ||
        this.loadedLayers.props !== this.layers.props ||
        this.loadedLayers.collisions !== this.layers.collisions;
    }
    reload.classList.toggle("dirty", dirty);
  }
}
