/*
Copyright © Tyria3DLibrary project contributors

This file is part of the Tyria 3D Library.

Tyria 3D Library is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Tyria 3D Library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the Tyria 3D Library. If not, see <http://www.gnu.org/licenses/>.
*/

import * as MaterialUtils from "../util/MaterialUtils";
import DataRenderer from "./DataRenderer";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { MeshBasicMaterial, Material } from "three";
import type GW2File from "../format/file/GW2File";

/**
 *
 * A renderer that generates some of the environment objects of a map.
 *
 * @class EnvironmentRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a GW2File.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
export default class EnvironmentRenderer extends DataRenderer {
  static rendererName = "EnvironmentRenderer";

  mapFile: GW2File;
  constructor(localReader: LocalReader, settings: any, context: any, logger: Logger) {
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

  loadTextureWithFallback(targetMatIndices: number[], materialArray: Material[], filename: number, fallbackFilename: string, hazeColorAsInt: number): void {
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

    let ambientLight;

    // var light = lights[0];
    //
    let hasLight = false;
    lights.forEach(function (light: any /*, idx*/) {
      if (hasLight) return;

      /// Directional lights
      /* eslint-disable-next-line no-unused-vars */
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

          // eslint-disable-next-line no-unused-vars
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
    // eslint-disable-next-line no-unused-vars
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

    /// Ugly way of fixing UV maps for the skybox (I think)
    skyGeometry.faceVertexUvs[0].forEach((vecs, idx) => {
      const face = Math.floor(idx / 2);

      // PX NX
      // PY NY
      // PZ NZ

      /// PX - WEST   NX - EAST
      if (face === 0 || face === 1) {
        vecs.forEach((vec2) => {
          vec2.x = 1 - vec2.x;
          vec2.y /= 2.0;
          vec2.y += 0.5;
        });
      }

      /// NZ - SOUTH   PZ - NORTH
      else if (face === 5 || face === 4) {
        vecs.forEach((vec2) => {
          vec2.y /= -2.0;
          vec2.y += 0.5;
        });
      } else {
        vecs.forEach((vec2) => {
          vec2.x = 1 - vec2.x;
        });
      }
    });

    skyGeometry.uvsNeedUpdate = true;

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
    if(!this.mapFile) {
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