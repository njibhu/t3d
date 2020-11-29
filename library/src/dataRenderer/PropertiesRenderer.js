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

const RenderUtils = require("../util/RenderUtils");
const DataRenderer = require("./DataRenderer");
const LogsUtils = require("../util/Logs");

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
class PropertiesRenderer extends DataRenderer {
  constructor(localReader, settings, context, logger) {
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
  renderAsync(callback) {
    this.getOutput().meshes = [];

    let propertiesChunkData = this.mapFile.getChunk("prp2").data;

    if (!propertiesChunkData) {
      return callback();
    }

    let props = propertiesChunkData.propArray;
    const animProps = propertiesChunkData.propAnimArray;
    const instanceProps = propertiesChunkData.propInstanceArray;
    const metaProps = propertiesChunkData.propMetaArray;

    /// Concat all prop types
    props = props.concat(animProps).concat(instanceProps).concat(metaProps);

    /// Build an object containing all the data we need for each prop
    this.models = props.reduce((models, prop) => {
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

    this.renderIndex(0, callback);
  }

  getFileIdsAsync(callback) {
    this.logger.log(T3D.Logger.TYPE_WARNING, "PropertiesRenderer.getFileIdsAsync is not implemented");
    callback([]);
  }

  /**
   * PRIVATE METHODS
   */

  renderIndex(index, callback) {
    if (index >= this.modelsList.length) {
      this.meshCache = {};
      this.textureCache = {};
      this.models = {};
      return callback();
    }

    LogsUtils.progress(this.logger, index, this.modelsList.length, "Loading 3D Models (Props)");

    const modelName = this.modelsList[index];
    RenderUtils.getMeshesForFilename(
      modelName,
      this.models[modelName].props[0].color,
      this.localReader,
      this.meshCache,
      this.textureCache,
      this.showUnmaterialized,
      (meshes, isCached, boundingSphere) => {
        if (meshes) {
          this.addMeshesToSchene(modelName, meshes, boundingSphere);
        }

        this.renderIndex(index + 1, callback);
      }
    );
  }

  addMeshesToSchene(modelName, meshes) {
    const model = this.models[modelName];
    const instancedMesh = RenderUtils.getInstancedMesh(meshes, model.size, 0);
    let instancedIndex = 0;
    for (const prop of model.props) {
      placeProp(instancedMesh, prop, instancedIndex);
      instancedIndex += 1;
      for (const transform of prop.transforms || []) {
        placeProp(instancedMesh, transform, instancedIndex);
        instancedIndex += 1;
      }
    }
    this.getOutput().meshes.push(instancedMesh);
  }
}

function placeProp(instancedMesh, propData, instanceIndex) {
  if (instanceIndex >= instancedMesh.count) {
    throw new Error("InstancedMesh count is too small");
  }
  /// Set position, scale and rotation of the LOD object
  const matrix = new THREE.Matrix4();
  matrix.makeRotationFromEuler(
    new THREE.Euler(propData.rotation[0], -propData.rotation[2], -propData.rotation[1], "ZXY")
  );
  matrix.scale(new THREE.Vector3(propData.scale, propData.scale, propData.scale));
  matrix.setPosition(propData.position[0], -propData.position[2], -propData.position[1]);

  instancedMesh.setMatrixAt(instanceIndex, matrix);
}

PropertiesRenderer.rendererName = "PropertiesRenderer";
module.exports = PropertiesRenderer;
