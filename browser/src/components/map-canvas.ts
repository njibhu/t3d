import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";

const FOG_LENGTH = 5000;

/// Per-viewer map canvas. Modeled on explorer/src/renderer.js but
/// instance-scoped so each open map file gets its own GL context, scene,
/// and camera (matching how ModelCanvas works for single-model viewers).
///
/// Maps need two scenes/cameras:
///   - skyScene/skyCamera: rendered first, no clear, no depth write
///   - main scene/camera : rendered second on top
/// This is how the GW2 skybox works (locked to camera orientation, not
/// position) — see explorer's _render loop.
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

  /// Fog distance — tuned per-map after load (depends on terrain bounds).
  private fog = 25000;

  constructor() {
    this.scene = new THREE.Scene();
    this.skyScene = new THREE.Scene();

    /// Lights — same setup as the explorer
    this.scene.add(new THREE.AmbientLight(0x555555));
    const lights = [
      new THREE.DirectionalLight(0xffffff, 1.25),
      new THREE.DirectionalLight(0xffffff, 1.25),
      new THREE.DirectionalLight(0xffffff, 1.25),
    ];
    lights[0].position.set(0, 0, 1);
    lights[1].position.set(0, 1, 0);
    lights[2].position.set(1, 0, 0);
    for (const l of lights) this.scene.add(l);

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
    /// Insert the canvas without clobbering any overlay children (e.g. the
    /// map-view's status indicator) that already live inside the mount.
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

  /// Add the parsed map context's contents to the scene. The context comes
  /// from T3D.renderMapContentsAsync(); we only consume the renderers we
  /// asked for (whatever was passed in to the renderMapContents call).
  applyMapContext(context: any, opts: { zone: boolean; props: boolean; collisions: boolean }): void {
    this.clearMapMeshes();

    /// Terrain (tiles + water) — always present
    const terrainTiles = T3D_get(context, "TerrainRenderer", "terrainTiles", []);
    for (const tile of terrainTiles) this.addMapMesh(tile);
    const water = T3D_get<THREE.Object3D | null>(context, "TerrainRenderer", "water", null);
    if (water) this.addMapMesh(water);

    /// Environment — sky + haze
    const skyBox = T3D_get<THREE.Object3D | null>(context, "EnvironmentRenderer", "skyBox", null);
    if (skyBox) {
      this.skyScene.add(skyBox);
      this.skyMeshes.push(skyBox);
    }
    const hazeColor = T3D_get<number[] | null>(context, "EnvironmentRenderer", "hazeColor", null);
    if (hazeColor && this.renderer) {
      this.renderer.setClearColor(new THREE.Color(hazeColor[2] / 255, hazeColor[1] / 255, hazeColor[0] / 255));
    }

    if (opts.zone) {
      for (const m of T3D_get<THREE.Object3D[]>(context, "ZoneRenderer", "meshes", [])) this.addMapMesh(m);
    }
    if (opts.props) {
      for (const m of T3D_get<THREE.Object3D[]>(context, "PropertiesRenderer", "meshes", [])) this.addMapMesh(m);
    }
    if (opts.collisions) {
      for (const m of T3D_get<THREE.Object3D[]>(context, "HavokRenderer", "meshes", [])) this.addMapMesh(m);
    }

    /// Tune fog + camera. The terrain bounds is a 2D rect (x1..x2 east-west,
    /// y1..y2 north-south) in the XZ plane; world "up" is +Y. We mirror the
    /// explorer's positioning: place the camera straight above the world
    /// origin at altitude = bounds.y2 (a sensible "distance" scale), and
    /// have MapControls look at the origin. Maps are conventionally laid
    /// out around (0, 0, 0) in GW2's coordinate space.
    const bounds = T3D_get<{ x1: number; x2: number; y1: number; y2: number } | null>(
      context,
      "TerrainRenderer",
      "bounds",
      null
    );
    if (bounds) {
      /// Match explorer's fog rule: scale fog to the map size so we can
      /// actually see the terrain. Without this the camera sits past the
      /// fog plane and the whole scene paints fog colour.
      this.setFog(Math.max(this.fog, bounds.y2 * 2));
      /// And mirror the explorer's camera placement exactly.
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
    /// First frame after mounting: ensure the renderer matches the host's
    /// laid-out size now that styles have applied.
    this.resize();
    const loop = (): void => {
      if (!this.playing || !this.renderer) return;
      this.controls?.update();
      this.renderer.clear();
      /// Skybox stays locked to the camera's orientation, not position
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
    this.controls?.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
    this.host = null;
  }
}

/// Helper — same shape as T3D.getContextValue but takes a renderer-name
/// string so we don't have to import every renderer class.
function T3D_get<T>(context: any, rendererName: string, propName: string, defaultValue: T): T {
  const out = context?.[rendererName];
  if (!out) return defaultValue;
  return out[propName] !== undefined ? (out[propName] as T) : defaultValue;
}
