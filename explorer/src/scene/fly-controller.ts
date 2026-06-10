import * as THREE from "three";
import type { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { isEditableTarget } from "./three-utils.js";
import type { PhysicsController } from "./physics-controller.js";

interface PointerHandlers {
  controls: PointerLockControls;
  domElement: HTMLCanvasElement;
  onCanvasClick: () => void;
  onKeyDown: (event: KeyboardEvent) => void;
  onKeyUp: (event: KeyboardEvent) => void;
  onWheel: (event: WheelEvent) => void;
  onLock: () => void;
  onUnlock: () => void;
}

/** Movement-speed bounds for wheel adjustment, matching the settings slider. */
const SPEED_MIN = 500;
const SPEED_MAX = 10000;
const SPEED_WHEEL_STEP = 500;

/**
 * First-person navigation: keyboard + pointer-lock input and the per-frame movement step.
 * When physics is enabled it computes the desired ground-plane movement and defers to the
 * {@link PhysicsController}; otherwise it free-flies the camera. Active only while the
 * scene is in first-person mode (the scene attaches/detaches it on mode changes).
 */
export class FlyController {
  private movementSpeed = 10000;
  private handlers?: PointerHandlers;

  private readonly move = { forward: false, backward: false, left: false, right: false, up: false, down: false };
  private readonly worldUp = new THREE.Vector3(0, 1, 0);
  private readonly forwardVec = new THREE.Vector3();
  private readonly rightVec = new THREE.Vector3();
  private readonly moveDelta = new THREE.Vector3();

  constructor(
    private readonly camera: THREE.PerspectiveCamera,
    private readonly physics: PhysicsController,
    private readonly onPointerLockChange: (locked: boolean) => void,
    private readonly onMovementSpeedChange: (value: number) => void
  ) {}

  setMovementSpeed(value: number): void {
    this.movementSpeed = Math.max(100, value);
  }

  getMovementSpeed(): number {
    return this.movementSpeed;
  }

  attach(domElement: HTMLCanvasElement, controls: PointerLockControls): void {
    this.detach();

    const onCanvasClick = (): void => {
      if (controls.isLocked) return;
      controls.lock();
    };
    const onLock = (): void => this.onPointerLockChange(true);
    const onUnlock = (): void => {
      this.clearInput();
      this.physics.clearMotion();
      this.onPointerLockChange(false);
    };
    const onKeyDown = (event: KeyboardEvent): void => {
      if (isEditableTarget(event.target)) return;
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          this.move.forward = true;
          break;
        case "KeyS":
        case "ArrowDown":
          this.move.backward = true;
          break;
        case "KeyA":
        case "ArrowLeft":
          this.move.left = true;
          break;
        case "KeyD":
        case "ArrowRight":
          this.move.right = true;
          break;
        case "Space":
          if (this.physics.isEnabled()) {
            if (!event.repeat) {
              this.physics.requestJump();
            }
          } else {
            this.move.up = true;
          }
          event.preventDefault();
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.move.down = true;
          break;
      }
    };
    const onKeyUp = (event: KeyboardEvent): void => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          this.move.forward = false;
          break;
        case "KeyS":
        case "ArrowDown":
          this.move.backward = false;
          break;
        case "KeyA":
        case "ArrowLeft":
          this.move.left = false;
          break;
        case "KeyD":
        case "ArrowRight":
          this.move.right = false;
          break;
        case "Space":
          this.move.up = false;
          this.physics.cancelJump();
          event.preventDefault();
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.move.down = false;
          break;
      }
    };

    // While the pointer is locked the cursor can't reach the settings slider, so map the
    // wheel to movement speed here and report the change back so the slider/URL stay in sync.
    const onWheel = (event: WheelEvent): void => {
      if (!controls.isLocked) return;
      event.preventDefault();
      const direction = event.deltaY < 0 ? 1 : -1;
      const stepped = Math.round((this.movementSpeed + direction * SPEED_WHEEL_STEP) / 100) * 100;
      const next = Math.min(SPEED_MAX, Math.max(SPEED_MIN, stepped));
      if (next === this.movementSpeed) return;
      this.movementSpeed = next;
      this.onMovementSpeedChange(next);
    };

    domElement.addEventListener("click", onCanvasClick);
    domElement.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    controls.addEventListener("lock", onLock);
    controls.addEventListener("unlock", onUnlock);
    this.handlers = { controls, domElement, onCanvasClick, onKeyDown, onKeyUp, onWheel, onLock, onUnlock };
  }

  detach(): void {
    if (!this.handlers) return;
    const { controls, domElement, onCanvasClick, onKeyDown, onKeyUp, onWheel, onLock, onUnlock } = this.handlers;
    domElement.removeEventListener("click", onCanvasClick);
    domElement.removeEventListener("wheel", onWheel);
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    controls.removeEventListener("lock", onLock);
    controls.removeEventListener("unlock", onUnlock);
    this.handlers = undefined;
  }

  /** Advance first-person movement. Returns true if physics auto-disabled itself this frame. */
  update(delta: number, controls: PointerLockControls | null): boolean {
    if (!controls?.isLocked) return false;

    if (this.physics.isEnabled()) {
      this.moveDelta.set(0, 0, 0);
      controls.getDirection(this.forwardVec);
      this.forwardVec.y = 0;
      if (this.forwardVec.lengthSq() > 0) {
        this.forwardVec.normalize();
        this.rightVec.crossVectors(this.forwardVec, this.worldUp).normalize();
        if (this.move.forward) this.moveDelta.add(this.forwardVec);
        if (this.move.backward) this.moveDelta.sub(this.forwardVec);
        if (this.move.right) this.moveDelta.add(this.rightVec);
        if (this.move.left) this.moveDelta.sub(this.rightVec);
      }
      if (this.moveDelta.lengthSq() > 0) {
        this.moveDelta.normalize().multiplyScalar(this.movementSpeed * delta);
      }
      return this.physics.step(this.camera.position, this.moveDelta, delta);
    }

    const distance = this.movementSpeed * delta;
    if (this.move.forward) controls.moveForward(distance);
    if (this.move.backward) controls.moveForward(-distance);
    if (this.move.left) controls.moveRight(-distance);
    if (this.move.right) controls.moveRight(distance);
    if (this.move.up) this.camera.position.y += distance;
    if (this.move.down) this.camera.position.y -= distance;
    return false;
  }

  private clearInput(): void {
    this.move.forward = false;
    this.move.backward = false;
    this.move.left = false;
    this.move.right = false;
    this.move.up = false;
    this.move.down = false;
  }
}
