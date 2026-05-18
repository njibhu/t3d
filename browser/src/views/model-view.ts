import { ModelCanvas } from "../components/model-canvas";

export class ModelView {
  private host: HTMLElement;
  private mount: HTMLDivElement;
  readonly canvas: ModelCanvas;

  constructor(host: HTMLElement) {
    this.host = host;
    this.host.className = "view-pane";
    this.mount = document.createElement("div");
    this.mount.className = "model-view";
    this.host.replaceChildren(this.mount);
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
