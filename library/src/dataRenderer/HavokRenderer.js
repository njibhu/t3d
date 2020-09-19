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

const DataRenderer = require("./DataRenderer");

/**
 *
 * A renderer that generates meshes describing the collisions of a map.
 *
 * @class HavokRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a GW2File. If "visible" is specified and true, the generated meshes will be textured
 * with a MeshNormalMaterial, otherwise they will not be visible.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
class HavokRenderer extends DataRenderer {
  constructor(localReader, settings, context, logger) {
    super(localReader, settings, context, logger, "HavokRenderer");

    this.mapFile = this.settings.mapFile;

    this.lastP = -1;
    this.seed = 1;
    this.meshes = [];
  }

  /**
   * TODO
   *
   * @param  {Function} callback         [description]
   * @async
   */
  renderModels(models, title, callback) {
    let mat;
    if (this.settings && this.settings.visible) {
      mat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
    } else {
      mat = new THREE.MeshBasicMaterial({ visible: false });
    }

    this.parseAllModels(models, mat, title, 200, 0, callback);
  }

  /**
   * TODO
   *
   * @param  {*} animation  [description]
   * @param  {*} collisions [description]
   * @return {*}            [description]
   */
  getCollisionsForAnimation(animation, collisions) {
    let ret = [];

    for (let i = 0; i < animation.collisionIndices.length; i++) {
      let index = animation.collisionIndices[i];
      let collision = collisions[index];
      collision.index = index;
      ret.push(collision);
    }

    return ret;
  }

  /**
   * TODO
   *
   * @param  {*} models       [description]
   * @param  {*} mat       [description]
   * @param  {*} title     [description]
   * @param  {*} chunkSize [description]
   * @param  {*} offset    [description]
   * @return {*} callback          [description]
   * @async
   */
  parseAllModels(models, mat, title, chunkSize, offset, callback) {
    let i = offset;

    for (; i < offset + chunkSize && i < models.length; i++) {
      let p = Math.round((i * 100) / models.length);
      if (p !== this.lastP) {
        this.logger.log(T3D.Logger.TYPE_PROGRESS, "Loading Collision Models (" + title + ")", p);
        this.lastP = p;
      }

      /// Get animation object
      let animation = this.animationFromGeomIndex(models[i].geometryIndex, this.geometries, this.animations);

      let collisions = this.getCollisionsForAnimation(animation, this.havokChunkData.collisions);

      for (let j = 0; j < collisions.length; j++) {
        let collision = collisions[j];
        this.renderMesh(collision, models[i], mat);
      }
    }

    if (i < models.length) {
      window.setTimeout(
        this.parseAllModels.bind(this, models, mat, title, chunkSize, offset + chunkSize, callback),
        10 /* time in ms to next call */
      );
    } else {
      callback();
    }
  }

  /**
   * TODO
   *
   * @param  {*} propGeomIndex [description]
   * @param  {*} geometries    [description]
   * @param  {*} animations    [description]
   * @return {*}               [description]
   */
  animationFromGeomIndex(propGeomIndex, geometries, animations) {
    // geometries is just list of all geometries.animations[end] for now
    let l = geometries[propGeomIndex].animations.length;

    return animations[geometries[propGeomIndex].animations[l - 1]];
    // return animations[ geometries[propGeomIndex].animations[0] ];
  }

  /**
   * TODO
   *
   * @param  {*} collision [description]
   * @param  {*} model     [description]
   * @param  {*} mat       [description]
   * @return {*}           [description]
   */
  renderMesh(collision, model, mat) {
    let pos = model.translate;
    let rot = model.rotate;
    let scale = 32 * model.scale;

    /// Generate mesh
    let mesh = this.parseHavokMesh(collision, mat);

    /// Position mesh
    /// "x","float32","z","float32","y","float32"
    mesh.position.set(pos[0], -pos[2], -pos[1]);

    /// Scale mesh
    if (scale) mesh.scale.set(scale, scale, scale);

    /// Rotate mesh
    if (rot) {
      mesh.rotation.order = "ZXY";

      // ["x","float32","z","float32","y","float32"],
      mesh.rotation.set(rot[0], -rot[2], -rot[1]);
    }

    /// Add mesh to scene and collisions
    this.getOutput().meshes.push(mesh);
  }

  /**
   * TODO
   *
   * @return {*} [description]
   */
  seedRandom() {
    let x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

  /**
   * TODO
   *
   * @param  {*} collision [description]
   * @param  {*} mat       [description]
   * @return {*}           [description]
   */
  parseHavokMesh(collision, mat) {
    let index = collision.index;

    if (!this.meshes[index]) {
      let geom = new THREE.Geometry();

      /// Pass vertices
      for (let i = 0; i < collision.vertices.length; i++) {
        let v = collision.vertices[i];
        // "x","float32","z","float32","y","float32"]
        geom.vertices.push(new THREE.Vector3(v[0], v[2], -v[1]));
      }

      /// Pass faces
      for (let i = 0; i < collision.indices.length; i += 3) {
        let f1 = collision.indices[i];
        let f2 = collision.indices[i + 1];
        let f3 = collision.indices[i + 2];

        if (f1 <= collision.vertices.length && f2 <= collision.vertices.length && f3 <= collision.vertices.length) {
          geom.faces.push(new THREE.Face3(f1, f2, f3));
        } else {
          this.logger.log(T3D.Logger.TYPE_ERROR, "Errorus index in havok model geometry.");
        }
      }

      /// Prepare geometry and pass new mesh
      geom.computeFaceNormals();
      // geom.computeVertexNormals();

      this.meshes[index] = new THREE.Mesh(geom, mat);

      return this.meshes[index];
    } else {
      return this.meshes[index].clone();
    }
  }

  /**
   * Output fileds generated:
   *
   * - *boundingBox* Array of values describing the bounding box of all collision.
   * - *meshes* An array of THREE.Mesh objects visualizing all collision in the map.
   *
   * @async
   * @param  {Function} callback Fires when renderer is finished, does not take arguments.
   */
  renderAsync(callback) {
    let self = this;

    // TODO:The design of this method pretty much requires one instance
    // of the class per parallel async render. Should probably fix this
    // at some point...

    /// Get required chunks
    this.havokChunkData = this.mapFile.getChunk("havk").data;

    /// Set static bounds to the bounds of the havk models
    this.getOutput().boundingBox = this.havokChunkData.boundsMax;

    /// Clear old meshes
    this.meshes = [];

    /// Set up output array
    this.getOutput().meshes = [];

    /// Grab model raw data from the chunk.
    /// Add missing scale value to obs models.
    let propModels = this.havokChunkData.propModels;
    let zoneModels = this.havokChunkData.zoneModels;
    let obsModels = this.havokChunkData.obsModels;
    obsModels.forEach(function (mdl) {
      mdl.scale = 1;
    });

    /// Store geoms and animations from the file in hte instance so we don't
    /// have to pass them arround too much. (fix this later)
    this.geometries = this.havokChunkData.geometries;
    this.animations = this.havokChunkData.animations;

    /// Render "prop", "zone" and "obs" models in that order.
    let renderZoneModelsCB = function () {
      self.renderModels(obsModels, "obs", callback);
    };
    let renderPropModelsCB = function () {
      self.renderModels(zoneModels, "zone", renderZoneModelsCB);
    };
    self.renderModels(propModels, "prop", renderPropModelsCB);
  }
}

HavokRenderer.rendererName = "HavokRenderer";
module.exports = HavokRenderer;
