import { ArchiveStore, FileRow, SidebarNode } from "./store/archive-store";
import { VirtualTable } from "./components/virtual-table";
import { FileViewer } from "./components/file-viewer";
import { FileTabsStrip } from "./components/file-tabs-strip";
import { loadTabs, saveTabs } from "./store/tab-store";
import { showOpenArchiveDialog } from "./components/open-archive-dialog";

const MAX_OPEN_TABS = 12;

interface OpenTab {
  fileId: number;
  viewer: FileViewer;
}

export class App {
  private root: HTMLElement;
  private store = new ArchiveStore();

  /// UI
  private sidebarEl!: HTMLDivElement;
  private fileTableHostEl!: HTMLDivElement;
  private fileTableFooterEl!: HTMLDivElement;
  private fileTableSearchInputEl!: HTMLInputElement;
  private viewerHostEl!: HTMLDivElement;
  private tabsStrip!: FileTabsStrip;
  private table!: VirtualTable<FileRow>;

  /// State
  private currentFilter = "All";
  private selectedNodeEl: HTMLElement | null = null;
  private openTabs = new Map<number, OpenTab>();
  private activeTabId: number | null = null;
  private searchTerm = "";

  constructor(root: HTMLElement) {
    this.root = root;
  }

  async init(): Promise<void> {
    this.buildShell();
    this.attachKeyboardShortcuts();
    await showOpenArchiveDialog(this.store);
    this.onArchiveLoaded();
  }

  private buildShell(): void {
    this.root.innerHTML = "";

    /// Top toolbar
    const toolbar = document.createElement("div");
    toolbar.className = "toolbar";

    const title = document.createElement("h1");
    title.textContent = "T3D Browser";
    toolbar.appendChild(title);

    /// File-ID jump-to input
    const jumpInput = document.createElement("input");
    jumpInput.type = "text";
    jumpInput.placeholder = "Jump to baseId…";
    jumpInput.size = 12;
    jumpInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.openByBaseId(parseInt(jumpInput.value, 10), e.ctrlKey || e.metaKey);
    });
    const jumpBtn = document.createElement("button");
    jumpBtn.textContent = "Load";
    jumpBtn.title = "Load (Ctrl/⌘+click for new tab)";
    jumpBtn.addEventListener("click", (e) =>
      this.openByBaseId(parseInt(jumpInput.value, 10), e.ctrlKey || e.metaKey)
    );

    toolbar.append(jumpInput, jumpBtn);

    const spacer = document.createElement("div");
    spacer.className = "spacer";
    toolbar.appendChild(spacer);

    const openBtn = document.createElement("button");
    openBtn.textContent = "Open archive…";
    openBtn.addEventListener("click", async () => {
      try {
        await showOpenArchiveDialog(this.store);
        this.onArchiveLoaded();
      } catch {
        /* user cancelled or error already shown */
      }
    });
    toolbar.appendChild(openBtn);

    /// Theme toggle (top right). Persists in localStorage; defaults to the
    /// OS preference via prefers-color-scheme.
    toolbar.appendChild(this.buildThemeToggle());

    this.root.appendChild(toolbar);

    /// Main split
    const mainSplit = document.createElement("div");
    mainSplit.className = "main-split";

    /// Left pane: sidebar + file table
    const leftPane = document.createElement("div");
    leftPane.className = "left-pane";

    this.sidebarEl = document.createElement("div");
    this.sidebarEl.className = "sidebar";
    const sidebarEmpty = document.createElement("div");
    sidebarEmpty.className = "sidebar-empty";
    sidebarEmpty.textContent = "Open an archive to begin.";
    this.sidebarEl.appendChild(sidebarEmpty);

    const fileTableContainer = document.createElement("div");
    fileTableContainer.className = "file-table-container";

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
    this.fileTableHostEl.style.overflow = "hidden";

    this.fileTableFooterEl = document.createElement("div");
    this.fileTableFooterEl.className = "file-table-footer";

    fileTableContainer.append(searchBar, this.fileTableHostEl, this.fileTableFooterEl);

    /// Horizontal splitter between the sidebar (file-type filters) and the file table
    const leftSplitter = document.createElement("div");
    leftSplitter.className = "left-splitter";
    leftSplitter.setAttribute("role", "separator");
    leftSplitter.setAttribute("aria-orientation", "horizontal");
    leftSplitter.title = "Drag to resize · double-click to reset";
    this.wireHSplitter(leftSplitter, leftPane);

    leftPane.append(this.sidebarEl, leftSplitter, fileTableContainer);

    /// Restore persisted sidebar height
    const savedH = parseInt(localStorage.getItem("t3d-browser:sidebarH") ?? "", 10);
    if (Number.isFinite(savedH)) {
      leftPane.style.setProperty("--sidebar-h", clampSidebarHeight(savedH) + "px");
    }

    /// Right pane: file tabs strip + viewer host
    const rightPane = document.createElement("div");
    rightPane.className = "right-pane";
    this.tabsStrip = new FileTabsStrip({
      onActivate: (id) => this.activateTab(id),
      onClose: (id) => this.closeTab(id),
    });
    this.viewerHostEl = document.createElement("div");
    this.viewerHostEl.className = "viewer-host";
    const empty = document.createElement("div");
    empty.className = "viewer-empty";
    empty.textContent = "Select a file to view.";
    this.viewerHostEl.appendChild(empty);
    rightPane.append(this.tabsStrip.root, this.viewerHostEl);

    /// Draggable splitter between left and right panes
    const splitter = document.createElement("div");
    splitter.className = "main-splitter";
    splitter.setAttribute("role", "separator");
    splitter.setAttribute("aria-orientation", "vertical");
    splitter.title = "Drag to resize · double-click to reset";
    this.wireSplitter(splitter, mainSplit);

    mainSplit.append(leftPane, splitter, rightPane);
    this.root.appendChild(mainSplit);

    /// Restore persisted width
    const saved = parseInt(localStorage.getItem("t3d-browser:leftPaneW") ?? "", 10);
    if (Number.isFinite(saved)) {
      mainSplit.style.setProperty("--left-pane-w", clampPaneWidth(saved) + "px");
    }

    /// Build the virtual table (data fills in after archive load)
    this.table = new VirtualTable<FileRow>({
      columns: [
        { field: "mftId", caption: "MFT", width: "70px", align: "right", sortable: true },
        {
          field: "baseIds",
          caption: "Base IDs",
          width: "1fr",
          sortable: true,
          get: (r) => r.baseIds.join(", "),
        },
        { field: "type", caption: "Type", width: "120px", sortable: true },
        { field: "fileSize", caption: "Size", width: "90px", align: "right", sortable: true, format: formatBytes },
      ],
      getRowKey: (r) => r.mftId,
      onRowClick: (r, ev) => this.onRowClick(r, ev),
      /// Keyboard nav (arrows / Home / End / PageUp/Down). Loads the row
      /// into the active tab, like a normal click.
      onRowActivate: (r) => {
        const baseId = r.baseIds[0];
        if (baseId != null) this.openByBaseId(baseId, false);
      },
    });
    this.fileTableHostEl.appendChild(this.table.root);
    /// fix layout
    this.fileTableHostEl.style.display = "grid";
  }

  /* ---------- archive lifecycle ---------- */

  private onArchiveLoaded(): void {
    this.renderSidebar();
    this.refreshTable();
    this.restoreSession();
    this.handleUrlParam();
  }

  private renderSidebar(): void {
    const nodes = this.store.buildSidebarNodes();
    this.sidebarEl.replaceChildren();
    for (const node of nodes) {
      this.renderSidebarNode(node);
    }
    /// Select "All" by default
    const allEl = this.sidebarEl.querySelector<HTMLElement>('[data-node-id="All"]');
    if (allEl) this.selectSidebarNode(allEl, "All");
  }

  private renderSidebarNode(node: SidebarNode): void {
    if (node.kind === "single") {
      const el = document.createElement("div");
      el.className = "sidebar-item";
      el.dataset.nodeId = node.id;
      el.textContent = node.label;
      el.addEventListener("click", () => this.selectSidebarNode(el, node.id));
      this.sidebarEl.appendChild(el);
    } else {
      const group = document.createElement("div");
      group.className = "sidebar-item group";
      group.dataset.nodeId = node.id;
      group.textContent = node.label;
      group.addEventListener("click", () => this.selectSidebarNode(group, node.id));
      this.sidebarEl.appendChild(group);
      for (const child of node.children) {
        const c = document.createElement("div");
        c.className = "sidebar-item child";
        c.dataset.nodeId = child.id;
        c.textContent = child.label;
        c.addEventListener("click", () => this.selectSidebarNode(c, child.id));
        this.sidebarEl.appendChild(c);
      }
    }
  }

  private selectSidebarNode(el: HTMLElement, nodeId: string): void {
    if (this.selectedNodeEl) this.selectedNodeEl.classList.remove("selected");
    el.classList.add("selected");
    this.selectedNodeEl = el;
    this.currentFilter = nodeId;
    this.refreshTable();
  }

  /* ---------- table ---------- */

  private refreshTable(): void {
    if (!this.store.isLoaded) return;
    let rows = this.store.getFilteredRows(this.currentFilter);
    if (this.searchTerm) {
      const needle = this.searchTerm;
      const asNum = parseInt(needle, 10);
      rows = rows.filter(
        (r) =>
          (Number.isFinite(asNum) && (r.mftId === asNum || r.baseIds.includes(asNum))) ||
          r.baseIds.some((b) => String(b).includes(needle))
      );
    }
    this.table.setData(rows);
    const isMac = navigator.platform.toLowerCase().includes("mac");
    const modKey = isMac ? "⌘" : "Ctrl";
    this.fileTableFooterEl.textContent = `${rows.length.toLocaleString()} files${
      this.currentFilter === "All" ? "" : ` · filter: ${this.currentFilter}`
    } · ${modKey}/middle-click for new tab`;
  }

  /* ---------- tabs ---------- */

  private onRowClick(row: FileRow, ev: MouseEvent): void {
    const baseId = row.baseIds[0];
    if (baseId == null) return;
    /// Ctrl/⌘-click or middle-click opens in a new tab (matches browser
    /// conventions). Regular click replaces the active tab.
    const newTab = ev.ctrlKey || ev.metaKey || ev.button === 1;
    this.openByBaseId(baseId, newTab);
  }

  private openByBaseId(baseId: number, newTab: boolean): void {
    if (!Number.isFinite(baseId)) return;
    if (!this.store.reader) return;

    /// If already open: just activate
    const existing = this.openTabs.get(baseId);
    if (existing) {
      this.activateTab(baseId);
      return;
    }

    /// If replace-mode and we have an active tab: close it first
    if (!newTab && this.activeTabId != null && this.openTabs.has(this.activeTabId)) {
      this.closeTab(this.activeTabId);
    }

    if (this.openTabs.size >= MAX_OPEN_TABS) {
      this.toast(`Close a tab before opening another (${MAX_OPEN_TABS} max).`);
      return;
    }

    /// Clear the empty placeholder
    const empty = this.viewerHostEl.querySelector(".viewer-empty");
    empty?.remove();

    const viewer = new FileViewer({ reader: this.store.reader, fileId: baseId });
    this.viewerHostEl.appendChild(viewer.root);
    this.openTabs.set(baseId, { fileId: baseId, viewer });
    this.tabsStrip.addChip(baseId, String(baseId));

    /// When the viewer learns its name, update the chip
    queueMicrotask(() => {
      const updateLabel = (): void => {
        if (viewer.fileName) this.tabsStrip.setLabel(baseId, viewer.fileName);
        else setTimeout(updateLabel, 100);
      };
      updateLabel();
    });

    this.activateTab(baseId);
    this.table.setSelection(rowKeyForBaseId(baseId, this.store));
    this.persistTabs();
    this.updateUrl(baseId);
  }

  private activateTab(fileId: number): void {
    const entry = this.openTabs.get(fileId);
    if (!entry) return;
    if (this.activeTabId === fileId) return;
    if (this.activeTabId != null) {
      const prev = this.openTabs.get(this.activeTabId);
      if (prev) {
        prev.viewer.root.hidden = true;
        prev.viewer.onHide();
      }
    }
    entry.viewer.root.hidden = false;
    entry.viewer.onShow();
    this.activeTabId = fileId;
    this.tabsStrip.setActive(fileId);
    this.table.setSelection(rowKeyForBaseId(fileId, this.store));
    this.persistTabs();
    this.updateUrl(fileId);
  }

  private closeTab(fileId: number): void {
    const entry = this.openTabs.get(fileId);
    if (!entry) return;
    entry.viewer.dispose();
    entry.viewer.root.remove();
    this.openTabs.delete(fileId);
    this.tabsStrip.removeChip(fileId);
    if (this.activeTabId === fileId) {
      this.activeTabId = null;
      const next = this.openTabs.keys().next().value as number | undefined;
      if (next != null) this.activateTab(next);
      else this.showEmpty();
    }
    this.persistTabs();
  }

  private showEmpty(): void {
    const empty = document.createElement("div");
    empty.className = "viewer-empty";
    empty.textContent = "Select a file to view.";
    this.viewerHostEl.appendChild(empty);
    history.replaceState(null, "", window.location.pathname);
  }

  /* ---------- persistence ---------- */

  private persistTabs(): void {
    saveTabs({
      openIds: [...this.openTabs.keys()],
      activeId: this.activeTabId,
    });
  }

  private restoreSession(): void {
    const saved = loadTabs();
    for (const id of saved.openIds) this.openByBaseId(id, true);
    if (saved.activeId != null && this.openTabs.has(saved.activeId)) this.activateTab(saved.activeId);
  }

  private handleUrlParam(): void {
    const params = new URLSearchParams(window.location.search);
    const fileParam = params.get("file");
    if (!fileParam) return;
    const id = parseInt(fileParam, 10);
    if (Number.isFinite(id)) this.openByBaseId(id, this.openTabs.size > 0);
  }

  private updateUrl(fileId: number): void {
    const url = new URL(window.location.href);
    url.searchParams.set("file", String(fileId));
    history.replaceState(null, "", url.toString());
  }

  /* ---------- misc ---------- */

  private attachKeyboardShortcuts(): void {
    window.addEventListener("keydown", (e) => {
      /// Ctrl+F → focus the file table search
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault();
        this.fileTableSearchInputEl.focus();
        this.fileTableSearchInputEl.select();
      }
      /// Ctrl+W → close active tab
      if ((e.ctrlKey || e.metaKey) && e.key === "w" && this.activeTabId != null) {
        e.preventDefault();
        this.closeTab(this.activeTabId);
      }
    });
  }

  private buildThemeToggle(): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.className = "theme-toggle";
    btn.type = "button";

    /// Resolve the initial theme: stored preference if any, otherwise OS.
    const stored = localStorage.getItem("t3d-browser:theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let theme: "light" | "dark" = stored ?? (prefersDark ? "dark" : "light");

    const apply = (t: "light" | "dark"): void => {
      theme = t;
      document.documentElement.classList.toggle("theme-light", t === "light");
      document.documentElement.classList.toggle("theme-dark", t === "dark");
      /// Sun glyph in dark mode (click to go light), moon in light mode.
      btn.textContent = t === "dark" ? "☀" : "☾";
      btn.title = `Switch to ${t === "dark" ? "light" : "dark"} theme`;
      btn.setAttribute("aria-label", btn.title);
    };
    apply(theme);

    btn.addEventListener("click", () => {
      const next = theme === "dark" ? "light" : "dark";
      apply(next);
      localStorage.setItem("t3d-browser:theme", next);
    });

    /// Track OS-preference changes when the user hasn't explicitly chosen.
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (ev) => {
      if (localStorage.getItem("t3d-browser:theme")) return;
      apply(ev.matches ? "dark" : "light");
    });

    return btn;
  }

  private wireSplitter(splitter: HTMLElement, mainSplit: HTMLElement): void {
    let dragging = false;
    let startX = 0;
    let startW = 0;

    const getCurrentWidth = (): number => {
      const set = mainSplit.style.getPropertyValue("--left-pane-w");
      if (set) return parseInt(set, 10);
      /// fall back to the computed first track width
      const cs = getComputedStyle(mainSplit);
      const tracks = cs.gridTemplateColumns.split(/\s+/);
      return parseInt(tracks[0] ?? "320", 10) || 320;
    };

    splitter.addEventListener("pointerdown", (ev) => {
      dragging = true;
      startX = ev.clientX;
      startW = getCurrentWidth();
      splitter.setPointerCapture(ev.pointerId);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    });
    splitter.addEventListener("pointermove", (ev) => {
      if (!dragging) return;
      const next = clampPaneWidth(startW + (ev.clientX - startX));
      mainSplit.style.setProperty("--left-pane-w", next + "px");
    });
    const endDrag = (ev: PointerEvent): void => {
      if (!dragging) return;
      dragging = false;
      splitter.releasePointerCapture(ev.pointerId);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      localStorage.setItem("t3d-browser:leftPaneW", String(getCurrentWidth()));
    };
    splitter.addEventListener("pointerup", endDrag);
    splitter.addEventListener("pointercancel", endDrag);
    splitter.addEventListener("dblclick", () => {
      mainSplit.style.removeProperty("--left-pane-w");
      localStorage.removeItem("t3d-browser:leftPaneW");
    });
  }

  private wireHSplitter(splitter: HTMLElement, leftPane: HTMLElement): void {
    let dragging = false;
    let startY = 0;
    let startH = 0;

    const getCurrentHeight = (): number => {
      const set = leftPane.style.getPropertyValue("--sidebar-h");
      if (set) return parseInt(set, 10);
      const cs = getComputedStyle(leftPane);
      const tracks = cs.gridTemplateRows.split(/\s+/);
      return parseInt(tracks[0] ?? "180", 10) || 180;
    };

    splitter.addEventListener("pointerdown", (ev) => {
      dragging = true;
      startY = ev.clientY;
      startH = getCurrentHeight();
      splitter.setPointerCapture(ev.pointerId);
      document.body.style.cursor = "row-resize";
      document.body.style.userSelect = "none";
    });
    splitter.addEventListener("pointermove", (ev) => {
      if (!dragging) return;
      const next = clampSidebarHeight(startH + (ev.clientY - startY));
      leftPane.style.setProperty("--sidebar-h", next + "px");
    });
    const endDrag = (ev: PointerEvent): void => {
      if (!dragging) return;
      dragging = false;
      splitter.releasePointerCapture(ev.pointerId);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      localStorage.setItem("t3d-browser:sidebarH", String(getCurrentHeight()));
    };
    splitter.addEventListener("pointerup", endDrag);
    splitter.addEventListener("pointercancel", endDrag);
    splitter.addEventListener("dblclick", () => {
      leftPane.style.removeProperty("--sidebar-h");
      localStorage.removeItem("t3d-browser:sidebarH");
    });
  }

  private toast(msg: string): void {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }
}

function formatBytes(n: number): string {
  if (!n) return "";
  if (n < 1024) return n + " B";
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB";
  return (n / 1024 / 1024).toFixed(2) + " MB";
}

function rowKeyForBaseId(baseId: number, store: ArchiveStore): number | null {
  const reader = store.reader;
  if (!reader) return null;
  const mftId = reader.getFileIndex(baseId);
  return mftId ?? null;
}

function clampPaneWidth(px: number): number {
  const min = 240;
  const max = Math.max(min, Math.min(900, window.innerWidth - 320));
  return Math.max(min, Math.min(max, px));
}

function clampSidebarHeight(px: number): number {
  const min = 80;
  /// Leave at least ~200px for the file table below
  const max = Math.max(min, window.innerHeight - 320);
  return Math.max(min, Math.min(max, px));
}
