import * as MaterialUtils from "../util/MaterialUtils";
import DataRenderer from "./DataRenderer";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { MeshBasicMaterial, Material } from "three";
import { FileParser } from "t3d-parser";

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
  static rendererName = "EnvironmentRenderer";

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

  getHazeColor(environmentChunkData: any) {
    const hazes = environmentChunkData && environmentChunkData.dataGlobal.haze;

    if (!hazes || hazes.length <= 0) {
      return [190, 160, 60];
    } else {
      return hazes[0].farColor;
    }
  }

  parseLights(environmentChunkData: any) {
    const self = this;

    /// Set up output array
    self.getOutput().lights = [];

    const lights = environmentChunkData
      ? environmentChunkData.dataGlobal.lighting
      : [
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

      /// Directional lights
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let sumDirLightIntensity = 0;

      light.lights.forEach(function (dirLightData: any /*, idx*/) {
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

        self.getOutput().lights.push(directionalLight);
      }); // END for each directional light in light

      /// Add some random directional lighting if there was no, in order to se SOME depth on models
      if (!light.lights || light.lights.length === 0) {
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

          self.getOutput().lights.push(directionalLight);
        });
      }

      /// Ambient light
      // light.backlightIntensity /= sumDirLightIntensity +light.backlightIntensity;
      // light.backlightIntensity = light.backlightIntensity;
      const color = new THREE.Color(
        (light.backlightIntensity * (255.0 - light.backlightColor[2])) / 255.0,
        (light.backlightIntensity * (255.0 - light.backlightColor[1])) / 255.0,
        (light.backlightIntensity * (255.0 - light.backlightColor[0])) / 255.0
      );

      ambientLight = new THREE.AmbientLight(color);
    }); // END for each light in lighting

    let ambientTotal = 0;
    if (ambientLight as any) {
      ambientTotal = ambientLight!.color.r + ambientLight!.color.g + ambientLight!.color.b;
      this.getOutput().lights.push(ambientLight);
    }

    /// Parsing done, set hasLight flag and return
    this.getOutput().hasLight = hasLight || ambientTotal > 0;
  }

  parseSkybox(environmentChunkData: any, parameterChunkData: any, hazeColorAsInt: number) {
    /// set up output array
    this.getOutput().skyCubeTexture = null;
    this.getOutput().skyBox = null;

    /// Grab sky texture.
    /// index 0 and 1 day
    /// index 2 and 3 evening
    let skyModeTex = environmentChunkData && environmentChunkData.dataGlobal.skyModeTex[0];

    /// Fallback skyboxfrom dat.
    if (!skyModeTex) {
      skyModeTex = {
        texPathNE: 187554,
        texPathSW: 187556,
        texPathT: 187558,
      };
    }

    /// Calculate bounds
    const bounds = parameterChunkData.rect;
    const mapW = Math.abs(bounds[0] - bounds[2]);
    const mapD = Math.abs(bounds[1] - bounds[3]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const boundSide = Math.max(mapW, mapD);

    const materialArray: Material[] = [];

    /// Load skybox textures, fallback to hosted png files.
    this.loadTextureWithFallback([1, 4], materialArray, skyModeTex.texPathNE + 1, "img/193068.png", hazeColorAsInt);
    this.loadTextureWithFallback([0, 5], materialArray, skyModeTex.texPathSW + 1, "img/193070.png", hazeColorAsInt);
    this.loadTextureWithFallback([2], materialArray, skyModeTex.texPathT + 1, "img/193072.png", hazeColorAsInt);
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
    this.getOutput().skyBox = skyBox;
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
  renderAsync(callback: Function): void {
    if (!this.mapFile) {
      throw new Error("No map file available for EnvironmentRenderer");
    }
    const environmentChunkData = this.mapFile.getChunk("env")!.data;
    const parameterChunkData = this.mapFile.getChunk("parm")!.data;

    /// Set renderer clear color from environment haze
    const hazeColor = this.getHazeColor(environmentChunkData);
    const hazeColorAsInt = hazeColor[2] * 256 * 256 + hazeColor[1] * 256 + hazeColor[0];
    this.getOutput().hazeColor = hazeColor;

    /// Add directional lights to output. Also write hasLight flag
    this.parseLights(environmentChunkData);

    /// Generate skybox
    this.parseSkybox(environmentChunkData, parameterChunkData, hazeColorAsInt);

    /// All parsing is synchronous, just fire callback
    callback();
  }
}
