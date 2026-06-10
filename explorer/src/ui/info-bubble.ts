import { Component } from "../components/component.js";

const PROJECT_URL = "https://github.com/njibhu/t3d";
const GITHUB_ISSUES_URL = "https://github.com/njibhu/t3d/issues";
const THREE_URL = "https://threejs.org";

/**
 * A corner "i" button that toggles a small popover describing what the site is, how to get
 * in touch, and the ArenaNet copyright notice. Starts open as a first-run greeting; closes on
 * Esc, on a click outside, on a second click of the trigger, or via {@link close} once the
 * user gets to work (an archive is opened).
 */
export class InfoBubble extends Component<HTMLDivElement> {
  readonly root: HTMLDivElement;

  private readonly trigger: HTMLButtonElement;
  private readonly popover: HTMLDivElement;
  private open = false;
  private detachDismissers: (() => void) | null = null;

  constructor() {
    super();
    this.root = document.createElement("div");
    this.root.className = "info-bubble";

    this.trigger = document.createElement("button");
    this.trigger.type = "button";
    this.trigger.className = "info-bubble-trigger";
    this.trigger.setAttribute("aria-label", "About T3D Explorer");
    this.trigger.setAttribute("aria-expanded", "false");
    this.trigger.textContent = "i";
    this.listen(this.trigger, "click", () => this.setOpen(!this.open));
    this.root.appendChild(this.trigger);

    this.popover = document.createElement("div");
    this.popover.className = "info-popover";
    this.popover.setAttribute("role", "dialog");
    this.popover.setAttribute("aria-label", "About T3D Explorer");
    this.popover.innerHTML = `
      <span class="hud-kicker">About</span>
      <p>
        T3D Explorer lets you explore textured Guild Wars 2 map files in 3D, directly in your web
        browser. The purpose of this project is to allow a unique look into Tyria — the world of Guild Wars 2.
        Some of the graphics are still missing such as animations, lighting, and various visual effects which give Guild Wars 2 its immersive experience.
      </p>
      <div class="info-section">
        <h3>Contact</h3>
        <p>
          T3D Explorer is part of the <a href="${PROJECT_URL}" target="_blank" rel="noopener">T3D project</a>.
          If you have questions don't hesitate to contact me! If you encounter a bug,
          <a href="${GITHUB_ISSUES_URL}" target="_blank" rel="noopener">submit an issue on GitHub</a>.
          T3D is powered by <a href="${THREE_URL}" target="_blank" rel="noopener">three.js</a>.
        </p>
      </div>
      <div class="info-section info-copyright">
        <h3>ArenaNet copyright notice</h3>
        <p>
          © 2026 ArenaNet, LLC. All rights reserved. NCSOFT, the interlocking NC logo, ArenaNet,
          Guild Wars, Guild Wars Factions, Guild Wars Nightfall, Guild Wars: Eye of the North,
          Guild Wars 2, and all associated logos and designs are trademarks or registered trademarks
          of NCSOFT Corporation. All other trademarks are the property of their respective owners.
        </p>
      </div>`;
    this.root.appendChild(this.popover);

    // Make sure the global dismiss listeners can't outlive the component.
    this.onDispose(() => this.detachDismissers?.());

    // Greet first-time visitors with the popover already open.
    this.setOpen(true);
  }

  /** Close the popover if it's open (used when the user opens an archive). */
  close(): void {
    this.setOpen(false);
  }

  private setOpen(open: boolean): void {
    if (this.open === open) return;
    this.open = open;
    // Visibility is driven by the `.open` class so the popover can fade/slide via CSS rather
    // than snapping with the `hidden` attribute (which sets display:none and can't transition).
    this.root.classList.toggle("open", open);
    this.trigger.setAttribute("aria-expanded", String(open));

    if (open) {
      // While open, close on Esc. We deliberately don't dismiss on an outside click: the popover
      // is a first-run greeting that should stay put while the user picks/loads an archive (the
      // dropzone is an "outside" click) — it's closed explicitly via the trigger, Esc, or once
      // the archive has finished loading.
      const onKeyDown = (event: KeyboardEvent): void => {
        if (event.key === "Escape") this.setOpen(false);
      };
      document.addEventListener("keydown", onKeyDown);
      this.detachDismissers = () => {
        document.removeEventListener("keydown", onKeyDown);
      };
    } else {
      this.detachDismissers?.();
      this.detachDismissers = null;
    }
  }
}
