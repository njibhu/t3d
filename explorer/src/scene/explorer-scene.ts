import * as THREE from "three";
import T3D, { type LocalReader } from "t3d-lib";
import type { CameraMode, CameraSnapshot, LayerKey } from "../types.js";
import { CLEAR_COLOR, DEFAULT_LIGHTING, FOG_LENGTH, type MapBounds } from "./three-utils.js";
import { CameraRig } from "./camera-rig.js";
import { PhysicsController } from "./physics-controller.js";
import { FlyController } from "./fly-controller.js";
import { SceneLighting } from "./scene-lighting.js";
import { MapContent, type MapContentHost } from "./map-content.js";

/**
 * Render orchestrator. Owns the renderer, the two scenes (world + sky), the sky camera,
 * and the animation loop, and composes the focused controllers that own everything else:
 *
 *  - {@link CameraRig}       camera + orbital/first-person controls + mode + snapshots
 *  - {@link FlyController}   first-person input and movement
 *  - {@link PhysicsController} gravity/collision traversal
 *  - {@link SceneLighting}   light rig + shadow fill + terrain shading
 *  - {@link MapContent}      archive/map/layer/environment loading + teardown
 *
 * It implements {@link MapContentHost} so the content loader can reach back for the few
 * camera/renderer/physics touch-points it needs without owning them.
 */
export class ExplorerScene implements MapContentHost {
  readonly scene = new THREE.Scene();
  readonly skyScene = new THREE.Scene();
  readonly lighting: SceneLighting;

  private renderer: THREE.WebGLRenderer | null = null;
  private readonly skyCamera = new THREE.PerspectiveCamera(60, 1, 0.1, 100000);
  private readonly clock = new THREE.Clock();

  private hostElement: HTMLElement | null = null;
  private resizeObserver?: ResizeObserver;
  private rafId = 0;
  private playing = false;
  private antialias = true;
  private fog = 25000;

  private readonly rig = new CameraRig();
  private readonly physics = new PhysicsController();
  private readonly fly: FlyController;
  private readonly content: MapContent;

  private pointerLockChangeHandler?: (locked: boolean) => void;
  private physicsChangeHandler?: (enabled: boolean) => void;
  private cameraModeChangeHandler?: (mode: CameraMode) => void;

  constructor() {
    this.lighting = new SceneLighting(this.scene, () => this.content.getContext());
    this.fly = new FlyController(this.rig.camera, this.physics, (locked) => this.pointerLockChangeHandler?.(locked));
    this.content = new MapContent(this);

    this.scene.fog = new THREE.Fog(CLEAR_COLOR, this.fog, this.fog + FOG_LENGTH);
    this.rig.camera.far = this.fog + FOG_LENGTH;
    this.rig.camera.updateProjectionMatrix();
    this.lighting.refresh([]);
  }

  // --- lifecycle -----------------------------------------------------------

  mount(host: HTMLElement): void {
    this.hostElement = host;
    if (!this.renderer) {
      this.renderer = this.createRenderer();
      this.configureControls(this.rig.mode, true);
    }
    if (this.renderer.domElement.parentElement !== host) {
      host.replaceChildren(this.renderer.domElement);
    }
    this.resize();
    this.resizeObserver?.disconnect();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    this.play();
  }

  dispose(): void {
    this.pause();
    this.resizeObserver?.disconnect();
    this.content.cleanup();
    this.fly.detach();
    this.rig.disposeControls();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
    this.hostElement = null;
  }

  // --- content delegation --------------------------------------------------

  loadBaseMap(reader: LocalReader, mapId: number): Promise<void> {
    return this.content.loadBaseMap(reader, mapId);
  }

  ensureLayerVisible(key: LayerKey): Promise<void> {
    return this.content.ensureLayerVisible(key);
  }

  setLayerVisible(key: LayerKey, visible: boolean): void {
    this.content.setLayerVisible(key, visible);
  }

  setEnvironmentVariant(id: string | null): void {
    this.content.setEnvironmentVariant(id);
  }

  setCollisionOpacity(value: number): void {
    this.content.setCollisionOpacity(value);
  }

  getCurrentMapId(): number | null {
    return this.content.getCurrentMapId();
  }

  getEnvironmentOptions(): Array<{ id: string; label: string }> {
    return this.content.getEnvironmentOptions();
  }

  getActiveEnvironmentId(): string | null {
    return this.content.getActiveEnvironmentId();
  }

  hasCollisionsLoaded(): boolean {
    return this.content.hasCollisionsLoaded();
  }

  // --- camera / mode -------------------------------------------------------

  getCameraMode(): CameraMode {
    return this.rig.mode;
  }

  getCameraSnapshot(): CameraSnapshot {
    return this.rig.getSnapshot();
  }

  isPointerLocked(): boolean {
    return this.rig.isPointerLocked();
  }

  setCameraMode(mode: CameraMode): void {
    if (!this.renderer || this.rig.mode === mode) {
      this.rig.setMode(mode);
      return;
    }
    if (this.rig.mode === "orbital") {
      this.rig.storeFallbackOrbitalTarget();
    }
    this.configureControls(mode, false);
    if (mode === "firstPerson" && this.content.hasCollisionsLoaded()) {
      this.physics.snapToGround(this.rig.camera);
    }
    this.rig.setMode(mode);
    this.cameraModeChangeHandler?.(mode);
    this.pointerLockChangeHandler?.(this.rig.isPointerLocked());
  }

  applySnapshot(snapshot: Partial<CameraSnapshot>): void {
    if (snapshot.mode && snapshot.mode !== this.rig.mode) {
      this.setCameraMode(snapshot.mode);
    }
    this.rig.applyTransform({
      position: snapshot.position,
      rotation: snapshot.rotation,
      orbitalTarget: snapshot.orbitalTarget,
    });
  }

  // --- live settings -------------------------------------------------------

  setFogDistance(value: number): void {
    this.fog = Math.max(0, value);
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.near = this.fog;
      this.scene.fog.far = this.fog + FOG_LENGTH;
    }
    this.rig.camera.far = this.fog + FOG_LENGTH;
    this.rig.camera.updateProjectionMatrix();
  }

  setMovementSpeed(value: number): void {
    this.fly.setMovementSpeed(value);
  }

  setLightIntensity(value: number): void {
    this.lighting.setLightIntensity(value);
  }

  setShadowStrength(value: number): void {
    this.lighting.setShadowStrength(value);
  }

  isPhysicsEnabled(): boolean {
    return this.physics.isEnabled();
  }

  setPhysicsEnabled(value: boolean): boolean {
    const enabled = this.physics.setEnabled(value && this.content.hasCollisionsLoaded(), this.rig.camera.position);
    this.physicsChangeHandler?.(enabled);
    return enabled;
  }

  // --- change handlers -----------------------------------------------------

  setPointerLockChangeHandler(handler: ((locked: boolean) => void) | undefined): void {
    this.pointerLockChangeHandler = handler;
  }

  setPhysicsChangeHandler(handler: ((enabled: boolean) => void) | undefined): void {
    this.physicsChangeHandler = handler;
  }

  setCameraModeChangeHandler(handler: ((mode: CameraMode) => void) | undefined): void {
    this.cameraModeChangeHandler = handler;
  }

  // --- renderer ------------------------------------------------------------

  recreateRenderer(antialias: boolean): void {
    this.antialias = antialias;
    if (!this.hostElement || !this.renderer) {
      return;
    }

    const snapshot = this.rig.getSnapshot();
    const pointerControls = this.rig.getPointerControls();
    if (pointerControls?.isLocked) {
      pointerControls.unlock();
    }

    this.fly.detach();
    this.rig.disposeControls();
    this.renderer.dispose();
    this.renderer.forceContextLoss();

    this.renderer = this.createRenderer();
    this.hostElement.replaceChildren(this.renderer.domElement);
    this.configureControls(snapshot.mode, true);
    this.applySnapshot(snapshot);
    this.resize();
  }

  takeScreenshot(): void {
    if (!this.renderer) return;
    const screenshotWindow = window.open("", "_blank");
    if (!screenshotWindow) return;
    screenshotWindow.document.title = "T3D Explorer Screenshot";
    this.renderer.clear();
    this.skyCamera.quaternion.copy(this.rig.camera.quaternion);
    this.renderer.render(this.skyScene, this.skyCamera);
    this.renderer.render(this.scene, this.rig.camera);
    const image = new Image();
    image.src = this.renderer.domElement.toDataURL();
    screenshotWindow.document.body.appendChild(image);
  }

  // --- MapContentHost ------------------------------------------------------

  frameBounds(bounds: MapBounds): void {
    this.rig.frameBounds(bounds);
    if (this.fog < bounds.y2 * 1.5) {
      this.setFogDistance(bounds.y2 * 2);
    }
  }

  applyEnvironmentColors(clearColor: THREE.Color): void {
    this.renderer?.setClearColor(clearColor);
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.color.copy(clearColor);
    }
  }

  resetEnvironmentColors(): void {
    this.renderer?.setClearColor(CLEAR_COLOR);
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.color.set(CLEAR_COLOR);
    }
  }

  setCollisionMeshes(meshes: THREE.Object3D[]): void {
    this.physics.setCollisionMeshes(meshes);
  }

  onMapWillCleanup(): void {
    const pointerControls = this.rig.getPointerControls();
    if (pointerControls?.isLocked) {
      pointerControls.unlock();
    }
  }

  onMapCleared(): void {
    this.physics.reset();
    this.physicsChangeHandler?.(false);
    this.pointerLockChangeHandler?.(false);
  }

  // --- internals -----------------------------------------------------------

  private configureControls(mode: CameraMode, initialMount: boolean): void {
    if (!this.renderer) return;
    this.fly.detach();
    this.rig.setupControls(mode, this.renderer.domElement, initialMount);
    if (mode === "firstPerson") {
      const pointerControls = this.rig.getPointerControls();
      if (pointerControls) {
        this.fly.attach(this.renderer.domElement, pointerControls);
      }
    }
  }

  private createRenderer(): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({
      antialias: this.antialias,
      logarithmicDepthBuffer: true,
      stencil: false,
      premultipliedAlpha: false,
    });
    renderer.sortObjects = false;
    renderer.autoClear = false;
    T3D.LightingUtils.applyRendererColorManagement(renderer, { exposure: DEFAULT_LIGHTING.exposure });
    renderer.setClearColor(CLEAR_COLOR);
    return renderer;
  }

  private play(): void {
    if (this.playing) return;
    this.playing = true;
    const loop = (): void => {
      if (!this.playing || !this.renderer) return;
      const delta = this.clock.getDelta();
      if (this.rig.mode === "firstPerson") {
        const autoDisabled = this.fly.update(delta, this.rig.getPointerControls());
        if (autoDisabled) {
          this.physicsChangeHandler?.(false);
        }
      } else {
        this.rig.updateOrbital();
      }
      this.renderer.clear();
      this.skyCamera.quaternion.copy(this.rig.camera.quaternion);
      this.renderer.render(this.skyScene, this.skyCamera);
      this.renderer.render(this.scene, this.rig.camera);
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  private pause(): void {
    this.playing = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.rafId = 0;
  }

  private resize(): void {
    if (!this.renderer || !this.hostElement) return;
    const width = this.hostElement.clientWidth;
    const height = this.hostElement.clientHeight;
    if (!width || !height) return;
    this.renderer.setSize(width, height, false);
    this.rig.camera.aspect = width / height;
    this.rig.camera.updateProjectionMatrix();
    this.skyCamera.aspect = width / height;
    this.skyCamera.updateProjectionMatrix();
  }
}
