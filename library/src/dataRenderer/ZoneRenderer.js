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
class ZoneRenderer extends DataRenderer {
  constructor(localReader, settings, context, logger) {
    super(localReader, settings, context, logger, "ZoneRenderer");
    this.mapFile = this.settings.mapFile;

    this.modelGroups = {};
  }

  renderZone(zone, zoneDefs, mapRect, renderZoneCallback) {
    /// Get Zone Definition
    let zoneDef = zoneDefs.find((zd) => zd.token === zone.defToken);

    /// Create array of all models to add:
    this.modelGroups = this.getModelGroups(zone, zoneDef, mapRect);

    /// Create empty mesh cache
    this.meshCache = {};
    this.textureCache = {};

    /// Begin stepping trough the models, rendering them.
    this.renderModel(0, renderZoneCallback);
  }

  renderModel(index, renderZoneCallback) {
    let groupKeys = Object.keys(this.modelGroups);

    /* var pct = Math.round(100.0*i / groupKeys.length);
      if(lastPct!=pct){
        console.log("Rendering ZONE models "+pct);
        lastPct = pct;
      } */

    if (index >= groupKeys.length) {
      /// Empty mesh cache
      this.meshCache = {};
      this.textureCache = {};

      /// Tell caller this zone is done loading
      renderZoneCallback();
      return;
    }

    /// Read model at index
    /// var model = models[i];
    let filename = groupKeys[index]; /// key is model filename
    let group = this.modelGroups[filename];

    let meshGroups = [];

    /// Get model just once for this group
    let showUnmaterialed = false;
    RenderUtils.getMeshesForFilename(
      filename,
      null,
      this.localReader,
      this.meshCache,
      this.textureCache,
      showUnmaterialed,
      (meshes) => {
        this.placeMeshesOnScene(meshes, group, meshGroups);
        this.renderModel(index + 1, renderZoneCallback);
      }
    );
  }

  placeMeshesOnScene(meshes, group, meshGroups) {
    /// If there were meshes, add them to the scene with correct scaling rotation etc.
    if (meshes /* && meshes.length == 3 */) {
      /// Add one copy per model instance
      /// TODO: add rotation!
      /// TODO: fine tune position?
      /// TODO: POTIMIZE!
      for (const [instanceIdx, model] of group.entries()) {
        //let isCached = true;
        //let scale = 1.0;

        /// For each Mesh in the model
        for (const [meshIdx, mesh] of meshes.entries()) {
          if (mesh.materialFlags === 525 /* || mesh.materialFlags == 520 || mesh.materialFlags == 521 */) {
            // Skipping LODs
            return;
          }

          let move = { x: 0, y: 0, z: 0 };

          /// Add to big mesh
          if (!meshGroups[meshIdx]) {
            let mg = mesh.geometry.clone();
            meshGroups[meshIdx] = {
              readVerts: mg.getAttribute("position").array,
              verts: new Float32Array(group.length * mg.getAttribute("position").array.length),

              readIndices: mg.getIndex().array,
              indices: new Uint32Array(group.length * mg.getIndex().array.length),

              readUVs: mg.getAttribute("uv").array,
              uvs: new Float32Array(group.length * mg.getAttribute("uv").array.length),

              readNormals: mg.getAttribute("normal").array,
              normals: new Float32Array(group.length * mg.getAttribute("normal").array.length),

              material: mesh.material,
              position: { x: model.x, y: model.y, z: model.z },
            };
          } else {
            /// Translate
            move.x = model.x - meshGroups[meshIdx].position.x;
            move.y = model.z - meshGroups[meshIdx].position.z;
            move.z = model.y - meshGroups[meshIdx].position.y;
          }

          /// Add geom verts
          let readVerts = meshGroups[meshIdx].readVerts;
          let writeVerts = meshGroups[meshIdx].verts;
          let stride = readVerts.length;

          for (let i = 0, j = instanceIdx * stride; i < stride; i += 3, j += 3) {
            writeVerts[j + 0] = readVerts[i + 0] + move.x;
            writeVerts[j + 1] = readVerts[i + 1] + move.y;
            writeVerts[j + 2] = readVerts[i + 2] + move.z;
          }

          let readIndices = meshGroups[meshIdx].readIndices;
          let writeIndices = meshGroups[meshIdx].indices;
          let strideIndices = readIndices.length;
          let shift = (stride * instanceIdx) / 3;

          for (let i = 0, j = instanceIdx * strideIndices; i < strideIndices; i++, j++) {
            writeIndices[j] = readIndices[i] + shift;
          }

          let readUVs = meshGroups[meshIdx].readUVs;
          let writeUvs = meshGroups[meshIdx].uvs;
          let uvStride = readUVs.length;
          for (let i = 0, j = instanceIdx * uvStride; i < uvStride; i++, j++) {
            writeUvs[j] = readUVs[i];
          }

          let readNormals = meshGroups[meshIdx].readNormals;
          let writeNormals = meshGroups[meshIdx].normals;
          let normalStride = readNormals.length;
          for (let i = 0, j = instanceIdx * normalStride; i < normalStride; i++, j++) {
            writeNormals[j] = readNormals[i];
          }
        }
      }
    }

    /// Add each cluster of merged meshes to scene
    for (const meshGroup of meshGroups) {
      let mergedGeom = new THREE.BufferGeometry();

      mergedGeom.setAttribute("position", new THREE.BufferAttribute(meshGroup.verts, 3));
      // mergedGeom.setAttribute( 'index', new THREE.BufferAttribute( meshGroup.indices, 1) );
      mergedGeom.setIndex(new THREE.BufferAttribute(meshGroup.indices, 1));
      mergedGeom.setAttribute("normal", new THREE.BufferAttribute(meshGroup.normals, 3));
      mergedGeom.setAttribute("uv", new THREE.BufferAttribute(meshGroup.uvs, 2));

      mergedGeom.buffersNeedUpdate = true;

      let mesh = new THREE.Mesh(mergedGeom, meshGroup.material);
      mesh.position.set(meshGroup.position.x, meshGroup.position.z, meshGroup.position.y);

      this.getOutput().meshes.push(mesh);
    }
  }

  getModelGroups(zone, zoneDef, mapRect) {
    /// Calculate rect in global coordinates
    let mapX = mapRect[0];
    let mapY = mapRect[1];
    let c = 32 + 16;

    // ["x1","uint32","y1","uint32","x2","uint32", "y2", "uint32"]
    let zoneRect = {
      x1: zone.vertRect[0] * c + mapX,
      x2: zone.vertRect[2] * c + mapX,
      y1: zone.vertRect[1] * -c - mapY,
      y2: zone.vertRect[3] * -c - mapY,
    };
    /// These zones seems to overflow :/
    if (zone.encodeData.length === 0) {
      return {};
    }

    let zdx = zone.vertRect[0] - zone.vertRect[2];
    // let zdy = zone.vertRect[1] - zone.vertRect[3];

    /// Zone Flags increases a linear position, used to step trough the Zone.
    let linearPos = 0;

    let modelGroups = {};

    let terrainTiles = this.getOutput(T3D.TerrainRenderer).terrainTiles;

    for (let i = 0; i < zone.flags.length; i += 2) {
      /// Step forward
      linearPos += zone.flags[i];

      /// Check if a model should be placed
      let flag = zone.flags[i + 1];
      if (flag !== 0) {
        /// Extract flag data
        /// Layer is written in the last 4 bytes
        let zoneDefLayer = flag >> 4;

        /// Get Zone Definition Layer
        let layer = zoneDef.layerDefArray[zoneDefLayer - 1];

        /// TESTING Only show layers with height >= 3
        if (layer /* && layer.height >= 0 */) {
          /// Get X and Y from linear position
          let modelX = (linearPos % zdx) * c + zoneRect.x1;
          let modelY = Math.floor(linearPos / zdx) * c + zoneRect.y1;

          /// Get Z from intersection with terrain
          let modelZ = null;

          let startZ = 100000;

          let raycaster = new THREE.Raycaster(new THREE.Vector3(modelX, startZ, modelY), new THREE.Vector3(0, -1, 0));

          /// TODO: OPT?
          for (const chunk of terrainTiles) {
            if (modelZ === null) {
              let intersections = raycaster.intersectObject(chunk);
              if (intersections.length > 0) {
                modelZ = startZ - intersections[0].distance;
              }
            }
          }

          /// Get model id
          /// TODO: check with modelIdx = flag & 0xf;
          let modelIdx = 0;
          let model = layer.modelArray[modelIdx];
          let modelFilename = model.filename;
          // let zOffsets = model.zOffsets;

          // let layerFlags = layer.layerFlags; // NOrmaly 128, 128

          // TODO: flip z,y?
          let rotRangeX = layer.rotRangeX; // max min
          let rotRangeY = layer.rotRangeY; // max min
          let rotRangeZ = layer.rotRangeZ; // max min
          let scaleRange = layer.scaleRange; // max min
          let fadeRange = layer.fadeRange; // max min

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
        }
      }
    }

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
  renderAsync(callback) {
    /// Set up output array
    this.getOutput().meshes = [];

    let zoneChunkData = this.mapFile.getChunk("zon2").data;
    let parameterChunkData = this.mapFile.getChunk("parm").data;
    // let terrainChunkData = this.mapFile.getChunk("trn").data;
    let mapRect = parameterChunkData.rect;

    /// Zone data
    let zones = zoneChunkData.zoneArray;
    let zoneDefs = zoneChunkData.zoneDefArray;

    /// Render each zone
    let lastPct = -1;

    /// Main render loop, render each zone
    const stepZone = (i) => {
      let pct = Math.round((100.0 * i) / zones.length);
      if (lastPct !== pct) {
        this.logger.log(T3D.Logger.TYPE_PROGRESS, "Loading 3D Models (Zone)", pct);
        lastPct = pct;
      }

      if (i >= zones.length) {
        callback();
        return;
      }

      /// Main zone render function call
      this.renderZone(zones[i], zoneDefs, mapRect, () => stepZone(i + 1));
    };

    stepZone(0);
  }
}

ZoneRenderer.rendererName = "ZoneRenderer";
module.exports = ZoneRenderer;
