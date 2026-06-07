import type { LocalReader } from "t3d-lib";
import { ArchiveStore, FileRow, SIDEBAR_GROUP, SidebarNode } from "./store/archive-store";
import { VirtualTable } from "./components/virtual-table";
import { FileViewer } from "./components/file-viewer";
import { FileTabsStrip } from "./components/file-tabs-strip";
import type { CntcNavigationTarget } from "./views/cntc-view";
import { CntcTableView } from "./views/cntc-table-view";
import { wireSplitter } from "./components/splitter";
import { loadTabs, saveTabs, PERSIST_KEYS } from "./store/tab-store";
import { showOpenArchiveDialog } from "./components/open-archive-dialog";
import { formatBytes } from "./util/format";

const MAX_OPEN_TABS = 12;

/** Reserved tab id for the archive-wide CNTC table. Real baseIds are positive,
 *  so this sentinel never collides and stays out of `openTabs`/persistence. */
const CNTC_TABLE_TAB_ID = -1;

const clampPaneWidth = (px: number): number => {
  const min = 240;
  const max = Math.max(min, Math.min(900, window.innerWidth - 320));
  return Math.max(min, Math.min(max, px));
};

const clampSidebarHeight = (px: number): number => {
  const min = 80;
  // Leave at least ~200px for the file table below.
  const max = Math.max(min, window.innerHeight - 320);
  return Math.max(min, Math.min(max, px));
};

function buildEmptyPlaceholder(): HTMLDivElement {
  const empty = document.createElement("div");
  empty.className = "viewer-empty";
  empty.textContent = "Select a file to view.";
  return empty;
}

export class App {
  private root: HTMLElement;
  private store = new ArchiveStore();
  private loadedReader: LocalReader | null = null;
  private lastRowsRevision = -1;
  private lastSidebarRevision = -1;
  private lastScanRevision = -1;

  private sidebarEl!: HTMLDivElement;
  private fileTableHostEl!: HTMLDivElement;
  private fileTableFooterEl!: HTMLDivElement;
  private fileTableSearchInputEl!: HTMLInputElement;
  private viewerHostEl!: HTMLDivElement;
  private scanStatusButtonEl!: HTMLButtonElement;
  private tabsStrip!: FileTabsStrip;
  private table!: VirtualTable<FileRow>;

  private currentFilter: string = SIDEBAR_GROUP.all;
  private selectedSidebarItem: HTMLElement | null = null;
  private openTabs = new Map<number, FileViewer>();
  private activeTabId: number | null = null;
  private searchTerm = "";
  private cntcTableView: CntcTableView | null = null;
  private cntcTableLoaded = false;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  async init(): Promise<void> {
    this.buildShell();
    this.store.subscribe(() => this.onStoreChanged());
    this.attachKeyboardShortcuts();
    await showOpenArchiveDialog(this.store);
  }

  // ---- shell construction ----

  private buildShell(): void {
    this.root.innerHTML = "";
    this.root.append(this.buildToolbar(), this.buildMainSplit());
  }

  private buildToolbar(): HTMLDivElement {
    const toolbar = document.createElement("div");
    toolbar.className = "toolbar";

    const title = document.createElement("h1");
    title.textContent = "T3D Browser";
    toolbar.appendChild(title);

    toolbar.appendChild(this.buildSpecialMenu());

    toolbar.append(...this.buildJumpToBaseId());

    const spacer = document.createElement("div");
    spacer.className = "spacer";
    toolbar.appendChild(spacer);

    this.scanStatusButtonEl = document.createElement("button");
    this.scanStatusButtonEl.type = "button";
    this.scanStatusButtonEl.className = "scan-status";
    this.scanStatusButtonEl.hidden = true;
    this.scanStatusButtonEl.title = "Retrigger full type scan";
    this.scanStatusButtonEl.setAttribute("aria-label", "Retrigger full type scan");
    this.scanStatusButtonEl.addEventListener("click", async () => {
      if (this.scanStatusButtonEl.disabled) return;
      await this.store.retriggerFullScan();
    });
    toolbar.appendChild(this.scanStatusButtonEl);

    const openBtn = document.createElement("button");
    openBtn.textContent = "Open archive…";
    openBtn.addEventListener("click", async () => {
      try {
        await showOpenArchiveDialog(this.store);
      } catch {
        // user cancelled or error already shown
      }
    });
    toolbar.appendChild(openBtn);
    toolbar.appendChild(this.buildThemeToggle());

    return toolbar;
  }

  private buildJumpToBaseId(): [HTMLInputElement, HTMLButtonElement] {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Jump to baseId…";
    input.size = 12;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.openByBaseId(parseInt(input.value, 10), e.ctrlKey || e.metaKey);
    });

    const button = document.createElement("button");
    button.textContent = "Load";
    button.title = "Load (Ctrl/⌘+click for new tab)";
    button.addEventListener("click", (e) => this.openByBaseId(parseInt(input.value, 10), e.ctrlKey || e.metaKey));

    return [input, button];
  }

  /** "Special ▾" dropdown for archive-wide views that aren't tied to one file. */
  private buildSpecialMenu(): HTMLDivElement {
    const menu = document.createElement("div");
    menu.className = "special-menu";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "special-menu-button";
    button.textContent = "Special ▾";
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");

    const list = document.createElement("div");
    list.className = "special-menu-list";
    list.hidden = true;

    const close = (): void => {
      list.hidden = true;
      button.setAttribute("aria-expanded", "false");
    };

    const item = document.createElement("button");
    item.type = "button";
    item.className = "special-menu-item";
    item.textContent = "Open CNTC table view";
    item.addEventListener("click", () => {
      close();
      this.openCntcTableTab();
    });
    list.appendChild(item);

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = list.hidden;
      list.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
    });
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target as Node)) close();
    });

    menu.append(button, list);
    return menu;
  }

  private buildMainSplit(): HTMLDivElement {
    const mainSplit = document.createElement("div");
    mainSplit.className = "main-split";

    const leftPane = this.buildLeftPane();
    const rightPane = this.buildRightPane();
    const handle = buildSplitterHandle("main-splitter", "vertical");
    mainSplit.append(leftPane, handle, rightPane);

    wireSplitter(handle, mainSplit, {
      axis: "x",
      cssVar: "left-pane-w",
      storageKey: PERSIST_KEYS.leftPaneWidth,
      clamp: clampPaneWidth,
    });
    return mainSplit;
  }

  private buildLeftPane(): HTMLDivElement {
    const leftPane = document.createElement("div");
    leftPane.className = "left-pane";

    this.sidebarEl = document.createElement("div");
    this.sidebarEl.className = "sidebar";
    const placeholder = document.createElement("div");
    placeholder.className = "sidebar-empty";
    placeholder.textContent = "Open an archive to begin.";
    this.sidebarEl.appendChild(placeholder);

    const fileTable = this.buildFileTableContainer();
    const handle = buildSplitterHandle("left-splitter", "horizontal");
    leftPane.append(this.sidebarEl, handle, fileTable);

    wireSplitter(handle, leftPane, {
      axis: "y",
      cssVar: "sidebar-h",
      storageKey: PERSIST_KEYS.sidebarHeight,
      clamp: clampSidebarHeight,
    });
    return leftPane;
  }

  private buildFileTableContainer(): HTMLDivElement {
    const container = document.createElement("div");
    container.className = "file-table-container";

    const searchBar = document.createElement("div");
    searchBar.className = "file-table-search";
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Filter by baseId or MFT id…";
    this.fileTableSearchInputEl = searchInput;
    searchInput.addEventListener("input", () => {
      this.searchTerm = searchInput.value.trim();
      this.refreshTable();
    });
    searchBar.appendChild(searchInput);

    this.fileTableHostEl = document.createElement("div");
    this.fileTableFooterEl = document.createElement("div");
    this.fileTableFooterEl.className = "file-table-footer";

    this.table = this.buildFileTable();
    this.fileTableHostEl.appendChild(this.table.root);

    container.append(searchBar, this.fileTableHostEl, this.fileTableFooterEl);
    return container;
  }

  private buildFileTable(): VirtualTable<FileRow> {
    return new VirtualTable<FileRow>({
      columns: [
        { field: "mftId", caption: "MFT", width: "70px", align: "right", sortable: true },
        { field: "baseIds", caption: "Base IDs", width: "1fr", sortable: true, get: (r) => r.baseIds.join(", ") },
        { field: "type", caption: "Type", width: "120px", sortable: true },
        { field: "fileSize", caption: "Size", width: "90px", align: "right", sortable: true, format: formatBytes },
      ],
      getRowKey: (r) => r.mftId,
      onRowClick: (r, ev) => {
        const baseId = r.baseIds[0];
        if (baseId == null) return;
        // Ctrl/⌘-click or middle-click opens in a new tab (matches browser
        // conventions). Regular click replaces the active tab.
        this.openByBaseId(baseId, ev.ctrlKey || ev.metaKey || ev.button === 1);
      },
      onRowActivate: (r) => {
        const baseId = r.baseIds[0];
        if (baseId != null) this.openByBaseId(baseId, false);
      },
    });
  }

  private buildRightPane(): HTMLDivElement {
    const rightPane = document.createElement("div");
    rightPane.className = "right-pane";
    this.tabsStrip = new FileTabsStrip({
      onActivate: (id) => this.activateTab(id),
      onClose: (id) => this.closeTab(id),
    });
    this.viewerHostEl = document.createElement("div");
    this.viewerHostEl.className = "viewer-host";
    this.viewerHostEl.appendChild(buildEmptyPlaceholder());
    rightPane.append(this.tabsStrip.root, this.viewerHostEl);
    return rightPane;
  }

  private buildThemeToggle(): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.className = "theme-toggle";
    btn.type = "button";

    const stored = localStorage.getItem(PERSIST_KEYS.theme) as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let theme: "light" | "dark" = stored ?? (prefersDark ? "dark" : "light");

    const apply = (t: "light" | "dark"): void => {
      theme = t;
      document.documentElement.classList.toggle("theme-light", t === "light");
      document.documentElement.classList.toggle("theme-dark", t === "dark");
      btn.textContent = t === "dark" ? "☀" : "☾";
      btn.title = `Switch to ${t === "dark" ? "light" : "dark"} theme`;
      btn.setAttribute("aria-label", btn.title);
    };
    apply(theme);

    btn.addEventListener("click", () => {
      const next = theme === "dark" ? "light" : "dark";
      apply(next);
      localStorage.setItem(PERSIST_KEYS.theme, next);
    });

    // Follow OS preference until the user makes an explicit choice.
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (ev) => {
      if (localStorage.getItem(PERSIST_KEYS.theme)) return;
      apply(ev.matches ? "dark" : "light");
    });

    return btn;
  }

  // ---- archive lifecycle ----

  private onStoreChanged(): void {
    let scanChanged = false;
    if (this.lastScanRevision !== this.store.scanRevision) {
      this.lastScanRevision = this.store.scanRevision;
      scanChanged = true;
      this.renderScanStatus();
    }
    if (!this.store.isLoaded || !this.store.reader) return;

    const isNewArchive = this.loadedReader !== this.store.reader;
    if (isNewArchive) {
      this.loadedReader = this.store.reader;
      this.onArchiveLoaded();
      return;
    }

    if (this.lastSidebarRevision !== this.store.sidebarRevision) {
      this.lastSidebarRevision = this.store.sidebarRevision;
      this.lastRowsRevision = this.store.rowsRevision;
      this.renderSidebar();
    } else if (this.lastRowsRevision !== this.store.rowsRevision) {
      this.lastRowsRevision = this.store.rowsRevision;
      this.refreshTable(true);
    } else if (scanChanged) {
      this.updateFileTableFooter(this.searchRows(this.store.getFilteredRows(this.currentFilter)).length);
    }

    // Once the type scan completes we know the full set of CNTC files, so an
    // open-but-waiting table can now be populated.
    if (scanChanged) this.maybeLoadCntcTable();
  }

  private onArchiveLoaded(): void {
    this.resetForNewArchive();
    this.lastSidebarRevision = this.store.sidebarRevision;
    this.lastRowsRevision = this.store.rowsRevision;
    this.renderSidebar();
    this.restoreSession();
    this.handleUrlParam();
  }

  private renderSidebar(): void {
    this.sidebarEl.replaceChildren();
    const nodes = this.store.buildSidebarNodes();
    const availableIds = new Set(
      nodes.flatMap((node) => (node.kind === "single" ? [node.id] : [node.id, ...node.children.map((c) => c.id)]))
    );
    for (const node of nodes) {
      this.renderSidebarNode(node);
    }

    const nextFilter = availableIds.has(this.currentFilter) ? this.currentFilter : SIDEBAR_GROUP.all;
    const selected = this.sidebarEl.querySelector<HTMLElement>(`[data-node-id="${nextFilter}"]`);
    if (selected) {
      this.selectSidebarNode(selected, nextFilter, true);
    }
  }

  private renderSidebarNode(node: SidebarNode): void {
    if (node.kind === "single") {
      this.sidebarEl.appendChild(this.buildSidebarItem(node.id, node.label, "sidebar-item"));
      return;
    }
    this.sidebarEl.appendChild(this.buildSidebarItem(node.id, node.label, "sidebar-item group"));
    for (const child of node.children) {
      this.sidebarEl.appendChild(this.buildSidebarItem(child.id, child.label, "sidebar-item child"));
    }
  }

  private buildSidebarItem(nodeId: string, label: string, className: string): HTMLDivElement {
    const el = document.createElement("div");
    el.className = className;
    el.dataset.nodeId = nodeId;
    el.textContent = label;
    el.addEventListener("click", () => this.selectSidebarNode(el, nodeId, false));
    return el;
  }

  private selectSidebarNode(el: HTMLElement, nodeId: string, preserveScroll: boolean): void {
    this.selectedSidebarItem?.classList.remove("selected");
    el.classList.add("selected");
    this.selectedSidebarItem = el;
    this.currentFilter = nodeId;
    this.refreshTable(preserveScroll);
  }

  // ---- table ----

  private refreshTable(preserveScroll = false): void {
    if (!this.store.isLoaded) return;
    const rows = this.searchRows(this.store.getFilteredRows(this.currentFilter));
    this.table.setData(rows, { preserveScroll });
    if (this.activeTabId != null) {
      this.table.setSelection(this.mftIdForBaseId(this.activeTabId));
    }
    this.updateFileTableFooter(rows.length);
  }

  private updateFileTableFooter(rowCount: number): void {
    const modKey = navigator.platform.toLowerCase().includes("mac") ? "⌘" : "Ctrl";
    const filterTag = this.currentFilter === SIDEBAR_GROUP.all ? "" : ` · filter: ${this.currentFilter}`;
    const scan = this.store.currentScanState;
    const scanTag =
      scan.status === "scanning"
        ? ` · scan: ${scan.progressPct}% (${scan.scanned.toLocaleString()}/${Math.max(scan.total, scan.scanned).toLocaleString()})`
        : scan.status === "error"
          ? " · scan failed"
          : scan.status === "complete"
            ? " · scan complete"
            : "";
    this.fileTableFooterEl.textContent = `${rowCount.toLocaleString()} files${filterTag}${scanTag} · ${modKey}/middle-click for new tab`;
  }

  private searchRows(rows: FileRow[]): FileRow[] {
    if (!this.searchTerm) return rows;
    const needle = this.searchTerm;
    const asNum = parseInt(needle, 10);
    return rows.filter(
      (r) =>
        (Number.isFinite(asNum) && (r.mftId === asNum || r.baseIds.includes(asNum))) ||
        r.baseIds.some((b) => String(b).includes(needle))
    );
  }

  // ---- tabs ----

  private openByBaseId(baseId: number, newTab: boolean): void {
    if (!Number.isFinite(baseId) || !this.store.reader) return;

    if (this.openTabs.has(baseId)) {
      this.activateTab(baseId);
      return;
    }

    if (!newTab && this.activeTabId != null && this.openTabs.has(this.activeTabId)) {
      this.closeTab(this.activeTabId);
    }

    if (this.openTabs.size >= MAX_OPEN_TABS) {
      this.toast(`Close a tab before opening another (${MAX_OPEN_TABS} max).`);
      return;
    }

    this.viewerHostEl.querySelector(".viewer-empty")?.remove();

    const viewer = new FileViewer({
      reader: this.store.reader,
      fileId: baseId,
      onNavigateToCntcEntry: (target) => {
        void this.openCntcEntry(target);
      },
      onOpenFile: (targetBaseId, openInNewTab) => {
        this.openByBaseId(targetBaseId, openInNewTab);
      },
    });
    this.viewerHostEl.appendChild(viewer.root);
    this.openTabs.set(baseId, viewer);
    this.tabsStrip.addChip(baseId, String(baseId));

    viewer.ready.then(() => this.tabsStrip.setLabel(baseId, viewer.fileName)).catch(() => {});

    this.activateTab(baseId);
    this.table.setSelection(this.mftIdForBaseId(baseId));
    this.persistTabs();
    this.updateUrl(baseId);
  }

  private async openCntcEntry(target: CntcNavigationTarget): Promise<void> {
    this.openByBaseId(target.baseId, target.newTab === true);
    const viewer = this.openTabs.get(target.baseId);
    if (!viewer) {
      return;
    }
    await viewer.focusCntcEntry(target);
  }

  /** Opens (or focuses) the archive-wide CNTC table as a tab in the right pane. */
  private openCntcTableTab(): void {
    if (!this.store.reader) {
      this.toast("Open an archive first.");
      return;
    }
    if (this.cntcTableView) {
      this.activateTab(CNTC_TABLE_TAB_ID);
      return;
    }

    this.viewerHostEl.querySelector(".viewer-empty")?.remove();
    this.cntcTableView = new CntcTableView({
      reader: this.store.reader,
      onNavigateToEntry: (target) => {
        void this.openCntcEntry(target);
      },
      onOpenFile: (targetBaseId, openInNewTab) => {
        this.openByBaseId(targetBaseId, openInNewTab);
      },
    });
    this.viewerHostEl.appendChild(this.cntcTableView.root);
    this.tabsStrip.addChip(CNTC_TABLE_TAB_ID, "CNTC Table");
    this.activateTab(CNTC_TABLE_TAB_ID);
    this.maybeLoadCntcTable();
  }

  /** Parsing every CNTC file needs the full type scan, so defer until it lands. */
  private maybeLoadCntcTable(): void {
    if (!this.cntcTableView || this.cntcTableLoaded) return;
    const scan = this.store.currentScanState;
    if (scan.status === "complete") {
      this.cntcTableLoaded = true;
      void this.cntcTableView.load(this.cntcFiles());
    } else if (scan.status === "error") {
      this.cntcTableView.setWaiting("Type scan failed — reopen the archive to retry.");
    } else {
      this.cntcTableView.setWaiting("Waiting for type scan to finish…");
    }
  }

  private cntcFiles(): { mftId: number; baseId: number }[] {
    return this.store.getFilteredRows("PF_cntc").map((row) => ({
      mftId: row.mftId,
      baseId: row.baseIds[0] ?? row.mftId,
    }));
  }

  /** The pane backing a tab id: a file viewer, or the CNTC table sentinel. */
  private paneForId(id: number | null): { root: HTMLElement; onShow(): void; onHide(): void } | null {
    if (id == null) return null;
    if (id === CNTC_TABLE_TAB_ID) return this.cntcTableView;
    return this.openTabs.get(id) ?? null;
  }

  /** Picks a remaining tab to activate after one closes (files first). */
  private nextTabId(): number | null {
    const [firstFile] = this.openTabs.keys();
    if (firstFile != null) return firstFile;
    return this.cntcTableView ? CNTC_TABLE_TAB_ID : null;
  }

  private activateTab(fileId: number): void {
    const pane = this.paneForId(fileId);
    if (!pane || this.activeTabId === fileId) return;

    const prev = this.paneForId(this.activeTabId);
    if (prev) {
      prev.root.hidden = true;
      prev.onHide();
    }
    pane.root.hidden = false;
    pane.onShow();
    this.activeTabId = fileId;
    this.tabsStrip.setActive(fileId);
    // The CNTC table isn't a file, so it has no row in the file table or URL.
    if (fileId !== CNTC_TABLE_TAB_ID) {
      this.table.setSelection(this.mftIdForBaseId(fileId));
      this.updateUrl(fileId);
    }
    this.persistTabs();
  }

  private closeTab(fileId: number): void {
    if (fileId === CNTC_TABLE_TAB_ID) {
      if (!this.cntcTableView) return;
      this.cntcTableView.dispose();
      this.cntcTableView.root.remove();
      this.cntcTableView = null;
      this.cntcTableLoaded = false;
    } else {
      const viewer = this.openTabs.get(fileId);
      if (!viewer) return;
      viewer.dispose();
      viewer.root.remove();
      this.openTabs.delete(fileId);
    }
    this.tabsStrip.removeChip(fileId);

    if (this.activeTabId === fileId) {
      this.activeTabId = null;
      const next = this.nextTabId();
      if (next != null) this.activateTab(next);
      else this.showEmpty();
    }
    this.persistTabs();
  }

  private showEmpty(): void {
    this.viewerHostEl.appendChild(buildEmptyPlaceholder());
    history.replaceState(null, "", window.location.pathname);
  }

  private mftIdForBaseId(baseId: number): number | null {
    return this.store.reader?.getFileIndex(baseId) ?? null;
  }

  // ---- persistence ----

  private persistTabs(): void {
    // The CNTC table sentinel is never a real file id, so keep it out of the
    // persisted set (it is also intentionally not restored across reloads).
    const activeId = this.activeTabId === CNTC_TABLE_TAB_ID ? null : this.activeTabId;
    saveTabs({ openIds: [...this.openTabs.keys()], activeId });
  }

  private restoreSession(): void {
    const saved = loadTabs();
    for (const id of saved.openIds) this.openByBaseId(id, true);
    if (saved.activeId != null && this.openTabs.has(saved.activeId)) this.activateTab(saved.activeId);
  }

  private handleUrlParam(): void {
    const fileParam = new URLSearchParams(window.location.search).get("file");
    if (!fileParam) return;
    const id = parseInt(fileParam, 10);
    if (Number.isFinite(id)) this.openByBaseId(id, this.openTabs.size > 0);
  }

  private updateUrl(fileId: number): void {
    const url = new URL(window.location.href);
    url.searchParams.set("file", String(fileId));
    history.replaceState(null, "", url.toString());
  }

  // ---- misc ----

  private attachKeyboardShortcuts(): void {
    window.addEventListener("keydown", (e) => {
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key === "f") {
        e.preventDefault();
        this.fileTableSearchInputEl.focus();
        this.fileTableSearchInputEl.select();
      } else if (mod && e.key === "w" && this.activeTabId != null) {
        e.preventDefault();
        this.closeTab(this.activeTabId);
      }
    });
  }

  private toast(msg: string): void {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  private renderScanStatus(): void {
    const scan = this.store.currentScanState;
    if (!this.store.isLoaded || scan.status === "idle") {
      this.scanStatusButtonEl.hidden = true;
      this.scanStatusButtonEl.textContent = "";
      this.scanStatusButtonEl.className = "scan-status";
      this.scanStatusButtonEl.disabled = true;
      return;
    }

    this.scanStatusButtonEl.hidden = false;
    this.scanStatusButtonEl.className = `scan-status ${scan.status}${scan.status === "scanning" ? "" : " actionable"}`;
    this.scanStatusButtonEl.disabled = scan.status === "scanning";
    if (scan.status === "scanning") {
      const total = Math.max(scan.total, scan.scanned);
      this.scanStatusButtonEl.textContent = `${scan.progressLabel} ${scan.progressPct}% (${scan.scanned.toLocaleString()}/${total.toLocaleString()})`;
    } else if (scan.status === "complete") {
      this.scanStatusButtonEl.textContent = "Type scan complete";
    } else if (scan.status === "error") {
      this.scanStatusButtonEl.textContent = scan.errorMessage
        ? `Type scan failed: ${scan.errorMessage}`
        : "Type scan failed";
    }
  }

  private resetForNewArchive(): void {
    for (const viewer of this.openTabs.values()) {
      viewer.dispose();
      viewer.root.remove();
    }
    this.openTabs.clear();
    if (this.cntcTableView) {
      this.cntcTableView.dispose();
      this.cntcTableView.root.remove();
      this.cntcTableView = null;
    }
    this.cntcTableLoaded = false;
    this.activeTabId = null;
    this.selectedSidebarItem = null;
    this.tabsStrip.clear();
    this.viewerHostEl.replaceChildren(buildEmptyPlaceholder());
    history.replaceState(null, "", window.location.pathname);
  }
}

function buildSplitterHandle(className: string, ariaOrientation: "vertical" | "horizontal"): HTMLDivElement {
  const handle = document.createElement("div");
  handle.className = className;
  handle.setAttribute("role", "separator");
  handle.setAttribute("aria-orientation", ariaOrientation);
  handle.title = "Drag to resize · double-click to reset";
  return handle;
}
