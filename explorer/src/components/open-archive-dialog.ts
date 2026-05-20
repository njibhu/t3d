import { ArchiveStore } from "../store/archive-store";

export function showOpenArchiveDialog(store: ArchiveStore): Promise<void> {
  return new Promise((resolve, reject) => {
    const dlg = document.createElement("dialog");
    dlg.className = "app-dialog";
    dlg.innerHTML = `
      <h2>Open a Guild Wars 2 .dat file</h2>
      <p>Select your local <code>Gw2.dat</code>. The first scan can take a while; subsequent loads can reuse the IndexedDB cache.</p>
      <input id="filepick" type="file" />
      <p class="dialog-progress" id="prog"></p>
      <div class="dialog-actions">
        <button type="button" id="cancel">Cancel</button>
      </div>
    `;
    document.body.appendChild(dlg);

    let settled = false;
    const finish = (err?: unknown): void => {
      if (settled) return;
      settled = true;
      dlg.close();
      dlg.remove();
      if (err) reject(err);
      else resolve();
    };

    const input = dlg.querySelector<HTMLInputElement>("#filepick")!;
    const prog = dlg.querySelector<HTMLElement>("#prog")!;
    const cancelBtn = dlg.querySelector<HTMLButtonElement>("#cancel")!;

    cancelBtn.addEventListener("click", () => finish(new Error("cancelled")));
    dlg.addEventListener("cancel", () => finish(new Error("cancelled")));

    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;
      input.disabled = true;
      cancelBtn.disabled = true;
      prog.textContent = "Opening archive...";

      try {
        await store.openArchive(file, (label, pct) => {
          prog.textContent = `${label}: ${Math.round(pct)}%`;
        });
        finish();
      } catch (err) {
        prog.textContent = `Failed: ${(err as Error).message}`;
        input.disabled = false;
        cancelBtn.disabled = false;
      }
    });

    dlg.showModal();
  });
}
