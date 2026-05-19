import * as THREE from "three";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader.js";

export interface TextureViewInput {
  rawData: ArrayBuffer;
  /** Pre-decoded RGBA pixels, present for ATEX/ATEC/ATEP/ATET/ATEU/ATTX
   *  textures already handled by the library. */
  image?: { width: number; height: number; data: ArrayBuffer };
}

export type TextureKind = "decoded" | "png" | "riff" | "dds" | null;

export function detectTextureKind(input: TextureViewInput): TextureKind {
  if (input.image) return "decoded";
  const u8 = new Uint8Array(input.rawData);
  if (u8.length < 4) return null;
  if (matches(u8, [0x89, 0x50, 0x4e, 0x47])) return "png";
  if (matches(u8, [0x52, 0x49, 0x46, 0x46])) return "riff"; // "RIFF"
  if (matches(u8, [0x44, 0x44, 0x53, 0x20])) return "dds"; // "DDS "
  return null;
}

function matches(bytes: Uint8Array, signature: number[]): boolean {
  for (let i = 0; i < signature.length; i++) if (bytes[i] !== signature[i]) return false;
  return true;
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

interface ParsedDDS {
  width: number;
  height: number;
  /** Three.js's typed format unions are tight; DDSLoader returns formats
   *  that span Compressed/DataTexture/etc., so this stays loose. */
  format: any;
  mipmaps: Array<{ data: Uint8Array; width: number; height: number }>;
}

const S3TC_FORMATS: number[] = [THREE.RGB_S3TC_DXT1_Format, THREE.RGBA_S3TC_DXT3_Format, THREE.RGBA_S3TC_DXT5_Format];

function renderDDS(host: HTMLElement, rawData: ArrayBuffer): void {
  let parsed: ParsedDDS;
  try {
    parsed = new DDSLoader().parse(rawData, true) as unknown as ParsedDDS;
  } catch (err) {
    showError(host, `DDS parse failed: ${(err as Error).message}`);
    return;
  }

  if (!parsed?.width || !parsed?.height || !parsed.mipmaps[0] || parsed.format == null) {
    showError(host, "DDS format not supported (only DXT1/3/5, ETC1, BC6H, and uncompressed RGBA).");
    return;
  }

  // Compressed S3TC requires the WEBGL_compressed_texture_s3tc extension -
  // missing on some integrated/mobile/iOS GPUs. Probe before rendering so
  // we can surface a useful error instead of a black square.
  const isUncompressedRGBA = parsed.format === THREE.RGBAFormat;
  if (!isUncompressedRGBA && S3TC_FORMATS.includes(parsed.format)) {
    const probe = document.createElement("canvas").getContext("webgl2");
    if (probe && !probe.getExtension("WEBGL_compressed_texture_s3tc")) {
      showError(host, "Your browser/GPU does not support DXTn (S3TC) compressed textures.");
      return;
    }
  }

  // CompressedTexture's uploader calls compressedTexImage2D, which fails
  // silently on plain RGBA bytes (DDSLoader's uncompressed branch). We must
  // route uncompressed data through DataTexture instead.
  // For cubemap DDS, mipmaps[0] is mip 0 of the +X face - the conventional
  // preview face.
  const texture: THREE.Texture = isUncompressedRGBA
    ? new THREE.DataTexture(
        parsed.mipmaps[0].data,
        parsed.mipmaps[0].width,
        parsed.mipmaps[0].height,
        THREE.RGBAFormat,
        THREE.UnsignedByteType
      )
    : new THREE.CompressedTexture(
        parsed.mipmaps as any,
        parsed.width,
        parsed.height,
        parsed.format,
        THREE.UnsignedByteType
      );

  // DDS rows are top-to-bottom; WebGL is bottom-to-top. UNPACK_FLIP_Y_WEBGL
  // is invalid for compressed textures, so we flip on the geometry's UVs.
  texture.flipY = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  // Opaque clear and no `transparent: true` on the material so the readback
  // never produces transparent pixels for textures without alpha - those
  // would otherwise blend out to black on the 2D canvas's white backdrop.
  const renderer = new THREE.WebGLRenderer({
    antialias: false,
    preserveDrawingBuffer: true,
    alpha: false,
    premultipliedAlpha: false,
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  try {
    renderer.setSize(parsed.width, parsed.height, false);
    renderer.setClearColor(0x000000, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1);
    const geometry = new THREE.PlaneGeometry(1, 1);
    flipUvsVertically(geometry);

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer.render(scene, camera);

    const out = document.createElement("canvas");
    out.width = parsed.width;
    out.height = parsed.height;
    out.getContext("2d")!.drawImage(renderer.domElement, 0, 0);
    host.appendChild(out);

    geometry.dispose();
    material.dispose();
    texture.dispose();
  } catch (err) {
    showError(host, `DDS render failed: ${(err as Error).message}`);
  } finally {
    renderer.dispose();
    renderer.forceContextLoss();
  }
}

function flipUvsVertically(geometry: THREE.PlaneGeometry): void {
  const uv = geometry.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - uv.getY(i));
  uv.needsUpdate = true;
}

function showError(host: HTMLElement, msg: string): void {
  const p = document.createElement("p");
  p.style.color = "var(--t3d-text-muted)";
  p.style.fontStyle = "italic";
  p.textContent = msg;
  host.appendChild(p);
}
