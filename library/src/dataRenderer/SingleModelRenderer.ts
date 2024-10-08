import * as RenderUtils from "../util/RenderUtils";
import DataRenderer from "./DataRenderer";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";

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
export default class SingleModelRenderer extends DataRenderer {
  static rendererName = "SingleModelRenderer";

  constructor(localReader: LocalReader, settings: any, context: any, logger: typeof Logger) {
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
  renderAsync(callback: Function): void {
    const self = this;

    /// Get file id
    const fileId = this.settings.id;
    const showUnmaterialed = true;

    /// Load the model file
    let meshCache = {};
    const textureCache = {};

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
