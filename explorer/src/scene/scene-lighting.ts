import * as THREE from "three";
import T3D, { TerrainRenderer } from "t3d-lib";
import type { Light, Object3D } from "three";
import { DEFAULT_LIGHTING, materialsOf } from "./three-utils.js";

type SceneContext = Record<string, unknown> | null;

/**
 * Owns the scene's light rig: cloning/falling back to environment lights, the hemisphere
 * shadow-fill light, and pushing light intensity / shadow strength into terrain shader
 * uniforms. Reads the active T3D context (for terrain tiles) through an injected getter.
 */
export class SceneLighting {
  private sceneLights: Light[] = [];
  private shadowFillLight: THREE.HemisphereLight | null = null;
  private lightIntensity = DEFAULT_LIGHTING.lightScale;
  private shadowStrength = DEFAULT_LIGHTING.shadowStrength;

  constructor(
    private readonly scene: THREE.Scene,
    private readonly getContext: () => SceneContext
  ) {}

  getLightIntensity(): number {
    return this.lightIntensity;
  }

  getShadowStrength(): number {
    return this.shadowStrength;
  }

  setLightIntensity(value: number): void {
    this.lightIntensity = Math.max(0, value);
    T3D.LightingUtils.scaleDirectionalLights(this.sceneLights, this.lightIntensity);
    this.updateTerrainShadingUniforms();
  }

  setShadowStrength(value: number): void {
    this.shadowStrength = Math.max(0, Math.min(1, value));
    this.syncShadowFillLight();
    this.updateTerrainShadingUniforms();
  }

  /** Re-push current intensity/shadow values, e.g. into freshly loaded terrain materials. */
  reapply(): void {
    this.setLightIntensity(this.lightIntensity);
    this.setShadowStrength(this.shadowStrength);
  }

  /** Replace the scene lights with the environment's (or a fallback rig) and re-sync terrain shading. */
  refresh(environmentLights: Light[]): void {
    for (const light of this.sceneLights) {
      this.scene.remove(light);
    }

    const nextLights =
      environmentLights.length > 0
        ? T3D.LightingUtils.cloneLights(environmentLights)
        : T3D.LightingUtils.createFallbackLightRig({ directionalIntensity: DEFAULT_LIGHTING.directionalIntensity });

    this.sceneLights = nextLights;
    T3D.LightingUtils.scaleDirectionalLights(this.sceneLights, this.lightIntensity);
    for (const light of this.sceneLights) {
      this.scene.add(light);
    }

    const context = this.getContext();
    const terrainTiles = context ? T3D.getContextValue<Object3D[]>(context, TerrainRenderer, "terrainTiles", []) : [];
    T3D.LightingUtils.applyTerrainSunDirection(terrainTiles, this.sceneLights);
    this.syncShadowFillLight();
  }

  updateTerrainShadingUniforms(): void {
    const context = this.getContext();
    if (!context) return;
    const terrainTiles = T3D.getContextValue<Object3D[]>(context, TerrainRenderer, "terrainTiles", []);
    for (const tile of terrainTiles) {
      for (const mat of materialsOf(tile)) {
        const { uniforms } = mat as THREE.ShaderMaterial;
        if (!uniforms) continue;
        if (uniforms.lightScale) {
          uniforms.lightScale.value = this.lightIntensity;
        }
        if (uniforms.shadowStrength) {
          uniforms.shadowStrength.value = this.shadowStrength;
        }
      }
    }
  }

  private syncShadowFillLight(): void {
    if (!this.shadowFillLight) {
      this.shadowFillLight = new THREE.HemisphereLight(0xffffff, 0x6f6456, 0);
      this.scene.add(this.shadowFillLight);
    }
    const minFill = 0.05;
    const maxFill = 0.9;
    const liftAmount = 1 - this.shadowStrength;
    this.shadowFillLight.intensity = minFill + (maxFill - minFill) * liftAmount;
  }
}
