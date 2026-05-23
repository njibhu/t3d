import T3D, { FileParser } from "t3d-lib";
import { triggerDownload } from "../util/download";

type PackChunk = FileParser["chunks"][number];

export function renderPackView(host: HTMLElement, packfile: FileParser, fileBaseName: string): void {
  host.className = "view-pane padded";
  const heading = document.createElement("h2");
  heading.textContent = "Chunks";
  heading.style.color = "var(--t3d-accent)";
  host.replaceChildren(heading);

  for (const chunk of packfile.chunks) {
    host.appendChild(buildChunkSection(chunk, fileBaseName));
  }
}

function buildChunkSection(chunk: PackChunk, fileBaseName: string): HTMLElement {
  const field = document.createElement("fieldset");
  field.className = "pack-chunk";

  const legend = document.createElement("legend");
  legend.textContent = chunk.header.type;
  field.appendChild(legend);

  const size = document.createElement("p");
  size.textContent = `Size: ${chunk.header.chunkDataSize} bytes`;
  field.appendChild(size);

  // Stringifying every chunk up-front is expensive for large packfiles, and
  // most chunks are never inspected. The preview starts as a placeholder
  // and computes the full JSON only on first click.
  let cachedJson: string | null = null;
  const getJson = (): string => (cachedJson ??= stringifyChunk(chunk.data));

  field.appendChild(buildLazyPreview(getJson));
  field.appendChild(buildChunkActions(chunk, fileBaseName, getJson));
  return field;
}

function buildLazyPreview(getJson: () => string): HTMLPreElement {
  const preview = document.createElement("pre");
  preview.className = "pack-chunk-preview pack-chunk-preview-placeholder";
  preview.textContent = "Click to load JSON preview";
  preview.title = "Click to render the chunk as JSON";
  // After the placeholder class is removed, CSS turns on `user-select: all`
  // so the next click selects the whole preview ready for Ctrl+C.
  const expand = (): void => {
    preview.textContent = getJson();
    preview.classList.remove("pack-chunk-preview-placeholder");
    preview.title = "Click to select all, then Ctrl+C to copy";
    preview.removeEventListener("click", expand);
  };
  preview.addEventListener("click", expand);
  return preview;
}

function buildChunkActions(chunk: PackChunk, fileBaseName: string, getJson: () => string): HTMLDivElement {
  const actions = document.createElement("div");
  actions.className = "pack-chunk-actions";

  const logBtn = document.createElement("button");
  logBtn.textContent = "Log to console";
  logBtn.addEventListener("click", () => {
    T3D.Logger.log(T3D.Logger.TYPE_MESSAGE, "Logging", chunk.header.type, "chunk");

    console.log(chunk.data);
  });

  const dlBtn = document.createElement("button");
  dlBtn.textContent = "Download JSON";
  dlBtn.addEventListener("click", () => {
    triggerDownload(new Blob([getJson()], { type: "application/json" }), `${fileBaseName}.${chunk.header.type}.json`);
  });

  actions.append(logBtn, dlBtn);
  return actions;
}

/** JSON-serialise chunk data while gracefully handling shapes `JSON.stringify`
 *  refuses: BigInts, typed arrays, circular references, raw ArrayBuffers. */
function stringifyChunk(data: unknown): string {
  const seen = new WeakSet<object>();
  return JSON.stringify(
    data,
    (_key, value) => {
      if (typeof value === "bigint") return value.toString() + "n";
      if (value instanceof ArrayBuffer) return `[ArrayBuffer ${value.byteLength} bytes]`;
      // DataView has no numeric `length` so it can't round-trip as an array.
      if (value instanceof DataView) return `[DataView ${value.byteLength} bytes]`;
      if (ArrayBuffer.isView(value)) return Array.from(value as unknown as ArrayLike<number>);
      if (value !== null && typeof value === "object") {
        if (seen.has(value)) return "[Circular]";
        seen.add(value);
      }
      return value;
    },
    2
  );
}
