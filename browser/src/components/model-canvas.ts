import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter.js";
import T3D from "t3d-lib";

const CLEAR_COLOR = T3D.LightingUtils?.DEFAULT_CANVAS_CLEAR_COLOR ?? 0x342920;
const DEFAULT_LIGHTING = T3D.LightingUtils?.DEFAULT_LIGHTING_PROFILE ?? {
  directionalIntensity: 0.7,
  exposure: 0.95,
};

/**
 * WebGL viewer for a single model file. Each instance owns its own GL
 * context so multiple model tabs don't share a render target; the renderer
 * is created lazily on first `mount` and torn down by `dispose`.
 */
export class ModelCanvas {
  private renderer: THREE.WebGLRenderer | null = null;
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls | null = null;
  private scene: THREE.Scene;
  private host: HTMLElement | null = null;
  private rafId = 0;
  private resizeObserver?: ResizeObserver;
  private models: THREE.Object3D[] = [];
  private playing = false;

  constructor() {
    this.scene = new THREE.Scene();
    if (T3D.LightingUtils?.createFallbackLightRig) {
      const lights = T3D.LightingUtils.createFallbackLightRig({
        directionalIntensity: DEFAULT_LIGHTING.directionalIntensity * 0.95,
      });
      lights.forEach((light) => this.scene.add(light));
    } else {
      this.scene.add(new THREE.AmbientLight(0x777777));
      for (const dir of [
        [0, 1, 0],
        [1, 2, 1],
        [-1, -2, -1],
      ] as const) {
        const light = new THREE.DirectionalLight(0xffffff, DEFAULT_LIGHTING.directionalIntensity);
        light.position.set(dir[0], dir[1], dir[2]).normalize();
        this.scene.add(light);
      }
    }
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 500000);
  }

  mount(host: HTMLElement): void {
    if (this.host === host && this.renderer) return;
    this.host = host;
    if (!this.renderer) {
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      T3D.LightingUtils?.applyRendererColorManagement(this.renderer, {
        exposure: DEFAULT_LIGHTING.exposure,
      });
      this.renderer.setClearColor(CLEAR_COLOR);
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
    for (const m of this.models) this.scene.remove(m);
    this.models = models;

    let largest: { mesh: THREE.Object3D; radius: number } | null = null;
    for (const m of models) {
      this.scene.add(m);
      const radius = (m as any).boundingSphere?.radius ?? 0;
      if (!largest || largest.radius < radius) largest = { mesh: m, radius };
    }

    this.controls?.reset();
    // Frame the largest mesh: distance fits its bounding sphere in a 60° fov
    // with a small margin; clamp so tiny meshes don't end up too close and
    // city-sized ones don't end up beyond a comfortable view.
    const distance = Math.min(1000, Math.max(100, (largest ? largest.radius / Math.tan(Math.PI / 6) : 100) * 1.2));
    this.camera.position.set(distance * Math.SQRT2, 50, 0);
    if (largest) this.camera.lookAt(largest.mesh.position);
  }

  exportOBJ(): Blob {
    const text = new OBJExporter().parse(this.scene as any);
    return new Blob([text], { type: "octet/stream" });
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
