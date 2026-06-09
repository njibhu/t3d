import * as THREE from "three";
import type { Object3D } from "three";

/**
 * First-person traversal physics: gravity, jumping, collision raycasting against the
 * loaded collision meshes, ground snapping, and fall-through recovery. It owns all
 * physics state and operates on a camera position vector passed in by the caller; it
 * holds no references to rendering, controls, or input.
 */
export class PhysicsController {
  private readonly gravityAcceleration = 2800;
  private readonly jumpVelocity = 900;
  private readonly playerHeight = 120;
  private readonly collisionPadding = 18;
  private readonly groundSnapDistance = 6;
  private readonly maxFallDistance = 8000;
  private readonly collisionProbeHeights = [0, -60, -108];

  private collisionMeshes: Object3D[] = [];
  private enabled = false;
  private verticalVelocity = 0;
  private grounded = false;
  private jumpRequested = false;
  private hasSafeGroundPosition = false;
  private hasFallbackPosition = false;

  private readonly raycaster = new THREE.Raycaster();
  private readonly down = new THREE.Vector3(0, -1, 0);
  private readonly candidatePos = new THREE.Vector3();
  private readonly probeDir = new THREE.Vector3();
  private readonly probeOrigin = new THREE.Vector3();
  private readonly slideDeltaX = new THREE.Vector3();
  private readonly slideDeltaZ = new THREE.Vector3();
  private readonly snapForward = new THREE.Vector3();
  private readonly lastSafeGroundPosition = new THREE.Vector3();
  private readonly fallbackPosition = new THREE.Vector3();

  setCollisionMeshes(meshes: Object3D[]): void {
    this.collisionMeshes = meshes;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  /** Apply an enabled state (already gated on collisions being available) and reset motion. */
  setEnabled(enabled: boolean, position: THREE.Vector3): boolean {
    this.enabled = enabled;
    this.verticalVelocity = 0;
    this.grounded = false;
    this.jumpRequested = false;
    if (enabled) {
      this.fallbackPosition.copy(position);
      this.hasFallbackPosition = true;
    }
    return this.enabled;
  }

  /** Forget all loaded state (called when the map is torn down). */
  reset(): void {
    this.collisionMeshes = [];
    this.enabled = false;
    this.verticalVelocity = 0;
    this.grounded = false;
    this.jumpRequested = false;
    this.hasSafeGroundPosition = false;
    this.hasFallbackPosition = false;
  }

  requestJump(): void {
    this.jumpRequested = true;
  }

  cancelJump(): void {
    this.jumpRequested = false;
  }

  /** Clear transient input/motion (e.g. when pointer lock is released). */
  clearMotion(): void {
    this.jumpRequested = false;
    this.grounded = false;
  }

  /**
   * Advance the physics one frame, mutating `position` in place. `horizontalDelta` is the
   * desired (already speed-scaled) ground-plane movement. Returns true if the controller
   * disabled itself after an unrecoverable fall, so the caller can notify listeners.
   */
  step(position: THREE.Vector3, horizontalDelta: THREE.Vector3, delta: number): boolean {
    if (horizontalDelta.lengthSq() > 0) {
      this.moveWithCollision(horizontalDelta, position);
    }

    this.grounded = this.syncGroundState(position);
    if (this.jumpRequested && this.grounded) {
      this.verticalVelocity = this.jumpVelocity;
      this.grounded = false;
    }
    this.jumpRequested = false;

    this.verticalVelocity -= this.gravityAcceleration * delta;
    position.y += this.verticalVelocity * delta;
    this.grounded = this.syncGroundState(position);
    return this.applyFallSafety(position);
  }

  /** Drop the camera onto the ground beneath it when entering first-person on a collision map. */
  snapToGround(camera: THREE.PerspectiveCamera): void {
    if (!this.collisionMeshes.length) return;
    this.snapForward.set(0, 0, 0);
    camera.getWorldDirection(this.snapForward);
    this.snapForward.y = 0;
    if (this.snapForward.lengthSq() === 0) {
      this.snapForward.set(0, 0, -1);
    } else {
      this.snapForward.normalize();
    }

    this.probeOrigin.set(camera.position.x, camera.position.y + 100000, camera.position.z);
    this.raycaster.set(this.probeOrigin, this.down);
    this.raycaster.far = 200000;

    const hit = this.raycaster.intersectObjects(this.collisionMeshes, true)[0];
    if (!hit) return;

    camera.position.y = hit.point.y + this.playerHeight;
    this.candidatePos.copy(camera.position).add(this.snapForward);
    camera.lookAt(this.candidatePos);
    this.verticalVelocity = 0;
    this.grounded = true;
    this.lastSafeGroundPosition.copy(camera.position);
    this.hasSafeGroundPosition = true;
    this.fallbackPosition.copy(camera.position);
    this.hasFallbackPosition = true;
  }

  private moveWithCollision(delta: THREE.Vector3, position: THREE.Vector3): void {
    this.candidatePos.copy(position).add(delta);
    if (this.canOccupyPosition(this.candidatePos, position)) {
      position.copy(this.candidatePos);
      return;
    }
    if (delta.x !== 0) {
      this.slideDeltaX.set(delta.x, 0, 0);
      this.candidatePos.copy(position).add(this.slideDeltaX);
      if (this.canOccupyPosition(this.candidatePos, position)) {
        position.copy(this.candidatePos);
      }
    }
    if (delta.z !== 0) {
      this.slideDeltaZ.set(0, 0, delta.z);
      this.candidatePos.copy(position).add(this.slideDeltaZ);
      if (this.canOccupyPosition(this.candidatePos, position)) {
        position.copy(this.candidatePos);
      }
    }
  }

  private canOccupyPosition(candidate: THREE.Vector3, fromPosition: THREE.Vector3): boolean {
    if (!this.collisionMeshes.length) return true;
    this.probeDir.copy(candidate).sub(fromPosition);
    const distance = this.probeDir.length();
    if (distance <= 0) return true;
    this.probeDir.divideScalar(distance);

    for (const offsetY of this.collisionProbeHeights) {
      this.probeOrigin.set(fromPosition.x, fromPosition.y + offsetY, fromPosition.z);
      this.raycaster.set(this.probeOrigin, this.probeDir);
      this.raycaster.far = distance + this.collisionPadding;
      const hit = this.raycaster.intersectObjects(this.collisionMeshes, true)[0];
      if (hit) return false;
    }

    return true;
  }

  private syncGroundState(position: THREE.Vector3): boolean {
    const groundY = this.findGroundY(position);
    if (groundY === null) return false;

    const minY = groundY + this.playerHeight;
    const gap = position.y - minY;
    if (gap <= this.groundSnapDistance) {
      if (position.y < minY) {
        position.y = minY;
      }
      if (this.verticalVelocity < 0) {
        this.verticalVelocity = 0;
      }
      this.lastSafeGroundPosition.copy(position);
      this.hasSafeGroundPosition = true;
      return true;
    }
    return false;
  }

  private findGroundY(position: THREE.Vector3): number | null {
    if (!this.collisionMeshes.length) return null;
    this.probeOrigin.set(position.x, position.y + this.playerHeight, position.z);
    this.raycaster.set(this.probeOrigin, this.down);
    this.raycaster.far = this.playerHeight * 3;
    const hit = this.raycaster.intersectObjects(this.collisionMeshes, true)[0];
    return hit ? hit.point.y : null;
  }

  private applyFallSafety(position: THREE.Vector3): boolean {
    if (!this.enabled || this.grounded) return false;

    let lowestAllowed = -Infinity;
    if (this.hasSafeGroundPosition) {
      lowestAllowed = Math.max(lowestAllowed, this.lastSafeGroundPosition.y - this.maxFallDistance);
    }
    if (this.hasFallbackPosition) {
      lowestAllowed = Math.max(lowestAllowed, this.fallbackPosition.y - this.maxFallDistance);
    }
    if (position.y >= lowestAllowed) return false;

    if (this.hasSafeGroundPosition) {
      position.copy(this.lastSafeGroundPosition);
    } else if (this.hasFallbackPosition) {
      position.copy(this.fallbackPosition);
    } else {
      position.y = 0;
    }
    this.verticalVelocity = 0;
    this.jumpRequested = false;
    this.grounded = this.syncGroundState(position);
    if (!this.grounded) {
      this.enabled = false;
      return true;
    }
    return false;
  }
}
