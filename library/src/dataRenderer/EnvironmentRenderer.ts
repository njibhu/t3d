import * as MaterialUtils from "../util/MaterialUtils";
import DataRenderer from "./DataRenderer";
import * as THREE from "three";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { Light, Material, MeshBasicMaterial, Object3D } from "three";
import { FileParser } from "t3d-parser";

export type EnvironmentVariantSourceType = "global" | "override";
export type EnvironmentVariantModeType = "skyModeTex" | "skyModeCubeTex";

export interface EnvironmentVariantSourceMeta {
  sourceType: EnvironmentVariantSourceType;
  sourceIndex: number;
  slotIndex: number;
  modeType: EnvironmentVariantModeType;
}

export interface PreparedEnvironmentVariant extends EnvironmentVariantSourceMeta {
  id: string;
  label: string;
  sourceName: string | null;
  bindTarget: bigint | number | null;
  guid: bigint | number | null;
  token: bigint | number | null;
  skyBox: Object3D | null;
  skyCubeTexture: THREE.CubeTexture | null;
  hazeColor: number[];
  lights: Light[];
  hasLight: boolean;
}

export interface EnvironmentRendererOutput {
  variants: PreparedEnvironmentVariant[];
  activeVariantId: string | null;
  skyBox: Object3D | null;
  skyCubeTexture: THREE.CubeTexture | null;
  hazeColor: number[] | null;
  lights: Light[];
  hasLight: boolean;
}

type EnvironmentSourceData = {
  name?: string;
  bindTarget?: bigint | number;
  guid?: bigint | number;
  token?: bigint | number;
  haze?: any[];
  lighting?: any[];
  skyModeTex?: any[];
  skyModeCubeTex?: any[];
};

function createVariantId(
  sourceType: EnvironmentVariantSourceType,
  sourceIndex: number,
  modeType: EnvironmentVariantModeType,
  slotIndex: number
): string {
  return `${sourceType}:${sourceIndex}:${modeType}:${slotIndex}`;
}

function normalizeSourceName(name: unknown): string | null {
  if (typeof name !== "string") return null;
  const trimmed = name.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function getVariantLabel(
  sourceType: EnvironmentVariantSourceType,
  sourceIndex: number,
  modeType: EnvironmentVariantModeType,
  slotIndex: number,
  sourceName: string | null
): string {
  const slotLabel = modeType === "skyModeCubeTex" ? `Cube skybox ${slotIndex + 1}` : `Skybox ${slotIndex + 1}`;
  if (sourceType === "global") return slotLabel;
  const sourceLabel = sourceName ?? `Override ${sourceIndex + 1}`;
  return `${sourceLabel} - ${slotLabel}`;
}

function hasUsableSkyModeTex(entry: any): boolean {
  return [entry?.texPathNE, entry?.texPathSW, entry?.texPathT].some((value) => Number(value) > 0);
}

function hasUsableSkyModeCubeTex(entry: any): boolean {
  return [entry?.texPathE, entry?.texPathW, entry?.texPathN, entry?.texPathS, entry?.texPathB, entry?.texPathT].some(
    (value) => Number(value) > 0
  );
}

function getSkyTextureFileId(value: unknown): number {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric + 1 : 0;
}

function applyVariantToOutput(output: EnvironmentRendererOutput, variant: PreparedEnvironmentVariant | null): void {
  output.activeVariantId = variant?.id ?? null;
  output.skyBox = variant?.skyBox ?? null;
  output.skyCubeTexture = variant?.skyCubeTexture ?? null;
  output.hazeColor = variant?.hazeColor ?? null;
  output.lights = variant?.lights ?? [];
  output.hasLight = variant?.hasLight ?? false;
}

export function setActiveEnvironmentVariant(
  context: any,
  variantId?: string | null
): PreparedEnvironmentVariant | null {
  const output = context?.[EnvironmentRenderer.rendererName] as EnvironmentRendererOutput | undefined;
  if (!output) return null;

  const variants = Array.isArray(output.variants) ? output.variants : [];
  if (variants.length === 0) {
    applyVariantToOutput(output, null);
    return null;
  }

  if (variantId == null) {
    applyVariantToOutput(output, variants[0]);
    return variants[0];
  }

  const variant = variants.find((entry) => entry.id === variantId);
  if (!variant) return null;

  applyVariantToOutput(output, variant);
  return variant;
}

/**
 *
 * A renderer that generates some of the environment objects of a map.
 *
 * @class EnvironmentRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a FileParser.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
export default class EnvironmentRenderer extends DataRenderer {
  static override rendererName = "EnvironmentRenderer";

  mapFile: FileParser;
  constructor(localReader: LocalReader, settings: any, context: any, logger: typeof Logger) {
    super(localReader, settings, context, logger, "EnvironmentRenderer");

    this.mapFile = this.settings.mapFile;
  }

  getMat(tex: any): MeshBasicMaterial {
    return new THREE.MeshBasicMaterial({
      map: tex,
      side: THREE.BackSide,
      fog: false,
      depthWrite: false,
    });
  }

  getEnvironmentGlobals(environmentChunkData: any): EnvironmentSourceData | null {
    return environmentChunkData?.dataGlobal ?? null;
  }

  loadTextureWithFallback(
    targetMatIndices: number[],
    materialArray: Material[],
    filename: number,
    fallbackFilename: string,
    hazeColorAsInt: number
  ): void {
    const self = this;

    function writeMat(mat: Material) {
      targetMatIndices.forEach(function (i) {
        materialArray[i] = mat;
      });
    }

    function loadFallback() {
      const mat = self.getMat(new THREE.TextureLoader().load(fallbackFilename));

      writeMat(mat);
    }

    function errorCallback() {
      setTimeout(loadFallback, 1);
    }

    const mat = self.getMat(
      MaterialUtils.loadLocalTexture(this.localReader, filename, undefined, hazeColorAsInt, errorCallback)
    );

    writeMat(mat);
  }

  getHazeColor(environmentData: EnvironmentSourceData | null): number[] {
    const hazes = environmentData?.haze;

    if (!hazes || hazes.length <= 0) {
      return [190, 160, 60];
    } else {
      return hazes[0].farColor;
    }
  }

  createLights(environmentData: EnvironmentSourceData | null): { lights: Light[]; hasLight: boolean } {
    const lightsOutput: Light[] = [];
    const lights = environmentData?.lighting ?? [
      {
        lights: [],
        backlightIntensity: 1.0,
        backlightColor: [255, 255, 255],
      },
    ];

    let ambientLight: any;

    // var light = lights[0];
    //
    let hasLight = false;
    lights.forEach(function (light: any /*, idx*/) {
      if (hasLight) return;
      const directionalLights = Array.isArray(light?.lights) ? light.lights : [];
      const backlightIntensity = Number.isFinite(light?.backlightIntensity) ? light.backlightIntensity : 1.0;
      const backlightColor = Array.isArray(light?.backlightColor) ? light.backlightColor : [255, 255, 255];

      /// Directional lights
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let sumDirLightIntensity = 0;

      directionalLights.forEach(function (dirLightData: any /*, idx*/) {
        hasLight = true;

        const color = new THREE.Color(
          dirLightData.color[2] / 255.0,
          dirLightData.color[1] / 255.0,
          dirLightData.color[0] / 255.0
        );

        const directionalLight = new THREE.DirectionalLight(color.getHex(), dirLightData.intensity);

        directionalLight.position
          .set(-dirLightData.direction[0], dirLightData.direction[2], dirLightData.direction[1])
          .normalize();

        sumDirLightIntensity += dirLightData.intensity;

        lightsOutput.push(directionalLight);
      }); // END for each directional light in light

      /// Add some random directional lighting if there was no, in order to se SOME depth on models
      if (directionalLights.length === 0) {
        const directions = [
          [0, 1, 0, 0.3],
          [1, 2, 1, 0.3],
          [-1, -2, -1, 0.3],
        ];

        directions.forEach(function (lightDir) {
          const color = new THREE.Color(1, 1, 1);
          const intensity = lightDir[3];
          const directionalLight = new THREE.DirectionalLight(color.getHex(), intensity);

          directionalLight.position.set(lightDir[0], lightDir[1], lightDir[2]).normalize();

          sumDirLightIntensity += intensity;

          lightsOutput.push(directionalLight);
        });
      }

      /// Ambient light
      // light.backlightIntensity /= sumDirLightIntensity +light.backlightIntensity;
      // light.backlightIntensity = light.backlightIntensity;
      const color = new THREE.Color(
        (backlightIntensity * (255.0 - backlightColor[2])) / 255.0,
        (backlightIntensity * (255.0 - backlightColor[1])) / 255.0,
        (backlightIntensity * (255.0 - backlightColor[0])) / 255.0
      );

      ambientLight = new THREE.AmbientLight(color);
    }); // END for each light in lighting

    let ambientTotal = 0;
    if (ambientLight as any) {
      ambientTotal = ambientLight!.color.r + ambientLight!.color.g + ambientLight!.color.b;
      lightsOutput.push(ambientLight);
    }

    return {
      lights: lightsOutput,
      hasLight: hasLight || ambientTotal > 0,
    };
  }

  buildPlanarSkybox(skyModeTex: any, hazeColorAsInt: number): Object3D {
    const materialArray: Material[] = [];

    /// Load skybox textures, fallback to hosted png files.
    this.loadTextureWithFallback(
      [1, 4],
      materialArray,
      getSkyTextureFileId(skyModeTex?.texPathNE),
      "img/193068.png",
      hazeColorAsInt
    );
    this.loadTextureWithFallback(
      [0, 5],
      materialArray,
      getSkyTextureFileId(skyModeTex?.texPathSW),
      "img/193070.png",
      hazeColorAsInt
    );
    this.loadTextureWithFallback(
      [2],
      materialArray,
      getSkyTextureFileId(skyModeTex?.texPathT),
      "img/193072.png",
      hazeColorAsInt
    );
    materialArray[3] = new THREE.MeshBasicMaterial({ visible: false });

    /// Create skybox geometry
    const boxSize = 1024; // boundSide * 2;
    const skyGeometry = new THREE.BoxGeometry(boxSize, boxSize / 2, boxSize); // Width Height Depth

    const uvAttribute = skyGeometry.getAttribute("uv");
    const uvArray = uvAttribute.array as Float32Array;

    /// Ugly way of fixing UV maps for the skybox
    for (let i = 0; i < uvArray.length; i += 2) {
      const face = Math.floor(i / 8); // 4 vertices per face, 2 UVs per vertex

      // PX - WEST   NX - EAST
      if (face === 0 || face === 1) {
        uvArray[i] = 1 - uvArray[i]; // Flip x
        uvArray[i + 1] /= 2.0;
        uvArray[i + 1] += 0.5; // Adjust y
      }

      // NZ - SOUTH   PZ - NORTH
      else if (face === 5 || face === 4) {
        uvArray[i + 1] /= -2.0;
        uvArray[i + 1] += 0.5; // Adjust y
      } else {
        uvArray[i] = 1 - uvArray[i]; // Flip x
      }
    }

    uvAttribute.needsUpdate = true;

    /// Generate final skybox
    const skyBox = new THREE.Mesh(skyGeometry, materialArray);

    /// Put horizon in camera center
    // skyBox.translateY(-(boxSize / 8));
    // skyBox.translateY( -environmentChunk.data.dataGlobal.sky.verticalOffset );

    /// Write to output
    return skyBox;
  }

  buildCubeSkybox(skyModeCubeTex: any, hazeColorAsInt: number): Object3D {
    const materialArray: Material[] = [
      this.getMat(
        MaterialUtils.loadLocalTexture(
          this.localReader,
          getSkyTextureFileId(skyModeCubeTex?.texPathE),
          undefined,
          hazeColorAsInt
        )
      ),
      this.getMat(
        MaterialUtils.loadLocalTexture(
          this.localReader,
          getSkyTextureFileId(skyModeCubeTex?.texPathW),
          undefined,
          hazeColorAsInt
        )
      ),
      this.getMat(
        MaterialUtils.loadLocalTexture(
          this.localReader,
          getSkyTextureFileId(skyModeCubeTex?.texPathT),
          undefined,
          hazeColorAsInt
        )
      ),
      this.getMat(
        MaterialUtils.loadLocalTexture(
          this.localReader,
          getSkyTextureFileId(skyModeCubeTex?.texPathB),
          undefined,
          hazeColorAsInt
        )
      ),
      this.getMat(
        MaterialUtils.loadLocalTexture(
          this.localReader,
          getSkyTextureFileId(skyModeCubeTex?.texPathN),
          undefined,
          hazeColorAsInt
        )
      ),
      this.getMat(
        MaterialUtils.loadLocalTexture(
          this.localReader,
          getSkyTextureFileId(skyModeCubeTex?.texPathS),
          undefined,
          hazeColorAsInt
        )
      ),
    ];

    const boxSize = 1024;
    const skyGeometry = new THREE.BoxGeometry(boxSize, boxSize / 2, boxSize);
    return new THREE.Mesh(skyGeometry, materialArray);
  }

  buildSkyVariant(
    sourceData: EnvironmentSourceData | null,
    sourceType: EnvironmentVariantSourceType,
    sourceIndex: number,
    modeType: EnvironmentVariantModeType,
    slotIndex: number,
    skyModeData: any,
    fallback = false
  ): PreparedEnvironmentVariant {
    const hazeColor = this.getHazeColor(sourceData);
    const hazeColorAsInt = hazeColor[2] * 256 * 256 + hazeColor[1] * 256 + hazeColor[0];
    const lighting = this.createLights(sourceData);
    const sourceName = normalizeSourceName(sourceData?.name);
    const defaultSkyModeTex = {
      texPathNE: 187554,
      texPathSW: 187556,
      texPathT: 187558,
    };
    const variantId = fallback
      ? `fallback:${sourceType}:${sourceIndex}:${modeType}:${slotIndex}`
      : createVariantId(sourceType, sourceIndex, modeType, slotIndex);
    const label = fallback
      ? sourceName ?? "Default skybox"
      : getVariantLabel(sourceType, sourceIndex, modeType, slotIndex, sourceName);

    let skyBox: Object3D | null;
    if (modeType === "skyModeCubeTex") {
      skyBox = this.buildCubeSkybox(skyModeData, hazeColorAsInt);
    } else {
      skyBox = this.buildPlanarSkybox(skyModeData ?? defaultSkyModeTex, hazeColorAsInt);
    }

    return {
      id: variantId,
      label,
      sourceType,
      sourceIndex,
      slotIndex,
      modeType,
      sourceName,
      bindTarget: sourceData?.bindTarget ?? null,
      guid: sourceData?.guid ?? null,
      token: sourceData?.token ?? null,
      skyBox,
      skyCubeTexture: null,
      hazeColor,
      lights: lighting.lights,
      hasLight: lighting.hasLight,
    };
  }

  collectVariantsFromSource(
    sourceData: EnvironmentSourceData | null,
    sourceType: EnvironmentVariantSourceType,
    sourceIndex: number
  ): PreparedEnvironmentVariant[] {
    const variants: PreparedEnvironmentVariant[] = [];
    const planarModes = Array.isArray(sourceData?.skyModeTex) ? sourceData.skyModeTex : [];
    const cubeModes = Array.isArray(sourceData?.skyModeCubeTex) ? sourceData.skyModeCubeTex : [];

    planarModes.forEach((skyModeTex, slotIndex) => {
      if (!hasUsableSkyModeTex(skyModeTex)) return;
      variants.push(this.buildSkyVariant(sourceData, sourceType, sourceIndex, "skyModeTex", slotIndex, skyModeTex));
    });

    cubeModes.forEach((skyModeCubeTex, slotIndex) => {
      if (!hasUsableSkyModeCubeTex(skyModeCubeTex)) return;
      variants.push(
        this.buildSkyVariant(sourceData, sourceType, sourceIndex, "skyModeCubeTex", slotIndex, skyModeCubeTex)
      );
    });

    return variants;
  }

  buildVariants(environmentChunkData: any): PreparedEnvironmentVariant[] {
    const variants: PreparedEnvironmentVariant[] = [];
    const globalData = this.getEnvironmentGlobals(environmentChunkData);
    variants.push(...this.collectVariantsFromSource(globalData, "global", 0));

    const overrides = Array.isArray(environmentChunkData?.dataOverrideArray) ? environmentChunkData.dataOverrideArray : [];
    overrides.forEach((sourceData: EnvironmentSourceData, sourceIndex: number) => {
      variants.push(...this.collectVariantsFromSource(sourceData, "override", sourceIndex));
    });

    if (variants.length === 0) {
      variants.push(this.buildSkyVariant(globalData, "global", 0, "skyModeTex", 0, null, true));
    }

    return variants;
  }

  /**
   * Output fileds generated:
   *
   * - *hazeColor* Array of RGBA values describing the global haze color of the map.
   * - *lights* An array of THREE.DirectionalLight and  THREE.AmbientLight objects.
   * - *hasLight* Boolean is false if no directional lights were added to "lights".
   * - *skyBox* A textured THREE.Mesh skybox.
   *
   * @async
   * @param  {Function} callback Fires when renderer is finished, does not take arguments.
   */
  override renderAsync(callback: Function): void {
    if (!this.mapFile) {
      throw new Error("No map file available for EnvironmentRenderer");
    }
    const environmentChunkData = this.mapFile.getChunk("env")?.data;
    const output = this.getOutput() as EnvironmentRendererOutput;
    output.variants = this.buildVariants(environmentChunkData);
    output.activeVariantId = null;
    output.skyBox = null;
    output.skyCubeTexture = null;
    output.hazeColor = null;
    output.lights = [];
    output.hasLight = false;
    setActiveEnvironmentVariant(this.context, output.variants[0]?.id ?? null);

    /// All parsing is synchronous, just fire callback
    callback();
  }
}
