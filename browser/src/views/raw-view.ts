export function renderRawView(host: HTMLElement, rawString: string): void {
  host.className = "view-pane padded";
  const pre = document.createElement("div");
  pre.className = "raw-view";
  pre.textContent = rawString;
  host.replaceChildren(pre);
}
