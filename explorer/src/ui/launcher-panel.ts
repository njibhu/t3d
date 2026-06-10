import { Component } from "../components/component.js";
import { Combobox } from "../components/combobox.js";
import { buildCategoryOptions, buildMapOptions } from "../store/map-catalog.js";
import type { ExplorerController } from "./explorer-controller.js";
import { buildArchiveInfo } from "./format.js";
import { fieldWithLabel } from "./controls.js";

/**
 * The archive launcher: open/drop a .dat, search region + map, and load. Owns its
 * comboboxes and their coordination; reads archive state and triggers load intents
 * through the {@link ExplorerController}.
 */
export class LauncherPanel extends Component<HTMLDivElement> {
  readonly root: HTMLDivElement;

  private readonly titleEl: HTMLHeadingElement;
  private readonly subtitleEl: HTMLParagraphElement;
  private readonly dropzone: HTMLLabelElement;
  private readonly archiveLoadedEl: HTMLDivElement;
  private readonly archiveLoadedInfoEl: HTMLDivElement;
  private readonly archiveInfoEl: HTMLDivElement;
  private readonly archiveErrorEl: HTMLDivElement;
  private readonly fileInput: HTMLInputElement;
  private readonly categoryCombo: Combobox;
  private readonly mapCombo: Combobox;
  private readonly loadMapBtn: HTMLButtonElement;
  private readonly deepScanBtn: HTMLButtonElement;

  constructor(private readonly controller: ExplorerController) {
    super();
    this.root = document.createElement("div");
    this.root.className = "launcher-panel";

    const header = document.createElement("div");
    header.className = "panel-header";
    const kicker = document.createElement("span");
    kicker.className = "hud-kicker";
    kicker.textContent = "Archive";
    header.appendChild(kicker);
    this.titleEl = document.createElement("h1");
    this.titleEl.textContent = "Load your Guild Wars 2 archive";
    header.appendChild(this.titleEl);

    this.subtitleEl = document.createElement("p");
    this.subtitleEl.className = "panel-subtitle";
    this.subtitleEl.textContent = "Open your archive, search for a map, and jump straight in.";
    header.appendChild(this.subtitleEl);
    this.root.appendChild(header);

    this.fileInput = document.createElement("input");
    this.fileInput.type = "file";
    this.fileInput.hidden = true;
    this.listen(this.fileInput, "change", () => {
      const file = this.fileInput.files?.[0];
      if (file) {
        this.controller.openArchive(file);
      }
    });
    this.root.appendChild(this.fileInput);

    // Idle state: prominent dashed dropzone to choose/drop the first archive.
    this.dropzone = document.createElement("label");
    this.dropzone.className = "archive-dropzone";
    this.dropzone.innerHTML = `
      <span class="archive-dropzone-kicker">Local archive</span>
      <strong>Choose or drop a Gw2.dat file</strong>
      <span class="archive-dropzone-copy">The archive opens locally in your browser.</span>
    `;
    this.dropzone.appendChild(this.fileInput);
    this.attachDropTarget(this.dropzone);
    this.root.appendChild(this.dropzone);

    // Loaded state: compact summary of the open archive + a secondary "Change archive" action.
    this.archiveLoadedEl = document.createElement("div");
    this.archiveLoadedEl.className = "archive-loaded";
    this.archiveLoadedInfoEl = document.createElement("div");
    this.archiveLoadedInfoEl.className = "archive-loaded-info";
    const changeBtn = document.createElement("button");
    changeBtn.type = "button";
    changeBtn.className = "ghost-button";
    changeBtn.textContent = "Change archive";
    this.listen(changeBtn, "click", () => this.openFilePicker());
    this.archiveLoadedEl.append(this.archiveLoadedInfoEl, changeBtn);
    this.attachDropTarget(this.archiveLoadedEl);
    this.root.appendChild(this.archiveLoadedEl);

    this.archiveInfoEl = document.createElement("div");
    this.archiveInfoEl.className = "archive-info";
    this.root.appendChild(this.archiveInfoEl);

    this.archiveErrorEl = document.createElement("div");
    this.archiveErrorEl.className = "error-banner";
    this.root.appendChild(this.archiveErrorEl);

    const form = document.createElement("div");
    form.className = "map-form";

    this.categoryCombo = this.own(
      new Combobox({
        placeholder: "Search region / category...",
        onChange: (option) => this.onCategorySelected(option?.id ?? null),
      })
    );
    this.mapCombo = this.own(
      new Combobox({ placeholder: "Search map...", onChange: (option) => this.onMapSelected(option?.id ?? null) })
    );
    form.append(
      fieldWithLabel("Region / category", this.categoryCombo.root),
      fieldWithLabel("Map", this.mapCombo.root)
    );

    const actions = document.createElement("div");
    actions.className = "launcher-actions";

    this.deepScanBtn = document.createElement("button");
    this.deepScanBtn.type = "button";
    this.deepScanBtn.className = "ghost-button";
    this.deepScanBtn.textContent = "Deep scan archive";
    this.listen(this.deepScanBtn, "click", () => this.controller.runDeepScan());
    actions.appendChild(this.deepScanBtn);

    this.loadMapBtn = document.createElement("button");
    this.loadMapBtn.type = "button";
    this.loadMapBtn.className = "primary-button";
    this.loadMapBtn.textContent = "Load map";
    this.listen(this.loadMapBtn, "click", () => this.controller.loadSelectedMap());
    actions.appendChild(this.loadMapBtn);

    form.appendChild(actions);
    this.root.appendChild(form);
  }

  /** Open the OS file picker (invoked by the launcher's "Change archive" button). */
  openFilePicker(): void {
    this.fileInput.click();
  }

  /** Wire drag-and-drop of a .dat file onto an element, opening (or replacing) the archive. */
  private attachDropTarget(target: HTMLElement): void {
    this.listen(target, "dragover", (event) => {
      event.preventDefault();
      target.classList.add("dragging");
    });
    this.listen(target, "dragleave", () => target.classList.remove("dragging"));
    this.listen(target, "drop", (event) => {
      event.preventDefault();
      target.classList.remove("dragging");
      const file = (event as DragEvent).dataTransfer?.files[0];
      if (file) {
        this.controller.openArchive(file);
      }
    });
  }

  getSelectedMapId(): number {
    return parseInt(this.mapCombo.getValue() ?? "", 10);
  }

  /** Select a category + map programmatically (e.g. restoring from a shared URL). */
  selectMap(category: string, mapId: string): void {
    this.categoryCombo.setValue(category, true);
    this.onCategorySelected(category);
    this.mapCombo.setValue(mapId, true);
  }

  /** Rebuild combobox options from the current archive map list, keeping valid selections. */
  syncOptions(): void {
    const maps = this.controller.getArchiveState().maps;
    const categoryOptions = buildCategoryOptions(maps);
    this.categoryCombo.setOptions(categoryOptions);

    const currentCategory = this.categoryCombo.getValue();
    const fallbackCategory =
      currentCategory && categoryOptions.some((option) => option.id === currentCategory)
        ? currentCategory
        : (categoryOptions[0]?.id ?? null);
    if (fallbackCategory !== currentCategory) {
      this.categoryCombo.setValue(fallbackCategory, true);
    }

    const mapOptions = buildMapOptions(maps, this.categoryCombo.getValue());
    this.mapCombo.setOptions(mapOptions);
    const currentMap = this.mapCombo.getValue();
    const fallbackMap =
      currentMap && mapOptions.some((option) => option.id === currentMap) ? currentMap : (mapOptions[0]?.id ?? null);
    if (fallbackMap !== currentMap) {
      this.mapCombo.setValue(fallbackMap, true);
    }
  }

  /** Refresh disabled states, title, archive info, and startup layer chips. */
  sync(): void {
    const archive = this.controller.getArchiveState();
    const mapLoaded = this.controller.isMapLoaded();

    const archiveReady = archive.status === "ready";

    this.root.dataset.mode = mapLoaded ? "docked" : "centered";
    // Open state drives the slide in both modes: centered slides off the left when closing on
    // load; docked slides in/out from its edge handle.
    this.root.dataset.open = String(this.controller.isLauncherOpen());
    this.titleEl.textContent = mapLoaded ? "Load another map" : "Load your Guild Wars 2 archive";
    this.subtitleEl.textContent = archiveReady
      ? "Search for a map and load it, or change the archive below."
      : "Open your archive, search for a map, and jump straight in.";

    // Swap between the prominent dropzone (idle) and the compact loaded summary (ready).
    this.dropzone.hidden = archiveReady;
    this.archiveLoadedEl.hidden = !archiveReady;
    this.archiveLoadedInfoEl.textContent = buildArchiveInfo(archive);

    // The standalone info line only adds value before the archive is ready (opening/error);
    // once ready the loaded summary carries the same text.
    this.archiveInfoEl.hidden = archiveReady;
    this.archiveInfoEl.textContent = buildArchiveInfo(archive);
    this.archiveErrorEl.hidden = !archive.error && !archive.scan.error;
    this.archiveErrorEl.textContent = archive.error ?? archive.scan.error ?? "";

    this.categoryCombo.setDisabled(!archiveReady);
    this.mapCombo.setDisabled(!archiveReady);
    this.loadMapBtn.disabled = !archiveReady;
    this.deepScanBtn.disabled = !archiveReady || archive.scan.status === "scanning";
  }

  private onCategorySelected(categoryId: string | null): void {
    const maps = this.controller.getArchiveState().maps;
    const mapOptions = buildMapOptions(maps, categoryId);
    this.mapCombo.setOptions(mapOptions);
    this.mapCombo.setValue(mapOptions[0]?.id ?? null, true);
  }

  private onMapSelected(mapId: string | null): void {
    if (!mapId) return;
    const maps = this.controller.getArchiveState().maps;
    const match = maps.find((entry) => String(entry.baseId) === mapId);
    if (match && this.categoryCombo.getValue() !== match.category) {
      this.categoryCombo.setValue(match.category, true);
    }
  }
}
