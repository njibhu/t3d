import { ModelCanvas } from "../components/model-canvas";
import { MapCanvas } from "../components/map-canvas";
import { cloneSelectionPreview, MapInspectSelection, MapInspectTextureRef } from "./map-inspector";

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

  private canvasViewport: HTMLDivElement;
  private status: HTMLDivElement;
  private progressWrap: HTMLDivElement;
  private progressLabel: HTMLDivElement;
  private progressFill: HTMLDivElement;
  private reloadBtn: HTMLButtonElement;
  private previewFrame: HTMLDivElement;
  private previewHost: HTMLDivElement;
  private previewEmpty: HTMLDivElement;
  private inspectorStatus: HTMLDivElement;
  private inspectorDetails: HTMLDivElement;
  private inspectorMeta: HTMLDivElement;
  private previewCanvas = new ModelCanvas();
  private previewMounted = false;

  private layers: MapLayerOptions = { ...DEFAULT_MAP_LAYERS };
  private loadedLayers: MapLayerOptions | null = null;
  private onReload: ((layers: MapLayerOptions) => void) | null = null;
  private onOpenFile: ((baseId: number, newTab: boolean) => void) | null = null;

  constructor(host: HTMLElement) {
    host.className = "view-pane map-view-pane";
    host.replaceChildren();

    const { toolbar, reloadBtn } = this.buildToolbar();
    this.reloadBtn = reloadBtn;

    const mount = document.createElement("div");
    mount.className = "map-view";

    const canvasPane = document.createElement("section");
    canvasPane.className = "map-canvas-pane";
    const canvasHost = document.createElement("div");
    canvasHost.className = "map-canvas-host";
    this.canvasViewport = document.createElement("div");
    this.canvasViewport.className = "map-canvas-viewport";

    this.status = document.createElement("div");
    this.status.className = "map-status";
    this.status.textContent = "Loading map...";

    [this.progressWrap, this.progressLabel, this.progressFill] = this.buildProgressStrip();
    canvasHost.append(this.canvasViewport, this.status, this.progressWrap);
    canvasPane.appendChild(canvasHost);

    const inspectorPane = document.createElement("aside");
    inspectorPane.className = "map-inspector";
    const inspectorHeader = document.createElement("div");
    inspectorHeader.className = "map-inspector-header";
    const inspectorTitle = document.createElement("h3");
    inspectorTitle.textContent = "Mesh Inspector";
    this.inspectorStatus = document.createElement("div");
    this.inspectorStatus.className = "map-inspector-status";
    inspectorHeader.append(inspectorTitle, this.inspectorStatus);

    this.previewFrame = document.createElement("div");
    this.previewFrame.className = "map-inspector-preview";
    this.previewHost = document.createElement("div");
    this.previewHost.className = "map-inspector-preview-canvas";
    this.previewEmpty = document.createElement("div");
    this.previewEmpty.className = "map-inspector-preview-empty";
    this.previewEmpty.textContent = "Select a mesh to preview it here.";
    this.previewFrame.append(this.previewHost, this.previewEmpty);

    this.inspectorMeta = document.createElement("div");
    this.inspectorMeta.className = "map-inspector-meta";
    this.inspectorDetails = document.createElement("div");
    this.inspectorDetails.className = "map-inspector-details";

    inspectorPane.append(inspectorHeader, this.previewFrame, this.inspectorMeta, this.inspectorDetails);
    mount.append(canvasPane, inspectorPane);
    host.append(toolbar, mount);

    this.canvas = new MapCanvas();
    this.canvas.setInspectEnabled(true);
    this.canvas.setOnSelectionChange((selection) => this.renderSelection(selection));
    this.renderInspectorMessage("Click a prop, zone mesh, or collision mesh in the map to inspect it.");
  }

  setOnReload(fn: (layers: MapLayerOptions) => void): void {
    this.onReload = fn;
  }

  setOnOpenFile(fn: (baseId: number, newTab: boolean) => void): void {
    this.onOpenFile = fn;
  }

  setStatus(text: string): void {
    this.status.textContent = text;
  }

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
    this.renderInspectorMessage("Click a prop, zone mesh, or collision mesh in the map to inspect it.");
  }

  activate(): void {
    this.canvas.mount(this.canvasViewport);
    if (this.previewMounted) {
      this.previewCanvas.mount(this.previewHost);
    }
  }

  deactivate(): void {
    this.canvas.pause();
    this.previewCanvas.pause();
  }

  dispose(): void {
    this.previewCanvas.dispose();
    this.canvas.dispose();
  }

  private buildToolbar(): {
    toolbar: HTMLDivElement;
    reloadBtn: HTMLButtonElement;
  } {
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
      this.setStatus("Reloading map...");
      this.renderInspectorMessage("Reloading map...");
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

  private renderInspectorMessage(message: string): void {
    this.inspectorStatus.textContent = "Inspector active";
    this.inspectorMeta.textContent = message;
    this.inspectorDetails.replaceChildren();
    this.previewFrame.classList.remove("has-selection");
    this.previewCanvas.pause();
  }

  private renderSelection(selection: MapInspectSelection | null): void {
    if (!selection) {
      this.renderInspectorMessage("Click a prop, zone mesh, or collision mesh in the map to inspect it.");
      return;
    }

    const metadata = selection.metadata;
    this.inspectorStatus.textContent = labelForSourceKind(metadata.sourceKind);
    const headingParts = [metadata.objectLabel ?? labelForSourceKind(metadata.sourceKind)];
    if (metadata.modelId != null) headingParts.push(`Model ${metadata.modelId}`);
    this.inspectorMeta.textContent = headingParts.join(" · ");
    const textureRefs = dedupeTextureRefs(metadata.textureRefs ?? []);

    this.inspectorDetails.replaceChildren(
      this.buildDetailRow("Source", labelForSourceKind(metadata.sourceKind)),
      this.buildDetailRow(
        "Model ID",
        this.buildFileLinkList(
          metadata.modelId != null ? [{ fileId: metadata.modelId, label: String(metadata.modelId) }] : []
        )
      ),
      this.buildDetailRow("Material", metadata.materialName || "—"),
      this.buildDetailRow(
        "Material File",
        this.buildFileLinkList(
          metadata.materialFileId != null
            ? [{ fileId: metadata.materialFileId, label: String(metadata.materialFileId) }]
            : []
        )
      ),
      this.buildDetailRow(
        "Textures",
        this.buildFileLinkList(
          textureRefs.map((textureRef) => ({
            fileId: textureRef.fileId,
            label: `${textureRef.label}: ${textureRef.fileId}`,
          }))
        )
      ),
      this.buildDetailRow("Material Flags", formatNullableNumber(metadata.materialFlags)),
      this.buildDetailRow("Mesh Flags", formatNullableNumber(metadata.meshFlags)),
      this.buildDetailRow("UV Sets", formatNullableNumber(metadata.numUv)),
      this.buildDetailRow(
        "Instance",
        selection.instanceId != null ? `${selection.instanceId + 1} / ${selection.instanceCount}` : "Single mesh"
      ),
      this.buildDetailRow("Position", formatVector(selection.position)),
      this.buildDetailRow("Rotation", formatEuler(selection.rotation)),
      this.buildDetailRow("Scale", formatVector(selection.scale)),
      this.buildDetailRow("Bounding Radius", formatNullableNumber(selection.boundingSphereRadius)),
      this.buildDetailRow("Collision Index", formatNullableNumber(metadata.collisionIndex))
    );

    this.previewFrame.classList.add("has-selection");
    if (!this.previewMounted) {
      this.previewCanvas.mount(this.previewHost);
      this.previewMounted = true;
    } else {
      this.previewCanvas.mount(this.previewHost);
    }

    const previewObject = cloneSelectionPreview(selection);
    this.previewCanvas.setModels(previewObject ? [previewObject] : []);
  }

  private buildDetailRow(label: string, value: string | Node): HTMLDivElement {
    const row = document.createElement("div");
    row.className = "map-inspector-detail-row";
    const term = document.createElement("span");
    term.className = "map-inspector-detail-label";
    term.textContent = label;
    const description = document.createElement("div");
    description.className = "map-inspector-detail-value";
    if (typeof value === "string") {
      description.textContent = value;
    } else {
      description.appendChild(value);
    }
    row.append(term, description);
    return row;
  }

  private buildFileLinkList(items: { fileId: number; label: string }[]): Node {
    if (items.length === 0) {
      return document.createTextNode("—");
    }

    const fragment = document.createDocumentFragment();
    items.forEach((item, index) => {
      if (index > 0) {
        fragment.appendChild(document.createTextNode(", "));
      }

      const link = document.createElement("button");
      link.type = "button";
      link.className = "map-inspector-file-link";
      link.textContent = item.label;
      link.addEventListener("click", () => {
        this.onOpenFile?.(item.fileId, true);
      });
      fragment.appendChild(link);
    });
    return fragment;
  }
}

function labelForSourceKind(kind: MapInspectSelection["metadata"]["sourceKind"]): string {
  if (kind === "prop") return "Prop mesh";
  if (kind === "zone") return "Zone mesh";
  return "Collision mesh";
}

function dedupeTextureRefs(textureRefs: MapInspectTextureRef[]): MapInspectTextureRef[] {
  const seen = new Set<number>();
  const out: MapInspectTextureRef[] = [];
  for (const textureRef of textureRefs) {
    if (seen.has(textureRef.fileId)) continue;
    seen.add(textureRef.fileId);
    out.push(textureRef);
  }
  return out;
}

function formatNullableNumber(value: number | null | undefined): string {
  return value == null ? "—" : Number.isInteger(value) ? String(value) : value.toFixed(2);
}

function formatVector(vector: { x: number; y: number; z: number }): string {
  return `${vector.x.toFixed(2)}, ${vector.y.toFixed(2)}, ${vector.z.toFixed(2)}`;
}

function formatEuler(euler: { x: number; y: number; z: number }): string {
  const factor = 180 / Math.PI;
  return `${(euler.x * factor).toFixed(1)}°, ${(euler.y * factor).toFixed(1)}°, ${(euler.z * factor).toFixed(1)}°`;
}
