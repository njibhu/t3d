import * as THREE from "three";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader.js";

export interface TextureViewInput {
  rawData: ArrayBuffer;
  /// from T3D DataRenderer "image" output (decoded ATEX/ATEC/etc)
  image?: { width: number; height: number; data: ArrayBuffer };
}

export type TextureKind = "decoded" | "png" | "riff" | "dds" | null;

/// Detects which texture format we have by magic bytes.
/// PNG header: 0x89 0x50 0x4E 0x47
/// RIFF header: "RIFF"
/// DDS  header: "DDS " (0x44 0x44 0x53 0x20)
export function detectTextureKind(input: TextureViewInput): TextureKind {
  if (input.image) return "decoded";
  const u8 = new Uint8Array(input.rawData);
  if (u8.length > 4 && u8[0] === 137 && u8[1] === 80 && u8[2] === 78 && u8[3] === 71) return "png";
  if (u8.length > 4 && u8[0] === 82 && u8[1] === 73 && u8[2] === 70 && u8[3] === 70) return "riff";
  if (u8.length > 4 && u8[0] === 0x44 && u8[1] === 0x44 && u8[2] === 0x53 && u8[3] === 0x20) return "dds";
  return null;
}

export function renderTextureView(host: HTMLElement, input: TextureViewInput, kind: TextureKind): void {
  host.className = "view-pane texture-view";
  host.replaceChildren();

  if (kind === "decoded" && input.image) {
    const canvas = document.createElement("canvas");
    canvas.width = input.image.width;
    canvas.height = input.image.height;
    const ctx = canvas.getContext("2d")!;
    const uica = new Uint8ClampedArray(input.image.data);
    const imagedata = new ImageData(uica, input.image.width, input.image.height);
    ctx.putImageData(imagedata, 0, 0);
    host.appendChild(canvas);
    return;
  }

  if (kind === "png" || kind === "riff") {
    const mime = kind === "png" ? "image/png" : "image/webp";
    const blob = new Blob([input.rawData], { type: mime });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => URL.revokeObjectURL(url);
    img.src = url;
    host.appendChild(img);
    return;
  }

  if (kind === "dds") {
    renderDDS(host, input.rawData);
    return;
  }
}

/// Decode a DDS file via three.js DDSLoader and render it to a 2D canvas
/// via a one-shot WebGL readback. The WebGL context is created and torn
/// down inside this function so we don't keep a GL context per viewer.
function renderDDS(host: HTMLElement, rawData: ArrayBuffer): void {
  let parsed: any;
  try {
    parsed = new DDSLoader().parse(rawData, true);
  } catch (err) {
    showError(host, `DDS parse failed: ${(err as Error).message}`);
    return;
  }

  const mip0 = parsed?.mipmaps?.[0];
  if (!parsed?.width || !parsed?.height || !mip0 || parsed.format == null) {
    showError(host, "DDS format not supported (only DXT1/3/5, ETC1, BC6H, and uncompressed RGBA).");
    return;
  }
  const width: number = parsed.width;
  const height: number = parsed.height;
  const isUncompressedRGBA = parsed.format === THREE.RGBAFormat;

  /// Probe GL extension support up front so we can give a useful error
  /// instead of a black square. WebGL renderers in browsers expose S3TC
  /// (DXTn) via WEBGL_compressed_texture_s3tc, which most desktop GPUs
  /// support but some integrated/mobile/iOS GPUs do not.
  if (!isUncompressedRGBA) {
    const probe = document.createElement("canvas").getContext("webgl2") as WebGL2RenderingContext | null;
    if (probe) {
      const needsS3TC = [
        THREE.RGB_S3TC_DXT1_Format,
        THREE.RGBA_S3TC_DXT3_Format,
        THREE.RGBA_S3TC_DXT5_Format,
      ].includes(parsed.format);
      if (needsS3TC && !probe.getExtension("WEBGL_compressed_texture_s3tc")) {
        showError(host, "Your browser/GPU does not support DXTn (S3TC) compressed textures.");
        return;
      }
    }
  }

  /// Build the right kind of texture for the format.
  /// - Compressed (DXT/ETC/BC6H): CompressedTexture, GPU decodes.
  /// - Uncompressed RGBA (the `else` branch in DDSLoader, fourCC == 0):
  ///   we MUST use DataTexture; CompressedTexture's uploader calls
  ///   `compressedTexImage2D` which fails on plain RGBA data and yields
  ///   a black square — this is what happens for cubemap RGBA DDS like
  ///   the user's 2745975.DDS sample.
  let tex: THREE.Texture;
  if (isUncompressedRGBA) {
    /// Cubemap files in the RGBA path have 6 faces × N mips in mipmaps[];
    /// the first entry is mip0 of face 0 (+X) which is what we preview.
    tex = new THREE.DataTexture(mip0.data, mip0.width, mip0.height, THREE.RGBAFormat, THREE.UnsignedByteType);
  } else {
    tex = new THREE.CompressedTexture(parsed.mipmaps, width, height, parsed.format, THREE.UnsignedByteType);
  }
  /// DDS stores rows top-to-bottom; WebGL expects bottom-to-top. We
  /// can't UNPACK_FLIP_Y_WEBGL with compressed textures (driver rejects it),
  /// so we'll flip the geometry's UVs below instead.
  tex.flipY = false;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;

  /// One-shot offscreen renderer. Opaque clear so the readback never
  /// produces transparent pixels even when the source has no alpha.
  const renderer = new THREE.WebGLRenderer({
    antialias: false,
    preserveDrawingBuffer: true,
    alpha: false,
    premultipliedAlpha: false,
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  try {
    renderer.setSize(width, height, false);
    renderer.setClearColor(0x000000, 1);

    const scene = new THREE.Scene();
    /// PlaneGeometry default UVs flip the texture for our use case; passing
    /// the texture without flipY=true and using a screen-aligned ortho cam
    /// gives the expected orientation when read back.
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1);
    const geometry = new THREE.PlaneGeometry(1, 1);
    /// Flip V on the geometry to compensate for DDS top-down storage
    const uv = geometry.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - uv.getY(i));
    uv.needsUpdate = true;

    const material = new THREE.MeshBasicMaterial({ map: tex });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer.render(scene, camera);

    /// Pull pixels from the GL drawing buffer into a 2D canvas.
    const out = document.createElement("canvas");
    out.width = width;
    out.height = height;
    const ctx = out.getContext("2d")!;
    ctx.drawImage(renderer.domElement, 0, 0);
    host.appendChild(out);

    geometry.dispose();
    material.dispose();
    tex.dispose();
  } catch (err) {
    showError(host, `DDS render failed: ${(err as Error).message}`);
  } finally {
    renderer.dispose();
    renderer.forceContextLoss();
  }
}

function showError(host: HTMLElement, msg: string): void {
  const p = document.createElement("p");
  p.style.color = "var(--t3d-text-muted)";
  p.style.fontStyle = "italic";
  p.textContent = msg;
  host.appendChild(p);
}
