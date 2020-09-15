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

const GW2File = require("../format/file/GW2File");
const MaterialUtils = require("./MaterialUtils");
const MathUtils = require("./MathUtils");

// TODO: Remove this local cache!!
let matFiles = {};

/**
 * Object describing the meaning of the bits in fvf integers.
 * @property fvfFormat
 * @private
 * @type {Object}
 */
let fvfFormat = {
  Position: 0x00000001 /** < 12 bytes. Position as three 32-bit floats in the order x, y, z. */,
  Weights: 0x00000002 /** < 4 bytes. Contains bone weights. */,
  Group: 0x00000004 /** < 4 bytes. Related to bone weights. */,
  Normal: 0x00000008 /** < 12 bytes. Normal as three 32-bit floats in the order x, y, z. */,
  Color: 0x00000010 /** < 4 bytes. Vertex color. */,
  Tangent: 0x00000020 /** < 12 bytes. Tangent as three 32-bit floats in the order x, y, z. */,
  Bitangent: 0x00000040 /** < 12 bytes. Bitangent as three 32-bit floats in the order x, y, z. */,
  TangentFrame: 0x00000080 /** < 12 bytes. */,
  UV32Mask: 0x0000ff00 /** < 8 bytes for each set bit. Contains UV-coords as two 32-bit floats in the order u, v. */,
  UV16Mask: 0x00ff0000 /** < 4 bytes for each set bit. Contains UV-coords as two 16-bit floats in the order u, v. */,
  Unknown1: 0x01000000 /** < 48 bytes. Unknown data. */,
  Unknown2: 0x02000000 /** < 4 bytes. Unknown data. */,
  Unknown3: 0x04000000 /** < 4 bytes. Unknown data. */,
  Unknown4: 0x08000000 /** < 16 bytes. Unknown data. */,
  PositionCompressed: 0x10000000 /** < 6 bytes. Position as three 16-bit floats in the order x, y, z. */,
  Unknown5: 0x20000000 /** < 12 bytes. Unknown data. **/
};

/**
 * Collection of methods used for generating THREE meshes from Guild Wars 2 data formats.
 * @namespace RenderUtils
 */

/**
 * Creates a mesh representing a single plane.
 *
 * @memberof RenderUtils
 * @param  {Object} rect     An object with x1,x2,y1 and y2 properties.
 * @param  {Number} yPos     Vertical position of the rectangle.
 * @param  {THREE.Material} material   Mesh material to apply.
 * @param  {Number} dy       Mesh height.
 * @return {THREE.Mesh}      The generated mesh.
 */
function renderRect(rect, yPos, material, dy) {
  let dx = rect.x1 - rect.x2;
  let dz = rect.y1 - rect.y2;
  if (!dy) dy = 1;

  let cx = (rect.x1 + rect.x2) / 2;
  let cz = (rect.y1 + rect.y2) / 2;
  let cy = yPos;

  let geometry = new THREE.BoxGeometry(dx, dy, dz);

  material =
    material ||
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    });
  let plane = new THREE.Mesh(geometry, material);
  plane.overdraw = true;

  plane.position.x = cx;
  plane.position.y = cy;
  plane.position.z = cz;

  return plane;
}

/**
 * Load image data into a THREE.Texture from a file within the GW2 .dat file using a LocalReader.
 *
 * @deprecated Please use the original function from MaterialUtils
 * @memberof RenderUtils
 * @param {LocalReader} localReader The LocalReader to load the file contents from.
 * @param {Number} fileId The fileId or baseId of the file to load image data from.
 * @param {Number} mapping What THREE mapping the returned texture will use, not implemented.
 * @param  {Array} defaultColor RGBA array of 4 integers. The default solid color of the mesh, should texture loading fail.
 * @param {Function} onerror Error callback, not implemented.
 *
 * @return {THREE.Texture} A texture that will be populated by the file data when it is loaded.
 */
function loadLocalTexture(localReader, fileId, mapping, defaultColor, onerror) {
  T3D.Logger.log(
    T3D.Logger.TYPE_WARNING,
    "RenderUtils.loadLocalTexture is deprecated ! Please use the one from MaterialUtils."
  );
  return MaterialUtils.loadLocalTexture(
    localReader,
    fileId,
    mapping,
    defaultColor,
    onerror
  );
}

/**
 * Returns a THREE representation of the data contained by a GW2 model file.
 * The data is read using a LocalReader reference into the GW2 .dat.
 *
 * @memberof RenderUtils
 * @param {LocalReader} localReader The LocalReader to load the file contents from.
 * @param {Object} chunk Model GEOM chunk.
 * @param {Object} modelDataChunk Model MODL chunk.
 * @param {Object} sharedTextures  Value Object for keeping the texture cache.
 * @param {boolean} showUnmaterialed If false does not render any models with missing materials.
 *
 * @return {Array} Each geometry in the model file represented by a textured THREE.Mesh object
 */
function renderGeomChunk(
  localReader,
  chunk,
  modelDataChunk,
  sharedTextures,
  showUnmaterialed
) {
  let rawMeshes = chunk.data.meshes;
  let meshes = [];
  let mats = modelDataChunk.data.permutations[0].materials;

  rawMeshes.forEach(function(rawMesh) {
    let rawGeom = rawMesh.geometry;
    let fvf = rawGeom.verts.mesh.fvf; // rawGeom.fvf;

    let numVerts = rawGeom.verts.vertexCount; // rawGeom.vertexCount;

    let rawVerts = rawGeom.verts.mesh.vertices; // rawGeom.vertices

    let indices = rawGeom.indices.indices;

    let geom = new THREE.BufferGeometry();

    let vertDS = new DataStream(rawVerts.buffer);

    // Dirty step length for now:
    let stride = rawVerts.length / numVerts;

    // Each vertex
    // DO UV as well
    let vertices = new Float32Array(numVerts * 3);
    // let tangents = null;
    let normals = null;
    let uvs = [];

    /// Calculate the distance to the first pair of UV data from the
    /// start of the vertex entry
    ///
    let distToNormals =
      !!(fvf & fvfFormat.Position) * 12 +
      !!(fvf & fvfFormat.Weights) * 4 +
      !!(fvf & fvfFormat.Group) * 4;

    let distToTangent =
      distToNormals +
      !!(fvf & fvfFormat.Normal) * 12 +
      !!(fvf & fvfFormat.Color) * 4;

    let distToBittangent = distToTangent + !!(fvf & fvfFormat.Tangent) * 12;

    let distToTangentFrame =
      distToBittangent + !!(fvf & fvfFormat.Bitangent) * 12;

    let distToUV = distToTangentFrame + !!(fvf & fvfFormat.TangentFrame) * 12;

    /// Check if the UV is 32 bit float or 16 bit float.
    let uv32Flag = (fvf & fvfFormat.UV32Mask) >> 8;
    let uv16Flag = (fvf & fvfFormat.UV16Mask) >> 16;
    let isUV32 = !!uv32Flag;
    let hasUV = !!uv16Flag || !!uv32Flag;

    /// Popcount (count the number of binary 1's) in the UV flag
    /// to get the number of UV pairs used in this vertex format.
    let masked = isUV32 ? uv32Flag : uv16Flag;
    let numUV = MathUtils.popcount(masked);

    numUV = Math.min(numUV, 1.0);

    /// Create typed UV arrays
    if (hasUV) {
      for (let i = 0; i < numUV; i++) {
        uvs[i] = new Float32Array(numVerts * 2);
      }
    }

    if (fvf & fvfFormat.Normal) {
      // console.log("HAS Normal");
    }

    if (fvf & fvfFormat.Tangent) {
      // console.log("HAS Tangent");
    }

    if (fvf & fvfFormat.Bitangent) {
      // console.log("HAS Bitangent");
    }
    if (fvf & fvfFormat.TangentFrame) {
      // console.log("HAS TangentFrame");
    }

    /// Read data from each vertex data entry
    for (let i = 0; i < numVerts; i++) {
      /// Go to vertex memory position
      vertDS.seek(i * stride);

      /// Read position data
      /// (we just hope all meshes has 32 bit position...)
      let x = vertDS.readFloat32();
      let z = vertDS.readFloat32();
      let y = vertDS.readFloat32();

      /// Write position data, transformed to Tyria3D coordinate system.
      vertices[i * 3 + 0] = x; // - c.x;
      vertices[i * 3 + 1] = -y; // + c.y;
      vertices[i * 3 + 2] = -z; // + c.z;

      /// Read data at UV position
      if (hasUV) {
        for (let uvIdx = 0; uvIdx < numUV; uvIdx++) {
          vertDS.seek(i * stride + distToUV + uvIdx * (isUV32 ? 8 : 4));

          /// Add one UV pair:

          let u, v;
          if (isUV32) {
            u = vertDS.readUint32();
            v = vertDS.readUint32();
          } else {
            u = MathUtils.f16(vertDS.readUint16());
            v = MathUtils.f16(vertDS.readUint16());
          }

          /// Push to correct UV array
          uvs[uvIdx][i * 2 + 0] = u;
          uvs[uvIdx][i * 2 + 1] = v;
        }
      } /// End if has UV
    } /// End each vertex

    /// Each face descripbed in indices
    let faces = new Uint16Array(indices.length);
    for (let i = 0; i < indices.length; i += 3) {
      // This is ONE face
      faces[i + 0] = indices[i + 2];
      faces[i + 1] = indices[i + 1];
      faces[i + 2] = indices[i + 0];
    } // End each index aka "face"

    /// Add position, index and uv props to buffered geometry
    geom.addAttribute("position", new THREE.BufferAttribute(vertices, 3));
    // geom.addAttribute( 'index', new THREE.BufferAttribute( faces, 1) );
    geom.setIndex(new THREE.BufferAttribute(faces, 1));

    if (normals) {
      console.log("adding normals");
      geom.addAttribute("normal", new THREE.BufferAttribute(normals, 3));
      geom.normalizeNormals();
      geom.normalsNeedUpdate = true;
    } else {
      /// Calculate normals
      geom.computeVertexNormals();
    }

    if (hasUV) {
      for (let uvIdx = 0; uvIdx < numUV; uvIdx++) {
        /// Names are "uv", "uv2", "uv3", ... , "uvN"
        let uvName = "uv" + (uvIdx > 0 ? uvIdx + 1 : "");

        /// Set "custom" attribute uvN
        geom.addAttribute(uvName, new THREE.BufferAttribute(uvs[uvIdx], 2));

        /// Flag for update
        geom.attributes[uvName].needsUpdate = true;
      }

      /// Not needed anymore?
      geom.uvsNeedUpdate = true;
    }

    /// Tell geometry to update its UVs and buffers
    geom.buffersNeedUpdate = true;

    /// DONE READING VERTEX DATA

    /// Get material used for this mesh
    let matIdx = rawMesh.materialIndex;
    let mat = mats[matIdx];
    let materialFile = null;

    if (mat && matFiles[mat.filename]) {
      materialFile = matFiles[mat.filename];
    }

    let finalMaterial = MaterialUtils.getMaterial(
      mat,
      materialFile,
      localReader,
      sharedTextures
    );

    /// IF we could not find a material abort OR use a wireframe placeholder.
    if (!finalMaterial) {
      if (showUnmaterialed) {
        finalMaterial = new THREE.MeshLambertMaterial({
          color: 0x5bb1e8,
          wireframe: false,
          side: THREE.DoubleSide
        });
      } else {
        return;
      }
    }

    /// Create the final mesh from the BufferedGeometry and MeshBasicMaterial
    let finalMesh = new THREE.Mesh(geom, finalMaterial);

    /// Set material info on the returned mesh
    if (mat) {
      finalMesh.materialFlags = mat.materialFlags;
      finalMesh.materialFilename = mat.filename;
    }

    finalMesh.materialName = rawMesh.materialName;

    /// Use materialFilename, materialName, and material.textureFilename in order to build export

    /// Set lod info on the returned mesh
    finalMesh.numLods = rawMesh.geometry.lods.length;
    finalMesh.lodOverride = modelDataChunk.data.lodOverride;

    /// Set flag and UV info on the returned mehs
    finalMesh.flags = rawMesh.flags;
    finalMesh.numUV = numUV;

    /// Add mesh to returned Array
    meshes.push(finalMesh);
  }); /// End rawMeshes forEach

  return meshes;
}

/**
 * Loads mesh array from Model file and sends as argument to callback.
 *
 * @memberof RenderUtils
 * @async
 * @param  {Number} filename Name of the model file to load data from.
 * @param  {Array} solidColor RGBA array of 4 integers
 * @param {LocalReader} localReader The LocalReader to load the file contents from.
 * @param {Object} sharedTextures  Value Object for keeping the texture cache.
 * @param {boolean} showUnmaterialed If false does not render any models with missing materials.

 * @param  {Function} callback Fired once all meshes have been loaded.
 * two arguments are passed to the callback function.
 *
 * The first argument is an Array with each textured THREE.Mesh objects.
 *
 * The second argument is the bounding spehere of this model file.
 *
 */

function loadMeshFromModelFile(
  filename,
  solidColor,
  localReader,
  sharedTextures,
  showUnmaterialed,
  callback
) {
  // Short handles prop attributes
  let finalMeshes = [];

  /// Load file
  localReader.loadFile(filename, function(inflatedData) {
    try {
      if (!inflatedData) {
        throw "Could not find MFT entry for " + filename;
      }

      let ds = new DataStream(inflatedData);

      let modelFile = new GW2File(ds, 0);

      // MODL for materials -> textures
      let modelDataChunk = modelFile.getChunk("modl");

      // GEOM for geometry
      let geometryDataChunk = modelFile.getChunk("geom");

      /// Hacky fix for not being able to adjust for position
      let boundingSphere = modelDataChunk.data.boundingSphere;
      let bsc = boundingSphere.center;
      boundingSphere.radius += Math.sqrt(
        bsc[0] * bsc[0] + Math.sqrt(bsc[1] * bsc[1] + bsc[2] * bsc[2])
      );

      /// Load all material files
      let allMats = modelDataChunk.data.permutations[0].materials;

      //eslint-disable-next-line no-inner-declarations
      function loadMaterialIndex(mIdx, matCallback) {
        if (mIdx >= allMats.length) {
          matCallback();
          return;
        }

        let mat = allMats[mIdx];

        /// Skip if file is loaded
        if (matFiles[mat.filename]) {
          loadMaterialIndex(mIdx + 1, matCallback);
          return;
        }

        localReader.loadFile(mat.filename, function(inflatedData) {
          if (inflatedData) {
            let ds = new DataStream(inflatedData);
            let materialFile = new GW2File(ds, 0);
            matFiles[mat.filename] = materialFile;
          }

          loadMaterialIndex(mIdx + 1, matCallback);
        });
      }

      loadMaterialIndex(0, function() {
        /// Create meshes
        let meshes = renderGeomChunk(
          localReader,
          geometryDataChunk,
          modelDataChunk,
          sharedTextures,
          showUnmaterialed
        );

        // Build mesh group
        meshes.forEach(function(mesh) {
          /// Material flags
          let knownflags = [
            /*
              1-5
              Has Tex?  IDK      Light?    Alpha?

              5-8
              0      0       IDK       Water?

              9-12
              Has Tex?  0      Alpha?    Alpha?

              13
              IDK KEV
              */

            0, // 0 0000 0000 0000    Ground / Wall splashes
            8, // 0 0000 0000 1000    Broken Khylo roof DDS
            9, // 0 0000 0000 1001    Tree leaves

            520, // 0 0010 0000 1000    Some LOD modules, fires, smoke, inside of tents (some DSS textures)

            2056, // 0 1000 0000 1000    Solid objects, also broken animations

            /// Solids here are unhappy, or are they? could be animations etc
            2057, // 0 1000 0000 1001    Windmill sails, bushes, trees, but also a statue and a few pieces of wall

            2060, // 0 1000 0000 1100    A few solid objects, like wooden barricades, one(!) painting
            2061, // 0 1000 0000 1101    A few bushes, two paintings

            2312, // 0 1001 0000 1000    Opaque Clock tower main walls AND IVY
            2316, // 0 1001 0000 1100    Bushes, inner flower walkway a ramp and a box

            // Number 10
            2568, // 0 1010 0000 1000    Lots of solids; walls, tents also some tent details WITH alpa

            // Number 11
            2569, // 0 1010 0000 1001    Solids like walls and roofs and appernt non solids like ropes

            2572, // 0 1010 0000 1100    Solid wooden beems, lamp posts
            2573, // 0 1010 0000 1101    Lamp holders, bushes, fences, apparent non solids
            2584, // 0 1010 0001 1000    Fountain Well water

            2824, // 0 1011 0000 1000    Windows, sign arrows, cloth roofs (non solids) BUT straw roofs
            2828, // 0 1011 0000 1100    A few fence post (non solids)
            2840, // 0 1011 0001 1000    Fountain running water + pipe water

            4617, // 1 0010 0000 1001    Found nothing
            6664 // 1 1010 0000 1000    Two groups of solid boxes
          ];

          // let alphaMask0 = 0x0001 // + 0x0100 + 0x0200;
          // let alphaMask1 = 0x0010
          // let alphaMask2 = 0x0100 + 0x0200
          // let alphaMask2b = 0x0200

          let texMask = 0x8 + 0x0800;

          if (knownflags.indexOf(mesh.materialFlags) !== 11) {
            // return;
          }

          // No smoke etc
          if (mesh.materialFlags === 520) {
            // return;
          }

          // Must have texture
          if (!showUnmaterialed && !(mesh.materialFlags & texMask)) {
            return;
          }

          // NO lods
          if (mesh.flags === 4 || mesh.flags === 1 || mesh.flags === 0) {
            // return;
          }

          // Add to final colection
          finalMeshes.push(mesh);
        }); /// END FOR EACH meshes

        callback(finalMeshes, boundingSphere);
      }); /// END LOAD MATERIALS CALLBACK
    } catch (e) {
      console.warn("Failed rendering model " + filename, e);
      let mesh = new THREE.Mesh(
        new THREE.BoxGeometry(200, 2000, 200),
        new THREE.MeshNormalMaterial()
      );
      mesh.flags = 4;
      mesh.materialFlags = 2056;
      mesh.lodOverride = [1000000, 1000000];
      finalMeshes.push(mesh);

      /// Send the final meshes to callback function
      callback(finalMeshes);
    }
  }); /// END FILE LOADED CALLBACK FUNCTION
}

/**
 * Gets a mesh array from Model file and sends as argument to callback. Uses a cache of meshes in order
 * to never read the same model file twice.
 *
 * @memberof RenderUtils
 * @async
 * @param  {Number} filename The fileId or baseId of the Model file to load
 * @param  {Array} color RGBA array of 4 integers
 * @param  {LocalReader} localReader The LocalReader object used to read data from the GW2 .dat file.
 * @param {Object} sharedMeshes  Value Object for keeping the texture cache.
 * @param {Object} sharedTextures  Value Object for keeping the texture cache.
 * @param {boolean} showUnmaterialed If false does not render any models with missing materials.
 * @param  {Function} callback Fired once all meshes have been loaded.
 * three arguments are passed to the callback function.
 *
 * The first argument is an Array with each textured THREE.Mesh objects.
 *
 * The second argument is a boolean, true indicates that these meshes were not
 * loaded from the dat file, but retrieved from the run time cache.
 *
 * The third argument is the bounding spehere of this model file.
 */
function getMeshesForFilename(
  filename,
  color,
  localReader,
  sharedMeshes,
  sharedTextures,
  showUnmaterialed,
  callback
) {
  /// If this file has already been loaded, just return a reference to the meshes.
  /// isCached will be set to true to inform the caller the meshes will probably
  /// have to be cloned in some way.
  if (sharedMeshes[filename]) {
    callback(
      sharedMeshes[filename].meshes,
      true,
      sharedMeshes[filename].boundingSphere
    );
  }

  /// If this file has never been loaded, load it using loadMeshFromModelFile
  /// the resulting mesh array will be cached within this model's scope.
  else {
    loadMeshFromModelFile(
      filename,
      color,
      localReader,
      sharedTextures,
      showUnmaterialed,
      function(meshes, boundingSphere) {
        /// Cache result if any.
        if (meshes) {
          sharedMeshes[filename] = {
            meshes: meshes,
            boundingSphere: boundingSphere
          };
        }

        /// Allways fire callback.
        callback(meshes, false, boundingSphere);
      }
    );
  }
}

/**
 * WIP, Tries to find all fileIds refered by a model file.
 *
 * @memberof RenderUtils
 * @async
 * @param  {Number}   filename    Model file Id
 * @param  {LocalReader}   localReader LocalReader instance to read from
 * @param  {Function} callback   First argument is list of used file IDs
 */
function getFilesUsedByModel(filename, localReader, callback) {
  let fileIds = [filename];

  /// Load model file
  localReader.loadFile(filename, function(inflatedData) {
    try {
      if (!inflatedData) {
        throw "Could not find MFT entry for " + filename;
      }

      let ds = new DataStream(inflatedData);
      let modelFile = new GW2File(ds, 0);

      // MODL for materials -> textures
      let modelDataChunk = modelFile.getChunk("modl");

      /// Get materials used by model
      let mats = modelDataChunk.data.permutations[0].materials;

      /// Add each material file AND referenced TEXTURES
      mats.forEach(function(mat) {
        /// Add material file id
        let matFileName = mat.filename;
        fileIds.push(matFileName);

        /// Add each texture file id
        mat.textures.forEach(function(tex) {
          fileIds.push(tex.filename);
        });
      });
    } catch (e) {
      console.warn("Could not export any data", e);
    }

    callback(fileIds);
  });
}

module.exports = {
  renderRect: renderRect,
  loadLocalTexture: loadLocalTexture,
  renderGeomChunk: renderGeomChunk,
  loadMeshFromModelFile: loadMeshFromModelFile,
  getMeshesForFilename: getMeshesForFilename,
  getFilesUsedByModel: getFilesUsedByModel
};
