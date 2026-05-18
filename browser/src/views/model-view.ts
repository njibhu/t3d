import { ModelCanvas } from "../components/model-canvas";

export class ModelView {
  readonly canvas: ModelCanvas;
  private mount: HTMLDivElement;

  constructor(host: HTMLElement) {
    host.className = "view-pane";
    this.mount = document.createElement("div");
    this.mount.className = "model-view";
    host.replaceChildren(this.mount);
    this.canvas = new ModelCanvas();
  }

  activate(): void {
    this.canvas.mount(this.mount);
  }

  deactivate(): void {
    this.canvas.pause();
  }

  dispose(): void {
    this.canvas.dispose();
  }
}
