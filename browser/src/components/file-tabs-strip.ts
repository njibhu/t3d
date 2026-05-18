export interface FileTabsStripCallbacks {
  onActivate: (fileId: number) => void;
  onClose: (fileId: number) => void;
}

export class FileTabsStrip {
  readonly root: HTMLDivElement;
  private callbacks: FileTabsStripCallbacks;
  private chipsByFileId = new Map<number, HTMLDivElement>();
  private activeFileId: number | null = null;

  constructor(callbacks: FileTabsStripCallbacks) {
    this.callbacks = callbacks;
    this.root = document.createElement("div");
    this.root.className = "file-tabs-strip";
  }

  addChip(fileId: number, label: string): HTMLDivElement {
    const chip = document.createElement("div");
    chip.className = "file-tab-chip";

    const labelEl = document.createElement("span");
    labelEl.className = "label";
    labelEl.textContent = label;

    const close = document.createElement("span");
    close.className = "close";
    close.textContent = "×";
    close.title = "Close tab";
    close.addEventListener("click", (e) => {
      e.stopPropagation();
      this.callbacks.onClose(fileId);
    });

    chip.append(labelEl, close);
    chip.addEventListener("click", () => this.callbacks.onActivate(fileId));

    this.root.appendChild(chip);
    this.chipsByFileId.set(fileId, chip);
    return chip;
  }

  setLabel(fileId: number, label: string): void {
    const chip = this.chipsByFileId.get(fileId);
    chip?.querySelector(".label")?.replaceChildren(label);
  }

  removeChip(fileId: number): void {
    this.chipsByFileId.get(fileId)?.remove();
    this.chipsByFileId.delete(fileId);
    if (this.activeFileId === fileId) this.activeFileId = null;
  }

  setActive(fileId: number | null): void {
    this.activeFileId = fileId;
    for (const [id, chip] of this.chipsByFileId) {
      chip.classList.toggle("active", id === fileId);
    }
    if (fileId != null) {
      this.chipsByFileId.get(fileId)?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
    }
  }
}
