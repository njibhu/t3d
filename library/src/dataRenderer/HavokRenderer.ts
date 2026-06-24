import DataRenderer from "./DataRenderer";
import * as THREE from "three";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { FileParser } from "t3d-parser";
import type { Material } from "three";

type CollisionBucket = {
  collision: any;
  models: any[];
};

/**
 *
 * A renderer that generates meshes describing the collisions of a map.
 *
 * @class HavokRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a FileParser. If "visible" is specified and true, the generated meshes will be textured
 * with a MeshNormalMaterial, otherwise they will not be visible.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
export default class HavokRenderer extends DataRenderer {
  static override rendererName = "HavokRenderer";
  mapFile: FileParser;
  lastP: number;
  seed: number;
  collisionGeometries: Array<THREE.BufferGeometry | undefined>;
  geometries: any;
  animations: any;
  havokChunkData: any;
  private readonly tempPosition: THREE.Vector3;
  private readonly tempScale: THREE.Vector3;
  private readonly tempEuler: THREE.Euler;
  private readonly tempQuaternion: THREE.Quaternion;
  private readonly tempMatrix: THREE.Matrix4;

  constructor(localReader: LocalReader, settings: any, context: any, logger: typeof Logger) {
    super(localReader, settings, context, logger, "HavokRenderer");

    this.mapFile = this.settings.mapFile;

    this.lastP = -1;
    this.seed = 1;
    this.collisionGeometries = [];

    this.tempPosition = new THREE.Vector3();
    this.tempScale = new THREE.Vector3(1, 1, 1);
    this.tempEuler = new THREE.Euler(0, 0, 0, "ZXY");
    this.tempQuaternion = new THREE.Quaternion();
    this.tempMatrix = new THREE.Matrix4();
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
      const rawOpacity = typeof this.settings?.opacity === "number" ? this.settings.opacity : 1;
      const opacity = Math.min(1, Math.max(0, rawOpacity));
      const transparent = opacity < 1;

      mat = new THREE.MeshNormalMaterial({
        side: THREE.DoubleSide,
        flatShading: true,
        opacity,
        transparent,
        // Prevent collisions from writing depth when translucent so they don't occlude other layers.
        depthWrite: !transparent,
      });
    } else if (this.settings && this.settings.export) {
      mat = new THREE.MeshBasicMaterial({ visible: true });
    } else {
      mat = new THREE.MeshBasicMaterial({ visible: false });
    }

    const collisionBuckets = new Map<number, CollisionBucket>();
    const animationCache = new Map<number, any>();

    this.parseAllModels(models, mat, title, 200, 0, collisionBuckets, animationCache, () => {
      this.flushCollisionBuckets(collisionBuckets, mat);
      callback();
    });
  }

  /**
   * TODO
   *
   * @param  {*} models       [description]
   * @param  {*} mat       [description]
   * @param  {*} title     [description]
   * @param  {*} chunkSize [description]
   * @param  {*} offset    [description]
   * @param  {*} collisionBuckets [description]
   * @param  {*} animationCache [description]
   * @return {*} callback          [description]
   * @async
   */
  parseAllModels(
    models: any,
    mat: Material,
    title: any,
    chunkSize: any,
    offset: any,
    collisionBuckets: Map<number, CollisionBucket>,
    animationCache: Map<number, any>,
    callback: Function
  ): void {
    let i = offset;

    for (; i < offset + chunkSize && i < models.length; i++) {
      const p = Math.round((i * 100) / models.length);
      if (p !== this.lastP) {
        this.logger.log(this.logger.TYPE_PROGRESS, "Loading Collision Models (" + title + ")", p);
        this.lastP = p;
      }

      const model = models[i];

      /// Get animation object
      const animation = this.animationFromGeomIndex(
        model.geometryIndex,
        this.geometries,
        this.animations,
        animationCache
      );

      if (!animation || !animation.collisionIndices) {
        continue;
      }

      for (let j = 0; j < animation.collisionIndices.length; j++) {
        const collisionIndex = animation.collisionIndices[j];
        const collision = this.havokChunkData.collisions[collisionIndex];
        if (!collision) {
          continue;
        }

        let bucket = collisionBuckets.get(collisionIndex);
        if (!bucket) {
          bucket = {
            collision,
            models: [],
          };
          collisionBuckets.set(collisionIndex, bucket);
        }

        bucket.models.push(model);
      }
    }

    if (i < models.length) {
      setTimeout(
        this.parseAllModels.bind(
          this,
          models,
          mat,
          title,
          chunkSize,
          offset + chunkSize,
          collisionBuckets,
          animationCache,
          callback
        ),
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
  animationFromGeomIndex(propGeomIndex: any, geometries: any, animations: any, cache?: Map<number, any>) {
    if (cache && cache.has(propGeomIndex)) {
      return cache.get(propGeomIndex);
    }

    // geometries is just list of all geometries.animations[end] for now
    const l = geometries[propGeomIndex].animations.length;
    const animation = animations[geometries[propGeomIndex].animations[l - 1]];

    if (cache) {
      cache.set(propGeomIndex, animation);
    }

    return animation;
    // return animations[ geometries[propGeomIndex].animations[0] ];
  }

  /**
   * TODO
   *
   * @param  {*} mat       [description]
   * @return {*}           [description]
   */
  flushCollisionBuckets(collisionBuckets: Map<number, CollisionBucket>, mat: Material) {
    for (const [collisionIndex, bucket] of collisionBuckets) {
      const geometry = this.parseHavokGeometry(bucket.collision, collisionIndex);
      const instanceCount = bucket.models.length;

      if (!instanceCount) {
        continue;
      }

      const instancedMesh = new THREE.InstancedMesh(geometry, mat, instanceCount);
      instancedMesh.matrixAutoUpdate = false;

      for (let i = 0; i < instanceCount; i++) {
        this.populateTransformMatrix(bucket.models[i], this.tempMatrix);
        instancedMesh.setMatrixAt(i, this.tempMatrix);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      instancedMesh.userData.t3dInspect = {
        inspectable: true,
        sourceKind: "collision",
        objectLabel: "Collision mesh",
        collisionIndex,
        instanceCount,
      };
      this.getOutput().meshes.push(instancedMesh);
    }
  }

  /**
   * Build model transform matrix in the same axis order as the legacy mesh path.
   */
  populateTransformMatrix(model: any, out: THREE.Matrix4): THREE.Matrix4 {
    const pos = model.translate;
    const rot = model.rotate;
    const scale = 32 * model.scale;

    this.tempPosition.set(pos ? pos[0] : 0, pos ? -pos[2] : 0, pos ? -pos[1] : 0);
    this.tempScale.set(1, 1, 1);
    if (scale) {
      this.tempScale.set(scale, scale, scale);
    }

    this.tempQuaternion.identity();
    if (rot) {
      this.tempEuler.set(rot[0], -rot[2], -rot[1], "ZXY");
      this.tempQuaternion.setFromEuler(this.tempEuler);
    }

    return out.compose(this.tempPosition, this.tempQuaternion, this.tempScale);
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
   * @param  {*} index     [description]
   * @return {*}           [description]
   */
  parseHavokGeometry(collision: any, index: number): THREE.BufferGeometry {
    if (!this.collisionGeometries[index]) {
      const geom = new THREE.BufferGeometry();

      // Pass vertices
      const vertices = new Float32Array(collision.vertices.length * 3);
      for (let i = 0; i < collision.vertices.length; i++) {
        const v = collision.vertices[i];
        const outIndex = i * 3;
        vertices[outIndex] = v[0];
        vertices[outIndex + 1] = v[2];
        vertices[outIndex + 2] = -v[1];
      }

      geom.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

      // Pass faces (indices)
      const maxIndex = collision.vertices.length - 1;
      const IndexArrayCtor = collision.vertices.length > 65535 ? Uint32Array : Uint16Array;
      const indices = new IndexArrayCtor(collision.indices.length);
      let writeIndex = 0;
      let invalidFaceCount = 0;

      for (let i = 0; i < collision.indices.length; i += 3) {
        const f1 = collision.indices[i];
        const f2 = collision.indices[i + 1];
        const f3 = collision.indices[i + 2];

        if (f1 <= maxIndex && f2 <= maxIndex && f3 <= maxIndex) {
          indices[writeIndex++] = f1;
          indices[writeIndex++] = f2;
          indices[writeIndex++] = f3;
        } else {
          invalidFaceCount++;
        }
      }

      if (invalidFaceCount > 0) {
        this.logger.log(
          this.logger.TYPE_ERROR,
          "Invalid indices in havok model geometry. Skipped",
          invalidFaceCount,
          "faces."
        );
      }

      const finalIndices = writeIndex === indices.length ? indices : indices.slice(0, writeIndex);
      geom.setIndex(new THREE.BufferAttribute(finalIndices, 1));

      if (this.settings && this.settings.visible) {
        geom.computeVertexNormals();
      }

      this.collisionGeometries[index] = geom;
    }

    return this.collisionGeometries[index]!;
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
  override renderAsync(callback: Function) {
    const self = this;

    // TODO:The design of this method pretty much requires one instance
    // of the class per parallel async render. Should probably fix this
    // at some point...

    /// Get required chunks
    this.havokChunkData = this.mapFile.getChunk("havk")!.data;

    /// Set static bounds to the bounds of the havk models
    this.getOutput().boundingBox = this.havokChunkData.boundsMax;

    /// Clear old meshes
    this.collisionGeometries = [];

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
