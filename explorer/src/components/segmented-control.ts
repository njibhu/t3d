import { Component } from "./component.js";

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
}

export class SegmentedControl<T extends string> extends Component<HTMLDivElement> {
  readonly root: HTMLDivElement;

  private readonly buttons = new Map<T, HTMLButtonElement>();
  private readonly onChange: (value: T) => void;
  private currentValue: T;

  constructor(options: SegmentOption<T>[], initialValue: T, onChange: (value: T) => void) {
    super();
    this.currentValue = initialValue;
    this.onChange = onChange;
    this.root = document.createElement("div");
    this.root.className = "segmented";
    this.root.setAttribute("role", "tablist");

    for (const option of options) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "segmented-button";
      button.textContent = option.label;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-label", option.label);
      this.listen(button, "click", () => this.setValue(option.value));
      this.root.appendChild(button);
      this.buttons.set(option.value, button);
    }

    this.sync();
  }

  setValue(value: T, silent = false): void {
    this.currentValue = value;
    this.sync();
    if (!silent) {
      this.onChange(value);
    }
  }

  setDisabled(disabled: boolean): void {
    for (const button of this.buttons.values()) {
      button.disabled = disabled;
    }
  }

  private sync(): void {
    for (const [value, button] of this.buttons) {
      const active = value === this.currentValue;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    }
  }
}
