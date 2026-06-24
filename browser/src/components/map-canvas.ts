import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import T3D from "t3d-lib";
import { MapInspectSelection, readInspectMetadata } from "../views/map-inspector";

const FOG_LENGTH = 5000;
const CLEAR_COLOR = T3D.LightingUtils.DEFAULT_CANVAS_CLEAR_COLOR;
const DEFAULT_LIGHTING = T3D.LightingUtils.DEFAULT_LIGHTING_PROFILE;
const PICK_DRAG_THRESHOLD_PX = 4;
const HIGHLIGHT_COLOR = 0xd49a3a;

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
  private sceneLights: THREE.Light[] = [];
  private currentMapContext: any = null;
  private inspectTargets: THREE.Object3D[] = [];
  private inspectEnabled = false;
  private onSelectionChange: ((selection: MapInspectSelection | null) => void) | null = null;
  private selectionHelper: THREE.Box3Helper | null = null;
  private pointerDown: { x: number; y: number } | null = null;
  private pointerMoved = false;

  private fog = 25000;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointerNdc = new THREE.Vector2();
  private readonly tempMatrix = new THREE.Matrix4();
  private readonly tempPosition = new THREE.Vector3();
  private readonly tempQuaternion = new THREE.Quaternion();
  private readonly tempScale = new THREE.Vector3();
  private readonly tempEuler = new THREE.Euler();
  private readonly tempBox = new THREE.Box3();

  constructor() {
    this.scene = new THREE.Scene();
    this.skyScene = new THREE.Scene();

    this.scene.fog = new THREE.Fog(CLEAR_COLOR, this.fog, this.fog + FOG_LENGTH);
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, this.fog + FOG_LENGTH);
    this.skyCamera = new THREE.PerspectiveCamera(60, 1, 0.1, 100000);
    this.refreshSceneLights([]);
  }

  mount(host: HTMLElement): void {
    if (this.host === host && this.renderer) {
      this.play();
      return;
    }
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
      T3D.LightingUtils.applyRendererColorManagement(this.renderer, {
        exposure: DEFAULT_LIGHTING.exposure,
      });
      this.renderer.setClearColor(CLEAR_COLOR);
      this.controls = new MapControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.renderer.domElement.addEventListener("pointerdown", this.handlePointerDown);
      this.renderer.domElement.addEventListener("pointermove", this.handlePointerMove);
      this.renderer.domElement.addEventListener("pointerup", this.handlePointerUp);
      this.renderer.domElement.addEventListener("pointerleave", this.handlePointerLeave);
      this.renderer.domElement.addEventListener("pointercancel", this.handlePointerLeave);
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

  pause(): void {
    this.playing = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
  }

  setInspectEnabled(enabled: boolean): void {
    this.inspectEnabled = enabled;
    if (!enabled) {
      this.clearSelection();
    }
  }

  setOnSelectionChange(fn: ((selection: MapInspectSelection | null) => void) | null): void {
    this.onSelectionChange = fn;
  }

  clearSelection(): void {
    this.pointerDown = null;
    this.pointerMoved = false;
    this.removeSelectionHelper();
    this.onSelectionChange?.(null);
  }

  applyMapContext(context: any, opts: { zone: boolean; props: boolean; collisions: boolean }): void {
    this.clearSelection();
    this.clearMapMeshes();
    this.inspectTargets = [];
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

    const hazeBgr = pickFromContext<number[] | null>(context, "EnvironmentRenderer", "hazeColor", null);
    const clearColor = new THREE.Color(CLEAR_COLOR);
    if (hazeBgr && this.renderer) {
      clearColor.setRGB(hazeBgr[2] / 255, hazeBgr[1] / 255, hazeBgr[0] / 255);
    }

    if (this.renderer) {
      this.renderer.setClearColor(clearColor);
    }
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.color.copy(clearColor);
    }

    const envLights = pickFromContext<THREE.Light[]>(context, "EnvironmentRenderer", "lights", []);
    this.refreshSceneLights(envLights);
    T3D.LightingUtils.applyTerrainSunDirection(terrainTiles, this.sceneLights);

    if (opts.zone)
      for (const m of pickFromContext<THREE.Object3D[]>(context, "ZoneRenderer", "meshes", [])) this.addMapMesh(m);
    if (opts.props)
      for (const m of pickFromContext<THREE.Object3D[]>(context, "PropertiesRenderer", "meshes", []))
        this.addMapMesh(m);
    if (opts.collisions)
      for (const m of pickFromContext<THREE.Object3D[]>(context, "HavokRenderer", "meshes", [])) this.addMapMesh(m);

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
    this.removeSelectionHelper();
  }

  private addMapMesh(m: THREE.Object3D): void {
    this.scene.add(m);
    this.mapMeshes.push(m);
    if (readInspectMetadata(m)) {
      this.inspectTargets.push(m);
    }
  }

  private removeSelectionHelper(): void {
    if (!this.selectionHelper) return;
    this.scene.remove(this.selectionHelper);
    this.selectionHelper.geometry.dispose();
    (this.selectionHelper.material as THREE.Material).dispose();
    this.selectionHelper = null;
  }

  private updateSelectionHelper(selection: MapInspectSelection | null): void {
    this.removeSelectionHelper();
    if (!selection) return;
    const box = this.getSelectionBox(selection);
    if (box.isEmpty()) return;
    this.selectionHelper = new THREE.Box3Helper(box, HIGHLIGHT_COLOR);
    this.scene.add(this.selectionHelper);
  }

  private getSelectionBox(selection: MapInspectSelection): THREE.Box3 {
    const object = selection.object;
    const box = this.tempBox.makeEmpty();
    if (object instanceof THREE.InstancedMesh && selection.instanceId !== null) {
      object.geometry.computeBoundingBox();
      const geometryBox = object.geometry.boundingBox;
      if (!geometryBox) return box;
      object.getMatrixAt(selection.instanceId, this.tempMatrix);
      this.tempMatrix.premultiply(object.matrixWorld);
      return box.copy(geometryBox).applyMatrix4(this.tempMatrix);
    }
    return box.setFromObject(object);
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

  private refreshSceneLights(environmentLights: THREE.Light[]): void {
    for (const light of this.sceneLights) {
      this.scene.remove(light);
    }

    const nextLights =
      environmentLights.length > 0
        ? T3D.LightingUtils.cloneLights(environmentLights)
        : T3D.LightingUtils.createFallbackLightRig({ directionalIntensity: DEFAULT_LIGHTING.directionalIntensity });

    this.sceneLights = nextLights;
    this.sceneLights.forEach((light) => this.scene.add(light));
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

  private readonly handlePointerDown = (event: PointerEvent): void => {
    this.pointerDown = { x: event.clientX, y: event.clientY };
    this.pointerMoved = false;
  };

  private readonly handlePointerMove = (event: PointerEvent): void => {
    if (!this.pointerDown) return;
    const deltaX = event.clientX - this.pointerDown.x;
    const deltaY = event.clientY - this.pointerDown.y;
    if (Math.abs(deltaX) > PICK_DRAG_THRESHOLD_PX || Math.abs(deltaY) > PICK_DRAG_THRESHOLD_PX) {
      this.pointerMoved = true;
    }
  };

  private readonly handlePointerLeave = (): void => {
    this.pointerDown = null;
    this.pointerMoved = false;
  };

  private readonly handlePointerUp = (event: PointerEvent): void => {
    if (!this.inspectEnabled || !this.renderer || !this.pointerDown || this.pointerMoved) {
      this.pointerDown = null;
      this.pointerMoved = false;
      return;
    }

    const selection = this.pickSelection(event);
    this.pointerDown = null;
    this.pointerMoved = false;
    this.updateSelectionHelper(selection);
    this.onSelectionChange?.(selection);
  };

  private pickSelection(event: PointerEvent): MapInspectSelection | null {
    if (!this.renderer || this.inspectTargets.length === 0) return null;
    const rect = this.renderer.domElement.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;

    this.pointerNdc.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);

    const intersections = this.raycaster.intersectObjects(this.inspectTargets, false);
    for (const intersection of intersections) {
      const target = this.resolveInspectableTarget(intersection.object);
      const metadata = target ? readInspectMetadata(target) : null;
      if (!target || !metadata) continue;

      const instanceId =
        target instanceof THREE.InstancedMesh && typeof intersection.instanceId === "number" ? intersection.instanceId : null;
      const instanceCount = target instanceof THREE.InstancedMesh ? target.count : 1;

      if (target instanceof THREE.InstancedMesh && instanceId !== null) {
        target.getMatrixAt(instanceId, this.tempMatrix);
        this.tempMatrix.premultiply(target.matrixWorld);
      } else {
        this.tempMatrix.copy(target.matrixWorld);
      }

      this.tempMatrix.decompose(this.tempPosition, this.tempQuaternion, this.tempScale);
      this.tempEuler.setFromQuaternion(this.tempQuaternion, "YXZ");

      const meshLike = target as THREE.Mesh;
      const geometrySphere = meshLike.geometry?.boundingSphere ?? null;
      const baseRadius = (target as any).boundingSphere?.radius ?? geometrySphere?.radius ?? null;
      const scaleFactor = Math.max(this.tempScale.x, this.tempScale.y, this.tempScale.z);

      return {
        object: target,
        metadata: {
          ...metadata,
          textureRefs: metadata.textureRefs?.map((textureRef) => ({ ...textureRef })),
        },
        instanceId,
        instanceCount,
        position: this.tempPosition.clone(),
        rotation: this.tempEuler.clone(),
        scale: this.tempScale.clone(),
        boundingSphereRadius: baseRadius != null ? baseRadius * scaleFactor : null,
      };
    }

    return null;
  }

  private resolveInspectableTarget(object: THREE.Object3D | null): THREE.Object3D | null {
    let current: THREE.Object3D | null = object;
    while (current) {
      if (readInspectMetadata(current)) return current;
      current = current.parent;
    }
    return null;
  }

  dispose(): void {
    this.pause();
    this.resizeObserver?.disconnect();
    this.clearSelection();
    this.clearMapMeshes();
    if (this.currentMapContext) {
      T3D.disposeEnvironmentResources(this.currentMapContext);
      this.currentMapContext = null;
    }
    this.controls?.dispose();
    if (this.renderer) {
      this.renderer.domElement.removeEventListener("pointerdown", this.handlePointerDown);
      this.renderer.domElement.removeEventListener("pointermove", this.handlePointerMove);
      this.renderer.domElement.removeEventListener("pointerup", this.handlePointerUp);
      this.renderer.domElement.removeEventListener("pointerleave", this.handlePointerLeave);
      this.renderer.domElement.removeEventListener("pointercancel", this.handlePointerLeave);
    }
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
    this.host = null;
  }
}

function pickFromContext<T>(context: any, rendererName: string, propName: string, defaultValue: T): T {
  const out = context?.[rendererName];
  if (!out) return defaultValue;
  return out[propName] !== undefined ? (out[propName] as T) : defaultValue;
}
