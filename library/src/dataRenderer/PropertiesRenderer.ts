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

import * as RenderUtils from "../util/RenderUtils";
import DataRenderer from "./DataRenderer";
import * as LogsUtils from "../util/Logs";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { Matrix4 } from "three";
import type GW2File from "../format/file/GW2File";


/**
 *
 * A renderer that generates property models for a map.
 *
 * @class PropertiesRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a GW2File.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
export default class PropertiesRenderer extends DataRenderer {
  static rendererName = "PropertiesRenderer";

  showUnmaterialized: boolean;
  mapFile: GW2File;
  meshCache: any;
  textureCache: any;
  models: Record<number, any>;
  modelsList: string[] = [];

  constructor(localReader: LocalReader, settings: any, context: any, logger: typeof Logger) {
    super(localReader, settings, context, logger, "PropertiesRenderer");
    this.mapFile = this.settings.mapFile;
    this.showUnmaterialized = this.settings.showUnmaterialized || false;

    this.meshCache = {};
    this.textureCache = {};
    this.models = {};
  }

  /**
   * Renders all property meshes in a GW2 map described by the map's PROP chunk.
   * Output fileds generated:
   *
   * - *meshes* An array of THREE.Mesh objects visualizing all property models refered by this map.
   *
   * @async
   * @param  {Function} callback Fires when renderer is finished, does not take arguments.
   */
  renderAsync(callback: Function): void {
    this.getOutput().meshes = [];

    const propertiesChunkData = this.mapFile.getChunk("prp2")!.data;

    if (!propertiesChunkData) {
      return callback();
    }

    // Get all different prop types
    const props = []
      .concat(propertiesChunkData.propArray)
      .concat(propertiesChunkData.propAnimArray)
      .concat(propertiesChunkData.propInstanceArray)
      .concat(propertiesChunkData.propMetaArray);

    /// Build an object containing all the data we need for each prop
    this.models = props.reduce((models: any, prop: any) => {
      const propSize = prop.transforms ? prop.transforms.length + 1 : 1;
      if (models[prop.filename]) {
        models[prop.filename].props.push(prop);
        models[prop.filename].size += propSize;
      } else {
        models[prop.filename] = {
          props: [prop],
          size: propSize,
        };
      }
      return models;
    }, {});
    this.modelsList = Object.keys(this.models);

    this.renderModel(0, callback);
  }

  getFileIdsAsync(callback: Function): void {
    this.logger.log(T3D.Logger.TYPE_WARNING, "PropertiesRenderer.getFileIdsAsync is not implemented");
    callback([]);
  }

  /**
   * PRIVATE METHODS
   */

  /**
   * To optimize the rendering on the GPU we render each model only once and use instances for
   * any other place using the same model. This allows us to have a much lower amount of draw calls
   * and usage of GPU memory compared to a naive approach having a mesh for each model.
   */
  renderModel(index: number, callback: Function): void {
    if (index >= this.modelsList.length) {
      this.meshCache = {};
      this.textureCache = {};
      this.models = {};
      return callback();
    }

    LogsUtils.progress(this.logger, index, this.modelsList.length, "Loading 3D Models (Props)");

    const modelName = parseInt(this.modelsList[index]);
    RenderUtils.getMeshesForFilename(
      modelName,
      this.models[modelName].props[0].color,
      this.localReader,
      this.meshCache,
      this.textureCache,
      this.showUnmaterialized,
      // We don't care about cached meshes since we know we only ask for each meshes once.
      (meshes, _isCached, _boundingSphere) => {
        if (meshes) {
          this.placeModelOnScene(modelName, meshes /*, boundingSphere*/);
        }

        this.renderModel(index + 1, callback);
      }
    );
  }

  /**
   * Gets the meshes of a specific model, merge them together as an instanced mesh
   * and place them in the scene where they are referenced by the props.
   * @param {number} modelName The baseId of the model
   * @param {*} meshes The 3d models of the model
   */
  placeModelOnScene(modelName: number, meshes: any): void {
    const model = this.models[modelName];
    const instancedMesh = RenderUtils.getInstancedMesh(meshes, model.size);
    let instancedIndex = 0;
    for (const prop of model.props) {
      instancedMesh.setMatrixAt(instancedIndex, getMatrixForProp(prop));
      instancedIndex += 1;
      for (const transform of prop.transforms || []) {
        instancedMesh.setMatrixAt(instancedIndex, getMatrixForProp(transform));
        instancedIndex += 1;
      }
    }
    this.getOutput().meshes.push(instancedMesh);
  }
}

/**
 * Return a Matrix4 for a given prop defining the Scale Rotation and Location of a model
 * @param {Object} propData
 * @returns {THREE.Matrix4}
 */
function getMatrixForProp(propData: any): Matrix4 {
  const matrix = new THREE.Matrix4();
  matrix.makeRotationFromEuler(
    new THREE.Euler(propData.rotation[0], -propData.rotation[2], -propData.rotation[1], "ZXY")
  );
  matrix.scale(new THREE.Vector3(propData.scale, propData.scale, propData.scale));
  matrix.setPosition(propData.position[0], -propData.position[2], -propData.position[1]);

  return matrix;
}
