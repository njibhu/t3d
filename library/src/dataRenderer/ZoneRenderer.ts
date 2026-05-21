import * as RenderUtils from "../util/RenderUtils";
import DataRenderer from "./DataRenderer";
import * as THREE from "three";
import TerrainRenderer from "./TerrainRenderer";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { InstancedMesh, Matrix4 } from "three";
import type { FileParser } from "t3d-parser";

type ModelGroupEntry = {
  matrix: THREE.Matrix4;
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
  meshCache: any;
  textureCache: any;

  mapFile: FileParser;
  constructor(localReader: LocalReader, settings: any, context: any, logger: typeof Logger) {
    super(localReader, settings, context, logger, "ZoneRenderer");
    this.mapFile = this.settings.mapFile;
  }
  /**
   * TODO
   *
   * @param  {*} zone               [description]
   * @param  {*} zoneDefs           [description]
   * @param  {*} mapRect            [description]
   * @param  {*} renderZoneCallback [description]
   * @return {*}                    [description]
   */
  renderZone(zone: any, zoneDefs: any, mapRect: [number, number], renderZoneCallback: Function) {
    const self = this;

    /// Get Zone Definition
    let zoneDef: any = null;
    zoneDefs.forEach(function (zd: any) {
      if (!zoneDef && zd.token === zone.defToken) zoneDef = zd;
    });

    /// Create array of all models to add:
    // let models = []
    const modelGroups = this.getModelGroups(zone, zoneDef, mapRect);

    /// Create empty mesh cache
    self.meshCache = {};
    self.textureCache = {};
    const groupKeys = Object.keys(modelGroups);
    const concurrency = RenderUtils.getMaxConcurrentModelLoads(this.localReader, this.settings.maxConcurrentModelLoads);

    RenderUtils.runWithConcurrency(groupKeys, concurrency, async (key) => {
      const { meshes } = await RenderUtils.getMeshesForFilenameAsync(
        key as any,
        null,
        self.localReader,
        self.meshCache,
        self.textureCache,
        false
      );

      if (!meshes || meshes.length === 0) {
        return;
      }

      const objects = this.createZoneObjects(modelGroups[key as any], meshes);
      for (const object of objects) {
        self.getOutput().meshes.push(object);
      }
    })
      .then(() => {
        self.meshCache = {};
        self.textureCache = {};
        renderZoneCallback();
      })
      .catch((error) => {
        self.logger.log(self.logger.TYPE_ERROR, error);
        self.meshCache = {};
        self.textureCache = {};
        renderZoneCallback();
      });
  }

  /**
   * TODO
   *
   * @param  {*} zone    [description]
   * @param  {*} zoneDef [description]
   * @param  {*} mapRect [description]
   * @return {*}         [description]
   */
  getModelGroups(zone: any, zoneDef: any, mapRect: [number, number]): Record<number, ModelGroupEntry[]> {
    /// Calculate rect in global coordinates
    // let zPos = zone.zPos;

    const mapX = mapRect[0];
    const mapY = mapRect[1];
    const c = 32 + 16;

    // ["x1","uint32","y1","uint32","x2","uint32", "y2", "uint32"]
    const zoneRect = {
      x1: zone.vertRect[0] * c + mapX,
      x2: zone.vertRect[2] * c + mapX,
      y1: zone.vertRect[1] * -c - mapY,
      y2: zone.vertRect[3] * -c - mapY,
    };

    /// Zone width and depth in local corrdinates
    /* var zdx = zone.vertRect.x1-zone.vertRect.x2;
    var zdy = zone.vertRect.y1-zone.vertRect.y2; */

    /// These zones seems to overflow :/
    if (zone.encodeData.length === 0) {
      return {};
    }

    // console.log("Get mdl groups", zone);
    /// Testing: Render Zone Vert Rect
    // RenderUtils.renderRect(zoneRect, -zPos);

    const zdx = zone.vertRect[0] - zone.vertRect[2];
    // let zdy = zone.vertRect[1] - zone.vertRect[3];

    /// Zone Flags increases a linear position, used to step trough the Zone.
    let linearPos = 0;

    const modelGroups: Record<number, ModelGroupEntry[]> = {};

    const terrainSampler = this.getOutput(TerrainRenderer).heightSampler;

    for (let i = 0; i < zone.flags.length; i += 2) {
      /// Step forward
      linearPos += zone.flags[i];

      /// Check if a model should be placed
      const flag = zone.flags[i + 1];
      if (flag !== 0) {
        /// Extract flag data
        /// Layer is written in the last 4 bytes
        const zoneDefLayer = flag >> 4;

        /// Get Zone Definition Layer
        const layer = zoneDef.layerDefArray[zoneDefLayer - 1];

        /// TESTING Only show layers with height >= 3
        if (layer /* && layer.height >= 0 */) {
          /// Get X and Y from linear position
          const modelX = (linearPos % zdx) * c + zoneRect.x1;
          const modelY = Math.floor(linearPos / zdx) * c + zoneRect.y1;

          /// Get terrain height directly from the sampled terrain grid.
          const modelZ = TerrainRenderer.sampleHeightAt(terrainSampler, modelX, modelY);

          /// Get model id
          /// TODO: check with modelIdx = flag & 0xf;
          const modelIdx = 0;
          const model = layer.modelArray[modelIdx];
          const modelFilename: number = model.filename;
          // let zOffsets = model.zOffsets;

          // let layerFlags = layer.layerFlags; // NOrmaly 128, 128

          // TODO: flip z,y?
          /// Create modelGroup (this zone only)
          if (!modelGroups[modelFilename]) {
            modelGroups[modelFilename] = [];
          }

          /// Add entry to model group
          modelGroups[modelFilename].push({
            matrix: new THREE.Matrix4().makeTranslation(modelX, modelZ, modelY),
          });
        } /// End if layer
      } /// End if flag != 0
    } /// End for each flag

    return modelGroups;
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
    const self = this;

    /// Set up output array
    self.getOutput().meshes = [];

    const zoneChunkData = this.mapFile.getChunk("zon2")!.data;
    const parameterChunkData = this.mapFile.getChunk("parm")!.data;
    // let terrainChunkData = this.mapFile.getChunk("trn").data;
    const mapRect = parameterChunkData.rect;

    /// Zone data
    const zones = zoneChunkData.zoneArray;
    const zoneDefs = zoneChunkData.zoneDefArray;

    /// Render each zone
    let lastPct = -1;

    /// Main render loop, render each zone
    function stepZone(i: number) {
      const pct = Math.round((100.0 * i) / zones.length);
      if (lastPct !== pct) {
        self.logger.log(self.logger.TYPE_PROGRESS, "Loading 3D Models (Zone)", pct);
        lastPct = pct;
      }

      if (i >= zones.length) {
        callback();
        return;
      }

      /// Main zone render function call
      self.renderZone(zones[i], zoneDefs, mapRect, stepZone.bind(self, i + 1));
    }

    stepZone(0);
  }

  private createZoneObjects(placements: ModelGroupEntry[], meshes: RenderUtils.FinalMesh[]): THREE.Object3D[] {
    const placementMatrices = placements.map((placement) => placement.matrix);
    const objects: THREE.Object3D[] = [];

    for (const instancedMesh of createInstancedZoneMeshes(meshes, placementMatrices)) {
      RenderUtils.trackMeshResources(this.context, instancedMesh as any);
      objects.push(instancedMesh);
    }

    return objects;
  }
}

function createInstancedZoneMeshes(meshes: RenderUtils.FinalMesh[], matrices: Matrix4[]): InstancedMesh[] {
  if (meshes.length === 0 || matrices.length === 0) {
    return [];
  }

  const instancedMeshes = RenderUtils.getInstancedMeshes(meshes, matrices.length);
  for (const instancedMesh of instancedMeshes) {
    for (let matrixIndex = 0; matrixIndex < matrices.length; matrixIndex++) {
      instancedMesh.setMatrixAt(matrixIndex, matrices[matrixIndex]);
    }
    instancedMesh.instanceMatrix.needsUpdate = true;
    instancedMesh.computeBoundingSphere();
  }

  return instancedMeshes;
}

/*
/// NOT USED??
// eslint-disable-next-line no-unused-vars
function addZoneMeshesToScene(meshes, isCached, position, scale, rotation) {
  /// Called for each mesh in the zone
  /// TODO: Opt opt opt...

  meshes.forEach(function (mesh) {
    /// Create new mesh if we got back a cached original.
    if (isCached) mesh = new THREE.Mesh(mesh.geometry, mesh.material);

    /// Scale, position and rotate.
    mesh.scale.set(scale, scale, scale);
    if (rotation) {
      mesh.rotation.order = "ZXY";
      mesh.rotation.set(rotation.x, rotation.y, rotation.z);
    }
    mesh.position.set(position.x, position.y, position.z);

    /// Add to export
    this.getOutput().meshes.push(mesh);
  });
}
*/

/// / Not used: zone defintion per chunk data "images" 32*32 points
/*
//Total map dx and dy
var d = terrainChunkHeader.data;
var pd = parameterChunkHeader.data;
var dx = (pd.rect.x2-pd.rect.x1);
var dy = (pd.rect.y2-pd.rect.y1);

//Each chunk dx and dy

var c =1;
var cdx = c*dx/d.dims.dim1;

var cdy = c*dy/d.dims.dim2;

var cdx = dx/(d.numChunksD_1*2);
var cdy =dy/(d.numChunksD_2*2);

for(var i=0; i<zoneDefs.length; i++){
  var zoneDef = zoneDefs[i];

  //TODO: opt!
  zoneDef.layerDefs.forEach(function(layer){

    layer.modelArray.forEach(function(model){

    });

  });

  var chunkMat = new THREE.MeshBasicMaterial(
    {
      color: 0x00ff00,
      wireframe:true,
       opacity: 1.0,
    }
  );

  //TODO: opt!

  if(
    zoneDef.token == 597  ||
    zoneDef.token == 1369  ||
    zoneDef.token == 903
  ){

    zoneDef.pageTable.pageArray.forEach(function(page){
      var flags = page.flags;
      var coord = page.chunkCoord;

      //Hightlight this coord
      var rect = {};

      //var globalOffsetX = pd.rect.x2 - cdx;
      var globalOffsetX = pd.rect.x1 + cdx/2;
      var chunkOffsetX = coord[0] * cdx;

      rect.x1  = globalOffsetX + chunkOffsetX;

      ///Adjust for odd / even number of chunks
      if(d.numChunksD_2 % 2 == 0){

        var globalOffsetY = -pd.rect.y1;
        var chunkOffsetY = -coord[1] * cdy;

        rect.y1  =  chunkOffsetY + globalOffsetY;
      }
      else{

        var globalOffsetY =  -pd.rect.y1;
        var chunkOffsetY = -coord[1] * cdy;

        rect.y1 = globalOffsetY +  chunkOffsetY;
      }

      rect.x2 = rect.x1+cdx;
      rect.y2 = rect.y1+cdy;

      RenderUtils.renderRect(rect, 4000,chunkMat, 4000);

      //for(var j=0; j<flags.length; j++){
      //  if(flags[j]>0){
      //    console.log("Found flag",flags[j],"@ zoneDef",zoneDef.token,"coord",coord,"index",j);
      //  }
      //}
    });

  }

} */
