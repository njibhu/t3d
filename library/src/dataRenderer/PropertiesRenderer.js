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
    let self = this;

    self.getOutput().meshes = [];

    let propertiesChunkData = this.mapFile.getChunk("prp2").data;

    if (!propertiesChunkData) {
      callback();
      return;
    }

    let props = propertiesChunkData.propArray;
    let animProps = propertiesChunkData.propAnimArray;
    let instanceProps = propertiesChunkData.propInstanceArray;
    let metaProps = propertiesChunkData.propMetaArray;

    /// Concat all prop types
    props = props.concat(animProps).concat(instanceProps).concat(metaProps);

    /// Create mesh cache
    self.meshCache = {};
    self.textureCache = {};

    // For now, we'll do all load in serial
    // TODO: load unique meshes and textures in parallell (asynch), then render!
    let lastPct = -1;

    let renderIndex = function (idx) {
      if (idx >= props.length) {
        /// Empty mesh cache
        self.meshCache = {};
        self.textureCache = {};
        callback();
        return;
      }

      let pct = Math.round((1000.0 * idx) / props.length);
      pct /= 10.0;

      /// Log progress
      if (lastPct !== pct) {
        let pctStr = pct + (pct.toString().indexOf(".") < 0 ? ".0" : "");

        self.logger.log(T3D.Logger.TYPE_PROGRESS, "Loading 3D Models (Props)", pctStr);
        lastPct = pct;
      }

      /// Read prop at index.
      let prop = props[idx];

      /// Adds a single mesh to a group.
      let addMeshToLOD = function (mesh, groups, lod, prop, needsClone) {
        /// Read lod distance before overwriting mesh variable
        let lodDist = prop.lod2 !== 0 ? prop.lod2 : mesh.lodOverride[1];

        /// Read flags before overwriting mesh variable
        let flags = mesh.flags;

        /// Mesh flags are 0 1 4
        /// For now, use flag 0 as the default level of detail
        if (flags === 0) lodDist = 0;

        /// Create new empty mesh if needed
        if (needsClone) {
          mesh = new THREE.Mesh(mesh.geometry, mesh.material);
        }

        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;

        // Find group for this LOD distance
        if (groups[lodDist]) {
          groups[lodDist].add(mesh);
        }
        // Or create LOD group and add to a level of detail
        // WIP, needs some testing!
        else {
          let group = new THREE.Group();
          group.updateMatrix();
          group.matrixAutoUpdate = false;
          group.add(mesh);
          groups[lodDist] = group;
          lod.addLevel(group, lodDist);
        }

        return lodDist;
      };

      /// Adds array of meshes to the scene, also adds transform clones
      let addMeshesToScene = function (meshArray, needsClone, boundingSphere) {
        /// Add original

        /// Make LOD object and an array of groups for each LOD level
        let groups = {};
        let lod = new THREE.LOD();

        /// Each mesh is added to a group corresponding to its LOD distane
        let maxDist = 0;
        meshArray.forEach(function (mesh) {
          maxDist = Math.max(maxDist, addMeshToLOD(mesh, groups, lod, prop, needsClone));
        });

        /// Add invisible level (the raycaster crashes on lod without any levels)
        lod.addLevel(new THREE.Group(), 100000);

        /// Set position, scale and rotation of the LOD object
        if (prop.rotation) {
          lod.rotation.order = "ZXY";
          // ["x","float32","z","float32","y","float32"],
          lod.rotation.set(prop.rotation[0], -prop.rotation[2], -prop.rotation[1]);
        }
        lod.scale.set(prop.scale, prop.scale, prop.scale);
        lod.position.set(prop.position[0], -prop.position[2], -prop.position[1]);

        lod.boundingSphereRadius = (boundingSphere && boundingSphere.radius ? boundingSphere.radius : 1.0) * prop.scale;

        lod.updateMatrix();
        lod.matrixAutoUpdate = false;

        /// Show highest level always
        lod.update(lod);

        // Add LOD containing mesh instances to scene
        self.getOutput().meshes.push(lod);

        // Add one copy per transform, needs to be within it's own LOD
        if (prop.transforms) {
          prop.transforms.forEach(function (transform) {
            /// Make LOD object and an array of groups for each LOD level
            let groups = {};
            let lod = new THREE.LOD();

            /// Each mesh is added to a group corresponding to its LOD distane
            let maxDist = 0;
            meshArray.forEach(function (mesh) {
              maxDist = Math.max(maxDist, addMeshToLOD(mesh, groups, lod, prop, true));
            });

            /// Add invisible level
            // lod.addLevel(new THREE.Group(),10000);

            /// Set position, scale and rotation of the LOD object
            if (transform.rotation) {
              lod.rotation.order = "ZXY";
              lod.rotation.set(transform.rotation[0], -transform.rotation[2], -transform.rotation[1]);
            }
            lod.scale.set(transform.scale, transform.scale, transform.scale);
            lod.position.set(transform.position[0], -transform.position[2], -transform.position[1]);

            lod.updateMatrix();
            lod.matrixAutoUpdate = false;

            lod.boundingSphereRadius =
              (boundingSphere && boundingSphere.radius ? boundingSphere.radius : 1.0) * prop.scale;

            /// Show highest level always
            lod.update(lod);

            /// Add LOD containing mesh instances to scenerender: function(propertiesChunkHeader, map, localReader, renderCallback){
            self.getOutput().meshes.push(lod);
          });
        }
      };

      console.log(self);
      /// Get meshes
      RenderUtils.getMeshesForFilename(
        prop.filename,
        prop.color,
        self.localReader,
        self.meshCache,
        self.textureCache,
        self.showUnmaterialized,
        function (meshes, isCached, boundingSphere) {
          if (meshes) {
            addMeshesToScene(meshes, isCached, boundingSphere);
          }

          /// Render next prop
          renderIndex(idx + 1);
        }
      );
    };

    /// Start serial loading and redering. (to allow re-using meshes and textures)
    renderIndex(0);
  }

  /**
   * TODO: write description. Used for export feature
   * @param  {Function} callback [description]
   * @return {*}            [description]
   */
  getFileIdsAsync(callback) {
    let fileIds = [];

    let propertiesChunkData = this.mapFile.getChunk("prp2").data;

    let props = propertiesChunkData.propArray;
    let animProps = propertiesChunkData.propAnimArray;
    let instanceProps = propertiesChunkData.propInstanceArray;
    let metaProps = propertiesChunkData.propMetaArray;

    props = props.concat(animProps).concat(instanceProps).concat(metaProps);

    let getIdsForProp = function (idx) {
      if (idx >= props.length) {
        callback(fileIds);
        return;
      }

      if (idx % 100 === 0) {
        this.logger.log(T3D.Logger.TYPE_MESSAGE, "getting ids for entry", idx, "of", props.length);
      }

      let prop = props[idx];
      RenderUtils.getFilesUsedByModel(
        prop.filename,
        {
          /* broken, needs localReader */
        },
        function (propFileIds) {
          fileIds = fileIds.concat(propFileIds);
          getIdsForProp(idx + 1);
        }
      );
    };

    getIdsForProp(0);
  }
}

PropertiesRenderer.rendererName = "PropertiesRenderer";
module.exports = PropertiesRenderer;
