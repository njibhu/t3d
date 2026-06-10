import { Component } from "../components/component.js";
import { Combobox } from "../components/combobox.js";
import { SegmentedControl } from "../components/segmented-control.js";
import { LAYER_KEYS, type CameraMode, type LayerKey } from "../types.js";
import type { ExplorerController } from "./explorer-controller.js";
import { buildRange, buildSection, fieldWithLabel, wrapSettingRow, type RangeRef } from "./controls.js";
import { formatRangeValue } from "./format.js";

const LAYER_LABELS: Record<LayerKey, string> = {
  zone: "Zone",
  props: "Props",
  collisions: "Collisions",
};

/**
 * Live render & camera controls shown once a map is loaded: camera mode, environment,
 * per-layer visibility toggles, physics, anti-aliasing, fog/movement/light/shadow sliders,
 * and screenshot. Owns its controls; routes every change through the controller and
 * refreshes from scene/state via {@link sync}.
 */
export class SettingsDrawer extends Component<HTMLElement> {
  readonly root: HTMLElement;

  private readonly cameraControl: SegmentedControl<CameraMode>;
  private readonly clipToggleBtn: HTMLButtonElement;
  private readonly clipHeightCollapse: HTMLDivElement;
  private readonly environmentCombo: Combobox;
  private readonly physicsToggleBtn: HTMLButtonElement;
  private readonly aaToggleBtn: HTMLButtonElement;
  private readonly screenshotBtn: HTMLButtonElement;
  private readonly sceneLayerButtons = new Map<LayerKey, HTMLButtonElement>();
  private readonly rangeRefs = new Map<string, RangeRef>();

  constructor(private readonly controller: ExplorerController) {
    super();
    const url = controller.getUrlState();

    this.root = document.createElement("aside");
    this.root.className = "settings-drawer";

    const header = document.createElement("div");
    header.className = "settings-header";
    header.innerHTML = `<div><span class="hud-kicker">Live controls</span><strong>Render & camera</strong></div>`;
    this.root.appendChild(header);

    const cameraSection = buildSection("Camera");
    this.cameraControl = this.own(
      new SegmentedControl<CameraMode>(
        [
          { value: "firstPerson", label: "First Person" },
          { value: "orbital", label: "Orbital" },
          { value: "topDown", label: "Top Down" },
        ],
        controller.getCameraMode(),
        (value) => this.controller.setCameraMode(value)
      )
    );
    cameraSection.appendChild(this.cameraControl.root);

    this.clipToggleBtn = document.createElement("button");
    this.clipToggleBtn.type = "button";
    this.clipToggleBtn.className = "setting-toggle";
    this.clipToggleBtn.textContent = "Clip plane";
    this.listen(this.clipToggleBtn, "click", () =>
      this.controller.setClipEnabled(!this.controller.getUrlState().clipEnabled)
    );
    cameraSection.appendChild(wrapSettingRow("Clip plane", this.clipToggleBtn));

    // Collapsible wrapper so the clip-height slider can animate in/out with the clip plane.
    this.clipHeightCollapse = document.createElement("div");
    this.clipHeightCollapse.className = "collapsible";
    const clipHeightInner = document.createElement("div");
    clipHeightInner.className = "collapsible-inner";
    clipHeightInner.appendChild(
      this.range("clipHeight", "Clip height", 0, 30000, 100, url.clipHeight, (v) => this.controller.setClipHeight(v))
    );
    this.clipHeightCollapse.appendChild(clipHeightInner);
    cameraSection.appendChild(this.clipHeightCollapse);
    this.root.appendChild(cameraSection);

    const worldSection = buildSection("World");
    this.environmentCombo = this.own(
      new Combobox({
        placeholder: "Search environment...",
        onChange: (option) => this.controller.setEnvironment(option?.id ?? null),
      })
    );
    this.environmentCombo.setDisabled(true);
    worldSection.appendChild(fieldWithLabel("Environment", this.environmentCombo.root));

    const layerGrid = document.createElement("div");
    layerGrid.className = "layer-control-grid";
    for (const key of LAYER_KEYS) {
      layerGrid.appendChild(this.buildSceneLayerToggle(key));
    }
    worldSection.appendChild(layerGrid);

    this.physicsToggleBtn = document.createElement("button");
    this.physicsToggleBtn.type = "button";
    this.physicsToggleBtn.className = "setting-toggle";
    this.physicsToggleBtn.textContent = "Physics";
    this.listen(this.physicsToggleBtn, "click", () => this.controller.togglePhysics());
    worldSection.appendChild(wrapSettingRow("Traversal", this.physicsToggleBtn));
    this.root.appendChild(worldSection);

    const renderSection = buildSection("Render");
    this.aaToggleBtn = document.createElement("button");
    this.aaToggleBtn.type = "button";
    this.aaToggleBtn.className = "setting-toggle";
    this.aaToggleBtn.textContent = "Anti-aliasing";
    this.listen(this.aaToggleBtn, "click", () => this.controller.toggleAntialias());
    renderSection.appendChild(wrapSettingRow("Renderer", this.aaToggleBtn));

    renderSection.appendChild(this.range("fog", "Fog", 0, 100000, 500, url.fog, (v) => this.controller.setFog(v)));
    renderSection.appendChild(
      this.range("speed", "Movement", 500, 10000, 100, url.movementSpeed, (v) => this.controller.setMovementSpeed(v))
    );
    this.attachWheelStep("speed");
    renderSection.appendChild(
      this.range("light", "Light", 0.2, 2, 0.01, url.lightIntensity, (v) => this.controller.setLightIntensity(v))
    );
    renderSection.appendChild(
      this.range("shadow", "Shadow", 0, 1, 0.01, url.shadowStrength, (v) => this.controller.setShadowStrength(v))
    );
    this.root.appendChild(renderSection);

    const utilitySection = buildSection("Capture");
    this.screenshotBtn = document.createElement("button");
    this.screenshotBtn.type = "button";
    this.screenshotBtn.className = "ghost-button wide";
    this.screenshotBtn.textContent = "Take screenshot";
    this.listen(this.screenshotBtn, "click", () => this.controller.takeScreenshot());
    utilitySection.appendChild(this.screenshotBtn);
    this.root.appendChild(utilitySection);
  }

  /** Refresh every control from current scene/session/url state. */
  sync(): void {
    this.root.dataset.open = String(this.controller.isMapLoaded() && this.controller.isSettingsOpen());

    this.cameraControl.setValue(this.controller.getCameraMode(), true);

    const topDown = this.controller.getCameraMode() === "topDown";
    const clipUrl = this.controller.getUrlState();
    this.clipToggleBtn.disabled = !topDown;
    this.clipToggleBtn.classList.toggle("active", clipUrl.clipEnabled);
    this.clipToggleBtn.textContent = clipUrl.clipEnabled ? "Clip plane on" : "Clip plane off";
    this.clipHeightCollapse.dataset.show = String(topDown && clipUrl.clipEnabled);

    this.physicsToggleBtn.classList.toggle("active", this.controller.isPhysicsEnabled());
    this.physicsToggleBtn.disabled = !this.controller.hasCollisionsLoaded();
    this.physicsToggleBtn.textContent = this.controller.isPhysicsEnabled() ? "Physics on" : "Physics off";

    this.aaToggleBtn.classList.toggle("active", this.controller.getAntialias());
    this.aaToggleBtn.textContent = this.controller.getAntialias() ? "AA on" : "AA off";

    this.screenshotBtn.disabled = this.controller.getCurrentMapId() == null;

    this.syncEnvironment();
    this.renderSceneLayers();

    const url = this.controller.getUrlState();
    this.updateRange("fog", url.fog);
    this.updateRange("speed", url.movementSpeed);
    this.updateRange("light", url.lightIntensity);
    this.updateRange("shadow", url.shadowStrength);
    this.updateRange("clipHeight", url.clipHeight);
  }

  private syncEnvironment(): void {
    const options = this.controller.getEnvironmentOptions().map((variant) => ({
      id: variant.id,
      label: variant.label,
      keywords: [variant.label],
    }));
    this.environmentCombo.setOptions(options);
    this.environmentCombo.setDisabled(options.length <= 1);
    this.environmentCombo.setValue(this.controller.getActiveEnvironmentId(), true);
  }

  private renderSceneLayers(): void {
    const layerState = this.controller.getLayerState();
    for (const key of LAYER_KEYS) {
      const button = this.sceneLayerButtons.get(key);
      if (!button) continue;
      button.classList.toggle("active", layerState[key]);
    }
  }

  private buildSceneLayerToggle(key: LayerKey): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "setting-toggle";
    button.dataset.layer = key;
    button.textContent = LAYER_LABELS[key];
    this.listen(button, "click", () => this.controller.toggleSceneLayer(key));
    this.sceneLayerButtons.set(key, button);
    return button;
  }

  private range(
    key: string,
    label: string,
    min: number,
    max: number,
    step: number,
    value: number,
    onInput: (value: number) => void
  ): HTMLDivElement {
    const { row, ref } = buildRange(label, min, max, step, value, onInput);
    this.rangeRefs.set(key, ref);
    return row;
  }

  private updateRange(key: string, value: number): void {
    const ref = this.rangeRefs.get(key);
    if (!ref) return;
    ref.input.value = String(value);
    ref.value.textContent = formatRangeValue(value, parseFloat(ref.input.step) || 1);
  }

  /** Let the scroll wheel nudge a slider by one step (scroll up = increase) instead of scrolling the panel. */
  private attachWheelStep(key: string): void {
    const ref = this.rangeRefs.get(key);
    if (!ref) return;
    this.listen(
      ref.input,
      "wheel",
      (event) => {
        event.preventDefault();
        const step = parseFloat(ref.input.step) || 1;
        const min = parseFloat(ref.input.min);
        const max = parseFloat(ref.input.max);
        const direction = (event as WheelEvent).deltaY < 0 ? 1 : -1;
        const next = Math.min(max, Math.max(min, ref.input.valueAsNumber + direction * step));
        if (next === ref.input.valueAsNumber) return;
        ref.input.value = String(next);
        ref.input.dispatchEvent(new Event("input"));
      },
      { passive: false }
    );
  }
}
