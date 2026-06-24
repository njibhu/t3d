import T3D, {
  EnvironmentRenderer,
  FileParser,
  HavokRenderer,
  LocalReader,
  PropertiesRenderer,
  SingleModelRenderer,
  StringRenderer,
  TerrainRenderer,
  ZoneRenderer,
} from "t3d-lib";
import { renderRawView } from "../views/raw-view";
import { renderPackView } from "../views/pack-view";
import { detectTextureKind, exportRenderedTextureAsPng, renderTextureView } from "../views/texture-view";
import { StringView } from "../views/string-view";
import { SoundEntry, SoundView } from "../views/sound-view";
import { ModelView } from "../views/model-view";
import { HexView } from "../views/hex-view";
import { DEFAULT_MAP_LAYERS, MapView, MapLayerOptions } from "../views/map-view";
import { CntcView, type CntcNavigationTarget } from "../views/cntc-view";
import { onProgress } from "../store/progress-bus";
import { triggerDownload } from "../util/download";

type TabKind = "raw" | "hex" | "pack" | "texture" | "string" | "model" | "map" | "sound" | "cntc";

const TAB_LABELS: Record<TabKind, string> = {
  raw: "Raw",
  hex: "Hex",
  pack: "Pack File",
  texture: "Texture",
  string: "String",
  model: "Model",
  map: "Map",
  sound: "Sound",
  cntc: "CNTC",
};

export interface FileViewerInit {
  reader: LocalReader;
  fileId: number;
  onNavigateToCntcEntry?: (target: CntcNavigationTarget) => void;
  onOpenFile?: (baseId: number, newTab: boolean) => void;
}

export class FileViewer {
  readonly root: HTMLDivElement;
  readonly fileId: number;
  fileName = "";

  /** Resolves once `load()` has populated `fileName` and built the initial
   *  tabs. Awaitable for consumers that want to update labels/chrome after
   *  the file's shape is known. */
  readonly ready: Promise<void>;

  private reader: LocalReader;
  private onNavigateToCntcEntry?: (target: CntcNavigationTarget) => void;
  private onOpenFile?: (baseId: number, newTab: boolean) => void;
  private titleEl!: HTMLHeadingElement;
  private actionsEl!: HTMLDivElement;
  private tabsEl!: HTMLDivElement;
  private viewHost!: HTMLDivElement;
  private tabs = new Map<TabKind, { tab: HTMLDivElement; pane: HTMLDivElement }>();
  private activeTab: TabKind | null = null;

  private stringView?: StringView;
  private soundView?: SoundView;
  private modelView?: ModelView;
  private mapView?: MapView;
  private cntcView?: CntcView;

  private context: any = {};

  constructor(init: FileViewerInit) {
    this.reader = init.reader;
    this.onNavigateToCntcEntry = init.onNavigateToCntcEntry;
    this.onOpenFile = init.onOpenFile;
    this.fileId = init.fileId;
    this.root = document.createElement("div");
    this.root.className = "file-viewer";
    this.buildSkeleton();
    this.ready = this.load();
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
    // GL-backed tabs pause their render loop while not visible.
    if (this.activeTab === "model") this.modelView?.deactivate();
    if (this.activeTab === "map") this.mapView?.deactivate();
    this.activeTab = kind;
    for (const [k, { tab, pane }] of this.tabs) {
      const active = k === kind;
      tab.classList.toggle("active", active);
      pane.hidden = !active;
    }
    if (kind === "model") this.modelView?.activate();
    if (kind === "map") this.mapView?.activate();
  }

  onShow(): void {
    if (this.activeTab === "model") this.modelView?.activate();
    if (this.activeTab === "map") this.mapView?.activate();
  }

  onHide(): void {
    this.modelView?.deactivate();
    this.mapView?.deactivate();
  }

  async focusCntcEntry(
    target: Pick<CntcNavigationTarget, "type" | "typeId" | "uniqueId" | "offset">
  ): Promise<boolean> {
    await this.ready;
    if (!this.cntcView) {
      return false;
    }
    this.activateTab("cntc");
    return this.cntcView.focusEntry(target);
  }

  dispose(): void {
    this.modelView?.dispose();
    this.mapView?.dispose();
    this.soundView?.dispose();
  }

  private addAction(label: string, fn: () => void): void {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.addEventListener("click", fn);
    this.actionsEl.appendChild(btn);
  }

  // ---- loading + dispatch ----

  private async load(): Promise<void> {
    await runRenderer(T3D.DataRenderer, this.reader, { id: this.fileId }, this.context);

    const fileId = T3D.getContextValue<number>(this.context, T3D.DataRenderer, "fileId");
    const rawData = T3D.getContextValue<ArrayBuffer>(this.context, T3D.DataRenderer, "rawData");
    const rawString = T3D.getContextValue<string>(this.context, T3D.DataRenderer, "rawString", "");
    const packfile = T3D.getContextValue<any>(this.context, T3D.DataRenderer, "file");
    const image = T3D.getContextValue<any>(this.context, T3D.DataRenderer, "image");

    const fcc = rawString.substring(0, 4);
    this.fileName = `${fileId}${image || !packfile ? "." + fcc : "." + packfile.header.type}`;
    this.titleEl.textContent = this.fileName;

    // Decide the primary tab up-front from the file shape so we activate it
    // exactly once. Otherwise Raw flashes briefly before the real tab loads.
    const texInput = { rawData, image };
    const texKind = detectTextureKind(texInput);
    const isModel = packfile?.header.type === "MODL";
    const isMap = packfile?.header.type === "mapc";
    const isSound = packfile?.header.type === "ASND";
    const isSoundBank = packfile?.header.type === "ABNK";
    const isStrings = !packfile && fcc === "strs";
    const isCntc = packfile?.header.type === "cntc";
    const primary: TabKind = isModel
      ? "model"
      : isMap
        ? "map"
        : isCntc
          ? "cntc"
          : texKind
            ? "texture"
            : isSound || isSoundBank
              ? "sound"
              : isStrings
                ? "string"
                : packfile
                  ? "pack"
                  : "raw";

    // Build tabs in their display order (Raw, Hex, Pack, Texture, then the
    // type-specific tab) so the strip is stable across file kinds.
    const rawTab = this.ensureTab("raw");
    renderRawView(rawTab.pane, rawString);
    this.addAction("Download raw", () => triggerDownload(new Blob([rawData]), this.fileName + ".raw"));

    const hexTab = this.ensureTab("hex");
    new HexView(hexTab.pane).setData(rawData);

    if (packfile) {
      const p = this.ensureTab("pack");
      renderPackView(p.pane, packfile, this.fileName);
    }

    if (isCntc) {
      const c = this.ensureTab("cntc");
      this.cntcView ??= new CntcView(c.pane, {
        reader: this.reader,
        onNavigateToEntry: this.onNavigateToCntcEntry,
        onOpenFile: this.onOpenFile,
      });
      this.cntcView.setData(packfile, this.fileName);
    }

    if (texKind) {
      const t = this.ensureTab("texture");
      renderTextureView(t.pane, texInput, texKind);
      this.addAction("Download Image", async () => {
        const blob = await exportRenderedTextureAsPng(t.pane);
        triggerDownload(blob, `${fileId}.png`);
      });
      if (texKind === "riff")
        this.addAction("Download RIFF", () => triggerDownload(new Blob([rawData]), `${fileId}.riff`));
      else if (texKind === "dds")
        this.addAction("Download DDS", () => triggerDownload(new Blob([rawData]), `${fileId}.dds`));
    }

    // Pre-create the type-specific tab so its chip is in the strip before
    // the (often slow) renderer for it finishes.
    if (isModel) {
      const m = this.ensureTab("model");
      this.modelView ??= new ModelView(m.pane);
    } else if (isMap) {
      const m = this.ensureTab("map");
      if (!this.mapView) {
        this.mapView = new MapView(m.pane);
        this.mapView.setOnReload((layers) => this.loadMap(layers));
        this.mapView.setOnOpenFile((baseId, newTab) => this.onOpenFile?.(baseId, newTab));
      }
    } else if (isSound || isSoundBank) {
      this.ensureTab("sound");
    } else if (isStrings) {
      this.ensureTab("string");
    }

    this.activateTab(primary);

    if (isModel) void this.loadModel();
    else if (isMap) this.loadMap({ ...DEFAULT_MAP_LAYERS });
    else if (isSound || isSoundBank) this.loadSound(packfile);
    else if (isStrings) void this.loadStrings();
  }

  private async loadModel(): Promise<void> {
    const view = this.modelView;
    if (!view) return;
    const packfile = T3D.getContextValue<any>(this.context, T3D.DataRenderer, "file");
    if (!packfile.chunks.some((c: any) => c.header.type === "MODL")) return;

    this.context = {};
    await runRenderer(SingleModelRenderer, this.reader, { id: this.fileId }, this.context);
    view.canvas.setModels(T3D.getContextValue<any[]>(this.context, SingleModelRenderer, "meshes", []));
    this.addAction("Export OBJ", () => triggerDownload(view.canvas.exportOBJ(), `export.${this.fileId}.obj`));
  }

  private loadMap(layers: MapLayerOptions): void {
    const view = this.mapView;
    if (!view) return;
    view.setStatus("Loading terrain & environment…");
    view.setProgress("Starting", 0);

    // Library progress events feed the map view's progress strip while the
    // (potentially long) render is in flight.
    const unsubscribe = onProgress((label, pct) => view.setProgress(label, pct));

    const renderers: { renderClass: typeof T3D.DataRenderer; settings: any }[] = [
      { renderClass: EnvironmentRenderer, settings: {} },
      { renderClass: TerrainRenderer, settings: {} },
    ];
    if (layers.zone) renderers.push({ renderClass: ZoneRenderer, settings: { visible: true } });
    if (layers.props) renderers.push({ renderClass: PropertiesRenderer, settings: { visible: true } });
    if (layers.collisions) renderers.push({ renderClass: HavokRenderer, settings: { visible: true } });

    T3D.renderMapContentsAsync(this.reader, this.fileId, renderers, (ctx) => {
      unsubscribe();
      view.canvas.applyMapContext(ctx, layers);
      view.onLoaded(layers);
    });
  }

  private loadSound(packfile: FileParser): void {
    const pane = this.tabs.get("sound")!.pane;
    this.soundView ??= new SoundView(pane);
    this.soundView.render(this.getSoundEntries(packfile));
  }

  private getSoundEntries(packfile: FileParser): SoundEntry[] {
    if (packfile.header.type === "ASND") {
      const chunk = packfile.getChunk("ASND");
      if (!chunk) return [];
      return [{ data: chunk.data, fileName: this.fileName }];
    }

    if (packfile.header.type === "ABNK") {
      const chunk = packfile.getChunk("BKCK");
      if (!chunk?.data?.asndFile) return [];
      return chunk.data.asndFile.map(
        (entry: { audioData: Uint8Array; length: number; voiceId?: number }, index: number) => {
          const voiceSuffix = entry.voiceId != null ? `.voice-${entry.voiceId}` : `.sample-${index + 1}`;
          return {
            data: entry,
            fileName: `${this.fileName}${voiceSuffix}`,
            title: entry.voiceId != null ? `Voice ${entry.voiceId}` : `Sample ${index + 1}`,
            meta: `Entry ${index + 1}`,
          };
        }
      );
    }

    return [];
  }

  private async loadStrings(): Promise<void> {
    this.context = {};
    await runRenderer(StringRenderer, this.reader, { id: this.fileId }, this.context);
    const strings = T3D.getContextValue<any[]>(this.context, StringRenderer, "strings", []);
    const pane = this.tabs.get("string")!.pane;
    this.stringView ??= new StringView(pane);
    this.stringView.setData(strings);
  }
}

function runRenderer(
  cls: typeof T3D.DataRenderer,
  reader: LocalReader,
  settings: Record<string, unknown>,
  context: Record<string, unknown>
): Promise<void> {
  return new Promise((resolve) => T3D.runRenderer(cls, reader, settings, context, resolve));
}
