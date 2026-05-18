export interface TextureViewInput {
  rawData: ArrayBuffer;
  /// from T3D DataRenderer "image" output (decoded ATEX/ATEC/etc)
  image?: { width: number; height: number; data: ArrayBuffer };
}

export type TextureKind = "decoded" | "png" | "riff" | null;

/// Detects which texture format we have by magic bytes.
/// PNG header: 0x89 0x50 0x4E 0x47
/// RIFF header: "RIFF"
export function detectTextureKind(input: TextureViewInput): TextureKind {
  if (input.image) return "decoded";
  const u8 = new Uint8Array(input.rawData);
  if (u8.length > 4 && u8[0] === 137 && u8[1] === 80 && u8[2] === 78 && u8[3] === 71) return "png";
  if (u8.length > 4 && u8[0] === 82 && u8[1] === 73 && u8[2] === 70 && u8[3] === 70) return "riff";
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
  }
}
