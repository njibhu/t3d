import * as THREE from "three";

type ResourceSet<T> = Set<T>;

type RenderContextResources = {
  geometries: ResourceSet<THREE.BufferGeometry>;
  materials: ResourceSet<THREE.Material>;
  textures: ResourceSet<THREE.Texture>;
  disposed: boolean;
};

const RESOURCE_KEY = "__t3dResources";

function isTexture(value: unknown): value is THREE.Texture {
  return !!value && typeof value === "object" && (value as THREE.Texture).isTexture === true;
}

function isMaterial(value: unknown): value is THREE.Material {
  return !!value && typeof value === "object" && (value as THREE.Material).isMaterial === true;
}

export function ensureRenderContextResources(context: any): RenderContextResources {
  if (!context[RESOURCE_KEY]) {
    context[RESOURCE_KEY] = {
      geometries: new Set(),
      materials: new Set(),
      textures: new Set(),
      disposed: false,
    } satisfies RenderContextResources;
  }

  return context[RESOURCE_KEY] as RenderContextResources;
}

export function trackGeometry(context: any, geometry?: THREE.BufferGeometry | null): void {
  if (!geometry) return;
  ensureRenderContextResources(context).geometries.add(geometry);
}

export function trackTexture(context: any, texture?: THREE.Texture | null): void {
  if (!texture) return;
  ensureRenderContextResources(context).textures.add(texture);
}

export function trackMaterial(context: any, material?: THREE.Material | null): void {
  if (!material) return;

  const resources = ensureRenderContextResources(context);
  if (resources.materials.has(material)) return;

  resources.materials.add(material);

  for (const value of Object.values(material)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        if (isTexture(item)) trackTexture(context, item);
      }
      continue;
    }

    if (isTexture(value)) {
      trackTexture(context, value);
    }
  }
}

export function trackMaterialCollection(
  context: any,
  material?: THREE.Material | THREE.Material[] | null
): void {
  if (!material) return;

  if (Array.isArray(material)) {
    for (const item of material) {
      trackMaterial(context, item);
    }
    return;
  }

  trackMaterial(context, material);
}

export function trackObject3DResources(context: any, object?: THREE.Object3D | null): void {
  if (!object) return;

  object.traverse((entry) => {
    const mesh = entry as THREE.Mesh;
    if (mesh.geometry && mesh.geometry.isBufferGeometry === true) {
      trackGeometry(context, mesh.geometry);
    }
    if ("material" in mesh) {
      trackMaterialCollection(context, mesh.material as THREE.Material | THREE.Material[] | null);
    }
  });
}

export function disposeRenderContextResources(context: any): void {
  const resources = ensureRenderContextResources(context);
  if (resources.disposed) return;

  resources.disposed = true;

  for (const geometry of resources.geometries) {
    geometry.dispose();
  }
  for (const material of resources.materials) {
    material.dispose();
  }
  for (const texture of resources.textures) {
    texture.dispose();
  }
}

export function isTrackedMaterialCompatible(material: unknown): material is THREE.Material {
  return isMaterial(material);
}
