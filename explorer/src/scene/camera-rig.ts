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

  private orbitalControls: MapControls | null = null;
  private pointerControls: PointerLockControls | null = null;
  private controls: MapControls | PointerLockControls | null = null;
  private currentMode: CameraMode = "orbital";
  private readonly orbitalTarget = new THREE.Vector3(0, 0, 0);
  private readonly forwardTmp = new THREE.Vector3();

  get mode(): CameraMode {
    return this.currentMode;
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

    if (mode === "orbital") {
      const controls = new MapControls(this.camera, domElement);
      controls.enableDamping = true;
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
    this.orbitalControls?.target.copy(this.orbitalTarget);
    this.orbitalControls?.update();
  }

  getSnapshot(): CameraSnapshot {
    return {
      mode: this.currentMode,
      position: toVec(this.camera.position),
      rotation: toVec(this.camera.rotation),
      orbitalTarget: this.currentMode === "orbital" ? toVec(this.orbitalTarget) : null,
    };
  }

  /** Apply position/rotation/orbital-target from a snapshot. Mode changes are orchestrated by the scene. */
  applyTransform(transform: {
    position?: Vector3Like | null;
    rotation?: Vector3Like | null;
    orbitalTarget?: Vector3Like | null;
  }): void {
    if (transform.position) {
      this.camera.position.set(transform.position.x, transform.position.y, transform.position.z);
    }
    if (transform.rotation) {
      this.camera.rotation.set(transform.rotation.x, transform.rotation.y, transform.rotation.z);
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
