import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import type { CameraMode, CameraSnapshot, Vector3Like } from "../types.js";
import { toVec, type MapBounds } from "./three-utils.js";

/**
 * Owns the perspective camera and its two control schemes (orbital MapControls and
 * first-person PointerLockControls), the active camera mode, and the orbital target. It
 * handles control lifecycle and camera transforms; it does not own input handling,
 * physics, or rendering — the scene orchestrates those around it.
 */
export class CameraRig {
  readonly camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100000);
  /** Top-down orthographic camera. Its frustum is sized in {@link frameBounds}/{@link resize}. */
  readonly orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 200000);

  private orbitalControls: MapControls | null = null;
  private pointerControls: PointerLockControls | null = null;
  private controls: MapControls | PointerLockControls | null = null;
  private currentMode: CameraMode = "orbital";
  private readonly orbitalTarget = new THREE.Vector3(0, 0, 0);
  private readonly forwardTmp = new THREE.Vector3();
  /** Half-extent of the ortho frustum at zoom 1, kept so resize can rebuild L/R/T/B from aspect. */
  private orthoFrustumSize = 10000;
  /** Latest viewport aspect, so the ortho frustum can be rebuilt when its size changes. */
  private viewportAspect = 1;
  /** Fixed height the top-down ortho camera hovers above its target. */
  private static readonly ORTHO_HEIGHT = 100000;

  get mode(): CameraMode {
    return this.currentMode;
  }

  /** The camera currently driving rendering: ortho in top-down mode, perspective otherwise. */
  get activeCamera(): THREE.Camera {
    return this.currentMode === "topDown" ? this.orthoCamera : this.camera;
  }

  setMode(mode: CameraMode): void {
    this.currentMode = mode;
  }

  getPointerControls(): PointerLockControls | null {
    return this.pointerControls;
  }

  /** (Re)create the controls for the given mode. Pointer-lock input is attached separately. */
  setupControls(mode: CameraMode, domElement: HTMLCanvasElement, initialMount: boolean): void {
    const active = this.controls as { dispose?: () => void; unlock?: () => void; isLocked?: boolean } | null;
    if (active?.dispose) {
      if (active.unlock && active.isLocked) {
        active.unlock();
      }
      active.dispose();
    }

    if (mode === "orbital" || mode === "topDown") {
      const camera = mode === "topDown" ? this.orthoCamera : this.camera;
      if (mode === "topDown") {
        // Park the ortho camera straight above the (possibly panned) target so the
        // control's derived offset stays vertical — i.e. a true top-down view.
        this.orthoCamera.position.set(this.orbitalTarget.x, CameraRig.ORTHO_HEIGHT, this.orbitalTarget.z);
        this.orthoCamera.up.set(0, 0, -1);
        this.orthoCamera.lookAt(this.orbitalTarget);
      }
      const controls = new MapControls(camera, domElement);
      controls.enableDamping = true;
      controls.enableRotate = mode !== "topDown";
      // The straight-down view's screen plane IS the ground plane, so pan in screen space.
      // MapControls' default ground-pan math derives its vertical axis from `camera.up`,
      // which our (0,0,-1) up vector turns into a world-Y slide — sending the camera flying.
      controls.screenSpacePanning = mode === "topDown";
      controls.target.copy(this.orbitalTarget);
      if (!initialMount) controls.update();
      this.orbitalControls = controls;
      this.pointerControls = null;
      this.controls = controls;
    } else {
      const controls = new PointerLockControls(this.camera, domElement);
      this.pointerControls = controls;
      this.orbitalControls = null;
      this.controls = controls;
    }
  }

  disposeControls(): void {
    this.orbitalControls?.dispose();
    (this.pointerControls as { disconnect?: () => void } | null)?.disconnect?.();
    this.pointerControls?.dispose();
  }

  /** Per-frame update while in orbital mode. */
  updateOrbital(): void {
    this.orbitalControls?.update();
    this.orbitalTarget.copy(this.orbitalControls?.target ?? this.orbitalTarget);
  }

  isPointerLocked(): boolean {
    return this.currentMode === "firstPerson" && !!this.pointerControls?.isLocked;
  }

  /** Position the camera to frame a freshly loaded map's bounds. */
  frameBounds(bounds: MapBounds): void {
    this.camera.position.set(bounds.x2 * 0.12, Math.max(bounds.y2, 7000), bounds.y2 * 0.42);
    this.orbitalTarget.set(0, 0, 0);
    this.camera.lookAt(this.orbitalTarget);

    // Frame the top-down ortho camera: hover high above the target looking straight down,
    // with +up pointing "north" (-Z) so the view orientation is well defined.
    this.orthoFrustumSize = Math.max(bounds.x2 - bounds.x1, bounds.y2 - bounds.y1) / 2 || this.orthoFrustumSize;
    this.orthoCamera.position.set(this.orbitalTarget.x, CameraRig.ORTHO_HEIGHT, this.orbitalTarget.z);
    this.orthoCamera.up.set(0, 0, -1);
    this.orthoCamera.lookAt(this.orbitalTarget);
    this.orthoCamera.zoom = 1;
    this.applyOrthoFrustum();

    this.orbitalControls?.target.copy(this.orbitalTarget);
    this.orbitalControls?.update();
  }

  /** Update both cameras' projection for a new viewport aspect ratio. */
  resize(aspect: number): void {
    this.viewportAspect = aspect;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    this.applyOrthoFrustum();
  }

  private applyOrthoFrustum(): void {
    const halfH = this.orthoFrustumSize;
    const halfW = halfH * this.viewportAspect;
    this.orthoCamera.left = -halfW;
    this.orthoCamera.right = halfW;
    this.orthoCamera.top = halfH;
    this.orthoCamera.bottom = -halfH;
    this.orthoCamera.updateProjectionMatrix();
  }

  getSnapshot(): CameraSnapshot {
    const topDown = this.currentMode === "topDown";
    const camera = topDown ? this.orthoCamera : this.camera;
    return {
      mode: this.currentMode,
      position: toVec(camera.position),
      rotation: toVec(camera.rotation),
      orbitalTarget: this.currentMode === "firstPerson" ? null : toVec(this.orbitalTarget),
      zoom: topDown ? this.orthoCamera.zoom : null,
    };
  }

  /** Apply position/rotation/orbital-target from a snapshot. Mode changes are orchestrated by the scene. */
  applyTransform(transform: {
    position?: Vector3Like | null;
    rotation?: Vector3Like | null;
    orbitalTarget?: Vector3Like | null;
    zoom?: number | null;
  }): void {
    // A top-down view is fully described by its pan target + zoom; the saved position/rotation
    // are redundant and, if even slightly non-vertical, would make MapControls.update() restore
    // a tilted angle. So re-derive a strictly straight-down pose instead of trusting them.
    if (this.currentMode === "topDown") {
      if (transform.orbitalTarget) {
        this.orbitalTarget.set(transform.orbitalTarget.x, transform.orbitalTarget.y, transform.orbitalTarget.z);
      }
      if (transform.zoom != null) {
        this.orthoCamera.zoom = transform.zoom;
      }
      this.orthoCamera.position.set(this.orbitalTarget.x, CameraRig.ORTHO_HEIGHT, this.orbitalTarget.z);
      this.orthoCamera.up.set(0, 0, -1);
      this.orthoCamera.lookAt(this.orbitalTarget);
      this.orthoCamera.updateProjectionMatrix();
      this.orbitalControls?.target.copy(this.orbitalTarget);
      this.orbitalControls?.update();
      return;
    }

    const camera = this.activeCamera;
    if (transform.position) {
      camera.position.set(transform.position.x, transform.position.y, transform.position.z);
    }
    if (transform.rotation) {
      camera.rotation.set(transform.rotation.x, transform.rotation.y, transform.rotation.z);
    }
    if (transform.orbitalTarget && this.orbitalControls) {
      this.orbitalTarget.set(transform.orbitalTarget.x, transform.orbitalTarget.y, transform.orbitalTarget.z);
      this.orbitalControls.target.copy(this.orbitalTarget);
      this.orbitalControls.update();
    }
  }

  /** Capture a sensible orbital target before leaving orbital mode. */
  storeFallbackOrbitalTarget(): void {
    if (this.orbitalControls) {
      this.orbitalTarget.copy(this.orbitalControls.target);
      return;
    }
    this.camera.getWorldDirection(this.forwardTmp);
    this.orbitalTarget.copy(this.camera.position).add(this.forwardTmp.multiplyScalar(500));
  }
}
