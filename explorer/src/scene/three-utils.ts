import type * as THREE from "three";
import T3D from "t3d-lib";
import type { BufferGeometry, Material, Object3D, Texture } from "three";
import type { Vector3Like } from "../types.js";

export const FOG_LENGTH = 5000;
export const CLEAR_COLOR = T3D.LightingUtils.DEFAULT_CANVAS_CLEAR_COLOR;
export const DEFAULT_LIGHTING = T3D.LightingUtils.DEFAULT_LIGHTING_PROFILE;

export interface MapBounds {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export function toVec(vector: THREE.Vector3 | THREE.Euler): Vector3Like {
  return { x: vector.x, y: vector.y, z: vector.z };
}

export function isEditableTarget(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || target.closest("input, textarea, select, button, [contenteditable='true']") !== null)
  );
}

/** Read the material(s) off an object without unsafe `any` access. */
export function materialsOf(object: Object3D): Material[] {
  const candidate = (object as THREE.Mesh).material as Material | Material[] | undefined;
  if (!candidate) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}

export function disposeObjectTree(object: Object3D): void {
  const geometries = new Set<BufferGeometry>();
  const materials = new Set<Material>();
  const textures = new Set<Texture>();

  object.traverse((node) => {
    const mesh = node as THREE.Mesh;
    if (mesh.geometry && "dispose" in mesh.geometry) {
      geometries.add(mesh.geometry);
    }
    const material = mesh.material;
    const materialList = Array.isArray(material) ? material : material ? [material] : [];
    for (const entry of materialList) {
      materials.add(entry);
      collectTextures(entry, textures);
    }
  });

  for (const texture of textures) texture.dispose();
  for (const material of materials) material.dispose();
  for (const geometry of geometries) geometry.dispose();
}

function collectTextures(material: Material, textures: Set<Texture>): void {
  for (const value of Object.values(material as unknown as Record<string, unknown>)) {
    if (value && typeof value === "object" && "isTexture" in value && (value as Texture).isTexture) {
      textures.add(value as Texture);
    }
  }
}
