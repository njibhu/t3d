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

/**
 *
 * A renderer that generates meshes for a single model file.
 *
 * @class SingleModelRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "id" the base ID or file ID of the model to generate meshes for.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
class SingleModelRenderer extends DataRenderer {
  constructor(localReader, settings, context, logger) {
    super(localReader, settings, context, logger, "SingleModelRenderer");
  }

  /**
   * Output fileds generated:
   *
   * - *meshes* An array of THREE.Mesh objects visualizing this model file.
   *
   * @async
   * @param  {Function} callback Fires when renderer is finished, does not take arguments.
   */
  renderAsync(callback) {
    let self = this;

    /// Get file id
    let fileId = this.settings.id;
    let showUnmaterialed = true;

    /// Load the model file
    let meshCache = {};
    let textureCache = {};

    /// Set up output array
    self.getOutput().meshes = [];

    RenderUtils.getMeshesForFilename(
      fileId,
      0x00ff00,
      self.localReader,
      meshCache,
      textureCache,
      showUnmaterialed,
      function (meshes, isCached, boundingSphere) {
        if (meshes) {
          meshes.forEach(function (mesh) {
            mesh.boundingSphere = boundingSphere;
            self.getOutput().meshes.push(mesh);
          });
        }

        /// Fire callback after all meshes have been added.
        meshCache = {};
        callback();
      }
    );
  }
}

SingleModelRenderer.rendererName = "SingleModelRenderer";
module.exports = SingleModelRenderer;
