export interface SoundData {
  audioData: Uint8Array;
  length: number;
}

export class SoundView {
  private host: HTMLElement;
  private ctx?: AudioContext;
  private source?: AudioBufferSourceNode;

  constructor(host: HTMLElement) {
    this.host = host;
    this.host.className = "view-pane padded";
  }

  render(data: SoundData, fileName: string): void {
    this.host.replaceChildren();
    const wrap = document.createElement("div");
    wrap.className = "sound-view";

    const info = document.createElement("div");
    info.innerHTML = `Length: ${data.length} seconds<br/>Size: ${data.audioData.length} bytes`;
    wrap.appendChild(info);

    const controls = document.createElement("div");
    controls.className = "controls";

    const dlBtn = document.createElement("button");
    dlBtn.textContent = "Download MP3";
    dlBtn.addEventListener("click", () => {
      const blob = new Blob([data.audioData], { type: "octet/stream" });
      triggerDownload(blob, `${fileName}.mp3`);
    });

    const playBtn = document.createElement("button");
    playBtn.textContent = "Play";
    playBtn.addEventListener("click", () => this.play(data.audioData));

    const stopBtn = document.createElement("button");
    stopBtn.textContent = "Stop";
    stopBtn.addEventListener("click", () => this.stop());

    controls.append(dlBtn, playBtn, stopBtn);
    wrap.appendChild(controls);
    this.host.appendChild(wrap);
  }

  private play(audioData: Uint8Array): void {
    if (!this.ctx) this.ctx = new AudioContext();
    this.stop();
    const src = this.ctx.createBufferSource();
    src.connect(this.ctx.destination);
    /// decodeAudioData detaches the buffer — copy to be safe across replays
    const buf = audioData.slice().buffer;
    this.ctx.decodeAudioData(buf, (decoded) => {
      src.buffer = decoded;
      src.start();
    });
    this.source = src;
  }

  private stop(): void {
    try {
      this.source?.stop();
    } catch {
      /* ignore */
    }
  }

  dispose(): void {
    this.stop();
    this.ctx?.close().catch(() => {});
  }
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
