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
    jumpBtn.addEventListener("click", () => this.openByBaseId(parseInt(jumpInput.value, 10), false));

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
    leftPane.append(this.sidebarEl, fileTableContainer);

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

    mainSplit.append(leftPane, rightPane);
    this.root.appendChild(mainSplit);

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
    this.fileTableFooterEl.textContent = `${rows.length.toLocaleString()} files${
      this.currentFilter === "All" ? "" : ` · filter: ${this.currentFilter}`
    }`;
  }

  /* ---------- tabs ---------- */

  private onRowClick(row: FileRow, ev: MouseEvent): void {
    const baseId = row.baseIds[0];
    if (baseId == null) return;
    const newTab = ev.ctrlKey || ev.metaKey;
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
