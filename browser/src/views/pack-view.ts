import T3D from "t3d-lib";

export function renderPackView(host: HTMLElement, packfile: any, fileBaseName: string): void {
  host.className = "view-pane padded";
  const heading = document.createElement("h2");
  heading.textContent = "Chunks";
  heading.style.color = "var(--t3d-accent)";
  host.replaceChildren(heading);

  for (const chunk of packfile.chunks) {
    const field = document.createElement("fieldset");
    field.className = "pack-chunk";

    const legend = document.createElement("legend");
    legend.textContent = chunk.header.type;
    field.appendChild(legend);

    const size = document.createElement("p");
    size.textContent = `Size: ${chunk.header.chunkDataSize} bytes`;
    field.appendChild(size);

    /// Serialise lazily — for large packfiles, stringifying every chunk
    /// up-front is expensive even when the user never looks at most of them.
    let cached: string | null = null;
    const getFull = (): string => {
      if (cached === null) cached = stringifyChunk(chunk.data);
      return cached;
    };

    const preview = document.createElement("pre");
    preview.className = "pack-chunk-preview pack-chunk-preview-placeholder";
    preview.textContent = "Click to load JSON preview";
    preview.title = "Click to render the chunk as JSON";
    /// First click: stringify + replace placeholder. The selection-all
    /// behaviour (user-select: all) kicks in once the placeholder class is
    /// gone, so a second click selects everything for Ctrl+C.
    const expand = (): void => {
      preview.textContent = getFull();
      preview.classList.remove("pack-chunk-preview-placeholder");
      preview.title = "Click to select all, then Ctrl+C to copy";
      preview.removeEventListener("click", expand);
    };
    preview.addEventListener("click", expand);
    field.appendChild(preview);

    const actions = document.createElement("div");
    actions.className = "pack-chunk-actions";

    const logBtn = document.createElement("button");
    logBtn.textContent = "Log to console";
    logBtn.addEventListener("click", () => {
      T3D.Logger.log(T3D.Logger.TYPE_MESSAGE, "Logging", chunk.header.type, "chunk");
      // eslint-disable-next-line no-console
      console.log(chunk.data);
    });
    actions.appendChild(logBtn);

    const dlBtn = document.createElement("button");
    dlBtn.textContent = "Download JSON";
    dlBtn.addEventListener("click", () => {
      const blob = new Blob([getFull()], { type: "application/json" });
      triggerDownload(blob, `${fileBaseName}.${chunk.header.type}.json`);
    });
    actions.appendChild(dlBtn);

    field.appendChild(actions);
    host.appendChild(field);
  }
}

/// Serialise chunk data to JSON, surviving BigInts, typed arrays, and circular refs.
function stringifyChunk(data: unknown): string {
  const seen = new WeakSet<object>();
  return JSON.stringify(
    data,
    (_key, value) => {
      if (typeof value === "bigint") return value.toString() + "n";
      if (value instanceof ArrayBuffer) return `[ArrayBuffer ${value.byteLength} bytes]`;
      /// Typed arrays serialise as plain number arrays so the JSON is usable.
      /// DataView is not iterable as numbers, so it keeps the opaque label.
      if (value instanceof DataView) return `[DataView ${value.byteLength} bytes]`;
      if (ArrayBuffer.isView(value)) {
        return Array.from(value as unknown as ArrayLike<number>);
      }
      if (value !== null && typeof value === "object") {
        if (seen.has(value)) return "[Circular]";
        seen.add(value);
      }
      return value;
    },
    2
  );
}

function triggerDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
