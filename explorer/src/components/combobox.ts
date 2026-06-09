import { filterComboboxOptions } from "../store/map-catalog.js";
import type { ComboboxOption } from "../types.js";
import { Component } from "./component.js";

let comboId = 0;

export interface ComboboxConfig {
  placeholder: string;
  emptyText?: string;
  onChange?: (option: ComboboxOption | null) => void;
}

export class Combobox extends Component<HTMLDivElement> {
  readonly root: HTMLDivElement;

  private readonly input: HTMLInputElement;
  private readonly button: HTMLButtonElement;
  private readonly list: HTMLDivElement;
  private readonly empty: HTMLDivElement;
  private readonly listId: string;
  private readonly onChange?: (option: ComboboxOption | null) => void;
  private readonly emptyText: string;

  private options: ComboboxOption[] = [];
  private filtered: ComboboxOption[] = [];
  private selectedId: string | null = null;
  private activeIndex = -1;
  private open = false;
  private disabled = false;

  constructor(config: ComboboxConfig) {
    super();
    this.onChange = config.onChange;
    this.emptyText = config.emptyText ?? "No matches";
    this.listId = `t3d-combobox-${++comboId}`;

    this.root = document.createElement("div");
    this.root.className = "combo";

    const chrome = document.createElement("div");
    chrome.className = "combo-chrome";

    this.input = document.createElement("input");
    this.input.className = "combo-input";
    this.input.type = "text";
    this.input.placeholder = config.placeholder;
    this.input.setAttribute("role", "combobox");
    this.input.setAttribute("aria-autocomplete", "list");
    this.input.setAttribute("aria-controls", this.listId);
    this.input.setAttribute("aria-expanded", "false");
    this.input.autocomplete = "off";
    chrome.appendChild(this.input);

    this.button = document.createElement("button");
    this.button.className = "combo-button";
    this.button.type = "button";
    this.button.setAttribute("aria-label", "Toggle options");
    this.button.textContent = "v";
    chrome.appendChild(this.button);

    const popover = document.createElement("div");
    popover.className = "combo-popover";

    this.list = document.createElement("div");
    this.list.className = "combo-list";
    this.list.id = this.listId;
    this.list.setAttribute("role", "listbox");
    popover.appendChild(this.list);

    this.empty = document.createElement("div");
    this.empty.className = "combo-empty";
    this.empty.textContent = this.emptyText;
    popover.appendChild(this.empty);

    this.root.append(chrome, popover);

    this.listen(this.input, "focus", () => {
      if (this.disabled) return;
      this.openList();
      this.input.select();
    });
    this.listen(this.input, "input", () => {
      if (this.disabled) return;
      this.openList();
      this.filter();
    });
    this.listen(this.input, "keydown", (event) => this.onKeyDown(event as KeyboardEvent));
    this.listen(this.button, "click", () => {
      if (this.disabled) return;
      if (this.open) {
        this.closeList();
      } else {
        this.openList();
        this.input.focus();
        this.input.select();
      }
    });

    // Closing on outside clicks requires a document-level listener; routing it through
    // listen() ensures it is removed on destroy() instead of leaking per instance.
    this.listen(document, "pointerdown", (event) => {
      if (!this.root.contains(event.target as Node)) {
        this.closeList();
      }
    });

    this.renderOptions();
  }

  setOptions(options: ComboboxOption[]): void {
    this.options = options;
    if (this.selectedId && !this.options.some((option) => option.id === this.selectedId)) {
      this.selectedId = null;
    }
    this.filter();
    this.syncInputValue();
  }

  setValue(id: string | null, silent = false): void {
    this.selectedId = id && this.options.some((option) => option.id === id) ? id : null;
    this.syncInputValue();
    if (!silent) {
      this.onChange?.(this.getSelectedOption());
    }
  }

  getValue(): string | null {
    return this.selectedId;
  }

  getSelectedOption(): ComboboxOption | null {
    return this.options.find((option) => option.id === this.selectedId) ?? null;
  }

  focus(): void {
    this.input.focus();
  }

  setDisabled(disabled: boolean): void {
    this.disabled = disabled;
    this.root.classList.toggle("disabled", disabled);
    this.input.disabled = disabled;
    this.button.disabled = disabled;
    if (disabled) {
      this.closeList();
    }
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!this.open) {
        this.openList();
      }
      this.moveActive(1);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!this.open) {
        this.openList();
      }
      this.moveActive(-1);
      return;
    }
    if (event.key === "Enter") {
      if (!this.open) return;
      event.preventDefault();
      const option = this.filtered[this.activeIndex] ?? null;
      if (option) this.commit(option);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      this.closeList();
      this.input.blur();
    }
  }

  private moveActive(delta: number): void {
    if (!this.filtered.length) {
      this.activeIndex = -1;
      this.renderOptions();
      return;
    }
    const next = this.activeIndex < 0 ? 0 : (this.activeIndex + delta + this.filtered.length) % this.filtered.length;
    this.activeIndex = next;
    this.renderOptions();
    const optionEl = this.list.querySelector<HTMLElement>(`[data-option-index="${next}"]`);
    optionEl?.scrollIntoView({ block: "nearest" });
  }

  private openList(): void {
    if (!this.open) {
      this.input.value = "";
    }
    this.open = true;
    this.root.classList.add("open");
    this.input.setAttribute("aria-expanded", "true");
    this.filter();
  }

  private closeList(): void {
    this.open = false;
    this.root.classList.remove("open");
    this.input.setAttribute("aria-expanded", "false");
    this.activeIndex = -1;
    this.syncInputValue();
    this.renderOptions();
  }

  private filter(): void {
    this.filtered = filterComboboxOptions(this.options, this.open ? this.input.value : "");
    const selectedIndex = this.filtered.findIndex((option) => option.id === this.selectedId);
    this.activeIndex = selectedIndex >= 0 ? selectedIndex : this.filtered.length ? 0 : -1;
    this.renderOptions();
  }

  private commit(option: ComboboxOption): void {
    this.selectedId = option.id;
    this.syncInputValue();
    this.closeList();
    this.onChange?.(option);
  }

  private syncInputValue(): void {
    if (this.open) return;
    const option = this.getSelectedOption();
    this.input.value = option?.label ?? "";
  }

  private renderOptions(): void {
    this.list.replaceChildren();
    this.empty.hidden = this.filtered.length > 0;
    this.list.hidden = this.filtered.length === 0;
    for (const [index, option] of this.filtered.entries()) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "combo-option";
      button.dataset.optionIndex = String(index);
      button.setAttribute("role", "option");
      button.setAttribute("aria-selected", String(option.id === this.selectedId));
      button.classList.toggle("active", index === this.activeIndex);

      if (option.icon) {
        const icon = document.createElement("img");
        icon.className = "combo-option-icon";
        icon.src = option.icon;
        icon.alt = "";
        icon.loading = "lazy";
        button.appendChild(icon);
      }

      const label = document.createElement("span");
      label.className = "combo-option-label";
      label.textContent = option.label;
      button.appendChild(label);

      if (option.meta) {
        const meta = document.createElement("span");
        meta.className = "combo-option-meta";
        meta.textContent = option.meta;
        button.appendChild(meta);
      }

      button.addEventListener("mousedown", (event) => event.preventDefault());
      button.addEventListener("click", () => this.commit(option));
      this.list.appendChild(button);
    }
  }
}
