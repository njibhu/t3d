import DataRenderer from "./DataRenderer";
import * as RenderUtils from "../util/RenderUtils";
import * as MaterialUtils from "../util/MaterialUtils";
import * as TerrainShader from "../util/TerrainShader";
import * as THREE from "three";
import EnvironmentRenderer from "./EnvironmentRenderer";
import { FileParser } from "t3d-parser";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";
import type { Material } from "three";
import { createMultiMaterialObject } from "three/examples/jsm/utils/SceneUtils.js";

const LEGACY_CHUNK_SEGMENTS = 32;
const LEGACY_CHUNK_SAMPLE_WIDTH = 35;

function getChunkResolution(terrainData: any): { chunkSegments: number; chunkSampleWidth: number } {
  const preferredChunkSegments = terrainData.verticesPerChunkSide ?? LEGACY_CHUNK_SEGMENTS;
  const preferredChunkSampleWidth = preferredChunkSegments + 3;
  const chunkCount = terrainData.chunkArray.length;
  const samplesPerChunk = chunkCount > 0 ? terrainData.heightMapArray.length / chunkCount : 0;
  const expectedSamplesPerChunk = preferredChunkSampleWidth * preferredChunkSampleWidth;

  if (samplesPerChunk === expectedSamplesPerChunk) {
    return {
      chunkSegments: preferredChunkSegments,
      chunkSampleWidth: preferredChunkSampleWidth,
    };
  }

  return {
    chunkSegments: LEGACY_CHUNK_SEGMENTS,
    chunkSampleWidth: LEGACY_CHUNK_SAMPLE_WIDTH,
  };
}

function getPageTextureKey(page: any): string {
  const coord = page.coord ?? [0, 0];
  return `${page.layer}:${coord[0]},${coord[1]}`;
}

function getSolidColorKey(color: ArrayLike<number>): string {
  return Array.from(color).join(",");
}

function getPageSolidColorValue(page: any): number[] | null {
  if (!page?.solidColor) return null;

  const solidColor = Array.from(page.solidColor as ArrayLike<number>);
  if (solidColor.length !== 4) return null;

  if (page.filename > 0) return null;

  if (page.flags || solidColor.some((value) => value !== 0)) {
    return solidColor;
  }

  return null;
}

function makeSolidColorTexture(color: ArrayLike<number>): THREE.DataTexture {
  const [r = 0, g = 0, b = 0, a = 255] = Array.from(color);
  const texture = MaterialUtils.generateDataTexture(1, 1, new THREE.Color(r / 255, g / 255, b / 255));
  const imageData = texture.image.data as Uint8Array;
  imageData[3] = a;
  texture.needsUpdate = true;
  return texture;
}

type TerrainHeightChunk = {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  columns: number;
  rows: number;
  heights: Float32Array;
};

type TerrainHeightSampler = {
  sampleHeight(x: number, z: number): number | null;
};

function sampleTerrainHeightChunk(chunk: TerrainHeightChunk, x: number, z: number): number | null {
  const width = chunk.maxX - chunk.minX;
  const depth = chunk.maxZ - chunk.minZ;
  if (width <= 0 || depth <= 0) {
    return null;
  }

  const u = (x - chunk.minX) / width;
  const v = (z - chunk.minZ) / depth;
  if (u < 0 || u > 1 || v < 0 || v > 1) {
    return null;
  }

  const colFloat = Math.max(0, Math.min(chunk.columns - 1, u * (chunk.columns - 1)));
  const rowFloat = Math.max(0, Math.min(chunk.rows - 1, v * (chunk.rows - 1)));

  const col0 = Math.floor(colFloat);
  const row0 = Math.floor(rowFloat);
  const col1 = Math.min(chunk.columns - 1, col0 + 1);
  const row1 = Math.min(chunk.rows - 1, row0 + 1);

  const tx = colFloat - col0;
  const ty = rowFloat - row0;

  const h00 = chunk.heights[row0 * chunk.columns + col0];
  const h10 = chunk.heights[row0 * chunk.columns + col1];
  const h01 = chunk.heights[row1 * chunk.columns + col0];
  const h11 = chunk.heights[row1 * chunk.columns + col1];

  const hx0 = h00 + (h10 - h00) * tx;
  const hx1 = h01 + (h11 - h01) * tx;
  return hx0 + (hx1 - hx0) * ty;
}

function createTerrainHeightSampler(state: {
  originX: number;
  originZ: number;
  chunkWidth: number;
  chunkHeight: number;
  xChunks: number;
  yChunks: number;
  chunks: TerrainHeightChunk[];
}): TerrainHeightSampler {
  return {
    sampleHeight(x: number, z: number): number | null {
      const localX = x - state.originX;
      const localZ = z - state.originZ;
      if (localX < 0 || localZ < 0) {
        return null;
      }

      const chunkX = Math.min(state.xChunks - 1, Math.floor(localX / state.chunkWidth));
      const chunkZ = Math.min(state.yChunks - 1, Math.floor(localZ / state.chunkHeight));
      if (chunkX < 0 || chunkX >= state.xChunks || chunkZ < 0 || chunkZ >= state.yChunks) {
        return null;
      }

      const chunk = state.chunks[chunkZ * state.xChunks + chunkX];
      if (!chunk) {
        return null;
      }

      return sampleTerrainHeightChunk(chunk, x, z);
    },
  };
}

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
  static override rendererName = "TerrainRenderer";

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
    self.getOutput().terrainHeightSampler = undefined;

    const pimgFile = new FileParser(inflatedBuffer);
    const pimgTableDataChunk = pimgFile.getChunk("pgtb");
    const pimgData = pimgTableDataChunk && pimgTableDataChunk.data;

    this.mapRect = null;

    /// Fetch chunks
    const terrainData = this.mapFile.getChunk("trn")!.data;
    const parameterData = this.mapFile.getChunk("parm")!.data;

    /// Read settings
    const maxAnisotropy = this.settings.anisotropy ? this.settings.anisotropy : 1;

    const { chunkSegments, chunkSampleWidth } = getChunkResolution(terrainData);
    const expectedSamplesPerChunk = chunkSampleWidth * chunkSampleWidth;
    const samplesPerChunk =
      terrainData.chunkArray.length > 0 ? terrainData.heightMapArray.length / terrainData.chunkArray.length : 0;

    if (samplesPerChunk !== expectedSamplesPerChunk) {
      self.logger.log(
        self.logger.TYPE_WARNING,
        "TerrainRenderer",
        `Unexpected terrain chunk sample count (${samplesPerChunk}); falling back to legacy ${LEGACY_CHUNK_SAMPLE_WIDTH}x${LEGACY_CHUNK_SAMPLE_WIDTH} height grid`
      );
    }

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
    const generatedPickerTextures: Record<string, THREE.Texture> = {};
    const terrainHeightChunks: TerrainHeightChunk[] = [];
    let terrainHeightOriginX: number | null = null;
    let terrainHeightOriginZ: number | null = null;

    const resolvePickerTexture = function (page: any): THREE.Texture {
      const pageTextureKey = getPageTextureKey(page);
      if (generatedPickerTextures[pageTextureKey]) {
        return generatedPickerTextures[pageTextureKey];
      }

      if (page.filename > 0) {
        const texture = MaterialUtils.loadLocalTexture(self.localReader, page.filename);
        generatedPickerTextures[pageTextureKey] = texture;
        return texture;
      }

      const solidColor = getPageSolidColorValue(page);
      if (solidColor) {
        const solidColorKey = `solid:${getSolidColorKey(solidColor)}`;
        if (!generatedPickerTextures[solidColorKey]) {
          generatedPickerTextures[solidColorKey] = makeSolidColorTexture(solidColor);
        }
        generatedPickerTextures[pageTextureKey] = generatedPickerTextures[solidColorKey];
        return generatedPickerTextures[pageTextureKey];
      }

      const fallbackColor = page.layer === 1 ? [128, 128, 128, 255] : [0, 0, 0, 255];
      const fallbackKey = `fallback:${page.layer}:${getSolidColorKey(fallbackColor)}`;
      if (!generatedPickerTextures[fallbackKey]) {
        generatedPickerTextures[fallbackKey] = makeSolidColorTexture(fallbackColor);
      }
      generatedPickerTextures[pageTextureKey] = generatedPickerTextures[fallbackKey];
      return generatedPickerTextures[pageTextureKey];
    };

    /// Load textures
    if (pimgData) {
      const strippedPages = pimgData.strippedPages;

      /// Only use layer 0
      strippedPages.forEach(function (page: any) {
        /// Only load layer 0 and 1
        if (page.layer <= 1) {
          //let color = page.solidColor;
          const coord = page.coord;

          let matName = coord[0] + "," + coord[1];
          if (page.layer === 1) matName += "-2";

          /// Add texture to list, note that coord name is used, not actual file name
          if (!chunkTextures[matName]) {
            const chunkTex = resolvePickerTexture(page);

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
      const envOutput = self.getOutput(EnvironmentRenderer);
      if (envOutput.hazeColor) {
        fog.color.r = envOutput.hazeColor[2] / 255.0;
        fog.color.g = envOutput.hazeColor[1] / 255.0;
        fog.color.b = envOutput.hazeColor[0] / 255.0;
      }

      const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib["lights"]]);

      /// TODO: READ FROM VO, don't default to hard coded scale
      uniforms.uvScale = { value: new THREE.Vector2(8.0, 8.0) };
      uniforms.offset = {
        value: new THREE.Vector2(pageOffetX, pageOffetY),
      };

      uniforms.texturePicker = {
        value: chunkTextures[pageTexName],
      };
      uniforms.texturePicker2 = {
        value: chunkTextures[pageTexName2],
      };

      uniforms.texture1 = { value: chunkTextures[fileNames[0]] };
      uniforms.texture2 = { value: chunkTextures[fileNames[1]] };
      uniforms.texture3 = { value: chunkTextures[fileNames[2]] };
      uniforms.texture4 = { value: chunkTextures[fileNames[3]] };
      uniforms.lightScale = { value: 1.0 };
      uniforms.shadowStrength = { value: 0.6 };

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
      const chunkGeo = new THREE.PlaneGeometry(cdx, cdy, chunkSegments, chunkSegments);
      const chunkHeights = new Float32Array((chunkSegments + 1) * (chunkSegments + 1));

      let cn = 0;

      /// Render chunk

      /// Each chunk vertex
      for (let y = 0; y < chunkSampleWidth; y++) {
        for (let x = 0; x < chunkSampleWidth; x++) {
          if (x !== 0 && x !== chunkSampleWidth - 1 && y !== 0 && y !== chunkSampleWidth - 1) {
            const sampledHeight = terrainData.heightMapArray[n];
            //@ts-ignore
            chunkGeo.getAttribute("position").array[cn * 3 + 2] = sampledHeight;
            chunkHeights[cn] = -sampledHeight;
            cn++;
          }

          n++;
        }
      } // End each chunk vertex

      /// Flip the plane to fit wonky THREE js world axes
      const mS = new THREE.Matrix4().identity();
      mS.elements[5] = -1;
      chunkGeo.applyMatrix4(mS);

      /// Compute normals for lighting
      chunkGeo.computeVertexNormals();

      /// Build chunk mesh!
      let chunk;
      chunk = new THREE.Mesh(chunkGeo, customMaterial);
      if (Array.isArray(mat)) {
        chunk = createMultiMaterialObject(chunkGeo as any, mat);
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

      const chunkMinX = chunk.position.x - cdx / 2;
      const chunkMinZ = chunk.position.z - cdy / 2;
      terrainHeightChunks[chunkIndex] = {
        minX: chunkMinX,
        maxX: chunk.position.x + cdx / 2,
        minZ: chunkMinZ,
        maxZ: chunk.position.z + cdy / 2,
        columns: chunkSegments + 1,
        rows: chunkSegments + 1,
        heights: chunkHeights,
      };
      if (terrainHeightOriginX === null || chunkMinX < terrainHeightOriginX) {
        terrainHeightOriginX = chunkMinX;
      }
      if (terrainHeightOriginZ === null || chunkMinZ < terrainHeightOriginZ) {
        terrainHeightOriginZ = chunkMinZ;
      }

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
        if (terrainHeightOriginX !== null && terrainHeightOriginZ !== null) {
          self.getOutput().terrainHeightSampler = createTerrainHeightSampler({
            originX: terrainHeightOriginX,
            originZ: terrainHeightOriginZ,
            chunkWidth: cdx,
            chunkHeight: cdy,
            xChunks: xChunks,
            yChunks: yChunks,
            chunks: terrainHeightChunks,
          });
        }

        /// Fire call back, we're done rendering.
        callback();
        return;
      }

      const pct = Math.floor((100 * (cy * xChunks + cx)) / (xChunks * yChunks));

      self.logger.log(self.logger.TYPE_PROGRESS, "Loading Terrain", pct);

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
  override renderAsync(callback: Function) {
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
