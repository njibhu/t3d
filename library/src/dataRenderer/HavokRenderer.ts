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

import DataRenderer from "./DataRenderer";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type GW2File from "../format/file/GW2File";
import type { Material, Mesh } from "three";

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
export default class HavokRenderer extends DataRenderer {
  static rendererName = "HavokRenderer";
  mapFile: GW2File;
  lastP: number;
  seed: number;
  meshes: Mesh[];
  geometries: any;
  animations: any;
  havokChunkData: any;

  constructor(localReader: LocalReader, settings: any, context: any, logger: typeof Logger) {
    super(localReader, settings, context, logger, "HavokRenderer")

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
  renderModels(models: any, title: any, callback: Function): void {
    let mat;
    if (this.settings && this.settings.visible) {
      mat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
    } else if (this.settings && this.settings.export) {
      mat = new THREE.MeshBasicMaterial({ visible: true });
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
  getCollisionsForAnimation(animation: any, collisions: any): any[] {
    const ret = [];

    for (let i = 0; i < animation.collisionIndices.length; i++) {
      const index = animation.collisionIndices[i];
      const collision = collisions[index];
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
  parseAllModels(models: any, mat: Material, title: any, chunkSize: any, offset: any, callback: Function): void {
    let i = offset;

    for (; i < offset + chunkSize && i < models.length; i++) {
      const p = Math.round((i * 100) / models.length);
      if (p !== this.lastP) {
        this.logger.log(T3D.Logger.TYPE_PROGRESS, "Loading Collision Models (" + title + ")", p);
        this.lastP = p;
      }

      /// Get animation object
      const animation = this.animationFromGeomIndex(models[i].geometryIndex, this.geometries, this.animations);

      const collisions = this.getCollisionsForAnimation(animation, this.havokChunkData.collisions);

      for (let j = 0; j < collisions.length; j++) {
        const collision = collisions[j];
        this.renderMesh(collision, models[i], mat);
      }
    }

    if (i < models.length) {
      setTimeout(
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
  animationFromGeomIndex(propGeomIndex: any, geometries: any, animations: any) {
    // geometries is just list of all geometries.animations[end] for now
    const l = geometries[propGeomIndex].animations.length;

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
  renderMesh(collision: any, model: any, mat: Material) {
    const pos = model.translate;
    const rot = model.rotate;
    const scale = 32 * model.scale;

    /// Generate mesh
    const mesh = this.parseHavokMesh(collision, mat);

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
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

  /**
   * TODO
   *
   * @param  {*} collision [description]
   * @param  {*} mat       [description]
   * @return {*}           [description]
   */
  parseHavokMesh(collision: any, mat: Material) {
    const index = collision.index;

    if (!this.meshes[index]) {
      const geom = new THREE.Geometry();

      /// Pass vertices
      for (let i = 0; i < collision.vertices.length; i++) {
        const v = collision.vertices[i];
        // "x","float32","z","float32","y","float32"]
        geom.vertices.push(new THREE.Vector3(v[0], v[2], -v[1]));
      }

      /// Pass faces
      for (let i = 0; i < collision.indices.length; i += 3) {
        const f1 = collision.indices[i];
        const f2 = collision.indices[i + 1];
        const f3 = collision.indices[i + 2];

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
  renderAsync(callback: Function) {
    const self = this;

    // TODO:The design of this method pretty much requires one instance
    // of the class per parallel async render. Should probably fix this
    // at some point...

    /// Get required chunks
    this.havokChunkData = this.mapFile.getChunk("havk")!.data;

    /// Set static bounds to the bounds of the havk models
    this.getOutput().boundingBox = this.havokChunkData.boundsMax;

    /// Clear old meshes
    this.meshes = [];

    /// Set up output array
    this.getOutput().meshes = [];

    /// Grab model raw data from the chunk.
    /// Add missing scale value to obs models.
    const propModels = this.havokChunkData.propModels;
    const zoneModels = this.havokChunkData.zoneModels;
    const obsModels = this.havokChunkData.obsModels;
    obsModels.forEach(function (mdl: any) {
      mdl.scale = 1;
    });

    /// Store geoms and animations from the file in hte instance so we don't
    /// have to pass them arround too much. (fix this later)
    this.geometries = this.havokChunkData.geometries;
    this.animations = this.havokChunkData.animations;

    /// Render "prop", "zone" and "obs" models in that order.
    const renderZoneModelsCB = function () {
      self.renderModels(obsModels, "obs", callback);
    };
    const renderPropModelsCB = function () {
      self.renderModels(zoneModels, "zone", renderZoneModelsCB);
    };
    self.renderModels(propModels, "prop", renderPropModelsCB);
  }
}

