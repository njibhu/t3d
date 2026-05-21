import * as THREE from "three";

export type ColorBytes = ArrayLike<number> | number[] | null | undefined;

export type EnvironmentLightDescriptor = {
  color: [number, number, number];
  intensity: number;
  direction: [number, number, number];
};

export type EnvironmentProfile = {
  ambient: {
    color: [number, number, number];
    intensity: number;
  };
  directional: EnvironmentLightDescriptor[];
  hasDirectional: boolean;
  source: "env" | "fallback";
};

export type FogProfile = {
  color: [number, number, number];
  distanceColor: [number, number, number];
  heightColor: [number, number, number];
  distanceRange: [number, number];
  heightRange: [number, number];
  depthCue: number;
  hazeDensity: number;
  hazeFalloff: number;
};

export type EnvironmentApplicationOptions = {
  useEnvironmentLighting?: boolean;
  directionalIntensityScale?: number;
  ambientIntensityScale?: number;
};

const FALLBACK_DIRECTIONS: [number, number, number, number][] = [
  [0, 1, 0, 0.45],
  [0.5, 0.8, 0.4, 0.5],
  [-0.65, 0.35, -0.55, 0.35],
];

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

export function decodeBgrColor(color: ColorBytes, fallback: [number, number, number] = [1, 1, 1]): [number, number, number] {
  if (!color || color.length < 3) {
    return fallback;
  }

  return [clamp01((color[2] ?? 255) / 255), clamp01((color[1] ?? 255) / 255), clamp01((color[0] ?? 255) / 255)];
}

export function decodeBgrColorBytes(
  color: ColorBytes,
  fallback: [number, number, number] = [190 / 255, 160 / 255, 60 / 255]
): [number, number, number] {
  return decodeBgrColor(color, fallback);
}

export function encodeLinearRgbToColor(rgb: [number, number, number]): THREE.Color {
  return new THREE.Color(rgb[0], rgb[1], rgb[2]);
}

function normalizeDirection(direction: ArrayLike<number> | number[] | undefined): [number, number, number] {
  const v = new THREE.Vector3(direction?.[0] ?? 0, direction?.[2] ?? 1, direction?.[1] ?? 0);
  if (v.lengthSq() < 1e-6) {
    return [0, 1, 0];
  }

  v.normalize();
  return [v.x, v.y, v.z];
}

export function getFallbackEnvironmentProfile(): EnvironmentProfile {
  return {
    ambient: {
      color: [0.33, 0.33, 0.33],
      intensity: 1,
    },
    directional: FALLBACK_DIRECTIONS.map(([x, y, z, intensity]) => ({
      color: [1, 1, 1],
      intensity,
      direction: normalizeDirection([x, z, y]),
    })),
    hasDirectional: false,
    source: "fallback",
  };
}

export function buildEnvironmentProfile(lightingEntries: any[] | undefined | null): EnvironmentProfile {
  const fallback = getFallbackEnvironmentProfile();
  const lightEntry = lightingEntries?.find((entry) => Array.isArray(entry?.lights)) ?? null;

  if (!lightEntry) {
    return fallback;
  }

  const directional = (lightEntry.lights ?? [])
    .map((light: any) => {
      const intensity = Math.max(0, Number(light?.intensity ?? 0));
      const direction = normalizeDirection(light?.direction);

      return {
        color: decodeBgrColor(light?.color),
        intensity,
        direction,
      } satisfies EnvironmentLightDescriptor;
    })
    .filter((light: EnvironmentLightDescriptor) => light.intensity > 0);

  const ambientColor = decodeBgrColor(lightEntry.backlightColor, [0.66, 0.66, 0.66]);
  const ambientIntensity = Math.max(0, Number(lightEntry.backlightIntensity ?? 0.5));

  return {
    ambient: {
      color: ambientColor,
      intensity: ambientIntensity > 0 ? ambientIntensity : fallback.ambient.intensity,
    },
    directional: directional.length > 0 ? directional : fallback.directional,
    hasDirectional: directional.length > 0,
    source: directional.length > 0 ? "env" : "fallback",
  };
}

export function buildFogProfile(environmentChunkData: any): FogProfile {
  const haze = environmentChunkData?.dataGlobal?.haze?.[0];
  const sky = environmentChunkData?.dataGlobal?.sky;
  const hazeColor = decodeBgrColorBytes(haze?.farColor ?? haze?.distColor, [190 / 255, 160 / 255, 60 / 255]);
  const heightColor = decodeBgrColorBytes(haze?.heightColor, hazeColor);

  return {
    color: hazeColor,
    distanceColor: hazeColor,
    heightColor,
    distanceRange: [Number(haze?.distRange?.[0] ?? 0), Number(haze?.distRange?.[1] ?? 0)],
    heightRange: [Number(haze?.heightRange?.[0] ?? 0), Number(haze?.heightRange?.[1] ?? 0)],
    depthCue: Math.max(0, Number(haze?.depthCue ?? 0)),
    hazeDensity: Math.max(0, Number(sky?.dayHazeDensity ?? sky?.nightHazeDensity ?? 0)),
    hazeFalloff: Math.max(0, Number(sky?.dayHazeFalloff ?? sky?.nightHazeFalloff ?? 0)),
  };
}

export function createThreeLights(
  profile: EnvironmentProfile | undefined,
  options: EnvironmentApplicationOptions = {}
): THREE.Light[] {
  const useEnvironmentLighting = options.useEnvironmentLighting ?? true;
  const directionalScale = options.directionalIntensityScale ?? 1;
  const ambientScale = options.ambientIntensityScale ?? 1;
  const activeProfile = useEnvironmentLighting ? profile ?? getFallbackEnvironmentProfile() : getFallbackEnvironmentProfile();
  const lights: THREE.Light[] = [];

  const ambientLight = new THREE.AmbientLight(
    encodeLinearRgbToColor(activeProfile.ambient.color),
    activeProfile.ambient.intensity * ambientScale
  );
  lights.push(ambientLight);

  for (const directional of activeProfile.directional) {
    const directionalLight = new THREE.DirectionalLight(
      encodeLinearRgbToColor(directional.color),
      directional.intensity * directionalScale
    );
    directionalLight.position.set(directional.direction[0], directional.direction[1], directional.direction[2]).normalize();
    lights.push(directionalLight);
  }

  return lights;
}

export function applyEnvironmentToScene(
  scene: THREE.Scene,
  existingLights: THREE.Light[],
  profile: EnvironmentProfile | undefined,
  options: EnvironmentApplicationOptions = {}
): THREE.Light[] {
  for (const light of existingLights) {
    scene.remove(light);
  }

  const lights = createThreeLights(profile, options);
  for (const light of lights) {
    scene.add(light);
  }
  return lights;
}

export function blendFogColor(fogProfile: FogProfile | undefined, hazeStrength = 1): THREE.Color {
  if (!fogProfile) {
    return new THREE.Color(1, 1, 1);
  }

  const t = clamp01(hazeStrength);
  const color = new THREE.Color(1, 1, 1);
  color.lerp(encodeLinearRgbToColor(fogProfile.distanceColor), t);
  return color;
}

export function getFogDistanceScale(fogProfile: FogProfile | undefined, hazeStrength = 1): number {
  if (!fogProfile) {
    return 1;
  }

  const density = clamp01(fogProfile.hazeDensity * 0.35 + fogProfile.depthCue * 0.5);
  const scale = 1 - density * 0.25 * clamp01(hazeStrength);
  return Math.max(0.65, scale);
}
