import T3D, { LocalReader, SingleModelRenderer, StringRenderer } from "t3d-lib";
import { renderRawView } from "../views/raw-view";
import { renderPackView } from "../views/pack-view";
import { detectTextureKind, renderTextureView } from "../views/texture-view";
import { StringView } from "../views/string-view";
import { SoundView } from "../views/sound-view";
import { ModelView } from "../views/model-view";
import { HexView } from "../views/hex-view";

type TabKind = "raw" | "hex" | "pack" | "texture" | "string" | "model" | "sound";

const TAB_LABELS: Record<TabKind, string> = {
  raw: "Raw",
  hex: "Hex",
  pack: "Pack File",
  texture: "Texture",
  string: "String",
  model: "Model",
  sound: "Sound",
};

export interface FileViewerInit {
  reader: LocalReader;
  fileId: number;
}

export class FileViewer {
  readonly root: HTMLDivElement;
  readonly fileId: number;
  fileName = "";

  private reader: LocalReader;
  private titleEl!: HTMLHeadingElement;
  private actionsEl!: HTMLDivElement;
  private tabsEl!: HTMLDivElement;
  private viewHost!: HTMLDivElement;
  /// Map: tabKind → { tab element, pane element }
  private tabs = new Map<TabKind, { tab: HTMLDivElement; pane: HTMLDivElement }>();
  private activeTab: TabKind | null = null;

  /// Lazily-created views
  private stringView?: StringView;
  private soundView?: SoundView;
  private modelView?: ModelView;
  private hexView?: HexView;

  /// Renderer context for this file (kept isolated per viewer)
  private context: any = {};

  constructor(init: FileViewerInit) {
    this.reader = init.reader;
    this.fileId = init.fileId;
    this.root = document.createElement("div");
    this.root.className = "file-viewer";
    this.buildSkeleton();
    void this.load();
  }

  private buildSkeleton(): void {
    const titleBar = document.createElement("div");
    titleBar.className = "viewer-title-bar";
    this.titleEl = document.createElement("h2");
    this.titleEl.textContent = `Loading ${this.fileId}…`;
    titleBar.appendChild(this.titleEl);

    this.actionsEl = document.createElement("div");
    this.actionsEl.className = "actions";
    titleBar.appendChild(this.actionsEl);

    this.tabsEl = document.createElement("div");
    this.tabsEl.className = "inner-tabs";

    this.viewHost = document.createElement("div");
    this.viewHost.className = "view-host";

    this.root.append(titleBar, this.tabsEl, this.viewHost);
  }

  private ensureTab(kind: TabKind): { tab: HTMLDivElement; pane: HTMLDivElement } {
    let existing = this.tabs.get(kind);
    if (existing) return existing;
    const tab = document.createElement("div");
    tab.className = "inner-tab";
    tab.textContent = TAB_LABELS[kind];
    tab.addEventListener("click", () => this.activateTab(kind));
    this.tabsEl.appendChild(tab);

    const pane = document.createElement("div");
    pane.className = "view-pane";
    pane.hidden = true;
    this.viewHost.appendChild(pane);

    existing = { tab, pane };
    this.tabs.set(kind, existing);
    return existing;
  }

  private activateTab(kind: TabKind): void {
    if (this.activeTab === kind) return;
    /// Pause previous model rendering if leaving the model tab
    if (this.activeTab === "model") this.modelView?.deactivate();
    this.activeTab = kind;
    for (const [k, { tab, pane }] of this.tabs) {
      const active = k === kind;
      tab.classList.toggle("active", active);
      pane.hidden = !active;
    }
    if (kind === "model") this.modelView?.activate();
  }

  /// Notify the viewer that it became visible (file-tab activated).
  /// Resumes the model render loop if applicable.
  onShow(): void {
    if (this.activeTab === "model") this.modelView?.activate();
  }

  /// Notify the viewer that it became hidden. Pause expensive work.
  onHide(): void {
    this.modelView?.deactivate();
  }

  dispose(): void {
    this.modelView?.dispose();
    this.soundView?.dispose();
  }

  private addAction(label: string, fn: () => void): void {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.addEventListener("click", fn);
    this.actionsEl.appendChild(btn);
  }

  /* -------------- loading + dispatch -------------- */

  private async load(): Promise<void> {
    /// Run DataRenderer, same as v1 (browser/src/index.js:474).
    /// DataRenderer outputs: fileId, rawData, rawString, file (packfile), image
    await new Promise<void>((resolve) => {
      T3D.runRenderer(T3D.DataRenderer, this.reader, { id: this.fileId }, this.context, resolve);
    });

    const fileId = T3D.getContextValue<number>(this.context, T3D.DataRenderer, "fileId");
    const rawData = T3D.getContextValue<ArrayBuffer>(this.context, T3D.DataRenderer, "rawData");
    const rawString = T3D.getContextValue<string>(this.context, T3D.DataRenderer, "rawString", "");
    const packfile = T3D.getContextValue<any>(this.context, T3D.DataRenderer, "file");
    const image = T3D.getContextValue<any>(this.context, T3D.DataRenderer, "image");

    const fcc = rawString.substring(0, 4);
    this.fileName = `${fileId}${image || !packfile ? "." + fcc : "." + packfile.header.type}`;
    this.titleEl.textContent = this.fileName;

    /// Decide the primary tab up-front from the file shape so we activate
    /// it once, instead of activating Raw and then jumping when the real
    /// content tab finishes loading.
    const texInput = { rawData, image };
    const texKind = detectTextureKind(texInput);
    const isModel = packfile?.header.type === "MODL";
    const isSound = packfile?.header.type === "ASND";
    const isStrings = !packfile && fcc === "strs";
    const primary: TabKind = isModel
      ? "model"
      : texKind
      ? "texture"
      : isSound
      ? "sound"
      : isStrings
      ? "string"
      : packfile
      ? "pack"
      : "raw";

    /// Build tabs in display order (raw, hex, pack, texture, string, model,
    /// sound) so they appear in a stable position in the strip.

    /// Raw — always present
    const rawTab = this.ensureTab("raw");
    renderRawView(rawTab.pane, rawString);
    this.addAction("Download raw", () => {
      const blob = new Blob([rawData], { type: "octet/stream" });
      triggerDownload(blob, this.fileName + ".raw");
    });

    /// Hex — always present
    const hexTab = this.ensureTab("hex");
    this.hexView = new HexView(hexTab.pane);
    this.hexView.setData(rawData);

    /// Pack
    if (packfile) {
      const p = this.ensureTab("pack");
      renderPackView(p.pane, packfile, this.fileName);
    }

    /// Texture
    if (texKind) {
      const t = this.ensureTab("texture");
      renderTextureView(t.pane, texInput, texKind);
      if (texKind === "png") {
        this.addAction("Download PNG", () => triggerDownload(new Blob([rawData]), `${fileId}.png`));
      } else if (texKind === "riff") {
        this.addAction("Download RIFF", () => triggerDownload(new Blob([rawData]), `${fileId}.riff`));
      } else if (texKind === "dds") {
        this.addAction("Download DDS", () => triggerDownload(new Blob([rawData]), `${fileId}.dds`));
      }
    }

    /// Pre-create the model/sound/string tabs so they appear in the strip
    /// immediately. Their content will fill in as the async renderer completes,
    /// but the tab itself is already there and active.
    if (isModel) {
      const m = this.ensureTab("model");
      if (!this.modelView) this.modelView = new ModelView(m.pane);
    } else if (isSound) {
      this.ensureTab("sound");
    } else if (isStrings) {
      this.ensureTab("string");
    }

    /// Activate the primary tab exactly once.
    this.activateTab(primary);

    /// Kick off async content loaders
    if (isModel) {
      void this.loadModel();
    } else if (isSound) {
      this.loadSound(packfile);
    } else if (isStrings) {
      this.loadStrings();
    }
  }

  private async loadModel(): Promise<void> {
    const packfile = T3D.getContextValue<any>(this.context, T3D.DataRenderer, "file");
    const hasModel = packfile.chunks.find((c: any) => c.header.type === "MODL");
    if (!hasModel) return;
    /// Reset context for the model renderer
    this.context = {};
    await new Promise<void>((resolve) => {
      T3D.runRenderer(SingleModelRenderer, this.reader, { id: this.fileId }, this.context, resolve);
    });
    const meshes = T3D.getContextValue<any[]>(this.context, SingleModelRenderer, "meshes", []);
    this.modelView!.canvas.setModels(meshes);
    this.addAction("Export OBJ", () => {
      const blob = this.modelView!.canvas.exportOBJ(String(this.fileId));
      triggerDownload(blob, `export.${this.fileId}.obj`);
    });
  }

  private loadSound(packfile: any): void {
    const chunk = packfile.getChunk("ASND");
    if (!chunk) return;
    const s = this.tabs.get("sound")!;
    if (!this.soundView) this.soundView = new SoundView(s.pane);
    this.soundView.render(chunk.data, this.fileName);
  }

  private loadStrings(): void {
    this.context = {};
    T3D.runRenderer(StringRenderer, this.reader, { id: this.fileId }, this.context, () => {
      const strings = T3D.getContextValue<any[]>(this.context, StringRenderer, "strings", []);
      const s = this.tabs.get("string")!;
      if (!this.stringView) this.stringView = new StringView(s.pane);
      this.stringView.setData(strings);
    });
  }
}

function triggerDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
