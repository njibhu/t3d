/*
  guid 1683952224941671000 is fucked up floor in SAB HUB
  materialFilename for that mesh is 564821, shared with lots of stuff
  lod 1 and 2 are both 0
  material flags is 2056
*/

/**
 * Collection of methods for generating THREE materials and textures
 * from Guild Wars 2 data formats.
 * @namespace MaterialUtils
 */

import type {
  Color,
  DataTexture,
  ShaderMaterial,
  Material,
  Texture,
  MeshPhongMaterial,
  MeshBasicMaterial,
} from "three";
import type { FileParser } from "t3d-parser";
import type LocalReader from "../LocalReader/LocalReader";

/**
 * Builds a custom vertex shader for a given number of uv cannels.
 * WIP not implemented yet!
 *
 * @memberof MaterialUtils
 * @param  {Number} numUv Number of UV channels used by this shader
 * @return {String}       Genereted vertex shader source
 */
export function buildVS(numUv: number): string {
  let vdefs = "";
  let adefs = "";
  let reads = "";
  for (let i = 0; i < numUv; i++) {
    vdefs += "varying vec2 vUv_" + (i + 1) + ";\n";

    /// uv and uv2 are defined by THREE
    if (i > 1) adefs += "attribute vec2 uv" + (i + 1) + ";\n";

    reads += "vUv_" + (i + 1) + " = uv" + (i > 0 ? i + 1 : "") + ";\n";
  }

  return (
    adefs +
    vdefs +
    "void main()\n" +
    "{\n" +
    reads +
    "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n" +
    "gl_Position = projectionMatrix * mvPosition;\n" +
    "}"
  );
}

/**
 * Generate a texture of a specified color, used to be part of THREEjs
 *
 * @memberof MaterialUtils
 * @param {Number} width
 * @param {Number} height
 * @param {THREE.Color} color
 * @returns {THREE.DataTexture}
 */
export function generateDataTexture(width: number, height: number, color: Color): DataTexture {
  // create a buffer with color data
  const size = width * height;
  const data = new Uint8Array(4 * size);
  const r = Math.floor(color.r * 255);
  const g = Math.floor(color.g * 255);
  const b = Math.floor(color.b * 255);
  const a = 255;

  for (let i = 0; i < size; i++) {
    const stride = i * 4;

    data[stride] = r;
    data[stride + 1] = g;
    data[stride + 2] = b;
    data[stride + 3] = a;
  }
  // used the buffer to create a DataTexture
  return new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
}

/**
 * Builds a custom pixel shader for a given number of uv cannels.
 * WIP not implemented yet!
 *
 * @memberof MaterialUtils
 * @param  {Array}  textures  THREE textures
 * @param  {Number} numUv     Number of UV channels used by this shader
 * @param  {Number} alphaTest Texture see-trough alpha treshold
 * @param  {any} lightMap  TODO
 * @returns {string}
 */
export function buildPS(textures: any[], numUv: number, alphaTest: number, lightMap: any): string {
  const t1uv = "vUv_" + (textures[0].uvIdx + 1);

  let discard = "";

  if (alphaTest) {
    discard = "    if (c1.a < 0.5) \n" + "       discard;\n";
  }

  /// Color from 1st text or lighted by 2nd?
  let writeColor = "gl_FragColor = c1;\n";

  if (lightMap) {
    const texIdx = 0;
    // var t2uv = "vUv_4";//+(3-textures[texIdx].uvIdx+1);
    const t2uv = "vUv_1"; // + (textures[texIdx].uvIdx+1);
    // console.log("t2uv",t2uv);

    writeColor = "   vec4 c2 = texture2D( texture" + (texIdx + 1) + ", " + t2uv + " );\n" + "     gl_FragColor = c2;\n";
    // "     gl_FragColor = vec4(c2.rgb * c1.r/.5, c2.a);\n";
  }

  let uniforms = "";
  textures.forEach(function (t, idx) {
    uniforms += "uniform sampler2D texture" + (idx + 1) + ";\n";
  });
  /* uniforms += "uniform sampler2D texture1;\n";
  if(lightMap)
    uniforms += "uniform sampler2D texture2;\n"; */

  let varyings = "";
  for (let i = 0; i < numUv; i++) {
    varyings += "varying vec2 vUv_" + (i + 1) + ";\n";
  }

  return (
    uniforms +
    varyings +
    "void main( void ) {\n" +
    "    vec4 c1 = texture2D( texture1, " +
    t1uv +
    " );\n" +
    discard +
    writeColor +
    "}"
  );
}

/**
 * WIP, concept for generatin materials to render multi UV chanelled meshes.
 *
 * @memberof MaterialUtils
 * @param  {Array}   textures  THREE texture
 * @param  {Number} numUV     Number of UV channels used by this shader
 * @param  {Number} alphaTest Texture see-trough alpha treshold
 * @return {THREE.ShaderMaterial} Generated shader
 */
export function getUVMat(textures: any[], numUV: number, alphaTest: number): ShaderMaterial {
  let lightMap = false;
  const uniforms: any = {};

  textures.forEach(function (t, idx) {
    uniforms["texture" + idx] = { type: "t", value: t };
  });

  if (textures.length > 1) {
    lightMap = true;
  }

  const attributes: any = {};

  for (let i = 2; i < numUV; i++) {
    attributes["uv" + (i + 1)] = { type: "v2", value: [] };
  }

  const vs = buildVS(numUV);

  return new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vs,
    fragmentShader: buildPS(textures, numUV, alphaTest, lightMap),
    // @ts-ignore
    attributes: attributes,
    side: THREE.FrontSide,
  });
}

interface ModelMaterialData {
  textures: {
    token: string;
    filename: number;
    uvPSInputIndex: number;
  }[];
  materialFlags: number;
  texCoordCount: number;
}

/**
 * Builds a THREE texture from a ModelMaterialData by reading settings and
 * loading any required data from the localReader. Uses sharedTextures for
 * texture caching.
 *
 * This method is full of guesses and estimations, and could be improved on
 * a lot, allowing rendering of multi UV channeled materials, or special
 * materials like custom color chanelled gear.
 *
 * @memberof MaterialUtils
 * @param  {ModelMaterialData} material
 * @param  {FileParser} materialFile   A FileParser instance, must be of type AMAT
 * @param  {LocalReader} localReader The LocalReader to load the file contents from.
 * @param  {Object} sharedTextures  Value Object for keeping the texture cache
 * @return {THREE.Material}         A THREE Material with the generated contents and settings.
 */
export function getMaterial(
  material: ModelMaterialData,
  materialFile: FileParser,
  localReader: LocalReader,
  sharedTextures: any
): Material | undefined {
  if (!materialFile) return;

  const dxChunk = materialFile.getChunk("dx9s");
  let grChunk = materialFile.getChunk("grmt")!;

  if (!dxChunk) {
    return new THREE.MeshBasicMaterial({
      side: THREE.FrontSide,
      color: 0xff0000,
      flatShading: true,
    });
  }

  /// Append all textures to the custom material
  const finalTextures: (Texture & { uvIdx?: number })[] = [];

  // Some materials don't use textures..
  if (material && material.textures.length && dxChunk.data.techniques.length > 0) {
    /// TODO: check for flags!
    ///
    /// techinques[] -> passes[] -> effects[] -> samplerIndex[]
    ///
    // console.log("num effects",dxChunk.data.techniques[0].passes[0].effects.length);

    // if(grChunk.data.flags!=76)
    //  return;

    /// 3 teqs : high medium low                GRAPHICS LEVEL SETTINGS
    /// 1 passes                        DON'T CARE
    /// 15 effects      Each effect has a pixel shader     HOW??
    /// 1 or 2 sampler indices                   USE ALL! (Multi material)

    const effects = dxChunk.data.techniques[0].passes[0].effects;
    // var effect = effects[10];
    const effect = effects[0];

    //let shader = dxChunk.data.shaders[effect.pixelShader];

    /* effects.forEach(function (eff) {
      if(eff.samplerIndex.length > effect.samplerIndex.length)
        effect = eff;
    }); */
    // var samplerIdx = effect.samplerIndex[0];

    const samplerTextures = [];
    let textureToken: string; // UINT64
    let samplerTex: ModelMaterialData["textures"][number] | null;
    for (let i = 0; i < effect.samplerIndex.length; i++) {
      const samplerIdx = effect.samplerIndex[i];
      const sampler = dxChunk.data.samplers[samplerIdx];

      /// SHOULD NEVER HAPPEN, hide mesh!
      if (!sampler) continue; // return;

      textureToken = sampler && grChunk.data.texTokens[sampler.textureIndex];
      if (!textureToken) textureToken = "0-0";
      /* else
        textureToken =textureToken.val; */

      /// Find the texture reffered by this sampler
      samplerTex = null;

      material.textures.forEach(function (tex /*, index*/) {
        /// Seems like only 1st part of token is used...
        if (!samplerTex && tex.token.split("-")[0] === textureToken.split("-")[0]) {
          // console.log("TEX match",tex.token, textureToken)
          samplerTex = tex;
        }
      });

      /// Add this sampler's texture to the collection of all textures
      if (samplerTex) {
        samplerTextures.push(samplerTex);
      } else {
        /// FALLBACK, just guess what texture we should use
        if (sampler) {
          samplerTextures.push(material.textures[sampler.textureIndex]);
        } else if (material.textures.length > 0) {
          samplerTextures.push(material.textures[0]);
        } else {
          return;
        }
      }
    } /// END for each sampler index in effect

    /// We now have all textures
    // console.log("textures from sampler", samplerTextures);

    /// Fallback to using whatever texture there is.
    if (samplerTextures.length <= 0) {
      return;
      // mainTex =  material.textures[0];
    }

    // console.log("num samplers ",samplerTextures.length);
    samplerTextures.forEach(function (texture, idx) {
      if (!texture) return;

      /// Set texture "URL"
      const texURL = texture && texture.filename;

      /// Load texture from RAM or local reader:
      finalTextures[idx] = getTexture(texURL, localReader, sharedTextures);
      if (finalTextures[idx]) {
        finalTextures[idx].uvIdx = texture.uvPSInputIndex;
      }
    });
  } /// End if material and texture

  let finalMaterial: (MeshPhongMaterial | MeshBasicMaterial) & { textureFilename?: string; normalMap?: Texture | null };

  /// Create custom shader material if there are textures
  if (finalTextures) {
    // TODO: make this work!
    // eslint-disable-next-line no-constant-condition, no-constant-binary-expression
    if (false && finalTextures.length > 0) {
      //@ts-ignore
      finalMaterial = getUVMat(finalTextures, material.texCoordCount, grChunk.data.flags !== 16460);
    } else {
      let ft: any = false;
      let nt: any = false;
      material.textures.forEach(function (t) {
        // Flag for diffuse map
        if (!ft && t.token.split("-")[0] === "1733499172") ft = t;

        // Flag for normal map
        if (!nt && t.token.split("-")[0] === "404146670") nt = t;
      });

      if (!ft || ft.filename <= 0) return;

      finalMaterial = new THREE.MeshPhongMaterial({
        side: THREE.FrontSide,
        map: getTexture(ft.filename, localReader, sharedTextures),
      });
      if (nt) {
        const normalMap = getTexture(nt.filename, localReader, sharedTextures);
        normalMap.flipY = true;
        finalMaterial.normalMap = normalMap;
      }

      finalMaterial.textureFilename = ft.filename;
      if (grChunk.data.flags !== 16460) {
        // console.log("Setting alpha flag for ",grChunk.data.flags)
        finalMaterial.alphaTest = 0.05;
      }
    }
  }

  /// Fallback material is monocolored red
  else {
    finalMaterial = new THREE.MeshBasicMaterial({
      side: THREE.FrontSide,
      color: 0xff0000,
      flatShading: true,
    });
  }

  finalMaterial.needsUpdate = true;

  /// Set material props
  /// disable for now in order for custom shaders not to fuck up

  if (material) {
    const alphaMask0 = 0x0001; // + 0x0100 + 0x0200;
    const alphaMask1 = 0x0010;
    const alphaMask2 = 0x0100 + 0x0200;
    //let alphaMask2b = 0x0200;

    grChunk = materialFile.getChunk("grmt")!;

    // Enable alpha test for transparent flags
    if (
      material.materialFlags & alphaMask0 ||
      material.materialFlags & alphaMask1 ||
      material.materialFlags & alphaMask2 // && solidColor != null
    ) {
      // return;
      // mesh.material.transparent = true;
      // mesh.material.opacity = 2.0;
      // var clr = solidColor;
      // var propAlpha = 0;
      /// Backgroud color adds to alpha
      // if( mesh.materialFlags == 2569  ){
      /// This is rly just guesswork
      /// Check material flag  2568 (as int) and compare material filename 27353 to 20041
      /// Same flags but some have alpha and some don't
      // if( mesh.materialFlags & alphaMask2b  ){
      //  propAlpha =  (clr[3] - 128)/128;
      //  //propAlpha = Math.max(0,propAlpha);
      // }
      // mesh.material.alphaTest = Math.max(0, 0.1 );//- propAlpha*2);
    }

    /// GRCHUNK -> DATA -> FLAGS

    /// HAS LIGHT - TEX - ? - EMISSIVE16460
    ///

    /// 56533 LOD FOR TOMBSTONE?

    //  16460      0100 0000 0100 1100      "standard" stuff rendering OK in SAB (no alpha test)

    //
    //  16452(SAB)    0100 0000 0100 0100      yellow numbers in sab signs
    //  16448(SAB)    0100 0000 0100 0000      faces on rocks, cloudmen, skybox portal images, holes in walls, floor plates...
    //                        no lighting??
    //
    //   8268      0010 0000 0100 1100
    //   3392      0000 1101 0100 0000      Moto machine light bulbs
    //   2380      0000 1001 0100 1100
    //   2368      0000 1001 0100 0000      Fountain water with rings, portal border and circular "light"
    //    332      0000 0001 0100 1100
    //    324      0000 0001 0100 0100      Moto face sprites
    //
    //    320(SAB)    0000 0001 0100 0000      portal textures (normal maps ish)
    //
    //     76      0000 0000 0100 1100      LOTS OF STUFF
    //                           Tree leaves, ground, hills, some roofs, flags, street lights
    //                           sheild textures, some fences, water tops, waterfall
    //
    //                           IN KHYLO "everything with alpha"
    //
    //
    //     68      0000 0000 0100 0100      Some flowers (lo res?) fountain edges foam
    //
    //     64(SAB)    0000 0000 0100 0000      clouds, sun iamge

    const lightMask = 8;

    const knownFileFlags = [24652, 16460, 16452, 16448, 8268, 3392, 2380, 2368, 332, 324, 320, 76, 68, 64];

    if (knownFileFlags.indexOf(grChunk.data.flags) < 0) {
      T3D.Logger.log(T3D.Logger.TYPE_WARNING, "unknown GR flag", grChunk.data.flags);
    }

    if (!(grChunk.data.flags & lightMask)) {
      // debugger;
      // console.log("no light");
      finalMaterial = new THREE.MeshBasicMaterial({
        side: THREE.FrontSide,
        map: finalMaterial.map,
      });
    }

    if (grChunk.data.flags !== 16460) {
      finalMaterial.alphaTest = 0.05;
    }
  } /// End if material

  return finalMaterial;
}

/**
 * Load image data into a THREE.Texture from a texture file in the .dat file, using a LocalReader.
 * Any loaded tetures are added to sharedTextures, allowing for texture caching and fewer reads.
 *
 * @memberof MaterialUtils
 * @param  {Number} texURL         The fileId or baseId of the file to load image data from.
 * @param  {LocalReader} localReader    The LocalReader to load the file contents from.
 * @param  {Object} sharedTextures Value Object for keeping the texture cache
 * @return {THREE.Texture} A texture that will be populated by the file data when it is loaded.
 */
export function getTexture(texURL: number, localReader: LocalReader, sharedTextures: any): Texture {
  let finalTexture;

  /// Read texture from shared array of loaded textures
  /// or read it from URL and add to shared ones!
  if (texURL && sharedTextures[texURL]) {
    /// Just read from already loaded textures.
    finalTexture = sharedTextures[texURL];
  } else if (texURL) {
    /// Load and add to shared array.
    finalTexture = loadLocalTexture(localReader, texURL);

    /// Set standard texture functionality.
    finalTexture.wrapT = THREE.RepeatWrapping;
    finalTexture.wrapS = THREE.RepeatWrapping;
    finalTexture.flipY = false;

    sharedTextures[texURL] = finalTexture;
  }

  return finalTexture;
}

/**
 * Load image data into a THREE.Texture from a texture file in the .dat file, using a LocalReader.
 * If you're loading multiple textures, make sure to use
 * {{#crossLink "MaterialUtils/getTexture"}}{{/crossLink}} that allows you to cache textures.
 *
 * @memberof MaterialUtils
 * @param {LocalReader} localReader - The LocalReader to load the file contents from.
 * @param {Number} fileId - The fileId or baseId of the file to load image data from.
 * @param {Number} mapping - What THREE mapping the returned texture will use, not implemented.

 * @return {THREE.Texture} A texture that will be populated by the file data when it is loaded.
 */
export function loadLocalTexture(
  localReader: LocalReader,
  fileId: number,
  mapping?: number,
  defaultColor?: number,
  onerror?: Function
): Texture {
  if (defaultColor === undefined) {
    defaultColor = Math.floor(0xffffff * Math.random());
  }

  /// Temporary texture that will be returned by the function.
  /// Color is randomized in order to differentiate different textures during loading.
  const texture = generateDataTexture(
    1, // Width
    1, // Height
    new THREE.Color(defaultColor) // Color
  );

  // Threejs r71 is using these settings by default, r72+ changed it
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.flipY = true;

  /// Only allow non-zero fileId, otherwise jsut return static texture
  if (parseInt(String(fileId)) <= 0) {
    if (onerror) onerror();
    return texture;
  }

  /// Load file using LocalReader.
  localReader.loadFile(
    fileId,
    function (inflatedData, dxtType, imageWidth, imageHeigth) {
      /// Require infalted data to be returned.
      if (!inflatedData) {
        if (onerror) onerror();
        return;
      }

      /// Create image using returned data.
      const image = {
        data: new Uint8Array(inflatedData),
        width: imageWidth,
        height: imageHeigth,
      };

      /// Use RGBA for all textures for now...
      /// TODO: don't use alpha for some formats!
      texture.format =
        //eslint-disable-next-line no-constant-condition
        dxtType === 3 || dxtType === 5 || true ? THREE.RGBAFormat : THREE.RGBFormat;

      /// Update texture with the loaded image.
      //@ts-ignore
      texture.image = image;
      texture.needsUpdate = true;
    },
    true
  );

  /// Return texture with temporary content.
  return texture;
}
