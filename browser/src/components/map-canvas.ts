import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import T3D from "t3d-lib";

const FOG_LENGTH = 5000;

/**
 * WebGL viewer for a single map file. Each instance owns its own GL context
 * and is rendered with two scene/camera pairs - the skybox is drawn first
 * with a camera locked to the main camera's orientation (but not position)
 * so it stays at infinity, and the world scene is drawn on top.
 */
export class MapCanvas {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene;
  private skyScene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private skyCamera: THREE.PerspectiveCamera;
  private controls: MapControls | null = null;
  private host: HTMLElement | null = null;
  private rafId = 0;
  private resizeObserver?: ResizeObserver;
  private playing = false;

  private mapMeshes: THREE.Object3D[] = [];
  private skyMeshes: THREE.Object3D[] = [];
  private currentMapContext: any = null;

  private fog = 25000;

  constructor() {
    this.scene = new THREE.Scene();
    this.skyScene = new THREE.Scene();

    this.scene.add(new THREE.AmbientLight(0x555555));
    for (const dir of [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ] as const) {
      const light = new THREE.DirectionalLight(0xffffff, 1.25);
      light.position.set(dir[0], dir[1], dir[2]);
      this.scene.add(light);
    }

    this.scene.fog = new THREE.Fog(0xffffff, this.fog, this.fog + FOG_LENGTH);
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, this.fog + FOG_LENGTH);
    this.skyCamera = new THREE.PerspectiveCamera(60, 1, 0.1, 100000);
  }

  mount(host: HTMLElement): void {
    if (this.host === host && this.renderer) return;
    this.host = host;
    if (!this.renderer) {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        logarithmicDepthBuffer: true,
        stencil: false,
        premultipliedAlpha: false,
      });
      this.renderer.sortObjects = false;
      this.renderer.autoClear = false;
      this.renderer.setClearColor(0x342920);
      this.controls = new MapControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
    }
    // The map view's mount contains overlay children (status pill, progress
    // strip); inserting at the front preserves them above the canvas.
    if (this.renderer.domElement.parentElement !== host) {
      host.insertBefore(this.renderer.domElement, host.firstChild);
    }
    this.resize();
    this.resizeObserver?.disconnect();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    this.play();
  }

  pause(): void {
    this.playing = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
  }

  applyMapContext(context: any, opts: { zone: boolean; props: boolean; collisions: boolean }): void {
    this.clearMapMeshes();
    if (this.currentMapContext) {
      T3D.disposeEnvironmentResources(this.currentMapContext);
    }
    this.currentMapContext = context;

    const terrainTiles = pickFromContext<THREE.Object3D[]>(context, "TerrainRenderer", "terrainTiles", []);
    for (const tile of terrainTiles) this.addMapMesh(tile);

    const water = pickFromContext<THREE.Object3D | null>(context, "TerrainRenderer", "water", null);
    if (water) this.addMapMesh(water);

    const skyBox = pickFromContext<THREE.Object3D | null>(context, "EnvironmentRenderer", "skyBox", null);
    if (skyBox) {
      this.skyScene.add(skyBox);
      this.skyMeshes.push(skyBox);
    }

    // The library hands us hazeColor as BGR bytes, not RGB.
    const hazeBgr = pickFromContext<number[] | null>(context, "EnvironmentRenderer", "hazeColor", null);
    if (hazeBgr && this.renderer) {
      this.renderer.setClearColor(new THREE.Color(hazeBgr[2] / 255, hazeBgr[1] / 255, hazeBgr[0] / 255));
    }

    if (opts.zone)
      for (const m of pickFromContext<THREE.Object3D[]>(context, "ZoneRenderer", "meshes", [])) this.addMapMesh(m);
    if (opts.props)
      for (const m of pickFromContext<THREE.Object3D[]>(context, "PropertiesRenderer", "meshes", []))
        this.addMapMesh(m);
    if (opts.collisions)
      for (const m of pickFromContext<THREE.Object3D[]>(context, "HavokRenderer", "meshes", [])) this.addMapMesh(m);

    // Maps in GW2 are laid out around the world origin; terrain bounds is a
    // 2D rect in the XZ plane (x1..x2 east-west, y1..y2 north-south). World
    // "up" is +Y. Placing the camera straight above origin at altitude=y2 and
    // scaling fog to the map's size keeps the terrain inside the visible range.
    const bounds = pickFromContext<{ x1: number; x2: number; y1: number; y2: number } | null>(
      context,
      "TerrainRenderer",
      "bounds",
      null
    );
    if (bounds) {
      this.setFog(Math.max(this.fog, bounds.y2 * 2));
      this.camera.position.set(0, bounds.y2, 0);
      this.camera.lookAt(0, 0, 0);
      this.controls?.target.set(0, 0, 0);
      this.controls?.update();
    }
  }

  private clearMapMeshes(): void {
    for (const m of this.mapMeshes) this.scene.remove(m);
    this.mapMeshes = [];
    for (const m of this.skyMeshes) this.skyScene.remove(m);
    this.skyMeshes = [];
  }

  private addMapMesh(m: THREE.Object3D): void {
    this.scene.add(m);
    this.mapMeshes.push(m);
  }

  private setFog(value: number): void {
    this.fog = value;
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.near = this.fog;
      this.scene.fog.far = this.fog + FOG_LENGTH;
    }
    this.camera.far = this.fog + FOG_LENGTH;
    this.camera.updateProjectionMatrix();
  }

  private resize(): void {
    if (!this.renderer || !this.host) return;
    const w = this.host.clientWidth;
    const h = this.host.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.skyCamera.aspect = w / h;
    this.skyCamera.updateProjectionMatrix();
  }

  private play(): void {
    if (this.playing) return;
    this.playing = true;
    // First post-mount frame: the host's final size may only be known after
    // CSS has applied. Reading it now picks that up.
    this.resize();
    const loop = (): void => {
      if (!this.playing || !this.renderer) return;
      this.controls?.update();
      this.renderer.clear();
      this.skyCamera.quaternion.copy(this.camera.quaternion);
      this.renderer.render(this.skyScene, this.skyCamera);
      this.renderer.render(this.scene, this.camera);
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  dispose(): void {
    this.pause();
    this.resizeObserver?.disconnect();
    this.clearMapMeshes();
    if (this.currentMapContext) {
      T3D.disposeEnvironmentResources(this.currentMapContext);
      this.currentMapContext = null;
    }
    this.controls?.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
    this.host = null;
  }
}

/** Like `T3D.getContextValue` but keyed by renderer-name string so the
 *  canvas doesn't need to import every renderer class to read its output. */
function pickFromContext<T>(context: any, rendererName: string, propName: string, defaultValue: T): T {
  const out = context?.[rendererName];
  if (!out) return defaultValue;
  return out[propName] !== undefined ? (out[propName] as T) : defaultValue;
}
