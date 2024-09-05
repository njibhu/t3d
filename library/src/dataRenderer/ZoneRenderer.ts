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

import * as RenderUtils from "../util/RenderUtils";
import DataRenderer from "./DataRenderer";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { BufferGeometry } from "three";
import type GW2File from "../format/file/GW2File";

type ModelGroupEntry = {
  x: number;
  y: number;
  z: number;
  rotRangeX: [number, number];
  rotRangeY: [number, number];
  rotRangeZ: [number, number];
  scaleRange: [number, number];
  fadeRange: [number, number];
}

/**
 *
 * A renderer that generates zone models for a map.
 *
 * @class ZoneRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a GW2File.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
export default class ZoneRenderer extends DataRenderer {
  static rendererName = "ZoneRenderer";
  meshCache: any;
  textureCache: any;

  mapFile: GW2File;
  constructor(localReader: LocalReader, settings: any, context: any, logger: Logger) {
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

    /*
     * ---Keeping this out of the doc for now---
     * Steps trough each model and renders it to the scene, allowing for efficient caching.
     * @param  {Number} i - Current index within the models array
     */
    // var lastPct = -1;
    const groupKeys = Object.keys(modelGroups);
    function stepModels(i: number) {
      /* var pct = Math.round(100.0*i / groupKeys.length);
      if(lastPct!=pct){
        console.log("Rendering ZONE models "+pct);
        lastPct = pct;
      } */

      if (i >= groupKeys.length) {
        /// Empty mesh cache
        self.meshCache = {};
        self.textureCache = {};

        /// Tell caller this zone is done loading
        renderZoneCallback();
        return;
      }

      /// Read model at index
      /// var model = models[i];
      const key = groupKeys[i]; /// key is model filename
      const group = modelGroups[key as any];

      const meshGroups : any[] = [];

      /// Get model just once for this group
      const showUnmaterialed = false;
      RenderUtils.getMeshesForFilename(
        key as any,
        null,
        self.localReader,
        self.meshCache,
        self.textureCache,
        showUnmaterialed,

        function (meshes /*, isCached*/) {
          /// If there were meshes, add them to the scene with correct scaling rotation etc.
          if (meshes /* && meshes.length == 3 */) {
            /// Add one copy per model instance
            /// TODO: add rotation!
            /// TODO: fine tune position?
            /// TODO: POTIMIZE!

            group.forEach(function (model, instanceIdx) {
              //let isCached = true;
              //let scale = 1.0;

              /// For each Mesh in the model
              meshes.forEach(function (mesh, meshIdx) {
                if (mesh.materialFlags === 525 /* || mesh.materialFlags == 520 || mesh.materialFlags == 521 */) {
                  // console.log("Skipping lod");
                  return;
                }

                const move = { x: 0, y: 0, z: 0 };

                /// Add to big mesh
                if (!meshGroups[meshIdx]) {
                  const mg: BufferGeometry = mesh.geometry.clone() as any;
                  meshGroups[meshIdx] = {
                    readVerts: mg.getAttribute("position").array,
                    verts: new Float32Array(group.length * mg.getAttribute("position").array.length),

                    readIndices: mg.getIndex()!.array,
                    indices: new Uint32Array(group.length * mg.getIndex()!.array.length),

                    readUVs: mg.getAttribute("uv").array,
                    uvs: new Float32Array(group.length * mg.getAttribute("uv").array.length),

                    readNormals: mg.getAttribute("normal").array,
                    normals: new Float32Array(group.length * mg.getAttribute("normal").array.length),

                    material: mesh.material,
                    // material:new THREE.MeshBasicMaterial( {color: 0xffcccc, wireframe:true} ),
                    /* material : new THREE.PointCloudMaterial ({
                        color: 0xFF0000,
                        size: 20
                      }), */
                    position: { x: model.x, y: model.y, z: model.z },
                  };
                } else {
                  /// Translate
                  move.x = model.x - meshGroups[meshIdx].position.x;
                  move.y = model.z - meshGroups[meshIdx].position.z;
                  move.z = model.y - meshGroups[meshIdx].position.y;
                }

                /// Add geom verts
                const readVerts = meshGroups[meshIdx].readVerts;
                const writeVerts = meshGroups[meshIdx].verts;
                const stride = readVerts.length;

                for (let i = 0, j = instanceIdx * stride; i < stride; i += 3, j += 3) {
                  writeVerts[j + 0] = readVerts[i + 0] + move.x;
                  writeVerts[j + 1] = readVerts[i + 1] + move.y;
                  writeVerts[j + 2] = readVerts[i + 2] + move.z;
                }

                const readIndices = meshGroups[meshIdx].readIndices;
                const writeIndices = meshGroups[meshIdx].indices;
                const strideIndices = readIndices.length;
                const shift = (stride * instanceIdx) / 3;

                for (let i = 0, j = instanceIdx * strideIndices; i < strideIndices; i++, j++) {
                  writeIndices[j] = readIndices[i] + shift;
                }

                const readUVs = meshGroups[meshIdx].readUVs;
                const writeUvs = meshGroups[meshIdx].uvs;
                const uvStride = readUVs.length;
                for (let i = 0, j = instanceIdx * uvStride; i < uvStride; i++, j++) {
                  writeUvs[j] = readUVs[i];
                }

                const readNormals = meshGroups[meshIdx].readNormals;
                const writeNormals = meshGroups[meshIdx].normals;
                const normalStride = readNormals.length;
                for (let i = 0, j = instanceIdx * normalStride; i < normalStride; i++, j++) {
                  writeNormals[j] = readNormals[i];
                }
              });
            }); // End for each model in group
          } /// End if meshes

          /// Add each cluster of merged meshes to scene
          meshGroups.forEach(function (meshGroup) {
            const mergedGeom = new THREE.BufferGeometry();

            mergedGeom.setAttribute("position", new THREE.BufferAttribute(meshGroup.verts, 3));
            // mergedGeom.setAttribute( 'index', new THREE.BufferAttribute( meshGroup.indices, 1) );
            mergedGeom.setIndex(new THREE.BufferAttribute(meshGroup.indices, 1));
            mergedGeom.setAttribute("normal", new THREE.BufferAttribute(meshGroup.normals, 3));
            mergedGeom.setAttribute("uv", new THREE.BufferAttribute(meshGroup.uvs, 2));

            //@ts-ignore
            mergedGeom.buffersNeedUpdate = true;

            const mesh = new THREE.Mesh(mergedGeom, meshGroup.material);
            mesh.position.set(meshGroup.position.x, meshGroup.position.z, meshGroup.position.y);

            self.getOutput().meshes.push(mesh);
          }); // End for each meshgroup

          /// Rendering is done, render next.
          stepModels(i + 1);
        }
      );
    } /// End function stepModels

    /// Begin stepping trough the models, rendering them.
    stepModels(0);
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

    const modelGroups : Record<number, ModelGroupEntry[]>= {};

    const terrainTiles = this.getOutput(T3D.TerrainRenderer).terrainTiles;

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

          /// Get Z from intersection with terrain
          let modelZ: any = null;

          const startZ = 100000;

          const raycaster = new THREE.Raycaster(new THREE.Vector3(modelX, startZ, modelY), new THREE.Vector3(0, -1, 0));

          /// TODO: OPT?
          terrainTiles.forEach(function (chunk: any) {
            if (modelZ === null) {
              const intersections = raycaster.intersectObject(chunk);
              if (intersections.length > 0) {
                modelZ = startZ - intersections[0].distance;
              }
            }
          });

          /// Get model id
          /// TODO: check with modelIdx = flag & 0xf;
          const modelIdx = 0;
          const model = layer.modelArray[modelIdx];
          const modelFilename: number = model.filename;
          // let zOffsets = model.zOffsets;

          // let layerFlags = layer.layerFlags; // NOrmaly 128, 128

          // TODO: flip z,y?
          const rotRangeX = layer.rotRangeX; // max min
          const rotRangeY = layer.rotRangeY; // max min
          const rotRangeZ = layer.rotRangeZ; // max min
          const scaleRange = layer.scaleRange; // max min
          const fadeRange = layer.fadeRange; // max min

          // Unused
          // tiling: 3
          // type: 1
          // width: 2
          // radiusGround: 2

          /// Create modelGroup (this zone only)
          if (!modelGroups[modelFilename]) {
            modelGroups[modelFilename] = [];
          }

          /// Add entry to model group
          modelGroups[modelFilename].push({
            x: modelX,
            y: modelY,
            z: modelZ,
            rotRangeX: rotRangeX,
            rotRangeY: rotRangeY,
            rotRangeZ: rotRangeZ,
            scaleRange: scaleRange,
            fadeRange: fadeRange,
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
  renderAsync(callback: Function) {
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
        self.logger.log(T3D.Logger.TYPE_PROGRESS, "Loading 3D Models (Zone)", pct);
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
