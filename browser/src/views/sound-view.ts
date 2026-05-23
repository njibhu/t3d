import { triggerDownload } from "../util/download";
import { formatBytes } from "../util/format";

export interface SoundData {
  audioData: Uint8Array;
  length: number;
}

export interface SoundEntry {
  data: SoundData;
  fileName: string;
  title?: string;
  meta?: string;
}

export class SoundView {
  private host: HTMLElement;
  private activeUrls: string[] = [];
  private activeAudio: HTMLAudioElement[] = [];

  constructor(host: HTMLElement) {
    this.host = host;
    this.host.className = "view-pane padded";
  }

  render(entries: SoundEntry[]): void {
    this.disposeMedia();
    this.host.replaceChildren();

    const wrap = document.createElement("div");
    wrap.className = "sound-view";

    if (entries.length === 0) {
      const empty = document.createElement("div");
      empty.className = "info";
      empty.textContent = "No embedded audio tracks found.";
      wrap.appendChild(empty);
      this.host.appendChild(wrap);
      return;
    }

    for (const entry of entries) {
      wrap.appendChild(this.buildEntry(entry));
    }

    this.host.appendChild(wrap);
  }

  dispose(): void {
    this.disposeMedia();
  }

  private buildEntry(entry: SoundEntry): HTMLElement {
    const card = document.createElement("section");
    card.className = "sound-entry";

    if (entry.title) {
      const title = document.createElement("h3");
      title.className = "sound-entry-title";
      title.textContent = entry.title;
      card.appendChild(title);
    }

    const info = document.createElement("div");
    info.className = "info";
    const parts = [`Length: ${entry.data.length}s`, formatBytes(entry.data.audioData.length)];
    if (entry.meta) parts.unshift(entry.meta);
    info.innerHTML = parts.join(" &middot; ");
    card.appendChild(info);

    // The audioData buffer may live in a SharedArrayBuffer, which Blob's
    // typing refuses. Slicing copies into a plain ArrayBuffer.
    const blob = new Blob([entry.data.audioData.slice().buffer as ArrayBuffer], { type: "audio/mpeg" });
    const blobUrl = URL.createObjectURL(blob);
    this.activeUrls.push(blobUrl);

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "metadata";
    audio.src = blobUrl;
    this.activeAudio.push(audio);
    card.appendChild(audio);

    const dlBtn = document.createElement("button");
    dlBtn.className = "download-btn";
    dlBtn.textContent = "Download MP3";
    dlBtn.addEventListener("click", () => triggerDownload(blob, `${entry.fileName}.mp3`));
    card.appendChild(dlBtn);

    return card;
  }

  private disposeMedia(): void {
    for (const audio of this.activeAudio) {
      audio.pause();
      audio.src = "";
    }
    this.activeAudio = [];

    for (const blobUrl of this.activeUrls) {
      URL.revokeObjectURL(blobUrl);
    }
    this.activeUrls = [];
  }
}
