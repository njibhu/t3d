import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter.js";

/// Per-viewer WebGL canvas owner.
/// Each FileViewer that opens a Model tab gets its own ModelCanvas,
/// which lazily creates a WebGLRenderer and disposes on close.
export class ModelCanvas {
  private renderer: THREE.WebGLRenderer | null = null;
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls | null = null;
  private scene: THREE.Scene;
  private host: HTMLElement | null = null;
  private rafId = 0;
  private resizeObserver?: ResizeObserver;
  private models: THREE.Object3D[] = [];
  /// Animation runs only when active and mounted.
  private playing = false;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.AmbientLight(0x555555));
    const d1 = new THREE.DirectionalLight(0xffffff, 0.8);
    d1.position.set(0, 0, 1);
    this.scene.add(d1);
    const d2 = new THREE.DirectionalLight(0xffffff, 0.8);
    d2.position.set(1, 0, 0);
    this.scene.add(d2);
    const d3 = new THREE.DirectionalLight(0xffffff, 0.8);
    d3.position.set(0, 1, 0);
    this.scene.add(d3);

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 500000);
  }

  /// Attach the canvas to a host element. Creates the renderer on first attach.
  mount(host: HTMLElement): void {
    if (this.host === host && this.renderer) return;
    this.host = host;
    if (!this.renderer) {
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setClearColor(0x342920);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableZoom = true;
    }
    host.replaceChildren(this.renderer.domElement);
    this.resize();
    this.resizeObserver?.disconnect();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    this.play();
  }

  unmount(): void {
    this.pause();
    this.resizeObserver?.disconnect();
    this.resizeObserver = undefined;
    if (this.renderer && this.renderer.domElement.parentElement === this.host) {
      this.host?.removeChild(this.renderer.domElement);
    }
    this.host = null;
  }

  setModels(models: THREE.Object3D[]): void {
    /// remove old
    for (const m of this.models) this.scene.remove(m);
    this.models = models;
    let biggest: any = null;
    for (const m of models) {
      this.scene.add(m);
      const r = (m as any).boundingSphere?.radius ?? 0;
      if (!biggest || biggest.r < r) biggest = { m, r };
    }
    this.controls?.reset();
    let dist = biggest ? biggest.r / Math.tan((Math.PI * 60) / 360) : 100;
    dist = 1.2 * Math.max(100, dist);
    dist = Math.min(1000, dist);
    this.camera.position.set(dist * Math.SQRT2, 50, 0);
    if (biggest) this.camera.lookAt(biggest.m.position);
  }

  exportOBJ(_name: string): Blob {
    const result = new OBJExporter().parse(this.scene as any);
    return new Blob([result], { type: "octet/stream" });
  }

  private resize(): void {
    if (!this.renderer || !this.host) return;
    const w = this.host.clientWidth;
    const h = this.host.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private play(): void {
    if (this.playing) return;
    this.playing = true;
    const loop = (): void => {
      if (!this.playing || !this.renderer) return;
      this.controls?.update();
      this.renderer.render(this.scene, this.camera);
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  pause(): void {
    this.playing = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
  }

  dispose(): void {
    this.pause();
    this.resizeObserver?.disconnect();
    for (const m of this.models) this.scene.remove(m);
    this.models = [];
    this.controls?.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
    this.host = null;
  }
}
