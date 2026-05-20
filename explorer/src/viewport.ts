import * as THREE from "three";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import { CameraPose, ControllerType, ExplorerHashState, MapLayerOptions } from "./types";

const DEFAULT_CLEAR_COLOR = 0x342920;
const FOG_LENGTH = 5000;

type ViewControls = FlyControls | MapControls;

export class ExplorerViewport {
  private renderer: THREE.WebGLRenderer | null = null;
  private host: HTMLElement | null = null;
  private resizeObserver?: ResizeObserver;
  private rafId = 0;
  private clock = new THREE.Clock();
  private controls: ViewControls | null = null;
  private antialias = true;

  private mapMeshes: THREE.Object3D[] = [];
  private skyMeshes: THREE.Object3D[] = [];
  private fogDistance = 25000;
  private movementSpeed = 10000;
  private currentController: ControllerType = "fly";
  private lastBounds: { y2: number } | null = null;

  readonly scene = new THREE.Scene();
  readonly skyScene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(60, 1, 0.1, this.fogDistance + FOG_LENGTH);
  readonly skyCamera = new THREE.PerspectiveCamera(60, 1, 0.1, 100000);

  constructor(opts: { antialias: boolean; movementSpeed: number; fogDistance: number; controllerType: ControllerType }) {
    this.antialias = opts.antialias;
    this.movementSpeed = opts.movementSpeed;
    this.fogDistance = opts.fogDistance;
    this.currentController = opts.controllerType;

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

    this.scene.fog = new THREE.Fog(0xffffff, this.fogDistance, this.fogDistance + FOG_LENGTH);
    this.camera.far = this.fogDistance + FOG_LENGTH;
  }

  get controllerType(): ControllerType {
    return this.currentController;
  }

  get fog(): number {
    return this.fogDistance;
  }

  mount(host: HTMLElement): void {
    this.host = host;
    this.ensureRenderer();
    this.attachCanvas();
    this.resize();
    this.resizeObserver?.disconnect();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    this.play();
  }

  setAntialiasing(enabled: boolean): void {
    if (enabled === this.antialias) return;
    this.antialias = enabled;
    this.recreateRenderer();
  }

  setMovementSpeed(value: number): void {
    this.movementSpeed = value;
    if (this.controls instanceof FlyControls) {
      this.controls.movementSpeed = value;
    }
  }

  setFogDistance(value: number): void {
    this.fogDistance = value;
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.near = value;
      this.scene.fog.far = value + FOG_LENGTH;
    }
    this.camera.far = value + FOG_LENGTH;
    this.camera.updateProjectionMatrix();
  }

  setController(type: ControllerType): void {
    this.currentController = type;
    const renderer = this.renderer;
    if (!renderer) return;

    this.controls?.dispose();
    if (type === "orbital") {
      const controls = new MapControls(this.camera, renderer.domElement);
      controls.enableDamping = true;
      controls.screenSpacePanning = false;
      this.controls = controls;
      this.syncOrbitalTargetFromCamera();
    } else {
      const controls = new FlyControls(this.camera, renderer.domElement);
      controls.movementSpeed = this.movementSpeed;
      controls.rollSpeed = Math.PI / 6;
      controls.autoForward = false;
      controls.dragToLook = true;
      this.controls = controls;
    }
  }

  applyMapContext(context: any, layers: MapLayerOptions): void {
    this.clearMapMeshes();

    const terrainTiles = pickFromContext<THREE.Object3D[]>(context, "TerrainRenderer", "terrainTiles", []);
    for (const tile of terrainTiles) this.addMapMesh(tile);

    const water = pickFromContext<THREE.Object3D | null>(context, "TerrainRenderer", "water", null);
    if (water) this.addMapMesh(water);

    const skyBox = pickFromContext<THREE.Object3D | null>(context, "EnvironmentRenderer", "skyBox", null);
    if (skyBox) {
      this.skyScene.add(skyBox);
      this.skyMeshes.push(skyBox);
    }

    const hazeBgr = pickFromContext<number[] | null>(context, "EnvironmentRenderer", "hazeColor", null);
    if (hazeBgr && this.renderer) {
      this.renderer.setClearColor(new THREE.Color(hazeBgr[2] / 255, hazeBgr[1] / 255, hazeBgr[0] / 255));
    } else if (this.renderer) {
      this.renderer.setClearColor(DEFAULT_CLEAR_COLOR);
    }

    if (layers.zone) {
      for (const mesh of pickFromContext<THREE.Object3D[]>(context, "ZoneRenderer", "meshes", [])) this.addMapMesh(mesh);
    }
    if (layers.props) {
      for (const mesh of pickFromContext<THREE.Object3D[]>(context, "PropertiesRenderer", "meshes", [])) {
        this.addMapMesh(mesh);
      }
    }
    if (layers.collisions) {
      for (const mesh of pickFromContext<THREE.Object3D[]>(context, "HavokRenderer", "meshes", [])) {
        this.addMapMesh(mesh);
      }
    }

    const bounds = pickFromContext<{ x1: number; x2: number; y1: number; y2: number } | null>(
      context,
      "TerrainRenderer",
      "bounds",
      null
    );
    this.lastBounds = bounds ? { y2: bounds.y2 } : null;
    this.resetCameraForMap();
  }

  applyShareState(state: ExplorerHashState): void {
    if (state.fog !== undefined) this.setFogDistance(state.fog);
    this.setController(state.cameraType ?? this.currentController);
    this.applyCameraPose({
      x: state.x ?? this.camera.position.x,
      y: state.y ?? this.camera.position.y,
      z: state.z ?? this.camera.position.z,
      rx: state.rx ?? this.camera.rotation.x,
      ry: state.ry ?? this.camera.rotation.y,
      rz: state.rz ?? this.camera.rotation.z,
    });
  }

  resetCameraForMap(): void {
    const altitude = this.lastBounds?.y2 ?? 0;
    if (this.fogDistance < altitude * 1.5) {
      this.setFogDistance(altitude * 2);
    }
    this.camera.position.set(0, altitude, 0);

    if (this.currentController === "fly") {
      this.camera.rotation.set((-90 * Math.PI) / 180, 0, 0);
    } else {
      this.camera.lookAt(0, 0, 0);
      this.syncOrbitalTargetFromCamera();
    }
  }

  applyCameraPose(pose: CameraPose): void {
    this.camera.position.set(pose.x, pose.y, pose.z);
    this.camera.rotation.set(pose.rx, pose.ry, pose.rz);
    if (this.controls instanceof MapControls) {
      this.syncOrbitalTargetFromCamera();
      this.controls.update();
    }
  }

  getCameraPose(): CameraPose {
    return {
      x: this.camera.position.x,
      y: this.camera.position.y,
      z: this.camera.position.z,
      rx: this.camera.rotation.x,
      ry: this.camera.rotation.y,
      rz: this.camera.rotation.z,
    };
  }

  takeScreenshot(): void {
    const renderer = this.renderer;
    if (!renderer) return;
    const win = window.open("", "");
    if (!win) return;

    this.renderFrame();

    const image = new Image();
    image.src = renderer.domElement.toDataURL();
    win.document.title = "T3D Explorer Screenshot";
    win.document.body.style.margin = "0";
    win.document.body.style.background = "#111";
    win.document.body.appendChild(image);
  }

  clearMap(): void {
    this.lastBounds = null;
    this.clearMapMeshes();
    if (this.renderer) this.renderer.setClearColor(DEFAULT_CLEAR_COLOR);
  }

  pause(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
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

  private ensureRenderer(): void {
    if (this.renderer) return;
    this.renderer = new THREE.WebGLRenderer({
      antialias: this.antialias,
      logarithmicDepthBuffer: true,
      stencil: false,
      premultipliedAlpha: false,
    });
    this.renderer.sortObjects = false;
    this.renderer.autoClear = false;
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setClearColor(DEFAULT_CLEAR_COLOR);
    this.setController(this.currentController);
  }

  private recreateRenderer(): void {
    const previous = this.renderer;
    if (previous) {
      previous.dispose();
      previous.forceContextLoss();
      previous.domElement.remove();
    }
    this.renderer = null;
    this.ensureRenderer();
    this.attachCanvas();
    this.resize();
  }

  private attachCanvas(): void {
    if (!this.host || !this.renderer) return;
    const canvas = this.renderer.domElement;
    canvas.className = "explorer-canvas";
    if (canvas.parentElement !== this.host) {
      this.host.insertBefore(canvas, this.host.firstChild);
    }
  }

  private addMapMesh(mesh: THREE.Object3D): void {
    this.scene.add(mesh);
    this.mapMeshes.push(mesh);
  }

  private clearMapMeshes(): void {
    for (const mesh of this.mapMeshes) this.scene.remove(mesh);
    this.mapMeshes = [];

    for (const mesh of this.skyMeshes) this.skyScene.remove(mesh);
    this.skyMeshes = [];
  }

  private syncOrbitalTargetFromCamera(): void {
    if (!(this.controls instanceof MapControls)) return;
    const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    this.controls.target.copy(this.camera.position).add(direction.multiplyScalar(1000));
  }

  private resize(): void {
    if (!this.renderer || !this.host) return;
    const width = this.host.clientWidth;
    const height = this.host.clientHeight;
    if (!width || !height) return;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.skyCamera.aspect = width / height;
    this.skyCamera.updateProjectionMatrix();
  }

  private play(): void {
    if (this.rafId) return;
    const loop = (): void => {
      this.updateControls();
      this.renderFrame();
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  private updateControls(): void {
    if (this.controls instanceof FlyControls) {
      this.controls.update(this.clock.getDelta());
    } else {
      this.clock.getDelta();
      this.controls?.update();
    }
  }

  private renderFrame(): void {
    if (!this.renderer) return;
    this.renderer.clear();
    this.skyCamera.quaternion.copy(this.camera.quaternion);
    this.renderer.render(this.skyScene, this.skyCamera);
    this.renderer.render(this.scene, this.camera);
  }
}

function pickFromContext<T>(context: any, rendererName: string, propName: string, defaultValue: T): T {
  const output = context?.[rendererName];
  if (!output) return defaultValue;
  return output[propName] !== undefined ? (output[propName] as T) : defaultValue;
}
