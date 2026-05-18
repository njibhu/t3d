import { triggerDownload } from "../util/download";
import { formatBytes } from "../util/format";

export interface SoundData {
  audioData: Uint8Array;
  length: number;
}

export class SoundView {
  private host: HTMLElement;
  private blobUrl?: string;
  private audio?: HTMLAudioElement;

  constructor(host: HTMLElement) {
    this.host = host;
    this.host.className = "view-pane padded";
  }

  render(data: SoundData, fileName: string): void {
    this.disposeUrl();
    this.host.replaceChildren();

    const wrap = document.createElement("div");
    wrap.className = "sound-view";

    const info = document.createElement("div");
    info.className = "info";
    info.innerHTML = `Length: ${data.length}s &middot; ${formatBytes(data.audioData.length)}`;
    wrap.appendChild(info);

    // The audioData buffer may live in a SharedArrayBuffer, which Blob's
    // typing refuses. Slicing copies into a plain ArrayBuffer.
    const blob = new Blob([data.audioData.slice().buffer as ArrayBuffer], { type: "audio/mpeg" });
    this.blobUrl = URL.createObjectURL(blob);

    this.audio = document.createElement("audio");
    this.audio.controls = true;
    this.audio.preload = "metadata";
    this.audio.src = this.blobUrl;
    wrap.appendChild(this.audio);

    const dlBtn = document.createElement("button");
    dlBtn.className = "download-btn";
    dlBtn.textContent = "Download MP3";
    dlBtn.addEventListener("click", () => triggerDownload(blob, `${fileName}.mp3`));
    wrap.appendChild(dlBtn);

    this.host.appendChild(wrap);
  }

  dispose(): void {
    this.disposeUrl();
  }

  private disposeUrl(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = "";
    }
    if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl);
      this.blobUrl = undefined;
    }
  }
}
