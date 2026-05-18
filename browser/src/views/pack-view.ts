import T3D from "t3d-lib";

export function renderPackView(host: HTMLElement, packfile: any): void {
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

    const logBtn = document.createElement("button");
    logBtn.textContent = "Log chunk data to console";
    logBtn.addEventListener("click", () => {
      T3D.Logger.log(T3D.Logger.TYPE_MESSAGE, "Logging", chunk.header.type, "chunk");
      // eslint-disable-next-line no-console
      console.log(chunk.data);
    });
    field.appendChild(logBtn);

    host.appendChild(field);
  }
}
