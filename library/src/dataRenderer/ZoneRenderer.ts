import * as LogsUtils from "../util/Logs";
import * as RenderUtils from "../util/RenderUtils";
import DataRenderer from "./DataRenderer";
import * as THREE from "three";
import TerrainRenderer from "./TerrainRenderer";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { FileParser } from "t3d-parser";

type ModelPlacement = {
  worldX: number;
  worldY: number;
  worldZ: number;
};

type TerrainHeightSampler = {
  sampleHeight(x: number, z: number): number | null;
};

/**
 *
 * A renderer that generates zone models for a map.
 *
 * @class ZoneRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a FileParser.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
export default class ZoneRenderer extends DataRenderer {
  static override rendererName = "ZoneRenderer";

  mapFile: FileParser;
  meshCache: any;
  textureCache: any;

  constructor(localReader: LocalReader, settings: any, context: any, logger: typeof Logger) {
    super(localReader, settings, context, logger, "ZoneRenderer");
    this.mapFile = this.settings.mapFile;
    this.meshCache = {};
    this.textureCache = {};
  }

  collectModelGroups(
    zones: any[],
    zoneDefsByToken: Map<number, any>,
    mapRect: [number, number],
    terrainHeightSampler: TerrainHeightSampler
  ): Record<number, ModelPlacement[]> {
    const allModelGroups: Record<number, ModelPlacement[]> = {};

    for (const zone of zones) {
      const zoneDef = zoneDefsByToken.get(zone.defToken);
      if (!zoneDef) {
        continue;
      }

      const modelGroups = this.getModelGroups(zone, zoneDef, mapRect, terrainHeightSampler);
      for (const key of Object.keys(modelGroups)) {
        const modelName = Number(key);
        if (!allModelGroups[modelName]) {
          allModelGroups[modelName] = modelGroups[modelName];
        } else {
          allModelGroups[modelName].push(...modelGroups[modelName]);
        }
      }
    }

    return allModelGroups;
  }

  getModelGroups(
    zone: any,
    zoneDef: any,
    mapRect: [number, number],
    terrainHeightSampler: TerrainHeightSampler
  ): Record<number, ModelPlacement[]> {
    const mapX = mapRect[0];
    const mapY = mapRect[1];
    const c = 32 + 16;

    const zoneRect = {
      x1: zone.vertRect[0] * c + mapX,
      y1: zone.vertRect[1] * -c - mapY,
    };

    if (zone.encodeData.length === 0) {
      return {};
    }

    const zdx = zone.vertRect[0] - zone.vertRect[2];
    if (zdx === 0) {
      return {};
    }

    let linearPos = 0;
    const modelGroups: Record<number, ModelPlacement[]> = {};

    for (let i = 0; i < zone.flags.length; i += 2) {
      linearPos += zone.flags[i];

      const flag = zone.flags[i + 1];
      if (flag === 0) {
        continue;
      }

      const zoneDefLayer = flag >> 4;
      const layer = zoneDef.layerDefArray[zoneDefLayer - 1];
      if (!layer || !layer.modelArray || layer.modelArray.length === 0) {
        continue;
      }

      const worldX = (linearPos % zdx) * c + zoneRect.x1;
      const worldZ = Math.floor(linearPos / zdx) * c + zoneRect.y1;
      const worldY = terrainHeightSampler.sampleHeight(worldX, worldZ);
      if (worldY === null) {
        continue;
      }

      const model = layer.modelArray[0];
      const modelFilename: number = model.filename;
      if (!modelGroups[modelFilename]) {
        modelGroups[modelFilename] = [];
      }

      modelGroups[modelFilename].push({
        worldX: worldX,
        worldY: worldY,
        worldZ: worldZ,
      });
    }

    return modelGroups;
  }

  placeModelGroup(placements: ModelPlacement[], meshes: RenderUtils.FinalMesh[]): void {
    const filteredMeshes = meshes.filter((mesh) => mesh.materialFlags !== 525);
    if (filteredMeshes.length === 0) {
      return;
    }

    const instancedMeshes = RenderUtils.getInstancedMeshes(filteredMeshes, placements.length);
    for (const instancedMesh of instancedMeshes) {
      const matrix = new THREE.Matrix4();
      for (let i = 0; i < placements.length; i++) {
        const placement = placements[i];
        matrix.makeTranslation(placement.worldX, placement.worldY, placement.worldZ);
        instancedMesh.setMatrixAt(i, matrix);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      instancedMesh.computeBoundingBox();
      instancedMesh.computeBoundingSphere();
      this.getOutput().meshes.push(instancedMesh);
    }
  }

  renderModelGroups(
    modelNames: string[],
    modelGroups: Record<number, ModelPlacement[]>,
    index: number,
    callback: Function
  ): void {
    if (index >= modelNames.length) {
      this.meshCache = {};
      this.textureCache = {};
      callback();
      return;
    }

    LogsUtils.progress(this.logger, index, modelNames.length, "Loading 3D Models (Zone)");

    const modelName = Number(modelNames[index]);
    RenderUtils.getMeshesForFilename(
      modelName,
      null,
      this.localReader,
      this.meshCache,
      this.textureCache,
      false,
      (meshes) => {
        if (meshes && modelGroups[modelName] && modelGroups[modelName].length > 0) {
          this.placeModelGroup(modelGroups[modelName], meshes);
        }

        this.renderModelGroups(modelNames, modelGroups, index + 1, callback);
      }
    );
  }

  /**
   * Renders all zone meshes in a GW2 map described by the map's "zon2" chunk.
   * Output fileds generated:
   *
   * - *meshes* An array of THREE.Mesh objects visualizing all zone models refered by this map.
   *
   * @async
   * @param  {Function} callback Fires when renderer is finished, does not take arguments.
   */
  override renderAsync(callback: Function) {
    const startedAt = Date.now();
    this.getOutput().meshes = [];
    this.meshCache = {};
    this.textureCache = {};

    const zoneChunkData = this.mapFile.getChunk("zon2")!.data;
    const parameterChunkData = this.mapFile.getChunk("parm")!.data;
    const mapRect = parameterChunkData.rect;
    const zones = zoneChunkData.zoneArray;
    const zoneDefs = zoneChunkData.zoneDefArray;

    const terrainHeightSampler = this.getOutput(TerrainRenderer).terrainHeightSampler as
      | TerrainHeightSampler
      | undefined;
    if (!terrainHeightSampler) {
      this.logger.log(this.logger.TYPE_WARNING, "ZoneRenderer", "Terrain height sampler missing; skipping zone models");
      callback();
      return;
    }

    const zoneDefsByToken = new Map<number, any>();
    for (const zoneDef of zoneDefs) {
      zoneDefsByToken.set(zoneDef.token, zoneDef);
    }

    const modelGroups = this.collectModelGroups(zones, zoneDefsByToken, mapRect, terrainHeightSampler);
    const modelNames = Object.keys(modelGroups);
    const totalPlacements = modelNames.reduce((count, modelName) => count + modelGroups[Number(modelName)].length, 0);

    const finish = () => {
      const elapsedMs = Date.now() - startedAt;
      this.logger.log(
        this.logger.TYPE_MESSAGE,
        "ZoneRenderer",
        `Loaded zone models in ${elapsedMs} ms (${zones.length} zones, ${totalPlacements} placements, ${modelNames.length} unique models, ${this.getOutput().meshes.length} emitted meshes)`
      );
      callback();
    };

    if (modelNames.length === 0) {
      this.meshCache = {};
      this.textureCache = {};
      finish();
      return;
    }

    this.renderModelGroups(modelNames, modelGroups, 0, finish);
  }
}
