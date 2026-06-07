import * as THREE from "three";
import type { Light, Object3D, Scene, WebGLRenderer } from "three";

export const DEFAULT_CANVAS_CLEAR_COLOR = 0x342920;

export const DEFAULT_LIGHTING_PROFILE = {
  directionalIntensity: 0.7,
  ambientIntensity: 0.45,
  exposure: 0.95,
  directionalDirections: [
    [0, 1, 0],
    [1, 2, 1],
    [-1, -2, -1],
  ] as [number, number, number][],
  skyColor: 0xa4c8e8,
  groundColor: 0x665845,
  // Neutral starting values for the terrain shading uniforms / explorer sliders.
  lightScale: 1.0,
  shadowStrength: 0.6,
  // Fallback terrain sun direction (surface -> light) used until a map's own
  // directional light is known.
  terrainSunDirection: [0.35, 0.9, 0.2] as [number, number, number],
};

type CreateLightRigOptions = {
  directionalIntensity?: number;
  ambientIntensity?: number;
};

type ApplyRendererColorOptions = {
  exposure?: number;
};

const BASE_INTENSITY_KEY = "__t3dBaseIntensity";

export function applyRendererColorManagement(
  renderer: WebGLRenderer,
  options: ApplyRendererColorOptions = {}
): WebGLRenderer {
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = options.exposure ?? DEFAULT_LIGHTING_PROFILE.exposure;
  return renderer;
}

export function createFallbackLightRig(options: CreateLightRigOptions = {}): Light[] {
  const directionalIntensity = options.directionalIntensity ?? DEFAULT_LIGHTING_PROFILE.directionalIntensity;
  const ambientIntensity = options.ambientIntensity ?? DEFAULT_LIGHTING_PROFILE.ambientIntensity;

  const lights: Light[] = [
    new THREE.HemisphereLight(
      DEFAULT_LIGHTING_PROFILE.skyColor,
      DEFAULT_LIGHTING_PROFILE.groundColor,
      ambientIntensity
    ),
  ];

  for (const dir of DEFAULT_LIGHTING_PROFILE.directionalDirections) {
    const light = new THREE.DirectionalLight(0xffffff, directionalIntensity);
    light.position.set(dir[0], dir[1], dir[2]).normalize();
    lights.push(light);
  }

  return lights;
}

export function cloneLights(lights: Light[]): Light[] {
  return lights.map((light) => light.clone());
}

export function addLightsToScene(scene: Scene, lights: Light[]): void {
  lights.forEach((light) => scene.add(light));
}

export function removeLightsFromScene(scene: Scene, lights: Light[]): void {
  lights.forEach((light) => scene.remove(light));
}

/**
 * Returns the world-space direction pointing from a surface toward the
 * brightest directional light in the list, or null if there are none. Used to
 * keep the terrain shader's "sun" aligned with the rest of the scene's lighting.
 */
export function getDominantLightDirection(lights: Light[]): THREE.Vector3 | null {
  let dominant: THREE.DirectionalLight | null = null;
  for (const light of lights) {
    if (!(light as any).isDirectionalLight) {
      continue;
    }
    const directional = light as THREE.DirectionalLight;
    if (!dominant || directional.intensity > dominant.intensity) {
      dominant = directional;
    }
  }

  if (!dominant) {
    return null;
  }

  // A DirectionalLight travels from its position toward its target, so the
  // direction from the surface back toward the light is position - target.
  const direction = dominant.position.clone().sub(dominant.target.position);
  return direction.lengthSq() > 0 ? direction.normalize() : null;
}

/**
 * Points the terrain shader's `sunDirection` uniform at the brightest
 * directional light so terrain shading lines up with the lit props/models.
 * Tiles without that uniform (e.g. the export basic material) are skipped, and
 * scenes with no directional light keep the shader's default direction.
 */
export function applyTerrainSunDirection(terrainTiles: Object3D[], lights: Light[]): void {
  const direction = getDominantLightDirection(lights);
  if (!direction) {
    return;
  }

  for (const tile of terrainTiles) {
    const material = (tile as any).material;
    if (!material) {
      continue;
    }

    const materials = Array.isArray(material) ? material : [material];
    for (const mat of materials) {
      if (mat?.uniforms?.sunDirection) {
        mat.uniforms.sunDirection.value.copy(direction);
      }
    }
  }
}

export function scaleDirectionalLights(lights: Light[], scale: number): void {
  for (const light of lights) {
    if (!(light as any).isDirectionalLight) {
      continue;
    }

    const typedLight = light as THREE.DirectionalLight;
    const userData = typedLight.userData as Record<string, unknown>;
    const currentBase = userData[BASE_INTENSITY_KEY];
    const baseIntensity =
      typeof currentBase === "number" && Number.isFinite(currentBase) ? currentBase : typedLight.intensity;

    userData[BASE_INTENSITY_KEY] = baseIntensity;
    typedLight.intensity = baseIntensity * scale;
  }
}
