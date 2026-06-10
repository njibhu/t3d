import { Component } from "../components/component.js";
import {
  MOVEMENT_ACTIONS,
  MOVEMENT_ACTION_LABELS,
  formatKeyCode,
  type MovementAction,
} from "../store/keybindings.js";
import type { ExplorerController } from "./explorer-controller.js";
import { buildSection, wrapSettingRow } from "./controls.js";

/** Non-rebindable controls shown for reference (handled by the browser / pointer lock). */
const REFERENCE_CONTROLS: ReadonlyArray<{ label: string; keys: string }> = [
  { label: "Look around", keys: "Mouse" },
  { label: "Capture cursor", keys: "Click" },
  { label: "Release cursor", keys: "Esc" },
  { label: "Adjust movement speed", keys: "Scroll" },
  { label: "Toggle physics", keys: "P" },
];

/**
 * Right-side drawer to view and rebind the first-person movement keys. Clicking a key button
 * arms it; the next keypress is captured as the new binding (Esc cancels). Routes every change
 * through the {@link ExplorerController}; refreshes from state via {@link sync}.
 */
export class ControlsDrawer extends Component<HTMLElement> {
  readonly root: HTMLElement;

  private readonly keyButtons = new Map<MovementAction, HTMLButtonElement>();
  private listeningAction: MovementAction | null = null;

  constructor(private readonly controller: ExplorerController) {
    super();

    this.root = document.createElement("aside");
    this.root.className = "settings-drawer controls-drawer";

    const header = document.createElement("div");
    header.className = "settings-header";
    header.innerHTML = `<div><span class="hud-kicker">First person</span><strong>Movement controls</strong></div>`;
    this.root.appendChild(header);

    const keybindSection = buildSection("Keybinds");
    for (const action of MOVEMENT_ACTIONS) {
      keybindSection.appendChild(this.buildKeybindRow(action));
    }
    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "ghost-button wide";
    resetBtn.textContent = "Reset to defaults";
    this.listen(resetBtn, "click", () => {
      this.cancelListening();
      this.controller.resetKeybindings();
    });
    keybindSection.appendChild(resetBtn);
    this.root.appendChild(keybindSection);

    const referenceSection = buildSection("Reference");
    for (const entry of REFERENCE_CONTROLS) {
      const value = document.createElement("span");
      value.className = "keybind-key keybind-key--static";
      value.textContent = entry.keys;
      referenceSection.appendChild(wrapSettingRow(entry.label, value));
    }
    this.root.appendChild(referenceSection);

    // Capture-phase so an armed key is consumed before the fly controller (or other shortcuts) sees it.
    this.listen(window, "keydown", (event) => this.onCaptureKey(event as KeyboardEvent), true);
  }

  /** Refresh open state and every key button label from current bindings. */
  sync(): void {
    this.root.dataset.open = String(this.controller.isMapLoaded() && this.controller.isControlsOpen());
    if (!this.controller.isControlsOpen()) this.listeningAction = null;
    const bindings = this.controller.getKeybindings();
    for (const action of MOVEMENT_ACTIONS) {
      const button = this.keyButtons.get(action);
      if (!button) continue;
      const listening = this.listeningAction === action;
      button.classList.toggle("listening", listening);
      button.textContent = listening ? "Press a key…" : formatKeyCode(bindings[action]);
    }
  }

  private buildKeybindRow(action: MovementAction): HTMLDivElement {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "setting-toggle keybind-key";
    this.listen(button, "click", () => this.toggleListening(action));
    this.keyButtons.set(action, button);
    return wrapSettingRow(MOVEMENT_ACTION_LABELS[action], button);
  }

  private toggleListening(action: MovementAction): void {
    this.listeningAction = this.listeningAction === action ? null : action;
    this.sync();
  }

  private cancelListening(): void {
    if (!this.listeningAction) return;
    this.listeningAction = null;
    this.sync();
  }

  private onCaptureKey(event: KeyboardEvent): void {
    const action = this.listeningAction;
    if (!action) return;
    event.preventDefault();
    event.stopPropagation();
    this.listeningAction = null;
    if (event.code === "Escape") {
      this.sync();
      return;
    }
    this.controller.setKeybinding(action, event.code);
  }
}
