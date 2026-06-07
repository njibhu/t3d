import * as THREE from "three";
import type { Light, Scene, WebGLRenderer } from "three";

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
