import { FileViewer } from "./file-viewer";

export interface TabEntry {
  fileId: number;
  viewer: FileViewer;
  chip: HTMLDivElement;
}

export type TabsStripCallbacks = {
  onActivate: (fileId: number) => void;
  onClose: (fileId: number) => void;
};

export class FileTabsStrip {
  readonly root: HTMLDivElement;
  private cb: TabsStripCallbacks;
  private chipsByFileId = new Map<number, HTMLDivElement>();
  private activeFileId: number | null = null;

  constructor(cb: TabsStripCallbacks) {
    this.cb = cb;
    this.root = document.createElement("div");
    this.root.className = "file-tabs-strip";
  }

  addChip(fileId: number, label: string): HTMLDivElement {
    const chip = document.createElement("div");
    chip.className = "file-tab-chip";
    chip.dataset.fileId = String(fileId);

    const labelEl = document.createElement("span");
    labelEl.className = "label";
    labelEl.textContent = label;

    const close = document.createElement("span");
    close.className = "close";
    close.textContent = "×";
    close.title = "Close tab";
    close.addEventListener("click", (e) => {
      e.stopPropagation();
      this.cb.onClose(fileId);
    });

    chip.append(labelEl, close);
    chip.addEventListener("click", () => this.cb.onActivate(fileId));

    this.root.appendChild(chip);
    this.chipsByFileId.set(fileId, chip);
    return chip;
  }

  setLabel(fileId: number, label: string): void {
    const chip = this.chipsByFileId.get(fileId);
    if (!chip) return;
    const labelEl = chip.querySelector(".label");
    if (labelEl) labelEl.textContent = label;
  }

  removeChip(fileId: number): void {
    const chip = this.chipsByFileId.get(fileId);
    chip?.remove();
    this.chipsByFileId.delete(fileId);
    if (this.activeFileId === fileId) this.activeFileId = null;
  }

  setActive(fileId: number | null): void {
    this.activeFileId = fileId;
    for (const [id, chip] of this.chipsByFileId) {
      chip.classList.toggle("active", id === fileId);
    }
    if (fileId != null) {
      const chip = this.chipsByFileId.get(fileId);
      chip?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
    }
  }

  get count(): number {
    return this.chipsByFileId.size;
  }
}
