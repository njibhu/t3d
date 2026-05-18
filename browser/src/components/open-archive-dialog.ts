import { ArchiveStore } from "../store/archive-store";

export function showOpenArchiveDialog(store: ArchiveStore): Promise<void> {
  return new Promise((resolve, reject) => {
    const dlg = document.createElement("dialog");
    dlg.innerHTML = `
      <h2>Open a Guild Wars 2 .dat file</h2>
      <p>Select your local <code>Gw2.dat</code>. The first scan can take a couple minutes; subsequent loads are cached in IndexedDB.</p>
      <input id="filepick" type="file" />
      <p class="progress" id="prog"></p>
    `;
    document.body.appendChild(dlg);
    dlg.showModal();

    const input = dlg.querySelector<HTMLInputElement>("#filepick")!;
    const prog = dlg.querySelector<HTMLElement>("#prog")!;

    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;
      input.disabled = true;
      prog.textContent = "Opening archive…";
      try {
        await store.openArchive(file, (label, pct) => {
          prog.textContent = `${label}: ${pct}%`;
        });
        dlg.close();
        dlg.remove();
        resolve();
      } catch (err) {
        prog.textContent = `Failed: ${(err as Error).message}`;
        input.disabled = false;
        reject(err);
      }
    });
  });
}
