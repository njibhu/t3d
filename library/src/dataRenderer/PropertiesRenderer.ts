import * as RenderUtils from "../util/RenderUtils";
import DataRenderer from "./DataRenderer";
import * as LogsUtils from "../util/Logs";
import * as THREE from "three";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { Matrix4 } from "three";
import type { FileParser } from "t3d-parser";

/**
 *
 * A renderer that generates property models for a map.
 *
 * @class PropertiesRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a FileParser.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
export default class PropertiesRenderer extends DataRenderer {
  static override rendererName = "PropertiesRenderer";

  showUnmaterialized: boolean;
  mapFile: FileParser;
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
  override renderAsync(callback: Function): void {
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
    const concurrency = RenderUtils.getMaxConcurrentModelLoads(this.localReader, this.settings.maxConcurrentModelLoads);

    RenderUtils.runWithConcurrency(this.modelsList, concurrency, async (modelName, index) => {
      LogsUtils.progress(this.logger, index, this.modelsList.length, "Loading 3D Models (Props)");
      const numericModelName = parseInt(modelName);
      const { meshes } = await RenderUtils.getMeshesForFilenameAsync(
        numericModelName,
        this.models[numericModelName].props[0].color,
        this.localReader,
        this.meshCache,
        this.textureCache,
        this.showUnmaterialized
      );

      if (meshes) {
        this.placeModelOnScene(numericModelName, meshes);
      }
    })
      .then(() => {
        this.meshCache = {};
        this.textureCache = {};
        this.models = {};
        callback();
      })
      .catch((error) => {
        this.logger.log(this.logger.TYPE_ERROR, error);
        this.meshCache = {};
        this.textureCache = {};
        this.models = {};
        callback();
      });
  }

  getFileIdsAsync(callback: Function): void {
    this.logger.log(this.logger.TYPE_WARNING, "PropertiesRenderer.getFileIdsAsync is not implemented");
    callback([]);
  }

  /**
   * Gets the meshes of a specific model, merge them together as an instanced mesh
   * and place them in the scene where they are referenced by the props.
   * @param {number} modelName The baseId of the model
   * @param {*} meshes The 3d models of the model
   */
  placeModelOnScene(modelName: number, meshes: RenderUtils.FinalMesh[]): void {
    const model = this.models[modelName];
    if (meshes.length === 0) {
      return;
    }
    const matrices = collectPropMatrices(model.props);
    const instancedMeshes = RenderUtils.getInstancedMeshes(meshes, model.size);
    for (const instancedMesh of instancedMeshes) {
      for (let instancedIndex = 0; instancedIndex < matrices.length; instancedIndex++) {
        instancedMesh.setMatrixAt(instancedIndex, matrices[instancedIndex]);
      }
      instancedMesh.instanceMatrix.needsUpdate = true;
      instancedMesh.computeBoundingSphere();
      RenderUtils.trackMeshResources(this.context, instancedMesh as any);
    }
    for (const instancedMesh of instancedMeshes) {
      this.getOutput().meshes.push(instancedMesh);
    }
  }
}

/**
 * Return a Matrix4 for a given prop defining the Scale Rotation and Location of a model.
 * @param {Object} propData
 * @returns {THREE.Matrix4}
 */
const scratchEuler = new THREE.Euler(0, 0, 0, "ZXY");
const scratchQuaternion = new THREE.Quaternion();
const scratchScale = new THREE.Vector3();
const scratchPosition = new THREE.Vector3();

export function writeMatrixForProp(propData: any, target: Matrix4): Matrix4 {
  scratchEuler.set(propData.rotation[0], -propData.rotation[2], -propData.rotation[1], "ZXY");
  scratchQuaternion.setFromEuler(scratchEuler);
  scratchScale.set(propData.scale, propData.scale, propData.scale);
  scratchPosition.set(propData.position[0], -propData.position[2], -propData.position[1]);
  target.compose(scratchPosition, scratchQuaternion, scratchScale);
  return target;
}

export function collectPropMatrices(props: any[]): Matrix4[] {
  const matrices: Matrix4[] = [];

  for (const prop of props) {
    matrices.push(writeMatrixForProp(prop, new THREE.Matrix4()));
    for (const transform of prop.transforms || []) {
      matrices.push(writeMatrixForProp(transform, new THREE.Matrix4()));
    }
  }

  return matrices;
}
