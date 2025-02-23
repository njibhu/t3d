import DataRenderer from "./DataRenderer";
import * as RenderUtils from "../util/RenderUtils";
import * as MaterialUtils from "../util/MaterialUtils";
import * as TerrainShader from "../util/TerrainShader";
import { FileParser } from "t3d-parser";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { Material } from "three";
import { SceneUtils } from "three/examples/jsm/utils/SceneUtils";

/**
 *
 * A renderer that generates the meshes for the terrain of a map.
 *
 *
 * Requires a context previously populated by a
 * {{#crossLink "EnvironmentRenderer"}}{{/crossLink}}.
 *
 * @class TerrainRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a FileParser.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
export default class TerrainRenderer extends DataRenderer {
  static rendererName = "TerrainRenderer";

  mapFile: FileParser;
  mapRect: { x1: number; x2: number; y1: number; y2: number } | undefined | null;

  constructor(localReader: LocalReader, settings: any, context: any, logger: typeof Logger) {
    super(localReader, settings, context, logger, "TerrainRenderer");
    this.mapFile = this.settings.mapFile;
  }

  drawWater(rect: { x1: number; x2: number; y1: number; y2: number }): any {
    /// Add Water
    const material = new THREE.MeshBasicMaterial({
      color: 0x5bb1e8,
      wireframe: false,
      opacity: 0.35,
    });

    material.transparent = true;
    return RenderUtils.renderRect(rect, 0, material);
  }

  parseNumChunks(terrainData: any): void {
    terrainData.numChunksD_1 = Math.sqrt((terrainData.dims[0] * terrainData.chunkArray.length) / terrainData.dims[1]);
    terrainData.numChunksD_2 = terrainData.chunkArray.length / terrainData.numChunksD_1;
  }

  loadPagedImageCallback(callback: Function, inflatedBuffer: ArrayBuffer): void {
    const self = this;

    // Prep output array
    self.getOutput().terrainTiles = [];

    const pimgFile = new FileParser(inflatedBuffer);
    const pimgTableDataChunk = pimgFile.getChunk("pgtb");
    const pimgData = pimgTableDataChunk && pimgTableDataChunk.data;

    this.mapRect = null;

    /// Fetch chunks
    const terrainData = this.mapFile.getChunk("trn")!.data;
    const parameterData = this.mapFile.getChunk("parm")!.data;

    /// Read settings
    const maxAnisotropy = this.settings.anisotropy ? this.settings.anisotropy : 1;

    //let chunks = [];
    const chunkW = 35;

    /// Calculate numChunksD_1 and _2
    this.parseNumChunks(terrainData);

    const xChunks = terrainData.numChunksD_1;
    const yChunks = terrainData.numChunksD_2;

    const allMaterials = terrainData.materials.materials;
    const allTextures = terrainData.materials.texFileArray;

    // Total map dx and dy
    /*
    old parameter data definition:
    "x1", "float32",
    "y1", "float32",
    "x2", "float32",
    "y2", "float32"
    */
    // var dx = parameterData.rect.x2 - parameterData.rect.x1;
    // var dy = parameterData.rect.y2 - parameterData.rect.y1;
    const dx = parameterData.rect[2] - parameterData.rect[0];
    const dy = parameterData.rect[3] - parameterData.rect[1];

    // Each chunk dx and dy
    const cdx = (dx / terrainData.numChunksD_1) * 1; //  35/33;
    const cdy = (dy / terrainData.numChunksD_2) * 1; // 35/33;
    let n = 0;
    const allMats = [];
    const customMaterial = new THREE.MeshLambertMaterial({
      side: THREE.DoubleSide,
      color: 0x666666,
      flatShading: true,
    });
    //let texMats = {};

    /// Load textures from PIMG and inject as material maps (textures)
    const chunkTextures: any = {};

    /// Load textures
    if (pimgData) {
      const strippedPages = pimgData.strippedPages;

      /// Only use layer 0
      strippedPages.forEach(function (page: any) {
        /// Only load layer 0 and 1
        if (page.layer <= 1) {
          const filename = page.filename;
          //let color = page.solidColor;
          const coord = page.coord;

          let matName = coord[0] + "," + coord[1];
          if (page.layer === 1) matName += "-2";

          /// Add texture to list, note that coord name is used, not actual file name
          if (!chunkTextures[matName]) {
            /// Load local texture, here we use file name!
            const chunkTex = MaterialUtils.loadLocalTexture(self.localReader, filename);

            if (chunkTex) {
              /// Set repeat, antistropy and repeat Y
              chunkTex.anisotropy = maxAnisotropy;
              chunkTex.wrapS = THREE.RepeatWrapping;
              chunkTex.wrapT = THREE.RepeatWrapping;
            }

            /// ...But store in coord name
            chunkTextures[matName] = chunkTex;
          }
        }
      }); /// end for each stripped page in pimgData
    }

    /// Render Each chunk
    /// We'll make this async in order for the screen to be able to update

    const renderChunk = function (cx: number, cy: number): void {
      const chunkIndex = cy * xChunks + cx;

      const pageX = Math.floor(cx / 4);
      const pageY = Math.floor(cy / 4);

      // TODO: Terrain texture LOD ?
      const chunkTextureIndices = allMaterials[chunkIndex].loResMaterial.texIndexArray;
      // let matFileName = allMaterials[chunkIndex].loResMaterial.materialFile;
      // let chunkTextureIndices = allMaterials[chunkIndex].hiResMaterial.texIndexArray;
      // let matFileName = allMaterials[chunkIndex].hiResMaterial.materialFile;
      // let chunkData = terrainData.chunkArray[chunkIndex];
      // let mainTex = allTextures[chunkTextureIndices[0]];
      let mat: Material = customMaterial;

      /// TODO: just tick invert y = false...?
      const pageOffetX = (cx % 4) / 4.0;
      const pageOffetY = 0.75 - (cy % 4) / 4.0;

      // offset 0 -> 0.75

      // Make sure we have shared textures

      /// Load and store all tiled textures
      const fileNames = [];
      for (let gi = 0; gi < chunkTextureIndices.length / 2; gi++) {
        const textureFileName = allTextures[chunkTextureIndices[gi]].filename;

        fileNames.push(textureFileName);

        /// If the texture is not already loaded, read it from the .dat!
        if (!chunkTextures[textureFileName]) {
          /// Load local texture
          const chunkTex = MaterialUtils.loadLocalTexture(self.localReader, textureFileName);

          if (chunkTex) {
            /// Set repeat, antistropy and repeat Y
            chunkTex.anisotropy = maxAnisotropy;
            chunkTex.wrapS = THREE.RepeatWrapping;
            chunkTex.wrapT = THREE.RepeatWrapping;
          }

          chunkTextures[textureFileName] = chunkTex;
        }
      } /// End for each chunkTextureIndices

      /// Create Composite texture material, refering the shared textures
      const pageTexName = pageX + "," + pageY;
      const pageTexName2 = pageX + "," + pageY + "-2";

      /// TODO USe mapData (Chunk: env -> haze)
      // var fog = SceneUtils.getScene().fog;
      const fog = {
        color: { r: 1, g: 1, b: 1 },
        near: 0,
        far: 0,
      };

      /// Get haze color from environment rednerer
      const envOutput = self.getOutput(T3D.EnvironmentRenderer);
      if (envOutput.hazeColor) {
        fog.color.r = envOutput.hazeColor[2] / 255.0;
        fog.color.g = envOutput.hazeColor[1] / 255.0;
        fog.color.b = envOutput.hazeColor[0] / 255.0;
      }

      const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib["lights"]]);

      /// TODO: READ FROM VO, don't default to hard coded scale
      uniforms.uvScale = { type: "v2", value: new THREE.Vector2(8.0, 8.0) };
      uniforms.offset = {
        type: "v2",
        value: new THREE.Vector2(pageOffetX, pageOffetY),
      };

      uniforms.texturePicker = {
        type: "t",
        value: chunkTextures[pageTexName],
      };
      uniforms.texturePicker2 = {
        type: "t",
        value: chunkTextures[pageTexName2],
      };

      uniforms.texture1 = { type: "t", value: chunkTextures[fileNames[0]] };
      uniforms.texture2 = { type: "t", value: chunkTextures[fileNames[1]] };
      uniforms.texture3 = { type: "t", value: chunkTextures[fileNames[2]] };
      uniforms.texture4 = { type: "t", value: chunkTextures[fileNames[3]] };

      if (self.settings && self.settings.export) {
        mat = new THREE.MeshBasicMaterial({ visible: true });
      } else {
        mat = new THREE.ShaderMaterial({
          uniforms: uniforms,
          fragmentShader: TerrainShader.getFragmentShader(),
          vertexShader: TerrainShader.getVertexShader(),
        });
      }

      /// Store referenceto each material
      allMats.push(mat);

      /// -1 for faces -> vertices , -2 for ignoring outer faces
      const chunkGeo = new THREE.PlaneBufferGeometry(cdx, cdy, chunkW - 3, chunkW - 3);

      let cn = 0;

      /// Render chunk

      /// Each chunk vertex
      for (let y = 0; y < chunkW; y++) {
        for (let x = 0; x < chunkW; x++) {
          if (x !== 0 && x !== chunkW - 1 && y !== 0 && y !== chunkW - 1) {
            //@ts-ignore
            chunkGeo.getAttribute("position").array[cn * 3 + 2] = terrainData.heightMapArray[n];
            cn++;
          }

          n++;
        }
      } // End each chunk vertex

      /// Flip the plane to fit wonky THREE js world axes
      const mS = new THREE.Matrix4().identity();
      mS.elements[5] = -1;
      chunkGeo.applyMatrix4(mS);

      /// Compute face normals for lighting, not used when textured
      //@ts-ignore
      chunkGeo.computeFaceNormals();
      chunkGeo.computeVertexNormals();

      /// Build chunk mesh!
      let chunk;
      chunk = new THREE.Mesh(chunkGeo, customMaterial);
      if (Array.isArray(mat)) {
        chunk = SceneUtils.createMultiMaterialObject(chunkGeo as any, mat);
      } else {
        chunk = new THREE.Mesh(chunkGeo, mat);
      }

      /// Move and rotate Mesh to fit in place
      chunk.rotation.set(Math.PI / 2, 0, 0);

      /// Last term is the new one: -cdx*(2/35)
      const globalOffsetX = parameterData.rect[0] + cdx / 2;
      const chunkOffsetX = cx * cdx;

      chunk.position.x = globalOffsetX + chunkOffsetX;

      /// Adjust for odd / even number of chunks
      if (terrainData.numChunksD_2 % 2 === 0) {
        /// Last term is the new one: -cdx*(2/35)
        const globalOffsetY = parameterData.rect[1] + cdy / 2 - 0; // -cdy*(1/35);
        const chunkOffsetY = cy * cdy * 1; // 33/35;

        chunk.position.z = chunkOffsetY + globalOffsetY;
      } else {
        const globalOffsetY = parameterData.rect[1] - cdy / 2 + 0; // cdy*(1/35);
        const chunkOffsetY = cy * cdy * 1; // 33/35;

        chunk.position.z = globalOffsetY + chunkOffsetY;
      }

      const px = chunk.position.x;
      const py = chunk.position.z;

      if (!self.mapRect) {
        self.mapRect = {
          x1: px - cdx / 2,
          x2: px + cdx / 2,
          y1: py - cdy / 2,
          y2: py + cdy / 2,
        };
      }

      self.mapRect.x1 = Math.min(self.mapRect.x1, px - cdx / 2);
      self.mapRect.x2 = Math.max(self.mapRect.x2, px + cdx / 2);

      self.mapRect.y1 = Math.min(self.mapRect.y1, py - cdy / 2);
      self.mapRect.y2 = Math.max(self.mapRect.y2, py + cdy / 2);

      chunk.updateMatrix();
      chunk.updateMatrixWorld();

      /// Add to list of stuff to render
      /// TODO: Perhaps use some kind of props for each entry instead?
      self.getOutput().terrainTiles.push(chunk);
    }; /// End render chunk function

    const stepChunk = function (cx: number, cy: number) {
      if (cx >= xChunks) {
        cx = 0;
        cy++;
      }

      if (cy >= yChunks) {
        /// Draw water surface using map bounds
        self.getOutput().water = self.drawWater(self.mapRect!);

        /// Set bounds in output VO
        self.getOutput().bounds = self.mapRect;

        /// Fire call back, we're done rendering.
        callback();
        return;
      }

      const pct = Math.floor((100 * (cy * xChunks + cx)) / (xChunks * yChunks));

      self.logger.log(T3D.Logger.TYPE_PROGRESS, "Loading Terrain", pct);

      renderChunk(cx, cy);
      setTimeout(stepChunk, 1, cx + 1, cy);
    };

    stepChunk(0, 0);
  }

  /**
   * Output fileds generated:
   *
   * - *terrainTiles* An array of THREE.Mesh objects visualizing terrain of the map.
   *
   * - *water* A THREE.Mesh object visualizing the bounds of the map.
   *
   * - *bounds* An object wiht x1, x2, y1, and y2 properties specifying the bounds of the map.
   *
   * @async
   * @param  {Function} callback Fires when renderer is finished, does not take arguments.
   */
  renderAsync(callback: Function) {
    /// Load all paged Images, requires inflation of other pack files!
    const pagedImageId = this.mapFile.getChunk("trn")!.data.materials.pagedImage;
    //@ts-ignore
    this.localReader.loadFile(pagedImageId, this.loadPagedImageCallback.bind(this, callback));
  }

  /**
   * TODO: write description. Used for export feature
   *
   * @param  {Function} callback [description]
   * @return {*}            [description]
   */
  getFileIdsAsync(/* callback */) {
    const terrainChunk = this.mapFile.getChunk("trn");
    const pimgTableDataChunk = this.mapFile.getChunk("pimg");
    const fileIds: number[] = [];

    /// ------------ SPLASH TEXTURES ------------
    const pimgData = pimgTableDataChunk && pimgTableDataChunk.data;
    const strippedPages = pimgData.strippedPages;

    /// Only use layer 0
    strippedPages.forEach(function (page: any) {
      /// Only load layer 0 and 1
      if (page.layer <= 1 && page.filename > 0) {
        fileIds.push(page.filename);
      }
    });
    /// ------------ END SPLASH TEXTURES ------------

    /// ------------ TILED IMAGES ------------
    const terrainData = terrainChunk!.data;
    const allTextures = terrainData.materials.texFileArray;
    allTextures.forEach(function (texture: any) {
      if (texture.filename > 0) fileIds.push(texture.filename);
    });
    /// ------------ END TILED IMAGES ------------

    return fileIds;
  }
}
