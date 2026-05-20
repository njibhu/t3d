export function showAboutDialog(): void {
  const dlg = document.createElement("dialog");
  dlg.className = "app-dialog about-dialog";
  dlg.innerHTML = `
    <h2>About T3D Explorer</h2>
    <p>T3D Explorer lets you inspect textured Guild Wars 2 map files in 3D directly in your browser. The goal is still the same: keep the exploration workflow intact while modernising the shell around it.</p>
    <p>The project is part of <a href="https://github.com/njibhu/t3d/" target="_blank" rel="noreferrer">the T3D repository</a>. Bug reports and follow-up discussion still belong there.</p>
    <div class="about-grid">
      <section>
        <h3>Contact</h3>
        <ul>
          <li>GitHub issues: <a href="https://github.com/njibhu/t3d/issues" target="_blank" rel="noreferrer">njibhu/t3d</a></li>
          <li>Email: ev@njibhu.eu</li>
          <li>In-game: Aquila.4832</li>
          <li>Reddit: /u/Njibhu_</li>
        </ul>
      </section>
      <section>
        <h3>Powered by</h3>
        <ul>
          <li><a href="https://threejs.org/" target="_blank" rel="noreferrer">three.js</a></li>
          <li><a href="https://developer.mozilla.org/docs/Web/API/IndexedDB_API" target="_blank" rel="noreferrer">IndexedDB</a></li>
          <li><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a></li>
        </ul>
      </section>
    </div>
    <section class="legal-copy">
      <h3>ArenaNet copyright notice</h3>
      <p>© 2018 ArenaNet, LLC. All rights reserved. NCSOFT, the interlocking NC logo, ArenaNet, Guild Wars, Guild Wars Factions, Guild Wars Nightfall, Guild Wars: Eye of the North, Guild Wars 2, and all associated logos and designs are trademarks or registered trademarks of NCSOFT Corporation. All other trademarks are the property of their respective owners.</p>
    </section>
    <div class="dialog-actions">
      <button type="button" id="closeAbout">Close</button>
    </div>
  `;
  document.body.appendChild(dlg);
  dlg.querySelector<HTMLButtonElement>("#closeAbout")!.addEventListener("click", () => {
    dlg.close();
    dlg.remove();
  });
  dlg.addEventListener("close", () => dlg.remove());
  dlg.showModal();
}
