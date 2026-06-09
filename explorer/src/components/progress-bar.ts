import type { ProgressState } from "../types.js";
import { Component } from "./component.js";

export class ProgressBar extends Component<HTMLDivElement> {
  readonly root: HTMLDivElement;

  private readonly labelEl: HTMLDivElement;
  private readonly detailEl: HTMLDivElement;
  private readonly trackEl: HTMLDivElement;
  private readonly fillEl: HTMLDivElement;

  constructor(className = "") {
    super();
    this.root = document.createElement("div");
    this.root.className = `progress ${className}`.trim();

    const head = document.createElement("div");
    head.className = "progress-head";

    this.labelEl = document.createElement("div");
    this.labelEl.className = "progress-label";
    head.appendChild(this.labelEl);

    this.detailEl = document.createElement("div");
    this.detailEl.className = "progress-detail";
    head.appendChild(this.detailEl);

    this.trackEl = document.createElement("div");
    this.trackEl.className = "progress-track";
    this.fillEl = document.createElement("div");
    this.fillEl.className = "progress-fill";
    this.trackEl.appendChild(this.fillEl);

    this.root.append(head, this.trackEl);
    this.setState({ visible: false, label: "", pct: null });
  }

  setState(state: ProgressState): void {
    this.root.hidden = !state.visible;
    this.root.dataset.tone = state.tone ?? "accent";
    this.labelEl.textContent = state.label;
    this.detailEl.textContent = state.detail ?? (state.pct == null ? "" : `${Math.round(state.pct)}%`);
    this.trackEl.classList.toggle("indeterminate", state.pct == null);
    this.fillEl.style.width = state.pct == null ? "35%" : `${Math.max(0, Math.min(100, state.pct))}%`;
  }
}
