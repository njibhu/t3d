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

    /// Native <audio controls> gives us play/pause, scrubbable progress,
    /// time display and volume for free.
    /// Copy into a plain ArrayBuffer so the Blob ctor's BlobPart typing is happy
    /// (the audioData Uint8Array may be backed by a SharedArrayBuffer).
    const buf = data.audioData.slice().buffer as ArrayBuffer;
    const blob = new Blob([buf], { type: "audio/mpeg" });
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

  dispose(): void {
    this.disposeUrl();
  }
}

function formatBytes(n: number): string {
  if (n < 1024) return n + " B";
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB";
  return (n / 1024 / 1024).toFixed(2) + " MB";
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
